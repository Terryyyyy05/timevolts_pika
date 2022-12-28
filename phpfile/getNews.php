<?php 

header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");
require_once("./php_connect_books/connectBooks.php");
$sql = "select * from news order by news_add_date DESC" ; 
$products = $pdo->query($sql);
$prodRows = $products->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($prodRows);
?>
