<annonce>
	<idTiers>$$SEARCH:IDTIERS$$</idTiers>	
	<idAnnonce>$$SEARCH:IDANNONCE$$</idAnnonce>
	<idAgence>$$SEARCH:IDAGENCE$$</idAgence>
	<idPublication>$$SEARCH:IDPUBLICATION$$</idPublication>
	<idTypeTransaction>$$SEARCH:IDTYPETRANSACTIONORI$$</idTypeTransaction>
	<idTypeBien>$$SEARCH:IDTYPEBIEN$$</idTypeBien>
	$$IF:SEARCH:IDSOUSTYPEBIEN$$<idSousTypeBien>$$SEARCH:IDSOUSTYPEBIEN$$</idSousTypeBien>$$END$$
	<dtFraicheur>$$SEARCH:DT_FRAICHEUR date yyyy-MM-ddTHH:mm:ss$$</dtFraicheur>
	<dtCreation>$$SEARCH:DT_CREA date yyyy-MM-ddTHH:mm:ss$$</dtCreation>
	<titre>$$SEARCH:TITRE htmlattributeencode$$</titre>
	<libelle>$$SEARCH:LIBELLE htmlattributeencode$$</libelle>
	$$IF:SEARCH:PROX$$<proximite>$$SEARCH:PROX htmlattributeencode$$</proximite>$$END$$
	<descriptif>$$SEARCH:DESCRIPTIF htmlattributeencode$$</descriptif>
$$IF0:SEARCH:SITRANCHEPRIX$$
$$IF:SEARCH:PRIXRAW$$
	<prix>$$SEARCH:PRIXRAW round 2$$</prix>
$$END:PRIXRAW$$
$$END:SITRANCHEPRIX$$
$$IF:SEARCH:SITRANCHEPRIX$$
	<tranchePrix>$$SEARCH:TRANCHEPRIX htmldecode htmlattributeencode rxreplace €$ ¤ trim$$</tranchePrix>
$$END:SITRANCHEPRIX$$
	<prixUnite>$$SEARCH:PRIX_UNITE$$$$IF:SEARCH:SI_LOYER_CC$$*$$END:SI_LOYER_CC$$$$IF:SEARCH:SI_FAI$$ FAI*$$END:SI_FAI$$</prixUnite>
	<prixMention>$$IF:SEARCH:SI_LOYER_CC$$* Loyer mensuel charges comprises$$END:SI_LOYER_CC$$$$IF:SEARCH:SI_FAI$$* Prix net, hors frais notariés, d'enregistrement et de publicité foncière$$END:SI_FAI$$</prixMention>
$$IF=:5:SEARCH:IDTYPETRANSACTIONORI$$
<prixRente>$$SEARCH:PX_RENTE$$</prixRente>
<prixBouquet>$$SEARCH:PX_BOUQUET$$</prixBouquet>
<ageHomme>$$SEARCH:AGE_H$$</ageHomme>
<ageFemme>$$SEARCH:AGE_F$$</ageFemme>
<siLibre>$$SEARCH:SI_LIBRE$$</siLibre>
$$END:IDTYPETRANSACTIONORI$$
$$IF=:11:SEARCH:IDTYPETRANSACTIONORI$$
	<loyer>$$SEARCH:PX_LOYER round 2$$</loyer>
	$$A:SI_LOYER_CC=0$$ $$IF:SEARCH:SI_LOYER_CC$$ $$A:SI_LOYER_CC=1$$ $$END$$ $$IF=:OUI:SEARCH:XML xml si_loyer_annuel_cc trim$$ $$A:SI_LOYER_CC=1$$ $$END$$
	$$A:SI_LOYER_HT=0$$ $$IF:SEARCH:SI_LOYER_HT$$ $$A:SI_LOYER_HT=1$$ $$END$$ $$IF=:OUI:SEARCH:XML xml si_loyer_annuel_ht trim$$ $$A:SI_LOYER_HT=1$$ $$END$$
	<loyerUnite>€$$IF:SI_LOYER_CC$$cc$$END:SI_LOYER_CC$$$$IF:SI_LOYER_HT$$HT$$END:SI_LOYER_HT$$</loyerUnite>
$$END:IDTYPETRANSACTIONORI$$
$$IF=:1$11:SEARCH:IDTYPETRANSACTIONORI$$
	$$IF:SEARCH:XML xml loyer_annuel_metre$$
	<loyerAnnuelM2>$$SEARCH:XML xml loyer_annuel_metre round 2$$</loyerAnnuelM2>
	<loyerAnnuelM2Unite>€$$IF=:OUI:SEARCH:XML xml si_loyer_annuel_metre_cc trim$$cc$$END$$$$IF=:OUI:SEARCH:XML xml si_loyer_annuel_metre_ht trim$$HT$$END$$</loyerAnnuelM2Unite>
	$$END$$
	$$IF:SEARCH:XML xml loyer_annuel_global$$
	<loyerAnnuel>$$SEARCH:XML xml loyer_annuel_global round 2$$</loyerAnnuel>
	<loyerAnnuelUnite>€$$IF=:OUI:SEARCH:XML xml si_loyer_annuel_cc trim$$cc$$END$$$$IF=:OUI:SEARCH:XML xml si_loyer_annuel_ht trim$$HT$$END$$</loyerAnnuelUnite>
	$$END$$
$$END:IDTYPETRANSACTIONORI$$
	$$IF:SEARCH:NB_PIECES$$<nbPiece>$$SEARCH:NB_PIECES$$</nbPiece>$$END$$
	$$IF:SEARCH:NB_CHAMBRES$$<nbChambre>$$SEARCH:NB_CHAMBRES$$</nbChambre>$$END$$
	$$IF:SEARCH:SURFACE$$<surface>$$SEARCH:SURFACE round 2$$</surface>
	<surfaceUnite>m²</surfaceUnite>$$END$$
	<idPays>$$SEARCH:IDPAYS$$</idPays>
	<pays>$$SEARCH:IDPAYS getpays$$</pays>
	$$IF:SEARCH:ACP$$<cp>$$SEARCH:ACP$$</cp>$$END$$
	$$IF:SEARCH:CODEINSEE$$<codeInsee>$$SEARCH:CODEINSEE$$</codeInsee>$$END$$
	<ville>$$SEARCH:AVILLE htmlattributeencode$$</ville>
$$IF:SEARCH:SI_LOGO-ORPI$$
		<logoTnyUrl>http://$$REP:SRV$$/z/portail/svx/portals/sv6_gen/images/logo_orpi_2010_40.gif</logoTnyUrl>
		<logoBigUrl>http://$$REP:SRV$$/z/portail/svx/portals/sv6_gen/images/logo_orpi_2010.gif</logoBigUrl>
		$$END:SI_LOGO-ORPI$$
		$$IF0:SEARCH:SI_LOGO-ORPI$$
$$IF:PAGE:RETURNLOGOS$$$$A:RETURNLOGOS=1$$$$END:RETURNLOGOS$$
$$IF:SEARCH:SI_PRODUITLOGOAGENCE$$$$A:RETURNLOGOS=1$$$$END:SI_PRODUITLOGOAGENCE$$
		$$IF:RETURNLOGOS$$$$IF:SEARCH:URLLOGO$$
		<logoTnyUrl>$$SEARCH:URLLOGO$$</logoTnyUrl>
		<logoBigUrl>$$SEARCH:URLLOGO replace tny big$$</logoBigUrl>
		$$END:URLLOGO$$$$END:RETURNLOGOS$$
		$$END:SI_LOGO-ORPI$$
	<nbPhotos>$$SEARCH:NB_PHOTOS$$</nbPhotos>
	$$IF:SEARCH:CARREURL0$$<firstThumb>$$SEARCH:CARREURL0$$</firstThumb>$$END$$$$REM$$On n'utilise pas CARRE_URL car elle peut contenir une imagette de video, ce qui ne nous arrange pas pour ce webservice$$END$$
$$IF0:SEARCH:URLVIRTUELLE$$
	<permaLien>http://www.$$REP:MSRV$$/$$SEARCH:IDPUBLICATION$$/$$SEARCH:IDANNONCE$$/detail.htm?idtt=$$SEARCH:IDTYPETRANSACTIONORI$$&amp;p=$$SEARCH:BASICPARAMETERS urlencode$$</permaLien>
$$END$$
$$IF:SEARCH:URLVIRTUELLE$$
	<permaLien>$$SEARCH:URLVIRTUELLE htmlattributeencode$$?p=$$SEARCH:BASICPARAMETERS urlencode$$</permaLien>
$$END$$
	<latitude>$$SEARCH:PUBLICLAT round 6$$</latitude>
	<longitude>$$SEARCH:PUBLICLNG round 6$$</longitude>
	<llPrecision>$$SEARCH:LATLNGTYPE$$</llPrecision>
	<typeDPE>$$SEARCH:TYPEDPE$$</typeDPE>
	$$IF:SEARCH:CONSOENERGIE$$<consoEnergie>$$SEARCH:CONSOENERGIE$$</consoEnergie>$$END:CONSOENERGIE$$
	$$IF:SEARCH:BILANCONSOENERGIE$$<bilanConsoEnergie>$$SEARCH:BILANCONSOENERGIE$$</bilanConsoEnergie>$$END:BILANCONSOENERGIE$$
	$$IF:SEARCH:EMISSIONGES$$<emissionGES>$$SEARCH:EMISSIONGES$$</emissionGES>$$END:EMISSIONGES$$
	$$IF:SEARCH:BILANEMISSIONGES$$<bilanEmissionGES>$$SEARCH:BILANEMISSIONGES$$</bilanEmissionGES>$$END:BILANEMISSIONGES$$
	<siLotNeuf>$$IF:SEARCH:IDANNONCEPARENT$$true$$END$$$$IF0:SEARCH:IDANNONCEPARENT$$false$$END$$</siLotNeuf>	
	<siMandatExclusif>$$IF:SEARCH:SI_MANDATEXCLUSIF_ET_PRODUITEXCLUSIVITESL$$ $$SEARCH:SI_MANDATEXCLUSIF_ET_PRODUITEXCLUSIVITESL$$$$END$$ $$IF0:SEARCH:SI_MANDATEXCLUSIF_ET_PRODUITEXCLUSIVITESL$$false$$END$$</siMandatExclusif>
	<siMandatStar>$$IF:SEARCH:SIMANDATSTAR$$ $$SEARCH:SIMANDATSTAR$$$$END$$ $$IF0:SEARCH:SIMANDATSTAR$$false$$END$$</siMandatStar>
	<contact>
$$IF:FORM:NOAUDIOTEL$$
	$$A:NOAUDIOTEL=1$$
$$END$$
$$IF0:SEARCH:SI_AUDIOTEL$$
	$$A:NOAUDIOTEL=1$$
$$END$$
$$IF:NOAUDIOTEL$$
		<siAudiotel>false</siAudiotel>
		<idPublication>$$SEARCH:IDPUBLICATION$$</idPublication>
		<nom>$$IF:SEARCH:COOR-NOM$$$$SEARCH:COOR-NOM htmlattributeencode$$$$END:COOR-NOM$$$$IF0:SEARCH:COOR-NOM$$$$SEARCH:COOR-CONTACT htmlattributeencode$$$$END:COOR-NOM$$</nom>
		$$IF:SEARCH:RCS_SIREN$$<rcsSiren>$$SEARCH:RCS_SIREN$$</rcsSiren>
		$$IF:SEARCH:RCS_NIC$$<rcsNic>$$SEARCH:RCS_NIC$$</rcsNic>$$END$$$$END$$
$$END:NOAUDIOTEL$$
	</contact>
	<photos>
		$$IF:SEARCH:PHOTOURL0$$
			<photo>
				<titre>$$SEARCH:ALT_DESCRIPTIF_FR0 htmlattributeencode$$</titre>
				<ordre>0</ordre>
				<thbUrl>$$SEARCH:THUMBURL0$$</thbUrl>
				<carreurl>$$SEARCH:CARREURL0$$</carreurl>
				<bigUrl>$$SEARCH:BIGURL0$$</bigUrl>
				<stdUrl>$$SEARCH:PHOTOURL0$$</stdUrl>
				<c175url>$$SEARCH:C175URL0$$</c175url>
				<stdwidth>$$SEARCH:PHOTOW0$$</stdwidth>
				<stdheight>$$SEARCH:PHOTOH0$$</stdheight>
				<thumbwidth>$$SEARCH:THUMBW0$$</thumbwidth>
				<thumbheight>$$SEARCH:THUMBH0$$</thumbheight>
				<bigwidth>$$SEARCH:BIGW0$$</bigwidth>
				<bigheight>$$SEARCH:BIGH0$$</bigheight>
			</photo>
		$$END:PHOTOURL0$$
		$$IF:SEARCH:PHOTOURL1$$
			<photo>
				<titre>$$SEARCH:ALT_DESCRIPTIF_FR1 htmlattributeencode$$</titre>
				<ordre>1</ordre>
				<thbUrl>$$SEARCH:THUMBURL1$$</thbUrl>
				<carreurl>$$SEARCH:CARREURL1$$</carreurl>
				<bigUrl>$$SEARCH:BIGURL1$$</bigUrl>
				<stdUrl>$$SEARCH:PHOTOURL1$$</stdUrl>
				<c175url>$$SEARCH:C175URL1$$</c175url>
				<stdwidth>$$SEARCH:PHOTOW1$$</stdwidth>
				<stdheight>$$SEARCH:PHOTOH1$$</stdheight>
				<thumbwidth>$$SEARCH:THUMBW1$$</thumbwidth>
				<thumbheight>$$SEARCH:THUMBH1$$</thumbheight>
				<bigwidth>$$SEARCH:BIGW1$$</bigwidth>
				<bigheight>$$SEARCH:BIGH1$$</bigheight>
			</photo>
		$$END:PHOTOURL1$$
		$$IF:SEARCH:PHOTOURL2$$
			<photo>
				<titre>$$SEARCH:ALT_DESCRIPTIF_FR2 htmlattributeencode$$</titre>
				<ordre>2</ordre>
				<thbUrl>$$SEARCH:THUMBURL2$$</thbUrl>
				<carreurl>$$SEARCH:CARREURL2$$</carreurl>
				<bigUrl>$$SEARCH:BIGURL2$$</bigUrl>
				<stdUrl>$$SEARCH:PHOTOURL2$$</stdUrl>
				<c175url>$$SEARCH:C175URL2$$</c175url>
				<stdwidth>$$SEARCH:PHOTOW2$$</stdwidth>
				<stdheight>$$SEARCH:PHOTOH2$$</stdheight>
				<thumbwidth>$$SEARCH:THUMBW2$$</thumbwidth>
				<thumbheight>$$SEARCH:THUMBH2$$</thumbheight>
				<bigwidth>$$SEARCH:BIGW2$$</bigwidth>
				<bigheight>$$SEARCH:BIGH2$$</bigheight>
			</photo>
		$$END:PHOTOURL2$$
		$$IF:SEARCH:PHOTOURL3$$
			<photo>
				<titre>$$SEARCH:ALT_DESCRIPTIF_FR3 htmlattributeencode$$</titre>
				<ordre>3</ordre>
				<thbUrl>$$SEARCH:THUMBURL3$$</thbUrl>
				<carreurl>$$SEARCH:CARREURL3$$</carreurl>
				<bigUrl>$$SEARCH:BIGURL3$$</bigUrl>
				<stdUrl>$$SEARCH:PHOTOURL3$$</stdUrl>
				<c175url>$$SEARCH:C175URL3$$</c175url>
				<stdwidth>$$SEARCH:PHOTOW3$$</stdwidth>
				<stdheight>$$SEARCH:PHOTOH3$$</stdheight>
				<thumbwidth>$$SEARCH:THUMBW3$$</thumbwidth>
				<thumbheight>$$SEARCH:THUMBH3$$</thumbheight>
				<bigwidth>$$SEARCH:BIGW3$$</bigwidth>
				<bigheight>$$SEARCH:BIGH3$$</bigheight>
			</photo>
		$$END:PHOTOURL3$$
		$$IF:SEARCH:PHOTOURL4$$
			<photo>
				<titre>$$SEARCH:ALT_DESCRIPTIF_FR4 htmlattributeencode$$</titre>
				<ordre>4</ordre>
				<thbUrl>$$SEARCH:THUMBURL4$$</thbUrl>
				<carreurl>$$SEARCH:CARREURL4$$</carreurl>
				<bigUrl>$$SEARCH:BIGURL4$$</bigUrl>
				<stdUrl>$$SEARCH:PHOTOURL4$$</stdUrl>
				<c175url>$$SEARCH:C175URL4$$</c175url>
				<stdwidth>$$SEARCH:PHOTOW4$$</stdwidth>
				<stdheight>$$SEARCH:PHOTOH4$$</stdheight>
				<thumbwidth>$$SEARCH:THUMBW4$$</thumbwidth>
				<thumbheight>$$SEARCH:THUMBH4$$</thumbheight>
				<bigwidth>$$SEARCH:BIGW4$$</bigwidth>
				<bigheight>$$SEARCH:BIGH4$$</bigheight>
			</photo>
		$$END:PHOTOURL4$$
		$$IF:SEARCH:PHOTOURL5$$
			<photo>
				<titre>$$SEARCH:ALT_DESCRIPTIF_FR5 htmlattributeencode$$</titre>
				<ordre>5</ordre>
				<thbUrl>$$SEARCH:THUMBURL5$$</thbUrl>
				<carreurl>$$SEARCH:CARREURL5$$</carreurl>
				<bigUrl>$$SEARCH:BIGURL5$$</bigUrl>
				<stdUrl>$$SEARCH:PHOTOURL5$$</stdUrl>
				<c175url>$$SEARCH:C175URL5$$</c175url>
				<stdwidth>$$SEARCH:PHOTOW5$$</stdwidth>
				<stdheight>$$SEARCH:PHOTOH5$$</stdheight>
				<thumbwidth>$$SEARCH:THUMBW5$$</thumbwidth>
				<thumbheight>$$SEARCH:THUMBH5$$</thumbheight>
				<bigwidth>$$SEARCH:BIGW5$$</bigwidth>
				<bigheight>$$SEARCH:BIGH5$$</bigheight>
			</photo>
		$$END:PHOTOURL5$$		
		$$IF:SEARCH:PHOTOURL6$$
			<photo>
				<titre>$$SEARCH:ALT_DESCRIPTIF_FR6 htmlattributeencode$$</titre>
				<ordre>6</ordre>
				<thbUrl>$$SEARCH:THUMBURL6$$</thbUrl>
				<carreurl>$$SEARCH:CARREURL6$$</carreurl>
				<bigUrl>$$SEARCH:BIGURL6$$</bigUrl>
				<stdUrl>$$SEARCH:PHOTOURL6$$</stdUrl>
				<c175url>$$SEARCH:C175URL6$$</c175url>
				<stdwidth>$$SEARCH:PHOTOW6$$</stdwidth>
				<stdheight>$$SEARCH:PHOTOH6$$</stdheight>
				<thumbwidth>$$SEARCH:THUMBW6$$</thumbwidth>
				<thumbheight>$$SEARCH:THUMBH6$$</thumbheight>
				<bigwidth>$$SEARCH:BIGW6$$</bigwidth>
				<bigheight>$$SEARCH:BIGH6$$</bigheight>
			</photo>
		$$END:PHOTOURL6$$
		
		$$IF:SEARCH:PHOTOURL7$$
			<photo>
				<titre>$$SEARCH:ALT_DESCRIPTIF_FR7 htmlattributeencode$$</titre>
				<ordre>7</ordre>
				<thbUrl>$$SEARCH:THUMBURL7$$</thbUrl>
				<carreurl>$$SEARCH:CARREURL7$$</carreurl>
				<bigUrl>$$SEARCH:BIGURL7$$</bigUrl>
				<stdUrl>$$SEARCH:PHOTOURL7$$</stdUrl>
				<c175url>$$SEARCH:C175URL7$$</c175url>
				<stdwidth>$$SEARCH:PHOTOW7$$</stdwidth>
				<stdheight>$$SEARCH:PHOTOH7$$</stdheight>
				<thumbwidth>$$SEARCH:THUMBW7$$</thumbwidth>
				<thumbheight>$$SEARCH:THUMBH7$$</thumbheight>
				<bigwidth>$$SEARCH:BIGW7$$</bigwidth>
				<bigheight>$$SEARCH:BIGH7$$</bigheight>
			</photo>
		$$END:PHOTOURL7$$																		
		$$IF:SEARCH:PHOTOURL8$$
			<photo>
				<titre>$$SEARCH:ALT_DESCRIPTIF_FR8 htmlattributeencode$$</titre>
				<ordre>8</ordre>
				<thbUrl>$$SEARCH:THUMBURL8$$</thbUrl>
				<carreurl>$$SEARCH:CARREURL8$$</carreurl>
				<bigUrl>$$SEARCH:BIGURL8$$</bigUrl>
				<stdUrl>$$SEARCH:PHOTOURL8$$</stdUrl>
				<c175url>$$SEARCH:C175URL8$$</c175url>
				<stdwidth>$$SEARCH:PHOTOW8$$</stdwidth>
				<stdheight>$$SEARCH:PHOTOH8$$</stdheight>
				<thumbwidth>$$SEARCH:THUMBW8$$</thumbwidth>
				<thumbheight>$$SEARCH:THUMBH8$$</thumbheight>
				<bigwidth>$$SEARCH:BIGW8$$</bigwidth>
				<bigheight>$$SEARCH:BIGH8$$</bigheight>
			</photo>
		$$END:PHOTOURL8$$
				$$IF:SEARCH:PHOTOURL9$$
			<photo>
				<titre>$$SEARCH:ALT_DESCRIPTIF_FR9 htmlattributeencode$$</titre>
				<ordre>9</ordre>
				<thbUrl>$$SEARCH:THUMBURL9$$</thbUrl>
				<carreurl>$$SEARCH:CARREURL9$$</carreurl>
				<bigUrl>$$SEARCH:BIGURL9$$</bigUrl>
				<stdUrl>$$SEARCH:PHOTOURL9$$</stdUrl>
				<c175url>$$SEARCH:C175URL9$$</c175url>
				<stdwidth>$$SEARCH:PHOTOW9$$</stdwidth>
				<stdheight>$$SEARCH:PHOTOH9$$</stdheight>
				<thumbwidth>$$SEARCH:THUMBW9$$</thumbwidth>
				<thumbheight>$$SEARCH:THUMBH9$$</thumbheight>
				<bigwidth>$$SEARCH:BIGW9$$</bigwidth>
				<bigheight>$$SEARCH:BIGH9$$</bigheight>
			</photo>
		$$END:PHOTOURL9$$
		$$IF:SEARCH:PHOTOURL10$$
			<photo>
				<titre>$$SEARCH:ALT_DESCRIPTIF_FR10 htmlattributeencode$$</titre>
				<ordre>10</ordre>
				<thbUrl>$$SEARCH:THUMBURL10$$</thbUrl>
				<carreurl>$$SEARCH:CARREURL10$$</carreurl>
				<bigUrl>$$SEARCH:BIGURL10$$</bigUrl>
				<stdUrl>$$SEARCH:PHOTOURL10$$</stdUrl>
				<c175url>$$SEARCH:C1755URL10$$</c175url>
				<stdwidth>$$SEARCH:PHOTOW10$$</stdwidth>
				<stdheight>$$SEARCH:PHOTOH10$$</stdheight>
				<thumbwidth>$$SEARCH:THUMBW10$$</thumbwidth>
				<thumbheight>$$SEARCH:THUMBH10$$</thumbheight>
				<bigwidth>$$SEARCH:BIGW10$$</bigwidth>
				<bigheight>$$SEARCH:BIGH10$$</bigheight>
			</photo>
		$$END:PHOTOURL10$$
		$$IF:SEARCH:PHOTOURL11$$
			<photo>
				<titre>$$SEARCH:ALT_DESCRIPTIF_FR11 htmlattributeencode$$</titre>
				<ordre>11</ordre>
				<thbUrl>$$SEARCH:THUMBURL11$$</thbUrl>
				<carreurl>$$SEARCH:CARREURL11$$</carreurl>
				<bigUrl>$$SEARCH:BIGURL11$$</bigUrl>
				<stdUrl>$$SEARCH:PHOTOURL11$$</stdUrl>
				<c175url>$$SEARCH:C175URL11$$</c175url>
				<stdwidth>$$SEARCH:PHOTOW11$$</stdwidth>
				<stdheight>$$SEARCH:PHOTOH11$$</stdheight>
				<thumbwidth>$$SEARCH:THUMBW11$$</thumbwidth>
				<thumbheight>$$SEARCH:THUMBH11$$</thumbheight>
				<bigwidth>$$SEARCH:BIGW11$$</bigwidth>
				<bigheight>$$SEARCH:BIGH11$$</bigheight>
			</photo>
		$$END:PHOTOURL11$$
				$$IF:SEARCH:PHOTOURL12$$
			<photo>
				<titre>$$SEARCH:ALT_DESCRIPTIF_FR12 htmlattributeencode$$</titre>
				<ordre>12</ordre>
				<thbUrl>$$SEARCH:THUMBURL12$$</thbUrl>
				<carreurl>$$SEARCH:CARREURL12$$</carreurl>
				<bigUrl>$$SEARCH:BIGURL12$$</bigUrl>
				<stdUrl>$$SEARCH:PHOTOURL12$$</stdUrl>
				<c175url>$$SEARCH:C175URL12$$</c175url>
				<stdwidth>$$SEARCH:PHOTOW12$$</stdwidth>
				<stdheight>$$SEARCH:PHOTOH12$$</stdheight>
				<thumbwidth>$$SEARCH:THUMBW12$$</thumbwidth>
				<thumbheight>$$SEARCH:THUMBH12$$</thumbheight>
				<bigwidth>$$SEARCH:BIGW12$$</bigwidth>
				<bigheight>$$SEARCH:BIGH12$$</bigheight>
			</photo>
		$$END:PHOTOURL12$$
				$$IF:SEARCH:PHOTOURL13$$
			<photo>
				<titre>$$SEARCH:ALT_DESCRIPTIF_FR13 htmlattributeencode$$</titre>
				<ordre>13</ordre>
				<thbUrl>$$SEARCH:THUMBURL13$$</thbUrl>
				<carreurl>$$SEARCH:CARREURL13$$</carreurl>
				<bigUrl>$$SEARCH:BIGURL13$$</bigUrl>
				<stdUrl>$$SEARCH:PHOTOURL13$$</stdUrl>
				<c175url>$$SEARCH:C175URL13$$</c175url>
				<stdwidth>$$SEARCH:PHOTOW13$$</stdwidth>
				<stdheight>$$SEARCH:PHOTOH13$$</stdheight>
				<thumbwidth>$$SEARCH:THUMBW13$$</thumbwidth>
				<thumbheight>$$SEARCH:THUMBH13$$</thumbheight>
				<bigwidth>$$SEARCH:BIGW13$$</bigwidth>
				<bigheight>$$SEARCH:BIGH13$$</bigheight>
			</photo>
		$$END:PHOTOURL13$$
		$$IF:SEARCH:PHOTOURL14$$
			<photo>
				<titre>$$SEARCH:ALT_DESCRIPTIF_FR14 htmlattributeencode$$</titre>
				<ordre>14</ordre>
				<thbUrl>$$SEARCH:THUMBURL14$$</thbUrl>
				<carreurl>$$SEARCH:CARREURL14$$</carreurl>
				<bigUrl>$$SEARCH:BIGURL14$$</bigUrl>
				<stdUrl>$$SEARCH:PHOTOURL14$$</stdUrl>
				<c175url>$$SEARCH:C175URL14$$</c175url>
				<stdwidth>$$SEARCH:PHOTOW14$$</stdwidth>
				<stdheight>$$SEARCH:PHOTOH14$$</stdheight>
				<thumbwidth>$$SEARCH:THUMBW14$$</thumbwidth>
				<thumbheight>$$SEARCH:THUMBH14$$</thumbheight>
				<bigwidth>$$SEARCH:BIGW14$$</bigwidth>
				<bigheight>$$SEARCH:BIGH14$$</bigheight>
			</photo>
		$$END:PHOTOURL14$$
				$$IF:SEARCH:PHOTOURL15$$
			<photo>
				<titre>$$SEARCH:ALT_DESCRIPTIF_FR15 htmlattributeencode$$</titre>
				<ordre>15</ordre>
				<thbUrl>$$SEARCH:THUMBURL15$$</thbUrl>
				<carreurl>$$SEARCH:CARREURL15$$</carreurl>
				<bigUrl>$$SEARCH:BIGURL15$$</bigUrl>
				<stdUrl>$$SEARCH:PHOTOURL15$$</stdUrl>
				<c175url>$$SEARCH:C175URL15$$</c175url>
				<stdwidth>$$SEARCH:PHOTOW15$$</stdwidth>
				<stdheight>$$SEARCH:PHOTOH15$$</stdheight>
				<thumbwidth>$$SEARCH:THUMBW15$$</thumbwidth>
				<thumbheight>$$SEARCH:THUMBH15$$</thumbheight>
				<bigwidth>$$SEARCH:BIGW15$$</bigwidth>
				<bigheight>$$SEARCH:BIGH15$$</bigheight>
			</photo>
		$$END:PHOTOURL15$$
		$$IF:SEARCH:PHOTOURL16$$
			<photo>
				<titre>$$SEARCH:ALT_DESCRIPTIF_FR16 htmlattributeencode$$</titre>
				<ordre>16</ordre>
				<thbUrl>$$SEARCH:THUMBURL16$$</thbUrl>
				<carreurl>$$SEARCH:CARREURL16$$</carreurl>
				<bigUrl>$$SEARCH:BIGURL16$$</bigUrl>
				<stdUrl>$$SEARCH:PHOTOURL16$$</stdUrl>
				<c175url>$$SEARCH:C175URL16$$</c175url>
				<stdwidth>$$SEARCH:PHOTOW16$$</stdwidth>
				<stdheight>$$SEARCH:PHOTOH16$$</stdheight>
				<thumbwidth>$$SEARCH:THUMBW16$$</thumbwidth>
				<thumbheight>$$SEARCH:THUMBH16$$</thumbheight>
				<bigwidth>$$SEARCH:BIGW16$$</bigwidth>
				<bigheight>$$SEARCH:BIGH16$$</bigheight>
			</photo>
		$$END:PHOTOURL16$$
				$$IF:SEARCH:PHOTOURL17$$
			<photo>
				<titre>$$SEARCH:ALT_DESCRIPTIF_FR17 htmlattributeencode$$</titre>
				<ordre>17</ordre>
				<thbUrl>$$SEARCH:THUMBURL17$$</thbUrl>
				<carreurl>$$SEARCH:CARREURL17$$</carreurl>
				<bigUrl>$$SEARCH:BIGURL17$$</bigUrl>
				<stdUrl>$$SEARCH:PHOTOURL17$$</stdUrl>
				<c175url>$$SEARCH:C175URL17$$</c175url>
				<stdwidth>$$SEARCH:PHOTOW17$$</stdwidth>
				<stdheight>$$SEARCH:PHOTOH17$$</stdheight>
				<thumbwidth>$$SEARCH:THUMBW17$$</thumbwidth>
				<thumbheight>$$SEARCH:THUMBH17$$</thumbheight>
				<bigwidth>$$SEARCH:BIGW17$$</bigwidth>
				<bigheight>$$SEARCH:BIGH17$$</bigheight>
			</photo>
		$$END:PHOTOURL17$$
				$$IF:SEARCH:PHOTOURL18$$
			<photo>
				<titre>$$SEARCH:ALT_DESCRIPTIF_FR18 htmlattributeencode$$</titre>
				<ordre>18</ordre>
				<thbUrl>$$SEARCH:THUMBURL18$$</thbUrl>
				<carreurl>$$SEARCH:CARREURL18$$</carreurl>
				<bigUrl>$$SEARCH:BIGURL18$$</bigUrl>
				<stdUrl>$$SEARCH:PHOTOURL18$$</stdUrl>
				<c175url>$$SEARCH:C175URL18$$</c175url>
				<stdwidth>$$SEARCH:PHOTOW18$$</stdwidth>
				<stdheight>$$SEARCH:PHOTOH18$$</stdheight>
				<thumbwidth>$$SEARCH:THUMBW18$$</thumbwidth>
				<thumbheight>$$SEARCH:THUMBH18$$</thumbheight>
				<bigwidth>$$SEARCH:BIGW18$$</bigwidth>
				<bigheight>$$SEARCH:BIGH18$$</bigheight>
			</photo>
		$$END:PHOTOURL18$$
				$$IF:SEARCH:PHOTOURL19$$
			<photo>
				<titre>$$SEARCH:ALT_DESCRIPTIF_FR19 htmlattributeencode$$</titre>
				<ordre>19</ordre>
				<thbUrl>$$SEARCH:THUMBURL19$$</thbUrl>
				<carreurl>$$SEARCH:CARREURL19$$</carreurl>
				<bigUrl>$$SEARCH:BIGURL19$$</bigUrl>
				<stdUrl>$$SEARCH:PHOTOURL19$$</stdUrl>
				<c175url>$$SEARCH:C175URL19$$</c175url>
				<stdwidth>$$SEARCH:PHOTOW19$$</stdwidth>
				<stdheight>$$SEARCH:PHOTOH19$$</stdheight>
				<thumbwidth>$$SEARCH:THUMBW19$$</thumbwidth>
				<thumbheight>$$SEARCH:THUMBH19$$</thumbheight>
				<bigwidth>$$SEARCH:BIGW19$$</bigwidth>
				<bigheight>$$SEARCH:BIGH19$$</bigheight>
			</photo>
		$$END:PHOTOURL19$$
				$$IF:SEARCH:PHOTOURL20$$
			<photo>
				<titre>$$SEARCH:ALT_DESCRIPTIF_FR20 htmlattributeencode$$</titre>
				<ordre>20</ordre>
				<thbUrl>$$SEARCH:THUMBURL20$$</thbUrl>
				<carreurl>$$SEARCH:CARREURL20$$</carreurl>
				<bigUrl>$$SEARCH:BIGURL20$$</bigUrl>
				<stdUrl>$$SEARCH:PHOTOURL20$$</stdUrl>
				<c175url>$$SEARCH:C175URL20$$</c175url>
				<stdwidth>$$SEARCH:PHOTOW20$$</stdwidth>
				<stdheight>$$SEARCH:PHOTOH20$$</stdheight>
				<thumbwidth>$$SEARCH:THUMBW20$$</thumbwidth>
				<thumbheight>$$SEARCH:THUMBH20$$</thumbheight>
				<bigwidth>$$SEARCH:BIGW20$$</bigwidth>
				<bigheight>$$SEARCH:BIGH20$$</bigheight>
			</photo>
		$$END:PHOTOURL20$$
		
		
	</photos>
	<nbsallesdebain>$$SEARCH:NB_SALLES_DE_BAIN$$</nbsallesdebain>
	<nbsalleseau>$$SEARCH:NB_SALLES_EAU$$</nbsalleseau>
	<nbtoilettes>$$SEARCH:NB_TOILETTES$$</nbtoilettes>
	<sisejour>$$SEARCH:SI_SEJOUR$$</sisejour>
	<surfsejour>$$SEARCH:SURF_SEJOUR$$</surfsejour>
	<anneeconstruct>$$SEARCH:ANNEE_CONSTRUCT$$</anneeconstruct>
	<nbparkings>$$SEARCH:NB_PARKINGS$$</nbparkings>
	<nbboxes>$$SEARCH:NB_BOXES$$</nbboxes>
	<siterrasse>$$SEARCH:SI_TERRASSE$$</siterrasse>
	<nbterrasses>$$SEARCH:NB_TERRASSES$$</nbterrasses>
	<sipiscine>$$SEARCH:SI_PISCINE$$</sipiscine>
</annonce>
