// Pop-Up 4.0 Menu file (NN 4.x)

var poptimer;
var popautoswitch = true;
var popsnapenabled = false;
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
var popwinprops = "Width=780,Height=600,Top=0,Left=0,toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0";
var pmclr = new Array("#F8DE00","#000040","#FFFFFF","#000000","#000000","#F8DE00","#000000","#000000","#000000","#000000","#F8DE00","#F8DE00");
var pmiurl = new Array('index.htm','gestion.htm','pop1submain','137329/guide_.htm','sl_demenagement/guide.htm','calculette.htm','http://www.seloger.com/ext,agences,index.htm?cnt=206018','notaire.htm');
var pmact = new Array('1','1','9','1','1','1','2','1');
var pmitfm = new Array('','','','','','','','');
var pmmwds = new Array('96','164');
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
cf5b = ";left:4;color:"+pmclr[3];
cf6b = ";left:4;visibility:hide;color:"+pmclr[2]
cf7 = "menuItem";
cf8 = "popmenuarrow";
cf9 = "menuSeparator";
var pmimsa = new Array('popmain',';visibility:hide','','popmaini',';left:2;top:2','',cf7+'0',';left:0;top:0','Accueil',cf1,cf7+'1',';left:0;top:15','Gestion',cf1,cf7+'2',';left:0;top:30','Outils',cf7+'2arrow',';left:86;top:4','<IMG Name="'+cf8+'2"'+cf4+cf1+cf1+cf1,'nndummyItem',';left:0;top:0;visibility:hide','&nbsp;'+cf1+cf1,'pop1submain',';visibility:hide','','pop1submaini',';left:2;top:2','',cf7+'3',';left:0;top:0','Financer',cf1,cf7+'4',';left:0;top:15','Demenager',cf1,cf7+'5',';left:0;top:30','Calculette Financiere',cf1,cf7+'6',';left:0;top:45','Calculette Demenagement',cf1,cf7+'7',';left:0;top:60','Frais de notaires',cf1+cf1+cf1);
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
