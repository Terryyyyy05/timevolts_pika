<?php
session_start();

header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");

$json = file_get_contents("php://input");
$datas = json_decode($json, true); //轉為關聯性陣列

require_once("./php_connect_books/connectBooks.php");
$sql = "SELECT i.review_date, i.review_content, i.review_ratings, i.review_content_show, m.mem_name 
        FROM itinerary_order i JOIN member m ON i.mem_id = m.mem_id 
        WHERE i.itinerary_id = :story_id
        ORDER BY i.review_date DESC;";
$comments = $pdo->prepare($sql);
$comments->bindValue(":story_id", $_SESSION["story_id"]); //代入資料
$comments->execute();
$commentRows = $comments->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($commentRows);
