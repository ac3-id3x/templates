var esp_ag_graph;

function choix_s (mode,id,id_parent) {
	
	var node;
	var o = document.getElementById(id);
	
	if (mode == 1){
		var o4 = document.getElementById("line_choix_type");
		o4.style.display = "block";
		var o_choice = document.getElementById("esp_choice");
		var navRoot = document.getElementById(id_parent);
		if (navRoot) {
				var subnodes = navRoot.getElementsByTagName("DIV");			
				for (var i=0; i<subnodes.length; i++) {
					node = subnodes[i];
					node.className = "box_nosel";
				}		
		}
		
		o.className = "box_sel";
		
		var o1 = document.getElementById("box_tt");
		
		var o2 = document.getElementById("box_tb");
		
		var o3 = document.getElementById("box_tp");
		
		if(id == "s_transaction") {
			o_choice.innerHTML = "un ou plusieurs type(s) de transaction";
			o1.style.display = "block";	
			o2.style.display = "none";
			o3.style.display = "none";
			
		}
		
		if(id == "s_bien") {
			o_choice.innerHTML = "un ou plusieurs type(s) de bien";
			o2.style.display = "block";	
			o1.style.display = "none";
			o3.style.display = "none";
	
		}
		
		if(id == "s_publication") {
			o_choice.innerHTML = "une ou plusieurs publication(s)";
			o3.style.display = "block";	
			o1.style.display = "none";
			o2.style.display = "none";
		}
	}else{
		var o2 = document.getElementById(id+"_d");
		var o3 = document.getElementById(id_parent+"_titre");		
		var o4 = document.getElementById(id_parent+"_header");	
			
		if( o.className != "box_sel"){
			o.className = "box_sel";
			o2.style.display = "block";	
		}else {
			o.className = "box_nosel";
			o2.style.display = "none";	
		}
		
		var navRoot_s = document.getElementById(id_parent+"_all");
		var afftitre = 0;
		if (navRoot_s) {
				var subnodes = navRoot_s.getElementsByTagName("DIV");			
				for (var i=0; i<subnodes.length; i++) {
					node = subnodes[i];
						if((node.className == "line_box_info")&&(node.style.display =="block")) {
							afftitre = 1;
						}
						if((node.className == "line_box_info_detail")&&(node.style.display =="block")) {
							afftitre = 1;
						}
						if((node.className == "line_box_info_detail2")&&(node.style.display =="block")) {
							afftitre = 1;
						}
						
				}		
		}
		if(afftitre == 1){
			o3.style.display = "block";	
			o4.style.display = "block";	
		}else {
			o3.style.display = "none";	
			o4.style.display = "none";	
		}
	}
	initSize();
	
}
	
function disp_type (sel, visu) {
	
	var o1 = document.getElementById("box_"+sel+"_header");
	var o2 = document.getElementById("box_"+sel+"_titre");
	var o3 = document.getElementById("box_"+sel+"_all");
	var o4 = document.getElementById("line_choix_type");
	var o5 = document.getElementById("box_tp");
	o1.style.display = visu;
	o2.style.display = visu;
	o3.style.display = visu;
	o4.style.display = visu;
	o5.style.display = visu;
	
	

	disp_choix(o3, visu);	

	initSize ();

}
function disp_all (visu) {
	
disp_type('tt', visu);
disp_type('tb', visu);
disp_type('tp', visu);

}

function disp_choix (obj, visu){
	
	var subnodes = obj.getElementsByTagName("DIV");
		
	for (var i=0; i<subnodes.length; i++) {
		
		node = subnodes[i];
		node.style.display = visu;
		
	}
}


function stats(o){
	var o1 = document.getElementById("statsag"+"_g");
	var o2 = document.getElementById("statgsl"+"_g");

	if(o.id == "statgsl" ){
		if(o1){
			esp_ag_graph = o1.innerHTML;
			o1.innerHTML = o2.innerHTML;
		}

	}else{
			if(esp_ag_graph !=null){
				o1.innerHTML = esp_ag_graph;
			}

	}
}