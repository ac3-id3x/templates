//Pop-Up 4.0 Menu file (IE)

var poptimer;
var popautoswitch = false;
var popsnapenabled = true;
var popimgenabled = false;
var popascrolltype = 2;
var popanimenabled = true;
var popsndenabled = false;
var popfixedenabled = 1;
var popfilterenabled = false;
var popdeltimermsec = 250;
var popsotimermsec = 800;
var popsnappx = 15;
var popwinprops = "toolbar=1,location=1,directories=1,status=1,menubar=1,scrollbars=1,resizable=1";
var pmclr = new Array("transparent","#850119","#999999","#FFFFFF","#850119","#FFFFFF","#FFFFFF","#7F7F7F","#C6C3C6","#000000","#7F7F7F","#FFFFFF");
var pmiurl = new Array('/accueil.htm','/actu.htm','/nosengagements.htm','http://www.panoranet.com/indexb.php?code=S3LXZM','pop1submain','/agencesreunies.htm','/recrut.htm','/rejoindre.htm','/notaire.htm','/calculette.htm','window.open(\'http://www.seloger.com/ext,agences,index.htm?cnt=206018\',\'ledemenageur\',\'width=780,height=600\')"');
var pmact = new Array('1','1','1','1','9','1','1','1','1','1','5');
var pmitfm = new Array('','','','','','','','','','','');
var pmcfnt = ";font-family:Arial,Times Roman,Helvetica,Sans Serif,MS Sans Serif,Verdana;font-size:12px;font-weight:bold;font-style:normal;padding-left:3px";
popaimg = new Image();
popoimg = new Image();
popaimg.src = popbasedir+"pop_arw.gif";
popoimg.src = popbasedir+"popo_arw.gif";

cf0 = '<Div Id="';
cf1 = '</Div>';
cf2 = '" style="position: absolute;visibility: hidden;border: solid 1px;border-left-color:'+pmclr[8]+';border-top-color:'+pmclr[8]+';border-bottom-color:'+pmclr[9]+';border-right-color:'+pmclr[9]+';overflow:hidden;background-color:'+pmclr[0];
cf3 = '" style="position: relative;visibility: inherit;left:0;top:0;cursor: default;color:'+pmclr[3];
cf4 = ';background-image:url('+popbasedir+'fond_menu.gif);background-color:'+pmclr[0]+';border: solid 1px;border-left-color:'+pmclr[6]+';border-top-color:'+pmclr[6]+';border-bottom-color:'+pmclr[7]+';border-right-color:'+pmclr[7];
cf5 = pmcfnt+';width:100%" onmouseover="popmion(this.id)" onmouseout="popmioff(this.id)" onmousedown="popmidown()"';
cf6 = 'SRC="" WIDTH="4" HEIGHT="7" BORDER="0">';
cf7 = '" onmouseover="popcacnelso()" style="position: relative;left:3px;top:0px;width:99%;padding:2px 5px 4px 0px;margin-bottom:2px;visibility: inherit;cursor: default"';
cf8 = '<Div style="border-top: 1px solid '+pmclr[10]+';background-color:'+pmclr[11]+';width:100%;position:absolute;clip:rect(0px 100% 2px 0px);height:2px;left:1px"></Div>';
cf9 = 'menuItem';
cfA = 'menuSeparator';
var pmimsa = new Array('popMain',cf2+';width:120"','','popMaini',cf3+cf4+';width:118"','',
cf9+'0',cf3+cf5,'Accueil'+cf1,cfA+'0',cf7,cf8+cf1,
cf9+'1',cf3+cf5,'Actualité'+cf1,cfA+'1',cf7,cf8+cf1,
cf9+'2',cf3+cf5,'Nos Engagements'+cf1,cfA+'2',cf7,cf8+cf1,
cf9+'3',cf3+cf5,'Financer'+cf1,cfA+'3',cf7,cf8+cf1,
cf9+'4',cf3+cf5,'Calculer<IMG Id="'+
cf9+'4arrow" style="position:absolute;left:106px;top:4px" '+cf6+cf1,cfA+'4',cf7,cf8+cf1,
cf9+'5',cf3+cf5,'Agences Réunies'+cf1,cfA+'5',cf7,cf8+cf1,
cf9+'6',cf3+cf5,'Nous Recrutons'+cf1,cfA+'6',cf7,cf8+cf1,
cf9+'7',cf3+cf5,'Nous rejoindre'+cf1+cf1+cf1,
'pop1submain',cf2+';width:167"','',
'pop1submaini',cf3+cf4+';width:165"','',
cf9+'8',cf3+cf5,'Frais de Notaire'+cf1,
cf9+'9',cf3+cf5,'Calculette Financière'+cf1,
cf9+'10',cf3+cf5,'Calculette Déménagement'+cf1+cf1+cf1);

function popmcreate(){
pdb = document.body;
pmhcde='';
for (x=0; x<pmimsa.length; x+=3)
pmhcde+=cf0+pmimsa[x]+pmimsa[(x+1)]+'>'+pmimsa[(x+2)];
document.body.insertAdjacentHTML('afterBegin',pmhcde);
for (x=0 ; x<pmact.length; x++)
if (pmact[x]=="9")
document.images[('menuItem'+x+'arrow')].src = popaimg.src;
if (navigator.platform!="Win32")
popfilterenabled = false;
popMain.style.zIndex = 1000;
document.onclick = setpopdsploff;
with(popMain.style){
top = mpy;
left = mpx;
visibility = "visible";
}
ecY = mpy;
ecX = mpx;
window.onresize = setpopnpos;
pwdp = popMain.offsetWidth;
phgp = popMain.offsetHeight;

poptimer = setInterval('popredraw()',50);
}

function setpopdsploff(){
if (!dactiv)
popdsploff(1);
else
dactiv = false;
}
