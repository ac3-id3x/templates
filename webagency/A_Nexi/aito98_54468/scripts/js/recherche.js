var countAnnonce = 0;
var verif = 3;
var count = 0;
var regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
// FIX STAR = DETAIL SELECTED
function fixStar(idAnnonce) {
    var annonce = $('#annonce'+idAnnonce);
    if(annonce.length > 0) {
        var annonceBouton = annonce.find('.bouton-ajouter-selection-detail');
        var titleData = annonceBouton.attr('data-title-ok');
        if(annonceBouton.children().find('i').length > 0){
            annonceBouton.children().find('.plus').addClass('display-none');
            annonceBouton.children().find('.checkmark').removeClass('display-none');
        }
        annonceBouton.attr('data-original-title',titleData).tooltip('fixTitle').find('img').attr('src','/z/webagency/slagence_X_V5/images/widget/star_ok.png');
    }
};
// COUNT NB ANNONCES
function countSelection(nbAnnonces) {
    $('.bouton-selection-annonces').children('span').html('<strong>'+nbAnnonces+'</strong>');
}
$(document).ready(function() {

    $(".bouton-raz").click(function(){
        $("#idtypebien").val("");
        $(".Mini_Ref").find("input").val();
        $("#localisation-input-01").prop("checked",false);
        $("#localisation-input-02").prop("checked",false);
        $("#localisation-input-03").prop("checked",false);
        $("#localisation-input-04").prop("checked",false);
        $("#localisation-input-05").prop("checked",false);
        $("#MiniInputBudgetMin").val("");
        $("#MiniInputBudgetMax").val("");

        $(".bouton-rechercher-moteur").click();
    });

    /* EFFECT PHOTO */
    $('.photo-agence-annonces').each(function() {
        if($('html').hasClass('ie7')) {
            return false;
        } else {
            $(this).hover(
                function() {
                    if($(this).find('.display-none').length > 0) {
                        $(this).children().first().hide();
                        $(this).children().last().show();
                    }
                },
                function() {
                    if($(this).find('.display-none').length > 0) {
                        $(this).children().first().show();
                        $(this).children().last().hide();
                    }
                }
            )
        }
    });
    if(winW > 600) {
        /* BTN VIDEO/360/PDF */
        $('#recherche-listing').on('click','.bouton-video-360',function() {
            $(this).colorbox({iframe:true, innerWidth: 720, innerHeight:490,fastIframe:false});
        });
        $('#recherche-listing').on('click','.bouton-video-detail',function() {
            $(this).colorbox({iframe:true, innerWidth: 720, innerHeight:480,fastIframe:false});
        });
    }
    // CLICK ADD COMPARE
    $('#recherche-listing').on('click','.bouton-ajouter-selection-detail',function() {
        var $this = $(this);
        var titleData = $this.attr('data-title-ok');
        var thisIcone = $this.find('.plus');
        var idPublication = $(this).attr('data-idpublication');
        var idAnnonce = $(this).attr('data-idannonce');
        if(thisIcone.hasClass('display-none')){
            $.ajax({
                type: "GET",
                data: 'idannonce='+idAnnonce+'&idp='+idPublication,
                dataType: "json",
                cache:false,
                url: '/scripts,panier,selection_supprimer.htm',
                success: function(data) {
                    $this.attr('data-original-title',titleData).tooltip('fixTitle').tooltip('show').find('img').attr('src','/z/webagency/slagence_X_V5/images/widget/star_ok.png');
                    if($this.children().find('i').length > 0){
                        $this.children().children().find('.checkmark').addClass('display-none');
                        $this.children().children().find('.plus').removeClass('display-none');

                    }
                    countSelection(data.nbAnnonces);
                  }
            });
        }else{
            $.ajax({
                type: "GET",
                dataType:'json',
                cache: false,
                data : "idannonce="+idAnnonce+"&idpublication="+idPublication,
                url: '/scripts,panier,selection_ajouter.htm',
                success: function(data) {
                    $this.attr('data-original-title',titleData).tooltip('fixTitle').tooltip('show').find('img').attr('src','/z/webagency/slagence_X_V5/images/widget/star_ok.png');
                    if($this.children().find('i').length > 0){
                        $this.children().children().find('.plus').addClass('display-none');
                        $this.children().children().find('.checkmark').removeClass('display-none');
                    }
                    countSelection(data.nbAnnonces);
                  }
            });
        }
    });
    // CLICK COMPARE
    var pictureCompare = $(this).find('.bouton-comparer-selection-detail').find('img').attr('src');
    $('#recherche-resultats-listing').on('click','.bouton-comparer-selection-detail',function() {
        var $this = $(this);
        if($this.hasClass('clickCompared')) {
            $this.find('img').attr('src',pictureCompare);
            $this.removeClass('clickCompared');
        } else {
            $this.find('img').attr('src','/z/webagency/slagence_X_V5/images/widget/checkmark_ok.png');
            $this.addClass('clickCompared');
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
                $(this).find('img').attr('src','/z/webagency/slagence_X_V5/images/widget/checkmark_ok.png');
                $(this).addClass('clickCompared');
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
    //AFFICHAGE MASQUAGE ALERTE
    $('.creer-alerte-email').on('click',function(e) {
        e.preventDefault();
        sliderBloc('#alerte-moteur');
    });
    // GESTION RECHERCHE PAR REF
    $('.bouton-search-ref-envoi').on('click',function(e) {
        e.stopPropagation();
        var valueRef = $('#refannonce').val(); //.toLowerCase();
        $('#refannonce').val(valueRef);
        if(valueRef.length < 2) {
            $('.erreur-saisie-ref').show();
        } else {
            $('.erreur-saisie-ref').hide();
            $('#moteur-reference').submit();
        }
    });
});