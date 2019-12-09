$j(document).ready(function() {
	$j('.actions_liste_annonce').mouseover(function () {
		$j(this).find('.actions_tooltip').show();
	});
	
	$j('.actions_liste_annonce').mouseout(function () {
		$j(this).find('.actions_tooltip').hide();
	});

	$j('#btn_transfer_biens_vendus').click(function () {
		$j('#u_form_field').val('SLPRO:KA-ANNONCES-TO-BIENS-VENDUS');
        $j('#page_ok_form_field').val('/biens_vendus.htm');
        $j('#form').attr('action', '/biens_vendus.htm?siInvalides=1');
		$j('#form').attr('onsubmit', '').bind('submit', function() {
            return delouinon('biens_vendus');
        });
	});
});