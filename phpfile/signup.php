<?php
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");

$json = file_get_contents("php://input");
$datas = json_decode($json, true); //轉為關聯性陣列
// var_dump($datas);exit();
$action = $datas["action"];
// echo $action;

switch ($action) {
   case "checkEmail":
      try {
         require_once("../phpfile/php_connect_books/connectBooks.php");
         $sql = "SELECT * FROM member where mem_email = :email;";
         $member = $pdo->prepare($sql);
         $member->bindValue(":email", $datas["email"]);
         $member->execute();
         $msg = '';
         $errMsg = '';

         if ($member->rowCount() == 1) { // 已經有此帳號
            $errMsg .= "此帳號已經被註冊";
            echo json_encode(["errMsg" => $errMsg]);
         } else { // 登入成功
            $msg .= '此帳號目前無人使用';
            echo json_encode(["msg" => $msg]);
         }
      } catch (PDOException $e) {
         // 處理 PDOException
         $result = ["msg" => "系統錯誤，請聯繫相關人員"];
         echo json_encode($result);
      }
      break;

   case "signup":
      try {
         require_once("../phpfile/php_connect_books/connectBooks.php");
         // if ($pdo === false) {
         //     throw new Exception("Unable to connect to the database");
         // }
         $sql = "INSERT INTO member (mem_name, mem_email, mem_psw) 
                 VALUES (:name, :email, :password)";
         $member = $pdo->prepare($sql);
         $member->bindValue(":name", $datas["name"]);
         $member->bindValue(":email", $datas["email"]);
         $member->bindValue(":password", $datas["password"]);
         $member->execute();
      } catch (PDOException $e) {
         // 處理 PDOException
         $result = ["msg" => "註冊失敗，請重新嘗試"];
         echo json_encode($result);
      }
      break;
}
