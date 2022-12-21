<?php 
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");
<<<<<<< HEAD:public/phpfile/getProducts.php
require_once("./php_connect_books/connectBooks.php");
$sql = "select * from product";
$products = $pdo->query($sql);
$prodRows = $products->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($prodRows);
=======

require_once("./php_connect_books/connectDb.php");
$sql = "SELECT story_id, story_name, story_risk,story_spot,story_specialty,story_age,story_intro 
        FROM story";
$histories = $pdo->query($sql);
$storyRows = $histories->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($storyRows);
>>>>>>> dev_boaz:public/phpfiles/getHistories.php
?>


<?php 
/*======另一個可能的範例

require_once("../connectBooks.php");
//--------取回訂單主檔的資料
$sql = "select * from orderMaster where orderNo=1";
$orderMaster = $pdo->query($sql);
$orderMasterRow = $orderMasters->fetch(PDO::FETCH_ASSOC);
//把它打包放入result中
$result["orderMasterRow"] =  $orderMasterRow;

//--------取回訂單明細的資料
$sql = "select * from orderItems where orderNo=1";
$orderItems = $pdo->query($sql);
$orderItemsRows = $orderMasters->fetchAll(PDO::FETCH_ASSOC);
//把它打包放入result中
$result["orderMasterRow"] =  $orderItemsRows;

echo json_encode($result);
*/
?>