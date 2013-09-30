$(function() {
            

            $("#nav_secondaire").css("display","none");
            
            $("#explorer, #nav_secondaire").hover(function(){

            	$("#nav_secondaire").slideToggle("slow").siblings("div:visible");
				
				/*$("#nav_secondaire").hover(function(){

            		$(this).css("display","block");
				
				});*/
				

            });

            
    });