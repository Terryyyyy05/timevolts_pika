<?php
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");

require_once("./php_connect_books/connectBooks.php");
$sql = "SELECT m.mem_id, m.mem_name, m.mem_phone, m.mem_email, i.itinerary_order_original_price, i.itinerary_order_discount_amount, i.itinerary_order_total, i.itinerary_participant
        FROM member m JOIN itinerary_order i ON m.mem_id = i.mem_id";
$memItin = $pdo->query($sql);
$memItinRows = $memItin->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($memItinRows);
// itinerary_price, itinerary_participant
