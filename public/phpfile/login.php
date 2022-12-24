<?php
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");

$json = file_get_contents("php://input");
$datas = json_decode($json, true); //轉為關聯性陣列

try {
   require_once("./php_connect_books/connectBooks.php");

   $sql = "SELECT * from member WHERE mem_email = :email and mem_psw = :password"; //''

   $member = $pdo->prepare($sql); //先編譯好
   $member->bindValue(":email", $datas['email']); //代入資料
   $member->bindValue(":password", $datas['password']);
   $member->execute(); //執行之

   $errMsg = '';
   if ($member->rowCount() == 0) { //找不到
      $errMsg .= "帳密錯誤,請重新登入";
      echo json_encode(["errMsg" => $errMsg]);
   }

   $memRow = $member->fetch(PDO::FETCH_ASSOC);
   //登入成功,將登入者的資料寫入session
   session_start();
   $_SESSION["mem_id"] = $memRow["mem_id"];
   $_SESSION["mem_email"] = $memRow["mem_email"];

   echo json_encode(["memId", $_SESSION["mem_id"]]);
} catch (PDOException $e) {
   $errMsg .= "錯誤 : " . $e->getMessage() . "<br>";
   $errMsg .= "行號 : " . $e->getLine() . "<br>";
}
