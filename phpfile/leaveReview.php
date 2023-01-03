<?php
session_start();
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");

$json = file_get_contents("php://input");
$datas = json_decode($json, true); //轉為關聯性陣列

try {
   require_once("./php_connect_books/connectBooks.php");

   $sql = "SELECT * 
           from itinerary_order 
           WHERE itinerary_order_id = :itinerary_order_id and mem_id = :mem_id"; //''

   $review = $pdo->prepare($sql); //先編譯好
   $review->bindValue(":itinerary_order_id", $datas['orderId']); //代入資料
   $review->bindValue(":mem_id", $_SESSION['mem_id']);
   $review->execute(); //執行之

   $msg = '';
   $errMsg = '';
   if ($review->rowCount() > 0) { //找不到
      $errMsg .= "您已經評論過此筆訂單";
      echo json_encode(["errMsg" => $errMsg]);
      exit();
   }
} catch (PDOException $e) {
   // $errMsg .= "錯誤 : " . $e->getMessage() . "<br>";
   // $errMsg .= "行號 : " . $e->getLine() . "<br>";
}
