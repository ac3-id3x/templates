var Edition=0; 			// variable globale qui sert à savoir si le texte du form a été modifié

function Accordeon(clique,classe){
	if ($(clique).next(classe+":visible").length != 0) {
		$(clique).next(classe).slideUp("normal",function(){
			$(classe).prev().removeClass("open");
			$(clique).next(classe).mCustomScrollbar("update");			
		});
	}else{
		$(classe).slideUp("normal",function(){
			 $(classe).prev().removeClass("open");	
			 $(clique).next(classe).mCustomScrollbar("update");			
		});
		$(clique).next(classe).slideDown("normal",function(){
			 $(clique).addClass("open");
			 $(clique).next(classe).mCustomScrollbar("update");			
		});
	}			
	return false;
}

function AccordeonPoi(clique,classe){

	if ($(clique).parent('div').next(classe+":visible").length != 0) {
		$(clique).parent('div').next(classe).slideUp("normal",function(){
			$(classe).prev().removeClass("open");
			$(clique).parent('div').next(classe).mCustomScrollbar("update");			
		});
	}else{
		$(classe).slideUp("normal",function(){
			$(this).parent().find('.OngInteret').removeClass("open");	
			 $(clique).parent('div').next(classe).mCustomScrollbar("update");			
		});
		$(clique).parent('div').next(classe).slideDown("normal",function(){
			 $(clique).addClass("open");
			 $(clique).parent('div').next(classe).mCustomScrollbar("update");			
		});
	}			
	return false;
}


				
function MajMsg(valeur){
	if(Edition==0){
		var TexteDefaut;	
		switch ($(valeur).val()) {
		 case "1":
		 TexteDefaut=TexteRappel;
		 $("#horaires").show();
		 $("#messageTitre").hide();
		 $("#messageChamp").hide();
		 $("#diversDetail").hide();
		 $("#joursVisite").hide();
		 break;
		 case "2":
		 TexteDefaut=TextePlusinfo;
		 $("#horaires").hide();
		 $("#messageTitre").hide();
		 $("#messageChamp").hide();
		 $("#diversDetail").show();
		 $("#joursVisite").hide();
		 break;
		 case "3":
		 TexteDefaut=TexteVisiter;
		 $("#horaires").show();
		 $("#messageTitre").hide();
		 $("#messageChamp").hide();
		 $("#diversDetail").hide();
		 $("#joursVisite").show();
		 break;		
		 default:
		 TexteDefaut="";
		 break;	 
		}
		if(TexteDefaut){
			$("#message").val(TexteDefaut);
		}
	}
}

$(document).ready( function () {		
			MajMsg("#SelectSujet");			
			$("#boutonEnvoyerFormulaireCompact").click(function() {
				$("#formulaire").submit();
			});
			$(".OngAnnonceContent").hide();
			$(".OngAnnonceContent.first").show();		
			$(".OngInteretContent").hide();
			$(".OngInteretContent.first").show();					
			
			$(".prerempli").click(function() { 
				$(this).val("");
			}); 
			
			$('#message').keydown(function() { 
				Edition=1;
			}); 						// ici quand on modifie le texte du form
			
			$("#SelectSujet").change(function(){
				MajMsg(this);	
			});  	// quand on change le select du form

			/*
			$("#OngletsInteret li input").click(function(){
				var bol;
				var parentTag=$(this).parent().parent();
				if($(this).attr('checked')){
					bol=true;
				}else{
					bol=false;
				}
				$(parentTag).find('ul input').attr("checked", bol);	
			});
			*/
		
			$(".Ong").click( function () {	
				if($(this).hasClass('open')){
					
				}else{		
					Accordeon(this,".OngAnnonceContent");	
				}		
			});    
			
			$(".OngInteret").click( function () {
				if($(this).hasClass('open')){
					
				}else{					
					AccordeonPoi(this,".OngInteretContent");	
				}		
			});    
		
			
	 $(".OngAnnonceContent").mCustomScrollbar();
	 $(".OngInteretContent").mCustomScrollbar();

		$(".FancyBox").fancybox({
			centerOnScroll:true,
			overlayColor:'#000',
			titleShow : false
		});
		$(".FancyBoxYT").fancybox({
			centerOnScroll:true,
			overlayColor:'#000',
			'padding'		: 0,
			titleShow : false
		});
		$(".FancyBoxVideo").fancybox({
			centerOnScroll:true,
			overlayColor:'#000',
			'width' : 550,
			'height' : 420,
			titleShow : false
		});
		$(".FancyBoxGrd").fancybox({
			centerOnScroll:true,
			overlayColor:'#000',
			'width' : 960,
			'height' : 600,
			titleShow : false
		});
		$(".FancyBoxFriend").fancybox({
			centerOnScroll:true,
			overlayColor:'#000',
			'width' : 500,
			'height' : 425,
			titleShow : false
		});
			$(".FancyBoxPrint").fancybox({
			centerOnScroll:true,
			overlayColor:'#000',
			'width' : 795,
			'height' : 1000,
			titleShow : false
		});
	 
	 	if(ouvrirform==1){
    		$("#FormSouhaite1").trigger('click');
    }
    /* TAB POI/INFOS */
    $('.poiH2').click(function() {
    	$('#POI').show();
    	$('#InfosLocales').hide();
		$('.poiH2').addClass("activepoi bgcolor2");
    	$('.infosH2').removeClass("activepoi bgcolor2");
    });
    $('.infosH2').click(function() {
    	$('#POI').hide();
    	$('#InfosLocales').show();
		$('.poiH2').removeClass("activepoi bgcolor2");
    	$('.infosH2').addClass("activepoi bgcolor2");
    });
});			


    