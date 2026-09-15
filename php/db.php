<?php
/* =====================================================
   ملف الاتصال بقاعدة البيانات (SQLite عبر PDO)
   ===================================================== */

/* تحديد مسار مجلد قاعدة البيانات */
$dbDir = __DIR__ . '/../database';

/* إنشاء المجلد إذا لم يوجد */
if (!is_dir($dbDir)) {
    mkdir($dbDir);
}

/* try: محاولة الاتصال بالقاعدة */
try {
    /* إنشاء كائن PDO لملف SQLite */
    $pdo = new PDO('sqlite:' . $dbDir . '/elite_cars.db');
    
    /* تفعيل وضع الاستثناءات */
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
} catch (PDOException $e) {
    /* عرض رسالة الخطأ وإيقاف التنفيذ */
    die('فشل الاتصال: ' . $e->getMessage());
}

/* إنشاء جدول المستخدمين إذا لم يكن موجوداً */
$pdo->exec("CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
)");
?>