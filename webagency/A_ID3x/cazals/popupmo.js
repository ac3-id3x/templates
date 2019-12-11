/***************************************************************
* Pop-Up Version 4.00	
* © 1998-2001
* Anoxy Software
* All Rights Reserved
* You are not allowed to modify anything in this Script
****************************************************************
* To get your own copy visit: http://popup.jscentral.com
****************************************************************/

var slimb,slimr,pmw,pmh,trgtlay,hilay,pcsl,mousex,mousey,ecX,ecY,wox,woy,popmXp,popmYp,clobj,mdelaytimer,popanimtimer,popswitchtimer,popswotimer,popnpostimer,popnmem,popcmem,poplmem,popnwin,pophbar,popvbar,popMain;
var submenu = new Array();
submenu[0] = "popMain";
var posub = new Array();
var popamem = -1;
var poplevel = pdchk = 0;
var cc = scc = 4;
var dactiv = false;
var pmha = "";
var pmhl = "";
var pmht = String.fromCharCode(38,110,98,115,112,59,38,110,98,115,112,59);
var pmsf = String.fromCharCode(83,48,73,79,82,76,73,73);

function popsanim(lobj,cr,cw,lp){
popsmcX = Math.floor(document.getElementById(lobj).offsetWidth*(4-scc)/4);
popsmX = Math.floor(document.getElementById(lobj).offsetWidth*scc/4);
if (scc>=0){
scc--;
document.getElementById(lobj).style.clip = "rect(0 "+(Math.abs(cr-1)*popsmcX+cw)+" "+document.getElementById(lobj).offsetHeight+" "+(cr*popsmX)+")";
if (scc<3)
document.getElementById(lobj).style.left = (cr==1) ? (lp-popsmX) : (lp+popsmX);
popanimtimer = window.setTimeout('popsanim("'+lobj+'",'+cr+','+cw+','+lp+')',30);
}
else
scc = 4;
}

function popdsploff(s,e){
if (!dactiv){
if (e)
if (e.originalTarget == "[object XULElement]")
return;
onsubop = false;
ptid = (e) ? e.target.id || e.target.parentNode.id || "" : "";
if (ptid.indexOf("menuItem")==0){
psnum = ptid.replace("menuItem","");
psnum = psnum.replace("arrow","");
if (pmact[psnum]>6)
onsubop = true;
}
else
if (ptid=="menuHitem" && pmha=="")
return;
if (!onsubop)
popsubctrl(0,s,0);
else
if (popanimenabled && pmact[psnum] == 9){
if (mdelaytimer)
clearTimeout(mdelaytimer);
popmion2(1);
}
}
}

function popsubctrl(p1,p2,p3){
for (x=p1; x<submenu.length; x++){
if (x>=p2)
if (submenu[x] != -1){
if (pmact[pcsl] == 9 && pmiurl[pcsl] == submenu[x] && submenu[(x-1)] != -1 && p3==1)
break;
else{
document.getElementById(submenu[x]).style.visibility = "hidden";
if (x>0)
submenu[x] = -1;
}
}
if (x-p3<posub.length)
if (posub[x-p3][0] != -1){
with(document.getElementById(posub[x-p3][0])){
style.color = pmclr[3];
style.backgroundColor = pmclr[0];
}
document.images["menuItem"+posub[x-p3][1]+"arrow"].src = popaimg.src;
posub[x-p3][0] = -1;
}
}
}

function popredraw(){
if (popMain.style.visibility=="visible" && !dactiv){
pYvl = (ecY-popMain.offsetTop+window.pageYOffset)/10;
popYstep = (pYvl>0) ? Math.ceil(pYvl) : Math.floor(pYvl);
pXvl = (ecX-popMain.offsetLeft+ window.pageXOffset)/10;
popXstep = (pXvl>0) ? Math.ceil(pXvl) : Math.floor(pXvl);
if (popYstep!=0 || popXstep!=0)
for (x=0; x<submenu.length; x++){
if (submenu[x]!=-1 && popascrolltype>1)
document.getElementById(submenu[x]).style.top = parseInt(document.getElementById(submenu[x]).style.top)+popYstep;
if (submenu[x]!=-1 && popascrolltype!=2)
document.getElementById(submenu[x]).style.left = parseInt(document.getElementById(submenu[x]).style.left)+popXstep;
}
}
}

function setpopnpos(){
if (popnpostimer)
window.clearTimeout(popnpostimer)
popnpostimer = window.setTimeout('setpopnpos2()',200);
}

function setpopnpos2(){
setpopvars();
if (popMain.offsetTop+pmh>slimb || popMain.offsetLeft+pmw>slimr){
popsubctrl(0,1,0);
if (popMain.offsetTop+pmh>slimb)
popMain.style.top = (slimb-pmh>woy) ? slimb - pmh : woy;
ecY = popMain.offsetTop-woy;
if (popMain.offsetLeft+pmw>slimr)
popMain.style.left = (slimr-pmw>wox) ? slimr - pmw : wox;
ecX = popMain.offsetLeft-wox;
}
}

function setpopvars(w){
wlw = window.innerWidth;
wlh = window.innerHeight;
popvbar = (document.height+16>window.innerHeight) ? 1 :0;
pophbar = (document.width+16>window.innerWidth) ? 1 : 0;
pmw = popMain.offsetWidth;
pmh = popMain.offsetHeight;
popsmf();
}

function popmidown(e){
if (e != 0){
if (pmact[pcsl]<7)
setTimeout("popmidown2()",150);
}
else
if(pmha!=""){
if (pmha.indexOf("javascript:") == 0)
setTimeout("eval(pmha.susbtring(11,pmha.length))",150);
else
setTimeout("location.href=pmha",150);
}
}

function popmidown2(){
switch (eval(pmact[pcsl])){
case 1:
location.href = pmiurl[pcsl];
break;
case 2:
if (!popnwin || popnwin.closed)
popnwin = window.open(pmiurl[pcsl],null,popwinprops);
else
popnwin.location.href = pmiurl[pcsl];
break;
case 3:
tgfr = top.frames[pmitfm[pcsl]] || parent.frames[pmitfm[pcsl]] || document.frames[pmitfm[pcsl]] || "0";
if (tgfr!=0)
tgfr.location.href = pmiurl[pcsl];
break;
case 4:
location.hash = pmiurl[pcsl];
break;
case 5:
setTimeout('eval(pmiurl[pcsl])',100)
break;
case 6:
top.location.href = pmiurl[pcsl];
break;
}
}

function popsmf(){
wox = window.pageXOffset;
woy = window.pageYOffset;
slimb = wlh+woy-(17*pophbar);
slimr = wlw+wox-(17*popvbar);
}

function popmion(id,e){
if (cc==4){
pechk = popechk(e);
if (pechk==0 && pdchk==0){
if (popswotimer)
clearTimeout(popswotimer);
tpcsl = id.substring(8,id.length);
if (pmact[tpcsl] != 8){
if (popswitchtimer)
clearTimeout(popswitchtimer);
pcsl = id.substring(8,id.length);
hilay = document.getElementById(id);
trgtlay = hilay.parentNode.parentNode;
for (x=0; x<submenu.length; x++)
if(trgtlay.id == submenu[x]){
poplevel = x;
break;
}
popsubctrl(poplevel+1,poplevel+1,1);
hilay.style.color = pmclr[2];
hilay.style.backgroundColor = pmclr[1];
if (pmact[pcsl] == 9)
popmion2(0);
}
}
}
}

function popmion2(pcv){
document.images["menuItem"+pcsl+"arrow"].src = popoimg.src;
popamem = pcsl;
if (document.getElementById(pmiurl[pcsl]).style.visibility == "visible" && document.getElementById(pmiurl[pcsl]).style.clip != "rect(0pt 0pt 0pt 0pt)" && !(popnmem != pcsl && poplmem == poplevel))
return;
popnmem = pcsl;
poplmem = poplevel;
popcorX = false;
popsmf();
submenu[(poplevel+1)] = pmiurl[pcsl];
posub[poplevel] = new Array(hilay.id,pcsl);
document.getElementById(pmiurl[pcsl]).style.zIndex = trgtlay.style.zIndex+1;
wdp = document.getElementById(pmiurl[pcsl]).offsetWidth;
hgp = document.getElementById(pmiurl[pcsl]).offsetHeight;
smpx = trgtlay.offsetLeft+trgtlay.offsetWidth-6;
smpy = hilay.offsetTop;
if (smpx+wdp >= slimr){
smpx = trgtlay.offsetLeft+(trgtlay.offsetWidth - hilay.offsetWidth)-wdp+2;
popcorX = true;
}
if (smpy+hgp >= slimb)
smpy = smpy-hgp+hilay.offsetHeight;
if (smpx<wox)
smpx = trgtlay.offsetLeft+6;
if (smpy<woy)
smpy = woy;
with(document.getElementById(pmiurl[pcsl]).style){
top = smpy;
left = smpx;
if (popanimenabled)
clip = "rect(0pt 0pt 0pt 0pt)";
else
visibility = "visible";
}
cr = (popcorX) ? 0:1;
cw = (popcorX) ? 0:wdp;
if (popanimenabled){
if (popcmem == trgtlay.id && scc<4)
mdelaytimer = setTimeout('popmion2(0)',200);
else{
popcmem = pmiurl[pcsl];
scc = 4;
if (popanimtimer)
clearTimeout(popanimtimer);
if (pcv==0)
mdelaytimer = window.setTimeout('document.getElementById(pmiurl[pcsl]).style.visibility = "visible";popsanim(pmiurl[pcsl],cr,cw,smpx)',popdeltimermsec);
else{
document.getElementById(pmiurl[pcsl]).style.visibility = "visible";
popsanim(pmiurl[pcsl],cr,cw,smpx);
}
}
}
}

function popmioff(id,e){
pechk = popechk(e);
pnEl = (e.relatedTarget) ? ((e.relatedTarget.id == undefined) ? e.rangeParent.parentNode.id : e.relatedTarget.id) : "";
if(e.currentTarget.id == pnEl)
pdchk = 1;
else
pdchk = 0;
if (pechk==0 && pdchk==0){
if (popautoswitch)
popswotimer = setTimeout('popsubctrl(0,1,0)',popsotimermsec);
deletehilay = true;
for (x=0; x<posub.length; x++)
if (posub[x][0] == id){
deletehilay = false;
popamem = -1;
if (popanimenabled)
popswitchtimer = setTimeout('pophhlay()',50);
break;
}
if (deletehilay){
with (document.getElementById(id)){
style.color = pmclr[3];
style.backgroundColor = pmclr[0];
}
if (popamem != -1){
document.images["menuItem"+popamem+"arrow"].src = popaimg.src;
popamem = -1;
}
}
if (mdelaytimer)
clearTimeout(mdelaytimer);
}
}

function pophhlay(){
e = posub[poplevel][0];
if (e!=-1){
psnum = posub[poplevel][1];
if (document.getElementById(pmiurl[pcsl]))
if (document.getElementById(pmiurl[pcsl]).style.clip == "rect(0pt 0pt 0pt 0pt)"){
with (document.getElementById(e)){
style.color = pmclr[3];
style.backgroundColor = pmclr[0];
}
document.images["menuItem"+pcsl+"arrow"].src = popaimg.src
}
}
}

function popechk(e){
pfEl = (e.originalTarget) ? e.originalTarget.id : null;
ptEl = (e.relatedTarget) ? e.relatedTarget.id : null;
if((pfEl+"arrow" == ptEl) || (pfEl == ptEl+"arrow"))
return(1);
else
return(0);
}

function popcacnelso(){
if (popswotimer)
clearTimeout(popswotimer)
}
