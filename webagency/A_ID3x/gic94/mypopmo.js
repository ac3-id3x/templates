//Pop-Up 4.0 Menu file (Mozilla)

var poptimer;
var popautoswitch = false;
var popsnapenabled = true;
var popimgenabled = false;
var popascrolltype = 2;
var popanimenabled = true;
var popdeltimermsec = 250;
var popsotimermsec = 800;
var popsnappx = 15;
var popwinprops = "toolbar=1,location=1,directories=1,status=1,menubar=1,scrollbars=1,resizable=1";
var pmclr = new Array("transparent","transparent","transparent","#000000","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#FF0000","#FFCC33");
var pmiurl = new Array('/home.htm','/locations.htm','/ventes.htm','/gestion.htm','pop1submain','/estimation.htm','/contact.htm','/137329/guide_.htm','/notaire.htm','/calculette.htm','/sl_demenagement/guide.htm','window.open(\'http://www.seloger.com/ext,agences,index.htm?cnt=206018\',\'ledemenageur\',\'width=780,height=600\')');
var pmact = new Array('1','1','1','1','9','1','1','1','1','1','1','1');
var pmitfm = new Array('','','','','','','','','','','','');
var pmcfnt = ";font-family:Arial,Times Roman,Helvetica,Sans Serif,MS Sans Serif,Verdana;font-size:12px;font-weight:bold;font-style:normal;padding-left:3px";
popaimg = new Image();
popoimg = new Image();
popaimg.src = popbasedir+"pop_arw.gif";
popoimg.src = popbasedir+"popo_arw.gif";

cf0 = '<Div align=center Id="';
cf1 = '</Div>';
cf2 = '" style="position: absolute;visibility: hidden;border: solid 1px;border-left-color:'+pmclr[8]+';border-top-color:'+pmclr[8]+';border-bottom-color:'+pmclr[9]+';border-right-color:'+pmclr[9]+';overflow:hidden;background-color:'+pmclr[0];
cf3 = '" style="position: relative;visibility: inherit;cursor: pointer; left:0;top:0;cursor: default;color:'+pmclr[3];
cf4 = ';background-image:url('+popbasedir+'/images/fond_menu4.gif);background-color:'+pmclr[0]+';border: solid 1px;border-left-color:'+pmclr[6]+';border-top-color:'+pmclr[6]+';border-bottom-color:'+pmclr[7]+';border-right-color:'+pmclr[7];
cf41 = ';background-color:'+pmclr[0]+';border: solid 1px;border-left-color:'+pmclr[6]+';border-top-color:'+pmclr[6]+';border-bottom-color:'+pmclr[7]+';border-right-color:'+pmclr[7];
cf5 = pmcfnt+'" onmouseover="popmion(this.id,event)" onmouseout="popmioff(this.id,event)" onmousedown="popmidown()"';
cf51 = pmcfnt+'" onmouseover="popmion(this.id,event)" onmouseout="popmioff(this.id,event)" onmousedown="popmidown()"';
cf6 = 'SRC="'+popaimg.src+'" WIDTH="4" HEIGHT="7" BORDER="0">';
cf7 = '" onmouseover="popcacnelso()" style="position: relative;left:3px;top:0px;width:99%;padding:2px 5px 4px 0px;visibility: inherit;cursor: default"';
cf8 = '<Span style="border-top: 1px solid'+pmclr[10]+';border-bottom: 1px solid '+pmclr[11]+';position:absolute;height:0px;width:';
cf8b = '"></Span>';
cf9 = 'menuItem';
cfA = 'menuSeparator';
var pmimsa = new Array('popMain',cf2+';width:120"','','popMaini',cf3+cf4+';width:118"','',
cf9+'0',cf3+cf5,'Accueil'+cf1,cfA+'0',cf7,cf8+'112'+cf8b+cf1,
cf9+'1',cf3+cf5,'Locations'+cf1,cfA+'1',cf7,cf8+'112'+cf8b+cf1,
cf9+'2',cf3+cf5,'Ventes'+cf1,cfA+'2',cf7,cf8+'112'+cf8b+cf1,
cf9+'3',cf3+cf5,'Gestion'+cf1,cfA+'3',cf7,cf8+'112'+cf8b+cf1,
cf9+'4',cf3+cf5,'Outils<IMG Id="'+
cf9+'4arrow" style="position:absolute;left:109px;top:4px" '+cf6+cf1,cfA+'4',cf7,cf8+'112'+cf8b+cf1,
cf9+'5',cf3+cf5,'Estimation'+cf1,cfA+'5',cf7,cf8+'112'+cf8b+cf1,
cf9+'6',cf3+cf5,'Contact'+cf1,cfA+'6',cf7,cf8+'112'+cf8b+cf1+cf1+cf1,
'pop1submain',cf2+';width:167"','','pop1submaini',cf3+cf41+';width:165"','',
cf9+'7',cf3+cf51,'Frais de Notaire'+cf1,
cf9+'8',cf3+cf51,'Calculette Financière'+cf1, 
cf9+'9',cf3+cf51,'Calculette Déménagement'+cf1,
cf9+'10',cf3+cf51,'Déménager'+cf1,
cf9+'11',cf3+cf51,'Cal. Déménagemen'+cf1+cf1+cf1); 


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
