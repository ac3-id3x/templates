//Pop-Up 4.0 Menu file (Opera)

var poptimer;
var popautoswitch = true;
var popsnapenabled = false;
var popimgenabled = false;
var popascrolltype = 2;
var popdeltimermsec = 250;
var popsotimermsec = 800;
var popsnappx = 15;
var popwinprops = "Width=780,Height=600,Top=0,Left=0,toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0";
var pmclr = new Array("#F8DE00","#000040","#FFFFFF","#000000","#000000","#F8DE00","#000000","#000000","#000000","#000000","#F8DE00","#F8DE00");
var pmiurl = new Array('index.htm','gestion.htm','pop1submain','137329/guide_.htm','sl_demenagement/guide.htm','calculette.htm','http://www.seloger.com/ext,agences,index.htm?cnt=206018','notaire.htm');
var pmact = new Array('1','1','9','1','1','1','2','1');
var pmitfm = new Array('','','','','','','','');
var pmcfnt = ";font-family:Arial,Times Roman,Helvetica,Sans Serif,MS Sans Serif,Verdana;font-size:12px;font-weight:bold;font-style:normal";
popaimg = new Image();
popoimg = new Image();
popaimg.src = popbasedir+"pop_arw.gif";
popoimg.src = popbasedir+"popo_arw.gif";

cf0 = '<Div Id="';
cf1 = '</Div>';
cf2 = '" style="position: absolute;visibility: hidden;border: solid 1px;border-left-color:'+pmclr[8]+';border-top-color:'+pmclr[8]+';border-bottom-color:'+pmclr[9]+';border-right-color:'+pmclr[9]+';background-color:'+pmclr[0];
cf3 = '" style="position: relative;left:0;color:'+pmclr[3];
cf4 = ';background-color:'+pmclr[0]+';border: solid 1px;border-left-color:'+pmclr[6]+';border-top-color:'+pmclr[6]+';border-bottom-color:'+pmclr[7]+';border-right-color:'+pmclr[7];
cf5 = pmcfnt+'" onmouseover="popmion(this.id)" onmouseout="popmioff(this.id)" onmousedown="popmidown()"';
cf6 = 'SRC="'+popaimg.src+'" WIDTH="4" HEIGHT="7" BORDER="0">';
cf7 = '" style="position:absolute;left:0px;top:0px;width:100%;padding-left:4px;padding-top:2px';
cf8 = '" onmouseover="popcacnelso()" style="position:absolute;left:3;border-top: 1px solid '+pmclr[10]+';border-bottom: 1px solid '+pmclr[11]+';height:0'
cf9 = 'menuItem';
cfA = 'menuSeparator';
var pmimsa = new Array('popMain',cf2+';width:98;height:48"','','','popMaini',cf3+cf4+';width:96;height:46"','','',cf9+'0',cf3+';top:0;width:92'+cf5,'Accueil',cf1,cf9+'1',cf3+';top:15;width:92'+cf5,'Gestion',cf1,cf9+'2',cf3+';top:30;width:92'+cf5,'Outils','<IMG Id="'+cf9+'2arrow" style="position:absolute;left:86px;top:4px" '+cf6+cf1+cf1+cf1,'pop1submain',cf2+';width:166;height:79"','','','pop1submaini',cf3+cf4+';width:164;height:77"','','',cf9+'3',cf3+';top:0;width:160'+cf5,'Financer',cf1,cf9+'4',cf3+';top:15;width:160'+cf5,'Demenager',cf1,cf9+'5',cf3+';top:30;width:160'+cf5,'Calculette Financiere',cf1,cf9+'6',cf3+';top:45;width:160'+cf5,'Calculette Demenagement',cf1,cf9+'7',cf3+';top:60;width:160'+cf5,'Frais de notaires',cf1+cf1+cf1);

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
