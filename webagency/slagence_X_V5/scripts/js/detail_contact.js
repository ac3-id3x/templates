var boutonOK = '', messageOK = '';
var contactFormInitiated = false;
var ajaxDetailContact = null, formContactAgence = null, responseBox = null, submitButton = null, submitNormal = null;

function dc_clear(name) {
	var input = $('.clearable[name=' + name + ']');
	input.removeClass('x onX').blur();
	input.datepicker('hide');
	input.datepicker('clearDates');
	
	if (name === 'start') dc_clear('end');
}


function dc_tog(v) {
	return v ? 'addClass' : 'removeClass';
}


function dc_sendMailContact() {
	
	$.ajax({
		type: 'POST',
		dataType: 'json',
		url: "/detail,incl_contact_agence_email.htm",
		data: ajaxDetailContact,
		success: function(data) {
			if (data.message.length) {
				responseBox.html(data.message);
				submitButton.button('reset');
			}
			else {
				responseBox.html(messageOK);
				submitButton.html(boutonOK);
			}
		},
		error: function (xhr, status, errorThrown) {
			//console.log(xhr);
		}
	});
	
}


function dc_sendMailToAgency(idp) {
	// p = { form: Object }
	
	var rawData = $('#contact_ajax_SLAgence_X_V5');
	if (rawData.length) {
		var ajaxToAgency = rawData.serialize();
		
		$.ajax({
			type: 'POST',
			dataType: "html",
			url: "/agence,contact.htm?idp=" + idp,
			data: ajaxToAgency,
			success: function(data) {
				window.location.href = document.getElementsByName('page_ok')[0].value;
			},
			error: function(xhr, status, errorThrown) {
				window.location.href = document.getElementsByName('page_err')[0].value;
			}
		});
	}
	
}


function incl_detail_contact(p) {
	/*
	p = {
		,annIdtt: String
		,bienEnvoye: String
		,envoiConfirme: String
		,idp: String
		,nomAgenceDetail: String
		,recaptchaGoogle: String
		,traitementMail: String
		,traitonsDemande: String
		,typBtn: String
		,typBtnAct: String
		,urlVirtuelle: String
	}
	*/
	
	
	// /z/webagency/slagence_X_V5/agence/contact_ajax.htm
	
	if (p.idp != '' && p.typBtn != '' && p.typBtnAct != '') {
		var buttonMailToAgency = $('.' + p.typBtn + '.' + p.typBtnAct + '.btn-large.btn-block');
		if (buttonMailToAgency.length) {
			var onClickExpr = "dc_sendMailToAgency('" + p.idp + "');";
			
			if (p.recaptchaGoogle == '1') onClickExpr = 'e.preventDefault(); useGoogleRecaptcha({ final_steps: "' + onClickExpr + '" });';
			
			onClickExpr = 'buttonMailToAgency.on("click", function(e) { ' + onClickExpr + ' });';
			eval(onClickExpr);
		}
	}
	
	
	// /z/webagency/slagence_X_V5/detail/incl_detail_contact.htm
	
	formContactAgence = $('#form-contact-agence');
	if (formContactAgence.length) {
		
		
		formContactAgence.find('input[type=text]').change(function() {
			if (!contactFormInitiated) {
				var contactType = formContactAgence.find('input[name=type-message]:checked').attr('data-type');
				contactFormInitiated = true;
			}
		});
		
		
		submitButton = $('.btn-send-contact');
		if (submitButton.length) {
			submitNormal = submitButton.html();
			
			$(submitButton).on('click', function() {
				var msgError = '';
				if ($('input[name="cnom"]').val() == '') msgError = 'nom';
				if ($('input[name="from"]').val() == '') msgError += ',email';
				if ($('input[name="ctel"]').val() == '') msgError += ',tel';
				var contactType = formContactAgence.find('input[name=type-message]:checked').attr('data-type');
			});
			
		}
		
		
		responseBox = $('.response');
		
		
		formContactAgence.find('input[name=type-message]').change(function() {
			var radioChecked = $(this);
			$('fieldset').slideUp().hide();
			$('fieldset.' + radioChecked.attr('data-type')).slideDown().show();
			responseBox.html('');
			submitButton.button('reset');
		});
		
		
		messageOK = '<i class="pt10 text-center bigger icon-v5-checkmark"></i><span class="big">' + p.bienEnvoye + '</span>';
		if (p.traitementMail == '1') messageOK += '<br />' + p.traitonsDemande;
		
		
		boutonOK = p.envoiConfirme;
		
		
		formContactAgence.submit(function(e) {
			e.preventDefault();
			
			var $form = $(this);
			if ($form.length) {
				
				var contactForm = $form.serialize();
				if (contactForm) {
					
					var contactFormNoComa = contactForm.replace(',/g', '\,');
					if (contactFormNoComa) {
						
						var contactFormNoBackspace = contactFormNoComa.replace(/%0D%0A/g,' ');
						if (contactFormNoBackspace) {
							
							var message = $form.find('input[name=type-message]:checked').attr('data-message');
							if (message) {
								message += "(annonce réf : " + p.nomAgenceDetail + "  " + p.urlVirtuelle + ")  Cordialement";
								contactFormNoBackspace += '&content=' + message;
							}
							
							var demande_autre = $form.find('textarea[name=demande_autre]').val();
							if (demande_autre) {
								
								
								// ~~~ durée de la période de location ~~~ //
								var periode = null,
									inputStart = $form.find('input.input-small[name=start]'),
									inputEnd   = $form.find('input.input-small[name=end]');
								
								if (inputStart.length) {
									periode = "Période location souhaitée : ";
									
									periode += (
										(inputEnd.length > 0) ?
										("du " +inputStart.val() + " au " + inputEnd.val()) :
										("départ le " + inputStart.val())
									);
									
									demande_autre += '\\n' + periode;
								}
								// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
								
								
								contactFormNoBackspace += '&message=' + demande_autre;
							}
							
							
							// AJAX data
							ajaxDetailContact = contactFormNoBackspace;
							
							
							submitButton.button('loading');
							
							
							// standard mode, OR use Recaptcha Google
							if (p.recaptchaGoogle != '1') {
								dc_sendMailContact();
							}
							else {
								e.preventDefault();
								useGoogleRecaptcha({ final_steps: "dc_sendMailContact();" });
							}
							
						}
					}
				}
			}
		});
		
	}
	
	
	// old rule for something
	if (p.annIdtt == '4') {
		$('.input-daterange').datepicker({
			 language: "fr"
			,toggleActive: true
			,weekStart: 1
		});
		
		
		// bloc
		$(document).on('change', '.clearable', function() {
			if (this.value === '' && $(this).hasClass('x')) {
				dc_clear($(this).attr('name'));
			}
			else {
				$(this)[dc_tog(this.value)]('x');
			}
		})
		.on('mousemove', '.x', function(e) {
			$(this)[dc_tog(this.offsetWidth - 18 < e.clientX - this.getBoundingClientRect().left)]('onX');
		})
		.on('touchstart click', '.onX', function(ev) {
			ev.stopPropagation();
			
			var that = $(this);
			that[0].hideDatepicker = true;
			dc_clear(that.attr('name'));
			
			setTimeout(function() {
				that[0].hideDatepicker = false;
			}, 200);
		});
		// END of bloc
		
	}
	
}
