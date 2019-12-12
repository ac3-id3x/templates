function processPOIData(e) {
    if (e.ok && e.results.length > 0) {
        POI.processData(e)
    } else {
        $("#POI input:checkbox").each(function () {
            if ($(this).attr("value") == POI.current_label) {
                $(this).attr("checked", false).attr("disabled", true)
            }
        });
        if (POI.categoryArray.length > 0) {
            POI.processData()
        }
        if (POI.sub_poi) {
            $("#POI_header, #POI_NoBoundMarkers").hide();
            $("#POI_NoResults").show()
        }
        POI.setLoader(false)
    }
}

function POILocator() {
    this.poi_api_key = "hnFc40WjQfN2yZOjaNOQ";
    this.domain = "http://api.qype.com/v1/";
    this.sub_poi = false;
    this.image_link = "/z/webagency/slagence_X_V5/images/poi/poi_";
    this.latitude = "";
    this.longitude = "";
    this.current_title = "";
    this.current_label = "";
    this.APIURL = "";
    this.category;
    this.categoryArray = [];
    this.catCounter = 0;
    this.poi_ref_chart = [];
    this.chart_index = 0;
    this.map;
    this.boundCheck = false;
    this.POIIcon = new google.maps.Marker();
    this.markerArray = [];
    this.SLDomain = "http://www.seloger.com";
    this.loaderStatuts = "off";
    var e;
    if (e = document.getElementById("srv")) {
        this.SLDomain = e.value
    }
    this.poi_ref_chart[this.chart_index++] = {
        label: "restaurants",
        id: "1"
    };
    this.poi_ref_chart[this.chart_index++] = {
        label: "culturel",
        id: "4"
    };
    this.poi_ref_chart[this.chart_index++] = {
        label: "sports",
        id: "7"
    };
    this.poi_ref_chart[this.chart_index++] = {
        label: "discotheques",
        id: "23"
    };
    this.poi_ref_chart[this.chart_index++] = {
        label: "coiffeurs",
        id: "26"
    };
    this.poi_ref_chart[this.chart_index++] = {
        label: "medecins",
        id: "32"
    };
    this.poi_ref_chart[this.chart_index++] = {
        label: "creches",
        id: "45"
    };
    this.poi_ref_chart[this.chart_index++] = {
        label: "boulangeries",
        id: "74"
    };
    this.poi_ref_chart[this.chart_index++] = {
        label: "supermarches",
        id: "75"
    };
    this.poi_ref_chart[this.chart_index++] = {
        label: "boucheries",
        id: "82"
    };
    this.poi_ref_chart[this.chart_index++] = {
        label: "saunas",
        id: "96"
    };
    this.poi_ref_chart[this.chart_index++] = {
        label: "hopitaux",
        id: "171"
    };
    this.poi_ref_chart[this.chart_index++] = {
        label: "universites",
        id: "254"
    };
    this.poi_ref_chart[this.chart_index++] = {
        label: "parkings",
        id: "354"
    };
    this.poi_ref_chart[this.chart_index++] = {
        label: "police",
        id: "391"
    };
    this.poi_ref_chart[this.chart_index++] = {
        label: "pharmacies",
        id: "448"
    };
    this.poi_ref_chart[this.chart_index++] = {
        label: "services",
        id: "474"
    };
    this.poi_ref_chart[this.chart_index++] = {
        label: "maternelles",
        id: "566"
    };
    this.poi_ref_chart[this.chart_index++] = {
        label: "ecoles",
        id: "567"
    };
    this.poi_ref_chart[this.chart_index++] = {
        label: "colleges",
        id: "568"
    };
    this.poi_ref_chart[this.chart_index++] = {
        label: "lycees",
        id: "569"
    };
    this.poi_ref_chart[this.chart_index++] = {
        label: "superettes",
        id: "576"
    };
    this.poi_ref_chart[this.chart_index++] = {
        label: "bars",
        id: "609"
    };
    this.poi_ref_chart[this.chart_index++] = {
        label: "cliniques",
        id: "659"
    }
}
POILocator.prototype.getPOI = function (e, t, n, r) {
    this.setLoader(true);
    if (r) {
        this.sub_poi = true
    } else {
        this.sub_poi = false
    }
    this.current_title = n;
    this.current_label = e;
    for (var i = 0; i < this.poi_ref_chart.length; i++) {
        if (this.poi_ref_chart[i].label == e) {
            this.category = this.poi_ref_chart[i].id;
            this.POIIcon = this.setIcon(this.poi_ref_chart[i]);
            break
        }
    }
    if (t) {
        this.buildURL();
        this.createScript()
    } else {
        this.removePOI()
    }
};
POILocator.prototype.getPOIFromMaster = function (e) {
    this.setLoader(true);
    var t = e.parent().parent().children(".accordion-body").children("ul").children("li").children("label").children("input:checkbox");
    var n = this;
    t.each(function () {
        if (e.is(":checked")) {
            $(this).attr("checked", "checked");
            n.categoryArray.push($(this))
        } else {
            $(this).attr("checked", "");
            for (var t = 0; t < n.poi_ref_chart.length; t++) {
                if (n.poi_ref_chart[t].label == $(this).attr("value")) {
                    n.category = n.poi_ref_chart[t].id;
                    break
                }
            }
            $(this).removeAttr("checked");
            n.removePOI()
        }
    });
    if (e.is(":checked")) {
        this.processData()
    } else {
        this.setLoader(false)
    }
};
POILocator.prototype.setIcon = function (e) {
    var t = new google.maps.Marker();
    t.image = this.SLDomain + this.image_link + e.label + ".png";
    t.iconSize = new google.maps.Size(28, 30);
    t.shadow = this.SLDomain + this.image_link + "shadow.png";
    t.shadowSize = new google.maps.Size(28, 32);
    t.iconAnchor = new google.maps.Point(14, 30);
    t.infoWindowAnchor = new google.maps.Point(14, 6);
    return t
};
POILocator.prototype.createScript = function () {
    var e = document.getElementsByTagName("head").item(0);
    var t = document.createElement("script");
    t.setAttribute("type", "text/javascript");
    t.setAttribute("src", this.APIURL);
    e.appendChild(t)
};
POILocator.prototype.removePOI = function () {
    if (this.markerArray[this.category] != undefined) {
        for (var e = 0; e < this.markerArray[this.category].length; e++) {
            this.map.removeOverlay(this.markerArray[this.category][e])
        }
    }
    $("#POI_NoResults, #POI_NoBoundMarkers").hide();
    $("#POI_header").show();
    this.setLoader(false)
};
POILocator.prototype.setMap = function (e) {
    this.map = e;
    this.latitude = e.getCenter().lat();
    this.longitude = e.getCenter().lng()
};
POILocator.prototype.setMarker = function (e, t, n, r) {
    this.checkBoundMarkers(e, t);
    var i = new GMarker(new GLatLng(e, t), r);
    this.buildInfoWindow(i, n);
    if (this.markerArray[this.category] == undefined) {
        this.markerArray[this.category] = new Array
    }
    this.markerArray[this.category].push(i);
    this.map.addOverlay(i)
};
POILocator.prototype.checkBoundMarkers = function (e, t) {
    var n = this.map.getBounds();
    if (n.containsLatLng(new GLatLng(e, t))) {
        this.boundCheck = true
    }
};
POILocator.prototype.buildInfoWindow = function (e, t) {
    var n = '<div class="POI_Info_Window">';
    n += '<div class="POI_Info_Window_image"><img sr' + 'c="' + this.SLDomain + this.image_link + this.current_label + '.png" alt="' + this.current_title + '" /></div>';
    n += '<div class="POI_Info_Window_content">';
    if (t.place.title) {
        n += "<strong>" + t.place.title + "</strong><br />"
    }
    if (t.place.address.housenumber) {
        n += t.place.address.housenumber + " "
    }
    if (t.place.address.street) {
        n += t.place.address.street
    }
    if (t.place.address.housenumber && t.place.address.street) {
        n += "<br />"
    }
    if (t.place.address.postcode) {
        n += t.place.address.postcode + " "
    }
    if (t.place.address.city) {
        n += t.place.address.city
    }
    if (t.place.phone) {
        n += "<br />Tél: " + t.place.phone + " "
    }
    n += "<br />";
    for (var r = 1; r <= 5; r++) {
        n += '<div class="poi_star';
        if (r <= t.place.average_rating && t.place.average_rating != 0) {
            n += "_red"
        }
        n += '"></div>'
    }
    n += '<div class="qype_logo_map"><a href="';
    if (t.place.links) {
        for (var r = 0; r < t.place.links.length; r++) {
            if (t.place.links[r].hreflang == "fr" && t.place.links[r].href.indexOf("http://www.qype.fr") > -1) {
                n += t.place.links[r].href;
                break
            }
        }
    } else {
        n += "http://www.qype.fr"
    }
    n += '" rel="nofollow" target="_blank"><img src="/z/webagency/slagence_X_V5/images/poi/logo_qype_small.png" alt="Qype.fr - Trouvez, partagez" /></a></div><div style="clear: both;"></div>';
    if (t.place.latest_review) {
        n += '<div style="width: 240px;">Dernier avis ';
        if (t.place.latest_review.user_compact.title) {
            n += " par " + t.place.latest_review.user_compact.title + " "
        }
        n += ': "';
        n += t.place.latest_review.content_text.substring(0, 50);
        if (t.place.latest_review.content_text.length > 50) {
            n += " ..."
        }
        n += '" '
    }
    if (t.place.links) {
        for (var r = 0; r < t.place.links.length; r++) {
            if (t.place.links[r].hreflang == "fr" && t.place.links[r].href.indexOf("http://www.qype.fr") > -1) {
                n += '<a href="' + t.place.links[r].href + '" target="_blank"><nobr>Plus d\'infos</nobr></a>';
                break
            }
        }
    }
    if (t.place.latest_review) {
        n += "</div>"
    }
    n += "</div></div>";
    e.bindInfoWindowHtml(n)
};
POILocator.prototype.buildURL = function () {
    this.APIURL = this.domain + "positions/" + this.latitude + "," + this.longitude;
    this.APIURL += "/places.json?consumer_key=" + this.poi_api_key + "&in_category=" + this.category;
    this.APIURL += "&order=distance&per_page=30&expand=latest_review,user_compact&callback=processPOIData"
};
POILocator.prototype.setDomain = function (e) {
    this.SLDomain = e
};
POILocator.prototype.processData = function (e) {
    var t;
    var n = this;
    var r;
    this.boundCheck = false;
    if (e) {
        $.each(e.results, function (e, r) {
            if (!r.place.closed) {
                $("#POI_NoResults").hide();
                $("#POI_header").show();
                t = r.place.point.split(",");
                n.setMarker(t[0], t[1], r, {
                    icon: n.POIIcon
                })
            }
        });
        if (!n.boundCheck) {
            $("#POI_header").hide();
            $("#POI_NoBoundMarkers").show()
        } else {
            $("#POI_NoBoundMarkers").hide();
            $("#POI_header").show()
        }
    }
    if (n.categoryArray[n.catCounter]) {
        r = n.categoryArray[n.catCounter];
        n.catCounter++;
        n.getPOI(r.val(), r.is(":checked"), r.parent("li").text(), false)
    } else {
        n.setLoader(false)
    }
};
POILocator.prototype.setLoader = function (e) {
    if (e) {
        if (this.loaderStatus != "on") {
            this.loaderStatus = "on";
            $("#poi_loader").show()
        }
    } else {
        this.loaderStatus = "off";
        $("#poi_loader").hide()
    }
};
var POI = new POILocator