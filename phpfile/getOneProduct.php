<?php
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");

require_once("./php_connect_books/connectBooks.php");

$sql = "select * from product where pro_id = :pro_id";

$products = $pdo->prepare($sql);	
$products->bindValue(":pro_id", $_POST["pro_id"]);
$products->execute();	
// $products = $pdo->query($sql);

$prodRows = $products->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($prodRows);
?>