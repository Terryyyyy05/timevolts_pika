<?php
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");
require_once("./php_connect_books/connectBooks.php");

$sql = "select * from itinerary i join story s  using(story_id) 
where (i.itinerary_signup_deadline > current_date)
group by story_id
order by i.itinerary_signup_deadline;";
$products = $pdo->query($sql);
$prodRows = $products->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($prodRows);
