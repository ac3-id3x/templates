$(window).load(function(){

    // ----------------------------------------------------------- //
    // -- STATS
    // ----------------------------------------------------------- //

    $('.stats-nbr').each(function () {
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


    

});
