{#}html##test##{#}eval##
$$B:E3:KA-LIST_TRANSAC:~cp:QRY:CP:ALIAS:TRANSACS$$
$$BIF:TRANSACS$$$$DO$$			
		sndReq(affTransac($$TRANSACS:TYPEBIEN$$,$$TRANSACS:NBPIECES$$,$$TRANSACS:SURFACE$$,$$TRANSACS:ADRESSE$$,$$TRANSACS:VILLE$$,$$TRANSACS:PRIX$$,$$TRANSACS:DATE$$,$$TRANSACS:AGENCE$$));
	$$LOOP$$
$$BFIN$$	
$$BIF0:TRANSACS$$
"Aucune vente ne répond à vos critères"
$$BFIN$$
{#}