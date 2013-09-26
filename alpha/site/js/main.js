// Sert a prévenir de remplir la recherche lorsqu'une premiere fois 
// la recherche est effectué et que la personne retourne en arrière
$(".search .background .field").val('');

// Gére la valeur par défaut d'un input:text ou d'un textarea
// Il peut convertir un input:text en :password s'il à la class .change-to-password
function inputDefaultValueGestion(input){
	var defaultValue = $(input).val();
	if($(input).is('input:text') || $(input).is('textarea')){
		$(input).focus(function() {
			if($(this).val()===defaultValue){
				$(this).val('');
				if($(this).is('.change-to-password') && $(this).is('input:text')){$(this).get(0).type = 'password';}
			}
		});
	}
	$(input).focusout(function() {
		if(($(this).val().match(/^[ \t]+$/))||($(this).val()==='')){
			if($(this).is('.change-to-password') && $(this).is('input:password')){$(this).get(0).type = 'text';}
			$(this).val(defaultValue);
		}
	});
}
// Ajoute de la function inputDefaultValueGestion a tout les input de text et les textarea
$('input:text,textarea').each(function(){
	inputDefaultValueGestion(this);
});

$(".side-nav-header-btn").click(function(){
	if ($(".side-nav-wrapper").css("left")==="-188px") {
		$(".side-nav-header-background").animate({width:'188px'},400);
		$(".side-nav-wrapper").animate({left:'0px'},400);
		$(this).addClass('active');
		$('.librexpo-title').addClass('active');
	}else if ($(".side-nav-wrapper").css("left")==="0px"){
		$(".side-nav-header-background").animate({width:'0px'},400);
		$(".side-nav-wrapper").animate({left:'-188px'},400);
		$(this).removeClass('active');
		$('.librexpo-title').removeClass('active');
	}
});

$(".search .btn").click(function(){
	if ($(".search .background").css("right")==="-214px") {
		$(".search .background .field").focus();
		$(".search .background").animate({right:'0px'},400);
		$(this).addClass('active');
	}else if ($(".search .background").css("right")==="0px"){
		if (!$(".search .background .field").val()){
			$(".search .background").animate({right:'-214px'},400, function(){
				if($(".search .btn").hasClass('active')){$(".search .btn").removeClass('active');}
			});
		}else{
			$( ".search .background" ).off("focusout");
			$( ".search .background" ).stop();
			$( "#searchform" ).submit();
		}
		
	}
});

$(".search .background .field").focusout(function(){
	$(".search .background").animate({right:'-214px'},400, function(){
		if($(".search .btn").hasClass('active')){$(".search .btn").removeClass('active');}
	});
});



/*$(window).resize(function() {

	var nbrArticle = $("main > .s-width-tile").length;
	var articleSpace = $(window).width()-((95+80)+(3*15));
	var nbrHorizontalArticle = Math.floor(articleSpace/268);
	
	if (nbrHorizontalArticle>1) {
		$("main, main > .s-width-tile").removeAttr("style");
	};

	if(nbrHorizontalArticle<=1){
		$("main").css("padding", "50px 20% 0px 20%");
		$("main").width("60%");
		$("main > .s-width-tile").css("margin", "15px 0px 0px 0px");
		$("main > .s-width-tile").width("100%");
	}else if( nbrArticle < nbrHorizontalArticle){
		$("main").width(nbrArticle*283);
	}else{
		$("main").width(nbrHorizontalArticle*283);
	}

});*/




