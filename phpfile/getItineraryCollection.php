<?php
session_start();

header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");

require_once("./php_connect_books/connectBooks.php");
$sql = "SELECT *
        FROM story s JOIN favorite_itinerary f ON s.story_id = f.itinerary_id
        WHERE  f.mem_id = :mem_id";
$collection = $pdo->prepare($sql);
$collection->bindValue(":mem_id", $_SESSION["mem_id"]);
$collection->execute();
$collectionRows = $collection->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($collectionRows);
