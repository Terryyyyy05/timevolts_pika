<?php
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");

$json = file_get_contents("php://input");
$datas = json_decode($json, true); //轉為關聯性陣列
// var_dump($datas);exit();

try {
   require_once("../phpfile/php_connect_books/connectBooks.php");
   // if ($pdo === false) {
   //     throw new Exception("Unable to connect to the database");
   // }
   $sql = "INSERT INTO member (mem_id, mem_account, mem_psw) 
           VALUES ('5', :email, :password)";
   $member = $pdo->prepare($sql);
   $member->bindValue(":email", $datas["email"]);
   $member->bindValue(":password", $datas["password"]);
   $member->execute();

} catch (PDOException $e) {
   // 處理 PDOException
   $result = ["msg" => "系統錯誤, 請通知系統維護人員"];
   echo json_encode($result);
}
