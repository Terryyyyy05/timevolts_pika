<?php
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");
require_once("./php_connect_books/connectBooks.php");
$sql = "select * from coupon where coupon_status = 1 and(coupon_quantity - coupon_given_numbers)>0";
$products = $pdo->query($sql);
$prodRows = $products->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($prodRows);
