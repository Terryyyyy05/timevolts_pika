<?php
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");

require_once("./php_connect_books/connectBooks.php");
$sql = "SELECT s.story_id, a.story_article_id, s.story_name, s.story_risk, s.story_spot, s.story_specialty, s.story_cover, a.story_title, a.       story_img, a.story_content 
        FROM story s JOIN story_article a ON s.story_id = a.story_id
        ORDER BY a.story_article_id;";
$details = $pdo->query($sql);
$detailRows = $details->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($detailRows);
