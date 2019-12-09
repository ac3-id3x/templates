
var days = new Array("Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"); 
var defauthr = new Array(["09h00","12h00","14h00","19h00"],["08h00","12h00","14h00","18h00"],["08h30","","","19h00"]); 


function sihoraire(ind){
	var indice = ind+1;
	var aumoinsun = 0;
	for (var i=1;i<5;i++){
		if(document.getElementById("h_"+indice+"_"+i).value != ""){
			aumoinsun = 1;
		}
	}
	return aumoinsun;
}	



function rewrite_day_hr(i_sourc,i_dest){
	var sourc = i_sourc+1;
	var dest = i_dest+1;
	for (var i=1;i<5;i++){
		document.getElementById("h_"+dest+"_"+i).value = document.getElementById("h_"+sourc+"_"+i).value; 
	}
	var o = document.getElementById( "b_rewrite_"+ i_dest );
	o.style.display = "none";
}

function clean_day_hr(i_dest){
	var dest = i_dest+1;
	for (var i=1;i<5;i++){
		document.getElementById("h_"+dest+"_"+i).value = ""; 
	}
	var o = document.getElementById( "b_rewrite_"+ i_dest );
	o.style.display = "none";
}

function clean_day_hr_all(i_dest){
	for(var j=0;j<6;j++){
		var dest = j+1;
		for (var i=1;i<5;i++){
			document.getElementById("h_"+dest+"_"+i).value = ""; 
		}
	}
	var o = document.getElementById( "b_rewrite_"+ i_dest );
	o.style.display = "none";
}


function set_day_hr_continu(i_dest){
	var dest = i_dest+1;
	document.getElementById("h_"+dest+"_"+2).value = ""; 
	document.getElementById("h_"+dest+"_"+3).value = "";
	var o = document.getElementById( "b_rewrite_"+ i_dest );
	o.style.display = "none";
}


function set_day_hr(i_dest,choice){
	var dest = i_dest+1;
	for (var i=1;i<5;i++){
		document.getElementById("h_"+dest+"_"+i).value = defauthr[choice][i-1]; 
	}
	var o = document.getElementById( "b_rewrite_"+ i_dest );
	o.style.display = "none";
}

function set_day_hr_all(i_dest,choice){
	for(var j=0;j<6;j++){
		var dest = j+1;
		for (var i=1;i<5;i++){
			document.getElementById("h_"+dest+"_"+i).value = defauthr[choice][i-1]; 
		}
	}
	var o = document.getElementById( "b_rewrite_"+ i_dest );
	o.style.display = "none";
}

function rewrite_day(id){
	var o = document.getElementById( "b_"+ id );
	var indice = id.substring(8,9);
	var hr = 0;
	
	if(o.style.display != "inline"){
		//clean
		for (var i=0;i<6;i++){
			var clean = document.getElementById('b_rewrite_'+i);
			clean.style.display = "none";
		}
		o.style.display = "inline";
		o.innerHTML = "<strong>" + days[indice].toUpperCase() + "<br />Recopier les horaires d'un autre jour</strong>";
		var target = o;		
		for (var i=0;i<6;i++){
			if(i != indice){
				if(sihoraire(i) == 1){
					var elem = document.createElement('a');
			  	elem.href = "javascript:rewrite_day_hr("+i+","+indice+");"
			  	var txt = document.createTextNode(days[i]);
			  	elem.appendChild(txt);
			  	elem.id = 'alinkhr'+i;
			  	target.appendChild(elem);
			  	hr = 1;
			  }
		  }
		}
		if(hr == 0){
			o.innerHTML = o.innerHTML + "<br />horaire non disponible<br />";	
		}
		
		
		o.innerHTML = o.innerHTML + "<br /><strong>Autre(s) fonctionnalité(s)</strong>";	
		var elem = document.createElement('a');
		elem.href = "javascript:set_day_hr_continu("+indice+");"
		var txt = document.createTextNode("Ouverture en continue");
		elem.appendChild(txt);
		elem.id = 'alinkhr'+i;
		target.appendChild(elem);
		
		if(hr != 0){
			
			
			var elem = document.createElement('a');
			elem.href = "javascript:clean_day_hr("+indice+");"
			var txt = document.createTextNode("Supprimer les horaires du " + days[indice]);
			elem.appendChild(txt);
			elem.id = 'alinkhr'+i;
			target.appendChild(elem);
			
			var elem = document.createElement('a');
			elem.href = "javascript:clean_day_hr_all("+indice+");"
			var txt = document.createTextNode("Supprimer tous les horaires");
			elem.appendChild(txt);
			elem.id = 'alinkhr'+i;
			target.appendChild(elem);
		}
		
		
		o.innerHTML = o.innerHTML + "<br /><strong>Saisies rapides pour "+ days[indice]+"</strong>";	
		var elem = document.createElement('a');
		elem.href = "javascript:set_day_hr("+indice+",1);"
		var txt = document.createTextNode("8h-12h / 14h-18h ");
		elem.appendChild(txt);
		elem.id = 'alinkhr'+i;
		target.appendChild(elem);	
		
		var elem = document.createElement('a');
		elem.href = "javascript:set_day_hr("+indice+",0);"
		var txt = document.createTextNode("9h-12h / 14h-19h ");
		elem.appendChild(txt);
		elem.id = 'alinkhr'+i;
		target.appendChild(elem);
		
		var elem = document.createElement('a');
		elem.href = "javascript:set_day_hr("+indice+",2);"
		var txt = document.createTextNode("8h30-19h ");
		elem.appendChild(txt);
		elem.id = 'alinkhr'+i;
		target.appendChild(elem);
		
		o.innerHTML = o.innerHTML + "<br /><strong>Saisies rapides pour la semaine</strong>";	
		var elem = document.createElement('a');
		elem.href = "javascript:set_day_hr_all("+indice+",1);"
		var txt = document.createTextNode("8h-12h / 14h-18h ");
		elem.appendChild(txt);
		elem.id = 'alinkhr'+i;
		target.appendChild(elem);	
		
		var elem = document.createElement('a');
		elem.href = "javascript:set_day_hr_all("+indice+",0);"
		var txt = document.createTextNode("9h-12h / 14h-19h ");
		elem.appendChild(txt);
		elem.id = 'alinkhr'+i;
		target.appendChild(elem);
		
		var elem = document.createElement('a');
		elem.href = "javascript:set_day_hr_all("+indice+",2);"
		var txt = document.createTextNode("8h30-19h ");
		elem.appendChild(txt);
		elem.id = 'alinkhr'+i;
		target.appendChild(elem);
		
		
	}else{
		o.style.display = "none";
	}
} 
	
	
function set_hr_hh(ind,mode){
	var o = document.getElementById(ind);
	if(o.value == ""){
		var part = ind.substring(4,5);
		if(part == "1"){o.value = "08h00";}
		if(part == "2"){o.value = "12h00";}
		if(part == "3"){o.value = "14h00";}
		if(part == "4"){o.value = "18h00";}
	}
	var hh = o.value.substring(0,2);
	var mm = o.value.substring(3,5);
	hh = parseFloat(hh).toString();
	if(mode == "h"){
		hh++;
		if(hh==24){hh=0;}
	}else{
		hh--;
		if(hh==-1){hh=23;}		
	}
	
	if(hh < 10){hh="0"+hh.toString();}
	o.value = hh+"h"+mm;
}

function set_hr_mm(ind,mode){
	var o = document.getElementById(ind);
	if(o.value == ""){
		var part = ind.substring(4,5);
		if(part == "1"){o.value = "08h00";}
		if(part == "2"){o.value = "12h00";}
		if(part == "3"){o.value = "14h00";}
		if(part == "4"){o.value = "18h00";}
	}
	var hh = o.value.substring(0,2);
	var mm = o.value.substring(3,5);
	hh = parseInt(parseFloat(hh));
	mm = parseInt(parseFloat(mm));

	if(mode == "h"){
		mm = mm + 15;
		if(mm == 60){
			hh++;
			mm=0;
			if(hh==24){hh=0;}
		}
	}else{
		mm = mm - 15;
		if(mm == -15){
			hh--;
			mm=45;
			if(hh==-1){hh=23;}
		}		
	}
	if(hh < 10){hh="0"+hh.toString();}
	if(mm == 0){mm="00";}
	o.value = hh+"h"+mm;
}

function show_bthr(thisid){
	var o = document.getElementById(thisid);
	var subnodes = o.getElementsByTagName("DIV");
	for (var i=0; i<subnodes.length; i++) {
		node = subnodes[i];
		if((node.className != "input_hr")&&(node.className != "input_hr_bt")){
			if(node.style.display == "inline"){
				node.style.display = "none";
			}else {
				node.style.display = "inline";
			}
		}
	}
	
}


function set_continu_day_hr_all(){
	for(var j=0;j<6;j++){
		var dest = j+1;
		for (var i=1;i<5;i++){
			if((i==2)||(i==3)){document.getElementById("h_"+dest+"_"+i).value = "";}
		}
	}
}



function posthoraire(){
	for(var j=0;j<6;j++){
		var dest = j+1;
		for (var i=1;i<5;i++){
			if(i==2){
				if(document.getElementById("h_"+dest+"_"+i).value == ""){
					if(document.getElementById("h_"+dest+"_"+1).value != ""){
						document.getElementById("h_"+dest+"_"+i).value = "12h00";
					}
				}
			}
			if(i==3){
				if(document.getElementById("h_"+dest+"_"+i).value == ""){
					if(document.getElementById("h_"+dest+"_"+4).value != ""){
						document.getElementById("h_"+dest+"_"+i).value = "12h00";
					}
				}
			}
		}
	}
	return true;
}


function removehrcontinuevisible(){
	for(var j=0;j<6;j++){
		var dest = j+1;
		for (var i=1;i<5;i++){
			if(i==2){
				var o2 = document.getElementById("h_"+dest+"_"+i);
				var o3 = document.getElementById("h_"+dest+"_"+3);
				if(o3.value != ""){
					if(o2.value != ""){
						if(o2.value == o3.value){
							o2.value = "";
							o3.value = "";
						}
					}
				}
			}
		}
	}
}