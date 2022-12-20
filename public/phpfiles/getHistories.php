<?php
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");

require_once("./connectDb.php");
$sql = "select * from story";
$histories = $pdo->query($sql);
$storyRows = $histories->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($storyRows);
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