$$DYN:ID3:CONTENTTYPE:application/json$$$$DYN:ID3:NOCNXWEB$$$$DYN:ID3:NOFOOTER$$
<!--#include virtual="header/params_refine.htm" -->	
$$B:IMMOBW:ANN-ES:QRY:IDTT:QRY:LANG:QRY:IDP:::REP:1:QRY:TRI:ALIAS:ANNLISTE$$
$$B:IMMOBW:ANN-REFINER:~params:VAL:PARAMSREFINE:~idqfix:1:~advanced:VAL:ADVANCEDREFINE:~addmisc:1:ALIAS:REFINER$$
	$$BIF:ANNLISTE$$
	$$A:MAXANN=@@ANNLISTE:NBR@@$$
	$$DO:1:2$$$$LOOP$$
	$$BFIN$$	

		{"idtt":"$$FORM:IDTT$$",
		"transac": "$$FORM:IDTT gettypetransaction pcase$$",
		"idvpa":"$$FORM:IDVPA$$",
		"phrase":"$$ANNLISTE:PHRASE pcase urldecode$$$$IF!:1:HIDE_SOUSTYPEBIEN$$$$IF!:9:FORM:IDTT$$$$IF:FORM:IDSOUSTYPEBIEN$$$$IF!:0$ALL:FORM:IDSOUSTYPEBIEN$$ $$FORM:IDSOUSTYPEBIEN getsoustypesbien$$$$END:!FORM:IDSOUSTYPEBIEN$$$$END:FORM:IDSOUSTYPEBIEN$$$$END$$$$END$$",
		"nbphrase":"$$IF=:0:ANNLISTE:NBRESULT$$$$LG:AUCUNRESULTAT pcase$$ $$LG:LIEN:RECH lcase$$$$END$$$$IF!:0:ANNLISTE:NBRESULT$$$$ANNLISTE:NBRESULT formatnumber 0$$ $$IF=:1:ANNLISTE:NBRESULT$$$$LG:ANNONCEIMMO lcase$$$$END$$$$IF+:2:ANNLISTE:NBRESULT$$$$LG:ANNONCIMMOS lcase$$$$END$$$$IF+:200:ANNLISTE:NBRESULT$$<sup class=\"typo-body font-body lowercase xsmallest\">($$LG:200PREMIERES lcase$$)</sup>$$END$$$$END$$",
		"nb":"$$ANNLISTE:NBRESULT$$",
		"qry":"$$REP:QRY removeqry ti removeqry _$$",
		"surfacemax":"$$FORM:SURFACEMAX$$",
		"surfacemin":"$$FORM:SURFACEMIN$$",
		"ca_actuelmax":"$$FORM:CA_ACTUELMAX$$",
		"ca_actuelmin":"$$FORM:CA_ACTUELMIN$$",
		"pxmin":"$$FORM:PXMIN$$$$FORM:PX_LOYERMIN$$$$FORM:PX_BS_SEMAINEMIN$$",
		"pxmax":"$$FORM:PXMAX$$$$FORM:PX_LOYERMAX$$$$FORM:PX_BS_SEMAINEMAX$$",
		"tri":"$$FORM:TRI$$",
		$$B:IMMOBW:ANN-ES:ALIAS:COMPTEPANIER:0:::NOVISU:~NOSTAT:1$$
			$$BIF:COMPTEPANIER$$
				"idselected":[
					$$DO$${
						"idann":"$$COMPTEPANIER:IDANNONCE$$"
					}$$IF!:COMPTEPANIER_I:COMPTEPANIER:NBR$$,$$END$$
					$$LOOP$$
				],
				"nbpanier":"$$COMPTEPANIER:NBR$$ $$IF=:0$1:COMPTEPANIER:NBR$$$$LG:ANNONCE lcase$$$$END$$$$IF!:0$1:COMPTEPANIER:NBR$$$$LG:ANNONCES lcase$$$$END$$"
			$$BFIN$$
			$$BIF0:COMPTEPANIER$$
				"nbpanier":"0 $$LG:ANNONCE lcase$$"
			$$BFIN$$
		}