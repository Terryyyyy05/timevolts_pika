<?php 
session_start();
if( isset($_SESSION["memId"])==true){
	$result = ["memNo"=>$_SESSION["memNo"], "memId"=>$_SESSION["memId"],"memName"=>$_SESSION["memName"],"email"=>$_SESSION["email"]];
	echo json_encode($result);
}else{ //尚未登入
	echo "{}";
}

?>