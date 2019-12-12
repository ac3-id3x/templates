	function Accordeon(clique,classe){
					if ($(clique).next(classe+":visible").length != 0) {
						$(clique).next(classe).slideUp("normal",function(){
							$(classe).prev().removeClass("open");													
						});
					}else{
						$(classe).slideUp("normal",function(){
							 $(classe).prev().removeClass("open");	
						});
						$(clique).next(classe).slideDown("normal",function(){
							 $(clique).addClass("open");							
						});
					}			
					
					return false;
				}
				
				$(document).ready( function () {			

					$(".AffBiens").hide();
					$(".AffBiens.first").show();				
					
					$(".typeTransac").click( function () {		
						if($(this).hasClass('open')){
							
						}else{
							Accordeon(this,".AffBiens");		
						}	
					});  
					
					$(".FancyBox").fancybox({
					centerOnScroll:true,
					overlayColor:'#000'
					});
					
				});			
				
