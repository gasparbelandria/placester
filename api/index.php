<?php
require 'Slim/Slim.php';
$app = new Slim();

$app->get('/list', 'getList');

$app->run();

function getList() {
        $url = 'http://api.placester.com/api/v2.1/listings?api_key=3eb444f8869cb88bbc349586573aabbb84a316d7';
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        $list = curl_exec($curl);
        curl_close($curl);
        echo $list;
}
?>