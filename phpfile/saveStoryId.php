<?php
session_start();
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");


$json = file_get_contents("php://input");
$datas = json_decode($json, true); //轉為關聯性陣列

$_SESSION["story_id"] = $datas["story_id"];
