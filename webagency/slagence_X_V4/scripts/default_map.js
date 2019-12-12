/* Default Google Map Class */
function DefaultMap() {
    this.latitude = 0;
    this.longitude = 0;
    this.zoom = 14;
    this.icon = new GIcon();
    this.map = undefined;
    this.server = "http://www.seloger.com";
    
}

/*
    Create Generic Map from options
    *params*
        options = {
            container_id: String HTML element id
            icon: object icon options - refer to SetIcon() method for details
            map_options: object map options - refer to SetMap() method for details
            marker: object marker options - refer to SetMarker() method for details
            poly: String encoded polyline - GMap standard
            poly_options: object polygon options - refer to SetPoly() method for details
            latitude: Double latitude value for centering the map
            longitude: Double longitude value for centering the map
            zoom: Int zoom level default value
            server: String default server for images and the like
        }
*/
DefaultMap.prototype.Init = function (options) {

    /* Setting variables */
    if (options.latitude) {
        this.latitude = options.latitude;
    }
    if (options.longitude) {
        this.longitude = options.longitude;
    }
    if (options.zoom) {
        this.zoom = options.zoom;
    }
    if (options.server) {
        this.server = options.server;
    }

    /* Create the basic map object */
    this.SetMap(options.container_id, options.map_options);
    this.SetIcon(options.icon);
    if (options.marker_ok) {
        this.SetMarker(options.marker);
    }
    if (options.poly) {
        this.SetPoly(options.poly, options.poly_options);
    }
};

DefaultMap.prototype.GetMap = function () {
    return this.map;
};

DefaultMap.prototype.GetContainerId = function () {
    return this.container_id;
};

/*
    Create Generic Map
    *params*
        container_id = String HTML element id
        options = {
            map_types: Boolean to display the map types
            map_types_small: Boolean to display the small map types (true to able)
            map_scale: Boolean to display the scale or not
            map_overview: Boolean to display the lower right overview of the map
            map_controls: Boolean to display the 3D controls of the map
            scroll_wheel_zoom: Boolean to disable the zoom on wheel scroll (true to disable)
        }
*/
DefaultMap.prototype.SetMap = function (container_id, options) {
    if (GBrowserIsCompatible()) {
        if (document.getElementById(container_id)) {
            this.map = new GMap2(document.getElementById(container_id));
            this.map.setCenter(new GLatLng(this.latitude, this.longitude), this.zoom);
        }

        // Add UI elements
        if (options !== undefined) {
            if (options.map_types === undefined || options.map_types) {
                this.map.addControl(new GMapTypeControl());
            }
            if (options.map_scale === undefined || options.map_scale) {
                this.map.addControl(new GScaleControl());
            }
            if (options.map_overview === undefined || options.map_overview) {
                this.map.addControl(new GOverviewMapControl());
            }
            if (options.map_controls === undefined || options.map_controls) {
                this.map.addControl(new GLargeMapControl3D());
            }
            if (options.map_types_small !== undefined && options.map_types_small) {
                this.map.setUIToDefault();
            }
            if (options.scroll_wheel_zoom !== undefined && options.scroll_wheel_zoom) {
                this.map.disableScrollWheelZoom();
            }
        } else {
            this.map.addControl(new GOverviewMapControl());
            this.map.addControl(new GScaleControl());
            this.map.addControl(new GMapTypeControl());
            this.map.addControl(new GLargeMapControl3D());
        }
    }
};

/*
    Create Generic Icon
    *params*
        options = {
            image: String url
            iconSize: GSize
            shadow: String url
            shadowSize: GSize
            iconAnchor: GPoint
            infoWindowAnchor: GPoint
        }
*/
DefaultMap.prototype.SetIcon = function (options) {

    this.icon.image = this.server + '/z/portail/svx/portals/sv6_annonces/images/puce_annonce.png';
    this.icon.iconSize = new GSize(33, 36);
    this.icon.iconAnchor = new GPoint(16, 34);
    this.icon.infoWindowAnchor = new GPoint(20, 0);

    if (options !== undefined) {
        if (options.image !== undefined) {
            this.icon.image = options.image;
        }
        if (options.iconSize !== undefined) {
            this.icon.iconSize = options.iconSize;
        }
        if (options.shadow !== undefined) {
            this.icon.shadow = options.shadow;
        }
        if (options.shadowSize !== undefined) {
            this.icon.shadowSize = options.shadowSize;
        }
        if (options.iconAnchor !== undefined) {
            this.icon.iconAnchor = options.iconAnchor;
        }
        if (options.infoWindowAnchor !== undefined) {
            this.icon.infoWindowAnchor = options.infoWindowAnchor;
        }
    }
};

/*
    Create Generic Marker
    *params*
        options = {
            latitude: Double latitude
            longitude: Double longitude
        }
*/
DefaultMap.prototype.SetMarker = function (options) {

    var marker = new GMarker(new GLatLng(options.latitude, options.longitude), {'icon': this.icon});

    this.map.addOverlay(marker);
};

/*
    Create Generic Polygon
    *params*
        poly = String encoded polyline
        options = {
            colorLine: String color code for the polygon border
            colorPoly: String color code for the polygon filler
            lineOpacity: Double opacity (0 to 1) of the polygon border
            polyOpacity: Double opacity (0 to 1) of the polygon filler
        }
*/
DefaultMap.prototype.SetPoly = function (poly, options) {

    var colorLine = "#EA0B13";
    var colorPoly = "#EA0B13";
    var lineOpacity = 0.7;
    var polyOpacity = 0.2;
    
    if (options !== undefined) {
        if (options.colorLine) {
            colorLine = options.colorLine;
        }
        if (options.colorPoly) {
            colorPoly = options.colorPoly;
        }
        if (options.lineOpacity) {
            lineOpacity = options.lineOpacity;
        }
        if (options.polyOpacity) {
            polyOpacity = options.polyOpacity;
        }
    }

    var polygon = new GPolygon.fromEncoded(
    {
        polylines: [{
            points: poly,
            levels: "1",
            color: colorLine,
            opacity: lineOpacity,
            weight: 3,
            numLevels: 4,
            zoomFactor: 2
        }],
        fill: true,
        color: colorPoly,
        opacity: polyOpacity,
        outline: true
    });

    var centerPoly = polygon.getBounds().getCenter();
    this.map.setCenter(centerPoly);

    this.map.addOverlay(polygon);
};

DefaultMap.prototype.GetMapType = function ( mapType ) {
    // Lets set our map type based on the options
    switch (mapType) {
        case 'map':
            mapType = G_NORMAL_MAP;
        break;
        case 'sat':
            mapType = G_SATELLITE_MAP;
        break;
        case 'hybrid':
            mapType = G_HYBRID_MAP;
        break;
    }
    return mapType;
};

// DRAW POLYGON QUARTIER

DefaultMap.prototype.DrawQuartier = function(options) {
    if (options.libelleQuartier) {
        this.libelleQuartier = options.libelleQuartier;
    }
    if (options.polyQuartier) {
        this.polyQuartier = options.polyQuartier;
    }
    this.splitQuartier = this.polyQuartier.split(', ');
    this.lengthGPS = this.splitQuartier.length;
    // CREATE ARRAY
    this.polygonDraw = new Array();
    for(i = 0; i < this.lengthGPS; i++) {
    	this.splitGPS = this.splitQuartier[i].split(' ');
    	this.polygonDraw.push(new GLatLng(this.splitGPS[1],this.splitGPS[0]));
    }
    // VARS DRAW
	var colorl = '#ff0000';
	var gepais = 3;
	var opacl = 0.6;
	var coloro = '#ff0000';
	var opaco = 0.2;
	// DRAW
    this.drawGmaps = new GPolygon(this.polygonDraw,colorl,gepais,opacl,coloro,opaco);
    this.map.addOverlay(this.drawGmaps);
}

var Map = new DefaultMap();