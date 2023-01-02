<?php
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");

$json = file_get_contents("php://input");
$datas = json_decode($json, true); //轉為關聯性陣列
// var_dump($datas);exit();

try {
   require_once("../phpfile/php_connect_books/connectBooks.php");
   $sql = "INSERT INTO participant_info(itinerary_order_id, participant_name, participant_phone, participant_email) 
           VALUES (:itinerary_order_id, :name, :phone, :email)";
   $participants = $pdo->prepare($sql);
   $participants->bindValue(":itinerary_order_id", $datas["itineraryOrderId"]);
   $participants->bindValue(":name", $datas["name"]);
   $participants->bindValue(":phone", $datas["phone"]);
   $participants->bindValue(":email", $datas["email"]);
   $participants->execute();
} catch (PDOException $e) {
   // 處理 PDOException
   $result = ["msg" => "系統錯誤，請聯繫相關人員"];
   echo json_encode($result);
}
