function enableApplicationRental(refAnnonce) {
	$.ajax({
		type: 'GET',
		url: 'https://costimmobilier.candidature-location.com/b/api/v1/biens/is_active/'+ refAnnonce + '/',
		cache: true,
		//contentType: 'application/json',
		dataType: 'json',
		success: function(data) {
			if (data != null) {
				//console.log(data);	
				if (data.url_de_depot != undefined) {
					var candidatureLocationId = 'candidature-location';
					$('#'+candidatureLocationId).attr("href", data.url_de_depot);
					$('#'+candidatureLocationId).attr("target", "_blank");
				}
			}
		}
	});
}
