function updateListe()
{
		var idtypebien = parseInt(document.getElementById('idtypebien').value);
		var cp = parseInt(document.getElementById('cp').value);
		var ref = document.getElementById('ref').value;
		
		
		if(window.XMLHttpRequest){myFlew = new XMLHttpRequest(); }
		else if(window.ActiveXObject){myFlew = new ActiveXObject("Microsoft.XMLHTTP");} 
		var method   = "GET"; 
		var filename = "$$REP:0 field 1$$,liste_ann.htm"; 
		var uriElement = "idtypebien="+idtypebien(cp!=0?"&cp="+cp:(ref!=""?"&ref="+ref)); 
		
		var data = null; 
		if(uriElement != ""){data = uriElement;} 
		if(method == "GET" && data != null) { 
		   filename += "?"+data; 
		   data      = null; 
		} 
		myFlew.open(method, filename, true); 
		myFlew.onreadystatechange = function() { 
	   if(myFlew.readyState == 4) { 
	      var tName="";
	      var myResult = myFlew.responseText.split(";"); 
	      for (i=0;i<myResult.length;i++){
					if(myResult[i].split('|')[1]){
					tName += '<div> <input type="checkbox" name="idannonce" id="cp-'+myResult[i].split('|')[0]+'" value="'+myResult[i].split('|')[0]+'" '+((i==0)?' checked':'')+'/><label for="cp-'+myResult[i].split('|')[0]+'">'+ myResult[i].split('|')[1] + ' (' + myResult[i].split('|')[0] + ')' +'</label></div>';
					}
	      }
	      var helpt = document.getElementById('helpt');
	      helpt.innerHTML=
	      '<div id=sellist0><img id="imgCpList0" src="$$_$$i/dyn/btntoutselectionner.png" /></div>'
	      +tName
	      +'<div id=sellist1><img id="imgCpList1" src="$$_$$i/dyn/btntoutselectionner.png" /><div>';

	      document.getElementById('sellist0').onclick=gestListCp;
	      document.getElementById('sellist1').onclick=gestListCp;

	   } 
		} 
		if(method == "POST"){myFlew.setRequestHeader("Content-type", "application/x-www-form-urlencoded");} 
		myFlew.send(data); 	
}