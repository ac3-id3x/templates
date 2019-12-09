

    var allFields = null;
    jQuery.fn.extend({
        handleNbPolePoDispo: function () {

            allFields = this;
            initFields(this);

            this.change(function (e) {
                var target = $(e.target);
                updateNiveauPolePoDispo(target);
				//updatePolePoDispoTxt();
				updateDivDispo();
            });
            return this;
        }
    });

    function initFields(fields) {
        var polepo = $("#liste-annonce th.polepo");

        var i = 0;
        while (i < polepo.length) {
            var pp = $(polepo[i]);
            var nbdispo = pp.data("nbpolepodispo");

            if (nbdispo <= 0) {
                var type = pp.data("type");
                var nbpub = pp.data("nbpub");

                var clss = "pub" + nbpub + type;
                setDisabledAllUncheckedRadio(fields, clss, true);
            }
            ++i;
        }

        initIsOldValue(fields);
    }

    function initIsOldValue(fields) {
        var i = 0;
        while (i < fields.length) {
            var field = $(fields[i]);

            if (field.is(':checked')) {
                field.data("IsOldValue", true);
            }
            ++i;
        }
    }

    function setDisabledAllUncheckedRadio(fields, clss, disabled) {
        var j = 0;
        while (j < fields.length) {
            var field = $(fields[j]);

            if (field.hasClass(clss) && !field.is(":checked")) {
                field.prop("disabled", disabled);
            }
            ++j;
        }
    }

    function updateNiveauPolePoDispo(target) {
        var ischecked = target.is(':checked');
        var fieldName = target.attr('name');

        if (ischecked === true) {
            var oldfield = getOldValueField(fieldName);
            incrementNbPolePoDispo(oldfield);
            decrementNbPolePoDispo(target);
        } else {
            incrementNbPolePoDispo(target);
        }
        resetIsOldValue(fieldName);
        target.data("IsOldValue", ischecked);
		
		
    }

    function getOldValueField(fieldname) {
        var fields = $("input[name='" + fieldname + "']");
        var i = 0;
        while (i < fields.length) {
            var field = $(fields[i]);
            if (field.data("IsOldValue") === true)
                return field;
            ++i;
        }
        return null;
    }

    function resetIsOldValue(fieldname) {
        var fields = $("input[name='" + fieldname + "']");
        var i = 0;
        while (i < fields.length) {
            $(fields[i]).data("IsOldValue", false);
            ++i;
        }
    }

    function incrementNbPolePoDispo(field) {
        if (field == null || undefined)
            return;

        var nbpub = field.data("nbpub");
        var type = field.attr("value") == "2" ? "ar" : "or";
        var clss = "pub" + nbpub + type;

        var th = $('#liste-annonce th.' + clss);
        if (th.length > 0) {
            var nbppdispo = th.data("nbpolepodispo");
            nbppdispo += 1;
            th.data("nbpolepodispo", nbppdispo);
            if (nbppdispo > 0)
                setDisabledAllUncheckedRadio(allFields, clss, false);
        }
    }

    function decrementNbPolePoDispo(field) {
        if (field == null || undefined)
            return;

        var nbpub = field.data("nbpub");
        var type = field.attr("value") == "2" ? "ar" : "or";
        var clss = "pub" + nbpub + type;

        var th = $('#liste-annonce th.' + clss);
        if (th.length > 0) {
            var nbppdispo = th.data("nbpolepodispo");
			nbppdispo -= 1;  			
			th.data("nbpolepodispo", nbppdispo);
            if (nbppdispo <= 0) {   
				setDisabledAllUncheckedRadio(allFields, clss, true);
				//alert("Vous avez sélectionné toutes vos annonces " + ((type == 'ar') ? 'ARGENT' : 'OR') + " pour la publication " + th.data("nompub") 
                //+ ". \nPour diffuser une autre annonce, supprimez d'abord une annonce de la diffusion " + ((type == 'ar') ? 'ARGENT' : 'OR'));                
				
            }
        }
    }

	function MedalOnOff(id) {
		var ppOr = $('.canndiff.polepo.pub1or');
		var ppAr = $('.canndiff.polepo.pub1ar');
		
		var idannonce = id.replace("medal_silver_on_", "").replace("medal_silver_off_", "").replace("medal_gold_on_", "").replace("medal_gold_off_", "");
		
		if(id.indexOf("medal_silver_on_") != -1) { // On a cliqué sur medal_silver_on ==> on passe à medal_silver_off ==> PPAR_idannonce value passe à 0
			$("#medal_silver_on_" + idannonce).css('display', 'none');
			$("#medal_silver_off_" + idannonce).css('display', 'inline');
			$('#PPAR_' + idannonce).val("");
			ppAr.data("nbpolepodispo")++;
			updateDivDispo();
		}

		if(id.indexOf("medal_silver_off_") != -1) {
			if(ppAr.data("nbpolepodispo") > 0){
				$("#medal_silver_off_" + idannonce).css('display', 'none');
				$("#medal_silver_on_" + idannonce).css('display', 'inline');
				$('#PPAR_' + idannonce).val("1");
				ppAr.data("nbpolepodispo")--;

				if($("#medal_gold_on_" + idannonce).css('display') == 'inline')
					ppOr.data("nbpolepodispo")++;

				updateDivDispo();

				$("#medal_gold_on_" + idannonce).css('display', 'none');
				$("#medal_gold_off_" + idannonce).css('display', 'inline');
				$('#PPOR_' + idannonce).val("");
			} else {
				alert('Vous n\'avez pas/plus de Pole Position Argent disponible');
			}
		}
		
		if(id.indexOf("medal_gold_on_") != -1) {
			$("#medal_gold_on_" + idannonce).css('display', 'none');
			$("#medal_gold_off_" + idannonce).css('display', 'inline');
			$('#PPOR_' + idannonce).val("");
			ppOr.data("nbpolepodispo")++;
			updateDivDispo();
		}

		if(id.indexOf("medal_gold_off_") != -1) {
			if (ppOr.data("nbpolepodispo") > 0) {
				$("#medal_gold_off_" + idannonce).css('display', 'none');
				$("#medal_gold_on_" + idannonce).css('display', 'inline');
				$('#PPOR_' + idannonce).val("1");
				ppOr.data("nbpolepodispo")--;
            
				if ($("#medal_silver_on_" + idannonce).css('display') == 'inline')
					ppAr.data("nbpolepodispo")++;

				updateDivDispo();

				$("#medal_silver_on_" + idannonce).css('display', 'none');
				$("#medal_silver_off_" + idannonce).css('display', 'inline');
				$('#PPAR_' + idannonce).val("");
			} else {
				alert('Vous n\'avez pas/plus de Pole Position Or disponible');
			}
		}

	}
	
	function updateDivDispo() {
		var ppOr = $('.canndiff.polepo.pub1or');
		var ppAr = $('.canndiff.polepo.pub1ar');
		var ppArNumb = 0;
		if (ppAr.data("nbpolepodispo") > 0){
			ppArNumb = ppAr.data("nbpolepodispo");
		}
		var ppOrNumb = 0;
		if (ppOr.data("nbpolepodispo") > 0){
			ppOrNumb = ppOr.data("nbpolepodispo");
		}
			
		$('#libNbDispo').html(ppArNumb + ' annonce(s) Argent dispo<br>'+ ppOrNumb + ' annonce(s) Or dispo<br><br>');		
	}
	
	function DisplayMedal(color, idannonce, pparchecked, uneligiblepp, nbphotos, customHiddenFieldName) {
		var lettre = (color == 'silver') ? 'A' : 'O';
		var minPict = (color == 'silver') ? 1 : 2;
		var strHtml;
		
		if(nbphotos == '' ||nbphotos<minPict){			
				strHtml = '<img id="medal_black_' + idannonce + '" src="$$_$$i/medal_black.png" border="0" />';
				strHtml += '<input type="hidden" name="' + customHiddenFieldName + '" id="PP' + lettre + 'R_' + idannonce + '" value=""/>';
				document.write(strHtml);
				return;
		}
		if (pparchecked == 'True') {
			strHtml = '<img id="medal_' + color + '_on_' + idannonce + '" onclick="javascript:MedalOnOff(\'medal_' + color + '_on_' + idannonce + '\')" src="$$_$$i/medal_' + color + '_on.png" border="0" />';
			strHtml += '<img id="medal_' + color + '_off_' + idannonce + '" onclick="javascript:MedalOnOff(\'medal_' + color + '_off_' + idannonce + '\')" src="$$_$$i/medal_' + color + '_off.png" border="0" style="display:none"/>';
			strHtml += '<input type="hidden" name="' + customHiddenFieldName + '" id="PP' + lettre + 'R_' + idannonce + '" value="1"/>';
			document.write(strHtml);
			return;			
		} else {
			if (uneligiblepp == '1') {
				strHtml = '<img id="medal_black_' + idannonce + '" src="$$_$$i/medal_black.png" border="0" />';
				strHtml += '<input type="hidden" name="' + customHiddenFieldName + '" id="PP' + lettre + 'R_' + idannonce + '" value=""/>';
				document.write(strHtml);
				return;
			} else {
			}
		}
		strHtml = '<img id="medal_' + color + '_on_' + idannonce + '" onclick="javascript:MedalOnOff(\'medal_' + color + '_on_' + idannonce + '\')" src="$$_$$i/medal_' + color + '_on.png" border="0" style="display:none"/>';
		strHtml += '<img id="medal_' + color + '_off_' + idannonce + '" onclick="javascript:MedalOnOff(\'medal_' + color + '_off_' + idannonce + '\')" src="$$_$$i/medal_' + color + '_off.png" border="0" />';
		strHtml += '<input type="hidden" name="' + customHiddenFieldName + '" id="PP' + lettre + 'R_' + idannonce + '" value=""/>'
		document.write(strHtml);
	}	

