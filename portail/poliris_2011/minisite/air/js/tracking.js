/* ==========================================================================
== TRACKING GA ==
========================================================================== */

$(document).ready(function() {

    // MENU PRINCIPAL
    $('.trck-poliris-menu').on('click',function() {
        ga("send", "event", "Menu" , "click" , "Poliris");
    });

    $('.trck-demo-menu').on('click',function() {
        ga("send", "event", "Menu" , "click" , "Demandez une demo");
    });

    $('.trck-contact-menu').on('click',function() {
        ga("send", "event", "Menu" , "click" , "Contactez-nous");
    });

    $('.trck-login-menu').on('click',function() {
        ga("send", "event", "Menu" , "click" , "Se Connecter");
    });


    // SLIDE 1
    $('.trck-demo-slide1').on('click',function() {
        ga("send", "event", "Slide1" , "click" , "Demandez une demo");
    });

    $('.trck-voir-video-slide1').on('click',function() {
        ga("send", "event", "Slide1" , "click" , "Voir la video");
    });

    $('.trck-decouvrir-pa').on('click',function() {
        ga("send", "event", "Slide1" , "click" , "Decouvrir PA", "Section-Scroll" ) ;
    });


    // SLIDE 2
    $('.trck-vos-clients').on('click',function() {
        ga("send", "event", "Slide2" , "click" , "Vos clients" , "Section-Scroll") ;
    });


    // SLIDE 3
    $('.trck-demo-slide3').on('click',function() {
        ga("send", "event", "Slide3" , "click" , "Demandez une demo") ;
    });


    // SLIDE 4
    $('.trck-echange-pa-slide4').on('click',function() {
        ga("send", "event", "Slide4" , "click" , "Echanger autour de Pericles Air") ;
    });

    $('.trck-demo-slide4').on('click',function() {
        ga("send", "event", "Slide4" , "click" , "Demandez une demo") ;
    });

    $('.trck-qr-slide4').on('click',function() {
        ga("send", "event", "Slide4" , "click" , "Questions/Reponses") ;
    });


    // SLIDE 5
    $('.owl-next').on('click',function() {
        ga("send", "event", "Slide5" , "click" , "Decouvrez nos solutions") ;
    });


    // FOOTER
    $('.trck-facebook').on('click',function() {
        ga("send", "event", "Footer" , "click" , "Facebook") ;
    });

    $('.trck-youtube').on('click',function() {
        ga("send", "event", "Footer" , "click" , "Youtube") ;
    });

    $('.trck-linkedin').on('click',function() {
        ga("send", "event", "Footer" , "click" , "Linkedin") ;
    });

    $('.trck-poliris').on('click',function() {
        ga("send", "event", "Footer" , "click" , "Poliris") ;
    });

    $('.trck-contactez-nous').on('click',function() {
        ga("send", "event", "Footer" , "click" , "Contactez-nous") ;
    });

    $('.trck-seloger').on('click',function() {
        ga("send", "event", "Footer" , "click" , "seloger") ;
    });


    // FAQ
    $('.trck-demo-faq').on('click',function() {
        ga("send", "event", "FAQ" , "click" , "Demandez une demo") ;
    });

    $('.trck-contactez-nous-faq').on('click',function() {
        ga("send", "event", "FAQ" , "click" , "Contactez-nous") ;
    });

    // DEMO
    $('.trck-formulaire-envoyer').on('click',function() {
        ga("send", "event", "FAQ" , "click" , "Envoyer") ;
    });


});
