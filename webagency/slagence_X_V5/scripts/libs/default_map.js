function DefaultMap() {
    this.latitude = 0;
    this.longitude = 0;
    this.zoom = 14;
    this.icon = new google.maps.Marker();
    this.map = undefined;
    this.server = "http://www.seloger.com"
}
DefaultMap.prototype.Init = function (e) {
    if (e.latitude) {
        this.latitude = e.latitude
    }
    if (e.longitude) {
        this.longitude = e.longitude
    }
    if (e.zoom) {
        this.zoom = e.zoom
    }
    if (e.server) {
        this.server = e.server
    }
    this.SetMap(e.container_id, e.map_options);
    this.SetIcon(e.icon);
    if (e.marker_ok) {
        this.SetMarker(e.marker)
    }
    if (e.poly) {
        this.SetPoly(e.poly, e.poly_options)
    }
};
DefaultMap.prototype.GetMap = function () {
    return this.map
};
DefaultMap.prototype.GetContainerId = function () {
    return this.container_id
};
DefaultMap.prototype.SetMap = function (e, t) {
    //if (GBrowserIsCompatible()) {
        if (document.getElementById(e)) {
            this.map = new google.maps.Map(document.getElementById(e));
            this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude), this.zoom)
        }
        if (t !== undefined) {
            if (t.map_types === undefined || t.map_types) {
                this.map.addControl(new google.maps.MapTypeControl)
            }
            if (t.map_scale === undefined || t.map_scale) {
                this.map.addControl(new google.maps.ScaleControl)
            }
            if (t.map_overview === undefined || t.map_overview) {
                this.map.addControl(new google.maps.OverviewMapControl)
            }
            //if (t.map_controls === undefined || t.map_controls) {
             //   this.map.addControl(new GLargeMapControl3D)
            //}
            if (t.map_types_small !== undefined && t.map_types_small) {
                this.map.setUIToDefault()
            }
            if (t.scroll_wheel_zoom !== undefined && t.scroll_wheel_zoom) {
                this.map.disableScrollWheelZoom()
            }
        } else {
           // this.map.addControl(new GLargeMapControl3D)
        }
   // }
};
DefaultMap.prototype.SetIcon = function (e) {
    this.icon.image = this.server + "/z/portail/svx/portals/sv6_annonces/images/puce_annonce.png";
    this.icon.iconSize = new google.maps.Size(33, 36);
    this.icon.iconAnchor = new google.maps.Point(16, 34);
    this.icon.infoWindowAnchor = new google.maps.Point(20, 0);
    if (e !== undefined) {
        if (e.image !== undefined) {
            this.icon.image = e.image
        }
        if (e.iconSize !== undefined) {
            this.icon.iconSize = e.iconSize
        }
        if (e.shadow !== undefined) {
            this.icon.shadow = e.shadow
        }
        if (e.shadowSize !== undefined) {
            this.icon.shadowSize = e.shadowSize
        }
        if (e.iconAnchor !== undefined) {
            this.icon.iconAnchor = e.iconAnchor
        }
        if (e.infoWindowAnchor !== undefined) {
            this.icon.infoWindowAnchor = e.infoWindowAnchor
        }
    }
};
DefaultMap.prototype.SetMarker = function (e) {
    var t = new google.maps.Marker(new google.maps.LatLng(e.latitude, e.longitude), {
        icon: this.icon
    });
    this.map.addOverlay(t)
};
DefaultMap.prototype.SetPoly = function (e, t) {
    var n = "#EA0B13";
    var r = "#EA0B13";
    var i = .7;
    var s = .2;
    if (t !== undefined) {
        if (t.colorLine) {
            n = t.colorLine
        }
        if (t.colorPoly) {
            r = t.colorPoly
        }
        if (t.lineOpacity) {
            i = t.lineOpacity
        }
        if (t.polyOpacity) {
            s = t.polyOpacity
        }
    }
    var o = new google.maps.Polygon.fromEncoded({
        polylines: [{
            points: e,
            levels: "1",
            color: n,
            opacity: i,
            weight: 3,
            numLevels: 4,
            zoomFactor: 2
        }],
        fill: true,
        color: r,
        opacity: s,
        outline: true
    });
    var u = o.getBounds().getCenter();
    this.map.setCenter(u);
    this.map.addOverlay(o)
};
DefaultMap.prototype.GetMapType = function (e) {
    switch (e) {
    case "map":
        e = google.maps.MapTypeId.ROADMAP;
        break;
    case "sat":
        e = google.maps.MapTypeId.SATELLITE;
        break;
    case "hybrid":
        e = google.maps.MapTypeId.HYBRID ;
        break
    }
    return e
};
DefaultMap.prototype.DrawQuartier = function (e) {
    if (e.libelleQuartier) {
        this.libelleQuartier = e.libelleQuartier
    }
    if (e.polyQuartier) {
        this.polyQuartier = e.polyQuartier
    }
    this.splitQuartier = this.polyQuartier.split(", ");
    this.lengthGPS = this.splitQuartier.length;
    this.polygonDraw = new Array;
    for (i = 0; i < this.lengthGPS; i++) {
        this.splitGPS = this.splitQuartier[i].split(" ");
        this.polygonDraw.push(new google.maps.LatLng(this.splitGPS[1], this.splitGPS[0]))
    }
    var t = $("#map_poi").attr("data-color");
    var n = 3;
    var r = .6;
    var s = $("#map_poi").attr("data-color");
    var o = .2;
    this.drawGmaps = new google.maps.Polygon(this.polygonDraw, t, n, r, s, o);
    this.map.addOverlay(this.drawGmaps)
};
var Map = new DefaultMap