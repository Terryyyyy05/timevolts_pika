<?php
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");


$json = file_get_contents("php://input");
$datas = json_decode($json, true); //轉為關聯性陣列
$action = $datas["action"];

switch ($action) {
    case "get_mem_id":
        try {
            require_once("./php_connect_books/connectBooks.php");
            // 已登入可以領取的折價卷
            $sql = "SELECT * from coupon c left join my_coupon m  using(coupon_id)  where c.coupon_status = 1 and (c.coupon_quantity - c.coupon_given_numbers) and (c.coupon_exp_date >= current_date or c.coupon_exp_date is null )and c.coupon_issue_date <= current_date and (m.mem_id={$datas["mem_id"]} or m.mem_id is null) order by m.mem_id";
            $member = $pdo->prepare($sql);
            // $member->bindValue(":mem_id", $datas["mem_id"]);
            $member->execute();
            $msg = '回傳成功';
            $errMsg = '';

            $coupons = $pdo->query($sql);
            $coupon = $coupons->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($coupon);
        } catch (PDOException $e) {
            // 處理 PDOException
            // $result = ["msg" => "系統錯誤，請聯繫相關人員"];
            $result = ["msg" => $e->getMessage()];
            echo json_encode($result);
        }
        break;
    case "not_logged_coupon":
        try {
            require_once("./php_connect_books/connectBooks.php");
            // 未登入可以領取的折價卷
            $sql = "SELECT * from coupon c left join my_coupon m  using(coupon_id)  where c.coupon_status = 1 and (c.coupon_quantity - c.coupon_given_numbers) and (c.coupon_exp_date >= current_date or c.coupon_exp_date is null )and c.coupon_issue_date <= current_date order by m.mem_id;";
            $member = $pdo->prepare($sql);
            $member->execute();
            $msg = '回傳成功';
            $errMsg = '';

            $coupons = $pdo->query($sql);
            $coupon = $coupons->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($coupon);
        } catch (PDOException $e) {
            // 處理 PDOException
            // $result = ["msg" => "系統錯誤，請聯繫相關人員"];
            $result = ["msg" => $e->getMessage()];
            echo json_encode($result);
        }
        break;
    case "pick_up_record":
        try {
            require_once("./php_connect_books/connectBooks.php");
            $sql = "INSERT INTO `tibamefe_cgd103g3`.`my_coupon` (`mem_id`, `coupon_id`, `my_coupon_status`) VALUES (:mem_id, :coupon_id, '1');";
            $member = $pdo->prepare($sql);
            $member->bindValue(":mem_id", $datas["mem_id"]);
            $member->bindValue(":coupon_id", $datas["coupon_id"]);
            $member->execute();
            $msg = '回傳成功';
            $errMsg = '回傳失敗';

            $coupons = $pdo->query($sql);
            $coupon = $coupons->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($coupon);
        } catch (PDOException $e) {
            // 處理 PDOException
            // $result = ["msg" => "系統錯誤，請聯繫相關人員"];
            $result = ["msg" => $e->getMessage()];
            echo json_encode($result);
        }
        break;
}

// }


// // LEFT join my_coupon 篩選 已上架 and (發行總量 - 已發數量) and (未過期 or 無期限) and 已到發行日期 and (會員id=1 or 未領取)
// $sql = 'select * from coupon c left join my_coupon m  using(coupon_id)  where c.coupon_status = 1 and (c.coupon_quantity - c.coupon_given_numbers) and (c.coupon_exp_date >= current_date or c.coupon_exp_date is null )and c.coupon_issue_date <= current_date and (m.my_coupon_status=1 or m.my_coupon_status is null) order by m.mem_id;';
// $coupons = $pdo->query($sql);
// $coupon = $coupons->fetchAll(PDO::FETCH_ASSOC);
// echo json_encode($coupon);
