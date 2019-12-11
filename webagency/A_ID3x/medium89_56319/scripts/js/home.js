$(window).load(function(){

    // ----------------------------------------------------------- //
    // -- STATS
    // ----------------------------------------------------------- //

    $('.stats-nbr-acc').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    $('.stats').owlCarousel({
        mouseDrag: false,
        pullDrag: false,
        nav    : false,
        responsive : {
            0 : {
                touchDrag: true,
                dots : true,
                items: 1
            },
            768 : {
                items: 5,
                dots : false,
                touchDrag: false
            }

        }
    });


    // ----------------------------------------------------------- //
    // -- SKILLS
    // ----------------------------------------------------------- //

    $('.skills').owlCarousel({
        mouseDrag: false,
        pullDrag: false,
        nav    : false,
        responsive : {
            0 : {
                touchDrag: true,
                dots : true,
                items: 1
            },
            768 : {
                items: 3,
                dots : false,
                touchDrag: false
            }

        }
    });


    // ----------------------------------------------------------- //
    // -- BLOG
    // ----------------------------------------------------------- //

    $('.blog').owlCarousel({
        margin: 30,
        nav: true,
        navText : ["<i class='arcloc-icon-arrow-left'></i>", "<i class='arcloc-icon-arrow-right'></i>"],
        responsive : {
            0 : {
                nav: false,
                dots : true,
                items: 1
            },
            440 : {
                items : 2
            },
            680 : {
                items : 3
            },
            1280 : {
                nav: true,
                dots: false
            }
        }

    });

});

// ----------------------------------------------------------- //
// -- RECHERCHE AGENCES
// ----------------------------------------------------------- //

function btnclick(ville,cp){
    $('.agents-form-btn').on('click',function(e){
        var ville = $('.select-ville').find("option:selected").data("ville");
        var cp = $('.select-ville').find("option:selected").data("cp");
        var titre = $('.select-ville').val();
        if( !cp ){
            var cp = $('.select-dept').find(':selected').data("cp");
            var titre = $('.select-dept').val();
        }
        if( !cp ){
            var newUrl = "/agences,liste.htm?titre="+titre;
        }else{
            if( !ville ){
                var newUrl = "/agences,liste.htm?cp="+cp+"&titre="+titre;
            }else{
                var newUrl = "/agences,liste.htm?cp="+cp+"&ville="+ville+"&titre="+titre;
            }
        }
        e.preventDefault();
        document.location.href = newUrl;
    });
}

$(window).load(function() {

    $('.select-dept').val("");
    $('.select-ville').val("");

    $('.select-dept').on('change',function(){
        var cp = $(this).find(':selected').data("cp");
        $('.select-ville').html("");
        $('.select-ville').val("");
        var valeur = $(this).val();
        var xhr = $.ajax({
            type: 'GET',
            data:"cp="+cp,
            dataType: 'html',
            url: '/scripts,ajax_ville.htm',
            beforeSend: function() {
                $('.select-ville').html("<option>Chargement</option>");
                $('.select-ville').prop('disabled', 'disabled');
            },
            success: function(data) {
                if( valeur ){
                    $('.select-ville').prop('disabled', false);
                }else{
                    $('.select-ville').prop('disabled', 'disabled');
                }
                $('.select-ville').html(data);

                var ville = "";
                $('.select-ville').val("");
                btnclick(ville,cp);
                getGeoloc();
            },error:function() {
            },complete:function() {
            }
        });
    });

    $('.select-ville').on('change',function(){
        var ville=$(this).find("option:selected").data("ville");
        var cp=$(this).find("option:selected").data("cp");
        if( !cp ){
            var cp = $('.select-dept').find(':selected').data("cp");
        }
        getGeoloc();
        btnclick(ville,cp);
    });

});
