<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 	'Dashboard@getIndex');

Route::get('/cart/export/pdf',      'Exports\Carts@pdf');
Route::get('/cart/export/mail',     'Exports\Carts@mail');
Route::get('/cart/export/trello',   'Exports\Carts@trello');

Route::get('/schedules/export/cartlist',   'Exports\Schedules@cartlist');
