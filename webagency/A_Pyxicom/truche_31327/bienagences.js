$$DYN:ID3:TOJS$$

$$B:IMMOBW:AGENCETRANSACTIONS:ALIAS:BIENSAGENCES:REP:1:QRY:LANG$$
			$$BIF:BIENSAGENCES$$
			$$DO$$
			$$IF!:10$11$9$8$6$5:BIENSAGENCES:IDTYPETRANSACTION$$
				<a class="message" href="/$$REP:1$$/recherche,$$PAGE:WAG_STYLE_RECHERCHE$$.htm?idtt=$$BIENSAGENCES:IDTYPETRANSACTION pcase$$&amp;lang=$$FORM:LANG$$"><span>&raquo; $$BIENSAGENCES:DESCRIPTIONLG pcase$$</span></a>
			$$END$$
			$$LOOP$$
			$$BFIN$$
			$$BIF0:BIENSAGENCES$$
			$$LG:NOBIENDISPO pcase$$
			$$BFIN$$