<?php
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");


$json = file_get_contents("php://input");
$datas = json_decode($json, true); //轉為關聯性陣列

try {
   require_once("./php_connect_books/connectBooks.php");

   $sql = "SELECT itinerary_order_id 
           FROM itinerary_order 
           WHERE itinerary_id = :itinerary_id and mem_id = :mem_id
           ORDER BY itinerary_order_date DESC
           LIMIT 1;";

   $order = $pdo->prepare($sql); //先編譯好
   $order->bindValue(":itinerary_id", $datas['itineraryId']); //代入資料
   $order->bindValue(":mem_id", $datas['userId']);
   $order->execute(); //執行之

   $msg = '';
   $errMsg = '';
   if ($order->rowCount() == 0) { //找不到
      $errMsg .= "查無此筆訂單";
      echo json_encode(["errMsg" => $errMsg]);
   } else {
      // $msg .= "";
      $orderRow = $order->fetch(PDO::FETCH_ASSOC);
      echo json_encode($orderRow["itinerary_order_id"]);
   }
} catch (PDOException $e) {
   // $errMsg .= "錯誤 : " . $e->getMessage() . "<br>";
   // $errMsg .= "行號 : " . $e->getLine() . "<br>";
}
