//By TD (Poliris - Site agence)
// Variables à configurer pour Poliris
// Variables du fichier app.json qui se trouve dans le composant Estim Form

var _confEstimId = "poliris";
var _confEstimName = "Poliris";

//Params
var _confAppName = '<%= appName %>';
var _confEnvironment = '<%= appEnvironment %>';

//var _confEstimAgencyUrlWS = "assets/json/data.json";
var _confEstimAgencyUrlWS = "<%= agencyWSUrlBase %>Values?idConfig=";
//var _confEstimUrlWS = "//ws.lacoteimmo.com/api"; // Ne supporte pas encore HTTPS. Remplacé par un json pour l'instant.
var _confEstimUrlWS = "assets/json/polycoord.json";
var _confEstimUrl = "//lacoteimmodev.poliris.net:8080";
var _confHouseUrlEstim = "<%= evaluationWSUrlBase %>ObtenirEstimationMaison";
var _confApartmentUrlEstim = "<%= evaluationWSUrlBase %>ObtenirEstimationAppartement";

//Paths
var _confEstimRessources = "resources";
var _confEstimViews = "resources/views";
var _confEstimSidebars = "resources/views/sidebars";

//Images
var _iconPushpin = "assets/img/icons/pushpin.png";