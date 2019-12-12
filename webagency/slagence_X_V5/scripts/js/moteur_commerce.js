var modele ='<div class="row-fluid bloc-commerce bloc-commerce-{id_commerce}" data-commerce="{id_commerce}"><input type="hidden" value="{id_commerce}" name="idtypecommerce"><div class="row-fluid small margin-top-20 bg-block-gradient padding-10"><div class="span2 pagination-centered"><div class="picto-commerce-{id_commerce} picto-commerce display-inline margin-top-20"></div><p>{type_commerce}</p></div>';
var modele = modele + '<div class="span10">{sous_commerce}</div>';
var modele = modele + '</div><div class="row-fluid padding-10"><div class="span2"><div class="btn bg-action typo-white span12 commerce-supprimer">Supprimer</div></div><div class="span6"></div><div class="span2"><div class="btn bg-action typo-white span12 commerce-rien">Tout d&eacute;cocher</div></div><div class="span2"><div class="btn bg-action typo-white span12 commerce-tout">Tout cocher</div></div></div></div>';

var idtypebienDefaut="6,7,8";

function ajaxCommerceGet(value_select, divid, url_get) {
		var split_elem = value_select.split('|');
		var length_elem = split_elem.length;
		var dataSend = '';
		for(i = 0; i < length_elem; i ++) {
				var value_elem = $("#"+split_elem[i]).val();
				var name_elem = $("#"+split_elem[i]).attr("name");
				dataSend += dataSend+name_elem+'='+value_elem+'&';
		}
		$.ajax({
			type: "GET",
			data: dataSend,
			dataType: "html",
			url: '/moteur,commerce,incl_'+url_get+'.htm',
			beforeSend: function() {
				$("#"+divid).hide();
			},
			success: function(data) {
				$("#"+divid).show();
				$("#"+divid).html(data);
	 	 	},
	 	 	error: function(xhr,statusText) {
	 	 		//console.log(xhr.status);
	 	 	},
	 	 	complete: function(xhr,statusText) {
	 	 	}
		});	
}






	$(document).ready(function() {
		
		/* on rajoute les row-fluid tous les 6 bloc */
		
		var divs = $(".bloc-commerce");		
		divs.parent().unwrap(); // on supprime le premier wrap (le premier row-fluid)
		divs.unwrap(); // on supprime le second wrap (display: none
		for(var i = 0; i < divs.length; i+=6) {
		  divs.slice(i, i+6).wrapAll('<div class="row-fluid pagination-centered small line-height-15"></div>');
		}
		
		$(".bouton-choix").click(function(){
			cible=$(this).attr("data-target");
			idtt=$(this).attr("data-idtt");
			if( ! $("#"+cible).is(":visible") ){
				$(".bouton-choix").parent().removeClass("active-tab-commerce");
				$(".bouton-choix").addClass("bg-block-gradient");
				$(this).removeClass("bg-block-gradient");				
				$(this).parent().addClass("active-tab-commerce");
				$(".bloc-choix").hide();
				$("#"+cible).show();
				$("[name='idtt']").val(idtt);
				if(idtt!=10){
					$("[name='idtypeactivite']").val("");
					$("[name='idtypecommerce']").val("");
					$("#cible-bloc-commerce").html("");
					$('#titre-bloc-commerce').hide();
					$(".bouton-idtt").removeClass("bloc-idtt-actif");					
					$(".bouton-idtt[data-idtt='"+idtt+"']").addClass("bloc-idtt-actif");	
				}else{
					$("[name='idtypebien']").val("");
					$("#commerce-typedebien").find(".bloc-commerce-actif").removeClass("bloc-commerce-actif");
				}
				ajaxCommerceGet('idtt','Commerce_Villes','villes');
			}else{
				// on vient de cliquer sur le bouton déjà actif
			}			
		});
		$(".bouton-idtt").click(function(){
				idtt=$(this).attr("data-idtt");
				if( idtt != $("bloc-idtt-actif").data("idtt") ){
					$(".bouton-idtt").removeClass("bloc-idtt-actif");
					$(this).addClass("bloc-idtt-actif");				
					$("[name='idtt']").val(idtt);
					ajaxCommerceGet('idtt','Commerce_Villes','villes');
					if(idtt==11){
						$("#commerce-typedebien").hide();					
						$("input[name='idtypebien']").val("");
						$("#commerce-typedebien").find(".bloc-commerce-actif").removeClass("bloc-commerce-actif");						
					}else{
						$("#commerce-typedebien").show();		
					}
				}
		});
		
		$(".bloc-entreprise [data-idtypebien]").click(function(){
			id = $(this).attr("data-idtypebien");
			if($(this).hasClass("bloc-commerce-actif")){
				$(this).removeClass("bloc-commerce-actif");
			}else{
				$(this).addClass("bloc-commerce-actif");
			}
			idtypebien="";
			virg="";
			$(".bloc-entreprise .bloc-commerce-actif[data-idtypebien]").each(function(){
				idtypebien=idtypebien + virg + $(this).attr('data-idtypebien');
				virg=",";
			});
			$("[name='idtypebien']").val(idtypebien);
		});
		
		
		$(".bloc-commerce [data-commerce]").click(function(){
			
			id = $(this).attr("data-commerce");
			if($(this).hasClass("bloc-commerce-actif") || $(".bloc-commerce[data-commerce="+id+"]").length != 0 ){
				$(this).removeClass("bloc-commerce-actif");
				$(".bloc-commerce[data-commerce="+id+"]").fadeOut("fast", function(){
					$(".bloc-commerce[data-commerce="+id+"]").remove();
						if( $('#cible-bloc-commerce').html() == "" ){
							$('#titre-bloc-commerce').hide();
						}
				});
			}else{
				$('#mini-moteur-commerce .layer').removeClass('display-none').addClass('display-show');
				$(this).addClass("bloc-commerce-actif");
				
				titre = $(this).find(".commerce-titre").html();
				souscommerce = '<div class="row-fluid">';
				
				tmp = modele.replace(/{id_commerce}/g,id);
				tmp = tmp.replace(/{type_commerce}/g,titre);	
				

			  	$.getJSON( "moteur,commerce,commerce_ajax.htm", { idtypecommerce: id } )
			  				.done(function( data ) {
			  					o=1;
			  					$.each( data.commerces, function( i, commerce ) {
			  						if(i % 4 == 0 && i != 0){
			  							souscommerce = souscommerce + '</div><div class="row-fluid">';
			  						}
			  						souscommerce = souscommerce + '<label class="span3"><input type="checkbox" name="idtypeactivite" value="'+commerce.id+'">'+commerce.lib+'</label>';
			  						
			    		  	});
			    		    souscommerce = souscommerce + '</div>';
			    				tmp = tmp.replace(/{sous_commerce}/g,souscommerce);
									$("#cible-bloc-commerce").append( tmp );
									$(".bloc-commerce [data-commerce="+id+"]").addClass("bloc-commerce-actif");
									if ($(".fixe")){
										$("body,html,document").animate({scrollTop: $(".bloc-commerce-"+id).offset().top - $(".fixe").height()}, 500);
									}else{
										$("body,html,document").animate({scrollTop: $(".bloc-commerce-"+id).offset().top}, 500);
									}
			  				})
								.always(function() {
									$('#mini-moteur-commerce .layer').removeClass('display-show').addClass('display-none');
									$('#titre-bloc-commerce').show();									
								});
			}
			
		});
	  
	  
	  $(document).on("click",".commerce-supprimer",function(){	  	
	  	$(this).closest(".bloc-commerce").fadeOut("fast", function(){	  		
	  		id=$(this).attr("data-commerce");
	  		$(".bloc-commerce [data-commerce="+id+"]").removeClass("bloc-commerce-actif");
	  		$(this).closest(".bloc-commerce").remove();	  		
	  	});
	  });
	  $(document).on("click",".commerce-tout",function(){
  		$(this).closest(".bloc-commerce").find("input:checkbox").prop("checked",true);
	  });
	  $(document).on("click",".commerce-rien",function(){
  		$(this).closest(".bloc-commerce").find("input:checkbox").prop("checked",false);
	  });
	  
	  
	  
	  
  	/* gestion retour page précédente, si l'idtt est différent du choix par défaut */
  	if ( $("input[name='idtt']").val() != $(".active-tab-commerce").find(".bouton-choix").data("idtt") ){
  		$(".bouton-choix").click();  		
  		
  		$("#commerce-typedebien").find(".bloc-commerce-actif").removeClass("bloc-commerce-actif");		
  		var idtypebien = $("input[name='idtypebien']").val();
  		var idtypebienArray = idtypebien.split(',');
  		$.each( idtypebienArray, function( index, value ){
			    $(".bloc-typebien[data-idtypebien='"+value+"']").addClass("bloc-commerce-actif");
			});
  			
  		
  	}
	  
	  
	  
	  $('.bouton-rechercher-moteur').on('click',function () {
				$('#saisie-suggest').val('');
				if( $("input[name='idtypebien']").val() == "" && ( $("input[name='idtt']").val() == "1" || $("input[name='idtt']").val() == "2" )  ){
					$("input[name='idtypebien']").val(idtypebienDefaut);
				}
				var btn = $(this);
				btn.button('loading');
				setTimeout(function () {
            btn.button('reset');
            $('#saisie-suggest').val($('#saisie-suggest').attr('data-value'));
        }, 2000);
				$('#mini-moteur-commerce').submit();
		});
		
	});
	
	
	