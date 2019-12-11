// Pop-Up 4.0 Menu file (NN 4.x)

var poptimer;
var popautoswitch = false;
var popsnapenabled = true;
var popimgenabled = false;
var popascrolltype = 2;
var popanimenabled = true;
var popsndenabled = false;
var popfixedenabled = 1;
var poprclickenabled = false;
var popdsplhead = false;
var popdeltimermsec = 250;
var popsotimermsec = 800;
var popsnappx = 15;
var popwinprops = "toolbar=1,location=1,directories=1,status=1,menubar=1,scrollbars=1,resizable=1";
var pmclr = new Array(null,"#850119","#999999","#FFFFFF","#850119","#FFFFFF","#FFFFFF","#7F7F7F","#C6C3C6","#000000","#7F7F7F","#FFFFFF");
var pmiurl = new Array('/accueil.htm','/actu.htm','/nosengagements.htm','http://www.panoranet.com/indexb.php?code=S3LXZM','pop1submain','/agencesreunies.htm','/recrut.htm','/rejoindre.htm','/notaire.htm','/calculette.htm','window.open(\'http://www.seloger.com/ext,agences,index.htm?cnt=206018\',\'ledemenageur\',\'width=780,height=600\')"');
var pmact = new Array('1','1','1','1','9','1','1','1','1','1','1');
var pmitfm = new Array('','','','','','','','','','','');
var pmmwds = new Array('116','163');
var pmcfnt = ";font-family:Arial,Times Roman,Helvetica,Sans Serif,MS Sans Serif,Verdana;font-size:12px;font-weight:bold;font-style:normal";
popaimg = new Image();
popoimg = new Image();
popaimg.src = popbasedir+"pop_arw.gif";
popoimg.src = popbasedir+"popo_arw.gif";

cf0 = '<Div Id="';
cf1 = '</Div>';
cf2 = '" style="position:absolute';
cf3 = pmcfnt;
cf4 = ' SRC="'+popaimg.src+'" WIDTH="4" HEIGHT="7" BORDER="0">';
cf5a = ";left:15;color:"+pmclr[3];
cf6a = ";left:15;visibility:hide;color:"+pmclr[2];
cf5b = ";left:3;color:"+pmclr[3];
cf6b = ";left:3;visibility:hide;color:"+pmclr[2]
cf7 = "menuItem";
cf8 = "popmenuarrow";
cf9 = "menuSeparator";
cfA = ";layer-background-image:url("+popbasedir+"fond_menu.gif)";
var pmimsa = new Array('popmain',';visibility:hide'+cfA,'','popmaini',';left:2;top:2','',cf7+'0',';left:0;top:0','Accueil',cf1,cf9+'0',';left:3;top:17','',cf7+'1',';left:0;top:21','Actualité',cf1,cf9+'1',';left:3;top:38','',cf7+'2',';left:0;top:42','Nos Engagements',cf1,cf9+'2',';left:3;top:59','',cf7+'3',';left:0;top:63','Financer',cf1,cf9+'3',';left:3;top:80','',cf7+'4',';left:0;top:84','Calculer',cf7+'4arrow',';left:106;top:4','<IMG Name="'+cf8+'4"'+cf4+cf1+cf1,cf9+'4',';left:3;top:101','',cf7+'5',';left:0;top:105','Agences Réunies',cf1,cf9+'5',';left:3;top:122','',cf7+'6',';left:0;top:126','Nous Recrutons',cf1,cf9+'6',';left:3;top:143','',cf7+'7',';left:0;top:147','Nous rejoindre',cf1+cf1,'nndummyItem',';left:0;top:0;visibility:hide','&nbsp;'+cf1+cf1,'pop1submain',';visibility:hide'+cfA,'','pop1submaini',';left:2;top:2','',cf7+'8',';left:0;top:0','Frais de Notaire',cf1,cf7+'9',';left:0;top:15','Calculette Financière',cf1,cf7+'10',';left:0;top:30','Calculette Déménagement',cf1+cf1+cf1);
var pmnnb = new Array('btopo','blefto','bbottomo','brighto','btopi','blefti','bbottomi','brighti');

function popmcreate(){
pmhcde = '';
for (x=0; x<pmimsa.length; x+=3){
if (pmimsa[x].indexOf(cf7) !=-1){
pmhcde += cf0+pmimsa[x]+cf2+pmimsa[(x+1)]+cf3+'">';
pmhcde += cf0+(pmimsa[x]+"d")+cf2+cf5b+'">'+pmimsa[(x+2)]+cf1;
pmhcde += cf0+(pmimsa[x]+"h")+cf2+cf6b+'">'+pmimsa[(x+2)]+cf1;
if (pmimsa[(x+3)].indexOf("arrow") !=-1){
pmhcde += cf0+pmimsa[(x+3)]+cf2+pmimsa[(x+4)]+'">'+pmimsa[(x+5)];
x+=3;
}
else{
pmhcde += pmimsa[(x+3)]
x++;
}
}
else{
if (pmimsa[x].indexOf(cf9) !=-1){
pmhcde += cf0+pmimsa[x]+cf2+pmimsa[(x+1)]+';height:4px">';
pmhcde += cf0+(pmimsa[x]+"Top")+cf2+'">'+cf1;
pmhcde += cf0+(pmimsa[x]+"Bottom")+cf2+';top:1">'+cf1+cf1;
pmhcde += pmimsa[(x+2)];
}
else
pmhcde += cf0+pmimsa[x]+cf2+pmimsa[(x+1)]+'">'+pmimsa[(x+2)];
}
if (pmimsa[x].indexOf("main") != -1 && pmimsa[x].indexOf("maini") == -1){
pat=/\D/g;
popmbnum = pmimsa[x].replace(pat,"");
if (popmbnum != '')
popmbnum = "s"+popmbnum;
for (k=0; k<pmnnb.length; k++)
pmhcde +=  cf0+'popm'+popmbnum+pmnnb[k]+cf2+'">'+cf1;
}
}

Popupml = new Layer(1000);
Popupml.document.open("text/html");
Popupml.document.writeln(pmhcde);
Popupml.document.close();
wlw = window.innerWidth;
wlh = window.innerHeight;
window.scrollBy(1,1);
popminit();
document.onmousedown = setpopdsploff;
with(pbsl[0]){
top = mpy;
left = mpx;
visibility = "show"
}ecX = ecY = 0;
popvbar = (window.pageYOffset>0) ? 1:0;
pophbar = (window.pageXOffset>0) ? 1:0;
window.scrollBy(-1,-1);
popsmf();
wdp = pbsl[0].clip.width;
hgp = pbsl[0].clip.height;
window.onresize = resz;
poptimer = setInterval('popredraw()',50);
}

function setpopdsploff(e){
if (e.which==1)
popdsploff(popfixedenabled);
}
