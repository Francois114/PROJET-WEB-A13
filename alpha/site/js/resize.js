

$(window).resize(function() {

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
});