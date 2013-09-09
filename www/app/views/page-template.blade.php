@extends('base')

@section('page')
	@include('header')
	@include('side-nav')
	<div class="main-wrapper">
		<div class="left main-align"></div>
		<div class="center main">
		@section('main')
			@include('footer')
		@show
		</div>
		<div class="right main-align"></div>
	</div>
@stop