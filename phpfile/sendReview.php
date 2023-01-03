<?php
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");

$json = file_get_contents("php://input");
$datas = json_decode($json, true); //轉為關聯性陣列
// var_dump($datas);exit();

try {
   require_once("./php_connect_books/connectBooks.php");
   $sql = "UPDATE itinerary_order
           SET review_date = curdate(),
               review_content = :review_content,
               review_ratings = :review_ratings,
               review_content_show = 1
           WHERE itinerary_order_id = :itinerary_order_id";
   $review = $pdo->prepare($sql);
   $review->bindValue(":review_content", $datas["comment"]);
   $review->bindValue(":review_ratings", $datas["rating"]);
   $review->bindValue(":itinerary_order_id", $datas["orderId"]);
   $review->execute();
} catch (PDOException $e) {
   // 處理 PDOException
   $result = ["msg" => "系統錯誤，請聯繫相關人員"];
   echo json_encode($result);
}
