//Pop-Up 4.0 Menu file (Mozilla)

var poptimer;
var popautoswitch = true;
var popsnapenabled = false;
var popimgenabled = false;
var popascrolltype = 2;
var popanimenabled = true;
var popdeltimermsec = 250;
var popsotimermsec = 800;
var popsnappx = 15;
var popwinprops = "Width=780,Height=600,Top=0,Left=0,toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0";
var pmclr = new Array("#F8DE00","#000040","#FFFFFF","#000000","#000000","#F8DE00","#000000","#000000","#000000","#000000","#F8DE00","#F8DE00");
var pmiurl = new Array('index.htm','gestion.htm','pop1submain','137329/guide_.htm','sl_demenagement/guide.htm','calculette.htm','http://www.seloger.com/ext,agences,index.htm?cnt=206018','notaire.htm');
var pmact = new Array('1','1','9','1','1','1','2','1');
var pmitfm = new Array('','','','','','','','');
var pmcfnt = ";font-family:Arial,Times Roman,Helvetica,Sans Serif,MS Sans Serif,Verdana;font-size:12px;font-weight:bold;font-style:normal;padding-left:4px";
popaimg = new Image();
popoimg = new Image();
popaimg.src = popbasedir+"pop_arw.gif";
popoimg.src = popbasedir+"popo_arw.gif";

cf0 = '<Div Id="';
cf1 = '</Div>';
cf2 = '" style="position: absolute;visibility: hidden;border: solid 1px;border-left-color:'+pmclr[8]+';border-top-color:'+pmclr[8]+';border-bottom-color:'+pmclr[9]+';border-right-color:'+pmclr[9]+';overflow:hidden;background-color:'+pmclr[0];
cf3 = '" style="position: relative;visibility: inherit;left:0;top:0;cursor: default;color:'+pmclr[3];
cf4 = ';background-color:'+pmclr[0]+';border: solid 1px;border-left-color:'+pmclr[6]+';border-top-color:'+pmclr[6]+';border-bottom-color:'+pmclr[7]+';border-right-color:'+pmclr[7];
cf5 = pmcfnt+'" onmouseover="popmion(this.id,event)" onmouseout="popmioff(this.id,event)" onmousedown="popmidown()"';
cf6 = 'SRC="'+popaimg.src+'" WIDTH="4" HEIGHT="7" BORDER="0">';
cf7 = '" onmouseover="popcacnelso()" style="position: relative;left:3px;top:0px;width:99%;padding:2px 5px 4px 0px;visibility: inherit;cursor: default"';
cf8 = '<Span style="border-top: 1px solid'+pmclr[10]+';border-bottom: 1px solid '+pmclr[11]+';position:absolute;height:0px;width:';
cf8b = '"></Span>';
cf9 = 'menuItem';
cfA = 'menuSeparator';
var pmimsa = new Array('popMain',cf2+';width:100"','','popMaini',cf3+cf4+';width:98"','',cf9+'0',cf3+cf5,'Accueil'+cf1,cf9+'1',cf3+cf5,'Gestion'+cf1,cf9+'2',cf3+cf5,'Outils<IMG Id="'+cf9+'2arrow" style="position:absolute;left:89px;top:4px" '+cf6+cf1+cf1+cf1,'pop1submain',cf2+';width:168"','','pop1submaini',cf3+cf4+';width:166"','',cf9+'3',cf3+cf5,'Financer'+cf1,cf9+'4',cf3+cf5,'Demenager'+cf1,cf9+'5',cf3+cf5,'Calculette Financiere'+cf1,cf9+'6',cf3+cf5,'Calculette Demenagement'+cf1,cf9+'7',cf3+cf5,'Frais de notaires'+cf1+cf1+cf1);

function popmcreate(){
pmhcde='';
for (x=0; x<pmimsa.length; x+=3)
pmhcde+=cf0+pmimsa[x]+pmimsa[(x+1)]+'>'+pmimsa[(x+2)];
range = document.createRange();
range.setStartBefore(document.body.firstChild);
inscde = range.createContextualFragment(pmhcde);
document.body.appendChild(inscde)
popMain = document.getElementById("popMain");
popMain.style.zIndex = 1000;
window.onresize = setpopnpos;
setTimeout('setpopvars()',40);
document.onmousedown = setpopdsploff;
with(popMain.style){
top = mpy;
left = mpx;
visibility = "visible";
}
ecY = mpy;
ecX = mpx;
poptimer = setInterval('popredraw()',50);
}

function setpopdsploff(e){
popdsploff(1,e);
}
