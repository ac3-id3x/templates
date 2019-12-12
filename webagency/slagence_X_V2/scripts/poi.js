/*
    Process the data returned or display an error message
    Has to be taken out of the object else it can't be used as a callback for the API
*/
function processPOIData(data) {
    if (data.ok && data.results.length > 0) {
        POI.processData(data);
    } else {
        // uncheck the checkbox and disable it
        $('#POI input:checkbox').each(function () {
            if ($(this).attr('value') == POI.current_label) {
                $(this).attr('checked', false).attr('disabled', true);
            }
        });
        // keep processing if we got several categories
        if (POI.categoryArray.length > 0) {
            POI.processData();
        }
        if (POI.sub_poi) {
            $("#POI_header, #POI_NoBoundMarkers").hide();
            $("#POI_NoResults").show();
        }
        POI.setLoader(false);
    }
}

/* POI Class */
function POILocator() {

    // Class global variables
    this.poi_api_key = 'hnFc40WjQfN2yZOjaNOQ';
    this.domain = 'http://api.qype.com/v1/';
    this.sub_poi = false;
    this.image_link = '/z/webagency/slagence_X_V4/images/poi/poi_';
    this.latitude = '';
    this.longitude = '';
    this.current_title = '';
    this.current_label = '';
    this.APIURL = '';
    this.category;
    this.categoryArray = [];
    this.catCounter = 0;
    this.poi_ref_chart = [];
    this.chart_index = 0;
    this.map;
    this.boundCheck = false;
    this.POIIcon = new GIcon();
    this.markerArray = [];
    this.SLDomain = 'http://www.seloger.com';
    this.loaderStatuts = 'off';
    var tmp;
    if (tmp = document.getElementById('srv')) {
        this.SLDomain = tmp.value;
    }

    // Initiating POI chart - Simply add or remove from this list, the id is Qype's id.
    this.poi_ref_chart[this.chart_index++] = {label: 'restaurants', id: '1'};
    this.poi_ref_chart[this.chart_index++] = {label: 'culturel', id: '4'};
    this.poi_ref_chart[this.chart_index++] = {label: 'sports', id: '7'};
    this.poi_ref_chart[this.chart_index++] = {label: 'discotheques', id: '23'};
    this.poi_ref_chart[this.chart_index++] = {label: 'coiffeurs', id: '26'};
    this.poi_ref_chart[this.chart_index++] = {label: 'medecins', id: '32'};
    this.poi_ref_chart[this.chart_index++] = {label: 'creches', id: '45'};
    this.poi_ref_chart[this.chart_index++] = {label: 'boulangeries', id: '74'};
    this.poi_ref_chart[this.chart_index++] = {label: 'supermarches', id: '75'};
    this.poi_ref_chart[this.chart_index++] = {label: 'boucheries', id: '82'};
    this.poi_ref_chart[this.chart_index++] = {label: 'saunas', id: '96'};
    this.poi_ref_chart[this.chart_index++] = {label: 'hopitaux', id: '171'};
    this.poi_ref_chart[this.chart_index++] = {label: 'universites', id: '254'};
    this.poi_ref_chart[this.chart_index++] = {label: 'parkings', id: '354'};
    this.poi_ref_chart[this.chart_index++] = {label: 'police', id: '391'};
    this.poi_ref_chart[this.chart_index++] = {label: 'pharmacies', id: '448'};
    this.poi_ref_chart[this.chart_index++] = {label: 'services', id: '474'};
    this.poi_ref_chart[this.chart_index++] = {label: 'maternelles', id: '566'};
    this.poi_ref_chart[this.chart_index++] = {label: 'ecoles', id: '567'};
    this.poi_ref_chart[this.chart_index++] = {label: 'colleges', id: '568'};
    this.poi_ref_chart[this.chart_index++] = {label: 'lycees', id: '569'};
    this.poi_ref_chart[this.chart_index++] = {label: 'superettes', id: '576'};
    this.poi_ref_chart[this.chart_index++] = {label: 'bars', id: '609'};
    this.poi_ref_chart[this.chart_index++] = {label: 'cliniques', id: '659'};
}

/*
    Init function to get the POI process started
    status true = Add POIs
    status false = Remove POIs
    sub_poi = indicates if the checkbox was a master poi or not
*/
POILocator.prototype.getPOI = function(label, status, title, sub_poi) {

    // set loader if it's not up
    this.setLoader(true);
    
    if (sub_poi) {
        this.sub_poi = true;
    } else {
        this.sub_poi = false;
    }

    this.current_title = title;
    this.current_label = label;
    for (var i = 0; i < this.poi_ref_chart.length; i++) {
        if (this.poi_ref_chart[i].label == label) {
            this.category = this.poi_ref_chart[i].id;
            this.POIIcon = this.setIcon(this.poi_ref_chart[i]);
            break;
        }
    }
    if (status) {
        this.buildURL();
        this.createScript();
    } else {
        this.removePOI();
    }
}

/* JQuery needed */
POILocator.prototype.getPOIFromMaster = function(masterBox) {
    // set loader
    this.setLoader(true);

    // get children
    var children = masterBox.parents('li').children('ul').children('li').children('input:checkbox');
    var POIPointer = this;

    children.each(function () {
        // check or uncheck all the boxes and process the data
        if (masterBox.is(':checked')) {
            $(this).attr('checked', 'checked');
            POIPointer.categoryArray.push($(this));
        } else {
            $(this).attr('checked', '');

            // reset the category id for removal
            for (var i = 0; i < POIPointer.poi_ref_chart.length; i++) {
                if (POIPointer.poi_ref_chart[i].label == $(this).attr('value')) {
                    POIPointer.category = POIPointer.poi_ref_chart[i].id;
                    break;
                }
            }
            POIPointer.removePOI();
        }
    });
    if (masterBox.is(':checked')) { 
        this.processData();
    } else {
        // remove loader
        this.setLoader(false);
    }
}

/* sets the icon based on the POI checked */
POILocator.prototype.setIcon = function (poi_obj) {

    var POIIcon = new GIcon();
    POIIcon.image = this.SLDomain + this.image_link + poi_obj.label + '.png';
    POIIcon.iconSize = new GSize(28, 30);
    POIIcon.shadow = this.SLDomain + this.image_link + 'shadow.png';
    POIIcon.shadowSize = new GSize(28, 32);
    POIIcon.iconAnchor = new GPoint(14, 30);
    POIIcon.infoWindowAnchor = new GPoint(14, 6);
    
    return POIIcon;
}

/* dynamically create a script tag to call the API url because of no cross-domain Ajax */
POILocator.prototype.createScript = function () {
    var head = document.getElementsByTagName("head").item(0);
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", this.APIURL);
    head.appendChild(script);
}

/* Remove the POIs that have been unchecked */
POILocator.prototype.removePOI = function() {
    if (this.markerArray[this.category] != undefined) {
        for (var j = 0; j < this.markerArray[this.category].length; j++) {
            this.map.removeOverlay(this.markerArray[this.category][j]);
        }
    }
    (("#POI_NoResults, #POI_NoBoundMarkers").hide();
    $("#POI_header").show();
    this.setLoader(false);
}

/* Needed to place the POI icons on the correct map */
POILocator.prototype.setMap = function(map) {
    this.map = map;
    this.latitude = map.getCenter().lat();
    this.longitude = map.getCenter().lng();
}

/* Needed to place the POI icons on the correct map */
POILocator.prototype.setMarker = function(lat, lon, data, options) {

    // Check if the marker is within bounds
    this.checkBoundMarkers(lat, lon);

    var marker = new GMarker(new GLatLng(lat, lon), options);

    this.buildInfoWindow(marker, data);
    
    // Add markers to Array for removal
    if (this.markerArray[this.category] == undefined) {
        this.markerArray[this.category] = new Array();
    }
    this.markerArray[this.category].push(marker);

    this.map.addOverlay(marker);
}

POILocator.prototype.checkBoundMarkers = function(lat, lon) {
    var bounds = this.map.getBounds();
    if (bounds.containsLatLng(new GLatLng(lat, lon))) {
        this.boundCheck = true;
    }
}

POILocator.prototype.buildInfoWindow = function(marker, data) {

    var htmlString = '<div class="POI_Info_Window">';
    htmlString += '<div class="POI_Info_Window_image"><img sr' + 'c="' + this.SLDomain + this.image_link +  this.current_label + '.png" alt="' + this.current_title + '" /></div>';
    htmlString += '<div class="POI_Info_Window_content">';
    if (data.place.title) {
        htmlString += '<strong>' + data.place.title + '</strong><br />';
    }
    if (data.place.address.housenumber) {
        htmlString += data.place.address.housenumber + ' ';
    }
    if (data.place.address.street) {
        htmlString += data.place.address.street;
    }
    if (data.place.address.housenumber && data.place.address.street) {
        htmlString += '<br />';
    }
    if (data.place.address.postcode) {
        htmlString += data.place.address.postcode + ' ';
    }
    if (data.place.address.city) {
        htmlString += data.place.address.city;
    }
    if (data.place.phone) {
        htmlString += '<br />T&eacute;l: ' + data.place.phone + '&nbsp;';
    }
    htmlString += '<br />';
    for (var i = 1; i <= 5; i++) {
        htmlString += '<div class="poi_star';
        if (i <= data.place.average_rating && data.place.average_rating != 0) {
            htmlString += '_red';
        }
        htmlString += '"></div>';
    }
    htmlString += '<div class="qype_logo_map"><a href="';
    if (data.place.links) {
        for (var i = 0; i < data.place.links.length; i++) {
            if (data.place.links[i].hreflang == 'fr' && data.place.links[i].href.indexOf('http://www.qype.fr') > -1) {
                htmlString += data.place.links[i].href;
                break;
            }
        }
    } else {
        htmlString += 'http://www.qype.fr';
    }
    htmlString += '" rel="nofollow" target="_blank"><img src="/z/webagency/slagence_X_V3/images/poi/logo_qype_small.png" alt="Qype.fr - Trouvez, partagez" /></a></div><div style="clear: both;"></div>';
    if (data.place.latest_review) {
        htmlString += '<div style="width: 240px;">Dernier avis ';
        if (data.place.latest_review.user_compact.title) {
            htmlString += ' par ' + data.place.latest_review.user_compact.title + ' ';
        }
        htmlString += ': "';
        htmlString += data.place.latest_review.content_text.substring(0, 50);
        if (data.place.latest_review.content_text.length > 50) {
            htmlString += ' ...';
        }
        htmlString += '" ';
    }
    if (data.place.links) {
        for (var i = 0; i < data.place.links.length; i++) {
            if (data.place.links[i].hreflang == 'fr' && data.place.links[i].href.indexOf('http://www.qype.fr') > -1) {
                htmlString += '<a href="' + data.place.links[i].href + '" target="_blank"><nobr>Plus d\'infos</nobr></a>';
                break;
            }
        }
    }
    if (data.place.latest_review) {
        htmlString += '</div>';
    }
    htmlString += '</div></div>';

    marker.bindInfoWindowHtml(htmlString);
}

/* Builds the correct API url */
POILocator.prototype.buildURL = function() {
    this.APIURL  = this.domain + 'positions/' + this.latitude + ',' + this.longitude;
    this.APIURL += '/places.json?consumer_key=' + this.poi_api_key + '&in_category=' + this.category;
    this.APIURL += '&order=distance&per_page=30&expand=latest_review,user_compact&callback=processPOIData';
}

/* Sets the corrext domain for all images calls */
POILocator.prototype.setDomain = function(domain) {
    this.SLDomain = domain;
}

/* Process the data returned */
POILocator.prototype.processData = function(JSONObject) {
    var lat_lng;
    var POIPointer = this;
    var current_cat;
    this.boundCheck = false;

    if (JSONObject) {
        $.each(JSONObject.results, function (index, data) {
            if (! data.place.closed) {
                $("#POI_NoResults").hide();
                $("#POI_header").show();
                lat_lng = data.place.point.split(',');
                POIPointer.setMarker(lat_lng[0], lat_lng[1], data, {'icon': POIPointer.POIIcon});
            }
        });

        // If no markers are visible, show out of bounds message
        if (! POIPointer.boundCheck) {
            $("#POI_header").hide();
            $("#POI_NoBoundMarkers").show();
        } else {
            $("#POI_NoBoundMarkers").hide();
            $("#POI_header").show();
        }
    }
    // if we clicked a "master" category, keep processing until we run out of categories
    if (POIPointer.categoryArray[POIPointer.catCounter]) {
        current_cat = POIPointer.categoryArray[POIPointer.catCounter];
        POIPointer.catCounter++;
        POIPointer.getPOI(current_cat.val(), current_cat.is(':checked'), current_cat.parent('li').text(), false);
    } else {
        // remove loader
        POIPointer.setLoader(false);
    }

}

/* Set the loader up */
POILocator.prototype.setLoader = function(status) {
    if (status) {
        if (this.loaderStatus != 'on') {
            this.loaderStatus = 'on';
            $('#poi_loader').show();
        }
    } else {
        this.loaderStatus = 'off';
        $('#poi_loader').hide();
    }
}

var POI = new POILocator();
/* POI Class */