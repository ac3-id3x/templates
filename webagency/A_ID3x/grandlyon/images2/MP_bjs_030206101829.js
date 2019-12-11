function printFrame(){
	var sNS		 = (navigator.appName == "Netscape");
	var sVersNav = navigator.appVersion;		
	// Navigateur Netscape
	if (sNS) {			
		window.print();
	}else{
		// N° Version du Navigateur IE 
		pos = sVersNav.indexOf("MSIE");
		if (pos >0) {
			numVers = sVersNav.substr((pos+5),1);
			if (numVers > 4){
				window.print();
			}else{
				var WebBrowser = '<OBJECT ID="WebBrowser1" WIDTH=0 HEIGHT=0 CLASSID="CLSID:8856F961-340A-11D0-A96B-00C04FD705A2"></OBJECT>';
				document.body.insertAdjacentHTML('beforeEnd', WebBrowser);
				WebBrowser1.ExecWB(6, 2);
				//Use a 1 vs. a 2 for a prompting dialog box
				WebBrowser1.outerHTML = "";
			}
		}else{
			alert("Pour imprimer, utiliser l'item \"Imprimer\" du menu Fichier Imprimer.")
		}	
	}
}

function MP_ouvrefen(url,xa,ya) {
window.open (url,'hnviewer','location=no,toolbar=yes,directories=no,menubar=no,resizable=yes,scrollbars=yes,status=no,width=xa,height=ya');
}

function MP_paramfen(sW,sH,sToolBar,sStatusBar,sLocation,sMenu,sScroll,sResize,sTitleBar,sDepend){
	sParam = 'width='+sW+',height='+sH+',toolbar='+sToolBar+',status='+sStatusBar+',location='+sLocation+',menubar='+sMenu+',scrollbars='+sScroll+',resizable='+sResize+',titlebar='+sTitleBar+',dependent='+sDepend;
	return sParam;
}

function MP_imprimer(url,tMethod) {
	if (!url) url="/asp/modeleimp.asp"+document.location.search;
	if (!tMethod) tMethod='notPOST'
	// Cas des Formulaire => Impression direct de la Page
	// Sinon on recharge la page pour supprimer la pied de Page
	if (tMethod == 'POST') {
		printFrame();
	}else{
		window.open(url,'Impression',MP_paramfen('600','450','yes','no','no','yes','yes','yes','yes','yes'));
	}	
}

function MP_ami(url) {
if (!url) url="/asp/MP_popup.asp?np=envoyer_a_un_ami&url="+escape(document.location.href);
if (navigator.appName == 'Netscape' && parseInt(navigator.appVersion) < 5) //NS4x
	window.open(url,"envoyer_a_un_ami","directories=no,resizable=yes,scrollbars=yes,toolbar=no,left=100,top=5,height=530,width=590");
else
	window.open(url,"envoyer_a_un_ami","directories=no,resizable=no,scrollbars=yes,toolbar=no,left=100,top=13,height=520,width=590");
}


function MP_sat(degre, url) {
	if(url!=""){ 	
		//Ajout du degré de Satisfaction
		url = url + "&dg="+degre 
	
		if (navigator.appName == 'Netscape')
			if (parseInt(navigator.appVersion) < 5) //NS4x
				window.open(url,"envoyer_a_un_ami","directories=no,resizable=no,scrollbars=yes,toolbar=no,left=230,top=200,height=186,width=346");
			else //NS6
				window.open(url,"envoyer_a_un_ami","directories=no,resizable=no,scrollbars=yes,toolbar=no,left=230,top=200,height=188,width=348");
		else //IE
			window.open(url,"envoyer_a_un_ami","directories=no,resizable=no,scrollbars=yes,toolbar=no,left=230,top=200,height=202,width=378");
	}
}


function MP_Bookmark(param_url,param_desciption) {
	if (!param_url) param_url=document.location.href;
	var sNS = (navigator.appName == "Netscape");
	// Navigateur Netscape
	if (sNS) {			
		alert('Pour ajouter cette page à vos favories, utilisez la combinaison des touches \" CTRL+D\".');
	}else{
		window.external.AddFavorite(param_url,param_desciption);
	}
}

function MP_alert(url,x,y,l,h) {
window.open(url,'hnviewer', 
'location=no,toolbar=no,directories=no,menubar=no,resizable=yes,scrollbars=yes,status=no,width='+
l+',height='+h+',top='+y+',left='+x+'');
}

// ---- Fonctions BAD ----
function MP_ouvrefenSSL(url) {
window.open (url,'hnviewer','location=no,toolbar=no,directories=no,menubar=no,resizable=yes,scrollbars=yes,status=no,width=620,height=500');
}

function ParcoursNomb(nombre)
{
	for(var i = 0; i < nombre.length; i++)
    {
        var car = nombre.substring(i, i+1);
        if(car < '0' || car > '9')
        {
            return 0;
        }
    }
	return 1;
}

function VerifAide()
{
if ((document.MP_formcaissene.NUCE.options[document.MP_formcaissene.NUCE.selectedIndex].value) == "Aide")
	{
	document.MP_formaide.submit();
	}
else
document.MP_formcaissene.submit();
}

function Raz()
{
document.MP_formbad.NUABBD.value = "";
document.MP_formbad.CODCONF.value = "";
}

function Verif(lAbo,lPwd,lTyp,urlpro,urlpart,nuce)
{
if (lTyp == 1 || lTyp == 3 || lTyp == 4 || lTyp == 5)
{
	if (ParcoursNomb(document.MP_formbad.NUABBD.value) == 0)
	{
		alert("Votre numéro d'abonné doit être un nombre.");
		document.MP_formbad.NUABBD.value = "";
		document.MP_formbad.NUABBD.focus();
		return false;
	}
	if (ParcoursNomb(document.MP_formbad.CODCONF.value) == 0)
	{
		alert("Votre code condentiel doit être un nombre.");
		document.MP_formbad.CODCONF.value = "";
		document.MP_formbad.CODCONF.focus();
		return false;
	}
}


if (lTyp == 0 || lTyp == 1 || lTyp == 4 )
{
	if (document.MP_formbad.NUABBD.value.length != lAbo)
	{
		alert("Votre numéro d'abonné doit contenir "+lAbo+" caractères.");
		document.MP_formbad.NUABBD.value = "";
		document.MP_formbad.NUABBD.focus();
		return false;
	}
	if (document.MP_formbad.CODCONF.value.length != lPwd)
	{
		alert("Votre code confidentiel doit contenir "+lPwd+" caractères.");
		document.MP_formbad.CODCONF.value = "";
		document.MP_formbad.CODCONF.focus();
		return false;
	}
}

if (lTyp == 2 || lTyp == 5 )
{
	if (document.MP_formbad.NUABBD.value.length > lAbo)
	{
		alert("Votre numéro d'abonné doit contenir au maximum "+lAbo+" caractères.");
		document.MP_formbad.NUABBD.value = "";
		document.MP_formbad.NUABBD.focus();
		return false;
	}
	if (document.MP_formbad.CODCONF.value.length > lPwd)
	{
		alert("Votre code confidentiel doit contenir au maximum "+lPwd+" caractères.");
		document.MP_formbad.CODCONF.value = "";
		document.MP_formbad.CODCONF.focus();
		return false;
	}
	
}

if (lTyp == 2 )
{
	if (document.MP_formbad.NUABBD.value.length < 1)
	{
		alert("Votre numéro d'abonné doit contenir au minimum un caractère.");
		document.MP_formbad.NUABBD.value = "";
		document.MP_formbad.NUABBD.focus();
		return false;
	}
	if (document.MP_formbad.CODCONF.value.length < 1)
	{
		alert("Votre code confidentiel doit contenir au minimum un caractère.");
		document.MP_formbad.CODCONF.value = "";
		document.MP_formbad.CODCONF.focus();
		return false;
	}
	
}

if (lTyp == 5 )
{
	if (document.MP_formbad.NUABBD.value.length < 3)
	{
		alert("Votre numéro d'abonné doit contenir au minimum 3 caractères.");
		document.MP_formbad.NUABBD.value = "";
		document.MP_formbad.NUABBD.focus();
		return false;
	}
	if (document.MP_formbad.CODCONF.value.length < 1)
	{
		alert("Votre code confidentiel doit contenir au minimum un caractère.");
		document.MP_formbad.CODCONF.value = "";
		document.MP_formbad.CODCONF.focus();
		return false;
	}
	
}

if (lTyp == 3)
{	
	if (document.MP_formbad.NUABBD.value.length != lAbo)
	{
		if (document.MP_formbad.NUABBD.value.length != lAbo-2)
		{
			lAbo1 = lAbo - 2
			alert("Votre numéro d'abonné doit contenir "+lAbo1+" ou "+lAbo+" chiffres.");
			document.MP_formbad.NUABBD.value = "";
			document.MP_formbad.NUABBD.focus();
			return false;
		}	
	}
	if (document.MP_formbad.CODCONF.value.length != lPwd)
	{
		alert("Votre code confidentiel doit contenir "+lPwd+" chiffres.");
		document.MP_formbad.CODCONF.value = "";
		document.MP_formbad.CODCONF.focus();
		return false;
	}
	if (document.MP_formbad.NUABBD.value.length == 9)
	{
		document.MP_formbad.action=urlpro;
	}	
	else
	{	
		document.MP_formbad.action=urlpart;
	}
}
	
if (lTyp == 4 || lTyp == 5)
{	
	var sPref = document.MP_formbad.NUABBD.value.substring(0,2);
	if (sPref == '08' || sPref =='17' || sPref == '93' || sPref =='07' || sPref =='98' ||
	    sPref == '77' || sPref =='22' || sPref == '36' || sPref =='51' || sPref =='66' ||
	    sPref == '50' || sPref =='52' || sPref == '20' || sPref =='95' || sPref =='16' ||
            sPref == '10' || sPref =='43' || sPref == '18' || sPref =='57' || sPref =='30' ||
            sPref == '31' || sPref =='99' || sPref == '40' || sPref =='23' || sPref =='55' ||
            sPref == '98' || sPref =='60' || sPref == '79' || sPref =='84' || sPref =='70' ||
            sPref == '90' || sPref =='96' || sPref == '97')
	{
		document.MP_formbad.action=urlpro;
	}	
	else
	{	
		document.MP_formbad.action=urlpart;
	}
}

d = new Date();
d.setYear(d.getYear()+1);
d=d.toGMTString();
p=location.pathname;
i=p.indexOf('/portail');
if (i > 0) p=p.substr(0,i); else p='/';
document.cookie='NAB='+document.MP_formbad.NUABBD.value+'; path='+p+'; expires='+d;
nbad=0;
s = document.cookie;
i = s.indexOf('NBAD=');
if (i>=0) nbad=parseInt(s.substr(i+5));
if (isNaN(nbad)) nbad=1; else nbad++;
document.cookie='NBAD='+nbad+'; path='+p+'; expires='+d;
window.setTimeout('Raz()', 20000);
return true;
}



