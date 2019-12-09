var gb_urlCurrDiv = '';
var gb_onceMls = false;
var gb_lock = false;

function jsTrim(str) {
    return str.replace(/(^\s+)|(\s+$)/g, '');
}

function clearNode(node) {
    while(node.hasChildNodes()) {
        node.removeChild(node.firstChild);
    }
}

function showElement(idElement, typeElement){

    if(document.getElementById(idElement) != null) {
        document.getElementById(idElement).style.display = typeElement;
    }
    return false;
}

function hideElement(idElement, delay){
    if(document.getElementById(idElement) != null) {
        if(delay > 0) {
            setTimeout("document.getElementById('"+idElement+"').style.display = 'none';", delay);
        } else {
            document.getElementById(idElement).style.display = 'none';
        }
    }
    return false;
}

function displayCenter(div, w, h){
    var posX = (gb_posX-w)/2;
    var posY = (gb_posY-h)/5*1;
    document.getElementById(div).style.left = posX+'px';
    document.getElementById(div).style.top  = posY+'px';
}

function affichprix(val,virgule,thousand,dec){
    val = val.toString();
    place_virgule = val.indexOf(virgule);
    if(place_virgule>-1){
        valeur_dec = val.substr(place_virgule,3);
        valeur = Math.round(suppr_espace(val.substr(0,place_virgule)));
    }else{
        valeur = Math.round(suppr_espace(val));
        valeur_dec = "";
    }
    new_valeur = "";
    if(!isNaN(valeur) && valeur > 0){
        valeur = valeur.toString();
        if(valeur.length > 3){
            for(i = valeur.length-3; i>0; i = i-3){
                valeur = valeur.substr(0,i)+thousand+valeur.substr(i);
            }
        }
        if(dec && valeur_dec.length<3){
            valeur_dec = valeur_dec.substr(1,2)+"00";
            valeur_dec = virgule+valeur_dec.substr(0,2);
        }
        return valeur+valeur_dec;
    }else{
        return val.substr(0,val.length-1);
    }
    return "";
}

function suppr_espace(old_str){
    return old_str.replace(/ |,/g, '');
}

/***************/
/**** Login ****/
/***************/
function getMail() {
    var mail = document.getElementById('email').value;
    if(mail.match(/^[a-z0-9_\-]+(\.[_a-z0-9\-]+)*@([_a-z0-9\-]+\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel)$/)) {
        var params = 'todo=get_mail&mail='+mail;
        showElement('ajax_wait', 'inline');
        new Ajax.Request('ajax.php', {asynchronous: true, method: 'post', postBody: params, onSuccess: getMailSuccess} );
    }
    return false;
}

function getMailSuccess(t) {
    hideElement('ajax_wait', 0);

    var node = document.getElementById('send_result');
    var mess = '';
    clearNode(node);

    if(t.responseText == 'true'){
        hideElement('ajax_wait', 0);
        mess = mailSendOK;
        hideElement('lost_password', 1500);
    }else{
        mess = mailSendKO.replace(/#MAIL#/, document.getElementById('email').value);
    }
    node.appendChild(document.createTextNode(mess));
}


/***************************************/
/****  Formulaire recherche visites ****/
/***************************************/
function setTri(idTri){
    for(var i=1; i<=7; i++){
        var imgTri = document.getElementById('img_tri_'+i);
        if(imgTri != null) {
            if(i == idTri){
                if(imgTri.src.match(/arrow_asc/)){
                    imgTri.src = 'images/arrow_desc.gif';
                    gb_tri = i;
                }else{
                    imgTri.src = 'images/arrow_asc.gif';
                    gb_tri = -i;
                }
                imgTri.style.display = 'inline';
            }else{
                imgTri.style.display = 'none';
            }
        }
    }
    gb_currentPage = 1;
    return getListTours();
}

function getListTours(){
    if(gb_currentMode=='normal') {
        var ref   = document.getElementById('fs_ref').value;
        var city  = document.getElementById('fs_city').value;
        var price = document.getElementById('fs_price').value;
        var zip   = document.getElementById('fs_zip').value;
        var divToUpdate = 'div_list_tour';
    } else {
        var divToUpdate = 'div_list_tour_bundle';
    }
    var nbResPage = gb_resPage;
    var zoneRes   = document.getElementById(divToUpdate);

    if(gb_fullList){
        if(gb_currentMode=='normal') {
            ref   = document.getElementById('fs_ref').value   = '';
            city  = document.getElementById('fs_city').value  = '';
            price = document.getElementById('fs_price').value = '';
            zip   = document.getElementById('fs_zip').value   = '';
            if(document.getElementById('fs_mls')!=null) {
                document.getElementById('fs_mls').value = '';
            }
        }
        gb_currentPage = 1;
        nbResPage = -1;
    }else{
        if(gb_changement){
            gb_currentPage = 1;
        }
        hideElement('div_url_tour', 0);
    }

    var params = 'todo=list_tour&tri='+gb_tri+'&num_page='+gb_currentPage+'&res_page='+nbResPage+'&mode='+gb_currentMode;
    if(gb_currentMode=='normal') {
        params += '&ref='+ref+'&city='+city+'&price='+price+'&zip='+zip;
    }
    if(document.getElementById('fs_mls')!=null) {
        params += '&mls='+document.getElementById('fs_mls').value
    }

    showElement('ajax_wait', 'inline');
    clearNode(zoneRes);

    new Ajax.Updater(divToUpdate, 'ajax.php', {
        asynchronous: true,
        evalScripts: false,
        postBody: params,
        onSuccess: getListToursSuccess,
        onFailure: getListToursError}
    );
    gb_changement = false;

    return false;
}

function switchMode(link) {
    var textLink  = '';
    var linkNode  = document.getElementById('switch_mode');
    clearNode(linkNode);
    if(gb_fullList){
        textLink  = gb_messDisplayPage;
        linkNode.onclick = function (){
            gb_fullList = false;
            switchMode(this);
            return getListTours();
        }
    }else{
        textLink = gb_messDisplayAll;
        linkNode.onclick = function (){
            gb_fullList = true;
            switchMode(this);
            return getListTours();
        }
    }
    linkNode.appendChild(document.createTextNode(textLink));
}

function getListToursError(){
    hideElement('ajax_wait', 500);
}

function getListToursSuccess(t){
    var comm = t.responseText.match(/<!--[0-9]*-->/);
    var nbTours = parseInt(comm[0].replace(/[^0-9]*/g, ''));

    var span = document.getElementById('nb_tours');
    if(span != null) {
        clearNode(span);
        span.appendChild(document.createTextNode(nbTours));
    }


    if(nbTours%gb_resPage == 0) gb_maxPage = nbTours/gb_resPage;
    else gb_maxPage = Math.floor(nbTours/gb_resPage) + 1;

    hideElement('ajax_wait', 500);

    clearNode(document.getElementById('p_navigation_top'));
    clearNode(document.getElementById('p_navigation_bottom'));

    if(gb_maxPage > 1) {
        if(nbTours > 0 && !gb_fullList) {
            updateLinkNav('p_navigation_top', '-');
            updateLinkNav('p_navigation_bottom', '-');
        }
    }
}

function highlightRowTour(tr, originalClassName) {
    tr.originalClass = originalClassName;
    tr.className = 'highlight';
    if(tr.style.cursor != null) {
        tr.style.cursor = 'pointer';
    }
}

function updateLinkNav(container, separator){
    var p = document.getElementById(container);
    var limit = gb_limitLinks;
    var a = null;
    var img = null;
    var deja = false;

    if(gb_currentPage > 1){
        img = document.createElement('img');
        img.src = 'images/arrow_first.gif';
        img.title = gb_labelFirst;
        a = document.createElement('a');
        a.num_page = 1;
        a.setAttribute('href', 'list_tour.php?page='+a.num_page);
        a.onclick = function () {
            gb_currentPage = this.num_page;
            return getListTours();
        }
        a.appendChild(img);
        p.appendChild(a);
        p.appendChild(document.createTextNode(' '));

        img = document.createElement('img');
        img.src = 'images/arrow_prev.gif';
        img.title = gb_labelPrev;
        a = document.createElement('a');
        a.num_page = gb_currentPage-1;
        a.setAttribute('href', 'list_tour.php?page='+a.num_page);
        a.onclick = function () {
            gb_currentPage = this.num_page;
            return getListTours();
        }
        a.appendChild(img);
        p.appendChild(a);
        p.appendChild(document.createTextNode(' '));
    }

    for(var i=gb_currentPage-limit; limit-- >0; i++){
        if(i >= 1) {
            a = document.createElement('a');
            a.num_page = i;
            a.setAttribute('href', 'list_tour.php?page='+a.num_page);
            a.onclick = function () {
                gb_currentPage = this.num_page;
                return getListTours();
            }
            if(!deja) {
                a.appendChild(document.createTextNode(i));
            }else{
                a.appendChild(document.createTextNode(' '+separator+' '+i));
            }
            p.appendChild(a);
            deja = true;
        }
    }

    if(!deja) {
        p.appendChild(document.createTextNode(gb_currentPage));
    }else{
        p.appendChild(document.createTextNode(' '+separator+' '+gb_currentPage));
    }
    deja = true;

    limit = gb_limitLinks;
    for(var i=gb_currentPage+1; i<= gb_maxPage && limit-- > 0; i++){
        a = document.createElement('a');
        a.num_page = i;
        a.setAttribute('href', 'list_tour.php?page='+a.num_page);
        a.onclick = function () {
            gb_currentPage = this.num_page;
            return getListTours();
        }
        a.appendChild(document.createTextNode(' '+separator+' '+i));
        p.appendChild(a);
        deja = true;
    }


    if(gb_currentPage < gb_maxPage){
        img = document.createElement('img');
        img.src = 'images/arrow_next.gif';
        img.title = gb_labelNext;
        a = document.createElement('a');
        a.num_page = gb_currentPage+1;
        a.setAttribute('href', 'list_tour.php?page='+a.num_page);
        a.onclick = function () {
            gb_currentPage = this.num_page;
            return getListTours();
        }
        a.appendChild(img);
        p.appendChild(document.createTextNode(' '));
        p.appendChild(a);
        deja = true;

        img = document.createElement('img');
        img.src = 'images/arrow_last.gif';
        img.title = gb_labelLast;
        a = document.createElement('a');
        a.num_page = gb_maxPage;
        a.setAttribute('href', 'list_tour.php?page='+a.num_page);
        a.onclick = function () {
            gb_currentPage = this.num_page;
            return getListTours();
        }
        a.appendChild(img);
        p.appendChild(document.createTextNode(' '));
        p.appendChild(a);
        deja = true;
    }
}
/**** Fin *****/



/********************************/
/****   Suppression visite   ****/
/********************************/
function deleteTour(idTour) {
    if(confirm(gb_messConfirmDelete)) {
        var params = 'todo=delete_tour&tour='+idTour;
        new Ajax.Request('ajax.php', {asynchronous: true, method: 'post', postBody: params, onSuccess: deleteTourSuccess} );
    }
    return false;
}

function deleteTourBundle(idTour) {
    if(confirm(gb_messConfirmDelete)) {
        var params = 'todo=delete_tour&tour='+idTour;
        new Ajax.Request('ajax.php', {asynchronous: true, method: 'post', postBody: params, onSuccess: deleteTourBundleSuccess} );
    }
    return false;
}

function deleteTourSuccess(t) {
    if(t.responseText=='true'){
        if(!gb_redirect) {
            getListTours();
        }else{
            window.location.href = 'list_tour.php';
        }
    }else{
    }
}


/***************************/
/****   Apercu visite   ****/
/***************************/
function viewTour(idTour) {
    var popView = window.open(gb_urlViewer.replace(/#ID#/, idTour), 'popView', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes,width=1024,height=768');
    popView.focus();
    return false;
}

function emailTour(idTour, address){
	gb_urlCurrDiv = 'email';
    if(document.all) {
        updateSelectDisplay('', 'none');
    }

    var replaceValue = gb_urlViewer.match(/[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i) == true ? gb_urlViewer : gb_urlViewer.replace(/#ID#/, idTour);

    document.getElementById('mail_dest').value = '';
    document.getElementById('mail_dest_name').value = '';
    document.getElementById('mail_mess').value = gb_mailMessage.replace(/#URL#/, replaceValue);
    document.getElementById('mail_subject').value = gb_mailSubject.replace(/#ADDRESS#/, ': '+address);

    displayCenter('div_send_mail', 640, 300);
    showElement('div_full_black', 'block');
    showElement('div_send_mail', 'block');
    document.getElementById('mail_dest_name').focus();
    return false;
}

function closeEmail() {
    if(document.all) {
        updateSelectDisplay('', 'inline');
    }
    hideElement('div_full_black', 0);
    hideElement('div_send_mail', 0);
    return false;
}

function sendMail(){
    var toSend  = true;
    var mail    = document.getElementById('mail_dest').value;
    var name    = document.getElementById('mail_dest_name').value;
    var subject = document.getElementById('mail_subject').value;
    var message = document.getElementById('mail_mess').value;

    if(name.length==0){
        toSend = false;
        document.getElementById('mail_dest_name').className = 'input_large_warn';
    }else{
        document.getElementById('mail_dest_name').className = 'input_large';
    }

    if(!mail.match(/^[a-z0-9_\-]+(\.[_a-z0-9\-]+)*@([_a-z0-9\-]+\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel)$/)){
        toSend = false;
        document.getElementById('mail_dest').className = 'input_large_warn';
    }else{
        document.getElementById('mail_dest').className = 'input_large';
    }

    if(subject.length<2){
        toSend = false;
        document.getElementById('mail_subject').className = 'input_large_warn';
    }else{
        document.getElementById('mail_subject').className = 'input_large';
    }

    if(message.length<30){
        toSend = false;
        document.getElementById('mail_mess').className = 'text_mail_form_warn';
    }else{
        document.getElementById('mail_mess').className = 'text_mail_form';
    }

    if(toSend){
        var params  = 'todo=send_mail_tour&mail_from='+document.getElementById('mail_sender').value+'&mail_to='+mail+'&name_to='+name+'&subject='+subject+'&message='+message+'&name_from='+document.getElementById('name_sender').value;
        new Ajax.Request('ajax.php', {asynchronous: true, method: 'post', postBody: params, onSuccess: sendMailSuccess});
    }
}

function sendMailSuccess(t){
    hideElement('div_full_black', 0);
    hideElement('div_send_mail', 0);
}

function getUrlTour(idTour) {
	gb_urlCurrDiv = 'geturl';
    if(document.all) {
        updateSelectDisplay('', 'none');
    }
    showElement('type_url', 'block');

    if(typeof(gb_urlIframe)!='undefined' && typeof('gb_urlIframePlus')!='undefined') {
        if(document.getElementById('type_url') != null) {
            var list = document.getElementById('type_url').getElementsByTagName('option');
            for(var i=0; i<list.length; i++) {
                if(list[i].value.match(/iframeplus/)) {
                    list[i].value = gb_urlIframePlus.replace(/#ID#/, idTour);
                } else if(list[i].value.match(/iframe/)) {
                    list[i].value = gb_urlIframe.replace(/#ID#/, idTour);
                } else if(list[i].value.match(/index.php/)) {
                    list[i].value = gb_urlViewer.replace(/#ID#/, idTour);
                }
            }
        }
    }

    displayCenter('div_url_tour', 520, 100);
    document.getElementById('input_url_tour').value = gb_urlViewer.replace(/#ID#/, idTour);
    if(document.getElementById('input_url_tour_mls')) document.getElementById('input_url_tour_mls').value = gb_urlViewerLight.replace(/#ID#/, idTour);
    showElement('div_url_tour', 'block');
    showElement('div_full_black', 'block');
    return false;
}


function closeGetUrl(){
    hideElement('div_full_black', 0);
    hideElement('div_url_tour', 0);
    if(document.all) {
        updateSelectDisplay('', 'inline');
    }
    return false;
}

function getListMLS() {
	gb_urlCurrDiv = 'publishmls';
	if(gb_idCountry=='CA') gb_refEtat = 'ON';
	if(document.all) {
        updateSelectDisplay('', 'none');
    }

     /* Affichage block */
    displayCenter('div_publish_mls', 500, 200);
    showElement('div_publish_mls', 'block');
    showElement('div_full_black', 'block');

    var params = 'todo=get_state_list&state='+gb_refEtat+'&country='+gb_idCountry;

    new Ajax.Request('ajax.php', {
        asynchronous: true,
        method: 'post',
        postBody: params,
        onSuccess: function(t) {
            showElement('div_list_states', 'inline');
            showElement('div_list_country', 'inline');
            var liste     = $('div_list_states');
            clearNode(liste);

            if(gb_idCountry=='US') {
                var tabResult = t.responseXML.getElementsByTagName('state');
                for(var i=0; i<tabResult.length; i++) {
                    var opt      = document.createElement('option');
                    var optText  = document.createTextNode(tabResult[i].getAttribute('name'));
                    opt.value    = tabResult[i].getAttribute('ref');
                    opt.selected = parseInt(tabResult[i].getAttribute('selected'), 10) == 1 ? true : false;
                    opt.appendChild(optText);
                    liste.appendChild(opt);
                }

                liste.disabled = false;
            } else {
                liste.disabled = true;
            }
        }
    });

    params = 'todo=get_mls_list&state='+gb_refEtat+'&country='+gb_idCountry;

    new Ajax.Request('ajax.php', {
        asynchronous: true,
        method: 'post',
        postBody: params,
        onSuccess: function(t) {
            showElement('div_list_mls', 'inline');
            var tabResult = t.responseXML.getElementsByTagName('assoc');
            var liste     = $('div_list_mls');
            clearNode(liste);
            for(var i=0; i<tabResult.length; i++) {
                var opt      = document.createElement('option');
                var optText  = document.createTextNode(tabResult[i].getAttribute('name'));
                opt.value    = tabResult[i].getAttribute('ref');
                opt.appendChild(optText);
                liste.appendChild(opt);
            }
        }
    });

    getListMlsUrl();
    return false;
}

function getListMlsUrl() {
    params = 'todo=get_mls_list_url&tour='+gb_tour;
    new Ajax.Updater('mls_list_url', 'ajax.php', {
        asynchronous: true,
        method: 'post',
        postBody: params,
        onSuccess: function(t) {
            if(t.responseText.length==0) {
                hideElement('mls_list_url', 0);
                hideElement('title_mls_list_url', 0);
            } else {
                showElement('mls_list_url', 'block');
                showElement('title_mls_list_url', 'block');
            }
        }
    });
}

function validateMLS() {
    $('mls_number').value = jsTrim($F('mls_number'));

    if(/*gb_refEtat!='' && $('div_list_mls').value!='' && */$('mls_number').value!='') {

        var params = 'todo=set_mls_infos&tour='+gb_tour+'&mls_number='+$F('mls_number');
        if(!document.getElementById('mls_notfound').checked) {
            if(!document.getElementById('div_list_mls').disabled && !document.getElementById('div_list_states').disabled) {
                // selection
                params += '&state='+$F('div_list_states')+'&mls_id='+$F('div_list_mls');
            } else {
                // recherche suggest
                params += '&state='+$F('mls_state')+'&mls_id='+$F('mls_id');
            }
        }
        params += '&params_supp='+gb_paramsSupp;
        if(gb_paramsSupp.length>0) {
            var tab_params = gb_paramsSupp.split('#');
            for(var i=0; i<tab_params.length; i++) {
                params += '&'+tab_params[i]+'='+document.getElementById(tab_params[i]).value;
            }
        }

        new Ajax.Request('ajax.php', {
            asynchronous: true,
            method: 'post',
            postBody: params,
            onSuccess: function(t) {
                getListMlsUrl();
                updateListMLSURL();
                clearSuggest();
                if(t.responseText.length>0) {
                    alert(t.responseText);
                }
            }
        });

	} else {
	    alert(gb_errorMLSValidation);
	}
}

function manualMLS(chk) {
    var name = document.getElementById('mls_name');
    if(chk.checked) {
        document.getElementById('div_list_country').disabled = true;
        document.getElementById('div_list_states').disabled  = true;
        document.getElementById('div_list_mls').disabled     = true;
        name.disabled = true;
        document.getElementById('mls_number').focus();
    } else {
        name.disabled = false;
        if(name.value.length>0) {
            document.getElementById('div_list_country').disabled = true;
            document.getElementById('div_list_states').disabled  = true;
            document.getElementById('div_list_mls').disabled     = true;
        } else {
            document.getElementById('div_list_country').disabled = false;
            document.getElementById('div_list_states').disabled  = false;
            document.getElementById('div_list_mls').disabled     = false;
        }
    }
}

function detectOptionsMLS(idMLS) {
    var params = 'todo=get_mls_options&id_mls='+idMLS;
    gb_paramsSupp = '';
    gb_idMLS      = idMLS;

    new Ajax.Updater('div_publish_mls_adv_opts', 'ajax.php', {
        asynchronous: true,
        method: 'post',
        postBody: params,
        onSuccess: function(t) {
            if(t.responseText.length>0) {
                showElement('img_publish_mls_adv_opts', 'inline');
                var temp      = t.responseText.split('-->');
                gb_paramsSupp = temp[0].replace(/^<!--/, '');
            } else {
                hideElement('img_publish_mls_adv_opts', 0);
                hideElement('div_publish_mls_adv_opts', 0);
            }
        }
    });

}

function openMLSAdvOptions(ev) {
    var x = (document.all) ? ev.x + document.body.scrollLeft : ev.pageX;
    var y = (document.all) ? ev.y + document.body.scrollTop  : ev.pageY;

    x += 3;
    y += 2;

    var div = document.getElementById('div_publish_mls_adv_opts');
    div.style.left = x.toString()+'px';
    div.style.top  = y.toString()+'px';
    showElement('div_publish_mls_adv_opts', 'block');

    return false;
}

function saveUserMLSOptions() {
    var params = 'todo=set_user_mls_options&id_mls='+gb_idMLS+'&list_params='+gb_paramsSupp;
    var tabOpt = gb_paramsSupp.split('#');
    for(var i=0; i<tabOpt.length; i++) {
        params += '&'+tabOpt[i]+'='+encodeURIComponent(document.getElementById( tabOpt[i] ).value);
    }

    new Ajax.Request('ajax.php', {
        asynchronous: true,
        method: 'post',
        postBody: params,
        onComplete: function(t) {
            hideElement('div_publish_mls_adv_opts', 0);
        }
    });

    return false;

}

function updateListMLSURL() {
    var params = '&todo=update_list_mls_url&tour='+gb_tour;
    new Ajax.Request('ajax.php', {
        asynchronous: true,
        method: 'post',
        postBody: params,
        onSuccess: function(t) {
            var list = t.responseXML.getElementsByTagName('opt');
            // MAJ des listes <select>
            var optg = $('optgmls_header');
            var optgPage = $('optgmls_page_service');

            clearNode(optg);
            if(optgPage != null) {
                clearNode(optgPage);
            }

            if(list.length>0) {

                for(var i=0; i<list.length; i++) {
                    var obj    = document.createElement('option');
                    var label  = document.createTextNode(list[i].getAttribute('name'));

                    obj.value = 'http://'+gb_viewerHost+'/'+list[i].getAttribute('url')+list[i].getAttribute('number')+'.html';
                    obj.appendChild(label);
                    optg.appendChild(obj);

                    // Si page service, modif
                    if(optgPage != null) {
                        var newNode = obj.cloneNode(true);
                        optgPage.appendChild(newNode);
                    }
                }
            }
        }
    });
}

function suggestMLS(name) {
    if(name.length>0) {
        document.getElementById('div_list_states').disabled = true;
        document.getElementById('div_list_mls').disabled = true;
        document.getElementById('div_list_country').disabled = true;
//        if(!gb_lock) {
            gb_lock = true;
            var params = 'todo=suggest_mls&name='+name;
            new Ajax.Updater('mls_suggest', 'ajax.php', {
                asynchronous: true,
                method: 'post',
                postBody: params,
                onComplete: function(t) {
                    showElement('mls_suggest', 'block');
//                    gb_lock = false;
                }
            });
//        }
    } else {
        hideElement('mls_suggest', 0);
        document.getElementById('div_list_states').disabled = false;
        document.getElementById('div_list_mls').disabled = false;
        document.getElementById('div_list_country').disabled = false;
        document.getElementById('mls_id').value = '';
    }
}

function selectMLS(id, name, state) {
    document.getElementById('mls_name').value = name;
    document.getElementById('mls_id').value = id;
    document.getElementById('mls_state').value = state;
    hideElement('mls_suggest', 0);
    detectOptionsMLS(id);
}

function clearSuggest() {
    document.getElementById('mls_id').value = '';
    document.getElementById('mls_state').value = '';
    document.getElementById('mls_name').value = '';
    document.getElementById('div_list_states').disabled = false;
    document.getElementById('div_list_mls').disabled = false;
    document.getElementById('div_list_country').disabled = false;
    gb_paramsSupp = '';
    hideElement('img_publish_mls_adv_opts', 0);
    hideElement('div_publish_mls_adv_opts', 0);
}


function deleteMLSDiffusion(idDiff, idMLS, numMLS) {
    if(confirm(gb_confirmDeleteMlsDiff)) {
        var params = 'todo=delete_mls_diffusion&tour='+gb_tour+'&diffusion='+idDiff+'&id_mls='+idMLS+'&num_mls='+numMLS;

        new Ajax.Request('ajax.php', {
            asynchronous: true,
            method: 'post',
            postBody: params,
            onSuccess: function(t) {
                alert(t.responseText);
                getListMlsUrl();
                updateListMLSURL();
            }
        });

    }
    return false;
}

function closePublishMLS(){
    if(document.all) {
        updateSelectDisplay('', 'inline');
    }
    hideElement('div_full_black', 0);
    hideElement('div_publish_mls', 0);
    hideElement('div_publish_mls_adv_opts', 0)
    return false;
}

function setOpacity(id, level) {
    var obj = null;

    if(typeof(id)=='string') {
        obj = document.getElementById(id);
    } else if(typeof(id)=='object') {
        obj = id;
    }

    if(obj != null) {
        if(obj.style.opacity != null) {
            obj.style.opacity = level/100;
        } else if(obj.style.filter != null) {
            obj.style.filter = 'alpha(opacity='+level+')';
        }
    }
}

function displayHelp(page) {
	gb_urlCurrDiv = 'help';
    if(document.all) {
        updateSelectDisplay('', 'none');
    }
    displayCenter('help_window', 720, 540);
    showElement('div_full_black', 'block');
    showElement('help_window', 'block');
    new Ajax.Updater('help_window', 'help.php?page='+page, {asynchronous: true, evalScripts: false});
    return false;
}

function closeCurrentDiv(){
	switch(gb_urlCurrDiv){
		case 'help':
			closeHelp();
			break;
		case 'reprocess':
		    if(gb_levelBrightness != parseInt(document.getElementById('brightness_value').value, 10)){
		        if(confirm(gb_messChangeBrightness)) {
		            postBrightness(parseInt(document.getElementById('brightness_value').value, 10));
		        }
		    }
			closeReprocess();
			break;
		case 'email':
			closeEmail();
			break;
		case 'status_video':
			closeStatusVideo();
			break;
		case 'geturl':
			closeGetUrl();
			break;
		case 'sendmobile':
			closeSendMobile();
			break;
		case 'documents':
			closeHelpLinks();
			break;
		case 'publishmls':
			closePublishMLS();
			break;
	    case 'details':
	        closeDetails();
	        break;
	    case 'degraded':
	        closeDegraded();
	        break;
/*
	    case 'hosting_window':
	        closeHosting();
	        break;
*/
	    case 'sms_window':
	        closeSMS();
	        break;

	    case 'apercu_viewer':
	        closeApercuViewer();
	        break;
	}
	return false;
}

function closeApercuViewer() {
    if(document.all) {
        updateSelectDisplay('', 'inline');
    }
    hideElement('apercu_viewer', 0);
    hideElement('div_full_black', 0);
    getListURL();
}

function closeDetails() {
    if(document.all) {
        updateSelectDisplay('', 'inline');
    }
    hideElement('details', 0);
    hideElement('div_full_black', 0);
}

function closeHelp() {
    if(document.all) {
        updateSelectDisplay('', 'inline');
    }
    hideElement('div_full_black', 0);
    hideElement('help_window', 0);
    return false;
}

function displayHelpLinks(){
	gb_urlCurrDiv = 'documents';
    if(document.all) {
        updateSelectDisplay('', 'none');
    }
    displayCenter('help_documents', 300, 60);
    showElement('div_full_black', 'block');
    showElement('help_documents', 'block');
    return false;
}

function closeHelpLinks(){
    if(document.all) {
        updateSelectDisplay('', 'inline');
    }
    hideElement('div_full_black', 0);
    hideElement('help_documents', 0);
    return false;
}

function displayDegraded() {
	gb_urlCurrDiv = 'degraded';
    if(document.all) {
        updateSelectDisplay('', 'none');
    }
    displayCenter('degraded', 400, 100);
    showElement('div_full_black', 'block');
    showElement('degraded', 'block');
    return false;
}

function closeDegraded() {
    if(document.all) {
        updateSelectDisplay('', 'inline');
    }
    hideElement('div_full_black', 0);
    hideElement('degraded', 0);
    return false;
}
/*************************************************/
/****   Controle formulaire creation visite   ****/
/*************************************************/
function checkForm() {
    hideElement('update_bad', 0);
    var good   = true;
    var ref    = document.getElementById('f_ref');
    var zip    = document.getElementById('f_zip');
    var price  = document.getElementById('f_price');
    var devise = document.getElementById('f_currency').value;

    if(ref.value.length>1) {
        ref.className = 'input_large';
    }else{
        good = false;
        ref.className = 'input_large_warn';
    }

    if(zip.value.match(/^[0-9]{0,6}$/)) {
        zip.className = 'input_large';
    }else{
        good = false;
        zip.className = 'input_large_warn';
    }
    if(price.value.match(/^[0-9 ,.]{0,15}$/) || price.value.length == 0){
        price.className = 'input_small';
    }else{
        good = false;
        price.className = 'input_small_warn';
    }
    if(!good) {
        showElement('update_bad', 'inline');
    }else{
    	var tour    = document.getElementById('id_tour').value;
        showElement('ajax_wait', 'inline');
        var address = encodeURIComponent(document.getElementById('f_adress').value);
        var city    = encodeURIComponent(document.getElementById('f_city').value);
        var desc    = encodeURIComponent(document.getElementById('f_desc').value);
        var country = document.getElementById('f_country').value;
        var params  = 'todo=update_info&tour='+tour+'&f_ref='+ref.value+'&f_city='+city+'&f_zip='+zip.value+'&f_price='+price.value+'&f_adress='+address+'&f_desc='+desc+'&f_country='+country+'&f_currency='+devise;
        if(document.getElementById('f_state') != null) {
            params += '&f_state='+document.getElementById('f_state').value;
        }
        if(document.getElementById('f_zone') != null){
        	var zone = encodeURIComponent(document.getElementById('f_zone').value);
        	params += '&f_zone='+zone;
        }
        if(document.getElementById('f_mls')!=null){
            params += '&f_mls='+document.getElementById('f_mls').value;
        }
        new Ajax.Request('ajax.php', {asynchronous: true, method: 'post', postBody: params, onSuccess: checkFormAjaxSuccess, onFailure: checkFormAjaxError});
    }
    return false;
}

function enlargeTextArea(textObj) {
    textObj.className = 'text_large';
}

function reduceTextArea(textObj) {
    textObj.className = 'text_reduced';
}

function checkFormAjaxSuccess(t) {
    var idTour = t.responseText;
    hideElement('ajax_wait_edit', 0);

    if(idTour.match(/^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i)){
        window.location.href = 'upload_tour.php?tour='+idTour;
    }else{
        showElement('update_bad', 'inline');
    }
}

function checkFormAjaxError(t){
    hideElement('ajax_wait_edit', 0);
}

function hideSuggest(id){
    hideElement(id, 0);
    if(document.all && !gb_isOpen_f_zip && !gb_isOpen_f_city){
        updateSelectDisplay('', 'inline');
    }
}

function suggest(val, type){
    if(val.length > 0){
        gb_typeSearch = type;
        var params = 'todo=suggest&value='+val+'&type='+type;
        new Ajax.Updater('suggest_'+type, 'ajax.php', {asynchronous: true, evalScripts: false, method: 'post', postBody: params, onComplete: suggestSuccess});
    }else{
        eval("gb_isOpen_"+gb_typeSearch+" = false;");
        hideSuggest('suggest_'+gb_typeSearch);
    }
}

function suggestSuccess(t){
    if(t.responseText.length>0){
        showElement('suggest_'+gb_typeSearch, 'inline');
        eval("gb_isOpen_"+gb_typeSearch+" = true;");
        if(document.all) {
            //updateSelectDisplay('', 'none');
        }
    }else{
        eval("gb_isOpen_"+gb_typeSearch+" = false;");
        hideSuggest('suggest_'+gb_typeSearch);
    }
}
/*************************************/
/*** Formulaire upload images http ***/
/*************************************/
function uploadWait() {
    $('upload_btn').value = msgUploadWait;
    showElement('ajax_wait', 'inline');
    return true;
}




/*******************/
/*** Modif image ***/
/*******************/
function checkImageTourForm() {
    var update = false;

    checkAllStatus();

    if(gb_nbToDelete>0){
        if(confirm(gb_warnUpdateDelete)){
            update = true;
        }
    }else{
        update = true;
    }

    if(update){

        showElement('ajax_wait', 'inline');
        var params = 'todo=update_images&tour='+document.getElementById('tour').value;
        for(var i=0; i<tabImage.length; i++) {
            if(document.getElementById('img-poids-'+tabImage[i]) != null) {
                params += '&img-poids-'+tabImage[i]+'='+document.getElementById('img-poids-'+tabImage[i]).value;
                params += '&img-name-'+tabImage[i]+'='+document.getElementById('img-name-'+tabImage[i]).value;
                params += '&img-statut-'+tabImage[i]+'='+document.getElementById('img-statut-'+tabImage[i]).value;
            }
        }

        new Ajax.Request('ajax.php', {asynchronous: true, method: 'post', postBody: params, onSuccess: checkImageTourFormAjaxSuccess});
    }
    return false;
}

function checkImageTourFormAjaxSuccess(t) {
    var toRefresh = t.responseText;
    if(toRefresh == 'true'){
        refreshImages();
    }else{
        hideElement('ajax_wait', 0);
    }
    hideElement('trash', 0);
    hideElement('mess_nb_selected', 0);

    var node = document.getElementById('nb_images_left');
    var nodeText = document.createTextNode(gb_nbImagesTour.replace(/#NB#/, gb_nbImagesLeft));
    clearNode(node);
    node.appendChild(nodeText);

}

function updateImageName(ident, name){
    var params = 'todo=update_image_name&id='+ident+'&name='+encodeURIComponent(name)+'&lang='+gb_refLangue+'&tour='+gb_tour;
    showElement('ajax_wait', 'inline');
    new Ajax.Request('ajax.php', {asynchronous: true, method: 'post', postBody: params, onSuccess: updateImageNameSuccess});
}

function updateImageNameSuccess(t) {
    hideElement('ajax_wait', 500);
}


function checkToRefresh(pe) {
    if(gb_imagesToCheck.length > 0) {
        var params = 'todo=check_images&images='+gb_imagesToCheck;
        new Ajax.Request('ajax.php', {asynchronous: true, postBody: params, method: 'post', onComplete: checkToRefreshSuccess} );
    }else{
        gb_updater.stop();
    }
}

function checkToRefreshSuccess(t) {
    var listBads = t.responseText; // Liste des ID des images non encore traitees
    var listImgs = gb_imagesToCheck.split('#');
    var newListToCheck = '';
    for(var i=0; i<listImgs.length; i++){
        // Test si l'image en cours est dans la réponse Ajax
        if(document.getElementById('th-'+listImgs[i]) != null) {
            eval("var finished = listBads.match(/"+listImgs[i]+"/) ? false : true;");
            if(finished) {
                // Maj de l'image
                var newUrl = gb_urlThumbs+listImgs[i];
                document.getElementById('th-'+listImgs[i]).src = newUrl;
            }else{
                // Ajout de l'ID pour la recherche suivante
                if(newListToCheck.length==0) newListToCheck = listImgs[i];
                else newListToCheck += '#'.listImgs[i];
            }
        }
    }
    gb_imagesToCheck = newListToCheck;
    if(gb_imagesToCheck.length<36) {
        gb_updater.stop();
    }
}


function refreshImages() {
    var params = 'todo=list_images&tour='+document.getElementById('tour').value+'&thumbs_w='+gb_thumbsW+'&thumbs_h='+gb_thumbsH;
    if(gb_imagesToCheck.length > 0){
        params += '&to_check='+gb_imagesToCheck;
    }

    new Ajax.Updater('content_image_list', 'ajax.php', {asynchronous: true, evalScripts: false, method: 'post', postBody: params, onFailure: refreshImagesError, onComplete: refreshImagesSuccess});
}

function refreshImagesSuccess(t) {
//    updateServicesLink(document.getElementById('tour').value, t.responseText.length)
    hideElement('ajax_wait', 0);
    if(t.responseText.length == 0) {
        setTimeout("window.location.href = 'upload_tour.php?tour="+document.getElementById('tour').value+"';", 1000);
    }
}

function refreshImagesError(t){
//    updateServicesLink(document.getElementById('tour').value, t.responseText.length)
    hideElement('ajax_wait', 0);
}


function deleteImage(path, img){
    var statut = document.getElementById(path+'-statut-'+img);
    statut.value *= -1;
    if(statut.value==-1) {
        setOpacity('th-'+img, 25);
        document.getElementById('picto-delete-'+img).src = 'images/trash_out_10.gif';
        document.getElementById('picto-delete-'+img).setAttribute('title', gb_labelRestore);
    }else{
        setOpacity('th-'+img, 100);
        document.getElementById('picto-delete-'+img).src = 'images/trash_in_10.gif';
        document.getElementById('picto-delete-'+img).setAttribute('title', gb_labelDelete);
    }
    checkAllStatus();
    return false;
}

function checkAllStatus() {
    var listHidden = document.getElementsByTagName('input');
    gb_nbToDelete   = 0;
    gb_nbImagesLeft = 0;
    for(var i=0; i<listHidden.length; i++){
        if(listHidden[i].type == 'hidden'){
            if(listHidden[i].id.match(/^(img|plan)-statut-/)){
                if(listHidden[i].value=='-1'){
                    gb_nbToDelete++;
                }else{
                    gb_nbImagesLeft++;
                }
            }
        }
    }
    if(gb_nbToDelete>0){
        var ratio = Math.ceil(100*gb_nbToDelete/(gb_nbToDelete+gb_nbImagesLeft));
        var node = document.getElementById('mess_nb_selected');
        var nodeText = document.createTextNode(gb_nbToDelete);
        clearNode(node);
        node.appendChild(nodeText);
        if(ratio <= 20){
            document.getElementById('trash').src = 'images/trash_low_32.jpg';
        }else if(ratio <= 80){
            document.getElementById('trash').src = 'images/trash_avg_32.jpg';
        }else{
            document.getElementById('trash').src = 'images/trash_hi_32.jpg';
        }
        document.getElementById('trash').style.display = 'inline';
        document.getElementById('mess_nb_selected').style.display = 'inline';
    }else{
        document.getElementById('trash').style.display = 'none';
        document.getElementById('mess_nb_selected').style.display = 'none';
    }
}

function deleteSelectedImages() {
    return checkImageTourForm();
/*
    if(confirm(gb_messDeleteImages)){
        checkImageTourForm();
    }
    return false;
*/
}

function deleteSelectedPlans(){
    return checkPlanForm();
/*
    if(confirm(gb_messDeletePlans)){
        checkPlanForm();
    }
    return false;
*/
}

function updateOrderPlan(obj){
    var listSelect = document.getElementsByTagName('select');
    var oldPos = obj.title;
    var newPos = obj.value;
    for(var i=0; i<listSelect.length; i++){
        if(listSelect[i].id.match(/^plan-poids-.{36}$/)){
            if(listSelect[i].id != obj.id && listSelect[i].value <= newPos && listSelect[i].value > oldPos && oldPos<newPos){
            // Reculer
                listSelect[i].selectedIndex--;
            }else if(listSelect[i].id != obj.id && listSelect[i].value >= newPos && listSelect[i].value < oldPos && oldPos>newPos){
            // Remonte
                listSelect[i].selectedIndex++;
            }
        }
    }
    return checkPlanForm();
}

function updateSelectDisplay(container, newDisplay){
    if(container.length>0) {
        var listSelect = document.getElementById(container).getElementsByTagName('select');
    }else{
        var listSelect = document.getElementsByTagName('select');
    }
    for(var i=0; i<listSelect.length; i++){
        listSelect[i].style.display = newDisplay;
    }
    return false;
}

function closeImage(div){
    div.style.display = 'none';

    /* Black background
    document.getElementById("div_full_black").style.display = 'none'; */

    /* Workaround IE6 */
    if(document.all){
        updateSelectDisplay('content_image_list', 'inline');
    }
}


function showReprocessMenu(div){
    document.getElementById('infocamera').style.display = 'none';
    document.getElementById('infobrightness').style.display = 'none';
    document.getElementById('inforestitch').style.display = 'none';
    document.getElementById('infodownload').style.display = 'none';
    document.getElementById('infohotline').style.display = 'none';
    document.getElementById('inforotate').style.display = 'none';
    document.getElementById('quality_comment').value = gb_messYourMessage;
    if(document.getElementById('rotate_angle')!=null) {
        document.getElementById('rotate_angle').value = '0';
    }

    var idImage   = document.getElementById('idimg').value;
    var nameImage = encodeURI(document.getElementById('img-name-'+idImage).value);

    document.getElementById('download_link_img').href = gb_urlDownload.replace(/#TOUR#/, idImage).replace(/#NAME#/, nameImage+'.jpg');
    document.getElementById('download_link_img_hq').href = gb_urlDownloadHQ.replace(/#TOUR#/, idImage).replace(/#NAME#/, nameImage+'hq.jpg');
    resetBrightness();
    document.getElementById(div).style.display = '';
}
function viewReprocess(img, ti, w, h){
	gb_urlCurrDiv = 'reprocess';
	gb_levelBrightness = 100;
    document.getElementById('div_reprocess').style.display = 'none';
    /* Black background */
    document.getElementById("div_full_black").style.display = '';
    /* Workaround IE6 */
    if(document.all) updateSelectDisplay('content_image_list', 'none');
    document.getElementById('idimg').value = img;
    displayCenter('div_reprocess', w, h);
    showElement('div_reprocess', 'block');
    showReprocessMenu('infocamera');
    if(ti==1){
        showElement('row_reprocess', 'block');
        //hideElement('row_reprocess', 0);
    }else{
        hideElement('row_reprocess', 0);
    }
    document.getElementById('img_reprocess').src = gb_urlImages+img;
    getCameraInfo();
    return false;
}
function closeReprocess() {
    document.getElementById('div_reprocess').style.display = 'none';
    /* Black background */
    document.getElementById("div_full_black").style.display = 'none';
    /* Workaround IE6 */
    if(document.all) updateSelectDisplay('content_image_list', 'inline');
    document.getElementById('img_reprocess').src = 'images/ajax_big.gif';
    return false;
}
function getCameraInfo() {
		document.getElementById('camera_brand').innerHTML = '-';
		document.getElementById('camera_model').innerHTML = '-';
		document.getElementById('camera_size').innerHTML = '-';
		document.getElementById('camera_date').innerHTML = '-';
		document.getElementById('title_info').innerHTML = '-';
    var params = 'todo=camera_info&image='+document.getElementById('idimg').value;
    new Ajax.Request('ajax.php', {asynchronous: true, method: 'post', postBody: params, onComplete: getCameraInfoSuccess});
}
function getCameraInfoSuccess(t) {
    var infos = t.responseText.split('|');
    document.getElementById('camera_brand').innerHTML = infos[0];
    document.getElementById('camera_model').innerHTML = infos[1];
    document.getElementById('camera_size').innerHTML  = infos[2];
    document.getElementById('camera_date').innerHTML  = infos[3];
    document.getElementById('title_info').innerHTML = infos[4];
}
function postRestitch() {
    document.getElementById('img_reprocess').src = 'images/ajax_big.gif';
    var params = 'todo=restitch_image&type=hemisphere&tour='+document.getElementById('tour').value+'&image='+document.getElementById('idimg').value;
    if(gb_account!=null) params += '&account='+gb_account;
    new Ajax.Request('ajax.php', {asynchronous: true, method: 'post', postBody: params, onComplete: postRestitchSuccess});
}
function postRestitchSuccess(t) {
    if(t.responseText.match(/^OK : [0-9a-z]{8}-([0-9a-z]{4}-){3}[0-9a-z]{12}/i)){
        var img = t.responseText.replace(/^.*([0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}).*$/i, '$1');
        document.getElementById('img_reprocess').src = gb_urlImages+img+'&random='+Math.floor(Math.random()*100000);
        document.getElementById('th-'+img).src = gb_urlThumbs+document.getElementById('idimg').value+'&random='+Math.floor(Math.random()*100000);
    }else{
        document.getElementById('img_reprocess').src = 'images/warning_32.gif';
    }
}
function postPreviewBrightness(percent) {
    document.getElementById('brightness_value').value = percent;
    document.getElementById('img_reprocess').src = 'images/ajax_big.gif';
    var params = 'todo=preview_brightness_image&percent='+percent+'&tour='+document.getElementById('tour').value+'&image='+document.getElementById('idimg').value;
    new Ajax.Request('ajax.php', {asynchronous: true, method: 'post', postBody: params, onComplete: postPreviewBrightnessSuccess});
    var slider1 = new Control.Slider('handle1','track1',{ sliderValue:(percent), range:$R(50,200) });
    return false;
}
function postPreviewBrightnessSuccess(t) {
    if(t.responseText.match(/^OK : [0-9a-z]{8}-([0-9a-z]{4}-){3}[0-9a-z]{12}/i)){
        var img = t.responseText.replace(/^.*([0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}).*$/i, '$1');
        document.getElementById('img_reprocess').src = 'http://reprocess.previsite.net/getimage.php?path=thumb&id='+img+'&width=300&height=225&random='+Math.floor(Math.random()*1000);
    }else{
        document.getElementById('img_reprocess').src = 'images/warning_32.gif';
    }
}
function postBrightness(percent) {
    var idImage = document.getElementById('idimg').value;
    document.getElementById('img_reprocess').src = 'images/ajax_big.gif';
    document.getElementById('th-'+idImage).src = 'images/ajax_big.gif';
    var params = 'todo=brightness_image&percent='+percent+'&tour='+document.getElementById('tour').value+'&image='+idImage;
    new Ajax.Request('ajax.php', {asynchronous: true, method: 'post', postBody: params, onComplete: postBrightnessSuccess});
    return false;
}
function postBrightnessSuccess(t){
    if(t.responseText.match(/^OK : [0-9a-z]{8}-([0-9a-z]{4}-){3}[0-9a-z]{12}/i)){
        var img = t.responseText.replace(/^.*([0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}).*$/i, '$1');
        document.getElementById('img_reprocess').src = gb_urlImages+document.getElementById('idimg').value+'&random='+Math.floor(Math.random()*1000);
        document.getElementById('th-'+img).src = gb_urlThumbs+document.getElementById('idimg').value+'&random='+Math.floor(Math.random()*1000);
    }else{
        document.getElementById('img_reprocess').src = 'images/warning_32.gif';
    }

}

function resetBrightness() {
    document.getElementById('img_reprocess').src = gb_urlImages+document.getElementById('idimg').value;
    document.getElementById('brightness_value').value = "100";
    var slider1 = new Control.Slider('handle1','track1',{ sliderValue:(100), range:$R(50,200) });
    return false;
}
function changeOpacity(percent) {
    document.getElementById('img_mask').style.filter = 'alpha(opacity'+percent+')';
    document.getElementById('img_reprocess').style.filter = 'alpha(opacity'+percent+')';
    document.getElementById('img_reprocess').style.MozOpacity = percent / 100;
    document.getElementById('img_reprocess').style.opacity = percent / 100;
    document.getElementById('img_reprocess').style.bgColor = '#000';
}
function sendQualityReport(emailfrom, comment) {
    if(comment.length > 20) {
        document.getElementById('quality_comment').className = 'text_mini';
        var params = 'todo=report_quality&from='+ emailfrom + '&comment='+comment+'&tour='+document.getElementById('tour').value+'&image='+document.getElementById('idimg').value;
        new Ajax.Request('ajax.php', {asynchronous: false, method: 'post', postBody: params, onComplete:sendQualityReportSuccess});
    }else{
        document.getElementById('quality_comment').className = 'text_mini_warn';
    }
    return false;
}
function sendQualityReportSuccess(t) {
    alert(gb_messThankReporting);
    showReprocessMenu('infocamera');
    closeReprocess();
}

/*****************/
/*** Floorplan ***/
/*****************/
function checkPlanForm() {
    var update = false;

    checkAllStatus();

    if(gb_nbToDelete>0){
        if(confirm(gb_warnUpdateDelete)){
            update = true;
        }
    }else{
        update = true;
    }

    if(update){

        var params  = 'todo=update_plan&tour='+document.getElementById('tour').value;
        var params2 = '';

        for(var i=0; i<tabPlan.length; i++) {
            if(document.getElementById('plan-poids-'+tabPlan[i]) != null) {
                params += '&plan-poids-'+tabPlan[i]+'='+document.getElementById('plan-poids-'+tabPlan[i]).value;
                params += '&plan-desc-'+tabPlan[i]+'='+document.getElementById('plan-desc-'+tabPlan[i]).value;
                params += '&plan-statut-'+tabPlan[i]+'='+document.getElementById('plan-statut-'+tabPlan[i]).value;
                if(params2.length==0) params2 += '&liste_plan='+tabPlan[i];
                else params2 += '#'+tabPlan[i];
            }
        }
        params += params2;
        showElement('ajax_wait', 'inline');
        new Ajax.Request('ajax.php', {asynchronous: true, method: 'post', postBody: params, onComplete: refreshPlan});
    }
    return false;
}

function refreshPlan(){
    var params = 'todo=list_plan&tour='+document.getElementById('tour').value+'&thumbs_w='+gb_thumbsW+'&thumbs_h='+gb_thumbsH;
    new Ajax.Updater('content_plan_list', 'ajax.php', {asynchronous: true, evalScripts: false, method: 'post', postBody: params, onComplete: refreshPlanSuccess});
}

function refreshPlanSuccess(t){
    if(t.responseText.length == 0){
        // Plus de plans
        hideElement('table_nav', 0);
        hideElement('content_plan_list', 0);
    }
    hideElement('ajax_wait', 500);
    hideElement('trash', 0);
    hideElement('mess_nb_selected', 0);
}

function retraiteImage(img){
    if(confirm(gb_messRetraiteImage)){
        document.getElementById('th-'+img).src = 'images/ajax_big.gif';
        var params = 'todo=retraite_image&tour='+document.getElementById('tour').value+'&image='+img;
        new Ajax.Request('ajax.php', {asynchronous: true, method: 'post', postBody: params, onComplete: retraiteImageSuccess});
    }
    return false;
}

function retraiteImageSuccess(t){
    if(t.responseText.match(/^OK : [0-9a-z]{8}-([0-9a-z]{4}-){3}[0-9a-z]{12}/i)){
        var img = t.responseText.replace(/^.*([0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}).*$/i, '$1');
        document.getElementById('th-'+img).src = gb_urlThumbs+img;
    }else{
        document.getElementById('th-'+img).src = 'images/warning.gif';
    }
}

function updatePlanName(ident, name){
    var params = 'todo=update_plan_name&plan='+ident+'&name='+encodeURIComponent(name)+'&lang='+gb_refLang+'&tour='+gb_tour;
    showElement('ajax_wait', 'inline');
    new Ajax.Request('ajax.php', {asynchronous: true, method: 'post', postBody: params, onComplete: refreshPlan});
}


/* Rotate de l'image */
function addAngle(increment) {
    if(!gb_lock) {
        document.getElementById('img_reprocess').src = 'images/ajax_big.gif';
        gb_lock      = true;
        var oldAngle = parseInt(document.getElementById('rotate_angle').value);
        var newAngle = oldAngle += increment;
        document.getElementById('rotate_angle').value = newAngle.toString();
        var params = '&todo=preview_rotate_image&tour='+gb_tour+'&image='+document.getElementById('idimg').value+'&angle='+newAngle;
        new Ajax.Request('ajax.php', {
            asynchronous: true,
            method: 'post',
            postBody: params,
            onComplete: function(t) {
                if(t.responseText.match(/OK : .{36}/)) {
                    document.getElementById('img_reprocess').src = gb_urlImgReprocess+document.getElementById('idimg').value+'&rand='+Math.round(100000*Math.random());
                } else {
                    document.getElementById('img_reprocess').src = 'images/warning_32.gif';
                }
                gb_lock = false;
            }
        });
    }
    return false;
}

function postRotate() {
    if(!gb_lock) {
        document.getElementById('img_reprocess').src = 'images/ajax_big.gif';
        gb_lock      = true;
        var newAngle = parseInt(document.getElementById('rotate_angle').value);
        var idImg    = document.getElementById('idimg').value;

        document.getElementById('rotate_angle').value = newAngle.toString();

        var params = '&todo=rotate_image&tour='+gb_tour+'&image='+idImg+'&angle='+newAngle;

        new Ajax.Request('ajax.php', {
            asynchronous: true,
            method: 'post',
            postBody: params,
            onComplete: function(t) {
                if(t.responseText.match(/OK : .{36}/)) {
                    document.getElementById('img_reprocess').src = gb_urlImages+idImg+'&rand='+Math.round(100000*Math.random());
                    document.getElementById('th-'+idImg).src     = gb_urlThumbs+idImg+'&rand='+Math.round(100000*Math.random());
                } else {
                    document.getElementById('img_reprocess').src = 'images/warning_32.gif';
                }
                gb_lock = false;
            }
        });

    }
}


/************************/
/******** Video *********/
/************************/
function genereAudio() {
    if($F('desc_tour').length>0) {
        hideElement('row_mp3', 0);
        var params = 'todo=generate_voice&id='+gb_idTour+'&text='+$F('desc_tour')+'&voice='+$F('voice')+'&rand='+Math.round((Math.random()*10000000));
        gb_lastModif = '';
        showElement('ajax_wait', 'block');
        hideElement('flash_player', 0);
        new Ajax.Request('ajax_sound.php', {
            asynchronous: true,
            method: 'post',
            postBody: params,
            onSuccess: checkAudio
        });
    }
    return false;
}

function checkAudio(t) {
    var params   = 'todo=status&id='+gb_idTour;
    new Ajax.Request('ajax_sound.php', {
        asynchronous: true,
        method: 'post',
        postBody: params,
        onSuccess: function(t) {
            var reload = false;
            if(gb_lastModif=='') {
                gb_lastModif = t.responseText;
                reload = true;
            } else {
                if(gb_lastModif<t.responseText) {
                    reload = true;
                } else {
                    reload = false;
                }
            }

            if(reload) {
                setTimeout("checkAudio();", 1000);
            } else {
                hideElement('ajax_wait', 1000);
                setTimeout("switchButton('play');", 1500);
                if($('link_mk3') != null) {
                    showElement('row_mp3', 'inline');
                    var newURL = gb_urlMP3.replace(/#ID#/, gb_idTour)+'&taggle='+Math.ceil(1000*Math.random());
                    document.getElementById('link_mk3').src = newURL;
                }
            }
        }
    });
}

function switchButton(status) {
    if(status=='play') {
    	var rand = (Math.round((Math.random()*999)+1));
    	//var url_sound = escape('http://download.previsite.net/getfile.asp?id=' + gb_idTour + '&ext=mp3&rand=' + rand);
    	//document.getElementById('flash_player').innerHTML = "<object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0\" width=\"32\" height=\"32\" id=\"mp3player\" align=\"middle\"><param name=\"movie\" value=\"/swf/mini_player_mp3\"><PARAM NAME=\"FlashVars\" VALUE=\"id_sound="+url_sound+"\"><param name=\"quality\" value=\"high\"><param name=\"allowScriptAccess\" value=\"always\"><param name=\"bgcolor\" value=\"#FFFFFF\"><param name=\"scale\" value=\"noscale\"><param name=\"wmode\" value=\"window\"><embed src=\"/swf/mini_player_mp3\" FlashVars=\"id_sound="+url_sound+"\" quality=\"high\" allowScriptAccess=\"always\" bgcolor=\"#FFFFFF\" scale=\"noscale\" wmode=\"window\" width=\"32\" height=\"32\" name=\"mp3player\" align=\"middle\" type=\"application/x-shockwave-flash\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\"></object>";
        var params = 'todo=refresh_player&tour='+gb_idTour;
        new Ajax.Updater('flash_player', 'ajax.php', {
            asynchronous: true,
            method: 'post',
            postBody: params,
            onSuccess: function() {
                hideElement('btn_record', 0);
                showElement('flash_player', 'block');
                showElement('div_generate', 'block');
            }
        });
        hideElement('btn_record', 0);
        showElement('flash_player', 'block');
        showElement('div_generate', 'block');
    } else {
        hideElement('flash_player', 0);
        hideElement('div_generate', 0);
        showElement('btn_record', 'block');
    }
}

function getListImages() {
    gb_idImage = '';
    var params = 'todo=get_list_images&tour='+gb_idTour;
    setOpacity('list_images', 75);
    showElement('ajax_wait', 'inline');
    new Ajax.Updater('list_images', 'ajax.php', {
        asynchronous: true,
        method: 'post',
        postBody: params,
        onSuccess: function() {
            hideElement('ajax_wait', 0);
            setOpacity('list_images', 100);
        }
    });
}

function updateMoving(imgId, newVal) {
    if(newVal.length>0){
        hideElement('moving', 0);
        var params = 'todo=update_moving_image&image='+imgId+'&value='+newVal+'&tour='+gb_idTour;
        new Ajax.Request('ajax.php', {
            asynchronous: true,
            method: 'post',
            postBody: params,
            onSuccess: function() {
                openDetails(imgId);
            }
        });
    }
    return false;
}

function selectDetailsImage(idImg, moving) {
    gb_idImage = idImg;
    var list = document.getElementById('list_moving').getElementsByTagName('a');

    for(var i=0; i<list.length; i++){
        if(list[i].id == 'link_'+moving){
            setOpacity(list[i].id, 100);
        } else {
            setOpacity(list[i].id, 35);
        }
    }
    showElement('moving', 'block');
    return false;
}

function openDetails(idImg) {
    var params    = 'todo=open_details&image='+idImg+'&lang='+gb_idLangue+'&tour='+gb_idTour;
    gb_idImage    = idImg;
    gb_urlCurrDiv = 'details';

    new Ajax.Updater('details', 'ajax.php', {
        asynchronous: true,
        method: 'post',
        postBody: params,
        evalScripts: true,
        onSuccess: function() {
            if(document.all) {
                updateSelectDisplay('', 'none');
            }
            hideElement('ajax_wait', 0);
            displayCenter('details', 400, 500);
            showElement('div_full_black', 'block');
            showElement('details', 'block');
            getTimeline();
            setTimeout("$('ajax_wait_details').style.display = 'none';", 1000);
        }
    });
    return false;
}

function getTimeline() {
    var params = 'todo=get_timeline&tour='+gb_idTour+'&image='+gb_idImage;
    new Ajax.Updater('timeline', 'ajax.php', {
        asynchronous: true,
        method: 'post',
        postBody: params
    });
}

function updateTransition(imgId, newVal) {
    if(newVal.length>0){
        var params = 'todo=update_transition_image&image='+imgId+'&value='+newVal+'&tour='+gb_idTour;
        new Ajax.Request('ajax.php', {
            asynchronous: true,
            method: 'post',
            postBody: params,
            onSuccess: function() {
                openDetails(imgId);
            }
        });
    }
    return false;
}

function updateDescription(desc) {
    if(gb_idImage!=''){
        var params = '&todo=update_description_image&image='+gb_idImage+'&desc='+desc+'&lang='+gb_idLangue;
        new Ajax.Request('ajax.php', {
            asynchronous: true,
            method: 'post',
            postBody: params,
            onSuccess: function() {
                openDetails(gb_idImage);
            }
        });
    }
}

function updateDuration(obj) {
    var newVal = parseInt(obj.value);
    var oldVal = parseInt(obj.title);

    if(newVal>0 && newVal<=40) {
        var params = 'todo=update_duration_image&image='+gb_idImage+'&value='+newVal+'&tour='+gb_idTour;
        if(oldVal<1) {
            params += '&last=on';
        }
        new Ajax.Request('ajax.php', {
            asynchronous: true,
            method: 'post',
            postBody: params,
                onSuccess: function() {
                openDetails(gb_idImage);
            }
        });
    }
    return false;
}

function updateOrder(imgId, obj) {
    var listSelect = document.getElementById('list_images').getElementsByTagName('select');
    var oldPos = parseInt(obj.title, 10);
    var newPos = parseInt(obj.value, 10);
    var params = 'todo=update_poids_image_video&tour='+gb_idTour;
    var j=0;

    for(var i=0; i<listSelect.length; i++){
        if(listSelect[i].id.match(/^poids-.{36}$/) && !listSelect[i].disabled){

            if(listSelect[i].id != obj.id && listSelect[i].value <= newPos && listSelect[i].value > oldPos && oldPos<newPos){
            // Reculer
                listSelect[i].selectedIndex--;
            }else if(listSelect[i].id != obj.id && listSelect[i].value >= newPos && listSelect[i].value < oldPos && oldPos>newPos){
            // Remonte
                listSelect[i].selectedIndex++;
            }
        }
    }

    for(var i=0; i<listSelect.length; i++){
        if(listSelect[i].id.match(/^poids-.{36}$/) && !listSelect[i].disabled){
            j++;
            params += '&img'+j+'='+listSelect[i].id.substr(listSelect[i].id.length-36, listSelect[i].id.length)+'&poids'+j+'='+listSelect[i].value;
        }
    }
    params += '&total='+j;

    new Ajax.Request('ajax.php', {asynchronous: true, method: 'post', postBody: params, onSuccess: getListImages});

    return false;
}

function addImage(imgId) {
    var params = '&todo=add_image_video&tour='+gb_idTour+'&image='+imgId+'&last=on';
    new Ajax.Request('ajax.php', {
        asynchronous: true,
        method: 'post',
        postBody: params,
        onSuccess: getListImages
    });
    return false;
}

function delImage(imgId) {
    if(confirm(gb_messConfirmDeleteImage)) {
        var params = '&todo=delete_image_video&tour='+gb_idTour+'&image='+imgId;
        new Ajax.Request('ajax.php', {
            asynchronous: true,
            method: 'post',
            postBody: params,
            onSuccess: getListImages
        });
    }
    return false;
}

function updateBackgroundMusic(idMusic) {
    var params = '&todo=update_background_music&music='+idMusic+'&tour='+gb_idTour;
    showElement('ajax_wait', 'block');
    new Ajax.Request('ajax.php', {
        asynchronous: true,
        method: 'post',
        postBody: params,
        onSuccess: function() {
            hideElement('ajax_wait', 500);
			document.getElementById('music_flash_player').innerHTML = document.getElementById('music_flash_player').innerHTML.replace( new RegExp('(.*)('+music_tour+')(.*)',"g"),'$1'+idMusic+'$3');
			music_tour = idMusic;
        }
    });
}
/* SMS */
function openSMS() {
    gb_urlCurrDiv = 'sms_window';
    if(document.all) {
        updateSelectDisplay('', 'none');
    }
    displayCenter('sms_window', 400, 120);
    showElement('div_full_black', 'block');
    showElement('sms_window', 'block');
    showElement('list_country_phone', 'inline');
    return false;
}

function closeSMS() {
    if(document.all) {
        updateSelectDisplay('', 'inline');
    }
    hideElement('sms_window', 0);
    hideElement('div_full_black', 0);
    return false;
}

function checkPhone(obj, e) {
    var touche = e.keyCode;
	/*
    if(obj.value.length==0) {
        return (touche==46 || touche==107 || touche==37 || touche==39 || (touche>=96 && touche<=105) );
    } else {
        return (touche==46 || touche==8 || touche==32 || touche==37 || touche==39 || (touche>=96 && touche<=105));
    }
    */
    return true;
}

function parsePhone(value) {
    var phone = value.replace(/[^0-9\+]+/g, '');
    var searchCountry = false;
    var template = '';
    if(phone.match(/^00[1-9]{1}[0-9]+$/)) {
        searchCountry = true;
        template = phone.substr(2, phone.length-2);
    } else if(phone.match(/^\+[1-9]{1}[0-9]+$/)) {
        searchCountry = true;
        template = phone.substr(1, phone.length-1);
    } else if(phone.match(/^[0-9]{3,}$/) && !phone.match(/^00/)) {
        var temp = $('list_country_phone').value.split('#');
        var country   = temp[0];
        var indicatif = temp[1];
        arrangePhone(country, indicatif, phone, false);
    } else {
        gb_sendable = false;
    }

    if(searchCountry) {
        var params = 'todo=search_country&phone='+encodeURIComponent(phone);
        new Ajax.Request('ajax.php', {
            asynchronous: true,
            method: 'post',
            postBody: params,
            onSuccess: function(t) {
                var temp = t.responseText.split('#');
                if(temp.length==2) {
                    var country   = temp[0];
                    var indicatif = temp[1];
                    arrangePhone(country, indicatif, template, true);
                }
            }
        });
    }
}

function arrangePhone(country, indicatif, template, toReplace) {
    var toSearch = country+'#'+indicatif;

    for(var i=0; i<$('list_country_phone').options.length; i++) {
        if(toSearch == $('list_country_phone')[i].value) {
            $('list_country_phone').selectedIndex = i;
        }
    }

    if(toReplace) {
        // Enleve l'indicatif pays du numero global. Ex : 3312345678 -> 12345678
        eval("var phone = template.replace(/^"+indicatif+"/, '')");
    } else {
        var phone = template;
    }

    phone = phone.replace(/^0(.*)$/, '$1');
    if(phone.length > 4) {
        gb_finalPhone = '00'+indicatif+phone;
    } else {
        gb_finalPhone = '';
    }

}

function sendSMS() {
	if(gb_finalPhone.length>7) {
	    if(!gb_lock) {
            gb_lock = true;
            var params = 'todo=send_sms&tour='+gb_tour+'&phone='+gb_finalPhone+'&title='+encodeURIComponent($('title_mess').value)+'&ext=3gp';

            new Ajax.Request('ajax.php', {
                asynchronous: true,
                method: 'post',
                postBody: params,
                onComplete: function(t) {
                    if(t.responseText=='success') {
                        alert(gb_messSendOK);
                    } else {
                        alert(gb_messSendKO);
                    }
                    gb_lock = false;
                }
            });
        }
    } else {
        alert(gb_messErrorSendSMS);
    }
    return false;
}

function getListURL() {
    var params = 'todo=get_list_url&tour='+gb_tour+'&host='+gb_viewerHost;
    showElement('ajax_wait', 'inline');
    new Ajax.Updater('div_list_url', 'ajax.php', {
        asynchronous: true,
        method: 'post',
        postBody: params,
        onComplete: function(t) {
            hideElement('ajax_wait', 0);
        }
    });
}

function addPublish() {
    var portalName = $F('new_name');
    var portalMail = $F('new_mail');
    var reference  = $F('reference');

    if(reference.length>0) {
        var params = 'todo=add_publication&tour='+gb_tour+'&name='+encodeURIComponent(portalName)+'&mail='+encodeURIComponent(portalMail)+'&reference='+encodeURIComponent(reference);

        if($('portal_list').value.length>0) {
            var tab = $('portal_list').value.split('#');
            params += '&portal='+tab[1];
        }

        showElement('ajax_wait', 'inline');

        new Ajax.Request('ajax.php', {
            asynchronous: true,
            method: 'post',
            postBody: params,
            onComplete: getListURL
        });
    }
}

function customizeDiffusion(diff) {
    gb_idElement = diff;
    apercuViewer();
}

function updateTourDiffusion(portal, diff, newStatus) {
    if(newStatus>0 || confirm(gb_messDisableDiffusion)) {
        showElement('ajax_wait', 'inline');
        var params = 'todo=update_diffusion&portal='+portal+'&diff='+diff+'&tour='+gb_tour+'&status='+newStatus;

        new Ajax.Request('ajax.php', {
            asynchronous: true,
            method: 'post',
            postBody: params,
            onSuccess: getListURL
        });
    }
    return false;
}

function deleteDiffusion(portal, diff) {
    if(confirm(gb_messDeleteDiffusion)) {
        var params = 'todo=delete_diffusion&tour='+gb_tour+'&diffusion='+diff+'&portal='+portal;
        new Ajax.Request('ajax.php', {
            asynchronous: true,
            method: 'post',
            postBody: params,
            onComplete: getListURL
        });
    }
    return false;
}


function apercuViewer() {
    var params = 'todo=apercu_viewer&element='+gb_element+'&id_element='+gb_idElement+'&host='+gb_viewerHost;
    if(typeof(gb_tour)!='undefined') {
        params += '&tour='+gb_tour;
    }

    showElement('div_full_black', 'block');
    showElement('apercu_viewer', 'block');
    if(document.all) {
        updateSelectDisplay('', 'none');
    }
    gb_urlCurrDiv = 'apercu_viewer';
    displayCenter('apercu_viewer', 600, 520);

    new Ajax.Updater('apercu_viewer', 'ajax.php', {
        asynchronous: true,
        method: 'post',
        postBody: params
    });
    return false;
}

function updateChoice(ref, val) {
    var params = 'todo=update_viewer_option&element='+gb_element+'&id_element='+gb_idElement+'&ref='+ref+'&val='+val;
    new Ajax.Request('ajax.php', {
        asynchronous: true,
        method: 'post',
        postBody: params,
        onComplete: apercuViewer
    });
}
