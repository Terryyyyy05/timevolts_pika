<?php
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");

$json = file_get_contents("php://input");
$datas = json_decode($json, true); //轉為關聯性陣列

require_once("./php_connect_books/connectBooks.php");
$sql = "SELECT i.itinerary_start_date, i.itinerary_end_date, s.story_classification, s.story_risk, s.story_spot, i.itinerary_price, m.mem_level
        FROM itinerary i JOIN story s JOIN member m 
        ON i.story_id = s.story_id
        WHERE i.itinerary_name = :itineraryName AND m.mem_id = :userId
        ORDER BY i.itinerary_start_date
        LIMIT 1";


$info = $pdo->prepare($sql); //先編譯好
$info->bindValue(":itineraryName", $datas['itineraryName']); //代入資料
$info->bindValue(":userId", $datas['userId']);
$info->execute(); //執行之

$infoRows = $info->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($infoRows);
