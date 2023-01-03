<?php
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");

$json = file_get_contents("php://input");
$datas = json_decode($json, true); //轉為關聯性陣列
// var_dump($datas);exit();

try {
   require_once("./php_connect_books/connectBooks.php");
   $sql = "INSERT INTO favorite_itinerary 
           VALUES (:mem_id, :itinerary_id)";
   $collection = $pdo->prepare($sql);
   $collection->bindValue(":mem_id", $datas["userId"]);
   $collection->bindValue(":itinerary_id", $datas["storyId"]);
   $collection->execute();
} catch (PDOException $e) {
   // 處理 PDOException
   $result = ["msg" => "系統錯誤，請聯繫相關人員"];
   echo json_encode($result);
}
