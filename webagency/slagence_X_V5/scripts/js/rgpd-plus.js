// variables
var acceptRgpd = false, deviceRgpd = detectDevice();

// size
function setRgpdSize() {
	var mwTop = 10, mwWidth = 1, mwMarginLeft = 1, mwbMaxHeight = 1, _dr = getDeviceRotation();
	switch (deviceRgpd) {
		case 0: // desktop
			mwTop = 10;
			mwWidth = 560;
			mwMarginLeft = -280;
			mwbMaxHeight = 600;
			break;
		case 1: // smartphone
			mwTop =  3;
			mwWidth = _dr.xAxis - 20;
			mwMarginLeft = mwWidth / 2 * -1;
			mwbMaxHeight = (_dr.yAxis - 180 > 20 ? _dr.yAxis - 180 : 20);
			break;
		case 2: // tablet PC
			mwTop = 10;
			mwWidth = 560;
			mwMarginLeft = -280;
			mwbMaxHeight = 600;
			break;
	}
	
	var mwRgpd = document.getElementById('modalRgpdPlus'), mwbRgpd = document.getElementById('modalRgpdPlus-body');
	if (mwRgpd)   mwRgpd.style.cssText += "top:" + mwTop.toString() + "%;width:" + mwWidth.toString() + "px;margin-left:" + mwMarginLeft.toString() + "px;";
	if (mwbRgpd) mwbRgpd.style.cssText += "max-height:" + mwbMaxHeight.toString() + "px;";
}
setRgpdSize();


// detect screen rotation on devices
window.addEventListener('resize', function(e) { setRgpdSize(); }, false);


// set checkboxes events
var ckRgpd1 = document.getElementById('ckbxRgpdPlus1'), ckRgpd2 = document.getElementById('ckbxRgpdPlus2'), 
	ckRgpd3 = document.getElementById('ckbxRgpdPlus3'), ckRgpd4 = document.getElementById('ckbxRgpdPlus4');

// get hidden input
var rgpdPlusOk = document.getElementsByName('rgpdPlusOk'), rgpdPlus3 = document.getElementsByName('rgpdPlus3'), rgpdPlus4 = document.getElementsByName('rgpdPlus4');
if (rgpdPlusOk.length > 0) rgpdPlusOk = rgpdPlusOk[0];
if (rgpdPlus3.length > 0) rgpdPlus3 = rgpdPlus3[0];
if (rgpdPlus4.length > 0) rgpdPlus4 = rgpdPlus4[0];

function enableRgpdOk() {
	var btnAccept = $('#btnRgpdPlusAccept');
	
	// allow to sent data to partners
	if (rgpdPlus3) rgpdPlus3.value = (ckRgpd3.checked ? '1':'0');
	if (rgpdPlus4) rgpdPlus4.value = (ckRgpd4.checked ? '1':'0');
	
	// is RGPD accepted ?
	if (ckRgpd1.checked && ckRgpd2.checked) {
		btnAccept.removeClass('disabled');
		acceptRgpd = true;
	}
	else {
		btnAccept.addClass('disabled');
		acceptRgpd = false;
	}
}

var cksRgpd = [ckRgpd1, ckRgpd2, ckRgpd3, ckRgpd4];
cksRgpd.forEach(function(el) {
	if (el) {
		el.parentNode.style.cssText += "text-align:left !important;";
		el.addEventListener('change', function() { enableRgpdOk(); }, false);
	}
});


// buttons
function getIdFormWithRgpd(currentElement) {
	var idForm = null, tagName = currentElement.tagName.toLowerCase();
	
	if (tagName != 'body') {
		idForm = (tagName === 'form') ? currentElement.id : getIdFormWithRgpd(currentElement.parentNode);
	}
	
	return idForm;
}

function sendMailWithRgpd(currentElement) {
	if (acceptRgpd) {
		if (rgpdPlusOk) rgpdPlusOk.value = '1';
		var idForm = getIdFormWithRgpd(currentElement);
		if (idForm) {
			//var _form = document.getElementById(idForm);
			//if (_form) _form.submit(); // <= niet.
			
			// https://www.cph.fr.x-web.poliris.net/immobilier/achat/immo-saint-hilarion-78/bien-maison/
			//var btn = $(this);
			//btn.button('loading');
			$.ajax({
				type: "POST",
				data : $('#'+ idForm).serialize(),
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
						//btn.next('.bouton-alerte-moteur2-ga').trigger('click');
					}
				},
				error : function (jqXHR, textStatus, errorThrown) {
					console.log(jqXHR, textStatus, errorThrown);
				},
				complete: function() {
					//btn.button('reset');
					$('.message-erreur-alerte').show('slow').delay(1500).hide('slow');
				}
			});
		}
	}
}

var btnRgpdOk = document.getElementById('btnRgpdPlusAccept');
if (btnRgpdOk) btnRgpdOk.addEventListener('click', function() { sendMailWithRgpd(this); }, false);
