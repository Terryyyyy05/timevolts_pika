<?php
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");
require_once("./php_connect_books/connectBooks.php");
// 篩選 已上架 and 發行總量 - 已發數量 and 未過期 or 無期限 and 已到發送日期
$sql = "select * from coupon where coupon_status = 1 and (coupon_quantity - coupon_given_numbers) and (coupon_exp_date >= CURRENT_DATE or coupon_exp_date is null)and coupon_issue_date <= CURRENT_DATE;";
$coupons = $pdo->query($sql);
$coupon = $coupons->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($coupon);
