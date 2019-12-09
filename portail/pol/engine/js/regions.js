function client(o){
	var obj = document.getElementById(o);
	var tab1 = document.getElementById("c1_tab");
	var tab2 = document.getElementById("c2_tab");
	var puce1 = document.getElementById("c1_puce");
	var puce2 = document.getElementById("c2_puce");
	if(o == "c1"){
		tab1.style.display = "inline";
		tab2.style.display = "none";
		puce1.className = "ongl_activ";
		puce2.className= "ongl_noactiv";	
	}else {
		tab1.style.display = "none";
		tab2.style.display = "inline";
		puce1.className = "ongl_noactiv";
		puce2.className = "ongl_activ";	
	}
}

function clientar(o){
	//clean 
	for(var i=1;i<5;i++){
		var obj_tab = document.getElementById("c" + i +"_tab");
		var obj_puce = document.getElementById("c" + i +"_puce");
		if(obj_tab && obj_puce){
			obj_tab.style.display = "none";
			obj_puce.className= "ongl_noactiv";	
		}
	}
	
	var obj = document.getElementById(o+"_tab");
	var puce = document.getElementById(o+"_puce");
	obj.style.display = "inline";
	puce.className = "ongl_activ";
}