<?php
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");

    $json = file_get_contents("php://input");
    $datas = json_decode($json, true); //轉為關聯性陣列

    require_once("./php_connect_books/connectBooks.php");
    $sql = "select * from member WHERE mem_id = :userId;";
    $member = $pdo->prepare($sql);
    $member->bindValue(":userId", $datas['userId']); 
    $member->execute();
    
    $memRows = $member->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($memRows);
?>