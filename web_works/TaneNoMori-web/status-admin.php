<?php
define('ADMIN_PASSWORD', 'tanenomori2024');

$status_file = __DIR__ . '/status.json';

session_start();

if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: status-admin.php');
    exit;
}

$login_error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['password'])) {
    if ($_POST['password'] === ADMIN_PASSWORD) {
        $_SESSION['admin'] = true;
        header('Location: status-admin.php');
        exit;
    } else {
        $login_error = 'パスワードが正しくありません';
    }
}

$update_done = false;
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['status']) && isset($_SESSION['admin'])) {
    $allowed = ['green', 'yellow', 'red', 'black'];
    if (in_array($_POST['status'], $allowed)) {
        $data = ['status' => $_POST['status'], 'updated' => date('Y-m-d')];
        file_put_contents($status_file, json_encode($data, JSON_UNESCAPED_UNICODE));
        $update_done = true;
    }
}

$current_status = 'green';
$current_updated = '';
if (file_exists($status_file)) {
    $d = json_decode(file_get_contents($status_file), true);
    if ($d) { $current_status = $d['status'] ?? 'green'; $current_updated = $d['updated'] ?? ''; }
}

$statuses = [
    'green'  => ['label' => '受付中',   'emoji' => '🟢', 'bg' => '#e8f5e0', 'border' => '#519C23', 'text' => '#2d5a12'],
    'yellow' => ['label' => 'やや混雑', 'emoji' => '🟡', 'bg' => '#fef9e0', 'border' => '#c9a800', 'text' => '#6b5500'],
    'red'    => ['label' => '大変混雑', 'emoji' => '🔴', 'bg' => '#fde8e8', 'border' => '#c0392b', 'text' => '#7a1a1a'],
    'black'  => ['label' => '受付停止', 'emoji' => '⚫', 'bg' => '#e8e8e8', 'border' => '#444',    'text' => '#222'],
];
?>
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>混雑状況 管理ページ — 種の杜</title>
<meta name="robots" content="noindex,nofollow">
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Noto Sans JP', sans-serif; background: #f4f4f0; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 24px 16px; }
.card { background: #fff; border-radius: 12px; box-shadow: 0 4px 24px rgba(0,0,0,.1); padding: 40px 32px; width: 100%; max-width: 480px; }
.logo { text-align: center; margin-bottom: 28px; }
.logo h1 { font-size: 1.1rem; color: #1e4d08; letter-spacing: .1em; }
.logo p { font-size: .8rem; color: #888; margin-top: 4px; }
.section-title { font-size: .75rem; font-weight: 700; color: #888; letter-spacing: .12em; text-transform: uppercase; margin-bottom: 12px; }
.current-badge { display: flex; align-items: center; gap: 10px; background: #f8f8f6; border-radius: 8px; padding: 14px 16px; margin-bottom: 28px; }
.current-badge .emoji { font-size: 1.6rem; }
.current-badge .info { flex: 1; }
.current-badge .status-label { font-size: 1rem; font-weight: 700; color: #222; }
.current-badge .updated { font-size: .75rem; color: #aaa; margin-top: 2px; }
.status-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 28px; }
.status-btn { display: block; width: 100%; padding: 18px 12px; border-radius: 10px; border: 2px solid transparent; background: #f8f8f6; cursor: pointer; text-align: center; font-size: .95rem; font-weight: 700; transition: all .15s; font-family: inherit; }
.status-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,.1); }
.status-btn.active { border-width: 3px; box-shadow: 0 2px 12px rgba(0,0,0,.15); }
.status-btn .btn-emoji { font-size: 1.5rem; display: block; margin-bottom: 6px; }
.notice { background: #e8f5e0; border-left: 4px solid #519C23; border-radius: 4px; padding: 12px 14px; font-size: .85rem; color: #2d5a12; margin-bottom: 20px; }
.notice.error { background: #fde8e8; border-color: #c0392b; color: #7a1a1a; }
.logout-link { display: block; text-align: center; font-size: .8rem; color: #aaa; text-decoration: none; margin-top: 20px; }
.logout-link:hover { color: #666; }
/* ログインフォーム */
.login-form label { display: block; font-size: .85rem; color: #555; margin-bottom: 6px; }
.login-form input[type="password"] { width: 100%; padding: 12px 14px; border: 1.5px solid #ddd; border-radius: 8px; font-size: 1rem; font-family: inherit; outline: none; transition: border-color .15s; }
.login-form input[type="password"]:focus { border-color: #519C23; }
.login-form button { width: 100%; margin-top: 14px; padding: 14px; background: #1e4d08; color: #fff; border: none; border-radius: 8px; font-size: 1rem; font-weight: 700; cursor: pointer; font-family: inherit; transition: background .15s; }
.login-form button:hover { background: #2d6b0f; }
</style>
</head>
<body>
<div class="card">
  <div class="logo">
    <h1>種の杜 — 管理ページ</h1>
    <p>混雑状況の更新</p>
  </div>

<?php if (!isset($_SESSION['admin'])): ?>
  <?php if ($login_error): ?><div class="notice error"><?= htmlspecialchars($login_error) ?></div><?php endif; ?>
  <form method="post" class="login-form">
    <label for="pw">パスワード</label>
    <input type="password" id="pw" name="password" autofocus autocomplete="current-password">
    <button type="submit">ログイン</button>
  </form>

<?php else: ?>
  <?php if ($update_done): ?><div class="notice">✅ ステータスを更新しました</div><?php endif; ?>

  <p class="section-title">現在の状態</p>
  <div class="current-badge">
    <span class="emoji"><?= $statuses[$current_status]['emoji'] ?></span>
    <div class="info">
      <div class="status-label"><?= $statuses[$current_status]['label'] ?></div>
      <?php if ($current_updated): ?><div class="updated">更新日: <?= htmlspecialchars($current_updated) ?></div><?php endif; ?>
    </div>
  </div>

  <p class="section-title">ステータスを変更する</p>
  <form method="post">
    <div class="status-grid">
      <?php foreach ($statuses as $key => $s): ?>
      <button type="submit" name="status" value="<?= $key ?>" class="status-btn <?= $current_status === $key ? 'active' : '' ?>"
        style="<?= $current_status === $key ? "background:{$s['bg']};border-color:{$s['border']};color:{$s['text']}" : '' ?>">
        <span class="btn-emoji"><?= $s['emoji'] ?></span>
        <?= $s['label'] ?>
      </button>
      <?php endforeach; ?>
    </div>
  </form>

  <a href="?logout" class="logout-link">ログアウト</a>
<?php endif; ?>
</div>
</body>
</html>
