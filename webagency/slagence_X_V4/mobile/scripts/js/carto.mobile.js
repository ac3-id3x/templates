// VARS AJAX REQUEST
var urlpreliste='/$$REP:0$$';
var urlDetail = '/detail,$$PAGE:WAG_STYLE_DETAIL$$.htm';
var querypreliste='$$REP:QRY removeqry kw removeqry gclid removeqry immobw_ann_qrypg removeqry ci removeqry cp removeqry div removeqry sdiv removeqry sdiv1 removeqry sdiv2 escape$$';
var langue = '$$LANGUE$$';
var annSingulier = '$$LG:ANNONCE lcase$$';
var annPluriel = '$$LG:ANNONCES lcase$$';
var zoomerSurAnn = '$$LG:ZOOMER pcase$$';
var cetteAnnonce = '$$LG:CETTEANNONCE lcase$$';
var cesAnnonces = '$$LG:CESANNONCES lcase$$';
var linkPlusDetails = '$$LG:PLUSDETAILS pcase$$';
var colorPin = '$$PAGE:PIN_COULEUR_BMAP$$';
var voirListe = '$$LG:VOIRLISTEANN pcase$$';
var more = '$$LG:SAVOIR pcase$$';
$(document).delegate("#carto","pageshow", function (event) {
	// ORIENTATION
	var heightMax = $(window).height();
	var widthMax = $(window).width();
	$('#myLoading').height(heightMax);
	$('#myTextLoading').height(heightMax);
	$('#myTextLoading').css('line-height',heightMax+'px');
	$('#myTextError').css('line-height',heightMax+'px');
	$$E:IMMOBW:CARTO-ANNONCES-INIT:ALIAS:CARTO$$
	// PIN ANNONCES
	GetMap('$$CARTO:LATITUDEMIN replace , .$$','$$CARTO:LONGITUDEMIN  replace , .$$','$$CARTO:LATITUDEMAX  replace , .$$','$$CARTO:LONGITUDEMAX  replace , .$$',heightMax,widthMax);
	// GPS PERSO
	//geoLoc();
	window.onorientationchange = mapResize;
});