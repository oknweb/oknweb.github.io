<?php
header('Content-Type: application/json; charset=utf-8');

$rss_url = 'https://note.com/teaseed46/rss';
$context = stream_context_create([
    'http' => [
        'header' => "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36\r\n",
        'timeout' => 10
    ],
    'ssl' => [
        'verify_peer' => true,
        'verify_peer_name' => true
    ]
]);

$xml_data = @file_get_contents($rss_url, false, $context);
if (!$xml_data) {
    echo json_encode(['status' => 'error', 'message' => 'RSSの取得に失敗しました']);
    exit;
}

$xml = @simplexml_load_string($xml_data);
if (!$xml) {
    echo json_encode(['status' => 'error', 'message' => 'RSSの解析に失敗しました']);
    exit;
}

$count = isset($_GET['count']) ? (int)$_GET['count'] : 10;
$items = [];
$i = 0;
foreach ($xml->channel->item as $item) {
    if ($i >= $count) break;
    $media = $item->children('media', true);
    $thumbnail = isset($media->thumbnail) ? (string)$media->thumbnail->attributes()['url'] : '';
    $items[] = [
        'title'      => (string)$item->title,
        'link'       => (string)$item->link,
        'pubDate'    => (string)$item->pubDate,
        'description'=> strip_tags((string)$item->description),
        'thumbnail'  => $thumbnail
    ];
    $i++;
}

echo json_encode(['status' => 'ok', 'items' => $items], JSON_UNESCAPED_UNICODE);
