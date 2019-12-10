 $(document).ready(function() {
    var containerCarousel = $('.module-annonces-items');
    var args = {
        center: true,
        loop:true,
        margin : 30,
        nav: true,
        navText : ["<i class='mf-icon-arrow-left'></i>", "<i class='mf-icon-arrow-right'></i>"],
        responsive:{
            0 : {
                items: 1,
                navText : ""
            },
            670 : {
                items: 2
            },
            1024 : {
                items  : 3
            },
            1280 : {
                items: $module_items,
                autoplay : $module_autoplay,
                autoplayTimeout : $module_autoplay_delay,
                autoplayHoverPause : $module_autoplay_stop
            }
        }
    };
    var owlModuleAnnonces = containerCarousel.owlCarousel(args);

    if ($module_state == 'fixed') {
        $(window).resize(function() {
            if ( $(window).width() > 767 ) {
                stopCarousel();
            } else {
                startCarousel();
            }
        });
        if ( $(window).width() > 767 ) {
            stopCarousel();
        }

        function stopCarousel(){
            owlModuleAnnonces.trigger("destroy.owl.carousel");
            containerCarousel.removeClass("owl-carousel");
        }
        function startCarousel(){
            containerCarousel.addClass("owl-carousel");
            containerCarousel.owlCarousel(args);
        }
    }
});