// VARIABLES
var divcontent = $("#recherche-listing");
var noqry = "";
var eachAnnonce = '';

$(document).ready(function () {

    // MOBILE VERSION
    $('.moteur-mobilefirst-mobile-toggle').click(function () {
        $('.moteur-mobilefirst').addClass('is-active');
        $('body').addClass("has-modal");
        return false;
    });

    $(".moteur-mobilefirst-close").click(function() {
        $('.moteur-mobilefirst').removeClass("is-active");
        $('body').removeClass("has-modal");
    });


	// AU CHARGEMENT DE LA PAGE ON RECHERCHE UN HASH DANS L'URL
	if( $("#Mini_Moteur").length ) {
		reloadSearch();	
	}
	
	// Soumission du formulaire
	if (id3xContent.macro.E.PAGE.WAG_STYLE_RECHERCHE_DEFAULT != 'prestige') {
		$("#Mini_Moteur").submit(function(e){
			e.preventDefault();
			$('.moteur-mobilefirst').removeClass('is-active');
			$('body').removeClass("has-modal");
			//On remet la pagination à 1
			$('#Mini_Moteur').find("[name='annlistepg']").val( 1 );
			$('#Mini_Moteur').find(".message-suggest-liste,.close-liste").hide();
			if( $('#idtypebien').val() ) {
				$('#idtypebien-hidden').val("");
			}
			loadInfos();
		});
	}

	//UTILISATION DU TRI
    $("#trierRefine").change(function(e){
        loadInfos();
    });

     //SUPPRESSION D'UN CRITERE DE VENTE VIA LE FIL ROUGE
    $(".recherche-mobilefirst").on("click", ".remove-filter", function(e){
    	e.preventDefault();
        var thisName = $(this).data("qry");
        $("#Mini_Moteur").find("[name='"+thisName+"']").each(function(){
            $(this).val("");
            if(thisName == "ci"){
                $(".line-suggest-selected").remove();
            }
        });
        loadInfos();
    });

	$('.ville-suggest-liste').on('click','.line-suggest-selected', function(e) {
		e.preventDefault();
        loadInfos();
    });

    // CLIC sur la pagination
    $('#recherche-listing').on('click', '.pagination a, .pagination div', function(e){
        e.preventDefault();
        var num = $(this).html();

        if(num == '&lt;&lt;'){
            num = 1;
        }else if(num == '&gt;&gt;'){
            num = maxpage;
        }else if(num == '&gt;'){
            num = parseInt($('.page-courante').html())+1;
        }else if(num == '&lt;'){
            num = parseInt($('.page-courante').html())-1;
        }
        $('#Mini_Moteur').find("[name='annlistepg']").val( num );

        loadInfos();
    });

     //REMISE A ZERO
	$("#Mini_Moteur, #recherche-listing").on("click", ".bouton-raz", function(e){
		e.preventDefault();
		clearAll();
		loadInfos();
	});

	$("#idtt").change(function(){
        ajaxGetMf("idtt",'Mini_Biens','type_biens','idtypebien='+$("#idtypebien-hidden").val(),true);
		//ajaxGetMf('idtt','Mini_Villes','villes_ajax','ci='+$("#ciInput").val(),true);
		ajaxGetMf('idtt','Mini_Budget','budget_mobilefirst','pxmax='+$("#pxmax").val()+'&px_loyermax='+$("#pxmax").val(),true);
    });

	function loadInfos() {
	    if (location.hash == '#expiree') {
	        location.hash = '';
	        return;
	    }

	    var qry = serializemoteur();

	    var xhr = $.ajax({
	        type: 'GET',
	        data:qry + "&ti="+new Date().getTime(),
	        cache: false,
	        dataType: 'json',
	        contentType: "application/json",
	        url: '/moteur,refine,incl_refine_js_mobilefirst.js',
	        beforeSend: function() {

	        	//on affiche le loader
	        	$('.layer,.layer-annonce').addClass('display-show').removeClass('display-none');

	        	// j'imagine que ça permet de cacher le texte ici, à voir si balise présent dans la structure ?
	    		$('.text-opti-ref').html('');

	        },
	        success: function(data) {
	            //ADD ASH TO QUERY
	            location.hash = data.qry;

	            // MISE A JOUR DU H1
	            $('.recherche-ttl-nb').html(data.ttl_nb);
	            $('.recherche-ttl-more').html(data.ttl_more);
	            $('.phrase-recherche').html(data.phrase);

				// MISE A JOUR DU TITRE
	            window.top.document.title = $('.phrase-recherche').text();

	            //MISE A JOUR DE L ALERTE
	            $("input[name='qry']").val(data.qry);
	            $("input[name='phrase']").val(data.phrase);
	            $("input[name='page_base']").val(lienAlerte+'?'+data.qry);

	            //Sélectionne l'option de tri choisi (pas bien compris pourquoi, mais ça fait pas de mal de le laisser)
	            var valtri= data.tri;
	            $('#trierRefine').find('option').each(function(){
	                if($(this).val() == valtri){
	                    $(this).attr('selected',true);
	                }
	            });

	            $.ajax({
			        type: "GET",
			        dataType:'html',
			        cache: false,
			        data : qry,
			        url: '/recherche,incl_recherche_mobilefirst_ajax.htm',
			        success: function(data) {
			            divcontent.html(data);
						
						// PLSIT-1152
						// Developer's grudge : what do you do, when you reinject HTML code by Ajax request ?
						//                      => Of course, you need to reattach some associated events.
						//                         Look at the HTML code from the «data» object to know which events are needed. Pff.
						
						// UTILISATION DU TRI
						$("#trierRefine").change(function(e) {
							loadInfos();
						});
						
						// events reattached (frankly, stop doing that stuff)
			        },
			        complete: function(xhr,statusText) {

			            //On enlève le loader
			            $('.layer, .layer-annonce').addClass('display-none').removeClass('display-show');

			            // RELOAD les tooltip
						$('.btn-tooltip').tooltip();

						//On recharge les mises au panier
						nbpanier();

			            // on remonte en haut de page
			            scrollFix(1);
			        }
			    });
	        }
	    });
	}

	function serializemoteur(){
	    var values = {};
	    var qry = $('#Mini_Moteur input,select').filter(function(){
	        var name = $(this).prop('name'),
	        	 val = $(this).val();
	        if (name) {
	            if (!values[name]) values[name] = [];
	            if ((values)[name].indexOf(val) === -1  && name != 'saisie') {
	                values[name].push(val);
	                return val;
	            }
	        } else return val;
	    }).serialize();
	    return qry;
	}

	function scrollFix(scrollToTop) {
	    if(scrollToTop == 1){
	        $("html, body").animate({scrollTop: 0 }, 600);return false;
	    }
	}

	function clearAll(){
		//On remet tout à zéro, sauf l'IDTT
		$("#Mini_Moteur").find("input,select").not("[name='idtt'],[name='saisie']").val("");
		$('.ville-suggest-liste').html('');
	}

	function ajaxGetMf(value_select, divid, url_get, val, synchrone) {
		var split_elem = value_select.split('|');
		var length_elem = split_elem.length;
		var dataSend = '';
		for(i = 0; i < length_elem; i ++) {
			var value_elem = $("#"+split_elem[i]).val();
			var name_elem = $("#"+split_elem[i]).attr("name");
			dataSend += dataSend+name_elem+'='+value_elem+'&';
		}
		if(val) {
		  dataSend += val + '&';
		}
		
		dataSend += 'typemoteur='+typemoteur+'&lang='+lang+'&style_budget='+typebudget;

		if($('#'+split_elem[0]).val() != '') {
			$("."+divid).each(function() {
			    $(this).show();
			});
			$.ajax({
				type: "GET",
				data: dataSend,
				dataType: "html",
				sync: synchrone,
				url: '/moteur,mini,incl_'+url_get+'.htm',
				beforeSend: function() {
					$("."+divid).each(function() {
						$(this).show();
					});
				},
				success: function(data) {
					$("."+divid).each(function() {
						$(this).show();
						$(this).html(data);
						if($("."+divid).find('select').hasClass("multiselect")){
							$("."+divid+" .multiselect").multipleSelect();
						};
					});
		 	 	}
			});
		}
	}

	function loadville(qry){
		$.ajax({
			type: "GET",
			dataType:'html',
			cache: false,
			data : qry,
			url: '/moteur,suggest,incl_get_localisation_ajax.htm',
			success: function(data) {
				$('.ville-suggest-liste').html(data);
		 	 }
		});
	}

	function reloadSearch(){
		var idtypebien = $("#idtypebien-hidden").val();
		var pxmax = $("#pxmax").val();
	    var hashqry = window.location;
	    var cutqry = hashqry.hash.split('#');

	    if (cutqry !="") {
	    	//On récupère les variables ajax
	        var qry = cutqry[1];
	        var cutqry = qry.split('&');

	        //On remet le moteur à zéro
	        clearAll();

	        //On s'occupe d'abord de récupérer l'idtt
	        for(l=0;l<cutqry.length;l++){
	            var attr= cutqry[l].split('=');
	            if( "idtt" == attr[0] ){
	            	$("[name='"+attr[0]+"'").val(attr[1]);
				}
	        }

	        //Pour chaque variable ajax, on met à jour le moteur
	        for(l=0;l<cutqry.length;l++){
	            var attr= cutqry[l].split('=');
	            if( "idtt" == attr[0] ) continue;
	            $("[name='"+attr[0]+"'").val(attr[1]);
	            if( "idtypebien" == attr[0] ){
	            	idtypebien = attr[1];
	            	$("#idtypebien-hidden").val(idtypebien);
	            }
	            if( "pxmax" == attr[0] ){
	            	pxmax = attr[1];
	            	$("#pxmax").val(pxmax);
	            }
	            if( "px_loyermax" == attr[0] ){
	            	pxmax = attr[1];
	            	$("#pxmax").val(pxmax);
	            }
	        }

            ajaxGetMf('idtt','Mini_Biens','type_biens', 'idtypebien='+idtypebien,false);
			ajaxGetMf('idtt','Mini_Budget','budget_mobilefirst', 'pxmax='+pxmax+'&px_loyermax='+pxmax,false);
			//ajaxGetMf('idtt','Mini_Villes','villes_ajax','ci='+$("#ciInput").val(),true);

	        if (qry != undefined){
	           loadInfos();
	           loadville(qry);  //On écrit la valeur de saisie du suggest
	        }
	    }else{
			ajaxGetMf('idtt','Mini_Biens','type_biens','idtypebien='+$("#idtypebien-hidden").val(),true);
			//ajaxGetMf('idtt','Mini_Villes','villes_ajax','ci='+$("#ciInput").val(),true);
			ajaxGetMf('idtt','Mini_Budget','budget_mobilefirst','pxmax='+$("#pxmax").val()+'&px_loyermax='+$("#pxmax").val(),true);
	    }
	}

	//NUMBER IN PANIER
	function nbpanier(){
		$.ajax({
			type: 'GET',
			data:"&ti="+new Date().getTime(),
			cache: false,
			dataType: 'json',
			contentType: "application/json",
			url: '/moteur,refine,incl_nbpanier.js',
			success: function(data) {
				var addedann = data.idselected;
				var nbpanier = data.nbpanier;
				if(parseInt(nbpanier) != 0) {
					var nbselected = addedann.length;
					for( n=0;n<nbselected;n++){
						fixStar(addedann[n].idann);
					}
				}
				countSelection(nbpanier);
			 }, error : function (jqXHR, textStatus, errorThrown) {
				//console.log(jqXHR, textStatus, errorThrown);
			 }, complete: function(xhr,statusText) {
				//console.log(xhr, statusText);
			}
		});
	}
});
