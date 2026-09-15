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
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>معرض النخبة - تسجيل الدخول</title>
    <link rel="stylesheet" href="css/style.css">
    <!-- اتصال مسبق لتسريع تحميل الخطوط والصور -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://picsum.photos">
    <!-- خط Cairo من Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet">
    <!-- تطبيق الوضع الليلي فوراً لمنع وميض الصفحة -->
    <script>
      if (localStorage.getItem("darkMode") === "true") {
        document.documentElement.classList.add("dark-mode-pending");
      }
    </script>
    <style>
      .dark-mode-pending body {
        background-color: #1c1917;
        color: #f5f5f4;
      }
    </style>
    <meta name="color-scheme" content="light dark">
</head>
<body>
    
    <!-- ========== شريط التنقل ========== -->
    <nav class="navbar">
        <div class="container">
            <div class="logo">
                <h2>🏎️ النخبة</h2>
            </div>
            <ul class="nav-links" id="navLinks">
                <li><a href="index.html">الرئيسية</a></li>
                <li><a href="cars.html">السيارات</a></li>
                <li><a href="about.html">من نحن</a></li>
                <li><a href="contact.html">اتصل بنا</a></li>
                <li><a href="login.php" class="active">دخول</a></li>
            </ul>
            <div class="nav-actions">
                <button id="darkModeBtn" class="btn-icon"></button>
                <button id="cartBtn" class="btn-icon">
                    🛒 <span id="cartCount">0</span>
                </button>
            </div>
        </div>
    </nav>

    <!-- ========== ترويسة الصفحة ========== -->
    <section class="page-header">
        <div class="container">
            <h1>تسجيل الدخول</h1>
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
                <div class="footer-col">
                    <h3>🏎️ النخبة</h3>
                    <p>أفخم السيارات العالمية</p>
                </div>
                <div class="footer-col">
                    <h3>روابط سريعة</h3>
                    <ul>
                        <li><a href="about.html">من نحن</a></li>
                        <li><a href="cars.html">السيارات</a></li>
                        <li><a href="contact.html">اتصل بنا</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>تابعنا</h3>
                    <div class="social">
                        <a href="#" class="social-icon">📘</a>
                        <a href="#" class="social-icon">📷</a>
                        <a href="#" class="social-icon"></a>
                    </div>
                </div>
            </div>
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
        const toggleBtn = document.getElementById("togglePassword");
        const passField = document.getElementById("password");
        
        if (toggleBtn && passField) {
            toggleBtn.addEventListener("click", function() {
                if (passField.type === "password") {
                    passField.type = "text";
                    toggleBtn.textContent = "";
                } else {
                    passField.type = "password";
                    toggleBtn.textContent = "👁️";
                }
            });
        }
    </script>
</body>
</html>