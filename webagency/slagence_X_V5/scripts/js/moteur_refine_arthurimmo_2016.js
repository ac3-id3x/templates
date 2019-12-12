var divcontent = $("#recherche-listing");
//Definition De Variables
var noqry = "";
var eachAnnonce = '';
$(document).ready(function () {
    //RECUPERATION DE pxbtw
    if (pxbtw) {
        var cutpxbtw = pxbtw.split('/');
        var pxmin = cutpxbtw[0];
        var pxmax = cutpxbtw[1];
        $('.prix-min').val(pxmin);
        $('.prix-max').val(pxmax);
    };
    //RECUPERATION DE LA RECHERCHE EN CAS DE RETOUR D'UN DETAIL
    var idtt = $('.hidden-idtt').val();
    if (idtt != "0") {
        reloadSearch();
        $('#cpVilles').trigger("liszt:updated");
    }
    // LAUNCH FUNCTION
    usePagination(maxpage);
    // FIXBUG ANNLISTE
    $('.refine-page').children('a').each(function () {
        var url = $(this).attr('href').split("?")[0];
        $(this).attr('href', url);
    });
    // CLICK CHANGE LISTING
    $('#recherche-listing').on('click', '.bouton-change-affichage', function () {
        $('.hidden-pres').val($(this).attr('data-pres'));
        loadInfos();
    });
    $('#recherche-moteur').on('focusin', '.moteur-input-change', function (e) {
        _getValue = $(this).attr('data-placeholder');
        $(this).val('');
        $(this).on('focusout', function () {
            if ($(this).val() == '') {
                $(this).val(_getValue);
            }
        });
    });
    //RELOAD AU CLICK SUR UN BTN (IDTYPEPIEN CHAMBRE...
    $('#recherche-moteur').on('click', '.ligne', function () {
        if (!$(this).hasClass('refineIdtt')) {
            if ($(this).hasClass('refineIdpva')) {
                // IF NEUTRE
                if ($(this).hasClass(btnneutre)) {
                    $(this).parent('div').children('div').removeClass(btnaction + " typo-white").addClass(btnneutre);
                    $(this).parent('div').children('div').find('.json-check').removeClass('display-show');
                    $(this).find('.json-check').addClass('display-show');
                    $(this).addClass(btnaction + " typo-white").removeClass(btnneutre);
                    var $this = $(this);
                    champshidden($this);
                }
                // IF NOT NEUTRAL
                else {
                    $(this).parent('div').children('div').find('.json-check').removeClass('display-show').addClass('display-none');
                    $(this).addClass(btnneutre).removeClass(btnaction + " typo-white");
                    var $this = $(this);
                    champshidden($this);
                }
            } else {
                // IF NEUTRE
                if ($(this).hasClass(btnneutre)) {
                    $(this).find('.json-check').addClass('display-show');
                    $(this).addClass(btnaction + " typo-white").removeClass(btnneutre);
                    var $this = $(this);
                    champshidden($this);
                }
                // IF NOT NEUTRAL
                else {
                    $(this).find('.json-check').removeClass('display-show');
                    $(this).addClass(btnneutre).removeClass(btnaction + " typo-white");
                    var $this = $(this);
                    champshidden($this);
                }
            }
        } else {
            // GET IDTT AND FIX IT
            var idtt = $(this).attr('data-idtt');
            $('.hidden-idtt').val(idtt);
            triloyer(idtt);
            // RESET REFINE IDTT
            $('.refineIdtt').addClass(btnneutre).removeClass(btnaction + " typo-white");
            $('.refineIdtt').find('.json-check').removeClass('display-show').addClass('display-none');
            // FIX NEW CLICK IDTT
            $(this).addClass(btnaction + " typo-white").removeClass(btnneutre);
            $(this).find('.json-check').addClass('display-show');
            // CLEAR ALL WHEN IDTT IS CHANGE
            clearAll();
            $('.choix-selection-refine').each(function () {
                if (!$(this).hasClass('refineIdtt')) {
                    $(this).addClass('choix-neutre-refine');
                    $(this).removeClass('choix-selection-refine', 'typo-white');
                    $(this).find('.json-check').removeClass('display-show').addClass('display-none');
                }
            });
            // CHANGE ATTR NAME FOR BUDGET
            changeBudget(idtt);
        }
        $('.hidden-annlistepg').remove();
        //loadInfos();

    });
    //CHOIX MULTIPLE DES VILLES
    $('#recherche-moteur').on('change', '#cpVilles', function () {
        $('.hidden-ci').val($('#cpVilles').val());
        $('.hidden-polygon').val('');
        //loadInfos();
    });
    $('#recherche-moteur').on('change', '#cpDept', function () {
        $('.hidden-ci').val('');
        $('.hidden-cp').val($('#cp').val());
        $('.hidden-polygon').val('');
        //loadInfos();
    });
    $('#recherche-moteur').on('change', '#ciDept', function () {
        $('.hidden-ci').val('');
        $('.hidden-polygon').val('');
        //loadInfos();
    });
    //UTILISATION DU TRI
    $('#recherche-listing').on('change', '#trierRefine', function () {
        $('.hidden-annlistepg').val('');
        $('.hidden-tri').val('');
        //if(winW >  767) {
        $('.moteur-all').find($('#form-tri')).remove();
        //}
        if ($('.hidden-tri').length > 0) {
            $('.hidden-tri').val($(this).val());
        } else {
            $('#Mini_Moteur').append('<input type="hidden" value="" name="tri" class="hidden-tri auto-create-hidden" />');
        }
        loadInfos();
    });
    //REMISE A ZERO
    $('#Mini_Moteur').on('click', '.bouton-raz', function (e) {
        e.preventDefault();
        if (noqry = 'undefined') {
            var noqry = 'idtt=' + idtt;
        } else {
            var noqry = zeroquery;
        }
        clearAll();
        loadInfos();
    });
    //LANCER LA RECHERCHE AU CLICK SUR LE BOUTON RECHERCHER
    $('#recherche-moteur').on('click', '.bouton-rechercher-refine, .bouton-rechercher-moteur', function (e) {
        e.preventDefault();
        $('.hidden-annlistepg').val('');
        $('.breadcrumb').parent('div').html('');
        loadInfos();
    });


    if (typeLocalite == 1) {
        var normalText = $('.ville-libre').closest('.conteneur-checkbox').find('.bouton-rechercher-refine').html();
        var loadText = $('.ville-libre').closest('.conteneur-checkbox').find('.bouton-rechercher-refine').attr('data-loading-text');
        var xhr;
        $('.ville-libre').on('keydown', function (e) {
            if (xhr && xhr.readystate != 4) {
                xhr.abort();
            }
        });
        $('.ville-libre').on('keyup', function (e) {
            var saisie = $(this).val();
            var qry = 'ville=' + $(this).val() + '&idtt=' + $('.hidden-idtt').val();
            var $this = $(this);
            $.ajax({
                type: "GET",
                dataType: 'json',
                cache: false,
                data: qry,
                url: '/moteur,refine,incl_preval_ville_libre.htm',
                beforeSend: function () {
                    $this.closest('.conteneur-checkbox').find('.bouton-rechercher-refine').html(loadText);
                },
                success: function (data) {
                    var nbResult = data.villes.length;
                    var eachVille = data.villesActive;
                    if (nbResult > 0) {
                        $(".hidden-ci").val('');
                        for (v = 0; v < nbResult; v++) {
                            if (eachVille.indexOf(data.villes[v].villeCi) > -1) {
                                var actualCi = $(".hidden-ci").val();
                                if (actualCi.length > 0) {
                                    var actualCi = $(".hidden-ci").val() + ',';
                                }
                                $(".hidden-ci").val(actualCi + data.villes[v].villeCi);
                            }
                        }
                    } else {
                        $(".hidden-ci").val('');
                        $(".hidden-ci").val(data.villes[0].villeCi);
                    }
                    $this.closest('.conteneur-checkbox').find('.bouton-rechercher-refine').html(normalText);
                },
                complete: function () {

                }
            })
        });
    }

    //AFFICHAGE MASQUAGE DES RUBRIQUES DU MOTEUR
    $('#recherche-moteur').on('click', '.titre-section-refine', function () {
        var liste = $(this).parent('div').children('.display-none');
        if (liste.hasClass('display-none')) {
            if (liste.hasClass('display-show')) {
                hideAll();
                liste.removeClass('display-show');
                $(this).find('.minus').addClass('display-none');
                $(this).find('.plus').removeClass('display-none');
            } else {
                hideAll();
                liste.addClass('display-show');
                $(this).find('.minus').removeClass('display-none');
                $(this).find('.plus').addClass('display-none');
            }
        }
    });
    //SUPPRESSION D'UN CRITERE DE VENTE VIA LE FIL ROUGE
    $('#recherche-listing').on('click', '.remove-filter', function () {
        var thisName = $(this).attr('data-qry');
        $("select[name='" + thisName + "']").each(function () {
            $(this).val('');
        });
        $("input[name='" + thisName + "']").each(function () {
            if (thisName == "ci") {
                $('.line-suggest-selected').remove();
            }
            $(this).val('');
        });

        loadInfos();
    });
});
function clearAll() {
    $('.hidden-annlistepg').val('');
    $("#MiniInputBudgetMin").val('Min');
    $("#MiniInputBudgetMax").val('Max');
    $("#MiniSelectBudget").val('Max');
    $("#MiniInputSurfaceMin").val('Min');
    $("#MiniInputSurfaceMax").val('Max');
    $("#MiniInputSurfaceTerrainMin").val('Min');
    $("#MiniInputSurfaceTerrainMax").val('Max');
    $("#MiniSelectSurface").val('');
    $(".auto-create-hidden").val('');
    if ($('#moteurRefine').val() == 1) {
        $('#idqInput').val('');
        $('#idpaysInput').val('');
        $('#cpInput').val('');
        $('#divInput').val('');
        $('#ciInput').val('');
    } else {
        $(".hidden-ci").val('');
        $(".hidden-idq").val('');
    }
    $("#cpVilles").val('');
    $(".hidden-cp").val('');
    $('.ville-suggest-liste').html('');
    $("#rayon").val('');
}
function hideAll() {
    $('.conteneur-checkbox').children('.display-show').each(function () {
        $(this).removeClass('display-show');
        $(this).parent('').find('.minus').addClass('display-none');
        $(this).parent('').find('.plus').removeClass('display-none');
    });
}
function triloyer(idtt) {
    if (idtt == 1 || idtt == 3 || idtt == 7) {
        $('.px-croissant').val('a_px_loyer');
        $('.px-decroissant').val('d_px_loyer');
    } else if (idtt == 4) {
        $('.px-croissant').val('a_px_bs_semaine');
        $('.px-decroissant').val('d_px_bs_semaine');
    } else {
        $('.px-croissant').val('a_px');
        $('.px-decroissant').val('d_px');
    }
}
function champshidden($this) {
    var thistitre = $this.attr('data-name');
    if (thistitre == undefined) {
        var thistitre = $this.attr('data-name');
        if ($('.hidden-' + thistitre).val() == undefined) {
            $('#Mini_Moteur').append('<input type="hidden" value="" name="' + thistitre + '" class="hidden-' + thistitre + ' auto-create-hidden" />');
        }
        $('.hidden-' + thistitre).val('');
        if ($this.hasClass('choix-selection-refine')) {
            var thisvalue = $this.attr('data-value');
            $('.hidden-' + thistitre).val(thisvalue);
        }
    } else {
        if ($('.hidden-' + thistitre).val() == undefined) {
            $('#Mini_Moteur').append('<input type="hidden" value="" name="' + thistitre + '" class="hidden-' + thistitre + ' auto-create-hidden" />');
        }
        $('.hidden-' + thistitre).val('');
        if (thistitre == "idvpa") {
            $('.refineIdpva').each(function () {
                if ($(this).hasClass('choix-selection-refine')) {
                    var fullvalue = $('.hidden-' + thistitre).val();
                    if (fullvalue.length > 0) { fullvalue = fullvalue + ',' };
                    var thisvalue = $(this).attr('data-value');
                    $('.hidden-' + thistitre).val(fullvalue + thisvalue);
                }
            });
        } else {
            $this.parent('div').children('.choix-selection-refine').each(function () {
                var fullvalue = $('.hidden-' + thistitre).val();
                if (fullvalue.length > 0) { fullvalue = fullvalue + ',' };
                var thisvalue = $(this).attr('data-value');
                $('.hidden-' + thistitre).val(fullvalue + thisvalue);
            });
        }
    }
}
// FUNCTION SERIALIZE MOTEUR AND RETURN
function serializemoteur() {
    var qry = $('#Mini_Moteur input,select').filter(function () { return $(this).val(); }).serialize();
    return qry;
}
// FUNCTION SCROLL
function scrollFix() {
    if (winW < 768) {
        var getOffset = $('#recherche-resultats-listing').offset();
    } else {
        if ($('.phrase-recherche').offset() > 0) {
            var getOffset = $('.phrase-recherche').offset();
        } else {
            if ($('.bloc-top-alerte-email'.length) > 0) {
                var getOffset = $('.bloc-top-alerte-email').offset();
            } else {
                var getOffset = $('.creer-alerte-email').offset();
            }

        }
    }
    $("html, body").animate({ scrollTop: getOffset.top }, 600); return false;
}
// FUNCTION LOADVILLE
function loadville(qry, ci) {
    $.ajax({
        type: "GET",
        dataType: 'html',
        cache: false,
        data: qry,
        url: '/moteur,suggest,incl_get_localisation.htm',
        success: function (data) {
            $('.ville-suggest-liste').html("");
            $('.ville-suggest-liste').html(data);
        }
    });
}
// FUNCTION RELOAD REFINE
function reloadSearch() {
    var hashqry = window.location;
    var cutqry = hashqry.hash.split('#');
    if (cutqry != "") {
        var qry = cutqry[1];
        var cutqry = qry.split('&');
        // $('input').each(function(){
        // 	console.log($(this).attr('id') + ' = ' + $(this).attr('name') + ' = ' + $(this).val());
        // });

        $('input[class*="hidden-"]').each(function () {
            if ($(this).attr('class') != 'hidden-pres' && $(this).attr('class') != 'hidden-idtt') {
                $(this).val('');
            }
        });
        for (l = 0; l < cutqry.length; l++) {
            var attr = cutqry[l].split('=');
            if (attr[0] != 'tri' && attr[0] != 'lang' && attr[0] != 'idqfix' && attr[0] != 'expiree') {
                if (attr[1]) {
                    var fullattr = attr[1].replace("%2b", "+");
                    if (attr[0] === 'idtt') {
                        var idtt = fullattr;
                        triloyer(idtt);
                    }
                    if (fullattr != 'Min' && fullattr != 'Max') {
                        if ($('#moteurRefine').val() == 1) {
                            if (attr[0] == 'ci') {
                                $('#ciInput').val(attr[1]);
                            }
                            else if (attr[0] == 'cp') {
                                $('#cpInput').val(attr[1]);
                            }
                            else if (attr[0] == 'idq') {
                                $('#idqInput').val(attr[1]);
                            }
                            else if (attr[0] == 'idpays') {
                                $('#idpaysInput').val(attr[1]);
                            }
                            else if (attr[0] == 'div') {
                                $('#divInput').val(fullattr);
                            } else {
                                if ($('.hidden-' + attr[0]).val() != undefined) {
                                    $('.hidden-' + attr[0]).val(fullattr);
                                } else {

                                    if (attr[0] != 'pxmax' && attr[0] != 'pxmin' && attr[0] != 'surfacemax' && attr[0] != 'surfacemin' && attr[0] != 'surf_terrainmin' && attr[0] != 'surf_terrainmax' && attr[0] != 'pxbtw' && attr[0] != 'saisie') {
                                        $('#Mini_Moteur').append('<input type="hidden" value="" name="' + attr[0] + '" class="hidden-' + attr[0] + ' auto-create-hidden" />');
                                        $('.hidden-' + attr[0]).val(fullattr);
                                    } else {
                                        $('input[name="' + attr[0] + '"]').val(fullattr);
                                        $('select[name="' + attr[0] + '"]').children('option').each(function () {
                                            if ($(this).val() == decodeURIComponent(fullattr)) {
                                                $(this).attr('selected', 'selected');
                                            }
                                        });
                                    }
                                }
                            }
                        } else {
                            if ($('.hidden-' + attr[0]).val() != undefined && $('.hidden-' + attr[0]).val() != '') {
                                $('.hidden-' + attr[0]).val(fullattr);
                            } else {
                                if (attr[0] != 'pxmax' && attr[0] != 'pxmin' && attr[0] != 'surfacemax' && attr[0] != 'surfacemin' && attr[0] != 'surf_terrainmin' && attr[0] != 'surf_terrainmax' && attr[0] != 'pxbtw' && attr[0] != 'cp') {
                                    var fullattr = fullattr.replace("%2f", "/");
                                    $('#Mini_Moteur').append('<input type="hidden" value="" name="' + attr[0] + '" class="hidden-' + attr[0] + ' auto-create-hidden" />');
                                    $('.hidden-' + attr[0]).val(fullattr);
                                    $('#' + attr[0] + 'Dept').children('option').each(function () {
                                        var valOption = $(this).val();
                                        if (decodeURIComponent(fullattr).indexOf(valOption) > -1) {
                                            $(this).attr('selected', 'selected');
                                            if (attr[0] == 'cp') {
                                                $(this).trigger('change');
                                                setTimeout(function () { checkCity(hashCi); }, 1000);
                                            }
                                        }
                                        if (attr[0] != 'ci') { $('.hidden-' + attr[0]).val(''); }
                                    });
                                    if (attr[0] == 'ci') {
                                        hashCi = attr[1];
                                    }
                                } else {
                                    $('input[name="' + attr[0] + '"]').val(fullattr);
                                }
                            }
                        }
                    }
                }
            } else if (attr[0] == 'tri') {
                $('.hidden-tri').val(attr[1]);
                var valtri = attr[1];
                $('#trierRefine').find('option').each(function () {
                    if ($(this).val() == valtri) {
                        $(this).attr('selected', true);
                    }
                });
            }
        }
        if (qry.indexOf('ci=') < 0) {
            $('#ciInput').val('');
        }
        if (qry != undefined) {
            loadInfos();
        }
        // LOAD VILLES
        loadville(qry);
    } else {
        //openList();
        var cutqry = hashqry.search.split('?');
        if (cutqry != "") {
            var eachqry = cutqry[1].split('&');
        }
        nbpanier();
    }
}
// FUNCTION CHECK CITY IF DEPT
function checkCity(hashCi) {
    $('#ciDept').children('option').each(function () {
        if (hashCi.indexOf($(this).val()) > -1) {
            $(this).attr('selected', 'selected');
        }
    });
}
// FUNCTION OPEN LISTE REFINE
function openList() {
    $('.liste-checkbox').each(function () {
        if (!$(this).hasClass("refine-transac") && !$(this).hasClass("input-text")) {
            if ($(this).find('.' + btnaction).length != '0') {
                if (!$('#recherche-moteur').hasClass('moteurFlat')) {
                    $(this).parent('div').parent('div').addClass('display-show');
                    $(this).parent('div').parent('div').parent('div').children('.titre-section-refine').find('.minus').removeClass('display-none');
                    $(this).parent('div').parent('div').parent('div').children('.titre-section-refine').find('.plus').addClass('display-none');
                    //$(this).parent('div').parent('div').parent('div').children('.titre-section-refine').find('.general').removeClass('typoicon-plus').addClass('typoicon-minus');
                }
            }
        } else if ($(this).hasClass("input-text")) {
            var i = 0;
            var ouvert = '0';
            $(this).find('input').each(function () {
                i++;
                if ($(this).val() != 'Min' && $(this).val() != 'Max' && $(this).val() != '' && ouvert != '1') {
                    $(this).parent('div').parent('div').parent('div').parent('div').parent('div').parent('div').addClass('display-show');
                    $(this).parent('div').parent('div').parent('div').parent('div').parent('div').parent('div').parent('div').find('.minus').removeClass('display-none');
                    $(this).parent('div').parent('div').parent('div').parent('div').parent('div').parent('div').parent('div').find('.plus').addClass('display-none');
                    var ouvert = '1';
                } else {
                    if (i != 2) {
                        $(this).parent('div').parent('div').parent('div').parent('div').parent('div').parent('div').removeClass('display-show').addClass('display-none');
                        $(this).parent('div').parent('div').parent('div').parent('div').parent('div').parent('div').parent('div').find('.minus').addClass('display-none');
                        $(this).parent('div').parent('div').parent('div').parent('div').parent('div').parent('div').parent('div').find('.plus').removeClass('display-none');
                    }
                    var ouvert = '0';
                }
            });
        }
    });
}
// FUNCTION SELECT VILLE
function selectVille() {
    var hashqry = window.location;
    var cutqry = hashqry.hash.split('#');
    if (cutqry != "") {
        var qry = cutqry[1];
        var cutqry = qry.split('&');
        for (i = 0; i < cutqry.length; i++) {
            var fullci = cutqry[i].split('=');
            if (fullci[0] == "ci") {
                var ci = fullci[1];
                if (ci.length > 7) {
                    var eachci = ci.split(',');
                    var nbci = eachci.length;
                    for (i = 0; i < nbci; i++) {
                        $('#cpVilles').children('option').each(function () {
                            var allci = ($(this).context.value);
                            if (allci == eachci[i]) {
                                $(this).attr('selected', true);
                            }
                        });
                    }
                } else {
                    $('#cpVilles').children('option').each(function () {
                        var allci = ($(this).context.value);
                        if (allci == ci) {
                            $(this).attr('selected', true);
                        }
                    });
                }
            }
        }
    }
}
//UTILISER LA PAGINATION
function usePagination(maxpage) {
    $('#recherche-listing').on('click', '.pagination a, .pagination div', function (e) {
        e.preventDefault();
        var num = $(this).html();
        if ($('.hidden-annlistepg').length < 1) {
            $('#Mini_Moteur').append('<input type="hidden" value="" name="ANNLISTEpg" class="hidden-annlistepg auto-create-hidden" />');
        }
        if (num == '&lt;&lt;') {
            $('.hidden-annlistepg').val('1');
        } else if (num == '&gt;&gt;') {
            $('.hidden-annlistepg').val(maxpage);
        } else if (num == '&gt;') {
            $('.hidden-annlistepg').val(parseInt($('.page-courante').html()) + 1);
        } else if (num == '&lt;') {
            $('.hidden-annlistepg').val(parseInt($('.page-courante').html()) - 1);
        } else {
            $('.hidden-annlistepg').val(num);
        }
        loadInfos();
    });
}
// CHANGE BUDGET
function changeBudget(idtt) {
    if (idtt == 1 || idtt == 3 || idtt == 7) {
        $('#MiniInputBudgetMin').attr('name', 'px_loyermin');
        $('#MiniInputBudgetMax').attr('name', 'px_loyermax');
    } else if (idtt == 4) {
        $('#MiniInputBudgetMin').attr('name', 'px_bs_semainemin');
        $('#MiniInputBudgetMax').attr('name', 'px_bs_semainemax');
    } else {
        $('#MiniInputBudgetMin').attr('name', 'pxmin');
        $('#MiniInputBudgetMax').attr('name', 'pxmax');
    }
}
// GET FULL HTML
jQuery.fn.outerHTML = function (s) {
    return (s)
      ? this.before(s).remove()
   : $('<p>').append(this.eq(0).clone()).html();
}
//NUMBER IN PANIER
function nbpanier() {
    $.ajax({
        type: 'GET',
        data: "&ti=" + new Date().getTime(),
        cache: false,
        dataType: 'json',
        contentType: "application/json",
        url: '/moteur,refine,incl_nbpanier.js',
        success: function (data) {
            var addedann = data.idselected;
            var nbpanier = data.nbpanier;
            if (parseInt(nbpanier) != 0) {
                var nbselected = addedann.length;
                for (n = 0; n < nbselected; n++) {
                    fixStar(addedann[n].idann);
                }
            }
            countSelection(nbpanier);
        }, error: function (jqXHR, textStatus, errorThrown) {
            //console.log(jqXHR, textStatus, errorThrown);
        }, complete: function (xhr, statusText) {
            //console.log(xhr, statusText);
        }
    });
}
//CHARGEMENT DES ANNONCES ET DU MOTEUR
function loadInfos() {
    $('.text-opti-ref').html('');
    $('.saisie-suggest').val('');
    var qry = serializemoteur();
    var presentation = $('.hidden-pres').val();




    var xhr = $.ajax({
        type: 'GET',
        data: qry + "&ti=" + new Date().getTime(),
        cache: false,
        dataType: 'json',
        contentType: "application/json",
        url: '/moteur,refine,incl_refine_js.js',
        beforeSend: function () {
            $('.layer').show();
            $('.layer-annonce').show();
            $('.layer').addClass('display-show').removeClass('display-none');
            $('.layer-annonce').addClass('display-show').removeClass('display-none');
            hideAll();
        },
        success: function (data) {
            // FIX SCROLL
            scrollFix();
            //ADD ASH TO QUERY
            location.hash = data.qry;

            var nbphrase = $('.bloc-prase-nb').children('.nb-annonces').clone();
            nbphrase.html(data.nbphrase);
            $('.phrase-recherche').html(data.phrase);
            if ($('.phrase-recherche-input')); 
            {
                $('.phrase-recherche-input').val(data.phrase);
            }
            $('.bloc-prase-nb').html('');
            $('.bloc-prase-nb').append(nbphrase.outerHTML());
            //MISE A JOUR DE L ALERTE
            $("input[name='qry']").val(data.qry);
            $("input[name='phrase']").val(data.phrase);
            $("input[name='page_base']").val(lienAlerte + '?' + data.qry);
            //MISE A JOUR DU MOTEUR
            zeroquery = data.zeroquery;
            $('#cpVilles').trigger("liszt:updated");
            //RECUP IDTT
            if (data.idtt != "") {
                $('.hidden-idtt').val(data.idtt);
                $('.refine-transac').parent().children('.titre-section-refine').find('.span11').html(data.transac);
                $('.refineIdtt').each(function () {
                    //console.log(data.idtt + ' : ' + $(this).attr('data-idtt'));
                    if ($(this).attr('data-idtt') == data.idtt) {
                        $(this).addClass(btnaction + " typo-white").removeClass(btnneutre);
                        $(this).find('.json-check').removeClass('display-none').addClass('display-show');
                    } else {
                        $(this).addClass(btnneutre).removeClass(btnaction + " typo-white");
                        $(this).find('.json-check').addClass('display-none').removeClass('display-show');
                    }
                });
                changeBudget(data.idtt);
            }
            //RECUP IDVPA ( FILTRE PERSO)
            if (data.idvpa != "") {
                var idvpa = data.idvpa.split(',');
                var nbidvpa = idvpa.length;
                $('.refineIdpva').addClass(btnneutre).removeClass(btnaction + " typo-white");
                $('.refineIdpva').find('.json-check').addClass('display-none');
                $('.refineIdpva').each(function () {
                    for (i = 0; i < nbidvpa; i++) {
                        if ($(this).attr('data-value') == idvpa[i]) {
                            $(this).addClass(btnaction + " typo-white").removeClass(btnneutre);
                            $(this).find('.json-check').removeClass('display-none').addClass('display-show');
                        }
                    }
                });
            }
            var idtt = data.idtt;
            triloyer(idtt);

            var valtri = data.tri;
            if (valtri != '') {
                $('.hidden-tri').val(valtri);
            }
            $('#trierRefine').find('option').each(function () {
                if ($(this).val() == valtri) {
                    $(this).attr('selected', true);
                }
            });
            window.top.document.title = $('.phrase-recherche').text();

            /************************************* */
            /************************************* */
            /************************************* */
            /*         ICI AJAX POUR LE TIRE    */
            /************************************* */
            $("#recherche-ttl-ajax").html(data.transac + " " + data.typebien + "<span>" + data.localite + "</span>");

            $("#recherche-moteur").removeClass("open").removeClass("active");
            $("body").removeClass("modal-active");

        },
        error: function (jqXHR, textStatus, errorThrown) {
            //console.log(jqXHR, textStatus, errorThrown);
            divcontent.html('<div class="pagination-centered"><img src="/z/webagency/slagence_X_V5/images/carto/ajax-loader.gif" alt="loader" /></div><div class="pagination-centered h2-like">LOADING</div>');
            $('.layer').removeClass('display-show').addClass('display-none');
            $('.layer-annonce').removeClass('display-show').addClass('display-none');
        },
        complete: function (xhr, statusText) {
            //console.log(xhr, statusText);
            //openList();

        }
    });
    //RELOAD MOTEUR REFINE
    $.ajax({
        type: "GET",
        dataType: 'html',
        cache: false,
        data: qry,
        url: '/recherche,incl_moteur_ajax.htm',
        success: function (data) {
            $('.loaded-moteur').remove();
            //$('#content-moteur').html('');
            //$('#content-moteur').html(data);
            $('.last-before-load').after(data);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            //console.log(jqXHR, textStatus, errorThrown);
            $('.layer').removeClass('display-show').addClass('display-none');
            $('.layer-annonce').removeClass('display-show').addClass('display-none');
        }, complete: function (xhr, statusText) {
            //console.log(xhr, statusText);
            //openList();
        }
    });
    //RELOAD MOTEUR REFINE IDTYPEBIEN
    $.ajax({
        type: "GET",
        dataType: 'html',
        cache: false,
        data: qry,
        url: '/recherche,incl_moteur_typebien_ajax.htm',
        success: function (data) {
            $('.typebien-refine').html('');
            $('.typebien-refine').html(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            //console.log(jqXHR, textStatus, errorThrown);
            $('.layer').removeClass('display-show').addClass('display-none');
            $('.layer-annonce').removeClass('display-show').addClass('display-none');
        }, complete: function (xhr, statusText) {
            //console.log(xhr, statusText);
            //openList();
        }
    });
    $.ajax({
        type: "GET",
        dataType: 'html',
        cache: false,
        data: qry,
        url: '/recherche,incl_recherche_' + presentation + '_ajax.htm',
        success: function (data) {
            divcontent.html(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            //console.log(jqXHR, textStatus, errorThrown);
        },
        complete: function (xhr, statusText) {
            $('.saisie-suggest').val($('.saisie-suggest').attr('data-value'));
            $('.refine-page').children('a').each(function () {
                $(this).attr('href', '#');
            });
            // RELOAD
            $('.btn-tooltip').tooltip();
            $('#content-moteur').find('.choix-selection-refine').each(function () {
                var $this = $(this);
                champshidden($this);
            });
            $('.layer').hide();
            $('.layer-annonce').hide();
            $('.layer').addClass('display-none').removeClass('display-show');
            $('.layer-annonce').addClass('display-none').removeClass('display-show');
            if (isEpsa == 1) {
                checkAnnonces();
                ifLog();
            };
        }
    });
    nbpanier();
    hideAll();
}
function switchNamePx(e, a, b) {
    var $this = e;
    var idToChange = $this.id;
    if ($this.value == $this[$this.length - 1].value) {
        $('#' + idToChange).attr('name', a);
    }
    else {
        $('#' + idToChange).attr('name', b);
    }
}
