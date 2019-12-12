
/** classe Visionneuse d'images
 * @version		20100804-2
 * @since 		20100716
 * @author 		frabad
 */

function Visionneuse() {

	var imageNum = 0;
	var indicateurImg;
	var collection = document.getElementById("Galerie");
	var imagesCache = [];
	initImagesCache();
	var visionneuse = creaVisionneuse();
	var afficheur = creaAfficheur();
	var navigateur = creaNavigateur();
	
	init();
	
	/** initialisation de la classe */
	function init(){
		collection.style.display = "none";
		
		/* alimentation de la visionneuse */
        visionneuse.appendChild(afficheur);
        visionneuse.appendChild(navigateur);
        
		/* remplacement de la collection par la visionneuse dans le DOM */
		collection.parentNode.replaceChild(visionneuse, collection);
		
		/* chargement et affichage de la première image */
		actionAffiche(imageNum);
	};
	
	/** mise en cache des images */
	function initImagesCache(){
		var img = new Image;
		var imgY,imgX;
		var imgs = collection.getElementsByTagName("img");
		
		for (var i = 0; i < imgs.length; i++) {
			img = imgs[i].src;
			img.onload = function(){
				/** dimensionneur d'images */
				/* BUG! jamais atteint ?*/
				imgY = this.height;
				imgX = this.width;
				alert(this.height);
				return true;
			};
			img.height = imgY;
			img.width = imgX;
			imagesCache.push(img);
		}
	}
	
    /** création de la visionneuse */
	function creaVisionneuse(){        
        return creaElement(document.body,"div","visionneuse");
    }
	
	
    /** création de l'afficheur */
	function creaAfficheur(){
		var avPlanImg, arPlanImg, i;
		
		/* image de l'afficheur */
		avPlanImg = document.createElement("img");
		arPlanImg = document.createElement("img");
		
		/* assignation des évènements */
		avPlanImg.onmouseover = function(){
        	this.style.cursor = "pointer";
        };
		avPlanImg.onclick = actionSuiv;
		
		/* assemblage de l'afficheur */
		afficheur = creaElement(document.body, "div", "afficheur");
		afficheur.height = imagesCache[imageNum].height; // réglage de la hauteur
		if (!afficheur.height) afficheur.style.height = "216px"; // débug
		
		afficheur.appendChild(arPlanImg);
		afficheur.appendChild(avPlanImg);
		
    	afficheur.style.position = "relative";
        for (i = 0; i < afficheur.childNodes.length; i++){
        	afficheur.childNodes[i].style.position = "absolute";
        	afficheur.childNodes[i].style.left = "0";
        	afficheur.childNodes[i].style.top = "0";
        }

		return afficheur;
    }
	
    /** création des contrôles de navigation  */
	function creaNavigateur(){
        var boutonPrec;
        var boutonSuiv;

		/* navigateur */
        if (!document.getElementById("navigateur")){
        	creaElement(document.body, "div", "navigateur");
        }        
        navigateur = document.getElementById("navigateur");
        
        /* bouton précédent */
        if (!document.getElementById("boutonPrec")){
        	boutonPrec = creaElement(document.body, "span", "boutonPrec");
            boutonPrec.appendChild(document.createTextNode("<"));
            navigateur.appendChild(boutonPrec);
        }
        boutonPrec = document.getElementById("boutonPrec");

        /* bouton suivant */
        if (!document.getElementById("boutonSuiv")){
	        boutonSuiv = creaElement(document.body, "span", "boutonSuiv");
	        boutonSuiv.appendChild(document.createTextNode(">"));
	        navigateur.appendChild(boutonSuiv);
        }
        boutonSuiv = document.getElementById("boutonSuiv");

        /* indicateur / compteur d'images */
        if (!document.getElementById("indicateurImg")){
        	indicateurImg = creaElement(document.body, "span", "indicateurImg");
        	indicateurImg.appendChild(document.createTextNode(""));
            navigateur.appendChild(indicateurImg);
        }
        indicateurImg = document.getElementById("indicateurImg");

		/* assignation des évènements */
        boutonPrec.onclick = actionPrec;
        boutonPrec.onmouseover = function(){
        	this.style.cursor = "pointer";
        };
        boutonSuiv.onclick = actionSuiv;
        boutonSuiv.onmouseover = function(){
        	this.style.cursor = "pointer";
        };

        return navigateur;
    }

	/** création d'élément identifié dans le DOM
	 * 
	 * @param parent: élément parent dans lequel sera créé l'élément
	 * @param nom: nom de l'élément créé
	 * @param id: identifiant de l'élément créé
	 * @return élément créé
	 */
	function creaElement(parent,nom,identifiant){
		var element = document.createElement(nom);
		element.setAttribute("id",identifiant);
		parent.appendChild(element);
		
		return document.getElementById(identifiant);
	}
	
	/** affichage de chaque image dans la visionneuse
	 * @param imageNum: numéro de l'élément à afficher
	 */
	function actionAffiche(imageNum){
		var i, avPlan, arPlan;
		var opacite   = 1;
		var increment = 0.05;
		
		if (!afficheur) {
			afficheur = document.getElementById("afficheur");
		}
		
		/* réglage des styles initiaux des images */
		for ( i = 0; i < afficheur.getElementsByTagName("img").length; i++ ){
			
			//opacité maximale des images d'avant-plan et d'arrière-plan
			afficheur.getElementsByTagName("img")[i].style.opacity = 1;
			afficheur.getElementsByTagName("img")[i].style.filter = "alpha(opacity=100)"; // IE
			
			// réglage de la priorité d'affichage (z-index)
			afficheur.getElementsByTagName("img")[i].style.zIndex = i;		
		}
		
		/* initialisation des images d'avant-plan et arrière-plan */
		arPlan = afficheur.getElementsByTagName("img")[0];
		avPlan = afficheur.getElementsByTagName("img")[1];

		/* copie de l'arrière-plan dans l'avant-plan */
		avPlan.src = arPlan.src;

		/* réglage initial de l'avant-plan */
		if (avPlan.getAttribute("src") === ""){
			avPlan.src = imagesCache[imageNum];
		}

		/* remplacement de l'arrière-plan par la nouvelle image */
		arPlan.src = imagesCache[imageNum];
		
		/* mise à jour de l'indicateur */
		indicateurImg.innerHTML = "Photo " + (parseInt(imageNum) + 1) + " / " + imagesCache.length;

		/* dissolution de l'avant-plan par réduction progressive d'opacité */
    	new changeOpacite();    	
    	function changeOpacite() {
    		opacite = opacite - increment;
    		avPlan.style.opacity = opacite;
    		avPlan.style.filter = "alpha(opacity=" + (opacite * 100) + ")"; // IE
		    if ( opacite > 0 ) {
		    	// récursion
		    	window.setTimeout(changeOpacite, 20);
			}
    	};
	}

	/** chargement de l'image précédente */
	function actionPrec(e) {
	    if(imageNum > 0){
		    imageNum = imageNum - 1;
	    }
	    else {
            imageNum = imagesCache.length - 1; // départ depuis la fin de l'index
	    }
	    actionAffiche(imageNum);
    }

	/** chargement de l'image suivante */
	function actionSuiv(e){
	    if(imageNum < imagesCache.length - 1){
		    imageNum = imageNum + 1;
	    }
	    else {
		  imageNum = 0; // retour au début de l'index
	    }
	    actionAffiche(imageNum);
	}
    
}
