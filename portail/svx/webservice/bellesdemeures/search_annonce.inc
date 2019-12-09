<annonce>
	<idTiers>$$SEARCH:IDTIERS$$</idTiers>
	<idAnnonce>$$SEARCH:IDANNONCE$$</idAnnonce>
	<idPublication>$$SEARCH:IDPUBLICATION$$</idPublication>
	<idAgence>$$SEARCH:IDAGENCE$$</idAgence>
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
	<urllogo>$$SEARCH:URLLOGO$$</urllogo>
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
		$$IF:SEARCH:CARRE_URL_0$$
			<photo>
				<titre>$$SEARCH:ALT_DESCRIPTIF_FR0 htmlattributeencode$$</titre>
				<ordre>0</ordre>
				<thbUrl>$$SEARCH:THUMB_URL_0$$</thbUrl>
				<carreurl>$$SEARCH:CARRE_V_URL_0$$</carreurl>
				<bigUrl>$$SEARCH:BIG_URL_0$$</bigUrl>
				<stdUrl>$$SEARCH:STD_URL_0$$</stdUrl>
				<c175url>$$SEARCH:C175_URL_0$$</c175url>
				<stdwidth>$$SEARCH:STD_WIDTH_0$$</stdwidth>
				<stdheight>$$SEARCH:STD_HEIGHT_0$$</stdheight>
				<thumbwidth>$$SEARCH:THUMB_WIDTH_0$$</thumbwidth>
				<thumbheight>$$SEARCH:THUMB_HEIGHT_0$$</thumbheight>
				<bigwidth>$$SEARCH:BIG_WIDTH_0$$</bigwidth>
				<bigheight>$$SEARCH:BIG_HEIGHT_0$$</bigheight>
			</photo>
		$$END:CARRE_URL_0$$
		$$IF:SEARCH:CARRE_URL_1$$
			<photo>
				<titre>$$SEARCH:ALT_DESCRIPTIF_FR1 htmlattributeencode$$</titre>
				<ordre>1</ordre>
				<thbUrl>$$SEARCH:THUMB_URL_1$$</thbUrl>
				<carreurl>$$SEARCH:CARRE_V_URL_1$$</carreurl>
				<bigUrl>$$SEARCH:BIG_URL_1$$</bigUrl>
				<stdUrl>$$SEARCH:STD_URL_1$$</stdUrl>
				<c175url>$$SEARCH:C175_URL_1$$</c175url>
				<stdwidth>$$SEARCH:STD_WIDTH_1$$</stdwidth>
				<stdheight>$$SEARCH:STD_HEIGHT_1$$</stdheight>
				<thumbwidth>$$SEARCH:THUMB_WIDTH_1$$</thumbwidth>
				<thumbheight>$$SEARCH:THUMB_HEIGHT_1$$</thumbheight>
				<bigwidth>$$SEARCH:BIG_WIDTH_1$$</bigwidth>
				<bigheight>$$SEARCH:BIG_HEIGHT_1$$</bigheight>
			</photo>
		$$END:CARRE_URL_1$$
		$$IF:SEARCH:CARRE_URL_2$$
			<photo>
				<titre>$$SEARCH:ALT_DESCRIPTIF_FR2 htmlattributeencode$$</titre>
				<ordre>2</ordre>
				<thbUrl>$$SEARCH:THUMB_URL_2$$</thbUrl>
				<carreurl>$$SEARCH:CARRE_V_URL_2$$</carreurl>
				<bigUrl>$$SEARCH:BIG_URL_2$$</bigUrl>
				<stdUrl>$$SEARCH:STD_URL_2$$</stdUrl>
				<c175url>$$SEARCH:C175_URL_2$$</c175url>
				<stdwidth>$$SEARCH:STD_WIDTH_2$$</stdwidth>
				<stdheight>$$SEARCH:STD_HEIGHT_2$$</stdheight>
				<thumbwidth>$$SEARCH:THUMB_WIDTH_2$$</thumbwidth>
				<thumbheight>$$SEARCH:THUMB_HEIGHT_2$$</thumbheight>
				<bigwidth>$$SEARCH:BIG_WIDTH_2$$</bigwidth>
				<bigheight>$$SEARCH:BIG_HEIGHT_2$$</bigheight>
			</photo>
		$$END:CARRE_URL_2$$
		$$IF:SEARCH:CARRE_URL_3$$
			<photo>
				<titre>$$SEARCH:ALT_DESCRIPTIF_FR3 htmlattributeencode$$</titre>
				<ordre>3</ordre>
				<thbUrl>$$SEARCH:THUMB_URL_3$$</thbUrl>
				<carreurl>$$SEARCH:CARRE_V_URL_3$$</carreurl>
				<bigUrl>$$SEARCH:BIG_URL_3$$</bigUrl>
				<stdUrl>$$SEARCH:STD_URL_3$$</stdUrl>
				<c175url>$$SEARCH:C175_URL_3$$</c175url>
				<stdwidth>$$SEARCH:STD_WIDTH_3$$</stdwidth>
				<stdheight>$$SEARCH:STD_HEIGHT_3$$</stdheight>
				<thumbwidth>$$SEARCH:THUMB_WIDTH_3$$</thumbwidth>
				<thumbheight>$$SEARCH:THUMB_HEIGHT_3$$</thumbheight>
				<bigwidth>$$SEARCH:BIG_WIDTH_3$$</bigwidth>
				<bigheight>$$SEARCH:BIG_HEIGHT_3$$</bigheight>
			</photo>
		$$END:CARRE_URL_3$$
		$$IF:SEARCH:CARRE_URL_4$$
			<photo>
				<titre>$$SEARCH:ALT_DESCRIPTIF_FR4 htmlattributeencode$$</titre>
				<ordre>4</ordre>
				<thbUrl>$$SEARCH:THUMB_URL_4$$</thbUrl>
				<carreurl>$$SEARCH:CARRE_V_URL_4$$</carreurl>
				<bigUrl>$$SEARCH:BIG_URL_4$$</bigUrl>
				<stdUrl>$$SEARCH:STD_URL_4$$</stdUrl>
				<c175url>$$SEARCH:C175_URL_4$$</c175url>
				<stdwidth>$$SEARCH:STD_WIDTH_4$$</stdwidth>
				<stdheight>$$SEARCH:STD_HEIGHT_4$$</stdheight>
				<thumbwidth>$$SEARCH:THUMB_WIDTH_4$$</thumbwidth>
				<thumbheight>$$SEARCH:THUMB_HEIGHT_4$$</thumbheight>
				<bigwidth>$$SEARCH:BIG_WIDTH_4$$</bigwidth>
				<bigheight>$$SEARCH:BIG_HEIGHT_4$$</bigheight>
			</photo>
		$$END:CARRE_URL_4$$
		$$IF:SEARCH:CARRE_URL_5$$
			<photo>
				<titre>$$SEARCH:ALT_DESCRIPTIF_FR5 htmlattributeencode$$</titre>
				<ordre>5</ordre>
				<thbUrl>$$SEARCH:THUMB_URL_5$$</thbUrl>
				<carreurl>$$SEARCH:CARRE_V_URL_5$$</carreurl>
				<bigUrl>$$SEARCH:BIG_URL_5$$</bigUrl>
				<stdUrl>$$SEARCH:STD_URL_5$$</stdUrl>
				<c175url>$$SEARCH:C175_URL_5$$</c175url>
				<stdwidth>$$SEARCH:STD_WIDTH_5$$</stdwidth>
				<stdheight>$$SEARCH:STD_HEIGHT_5$$</stdheight>
				<thumbwidth>$$SEARCH:THUMB_WIDTH_5$$</thumbwidth>
				<thumbheight>$$SEARCH:THUMB_HEIGHT_5$$</thumbheight>
				<bigwidth>$$SEARCH:BIG_WIDTH_5$$</bigwidth>
				<bigheight>$$SEARCH:BIG_HEIGHT_5$$</bigheight>
			</photo>
		$$END:CARRE_URL_5$$
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
	<niveauorargent>$$SEARCH:NIVEAUORARGENT$$</niveauorargent>
	<tagOmniture>$$SEARCH:TAG_OMNITURE$$</tagOmniture>
	
	$$E:IMMOBW:GETANNONCES_OFFRESPHARESBD:~idtt:QRY:IDTT:~idtb:QRY:IDTB:~ci:QRY:CI:~cp:QRY:CP:~div:QRY:DIV:~idsubdivision:QRY:IDSUBDIVISION:~nbslots:QRY:NBSLOTS:ALIAS:OFFRESPHARES$$
	$$OFFRESPHARES:ANNONCES$$
</annonce>
