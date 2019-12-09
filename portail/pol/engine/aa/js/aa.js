/*function addselect(idselect){
	var slctd = document.getElementById(idselect + '_select');
	var slctd_temp = document.getElementById(idselect);
	var slctd_grp = document.getElementById(idselect + '_grp');
	var slctd_text = slctd.options[slctd.selectedIndex].text;
	var slctd_value = slctd.options[slctd.selectedIndex].value;	
	if(slctd_value != ""){
		if((slctd_temp.value).indexOf(slctd_value) < "0" ){
			if(slctd_grp.innerHTML == ""){
				slctd_grp.innerHTML = "<div class='listan_cookies' onmouseout=\"this.className='listan_cookies';\" onmouseover=\"this.className='listan_cookies_on';\"><div class='left'>&nbsp;</div><div class='cnt'>" + slctd_text + "</div></div>";
				slctd_temp.value = slctd_value;
			}else{
				slctd_grp.innerHTML = slctd_grp.innerHTML + "<div class='sepa'></div><div class='listan_cookies' onmouseout=\"this.className='listan_cookies';\" onmouseover=\"this.className='listan_cookies_on';\"><div class='left'>&nbsp;</div><div class='cnt'>" + slctd_text + "</div></div>";
				slctd_temp.value = slctd_temp.value + "," + slctd_value;
			}
			slctd.selectedIndex = 0;			
		}

	}
}

function addinput(idselect){
	var slctd = document.getElementById(idselect + '_select');
	var slctd_temp = document.getElementById(idselect);
	var slctd_grp = document.getElementById(idselect + '_grp');
	var slctd_value = slctd.value;	
	if(isInteger(slctd_value)){
		if((slctd_value.length == "2")||(slctd_value.length == "5")){
			if(slctd_grp.innerHTML == ""){
				slctd_grp.innerHTML = "<div class='listan_cookies' onmouseout=\"this.className='listan_cookies';\" onmouseover=\"this.className='listan_cookies_on';\"><div class='left'>&nbsp;</div><div class='cnt'>" + slctd_value + "</div></div>";
				slctd_temp.value = slctd_value;
			}else{
				var reg = new RegExp("[ ,;]+", "g");
				var tableau = slctd_temp.value.split(reg);
				var yes = 0;
				for (var i=0; i<tableau.length; i++) {
					if(tableau[i] == slctd_value){yes = 1; break;}
				}
				if(yes == 0){
					slctd_grp.innerHTML = slctd_grp.innerHTML + "<div class='sepa'></div><div class='listan_cookies' onmouseout=\"this.className='listan_cookies';\" onmouseover=\"this.className='listan_cookies_on';\"><div class='left'>&nbsp;</div><div class='cnt'>" + slctd_value + "</div></div>";
					slctd_temp.value = slctd_temp.value + "," + slctd_value;
				}
			}
		}
	}
}

function init_caa(){
	var localisation = document.getElementById(localisation);
	var idtypebien = document.getElementById(idtypebien);
	var idtypetransaction = document.getElementById(idtypetransaction);
	if(idtypetransaction) idtypetransaction.value = "";
	if(localisation) localisation.value = "";
	if(idtypebien) idtypebien.value = "";
}

function suppselect(idselect,position){
	var slctd_temp = document.getElementById(idselect);
	var slctd_grp = document.getElementById(idselect + '_grp');	
	
	var reg = new RegExp("[ ,;]+", "g");
	var tableau = slctd_temp.value.split(reg);
	for (var i=0; i<tableau.length; i++) {
		if(i != position){
			slctd_temp = tableau[i];
		}
	}
	
	var reg = new RegExp("[ <div class='sepa'></div>;]+", "g");
	var tableau2 = (slctd_grp.innerHTML).value.split(reg);
	for (var i=0; i<tableau2.length; i++) {
		if(i != position){
			slctd_grp.innerHTML = ;
		}
	}	
	
	
		
}*/