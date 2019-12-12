$('.starMarker').click(function() {
	var splitAnnonce = $(this).attr('id').split('_');
	var idAnnonce = splitAnnonce[0];
	var idP = splitAnnonce[1];
	// ADD ANNONCE BASKET
	$.ajax({
		type: "GET",
		data: 'idannonce='+idAnnonce+'&idp='+idP,
		dataType: "html",
		url: '/moteur,ajout_panier.htm',
		beforeSend: function() {
		},
		success: function(data) {
			
		},
		error: function(xhr,statusText) {
		},
		complete: function(xhr,statusText) {
		$('.message').show(100).delay(1000).hide(100);
		}
	})
});
$('.annonceMarker').click(function() {
	var splitAnnonce = $(this).attr('id').split('_');
	var idAnnonce = splitAnnonce[0];
	var idP = splitAnnonce[1];
	console.log()
	// DELETE ANNONCE
	$.ajax({
		type: "GET",
		data: 'idannonce='+idAnnonce+'&idp='+idP,
		dataType: "html",
		url: '/moteur,vider_annonce.htm',
		beforeSend: function() {
		},
		success: function(data) {
			// REFRESH PAGE
			window.setTimeout( "window.location.reload();", 100 );
		},
		error: function(xhr,statusText) {
		},
		complete: function(xhr,statusText) {
		}
	})
});
$('.trashMarker').click(function() {
	// DELETE FULL BASKET
	$.ajax({
		type: "GET",
		url: '/moteur,vider_panier.htm',
		beforeSend: function() {
		},
		success: function(data) {
			// REFRESH PAGE
			window.setTimeout( "window.location.reload();", 100 );
		},
		error: function(xhr,statusText) {
		},
		complete: function(xhr,statusText) {
		}
	})
});