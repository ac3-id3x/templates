 function controle(id1)
 {
	for(var i=1;i<=2;i++) 
	{
		if(id1==i)
			{
			document.getElementById("SousMenu" + i).style.display="block";
			}
		else
			{ document.getElementById("SousMenu" + i).style.display="none";
			}
	}
			  		     
 }
	
