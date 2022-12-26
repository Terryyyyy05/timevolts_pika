<?php
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");

require_once("./php_connect_books/connectBooks.php");
$sql = "SELECT participant_name, participant_phone, participant_email 
        FROM participant_info";
$participantInfo = $pdo->query($sql);
$participantInfoRows = $participantInfo->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($participantInfoRows);
