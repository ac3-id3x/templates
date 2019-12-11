

// fonction appell�e lors d'un click sur une sous cat�gorie (permet de g�rer la s�l�ction des POI)
function chkClick(source){

	//Pour �viter les infobulles zombies
	if(infowindow != null){
		infowindow.close();
		closeMarker();
	}

	//On r�cup�re l'id de la checkbox cliqu�e
	Suffixe = source.id.substring(3);

	if(Suffixe != null){
		var oElement = $('#chk_'+Suffixe);
		//alert('#chk_'+Suffixe);
		/* Element non s�lectionn� */
		if(!oElement.prop('checked')){
			//Si la checkbox n'est pas coch�e on la coche manuellement
			oElement.prop( "checked", true );
			idCatContent = $(source).parent('dd').attr('id');
			//On test si toutes les sous cat�gorie d'une m�me cat�gorie sont coch�es pour valider l'option tout s�lectionner
			if($("#"+idCatContent).find("input[name=chk_poi]").length == $("#"+idCatContent).find("input[name=chk_poi]:checked").length){
				catTitle = $("#"+idCatContent.substring(0,idCatContent.indexOf("Content"))+"Title");
				//alert("#"+idCatContent.substring(0,idCatContent.indexOf("Content"))+"Title");
				catTitle.find(".miniatureTitle2").removeClass('invisible');
				catTitle.find(".miniatureTitle").addClass('invisible');
				$('#chk_poi_'+idCatContent.substring(3,idCatContent.indexOf("Content")).toLowerCase()).prop( "checked",true);
			}
			//Si l'indice du marqueur n'existe pas cela signifie que les POI de la sous categorie n'ont pas encore �t� envoy� par le serveur
			if(!TabDataMarker["c_"+Suffixe]){
				$('#kq_'+Suffixe).removeClass('sous_categorie');
				$('#kq_'+Suffixe).addClass('sous_categorie_selected');
				nettoie_sous_categorie("c_"+Suffixe);
				Value = oElement.val();
				Value = Value.split('|');
				get_POI(Value[0], Value[1], 0);
			}
			else{//Sinon il suffit d'afficher les marqueurs cach�
				for(var i=0; i<TabDataMarker["c_"+Suffixe].length; i++){
					TabDataMarker["c_"+Suffixe][i].setVisible(true);
				}
			}
		}else{
			//Lorsqu'une sous cat�gorie est d�coch�e il faut annuler l'option tout s�lectionner
			oElement.prop( "checked", false );
			$('#kq_'+Suffixe).removeClass('sous_categorie_selected');
			$('#kq_'+Suffixe).addClass('sous_categorie');
			//Il faut cacher tous les marqueurs de la sous cat�gorie
			if(TabDataMarker["c_"+Suffixe] != null){
				for(var i=0; i<TabDataMarker["c_"+Suffixe].length; i++){
					TabDataMarker["c_"+Suffixe][i].setVisible(false);
				}
			}
			idCatContent = $(source).parent('dd').attr('id');
			catTitle = $("#"+idCatContent.substring(0,idCatContent.indexOf("Content"))+"Title");
			catTitle.find(".miniatureTitle").removeClass('invisible');
			catTitle.find(".miniatureTitle2").addClass('invisible');
			
			$('#chk_poi_'+idCatContent.substring(3,idCatContent.indexOf("Content")).toLowerCase()).prop( "checked",false);

		}
		//On actualise l'affichage de la sous cat�gorie suite � ses changement d'�tat
		majAffichageDiv(source.id.substring(3));
	}
}

//Permet de g�rer le clic sur la checkbox de la cat�gorie non s�l�ctionn�e
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

//Permet de g�rer le clic sur la checkbox de la cat�gorie s�l�ctionn�e
function unSelectCat(source){
	//alert("declick on image");
	cat = $(source).parent();
	Suffixe = $(cat).attr("id");
	var chk_box = $('#chk_poi_'+Suffixe.substring(0,Suffixe.indexOf("Title")).toLowerCase());
		//Si la cat�gorie n'�tait pas coch� il faut la cocher et lancer la requ�te serveur
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

//Lorsqu'une sous cat�gorie est s�lectionn�e il faut modifier son apparence (changer la couleur du fond et celle de l'image)
function majAffichageDiv(Suffixe){
	var oElement = $('#chk_'+Suffixe);
	var source = $('#kp_'+Suffixe);
	//Si la sous cat�gorie vient d'�tre coch�e on lui donne un style selected
	if(oElement.prop('checked')){
		$(source).removeClass('sous_categorie');
		$(source).addClass('sous_categorie_selected');
		$(source).find(".miniature2").removeClass('invisible');
		$(source).find(".miniature").addClass('invisible');
		$(source).find(".nombrePresent").addClass('nombrePresent2');
		$(source).find(".nombrePresent").removeClass('nombrePresent');
		
	}
	else{//Si la sous cat�gorie vient d'�tre d�coch�e on lui enl�ve le style selected
		$(source).removeClass('sous_categorie_selected');
		$(source).addClass('sous_categorie');
		$(source).find(".miniature").removeClass('invisible');
		$(source).find(".miniature2").addClass('invisible');
		$(source).find(".nombrePresent2").addClass('nombrePresent');
		$(source).find(".nombrePresent2").removeClass('nombrePresent2');
	}
}

//Lorsque l'on clique sur l'option de s�lection d'une cat�gorie, une requ�te g�n�rale est envoyer, il faut donc traiter le retour de cette requ�te
function separePOI(infos, idCat = null){
	listePoi = new Array();
	var i = 0;
	//On classe les r�sultats par sous theme
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
	//Pour chaque th�me on cr�e tous les marqueurs et on rempli le tableau global
	$.each(listePoi, function( sousCat, POIs ) { 
		if(sousCat !== undefined && listePoi[sousCat] !== undefined){
			chk_sous_cat = $(":input[value=\"|"+listePoi[sousCat][0].id_theme_2+"\"]")[0];
			if(chk_sous_cat){
				id_picto = chk_sous_cat.id.substring(4);
				creation_Marker(listePoi[sousCat], id_picto);
			}
		}
	});

	if(idCat != null){//Si une cat�gorie enti�re a �t� s�l�ctionn�e il faut mettre � jour l'affichage de toutes ses sous cat�gories
			//Certain POI ne sont pas pr�sent sur la carte avec le niveau de zoom actuel. Cependant il faut les cocher
			//de mani�re � les actualiser lors d'un d�zoom
		var idCatTitle = $("dt[value=\""+infos[0].id_theme_1+"|\"]").attr("id");
		var idCatContent = idCatTitle.substring(0,idCatTitle.length - 5)+"Content";
		$("#"+idCatContent).children('div').each(function () {
			$(this).find('#chk_'+$(this).attr('id').substring(3)).prop('checked',true);
			$(this).removeClass('sous_categorie');
			$(this).addClass('sous_categorie_selected');
			majAffichageDiv($(this).attr('id').substring(3));
		});
	}
}