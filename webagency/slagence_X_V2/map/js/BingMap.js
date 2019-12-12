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
function GetAnnonceMap(latitude, longitude, DashboardSize)
{
	var latlong = new VELatLong(latitude,longitude);
	aMap = new VEMap('AnnonceBingMap');		
	aMap.SetDashboardSize(DashboardSize);		
				
	aMap.LoadMap(latlong,14,'r',false);	
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
		VELatLongArray.push(new VELatLong(arrayOfAgencies[i].latitude,arrayOfAgencies[i].longitude));		
	}
	
	gMap = new VEMap('AgencesBingMap');		
	gMap.SetDashboardSize(DashboardSize);	
	gMap.LoadMap();
	gMap.SetScaleBarDistanceUnit(VEDistanceUnit.Kilometers);
	gMap.SetMapView(VELatLongArray);	
	
	gMap.AttachEvent("onerror", gMap_OnError);

	for(i=0;i<arrayOfAgencies.length;i++)
	{
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
		
		var query = "/map,ajaxmap,bingmapmarkers.htm?"+ getResearchCriteria +"&zoom="+ zoomlevel +"&width="+ bMapWidth +"&height="+ bMapHeight +"&latMin="+ latlon1.Latitude +"&lonMin="+latlon0.Longitude+"&latMax="+latlon0.Latitude+"&lonMax="+latlon1.Longitude;
		
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
	pinShape.SetCustomIcon("<div class='pinAgn'></div>");		
	pinShape.SetTitle(oAgency.nom);
	
	var html = '<div id=listeann><div class="ad">'								
								+'<div class="photogeoloc"><a href=""><img src="images/agences/'+ oAgency.idPublication+'.jpg" width="100" onerror="this.style.display = \'none\';"/></a></div>'
								+'<div class="descGeoloc"><div class="descGeolocAdresse">'+ oAgency.adresse +'</div>';
			if(oAgency.tel.length>0)
				html = html	+'<div class="descGeolocTel">'+ oAgency.tel +'</div>'
							  //+'<div>Fax :'+ oAgency.fax +'</div>'
								//+'<div>Nom du responsable :'+ oAgency.respag +'</div>'
			if(oAgency.email.length>0)
				html = html	+'<div class="descGeolocEmail"><a href="mailto:'+ oAgency.email +'" title="">'+ oAgency.email +'</a></div>';
			if(oAgency.surl.length>0)
				html = html	+'<div class="descGeolocUrl"><a href="'+ oAgency.surl +'" title="" target="_blank">'+ oAgency.surl +'</a></div>';
			
			html = html	+'<div class="descGeolocDetail"><a href="/agence,immobiliere.htm?idp='+ oAgency.idPublication +'&amp;lang='+ langue +'" title="">'+ linkPlusDetails +'</a></div>'
								+'</div>'
						 +'</div></div>';
	
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
		
		//var html='<a style="float:right;" href="javascript:layoutZoom(\''+e.elementID+'\');" title="Centrer le secteur"><img src="$$-$$map/img/rouge_picto-centrer.gif" alt="Centrer le secteur" title="Centrer le secteur" /></a>'
		var html=pin.infos.nbAnnonces+getPluriel(pin.infos.nbAnnonces,' $$LG:ANNONCE lcase$$',' $$LG:ANNONCES lcase$$');
	
		if (pin.infos.nbAnnonces<1000)
			if(pin.infos.localisation=="ann")
				html += '<br /><a href="javascript:gotoPrelisteUrl(/'+ pin.infos.idpublication +'/'+ pin.infos.id + urlDetail +');">Voir les d&eacute;tails de l\'annonce</a>';
			else
				{			
					html += ('<br/>')+'&raquo;<a href="javascript:layoutLaunchPreliste(\''+e.elementID+'\');">Zoomer sur '+ getPluriel(pin.infos.nbAnnonces,'cette annonce','ces annonces')+'</a>'; 
					
	
				}
		else
			html+=('<br/>')+'&raquo;<a href="javascript:layoutZoom(\''+e.elementID+'\');">Voir la zone en d&eacute;tail</a><br/>';
	
		if (pin.infos.nbAnnonces<=30) 
		{
			html+='<div id=listeann><img id="flyoutloading" src="z/webagency/slagence_X_V3/map/img/a_loading.gif" alt="Chargement" title="" /></div>';
		}
		pin.SetDescription(html); 		
		bMap.ShowInfoBox(pin);
		
		if (pin.infos.nbAnnonces<=30)
		{				
			//alert('/map,ajaxmap,getAnnonces.htm?&photo=1&'+ localisation +'&'+ queryPreliste());
			if(pin.infos.localisation=="ann")
				GetLayoutContent('/map,ajaxmap,getAnnonceLoc.htm?idpublication='+ pin.infos.idpublication +'&photo=1&'+ localisation +'&'+ queryPreliste());
			else
				GetLayoutContent('/map,ajaxmap,getAnnonces.htm?photo=1&'+ localisation +'&'+ queryPreliste());
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
  //el.innerHTML = "<div id=\"LoaderImg\"><img src='z/webagency/slagence_X_V3/map/img/a_loading.gif' /> Chargement du nombre d'annonces. Merci de patienter...</div>";  
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
function GetXmlHttp()
{
  var x = null;
  try
  {
    x = new ActiveXObject("Msxml2.XMLHTTP");
  }
  catch (e)
  {
    try
    {
      x = new ActiveXObject("Microsoft.XMLHTTP");
    }
    catch (e)
    {
      x = null;
    }      
  }
  if (!x && typeof XMLHttpRequest != "undefined")
  {
    x = new XMLHttpRequest();      
  }
  return x;
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
			  	alert(err.description);
			  	alert(cleanJavascript(result));	  
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
    xmlhttp.open("GET", qurl, true); // varAsync = true;    
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