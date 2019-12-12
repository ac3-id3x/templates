SLG.POIMap.POI = (function($){

    /**
     * POI Object
     *
     * This objet is asynchronous and should be initialized with a qype request
     *
     * @param {Object} qypeQuery
     *
     */
    var POI = function(latitude, longitude, icon)
    {
        this.latitude   = latitude;
        this.longitude  = longitude;
        this.icon       = icon;   
    }


    /*
     * Find all POI found at given url
     *
     * @param {url} String the url where send the request
     * @param {Function} success the function to execute on success
     * @param {Function} error the function to execute on error
     */
    POI.findAll = function(url, success, error)
    {
        $.getJSON(url, function(data) {
            if (data.ok) {
                
                // Find all should always modelize data before retrieving
                var models = POI.models(data);
                
                if($.isFunction(success))
                {
                    success(models);
                }
            }
            else
            {
                if($.isFunction(error))
                {
                    error();
                }
            }
        });
    }


    /*
     * Create a list of POI with given data
     *
     * @param {Object} data JSON data
     * @return {Object} poi objects list
     */
    POI.models = function(data)
    {
        var models = [];
        
        for(var i = 0, n = data.results.length; i < n; i++)
        {
            var poi = new POI();
            
            var poiData = data.results[i];
            var point = poiData.place.point.split(',');
            poi.latitude = point[0];
            poi.longitude = point[1];
            
            // Merge poi data in poi
            $.extend(poi, poiData.place);
            
            models.push(poi);
        }
        
        return models;
    }
    
    POI.prototype = {
        constructor : POI
    }
    
    return POI;
    
})($ || $j);