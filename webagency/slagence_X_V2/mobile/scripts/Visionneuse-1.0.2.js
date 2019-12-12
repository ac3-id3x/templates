
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
		
		/* chargement et affichage de la premi�re image */
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
	
    /** cr�ation de la visionneuse */
	function creaVisionneuse(){        
        return creaElement(document.body,"div","visionneuse");
    }
	
	
    /** cr�ation de l'afficheur */
	function creaAfficheur(){
		var avPlanImg, arPlanImg, i;
		
		/* image de l'afficheur */
		avPlanImg = document.createElement("img");
		arPlanImg = document.createElement("img");
		
		/* assignation des �v�nements */
		avPlanImg.onmouseover = function(){
        	this.style.cursor = "pointer";
        };
		avPlanImg.onclick = actionSuiv;
		
		/* assemblage de l'afficheur */
		afficheur = creaElement(document.body, "div", "afficheur");
		afficheur.height = imagesCache[imageNum].height; // r�glage de la hauteur
		if (!afficheur.height) afficheur.style.height = "216px"; // d�bug
		
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
	
    /** cr�ation des contr�les de navigation  */
	function creaNavigateur(){
        var boutonPrec;
        var boutonSuiv;

		/* navigateur */
        if (!document.getElementById("navigateur")){
        	creaElement(document.body, "div", "navigateur");
        }        
        navigateur = document.getElementById("navigateur");
        
        /* bouton pr�c�dent */
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

		/* assignation des �v�nements */
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

	/** cr�ation d'�l�ment identifi� dans le DOM
	 * 
	 * @param parent: �l�ment parent dans lequel sera cr�� l'�l�ment
	 * @param nom: nom de l'�l�ment cr��
	 * @param id: identifiant de l'�l�ment cr��
	 * @return �l�ment cr��
	 */
	function creaElement(parent,nom,identifiant){
		var element = document.createElement(nom);
		element.setAttribute("id",identifiant);
		parent.appendChild(element);
		
		return document.getElementById(identifiant);
	}
	
	/** affichage de chaque image dans la visionneuse
	 * @param imageNum: num�ro de l'�l�ment � afficher
	 */
	function actionAffiche(imageNum){
		var i, avPlan, arPlan;
		var opacite   = 1;
		var increment = 0.05;
		
		if (!afficheur) {
			afficheur = document.getElementById("afficheur");
		}
		
		/* r�glage des styles initiaux des images */
		for ( i = 0; i < afficheur.getElementsByTagName("img").length; i++ ){
			
			//opacit� maximale des images d'avant-plan et d'arri�re-plan
			afficheur.getElementsByTagName("img")[i].style.opacity = 1;
			afficheur.getElementsByTagName("img")[i].style.filter = "alpha(opacity=100)"; // IE
			
			// r�glage de la priorit� d'affichage (z-index)
			afficheur.getElementsByTagName("img")[i].style.zIndex = i;		
		}
		
		/* initialisation des images d'avant-plan et arri�re-plan */
		arPlan = afficheur.getElementsByTagName("img")[0];
		avPlan = afficheur.getElementsByTagName("img")[1];

		/* copie de l'arri�re-plan dans l'avant-plan */
		avPlan.src = arPlan.src;

		/* r�glage initial de l'avant-plan */
		if (avPlan.getAttribute("src") === ""){
			avPlan.src = imagesCache[imageNum];
		}

		/* remplacement de l'arri�re-plan par la nouvelle image */
		arPlan.src = imagesCache[imageNum];
		
		/* mise � jour de l'indicateur */
		indicateurImg.innerHTML = "Photo " + (parseInt(imageNum) + 1) + " / " + imagesCache.length;

		/* dissolution de l'avant-plan par r�duction progressive d'opacit� */
    	new changeOpacite();    	
    	function changeOpacite() {
    		opacite = opacite - increment;
    		avPlan.style.opacity = opacite;
    		avPlan.style.filter = "alpha(opacity=" + (opacite * 100) + ")"; // IE
		    if ( opacite > 0 ) {
		    	// r�cursion
		    	window.setTimeout(changeOpacite, 20);
			}
    	};
	}

	/** chargement de l'image pr�c�dente */
	function actionPrec(e) {
	    if(imageNum > 0){
		    imageNum = imageNum - 1;
	    }
	    else {
            imageNum = imagesCache.length - 1; // d�part depuis la fin de l'index
	    }
	    actionAffiche(imageNum);
    }

	/** chargement de l'image suivante */
	function actionSuiv(e){
	    if(imageNum < imagesCache.length - 1){
		    imageNum = imageNum + 1;
	    }
	    else {
		  imageNum = 0; // retour au d�but de l'index
	    }
	    actionAffiche(imageNum);
	}
    
}
