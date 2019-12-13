/* ------------------- debut script pour le menu ---------------------------- */
//<!--
//window.onload=sousmenu; //charge le script au load de la page
function sousmenu(id){
var d=document.getElementById(id);
for (var i=1; i<=10; i++){
if (document.getElementById('sousmenu'+i)) {document.getElementById('sousmenu'+i).style.display='none';}
}
if (d) {d.style.display='block';
}
}
//-->
/* ------------------ fin script pour le menu ------------------------------- */
