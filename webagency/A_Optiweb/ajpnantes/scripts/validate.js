//$$DYN:ID3:NOFOOTER$$
function IsNumberString(NumStr){
var regEx=/^[0-9]+$/;
var ret=false;
if (regEx.test(NumStr)) ret=true;
return ret;
}

function checkNotEmpty( elt ) {
	var resultat = false;
	if( elt != null ) {
		if( elt.value != "" ) {
			resultat = true;
		}
	}
	return resultat;
}
function validate(){

	var elt_form = document.forms[ "agencemail" ];
	var errmsg = "";
	
	if( elt_form ) {
		var elt_nom = elt_form["cnom"];
		var elt_prenom = elt_form["cprenom"];
		var elt_telephone = elt_form["ctel"];
		var elt_email = elt_form["from"];

		if( ! checkNotEmpty( elt_nom ) ) {
			errmsg += '$$LG:AI5$$ !\n';
		}	
		if( ! checkNotEmpty( elt_prenom ) ) {
			errmsg += '$$LG:PRENOM$$ !\n';
		}	
		if( ! checkNotEmpty( elt_telephone ) && ! IsNumberString(elt_telephone.value)){
					errmsg += 'Entrez un téléphone valide !\n';
				}
		if( ! checkNotEmpty( elt_email ) ) {
			errmsg += '$$LG:ENTREZEMAIL$$ !\n';
		}	else {
			if( checkNotEmpty( elt_email ) ) {
				if (!(elt_email.value.split('@')[1] && !elt_email.value.split('@')[2] && elt_email.value.split('@')[1].split('.')[1] && !elt_email.value.split('@')[1].split('.')[2])){
					errmsg += '$$LG:ENTREZEMAILCORRECT$$ !\n';
				}
				
			}
		}
		
		if (errmsg != "") {
			alert (errmsg);
			return false;
		} else {
			return true; 
		}
	}
}