<?php
/* =====================================================
   صفحة إنشاء حساب جديد
   ===================================================== */

/* تضمين ملف الاتصال بالقاعدة */
require __DIR__ . '/php/db.php';

/* مصفوفة الأخطاء */
$errors = [];

/* شرط: هل أُرسل النموذج؟ */
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    
    /* قراءة الحقول */
    $name = trim($_POST["name"] ?? "");
    $email = trim($_POST["email"] ?? "");
    $password = $_POST["password"] ?? "";
    $confirm = $_POST["confirm"] ?? "";
    
    /* التحقق من الاسم */
    if ($name === "" || mb_strlen($name) < 3) {
        $errors[] = "الاسم يجب أن يكون 3 أحرف على الأقل";
    }
    
    /* التحقق من البريد */
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "البريد الإلكتروني غير صحيح";
    }
    
    /* التحقق من كلمة المرور */
    if (strlen($password) < 6) {
        $errors[] = "كلمة المرور 6 أحرف على الأقل";
    }
    
    /* التحقق من التطابق */
    if ($password !== $confirm) {
        $errors[] = "كلمتا المرور غير متطابقتين";
    }
    
    /* شرط: إذا لم توجد أخطاء */
    if (empty($errors)) {
        
        /* فحص تكرار البريد */
        $check = $pdo->prepare("SELECT id FROM users WHERE email = ?");
        $check->execute([$email]);
        
        /* شرط: البريد مسجل مسبقاً */
        if ($check->fetch()) {
            $errors[] = "هذا البريد مسجل مسبقاً";
        } else {
            
            /* تشفير كلمة المرور */
            $hashed = password_hash($password, PASSWORD_DEFAULT);
            
            /* إدراج المستخدم الجديد */
            $stmt = $pdo->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
            $stmt->execute([$name, $email, $hashed]);
            
            /* التوجيه لصفحة الدخول */
            header("Location: login.php?registered=1");
            exit;
        }
    }
}
?>
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>معرض النخبة - إنشاء حساب</title>
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
                <button id="darkModeBtn" class="btn-icon">🌙</button>
                <button id="cartBtn" class="btn-icon">
                    🛒 <span id="cartCount">0</span>
                </button>
            </div>
        </div>
    </nav>

    <!-- ========== ترويسة الصفحة ========== -->
    <section class="page-header">
        <div class="container">
            <h1>إنشاء حساب جديد</h1>
            <p>انضم إلى عائلة النخبة</p>
        </div>
    </section>

    <!-- ========== نموذج التسجيل ========== -->
    <section class="login-section">
        <div class="container">
            
            <!-- عرض الأخطاء إن وجدت -->
            <?php if (!empty($errors)): ?>
                <div class="errors-box">
                    <ul>
                        <?php foreach ($errors as $error): ?>
                            <li>⚠️ <?php echo htmlspecialchars($error); ?></li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            <?php endif; ?>
            
            <!-- النموذج -->
            <form class="login-form" method="POST" action="">
                
                <!-- حقل الاسم -->
                <div class="form-group">
                    <label for="name">الاسم الكامل</label>
                    <input type="text" id="name" name="name" value="<?php echo htmlspecialchars($_POST['name'] ?? ''); ?>" placeholder="أدخل اسمك" required>
                </div>
                
                <!-- حقل البريد -->
                <div class="form-group">
                    <label for="email">البريد الإلكتروني</label>
                    <input type="email" id="email" name="email" value="<?php echo htmlspecialchars($_POST['email'] ?? ''); ?>" placeholder="example@email.com" required>
                </div>
                
                <!-- حقل كلمة المرور -->
                <div class="form-group">
                    <label for="password">كلمة المرور</label>
                    <div class="password-wrapper">
                        <input type="password" id="password" name="password" placeholder="6 أحرف على الأقل" required>
                        <button type="button" id="togglePassword" class="toggle-password">️</button>
                    </div>
                </div>
                
                <!-- حقل تأكيد كلمة المرور -->
                <div class="form-group">
                    <label for="confirm">تأكيد كلمة المرور</label>
                    <input type="password" id="confirm" name="confirm" placeholder="أعد كتابة كلمة المرور" required>
                </div>
                
                <!-- زر الإنشاء -->
                <button type="submit" class="btn-primary">📝 إنشاء الحساب</button>
                
                <!-- رابط الدخول -->
                <p class="login-footer-text">لديك حساب؟ <a href="login.php">سجّل دخولك</a></p>
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
                        <a href="#" class="social-icon"></a>
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
        /* الحصول على الزر والحقل */
        const toggleBtn = document.getElementById("togglePassword");
        const passField = document.getElementById("password");
        
        /* حماية: تشغيل فقط إذا وُجدا */
        if (toggleBtn && passField) {
            /* تبديل نوع الحقل عند النقر */
            toggleBtn.addEventListener("click", function() {
                if (passField.type === "password") {
                    passField.type = "text";
                    toggleBtn.textContent = "🙈";
                } else {
                    passField.type = "password";
                    toggleBtn.textContent = "️";
                }
            });
        }
    </script>
</body>
</html>