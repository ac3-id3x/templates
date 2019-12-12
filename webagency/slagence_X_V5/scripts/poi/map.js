SLG.Map = (function($, Microsoft){
    
    
    /**
     * Custom map class
     * 
     * @param {String} containerId the container where to initialize the map
     * @param {Object} options options to initialize the object
     *
     */
    function Map(containerId, options)
    {
        var defaultOptions = {
            enableSearchLogo: false,
            showDashboard: true,
            showMapTypeSelector: false,
            credentials: "AhYyQwWjoRmhx98-vxFv59TwTLkRj_bfDj8ODnzjIWnCe6UbCUzRNkq6M9XZMIpd"
        };
        
        // Internal vars
        this.containerId = containerId;
        this.options = $.extend(defaultOptions, options);
        this.map = null;
    }
    
    
    /**
     * Custom map class
     *
     * @return {Microsoft.Maps.Map}
     */
    function init()
    {
        this.map = new Microsoft.Maps.Map(document.getElementById(this.containerId), {
            width : this.options.width, 
            height : this.options.height,
            zoom : this.options.zoom,
            center : new Microsoft.Maps.Location(this.options.latitude, this.options.longitude),
            credentials: this.options.credentials,
            enableSearchLogo : this.options.enableSearchLogo,
            showDashboard : this.options.showDashboard,
            showMapTypeSelector : this.options.showMapTypeSelector
        });
        
        var pin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(this.options.latitude, this.options.longitude), {icon:"/z/produits/sl9/base/new_detail/img/pin.png", height:50, width:50, anchor:new 
Microsoft.Maps.Point(0,50), draggable: true});
        this.map.entities.push(pin);
        
        // Disable mousewheel
        Microsoft.Maps.Events.addHandler(this.map, 'mousewheel',function(ev){ 
            ev.handled = true;
        }); 
    
        return this.map;
    }
    
    Map.prototype = {
        constructor : Map,
        init : init
    }
    
    return Map;
    
})($ || $j, Microsoft);