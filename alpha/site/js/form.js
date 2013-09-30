$(function() {
            

            $("#contenu div").hide();
            $("#contenu h2").click(function(){
                
                $(this).next("div").slideToggle("slow").siblings("div:visible").slideUp("slow");
                //$(this).toggleClass("active");
                //$(this).toggleClass("notActive");
                //$(this).siblings("h1").removeClass("active");
                //$("#accordeon h1:first").addClass("notActive");
                //$(this).switchClass("notActive","active",1000);
                //$(this).siblings("h1").removeClass("active");
                //$(this).siblings("h1").addClass("notActive");





          
                
            });
            
    });

