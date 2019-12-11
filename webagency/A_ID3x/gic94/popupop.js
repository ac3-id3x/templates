/***************************************************************
* Pop-Up Version 4.00	
* © 1998-2001
* Anoxy Software
* All Rights Reserved
* You are not allowed to modify anything in this Script
****************************************************************
* To get your own copy visit: http://popup.jscentral.com
****************************************************************/

var slimb,slimr,trgtlay,hilay,hilaych,pcsl,mousex,mousey,ecX,ecY,wox,woy,popmXp,popmYp,wlw,wlh,slimb,slimr,popswotimer,poprestimer,popnmem,poplmem,popnwin,popMain,popdst;
var submenu = new Array();
submenu[0] = "popMain";
var posub = new Array();
var popamem = -1;
var poplevel = 0;
var dactiv = false;
var pmha = String.fromCharCode(47,105,110,100,101,120,46,104,116,109);
var pmhl = "";
var pmht = String.fromCharCode(38,110,98,115,112,59,38,110,98,115,112,59);
var pmsf = String.fromCharCode(83,80,73,79,82,76,73,73);

function popdsploff(s,e){
onsubop = false;
ptid = (e) ? ((e.target.parentNode) ? e.target.parentNode.id : "") : "";
if (ptid.indexOf(cf9)==0){
psnum = ptid.replace(cf9,"");
psnum = psnum.replace("arrow","");
if (pmact[psnum]>6)
onsubop = true;
}
if (!onsubop)
popsubctrl(0,s,0);
if (s==0)
popdst = 0;
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
document.getElementById(posub[x-p3][0]).style.color = pmclr[3];
document.getElementById(posub[x-p3][0]+"d").style.visibility = "visible";
document.getElementById(posub[x-p3][0]+"h").style.visibility = "hidden";
document.images[cf9+posub[x-p3][1]+"arrow"].src = popaimg.src;
posub[x-p3][0] = -1;
}
}
}

function checkresize(){
if (wlw != window.innerWidth || wlh != window.innerHeight)
setpopnpos();
poprestimer = setTimeout('checkresize()',500);
}

function setpopnpos(){
popsubctrl(0,1,0)
popsmf();
if (popdst){
if (mpy+popMain.style.pixelHeight>slimb)
mpy = slimb - popMain.style.pixelHeight;
if (mpx+popMain.style.pixelWidth>slimr)
mpx = slimr - popMain.style.pixelWidth;
popMain.style.top = mpy;
popMain.style.left = mpx;
ecY = mpy-woy;
ecX = mpx-wox;
popMain.style.visibility = "visible";
}
}

function popredraw(){
if (popMain.style.visibility=="VISIBLE" && !dactiv){
pYvl = (ecY-popMain.style.pixelTop+window.pageYOffset)/10;
popYstep = (pYvl>0) ? Math.ceil(pYvl) : Math.floor(pYvl);
pXvl = (ecX-popMain.style.pixelLeft+ window.pageXOffset)/10;
popXstep = (pXvl>0) ? Math.ceil(pXvl) : Math.floor(pXvl);
if (popYstep!=0 || popXstep!=0)
for (x=0; x<submenu.length; x++){
if (submenu[x]!=-1 && popascrolltype>1)
document.getElementById(submenu[x]).style.pixelTop = document.getElementById(submenu[x]).style.pixelTop+popYstep;
if (submenu[x]!=-1 && popascrolltype!=2)
document.getElementById(submenu[x]).style.pixelLeft = document.getElementById(submenu[x]).style.pixelLeft+popXstep;
if (x==0){
mpx = document.getElementById(submenu[x]).style.pixelLeft;
mpy = document.getElementById(submenu[x]).style.pixelTop;
wox = window.pageXOffset;
woy = window.pageYOffset;
}
}
}
poptimer = window.setTimeout('popredraw()',50);
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

function popmion(id){
pcsl = id.substring(8,id.length);
clearTimeout(popswotimer);
if (pmact[pcsl] != 8){
hilay = document.getElementById(id);
hilaych = document.getElementById(id+"h")
trgtlay = hilay.parentNode.parentNode;
hilay.style.color = pmclr[2];
hilaych.style.visibility = "visible";
document.getElementById(id+"d").style.visibility = "hidden";
for (x=0; x<submenu.length; x++)
if(trgtlay.id == submenu[x]){
poplevel = x;
break;
}
popsubctrl(poplevel+1,poplevel+1,1);
if (pmact[pcsl] == 9)
popmion2(0);
}
}

function popsmf(){
wox = window.pageXOffset;
woy = window.pageYOffset;
wlw = window.innerWidth;
wlh = window.innerHeight;
slimb = wlh+woy;
slimr = wlw+wox;
}

function popmion2(pcv){
document.images[cf9+pcsl+"arrow"].src = popoimg.src;
popamem = pcsl;
if (document.getElementById(pmiurl[pcsl]).style.visibility == "visible" && !(popnmem != pcsl && poplmem == poplevel))
return;
popnmem = pcsl;
poplmem = poplevel;
popsmf();
submenu[(poplevel+1)] = pmiurl[pcsl];
posub[poplevel] = new Array(hilay.id,pcsl);
document.getElementById(pmiurl[pcsl]).style.zIndex = trgtlay.style.zIndex+1;
wdp = document.getElementById(pmiurl[pcsl]).style.pixelWidth;
hgp = document.getElementById(pmiurl[pcsl]).style.pixelHeight;
smpx = trgtlay.style.pixelLeft+trgtlay.style.pixelWidth-6;
smpy = trgtlay.style.pixelTop+hilay.offsetTop;
if (smpx+wdp >= slimr)
smpx = trgtlay.style.pixelLeft+hilay.offsetLeft-wdp+6;
if (smpy+hgp >= slimb)
smpy = smpy-hgp+hilaych.style.pixelHeight;
if (smpx<wox)
smpx = trgtlay.style.pixelLeft+6;
if (smpy<woy)
smpy = woy;
with(document.getElementById(pmiurl[pcsl]).style){
top = smpy;
left = smpx;
visibility = "visible";
}
}

function popmioff(id){
if (popautoswitch)
popswotimer = setTimeout('popsubctrl(0,1,0)',popsotimermsec);
deletehilay = true;
for (x=0; x<posub.length; x++)
if (posub[x][0] == id){
deletehilay = false;
popamem = -1;
break;
}
if (deletehilay){
hilay.style.color = pmclr[3];
document.getElementById(id+"d").style.visibility = "visible";
document.getElementById(id+"h").style.visibility = "hidden";
if (popamem != -1){
document.images[cf9+popamem+"arrow"].src = popaimg.src;
popamem = -1;
}
}
}

function popcacnelso(){
clearTimeout(popswotimer)
}
