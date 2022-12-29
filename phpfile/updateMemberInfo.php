<?php
session_start();

header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");

// echo json_encode( $_SESSION["mem_id"]);

// exit();
try{
    require_once("./php_connect_books/connectBooks.php");
    $sql = "update member set mem_name = :mem_name,
                              mem_phone = :mem_phone,
                              mem_address = :mem_address,
                              mem_email = :mem_email
                              
            where mem_id = :mem_id";

    $memberInfo = $pdo->prepare($sql);	
    
   
    $memberInfo->bindValue(":mem_id", $_SESSION["mem_id"]);
    $memberInfo->bindValue(":mem_name", $_POST["mem_name"]);
    $memberInfo->bindValue(":mem_phone", $_POST["mem_phone"]);
    $memberInfo->bindValue(":mem_address", $_POST["mem_address"]);
    $memberInfo->bindValue(":mem_email", $_POST["mem_email"]);
    // $memberInfo->bindValue(":mem_psw", $_POST["mem_psw"]);
    $memberInfo->execute();					

    $msg = "異動成功";
} catch (PDOException $e) {
    $msg = "錯誤行號 : ".$e->getLine().", 錯誤訊息 : ".$e->getMessage();
}

//輸出結果
$result = ["msg"=>$msg];
echo json_encode($result);
?>