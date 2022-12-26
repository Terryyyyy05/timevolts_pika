<?php
session_start();
if (isset($_SESSION["mem_id"])) {
   session_unset(); //將session中的資料全刪, 但檔案還在
}
