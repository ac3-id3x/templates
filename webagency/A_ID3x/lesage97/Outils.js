
if (document.all)
document.write('<div id="slidemenubar2" style="left:-192" onMouseOver="pull()" onMouseout="draw()">');

var U ="";
U += '<layer id="slidemenubar" onMouseout="draw()">'; 
U += '<table width="150" border="0" cellspacing="0" cellpadding="0">';
U += '<tr>'; 
U += '<td align="left"><img src="img/vide.gif" width="150" height="5"><br>';

document.write(U);

//Liste des outils---------------------------------------------------------------------------
for (i=1;i<=arrOutils.length-1;i++)
{document.write('<a href=' + arrOutilsLiens[i] + ' class="menuOutils">' + arrOutils[i] + '</a><br>')}
//Liste des outils---------------------------------------------------------------------------

U = "";
U += '</td>';
U += '</table>';
U += '</layer>';
document.write(U);

if (document.all)
document.write('</div>');

//----------------------------régénérations page pour netscape-----------------------------------
function regenerate(){
window.location.reload()
}
function regenerate2(){
if (document.layers)
setTimeout("window.onresize=regenerate",800)
}
window.onload=regenerate2


//-----------------------fonctions pour tirer outils----------------------------------------------
var themenu;
if (document.all){
themenu=document.all.slidemenubar2.style
limiteD=18
limiteG=-192
}
else{
themenu=document.layers.slidemenubar
limiteD=210
limiteG=18
}

var pullit, drawit;
function pull(){
if (window.drawit)
clearInterval(drawit);
pullit=setInterval("pullengine()",50);
}

function draw(){
if (window.pullit)
clearInterval(pullit);
drawit=setInterval("drawengine()",50);
}

function pullengine(){
if (document.all&&themenu.pixelLeft<limiteD)
themenu.pixelLeft+=5;
else if(document.layers&&themenu.left<limiteD)
themenu.left+=5;
else if (window.pullit)
clearInterval(pullit);
}

function drawengine(){
if (document.all&&themenu.pixelLeft>limiteG)
themenu.pixelLeft-=5;
else if(document.layers&&themenu.left>limiteG)
themenu.left-=5;
else if (window.drawit)
clearInterval(drawit);
}

//----------------fin  fonctions pour outils----------------------------------------------
