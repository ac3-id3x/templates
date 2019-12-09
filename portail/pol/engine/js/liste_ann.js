function change_nbpage (url,nbpage)
{
	EcrireCookie("agannoncespi", nbpage);
	document.location.replace(url);
}


function checkAllDesactivatePublicationMajor(idannonce,idtypepublication)
{
	var table = document.getElementById("liste-annonce");
	var cells = table.getElementsByTagName("input"); 
	
	var cellclick = document.getElementsByName("pub_"+idannonce+"_"+idtypepublication); 
	var activate=cellclick[0].checked;
	var allDesactivate=true;
	
	if(activate==false)
	{
		
		for (var i = 0; i < cells.length; i++) 
		{
		
	    id = cells[i].getAttribute("id");
	    //alert("id=" +id + " idannonce="+ idannonce);
	    if ( id == idannonce) 
	    {
	    	var name=cells[i].getAttribute("name");
	      
	      var elem =name.split('_');
	      
	      idtp=elem[2];
	      
	      if(idtp==1  || idtp==11 || idtp==13 || idtp==21 || idtp==508 || idtp==2109)
	      {
	      	if(cells[i].checked==true)
	      		allDesactivate=false;
	      }
	    }
	  }
	}
	  
	  return allDesactivate;
	
}

function afficheInfo()
{
	//var info = document.getElementById("infoPackPCSLN");
	//info.style.visibility="visible";
	
	node = document.getElementById("infoPackPCSLN");
	node.style.visibility = "visible";
	
}

function checkValidPublication(idannonce,idtypepublication)
{
	//alert(idannonce);
	//alert(idtypepublication);
	var table = document.getElementById("liste-annonce");
	var cells = table.getElementsByTagName("input"); 
	
	var cellclick = document.getElementsByName("pub_"+idannonce+"_"+idtypepublication); 
	var activate=cellclick[0].checked;	
	
	for (var i = 0; i < cells.length; i++) 
	{
	
    id = cells[i].getAttribute("id");
    //alert("id=" +id + " idannonce="+ idannonce);
    if ( id == idannonce) 
    {
    	var name=cells[i].getAttribute("name");
      
      var elem =name.split('_');
      
      idtp=elem[2];
      
      
      if(activate==true)
      {
	      if(idtypepublication==33)
	      {
	    		if(idtp==1  || idtp==11 || idtp==13 || idtp==21 || idtp==508 || idtp==2109)
	    		{
	    			cells[i].checked=false;
	    			cells[i].disabled=true;
	    			afficheInfo();
	    		}  	
	      }
	            
	      if(idtypepublication==1 || idtypepublication==11 || idtypepublication ==13 || idtypepublication==21 || idtypepublication==508 || idtypepublication ==2109)      
	      {
	    	
	    		if(idtp==33)	
	    		{
	    			cells[i].checked=false;
	    			cells[i].disabled=true;
	    			afficheInfo();
	    		}  	
	      }
	    }
	    else
    	{
    		if(idtypepublication==33)
	      {
	    		if(idtp==1  || idtp==11 || idtp==13 || idtp==21 || idtp==508 || idtp==2109)
	    		{
	    			cells[i].checked=false;
	    			cells[i].disabled=false;
	    			afficheInfo();
	    		}  	
	      }
	            
	      if(idtypepublication==1 || idtypepublication==11 || idtypepublication ==13 || idtypepublication==21 || idtypepublication==508 || idtypepublication ==2109)      
	      {
	    	
	    		if(idtp==33 && checkAllDesactivatePublicationMajor(idannonce,idtypepublication)==true)	
	    		{	    				    			
	    			cells[i].checked=false;
	    			cells[i].disabled=false;
	    			afficheInfo();
	    		}  	
	      }
    	}
      
    }
  }
	
	
	
}