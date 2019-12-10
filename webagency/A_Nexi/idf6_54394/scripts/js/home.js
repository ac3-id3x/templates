$(window).load(function(){

    /* -------------------------------------------------------------------------*/
    /* -- NAVIGATION HOME */
    /* -------------------------------------------------------------------------*/

    $('.homenav .has-sub').click(function(){

        var sub_id = $(this).attr("data-sub");

        if ($(this).hasClass("is-active")) {
            $('.homenav a').removeClass('is-active');
        } else {
            $('.homenav a').removeClass('is-active');
            $(this).addClass("is-active");
        }

        if ($("#"+sub_id).hasClass("is-open")) {
            $('.homenav-sub').removeClass('is-open');
        } else {
            $('.homenav-sub').removeClass('is-open');
            $("#"+sub_id).addClass("is-open");
        }

    });


    /* -------------------------------------------------------------------------*/
    /* -- MODULE HOME */
    /* -------------------------------------------------------------------------*/

    $('.module-homepage-list').owlCarousel({
            loop              : true,
            autoplay          : true,
            margin            : 20,
            autoplayTimeout   : 8000,
            autoplayHoverPause: true,
            autoplaySpeed: 1000,
            nav: true,
            navText           : ["<", ">"],
            responsive : {
                0 : {
                    items : 1,
                    dots : true
                },
                480 : {
                    items : 2
                },
                768 : {
                    items : 3,
                    dots : false
                }
            }
        })


    /* -------------------------------------------------------------------------*/
    /* -- AVIS CLIENTS */
    /* -------------------------------------------------------------------------*/


    $('.tem').owlCarousel({
        loop              : true,
        dots              : false,
        items             : 1,
        autoplay          : true,
        autoplayTimeout   : 6000,
        autoplayHoverPause: true,
        autoplaySpeed: 1000,
        nav: true,
        navText           : ["<", ">"]
    })


});