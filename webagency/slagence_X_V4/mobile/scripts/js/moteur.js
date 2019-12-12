/* SCRIPT MOTEUR MOBILE*/
function ajaxGet(value_select,lng,divid,url_get) {
	var split_elem = value_select.split('|');
	var length_elem = split_elem.length;
	var dataSend = '';
	for(i = 0; i < length_elem; i ++) {
			var value_elem = $("#"+split_elem[i]).val();
			var name_elem = $("#"+split_elem[i]).attr("name");
			dataSend += dataSend+name_elem+'='+value_elem+'&';
	}
	dataSend += 'lang='+lng;
	if($('#'+split_elem[0]).val() != '') {
		$("#"+divid).show();
		$.ajax({
			type: "GET",
			data: dataSend,
			dataType: "html",
			url: '/moteur,incl_'+url_get+'.htm',
			beforeSend: function() {
				$("#"+divid).show();
			},
			success: function(data) {
				$("#"+divid).show();
				$("#"+divid).html(data);
	 	 	},
	 	 	error: function(xhr,statusText) {
	 	 	},
	 	 	complete: function(xhr,statusText) {
	 	 	}
		});
	}
}
function searchContent(divid,container) {
	var value_div = $('#'+divid).val();
	var xhr = $.ajax({
		type: 'GET',
		async: 'true',
		cache: 'true',
		timeout : '3000',
		data: 'cp='+value_div,
		dataType: 'html',
		url: '/moteur,suggest_refine.htm',
		beforeSend: function() {
		},
		success: function(data) {
			$('#'+container).show();
			$('#'+container).html(data);
		},
		error: function(xhr,statusText) {
			//console.log(xhr.status);
		},
		complete: function(xhr,statusText) {
			//console.log(xhr.status);
		}
	});
}
function buildSearch() {
	$('#cp').val('');
	$('#div').val('');
	$('#ci').val('');
	$('#idq').val('');
	$('.selectLi').each(function() {
		var value_txt = $(this).attr('id').split('|');
		var length_value_txt = value_txt.length;
		// REGION
		if(length_value_txt == 3) {
			if($('#div').val() == ''){
			$('#div').val(value_txt[2]);
			} else {
			$('#div').val($('#div').val()+','+value_txt[2]);
			}
		} else {
		var num_value = Math.round(value_txt.length/2);
		// START 1 TO SKIP FIRST LINE
			for(i = 1; i < num_value; i++) {
				if($('#'+value_txt[i * 2]).val() == '' ){
				$('#'+value_txt[i * 2]).val(value_txt[i * 2 + 1]);
				} else {
				$('#'+value_txt[i * 2]).val($('#'+value_txt[i * 2]).val()+','+value_txt[i * 2 + 1]);
				}
			}
		}
	});
}
//SCRIPT PAGE MOTEUR
$(document).delegate("#recherche","pageshow", function (event) {
		enablebutton();
		var storageTransaction = localStorage['idtypetransac'];
		getname('idtt','nameidtt',idttdefaut);
		getname('rayon','namerayon',rayondefaut);
		getname('dept','namedept',deptdefaut);	
		getname('budget','namebudget',budgetdefaut);	
		getname('pieces','namepieces',piecesdefaut);
		getname('surface','namesurface',surfacedefaut);
		getname('typedebiens','nametypedebiens',typedebiensdefaut);	
		getname('villes','namevilles',villesdefaut);
		getname('perso','nameperso',persodefaut);
		if (storageTransaction == 1){
			$('#blocPersoMoteur').show();
		}else{
			$('#blocPersoMoteur').hide();
			$('#idperso').val("");
			eraselocale('idperso');
			eraselocale('perso');
		}
			
});
//SCRIPT PAGE IDTT
$(document).delegate("#moteur_idtt","pageshow", function (event) {
	$("input[id*= idtt-]").click(function() {
			var nomtransac = $(this).parent().find('.ui-btn-text').html();
			var idtt2 = parseInt($(this).val());
			localStorage.setItem('idtypetransac',idtt2);
			localStorage.setItem('idtt',nomtransac);
		});
	showradio('idtt','idtypetransac');
});
//SCRIPT PAGE BUDGET
$(document).delegate("#moteur_budget","pageshow", function (event) {
	var typetransacbudget = localStorage['idtypetransac'];
	if (typetransacbudget==1||typetransacbudget==3||typetransacbudget==4||typetransacbudget==7||typetransacbudget==11){
 	 			$('#budgetvente').hide();
 	 			$('#budgetlocation').show();
 	 			$('#budgetventeprest').hide();
	}else if(typetransacbudget==8){
 	 			$('#budgetvente').hide();
 	 			$('#budgetlocation').hide();
 	 			$('#budgetventeprest').show();
	}else{
 	 			$('#budgetvente').show();
 	 			$('#budgetlocation').hide();
 	 			$('#budgetventeprest').hide();
 	}
	locstor();
	showradio('budget','idbudget');
});
//SCRIPT PAGE DEPARTEMENT
$(document).delegate("#moteur_dept","pageshow", function (event) {
	locstor();
	showradio('dept','iddept');
});
//SCRIPT PAGE VILLE
$(document).delegate("#moteur_villes","pageshow", function (event) {
	$("input[id*= villes-]").each(function() {
			$(this).click(function() {
				var valueVilles = '';
				var idVilles = '';
				var $v= $(this);
				// DETERMINE ID CLICK
				var splitV = $(this).attr('id').split('-');
				var idV = splitV[0];
				var valueV = splitV[1];
				// GET LOCAL STORAGE IF EXIST
				if(valueV == 0) {
					eraselocale('idville');
					eraselocale('villes');
					$("input[id*= villes-]").each(function() {
						if($(this).attr('id') != $v.attr('id')) {
							// UNCKECKED ALL EXCEPT NO CRITERIA
							$(this).attr('checked',false).checkboxradio("refresh");
						}
					});
				} else {
					// REMOVE CHECK NO CRITERIA
					$("#villes-0").attr('checked',false).checkboxradio("refresh");
					// ADD LOCAL STORAGE
					$("input[id*= villes-]").each(function() {
						if($(this).attr('checked') == "checked") {
							valueVilles += $(this).parent().find('.ui-btn-text').html();
							idVilles += $(this).val()+',';
						}
					});
					localStorage.setItem('idville',idVilles);
					localStorage.setItem('villes',valueVilles);

				}
			});
		});
	showchecked('villes','idville');
	
});
//SCRIPT PAGE RAYON
$(document).delegate("#moteur_rayon","pageshow", function (event) {
	locstor();
	showradio('rayon','idrayon');
});
//SCRIPT PAGE PIECE
$(document).delegate("#moteur_pieces","pageshow", function (event) {
	$("input[id*= pieces-]").each(function() {
			$(this).click(function() {
				var valuePieces = '';
				var idPieces = '';
				var $p = $(this);
				// DETERMINE ID CLICK
				var splitP = $(this).attr('id').split('-');
				var idP = splitP[0];
				var valueP = splitP[1];
				// GET LOCAL STORAGE IF EXIST
				if(valueP == 0) {
					eraselocale('idpieces');
					eraselocale('pieces');
					$("input[id*= pieces-]").each(function() {
						if($(this).attr('id') != $p.attr('id')) {
							// UNCKECKED ALL EXCEPT NO CRITERIA
							$(this).attr('checked',false).checkboxradio("refresh");
						}
					});
				} else {
					// REMOVE CHECK NO CRITERIA
					$("#pieces-0").attr('checked',false).checkboxradio("refresh");
					// ADD LOCAL STORAGE
					$("input[id*= pieces-]").each(function() {
						if($(this).attr('checked') == "checked") {
							valuePi= $(this).parent().find('.ui-btn-text').html();
							if(valuePieces > ''){
								valuePieces = valuePieces + ', ' + valuePi;
							}else{
								valuePieces = valuePi;
							}
							idPieces += $(this).val()+',';
						}
					});
					localStorage.setItem('idpieces',idPieces);
					localStorage.setItem('pieces',valuePieces);
				}
			});
		});
	showchecked('pieces','idpieces');
});
//SCRIPT PAGE SURFACE
$(document).delegate("#moteur_surface","pageshow", function (event) {
	locstor();
	showradio('surface','idsurface');
});
//SCRIPT PAGE BIENS
$(document).delegate("#moteur_biens","pageshow", function (event) {
/* TYPE BIENS */
		$("input[id*= idtb-]").each(function() {
			$(this).click(function() {
				var valueBiens = '';
				var idBiens = '';
				var $t = $(this);
				// DETERMINE ID CLICK
				var splitB = $(this).attr('id').split('-');
				var idB = splitB[0];
				var valueB = splitB[1];
				// GET LOCAL STORAGE IF EXIST
				if(valueB == 0) {	
					eraselocale('idtypebien');
					eraselocale('typedebiens');
					$("input[id*= idtb-]").each(function() {
						if($(this).attr('id') != $t.attr('id')) {
							// UNCKECKED ALL EXCEPT NO CRITERIA
							$(this).attr('checked',false).checkboxradio("refresh");
						}
					});
				} else {		
					// REMOVE CHECK NO CRITERIA
					$("#idtb-0").attr('checked',false).checkboxradio("refresh");
					// ADD LOCAL STORAGE
					$("input[id*= idtb-]").each(function() {				
						if($(this).attr('checked') == "checked") {
							valueBiens += $(this).parent().find('.ui-btn-text').html()+',';
							recup = valueBiens.substring(0,valueBiens.length-1) ;
							idBiens += $(this).val()+',';
						}
					});
					localStorage.setItem('idtypebien',idBiens);
					localStorage.setItem('typedebiens',recup);
				}
			});
		});
	showchecked('idtb','idtypebien');
});
//ACTIVER DESACTIVER LE BOUTON
function enablebutton(){
	var trans = localStorage['idtypetransac'];
	var boutonForm = $("#boutonForm");
	if(trans!= null && trans!= 0) {	
		boutonForm.attr('disabled',false);
		boutonForm.button('refresh', true);
		boutonForm.click(function() {
			if($('#idville').val().length > 0) {
				$("#iddept").val('');
			}
		});
		$('#msgidtt').hide();
	}
	$("#typetransac").val(trans);
}
//COCHER LES BOUTON RADIO
function showradio(divradio, nomstorage){
	var radio = localStorage[nomstorage];
	if(radio != null){
		$("input").each(function() {
			if($(this).val() == radio) {
				$(this).prop('checked',true).checkboxradio("refresh");
			}
		});
		//iDiv.prop('checked',true).checkboxradio("refresh");
	}
}
// COCHE LES CASES A COCHER OLOL
function showchecked(divid, varstorage){
		var check = localStorage[varstorage];
		if(check != null){
			// TEST FEAU
			if(check == "13,2.21,2.28,2.30,9,") {
				$("#idtb-3").prop('checked',true).checkboxradio("refresh");
			} else {
				var splitcheck = check.split(',');
				for(i=0;i<splitcheck.length; i++){
					if(splitcheck[i] != ''){
						var idDiv = $('#'+divid+'-'+splitcheck[i]);
						if(idDiv.length == 0) {
							$("input").each(function() {
							if($(this).val() == splitcheck[i]) {
									$(this).prop('checked',true).checkboxradio("refresh");
								}	
							});
						}
						idDiv.prop('checked',true).checkboxradio("refresh");
					}
				}
			}
		}
}		
//EFFACER LES DONNEES
function eraselocale(eraseitem){
	localStorage.removeItem(eraseitem);
}
//RECUPERER LES NOM DES CHAMPS
function getname(getkeyitem,getvalueitem,defaultname){
	var valuename = localStorage[getkeyitem];
	// EMPTY  OLD CONTENT
	$('#'+getvalueitem).empty();
	// FIX NEW CONTENT
	if(valuename != null && valuename != ''){
		if(valuename.length > 75) {
			valuename = valuename.substring(0,75)+' ...';
		} else {
			valuename=valuename;
		}
		$('#'+getvalueitem).html(valuename);
	}else{
		$('#'+getvalueitem).html(defaultname);
	}
}
//STOCKAGE DES VALEURS DES RADIOS
function locstor(){
	$("input[type='checkbox'],input[type='radio']").each(function () {
			var ref = $(this).attr('id').split('-');
				$(this).click(function () {
				if(ref[0] == "dept") {
					eraselocale('villes');
					eraselocale('idville');
				}
				// FIX VALUE HIDDEN
				var identifiant = $(this).val();
 				$("#id"+ref[0]).val(identifiant);
 			 	var nomrub= $(this).parent().find('.ui-btn-text').html();
 	 			setname(ref[0],nomrub,identifiant);
 	 			localStorage.setItem('show'+ref[0],nomrub);
 	 			localStorage.setItem('id'+ref[0],identifiant);
			});
	});
}		
function setname(keyitem,valueitem,ident){
	if(ident != 0) {
		localStorage.setItem(keyitem, valueitem);
	} else {
		eraselocale(keyitem);
	}
}	