<html>

<head>

<style>
<!--
h1 { font-family:Arial; font-size:14pt; color:rgb(0,0,128); }
h2 { font-family:Arial; font-size:12pt; color:rgb(0,128,255); }
p { font-family:Arial; color:rgb(0,0,0); }
p.namo-list { font-family:Arial; font-size:12pt; color:rgb(0,128,255); }
p.namo-sublist { font-family:Arial; font-size:10pt; color:rgb(0,0,255); }


BODY, TD{font-size: 12px; color: #000000; font-family: Verdana, Arial, Helvetica, sans-serif;}

/*MISE EN VALEUR DE TEXTE*/
.txtCouleur1{font-size: 12px; font-weight: bold; color: #f6c717;}
.txtCouleur2{font-size: 12px; font-weight: bold; color: #d41f89;}
.txtTitre1{font-size: 16px; font-weight: bold; color: #3E6A84;}
.txtTitre2{font-size: 14px; font-weight: bold; color: #ffffff; font-style:normal;}

/*LIENS*/
A {font-size: 12px; font-weight: bold; color: #000000;}
A:hover {font-size: 12px; font-weight: bold; color: #70B4F2;}
A.lien {font-size: 12px; font-weight: bold; color: #ffffff;}
A.lien:hover {font-size: 12px; font-weight: bold; color: #000000;}

/*TABLEAUX*/
.tabFond1{background-color: #fffae8; border-color: #f6c717; border-width:1; border-style:solid; padding:2;}
.tabFond2{background-color: #fff6d3; border-color: #f6c717; border-width:1; border-style:solid; padding:2;}
.tabTitre{background-color: #FFFFFF; color: #000000; font-size: 14px; font-weight: bold;}
.tabCouleur{background-color: #d41f89; border-color: #000000; border-width:1; border-style:solid; padding:2; color="#ffffff"}



-->
</style>
<meta name="namo-theme" content="Shades of Blue">
<meta name="generator" content="Namo WebEditor v4.0">
<link rel="stylesheet" href="/z/sla/slagence_YGimmobilier/css/default.css">
<script language="JavaScript">



<!--
<!--script JL-->
function init(){
file://R�initialise le choix pr�liste lorsqu'on utilise la touche back depuis la page recherche ou pr�liste
  tags = document.forms['annonces'].tags('input');
  nb = tags.length;
  for (i=0; i<nb; i++)
   if (tags[i].type == 'radio')
 {
 if (tags[i].value == '/recherche.htm')
 tags[i].click();
 }
}
<!--script JL-->

function na_change_img_src(name, nsdoc, rpath, preload)
{ 
  var img = eval((navigator.appName == 'Netscape') ? nsdoc+'.'+name : 'document.all.'+name);
  if (name == '')
    return;
  if (img) {
    img.altsrc = img.src;
    img.src    = rpath;
  } 
}

function na_restore_img_src(name, nsdoc)
{
  var img = eval((navigator.appName == 'Netscape') ? nsdoc+'.'+name : 'document.all.'+name);
  if (name == '')
    return;
  if (img && img.altsrc) {
    img.src    = img.altsrc;
    img.altsrc = null;
  } 
}

// -->
</script>
</head>

<body background="lesvillasfon.GIF" bgcolor="white" text="#000000" link="#FF0080" vlink="gray" alink="#FE8B5A" leftmargin="0" marginwidth="0" onLoad="javascript:$$PAGE:INIT$$"
 >
$$INCL:TITRE.HTM$$
<div align="left">
  <table border="0" width="812" cellpadding="0" align="center" cellspacing="0">
    <tr>
        <td width="703">
                <!--NAMO_NAVBAR_START B H C  -->
        
        <div align="center"><!--$$FORM:IDTYPEBIEN$$  --> $$IF=:2:FORM:IDTYPEBIEN$$ <img src="/z/sla/slagence_ygimmobilier/nav/nav_shades_of_blue_lesvilla_bhb.gif" name="nav_lesvilla_BH0" border="0" class="namo-banner" alt="Les Villas"> 
          $$END$$<br>
        </div>
                
        <!--NAMO_NAVBAR_END-->
        
        <div align="center">$$IF=:1:FORM:IDTYPEBIEN$$ <img src="/z/sla/slagence_ygimmobilier/nav/nav_shades_of_blue_appartem_bhb.gif" name="nav_appartem_BH0" border="0" class="namo-banner" alt="Appartements">$$END$$</div>
      <BR></td>
        <td width="103">
            
</td>
    </tr>
    <tr>
        
      <td width="703" valign="top" align="left">
 <!--debut texte--> 
       

                
