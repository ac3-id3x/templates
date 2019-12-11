//Pop-Up 4.0 Menu file (Opera)

var poptimer;
var popautoswitch = false;
var popsnapenabled = true;
var popimgenabled = false;
var popascrolltype = 2;
var popdeltimermsec = 250;
var popsotimermsec = 800;
var popsnappx = 15;
var popwinprops = "toolbar=1,location=1,directories=1,status=1,menubar=1,scrollbars=1,resizable=1";
var pmclr = new Array("transparent","#850119","#999999","#FFFFFF","#850119","#FFFFFF","#FFFFFF","#7F7F7F","#C6C3C6","#000000","#7F7F7F","#FFFFFF");
var pmiurl = new Array('/accueil.htm','/actu.htm','/nosengagements.htm','http://www.panoranet.com/indexb.php?code=S3LXZM','pop1submain','/agencesreunies.htm','/recrut.htm','/rejoindre.htm','/notaire.htm','/calculette.htm','window.open(\'http://www.seloger.com/ext,agences,index.htm?cnt=206018\',\'ledemenageur\',\'width=780,height=600\')"');
var pmact = new Array('1','1','1','1','9','1','1','1','1','1','5');
var pmitfm = new Array('','','','','','','','','','','');
var pmcfnt = ";font-family:Arial,Times Roman,Helvetica,Sans Serif,MS Sans Serif,Verdana;font-size:12px;font-weight:bold;font-style:normal";
popaimg = new Image();
popoimg = new Image();
popaimg.src = popbasedir+"pop_arw.gif";
popoimg.src = popbasedir+"popo_arw.gif";

cf0 = '<Div Id="';
cf1 = '</Div>';
cf2 = '" style="position: absolute;visibility: hidden;border: solid 1px;border-left-color:'+pmclr[8]+';border-top-color:'+pmclr[8]+';border-bottom-color:'+pmclr[9]+';border-right-color:'+pmclr[9]+';background-color:'+pmclr[0];
cf3 = '" style="position: relative;left:0;color:'+pmclr[3];
cf4 = ';background-image:url('+popbasedir+'fond_menu.gif);background-color:'+pmclr[0]+';border: solid 1px;border-left-color:'+pmclr[6]+';border-top-color:'+pmclr[6]+';border-bottom-color:'+pmclr[7]+';border-right-color:'+pmclr[7];
cf5 = pmcfnt+'" onmouseover="popmion(this.id)" onmouseout="popmioff(this.id)" onmousedown="popmidown()"';
cf6 = 'SRC="'+popaimg.src+'" WIDTH="4" HEIGHT="7" BORDER="0">';
cf7 = '" style="position:absolute;left:0px;top:0px;width:100%;padding-left:3px;padding-top:2px';
cf8 = '" onmouseover="popcacnelso()" style="position:absolute;left:3;border-top: 1px solid '+pmclr[10]+';border-bottom: 1px solid '+pmclr[11]+';height:0'
cf9 = 'menuItem';
cfA = 'menuSeparator';
var pmimsa = new Array('popMain',cf2+';width:118;height:165"','','','popMaini',cf3+cf4+';width:116;height:163"','','',cf9+'0',cf3+';top:0;width:113'+cf5,'Accueil',cf1,cfA+'0',cf8+';top:18;width:112"','',cf1,cf9+'1',cf3+';top:21;width:113'+cf5,'Actualité',cf1,cfA+'1',cf8+';top:39;width:112"','',cf1,cf9+'2',cf3+';top:42;width:113'+cf5,'Nos Engagements',cf1,cfA+'2',cf8+';top:60;width:112"','',cf1,cf9+'3',cf3+';top:63;width:113'+cf5,'Financer',cf1,cfA+'3',cf8+';top:81;width:112"','',cf1,cf9+'4',cf3+';top:84;width:113'+cf5,'Calculer','<IMG Id="'+cf9+'4arrow" style="position:absolute;left:106px;top:4px" '+cf6+cf1,cfA+'4',cf8+';top:102;width:112"','',cf1,cf9+'5',cf3+';top:105;width:113'+cf5,'Agences Réunies',cf1,cfA+'5',cf8+';top:123;width:112"','',cf1,cf9+'6',cf3+';top:126;width:113'+cf5,'Nous Recrutons',cf1,cfA+'6',cf8+';top:144;width:112"','',cf1,cf9+'7',cf3+';top:147;width:113'+cf5,'Nous rejoindre',cf1+cf1+cf1,'pop1submain',cf2+';width:165;height:49"','','','pop1submaini',cf3+cf4+';width:163;height:47"','','',cf9+'8',cf3+';top:0;width:160'+cf5,'Frais de Notaire',cf1,cf9+'9',cf3+';top:15;width:160'+cf5,'Calculette Financière',cf1,cf9+'10',cf3+';top:30;width:160'+cf5,'Calculette Déménagement',cf1+cf1+cf1);

pmhcde='<Div Id="odummy" style="position:absolute;left:0;top:0;width:'+window.innerWidth+';height:'+window.innerHeight+'">&nbsp;</Div>';
for (x=0; x<pmimsa.length; x+=4){
if (pmimsa[x].match(cf9))
pmhcde+=cf0+pmimsa[x]+pmimsa[(x+1)]+'>'+cf0+pmimsa[x]+'d'+cf7+'">'+pmimsa[(x+2)]+cf1+cf0+pmimsa[x]+'h'+cf7+';visibility:hidden;background-color:'+pmclr[1]+'">'+pmimsa[(x+2)]+cf1+pmimsa[(x+3)];
else
pmhcde+=cf0+pmimsa[x]+pmimsa[(x+1)]+'>'+pmimsa[(x+3)];
}
document.write(pmhcde);
document.getElementById("odummy").style.visibility = "hidden";

function popmcreate(){
popMain = document.getElementById("popMain");
popMain.style.zIndex = 1000;
popsmf();
poprestimer = setTimeout('checkresize()',500);
document.onmousedown = setpopdsploff;
with(popMain.style){
top = mpy;
left = mpx;
visibility = "visible";
}
popdst = 1;
ecY = mpy;
ecX = mpx;
poptimer = setTimeout('popredraw()',50);
}

function setpopdsploff(e){
popdsploff(1,e);
}
