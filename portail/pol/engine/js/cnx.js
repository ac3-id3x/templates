function selectall(chk){
	var i;
	with(top.document)
	{
		for (i=0; i<forms[0].elements.length; i++)
		{
			if (forms[0].elements[i].name == 'idsite')
			{
				forms[0].elements[i].checked = chk;
			}
		}
	}
}

function detailcnx (){
	var o1 = document.getElementById('day1');
	var o2 = document.getElementById('day2');
	
	id3_go("/" + o1.value.replace("/","-").replace("/","-") + "," + o2.value.replace("/","-").replace("/","-") + "/cnx_summary.htm");
}

function submitForm(){
		var o = document.forms["formadd"];
		var r, msg = "";
			/*if ( confirm('Etes-vous sûr de vouloir supprimer toutes vos alertes ?') )
				all.submit();*/
	
				var email1 = document.getElementById("email1");
				var email2 = document.getElementById("email2");
				var email3 = document.getElementById("email3");
				
				var isdaily = document.getElementById("isdaily");
				var isweekly = document.getElementById("isweekly");
				var ismonthly = document.getElementById("ismonthly");
						
				if ((isdaily.checked == false)&&(isweekly.checked == false)&&(ismonthly.checked == false)){
					msg = "Vous devez choisir au moins une périodicité !\n";
				}
				
				if((email1.value == "")&&(email2.value == "")&&(email3.value == "")){
					msg += "Vous devez rentrer au moins une adresse mail !";
				}
				
			
			if(msg){
				alert(msg);
				return false;
			}else {
				return true;	
			}	
}

function submitFormPeriode(){
		var o = document.forms["form"];
		var r, msg = "";
			/*if ( confirm('Etes-vous sûr de vouloir supprimer toutes vos alertes ?') )
				all.submit();*/
	
				
				var isdaily = document.getElementById("isdaily");
				var isweekly = document.getElementById("isweekly");
				var ismonthly = document.getElementById("ismonthly");
						
				if ((isdaily.checked == false)&&(isweekly.checked == false)&&(ismonthly.checked == false)){
					msg = "Vous devez choisir au moins une périodicité !";
				}
				
				
			
			if(msg){
				alert(msg);
			
			}else {
				o.submit();
				opener.location.href='/cnx_mailing.htm';
				self.close();
			}	
}


function submitFormAddMail(){
	var o = document.forms["form"];
	var err = '';
	var isemail = false;
	var isvalidemail = true;
	var i;
	for ( i=0; i<o.elements.length; i++ ){
		if ( o.elements[i].type == 'text' ){
			if ( o.elements[i].value != '' ){
				isemail = true;
				if ( ! ( (o.elements[i].value.indexOf('@')>=0)&&(o.elements[i].value.indexOf('.')>=0)&&(o.elements[i].value.lastIndexOf('.')>o.elements[i].value.indexOf('@')) ) ){
						isvalidemail = false;
				}
			}
		}
	}
	if ( ! isemail )
		err +='\nVeuillez saisir au moins un email.';
	if ( ! isvalidemail )
		err += '\nVous avez saisi un ou plusieurs email(s) incorrect(s).';
	if ( err == '' ){
			o.submit();
			opener.location.href='/cnx_mailing.htm';
			self.close();
	}else
			alert(err);
}

function submitFormAll(){
	var o = document.forms["all"];
	if (confirm('Etes-vous sûr de vouloir supprimer toutes vos alertes ?') ){o.submit();}
}

function submitFormDelMail(){
		var o = document.forms["form"];
		var err = '';
		var issites = false;
		var isallchecked = true;
		var i;
		for ( i=0; i<o.elements.length; i++ )
		{
			if ( (o.elements[i].type == 'checkbox') && (o.elements[i].checked) )
				issites = true;
			if ( (o.elements[i].type == 'checkbox') && (!(o.elements[i].checked)) )
				isallchecked = false;
		}
		if ( ! issites )
			err += 'Veuillez sélectionner au moins un email.';
		if (isallchecked)
			err += 'Vous ne pouvez pas supprimer tous les emails de cette alerte.';
		if ( err == '' )
		{
			o.submit();
			opener.location.href='/cnx_mailing.htm';
			self.close();
		}
		else
			alert(err);
}