//By SLB (DataImmo)
// Variables à configurer pour SL
// Variables du fichier app.json qui se trouve dans le composant Estim Form

var _confEstimId = "sl";
var _confEstimName = "SeLoger";

var _confEstimUrl = "http://lacoteimmodev.poliris.net:8080"; // (Integ LCI); {"http://lacoteimmodev.poliris.net" (Re7 LCI) || "http://www.lacoteimmo.com" (Prod LCI)}
var _confEstimUrlWS = "http://lacoteimmodev.poliris.net:82/api"; // (Integ LCI); {"http://lacoteimmodev.poliris.net:81/api" (Re7 LCI) || "http://ws.lacoteimmo.com/api" (Prod LCI)}
var _confHouseUrlEstim = "https://evaluationNEW-svcdev.pericles.fr/api/estimation/lci/ObtenirEstimationMaison"; // (LCI: Integ, Re7); {"https://evaluation-svc-new.pericles.fr/api/estimation/lci/ObtenirEstimationMaison" (Prod LCI)}
var _confApartmentUrlEstim = "https://evaluationNEW-svcdev.pericles.fr/api/estimation/lci/ObtenirEstimationAppartement"; // (LCI: Integ, Re7); {"https://evaluation-svc-new.pericles.fr/api/estimation/lci/ObtenirEstimationAppartement" (Prod LCI)}

//Paths
var _confEstimRessources = "/z/produits/sl/sv6_annonces/vendors_import/estimationForm";
var _confEstimViews = "/z/produits/sl/sv6_annonces/vendors_import/estimationForm/views";
var _confEstimSidebars = "/z/produits/sl/sv6_annonces/vendors_import/estimationForm/views/sidebars";

//Images
var _iconPushpin = '/z/produits/sl/assets/images/sl/vendors_import/estimationForm/icons/pushpin.png';