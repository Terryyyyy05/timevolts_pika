<?php
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");

$json = file_get_contents("php://input");
$datas = json_decode($json, true); //轉為關聯性陣列
// var_dump($datas);exit();

try {
    require_once("./php_connect_books/connectBooks.php");
    // if ($pdo === false) {
    //     throw new Exception("Unable to connect to the database");
    // }
    $sql = "INSERT INTO my_coupon (mem_id, coupon_id, my_coupon_status) 
           VALUES (:mem_id,:coupon_id, :my_coupon_status)";
    $member = $pdo->prepare($sql);
    $member->bindValue(":mem_id", $datas["mem_id"]);
    $member->bindValue(":coupon_id", $datas["coupon_id"]);
    $member->bindValue(":my_coupon_status", $datas["my_coupon_status"]);
    $member->execute();
} catch (PDOException $e) {
    // 處理 PDOException
    // $result = ["msg" => "系統錯誤, 請通知系統維護人員"];
    echo json_encode($result);
}
