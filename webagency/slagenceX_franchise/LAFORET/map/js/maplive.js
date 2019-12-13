var pushpinLayer = null;
var vemap =null;
var isshowing=false;
var infoboxload="Chargement";

function queryPrelisteSansGeo() {
	return queryprelistesansgeo;
}

function addInfo(o) {
	var shape = new VEShape(VEShapeType.Pushpin,new VELatLong(o.lat, o.lng)); 
	shape.SetCustomIcon("<div class='"
		+getPinClassByNb(o.i.nb)
		+"'><div class='text'>"+o.i.nb+"</div></div>"); 
	shape.SetTitle(o.i.libelle);
	shape.SetDescription("");
	shape.infos=o.i;
	vemap.AddShape(shape);
}
function deleteMapInfo() {
	vemap.DeleteAllShapes();
}
function getPinClassByNb(nb) {
	if (nb<100) return "pin1";
	if (nb<10000) return "pinl";
	return "pinxl";
}
function EventMapModified() {
	var zoomlevel = vemap.GetZoomLevel();
/*	if (zoomlevel<7) {
		vemap.SetZoomLevel(7);
		return;
	}*/
	var view = vemap.GetMapView();
	var latlon0 = view.TopLeftLatLong; // bounds.getNorthEast();
	var latlon1 = view.BottomRightLatLong;//bounds.getSouthWest();

	var surl=null;

	doEcr(zoomlevel);
	var modelatlng=6;
	if (zoomlevel>=5) {
		if (zoomlevel>=7) modelatlng=6;
		if (zoomlevel>=8) modelatlng=5;
		if (zoomlevel>=9) modelatlng=4;
		if (zoomlevel>=10) modelatlng=3;
		// modifié 
		if (zoomlevel>=11) modelatlng=2;
		if (zoomlevel>=13) modelatlng=1; //metro
		doEcr("zoom:"+zoomlevel+' '+modelatlng);
		surl="/map,ajaxmap,getmapmarkers.htm?modelatlng="+modelatlng
				+"&latlng="+latlon1.Latitude+"_"+latlon0.Latitude+"_"+
				latlon0.Longitude+"_"+latlon1.Longitude
				+"&"+queryPrelisteSansGeo();
	}
	if (surl) {
		dataWait(true,"Chargement du nombre d'annonces. Merci de patienter.");
		sndReq(surl);
	}

}
function veMouseOut(e) {
/*	doEcr("out "+e.elementID);
	if (e.elementID) {
		var pin= vemap.GetShapeByID(e.elementID);
		//vemap.HideInfoBox(pin)
		return false;
	}*/
	return false;
}

function flyoutZoom(elementid) {
	var pin= vemap.GetShapeByID(elementid);
	if (pin)
		vemap.SetCenterAndZoom(pin.GetPoints()[0], GetNextZoom());
}

function flyoutLaunchPreliste(elementid) {
	var pin= vemap.GetShapeByID(elementid);
	if (pin)
		gotoList(pin.infos.id+'&'+queryPrelisteSansGeo());
}
function gotoList(url) {
	document.location.href=urlpreliste+'?'+url;
}

function GetNextZoom() {
	var curzoom = vemap.GetZoomLevel();
	if (curzoom==17) return curzoom;
	if (curzoom<8) return curzoom+2;
	return curzoom++;
}
function veOnMouseClick(e) {
	if (e.elementID) flyoutZoom(e.elementID);
}
function veOnMouseOver(e) 
{
	if(e.elementID)// && isshowing==false)
	{
		var pin= vemap.GetShapeByID(e.elementID);
		var html='<a style="float:right;" href="javascript:flyoutZoom(\''+e.elementID+'\');" title="Centrer le secteur"><img src="$$-$$map/img/bleu_picto-centrer.gif" alt="Centrer le secteur" title="Centrer le secteur" /></a>'
		+pin.infos.nb+getPluriel(pin.infos.nb,' annonce',' annonces');
		if (pin.infos.nb<1000)
			html+=('<br/>')+'&raquo;<a href="javascript:flyoutLaunchPreliste(\''+e.elementID+'\');">Voir '
			+getPluriel(pin.infos.nb,'la liste','la liste')
			+'</a><br/>';
		else
			html+=('<br/>')+'&raquo;<a href="javascript:flyoutZoom(\''+e.elementID+'\');">Voir la zone en d&eacute;tail</a><br/>';
		if (pin.infos.nb<=30) {
			html+='<center><div id=listeann><img src="$$-$$map/img/a_loading.gif" alt="Chargement" id=flyoutloading vspace=20 /></div></center>';
		}
			pin.SetDescription(html); 
		vemap.ShowInfoBox(pin);
		
			if (pin.infos.nb<=30)
					sndReq('/map,ajaxmap,getrecherche.htm?&photo=1&'+pin.infos.id+'&'+queryPrelisteSansGeo()+'&markerinfosid='
			+pin.infos.id.replace('=','_'));


	}

//		vemap.ShowInfoBox(pin);

		return true;
}

function setPinHtml(elementid,html) {
		var pin= vemap.GetShapeByID(elementid);
		if (pin) {
			vemap.HideInfoBox();
			pin.SetDescription(html);
			vemap.ShowInfoBox(pin);
		}
}


function EventMapLoad() {
	pushpinLayer= new VEShapeLayer();
	pushpinLayer.SetTitle("pushpin layer");
	pushpinLayer.Show();
	vemap.AttachEvent("onendpan", EventMapModified);
	vemap.AttachEvent("onendzoom", EventMapModified);	
	vemap.AttachEvent('onclick', veOnMouseClick); 
	vemap.AttachEvent('onmouseover', veOnMouseOver); 
	vemap.AttachEvent('onmouseout', veMouseOut); 
	vemap.SetScaleBarDistanceUnit(VEDistanceUnit.Kilometers);
	vemap.ShowMiniMap(20,420);
	EventMapModified();
}

function mapInit(ar)
{
    vemap = new VEMap('map');
	vemap.SetDashboardSize(VEDashboardSize.Tiny);
    vemap.onLoadMap = EventMapLoad;
	
	if (ar.la1!='') {
		// on a des boundaries on va jouer avec
		var p1 = new VELatLong(parseFloat(ar.la1),parseFloat(ar.lo1));
		var p2 = new VELatLong(parseFloat(ar.la2),parseFloat(ar.lo2));
		var points = new Array(p1,p2);
	    vemap.LoadMap(p1, 4, VEMapStyle.Road);		
		vemap.SetMapView(points);
	}
	else {
		ar.lat=parseFloat(ar.lat);
		ar.lng=parseFloat(ar.lng);
		doEcr(ar.lat);
		doEcr(ar.lng);
	    vemap.LoadMap(new VELatLong(ar.lat,ar.lng), (ar.zoom?ar.zoom:14), VEMapStyle.Road);
	}
}

function dataWait(status,msg) {
	var	o = document.getElementById('infoWindow');
	if(!msg) msg='';
	if (o) o.innerHTML=msg;
	if (status==true) {
		o.style.display='block';
		o.style.visibility='visible';
		}
	else {
		o.style.display='none';
		o.style.visibility='hidden';
	}
}
function querySetGeo(query) {
	
}

function UnloadMap()
{
  if (vemap != null) vemap.Dispose();
}

function ChangeMapStyle()
{
	var s=map.GetMapStyle();
	if (s==VEMapStyle.Hybrid)
	{
		map.SetMapStyle(VEMapStyle.Road);
	}
	else
	{
		map.SetMapStyle(VEMapStyle.Aerial);
	}
}