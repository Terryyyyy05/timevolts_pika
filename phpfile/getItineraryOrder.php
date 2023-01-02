<?php
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");

require_once("./php_connect_books/connectBooks.php");
$sql = "SELECT o.itinerary_order_id, i.itinerary_name, o.itinerary_order_date, i.itinerary_start_date, i.itinerary_end_date, o.itinerary_order_total, o.itinerary_order_status
        FROM itinerary i JOIN itinerary_order o ON i.itinerary_id = o.itinerary_id";
$histories = $pdo->query($sql);
$storyRows = $histories->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($storyRows);
