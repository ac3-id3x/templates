$$DYN:ID3:TOJS$$
<!--#include virtual="/incl_choix_wag_style.htm" -->
$$B:IMMOBW:AGENCETRANSACTIONS:ALIAS:BIENSAGENCES:REP:1:QRY:LANG$$
			$$BIF:BIENSAGENCES$$
				<span class="nosannonces">Nos annonces : </span>
			$$DO$$
			$$IF!:10$11$9$8$6$5:BIENSAGENCES:IDTYPETRANSACTION$$
				<a class="message" href="/$$REP:1$$/recherche$$WAGSTYLE:RECHERCHE:URL$$.htm?idtt=$$BIENSAGENCES:IDTYPETRANSACTION pcase$$&amp;lang=$$FORM:LANG$$"><span>&raquo; $$BIENSAGENCES:DESCRIPTIONLG pcase$$</span></a>
			$$END$$
			$$LOOP$$
			$$BFIN$$
			