<?php
/* =====================================================
   صفحة تسجيل الدخول
   ===================================================== */

/* تضمين ملف الاتصال بالقاعدة */
require __DIR__ . '/php/db.php';

/* بدء الجلسة */
session_start();

/* رسالة الترحيب أو الخطأ */
$message = "";

/* شرط: حساب جديد تم إنشاؤه */
if (isset($_GET["registered"])) {
    $message = "✅ تم إنشاء حسابك! سجّل دخولك الآن";
} elseif (isset($_GET["error"])) {
    /* بيانات خاطئة */
    $message = "⚠️ البريد أو كلمة المرور غير صحيحة";
} elseif (isset($_GET["logout"])) {
    /* تم تسجيل الخروج */
    $message = "👋 تم تسجيل خروجك";
}

/* معالجة الإرسال */
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    
    /* قراءة البيانات */
    $email = trim($_POST["email"] ?? "");
    $password = $_POST["password"] ?? "";
    
    /* البحث عن المستخدم */
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch();
    
    /* شرط: المستخدم موجود وكلمة المرور صحيحة */
    if ($user && password_verify($password, $user["password"])) {
        
        /* حفظ بيانات المستخدم في الجلسة */
        $_SESSION["user_id"] = $user["id"];
        $_SESSION["user_name"] = $user["name"];
        
        /* حفظ في localStorage للعرض في كل الصفحات */
        echo "<script>
            localStorage.setItem('userName', " . json_encode($user["name"], JSON_UNESCAPED_UNICODE) . ");
            localStorage.setItem('userEmail', " . json_encode($user["email"], JSON_UNESCAPED_UNICODE) . ");
            location.href = 'index.html?login=1';
        </script>";
        exit;
        
    } else {
        /* بيانات خاطئة */
        header("Location: login.php?error=1");
        exit;
    }
}
?>
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <!-- تحديد ترميز الأحرف لدعم العربية -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- عنوان الصفحة في المتصفح -->
    <title>معرض النخبة - تسجيل الدخول</title>
    <!-- ربط ملف التنسيق الخارجي -->
    <link rel="stylesheet" href="css/style.css">
    <!-- اتصال مسبق لتسريع تحميل الخطوط والصور -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://thumb.wikimedia.org">
    <link rel="preconnect" href="https://images.pexels.com">
    <!-- خط Cairo من Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet">
    <!-- تطبيق الوضع الليلي فوراً لمنع وميض الصفحة -->
    <script>
      // قراءة تفضيل الوضع الليلي: إن كان مفعّلاً نجهّز الصفحة للثيم الداكن
      if (localStorage.getItem("darkMode") === "true") {
        // إضافة صنف التجهيز الداكن على الجذر لمنع الوميض الأبيض
        document.documentElement.classList.add("dark-mode-pending");
      }
      // إضافة صنف js: إخبار CSS أن الجافاسكربت يعمل لتفعيل حركات الظهور عند التمرير
      document.documentElement.classList.add("js");
    </script>
    <!-- تنسيق مؤقت للوضع الليلي قبل تحميل ملف CSS (يمنع الوميض الأبيض) -->
    <style>
      /* تنسيق مؤقت: خلفية داكنة للجسم قبل اكتمال تحميل ملف CSS */
      .dark-mode-pending body {
        background-color: #1c1917;
        color: #f5f5f4;
      }
    </style>
    <!-- مطابقة ألوان المتصفح مع الثيم -->
    <meta name="color-scheme" content="light dark">
</head>
<body>
    
    <!-- ========== شريط التنقل ========== -->
    <nav class="navbar">
        <div class="container">
            <div class="logo">
                <!-- شعار المعرض (بتأثير اللمعان الذهبي) -->
                <h2>🏎️ النخبة</h2>
            </div>
            <!-- روابط التنقل بين الصفحات -->
            <ul class="nav-links" id="navLinks">
                <li><a href="index.html">الرئيسية</a></li>
                <li><a href="cars.html">السيارات</a></li>
                <li><a href="about.html">من نحن</a></li>
                <li><a href="contact.html">اتصل بنا</a></li>
                <li><a href="login.php" class="active">دخول</a></li>
            </ul>
            <div class="nav-actions">
                <!-- زر تبديل الوضع الليلي/النهاري -->
                <button id="darkModeBtn" class="btn-icon"></button>
                <!-- زر السلة: الشارة تُظهر عدد السيارات المحجوزة -->
                <button id="cartBtn" class="btn-icon">
                    🛒 <span id="cartCount">0</span>
                </button>
            </div>
        </div>
    </nav>

    <!-- ========== ترويسة الصفحة ========== -->
    <section class="page-header">
        <div class="container">
            <!-- عنوان الصفحة -->
            <h1>تسجيل الدخول</h1>
            <!-- وصف مختصر أسفل العنوان -->
            <p>مرحباً بعودتك إلى النخبة</p>
        </div>
    </section>

    <!-- ========== نموذج الدخول ========== -->
    <section class="login-section">
        <div class="container">
            
            <!-- عرض الرسالة -->
            <?php if ($message !== ""): ?>
                <p class="welcome-back"><?php echo htmlspecialchars($message); ?></p>
            <?php endif; ?>
            
            <!-- رسالة الترحيب بالاسم (تُملأ بـ JavaScript) -->
            <p id="welcomeBack" class="welcome-back"></p>
            
            <!-- النموذج -->
            <form class="login-form" method="POST" action="">
                
                <!-- حقل البريد -->
                <div class="form-group">
                    <label for="email">البريد الإلكتروني</label>
                    <input type="email" id="email" name="email" placeholder="example@email.com" required>
                </div>
                
                <!-- حقل كلمة المرور -->
                <div class="form-group">
                    <label for="password">كلمة المرور</label>
                    <div class="password-wrapper">
                        <input type="password" id="password" name="password" placeholder="أدخل كلمة المرور" required>
                        <button type="button" id="togglePassword" class="toggle-password">👁️</button>
                    </div>
                </div>
                
                <!-- زر الدخول -->
                <button type="submit" class="btn-primary">🔓 تسجيل الدخول</button>
                
                <!-- رابط التسجيل -->
                <p class="login-footer-text">ليس لديك حساب؟ <a href="register.php">أنشئ حساباً</a></p>
            </form>
        </div>
    </section>

    <!-- ========== التذييل ========== -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <!-- العمود الأول: تعريف مختصر بالمعرض -->
                <div class="footer-col">
                    <h3>🏎️ النخبة</h3>
                    <p>أفخم السيارات العالمية</p>
                </div>
                <!-- العمود الثاني: روابط سريعة للصفحات -->
                <div class="footer-col">
                    <h3>روابط سريعة</h3>
                    <ul>
                        <li><a href="about.html">من نحن</a></li>
                        <li><a href="cars.html">السيارات</a></li>
                        <li><a href="contact.html">اتصل بنا</a></li>
                    </ul>
                </div>
                <!-- العمود الثالث: أيقونات التواصل الاجتماعي -->
                <div class="footer-col">
                    <h3>تابعنا</h3>
                    <div class="social">
                        <a href="#" class="social-icon">📘</a>
                        <a href="#" class="social-icon">📷</a>
                        <a href="#" class="social-icon"></a>
                    </div>
                </div>
            </div>
                <!-- سطر حقوق النشر -->
            <div class="copyright">
                <p>© 2026 معرض النخبة. جميع الحقوق محفوظة.</p>
            </div>
        </div>
    </footer>

    <!-- زر العودة للأعلى -->
    <button id="backToTop" class="back-to-top">↑</button>

    <!-- حاوية الإشعارات -->
    <div id="toastContainer" class="toast-container"></div>

    <!-- ربط JavaScript -->
    <script src="js/script.js" defer></script>

    <!-- سكربت زر العين -->
    <script>
        // جلب زر العين وحقل كلمة المرور
        const toggleBtn = document.getElementById("togglePassword");
        const passField = document.getElementById("password");
        
        // التحقق من وجود العنصرين قبل ربط الحدث (حماية من الخطأ)
        if (toggleBtn && passField) {
            // عند الضغط على زر العين: بدّل نوع الحقل بين password/text
            toggleBtn.addEventListener("click", function() {
                // الحقل مخفي: أظهر كلمة المرور على شكل نص
                if (passField.type === "password") {
                    passField.type = "text";
                    toggleBtn.textContent = "";
                // الحقل ظاهر: أخفِ كلمة المرور وأعد أيقونة العين
                } else {
                    passField.type = "password";
                    toggleBtn.textContent = "👁️";
                }
            });
        }
    </script>
</body>
</html>
