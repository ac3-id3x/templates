var delay = false;

$(document).ready(function() {

    /* =============================
== NAV RESPONSIVE ==
==============================*/

    $(".nav-mobile-show").click(function() {
        $(".nav-mobile").slideToggle("fast");
    });



    /* =============================
== VIDEO HOME ==
==============================*/

    $('.btn-home-video').click(function(e) {
        $('.video-home').show(0, function() {
            $('.video-container').html(' <iframe width="50%" height="50%" src="https://www.youtube.com/embed/bRGQxQgI5xo?autoplay=1&rel=0" frameborder="0" allowfullscreen></iframe>');
            var w = $('.video-container').find("iframe").width();
            var h = w * 0.5625;
            $('.video-container').find("iframe").height( h );
        });
    });

    $(".video-home-close").click(function() {
        $('.video-home').hide(0,function() {
            $('.video-container').html('');
        });
    });



    /* =============================
== VIDEOS SECTION ==
==============================*/
        var iframevideo1 = '<iframe width="853" height="480" src="https://www.youtube.com/embed/bRGQxQgI5xo?rel=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>';
        var iframevideo2 = '<iframe width="853" height="480" src="https://www.youtube.com/embed/RN7A_Czbh2o?rel=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>';
    $('.content-video-1 .video-thumb').click(function(e) {
        $(this).fadeOut("fast");
        $('.content-video-1 > .video-wrap').show("fast", function() {
            $(this).html(iframevideo1);
        });
    });

    $('.content-video-2 .video-thumb').click(function(f) {
        $(this).fadeOut("fast");
        $('.content-video-2 > .video-wrap').show("fast", function() {
            $(this).html(iframevideo2);
        });
    });


    /* =============================
== ANIMATIONS ==
==============================*/
    if ( $(window).width() >= 1024 ) {

        $(".home-arrow").addClass("anim-hide").viewportChecker({
            classToAdd: "anim-show animated fadeInUp",
            repeat: true,
            offset: -800
        });

        $(".animate-fadedown").addClass("anim-hide").viewportChecker({
            classToAdd: "anim-show animated fadeInDown",
            repeat: true,
            //offset: 65
        });

        $(".animate-fadeup").addClass("anim-hide").viewportChecker({
            classToAdd: "anim-show animated fadeInUp",
            repeat: true,
            //offset: -150
        });

        $(".animate-fadeleft").addClass("anim-hide").viewportChecker({
            classToAdd: "anim-show animated fadeInLeft",
            repeat: true,
            //offset: -150
        });

        $(".animate-faderight").addClass("anim-hide").viewportChecker({
            classToAdd: "anim-show animated fadeInRight",
            repeat: true,
            //offset: -150
        });

    }



    /* =============================
== CAROUSELS  ==
==============================*/


    var paramPoliris = {
        navigation : true,
        navigationText : ["<img src='/z/portail/poliris_2011/minisite/avis/img/picto-arrow-left2.png'>","<img src='/z/portail/poliris_2011/minisite/avis/img/picto-arrow-right2.png'>"],
        slideSpeed : 300,
        pagination: false,
        autoPlay: 4000,
        singleItem:true,
        rewindNav: true
    };



    $(".client-carousel").owlCarousel({
        navigation : true,
        navigationText : ["<img src='/z/portail/poliris_2011/minisite/avis/img/picto-arrow-left.png'>","<img src='/z/portail/poliris_2011/minisite/avis/img/picto-arrow-right.png'>"],
        slideSpeed : 300,
        pagination: false,
        autoPlay: true,
        singleItem:true
    });


    $(".poliris-carousel").owlCarousel(paramPoliris);

    function refreshOwl(){
        var owl = $(".poliris-carousel");
        if ( $(window).width() <= 1023 ) {
            if( owl.data('owlCarousel') ){
                owl.data('owlCarousel').destroy();
                owl.removeClass('owl-carousel');
            }
            $(".animate").removeClass("anim-hide");
        }else{
            $(".animate").addClass("anim-hide");
            if( !owl.data('owlCarousel') ){
                owl.owlCarousel(paramPoliris);
            }
        }
    }

    $(document).ready(refreshOwl);
    $(window).resize(refreshOwl);




    /* ==========================================================================
== HOVER AU SCROLL SUR NAV  ==
========================================================================== */
    if ( $(window).width() >= 1024 ) {
        if($("#home").length) {

            $(".nav-fixe-home").addClass('active');
            var offset = $(".header").outerHeight();

            $(window).scroll(function(event) {

                sT = $(window).scrollTop();
                if($("#home").offset().top <= $(window).scrollTop() + $(window).outerHeight() - offset - 1) {
                    $(".nav-fixe").find("a").removeClass("active");
                    $(".nav").find("a").removeClass("active");
                    $(".nav-fixe-home").addClass('active');
                }
                if($("#video").offset().top <= $(window).scrollTop() + $(window).outerHeight() - offset - 1){
                    $(".nav-fixe").find("a").removeClass("active");
                    $(".nav").find("a").removeClass("active");
                    $(".nav-fixe-video").addClass('active');
                    $(".nav-link-video").addClass('active');
                }
                 if($("#plus").offset().top <= $(window).scrollTop() + $(window).outerHeight() - offset - 1){
                    $(".nav").find("a").removeClass("active");
                    $(".nav-link-plus").addClass('active');
                }
                if($("#client").offset().top <= $(window).scrollTop() + $(window).outerHeight() - offset - 1){
                    $(".nav-fixe").find("a").removeClass("active");
                    $(".nav").find("a").removeClass("active");
                    $(".nav-fixe-client").addClass('active');
                    $(".nav-link-client").addClass('active');
                }
                if($("#cta").offset().top <= $(window).scrollTop() + $(window).outerHeight() - offset - 1){
                    $(".nav-fixe").find("a").removeClass("active");
                    $(".nav").find("a").removeClass("active");
                    $(".nav-fixe-cta").addClass('active');
                }
                if($("#poliris").offset().top <= $(window).scrollTop() + $(window).outerHeight() - offset - 1){
                    $(".nav-fixe").find("a").removeClass("active");
                    $(".nav").find("a").removeClass("active");
                    $(".nav-fixe-poliris").addClass('active');
                    $(".nav-link-poliris").addClass('active');
                }

                if(sT == 0) {
                    $(".nav-fixe").find("a").removeClass("active");
                    $(".nav").find("a").removeClass("active");
                    $(".nav-fixe-home").addClass('active');
                }

                if(  sT > parseInt( $('.content-video-1').offset().top + $('.content-video-1').outerHeight()  - offset ) || sT  <  parseInt( $('.section-video').offset().top - $('.content-video-1').outerHeight() )  ){
                      $('.content-video-1 > .video-wrap').html("");
                     $('.content-video-1 .video-thumb').fadeIn("fast");
                }
                if(  sT > parseInt( $('.content-video-2').offset().top + $('.content-video-2').outerHeight()  - offset ) || sT  <  parseInt( $('.content-video-2').offset().top - $('.content-video-2').outerHeight()  - offset )  ){
                    $('.content-video-2 > .video-wrap').html("");
                    $('.content-video-2 .video-thumb').fadeIn("fast");
                }
                if( sT == parseInt($('.section-client').offset().top - offset + 1) ){
                     $('.content-video-2 .video-thumb').click();
                }
                if( sT == parseInt($('.section-video').offset().top - offset + 1) ){
                     $('.content-video-1 .video-thumb').click();
                }

            });
        }
    }



    /* =============================
== NAV PAR ANCRE ==
==============================*/

    if ( $(window).width() >= 1024 ) {

        $(document).on('mousewheel DOMMouseScroll', function(event) {
            event.preventDefault();
            var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;
            pagescroll(wd);
        });

        $(document).on('mousewheel DOMMouseScroll', function(event) {
            event.preventDefault();
            var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;
            pagescroll(wd);
        });

        $(document).keydown(function(e){
            // Flèche gauche : 37 ; g : 71 Fleche haut 38
            if (e.keyCode == 37 || e.keyCode == 71 || e.keyCode == 38) {
                event.preventDefault();
                pagescroll(2);
            }

            // Flèche droite : 39 ; d : 68 fleche bas 40
            if (e.keyCode == 39 || e.keyCode == 68 || e.keyCode == 40) {
                event.preventDefault();
                pagescroll(-2);
            }
        });
    }


});

if ( $(window).width() >= 1024 ) {

    function pagescroll(wd) {

        if(delay) return;
        delay = true;
        setTimeout(function(){delay = false},200);

        var a = $(".ancre");

        // descente
        if(wd < 0) {
            for(var i = 0 ; i < a.length ; i++) {
                var t = a[i].getClientRects()[0].top;
                if(t >= 40) break;
            }
        }else{ // montée
            for(var i = a.length-1 ; i >= 0 ; i--) {
                var t = a[i].getClientRects()[0].top;
                if(t < -20) break;
            }
        }

        if( i > -1 ){
            $('html,body').animate({
                scrollTop: a[i].offsetTop
            }, 0);
        }else{
            $('html,body').animate({
                scrollTop:0
            }, 0);
        }
    }
}
