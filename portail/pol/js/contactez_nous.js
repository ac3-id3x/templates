function choicectc(act,niv,filename) {
    var o3 = document.getElementById('niv3');
    var o2 = document.getElementById('niv2');

    if (niv == 'niv2' && o3) {
        o3.style.display = "none";
        o3.innerHTML = "";
    }
    if (act == "" && o3 && o2) {
        o3.style.display = "none";
        o2.style.display = "none";
        o3.innerHTML = "";
        o2.innerHTML = "";
    } else {
        if (o3) {
            o3.style.display = "block";
        }
        if (o2) {
            o2.style.display = "block";
        }
        sndReq('http://www.selogerpro.com/' + filename + '?ctc=' + act);
    }
    setTimeout('initSize3()',500);
}

function verif(key) {
		var msg = "";

		if(key == "input_cmdp"){
			var browsername_r = document.getElementById('browsername_r');
			var browsername = document.getElementById('browsername');
			var browserversion_r = document.getElementById('browserversion_r');
			var browserversion = document.getElementById('browserversion');
			var email = document.getElementById('email');
			var tel = document.getElementById('tel');
			var commentaire = document.getElementById('commentaire');
			browsername.value = browsername_r.value;
			browserversion.value = browserversion_r.value;
			if(email.value == ""){
				msg = "Vous devez compléter votre e-mail !\n";
			}
			if(tel.value == ""){
				msg += "Vous devez compléter votre numero de téléphone !\n";
			}

		}else {
			if((key == "ctc_tarifs")||(key == "input_gvol")){
				var nom = document.getElementById('nom');
				var fonction = document.getElementById('fonction');
				var rs = document.getElementById('rs');
				var tel = document.getElementById('tel');
				var cp = document.getElementById('cp');
				var ville = document.getElementById('ville');
				var adresse = document.getElementById('adresse');
				var email = document.getElementById('email');

				if(nom.value == ""){
						msg = "Vous devez compléter votre nom, prénom !\n";
				}
				if(fonction.value == ""){
						msg += "Vous devez compléter votre fonction !\n";
				}
				if(rs.value == ""){
						msg += "Vous devez compléter la raison sociale !\n";
				}
				if(tel.value == ""){
						msg += "Vous devez compléter votre numero de téléphone !\n";
				}
				if(cp.value == ""){
						msg += "Vous devez compléter votre code postal !\n";
				}
				if(ville.value == ""){
						msg += "Vous devez compléter votre ville !\n";
				}
				if(adresse.value == ""){
						msg += "Vous devez compléter votre adresse !\n";
				}
				if(email.value == ""){
						msg += "Vous devez compléter votre e-mail !\n";
				}

			}

		}
		if(msg != ""){
			alert(msg);
			return false;
		}else{
			return true;
		}

	}

function wn_commentaire (obj){
	var o = document.getElementById('whynot');
	if(obj == "yes"){
			o.style.display = "none;";
			initSize();
			verifreco();
	}else {
		if(o.style.display != "inline"){
			o.style.display = "inline";
		}else {
			o.style.display = "none";
		}
		initSize();
	}
}



function verifreco(){
	var msg = "";
	var o = document.getElementById('whynot');
	var o1 = document.getElementById('commentaire');
	var o2 = document.getElementById('val_reco');
	var o3 = document.getElementById('email');
	var o4 = document.getElementById('tel');
	var o5 = document.getElementById('subject');
	var ctc_form = document.getElementById('ctc_form');

	if(o.style.display == "inline"){
		if(o1.value == ""){
			msg += "Précisez votre demande !\n";
		}
		if(o3.value == ""){
			msg += "Précisez votre email !\n";
		}
		if(o4.value == ""){
			msg += "Précisez votre numero de téléphone !\n";
		}

		if(msg != ""){
			alert(msg);
			return false;
		}else{
			o5.value += " - Non"
			return true;
		}

	}else{
		o2.value = "oui";
		o5.value += " - Oui"
		ctc_form.submit();
	}
}