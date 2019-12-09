
function PupOpenVirtualEye(id,type)
{
	var page;
	page = '/$$REP:1$$/$$REP:2$$/p_virtualeye_ajouter.htm';
	if (id != '' && type=='supp') {page = page + '?idvisu='+id;}
	if (type == 'voir') {page = page + '?voir='+id;}
	PopUP(page,'visuel',400,300,100,100,'no','no');
}
/*
function ValidForm()
{
	var objNbPieces = MM_findObj("nb_pieces");
	lang_update('prox');lang_update('libelle');lang_update('situation');lang_update('descriptif');
	if(objNbPieces) {
		if(objNbPieces.value=="") {alert("Vous devez saisir le nombre de pièces.");return false;}
	}
	return true;
}
*/

function isNumber(n) {
  return !isNaN(parseFloat(n.replace(',', '.'))) && isFinite(n.replace(',', '.'));
}

function ValidForm(form) {
    var formAdresse = document.getElementById('form_adresse');
    var formCP = document.getElementById('cp');
    var formVille = document.getElementById('form_ville');

	var elements = document.getElementsByName('si_honoraires_acquereur');
	for(var i=0;i<elements.length; i++)
	{	
		if(elements[i].checked){
			if(elements[i].value == 1){
				if(document.getElementsByName('honoraires_pourcentage_acquereur')[0].value == ""){
					alert("Le champ pourcentage d'honoraires n'est pas rempli correctement.");
					return false;
				}
				else if(!isNumber(document.getElementsByName('honoraires_pourcentage_acquereur')[0].value)){
					alert("Le champ pourcentage d'honoraires n'est pas rempli correctement.");
					return false;
				}
				else if(document.getElementsByName('honoraires_pourcentage_acquereur')[0].value <= 0 || document.getElementsByName('honoraires_pourcentage_acquereur')[0].value >= 100){
					alert("Le champ pourcentage d'honoraires n'est pas rempli correctement.");
					return false;
				}
			}
		}
	}
	
    //var objNbPieces = MM_findObj("nb_pieces");
    lang_update('prox');lang_update('libelle');lang_update('situation');lang_update('descriptif');
    /*
    if(objNbPieces) {
        if(objNbPieces.value=="") {
            alert("Vous devez saisir le nombre de pièces.");
            return false;
        }
    }
    */
	
	$j('textarea, input, select', form).each(function(){
		if(typeof $j(this).val !== "undefined") $j(this).val($j(this).val().replace(/\</g, "&lt;"));
	});
    return true;
}

function ValidFormCMI()
{
	var objNbPieces = MM_findObj("nb_pieces");
	if(objNbPieces) {
		if(objNbPieces.value=="") {alert("Vous devez saisir le nombre de pièces.");return false;}
	}
	return true;
}

function ssav(){
	var o = MM_findObj("ssav");


	if(o.style.display == "none"){
		o.style.display = "block";

		window.location.href = "#ssav";
	}else {
		o.style.display = "none";
	}
	setTimeout(initSize("scroll"),1000);
}


function reinit() {
	if (confirm("Etes-vous sûr de vouloir d'effacer les informations présentes dans cette page ?")) {
 		document.f_annedit.reset();
 	}
}

function delouinon (bien_vendu){
	var confirm_text = "!!! CONFIRMATION DE SUPPRESSION !!! \n Etes-vous s\xFBr de vouloir effacer la ou les annonce(s) coch\xE9e(s) ?";
	if (bien_vendu !== undefined) {
		confirm_text = "!!! CONFIRMATION DE MODIFICATION !!! \n Etes-vous s\xFBr de vouloir transf\xE9rer la ou les annonce(s) coch\xE9e(s) en bien(s) vendu(s) ? \n (Ces biens seront plac\xE9s sous l'onglet incomplets une fois la modification valid\xE9e.)";
	}
	if (confirm(confirm_text)) {
 		return true;
 	}else {
 		return false;
 	}
}

function swapcolordel(o){
	//alert(check);
	var o = document.getElementById(o);
	if((o.className == "line_pair_new_hover") || (o.className == "line_impair_new_hover")){
		if(o.className = "line_pair_new_hover" ){
			if(o.checked != "true"){o.className = "line_pair_del";}
			else{
				o.className = "line_pair_new_hover";
			}

		}else{
			if(o.checked  != "true"){o.className = "line_impair_del";}
			else{
				o.className = "line_impair_new_hover";
			}
		}
	}else{
		if(o.className = "line_pair_del" ){
			o.className = "line_pair_new_hover";
		}
		else{
			o.className = "line_impair_new_hover";
		}
	}
}

function swapannclass(o,annclass){
	var o = document.getElementById(o);
	if(o){
		if((o.className != "line_impair_del") && (o.className != "line_pair_del")){
			o.className = annclass;
		}
	}
}


cmichecked = false;
function checkedAll(frm1) {
	var aa= document.getElementById(frm1);
	var subnodes = aa.getElementsByTagName("input");
	 if (cmichecked == false) {
   	cmichecked = true
   }
   else {
   	cmichecked = false
   }
	 for (var i=0; i<subnodes.length; i++) {
	 	node = subnodes[i];
		node.checked = cmichecked;
	 }
}

function checkedAllR(frm1,checkgrp) {
	var aa= document.getElementById(frm1);
	var checkgrp= document.getElementById(checkgrp);
	var subnodes = aa.getElementsByTagName("input");
	 for (var i=0; i<subnodes.length; i++) {
	 	node = subnodes[i];
		node.checked = checkgrp.checked;
	 }
}

function tranchePrix()
{
	var sitrancheprix = true;
	var tranche1 = 'Moins de 1.1 M &euro;';
	var tranche2 = '1.1 M &euro; &agrave; 1.7 M &euro;';
	var tranche3 = '1.7 M &euro; &agrave; 3 M &euro;';
	var tranche4 = '3 M &euro; &agrave; 10 M &euro;';
	var tranche5 = 'Plus de 10 M &euro;';

	var tranche = '';

	var prixmax = 0;
	var prixmin = 0;

	var pxString = document.getElementById("annonce_edit_px").value;
	if (pxString != '')
	{
		var px = parseFloat(pxString);
		if (px < 1100000)
		{
			tranche = tranche1;
			prixmin = 0;
			prixmax = 1100000;
		}
		else if (px < 1700000)
		{
			tranche = tranche2;
			prixmin = 1100000;
			prixmax = 1700000;
		}
		else if (px < 3000000)
		{
			tranche = tranche3;
			prixmin = 1700000;
			prixmax = 3000000;
		}
		else if (px < 10000000)
		{
			tranche = tranche4;
			prixmin = 3000000;
			prixmax = 10000000;
		}
		else
		{
			tranche = tranche5;
			prixmin = 10000000;
			prixmax = 0;
		}

	document.getElementById("aff_trancheprix").innerHTML = tranche;
	//document.getElementById("si_afficherprix0").checked = !sitrancheprix;
	//document.getElementById("si_afficherprix1").checked = sitrancheprix;


	}
}

function trim(str)
{
	return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}