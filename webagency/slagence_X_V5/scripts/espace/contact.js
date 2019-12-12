var espaceContactGeoMapId = '';
function chargeInfoAgence(reloadMap, idPublication){ 
	$('#ctc-content').html(loading);
	$.ajax({
		type: "GET",
		data : 'idp=' + idPublication,
		dataType:'html',
		url: '/agence,contact_ajax.htm',
		success: function(data) {
			$('#ctc-content').html(data); //   <= developer's grudge : never do that (again), it's madness.
			if (reloadMap) {
				var elementId = espaceContactGeoMapId;
				if (document.getElementById(elementId)) {
					// necessary to refresh the map.
					var _date = id3xContent.geolocation.manager.initStringFromDate();
					var nodeId = elementId + '-inner-' + _date;
					document.getElementById(elementId).innerHTML = '<div id="' + nodeId + '" style="width: 100%; height: 100%;"></div>';
					
					// ... add NEW map, in NEW container. Pff.
					id3xContent.addMap({
						container: { id: nodeId },
						mapData: [{
							mapDataType: 'AGENCIES',
							marker: { icon: {defaultIcon: {color: colorMarker }}, popup: true },
							filters: [ {action: 'single', key: 'idPublication', value: idPublication} ]
						}]
					});
				}
			}
		},
		error : function (jqXHR, textStatus, errorThrown) {
			$('#ctc-content').html('Erreur de chargement...');
		},
		complete: function() {
			
		}
	});
}

// AJAX CONTACT
$(window).load(function() {
	if (!$("#bing-json-idp").val()) {
		chargeInfoAgence(false, $('.ctc-select-agence').val());
	}
});

$('#ctc-content').on('click','.agence-telephonez-nous', function() {
	var $this = $(this);
	$this.find('#texte-telephonez-nous').hide();
	$this.find('#numero-telephonez-nous').show();
	$this.attr('id','');
	$this.unbind('click');
});

var loadAgencyInfo = true;
$('.ctc-select-agence').on('change', function() {
	if (loadAgencyInfo) { loadAgencyInfo = false; chargeInfoAgence(true, $(this).val()); }
});

// INPUT FORM CONTACT
$("#ctc-content").on("focusin",".ctc-field-input", function() {
	$(this).addClass("focused");
});

$("#ctc-content").on("focusout",".ctc-field-input", function() {
	if(!$(this).find(".ctc-field-txt").val()) {
		$(this).removeClass("focused");
	}
});

// TEXTAREA FORM CONTACT
$("#ctc-content").on("focusin",".ctc-field-textarea", function() {
	$(this).addClass("focused");
});

$("#ctc-content").on("focusout",".ctc-field-textarea", function() {
	if (!$(this).find(".ctc-field-txt").val()) {
		$(this).removeClass("focused");
	}
});

// SELECT FORM CONTACT
function colorSelect(elt){
	if (elt.find("select").val()) {
		elt.addClass("filled");
	}
	else {
		elt.removeClass("filled");
	}
}

$("#ctc-content").on("change",".ctc-field-select",function() {
	colorSelect($(this));
});

$(function() {
    if( $("#ctc-form-error").length ){
        var h = 0, elt = $("#ctc-form-error");
        var p = elt.offset().top;
        if ($("header").css("position") == "fixed") h = $("header").height();
        $("html, body").animate({scrollTop:(p-h-40)},1000);
        
    }
});
