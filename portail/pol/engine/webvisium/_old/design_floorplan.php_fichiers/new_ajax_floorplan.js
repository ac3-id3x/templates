/*
 * Les variables commencant par gb_ : variables globales design_floorplan.php
 */
function print_r(obj) {
    var message = "Obj {\n";
    for(i in obj) {
        message += "    "+i+" : "+obj[i]+"\n";
    }
    message += "}";
    alert(message);
}

function choosePlan(plan, largeur, hauteur, ext, typeP, largOrigine) {
    if(!gb_lock) {
        hideElement('conteneur1', 0);
        hideElement('conteneur2', 0);
        var x             = 250 + ((gb_maxLargeurPlan-200) / 2)
        gb_idPlan         = plan;
        gb_idImage        = '';
        gb_typePlan       = typeP;
        gb_extension      = ext;
        gb_largeurPlan    = largeur;
        gb_hauteurPlan    = hauteur;
        gb_largeurOrigine = largOrigine;
        document.getElementById('ajax_wait').style.left = x+'px';

        showElement('ajax_wait', 'inline');
        highlightPlan(plan);
        hideElement('conteneur1', 0);
        hideElement('conteneur2', 0);

        highlightImage('');
        initImages();
    }
    return false;
}

function actualizePlan(t) {
    showElement('conteneur2', 'block');
    showElement('nomap_plan', 'block');
    hideElement('ajax_wait', 1000);
    setTimeout('gb_lock = false;', 1500);
}


function initImages() {
    if(!gb_lock) {
        gb_lock = true;
        hideElement('images_free', 0);
        showElement('ajax_wait', 'inline');
        var params = 'page=recup_images&Id_visite='+gb_idVisite+'&Id_plan='+gb_idPlan+'&Id_langue='+gb_idLangue;
        new Ajax.Request('http://webvisium.selogerpro.com/partners/new/ajax_plan_map.php', {
            asynchronous: true,
            method: 'post',
            postBody: params,
            onSuccess: initImagesSuccess
        });
    }
}

function initImagesSuccess(t) {
    var xml = t.responseXML;
    var imagesFree = 0;

    if(gb_typePlan == 1) {
        /* MAJ de l'image du plan, redimensionnement & centrage */
        var marginX = Math.floor((gb_maxLargeurPlan - gb_largeurPlan)/2);
        var marginY = Math.floor(( gb_maxHauteurPlan - gb_hauteurPlan)/2);
        document.getElementById('iframe_plan').style.margin = marginY+'px '+marginX+'px';
        document.getElementById('iframe_plan').style.height = gb_hauteurPlan+'px';
        document.getElementById('iframe_plan').style.width  = gb_largeurPlan+'px';

        var URL = gb_urlPlan.replace(/#PLAN#/, gb_idPlan);
        URL = URL.replace(/#EXT#/, gb_extension);
        URL = URL.replace(/#MAX_WIDTH#/, gb_largeurPlan)+'&rand='+Math.round(10000*Math.random());
        document.getElementById('iframe_plan').src = URL;
        hideElement('hotspots', 0);
    }

    /* MAJ des styles images & appels fonctions */
    gb_tempImg = '';

    var tabImages = new Array();
    try {
        var tabTempo  = xml.getElementsByTagName('image');

        for(var i=0; i<tabTempo.length; i++) {
            tabImages[tabImages.length] = {
                id: tabTempo[i].getAttribute('id'),
                in_plan: tabTempo[i].getAttribute('in_plan')
            }
        }
    } catch(ex) {
        // Bug FF & integration SL  -> Parsage du XML alamano
        var tabRows = t.responseText.split("\n");
        for(var i=0; i<tabRows.length; i++) {
            if(tabRows[i].match(/<image/)) {
                var res = tabRows[i].replace(/^.*<image id="([0-9A-Z\-]{36})" in_plan="(-1|1|0)".*$/, '$1#$2');
                var tempo = res.split('#');
                tabImages[tabImages.length] = {
                    id: tempo[0],
                    in_plan: tempo[1]
                }
            }
        }
    }

    for(var i=0; i<tabImages.length; i++) {
        var currentID = tabImages[i].id;

        if(tabImages[i].in_plan == 1) {
            // Image du plan
            setOpacity('img-'+currentID, 85);
            setOpacity('supp-'+currentID, 85);
            showElement('supp-'+currentID, 'inline');

            document.getElementById('boite-'+currentID).classOrigin = 'boite_image_plan';
            document.getElementById('boite-'+currentID).className = 'boite_image_plan';
            document.getElementById('supp-'+currentID).onclick = function() { return deleteLink(this); };
            document.getElementById('img-'+currentID).onclick  = function() { displayThumb(this); };
            if(gb_tempImg.length == 0) gb_tempImg += currentID;
            else gb_tempImg += '#'+currentID;
        } else if(tabImages[i].in_plan == -1) {
            // Image d'autre plan
            setOpacity('img-'+currentID, 15);
            setOpacity('supp-'+currentID, 15);
            showElement('supp-'+currentID, 'inline');

            document.getElementById('boite-'+currentID).classOrigin = 'boite_image_other';
            document.getElementById('boite-'+currentID).className = 'boite_image_other';
            document.getElementById('supp-'+currentID).onclick = function() { return deleteLink(this); };
            document.getElementById('img-'+currentID).onclick  = function() { gb_idImage = ''; };
        } else {
            imagesFree++;
            setOpacity('img-'+currentID, 100);
            setOpacity('supp-'+currentID, 100);
            hideElement('supp-'+currentID, 0);

            document.getElementById('boite-'+currentID).classOrigin = 'boite_image';
            document.getElementById('boite-'+currentID).className = 'boite_image';
            document.getElementById('supp-'+currentID).onclick = function() { };
            document.getElementById('img-'+currentID).onclick  = function() { chooseImage(this); };
        }
    }

    if(gb_typePlan == 1) {
        setTimeout('displayUpdatedPlan();', 1500);
        setTimeout('gb_lock = false;', 2000);
    } else {
        var params = 'page=refresh_plan&Id_visite='+gb_idVisite+'&Id_plan='+gb_idPlan+'&Id_langue='+gb_idLangue+'&cols='+gb_nbColsNoMapPlan+'&thumbs_w='+gb_thumbsWNoMapPlan+'&thumbs_h='+gb_thumbsHNoMapPlan;
        new Ajax.Updater('nomap_plan', 'ajax_plan_nomap.php', {asynchronous: true, method: 'post', postBody: params, onComplete: actualizePlan});
    }

    // Nb images restantes
    var span = document.getElementById('images_free');
    clearNode(span);
    if(imagesFree > 0) {
        span.appendChild(document.createTextNode(gb_nbImagesFree.replace(/#NB#/, imagesFree)));
        span.className = 'images_free';
    }else{
        span.appendChild(document.createTextNode(gb_noImagesLeft));
        span.className = 'images_notfree';
    }
    showElement('images_free', 'inline');
}

function displayUpdatedPlan() {
    hideElement('ajax_wait', 1000);
    showElement('conteneur1', 'block');
    showElement('iframe_plan', 'block');
}

function displayThumb(img) {
    var tempTab = gb_tempImg.split('#');
    for(var i=0; i<tempTab.length; i++) {
        if(img.id.substr(img.id.length-36, img.id.length) == tempTab[i]) {
            window.frames['iframe_plan'].document.getElementById( tempTab[i] ).style.display = 'block';
        }else{
            window.frames['iframe_plan'].document.getElementById( tempTab[i] ).style.display = 'none';
        }
    }
}

function chooseImage(img) {
    if(!gb_lock) {
        gb_idImage = img.id.substr(img.id.length-36, img.id.length);
        highlightImage('boite-'+gb_idImage);
        if(gb_typePlan==1){
            gb_hotSpot = 0;
        }else{
            addLink(0);
        }
    }
    return false;
}

function highlightImage(divId) {
    if(!gb_lock) {
        hideElement('hotspots', 0);
        var listeDivs = document.getElementById('images').getElementsByTagName('div');

        for(var i=0; i<listeDivs.length; i++) {
            // Si <div> boite contenant l'image..
            if(listeDivs[i].id.match(/^boite\-(.*){36}$/) && listeDivs[i].className != 'boite_image_other' && listeDivs[i].className != 'boite_image_plan') {
                if(listeDivs[i].classOrigin == null) listeDivs[i].classOrigin = listeDivs[i].className;
                if(listeDivs[i].id == divId) {
                    listeDivs[i].className = 'boite_image_selected';
                }else{
                    listeDivs[i].className = listeDivs[i].classOrigin;
                }
            }
        }
    }
    return false;
}

function highlightPlan(planID){
    for(var i=0; i<gb_tabPlans.length; i++){
        if(gb_tabPlans[i][0] == planID) {
            document.getElementById('boite-'+gb_tabPlans[i][0]).className = 'boite_image_selected';
        }else{
            document.getElementById('boite-'+gb_tabPlans[i][0]).className = 'boite_image';
        }
    }
}

function cleanPlan(plan){
    if(confirm(gb_confirmCleanPlan)){
        gb_planToClean = plan;
        var params = 'page=clean_floorplan&Id_visite='+gb_idVisite+'&Id_plan='+plan;
        new Ajax.Request('ajax_plan_map.php', {asynchronous: true, method: 'post', postBody: params, onComplete: cleanPlanSuccess});
    }
    return false;
}

function cleanPlanSuccess(t){
    var found = false;
    for(var i=0; !found && i<gb_tabPlans.length; i++){
        if(gb_tabPlans[i][0] == gb_planToClean){
            found             = true;
            gb_idPlan         = gb_tabPlans[i][0];
            gb_largeurPlan    = gb_tabPlans[i][1];
            gb_hauteurPlan    = gb_tabPlans[i][2];
            gb_extension      = gb_tabPlans[i][3];
            gb_typePlan       = gb_tabPlans[i][4];
            gb_largeurOrigine = gb_tabPlans[i][5];
        }
    }
    choosePlan(gb_idPlan, gb_largeurPlan, gb_hauteurPlan, gb_extension, gb_typePlan, gb_largeurOrigine);
}

function chooseHotSpot(coordX, coordY){
    document.getElementById('hotspots').style.display = 'none';
    if(gb_idImage.length == 36) {
        x = coordX;
        y = coordY;
        showElement('hotspots', 'block');
    }
}

function deleteLink(img){
    if(confirm(gb_confirmDeleteLink)){
        showElement('ajax_wait', 'inline');
        var params = 'page=change_link&Action=del&Id_visite='+gb_idVisite+'&Id_plan='+gb_idPlan+'&Id_image='+img.id.substr(img.id.length-36, img.id.length);
        new Ajax.Request('ajax_plan_map.php', {asynchronous: true, method: 'post', postBody: params, onSuccess: initImages});
    }
    return false;
}

function addLink(n){
    gb_hotSpot = n;
    if(gb_idImage.length == 36){
        var params = 'page=change_link&Action=add&Id_visite='+gb_idVisite+'&Id_plan='+gb_idPlan+'&Id_image='+gb_idImage+'&x='+x+'&y='+y+'&Largeur='+gb_largeurPlan+'&Hauteur='+gb_hauteurPlan+'&hotspot='+gb_hotSpot;
        new Ajax.Request('ajax_plan_map.php', {asynchronous: true, method: 'post', postBody: params, onSuccess: initImages});
        gb_idImage = '';
        highlightImage('boite-'+gb_idImage);
    }
}
