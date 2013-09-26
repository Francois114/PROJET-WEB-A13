$(function() {
            

            $("#nav_secondaire").hide();
            $("#explorer").hover(function(){

            	$("#nav_secondaire").slideToggle("slow").siblings("div:visible");
				
				$("#nav_secondaire").hover(function(){

            		$(this).siblings("div:visible");


            	});

            });
            
    });