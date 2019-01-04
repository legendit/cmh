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


// admin routes
Route::group(['prefix'=>'dashboard'], function(){
    Route::get('/', 'DashboardController@index')->name('dashboard');
    Route::get('/home', 'BasicController@home')->name('home');
    Route::post('/add/data', 'BasicController@addData')->name('addData');
});