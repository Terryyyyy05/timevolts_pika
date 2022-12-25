<?php
session_start();
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");


$errMsg = '';
$msg = '';

if (isset($_SESSION["mem_id"])) {
   $msg .= '已登入';
   // session_id();
   echo json_encode(["mem_id" => $_SESSION["mem_id"]]);
   // echo json_encode(['mem_id' => $mem_id]);
} else {
   $errMsg .= '未登入';
   echo json_encode(["errMsg" => $errMsg]);
}
