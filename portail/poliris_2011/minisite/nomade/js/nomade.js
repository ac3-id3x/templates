$(document).ready(function(){

    // FANCYBOX
    $(".fancybox").fancybox({
        padding:0,
        type:'iframe',
        scrolling:'no',
        fitToView:false,
        width:'90%',
        maxWidth:800,
        autoHeight:true,
        autoCenter:true

    });
    $(".fancyimg").fancybox({padding:0});

     // SWITCH TAB FANCYBOX
    $('.navbox').on("click", "a", function(){
        $('.navbox li a').removeClass('active');
        $(this).addClass('active');
        var currentTab = $(this).attr('href');
        $('.boxtab').hide();
        $(currentTab).fadeIn("slow");
    });

    // NAV MENU
    $('header').on("click", ".mn-main", function() {
        var elementClicked = $(this).attr("href");
        var destination = $(elementClicked).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination+1}, "slow" );
        event.preventDefault();
    });
    $('#sidenav').on("click", ".scroll", function() {
        var elementClicked = $(this).attr("href");
        var destination = $(elementClicked).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination+1}, "slow" );
        event.preventDefault();
    });

    // NAV SIDEBAR
    $(".scroll-home").parent().addClass('active');
    var main = main = $('#sidenav ul');
    $(window).scroll(function(event) {
        if($("#home").offset().top < $(window).scrollTop() + $(window).outerHeight()) {
            $(".scroll-home").parent().addClass('active');
            $(".mn-home").addClass('active');
            $(".scroll-why").parent().removeClass('active');
            $(".mn-why").removeClass('active');
            $(".scroll-func").parent().removeClass('active');
            $(".mn-func").removeClass('active');
            $(".scroll-who").parent().removeClass('active');
            $(".mn-who").removeClass('active');
        }
        if($("#why").offset().top < $(window).scrollTop() + $(window).outerHeight()){
            $(".scroll-why").parent().addClass('active');
            $(".mn-why").addClass('active');
            $(".scroll-home").parent().removeClass('active');
            $(".mn-home").removeClass('active');
            $(".scroll-func").parent().removeClass('active');
            $(".mn-func").removeClass('active');
            $(".scroll-who").parent().removeClass('active');
            $(".mn-who").removeClass('active');
        }
        if($("#func").offset().top < $(window).scrollTop() + $(window).outerHeight()){
            $(".scroll-func").parent().addClass('active');
            $(".mn-func").addClass('active');
            $(".scroll-home").parent().removeClass('active');
            $(".mn-home").removeClass('active');
            $(".scroll-why").parent().removeClass('active');
            $(".mn-why").removeClass('active');
            $(".scroll-who").parent().removeClass('active');
            $(".mn-who").removeClass('active');
        }
        if($("#who").offset().top < $(window).scrollTop() + $(window).outerHeight()){
            $(".scroll-who").parent().addClass('active');
            $(".mn-who").addClass('active');
            $(".scroll-home").parent().removeClass('active');
            $(".mn-home").removeClass('active');
            $(".scroll-why").parent().removeClass('active');
            $(".mn-why").removeClass('active');
            $(".scroll-func").parent().removeClass('active');
            $(".mn-func").removeClass('active');
        }
    });

    // VIDEO
    $('.video-block').click(function(e) {
        $('.video-detail').show(50, function() {
            $('.video-container').html('<iframe width="535" height="317" src="//www.youtube.com/embed/bS3fLEJRteU?autoplay=1&rel=0" frameborder="0" allowfullscreen></iframe>');
            //player.playVideo();
        });
    });

    // GOOGLE ANALYTICS
    var obj = {
        "menu-home":"/virtual_detail/menu/accueil.htm",
        "menu-why":"/virtual_detail/menu/pourquoi_pericles_nomade.htm",
        "menu-func":"/virtual_detail/menu/fonctionnalites.htm",
        "menu-who":"/virtual_detail/menu/qui_sommes_nous.htm",
        "menu-form":"/virtual_detail/menu_mobile/telephone.htm",

        "side-home":"/virtual_detail/menu_side/accueil.htm",
        "side-why":"/virtual_detail/menu_side/pourquoi_pericles_nomade.htm",
        "side-func":"/virtual_detail/menu_side/fonctionnalites.htm",
        "side-who":"/virtual_detail/menu_side/qui_sommes_nous.htm",

        "form-submit-1":"/virtual_detail/action/header.htm",
        "form-submit-1s":"/virtual_detail/action/header.htm",
        "form-submit-2":"/virtual_detail/action/pqpericlesnom.htm",
        "form-submit-3":"/virtual_detail/action/fonc1.htm",
        "form-submit-4":"/virtual_detail/action/fonc2.htm",
        "form-submit-5":"/virtual_detail/action/rejpericlesnom.htm",
        "form-submit-6":"/virtual_detail/action/quisomnous.htm",

        "envoiContact":"/virtual_detail/formulaire/envoyer.htm",
        "form-tab2":"/virtual_detail/formulaire/appelez.htm"
    };
    $.each( obj, function( i, val ) {
        $("#"+i).on('click',function() {
            ga('send', 'pageview', val);
            $(this).attr('id','');
            $(this).unbind('click');
        });
    });

    $('#menu-home').click(function(){
        ga('send', 'event', { eventCategory: 'Menu', eventAction: 'click', eventLabel: 'HomePage'});
    });

    $('#side-home').click(function(){
        ga('send', 'event', { eventCategory: 'Menu_side', eventAction: 'click', eventLabel: 'HomePage'});
    });

    $('#menu-form').click(function(){
        ga('send', 'event', { eventCategory: 'Menu_Responsive', eventAction: 'click', eventLabel: 'contactez_nous'});
    });

    $('#form-submit-1').click(function(){
        ga('send', 'event', { eventCategory: 'Homepage', eventAction: 'click', eventLabel: 'contactez_nous_Pericles_nomade'});
    });
    $('#form-submit-1s').click(function(){
        ga('send', 'event', { eventCategory: 'Homepage', eventAction: 'click', eventLabel: 'contactez_nous_Pericles_nomade'});
    });

    $('#form-submit-2').click(function(){
        ga('send', 'event', { eventCategory: 'Homepage', eventAction: 'click', eventLabel: 'contactez_nous_Pq_Pericles_Nomade'});
    });

    $('#form-submit-3').click(function(){
        ga('send', 'event', { eventCategory: 'Homepage', eventAction: 'click', eventLabel: 'contactez_nous_Fonctionnalités1'});
    });

    $('#form-submit-4').click(function(){
        ga('send', 'event', { eventCategory: 'Homepage', eventAction: 'click', eventLabel: 'contactez_nous_Fonctionnalités2'});
    });

    $('#form-submit-5').click(function(){
        ga('send', 'event', { eventCategory: 'Homepage', eventAction: 'click', eventLabel: 'contactez_nous_Rejoindre_Per_Nom'});
    });

    $('#form-submit-6').click(function(){
        ga('send', 'event', { eventCategory: 'Homepage', eventAction: 'click', eventLabel: 'contactez_nous_Qui_sommes_nous'});
    });

    $('#form-tab2').click(function(){
        ga('send', 'event', { eventCategory: 'Formulaire', eventAction: 'Ouverture', eventLabel: 'Appelez-nous'});
    });

    $('#envoiContact').click(function(){
        ga('send', 'event', { eventCategory: 'Formulaire', eventAction: 'Ouverture', eventLabel: 'Envoyer'});
    });

    $('#menu-func').click(function(){
        ga('send', 'event', { eventCategory: 'Menu', eventAction: 'click', eventLabel: 'Fonctionnalités'});
    });

    $('#side-func').click(function(){
        ga('send', 'event', { eventCategory: 'Menu_side', eventAction: 'click', eventLabel: 'Fonctionnalités'});
    });

    $('#menu-why').click(function(){
        ga('send', 'event', { eventCategory: 'Menu', eventAction: 'click', eventLabel: 'pourquoi_pericles_nomade'});
    });

    $('#side-why').click(function(){
        ga('send', 'event', { eventCategory: 'Menu_side', eventAction: 'click', eventLabel: 'pourquoi_pericles_nomade'});
    });

    $('#menu-who').click(function(){
        ga('send', 'event', { eventCategory: 'Menu', eventAction: 'click', eventLabel: 'Qui_sommes_nous'});
    });

    $('#side-who').click(function(){
        ga('send', 'event', { eventCategory: 'Menu_side', eventAction: 'click', eventLabel: 'Qui_sommes_nous'});
    });



















});








