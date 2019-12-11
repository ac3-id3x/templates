/***************************************************************
* Pop-Up Version 4.00	
* © 1998-2001
* Anoxy Software
* All Rights Reserved
* You are not allowed to modify anything in this Script
****************************************************************
* To get your own copy visit: http://popup.jscentral.com
****************************************************************/

var slimb,slimr,trgtlay,hilay,pcsl,mousex,mousey,wlw,wlh,wox,woy,ecX,ecY,pdb,popmXp,popmYp,pwdp,phgp,clobj,mdelaytimer,popanimtimer,popswitchtimer,popswotimer,popnpostimer,popmacrestimer,popnmem,popcmem,poplmem,popnwin;
var submenu = new Array();
submenu[0] = "popMain";
var posub = new Array();
var popamem = popmacrsz = -1;
var poplevel = 0;
var cc = scc = 4;
var dactiv = false;
var ismac = (navigator.appVersion.indexOf("Macintosh")==-1) ? false : true;
var pmaclm = (ismac) ? eval(document.body.leftMargin) : 0;
var pmactm = (ismac) ? eval(document.body.topMargin) : 0;
var pmha = String.fromCharCode(47,105,110,100,101,120,46,104,116,109);
var pmhl = "";
var pmht = String.fromCharCode(38,110,98,115,112,59,38,110,98,115,112,59);
var pmsf = String.fromCharCode(83,80,73,79,82,76,73,73);

function popsanim(lobj,cr,cw,lp){
clobj = lobj;
popsmcX = Math.floor(document.all[lobj].offsetWidth*(4-scc)/4);
popsmX = Math.floor(document.all[lobj].offsetWidth*scc/4);
if (scc>=0){
scc--;
document.all[lobj].style.clip = "rect(0 "+(Math.abs(cr-1)*popsmcX+cw)+" "+document.all[lobj].offsetHeight+" "+(cr*popsmX)+")";
if (scc<3)
document.all[lobj].style.left = (cr==1) ? (lp-popsmX) : (lp+popsmX);
popanimtimer = setTimeout('popsanim(this.clobj,'+cr+','+cw+','+lp+')',25);
}
else
scc = 4;
}

function popdsploff(s){
onsubop = false;
if (event)
if (event.srcElement)
if (event.srcElement.id.indexOf("menuItem")==0){
psnum = event.srcElement.id.replace("menuItem","");
psnum = psnum.replace("arrow","");
if (pmact[psnum]>6)
onsubop = true;
}
if (!onsubop){
if (hilay && popfilterenabled)
hilay.filters[0].Stop();
popsubctrl(0,s,0);
}
else
if (popanimenabled && pmact[psnum] == 9){
clearTimeout(mdelaytimer);
popmion2(1);
}
}

function popsubctrl(p1,p2,p3){
for (x=p1; x<submenu.length; x++){
if (x>=p2)
if (submenu[x] != -1){
if (pmact[pcsl] == 9 && pmiurl[pcsl] == submenu[x] && submenu[(x-1)] != -1 && p3==1)
break;
else{
document.all[submenu[x]].style.visibility = "hidden";
if (x>0)
submenu[x] = -1;
}
}
if (x-p3<posub.length)
if (posub[x-p3][0] != -1){
with(document.all[posub[x-p3][0]]){
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
pYvl = (ecY-popMain.style.pixelTop+pdb.scrollTop)/10;
popYstep = (pYvl>0) ? Math.ceil(pYvl) : Math.floor(pYvl);
pXvl = (ecX-popMain.style.pixelLeft+ pdb.scrollLeft)/10;
popXstep = (pXvl>0) ? Math.ceil(pXvl) : Math.floor(pXvl);
if (popYstep!=0 || popXstep!=0){
clearTimeout(popmacrestimer);
for (x=0; x<submenu.length; x++){
if (submenu[x]!=-1 && popascrolltype>1)
document.all[submenu[x]].style.pixelTop += popYstep;
if (submenu[x]!=-1 && popascrolltype!=2)
document.all[submenu[x]].style.pixelLeft += popXstep;
}
if (ismac)
popmacrestimer = setTimeout('window.resizeBy(0,popmacrsz);popmacrsz = -popmacrsz',800);
}
}
}

function setpopnpos(){
if (!ismac){
window.clearTimeout(popnpostimer)
popnpostimer = window.setTimeout('setpopnpos2()',200);
}
else
popsmf();
}

function setpopnpos2(){
popsmf();
if (popMain.offsetTop+phgp>slimb || popMain.offsetLeft+pwdp>slimr){
popdsploff(1);
if (popMain.offsetTop+phgp>slimb)
popMain.style.top = (slimb-phgp>woy) ? slimb - phgp : woy;
ecY = popMain.style.pixelTop-woy;
if (popMain.offsetLeft+pwdp>slimr)
popMain.style.left = (slimr-pwdp>wox) ? slimr - pwdp : wox;
ecX = popMain.style.pixelLeft-wox;
}
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

function popmion(e){
if (cc==4){
pcsl = e.substring(8,e.length);
pechk = popechk();
if (pechk==0){
clearTimeout(popswotimer);
if (pmact[pcsl] != 8){
clearTimeout(popswitchtimer);
if (popsndenabled)
if (popsnd.readyState == 4){
popsnd.stop();
popsnd.play();
}
trgtlay = document.all[e].parentElement.parentElement;
if (hilay && popfilterenabled)
hilay.filters[0].Stop();
hilay = document.all[e];
if (popfilterenabled)
hilay.filters[0].Apply();
hilay.style.color = pmclr[2];
if (popfilterenabled)
hilay.filters[0].Play(0.4);
hilay.style.backgroundColor = pmclr[1];
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
}
}

function popsmf(){
wox = pdb.scrollLeft;
woy = pdb.scrollTop;
wlw = pdb.clientWidth;
wlh = pdb.clientHeight;
slimb = wlh+woy;
slimr = wlw+wox;
}

function popmion2(pcv){
document.images["menuItem"+pcsl+"arrow"].src = popoimg.src;
popamem = pcsl;
if (document.all[pmiurl[pcsl]].style.visibility == "visible" && document.all[pmiurl[pcsl]].style.clip != "rect(0px 0px 0px 0px)" && !(popnmem != pcsl && poplmem == poplevel))
return;
popnmem = pcsl;
poplmem = poplevel;
popcorX = false;
popsmf();
submenu[(poplevel+1)] = pmiurl[pcsl];
posub[poplevel] = new Array(hilay.id,pcsl);
document.all[pmiurl[pcsl]].style.zIndex = trgtlay.style.zIndex+1;
wdp = document.all[pmiurl[pcsl]].offsetWidth;
hgp = document.all[pmiurl[pcsl]].offsetHeight;
smpx = trgtlay.offsetLeft+trgtlay.offsetWidth-6+pmaclm;
smpy = trgtlay.offsetTop+hilay.offsetTop+pmactm;
if (smpx+wdp >= slimr){
smpx = trgtlay.offsetLeft+(trgtlay.offsetWidth - hilay.offsetWidth)-wdp+2+pmaclm;
popcorX = true;
}
if (smpy+hgp >= slimb)
smpy = smpy-hgp+hilay.offsetHeight;
if (smpx<wox)
smpx = trgtlay.offsetLeft+6+pmaclm;
if (smpy<woy)
smpy = woy;
with(document.all[pmiurl[pcsl]].style){
top = smpy;
left = smpx;
if (popanimenabled)
clip = "rect(0 0 0 0)";
visibility = "visible";
}
cr = (popcorX) ? 0:1;
cw = (popcorX) ? 0:document.all[pmiurl[pcsl]].offsetWidth;
if (popanimenabled){
if (popcmem == trgtlay.id && scc<4)
mdelaytimer = setTimeout('popmion2(0)',200);
else{
popcmem = pmiurl[pcsl];
scc = 4;
clearTimeout(popanimtimer);
if (pcv==0)
mdelaytimer = setTimeout('popsanim(pmiurl[pcsl],cr,cw,smpx)',popdeltimermsec);
else
popsanim(pmiurl[pcsl],cr,cw,smpx);
}
}
if (ismac)
setTimeout('window.resizeBy(0,popmacrsz);popmacrsz = -popmacrsz',500);
}

function popmioff(e){
pechk = popechk();
if (pechk==0){
deletehilay = true;
if (popautoswitch)
popswotimer = setTimeout('popdsploff(1)',popsotimermsec);
for (x=0; x<posub.length; x++)
if (posub[x][0] == e){
deletehilay = false;
popamem = -1;
if (popanimenabled)
popswitchtimer = setTimeout('pophhlay()',50);
break;
}
if (deletehilay){
with (document.all[e]){
style.color = pmclr[3];
style.backgroundColor = pmclr[0];
}
if (popamem != -1){
document.images["menuItem"+popamem+"arrow"].src = popaimg.src;
popamem = -1;
}
}
clearTimeout(mdelaytimer);
}
}

function pophhlay(){
e = posub[poplevel][0];
if (e!=-1){
psnum = posub[poplevel][1];
if (document.all[pmiurl[psnum]].style.clip == "rect(0px 0px 0px 0px)"){
with (document.all[e]){
style.color = pmclr[3];
style.backgroundColor = pmclr[0];
}
document.images["menuItem"+psnum+"arrow"].src = popaimg.src
}
}
}

function popechk(){
pfEl = event.fromElement;
ptEl = event.toElement;
if (pfEl != null && ptEl != null)
if((pfEl.id+"arrow" == ptEl.id) || (pfEl.id == ptEl.id+"arrow"))
return(1);
else
return(0);
}

function popcacnelso(){
clearTimeout(popswotimer)
}
