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
  /* تفعيل النسخة الجديدة فوراً دون انتظار إغلاق الصفحات */
  self.skipWaiting();
});

/* تفعيل: حذف أي كاشات قديمة */
self.addEventListener("activate", function (event) {
  event.waitUntil(
    (async function () {
      /* جلب أسماء كل الصناديق (الكاشات) الموجودة */
      const names = await caches.keys();
      await Promise.all(
        names
          .filter(function (n) {
            return n !== CACHE_NAME; /* كل كاش ليس النسخة الحالية */
          })
          .map(function (n) {
            return caches.delete(n); /* احذفه */
          }),
      );
      /* السيطرة على الصفحات المفتوحة حالياً دون إعادة تحميل */
      await self.clients.claim();
    })(),
  );
});

/* جلب الصورة وتخزينها (CORS أولاً ثم Opaque كبديل) */
async function fetchAndCache(url, originalRequest) {
  /* فتح الكاش (أو إنشاؤه إن لم يوجد) */
  const cache = await caches.open(CACHE_NAME);

  /* مكررة: صورة محمّلة للتو؟ تخطَّ وأعِدها كما هي */
  const already = await cache.match(url, { ignoreVary: true });
  if (already) return already;

  /* متغير الاستجابة الناتجة من الشبكة */
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
      return null; /* فشل الجلب تماماً */
    }
  }

  /* إن نجح الجلب: خزّن نسخة في الكاش (clone لأن الاستجابة تُستهلك مرة واحدة) */
  if (res && (res.ok || res.type === "opaque")) {
    cache.put(url, res.clone()).catch(function () {
      /* تجاهل أخطاء التخزين (مثل امتلاء المساحة) */
    });
  }
  return res;
}

/* اعتراض طلبات الصور: الكاش أولاً */
self.addEventListener("fetch", function (event) {
  const req = event.request;
  if (req.method !== "GET") return; /* نخزّن طلبات القراءة فقط */

  /* تحويل الرابط إلى كائن URL لتحليل النطاق والامتداد */
  let url;
  try {
    url = new URL(req.url);
  } catch (e) {
    return;
  }

  /* هل النطاق من نطاقات الصور المسموح بها؟ */
  const isImageHost = IMAGE_HOSTS.indexOf(url.hostname) !== -1;
  /* هل الامتداد امتداد صورة؟ */
  const isImageFile = /\.(jpe?g|png|webp|gif|avif)$/i.test(url.pathname);

  /* هل الطلب لصورة؟ نتحقق بالنوع أو النطاق أو الامتداد */
  if (req.destination === "image" || isImageHost || isImageFile) {
    event.respondWith(
      (async function () {
        /* ابحث في الكاش أولاً */
        const cached = await caches
          .open(CACHE_NAME)
          .then(function (c) {
            return c.match(req, { ignoreVary: true });
          });
        /* وُجدت في الكاش؟ أعِدها فوراً (بدون إنترنت) */
        if (cached) return cached;
        /* غير موجودة في الكاش: اجلبها من الشبكة وخزّنها */
        const res = await fetchAndCache(req.url, req);
        return res || Response.error(); /* فشل كلي: أعِد خطأ */
      })(),
    );
  }
});

/* تجهيز مسبق عند الطلب من الصفحة */
self.addEventListener("message", function (event) {
  /* نتجاهل أي رسالة ليست طلب تجهيز صور */
  if (!event.data || event.data.type !== "PRECACHE_IMAGES") return;

  /* قائمة روابط الصور القادمة من الصفحة */
  const urls = event.data.urls || [];
  event.waitUntil(
    (async function () {
      const cache = await caches.open(CACHE_NAME);
      /* عدّاد الصور التي خُزّنت حديثاً */
      let added = 0;

      /* حلقة تسلسلية: صورة واحدة في كل مرة حتى لا يختنق الاتصال */
      for (let i = 0; i < urls.length; i++) {
        const u = urls[i];
        /* تخطَّ الصور المخزنة مسبقاً */
        const exists = await cache.match(u, { ignoreVary: true });
        if (exists) continue;
        const res = await fetchAndCache(u, null);
        /* زيادة العدّاد عند نجاح التخزين */
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