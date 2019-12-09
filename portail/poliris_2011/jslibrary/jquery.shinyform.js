/*
* 
* 		Shinyform 1.0 par Léo Fontin pour www.snoupix.com
*		© www.snoupix.com 2011
*		Réalisé pour Snoupix.com et à disposition selon les termes de la licence Creative Commons. http://creativecommons.org/licenses/by-sa/3.0/ 
*
*
*/
(function($){
	
	var TlisteOuvertes = new Array();	//Tableau contenant les classes des listes déjà ouvertes
	TlisteOuvertes[0] = "themes_contact";
	
	$.fn.shinyform = function(options){
	
		/// --- SELECT --- ///
		function shiny_select(elem){
			elem.wrap('<div class="shinyform_select shinyform"></div>');
			elem.hide();
			
			var contener = elem.parent('.shinyform_select');
			contener.addClass(elem.attr('class'));
			contener.append('<span class="shinyform_select_name"></span><span class="shinyform_select_button"></span>');
			var name = $('.shinyform_select_name', contener);
			var button = $('.shinyform_select_button, .shinyform_select_name', contener);
			
			
			var option_selected = 0;
			
			var nb_item = elem.find('option').length;
			
			
			
			if(nb_item > 1){
				
				contener.append('<ul class="shinyform_select_list"></ul>');
				liste = $('.shinyform_select_list',contener);
				for(var i=0; i<nb_item; i++){
					liste.append('<li><a href="'+elem.find('option').eq(i).val()+'">&bull; '+elem.find('option').eq(i).text()+'</a></li>');
					if(elem.find('option').eq(i).attr('selected')){
						var option_selected = i;
					}
				}
				if(liste.length > 0) {
					liste.hide();
				}
			}
			
			name.text(elem.find('option').eq(option_selected).text());

			
			
			if(elem.attr('disabled')){
				contener.addClass('disabled');
				return;
			}
			
			var manageList = function(){
				
				if(contener.hasClass('open')){
					$('.shinyform_select').removeClass('open');
					$('.shinyform_select_list').hide();
				}else{
					$('.shinyform_select').removeClass('open');;
					$('.shinyform_select_list').hide();
					contener.addClass('open');
					liste = $(contener.children('.shinyform_select_list'));
					liste.slideDown(100);
					
				}
			}
			
			contener.hover(function(){
				$(this).addClass('hover');
			}, function(){
				$(this).removeClass('hover');
			});
			
			button.mousedown(function(){
				contener.addClass('focus');
			});
			button.mouseup(function(){
				contener.removeClass('focus');
			});
			
			button.click(function(){
				manageList();
			});
			liste = $(contener.children('.shinyform_select_list'));
			liste.find('a').click(function(){
				option_selected = liste.find('a').index($(this));
				contener.find('select option').eq(option_selected).attr('selected','selected');
				name.text(elem.find('option').eq(option_selected).text());
				manageList();
				return false;
			});
			
			$('body').click(function() { 
				$('.shinyform_select').removeClass('open');
				$('.shinyform_select_list').hide();
			}); 
			
			button.click(function(event){ 
				event.stopPropagation(); 
			});
			
			//Gestion des listes des demandes du formulaire (besoin_aide.htm)
			//Les lsites sont générées et customisées par ce fichier js
			$(".shinyform_select_list li a").click(function () {
				var choix = $(this).attr("href");
				maxId = TlisteOuvertes.length;
				
				//Si la liste est différente de la précédente
				if (TlisteOuvertes[maxId-1] != choix)
				{
					
					TlisteOuvertes[maxId] = choix;
					
					//Affiche la liste correspondante à la sélection (tableau formulaire contact)
					$("."+choix).show();
					
					//Affecte le mail en fonction de la catégorie sélectionnée (tableau formulaire contact)
					if (choix == "support_appli_pericles" || choix == "logiciels_autres" || choix == "probleme_de_remontee_dannonces" || choix == "diffusion_autres_que_portails" || choix == "diffusion_autres" || choix == "assitance_autres")
					{
						email_to = 'support@poliris.fr';
						}else if(choix == "multidiffusion" || choix == "passerelles_pericles_net_vers_portails" || choix == "les_biens_vendus"){
						email_to = 'multidiff@poliris.fr';
						}else if(choix == "rdv" || choix == "gestion_des_licences" || choix == "support_appli_pericles"){
						email_to = 'supportn2@poliris.fr';
						}else if(choix == "Demande_evolution"){
						email_to = 'serviceclients@poliris.fr';
						}else if(choix == "site_internet_agence"){
						email_to = 'supportweb@poliris.fr';
						}else if(choix == "mon_referencement"){
						email_to = 'audience@poliris.fr';
						}else if(choix == "noms_de_domaine" || choix == "gestion_de_mes_emails"){
						email_to = 'domaine-email@poliris.fr';
						}else if(choix == "mes_coordonnees"){
						email_to = 'domaine-email@poliris.fr';
						}else if(choix == "produits_logiciels_pericles" || choix == "gestion_des_contrats" || choix == "reclamation" || choix == "admin_autre"){
						email_to = 'adv@poliris.fr';
						}else if(choix == "commerciale"){
						email_to = 'asco@poliris.fr';
						}else if(choix == "atelier_pericles"){
						email_to = 'atelier-pericles@poliris.fr';
						}else if(choix == "avis_de_valeur"){
						email_to = 'avisdevaleur@poliris.fr';
						}else if(choix == "site_ref"){
						email_to = 'marie.defonvielle@poliris.fr';
						}else if(choix == "comptabilite"){
						email_to = 'recouvrement@poliris.fr';
					}
				}
			});
			
			//Gère la suppression detoutes les listes lorsque l'internaute relique une liste
			$("#demande span").click(function () {
				maxId = TlisteOuvertes.length;
				var choix = $(this).parent().parent().attr("class");
				if (TlisteOuvertes[maxId-1] != choix)
				{
					if($.inArray(choix, TlisteOuvertes) != -1 && choix != "themes_contact")
					{
						$("#demande p").hide();
						$(".themes_contact").show();
						TlisteOuvertes.length = 0;
					}
				}
			});
		}

		/// --- RADIO --- ///
		function shiny_radio(elem){
			elem.wrap('<div class="shinyform_radio shinyform"></div>');
			
			var contener = elem.parent('.shinyform_radio');
			contener.addClass(elem.attr('class'));
			elem.css({ 	height : $('.shinyform_radio').height(),
							width : $('.shinyform_radio').width(),
							opacity : 0});
						
			var manageCheck = function(){
				$('input:radio').each(function(){
					if($(this).attr('checked')){
						$(this).parent('.shinyform_radio').addClass('checked');
					}else{
						$(this).parent('.shinyform_radio').removeClass('checked');
					}
					$('input:radio').removeClass('disabled');
					if($(this).attr('disabled')){
						$(this).parent('.shinyform_radio').addClass('disabled');
					}
				});
			};
			
			manageCheck();
			
			elem.mousedown(function(){
				contener.addClass('focus');
			});
			elem.mouseup(function(){
				contener.removeClass('focus');
			});
			
			elem.click(function(){
				manageCheck();
			});		
		}
		
		/// --- CHECKBOX --- ///
		function shiny_checkbox(elem){
			elem.wrap('<div class="shinyform_checkbox shinyform"></div>');
			
			var contener = elem.parent('.shinyform_checkbox');
			contener.addClass(elem.attr('class'));
			elem.css({ 	height : $('.shinyform_checkbox').height(),
							width : $('.shinyform_checkbox').width(),
							opacity : 0});
						
			var manageCheck = function(){
				$('input:checkbox').each(function(){
					if($(this).attr('checked')){
						$(this).parent('.shinyform_checkbox').addClass('checked');
					}else{
						$(this).parent('.shinyform_checkbox').removeClass('checked');
					}
					$('input:checkbox').removeClass('disabled');
					if($(this).attr('disabled')){
						$(this).parent('.shinyform_checkbox').addClass('disabled');
					}
				});
			};
			
			manageCheck();
			
			elem.mousedown(function(){
				contener.addClass('focus');
			});
			elem.mouseup(function(){
				contener.removeClass('focus');
			});
			
			elem.click(function(){
				manageCheck();
			});
		}
		
		/// --- FILE --- ///
		function shiny_file(elem){
			elem.wrap('<div class="shinyform_file shinyform"></div>');
			
			var contener = elem.parent('.shinyform_file');
			contener.addClass(elem.attr('class'));
			contener.append('<span class="shinyform_file_name">'+settings.txtNameFile+'</span><span class="shinyform_file_button">'+settings.txtButtonFile+'</span>');
			var name = $('.shinyform_file_name', contener);
			var button = $('.shinyform_file_button', contener);
			
			
			elem.css({ 	height : $('.shinyform_file').height(),
							opacity : 0.0});
							
			if(elem.attr('disabled')){
				contener.addClass('disabled');
			}
			
			elem.change(function(){
				name.text(elem.val());
			});
			
			contener.hover(function(){
				contener.addClass('hover');
			}, function(){
				contener.removeClass('hover');
			});
			
			elem.mousedown(function(){
				contener.addClass('focus');
			});
			elem.mouseup(function(){
				contener.removeClass('focus');
			});
		}
		
		/// --- INIT OPTIONS --- ///
		var settings = {
			txtNameFile : 'Aucun fichier',
			txtButtonFile : 'Parcourir ...'
		};
		
		
		settings = $.extend(settings,options);
		
		return this.each(function(){
			
			if($.browser.msie && $.browser.version < 7){
				return false;
			}
		
			var my = $(this);
		
			if(my.is('select')){
				shiny_select(my);	
			}
			if(my.is('input:checkbox')){
				shiny_checkbox(my);
			}
			if(my.is('input:radio')){
				shiny_radio(my);
			}
			if(my.is('input:file')){
				shiny_file(my);
			}
			
		});
		
	};

})(jQuery);