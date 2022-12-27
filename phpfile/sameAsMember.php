<?php
session_start();

header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");

require_once("./php_connect_books/connectBooks.php");
$sql = "SELECT mem_name, mem_phone, mem_email 
        FROM member
        WHERE mem_id = :mem_id;";

if (isset($_SESSION["mem_id"])) {
   $member = $pdo->prepare($sql); //先編譯好
   $member->bindValue(":mem_id", $_SESSION["mem_id"]); //代入資料
   $member->execute(); //執行之
   $memberRows = $member->fetchAll(PDO::FETCH_ASSOC);
   echo json_encode($memberRows);
} else {
   echo json_encode("msg", "發生錯誤，無法取得會員資料");
}
