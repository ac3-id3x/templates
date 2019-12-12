SLG.POIMap.Controller = (function($, Mustache, POI, QypeQuery, POIMap){

    var defaultOptions = {
        containerId : 'map',
        width : 459,
        height : 225,
        poiData : {}
    }
    
    
    function init(options)
    {
        options = $.extend(defaultOptions, options); 
        
        // Render POI list
        var template = $('#poi-list-template').html();
        var html = Mustache.to_html(template, options.poiData);
        $('#poi-list').html(html);
         
        // Global vars
        var latitude = $("input[name=latitude]").val();
        var longitude = $("input[name=longitude]").val();
     
        // Create the map
        var map = new POIMap(options.containerId, {
            width : options.width, 
            height : options.height,
            zoom : 13,
            latitude : latitude,
            longitude : longitude,
            poiData   : options.poiData
        });
       
        // A POI list classified by categoryId
        var markers = {}
        
        map.init();
        
        // We listen poi checkbox updates to refresh the POI list on the map
        $(".poi-list > li > input[type=checkbox]").on("click", function(ev, params){
           
            var target = ev.currentTarget;
            var categoryId = $(target).val();   
            var checked = false; 
            
            // If we have params it's a top level click we should handle that with a particular treatment...
            if(params)
            {
                checked = params.topLevelChecked;
            }
            else
            {
                checked = $(target).is(":checked");
            
                // If it's unchecked, we uncheck the parent
                if(!checked)
                {
                    $(this).closest("ul.poi-list").siblings(".poi-group-checkbox").attr("checked", false);
                }
            }
            
            // Get poi list to put on the map if the checkbox is checked or if the top level checkbox has been checked
            if(checked)
            {
                // Build a new Qype query with categoryId value
                var qypeQuery = new QypeQuery(latitude, longitude, categoryId);
                
                POI.findAll(qypeQuery.url,
                    //SUCCESS
                    function(pois){
                        
                        if(map)
                        {
                            for(var i in pois)
                            {
                                // Add the categoryId and the icon for later use
                                pois[i].categoryId = categoryId;
                                
                                // We add the marker and return the location 
                                var location = map.addPOIMarker(pois[i]);
        
                                // If the list for the cateogry id doesn't exists, we create it before
                                if(!markers[categoryId])
                                {
                                    markers[categoryId] = [];
                                }
                                
                                // Add the marker in the right category (useful to remove markers later
                                markers[categoryId].push(location);
                            }
                        }     
                    },
                    // ERROR
                    function(){
                    
                });
            }
            // We remove all markers of the given categoryId
            else
            {
                var markersCategory = markers[categoryId];
             
                for(var i in markersCategory)
                {
                    map.removePOIMarker(markersCategory[i]);
                }
            }
            
        });
        
        // We listen to top level checkbox
        $(".poi-list-group > li > input[type=checkbox]").on("click", function(ev){
       
            // When a top level checkbox is checked, 
            // we check all children checkboxes and trigger an event to simulate the user click
            
            var target = ev.currentTarget;
    
            var poiCheckboxList = $(target).siblings("ul.poi-list").find("input[type=checkbox]");
            
            poiCheckboxList.each(function(index, checkbox)
            {
                // We change the state of the child checkbox, only if the state is different of top level checkbox
                if(checkbox.checked != target.checked)
                {
                    $(checkbox).trigger("click", [{'topLevelChecked' : target.checked}]);
                }
            });
        });
        
        // We listen the show all poi button
        $("#show-all-poi-button").on("click", function(ev) {
        
            $(".poi-list-group > li.hidden").removeClass("hidden");
            $("#map_poi").addClass("expanded");
            $(this).remove();
            
        });
    
    }
    
    return {
        init : init
    }
    

})($ || $j, Mustache, SLG.POIMap.POI, SLG.POIMap.QypeQuery, SLG.POIMap.POIMap);