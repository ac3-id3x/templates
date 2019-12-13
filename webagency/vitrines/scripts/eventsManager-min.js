var eventsManager=new function(){
var _1=new function(){
var _2=new Array();
var _3=new Array();
var _4=new Array();
this.__addToEvent=function(_5,_6){
if(window.addEventListener){
window.addEventListener(_6,_5,false);
}else{
if(document.addEventListener){
document.addEventListener(_6,_5,false);
}else{
if(window.attachEvent){
window.attachEvent("on"+_6,_5);
}else{
if(typeof eval("window.on"+_6)!="function"){
eval("window.on"+_6)=_5;
}else{
var _7="window.on"+_6;
eval("window.on"+_6)=function(){
_7();
_5();
};
}
}
}
}
};
function _8(_9){
if(_9){
for(var i=0;i<_9.length;i++){
_9[i]();
}
}
};
this.__addToEvent(function(){
for(var i=_2.length-1;i>0;i--){
_8(_2[i]);
}
for(var i=0;i<_3.length;i++){
_8(_3[i]);
}
},"load");
this.__schedule=function(_a,_b,_c){
if(!_b){
_b=0;
}
if(!_c){
_4.push("priorite : "+_b+" / tache : "+_a);
}
if(_a instanceof Function){
if(_b<0){
if(_2[-_b]){
_2[-_b].push(_a);
}else{
_2[-_b]=[_a];
}
}else{
if(_3[_b]){
_3[_b].push(_a);
}else{
_3[_b]=[_a];
}
}
}else{
this.__schedule(function(){
eval(_a);
},_b,true);
}
};
function _d(_e){
var _f=document.getElementById("ID3xDebug");
var _10=document.getElementById("ifrID3xDebug");
var _11=document.getElementById("ID3xSql");
if(_f&&_10&&_11){
_11.innerHTML+=_e+"<br />";
}
};
this.dbgListLoadEvents=function(){
_d("=== Liste des appels empiles sur onLoad : ===");
for(var i=0;i<_4.length;i++){
_d(_4[i]);
}
_d("=== Fin Liste des appels empiles sur onLoad ===");
};
};
this.addLoadEvent=function(_12,_13){
_1.__schedule(_12,_13);
};
this.addToEvent=function(_14,_15){
_1.__addToEvent(function(){
eval(_14);
},_15);
};
this.dbgListLoadEvents=function(){
_1.dbgListLoadEvents();
};
};