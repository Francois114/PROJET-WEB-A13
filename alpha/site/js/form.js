
$(function() {
            

            $("#contenu div").hide();
            $("#contenu h2").click(function(){
                
                $(this).next("div").slideToggle("slow").siblings("div:visible").slideUp("slow");
                

            });
            
    });

