function sw_class(){
		
	var node, i=0;
	var navRoot = document.getElementById("cnt_tbl");
	var subnodes = navRoot.getElementsByTagName("DIV");
	var node = subnodes[i];
	var taille = subnodes.length;

	
	if (navRoot) 
	{

		if(node.style.display == ""){
			for(i=0;i<=taille;i++){
				if(node.className == "det_prix_aff"){
					node.style.display = 'block';
				}else if(node.className == "det_prix_ff"){
					node.style.display = 'none';
				}
				node = subnodes[i];
			}
		}else if(node.className == "det_prix_aff" && node.style.display == "block"){
			for(i=0;i<=taille;i++){
				if(node.className == "det_prix_aff"){
					node.style.display = 'none';
				}else if (node.className == "det_prix_ff"){
					node.style.display = 'block';
				}
				node = subnodes[i];
			}	
		}else if(node.className == "det_prix_aff" && node.style.display == "none"){
			for(i=0;i<=taille;i++){
				if(node.className == "det_prix_aff"){
					node.style.display = 'block';
				}else if(node.className == "det_prix_ff"){
					node.style.display = 'none';
				}
				node = subnodes[i];
			}
		}
	}
}

