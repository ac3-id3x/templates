$(document).ready(function() {

    /* ==========================================================================
== SCROLL SUR ANCRES ==
========================================================================== */

    $('a[href^="#"]').click(function(){
        var the_id = $(this).attr("href");

        $('html, body').animate({
            scrollTop:$(the_id).offset().top
        }, 'slow');
        return false;
    });



    /* ==========================================================================
== VIDEO HOME ==
========================================================================== */

    $('.section-home-play').click(function(e) {
        $('.video-home').show(0, function() {
            $('.video-container').html(' <iframe width="70%" height="720" src="https://www.youtube.com/embed/VRIGQdXkLxU?autoplay=1&rel=0" frameborder="0" allowfullscreen></iframe>');
            window.onYouTubeIframeAPIReady();

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




    /* ==========================================================================
== ANIM AU SCROLL ==
========================================================================== */

    if( $.fn.viewportChecker ){
        $(".animate").addClass("anim-hide").viewportChecker({
            classToAdd: "anim-show animated fadeInUp",
            offset: 100
        });
    }



    /* ==========================================================================
== SLIDES SUR SECTION POLIRIS ==
========================================================================== */

    if( $.fn.owlCarousel ){

        var params = {
            navigation : true,
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem:true,
            pagination:false,
            navigationText :["",""],
            rewindNav: false
        };

        $("#poliris-slides").owlCarousel(params);


        function refreshOwl(){
            var owl = $("#poliris-slides");
            if ( $(window).width() <= 1024 ) {
                if( owl.data('owlCarousel') ){
                    owl.data('owlCarousel').destroy();
                    owl.removeClass('owl-carousel');
                }
                $(".animate").removeClass("anim-hide");
            }else{
                $(".animate").addClass("anim-hide");
                if( !owl.data('owlCarousel') ){
                    owl.owlCarousel(params);
                }
            }
        }

        $(document).ready(refreshOwl);
        $(window).resize(refreshOwl);

    }

    /* ==========================================================================
== HOVER AU SCROLL SUR NAV FIXE  ==
========================================================================== */

    if($("#home").length) {

        $(".nav-fixe-home").addClass('active');
        $(window).scroll(function(event) {
            if($("#home").offset().top < $(window).scrollTop() + $(window).outerHeight()) {
                $(".nav-fixe-home").addClass('active');
                $(".nav-fixe-avantages").removeClass('active');
                $(".nav-fixe-fonctionnalites").removeClass('active');
                $(".nav-fixe-cta").removeClass('active');
                $(".nav-fixe-poliris").removeClass('active');
            }
            if($("#avantages").offset().top < $(window).scrollTop() + $(window).outerHeight()){
                $(".nav-fixe-avantages").addClass('active');
                $(".nav-fixe-home").removeClass('active');
                $(".nav-fixe-fonctionnalites").removeClass('active');
                $(".nav-fixe-cta").removeClass('active');
                $(".nav-fixe-poliris").removeClass('active');
            }
            if($("#fonctionnalites").offset().top < $(window).scrollTop() + $(window).outerHeight()){
                $(".nav-fixe-fonctionnalites").addClass('active');
                $(".nav-fixe-avantages").removeClass('active');
                $(".nav-fixe-home").removeClass('active');
                $(".nav-fixe-cta").removeClass('active');
                $(".nav-fixe-poliris").removeClass('active');
            }
            if($("#cta").offset().top < $(window).scrollTop() + $(window).outerHeight()){
                $(".nav-fixe-cta").addClass('active');
                $(".nav-fixe-avantages").removeClass('active');
                $(".nav-fixe-fonctionnalites").removeClass('active');
                $(".nav-fixe-home").removeClass('active');
                $(".nav-fixe-poliris").removeClass('active');
            }
            if($("#poliris").offset().top < $(window).scrollTop() + $(window).outerHeight()){
                $(".nav-fixe-poliris").addClass('active');
                $(".nav-fixe-avantages").removeClass('active');
                $(".nav-fixe-fonctionnalites").removeClass('active');
                $(".nav-fixe-cta").removeClass('active');
                $(".nav-fixe-home").removeClass('active');
            }
        });
    }


    /* ==========================================================================
== NAV RESPONSIVE ==
========================================================================== */

    $(".nav-mobile-show").click(function() {
        $(".nav-mobile").slideToggle("fast");
    });



    /* ==========================================================================
== FAQ ==
========================================================================== */

    $(".faq-question a").click(function() {
        $(this).parent().toggleClass("faq-question-active");
        $(this).next().slideToggle("fast");
    });


});
