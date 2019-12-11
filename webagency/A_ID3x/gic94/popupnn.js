/***************************************************************
* Pop-Up Version 4.00	
* © 1998-2001
* Anoxy Software
* All Rights Reserved
* You are not allowed to modify anything in this Script
****************************************************************
* To get your own copy visit: http://popup.jscentral.com
****************************************************************/

var slimb,slimr,trgtlay,tplay,csilay,pcsl,mousex,mousey,ecX,ecY,wox,woy,popmXp,popmYp,wdp,hgp,wlw,wlh,clobj,mdelaytimer,popanimtimer,popswitchtimer,popswotimer,popnmem,poplmem,popcmem,popnwin,pbfl,pbhl,pophbar,popvbar;
var pbsl = new Array();
var pbdl = new Array(); 
var submenu = new Array();
submenu[0] = "popmain";
var opensubm = new Array();
var layerchange = dactiv = false;
var popamem = -1;
var layernum = poplevel =  pmscwd = 0;
var cc = scc = 4;
var pmha = String.fromCharCode(47,105,110,100,101,120,46,104,116,109);
var pmhl = "";
var pmh1 = String.fromCharCode(65,76,84,61,34);
var pmht = String.fromCharCode(38,110,98,115,112,59,38,110,98,115,112,59);
var pmsf = String.fromCharCode(83,80,73,79,82,76,73,73);

function resz(){
if (wlw != window.innerWidth || wlh != window.innerHeight)
location.reload();
}

function popminit(){
with (Popupml.clip){
width = wlw;
height = wlh;
}
for (j=0 ; j<Popupml.layers.length; j++){
pbsl[j] = Popupml.layers[j];
pbdl[j] = pbsl[j].layers[8];
pbsl[j].bgColor = pmclr[0];
pbdl[j].clip.width = pmmwds[j];
pbsl[j].clip.width = pbdl[j].clip.width+4;
pbsl[j].clip.height = pbdl[j].clip.height+4;
if (popautoswitch)
pbsl[j].onmouseout = popsomenu;
if (j == 0){
pbfl = pbsl[j].layers["nndummyItem"];
pbfl.captureEvents(Event.MOUSEDOWN);
pbfl.onmousedown = popmidown;
pbfl.onmouseout = popmioff;
pbfl.visibility = "inherit"
}
brdrsettings = new Array(pbdl[j].clip.width+1,1,pmclr[8],pbdl[j].left-1,pbdl[j].top-2,1,pbdl[j].clip.height+4,pmclr[8],pbdl[j].left-2,pbdl[j].top-2,pbdl[j].clip.width+1,1,pmclr[9],pbdl[j].left-1,pbdl[j].top+pbdl[j].clip.height+1,1,pbdl[j].clip.height+4,pmclr[9],pbdl[j].left+pbdl[j].clip.width+1,pbdl[j].top-2,pbdl[j].clip.width,1,pmclr[6],pbdl[j].left,pbdl[j].top-1,1,pbdl[j].clip.height+2,pmclr[6],pbdl[j].left-1,pbdl[j].top-1,pbdl[j].clip.width,1,pmclr[7],pbdl[j].left,pbdl[j].top+pbdl[j].clip.height,1,pbdl[j].clip.height+2,pmclr[7],pbdl[j].left+pbdl[j].clip.width,pbdl[j].top-1);
for (z=0; z<8; z++){
with(pbsl[j].layers[z]){
clip.width = brdrsettings[(z*5)];
clip.height = brdrsettings[(z*5+1)];
bgColor = brdrsettings[(z*5+2)];
left = brdrsettings[(z*5+3)];
top = brdrsettings[(z*5+4)];
}
}
for (x=0; x<pbdl[j].document.layers.length; x++){
if (pbdl[j].layers[x].name.indexOf(cf9) != -1){
with(pbdl[j].layers[x]){
clip.height = 2;
clip.width = pbdl[j].clip.width-4-left;
with (document.layers[0]){
clip.height = 1;
clip.width = pbdl[j].clip.width-4-left;
bgColor = pmclr[10];
}
with(document.layers[1]){
clip.height = 1;
clip.width = pbdl[j].clip.width-4-left;
bgColor = pmclr[11];
}
}
}
if (pbdl[j].layers[x].name.indexOf(cf7) != -1){
l = pbdl[j].layers[x];
l.clip.width = pbdl[j].clip.width-l.left;
l.onmouseover = popmion;
pbdl[j].onmouseout = popmioff;
pbdl[j].onmouseover = popmclay;
}
}
}
for (x=0; x<pbsl.length; x++)
pbsl[x].moveAbove(Popupml);
}

function popsanim(lobj,cr,cw,lp){
clobj = lobj;
popsmcX = pmscwd*(4-scc)/4;
popsmX = pmscwd*scc/4;
if (scc>=0){
scc--;
with (Popupml.layers[lobj].clip){
right = Math.abs(cr-1)*popsmcX+cw;
left = cr*popsmX;
}
Popupml.layers[lobj].left = (cr==1) ? (lp-popsmX) : (lp+popsmX);
popanimtimer = window.setTimeout('popsanim(this.clobj,'+cr+','+cw+','+lp+')',25);
}
else
scc = 4;
}

function popdsploff(s){
popsubctrl(0,s,0,0)
if (popanimenabled){
window.clearTimeout(popanimtimer);
window.clearTimeout(mdelaytimer);
}
}

function popsubctrl(p1,p2,p3,p4){
for (x=p1; x<submenu.length; x++){
if (x>=p2 && p4!=1)
if (submenu[x] != -1){
if (pmact[pcsl] == 9 && pmiurl[pcsl] == submenu[x] && submenu[(x-1)] != -1 && p3 == 1)
break;
else{
Popupml.layers[submenu[x]].visibility = "hide";
if (x>0)
submenu[x] = -1;
}
}
if (x-p3<opensubm.length)
if (opensubm[x-p3][0] != -1){
ostplay = pbdl[opensubm[x-p3][2]].layers[opensubm[x-p3][0]];
cstml = "menuItem"+opensubm[x-p3][1];
ostplay.layers[cstml+"h"].visibility = "hide";
ostplay.layers[cstml+"d"].visibility = "inherit";
ostplay.bgColor = pmclr[0];
ostplay.layers[cstml+"arrow"].document.images["popmenuarrow"+opensubm[x-p3][1]].src = popaimg.src;
if (x-p3==0 || p4==1)
pbfl.moveBelow(ostplay);
opensubm[x-p3][0] = -1;
if (p4==1)
break;
}
}
}

function popredraw(){
if (pbsl[0].visibility=="show"){
pYvl = (window.pageYOffset-ecY)/10;
popYstep = (pYvl>0) ? Math.ceil(pYvl) : Math.floor(pYvl);
pXvl = (window.pageXOffset-ecX)/10;
popXstep = (pXvl>0) ? Math.ceil(pXvl) : Math.floor(pXvl);
if (popYstep!=0 || popXstep!=0){
for (x=0; x<submenu.length; x++){
if (submenu[x]!=-1 && popascrolltype>1 && popYstep!=0)
Popupml.layers[submenu[x]].top += popYstep;
if (submenu[x]!=-1 && popascrolltype!=2 && popXstep!=0)
Popupml.layers[submenu[x]].left += popXstep;
}
ecY += popYstep;
ecX += popXstep;
}
}
}

function popmidown(e){
onsubop = 0;
if (e){
onsubop = pmact[pcsl];
if (e.which == 1 && onsubop<7)
setTimeout("popmidown2()",200);
}
else
if (e == 0 && pmha!=""){
if (pmha.indexOf("javascript") == 0)
setTimeout("eval(pmha.susbtring(11,pmha.length))",200);
else
setTimeout("location.href=pmha",200);
}
else
return;
if (popanimenabled && onsubop == 9){
window.clearTimeout(mdelaytimer);
popmion2(1);
}
if (onsubop<7){
popmioff();
popdsploff(popfixedenabled);
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
else{
popnwin.location.href = pmiurl[pcsl];
popnwin.window.focus();
}
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

function popmclay(e){
newpoplevel = true;
bodypl = e.target.name+"";
for (x=0; x<pbsl.length; x++)
if (pbsl[x].name+"i" == bodypl){
layernum = x;
break;
}
layerchange = true;
for (x=0; x<=submenu.length; x++)
if (pbsl[layernum].name == submenu[x]){
poplevel = x;
newpoplevel = false;
break;
}
if (newpoplevel)
poplevel++;
}

function popmion(e){
if (cc==4){
ttrgtlay = e.target.name;
pcsl = ttrgtlay.substring(8,ttrgtlay.length);
window.clearTimeout(popswotimer);
if (pmact[pcsl] != 8){
if (popsndenabled && Popupml.document.embeds[0])
with (Popupml.document.embeds[0]){
stop();
play();
}
trgtlay = e.target.name;
if (trgtlay && !layerchange)
popmioff();
layerchange = false;
tplay = pbdl[layernum].layers[trgtlay];
cslay = "menuItem"+pcsl;
tplay.layers[cslay+"d"].visibility = "hide";
tplay.layers[cslay+"h"].visibility = "inherit";
pbdl[layernum].layers[trgtlay].bgColor = pmclr[1];
popsubctrl(poplevel+1,poplevel+1,1,0);
with (pbfl){
top = tplay.top;
clip.height = tplay.clip.height;
clip.width = tplay.clip.width + 5;
moveAbove(tplay);
}
window.clearTimeout(popswitchtimer);
if (pmact[pcsl] == 9)
popmion2(0);
}
}
}

function popsmf(){
wox = window.pageXOffset;
woy = window.pageYOffset;
slimb = wlh+woy-(14*pophbar);
slimr = wlw+wox-(14*popvbar);
}

function popmion2(pcv){
tplay.layers["menuItem"+pcsl+"arrow"].document.images["popmenuarrow"+pcsl].src = popoimg.src;
popamem = pcsl;
if (Popupml.layers[pmiurl[pcsl]].visibility == "show" && eval(Popupml.layers[pmiurl[pcsl]].clip.width!=0) && !(popcmem != pcsl && poplmem == poplevel))
return;
if (clobj == submenu[poplevel] && scc<4)
mdelaytimer = setTimeout ('popmion2()',200);
else{
popcmem = pcsl;
poplmem = poplevel;
popcorX = false;
popsmf();
submenu[(poplevel+1)] = pmiurl[pcsl];
opensubm[poplevel] = new Array(trgtlay,pcsl,layernum);
popnmem = pmiurl[pcsl];
popnmem = popnmem.substring(3,popnmem.length);
popnmem = popnmem.split("submain");
popnmem = popnmem[0];
pmscwd = eval(pmmwds[popnmem])+4;
wdp = pmscwd;
hgp = Popupml.layers[pmiurl[pcsl]].clip.height;
smpx = pbsl[layernum].left+pbsl[layernum].clip.width-6;
smpy = pbsl[layernum].top+tplay.top;
if (smpx+wdp>= slimr){
smpx = pbsl[layernum].left+tplay.left-wdp+6;
popcorX = true;
}
if (smpy+hgp>= slimb)
smpy = smpy-hgp+tplay.clip.height+2;
if (smpy<woy)
smpy = woy;
if (smpx<wox)
smpx = pbsl[layernum].left+6;
with(Popupml.layers[pmiurl[pcsl]]){
top = smpy;
left = smpx;
moveAbove(pbsl[layernum]);
if (popanimenabled){
clip.left = 0;
clip.right = 0;
}
visibility = "show";
}
if (popanimenabled){
window.clearTimeout(popanimtimer);
scc = 4;
cr = (popcorX) ? 0:1;
cw = (popcorX) ? 0:pmscwd;
if (pcv==0)
mdelaytimer=window.setTimeout('popsanim(pmiurl[pcsl],cr,cw,smpx)',popdeltimermsec);
else
popsanim(pmiurl[pcsl],cr,cw,smpx);
}
}
}

function popmioff(){
if (pbdl[layernum].layers[trgtlay]){
deletehilay = true;
for (x=0; x<opensubm.length; x++)
if (opensubm[x][0] == trgtlay){
deletehilay = false;
popamem = -1;
if (popanimenabled){
window.clearTimeout(popswitchtimer);
popswitchtimer = window.setTimeout('pophhlay('+poplevel+')',50);
}
}
if (deletehilay){
tplay.layers[cslay+"h"].visibility = "hide";
tplay.layers[cslay+"d"].visibility = "inherit";
tplay.bgColor = pmclr[0];
pbfl.moveBelow(tplay);
if (popamem!=-1){
tplay.layers["menuItem"+popamem+"arrow"].document.images["popmenuarrow"+popamem].src = popaimg.src;
popamem = -1;
}
}
window.clearTimeout(mdelaytimer);
}
}

function pophhlay(lvl){
if (opensubm[lvl])
if (Popupml.layers[pmiurl[opensubm[lvl][1]]].clip.right == 0)
popsubctrl(lvl,0,0,1);
}

function popsomenu(){
popswotimer = window.setTimeout('popdsploff(1)',popsotimermsec);
}
