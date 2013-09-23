<div class="search right">
	<!-- <div class="search-field-wrapper clearfix">
		{{Form::open(array('url' => 'search'));}}
		{{Form::text('','Trouvez étudiant, projet et plus',array('class' => 'search-field'));}}
		<input type="image" class="search-btn" src="img/search-nav-btn.png" alt="Submit" />
		{{Form::close();}}
	</div> -->
	<div class="background">
		{{Form::open(array('url' => 'search','id'=>'searchform'));}}
		{{Form::text('','',array('class' => 'field'));}}
		{{Form::close();}}
	</div>
	<div class="btn"></div>
</div>