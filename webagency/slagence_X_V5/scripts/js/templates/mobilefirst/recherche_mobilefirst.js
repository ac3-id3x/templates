var countAnnonce = 0;
var verif = 3;
var count = 0;
var regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');

// FIX STAR = DETAIL SELECTED
function fixStar(idAnnonce) {
    $('#annonce'+idAnnonce).find('.bouton-ajouter-selection-detail i').attr('class','mf-icon-star-full');
};

// COUNT NB ANNONCES
function countSelection(nbAnnonces) {
    $('.bouton-selection-annonces').children('span').html('<strong>'+nbAnnonces+'</strong>');
}

$(document).ready(function() {

    // CLICK COMPARE
    $('#recherche-resultats-listing').on('click','.bouton-comparer-selection-detail',function() {
        var $this = $(this);
        if($this.hasClass('clickCompared')) {
            $this.removeClass('clickCompared').find("i").removeClass("mf-icon-star-full").addClass("mf-icon-star");
        } else {
            $this.addClass('clickCompared').find("i").removeClass("mf-icon-star").addClass("mf-icon-star-full");
        }
    });

    $('#recherche-resultats-listing').on('click','.bouton-supprimer-selection-detail',function() {
        var idAnnonce = $(this).attr('data-idannonce');
        var idPublication = $(this).attr('data-idpublication');
        $.ajax({
            type: "GET",
            data: 'idannonce='+idAnnonce+'&idp='+idPublication,
            dataType: "html",
            cache:false,
            url: '/scripts,panier,selection_supprimer.htm',
            success: function(data) {
                //$('#annonce'+idAnnonce).parent().remove();
                window.location.reload();
            },
            error: function(xhr,statusText) {
                //console.log(xhr.status);
            },
            complete: function(xhr,statusText) {
                //console.log(xhr.status);
            }
        });
    });

    /* GO COMPARE ON COMPARAISON PAGE */
    $('.bouton-comparer-selection').on('click',function() {
        var langue = $('html').attr('lang');
        var imprimer = $(this).attr('data-imprimer');
        var idAnnonces = '';
        var count = 0;
        $('.clickCompared').each(function() {
            idAnnonces += $(this).attr('data-idannonce')+',';
            count ++;
        });
        if(count == 0) {
            $('.bouton-comparer-selection-detail').each(function() {
                $(this).addClass('clickCompared').find("i").removeClass("mf-icon-star").addClass("mf-icon-star-full");
                idAnnonces += $(this).attr('data-idannonce')+',';
            });
            if(imprimer==1){
                var newWin = window.open('recherche,incl_comparaison.htm?idannonces='+idAnnonces+'&lang='+langue, 'Print', 'width=500,height=400');
                newWin.focus();
                newWin.print();
            }else{
                $(this).colorbox({
                    width:'75%',
                    height:'60%',
                    iframe:true,
                    href:'recherche,incl_comparaison.htm?idannonces='+idAnnonces+'&lang='+langue+'&print='+imprimer,
                    close:'X',
                    onLoad: function() {
                    $('#colorbox').attr('style','outline:none');
                }
                });
            }
        } else {
            if(imprimer==1){
                var newWin = window.open('recherche,incl_comparaison.htm?idannonces='+idAnnonces+'&lang='+langue, 'Print', 'width=500,height=400');
                newWin.focus();
                newWin.print();
            }else{
                $(this).colorbox({
                    width:'75%',
                    height:'60%',
                    iframe:true,
                    href:'recherche,incl_comparaison.htm?idannonces='+idAnnonces+'&lang='+langue+'&print='+imprimer
                });
            }
        }
    })

    /* TRI */
    $('#form-tri').on("change","#trierAnnonce",function() {
        var valTri = $(this).val();
        var lien = $('#form-tri').attr('action');
        lien += '&tri=' + valTri;
        window.location.href = lien;
    });

    /* DELETE SELECT */
    $('.bouton-vider-selection').on('click',function(e) {
        e.preventDefault();
        var container = $("#recherche-resultats-listing");
        $.ajax({
            type: "GET",
            cache:false,
            url: '/scripts,panier,selection_vider.htm',
            success: function(data) {
                window.location.reload(true);
            }
        });
    });

    /* BOUTON ALERTE */
    $('.bouton-alerte-moteur').on('click',function(e) {
        e.preventDefault();
        var btn = $(this);
        btn.button('loading');
        /* SEND FORM ALERT MAIL WITH AJAX + JSON */
        $.ajax({
            type: "POST",
            data : $('#form-alerte-moteur').serialize(),
            dataType:'json',
            url: '/alerte,incl_creation.htm',
            beforeSend: function() {
                $('.message-erreur-alerte').html('');
            },
            success: function(data) {
                if(data.message.length > 0) {
                    $('.message-erreur-alerte').html(data.message);
                    // TEST NOM
                    if(data.nom.length <= 0) {
                        $('#nom-alerte').parent().addClass('error').removeClass('success');;
                    } else {
                        $('#nom-alerte').parent().removeClass('error').addClass('success');
                    }
                    // TEST EMAIL
                    if(data.email.length <= 0 || regEmail.test(data.email) == false) {
                        $('#email-alerte').parent().addClass('error').removeClass('success');;
                    } else {
                        $('#email-alerte').parent().removeClass('error').addClass('success');
                    }
                } else if(data.idInscription.length > 0) {
                    $('#nom-alerte').parent().removeClass('error').removeClass('success');
                    $('#email-alerte').parent().removeClass('error').removeClass('success');
                    $('.message-erreur-alerte').html(inscriptionOK)
                    btn.next('.bouton-alerte-moteur-ga').trigger('click');
                }
            },
            error : function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR, textStatus, errorThrown);
            },
            complete: function() {
                btn.button('reset');
                $('.message-erreur-alerte').show('slow').delay(1500).hide('slow');
            }
        });
    });
    $('.bouton-alerte-moteur2').on('click',function(e) {
        e.preventDefault();
        var btn = $(this);
        btn.button('loading');
        /* SEND FORM ALERT MAIL WITH AJAX + JSON */
        $.ajax({
            type: "POST",
            data : $('#form-alerte-moteur2').serialize(),
            dataType:'json',
            url: '/alerte,incl_creation.htm',
            beforeSend: function() {
                $('.message-erreur-alerte').html('');
            },
            success: function(data) {
                if(data.message.length > 0) {
                    $('.message-erreur-alerte').html(data.message);
                    // TEST NOM
                    if(data.nom.length <= 0) {
                        $('#nom-alerte').parent().addClass('error').removeClass('success');;
                    } else {
                        $('#nom-alerte').parent().removeClass('error').addClass('success');
                    }
                    // TEST EMAIL
                    if(data.email.length <= 0 || regEmail.test(data.email) == false) {
                        $('#email-alerte').parent().addClass('error').removeClass('success');;
                    } else {
                        $('#email-alerte').parent().removeClass('error').addClass('success');
                    }
                } else if(data.idInscription.length > 0) {
                    $('#nom-alerte').parent().removeClass('error').removeClass('success');
                    $('#email-alerte').parent().removeClass('error').removeClass('success');
                    $('.message-erreur-alerte').html(inscriptionOK)
                    btn.next('.bouton-alerte-moteur2-ga').trigger('click');
                }
            },
            error : function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR, textStatus, errorThrown);
            },
            complete: function() {
                btn.button('reset');
                $('.message-erreur-alerte').show('slow').delay(1500).hide('slow');
            }
        });
    });

});