function MM_findObj(n, d) { //v4.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n); return x;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; 
	for(i=0; i<a.length; i++)
    	if (a[i].indexOf("#")!=0){ 
			d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}
		}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_swapImage() { //v3.0
  	var i,j=0,x,a=MM_swapImage.arguments; 
	document.MM_sr=new Array; 
	for(i=0;i<(a.length-2);i+=3) {
   		if ((x=MM_findObj(a[i]))!=null){
			//alert(a[i+2]);
			document.MM_sr[j++]=x; 
			if(!x.oSrc) {
				x.oSrc=x.src; x.src=a[i+2];
			}
		}
	}
}
var pfx = "";
function setSwapImage( path ) {
	pfx = path;
}

var idag = "";
function setIdAg(idagence) {
	idag = idagence;
}
//-- utile éditeur d'article logué
function GoTo(av,idag,ap) {
	document.location = "/" + av + "/" + idag + "/" + ap;
}

function Editeur_swapImage(imgname,imgsrc) { //v3.0
	x=MM_findObj(imgname);
	if (x) x.src = pfx + imgsrc;
}

function OngletFocus(val,f) { //v3.0
  var a=MM_findObj("ong" + val);
  var ac=MM_findObj("ongc" + val);
  var i=MM_findObj("ongi" + val);
	var refn=MM_findObj("refn");
	var reff=MM_findObj("reff");
	if(!a){
		a = document.eval("ong" + val);
		ac = document.eval("ongc" + val);
		i = document.eval("ongi" + val);
	}
	if (a) {
		a.className = "navo"+f;
		ac.className = "navo"+f;
		if(f == 'n') {i.src = refn.src;}
		if(f == 'ff') {i.src = reff.src;}
		}
}
//------------------ modif texte public, photo_ajouter
function rafraichi(){
	fenetre = opener.document.location.href;
	opener.document.location.href = fenetre;
	}

//------------------- modif texte public 
function jeconfirme(chx)
	{
		document.form1.dirige.value = "supprime";
		document.form1.txt_public.value = "";
		document.form1.submit();	
	}

//-------------------
function pluriel(nb,sing,plur)
{
	if (nb != "" && sing != "" && plur != "")
	{
		if ( nb>1 ) { return plur;}
		else { return sing; }
	}else {return null;}
}
//-----------------------------------

var popup;
function PopUP(sUrl,sTitle,iWidth,iHeight,iTop,iLeft,bResize,bScrollbars) {
// if(popup!=null){popup.close(sUrl);popup=null;}
	if (iWidth == 0 || iWidth < 300) {
		iWidth=500;
	}
	if (iHeight == 0 || iHeight < 200) {
		iHeight=300;
	}
	if (iTop == 0) {
		if(window.screen.Height) {iTop = window.screen.Height/2 - 200;}
		else {iTop = 10;}
	}
	if (iLeft == 0) {
		if(window.screen.Width){iLeft = window.screen.Width/2 - 225;}
		else {iLeft = 10;}
	}
	if(bResize == ''){
		bResize = yes;
	}
	if(bScrollbars == '') { 
		bScrollbars = yes;
	}
	popup=window.open(sUrl,sTitle,'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars='+bScrollbars+',resizable='+bResize+',width='+iWidth+',height='+iHeight+',top='+iTop+',left='+iLeft);
}
//******************************************************


function openext(lien,titre,l,h,scrollb) {
	var hauteur=Math.round((screen.availHeight-h)/2);
	var largeur=Math.round((screen.availWidth-l)/2);
	window.open(lien,titre,"toolbar=0,location=0,directories=0,status=0,scrollbars="+scrollb+",resizable=1,menubar=0,top="+hauteur+",left="+largeur+",width="+l+",height="+h);
}


//---------------- gestan - suppression des annonces
function confirmsup ()
{
var obj = MM_findObj("f_ann");
var tmp = true;
	//  tableau
	if (obj.idannonces.length >0 ) 
	{
		for (i = 0 ; i < obj.del.length ; i++ )
		{
		 if (obj.del[i].checked == true ) 
		 	{
		 	tmp = confirm('Etes-vous sûr de vouloir supprimer ces annonces ?');
		 	i = 2000;
		 	}
		} 
	}
	else
	{
		if(obj.del.checked == true) tmp = confirm('Etes-vous sûr de vouloir supprimer cette annonce ?');
	}

if(tmp != false) {obj.modifier.value="1";obj.submit();}
}// confirmsup       

//---------------- actuellement fonctionne sur un champ de ref, demain pourra envoyer action si besoin.
function ToutCocher(NomForm,ChamRef,NomChamp,action) {
var objForm = MM_findObj(NomForm);
var objRef = MM_findObj(ChamRef);
var glop;glop = 0;
	if (objForm) {
		for (i=0 ; i< objForm.length ; i++)
		{
			if (objForm.elements[i].name == NomChamp) {glop = 1;objForm.elements[i].checked = objRef.checked;}
		}
	}
}
//******************************************************
//---------------- annonceedit - à partir d'une ville ou d'un cp renvoie la liste des cp-ville
function aideville()
{
var objVil = MM_findObj("ville");
var objCp = MM_findObj("cp");
	if(objVil && objCp) {
		if(objVil.value != '') {
			tmp = objCp.value;
		}
		else {
			tmp = objVil.value;
		}
		PopUP('/p_aidecpville.htm?s='+escape(tmp),'aidecpville',400,400,0,0,'yes','yes');
	}
}

function aidecp()
{
var objCp = MM_findObj("cp");
var objVil = MM_findObj("ville");
var val;
if (objCp) {
	if (objCp.value == "") {
		if (objVil) {
			val = objVil.value;
		}
	}
	else {
		val = objCp.value;
	}
}
 	PopUP('/p_aidecpville.htm?s='+escape(val),'aidecpville',450,400,0,0,'yes','yes');
}
//---------------- annonceedit - retrouve les divisions
function aidedivision(libellediv,libellesub,libellevil) {

var objPays = MM_findObj("idpays");
var objDiv = MM_findObj("iddivision");
var objSubDiv = MM_findObj("idsubdivision");
var objVilInter = MM_findObj("idvilleinter");
var objVil = MM_findObj("ville");
var objCp = MM_findObj("cp");

var idpays;var iddivision;var idvillesinter;
var idsubdivision;var ville;var cp;
	idpays = objPays.value;
	iddivision = objDiv.value;
	idsubdivision = objSubDiv.value;
	idvilleinter = objVilInter.value;
	ville = objVil.value;
	cp = objCp.value;
	PopUP('/p_aidedivision.htm?idpays='+escape(idpays)+'&ville='+escape(ville)+'&iddivision='+escape(iddivision)+'&idsubdivision='+escape(idsubdivision)+'&idvilleinter='+escape(idvilleinter)+'&cp='+escape(cp)+'&libellediv='+libellediv+'&libellesub='+libellesub+'&libellevil='+libellevil,'aidedivision',450,400,0,0,'yes','yes');
}
//--------------------------------------- types de bien commerce inclannonceform
function FillLayerDivision(lay, htm)
{
	var obj = MM_findObj(lay);
	// Cas Netscape
	if (document.layers) {
		obj.document.open();
		obj.document.writeln(htm);
		obj.document.close();
	}
	// cas IE
	else if (document.all) {
		obj.innerHTML = htm;
	}
	// cas DOM (tous les autres)
	else if( !(document.all) && (document.getElementById) ) {
		obj.innerHTML = htm;
	}
}
//--------------------------------------- types de bien commerce inclannonceform, annoncehchangetype
function FillLayer(lay, htm)
{
	// Cas Netscape
	if (document.all) {
		document.all[lay].innerHTML = htm;
	}
	// cas DOM (tous les autres)
	else if( !(document.all) && (document.getElementById) ) {
		document.getElementById(lay).innerHTML = htm;
	}
}

//-------------------------------  popup
function close_on_escape( e )
{
	var code;
	if( !e ) {e = window.event;}
	code = e.keyCode;
	if( code == 27 ){self.close();}
}

//------------------------------- fonction qui permet d'atteindre une ancre dans une page
function appel_cible(ancre)
{
	self.location.hash=ancre;
}

//------------------------------- fonction qui permet de colorer le fond d'un élément
function colorize(el,color){
document.getElementById(el).style.background = color;
}

//------------------------------- abo tout cocher
function Abo_ToutCocher(value,type) {
	var i;
	var act;
	if(type == "cocher") {act = true;} else {act = false;}
	for(i=0;i<30;i++){
		obj=eval("document.annonces."+value+"["+i+"]");
		if(obj) {obj.checked=act;} 
		else {i=100;}
	}
}
//------------------------------- création d'annonce


function NeufSelect(t){
	select_if( t, '9', '15' );
	if( t == 1 ) {
		select_if( 1, '10', '6' );
	}
}

function select_if(t, idtt, idtb) {
	var i;
var objidtb = MM_findObj( "idtypebien");
var objidtt = MM_findObj( "idtypetransaction");

	if ((t == 1) && (objidtt.value == idtt)) {
		for(i=0; i<objidtb.length; i++) {
			if (objidtb.options[i].value == idtb) {
				objidtb.selectedIndex = i;
				break;
			}
		}
	}
	else if ((t == 2) && (document.f_types.idtypebien.value == idtb)) {
		for(i=0; i<objidtt.length; i++) {
			if (objidtt.options[i].value == idtt) {
				objidtt.selectedIndex = i;
				break;
			}
		}
	}
}

function AddOption(name,indice,value)
{
var list = MM_findObj(name);
var opt;
	if(list)
	{
		opt = new Option(indice,value);
		list.options[indice] = opt;
	}
}
//----------------------------------
function showHidePub() {
var objWith = MM_findObj("with");
var objWithout = MM_findObj("without");
var objshowhide = MM_findObj("showhide");
	if(!objWith){
		objWith = document.name;
		objWithout = document.name;
	}
	if (objWith) {
		if(objshowhide.value=="Afficher" ) {
			objWith.className="formon";
			objWithout.className="formoff";
			objshowhide.value="Masquer";
		}
		else{
			objWith.className="formoff";
			objWithout.className="formon";
			objshowhide.value="Afficher";
		}
	}
}


//----------------------------------
function showHide(name,action) {
var objDiv = MM_findObj(name);
	if(!objDiv){
		objDiv = document.name;
	}
	if (objDiv) {
		if (objDiv.className=="formon" && action == "") {action = "H";}
		if(action=="H" ) {
			objDiv.className="formoff";
		}
		else {
			objDiv.className="formon";
		}
	}
}


//---------------------------------- visites virtuelles
function WebVisiumAdd() {
	var objWebV=MM_findObj("f_webvisium");
	if(objWebV) {objWebV.submit();}
}

function ValiderVirtualEye()
{
	var tmp;
	chaine = MM_findObj("id").value;
	var tab=new Array;
	tab[0] = "http:";tab[1] = "/";tab[2] = "www.";tab[3] = "virtualeye";tab[4] = ".php?";
	for (i=0;i<5;i++)
	{
		tmp = chaine.indexOf(tab[i]);
		if (tmp != -1) {alert("Vous ne devez pas saisir l'url.");return 0;}
	}
	tmp = chaine.indexOf(" ");
	if (tmp != -1) {alert("Vous ne devez pas saisir d'espaces.");return 0;}
		document.f_virtualeye.submit();
	return 1;
}

function delvisu(idvisuel,msg) {
	objForm = MM_findObj("form_delvisu");
	if(msg != null){ m = msg; }
	else{
		m = "ce visuel ?";
	}
	if (confirm("Etes-vous certain de vouloir supprimer "+ m +" ?")) {
		if(objForm && idvisuel !=''){
			objForm["idvisuel"].value = idvisuel;
			objForm.submit();
		}
	}
}

