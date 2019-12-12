/**
 * outils de calcul seLoger.com / agence Web
 * 
 * @version 20100813-2
 * @author francois.badier@seLoger.com
 * @since 2008
 */
function Calculettes (){};


/**
 *  Calcule une estimation du montant d'un loyer
 *  en fonction d'un ratio pr�d�fini.
 *  
 *  @return null
 *  @author seLoger.com
 */
function estimeLoyer() {
	var revenus = 0; // montant des revenus mensuels
	var loyer = 0; // montant estim� du loyer mensuel
	var ratio = document.getElementById("revenus_ratio").value; // ratio revenu / loyer recommand�
	loyer = numNormalise(document.getElementById("montant_loyer").value);
	revenus = numNormalise(document.getElementById("revenus_mensuels").value);
	
	if (isNaN(revenus)) {
		document.getElementById("revenus_mensuels").value = 0;
		revenus = 0;
		alert("Vous devez entrer un revenu valide.");
		document.getElementById("montant_loyer").value = 0;
	} 
	if (isNaN(ratio)) {
		document.getElementById("revenus_ratio").value = 33.3;
		ratio = 0;
		alert('Votre ratio n\'est pas valide.');
		document.getElementById("montant_loyer").value = 0;
	}	else {
		loyer = parseInt(revenus * ratio) / 100;
		document.getElementById("montant_loyer").value = numFormat(loyer);
	}
	
	
	
	
}

/**
 * S�lectionne un objet par son identifiant.
 * 
 * @param id: identifiant de l'objet
 * @return objet: objet s�lectionn�
 */
function getObj(id) {
	objet = document.getElementById(id);
	return objet;
}

/**
 * Met � 0 les champs non-remplis du formulaire
 */
function raZero(champs) {
	for (var i = 0; i < champs.length ; i++){
		if(isNaN(champs[i].value) || !champs[i].value){
			champs[i].value = 0;
		}
	}
}

/**
 *  Effectue les calculs suivants : 
 *  * nombre de mensualit�s,
 *  * montant des mensualit�s, 
 *  * montant de l'emprunt.
 *  
 *  @param what: identifiant du calcul � effectuer
 *  @return null
 *  @author seLoger.com
 */
function MM_calc(what) {
	var t; // taux de l'emprunt
	var a = 0; // apport initial
	var c; // montant de l'emprunt
	var n; // nombre de mensualit�s
	var m; // montant des mensualit�s
	var resultat;
		
	switch (what) {
	case 'mens':
		
		var mens_taux = document.getElementById("mens_taux");
		// var mens_apport = document.getElementById("mens_apport");
		var mens_emprunt = document.getElementById("mens_emprunt");
		var mens_nbmens = document.getElementById("mens_nbmens");

		/* on met � z�ro les champs s�lectionn�s pour commencer */
		var champs = []; // champs du formulaire
		champs.push(mens_taux);
		// champs.push(mens_apport);
		champs.push(mens_emprunt);
		champs.push(mens_nbmens);
		raZero(champs);
		/* fin de mise � z�ro */
		
		t = numNormalise(mens_taux.value) / 100;
		// a = numNormalise(mens_apport.value);
		// c = numNormalise(mens_emprunt.value) - a;
		c = numNormalise(mens_emprunt.value);
		n = numNormalise(mens_nbmens.value);
		
		if ( (t < 0.01) || (t > 0.09) )
			alert('Vous devez saisir un taux compris entre 1% et 9%');
		else {
			t = t / 12;
			if (document.getElementsByName("mens_duree")[1].checked) {
				n = n * 12;
			}
			if (n == 0) {
				alert("Vous devez saisir une dur�e d'emprunt.");
			} else {
				resultat = Math.round(100 * c * (t / (1 - (1 / Math.pow(1 + t, n))))) / 100;
				document.getElementById("mens_mens").value = numFormat(resultat);;
			}
		}
		break;
		
	case 'emprunt':
		
		var emprunt_taux = document.getElementById("emprunt_taux");
		// var emprunt_apport = document.getElementById("emprunt_apport");
		var emprunt_nbmens = document.getElementById("emprunt_nbmens");
		var emprunt_mens = document.getElementById("emprunt_mens");
		
		/* on met � z�ro les champs s�lectionn�s pour commencer */
		var champs = []; // champs du formulaire
		champs.push(emprunt_taux);
		// champs.push(emprunt_apport);
		champs.push(emprunt_nbmens);
		champs.push(emprunt_mens);
		raZero(champs);
		/* fin de mise � z�ro */		
		
		
		t = numNormalise(emprunt_taux.value) / 100; // taux interet + assurance
		// a = numNormalise(emprunt_apport.value);
		n = numNormalise(emprunt_nbmens.value);
		m =  numNormalise(emprunt_mens.value);
		
		if ((t < 0.01) || (t > 0.09))
			alert('Vous devez saisir un taux compris entre 1% et 9%');
		else {
			t = t / 12;
			if (document.getElementsByName("emprunt_duree")[1].checked) {
				n = n * 12;
			}
			resultat = 		Math.round((m * ((1 - (1 / Math.pow(1 + t, n))) / t )));
			// resultat = Math.round((m * ((1 - (1 / Math.pow(1 + t, n))) / t) - a));
			document.getElementById("emprunt_emprunt").value = numFormat(resultat);
		}
		break;
		
	case 'nbmens':
		
		var nbmens_taux = document.getElementById("nbmens_taux");
		var nbmens_apport = document.getElementById("nbmens_apport");
		var nbmens_emprunt = document.getElementById("nbmens_emprunt");
		var nbmens_mens = document.getElementById("nbmens_mens");
		
		/* on met � z�ro les champs s�lectionn�s pour commencer */
		var champs = []; // champs du formulaire
		champs.push(nbmens_taux);
		champs.push(nbmens_apport);
		champs.push(nbmens_emprunt);
		champs.push(nbmens_mens);
		raZero(champs);
		/* fin de mise � z�ro */
		
		t = numNormalise(nbmens_taux.value) / 100;
		a = numNormalise(nbmens_apport.value);
		c = numNormalise(nbmens_emprunt.value) - a;

		m = numNormalise(nbmens_mens.value);
		if ((t < 0.01) || (t > 0.09))
			alert("Vous devez saisir un taux compris entre 1% et 9%.");
		else {
			t = t / 12;
			resultat = Math.round(Math.log(-1 / (((c / m) * t) - 1)) / Math.log(1 + t));
			document.getElementById("nbmens_nbmens").value = resultat;
			document.getElementById("nbmens_nbmens").value += " mois ("
					+ Math.round(document.getElementById("nbmens_nbmens").value / 12)
					+ ' an'
					+ ((Math.round(document.getElementById("nbmens_nbmens").value / 12) > 1) ? "s"
							: '') + ')';
		}
		break;
	};
}

/**
 *  modifie le format d'un nombre
 *  ajoute un s�parateur de milliers
 *  convertit les points par des virgules
 *  
 *  @param longNum {String} la valeur � traiter
 *  @return la valeur formatt�e sous forme de cha�ne
 *  @author Keith Jenci <mredkj.com>
 *  @author Fran�ois Badier <seLoger.com>
 */
function numFormat(longNum)
{   
    // exemple de s�parateur : Unicode medium mathematical space \u205F
    var separator = " ";
    var resultat;
    longNum = longNum + "";
    x = longNum.split(".");
    x1 = x[0];
    x2 = x.length > 1 ? "." + x[1] : "";
    var regex = /(\d+)(\d{3})/;
    while (regex.test(x1)) {
        x1 = x1.replace(regex, "$1" + separator + "$2");
    }
    resultat = x1 + x2;
    return resultat.replace(".", ",");
}

/**
 *  normalise une valeur num�rique
 *  
 *  @param val (String) valeur � traiter
 *  @return valeur normalis�e
 *  @author Fran�ois Badier <seLoger.com>
 */
function numNormalise(val)
{
	val = val + "";
	val = val.replace(/,/gi, ".");
    val = val.replace(/\s+/gi, "");
    
    return parseFloat(val);
}
 $(document).ready(function() {
   $("#Outils").accordion();
});
