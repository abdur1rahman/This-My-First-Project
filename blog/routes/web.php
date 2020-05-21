<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/chartData', ['middleware'=>'auth', 'uses'=>'chartDatacontroller@onAllselect']);
$router->get('/ClientReview', ['middleware'=>'auth', 'uses'=>'clientRevewcontroller@onAllselect']);
$router->post('/contactSend', ['middleware'=>'auth', 'uses'=>'contactcontroller@onContactSend']);

$router->get('/coursHome', ['middleware'=>'auth', 'uses'=>'courescontroller@onSelectfour']);
$router->get('/coursPage', ['middleware'=>'auth', 'uses'=>'courescontroller@onSelectAll']);
$router->get('/courseDetails/{CourseID}', ['middleware'=>'auth', 'uses'=>'courescontroller@onSelectDetails']);

$router->get('/footersubmit', ['middleware'=>'auth', 'uses'=>'footercontroller@onAllselect']);
$router->get('/informetionetc', ['middleware'=>'auth', 'uses'=>'informationcntroller@onAllSelect']);
$router->get('/servicename', ['middleware'=>'auth', 'uses'=>'servicecontroller@onAllselect']);

$router->get('/projectHome', ['middleware'=>'auth', 'uses'=>'projectcontroller@onThreeSelect']);
$router->get('/projectAll', ['middleware'=>'auth', 'uses'=>'projectcontroller@onAllselect']);
$router->get('/projectDetails/{projectID}', ['middleware'=>'auth', 'uses'=>'projectcontroller@onClick']);

$router->get('/Homevideo', ['middleware'=>'auth', 'uses'=>'homeetccontroller@onAllselect']);
$router->get('/Totalproject', ['middleware'=>'auth', 'uses'=>'homeetccontroller@TotalprojectClient']);
$router->get('/TecDes', ['middleware'=>'auth','uses'=>'homeetccontroller@TechDescription']);
$router->get('/HomeTitle', ['middleware'=>'auth','uses'=>'homeetccontroller@onselectHomeTitle']);
