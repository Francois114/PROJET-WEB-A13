<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	return View::make('acceuil');
});

Route::any('search', array('as' => 'search', function() {
    return 'Route "search"';
}));

Route::get('/test', function()
{
	return View::make('test');
});