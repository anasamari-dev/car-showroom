/* =====================================================
   ملف JavaScript - معرض النخبة للسيارات
   ===================================================== */

/* ========== 1) بيانات السيارات (مصفوفة + كائنات) ========== */
const cars = [
  {
    id: 1,
    brand: "lexus",
    name: "لكزس LX 600",
    price: 95000,
    image: "https://picsum.photos/seed/l1/600/400",
    desc: "سيارة فاخرة SUV",
  },
  {
    id: 2,
    brand: "toyota",
    name: "تويوتا كامري",
    price: 32000,
    image: "https://picsum.photos/seed/t1/600/400",
    desc: "سيدان عائلية",
  },
  {
    id: 3,
    brand: "bmw",
    name: "BMW M5",
    price: 110000,
    image: "https://picsum.photos/seed/b1/600/400",
    desc: "رياضية فاخرة",
  },
  {
    id: 4,
    brand: "mercedes",
    name: "مرسيدس S-Class",
    price: 120000,
    image: "https://picsum.photos/seed/m1/600/400",
    desc: "فخامة ألمانية",
  },
  {
    id: 5,
    brand: "audi",
    name: "أودي A8",
    price: 95000,
    image: "https://picsum.photos/seed/a1/600/400",
    desc: "تكنولوجيا متقدمة",
  },
  {
    id: 6,
    brand: "lexus",
    name: "لكزس ES 350",
    price: 45000,
    image: "https://picsum.photos/seed/l2/600/400",
    desc: "أنيقة وعملية",
  },
  {
    id: 7,
    brand: "toyota",
    name: "تويوتا لاند كروزر",
    price: 85000,
    image: "https://picsum.photos/seed/t2/600/400",
    desc: "دفع رباعي",
  },
  {
    id: 8,
    brand: "bmw",
    name: "BMW X7",
    price: 105000,
    image: "https://picsum.photos/seed/b2/600/400",
    desc: "SUV فاخرة",
  },
  {
    id: 9,
    brand: "mercedes",
    name: "مرسيدس G-Class",
    price: 140000,
    image: "https://picsum.photos/seed/m2/600/400",
    desc: "أيقونة الفخامة",
  },
  {
    id: 10,
    brand: "audi",
    name: "أودي Q8",
    price: 75000,
    image: "https://picsum.photos/seed/a2/600/400",
    desc: "كوبيه SUV",
  },
];

/* ========== 2) عرض السيارات ========== */
function displayCars(carList) {
  /* الحصول على شبكة السيارات */
  const grid = document.getElementById("carsGrid");
  /* حماية: الخروج إذا لم توجد الشبكة */
  if (!grid) return;

  let html = "";

  /* حلقة forEach للمرور على كل سيارة */
  carList.forEach(function (car) {
    /* بناء بطاقة HTML */
    html += `
            <div class="car-card">
                <img src="${car.image}" alt="${car.name}" width="600" height="400" loading="lazy" decoding="async">
                <div class="car-info">
                    <h3>${car.name}</h3>
                    <p class="car-brand">${car.desc}</p>
                    <p class="price">$${car.price.toLocaleString()}</p>
                    <button class="btn-primary" onclick="addToCart(${car.id})">🛒 احجز الآن</button>
                    <button class="filter-btn" onclick="openModal(${car.id})">👁️ التفاصيل</button>
                </div>
            </div>
        `;
  });

  /* عرض البطاقات أو رسالة عدم وجود نتائج */
  if (carList.length === 0) {
    grid.innerHTML =
      "<p style='text-align:center;grid-column:1/-1;'>لا توجد سيارات</p>";
  } else {
    grid.innerHTML = html;
  }
}

/* عرض جميع السيارات عند التحميل */
displayCars(cars);

/* ========== 3) البحث ========== */
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

function searchCars(keyword) {
  const lower = keyword.toLowerCase();
  /* تصفية السيارات حسب الاسم أو الوصف */
  const results = cars.filter(function (car) {
    return (
      car.name.toLowerCase().includes(lower) ||
      car.desc.toLowerCase().includes(lower)
    );
  });
  displayCars(results);
}

/* حماية: تشغيل البحث فقط إذا وجد */
if (searchInput && searchBtn) {
  searchInput.addEventListener("input", function () {
    searchCars(searchInput.value);
  });
  searchBtn.addEventListener("click", function () {
    searchCars(searchInput.value);
  });
}

/* ========== 4) الفلترة حسب العلامة ========== */
const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    /* إزالة التنشيط من جميع الأزرار */
    filterBtns.forEach(function (b) {
      b.classList.remove("active");
    });
    /* تنشيط الزر الحالي */
    btn.classList.add("active");

    const brand = btn.dataset.brand;

    if (brand === "all") {
      displayCars(cars);
    } else {
      /* تصفية حسب العلامة */
      const filtered = cars.filter(function (car) {
        return car.brand === brand;
      });
      displayCars(filtered);
    }
  });
});

/* ========== 5) السلايدر ========== */
const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("nextSlide");
const prevBtn = document.getElementById("prevSlide");

let currentSlide = 0;
let slideInterval;

function showSlide(index) {
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  slides.forEach(function (slide) {
    slide.classList.remove("active");
  });
  slides[currentSlide].classList.add("active");
}

function startAutoSlide() {
  slideInterval = setInterval(function () {
    showSlide(currentSlide + 1);
  }, 5000);
}

function stopAutoSlide() {
  clearInterval(slideInterval);
}

/* حماية: تشغيل السلايدر فقط إذا وجد */
if (nextBtn && prevBtn) {
  nextBtn.addEventListener("click", function () {
    stopAutoSlide();
    showSlide(currentSlide + 1);
    startAutoSlide();
  });

  prevBtn.addEventListener("click", function () {
    stopAutoSlide();
    showSlide(currentSlide - 1);
    startAutoSlide();
  });

  startAutoSlide();
}

/* ========== 6) الوضع الليلي ========== */
const darkModeBtn = document.getElementById("darkModeBtn");
const savedDarkMode = localStorage.getItem("darkMode");
let isDarkMode = savedDarkMode === "true";

/* تطبيق/إزالة الوضع الليلي وتحديث الأيقونة والتخزين */
function applyDarkMode(enabled) {
  isDarkMode = enabled;
  document.body.classList.toggle("dark-mode", enabled);
  localStorage.setItem("darkMode", enabled ? "true" : "false");

  if (darkModeBtn) {
    darkModeBtn.textContent = enabled ? "☀️" : "🌙";
    darkModeBtn.setAttribute(
      "aria-label",
      enabled ? "تفعيل الوضع النهاري" : "تفعيل الوضع الليلي",
    );
  }
}

/* التطبيق الأولي عند تحميل الصفحة (مع حماية إذا لم يوجد الزر) */
applyDarkMode(isDarkMode);
/* إزالة الوميض المؤقت المطبق من head */
document.documentElement.classList.remove("dark-mode-pending");

if (darkModeBtn) {
  darkModeBtn.addEventListener("click", function () {
    applyDarkMode(!isDarkMode);
  });
}

/* ========== 7) زر العودة للأعلى ========== */
const backToTopBtn = document.getElementById("backToTop");

if (backToTopBtn) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ========== 8) السلة ========== */
let cart = [];

function addToCart(carId) {
  const car = cars.find(function (c) {
    return c.id === carId;
  });

  const existing = cart.find(function (item) {
    return item.id === carId;
  });

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: car.id,
      name: car.name,
      price: car.price,
      quantity: 1,
    });
  }

  updateCartCount();
  saveCart();
  showNotification("✅ تمت الحجز: " + car.name);
}

function updateCartCount() {
  const countEl = document.getElementById("cartCount");
  if (!countEl) return;

  const total = cart.reduce(function (sum, item) {
    return sum + item.quantity;
  }, 0);

  countEl.textContent = total;
}

function calculateTotal() {
  return cart.reduce(function (sum, item) {
    return sum + item.price * item.quantity;
  }, 0);
}

const cartBtn = document.getElementById("cartBtn");

if (cartBtn) {
  cartBtn.addEventListener("click", openCartModal);
}

/* ========== 9) حفظ السلة ========== */
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
  const saved = localStorage.getItem("cart");
  if (saved) {
    try {
      cart = JSON.parse(saved);
    } catch (e) {
      cart = [];
    }
  }
  updateCartCount();
}

loadCart();

/* ========== 10) الإشعارات ========== */
function showNotification(message, type) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";

  if (type === "error") {
    toast.classList.add("error");
  }

  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(function () {
    toast.classList.add("show");
  }, 10);

  setTimeout(function () {
    toast.classList.remove("show");
    setTimeout(function () {
      toast.remove();
    }, 300);
  }, 3000);
}

/* ========== 11) المؤقت التنازلي ========== */
const savedEndDate = localStorage.getItem("offerEndDate");
let offerEndDate;

if (!savedEndDate) {
  offerEndDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);
  localStorage.setItem("offerEndDate", offerEndDate.getTime());
} else {
  offerEndDate = new Date(Number(savedEndDate));
}

function updateCountdown() {
  const now = new Date();
  const diff = offerEndDate - now;

  if (diff <= 0) {
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0",
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0",
  );
}

let countdownInterval;

if (document.getElementById("days")) {
  countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();
}

/* ========== 12) النافذة المنبثقة ========== */
const modal = document.getElementById("carModal");
const closeModal = document.querySelector(".close-modal");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalBrand = document.getElementById("modalBrand");
const modalDesc = document.getElementById("modalDesc");
const modalPrice = document.getElementById("modalPrice");
const modalAddToCart = document.getElementById("modalAddToCart");

let currentModalId = null;

function openModal(carId) {
  const car = cars.find(function (c) {
    return c.id === carId;
  });

  if (!car) return;

  currentModalId = carId;
  modalImage.src = car.image;
  modalName.textContent = car.name;
  modalBrand.textContent = car.desc;
  modalDesc.textContent = car.desc;
  modalPrice.textContent = "$" + car.price.toLocaleString();

  modal.classList.add("show");
}

function closeMyModal() {
  modal.classList.remove("show");
  currentModalId = null;
}

if (closeModal) {
  closeModal.addEventListener("click", closeMyModal);
}

if (modal) {
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeMyModal();
    }
  });
}

if (modalAddToCart) {
  modalAddToCart.addEventListener("click", function () {
    if (currentModalId !== null) {
      addToCart(currentModalId);
      closeMyModal();
    }
  });
}

/* ========== 13) نافذة السلة ========== */
function createCartModal() {
  const cartModal = document.createElement("div");
  cartModal.id = "cartModal";
  cartModal.className = "modal";

  cartModal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal" id="closeCartModal">&times;</span>
            <h2> حجزك</h2>
            <div id="cartItems" class="cart-items"></div>
            <div class="cart-total">الإجمالي: <span id="cartTotal">$0</span></div>
            <div class="cart-actions">
                <button id="checkoutBtn" class="btn-primary">✅ إتمام الحجز</button>
                <button id="clearCartBtn" class="filter-btn" style="border-color:var(--primary);color:var(--primary);">🗑️ إلغاء</button>
            </div>
        </div>
    `;

  document.body.appendChild(cartModal);
  return cartModal;
}

const cartModal = createCartModal();

function openCartModal() {
  const container = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");
  const clearBtn = document.getElementById("clearCartBtn");
  const checkoutBtn = document.getElementById("checkoutBtn");

  if (cart.length === 0) {
    container.innerHTML = "<p> سلتك فارغة</p>";
    clearBtn.style.display = "none";
    checkoutBtn.style.display = "none";
  } else {
    let html = "";
    cart.forEach(function (item) {
      html += `
                <div class="cart-item">
                    <span>${item.name}</span>
                    <span>× ${item.quantity}</span>
                    <span>$${(item.price * item.quantity).toLocaleString()}</span>
                </div>
            `;
    });
    container.innerHTML = html;
    clearBtn.style.display = "inline-block";
    checkoutBtn.style.display = "inline-block";
  }

  totalEl.textContent = "$" + calculateTotal().toLocaleString();
  cartModal.classList.add("show");
}

document
  .getElementById("closeCartModal")
  .addEventListener("click", function () {
    cartModal.classList.remove("show");
  });

cartModal.addEventListener("click", function (e) {
  if (e.target === cartModal) {
    cartModal.classList.remove("show");
  }
});

document.getElementById("clearCartBtn").addEventListener("click", function () {
  cart = [];
  saveCart();
  updateCartCount();
  showNotification("🗑️ تم إلغاء الحجز");
  openCartModal();
});

document.getElementById("checkoutBtn").addEventListener("click", function () {
  if (cart.length === 0) {
    showNotification("🚗 أضف سيارات أولاً", "error");
    return;
  }

  const total = calculateTotal();
  localStorage.setItem(
    "lastOrder",
    JSON.stringify({
      total: total,
      date: new Date().toLocaleString("ar-YE"),
    }),
  );

  cart = [];
  saveCart();
  updateCartCount();
  cartModal.classList.remove("show");
  showNotification("✅ تم الحجز بنجاح! الإجمالي: $" + total.toLocaleString());
});
/* ========== 14) صفحة من نحن: الساعة + عرض المزيد ========== */
const liveTime = document.getElementById("liveTime");
const liveDate = document.getElementById("liveDate");

/* حماية: تشغيل الساعة فقط إذا وُجدت */
if (liveTime && liveDate) {
  function updateClock() {
    const now = new Date();
    liveTime.textContent = now.toLocaleTimeString("ar-YE");
    liveDate.textContent = now.toLocaleDateString("ar-YE", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  updateClock();
  setInterval(updateClock, 1000);
}

/* زر عرض المزيد */
const showMoreBtn = document.getElementById("showMoreBtn");
const moreContent = document.getElementById("moreContent");

if (showMoreBtn && moreContent) {
  showMoreBtn.addEventListener("click", function () {
    moreContent.classList.toggle("show");

    if (moreContent.classList.contains("show")) {
      showMoreBtn.textContent = "🙈 إخفاء";
    } else {
      showMoreBtn.textContent = "👁️ عرض المزيد";
    }
  });
}

/* تأثير الماوس على بطاقات الإحصائيات */
const statCards = document.querySelectorAll(".stat-card");

statCards.forEach(function (card) {
  card.addEventListener("mouseover", function () {
    card.style.backgroundColor = "var(--primary)";
    card.style.color = "white";
  });

  card.addEventListener("mouseout", function () {
    card.style.backgroundColor = "";
    card.style.color = "";
  });
});

/* ========== 15) صفحة اتصل بنا: التحقق من النموذج ========== */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const messageInput = document.getElementById("message");

  function showError(el, msg) {
    el.textContent = msg;
  }

  function clearError(el) {
    el.textContent = "";
  }

  function validateName() {
    const value = nameInput.value.trim();
    const errorEl = document.getElementById("nameError");
    if (value === "") {
      showError(errorEl, "⚠️ الاسم مطلوب");
      return false;
    }
    if (value.length < 3) {
      showError(errorEl, "⚠️ الاسم 3 أحرف على الأقل");
      return false;
    }
    clearError(errorEl);
    return true;
  }

  function validateEmail() {
    const value = emailInput.value.trim();
    const errorEl = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value === "") {
      showError(errorEl, "⚠️ البريد مطلوب");
      return false;
    }
    if (!emailRegex.test(value)) {
      showError(errorEl, "⚠️ البريد غير صحيح");
      return false;
    }
    clearError(errorEl);
    return true;
  }

  function validatePhone() {
    const value = phoneInput.value.trim();
    const errorEl = document.getElementById("phoneError");
    const phoneRegex = /^[0-9]{7,15}$/;
    if (value === "") {
      showError(errorEl, "⚠️ الهاتف مطلوب");
      return false;
    }
    if (!phoneRegex.test(value)) {
      showError(errorEl, "⚠️ أدخل رقم هاتف صحيح");
      return false;
    }
    clearError(errorEl);
    return true;
  }

  function validateMessage() {
    const value = messageInput.value.trim();
    const errorEl = document.getElementById("messageError");
    if (value === "") {
      showError(errorEl, "⚠️ الرسالة مطلوبة");
      return false;
    }
    if (value.length < 10) {
      showError(errorEl, "⚠️ الرسالة 10 أحرف على الأقل");
      return false;
    }
    clearError(errorEl);
    return true;
  }

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isMessageValid = validateMessage();

    if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
      showNotification("✅ تم إرسال رسالتك بنجاح!");
      contactForm.reset();
    } else {
      showNotification("❌ يرجى تصحيح الحقول", "error");
    }
  });
}

/* ========== 16) صفحة السيارات: الفرز ========== */
let currentCars = cars;

const sortSelect = document.getElementById("sortSelect");

if (sortSelect) {
  sortSelect.addEventListener("change", function () {
    const sorted = currentCars.slice();
    const value = sortSelect.value;

    if (value === "price-asc") {
      sorted.sort(function (a, b) {
        return a.price - b.price;
      });
    } else if (value === "price-desc") {
      sorted.sort(function (a, b) {
        return b.price - a.price;
      });
    } else if (value === "name") {
      sorted.sort(function (a, b) {
        return a.name.localeCompare(b.name, "ar");
      });
    }

    displayCars(sorted);
  });
}

/* تحديث currentCars عند الفلترة والبحث */
const originalDisplayCars = displayCars;
displayCars = function (carList) {
  currentCars = carList;
  originalDisplayCars(carList);
};

/* ========== 17) عرض اسم المستخدم في الشريط ========== */
const savedUserName = localStorage.getItem("userName");

if (savedUserName) {
  const navActions = document.querySelector(".nav-actions");
  if (navActions) {
    const userChip = document.createElement("span");
    userChip.className = "user-chip";
    userChip.textContent = "👋 مرحباً، " + savedUserName;
    navActions.appendChild(userChip);
  }

  const loginLink = document.querySelector('.nav-links a[href="login.php"]');
  if (loginLink) {
    loginLink.textContent = "خروج 🚪";
    loginLink.href = "php/logout.php";
  }

  const welcomeBack = document.getElementById("welcomeBack");
  if (welcomeBack) {
    welcomeBack.textContent = "مرحباً بعودتك، " + savedUserName + "! 👋";
  }

  const nowParams = new URLSearchParams(window.location.search);
  if (nowParams.get("login") === "1") {
    showNotification("✅ تم تسجيل الدخول! مرحباً " + savedUserName);
  }
}
