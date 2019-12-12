$$DYN:ID3:CONTENTTYPE:application/json$$$$DYN:ID3:NOCNXWEB$$$$DYN:ID3:NOFOOTER$$
<!--#include virtual="header/params_refine.htm" -->	
	$$B:IMMOBW:ANN-ES:ALIAS:COMPTEPANIER:0:::NOVISU:~NOSTAT:1$$
		{$$BIF:COMPTEPANIER$$
			"idselected":[
			$$DO$${
					"idann":"$$COMPTEPANIER:IDANNONCE$$"
			}$$IF!:COMPTEPANIER_I:COMPTEPANIER:NBR$$,$$END$$
			$$LOOP$$
			],"nbpanier":"$$COMPTEPANIER:NBR$$"
		$$BFIN$$
		$$BIF0:COMPTEPANIER$$
		"nbpanier":"0"
		$$BFIN$$
		}