//Permet de configurer l'affichage en fonction de la zone choisis
function affiche_pays_langue()
{
	var tt=document.getElementById('formulaire');
	var divPays=document.getElementById('divPays');
	var divLangue=document.getElementById('divLangue');
	var divRegion=document.getElementById('divRegion');
	var divDepartement=document.getElementById('divDepartement');
	var divVille=document.getElementById('divVille');
	var lstZone=document.getElementById('lstChoixZone');
	var lstLangue=document.getElementById('lstChoixLangue');
	var lstPays=document.getElementById('lstChoixPays');
	var lstRegion=document.getElementById('lstChoixRegion');
	var lstDepartement=document.getElementById('lstChoixDepartement');
	var lblPays=document.getElementById('lblPays');
	var lblRegion=document.getElementById('lblRegion');
	var lblDepartement=document.getElementById('lblDepartement');
	var lblVille=document.getElementById('lblVille');
	var lblLangue=document.getElementById('lblLangue');
	var btnSauvegarder=document.getElementById('BtnSauvegarder');
	var lblObservation=document.getElementById('lblObservation');
	var lblPageRank=document.getElementById('lblPageRank');
	var txtObservation=document.getElementById('txtObservation');
	var lstChoixPageRank=document.getElementById('lstChoixPageRank');
	
	if(lstZone.value==1 )//Si internationale est choisi
	{
		lstChoixPageRank.style.display='block';
		txtObservation.style.display='block';
		lblPageRank.style.display='block';
		lblObservation.style.display='block';
		btnSauvegarder.style.display='block';
		lblPays.style.display='block';
		lblRegion.style.display='none';
		lblDepartement.style.display='none';
		lblVille.style.display='none';
		lblLangue.style.display='block';
		divPays.style.display='block';
		divLangue.style.display='block';
		divRegion.style.display='none';
		divDepartement.style.display='none';
		divVille.style.display='none';
		selectionne_element(lstLangue,'langue',0);//Pour la langue francaise
		selectionne_element(lstPays,'pays',0);//Pour la france
		lstLangue.disabled=false;
		lstPays.disabled=false;
	}
	else if(lstZone.value==2 )//Si nationale est choisi
	{
		lstChoixPageRank.style.display='block';
		txtObservation.style.display='block';
		lblPageRank.style.display='block';
		lblObservation.style.display='block';
		btnSauvegarder.style.display='block';
		lblPays.style.display='block';
		lblRegion.style.display='none';
		lblDepartement.style.display='none';
		lblVille.style.display='none';
		lblLangue.style.display='block';
		divPays.style.display='block';
		divLangue.style.display='block';
		divRegion.style.display='none';
		divVille.style.display='none';
		divDepartement.style.display='none';
		selectionne_element(lstLangue,1,0);//Pour la langue francaise
		selectionne_element(lstPays,250,0);//Pour la france
		lstLangue.disabled=true;
		lstPays.disabled=true;
	}
	else if 	(lstZone.value==3)//Si region est choisi
	{
		lstChoixPageRank.style.display='block';
		txtObservation.style.display='block';
		lblPageRank.style.display='block';
		lblObservation.style.display='block';
		btnSauvegarder.style.display='block';
		lblPays.style.display='block';
		lblRegion.style.display='block';
		lblDepartement.style.display='none';
		lblVille.style.display='none';
		lblLangue.style.display='block';
		divPays.style.display='block';
		divLangue.style.display='block';
		divRegion.style.display='block';
		divDepartement.style.display='none';
		divVille.style.display='none';
		selectionne_element(lstLangue,1,0);//Pour la langue francaise
		selectionne_element(lstPays,250,0);//Pour la france
		lstLangue.disabled=true;
		lstPays.disabled=true;
	}
	else if 	(lstZone.value==4)//Si Département est choisi
	{
		lstChoixPageRank.style.display='block';
		txtObservation.style.display='block';
		lblPageRank.style.display='block';
		lblObservation.style.display='block';
		btnSauvegarder.style.display='block';
		lblPays.style.display='block';
		lblRegion.style.display='block';
		lblDepartement.style.display='none';
		lblVille.style.display='none';
		lblLangue.style.display='block';
		divPays.style.display='block';
		divLangue.style.display='block';
		divRegion.style.display='block';
		divDepartement.style.display='none';
		divVille.style.display='none';
		selectionne_element(lstLangue,1,0);//Pour la langue francaise
		selectionne_element(lstPays,250,0);//Pour la france
		lstLangue.disabled=true;
		lstPays.disabled=true;
	}
	else if 	(lstZone.value==5)//Si Locale est choisi
	{
		lstChoixPageRank.style.display='block';
		txtObservation.style.display='block';
		lblPageRank.style.display='block';
		lblObservation.style.display='block';
		btnSauvegarder.style.display='block';
		lblPays.style.display='block';
		lblRegion.style.display='block';
		lblDepartement.style.display='none';
		lblVille.style.display='none';
		lblLangue.style.display='block';
		divPays.style.display='block';
		divLangue.style.display='block';
		divRegion.style.display='block';
		divDepartement.style.display='none';
		divVille.style.display='none';
		selectionne_element(lstLangue,1,0);//Pour la langue francaise
		selectionne_element(lstPays,250,0	);//Pour la france
		lstLangue.disabled=true;
		lstPays.disabled=true;
	}
	else
	{
		lstChoixPageRank.style.display='none';
		txtObservation.style.display='none';
		lblPageRank.style.display='none';
		lblObservation.style.display='none';
		btnSauvegarder.style.display='none';
		lblPays.style.display='none';
		lblRegion.style.display='none';
		lblDepartement.style.display='none';
		lblVille.style.display='none';
		lblLangue.style.display='none';
		divPays.style.display='none';
		divLangue.style.display='none';
		divRegion.style.display='none';
		divDepartement.style.display='none';
		divVille.style.display='none';
	}
}


//Permet de selectionner dans une liste l'lelement que l'on souhaite
function selectionne_element(lst, valeur,opt)
{
	var nbElements=lst.options.length;
	//alert(lst.name + " " + nbElements);
	if(opt==0)
	{
		for(var i=0;i<nbElements;i++)
		{
			if(lst.options[i].value==valeur)
			{
				lst.options[i].selected= true;
				break;
			}
		}
	}
	if(opt==1)
	{
		for(var i=0;i<nbElements;i++)
		{
			if(lst.options[i].text==valeur)
			{
				lst.options[i].selected= true;
				break;
			}
		}
	}

}

//Permet de faire apparaitre le div contenant la liste des departements
function affiche_departements_regions(departement)
{
	var lstZone=document.getElementById('lstChoixZone');
	if(lstZone.value==4 || lstZone.value==5) 
	{
		var divDepartement=document.getElementById('divDepartement');
		var lblDepartement=document.getElementById('lblDepartement');
		divDepartement.style.display='block';
		lblDepartement.style.display='block';
		affiche_liste_departement(departement);
	}
}

//Permet de savoir quells sont les departements appartenant a une region
function affiche_liste_departement(DepValue)
{
	var lstDepartement=document.getElementById('lstChoixDepartement');
	var tabDep=DepValue.split(',');
	var nbelement=lstDepartement.options.length;
	var tabLstDepAdd='';
	for (var g=0;g<=nbelement-1;g++)
	{
		for(var i=0;i<=tabDep.length-1;i++)
		{
			if(tabDep[i]==lstDepartement.options[g].value)
			{
				if(tabLstDepAdd=='')
				{
					tabLstDepAdd=lstDepartement.options[g].text;
				}
				else
				{
					tabLstDepAdd=tabLstDepAdd + ',' + lstDepartement.options[g].text;
				}
				break;
			}		
		}
	}
	add_departement_liste(tabLstDepAdd,tabDep);	
}

//Permet d'ajouter la liste des departements pour une region
function add_departement_liste(tabLstDepAdd,tabDep)
{
	var lstDepartementConstruit=document.getElementById('lstChoixDepartementConstruit');
	var tabLstDepAdd=tabLstDepAdd.split(',');
	lstDepartementConstruit.options.length=null;
	var elOptNew = document.createElement('option');
	elOptNew.text='Choisissez un departement';
	elOptNew.value='Departement';
	try
	{
		lstDepartementConstruit.add(elOptNew,null);
		for (var j=0; j<=tabLstDepAdd.length -1;j++)
		{
			var elOptNew = document.createElement('option');
			elOptNew.text=tabLstDepAdd[j];
			elOptNew.value=tabDep[j];
			lstDepartementConstruit.add(elOptNew,null);
		}
	}
	catch(erreur) //POur ie
	{
		lstDepartementConstruit.add(elOptNew);
		for (var j=0; j<=tabLstDepAdd.length -1;j++)
		{
			var elOptNew = document.createElement('option');
			elOptNew.text=tabLstDepAdd[j];
			elOptNew.value=tabDep[j];
			lstDepartementConstruit.add(elOptNew);
		}
	}
}

//Permet de faire apparaitre le div contenant la liste des departements
function affiche_ville_departements()
{
	var lstZone=document.getElementById('lstChoixZone');
	if(lstZone.value==5)
	{
		var divVille=document.getElementById('divVille');
		divVille.style.display='block';
		var lstDepartementConstruit=document.getElementById('lstChoixDepartementConstruit');
		var monurl='incl_annuaire_ville.htm';
		var myAjax1 = new Ajax.Updater
		(
			'divVille', 
			monurl, 
			{
				method: 'get', 
				parameters: 'dep=' + lstDepartementConstruit.value
			}
		);
	}

	//alert('okkkkk');
}

//Permet d'ajouter un annuaire
function AjouterUpdateAnnuaire()
{

	var frm=document.getElementById('formulaire');
	var lstPays=document.getElementById('lstChoixPays');
	var lstLangue=document.getElementById('lstChoixLangue');
	var regionName=document.getElementById('valueRegion');
	var lstRegion=document.getElementById('lstChoixRegion');
	regionName.value=lstRegion.options[lstRegion.selectedIndex].text;
	lstPays.disabled=false;
	lstLangue.disabled=false;
	frm.submit();
}

//Permet de supprimer un annuaire
function DelAnnuaire(id)
{
	document.formulaire.u.value='GDP2:DEL_ANNUAIRE';
	var frm=document.getElementById('formulaire');
	var idannuaire=document.getElementById('delAnnuaire');
	idannuaire.value=id;
	document.formulaire.submit();

}

//Permet de remplir les champs pour la modifications des annuaires
function modify_annuaire(id)
{
	var idannuaire=document.getElementById('idannuaire');
	var tt=document.getElementById('formulaire');
	var divPays=document.getElementById('divPays');
	var divLangue=document.getElementById('divLangue');
	var divRegion=document.getElementById('divRegion');
	var divDepartement=document.getElementById('divDepartement');
	var divVille=document.getElementById('divVille');
	var lstZone=document.getElementById('lstChoixZone');
	var lstLangue=document.getElementById('lstChoixLangue');
	var lstPays=document.getElementById('lstChoixPays');
	var lstRegion=document.getElementById('lstChoixRegion');
	var lstVille=document.getElementById('lstChoixVille');
	var lstDepartement=document.getElementById('lstChoixDepartementConstruit');
	var lblPays=document.getElementById('lblPays');
	var lblRegion=document.getElementById('lblRegion');
	var lblDepartement=document.getElementById('lblDepartement');
	var lblVille=document.getElementById('lblVille');
	var lblLangue=document.getElementById('lblLangue');
	var btnSauvegarder=document.getElementById('BtnSauvegarder');
	var lblObservation=document.getElementById('lblObservation');
	var lblPageRank=document.getElementById('lblPageRank');
	var txtObservation=document.getElementById('txtObservation');
	var lstChoixPageRank=document.getElementById('lstChoixPageRank');
	var txtNomAnnuaire=document.getElementById('TxtNomAnnuaire');
	var txtUrlAnnuaire=document.getElementById('TxtUrlAnnuaire');
	var TxtUrlSoumissionAnnuaire=document.getElementById('TxtUrlSoumissionAnnuaire');
	var TxtUrlInscriptionAnnuaire=document.getElementById('TxtUrlInscriptionAnnuaire');
	
	var nomAnnuaire=document.getElementById('nomAnnuaire_' + id);
	var urlAnnuaire=document.getElementById('urlAnnuaire_' + id);
	var zoneAnnuaire=document.getElementById('zoneAnnuaire_' + id);
	var paysAnnuaire=document.getElementById('paysAnnuaire_' + id);
	var langueAnnuaire=document.getElementById('langueAnnuaire_' + id);
	var regionAnnuaire=document.getElementById('regionAnnuaire_' + id);
	var departementAnnuaire=document.getElementById('departementAnnuaire_' + id);
	var villeAnnuaire=document.getElementById('VilleAnnuaire_' + id);
	var pageRankAnnuaire=document.getElementById('pageRankAnnuaire_' + id);
	var observationAnnuaire=document.getElementById('observationAnnuaire_' + id);
	var urlInscriptionAnnuaire=document.getElementById('urlInscriptionAnnuaire_' + id);
	var urlSoumissionAnnuaire=document.getElementById('urlSoumissionAnnuaire_' + id);
	
	selectionne_element(lstChoixPageRank,'PageRank',0);//Pour la langue francaise
	idannuaire.value=id;
	if(zoneAnnuaire.value=='Nationale')//Si Nationale est choisi
	{
		
		lstChoixPageRank.style.display='block';
		txtObservation.style.display='block';
		lblPageRank.style.display='block';
		lblObservation.style.display='block';
		btnSauvegarder.style.display='block';
		lblPays.style.display='block';
		lblRegion.style.display='none';
		lblDepartement.style.display='none';
		lblVille.style.display='none';
		lblLangue.style.display='block';
		divPays.style.display='block';
		divLangue.style.display='block';
		divRegion.style.display='none';
		divVille.style.display='none';
		divDepartement.style.display='none';
		lstChoixPageRank.value=pageRankAnnuaire.value;
		txtObservation.value=observationAnnuaire.value;
		txtNomAnnuaire.value=nomAnnuaire.value;
		txtUrlAnnuaire.value=urlAnnuaire.value;
		TxtUrlSoumissionAnnuaire.value=urlSoumissionAnnuaire.value;
		TxtUrlInscriptionAnnuaire.value=urlInscriptionAnnuaire.value;
		selectionne_element(lstLangue,1,0);//Pour la langue francaise
		selectionne_element(lstPays,250,0);//Pour la france
		selectionne_element(lstZone,2,0);//Pour la zone nationale
		lstLangue.disabled=true;
		lstPays.disabled=true;
	}
	if(zoneAnnuaire.value=='Régionale')//Si régionale est choisi
	{
		lstChoixPageRank.style.display='block';
		txtObservation.style.display='block';
		lblPageRank.style.display='block';
		lblObservation.style.display='block';
		btnSauvegarder.style.display='block';
		lblPays.style.display='block';
		lblRegion.style.display='block';
		lblDepartement.style.display='none';
		lblVille.style.display='none';
		lblLangue.style.display='block';
		divPays.style.display='block';
		divLangue.style.display='block';
		divRegion.style.display='block';
		divVille.style.display='none';
		divDepartement.style.display='none';
		lstChoixPageRank.value=pageRankAnnuaire.value;
		txtObservation.value=observationAnnuaire.value;
		TxtUrlSoumissionAnnuaire.value=urlSoumissionAnnuaire.value;
		TxtUrlInscriptionAnnuaire.value=urlInscriptionAnnuaire.value;
		txtNomAnnuaire.value=nomAnnuaire.value;
		txtUrlAnnuaire.value=urlAnnuaire.value;
		selectionne_element(lstLangue,1,0);//Pour la langue francaise
		selectionne_element(lstPays,250,0);//Pour la france
		selectionne_element(lstZone,3,0);//Pour la zone régionale
		selectionne_element(lstRegion,regionAnnuaire.value,1);//Pour la region selectionné
		lstLangue.disabled=true;
		lstPays.disabled=true;
	}
	if(zoneAnnuaire.value=='Départementale')//Si régionale est choisi
	{
		lstChoixPageRank.style.display='block';
		txtObservation.style.display='block';
		lblPageRank.style.display='block';
		lblObservation.style.display='block';
		btnSauvegarder.style.display='block';
		lblPays.style.display='block';
		lblRegion.style.display='block';
		lblDepartement.style.display='block';
		lblVille.style.display='none';
		lblLangue.style.display='block';
		divPays.style.display='block';
		divLangue.style.display='block';
		divRegion.style.display='block';
		divVille.style.display='none';
		divDepartement.style.display='block';
		lstChoixPageRank.value=pageRankAnnuaire.value;
		TxtUrlSoumissionAnnuaire.value=urlSoumissionAnnuaire.value;
		TxtUrlInscriptionAnnuaire.value=urlInscriptionAnnuaire.value;
		txtObservation.value=observationAnnuaire.value;
		txtNomAnnuaire.value=nomAnnuaire.value;
		txtUrlAnnuaire.value=urlAnnuaire.value;
		selectionne_element(lstLangue,1,0);//Pour la langue francaise
		selectionne_element(lstPays,250,0);//Pour la france
		selectionne_element(lstZone,4,0);//Pour la zone departement
		selectionne_element(lstRegion,regionAnnuaire.value,1);//Pour la region selectionné
		affiche_departements_regions(lstRegion.value)
		selectionne_element(lstDepartement,departementAnnuaire.value,1);//Pour la region selectionné
		lstLangue.disabled=true;
		lstPays.disabled=true;
	}
		if(zoneAnnuaire.value=='Locale')//Si locale est choisi
	{
		lstChoixPageRank.style.display='block';
		txtObservation.style.display='block';
		lblPageRank.style.display='block';
		lblObservation.style.display='block';
		btnSauvegarder.style.display='block';
		lblPays.style.display='block';
		lblRegion.style.display='block';
		lblDepartement.style.display='block';
		lblVille.style.display='block';
		lblLangue.style.display='block';
		divPays.style.display='block';
		divLangue.style.display='block';
		divRegion.style.display='block';
		divVille.style.display='block';
		lstVille.style.display='block';
		divDepartement.style.display='block';
		lstChoixPageRank.value=pageRankAnnuaire.value;
		txtObservation.value=observationAnnuaire.value;
		TxtUrlSoumissionAnnuaire.value=urlSoumissionAnnuaire.value;
		TxtUrlInscriptionAnnuaire.value=urlInscriptionAnnuaire.value;
		txtNomAnnuaire.value=nomAnnuaire.value;
		txtUrlAnnuaire.value=urlAnnuaire.value;
		selectionne_element(lstLangue,1,0);//Pour la langue francaise
		selectionne_element(lstPays,250,0);//Pour la france
		selectionne_element(lstZone,5,0);//Pour la zone locale
		selectionne_element(lstRegion,regionAnnuaire.value,1);//Pour la region selectionné
		affiche_departements_regions(lstRegion.value);
		selectionne_element(lstDepartement,departementAnnuaire.value,1);//Pour le departement selectionné
		var lstDepartementConstruit=document.getElementById('lstChoixDepartementConstruit');
		var monurl='incl_annuaire_ville.htm'
		var myAjax1 = new Ajax.Updater
		(
			'divVille', 
			monurl, 
			{
				method: 'get', 
				parameters: 'dep=' + lstDepartementConstruit.value,
				 onComplete: function(response) 
				 {
					lstVille=document.getElementById('lstChoixVille');
					selectionne_element(lstVille,villeAnnuaire.value,1);//Pour la ville selectionné 
				 },
				 onFailure: function(response) {
					alert("Failed: Contactez le service info");
				 }
            }
		);
		lstLangue.disabled=true;
		lstPays.disabled=true;
	}
}



//Permet de desaffecter un annuaire
function DesAffecterAnnuaire(lstAnnuaireadesaffecter,lstannuaire)
{
	lstAnnuaireADesaffecter = document.getElementById(lstAnnuaireadesaffecter);		
	selOpt = getSelectedOptions(lstAnnuaireADesaffecter);			
	var selValues = new Array();
	if(selOpt.length>0)
	{				
		selValues = getSelectedValues(lstAnnuaireADesaffecter);
		lstAnnuaire=document.getElementById(lstannuaire);
		for(i=0;i<selOpt.length;i++)
		{
			option = selOpt[i];
			lstAnnuaireADesaffecter.removeChild(option);						
			lstAnnuaire.appendChild(option);
		}
	}	
	validerDesAffectationannuaire(selOpt);
	return selValues;
}

//Permet d'affecter un annuaire
function AffecterAnnuaire(lstannuaire, lstAnnuaireaaffecter)
{
	lstAnnuaire = document.getElementById(lstannuaire);	
	selOpt = getSelectedOptions(lstAnnuaire);			
	var selValues = new Array();
	if(selOpt.length>0)
	{
		selValues = getSelectedValues(lstAnnuaire);
		lstAnnuaireAAffecter=document.getElementById(lstAnnuaireaaffecter);
		for(i=0;i<selOpt.length;i++)
		{
			option = selOpt[i];
			lstAnnuaire.removeChild(option);						
			lstAnnuaireAAffecter.appendChild(option);
		}
	}	
	validerAffectationannuaire(selOpt);
	return selValues;
}

//Permet de retourner les valeurs des elements selectionnees
function getSelectedValues (select) 
{
	var selValues = new Array();
	for (i = 0; i < select.options.length; i++)
	{
		selValues[selValues.length] = select.options[i].value;					
	}
	return selValues;
}

//Permet de retourner une liste des annuaires selectionnées			
function getSelectedOptions (select)
 {
	var selOptions  = new Array();
	for (i = 0; i < select.options.length; i++)
	{
		if (select.options[i].selected) 
		{
			selOptions[selOptions.length] = select.options[i];
		}
	}
	return selOptions;
}

//Permet d'ajouter un ou plusieurs annuaires a un dossier de ref
function validerAffectationannuaire(listeIdAnnuaire)
{
	var lstAnnuaireAAffecter=document.getElementById('lstAnnuaireAAffecter');
	var LstIdannuaire=document.getElementById('LstIdannuaire');
	var tabIdAnnuaireSel ='';
	for (i = 0; i < listeIdAnnuaire.length; i++)
	{
		if(tabIdAnnuaireSel=='')
		{
			tabIdAnnuaireSel=listeIdAnnuaire[i].value;
		}
		else
		{
			tabIdAnnuaireSel=tabIdAnnuaireSel + ',' + listeIdAnnuaire[i].value;
		}
	}
	document.formulaire.u.value='GDP2:AFFECTER_ANNUAIRE';
	LstIdannuaire.value=tabIdAnnuaireSel;
	document.formulaire.submit();
}


//Permet de supprimer un ou plusieurs annuaires a un dossier de ref
function validerDesAffectationannuaire(listeIdAnnuaire)
{
	var lstAnnuaireAAffecter=document.getElementById('lstAnnuaireAAffecter');
	var LstIdannuaire=document.getElementById('LstIdannuaire');
	var tabIdAnnuaireSel ='';
	for (i = 0; i < listeIdAnnuaire.length; i++)
	{
		if(tabIdAnnuaireSel=='')
		{
			tabIdAnnuaireSel=listeIdAnnuaire[i].value;
		}
		else
		{
			tabIdAnnuaireSel=tabIdAnnuaireSel + ',' + listeIdAnnuaire[i].value;
		}
	}
	document.formulaire.u.value='GDP2:DESAFFECTER_ANNUAIRE';
	LstIdannuaire.value=tabIdAnnuaireSel;
	document.formulaire.submit();
}



//Permet d'inscrire un site a un annuaire
function inscriptionAnnuaire(idannuaire)
{
	var reponse;
	reponse = 'Etes vous sure que votre site est bien inscrit?'; 	
	if(confirm(reponse))
	{
		document.formulaire.u.value='GDP2:INSCRIPTION_ANNUAIRE';
		document.formulaire.idannuaire.value=idannuaire;
		document.formulaire.submit();
		alert('Le dossier de réferencement à bien été inscrit');
	}
}

//Permet d'inscrire un site a un annuaire
function soumissionAnnuaire(idannuaire,url)
{
	var reponse;
	reponse = 'Etes vous sur de vouloir soumettre cet annuaire?'; 	
	if(confirm(reponse))
	{
		document.formulaire.u.value='GDP2:SOUMISSION_ANNUAIRE';
		document.formulaire.idannuaire.value=idannuaire;
		if(url!="")
		{
			popup('url de soumission',url,600,600,true);
		}
		document.formulaire.submit();
		//alert('Le dossier de réferencement à bien été soumis');
	}
}

//Permet d'afficher le resultat de la recherche dans la liste des annuaires non affectés
function affinerAffichageAnnuaireNonAffectes()
{
	var affine=document.getElementById('txtRecherche');
	var myAjax1 = new Ajax.Updater
	(
		'affineAnnuaire', 
		'incl_liste_annuaire_non_affectes.htm', 
		{
			method: 'get', 
			parameters: 'affine=' + affine.value
		}
	);

}


