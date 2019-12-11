$$INCL:DICO-FORM.HTM$$
<html>
<head>
<title>agence immobiliere bergerac</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<STYLE >
<!--

.menu {
font-family: Verdana, Arial, Helvetica, sans-serif;
text-decoration: none;
font-size: 11px;
color: #ffffff;
}

.mailto {
font-family: Verdana, Arial, Helvetica, sans-serif;
text-decoration: none;
font-size: 11px;
color: #ffffff;
}

.mailto:hover {
font-family: Verdana, Arial, Helvetica, sans-serif;
text-decoration: none;
font-size: 11px;
color: #3399fe;
}

.tabMenu {
background-color:#E2003D;
font-family: Verdana, Arial, Helvetica, sans-serif;
text-decoration: none;
font-size: 11px;
color: #ffffff;
}


.tabMenuSelect {
background-color:#83C6F3;
font-family: Verdana, Arial, Helvetica, sans-serif;
text-decoration: none;
font-size: 11px;
color: #ffffff;
}

-->
</STYLE>
<LINK REL=stylesheet TYPE="text/css" HREF="/z/sla/slagence_ordo/CSS/style1.css">
</head>
<SCRIPT LANGUAGE="JavaScript">
<!--

function preloadImages() { 
  var d=document;
  if(d.images){ if(!d.Stock) d.Stock=new Array();
  var i,j=d.Stock.length,a=preloadImages.arguments;
  for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.Stock[j]=new Image; d.Stock[j++].src=a[i];}}
}

function changeImages(){
//les arguments sont des paires "name : nom du champ ancienne image" et "nom : nom de l'image nouvelle"
var a = changeImages.arguments;
for (i=0; i<a.length; i=i+2)
	{
	document[a[i]].src = a[i+1];
	}
}


//-->
</SCRIPT>
<SCRIPT LANGUAGE="JavaScript">
    function go2(ref)
	{window.open(ref,'visu3d','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=500,height=520');}					
	</SCRIPT>

<body bgcolor="#FFFFFF" text="#000000" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
			
$$E:IMMOBW:AGENCE:REP:1$$ $$E:IMMOBW:NBANN:REP:1$$
<table width="500" border="0" cellspacing="0" cellpadding="0" align="center">
  <tr> 
	<td> 
	  <table width="100%" border="0" cellspacing="0" cellpadding="0">
		<tr> 
		  <td width="193"><img src="pop/1.gif" width="193" height="101"></td>
		  <td bgcolor="84C7F7">
			<table width="100%" border="0" cellspacing="0" cellpadding="0">
			  <tr>
				<td width="14%"><img src="pop/boule.gif" width="104" height="101"></td>
				<td width="86%">
				
				<B><FONT SIZE="3">
				$$IMMOBW:AGENCE:NOM$$<BR>
							</FONT>$$IMMOBW:AGENCE:ADRESSE crlf2br$$ <BR>
							T&eacute;l : &nbsp;$$IMMOBW:AGENCE:TEL formattel$$ 
							$$IF:IMMOBW:AGENCE:TELVENTE$$(pour les locations)<BR>
							T&eacute;l : &nbsp;$$IMMOBW:AGENCE:TELVENTE formattel$$(pour 
							les ventes)$$END:IMMOBW:AGENCE:TELVENTE$$<BR>
							Fax : $$IMMOBW:AGENCE:FAX formattel$$ <BR>
				  E-mail : <a href="mailto:$$IMMOBW:AGENCE:EMAIL$$" class="tec">$$IMMOBW:AGENCE:EMAIL$$</a> </B><BR>
							</td>
			  </tr>
			</table>
		  </td>
		</tr>
	  </table>
	</td>
  </tr>
  <tr>
	<td bgcolor="#FFFFFF" height="2"></td>
  </tr>
  <tr> 
	<td>
	  <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr bgcolor="C24B67"> 
          <td width="21%">&nbsp;</td>
          <td width="79%"> <TABLE WIDTH="290" BORDER="0" CELLSPACING="0" CELLPADDING="0" ALIGN="CENTER">
              <TR> 
                <TD><B><FONT COLOR="#FFFFFF" SIZE="2">$$IMMOBW:AGENCE:TXT_PUBLIC 
                  crlf2br$$</FONT> </B> </TD>
              </TR>
            </TABLE>
            <B><font size="1" color="#66CCFF">$$IMMOBW:NBANN:NBANN$$ annonce$$IMMOBW:NBANN:NBANN 
            pluriel$$ immobili&egrave;re$$IMMOBW:NBANN:NBANN pluriel$$ &agrave; 
            consulter</font></B></td>
        </tr>
        <tr bgcolor="C24B67"> 
          <td colspan="2"> <div align="center">$$B:IMMOBW:AGENCETRANSACTIONS:REP:1$$ 
              $$BIF:IMMOBW:AGENCETRANSACTIONS:REP$$ $$DO:0:99$$ $$IF=:1:IMMOBW:AGENCETRANSACTIONS:REP:IDTYPETRANSACTION$$ 
              <A target="_blank" HREF="/$$REP:1$$/recherche.htm?idtt=1&idagence=$$IMMOBW:AGENCE:IDAGENCE$$" CLASS="tec3" onMouseOver="javascript:changeImages('fleche1','/z/sla/orpi_azur/Images/fleche.gif');" onMouseOut="javascript:changeImages('fleche1','/z/sla/orpi_azur/Images/Vide.gif');"><IMG SRC="images/Vide.gif" WIDTH="16" HEIGHT="10" NAME="fleche1" BORDER="0"><FONT SIZE="2"><B><U>Locations</U></B></FONT></A> 
              $$END$$ $$IF=:2:IMMOBW:AGENCETRANSACTIONS:REP:IDTYPETRANSACTION$$ 
              <A target="_blank" HREF="/$$REP:1$$/recherche.htm?idtt=2&idagence=$$IMMOBW:AGENCE:IDAGENCE$$" CLASS="tec3" onMouseOver="javascript:changeImages('fleche2','/z/sla/orpi_azur/Images/fleche.gif');" onMouseOut="javascript:changeImages('fleche2','/z/sla/orpi_azur/Images/Vide.gif');"><IMG SRC="images/Vide.gif" WIDTH="16" HEIGHT="10" NAME="fleche2" BORDER="0"><B><FONT SIZE="2"><U>Ventes</U></FONT></B></A> 
              $$END$$ $$IF=:3:IMMOBW:AGENCETRANSACTIONS:REP:IDTYPETRANSACTION$$ 
              <A target="_blank" HREF="/$$REP:1$$/recherche.htm?idtt=3&idagence=$$IMMOBW:AGENCE:IDAGENCE$$" CLASS="tec3" onMouseOver="javascript:changeImages('fleche3','/z/sla/orpi_azur/Images/fleche.gif');" onMouseOut="javascript:changeImages('fleche3','/z/sla/orpi_azur/Images/Vide.gif');"><IMG SRC="images/Vide.gif" WIDTH="16" HEIGHT="10" NAME="fleche3" BORDER="0"><B><FONT SIZE="2"><U>Locations 
              temporaires</U></FONT></B></A> $$END$$ $$IF=:4:IMMOBW:AGENCETRANSACTIONS:REP:IDTYPETRANSACTION$$ 
              <A target="_blank" HREF="/$$REP:1$$/recherche.htm?idtt=4&idagence=$$IMMOBW:AGENCE:IDAGENCE$$" CLASS="tec3" onMouseOver="javascript:changeImages('fleche4','/z/sla/orpi_azur/Images/fleche.gif');" onMouseOut="javascript:changeImages('fleche4','/z/sla/orpi_azur/Images/Vide.gif');"><IMG SRC="images/Vide.gif" WIDTH="16" HEIGHT="10" NAME="fleche4" BORDER="0"><B><FONT SIZE="2"><U>Locations 
              vacances</U></FONT></B></A> $$END$$ $$IF=:5:IMMOBW:AGENCETRANSACTIONS:REP:IDTYPETRANSACTION$$ 
              <A target="_blank"  HREF="/$$REP:1$$/recherche.htm?idtt=5&idagence=$$IMMOBW:AGENCE:IDAGENCE$$" CLASS="tec3" onMouseOver="javascript:changeImages('fleche5','/z/sla/orpi_azur/Images/fleche.gif');" onMouseOut="javascript:changeImages('fleche5','/z/sla/orpi_azur/Images/Vide.gif');"><IMG SRC="images/Vide.gif" WIDTH="16" HEIGHT="10" NAME="fleche5" BORDER="0"><B><FONT SIZE="2"><U>Viager</U></FONT></B></A> 
              $$END$$ $$IF=:6:IMMOBW:AGENCETRANSACTIONS:REP:IDTYPETRANSACTION$$ 
              <A target="_blank" HREF="/$$REP:1$$/recherche.htm?idtt=6&idagence=$$IMMOBW:AGENCE:IDAGENCE$$" CLASS=tec3" onMouseOver="javascript:changeImages('fleche6','/z/sla/orpi_azur/Images/fleche.gif');" onMouseOut="javascript:changeImages('fleche6','/z/sla/orpi_azur/Images/Vide.gif');"><IMG SRC="images/Vide.gif" WIDTH="16" HEIGHT="10" NAME="fleche6" BORDER="0"><B><FONT SIZE="2"><U>Produit 
              d'investissement</U></FONT></B></A> $$END$$ $$IF=:7:IMMOBW:AGENCETRANSACTIONS:REP:IDTYPETRANSACTION$$ 
              <A target="_blank" HREF="/$$REP:1$$/recherche.htm?idtt=7&idagence=$$IMMOBW:AGENCE:IDAGENCE$$" CLASS="tec3" onMouseOver="javascript:changeImages('fleche7','/z/sla/orpi_azur/Images/fleche.gif');" onMouseOut="javascript:changeImages('fleche7','/z/sla/orpi_azur/Images/Vide.gif');"><IMG SRC="images/Vide.gif" WIDTH="16" HEIGHT="10" NAME="fleche7" BORDER="0"><B><FONT SIZE="2"><U>Locations 
              prestige</U></FONT></B></A> $$END$$ $$IF=:8:IMMOBW:AGENCETRANSACTIONS:REP:IDTYPETRANSACTION$$ 
              <A target="_blank" HREF="/$$REP:1$$/recherche.htm?idtt=8&idagence=$$IMMOBW:AGENCE:IDAGENCE$$" CLASS="tec3" onMouseOver="javascript:changeImages('fleche8','/z/sla/orpi_azur/Images/fleche.gif');" onMouseOut="javascript:changeImages('fleche8','/z/sla/orpi_azur/Images/Vide.gif');"><IMG SRC="images/Vide.gif" WIDTH="16" HEIGHT="10" NAME="fleche8" BORDER="0"><B><FONT SIZE="2"><U>Ventes 
              prestige</U></FONT></B></A> $$END$$ $$LOOP$$ $$BFIN$$ <br>
              <br>
              <IMG SRC="/photos_agences/$$REP:1$$.jpg"> <br>
              <br>
              <IMG SRC="/photos_perso/$$REP:1$$.jpg"> <br>
              <br>
              <IMG SRC="/photos_ville/$$REP:1$$.jpg"> <br>
              $$IF=:98369:REP:1$$<br>
              Perigueux Immobilier vous apporte une <b>solution globale</b> &agrave; 
              vos probl&egrave;mes immobiliers :<br>
              - <b>Achats et Ventes</b> rapides au prix du march&eacute; en toute 
              <b>s&eacute;curit&eacute;</b>,<br>
              - <b>Location</b>s sur toute la ville et les environs soigneusement<b> 
              s&eacute;lectionn&eacute;s</b>,<br>
              - <b>Gestions</b> de vos biens avec la <b>garantie des loyers impay&eacute;s</b>,<br>
              - Conseil en <b>copropri&eacute;t&eacute;</b> &agrave; l'&eacute;coute 
              de vos besoins,<br>
              - Un accueil du lundi au samedi <br>
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr> 
                  <td width="60%">- Un <b>Parking clients</b> lors de vos visites 
                    &agrave; l'agence</td>
                  <td width="40%"><img src="images/parking.gif" width="30" height="30"></td>
                </tr>
              </table>
              <br>
              <BR>
              $$END$$ <br>
              <a href="javascript:go2('http://agence.seloger.com/carte.htm?Zip=$$IMMOBW:AGENCE:CP$$&Town=$$IMMOBW:AGENCE:VILLE$$&Adress=$$IMMOBW:AGENCE:ADRESSE$$')" class="tec3">Nous 
              situer</a> <br>
              <a href="/vendeur.htm" class="tec3">Vous vendez votre bien</a><br>
            </div></td>
        </tr>
        <tr bgcolor="C24B67"> 
          <td width="21%"><img src="pop/haut_orpi.gif" width="92" height="28"></td>
          <td width="79%">&nbsp;</td>
        </tr>
      </table>
	</td>
  </tr>
  <tr> 
	<td>
	  <table width="100%" border="0" cellspacing="0" cellpadding="0">
		<tr>
		  <td width="32%"><img src="pop/orpi.gif" width="193" height="56"></td>
		  <td width="68%">
			<table width="100%" border="0" cellspacing="0" cellpadding="0">
			  <tr>
				<td background="pop/arc.gif" width="307" height="56">&nbsp;</td>
			  </tr>
			  <tr>
				<td>&nbsp;</td>
			  </tr>
			</table>
		  </td>
		</tr>
	  </table>
	</td>
  </tr>
</table>
</body>
</html>
