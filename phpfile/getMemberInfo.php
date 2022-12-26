<?php
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");

    require_once("./php_connect_books/connectBooks.php");
    $sql = "select * from member";
    $member = $pdo->query($sql);
    $memRows = $member->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($memRows);
?>