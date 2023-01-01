<?php
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");

$json = file_get_contents("php://input");
$datas = json_decode($json, true); //轉為關聯性陣列
// var_dump($datas);exit();

try {
   require_once("../phpfile/php_connect_books/connectBooks.php");
   $sql = "INSERT INTO itinerary_order(itinerary_id, mem_id, itinerary_order_date, itinerary_participant, itinerary_order_total, itinerary_order_discount_amount, itinerary_order_original_price, itinerary_order_status) 
           VALUES (:itineraryId, :userId, CURDATE(), :attendNum, :totalPrice, :discoutPrice, :originPrice, 2)";
   $member = $pdo->prepare($sql);
   $member->bindValue(":userId", $datas["userId"]);
   $member->bindValue(":itineraryId", $datas["itineraryId"]);
   $member->bindValue(":attendNum", $datas["attendNum"]);
   $member->bindValue(":originPrice", $datas["originPrice"]);
   $member->bindValue(":totalPrice", $datas["totalPrice"]);
   $member->bindValue(":discoutPrice", $datas["discoutPrice"]);
   $member->execute();

} catch (PDOException $e) {
   // 處理 PDOException
   $result = ["msg" => "系統錯誤，請聯繫相關人員"];
   echo json_encode($result);
}
