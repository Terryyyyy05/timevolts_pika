<?php
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");


$json = file_get_contents("php://input");
$datas = json_decode($json, true); //轉為關聯性陣列
// var_dump($datas);exit();

// LEFT join my_coupon 篩選 已上架 and (發行總量 - 已發數量) and (未過期 or 無期限) and 已到發行日期 and (會員id=1 or 未領取)
$sql = 'select * from coupon c left join my_coupon m  using(coupon_id)  where c.coupon_status = 1 and (c.coupon_quantity - c.coupon_given_numbers) and (c.coupon_exp_date >= current_date or c.coupon_exp_date is null )and c.coupon_issue_date <= current_date and (m.mem_id=1 or m.mem_id is null) order by m.mem_id;';
$coupons = $pdo->query($sql);
$coupon = $coupons->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($coupon);
