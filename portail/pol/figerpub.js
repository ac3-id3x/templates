$$CONTENT:TOJS$$
$$B:IMMOBC:AGENCEPUBLICATIONSESSION$$
$$E:IMMOBC:AGENCECORE:QRY:IDAGENCE$$
$$BIF:IMMOBC:AGENCEPUBLICATIONSESSION$$
$$DO:1:100$$
$$IF:IMMOBC:AGENCEPUBLICATIONSESSION:BOU1NUM$$
	$$IF=:0:IMMOBC:AGENCEPUBLICATIONSESSION:SI_CACHE$$ 
		$$IF0:IMMOBC:AGENCEPUBLICATIONSESSION:SI_VEILLE$$ 
			$$IF=:1$2:IMMOBC:AGENCEPUBLICATIONSESSION:IDTYPEPARUTION$$ 
				$$IF=:0:IMMOBC:AGENCEPUBLICATIONSESSION:SI_FIGEE$$
					[<a href="javascript:PopUP('http://annonces.selogerpro.com/$$IMMOBC:AGENCEPUBLICATIONSESSION:IDPUBLICATION$$/$$IMMOBC:AGENCEPUBLICATIONSESSION:IDAGENCE$$/p_figerpub.htm?publication=$$IMMOBC:AGENCEPUBLICATIONSESSION:PUBLICATION urlencode$$&anntot=$$IMMOBC:AGENCECORE:NBANN$$','BlocagePublication',800,500,10,10);">Figer la publication $$IMMOBC:AGENCEPUBLICATIONSESSION:PUBLICATION$$</a>]<br>
				$$END:SIPASDEJAFIGE$$ 
			$$END:SIVEILLE$$ 
		$$END:IDTYPEPARUTION$$ 
	$$END:CACHE$$
$$END$$
$$LOOP$$
$$BFIN$$