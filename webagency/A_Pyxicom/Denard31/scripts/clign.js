
function clignotement()
{
	if(document.getElementById("MonElement"))
	{
	    if (document.getElementById("MonElement").style.display=="block") 
	       document.getElementById("MonElement").style.display="none"; 
	    else 
	       document.getElementById("MonElement").style.display="block";
	}
} 
// mise en place de l appel r�gulier de la fonction toutes les 0.5 secondes 
setInterval("clignotement()", 1000); 

