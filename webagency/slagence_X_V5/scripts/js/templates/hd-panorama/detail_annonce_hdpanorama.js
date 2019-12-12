/* -- SELECTION / PANIER */
/* --------------------------------------------------*/

function fixStar() {
    var annonceBouton = $('.detail-panier');
    annonceBouton.find('i').attr('class','mf-icon-star-full');
}

$(window).load(function(){
	
	
    // -- CAROUSEL ANNONCES SIMILAIRES
    $('.detail-simi-items').owlCarousel({
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
	
	
    // -- SELECTION / PANIER
    $('.detail-panier').on('click',function(e) {
        e.preventDefault();
        var $this = $(this);
        var thisIcone = $this.find('i');
        var idAnnonce = $this.attr('data-idannonce');
        var idPublication = $this.attr('data-idpublication');
        if(thisIcone.hasClass('mf-icon-star-full')){
            $.ajax({
                type: "GET",
                data: 'idannonce=' + idAnnonce + '&idp=' + idPublication,
                url: '/scripts,panier,selection_supprimer.htm',
                dataType: "json",
                cache:false,
                success: function(data) {
                    $this.find('i').attr('class','mf-icon-star');
                }
            });
        }
		else{
            $.ajax({
                type: "GET",
                data : "idannonce=" + idAnnonce + "&idpublication=" + idPublication,
                url: '/scripts,panier,selection_ajouter.htm',
                dataType: "json",
                cache:false,
                success: function(data) {
                    $this.find('i').attr('class','mf-icon-star-full');
                }
            });
        };
    });


    // -- POPUP WIDGET SOCIAL
    $('.has-popup').click(function(e) {
        e.preventDefault();
        window.open($(this).attr('href'), 'Partagez', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
        return false;
    });

    // -- FORMULAIRE DE CONTACT
    (function() {

        var contactFormInitiated = false;
        var formDetail = $('.detail-contact-form');
        var responseBox = $('.response');
        var submitButton = $('.btn-send-contact');
        var submitNormal = submitButton.html();

        $(submitButton).on('click', function(){
            var msgError = '';
            if($('input[name="cnom"]').val() == ''){
                var msgError = 'nom';
            }
            if($('input[name="from"]').val() == ''){
                var msgError = msgError + ',email';
            }
            if($('input[name="ctel"]').val() == ''){
                var msgError = msgError + ',tel';
            }
            var contactType = formDetail.find('input[name=type-message]:checked').attr('data-type');
        });

        formDetail.submit(function(e) {
            var $form = $(this);
            var message = $form.find('input[name=type-message]:checked').attr('data-message') + '(annonce réf : $$NOMAGENCE_DETAIL$$  $$ANNDETAIL:URLVIRTUELLE$$)  Cordialement';
            e.preventDefault();
            submitButton.button('loading');
            var demande_autre = $form.find('textarea[name=demande_autre]').val();
            var contactForm = $form.serialize();
            var contactFormNoComa = contactForm.replace(',/g', '\,');
            var contactFormNoBackspace = contactFormNoComa.replace(/%0D%0A/g,' ') + '&content=' + message + '&message=' + demande_autre;
            $.ajax({
                type:'POST',
                dataType:"json",
                url:"/detail,incl_contact_agence_email.htm",
                data: contactFormNoBackspace,
                success:function(data){
                    if(data.message.length) {
                        responseBox.html(data.message);
                        submitButton.button('reset');
                    } else {
                        responseBox.html(messageOK);
                        submitButton.html(boutonOK);
                    }
                },
                error:function (xhr, status, errorThrown) {
                    //console.log(xhr); //could be alert if you don't use the dev tools
                }
            });
        });

        formDetail.find('input[type=text]').change(function() {
            if(!contactFormInitiated) {
                var contactType = formDetail.find('input[name=type-message]:checked').attr('data-type');
                contactFormInitiated = true;
            }
        });

        formDetail.find('input[name=type-message]').click(function() {
            var radioChecked = $(this);
            var radioParent = $(this).closest(".btn");


            if( radioParent.hasClass("active") ){
                radioChecked.prop("checked",false);
                radioParent.removeClass("active");
            } else {
                radioChecked.prop("checked",true);
                $("input[name=type-message]").closest(".btn").removeClass("active");
            }

            $('.detail-form-content').addClass("display-none");
            $('#detail-form').removeClass("is-active");
            $('body').removeClass("has-modal");

            $('#detail-form').addClass("is-active").find(".detail-form-ttl").html("");
            if( radioChecked.prop("checked") ){
                $('.detail-form-content').removeClass("display-none");
                $('#detail-form').addClass("is-active").find(".detail-form-ttl").html(radioChecked.data("message"));
                $('body').addClass("has-modal");
                radioParent.addClass("active");
                $('fieldset').hide();
                $('fieldset.' + radioChecked.data("type")).show();
                responseBox.html('');
                submitButton.button('reset');
            }
        });

        $(".detail-form-close").click(function() {
            $('#detail-form').removeClass("is-active");
            $('.detail-form-nav .btn').removeClass("active");
            $('body').removeClass("has-modal");
        });

   })();

});
