<HTML>
<HEAD>
<title>Agence immobilière COTRIMO GESTION</title>

<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=iso-8859-1">
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
background-color:#18A65A;
font-family: Verdana, Arial, Helvetica, sans-serif;
text-decoration: none;
font-size: 11px;
color: #ffffff;
}


.tabMenuSelect {
background-color:#EFC742;
font-family: Verdana, Arial, Helvetica, sans-serif;
text-decoration: none;
font-size: 11px;
color: #ffffff;
}

-->
</STYLE>
</HEAD>

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


<BODY BGCOLOR="#FFFFFF"  onLoad="preloadImages('Images/Fleche.gif','Images/Vide.gif','images_accueil/banner_preview__right_on.gif','images_accueil/Depose.gif')">
<CENTER>
	$$E:IMMOBW:AGENCE:REP:1$$ $$E:IMMOBW:NBANN:REP:1$$
	<!-----------------------------------Haut--------------------------------------------------->
	<TABLE WIDTH="554" BORDER="0" CELLSPACING="0" CELLPADDING="0">
    <TR>
      		<TD WIDTH="182">
				<CENTER>
          <IMG SRC="IMG/logocarte.gif" BORDER="0" WIDTH="100" HEIGHT="78"> 
        </CENTER>
			</TD>
      <TD WIDTH="5"><IMG SRC="/z/sla/slagence_logidirect2/images/vide.gif" WIDTH="5" HEIGHT="5"></TD>
      		<TD CLASS="tabMenuSelect" ALIGN="center">
        <TABLE WIDTH="98%" BORDER="0" CELLSPACING="0" CELLPADDING="0">
          <TR> 
            <TD CLASS="tabMenuSelect"> <B> <FONT SIZE="3">$$IMMOBW:AGENCE:NOM$$<BR>
              </FONT>$$IMMOBW:AGENCE:ADRESSE crlf2br$$ <BR>
              T&eacute;l : &nbsp;$$IMMOBW:AGENCE:TEL formattel$$ $$IF:IMMOBW:AGENCE:TELVENTE$$(pour 
              les locations)<BR>
              T&eacute;l : &nbsp;$$IMMOBW:AGENCE:TELVENTE formattel$$(pour les 
              ventes)$$END:IMMOBW:AGENCE:TELVENTE$$<BR>
              Fax : $$IMMOBW:AGENCE:FAX formattel$$ </B> <B><BR>
              </B> </TD>
            <TD CLASS="tabMenuSelect">
              <div align="right"><b>Nom du responsable<br></b>$$IMMOBW:AGENCE:RESPAG$$</div>
            </TD>
          </TR>
        </TABLE>
			

	  </TD>
    </TR>
    <TR>
      <TD COLSPAN="3" HEIGHT="5"></TD>
    </TR>
  </TABLE>
  <!------------------------------fin  Haut---------------------------------------------------> 
  <!------------------------------centre------------------------------------------------------>
    <TABLE WIDTH="553" BORDER="0" CELLSPACING="0" CELLPADDING="0">
		<TR> 
			<TD ROWSPAN="8" VALIGN="TOP"> 
				<CENTER>
		</CENTER>
				<CENTER>
          <br>
		  <BR>
        </CENTER>
				
				
			</TD>
			<TD WIDTH="5" HEIGHT="26"><IMG SRC="/z/sla/slagence_logidirect2/images/vide.gif" WIDTH="5" HEIGHT="5"></TD>
			<TD ALIGN="center" CLASS="tabMenu" VALIGN="TOP" ROWSPAN="2" COLSPAN="2"> 
				<DIV ALIGN="LEFT"><BR>
					<TABLE WIDTH="290" BORDER="0" CELLSPACING="0" CELLPADDING="0" ALIGN="CENTER">
						<TR>
							<TD><B><FONT COLOR="#FFFFFF" SIZE="2">$$IMMOBW:AGENCE:TXT_PUBLIC crlf2br$$</FONT> 
								</B> </TD>
						</TR>
					</TABLE>
				</DIV>
				
				
			</TD>
		</TR>
		<TR> 
			<TD WIDTH="5">&nbsp;</TD>
		</TR>
		<TR> 
			<TD WIDTH="5">&nbsp;</TD>
			<TD ALIGN="center" CLASS="tabMenu" WIDTH="516" COLSPAN="2"><B><FONT SIZE="2">$$IMMOBW:NBANN:NBANN$$ 
				annonce$$IMMOBW:NBANN:NBANN pluriel$$ immobili&egrave;re$$IMMOBW:NBANN:NBANN 
				pluriel$$ &agrave; consulter</FONT></B></TD>
		</TR>
		<TR> 
			<TD WIDTH="5">&nbsp;</TD>
			<TD ALIGN="center" CLASS="tabMenu" ROWSPAN="2" COLSPAN="2"> 
				<CENTER>
					<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="0" ALIGN="CENTER">
						<TR> 
							<TD WIDTH="500"> $$B:IMMOBW:AGENCETRANSACTIONS:REP:1$$ 
								$$BIF:IMMOBW:AGENCETRANSACTIONS:REP$$ $$DO:0:99$$ 
								$$IF=:1:IMMOBW:AGENCETRANSACTIONS:REP:IDTYPETRANSACTION$$ 
								<A target="_blank" HREF="/$$REP:1$$/recherche.htm?idtt=1" CLASS="menu" onMouseOver="javascript:changeImages('fleche1','/z/sla/slagence_logidirect2/Images/fleche.gif');" onMouseOut="javascript:changeImages('fleche1','/z/sla/slagence_logidirect2/Images/Vide.gif');"><IMG SRC="images/Vide.gif" WIDTH="16" HEIGHT="10" NAME="fleche1" BORDER="0"><FONT SIZE="2"><B><U>Locations</U></B></FONT></A> 
								$$END$$ $$IF=:2:IMMOBW:AGENCETRANSACTIONS:REP:IDTYPETRANSACTION$$ 
								<A target="_blank" HREF="/$$REP:1$$/recherche.htm?idtt=2" CLASS="menu" onMouseOver="javascript:changeImages('fleche2','/z/sla/slagence_logidirect2/Images/fleche.gif');" onMouseOut="javascript:changeImages('fleche2','/z/sla/slagence_logidirect2/Images/Vide.gif');"><IMG SRC="images/Vide.gif" WIDTH="16" HEIGHT="10" NAME="fleche2" BORDER="0"><B><FONT SIZE="2"><U>Ventes</U></FONT></B></A> 
								$$END$$ $$IF=:3:IMMOBW:AGENCETRANSACTIONS:REP:IDTYPETRANSACTION$$ 
								<A target="_blank" HREF="/$$REP:1$$/recherche.htm?idtt=3" CLASS="menu" onMouseOver="javascript:changeImages('fleche3','/z/sla/slagence_logidirect2/Images/fleche.gif');" onMouseOut="javascript:changeImages('fleche3','/z/sla/slagence_logidirect2/Images/Vide.gif');"><IMG SRC="images/Vide.gif" WIDTH="16" HEIGHT="10" NAME="fleche3" BORDER="0"><B><FONT SIZE="2"><U>Locations 
								temporaires</U></FONT></B></A> $$END$$ $$IF=:4:IMMOBW:AGENCETRANSACTIONS:REP:IDTYPETRANSACTION$$ 
								<A target="_blank" HREF="/$$REP:1$$/recherche.htm?idtt=4" CLASS="menu" onMouseOver="javascript:changeImages('fleche4','/z/sla/slagence_logidirect2/Images/fleche.gif');" onMouseOut="javascript:changeImages('fleche4','/z/sla/slagence_logidirect2/Images/Vide.gif');"><IMG SRC="images/Vide.gif" WIDTH="16" HEIGHT="10" NAME="fleche4" BORDER="0"><B><FONT SIZE="2"><U>Locations 
								vacances</U></FONT></B></A> $$END$$ $$IF=:5:IMMOBW:AGENCETRANSACTIONS:REP:IDTYPETRANSACTION$$ 
								<A target="_blank"  HREF="/$$REP:1$$/recherche.htm?idtt=5" CLASS="menu" onMouseOver="javascript:changeImages('fleche5','/z/sla/slagence_logidirect2/Images/fleche.gif');" onMouseOut="javascript:changeImages('fleche5','/z/sla/slagence_logidirect2/Images/Vide.gif');"><IMG SRC="images/Vide.gif" WIDTH="16" HEIGHT="10" NAME="fleche5" BORDER="0"><B><FONT SIZE="2"><U>Viager</U></FONT></B></A> 
								$$END$$ $$IF=:6:IMMOBW:AGENCETRANSACTIONS:REP:IDTYPETRANSACTION$$ 
								<A target="_blank" HREF="/$$REP:1$$/recherche.htm?idtt=6" CLASS="menu" onMouseOver="javascript:changeImages('fleche6','/z/sla/slagence_logidirect2/Images/fleche.gif');" onMouseOut="javascript:changeImages('fleche6','/z/sla/slagence_logidirect2/Images/Vide.gif');"><IMG SRC="images/Vide.gif" WIDTH="16" HEIGHT="10" NAME="fleche6" BORDER="0"><B><FONT SIZE="2"><U>Produit 
								d'investissement</U></FONT></B></A> $$END$$ $$IF=:7:IMMOBW:AGENCETRANSACTIONS:REP:IDTYPETRANSACTION$$ 
								<A target="_blank" HREF="/$$REP:1$$/recherche.htm?idtt=7" CLASS="menu" onMouseOver="javascript:changeImages('fleche7','/z/sla/slagence_logidirect2/Images/fleche.gif');" onMouseOut="javascript:changeImages('fleche7','/z/sla/slagence_logidirect2/Images/Vide.gif');"><IMG SRC="images/Vide.gif" WIDTH="16" HEIGHT="10" NAME="fleche7" BORDER="0"><B><FONT SIZE="2"><U>Locations 
								prestige</U></FONT></B></A> $$END$$ $$IF=:8:IMMOBW:AGENCETRANSACTIONS:REP:IDTYPETRANSACTION$$ 
								<A target="_blank" HREF="/$$REP:1$$/recherche.htm?idtt=8" CLASS="menu" onMouseOver="javascript:changeImages('fleche8','/z/sla/slagence_logidirect2/Images/fleche.gif');" onMouseOut="javascript:changeImages('fleche8','/z/sla/slagence_logidirect2/Images/Vide.gif');"><IMG SRC="images/Vide.gif" WIDTH="16" HEIGHT="10" NAME="fleche8" BORDER="0"><B><FONT SIZE="2"><U>Ventes 
								prestige</U></FONT></B></A> $$END$$$$LOOP$$$$BFIN$$ 
							</TD>
						</TR>
					</TABLE>
				</CENTER>
			</TD>
		</TR>
		<TR> 
			
			<!-- <TD ALIGN="center" CLASS="tabMenu" WIDTH="516" COLSPAN="2"> -->
			$$B:IMMOBW:AGENCETRANSACTIONS:REP:1$$ $$BIF:IMMOBW:AGENCETRANSACTIONS:REP$$ 
			$$DO:1:9$$ $$IF:IMMOBW:AGENCETRANSACTIONS:REP:NBANN$$ $$END$$$$LOOP$$$$BFIN$$ 
		</TR>
		<TR> 
			<TD WIDTH="5" ROWSPAN="3">&nbsp;</TD>
			<TD ALIGN="center" CLASS="tabMenu" VALIGN="MIDDLE" COLSPAN="2">&nbsp;</TD>
		</TR>
		<TR> 
			<TD ALIGN="center" CLASS="tabMenu" VALIGN="MIDDLE"><A CLASS=menu HREF="/$$REP:1$$/contact.htm"><B>Nous 
				contacter</B></A></TD>
			<TD ALIGN="center" CLASS="tabMenu" VALIGN="MIDDLE"><A  CLASS=menu HREF="/$$REP:1$$/vendeur.htm"><B>Vendez 
				votre bien</B></A></TD>
		</TR>
		<TR> 
			
      <TD ALIGN="center" CLASS="tabMenu" VALIGN="TOP" COLSPAN="2"><A CLASS=menu HREF="mailto:$$IMMOBW:AGENCE:EMAIL$$"><B> 
        <br>
        <br>
        $$IMMOBW:AGENCE:EMAIL$$ </B></A> <br>
        <BR>
     
      </TD>
		</TR>

	</TABLE>
    <!-------------------------fin  centre------------------------------------------------------>
	<!----------------------------------------  menu ----------------------------------------------------------->
	<!---------------------------------------- fin menu ----------------------------------------------------------->
	<!---------------------------------------- bas ----------------------------------------------------------->
	<!---------------------------------------- fin menu ----------------------------------------------------------->
	<!---------------------------------------- bas ----------------------------------------------------------->
	<!------------------------------------fin  bas ----------------------------------------------------------->
</CENTER>
</BODY>
</HTML>
