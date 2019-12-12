SLG.POIMap.POIMap = (function($, Microsoft, Map){


    
    /* POIMap
     *
     * @param {String} containerId
     * @param {Object} options (width, height, zoom, latitude, longitude, poiData) 
     *
     */
    
    function POIMap(containerId, options)
    {
        this.containerId = containerId;
        this.options = $.extend(this.options, options);
        
        
        /***************************************************************/
        /***************************************************************/
        /***************** PRIVILEGIED METHODS *************************/
        /***************************************************************/
        /***************************************************************/
        
        /*
         * Get the matching icon for the given POI category in poi data
         *
         * @param {int} categoryId
         * @return {String} url
         */
        this.getIconByCategoryId = function(categoryId)
        {
            if(this.options.poiData)
            {
                // We fetch all POI groups to find the POI
                for(var i = 0, n = this.options.poiData.poiGroups.length; i < n; i++)
                {
                    var poiList = this.options.poiData.poiGroups[i].poiList;
                    
                    for(var j = 0, o = poiList.length; j < o; j++)
                    {
                        if(poiList[j]["categoryId"] == categoryId)
                        {
                            return poiList[j]["icon"];
                        }
                    }
                }
            }
            
            return null;
        }
    }
    
    /**
     * Adds a POI marker on the map
     * 
     * @param {POI} poi
     * @param {int} pos
     * @param {Object} options additional poi options (icon, etc.)
     *
     */
    function addPOIMarker(poi)
    {
        // Map should be init before
        if(this.map)
        {
            var location = new Microsoft.Maps.Location(poi.latitude, poi.longitude);
            
            var infobox = createInfoBox(poi);  
            
            var icon = this.getIconByCategoryId(poi.categoryId);
            
            var pushpinOptions = {
                infobox : infobox,
                icon : icon
            };
              
            var pushpin = new Microsoft.Maps.Pushpin(location, pushpinOptions);

            this.map.entities.push(pushpin);
            this.map.entities.push(infobox);
            
            // Add handler for the pushpin click event.
            Microsoft.Maps.Events.addHandler(pushpin, 'click', $.proxy(showInfoBox, this));
            
            return location;
        }
        
        return null;
    }
    
    /**
     * Removes a POI marker on the map
     * 
     * @param {Microsoft.Maps.Location} the location of the marker on map
     *
     */
    function removePOIMarker(location)
    {
        for(var i = 0, n = this.map.entities.getLength(); i < n; i++)
        {
            var pushpin= this.map.entities.get(i);
            
            if (pushpin instanceof Microsoft.Maps.Pushpin) 
            {
                var pushpinLocation = pushpin.getLocation();
                
                if(pushpinLocation.latitude == location.latitude && pushpinLocation.longitude == location.longitude)
                {   
                    this.map.entities.removeAt(i);
                }
            }
        }
        
        // We have to use apply because hideAllInfoxBox is not declared in the same context than removePOIMarker
        hideAllInfoBox.apply(this);
    }
    
    /**
     * Creates an infobox with POI data
     * 
     * @param {POI} poi
     *
     */
    function createInfoBox(poi)
    {
        var template = $('#infobox-template').html();
        
        var html = Mustache.to_html(template, poi);
        
        var location = new Microsoft.Maps.Location(poi.latitude, poi.longitude);
        
        var options = {
            width : 300,
            height : 200,
            visible : false
        };
        
        var infoBox = new Microsoft.Maps.Infobox(location, options);
        
        infoBox.setHtmlContent(html);
      
        return infoBox;
    }
    
    
    /**
     * Hide infobox
     * 
     * @param {Event} ev
     *
     */
    function hideAllInfoBox()
    {
        var entities = this.map.entities;

        for(var i = 0, n = entities.getLength(); i < n; i++)
        {        
            var entity = entities.get(i);
    
            if(entity instanceof Microsoft.Maps.Infobox)
            {
                entity.setOptions({visible : false});
            }
        }
    }
    
    
    /**
     * Show infobox
     * 
     * @param {Event} ev
     *
     */
    function showInfoBox(ev)
    {
        var infoBox = ev.target.getInfobox();
        
        hideAllInfoBox.apply(this);
        
        infoBox.setOptions({visible : true});
    }
    
    
    /*
     * POIMap inherits SLMap
     */
    $.extend(POIMap.prototype, new Map());

    POIMap.prototype.addPOIMarker = addPOIMarker;
    POIMap.prototype.removePOIMarker = removePOIMarker;
    
    return POIMap;
    
})($ || $j, Microsoft, SLG.Map);    