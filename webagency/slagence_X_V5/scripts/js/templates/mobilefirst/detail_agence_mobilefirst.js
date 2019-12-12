var regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
var regTel = new RegExp('^(01|02|03|04|05|06|0708|09)[0-9]{8}$','i');

$(window).load(function(){
    // HORAIRES
    dte = new Date();
    j = dte.getDay();
    $(".agence-horaires-list li:eq("+(j-1)+")").addClass("is-today");
	
    // DESCRIPTIF
    $('.agence-descriptif-more .btn').click(function () {
        $('.agence-descriptif-txt').toggleClass('is-expand');
        $(this).toggleClass('disabled');
        return false;
    });
	
    // CAROUSEL DERNIERE ANNONCES
    $('.agence-annonces-items').owlCarousel({
        margin : 30,
        responsive:{
            0 : {
                items: 1,
                dots : true,
                nav  : false,
                navText : ""
            },
            670 : {
                items: 2
            },
            1024 : {
                items  : 3,
                dots   : false
            }
        }
    });
	
    // FORMULAIRE DE CONTACT
    $('.agence-contact-nav .btn').click(function () {
        $('.agence-contact-form').addClass('is-active');
        $('body').addClass("has-modal");
        return false;
    });

    $(".agence-form-close").click(function() {
        $('.agence-contact-form').removeClass("is-active");
        $('body').removeClass("has-modal");
    });
});
