<!-- [ttl: 1d] -->
<!-- lang1:££FORM:LANG££ -->
$$B:IMMOBW:ANN:ALIAS:COUPDECOEUR:2:FR:::::d_dt_maj:~NOSTAT:1$$
$$B:IMMOBW:ANN:ALIAS:COUPDECOEUR_EN:2:EN:::::d_dt_maj:~NOSTAT:1$$

££IF0:FORM:LANG££
££A:FORM:LANG=FR££
££END££

££IF:FORM:LANG££

	££IF=:FR:FORM:LANG££
		$$BIF:COUPDECOEUR$$
			<div id="div_C2C">
				$$DO$$
				<div id="tabc2c$$COUPDECOEUR:I$$" name="tabc2c$$COUPDECOEUR:I$$" class="divc2c">
					<div class="tab-cdc2">
					<!---->
						
						<div class="hot-offers">
					<div class="photo-hot-offers">
					<div class="ph-cdc">
						<a href="/$$COUPDECOEUR:IDPUBLICATION$$/$$COUPDECOEUR:IDANNONCE$$/detail,$$PAGE:WAG_STYLE_DETAIL$$.htm?idtt=$$COUPDECOEUR:IDTYPETRANSACTION$$$$IF:COUPDECOEUR:IDANNONCEPARENT$$&idap=$$COUPDECOEUR:IDANNONCEPARENT$$$$END$$&lang=££LANGUE££" title="$$EXPRESSION1$$" >
							$$IF:COUPDECOEUR:IDPHOTO$$<img width="192" height="127" src="$$COUPDECOEUR:PHOTOURL0$$" alt="$$EXPRESSION2$$" />$$END:IDPHOTO$$
							$$IF0:COUPDECOEUR:IDPHOTO$$<img alt="$$EXPRESSION3$$"  src="$$_$$img/sans_photo_index.gif" width="192" height="127" />$$END:IDPHOTO$$
						</a><br />
					</div>
					</div>
					<div class="descriptive-hot-offers">
						<a href="/$$COUPDECOEUR:IDPUBLICATION$$/$$COUPDECOEUR:IDANNONCE$$/detail,$$PAGE:WAG_STYLE_DETAIL$$.htm?idtt=$$COUPDECOEUR:IDTYPETRANSACTION$$$$IF:COUPDECOEUR:IDANNONCEPARENT$$&idap=$$COUPDECOEUR:IDANNONCEPARENT$$$$END$$&lang=££LANGUE££" title="$$EXPRESSION1$$" class="label-descriptive" >
							$$IF:COUPDECOEUR:LIBELLE$$$$COUPDECOEUR:LIBELLE htmlencode$$$$END$$
							$$IF0:COUPDECOEUR:LIBELLE$$$$COUPDECOEUR:LIBELLE_FR htmlencode$$$$END$$
						</a><br />
						<a href="/$$COUPDECOEUR:IDPUBLICATION$$/$$COUPDECOEUR:IDANNONCE$$/detail,$$PAGE:WAG_STYLE_DETAIL$$.htm?idtt=$$COUPDECOEUR:IDTYPETRANSACTION$$$$IF:COUPDECOEUR:IDANNONCEPARENT$$&idap=$$COUPDECOEUR:IDANNONCEPARENT$$$$END$$&lang=££LANGUE££" title="$$EXPRESSION2$$" class="city-descriptive" >
							$$COUPDECOEUR:VILLE htmlencode$$ 
							($$COUPDECOEUR:CP$$)
						</a><br />
						<a href="/$$COUPDECOEUR:IDPUBLICATION$$/$$COUPDECOEUR:IDANNONCE$$/detail,$$PAGE:WAG_STYLE_DETAIL$$.htm?idtt=$$COUPDECOEUR:IDTYPETRANSACTION$$$$IF:COUPDECOEUR:IDANNONCEPARENT$$&idap=$$COUPDECOEUR:IDANNONCEPARENT$$$$END$$&lang=££LANGUE££" title="$$EXPRESSION3$$" class="price-descriptive" >
							$$COUPDECOEUR:PRIX$$ $$COUPDECOEUR:PRIX_UNITE htmlencode$$
						</a><br />
						<p>$$COUPDECOEUR:DESCRIPTIF htmlencode truncate 220 ...$$</p>
						<a href="/$$COUPDECOEUR:IDPUBLICATION$$/$$COUPDECOEUR:IDANNONCE$$/detail,$$PAGE:WAG_STYLE_DETAIL$$.htm?idtt=$$COUPDECOEUR:IDTYPETRANSACTION$$$$IF:COUPDECOEUR:IDANNONCEPARENT$$&idap=$$COUPDECOEUR:IDANNONCEPARENT$$$$END$$&lang=££LANGUE££" title="$$EXPRESSION1$$" class="details-descriptive" >
							££LG:DETAILS pcase££
						</a>
					</div>
					<br class="clear-left" />
				</div>
						
					<!---->
					</div>
				</div>
       			$$LOOP$$
            </div>
			<script language="javascript" type="text/javascript" src="$$-$$scripts/C2C.js"></script>
			<script language="javascript" type="text/javascript">
				C2C_install( /*ID C2C*/ "div_C2C", /*Prefixe C2C*/ "tabc2c", /*Nombre affiches*/ 2, /*Nombre total*/ $$IF+:20:COUPDECOEUR:NBR$$20$$END$$ $$IF-:20:COUPDECOEUR:NBR$$$$COUPDECOEUR:NBR$$$$END$$, /*Vitesse*/ 5000, /*Mode*/ "random", /*Si souris*/ true );
			</script>
		$$BFIN$$
	££END££
	
	££IF=:EN:FORM:LANG££
		$$BIF:COUPDECOEUR_EN$$
			<div id="div_C2C">
				$$DO$$
				<div id="tabc2c$$COUPDECOEUR:I$$" name="tabc2c$$COUPDECOEUR:I$$" class="divc2c">
					<div class="tab-cdc2">
					<!---->
						
						<div class="hot-offers">
					<div class="photo-hot-offers">
					<div class="ph-cdc">
						<a href="/$$COUPDECOEUR_EN:IDPUBLICATION$$/$$COUPDECOEUR_EN:IDANNONCE$$/detail,$$PAGE:WAG_STYLE_DETAIL$$.htm?idtt=$$COUPDECOEUR_EN:IDTYPETRANSACTION$$$$IF:COUPDECOEUR_EN:IDANNONCEPARENT$$&idap=$$COUPDECOEUR_EN:IDANNONCEPARENT$$$$END$$&lang=££LANGUE££" title="$$EXPRESSION2$$" >
							$$IF:COUPDECOEUR_EN:IDPHOTO$$<img width="192" height="127" src="$$COUPDECOEUR_EN:PHOTOURL0$$" alt="$$EXPRESSION3$$" />$$END:IDPHOTO$$
							$$IF0:COUPDECOEUR_EN:IDPHOTO$$<img alt="$$EXPRESSION1$$"  src="$$_$$img/sans_photo_index.gif" width="192" height="127" />$$END:IDPHOTO$$
						</a><br />
					</div>
					</div>
					<div class="descriptive-hot-offers">
						<a href="/$$COUPDECOEUR_EN:IDPUBLICATION$$/$$COUPDECOEUR_EN:IDANNONCE$$/detail,$$PAGE:WAG_STYLE_DETAIL$$.htm?idtt=$$COUPDECOEUR_EN:IDTYPETRANSACTION$$$$IF:COUPDECOEUR_EN:IDANNONCEPARENT$$&idap=$$COUPDECOEUR_EN:IDANNONCEPARENT$$$$END$$&lang=££LANGUE££" title="$$EXPRESSION2$$" class="label-descriptive" >
							$$IF:COUPDECOEUR_EN:LIBELLE$$$$COUPDECOEUR_EN:LIBELLE htmlencode$$$$END$$
							$$IF0:COUPDECOEUR_EN:LIBELLE$$$$COUPDECOEUR_EN:LIBELLE_FR htmlencode$$$$END$$
						</a><br />
						<a href="/$$COUPDECOEUR_EN:IDPUBLICATION$$/$$COUPDECOEUR_EN:IDANNONCE$$/detail,$$PAGE:WAG_STYLE_DETAIL$$.htm?idtt=$$COUPDECOEUR_EN:IDTYPETRANSACTION$$$$IF:COUPDECOEUR_EN:IDANNONCEPARENT$$&idap=$$COUPDECOEUR_EN:IDANNONCEPARENT$$$$END$$&lang=££LANGUE££" title="$$EXPRESSION3$$" class="city-descriptive" >
							$$COUPDECOEUR_EN:VILLE htmlencode$$ 
							($$COUPDECOEUR_EN:CP$$)
						</a><br />
						<a href="/$$COUPDECOEUR_EN:IDPUBLICATION$$/$$COUPDECOEUR_EN:IDANNONCE$$/detail,$$PAGE:WAG_STYLE_DETAIL$$.htm?idtt=$$COUPDECOEUR_EN:IDTYPETRANSACTION$$$$IF:COUPDECOEUR_EN:IDANNONCEPARENT$$&idap=$$COUPDECOEUR_EN:IDANNONCEPARENT$$$$END$$&lang=££LANGUE££" title="$$EXPRESSION1$$" class="price-descriptive" >
							$$COUPDECOEUR_EN:PRIX$$ $$COUPDECOEUR_EN:PRIX_UNITE htmlencode$$
						</a><br />
						<p>$$COUPDECOEUR_EN:DESCRIPTIF htmlencode truncate 220 ...$$</p>
						<a href="/$$COUPDECOEUR_EN:IDPUBLICATION$$/$$COUPDECOEUR_EN:IDANNONCE$$/detail,$$PAGE:WAG_STYLE_DETAIL$$.htm?idtt=$$COUPDECOEUR_EN:IDTYPETRANSACTION$$$$IF:COUPDECOEUR_EN:IDANNONCEPARENT$$&idap=$$COUPDECOEUR_EN:IDANNONCEPARENT$$$$END$$&lang=££LANGUE££" title="$$EXPRESSION2$$" class="details-descriptive" >
							££LG:DETAILS pcase££
						</a>
					</div>
					<br class="clear-left" />
				</div>
						
					<!---->
					</div>
				</div>
       			$$LOOP$$
            </div>
			<script language="javascript" type="text/javascript" src="$$-$$scripts/C2C.js"></script>
			<script language="javascript" type="text/javascript">
				C2C_install( /*ID C2C*/ "div_C2C", /*Prefixe C2C*/ "tabc2c", /*Nombre affiches*/ 2, /*Nombre total*/ $$IF+:20:COUPDECOEUR_EN:NBR$$20$$END$$ $$IF-:20:COUPDECOEUR_EN:NBR$$$$COUPDECOEUR_EN:NBR$$$$END$$, /*Vitesse*/ 5000, /*Mode*/ "random", /*Si souris*/ true );
			</script>
		$$BFIN$$
	££END££
	

££END££