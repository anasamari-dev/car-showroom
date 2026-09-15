<?php
/* =====================================================
   معالج تسجيل الخروج
   ===================================================== */

/* بدء الجلسة */
session_start();

/* تفريغ الجلسة */
$_SESSION = [];

/* تدمير الجلسة */
session_destroy();

/* حذف بيانات المستخدم من localStorage والعودة للدخول */
echo "<script>
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    location.href = '../login.php?logout=1';
</script>";
?>