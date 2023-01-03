<?php
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");

require_once("./php_connect_books/connectBooks.php");
$sql = "SELECT story_id, story_name, story_risk, story_spot,story_specialty, itinerary_number_of_years, itinerary_memo, itinerary_content, itinerary_delicacy, story_intro, story_cover
        FROM story";
$histories = $pdo->query($sql);
$storyRows = $histories->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($storyRows);
