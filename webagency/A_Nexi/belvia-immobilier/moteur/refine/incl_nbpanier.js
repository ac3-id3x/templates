$$DYN:ID3:CONTENTTYPE:application/json$$$$DYN:ID3:NOCNXWEB$$$$DYN:ID3:NOFOOTER$$
<!--#include virtual="header/params_refine.htm" -->	
	$$B:IMMOBW:ANN:ALIAS:COMPTEPANIER:0:::NOVISU:~NOSTAT:1$$
		{$$BIF:COMPTEPANIER$$
			"idselected":[
			$$DO$${
					"idann":"$$COMPTEPANIER:IDANNONCE$$"
			}$$IF!:COMPTEPANIER_I:COMPTEPANIER:NBR$$,$$END$$
			$$LOOP$$
			],"nbpanier":"$$COMPTEPANIER:NBR$$ $$IF=:0$1:COMPTEPANIER:NBR$$$$LG:ANNONCE lcase$$$$END$$$$IF!:0$1:COMPTEPANIER:NBR$$$$LG:ANNONCES lcase$$$$END$$"
		$$BFIN$$
		$$BIF0:COMPTEPANIER$$
		"nbpanier":"0 $$LG:ANNONCE lcase$$"
		$$BFIN$$
		}