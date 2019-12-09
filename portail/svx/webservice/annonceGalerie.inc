<annonce>
	<idAnnonce>$$SEARCHGALERY:IDANNONCE$$</idAnnonce>
	<idPublication>$$SEARCHGALERY:IDPUBLICATION$$</idPublication>
	<idTypeTransaction>$$SEARCHGALERY:IDTYPETRANSACTIONORI$$</idTypeTransaction>
	<idTypeBien>$$SEARCHGALERY:IDTYPEBIEN$$</idTypeBien>
	$$IF:SEARCHGALERY:IDSOUSTYPEBIEN$$<idSousTypeBien>$$SEARCHGALERY:IDSOUSTYPEBIEN$$</idSousTypeBien>$$END$$
	<dtFraicheur>$$SEARCHGALERY:DT_FRAICHEUR date yyyy-MM-ddTHH:mm:ss$$</dtFraicheur>
	<dtCreation>$$SEARCHGALERY:DT_CREA date yyyy-MM-ddTHH:mm:ss$$</dtCreation>
	<titre>$$SEARCHGALERY:TITRE htmlattributeencode$$</titre>
	<libelle>$$SEARCHGALERY:LIBELLE htmlattributeencode$$</libelle>
	$$IF:SEARCHGALERY:PROX$$<proximite>$$SEARCHGALERY:PROX htmlattributeencode$$</proximite>$$END$$
	<descriptif>$$SEARCHGALERY:DESCRIPTIF htmlattributeencode$$</descriptif>
$$IF0:SEARCHGALERY:SITRANCHEPRIX$$
$$IF:SEARCHGALERY:PRIXRAW$$
	<prix>$$SEARCHGALERY:PRIXRAW round 2$$</prix>
$$END:PRIXRAW$$
$$END:SITRANCHEPRIX$$
$$IF:SEARCHGALERY:SITRANCHEPRIX$$
	<tranchePrix>$$SEARCHGALERY:TRANCHEPRIX htmldecode htmlattributeencode rxreplace €$ ¤ trim$$</tranchePrix>
$$END:SITRANCHEPRIX$$
	<prixUnite>$$SEARCHGALERY:PRIX_UNITE$$$$IF:SEARCHGALERY:SI_LOYER_CC$$*$$END:SI_LOYER_CC$$$$IF:SEARCHGALERY:SI_FAI$$ FAI*$$END:SI_FAI$$</prixUnite>
	<prixMention>$$IF:SEARCHGALERY:SI_LOYER_CC$$* Loyer mensuel charges comprises$$END:SI_LOYER_CC$$$$IF:SEARCHGALERY:SI_FAI$$* Prix net, hors frais notariés, d'enregistrement et de publicité foncière$$END:SI_FAI$$</prixMention>
$$IF=:11:SEARCHGALERY:IDTYPETRANSACTIONORI$$
	<loyer>$$SEARCHGALERY:PX_LOYER round 2$$</loyer>
	$$A:SI_LOYER_CC=0$$ $$IF:SEARCHGALERY:SI_LOYER_CC$$ $$A:SI_LOYER_CC=1$$ $$END$$ $$IF=:OUI:SEARCHGALERY:XML xml si_loyer_annuel_cc trim$$ $$A:SI_LOYER_CC=1$$ $$END$$
	$$A:SI_LOYER_HT=0$$ $$IF:SEARCHGALERY:SI_LOYER_HT$$ $$A:SI_LOYER_HT=1$$ $$END$$ $$IF=:OUI:SEARCHGALERY:XML xml si_loyer_annuel_ht trim$$ $$A:SI_LOYER_HT=1$$ $$END$$
	<loyerUnite>€$$IF:SI_LOYER_CC$$cc$$END:SI_LOYER_CC$$$$IF:SI_LOYER_HT$$HT$$END:SI_LOYER_HT$$</loyerUnite>
$$END:IDTYPETRANSACTIONORI$$
$$IF=:1$11:SEARCHGALERY:IDTYPETRANSACTIONORI$$
	$$IF:SEARCHGALERY:XML xml loyer_annuel_metre$$
	<loyerAnnuelM2>$$SEARCHGALERY:XML xml loyer_annuel_metre round 2$$</loyerAnnuelM2>
	<loyerAnnuelM2Unite>€$$IF=:OUI:SEARCHGALERY:XML xml si_loyer_annuel_metre_cc trim$$cc$$END$$$$IF=:OUI:SEARCHGALERY:XML xml si_loyer_annuel_metre_ht trim$$HT$$END$$</loyerAnnuelM2Unite>
	$$END$$
	$$IF:SEARCHGALERY:XML xml loyer_annuel_global$$
	<loyerAnnuel>$$SEARCHGALERY:XML xml loyer_annuel_global round 2$$</loyerAnnuel>
	<loyerAnnuelUnite>€$$IF=:OUI:SEARCHGALERY:XML xml si_loyer_annuel_cc trim$$cc$$END$$$$IF=:OUI:SEARCHGALERY:XML xml si_loyer_annuel_ht trim$$HT$$END$$</loyerAnnuelUnite>
	$$END$$
$$END:IDTYPETRANSACTIONORI$$
	$$IF:SEARCHGALERY:NB_PIECES$$<nbPiece>$$SEARCHGALERY:NB_PIECES$$</nbPiece>$$END$$
	$$IF:SEARCHGALERY:NB_CHAMBRES$$<nbChambre>$$SEARCHGALERY:NB_CHAMBRES$$</nbChambre>$$END$$
	$$IF:SEARCHGALERY:SURFACE$$<surface>$$SEARCHGALERY:SURFACE round 2$$</surface>
	<surfaceUnite>m²</surfaceUnite>$$END$$
	<idPays>$$SEARCHGALERY:IDPAYS$$</idPays>
	<pays>$$SEARCHGALERY:IDPAYS getpays$$</pays>
	$$IF:SEARCHGALERY:ACP$$<cp>$$SEARCHGALERY:ACP$$</cp>$$END$$
	$$IF:SEARCHGALERY:CODEINSEE$$<codeInsee>$$SEARCHGALERY:CODEINSEE$$</codeInsee>$$END$$
	<ville>$$SEARCHGALERY:AVILLE htmlattributeencode$$</ville>
	<nbPhotos>$$SEARCHGALERY:NB_PHOTOS$$</nbPhotos>
	$$IF:SEARCHGALERY:CARREURL0$$<firstThumb>$$SEARCHGALERY:CARREURL0$$</firstThumb>$$END$$$$REM$$On n'utilise pas CARRE_URL car elle peut contenir une imagette de video, ce qui ne nous arrange pas pour ce webservice$$END$$
$$IF0:SEARCHGALERY:URLVIRTUELLE$$
	<permaLien>http://www.$$REP:MSRV$$/$$SEARCHGALERY:IDPUBLICATION$$/$$SEARCHGALERY:IDANNONCE$$/detail.htm?idtt=$$SEARCHGALERY:IDTYPETRANSACTIONORI$$&amp;p=$$SEARCHGALERY:BASICPARAMETERS urlencode$$</permaLien>
$$END$$
$$IF:SEARCHGALERY:URLVIRTUELLE$$
	<permaLien>$$SEARCHGALERY:URLVIRTUELLE htmlattributeencode$$?p=$$SEARCHGALERY:BASICPARAMETERS urlencode$$</permaLien>
$$END$$
	<latitude>$$SEARCHGALERY:PUBLICLAT round 6$$</latitude>
	<longitude>$$SEARCHGALERY:PUBLICLNG round 6$$</longitude>
	<llPrecision>$$SEARCHGALERY:LATLNGTYPE$$</llPrecision>
	<typeDPE>$$SEARCHGALERY:TYPEDPE$$</typeDPE>
	$$IF:SEARCHGALERY:CONSOENERGIE$$<consoEnergie>$$SEARCHGALERY:CONSOENERGIE$$</consoEnergie>$$END:CONSOENERGIE$$
	$$IF:SEARCHGALERY:BILANCONSOENERGIE$$<bilanConsoEnergie>$$SEARCHGALERY:BILANCONSOENERGIE$$</bilanConsoEnergie>$$END:BILANCONSOENERGIE$$
	$$IF:SEARCHGALERY:EMISSIONGES$$<emissionGES>$$SEARCHGALERY:EMISSIONGES$$</emissionGES>$$END:EMISSIONGES$$
	$$IF:SEARCHGALERY:BILANEMISSIONGES$$<bilanEmissionGES>$$SEARCHGALERY:BILANEMISSIONGES$$</bilanEmissionGES>$$END:BILANEMISSIONGES$$
	<siLotNeuf>$$IF:SEARCHGALERY:IDANNONCEPARENT$$true$$END$$$$IF0:SEARCHGALERY:IDANNONCEPARENT$$false$$END$$</siLotNeuf>	
	<siMandatExclusif>$$IF:SEARCHGALERY:SI_MANDATEXCLUSIF_ET_PRODUITEXCLUSIVITESL$$ $$SEARCHGALERY:SI_MANDATEXCLUSIF_ET_PRODUITEXCLUSIVITESL$$$$END$$ $$IF0:SEARCHGALERY:SI_MANDATEXCLUSIF_ET_PRODUITEXCLUSIVITESL$$false$$END$$</siMandatExclusif>
	<siMandatStar>$$IF:SEARCHGALERY:SIMANDATSTAR$$ $$SEARCHGALERY:SIMANDATSTAR$$$$END$$ $$IF0:SEARCHGALERY:SIMANDATSTAR$$false$$END$$</siMandatStar>
	<contact>
$$IF:FORM:NOAUDIOTEL$$
	$$A:NOAUDIOTEL=1$$
$$END$$
$$IF0:SEARCHGALERY:SI_AUDIOTEL$$
	$$A:NOAUDIOTEL=1$$
$$END$$
$$IF:NOAUDIOTEL$$
		<siAudiotel>false</siAudiotel>
		<idPublication>$$SEARCHGALERY:IDPUBLICATION$$</idPublication>
		<nom>$$IF:SEARCHGALERY:COOR-NOM$$$$SEARCHGALERY:COOR-NOM htmlattributeencode$$$$END:COOR-NOM$$$$IF0:SEARCHGALERY:COOR-NOM$$$$SEARCHGALERY:COOR-CONTACT htmlattributeencode$$$$END:COOR-NOM$$</nom>
		$$IF:SEARCHGALERY:RCS_SIREN$$<rcsSiren>$$SEARCHGALERY:RCS_SIREN$$</rcsSiren>
		$$IF:SEARCHGALERY:RCS_NIC$$<rcsNic>$$SEARCHGALERY:RCS_NIC$$</rcsNic>$$END$$$$END$$
$$END:NOAUDIOTEL$$
	</contact>
	<photos>
		$$IF:SEARCHGALERY:PHOTOURL0$$
			<photo>
				<titre>$$SEARCHGALERY:ALT_DESCRIPTIF_FR0 htmlattributeencode$$</titre>
				<ordre>0</ordre>
				<thumburl>$$SEARCHGALERY:THUMBURL0$$</thumburl>
				<carreurl>$$SEARCHGALERY:CARREURL0$$</carreurl>
				<bigurl>$$SEARCHGALERY:BIGURL0$$</bigurl>
				<stdurl>$$SEARCHGALERY:PHOTOURL0$$</stdurl>
				<c175url>$$SEARCHGALERY:C175URL0$$</c175url>
				<stdwidth>$$SEARCHGALERY:PHOTOW0$$</stdwidth>
				<stdheight>$$SEARCHGALERY:PHOTOH0$$</stdheight>
				<thumbwidth>$$SEARCHGALERY:THUMBW0$$</thumbwidth>
				<thumbheight>$$SEARCHGALERY:THUMBH0$$</thumbheight>
				<bigwidth>$$SEARCHGALERY:BIGW0$$</bigwidth>
				<bigheight>$$SEARCHGALERY:BIGH0$$</bigheight>
			</photo>
		$$END:PHOTOURL0$$
		$$IF:SEARCHGALERY:PHOTOURL1$$
			<photo>
				<titre>$$SEARCHGALERY:ALT_DESCRIPTIF_FR1 htmlattributeencode$$</titre>
				<ordre>1</ordre>
				<thumburl>$$SEARCHGALERY:THUMBURL1$$</thumburl>
				<carreurl>$$SEARCHGALERY:CARREURL1$$</carreurl>
				<bigurl>$$SEARCHGALERY:BIGURL1$$</bigurl>
				<stdurl>$$SEARCHGALERY:PHOTOURL1$$</stdurl>
				<c175url>$$SEARCHGALERY:C175URL1$$</c175url>
				<stdwidth>$$SEARCHGALERY:PHOTOW1$$</stdwidth>
				<stdheight>$$SEARCHGALERY:PHOTOH1$$</stdheight>
				<thumbwidth>$$SEARCHGALERY:THUMBW1$$</thumbwidth>
				<thumbheight>$$SEARCHGALERY:THUMBH1$$</thumbheight>
				<bigwidth>$$SEARCHGALERY:BIGW1$$</bigwidth>
				<bigheight>$$SEARCHGALERY:BIGH1$$</bigheight>
			</photo>
		$$END:PHOTOURL1$$
		$$IF:SEARCHGALERY:PHOTOURL2$$
			<photo>
				<titre>$$SEARCHGALERY:ALT_DESCRIPTIF_FR2 htmlattributeencode$$</titre>
				<ordre>2</ordre>
				<thumburl>$$SEARCHGALERY:THUMBURL2$$</thumburl>
				<carreurl>$$SEARCHGALERY:CARREURL2$$</carreurl>
				<bigurl>$$SEARCHGALERY:BIGURL2$$</bigurl>
				<stdurl>$$SEARCHGALERY:PHOTOURL2$$</stdurl>
				<c175url>$$SEARCHGALERY:C175URL2$$</c175url>
				<stdwidth>$$SEARCHGALERY:PHOTOW2$$</stdwidth>
				<stdheight>$$SEARCHGALERY:PHOTOH2$$</stdheight>
				<thumbwidth>$$SEARCHGALERY:THUMBW2$$</thumbwidth>
				<thumbheight>$$SEARCHGALERY:THUMBH2$$</thumbheight>
				<bigwidth>$$SEARCHGALERY:BIGW2$$</bigwidth>
				<bigheight>$$SEARCHGALERY:BIGH2$$</bigheight>
			</photo>
		$$END:PHOTOURL2$$
		$$IF:SEARCHGALERY:PHOTOURL3$$
			<photo>
				<titre>$$SEARCHGALERY:ALT_DESCRIPTIF_FR3 htmlattributeencode$$</titre>
				<ordre>3</ordre>
				<thumburl>$$SEARCHGALERY:THUMBURL3$$</thumburl>
				<carreurl>$$SEARCHGALERY:CARREURL3$$</carreurl>
				<bigurl>$$SEARCHGALERY:BIGURL3$$</bigurl>
				<stdurl>$$SEARCHGALERY:PHOTOURL3$$</stdurl>
				<c175url>$$SEARCHGALERY:C175URL3$$</c175url>
				<stdwidth>$$SEARCHGALERY:PHOTOW3$$</stdwidth>
				<stdheight>$$SEARCHGALERY:PHOTOH3$$</stdheight>
				<thumbwidth>$$SEARCHGALERY:THUMBW3$$</thumbwidth>
				<thumbheight>$$SEARCHGALERY:THUMBH3$$</thumbheight>
				<bigwidth>$$SEARCHGALERY:BIGW3$$</bigwidth>
				<bigheight>$$SEARCHGALERY:BIGH3$$</bigheight>
			</photo>
		$$END:PHOTOURL3$$
		$$IF:SEARCHGALERY:PHOTOURL4$$
			<photo>
				<titre>$$SEARCHGALERY:ALT_DESCRIPTIF_FR4 htmlattributeencode$$</titre>
				<ordre>4</ordre>
				<thumburl>$$SEARCHGALERY:THUMBURL4$$</thumburl>
				<carreurl>$$SEARCHGALERY:CARREURL4$$</carreurl>
				<bigurl>$$SEARCHGALERY:BIGURL4$$</bigurl>
				<stdurl>$$SEARCHGALERY:PHOTOURL4$$</stdurl>
				<c175url>$$SEARCHGALERY:C175URL4$$</c175url>
				<stdwidth>$$SEARCHGALERY:PHOTOW4$$</stdwidth>
				<stdheight>$$SEARCHGALERY:PHOTOH4$$</stdheight>
				<thumbwidth>$$SEARCHGALERY:THUMBW4$$</thumbwidth>
				<thumbheight>$$SEARCHGALERY:THUMBH4$$</thumbheight>
				<bigwidth>$$SEARCHGALERY:BIGW4$$</bigwidth>
				<bigheight>$$SEARCHGALERY:BIGH4$$</bigheight>
			</photo>
		$$END:PHOTOURL4$$
		$$IF:SEARCHGALERY:PHOTOURL5$$
			<photo>
				<titre>$$SEARCHGALERY:ALT_DESCRIPTIF_FR5 htmlattributeencode$$</titre>
				<ordre>5</ordre>
				<thumburl>$$SEARCHGALERY:THUMBURL5$$</thumburl>
				<carreurl>$$SEARCHGALERY:CARREURL5$$</carreurl>
				<bigurl>$$SEARCHGALERY:BIGURL5$$</bigurl>
				<stdurl>$$SEARCHGALERY:PHOTOURL5$$</stdurl>
				<c175url>$$SEARCHGALERY:C175URL5$$</c175url>
				<stdwidth>$$SEARCHGALERY:PHOTOW5$$</stdwidth>
				<stdheight>$$SEARCHGALERY:PHOTOH5$$</stdheight>
				<thumbwidth>$$SEARCHGALERY:THUMBW5$$</thumbwidth>
				<thumbheight>$$SEARCHGALERY:THUMBH5$$</thumbheight>
				<bigwidth>$$SEARCHGALERY:BIGW5$$</bigwidth>
				<bigheight>$$SEARCHGALERY:BIGH5$$</bigheight>
			</photo>
		$$END:PHOTOURL5$$
	</photos>
	<nbsallesdebain>$$SEARCHGALERY:NB_SALLES_DE_BAIN$$</nbsallesdebain>
	<nbsalleseau>$$SEARCHGALERY:NB_SALLES_EAU$$</nbsalleseau>
	<nbtoilettes>$$SEARCHGALERY:NB_TOILETTES$$</nbtoilettes>
	<sisejour>$$SEARCHGALERY:SI_SEJOUR$$</sisejour>
	<surfsejour>$$SEARCHGALERY:SURF_SEJOUR$$</surfsejour>
	<anneeconstruct>$$SEARCHGALERY:ANNEE_CONSTRUCT$$</anneeconstruct>
	<nbparkings>$$SEARCHGALERY:NB_PARKINGS$$</nbparkings>
	<nbboxes>$$SEARCHGALERY:NB_BOXES$$</nbboxes>
	<siterrasse>$$SEARCHGALERY:SI_TERRASSE$$</siterrasse>
	<nbterrasses>$$SEARCHGALERY:NB_TERRASSES$$</nbterrasses>
	<sipiscine>$$SEARCHGALERY:SI_PISCINE$$</sipiscine>
</annonce>