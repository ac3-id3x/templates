// fonction appellée lors d'un click sur une sous catégorie (permet de gérer la séléction des POI)
function chkClick(source){

	//Pour éviter les infobulles zombies
	if(infowindow){
		infowindow.close();
		closeMarker();

	}

	if(	interruptChkClick == 0){
		$(source).find('.fleche').css({
			"-webkit-transform": "rotate(90deg)",
			"-moz-transform": "rotate(90deg)",
			"transform": "rotate(90deg)" 
		});
		if($(source).find('.fleche').attr("class").indexOf("lastFleche") == -1){
			if($(source).parent().find(".lastFleche").parent().attr("id") != null){
				$(source).parent().find(".lastFleche").css({
					"-webkit-transform": "rotate(0deg)",
					"-moz-transform": "rotate(0deg)",
					"transform": "rotate(0deg)" 
				});
				$("#info"+$(source).parent().find(".lastFleche").parent().attr("id").substring(2)).addClass("invisible");
				$(source).parent().find(".lastFleche").removeClass("lastFleche");
			}
			$("#info"+$(source).attr("id").substring(2)).removeClass("invisible");
			$(source).find('.fleche').addClass("lastFleche");
		}
		else{
			$(source).find(".lastFleche").css({
					"-webkit-transform": "rotate(0deg)",
					"-moz-transform": "rotate(0deg)",
					"transform": "rotate(0deg)" 
			});
			$("#info"+$(source).attr("id").substring(2)).addClass("invisible");
			$(source).find(".lastFleche").removeClass("lastFleche");
		}
		//On récupère l'id de la checkbox cliquée
		Suffixe = source.id.substring(3);
		if(Suffixe != null){
			var oElement = $('#chk_'+Suffixe);
			//alert('#chk_'+Suffixe);
			// Element non sélectionné 
			if(!oElement.prop('checked')){
				//Si la checkbox n'est pas cochée on la coche manuellement
				oElement.prop( "checked", true );
				$('#kp_'+Suffixe).find(".miniature").addClass("invisible");
				$('#kp_'+Suffixe).find(".miniature2").removeClass("invisible");
				$('#kp_'+Suffixe).addClass("sous_categorie_selected");
				$('#kp_'+Suffixe).removeClass("sous_categorie");
				majAffichageDiv(Suffixe);
				$('#kp_'+Suffixe).parent().find(".open").removeClass("open");/*Pour considérer les autres comme étant fermées*/
				$('#kp_'+Suffixe).addClass("open");
				idCatContent = $(source).parent().attr('id');
				//On test si toutes les sous catégorie d'une même catégorie sont cochées pour valider l'option tout sélectionner
				//Si l'indice du marqueur n'existe pas cela signifie que les POI de la sous categorie n'ont pas encore été envoyé par le serveur
				if($('#kp_'+Suffixe).parent().find(".sous_categorie").length == 0){/*Si tous est coché on change l'état de la catégorie*/
					$("#"+idCatContent.substring(0,idCatContent.indexOf("Content"))+"Title").find(":input").prop("checked",true);
				}
				if(!TabDataMarker["c_"+Suffixe]){
					Value = oElement.val();
					Value = Value.split('|');
					get_POI(Value[0], Value[1], 0);
				}
				else{//Sinon il suffit d'afficher les marqueurs caché
					for(var i=0; i<TabDataMarker["c_"+Suffixe].length; i++){
						TabDataMarker["c_"+Suffixe][i].setVisible(true);
					}
				}
			}else if($('#kp_'+Suffixe).attr("class").indexOf("open") >= 0){
				oElement.prop( "checked", false );
				$('#kp_'+Suffixe).find(".miniature2").addClass("invisible");
				$('#kp_'+Suffixe).find(".miniature").removeClass("invisible");
				$('#kp_'+Suffixe).addClass("sous_categorie");
				$('#kp_'+Suffixe).removeClass("sous_categorie_selected");
				majAffichageDiv(Suffixe);
				$('#kp_'+Suffixe).parent().find(".open").removeClass("open");/*Pour considérer les autres comme étant fermées*/
				idCatContent = $(source).parent().attr('id');
				//On test si toutes les sous catégorie d'une même catégorie sont cochées pour valider l'option tout sélectionner
				//Si l'indice du marqueur n'existe pas cela signifie que les POI de la sous categorie n'ont pas encore été envoyé par le serveur
				if($('#kp_'+Suffixe).parent().find(".sous_categorie_selected").length == 0){/*Si tous est coché on change l'état de la catégorie*/
					$("#"+idCatContent.substring(0,idCatContent.indexOf("Content"))+"Title").find(":input").prop("checked",false);
				}
				nettoie_sous_categorie("c_"+Suffixe);
			}
			else{
				$('#kp_'+Suffixe).parent().find(".open").removeClass("open");
				$('#kp_'+Suffixe).addClass("open");
			}
		}
	}
	interruptChkClick = 0;
}

//Permet de gérer le clic sur la checkbox de la sous catgorie catégorie séléctionnée
function unselectSousCat(source){
	var id = $(source).parent().attr("id");
	var cat = $("#"+id).parent();
	Suffixe = id.substring(3);
	var oElement = $('#chk_'+Suffixe);
	oElement.prop( "checked", false );
	$('#kp_'+Suffixe).find(".miniature2").addClass("invisible");
	$('#kp_'+Suffixe).find(".miniature").removeClass("invisible");
	$('#kp_'+Suffixe).addClass("sous_categorie");
	$('#kp_'+Suffixe).removeClass("sous_categorie_selected");
	majAffichageDiv(Suffixe);
	$('#info_'+Suffixe).addClass("invisible");
	$('#kp_'+Suffixe).removeClass("open");
	$('#kp_'+Suffixe).find(".lastFleche").css({
			"-webkit-transform": "rotate(0deg)",
			"-moz-transform": "rotate(0deg)",
			"transform": "rotate(0deg)" 
	});
	$('#kp_'+Suffixe).find(".lastFleche").removeClass("lastFleche");
	if($(cat).find(".sous_categorie_selected").length == 0){/*Si tous est décoché on change l'état de la catégorie*/
		$("#"+$(cat).attr("id").substring(0,cat.attr("id").indexOf("Content"))+"Title").find(":input").prop("checked",false);
	}
	nettoie_sous_categorie("c_"+Suffixe);
	interruptChkClick = 1;
}

//Permet de gérer le clic sur la checkbox de la sous catgorie catégorie non séléctionnée
function selectSousCat(source){
	var id = $(source).parent().attr("id");
	var cat = $("#"+id).parent();
	Suffixe = id.substring(3);
	var oElement = $('#chk_'+Suffixe);
	oElement.prop( "checked", true );
	$('#kp_'+Suffixe).find(".miniature").addClass("invisible");
	$('#kp_'+Suffixe).find(".miniature2").removeClass("invisible");
	$('#kp_'+Suffixe).addClass("sous_categorie_selected");
	$('#kp_'+Suffixe).removeClass("sous_categorie");
	majAffichageDiv(Suffixe);
	if($(cat).find(".sous_categorie").length == 0){/*Si tous est coché on change l'état de la catégorie*/
		$("#"+$(cat).attr("id").substring(0,cat.attr("id").indexOf("Content"))+"Title").find(":input").prop("checked",true);
	}
	if(!TabDataMarker["c_"+Suffixe]){
		Value = oElement.val();
		Value = Value.split('|');
		get_POI(Value[0], Value[1], 0);
	}
	else{//Sinon il suffit d'afficher les marqueurs caché
		for(var i=0; i<TabDataMarker["c_"+Suffixe].length; i++){
			TabDataMarker["c_"+Suffixe][i].setVisible(true);
		}
	}
	interruptChkClick = 1;
}

//Permet d'afficher et masquer le contenu associé à chaque catégorie + gestion du liseret de couleur
function chkClick2(source){
	var id = source.id;
	//Affiche les sous cat
	$('#title').find('.catTitle').each(function() {
		if($(this).attr("id") == id){
			//alert("patate "+$(this).attr("id"));
			if($(this).attr("class").indexOf("open") < 0){
				$('#chk_poi_'+id.substring(3,id.indexOf("Title")).toLowerCase()).prop( "checked",true);
				$(this).addClass("open");
				$(this).find(".logoCat").addClass("invisible");
				$(this).find(".logoCat2").addClass("invisible");
				$(this).find(".logoCat3").removeClass("invisible");
				$("#"+id.substring(0,id.indexOf("Title"))+"Content").find(".detailPoi").each(function(){
					if($(this).attr("class").indexOf("invisible") < 0){
						$(this).addClass("invisible");
					}
				});
				catContent = $("#"+id.substring(0,id.indexOf("Title"))+"Content");
				$(catContent).find(".sous_categorie").each(function(){
					//alert("damn");
					$(this).find("#chk_"+$(this).attr("id").substring(3)).prop('checked',true);
					$(this).find(".miniature").addClass("invisible");
					$(this).find(".miniature2").removeClass("invisible");
					$(this).addClass("sous_categorie_selected");
					$(this).removeClass("sous_categorie");
					majAffichageDiv($(this).attr("id").substring(3));
					/*nettoie_sous_categorie("c_"+$(this).attr("id").substring(3));*/
				});
				$(catContent).find(".sous_categorie_selected").each(function(){/*Pour éviter les marqueurs zombies*/
					nettoie_sous_categorie("c_"+$(this).attr("id").substring(3));
				});
				$(catContent).find(".detailPoi").each(function(){
					$(this).addClass("invisible");
				});
				$(catContent).find(".fleche").each(function(){
					$(this).removeClass("lastFleche");
					$(this).css({
							"-webkit-transform": "rotate(0deg)",
							"-moz-transform": "rotate(0deg)",
							"transform": "rotate(0deg)" 
						});
				});
				$(catContent).find(".detailPoi:first").removeClass("invisible");
				$(catContent).find('.fleche:first').css({
					"-webkit-transform": "rotate(90deg)",
					"-moz-transform": "rotate(90deg)",
					"transform": "rotate(90deg)" 
				});
				$(catContent).find('.fleche:first').addClass("lastFleche");
				$(catContent).find(".open").removeClass("open");
				$(catContent).find("div:first").addClass("open");
				Value = $(this).attr("value").split('|');
				get_POI(Value[0], Value[1], 0);
			}
			else{
				var chk_box = $('#chk_poi_'+id.substring(3,id.indexOf("Title")).toLowerCase());
				catContent = $("#"+id.substring(0,id.indexOf("Title"))+"Content");
				if(!chk_box.prop("checked")){
					$('#chk_poi_'+id.substring(3,id.indexOf("Title")).toLowerCase()).prop( "checked",true);
					$(catContent).find(".sous_categorie").each(function(){
						//alert("damn2");
						$(this).find("#chk_"+$(this).attr("id").substring(3)).prop('checked',true);
						$(this).find(".miniature").addClass("invisible");
						$(this).find(".miniature2").removeClass("invisible");
						$(this).addClass("sous_categorie_selected");
						$(this).removeClass("sous_categorie");
						majAffichageDiv($(this).attr("id").substring(3));
					});
					$(catContent).find(".sous_categorie_selected").each(function(){/*Pour éviter les marqueurs zombies*/
						nettoie_sous_categorie("c_"+$(this).attr("id").substring(3));
					});
					
					$(catContent).find(".detailPoi").each(function(){
						$(this).addClass("invisible");
					});
					$(catContent).find(".fleche").each(function(){
						$(this).removeClass("lastFleche");
						$(this).css({
							"-webkit-transform": "rotate(0deg)",
							"-moz-transform": "rotate(0deg)",
							"transform": "rotate(0deg)" 
						});
					});
					$(catContent).find(".detailPoi:first").removeClass("invisible");
					$(catContent).find('.fleche:first').css({
						"-webkit-transform": "rotate(90deg)",
						"-moz-transform": "rotate(90deg)",
						"transform": "rotate(90deg)" 
					});
					$(catContent).find('.fleche:first').addClass("lastFleche");
					$(catContent).find(".open").removeClass("open");
					$(catContent).find("div:first").addClass("open");
					Value = $(this).attr("value").split('|');
					get_POI(Value[0], Value[1], 0);
				}
				else{//Sinon il faut décocher toutes les sous catégories
					$('#chk_poi_'+id.substring(3,id.indexOf("Title")).toLowerCase()).prop( "checked",false);
					$(catContent).find(".sous_categorie_selected").each(function(){
						//alert("damn2");
						$(this).find("#chk_"+$(this).attr("id").substring(3)).prop('checked',false);
						$(this).find(".miniature2").addClass("invisible");
						$(this).find(".miniature").removeClass("invisible");
						$(this).addClass("sous_categorie");
						$(this).removeClass("sous_categorie_selected");
						majAffichageDiv($(this).attr("id").substring(3));
						nettoie_sous_categorie("c_"+$(this).attr("id").substring(3));
					});
					$(catContent).find(".detailPoi").each(function(){
						$(this).addClass("invisible");
					});
					
					$(catContent).find('.fleche').each(function(){
						$(this).css({
							"-webkit-transform": "rotate(0deg)",
							"-moz-transform": "rotate(0deg)",
							"transform": "rotate(0deg)" 
						});
					});
					$(catContent).find('.fleche:first').removeClass("lastFleche");
					$(catContent).find(".open").removeClass("open");
				}
			}
		}
		else{
			//alert("pdp "+$(this).attr("id"));
			$(this).removeClass("open");
			$(this).find(".logoCat3").addClass("invisible");
			//alert($("#"+id.substring(0,id.indexOf("Title"))+"Content").find(".sous_categorie_selected").length);
			//alert("#"+$(this).attr("id").substring(0,$(this).attr("id").indexOf("Title"))+"Content");
			if($("#"+$(this).attr("id").substring(0,$(this).attr("id").indexOf("Title"))+"Content").find(".sous_categorie_selected").length > 0){
				//alert("pdp2");
				$(this).find(".logoCat").addClass("invisible");
				$(this).find(".logoCat2").removeClass("invisible");
				$(this).addClass("active");
			}
			else{
				//alert("pdp3");
				$(this).removeClass("active");
				$(this).find(".logoCat").removeClass("invisible");
			}
		}
	});
	$("#liseret").attr("value",id);//Change la couleur du liseret
	idContent = $("#"+id.substring(0,id.indexOf("Title"))+"Content").attr("id");
	$("#content").find(".catContent").each(function() {
		//alert(idContent);
		//alert($(this).attr("id"));
		if($(this).attr("id") == idContent){
			if($(this).attr("class").indexOf("active") < 0){;
				$(this).removeClass("invisible");
			}
			else{
				//alert("déjà affiché");
			}
		}
		else{
			if($(this).attr('class').indexOf("invisible") < 0){
				$(this).addClass("invisible");
			}
			else{
				//alert("déjà effacé");
			}
		}
	});
}

//Lorsqu'une sous catégorie est sélectionnée il faut modifier son apparence (changer la couleur du fond et celle de l'image)
function majAffichageDiv(Suffixe){
	var oElement = $('#chk_'+Suffixe);
	var source = $('#kp_'+Suffixe);
	//Si la sous catégorie vient d'être cochée on lui donne un style selected
	if(oElement.prop('checked')){
		$(source).find(".miniature2").removeClass('invisible');
		$(source).find(".miniature").addClass('invisible');
		$(source).addClass("sous_categorie_selected");
		$(source).removeClass("sous_categorie");
		$(source).find(".nombrePresent").addClass('nombrePresent2');
		$(source).find(".nombrePresent").removeClass('nombrePresent');
	}
	else{//Si la sous catégorie vient d'être décochée on lui enlève le style selected
		$(source).find(".miniature").removeClass('invisible');
		$(source).find(".miniature2").addClass('invisible');
		$(source).addClass("sous_categorie");
		$(source).removeClass("sous_categorie_selected");
		$(source).find(".nombrePresent2").addClass('nombrePresent');
		$(source).find(".nombrePresent2").removeClass('nombrePresent2');
	}
}

// //Lorsque l'on clique sur l'option de sélection d'une catégorie, une requête générale est envoyer, il faut donc traiter le retour de cette requête
// function separePOI(infos){

// 	listePoi = new Array();
// 	var i = 0;
// 	//On classe les résultats par sous theme
// 	while(infos[i] != null){
// 		if (listePoi[infos[i].theme_2] != null){
// 			listePoi[infos[i].theme_2].push(infos[i]);
// 		}
// 		else{
// 			listePoi[infos[i].theme_2] = [infos[i]];
// 		}
// 		i += 1;
// 	}
// 	//Pour chaque thème on crée tous les marqueurs et on rempli le tableau global
// 	for (var key in listePoi){

// 		if($("input[value=\"|"+listePoi[key][0].id_theme_2+"\"]")[0]){

// 			id_picto = $("input[value=\"|"+listePoi[key][0].id_theme_2+"\"]")[0].id.substring(4);
// 			creation_Marker(listePoi[key], id_picto);
			
// 		}
// 	}
// }

//Lorsque l'on clique sur l'option de sélection d'une catégorie, une requête générale est envoyer, il faut donc traiter le retour de cette requête
function separePOI(infos, idCat = null){
	listePoi = new Array();
	var i = 0;
	//On classe les résultats par sous theme
	while(infos[i] != null){
		if (listePoi[infos[i].id_theme_2] !== undefined && listePoi[infos[i].id_theme_2].length > 0){
			listePoi[infos[i].id_theme_2].push(infos[i]);
		}
		else{
			listePoi[infos[i].id_theme_2] = new Array();
			listePoi[infos[i].id_theme_2] = [infos[i]];
		}
		i += 1;
	}
	//Pour chaque thème on crée tous les marqueurs et on rempli le tableau global
	$.each(listePoi, function( sousCat, POIs ) { 
		if(sousCat !== undefined && listePoi[sousCat] !== undefined){
			chk_sous_cat = $(":input[value=\"|"+listePoi[sousCat][0].id_theme_2+"\"]")[0];
			if(chk_sous_cat){
				id_picto = chk_sous_cat.id.substring(4);
				creation_Marker(listePoi[sousCat], id_picto);
				affiche_detail_POI(id_picto, listePoi[sousCat]);
			}
		}
	});
}