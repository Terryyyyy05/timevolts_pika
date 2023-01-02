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
            $sql = " SELECT c.coupon_id , c.coupon_discount_number , c.coupon_issue_date , c.coupon_valid_date,c.coupon_exp_date , c.coupon_quantity , c.coupon_given_numbers , c.coupon_pricing_condition , c.coupon_status , m.mem_id , m.my_coupon_status , mc.mycount
            from coupon c left join my_coupon m on c.coupon_id = m.coupon_id and m.mem_id = {$datas["mem_id"]} left join (select count(*) mycount , coupon_id from my_coupon group by coupon_id) mc on c.coupon_id = mc.coupon_id where 1=1 and c.coupon_status = 1 and (current_date between c.coupon_issue_date and c.coupon_exp_date or c.coupon_exp_date is null ) and ifnull(mc.mycount,0) < c.coupon_quantity ;";
            $member = $pdo->prepare($sql);
            // $member->bindValue(":mem_id", $datas["mem_id"], PDO::PARAM_INT);
            $member->execute();
            $msg = '回傳成功';
            $errMsg = '';

            $coupons = $pdo->query($sql);
            $coupon = $coupons->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($coupon);
            // echo json_encode($datas["mem_id"]);
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
            $sql = "SELECT * from coupon c 
            left join (select count(*) mycount , coupon_id from my_coupon group by coupon_id) mc on c.coupon_id = mc.coupon_id
           where 1=1
           and c.coupon_status = 1
           and (current_date between c.coupon_issue_date and c.coupon_exp_date or c.coupon_exp_date is null )
           and ifnull(mc.mycount,0) < c.coupon_quantity ;";
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
            // 會員領取的優惠卷
            $sql = "INSERT INTO `my_coupon` (`mem_id`, `coupon_id`, `my_coupon_status`) VALUES (:mem_id, :coupon_id, '1');";
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
    case "Calculate_send":
        try {
            require_once("./php_connect_books/connectBooks.php");
            // 計算已發送的優惠卷
            $sql = "UPDATE `coupon` SET `coupon_given_numbers` = (SELECT  count(*) FROM my_coupon  WHERE coupon_id = {$datas["coupon_id"]}) 
            WHERE coupon_id = {$datas["coupon_ida"]} ";
            $member = $pdo->prepare($sql);
            // $member->bindValue(":coupon_id", $datas["coupon_id"]);
            $member->execute();
            $msg = '計算數量成功';

            $coupons = $pdo->query($sql);
            $coupon = $coupons->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($coupon);
        } catch (PDOException $e) {
            $errMsg = '計算數量失敗';
            // 處理 PDOException
            // $result = ["msg" => "系統錯誤，請聯繫相關人員"];
            $result = ["msg" => $e->getMessage()];
            echo json_encode($result);
        }
        break;
    case "mem_coupon":
        try {
            require_once("./php_connect_books/connectBooks.php");
            // 會員折價卷的紀錄
            $sql = " select * from coupon c  join my_coupon m on c.coupon_id = m.coupon_id and m.mem_id = {$datas["mem_id"]}  
            where 1=1 
            and c.coupon_status = 1 ; ";
            $member = $pdo->prepare($sql);
            // $member->bindValue("mem_id", $datas["mem_id"], PDO::PARAM_INT);
            $member->execute();
            $msg = '回傳成功';
            $errMsg = '';

            $coupons = $pdo->query($sql);
            $coupon = $coupons->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($coupon);
            // echo json_encode($datas["mem_id"]);
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
