// Render POI list
var template = $('#poi-list-template').html();
var html = Mustache.to_html(template, poiData);
$('#poi-list').html(html);

// Global vars
var latitude = $("input[name=latitude]").val();
var longitude = $("input[name=longitude]").val();
var coordonnees = $("input[name=coordonnees]").val();

// Create the map
var map = new POIMap('poi-map', {
    width : 617, 
    height : 205,
    zoom : 13,
    latitude : latitude,
    longitude : longitude,
    poiData   : poiData,
    coordonnees : coordonnees
});

// A POI list classified by categoryId
var markers = {}

map.init();


// We listen poi checkbox updates to refresh the POI list on the map
$(".poi-list li input[type=checkbox]").on("click", function(ev){
    
    var target = ev.currentTarget;
    var categoryId = $(target).val();
    var checked = $(target).is(":checked");
    
    // Change parent checkbox state
    // It doesn't work, we should to do that later...
    //$(target).closest(".poi-list").prev().get().checked = false;
    
    
    // Get poi list to put on the map
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
                        // Add the categoryId for later use
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
$(".poi-list-group li input[type=checkbox]").on("click", function(ev){
    
    // When a top level checkbox is checked, 
    // we check all children checkboxes and trigger an event to simulate the user click
    
    var target = ev.currentTarget;
    var poiCheckboxList = $(target).next("ul").find("input[type=checkbox]");
    
    poiCheckboxList.each(function(index, checkbox)
    {
        $(checkbox).trigger("click");
    });
});