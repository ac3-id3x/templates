

function PupOpenVirtualEye(id,type)
{
	var page;
	page = '/$$REP:1$$/$$REP:2$$/p_virtualeye_ajouter.htm';
	if (id != '' && type=='supp') {page = page + '?idvisu='+id;}
	if (type == 'voir') {page = page + '?voir='+id;}
	PopUP(page,'visuel',400,300,100,100,'no','no');
}
function ValidForm()
{
	var objNbPieces = MM_findObj("nb_pieces");
	lang_update('prox');lang_update('libelle');lang_update('situation');lang_update('descriptif');
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

function delouinon (){
	if (confirm("!!! CONFIRMATION DE SUPPRESSION !!! \n Etes-vous sûr de vouloir effacer la ou les annonce(s) cochée(s) ?")) {
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


