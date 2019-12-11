// fonction appellée lors d'un click sur une sous catégorie (permet de gérer la séléction des POI)
function chkClick(source){

	//Pour éviter les infobulles zombies
	if(infowindow){
		infowindow.close();
		closeMarker();
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
			idCatContent = $(source).parent().attr('id');
			//On test si toutes les sous catégorie d'une même catégorie sont cochées pour valider l'option tout sélectionner
			if($("#"+idCatContent).find("input[name=chk_poi]").length == $("#"+idCatContent).find("input[name=chk_poi]:checked").length){
				catTitle = $("#"+idCatContent.substring(0,idCatContent.indexOf("Content"))+"Title");
				//alert("#"+idCatContent.substring(0,idCatContent.indexOf("Content"))+"Title");
				catTitle.find(".miniatureTitle2").removeClass('invisible');
				catTitle.find(".miniatureTitle").addClass('invisible');
				$('#chk_poi_'+idCatContent.substring(3,idCatContent.indexOf("Content")).toLowerCase()).prop( "checked",true);
			}
			//Si l'indice du marqueur n'existe pas cela signifie que les POI de la sous categorie n'ont pas encore été envoyé par le serveur
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
		}else{
			//Lorsqu'une sous catégorie est décochée il faut annuler l'option tout sélectionner
			oElement.prop( "checked", false );
			//Il faut cacher tous les marqueurs de la sous catégorie
			if(TabDataMarker["c_"+Suffixe] != null){
				for(var i=0; i<TabDataMarker["c_"+Suffixe].length; i++){
					TabDataMarker["c_"+Suffixe][i].setVisible(false);
				}
			}
			idCatContent = $(source).parent().attr('id');
			catTitle = $("#"+idCatContent.substring(0,idCatContent.indexOf("Content"))+"Title");
			catTitle.find(".miniatureTitle").removeClass('invisible');
			catTitle.find(".miniatureTitle2").addClass('invisible');
			
			$('#chk_poi_'+idCatContent.substring(3,idCatContent.indexOf("Content")).toLowerCase()).prop( "checked",false);

		}
		majAffichageDiv(source.id.substring(3));
	}
}

//Permet de gérer le clic sur la checkbox de la catégorie non séléctionnée
function selectCat(source){
	//alert("click on image");
	cat = $(source).parent();
	Suffixe = $(cat).attr("id");
	var chk_box = $('#chk_poi_'+Suffixe.substring(0,Suffixe.indexOf("Title")).toLowerCase());
	$(cat).find(".miniatureTitle2").removeClass('invisible');
	$(cat).find(".miniatureTitle").addClass('invisible');
	$('#cat'+Suffixe.substring(0,Suffixe.indexOf("Title"))+'Content').children('div').each(function () {
	//	alert("c_"+$(this).attr('id').substring(3));
		nettoie_sous_categorie("c_"+$(this).attr('id').substring(3));
	});
	Value = $('#cat'+Suffixe).attr("value").split('|');
	//nettoie_sous_categorie(salut);
	get_POI(Value[0], Value[1], 0);
	chk_box.prop( "checked",true);
	//interruptChkClick2 = 1;
}

//Permet de gérer le clic sur la checkbox de la catégorie séléctionnée
function unSelectCat(source){
	//alert("declick on image");
	cat = $(source).parent();
	Suffixe = $(cat).attr("id");
	var chk_box = $('#chk_poi_'+Suffixe.substring(0,Suffixe.indexOf("Title")).toLowerCase());
		//Si la catégorie n'était pas coché il faut la cocher et lancer la requête serveur
	$(cat ).find(".miniatureTitle").removeClass('invisible');
	$(cat ).find(".miniatureTitle2").addClass('invisible');
	$('#cat'+Suffixe.substring(0,Suffixe.indexOf("Title"))+'Content').children('div').each(function () {
		if($(this).find('#chk_'+$(this).attr('id').substring(3)).prop('checked')){
			$(this).click();
		}
	});
	chk_box.prop( "checked",false);
	//interruptChkClick2 = 1;
}

//Permet d'afficher et masquer le contenu associé à chaque catégorie
function chkClick2(source){
	var id = source.id;
	//Affiche les sous cat
	$(".catTitle").each(function() {
		if($(this).attr("id") == id){
			if($("#"+id).attr('class').indexOf("selected") < 0){;
				$("#"+id).addClass("selected");
				$('#'+id).parent().find(".sousmenu").removeClass("invisible");
			}
			else{
				//alert("déjà affiché");
			}
		}
		else{
			if($(this).attr('class').indexOf("selected") >= 0){
				$(this).removeClass("selected");
				$(this).parent().find(".sousmenu").addClass("invisible");
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
		$(source).find(".nombrePresent").addClass('nombrePresent2');
		$(source).find(".nombrePresent").removeClass('nombrePresent');
		$(source).addClass("sousCatSelected");
		
	}
	else{//Si la sous catégorie vient d'être décochée on lui enlève le style selected
		$(source).find(".miniature").removeClass('invisible');
		$(source).find(".miniature2").addClass('invisible');
		$(source).find(".nombrePresent2").addClass('nombrePresent');
		$(source).find(".nombrePresent2").removeClass('nombrePresent2');
		$(source).removeClass("sousCatSelected");
	}
}

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
			}
		}
	});

	if(idCat != null){//Si une catégorie entière a été séléctionnée il faut mettre à jour l'affichage de toutes ses sous catégories
		//Certain POI ne sont pas présent sur la carte avec le niveau de zoom actuel. Cependant il faut les cocher
		//de manière à les actualiser lors d'un dézoom
		var idCatTitle = $("div[value=\""+infos[0].id_theme_1+"|\"]").attr("id");
		var idCatContent = idCatTitle.substring(0,idCatTitle.length - 5)+"Content";
		$("#"+idCatContent).children('div').each(function () {
			$(this).find('#chk_'+$(this).attr('id').substring(3)).prop('checked',true);
			majAffichageDiv($(this).attr('id').substring(3));
		});
	}
}