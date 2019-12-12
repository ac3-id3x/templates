/**
 * Custom map class
 * 
 * @param {String} containerId the container where to initialize the map
 * @param {Object} options options to initialize the object
 *
 */
var SLMap = function(containerId, options)
{
    // Internal vars
    this.map = undefined;
    this.credentials = "AhYyQwWjoRmhx98-vxFv59TwTLkRj_bfDj8ODnzjIWnCe6UbCUzRNkq6M9XZMIpd";
    
    this.containerId = containerId;
    this.options = options;
}


/**
 * Custom map class
 *
 * @return {Microsoft.Maps.Map}
 */
SLMap.prototype.init = function()
{
    this.map = new Microsoft.Maps.Map(document.getElementById(this.containerId), {
        width : this.options.width, 
        height : this.options.height,
        zoom : this.options.zoom,
        center : new Microsoft.Maps.Location(this.options.latitude, this.options.longitude),
        credentials: this.credentials,
        enableClickableLogo : false,
        enableSearchLogo : false,
        showCopyright : false,
        showScalebar : false,
        disableZooming : true
    });
    if ( this.options.coordonnees === "adr") {
        var location = new Microsoft.Maps.Location(this.options.latitude, this.options.longitude),
            pushpin = new Microsoft.Maps.Pushpin(location,{
                icon: "/z/produits/sl/sv6_annonces/new_recherche/img/picto_marker_map.png",
                id: "adresse",
                typeName : 'pushpin',
                textOffset: new Microsoft.Maps.Point(0, 0)
            });

        this.map.entities.push(pushpin);
    }
    return this.map;
}