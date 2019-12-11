//// <summary>Fichier regrouppant tout les javascript utilisés traitant la carte de géolocalisation Miscrosoft.</summary>
//// <remarks>
//// <para>...</para>//// 
//// </remarks>
//// <update date="2010-11-12" author="ext-karim.mekni">Création v1</update>

var bMap = null;
var aMap = null;
var gMap = null;
var bMapWidth;
var bMapHeight;
var httpisbusy=false;
var BasicLayer; 

var VraiesAgences = [ 203038,203039,203040,203041,412143,463709 ];

//-----------------------------------------------------------------------------------
//																MAP
//-----------------------------------------------------------------------------------
function GetBingMap(oLatLongRect,DashboardSize)
{  
	bMap = new VEMap('TheBingMap');			
	bMap.SetDashboardSize(DashboardSize)			
	bMap.LoadMap();
  
  bMap.SetMapStyle(VEMapStyle.Road);
  bMap.SetMapView(oLatLongRect);	
	//bMap.EnableShapeDisplayThreshold(false); 
	bMap.SetScaleBarDistanceUnit(VEDistanceUnit.Kilometers);
	
  // Event handler
	bMap.AttachEvent("onchangeview",Map_OnChangeView);	
	bMap.AttachEvent("onmousewheel",Map_OnMouseWheel);
	bMap.AttachEvent("onmouseover",Map_OnMouseOver);
 	
	// Map Infos
	var mapView = bMap.GetMapView();
  var bottomRight = bMap.LatLongToPixel(mapView.BottomRightLatLong);
  bMapWidth = parseInt(Math.ceil(bottomRight.x));
  bMapHeight = parseInt(Math.ceil(bottomRight.y));
  
	// Initial query
  Map_OnChangeView();
}
//-----------------------------------------------------------------------------------
function GetAnnonceMap(latitude, longitude, DashboardSize, zoomLevel)
{
	var latlong = new VELatLong(latitude,longitude);
	aMap = new VEMap('AnnonceBingMap');		
	aMap.SetDashboardSize(DashboardSize);		
				
	aMap.LoadMap(latlong,zoomLevel,'r',false);	
	aMap.SetScaleBarDistanceUnit(VEDistanceUnit.Kilometers);
	
	pinShape = new VEShape(VEShapeType.Pushpin, latlong);		
	pinShape.SetCustomIcon("<div class='pinAnn'></div>");
  aMap.AddShape(pinShape);
	aMap.ZoomIn();
}
//-----------------------------------------------------------------------------------
function GetAgencesMap(arrayOfAgencies, DashboardSize)
{	
	var VELatLongArray = new Array();
	
	for(i=0;i<arrayOfAgencies.length;i++)
	{
		if(arrayOfAgencies[i].latitude!="" && arrayOfAgencies[i].longitude!="" )
			VELatLongArray.push(new VELatLong(arrayOfAgencies[i].latitude,arrayOfAgencies[i].longitude));		
	}
	
	gMap = new VEMap('AgencesBingMap');		
	gMap.SetDashboardSize(DashboardSize);	
	gMap.LoadMap(new VELatLong(arrayOfAgencies[0].latitude,arrayOfAgencies[0].longitude),14,'r',false);
	gMap.SetScaleBarDistanceUnit(VEDistanceUnit.Kilometers);
	gMap.SetMapView(VELatLongArray);	
	
	if(VELatLongArray.length==1)
		gMap.SetZoomLevel(zoomAgencesDefaut);
	gMap.AttachEvent("onerror", gMap_OnError);

	for(i=0;i<arrayOfAgencies.length;i++)
	{
		if(arrayOfAgencies[i].latitude!="" && arrayOfAgencies[i].longitude!="" )
			AddAgencyMarker(arrayOfAgencies[i]);
		
	}
	
}
//-----------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------
function GetAgencesMap2(arrayOfAgencies, DashboardSize)
{	
	var VELatLongArray = new Array();
	
	for(i=0;i<arrayOfAgencies.length;i++)
	{
		if(arrayOfAgencies[i].latitude!="" && arrayOfAgencies[i].longitude!="" )
			VELatLongArray.push(new VELatLong(arrayOfAgencies[i].latitude,arrayOfAgencies[i].longitude));		
	}
	
	gMap = new VEMap('AgencesBingMap2');		
	gMap.SetDashboardSize(DashboardSize);	
	gMap.LoadMap(new VELatLong(arrayOfAgencies[0].latitude,arrayOfAgencies[0].longitude),14,'r',false);
	gMap.SetScaleBarDistanceUnit(VEDistanceUnit.Kilometers);
	gMap.SetMapView(VELatLongArray);	
	
	if(VELatLongArray.length==1)
		gMap.SetZoomLevel(zoomAgencesDefaut);
	gMap.AttachEvent("onerror", gMap_OnError);

	for(i=0;i<arrayOfAgencies.length;i++)
	{
		if(arrayOfAgencies[i].latitude!="" && arrayOfAgencies[i].longitude!="" )
			AddAgencyMarker(arrayOfAgencies[i]);
		
	}
	
}
//-----------------------------------------------------------------------------------
function UnloadMap()
{
  if (bMap != null) 
  {  	
  	bMap.Dispose();
  }
}
//-----------------------------------------------------------------------------------
function BuildVeMapRectangle(latbg,lonbg,lathd,lonhd)
{
	chg = new VELatLong(lathd, lonbg);
	cbd = new VELatLong(latbg, lonhd);
	chd = new VELatLong(lathd, lonhd);
	cbg = new VELatLong(latbg, lonbg);	
	return new VELatLongRectangle(chg,cbd,chd,cbg);	
}
//-----------------------------------------------------------------------------------
function Map_OnChangeView()
{			
	
		var zoomlevel = bMap.GetZoomLevel();
	
		bMap.DeleteAllShapes();
		
		var getResearchCriteria = window.location.search.substring(1);
			
		var view = bMap.GetMapView();
		
		var latlon0 = view.TopLeftLatLong; 
		var latlon1 = view.BottomRightLatLong;
		
		var query = "/carto,ajaxmap,bingmapmarkers.htm?"+ getResearchCriteria +"&zoom="+ zoomlevel +"&width="+ bMapWidth +"&height="+ bMapHeight +"&latMin="+ latlon1.Latitude +"&lonMin="+latlon0.Longitude+"&latMax="+latlon0.Latitude+"&lonMax="+latlon1.Longitude;
		
		DoAjaxQuery(query);	
	  
}
//-----------------------------------------------------------------------------------
function Map_OnMouseWheel()
{
	// Disable zoom on mousewheel event 
	return false;
	
}
//-----------------------------------------------------------------------------------
function AddPolygon(stringListeDePoint, libelle)      
{   
	
		//document.getElementById("debugBingMap").innerHTML += stringListeDePoint +"<br/>";
		var zone = null;
		var tabListeDeLL = stringListeDePoint.split(',');
		var tabListeDePoint = new Array();
	
		for(i=0;i<tabListeDeLL.length;i++)
		{				
			tabListeDePoint.push(new VELatLong(tabListeDeLL[i],tabListeDeLL[i+1])); 			
			//BasicLayer.AddShape(new VEShape(VEShapeType.Pushpin, new VELatLong(tabListeDeLL[i],tabListeDeLL[i+1])));	
			
			i++;
		}
	
		zone = new VEShape(VEShapeType.Polygon, tabListeDePoint);   
		zone.SetZIndex(null, 2000);      
		//Set the line color         
		var lineColor = new VEColor(185,0,0,1.0);         
		zone.SetLineColor(lineColor);                  
		//Set the line width         
		var lineWidth = Math.round(2);         
		zone.SetLineWidth(lineWidth);                  
		//Set the fill color         
		var fillColor = new VEColor(255,238,140,0.3);         
		zone.SetFillColor(fillColor); 
		zone.HideIcon();   		
		bMap.AddShape(zone); 		
		
}
//-----------------------------------------------------------------------------------
function AddPolygonVille(latMin,lonMin,latMax,lonMax)      
{   

	try
	{
		zone = new VEShape(VEShapeType.Polygon, [new VELatLong(latMin,lonMin),
																						 new VELatLong(latMax,lonMin),
																						 new VELatLong(latMax,lonMax),
																						 new VELatLong(latMin,lonMax)]);    
		          
		//Set the line color         
		var lineColor = new VEColor(202,202,202,1.0);         
		zone.SetLineColor(lineColor);                  
		//Set the line width         
		var lineWidth = Math.round(2);         
		zone.SetLineWidth(lineWidth);                  
		//Set the fill color         
		var fillColor = new VEColor(255,255,255,0.2);         
		zone.SetFillColor(fillColor); 
		//zone.HideIcon();   
		bMap.AddShape(zone);
	}
	catch(err)
	{
		//alert(err.description);
	}
    
}
//-----------------------------------------------------------------------------------
function InsertMapPin(oAnnonce)
{			
	
	
	var pinShape = new VEShape(VEShapeType.Pushpin, oAnnonce.latlong);	
	
	var libelle;
	
		
	pinShape.SetTitle(oAnnonce.infos.libelle);
	pinShape.SetDescription("");
	pinShape.infos=oAnnonce.infos;		

	switch(oAnnonce.infos.localisation)
	{
		case 'pays':
			pinShape.SetCustomIcon("<div class='pinPays'><div class='text'>"+ oAnnonce.infos.nbAnnonces +"</div></div>");
		break;
		case 'reg':
			pinShape.SetCustomIcon("<div class='pinReg'><div class='text'>"+ oAnnonce.infos.nbAnnonces +"</div></div>");
		break;
		case 'dep':
			pinShape.SetCustomIcon("<div class='pinDep'><div class='text'>"+ oAnnonce.infos.nbAnnonces +"</div></div>");
		break;
		case 'vil':
			pinShape.SetCustomIcon("<div class='pinVil'><div class='text'>"+ oAnnonce.infos.nbAnnonces +"</div></div>");
		break;
		case 'qrt':
			pinShape.SetCustomIcon("<div class='pinQrt'><div class='text'>"+ oAnnonce.infos.nbAnnonces +"</div></div>");
		break;		
		case 'ann':
			pinShape.SetCustomIcon("<div class='pinAnn'><div class='text'>"+ oAnnonce.infos.nbAnnonces +"</div></div>");
		break;
	}
	pinShape.SetZIndex(5000);
	pinShape.ShowIcon();
  bMap.AddShape(pinShape);
}
//-----------------------------------------------------------------------------------
function AddAgencyMarker(oAgency)
{			
	
	var pinShape = new VEShape(VEShapeType.Pushpin, new VELatLong(oAgency.latitude,oAgency.longitude));	
	pinShape.SetCustomIcon("<div class='pinAgences' id='agence"+oAgency.idPublication+"' onmouseover='$(\".ero-leftBeak\").removeAttr(\"id\");$(\".ero-leftBeak\").attr(\"id\",\"infobulle"+oAgency.idPublication+"\");'></div>");		
	pinShape.SetTitle(oAgency.nom);
	
	var qs = new Querystring()
	var qIdPublication = qs.get('idp' );
  
		if($.inArray(oAgency.idPublication,VraiesAgences)!=-1){
			var html = '<div id="listeAg">';
		}else{
			var html = '<div id="listeAg" class="conseiller">';
			var idcat;
			switch(oAgency.idPublication){
				case 467759:
				  idcat=23667;
				  break;					
				case 471075:
					idcat=24090;
					break;				
				case 471072:
					idcat=24091;
					break;	
				case 472552:
					idcat=24361;
					break;			
				case 472554:
					idcat=24363;
					break;
				case 473417:
					idcat=24492;
					break;
				case 473802:
					idcat=24541;
					break;
				case 480876:
					idcat=24719;
					break;		
				case 480878:
					idcat=24720;
					break;	
				case 483288:
					idcat=25155;
					break;		
				case 483290:
					idcat=25156;
					break;
				case 483292:
					idcat=25157;
					break;					
				case 483286:
					idcat=25158;
					break;	
				case 1:
					idcat=26407;
					break;	
				case 10:
					idcat=26983;
					break;		
				case 11:
					idcat=27234;
					break;						
				case 12:
					idcat=27235;
					break;			
				case 15:
					idcat=28818;
					break;		
				case 21:
					idcat=28936;
					break;
				case 22:
					idcat=28937;
					break;
				case 23:
					idcat=29142;
					break;
				case 24:
					idcat=29143;
					break;
				case 25:
					idcat=29144;
					break;
				case 26:
					idcat=29145;
					break;
				}							
			
		}
		
	
			html = html	+'<div class="descGeolocAdresse">'+ oAgency.adresse +'</div>';
			if(oAgency.tel.length>0)
				html = html	+'<div class="descGeolocTel">'+ oAgency.tel +'</div>'
							  //+'<div>Fax :'+ oAgency.fax +'</div>'
								//+'<div>Nom du responsable :'+ oAgency.respag +'</div>'
			if(oAgency.email.length>0)
				html = html	+'<div class="descGeolocEmail"><a href="mailto:'+ oAgency.email +'" title="">'+ oAgency.email +'</a></div>';
			if(oAgency.surl.length>0)
				html = html	+'<div class="descGeolocUrl"><a href="'+ oAgency.surl +'" title="">'+ oAgency.surl +'</a></div>';
			
			
			if(qIdPublication==null){
				
				if(oAgency.idPublication==463709){
					html = html	+'<div class="descGeolocDetail"><a href="javascript:void(0);" onclick="$(\'#GoConseil\').click();" title=""></a></div>'
						 +'</div>';
				}else if($.inArray(oAgency.idPublication,VraiesAgences)!=-1){
							html = html	+'<div class="descGeolocDetail"><a href="/agence,immobiliere.htm?idp='+ oAgency.idPublication +'&amp;lang='+ langue +'" title=""></a></div>'
						 +'</div>';
				}else{
					html = html	+'<div class="descGeolocDetail"><a href="/immo,conseiller.htm?idcat='+idcat+'&amp;cp='+ oAgency.cp +'&amp;idp='+ oAgency.idPublication +'&amp;lang='+ langue +'" title=""></a></div>'
						 +'</div>';
				}
			}
	
	pinShape.SetDescription(html);	
  gMap.AddShape(pinShape);
  
}
//-----------------------------------------------------------------------------------
function pinAgency(p,d)
{
	this.pinID = p;
	this.pinDescription = d;
	
}
//-----------------------------------------------------------------------------------
function gMap_OnError()
{
	return true;
}
//-----------------------------------------------------------------------------------
function Map_OnMouseOver(e) 
{		
	
	if(e.elementID)
	{		
		
		var pin= bMap.GetShapeByID(e.elementID);		
		pin.SetDescription(""); 
		
		
		
		var localisation = getLocalisationForQry(pin);
		
		if(pin.infos.localisation=='qrt')
		{
			var html='<p class="nbAnnBingMap">'+pin.infos.villeAff+'</p>';
			html +='<p class="nbAnnBingMap">'+pin.infos.nbAnnonces+ ' ' + getPluriel(pin.infos.nbAnnonces,annSingulier,annPluriel)+'</p>';
		}
		else
		{
							
			var html ='<p class="nbAnnBingMap">'+pin.infos.nbAnnonces+ ' ' + getPluriel(pin.infos.nbAnnonces,annSingulier,annPluriel)+'</p>';
		}
				
			
		
	
		if (pin.infos.nbAnnonces<1000)
			if(pin.infos.localisation=="ann")
				html += '<p><a href="javascript:gotoPrelisteUrl(/'+ pin.infos.idpublication +'/'+ pin.infos.id + urlDetail +');">Voir les d&eacute;tails de l\'annonce</a></p>';
			else
				{			
					//html += ('<p class="zoomAnnBingMap">')+'<a href="javascript:layoutLaunchPreliste(\''+e.elementID+'\');" title="">'+ zoomerSurAnn + ' '+ getPluriel(pin.infos.nbAnnonces, cetteAnnonce, cesAnnonces)+'</a></p>'; 
					
	
				}
		else
			html+=('<br/>')+'&raquo;<a href="javascript:layoutZoom(\''+e.elementID+'\');">Voir la zone en d&eacute;tail</a><br/>';
	
		if (pin.infos.nbAnnonces<=30) 
		{
			html+='<div id="listeann"><img id="flyoutloading" src="z/webagency/slagence_X_V3/carto/img/a_loading.gif" alt="Chargement" title="" /></div>';
		}
		pin.SetDescription(html); 		
		bMap.ShowInfoBox(pin);
		
		if (pin.infos.nbAnnonces<=30)
		{				
			//alert('/carto,ajaxmap,getAnnonces.htm?&photo=1&'+ localisation +'&'+ queryPreliste());
			if(pin.infos.localisation=="ann")
				GetLayoutContent('/carto,ajaxmap,getAnnonceLoc.htm?idpublication='+ pin.infos.idpublication +'&photo=1&'+ localisation +'&'+ queryPreliste());
			else
				GetLayoutContent('/carto,ajaxmap,getAnnonces.htm?photo=1&'+ localisation +'&'+ queryPreliste());
		}	
	}
	return false;
}
//-----------------------------------------------------------------------------------
function getLocalisationForQry(pin)
{
	var localisation = null;
	switch(pin.infos.localisation)
	{
		case "pays":
		localisation = "idpays=" + pin.infos.id;
		break;
		case "reg":
		localisation = "div=" + pin.infos.id;
		break;
		case "dep":
		localisation = "sdiv=" + pin.infos.id;
		break;
		case "vil":
		localisation = "ci=" + pin.infos.id;
		break;
		case "qrt":
		localisation = "idqfix=1&idq=" + pin.infos.id+"&ci="+pin.infos.codeInsee;
		break;
		case "ann":
		localisation = "idannonce="+ pin.infos.id;
		break;	
	}
	return localisation;	
}
//-----------------------------------------------------------------------------------
function queryPreliste() {
	return querypreliste;
}
//-----------------------------------------------------------------------------------
function layoutZoom(elementid) {
	var pin= bMap.GetShapeByID(elementid);
	if (pin)
		bMap.SetCenterAndZoom(pin.GetPoints()[0], AdaptZoom());
}
//-----------------------------------------------------------------------------------
function layoutLaunchPreliste(elementid) {
	var pin= bMap.GetShapeByID(elementid);
	if (pin)
		gotoPrelisteUrl(getLocalisationForQry(pin) +'&'+queryPreliste());
}
//-----------------------------------------------------------------------------------
function gotoPrelisteUrl(url) {
	document.location.href=urlpreliste+'?'+url;
}
//-----------------------------------------------------------------------------------
function getPluriel(nb,sing,plur) {
	if (!sing) sing='';
	if (!plur) plur='s';
	return (nb==1)?sing:plur;
}
//-----------------------------------------------------------------------------------
function AdaptZoom() {
	var curzoom = bMap.GetZoomLevel();
	if (curzoom==17) return curzoom;
	if (curzoom<8) return curzoom+2;
	return curzoom++;
}
//-----------------------------------------------------------------------------------
//															 HTML
//-----------------------------------------------------------------------------------
function ShowLoading()
{

	var el = document.getElementById("LoadingDiv");
	el.style.width = document.getElementById("TheBingMap").style.width;
	el.style.height = document.getElementById("TheBingMap").style.height;	
	
	// old 11.05.2010 c/o Lisbonne
  //el.innerHTML = "<div id=\"LoaderImg\"><img src='z/webagency/slagence_X_V3/carto/img/a_loading.gif' /> Chargement du nombre d'annonces. Merci de patienter...</div>";  
  el.innerHTML = "<table id=\"LoaderBg\"><tr><td></td></tr></table><table id=\"LoaderMsg\"><tr><td>Chargement du nombre d'annonces. Merci de patienter...</td></tr></table>";  
  el.style.display = "block";
  
  
}
//-----------------------------------------------------------------------------------
function ShowMessage(msg)
{
	if(bMap)
		bMap.ShowMessage(msg);  
	else
		document.getElementById("LoadingDiv").innerHTML ="<div class='message'>"+ msg + "</div>";
}
//-----------------------------------------------------------------------------------
//remove loading label
function HideLoading()
{
  var el = document.getElementById("LoadingDiv");
  el.style.display = "none";
}
//-----------------------------------------------------------------------------------
//															 AJAX
//-----------------------------------------------------------------------------------

//helper function for AJAX
function GetXmlHttp() { //fuction to return the xml http object
		var xmlhttp=false;	
		try{
			xmlhttp=new XMLHttpRequest();
		}
		catch(e)	{		
			try{			
				xmlhttp= new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch(e){
				try{
				xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
				}
				catch(e1){
					xmlhttp=false;
				}
			}
		}
		 	
		return xmlhttp;
	}
//-----------------------------------------------------------------------------------
function DoAjaxQuery(url)
{  	
	ShowLoading();
		
  //Start by getting the appropriate XMLHTTP object for the browser
  var xmlhttp = GetXmlHttp();
  //If we have a valid xmlhttp object
  
  
  
  if (xmlhttp)
  {		
    xmlhttp.open("GET", url, true); // varAsync = true;    
    //Set the callback.  
    xmlhttp.onreadystatechange = function()
    {    	
      if (xmlhttp.readyState == 4)  //4 is a success
      {      	
        //Server code creates javascript "on the fly" for us to
        //execute using eval()        
        var result = xmlhttp.responseText;            
        try
        {                 	 	        	
        	eval(cleanJavascript(result));
      	}
        catch(err)
			  {						  		
			  	//alert(cleanJavascript(result));	  
			  }			 
        HideLoading();          
      }
    }
    xmlhttp.send(null);    
  }
}
//-----------------------------------------------------------------------------------
function GetLayoutContent(qurl)
{	
  
  
  
	//Start by getting the appropriate XMLHTTP object for the browser
  var xmlhttp = GetXmlHttp();
  //If we have a valid xmlhttp object
  if (xmlhttp)
  {	  	
     
    //Set the callback.  
    xmlhttp.onreadystatechange = function()
    {    	
      if (xmlhttp.readyState == 4)  //4 is a success
      {  
        //Server code creates javascript "on the fly" for us to
        //execute using eval()        
        var result = xmlhttp.responseText;                   
        try
        { 
        	            	 	        	
        	document.getElementById("listeann").innerHTML = result;    
        	 	
      	}
        catch(err)
			  {				  	
			  	//alert(err.description);
			  }                 
      }
    }
    xmlhttp.open("GET", qurl, true); // varAsync = true;   
    xmlhttp.send(null);    
  }	
}
//-----------------------------------------------------------------------------------
function cleanJavascript(inStr)
{
  var comment = inStr.substring(inStr.indexOf("<!--",1),inStr.indexOf(">",1)+1);

	return inStr.replace(comment," ");
	
}
//-----------------------------------------------------------------------------------
function addOnLoadEvent(content)
{
	var oldonload = window.onload; 
	if (typeof window.onload != 'function') 
	{ 
		window.onload = window.onload = function(){	eval(content);}; 
	} 
	else 
	{ 
		window.onload = function() { 
											if (oldonload) 
											{ 
												oldonload(); 
											} 
											eval(content);
										}
	}
	
}
//-----------------------------------------------------------------------------------
function addOnUnloadEvent(func)
{
	var oldOnUnload = window.onunload; 
	if (typeof window.onunload != 'function') 
	{ 
		window.onunload = func; 
	} 
	else 
	{ 
		window.onunload = function() { 
											if (oldOnUnload) { 
													oldOnUnload(); 
											} 
											func(); 
										} 

	} 
	
}
//-----------------------------------------------------------------------------------
// prototype
function addLoadEvent(func) 
{ 
	var oldonload = window.onload; 
	if (typeof window.onload != 'function') 
	{ 
		window.onload = func; 
	} 
	else 
	{ 
		window.onload = function() { 
											if (oldonload) { 
													oldonload(); 
											} 
											func(); 
										} 

	} 
} 

function Querystring(qs) 
{ 
	this.params = {};
	
	if (qs == null) qs = location.search.substring(1, location.search.length);
	if (qs.length == 0) return;
	qs = qs.replace(/\+/g, ' ');
	var args = qs.split('&'); 	

	for (var i = 0; i < args.length; i++) {
		var pair = args[i].split('=');
		var name = decodeURIComponent(pair[0]);
		
		var value = (pair.length==2)
			? decodeURIComponent(pair[1])
			: name;
		
		this.params[name] = value;
	}
}

Querystring.prototype.get = function(key, default_) {
	var value = this.params[key];
	return (value != null) ? value : default_;
}

Querystring.prototype.contains = function(key) {
	var value = this.params[key];
	return (value != null);
}

