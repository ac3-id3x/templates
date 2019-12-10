// MAPS
arrayAnnonce.push({"latitude":detailAnnGeo.lat,"longitude":detailAnnGeo.lon});

function launchBingMap() {
    //layerPoi = new MM.Layer();
    //layerPoi.setZIndex(50);
    // layerInfoBox = new MM.Layer();
    // layerInfoBox.setZIndex(100);
    //pinInfobox = new MM.Infobox(new Microsoft.Maps.Location(0, 0), { visible: false });
    pinAnnonce = null;
    // layerInfoBox.add(pinInfobox);
    if(winW >= tailleW) {
        GetDetailMap(arrayAnnonce,'100%',400,1);
    }else{
        GetDetailMap(arrayAnnonce,'100%',250,1);
    }
    $("[class*='poi-family-']").on('click',function(){
        var idFamily = $(this).attr('id');
        //hidePinFamily(idFamily);
    });
}

// $(window).load(function (){
//     launchBingMap();
// });
//show map
function GetDetailMap(arrayAnnonce,widthCarto,heightCarto,carte) {
    if(heightCarto <= 250) {
        var panning = true;
    }
    // startMap.empty();
        // map = new MM.Map(document.getElementById("map_poi"), {
            // mapTypeId: MM.MapTypeId.road,
            // credentials:MyBingMapsCredentials,
            // isRotationEnabled:true,
            // enableClickableLogo: false,
            // enableSearchLogo: false,
            // showCopyright: false,
            // showDashboard: true,
            // showMapTypeSelector:false,
            // fixedMapPosition:true,
            // disablePanning:panning,
            // useInertia:false,
            // showLogo: false,
            // zoom:zoomPoi,
            // width:widthCarto,
            // height:heightCarto
        // }
    // );
    // map.setView({center:new MM.Location(arrayAnnonce[0].latitude,arrayAnnonce[0].longitude),zoom:zoomPoi});
    // if(carte == 1) {
        // // EVENTS
        // MM.Events.addHandler(map,'dblclick',DoubleClick);
    // }

    // MM.Events.addThrottledHandler(map, 'viewchangeend', initPoi,1);

    // // Hide the infobox when the map is moved.
    // MM.Events.addHandler(map, 'viewchange', hideInfobox);
}
//disable double click
function DoubleClick(e) {
    e.handled = true;
}
//show infobox
function displayInfobox(e){
    var loc = e.target.getLocation(),
        center = new MM.Location(loc.latitude, loc.longitude);

    pinInfobox.setLocation(center);
    pinInfobox.setOptions({title:e.target.Title, visible:true, offset: new Microsoft.Maps.Point(-3,32), maxHeight:60, zIndex:100});

    // pinInfobox.setLocation(e.target.getLocation());
    pinInfobox.setMap(map)
    // layerInfoBox.add(pinInfobox);
};   
//hide infobox              
function hideInfobox(e){
  pinInfobox.setOptions({visible: false});
  // pinInfobox.setOptions({ visible: false });
};
// hide pin by family
function hidePinFamily(idFamily){
    var len = layerPoi.getLength(), entity;
    for(var i = 0; i < len; i++){
        entity = layerPoi.get(i);
        if (entity.Id===idFamily){
            if(entity.getVisible()===true){
                entity.setOptions({visible:false})
            }else{
                entity.setOptions({visible:true})
            }
        }
    }
}
//get and show pin
function initPoi() {
    //clear
    var poi = {
        entityId: [],
        config: {
            key: 'c2ae584bbccc4916a0acf75d1e6947b4',
            pois: [
                {
                    filter: 'EntityTypeID eq \'4013\'',
                    top: 10,
                    icon: '/z/webagency/slagence_X_V5/images/poi/train-station.png'
                },
                {
                    filter: 'EntityTypeID eq \'4170\'',
                    top: 10,
                    icon: '/z/webagency/slagence_X_V5/images/poi/bus-station.png'
                },
                {
                    filter: 'EntityTypeID eq \'5400\'',
                    top: 10,
                    icon: '/z/webagency/slagence_X_V5/images/poi/grocery-store.png'
                },
                {
                    filter: 'EntityTypeID eq \'5800\'',
                    top: 10,
                    icon: '/z/webagency/slagence_X_V5/images/poi/restaurant.png'
                },
                {
                    filter: 'EntityTypeID eq \'6512\'',
                    top: 10,
                    icon: '/z/webagency/slagence_X_V5/images/poi/shopping.png'
                },
                {
                    filter: 'EntityTypeID eq \'7832\'',
                    top: 10,
                    icon: '/z/webagency/slagence_X_V5/images/poi/cinema.png'
                },
                {
                    filter: 'EntityTypeID eq \'7947\'',
                    top: 10,
                    icon: '/z/webagency/slagence_X_V5/images/poi/park.png'
                },
                {
                    filter: 'EntityTypeID eq \'8200\'',
                    top: 10,
                    icon: '/z/webagency/slagence_X_V5/images/poi/higher-education.png'
                },
                {
                    filter: 'EntityTypeID eq \'8211\'',
                    top: 10,
                    icon: '/z/webagency/slagence_X_V5/images/poi/school.png'
                },
                {
                    filter: 'EntityTypeID eq \'8231\'',
                    top: 10,
                    icon: '/z/webagency/slagence_X_V5/images/poi/library.png'
                },
                {
                    filter: 'EntityTypeID eq \'9121\'',
                    top: 10,
                    icon: '/z/webagency/slagence_X_V5/images/poi/city-hall.png'
                },
                {
                    filter: 'EntityTypeID eq \'9530\'',
                    top: 10,
                    icon: '/z/webagency/slagence_X_V5/images/poi/post-office.png'
                },
                {
                    filter: 'EntityTypeID eq \'9532\'',
                    top: 10,
                    icon: '/z/webagency/slagence_X_V5/images/poi/bar.png'
                },
                {
                    filter: 'EntityTypeID eq \'9545\'',
                    top: 10,
                    icon: '/z/webagency/slagence_X_V5/images/poi/department-store.png'
                },
                {
                    filter: 'EntityTypeID eq \'9565\'',
                    top: 10,
                    icon: '/z/webagency/slagence_X_V5/images/poi/pharmacy.png'
                }
            ],
            icons: {                
                theme11: {
                        theme264: '/z/webagency/A_id3x/barth/poi/assets/Pin_Aeroport_01.png',
                        theme21: '/z/webagency/A_id3x/barth/poi/assets/Pin_Bus_01.png',
                        theme246: '/z/webagency/A_id3x/barth/poi/assets/Pin_Autolib_01.png',
                        theme216: '/z/webagency/A_id3x/barth/poi/assets/Pin_Gare-RER_01.png',
                        theme233: '/z/webagency/A_id3x/barth/poi/assets/Pin_Velo_01.png',
                        theme220: '/z/webagency/A_id3x/barth/poi/assets/Pin_Metro_01.png',
                        theme223: '/z/webagency/A_id3x/barth/poi/assets/Pin_Parking_01.png',
                        theme224: '/z/webagency/A_id3x/barth/poi/assets/Pin_ParkingVelo_01.png',
                        theme265: '/z/webagency/A_id3x/barth/poi/assets/Pin_Gare-RER_01.png',
                        theme228: '/z/webagency/A_id3x/barth/poi/assets/Pin_Taxi_01.png',
                        theme232: '/z/webagency/A_id3x/barth/poi/assets/Pin_StationService_01.png',
                        theme221: '/z/webagency/A_id3x/barth/poi/assets/Pin_Ferry_01.png',
                        theme222: '/z/webagency/A_id3x/barth/poi/assets/Pin_Tram_01.png',
                        theme234: '/z/webagency/A_id3x/barth/poi/assets/Pin_Velib_01.png'
                    },
                theme12: {
                        theme249: '/z/webagency/A_id3x/barth/poi/assets/Pin_banque_01.png',
                        theme22: '/z/webagency/A_id3x/barth/poi/assets/Pin_Bar_01.png',
                        theme24: '/z/webagency/A_id3x/barth/poi/assets/Pin_Boucher_01.png',
                        theme25: '/z/webagency/A_id3x/barth/poi/assets/Pin_Boulangerie_01.png',
                        theme227: '/z/webagency/A_id3x/barth/poi/assets/Pin_BureauPoste_01.png',
                        theme219: '/z/webagency/A_id3x/barth/poi/assets/Pin_Marche_01.png',
                        theme250: '/z/webagency/A_id3x/barth/poi/assets/Pin_Presse_01.png',
                        theme226: '/z/webagency/A_id3x/barth/poi/assets/Pin_Restaurant_01.png',
                        theme230: '/z/webagency/A_id3x/barth/poi/assets/Pin_Superette_01.png',
                        theme229: '/z/webagency/A_id3x/barth/poi/assets/Pin_Supermarche_01.png'
                    },
                theme13: {
                        theme218: '/z/webagency/A_id3x/barth/poi/assets/Pin_Casino_01.png',
                        theme23: '/z/webagency/A_id3x/barth/poi/assets/Pin_Cinema_01.png',
                        theme215: '/z/webagency/A_id3x/barth/poi/assets/Pin_Parc_01.png',
                        theme214: '/z/webagency/A_id3x/barth/poi/assets/Pin_Sport_01.png'
                    },
                theme14: {
                        theme26: '/z/webagency/A_id3x/barth/poi/assets/Pin_Education_01.png',
                        theme27: '/z/webagency/A_id3x/barth/poi/assets/Pin_Education_01.png',
                        theme28: '/z/webagency/A_id3x/barth/poi/assets/Pin_Education_01.png',
                        theme29: '/z/webagency/A_id3x/barth/poi/assets/Pin_Education_01.png',
                        theme210: '/z/webagency/A_id3x/barth/poi/assets/Pin_Education_01.png'
                    } ,  
                theme15: {
                        theme212: '/z/webagency/A_id3x/barth/poi/assets/Pin_Bibliotheque_01.png',
                        theme213: '/z/webagency/A_id3x/barth/poi/assets/Pin_Monument_01.png',
                        theme231: '/z/webagency/A_id3x/barth/poi/assets/Pin_Theatre_01.png'
                    },
                theme17: {
                        theme217: '/z/webagency/A_id3x/barth/poi/assets/Pin_Hopital_01.png',
                        theme235: '/z/webagency/A_id3x/barth/poi/assets/Pin_Medecin_01.png',
                        theme236: '/z/webagency/A_id3x/barth/poi/assets/Pin_Medecin_01.png',
                        theme225: '/z/webagency/A_id3x/barth/poi/assets/Pin_Pharmacie_01.png'
                    },      
                theme18: {
                        theme263: '/z/webagency/A_id3x/barth/poi/assets/Pin_Creche_01.png',
                        theme247: '/z/webagency/A_id3x/barth/poi/assets/Pin_Ludotheque_01.png' 
                    },  
                theme19: {
                        theme252: '/z/webagency/A_id3x/barth/poi/assets/Pin_Camping_01.png',
                        theme251: '/z/webagency/A_id3x/barth/poi/assets/Pin_Hotel_01.png',
                        theme254: '/z/webagency/A_id3x/barth/poi/assets/Pin_PointdeVue_01.png'   
                    },
                theme110: {
                        theme256: '/z/webagency/A_id3x/barth/poi/assets/Pin_Services_Publiques_loi_01.png',
                        theme258: '/z/webagency/A_id3x/barth/poi/assets/Pin_Services_Publiques_loi_01.png',
                        theme259: '/z/webagency/A_id3x/barth/poi/assets/Pin_Gendarmerie_01.png',
                        theme248: '/z/webagency/A_id3x/barth/poi/assets/Pin_Mairie_01.png',
                        theme260: '/z/webagency/A_id3x/barth/poi/assets/Pin_Services_Publiques_loi_01.png',
                        theme257: '/z/webagency/A_id3x/barth/poi/assets/Pin_Police_01.png',
                        theme261: '/z/webagency/A_id3x/barth/poi/assets/Pin_Services_Publiques_loi_01.png',
                        theme262: '/z/webagency/A_id3x/barth/poi/assets/Pin_Services_Publiques_loi_01.png'
                    }   
                 
            }     
        },
        loader: function(options) {
            $('[class*="poi-family-"]').addClass('display-none');
            $('.nombrePresent').html('');
            return $.ajax({
                url:'/detail,poi_ajax.htm',
                dataType: "json",
                data: options,
                success: function(data) {
                    if(data.length > 0 && data[0].erreur === undefined){
                        var arrayTheme2 = [];
                        data.forEach(function(item) {
                            arrayTheme2.push(item.id_theme_2);
                            var th1 = 'theme1'+item.id_theme_1;
                            var tht2 = 'theme2'+item.id_theme_2;
                            var icon = poi.config.icons[th1][tht2];
                            pinAnnonce= new MM.Pushpin(new MM.Location(item.lat,item.lon),{icon:icon,height:45,width:35});
                            pinAnnonce.Title= item.nom;
                            pinAnnonce.Id=item.id;
                            // Add handler for the pushpin click event.
                            MM.Events.addHandler(pinAnnonce, 'click', displayInfobox);
                            // push available poi
                            layerName = item.theme_2;
                            layerPoi.add(pinAnnonce);
                        });
                        arrayTheme2.forEach(function(item) {
                            var nbItem = $('input[value="|'+item+'"]').parent().find('.nombrePresent').html();
                            if (nbItem === '') {
                                nbItem = 0;
                            }
                            nbItem++;
                            $('input[value="|'+item+'"]').parent().find('.nombrePresent').html(nbItem);
                        });
                    }
                    
                    // data.d.results.forEach(function(item) {
                    //     pinAnnonce= new MM.Pushpin(new MM.Location(item.Latitude,item.Longitude),{icon:icon,height:45,width:35});
                    //     pinAnnonce.Title=item.Name;
                    //     pinAnnonce.Id=item.EntityTypeID;
                    //     // Add handler for the pushpin click event.
                    //     MM.Events.addHandler(pinAnnonce, 'click', displayInfobox);
                    //     // push available poi
                    //     layerName = item.EntityTypeID;
                    //     if(poi.entityId.indexOf(item.EntityTypeID) === -1){
                    //         poi.entityId.push(item.EntityTypeID);
                    //         // poi show
                    //         poi.show(item.EntityTypeID);

                    //     }else{
                    //         /*window['poi-family-'+item.EntityTypeID].push(pinAnnonce);*/
                    //     }
                    //     //push in global layer
                    //     layerPoi.push(pinAnnonce);
                    // });
                }
            });
        },
        show: function(poi){
            $('.poi-family-'+poi).removeClass('display-none');
        },
        init: function() {
            // reset array
            poi.entityId = [];
            // get bounds
            var bounds = map.getBounds();
            //boundString = 'bbox(' + bounds.getSouth() + ',' + bounds.getWest() + ',' + bounds.getNorth() + ',' + bounds.getEast() + ')';
            // clear layer
            layerPoi.clear();
            // SET VAR THEME 2
            var valischecked = '';
            var familyChecked = '';
            $('.show-poi').find('input:checked').each( function(){
                if($(this).hasClass('poi-family')){
                    familyChecked += ','+$(this).val();
                    familyChecked = familyChecked.replace('|','')
                }else{
                    valischecked += ','+$(this).val();
                    valischecked = valischecked.replace('|','') 
                }      
            });
            var theme1 = familyChecked ;
            if (valischecked === ''){
                var theme2 = '';
            }else{
                var theme2 = '.' + valischecked ;
            }
            
            var theme = theme1 + theme2 ;
            // set item
            poi.loader({
                theme: theme,
                max_lon: bounds.getSoutheast().longitude,
                min_lon: bounds.getNorthwest().longitude,
                max_lat: bounds.getNorthwest().latitude,
                min_lat: bounds.getSoutheast().latitude,
                format: 'json',
            });
            // poi.config.pois.forEach(function(item) {
            //     poi.loader({
            //         key:MyBingMapsCredentials,
            //         $format:'json',
            //         spatialFilter: boundString,
            //         $filter: item.filter,
            //         $top: item.top || 10,
            //     }, item.icon);
            // });
            // push in map
            map.layers.insert(layerPoi);
            // map.layers.insert(layerInfoBox);
        }
    }
    poi.init();
};


function chkClick($this) {
    if($($this).find('input').is(':checked')){
        $($this).find('.miniature').addClass('display-none');
        $($this).find('.miniature2').removeClass('display-none');
    }else{
        $($this).find('.nombrePresent').html('');
        $($this).find('.miniature').removeClass('display-none');
        $($this).find('.miniature2').addClass('display-none'); 
    }
    initPoi();
  
}
function selectCat($this) {
    var ischecked = 0;
    $($this).parent().parent().next('dt').find('input').each(function(){
        if($(this).is(':checked')){
            ischecked++;
        }else{
            ischecked = 0;
        }
    })
    if(ischecked === 0){
        $($this).parent().parent().next('dt.catContent').find('input').each(function(){
            $(this).prop('checked', true);
            $(this).parent().find('.miniature').addClass('display-none');
            $(this).parent().find('.miniature2').removeClass('display-none');
        })
    }else{
         $($this).parent().parent().next('dt.catContent').find('input').each(function(){
            $(this).prop('checked', false);
            $(this).find('.nombrePresent').html('');
            $(this).parent().find('.miniature2').addClass('display-none');
            $(this).parent().find('.miniature').removeClass('display-none');
        })
    }
    initPoi();
}