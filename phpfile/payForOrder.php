<?php

header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");

$json = file_get_contents("php://input");
$datas = json_decode($json, true); //轉為關聯性陣列

$form_data = array(
   'itineraryId' => $datas["itineraryId"],
   'totalPrice' => $datas["totalPrice"],
   // 更多的表單欄位
);

echo '<form action="Ecpay.php" method="post" id="my_form">';
foreach ($form_data as $name => $value) {
   echo '<input type="hidden" name="' . $name . '" value="' . $value . '">';
}
echo '</form>';
echo '<script>document.getElementById("my_form").submit();</script>';





// echo '<form action="Ecpay.php" method="post">';

// // 使用 input 標籤儲存資訊
// echo '<input type="text" name="itineraryId" value="' . $datas["itineraryId"] . '">';
// echo '<input type="text" name="totalPrice" value="' . $datas["totalPrice"] . '">';
// // echo '<input type="text" name="itineraryName" value="' . $datas["itineraryName"] . '">';

// // 傳送表單
// echo '<input type="submit" value="送出表單">';
// echo '</form>';
