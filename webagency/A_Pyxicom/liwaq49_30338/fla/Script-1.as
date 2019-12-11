import mx.controls.*;
import mx.transitions.Tween;
import mx.transitions.easing.*;
import mx.transitions.*;
//////////////////////////
stop();
var racine:String = _url.substring(0, _url.split(".swf")[0].lastIndexOf("/")+1);
//////////////////////////
// chargement de configuration
var my_lv:LoadVars = new LoadVars();
my_lv.onLoad = function(success:Boolean):Void  {
	if (success) {
		_global.dur_fondu = this.dur_fondu_param;
		_global.int_time = this.int_img_param;
		_global.racine_xml = this.racine_xml_param;
		trace("le fichier param est utiliser");
		////////////////////////
		// chargement des images 
		photos_xml = new XML();
		photos_xml.ignoreWhite = true;
		photos_xml.onLoad = function(ok) {
			if (ok) {
				_root.mc_loading._visible = false;
				noeuds = photos_xml.firstChild.childNodes;
				_global.nbrPhotos = noeuds.length;
				premierePhoto = this.firstChild.firstChild;
				dernierePhoto = this.firstChild.lastChild;
				enCours = premierePhoto;
				trace("nombre de photos: "+nbrPhotos);
				aff_func("m1", premierePhoto.attributes.fichier);
				time_ligne();
				////////
			}
		};
		photos_xml.load(racine+racine_xml);
		//trace(racine+racine_xml);
		/////////////////////////////////
	} else {
		_global.dur_fondu = 3;
		_global.int_time = 3;
		_global.racine_xml = "photos.xml";
		trace("le fichier param n'est pas utiliser");
		////////////////////////
		// chargement des images 
		photos_xml = new XML();
		photos_xml.ignoreWhite = true;
		photos_xml.onLoad = function(ok) {
			if (ok) {
				_root.mc_loading._visible = false;
				noeuds = photos_xml.firstChild.childNodes;
				_global.nbrPhotos = noeuds.length;
				premierePhoto = this.firstChild.firstChild;
				dernierePhoto = this.firstChild.lastChild;
				enCours = premierePhoto;
				trace("nombre de photos: "+nbrPhotos);
				aff_func("m1", premierePhoto.attributes.fichier);
				time_ligne();
				////////
			}
		};
		photos_xml.load(racine+racine_xml);
		/////////////////////////////////
	}
};
my_lv.load(racine+"params.txt");
//////
///////////////////////////////////////////////////
aff_func = function (name_mc:String, img:String) {
	var image:MovieClip = this.createEmptyMovieClip(name_mc, this.getNextHighestDepth());
	loadMovie(img, name_mc);
	////////////
	TransitionManager.start(image, {type:Fade, direction:Transition.IN, duration:dur_fondu, easing:None.easeNone});
	trace(name_mc);
};
/////////////////////////////////
//-------------------------------------------------------
///// time ligne (l'annimation) 
time_ligne = function () {
	trace("passage time ligne");
	var photo:XMLNode = premierePhoto;
	photo = photo.nextSibling;
	var min_compt:Number = 0;
	var i:Number = 2;
	function incrementInterval():Void {
		var counter:Number = min_compt;
		//---marker    
		if (counter == int_time) {
			//cree le clip     
			if (i<=nbrPhotos) {
				var m:String = "m"+i;
				if (i == 3) {
					removeMovieClip("m1");
					trace("del m1");
				}
				if (i == 4) {
					var last_img:String = "m"+nbrPhotos;
					removeMovieClip(last_img);
					trace("del "+last_img);
				}
				aff_func(m, photo.attributes.fichier);
				photo = photo.nextSibling;
				i++;
				//	 ************
			} else {
				photo = premierePhoto;
				i = 2;
				aff_func("m1", premierePhoto.attributes.fichier);
				/////
				/////
				photo = photo.nextSibling;
				for (g=2; g<=nbrPhotos-1; g++) {
					var s:String = "m"+g;
					removeMovieClip(s);
					trace("mc del: "+s);
					//	 ************
				}
			}
			counter = -1;
		}
		/**/ 
		min_compt = Number(counter)+1;
	}
	// le pas
	var intervalID:Number = setInterval(incrementInterval, 2 * 1000);
};
/////////////////////////////////
