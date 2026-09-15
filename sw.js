/* =====================================================
   Service Worker — كاش صور المعرض داخل المتصفح
   الاستراتيجية: الكاش أولاً (Cache-First) للصور
   بعد أول زيارة تُفتح الصور فوراً بدون إعادة تحميل
   ===================================================== */

/* اسم الكاش — غيّر الإصدار (v2, v3...) عند تغيير الصور */
const CACHE_NAME = "elite-cars-images-v1";

/* النطاقات التي تُخزَّن صورها في المتصفح */
const IMAGE_HOSTS = [
  "thumb.wikimedia.org",
  "upload.wikimedia.org",
  "images.pexels.com",
];

/* تثبيت: لا ننتظر شيئاً — الكاش يتجمّع تدريجياً */
self.addEventListener("install", function () {
  self.skipWaiting();
});

/* تفعيل: حذف أي كاشات قديمة */
self.addEventListener("activate", function (event) {
  event.waitUntil(
    (async function () {
      const names = await caches.keys();
      await Promise.all(
        names
          .filter(function (n) {
            return n !== CACHE_NAME;
          })
          .map(function (n) {
            return caches.delete(n);
          }),
      );
      await self.clients.claim();
    })(),
  );
});

/* جلب الصورة وتخزينها (CORS أولاً ثم Opaque كبديل) */
async function fetchAndCache(url, originalRequest) {
  const cache = await caches.open(CACHE_NAME);

  /* مكرر: صورة محمّلة للتو؟ تخطَّ */
  const already = await cache.match(url, { ignoreVary: true });
  if (already) return already;

  let res = null;
  try {
    /* محاولة CORS: استجابة نظيفة وقياس حجم حقيقي */
    res = await fetch(url, { mode: "cors" });
  } catch (e) {
    res = null;
  }

  /* بديل: الطلب الأصلي (no-cors → استجابة opaque) */
  if (!res || !res.ok) {
    try {
      res = await fetch(originalRequest || url);
    } catch (e) {
      return null;
    }
  }

  if (res && (res.ok || res.type === "opaque")) {
    cache.put(url, res.clone()).catch(function () {});
  }
  return res;
}

/* اعتراض طلبات الصور: الكاش أولاً */
self.addEventListener("fetch", function (event) {
  const req = event.request;
  if (req.method !== "GET") return;

  let url;
  try {
    url = new URL(req.url);
  } catch (e) {
    return;
  }

  const isImageHost = IMAGE_HOSTS.indexOf(url.hostname) !== -1;
  const isImageFile = /\.(jpe?g|png|webp|gif|avif)$/i.test(url.pathname);

  if (req.destination === "image" || isImageHost || isImageFile) {
    event.respondWith(
      (async function () {
        const cached = await caches
          .open(CACHE_NAME)
          .then(function (c) {
            return c.match(req, { ignoreVary: true });
          });
        if (cached) return cached;
        const res = await fetchAndCache(req.url, req);
        return res || Response.error();
      })(),
    );
  }
});

/* تجهيز مسبق عند الطلب من الصفحة */
self.addEventListener("message", function (event) {
  if (!event.data || event.data.type !== "PRECACHE_IMAGES") return;

  const urls = event.data.urls || [];
  event.waitUntil(
    (async function () {
      const cache = await caches.open(CACHE_NAME);
      let added = 0;

      /* تحميل تسلسلي لطيف على الإنترنت البطيء */
      for (let i = 0; i < urls.length; i++) {
        const u = urls[i];
        const exists = await cache.match(u, { ignoreVary: true });
        if (exists) continue;
        const res = await fetchAndCache(u, null);
        if (res) added++;
      }

      /* إبلاغ الصفحات بنتيجة التجهيز */
      const clients = await self.clients.matchAll();
      clients.forEach(function (c) {
        c.postMessage({ type: "PRECACHE_DONE", added: added });
      });
    })(),
  );
});