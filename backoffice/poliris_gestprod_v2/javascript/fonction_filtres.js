//Création Amine.DAGHMOURI le 20/05/2010
//Permet de modifier un libellé de filtre
function ModiLibelleFiltre(idFiltre)
{
	popup( 'filtre_modifLibelle_filtre','filtre_modifLibelle_filtre.htm?idFiltre='+idFiltre, 550, 300, false );	
  
}

//Création : Amine.DAGHMOURI le 20/05/2010
//Permet d'ouvrir une popup permettant d'ajouter une nouvelle valeur de filtre
function ajoutValeurFiltre(idFiltre)
{
	popup( 'filtre_valeur_filtre1','filtre_valeur_filtre1.htm?&idFiltre=' +idFiltre, 550, 320, false );	
}


//Création Amine.DAGHMOURI le 20/05/2010
//Permet de modifier une valeur de filtre
function ModifierValFiltre(idValeur)
{
	popup( 'filtre_modifvaleur_filtre','filtre_modifvaleur_filtre.htm?idValeur='+idValeur, 500, 320, false );	
}


//Création Amine.DAGHMOURI le 21/05/2010
//Permet de sauvegrader la modification des libellés de filtre
function SauvModifyLBLFiltre()
{
	var frm=document.getElementById('formulaire2');
	var u=document.getElementById('u');
	frm.u.value='GDP2:MODIFIER_FILTRE';
	if(frm)
	{
		frm.submit();
//		window.opener.location.href = window.opener.location.href;
//		window.close();
	}
	else
	{
		alert('Erreur lors de la modification de la valeur d\'un filtre(Voir variable frm)');
	}

}
//Création Amine.DAGHMOURI le 21/05/2010
//Permet de sauvegarder l'ajout des libellés à un filtre
function SauvAjoutLibellesFiltre()
{
	var frm=document.getElementById('formulaire2');
	var u=document.getElementById('u');
	frm.u.value='GDP2:AJOUT_LIBELLE_FILTRE';
	if(frm)
	{
		frm.submit();
		window.opener.location.href = window.opener.location.href;
	}
	else
	{
		alert('Erreur lors de la modification de la valeur d\'un filtre(Voir variable frm)');
	}

}

//Création Amine.DAGHMOURI le 21/05/2010
//Permet de sauvegrader la modification d'une valeur de filtre
function SauvModifyValFiltre()
{
	var frm=document.getElementById('formulaire2');
	var u=document.getElementById('u');
	
	//frm.u.value='GDP2:MODIFIER_VALEUR_FILTRE';
	if(frm)
	{
		frm.submit();
		
		//setTimeout(reloadPage, 1500);
		
	}
	else
	{
		alert('Erreur lors de la modification de la valeur d\'un filtre(Voir variable frm)');
	}

}

function reloadPage()
{
	window.opener.location.reload();self.close();
		//window.opener.location.href = window.opener.location.href;
		//window.close();
}

//Création Amine.DAGHMOURI le 20/05/2010
//Permet d'ajouter ou de modifier une valeur de filtre
function ajoutModifValFiltre()
{
	var btnValeurFiltre=document.getElementById('btnAjouterValeurFiltre');
	if (btnValeurFiltre.value=='Modifier valeur filtre')
	{
		SauvModifyValFiltre();
	}
	else
	{
		insertValtFiltre();
	}
}

//Création par Amine.DAGHMOURI le 26/05/2010
//Permet de supprimer un filtre
function deleteFiltre(formName)
{
	var texte2 = "Etes vous sur de vouloir supprimer ce filtre et toutes les données associées ?";
	if (confirm(texte2))
	{
		var frm=document.getElementById(formName);
		
	if(frm)
		{
			frm.submit();
			window.opener.location.href = window.opener.location.href;
		}
		else
		{
			alert('Erreur lors de la suppression du filtre(Voir variable frm)');
		}
	}
}

//Création par Amine.DAGHMOURI le 21/05/2010
//Permet de supprimer des libellés de filtre
function suppressionLibelleFiltre(formName)
{
	var texte2 = "Etes vous sur de vouloir supprimer ces libellés de filtre et les valeurs associées ?";
	if (confirm(texte2))
	{
		var frm=document.getElementById(formName);
		
	if(frm)
		{
			frm.submit();
			window.opener.location.href = window.opener.location.href;
			//window.opener.location.reload(true);
		}
		else
		{
			alert('Erreur lors de la suppression du libellé filtre(Voir variable frm)');
		}
	}
}

//Création par Amine.DAGHMOURI le 21/05/2010
//Permet de supprimer des valeur de libellés de filtre
function suppressionValFiltre(formName)
{
	var texte2 = "Etes vous sur de vouloir supprimer ces valeurs de filtre ?";
	if (confirm(texte2))
	{
		var frm=document.getElementById(formName);
		
		if(frm)
		{
			frm.submit();
			window.opener.location.href = window.opener.location.href;
		}
		else
		{
			alert('Erreur lors de la suppression de la valeur du filtre(Voir variable frm)');
		}
	}
}

//Création : Amine.DAGHMOURI le 20/05/2010
//Permet d'inserer une valeur d'un filtre
function insertValtFiltre()
{
	var frm=document.getElementById('formulaire2');
	frm.u.value='GDP2:AJOUT_VALEUR_FILTRE';
	var iddfiltre=document.getElementById('idFiltre');
	if(frm)
		{
			frm.submit();
			window.opener.location.href = window.opener.location.href;

		}
		else
		{
			alert('Erreur lors de l\'insertion d\'un filtre(Voir variable frm)');
		}
}

////Création Amine.DAGHMOURI le 20/05/2010
function SauvModifyLibelleFiltre()
{
	var frm=document.getElementById('formulaire2');
	var u=document.getElementById('u');
	frm.u.value='GDP2:MODIFIER_VALEUR_FILTRE';
	if(frm)
	{
		frm.submit();
		window.opener.location.href = window.opener.location.href;
	}
	else
	{
		alert('Erreur lors de la modification de la valeur d\'un filtre(Voir variable frm)');
	}

}

//Permet de modifier une valeur de filtre
function modifyvaleurFiltre(idValeur)
{
	var txtLibelle=document.getElementById('txtLibellevaleurFiltre');
	var lstLangue=document.getElementById('lstlangue');
	var txtLangue=document.getElementById('txtLangue' + idValeur);
	var txtVFLibelle=document.getElementById('txtValeurFiltre' + idValeur);
	var btnValeurFiltre=document.getElementById('btnAjouterValeurFiltre');
	var idValeurFiltre=document.getElementById('idValeurFiltre');
	idValeurFiltre.value=idValeur;
	txtLibelle.value=txtVFLibelle.value;
	selectedValueModify(lstLangue,txtLangue);
	btnValeurFiltre.value='Modifier valeur filtre';
}




//Permet de modifier une valeur de filtre
function SauvModifyValeurFiltre()
{
	var frm=document.getElementById('formulaire2');
	var u=document.getElementById('u');
	frm.u.value='GDP2:MODIFIER_VALEUR_FILTRE';
	if(frm)
	{
		frm.submit();
		window.opener.location.href = window.opener.location.href;
	}
	else
	{
		alert('Erreur lors de l\'insertion d\'un filtre(Voir variable frm)');
	}

}



//Permet d'ajouter ou de modifier un filtre
function ajoutModifValeurFiltre()
{
	var btnValeurFiltre=document.getElementById('btnAjouterValeurFiltre');
	if (btnValeurFiltre.value=='Modifier valeur filtre')
	{
		SauvModifyValeurFiltre();
	}
	else
	{
		insertValeurtFiltre();
	}
}


//Permet de fermr les div de langue lorsque l'on passe d'un filtre a l'autre pour la modification
function fermeDivLangue()
{
	var langue='Allemand,Anglais,Chinois,Espagnol,Hollandais,Italien,Russe';
	var reg=new RegExp("[,]+", "g");
	var tableau=langue.split(reg);
	for (var i=0; i<tableau.length; i++) 
	{
		if(tableau[i]!='Français')
		{
			div=document.getElementById(tableau[i]);
			div.style.display='none';
		}
	}
}

//Permet de selectionner une valeur dans une liste
function selectedValueModify(select,val)
{
	for (i = 0; i < select.options.length; i++)
	{
		if (select.options[i].text==val.value) 
		{
			select.options[i].selected=true;
		}
	}
}


//Permet de selectionner dans une liste les id fournit en parametre, select correspond a la liste		
function selectOptionsToGet (select,id)
 {
	var selOptions  = new Array();
	var reg=new RegExp("[,]+", "g");
	var tableauIdLangue=id.split(reg);
	for(j=0; j< tableauIdLangue.length;j++)
	{
		for (i = 0; i < select.options.length; i++)
		{
			if(i!=0)
			{
				if (select.options[i].value==tableauIdLangue[j]) 
				{
					selOptions[selOptions.length] = select.options[i];
				}
			}
		}
	}
	return selOptions;
}


//Permet de recupere la liste des nouvelles langues ajouter lors d'une modification de filtre
function ajouterNouvelleLangue(liste,tabIdLangue)
{
	var newId=0;//contient la liste des id des nouvelles langues
	var exist=0;//si=0 alors nouvelle langue, si=1 alors langue deja existante
		for (var i=0; i< liste.length; i++) 
		{
			exist=0;
			for (var j=0; j<tabIdLangue.length; j++) 
			{
				if(tabIdLangue[j]!=1)
				{
					if(liste.options[i].value==tabIdLangue[j])
					{
						exist=1;//La langue existe deja donc on sort de la boucle for
						break;
					}
				}
			}
			if(exist==0)
			{
				if (liste.options[i].value!=0)//On exclut la valeur zero de la liste car c le titre de la liste
				{
					if(newId==0)
					{
						newId=liste.options[i].value;
					}
					else
					{
						newId=newId + ',' + liste.options[i].value;
					}
				}
			}
		}	
	
	return newId;
}

//Permet d'annuler une modification 
function annuleModif()
{
	var frm=document.getElementById('formulaire2');
	if(frm)
	{
		frm.u.value='id3:redirect';
		frm.submit();
	}
}




//Permet de modifier un filtre
function modifyFiltre(idfiltrederecherchelangue,idfiltrederecherche)
{
	var langueFiltre=document.getElementById('langueFiltre' + idfiltrederecherchelangue); //variable contenant l'ensemble des langues disponibles pour un filtre
	var libellesFiltre;
	var valueLibelleFiltre=document.getElementById('libellesFiltre' + idfiltrederecherchelangue);// variable contenant les libelles  de filtres pour l'ensemble des langues existantes
	var iIdFiltrederecherche=document.getElementById('idfiltrederecherche');
	var iIdFiltrederecherchelangue=document.getElementById('idfiltrederecherchelangue');
	var btnvalider=document.getElementById('btnAjouterFiltre');
	var div;
	var divAnnuleModif=document.getElementById('divAnnuleModif');
	var tblAutresLangue=document.getElementById('tblAutresLangue');
	var lstLangue=document.getElementById('lstlangueAAjouter');
	var lstLangueAdd=document.getElementById('lstlangueAjouter');
	var reg=new RegExp("[,]+", "g");
	var tableauLangue=langueFiltre.value.split(reg);//Tableau contenant les libelles des langues disponible pour un filtre
	var tableauLibelle=valueLibelleFiltre.value.split(reg);// Tableau contenant les libelles des filtres pour chaque langue
	var idlangue;
	
	btnvalider.value='Modifier Filtre';
	iIdFiltrederecherche.value=idfiltrederecherche;
	iIdFiltrederecherchelangue.value=idfiltrederecherchelangue;
	fermeDivLangue(); //permet de rrefermer l'ensemble des div de saisie des langues
	deleteAllListe(lstLangueAdd,lstLangue); //Permet de reiniatilser les liste de langues
	divAnnuleModif.style.display='block';
	for (var i=0; i<tableauLangue.length; i++) //pour chaque libelle de langue
	{
		div=document.getElementById(tableauLangue[i]); //Contient le div de la langue contenu ds le tableau
		if(tableauLangue[i]!='Français')//pour chaque langue differente de francais car francais es la langue par defaut donc la zone de saisi est visible
		{
			if(idlangue==null) //recupere l'ensemble des id des langues existantes ds le tableau
			{
				idlangue=div.getAttribute("name");
			}
			else
			{
				idlangue=idlangue + ',' + div.getAttribute("name"); //
			}
			tblAutresLangue.style.display='block';
			div.style.display='block';//On affiche le div de la langue en question
			libellesFiltre=document.getElementById('txtLibelleFiltre' + tableauLangue[i]);
			libellesFiltre.value=tableauLibelle[i];//met a jour le champs texte de la langue du filtre, avec la valeur du libelle du filtre pour cette langue
		}
		else
		{
			libellesFiltre=document.getElementById('txtLibelleFiltreFrancais');
			libellesFiltre.value=tableauLibelle[i];//met a jour le champs texte de la langue francaise du filtre, avec le contenu du libelle pour le francais.
		}
	}
	if(tableauLangue.length>1)//superieur a 1 car on exclut la valuer zero contenant le titre de la liste, la suite permet d'ajouter dans la liste "langue ajoutées" l'ensemble des langues existantes pour ce filtre
	{
		selOpt=selectOptionsToGet(lstLangue,idlangue);
		var selValues = new Array();
		if(selOpt.length>0)
		{
			selValues = getSelectedValues(lstLangue);
			for(i=0;i<selOpt.length;i++)
			{
				option = selOpt[i];
				lstLangue.removeChild(option);					
				lstLangueAdd.appendChild(option);
			}
		}
	}
}

//Permet de supprimer les langues de la liste non active pour le filtre en question lors d'une modification 
function deleteAllListe(select,select2)
{
	selOpt=getSelectedAllOptions(select);
	var selValues = new Array();
	if(selOpt.length>0)
	{		
		selValues = getSelectedValues(select);
		for(i=0;i<selOpt.length;i++)
		{
			if(i!=0)
			{
				option = selOpt[i];
				maskLibelleFiltreLangue(selOpt[i].text);
				select.removeChild(option);	
				select2.appendChild(option);				
			}
		}
	}	
	validerSuppression(selOpt);
	return selValues;
}


//Permet de supprimer une valeur de filtre
function suppressionValeurFiltre(Idvaleur)
{
	var texte2 = "Etes vous sur de vouloir supprimer cette valeur de filtre ?";
	if (confirm(texte2))
	{
		var frm=document.getElementById('formulaire2');
		var u=document.getElementById('u');
		frm.u.value='GDP2:SUPPRIMER_VALEUR_FILTRE';
		var idValeurFiltre=document.getElementById('idValeurFiltre');
		idValeurFiltre.value=Idvaleur;
		if(frm)
		{
			frm.submit();
			window.opener.location.href = window.opener.location.href;
			//window.opener.location.reload(true);
		}
		else
		{
			alert('Erreur lors de l\'insertion d\'un filtre(Voir variable frm)');
		}
	}
}

//Création Amine.DAGHMOURI le 27/05/2010
//Permet de supprimer toutes le valeur des libellé filtre
function delAllValFiltre(formName)
{
	var texte2 = "Etes vous sur de vouloir supprimer toutes les valeurs associées à ces libellés filtre ?";
	if (confirm(texte2))
	{
		var frm=document.getElementById(formName);
		
	if(frm)
		{
			frm.submit();
			window.opener.location.href = window.opener.location.href;
			//window.opener.location.reload(true);
		}
		else
		{
			alert('Erreur lors de la suppression des valeurs de ce libellé filtre(Voir variable frm)');
		}
	}
}

//Création Amine.DAGHMOURI le 20/05/2010
//Permet de supprimer un filtre
function suppressionFiltre(idfiltre,idlibellefiltre)
{
//	var texte2 = "Etes vous sur de vouloir supprimer ce filtre, cette action supprimera également toutes les annonces associées ?";
//	if (confirm(texte2))
//	{
//		var frm=document.getElementById('formulaire2');
		var frm=document.getElementById('formulaire2');
		frm.u.value='GDP2:SUPPRIMER_FILTRE';
		var idFiltre=document.getElementById('IDFILTRE');
		idFiltre.value=idfiltre;
		var idLibelleFiltre=document.getElementById('IDLIBELLEFILTRE');
		idLibelleFiltre.value=idlibellefiltre;
		if(frm)
		{
			frm.submit();
		}
		else
		{
			alert('Erreur lors de la suppression d\'un filtre(Voir variable frm)');
		}
	//}
}

//Permet de supprimer un filtre
function supprimerFiltre(idfiltrederecherche,idfiltrederecherchelangue)
{
	var texte2 = "Etes vous sur de vouloir supprimer ce filtre, cette action supprimera également toutes les annonces associées ?";
	if (confirm(texte2))
	{
		var frm=document.getElementById('formulaire2');
		var u=document.getElementById('u');
		frm.u.value='GDP2:SUPPRIMER_FILTRE';
		var iIdFiltrederecherche=document.getElementById('IDFILTRE');
		iIdFiltrederecherche.value=idfiltrederecherche;
		var iIdFiltrederecherchelangue=document.getElementById('IDLIBELLEFILTRE');
		iIdFiltrederecherchelangue.value=idfiltrederecherchelangue;
		if(frm)
		{
			frm.submit();
		}
		else
		{
			alert('Erreur lors de l\'insertion d\'un filtre(Voir variable frm)');
		}
	}
}

//permet d'inserer ou de modifier un filtre
function insertModifyFiltre()
{
	var lstLangueAdd=document.getElementById('lstlangueAjouter');//Liste des langues disponible
	var iIdFiltrederecherchelangue=document.getElementById('idfiltrederecherchelangue');//Represente l'id d'un filtrederecherchelangue
	var newIdLangue=document.getElementById('newIdLangue');//lors d'une modification de filtre contient les idlangue a ajouter
	var idLangue=document.getElementById('idLangue');
	var frm=document.getElementById('formulaire2');
	var btnvalider=document.getElementById('btnAjouterFiltre');
	if (testNullLibelleLangue(lstLangueAdd)==false)
	{
		if(btnvalider.value=='Modifier Filtre') //code executer lors de la modification de filtre
		{
			var idLangueFiltre=document.getElementById('IdlangueFiltre' + iIdFiltrederecherchelangue.value);//Permet de recupere pour un filtre la liste des idlangue associes
			var reg=new RegExp('[,]+', 'g');
			var tableauIdLangue=idLangueFiltre.value.split(reg);
			var newId=ajouterNouvelleLangue(lstLangueAdd,tableauIdLangue);//Permet de recuperer les id des langues qui viennent d'etre ajoutées
			if (newId.length>0)
			{
				alert('POur cette nouvelle langue, ne pas oublier d\'ajouter une ou plusieurs valeurs, pour ce filtre');
			}
			newIdLangue.value=newId;
				frm.u.value='GDP2:MODIFIER_FILTRE';
		}
		else //code executer pour l'ajout
		{
			idLangue.value=recupIdLangue(lstLangueAdd);
			frm.u.value='GDP2:AJOUT_FILTRE';		
		}
		if(frm)
		{
			frm.submit();
		}
		else
		{
			alert('Erreur lors de l\'insertion d\'un filtre(Voir variable frm)');
		}
	}
	else
	{
		alert('Le champ libellé filtre ne doit pas être vide');
	}
}




//Permet d'inserer une valeur d'un filtre
function insertValeurtFiltre()
{
	var frm=document.getElementById('formulaire2');
	var idlangue=document.getElementById('lstlangue');
	var id=document.getElementById('idfiltrederecherche');
	if(frm)
	{
		if(idlangue.value==0)
		{
			alert('Veuillez choisir une langue correcte');
		}
		else
		{
			frm.submit();
			window.opener.location.href = window.opener.location.href;
		}
	}
	else
	{
		alert('Erreur lors de l\'insertion d\'un filtre(Voir variable frm)');
	}
}


//Permet de retourner une liste des langues selectionnées			
function getSelectedOptions (select)
 {
	var selOptions  = new Array();
	for (i = 0; i < select.options.length; i++)
	{
		if(i!=0)
		{
			if (select.options[i].selected) 
			{
				selOptions[selOptions.length] = select.options[i];
			}
		}
	}
	return selOptions;
}

//Permet de retourner une liste des langues selectionnées			
function getOptions(select)
 {
	var selOptions  = new Array();
	for (i = 0; i < select.options.length; i++)
	{
		if(i!=0)
		{
			selOptions[selOptions.length] = select.options[i];

		}
	}
	return selOptions;
}

//Permet de retourner toute les langues			
function getSelectedAllOptions(select)
 {
	var selOptions  = new Array();
	for (i = 0; i < select.options.length; i++)
	{
		selOptions[selOptions.length] = select.options[i];

	}
	return selOptions;
}
function recupIdLangue(lstLangue)
{
	var selValues = getSelectedValues(lstLangue);	
	if(selValues.length>0)
	{
		selValues = getSelectedValues(lstLangue);
		for(i=0;i<selValues.length;i++)
		{
			if(selValues[i]!=0)
			{
				if(i==1)
				{
					option=selValues[i];
				}
				else
				{
					option = option + ',' + selValues[i];	
				}
			}
		}
	}
	return option;
}

//Permet d'ajouter une langue
function ajouterLangue(lstLangue, lstLangueAdd)
{
	selOpt = getSelectedOptions(lstLangue);		
	var divAnnuleModif=document.getElementById('divAnnuleModif');
	var selValues = new Array();
	if(selOpt.length>0)
	{
		divAnnuleModif.style.display='block';
		selValues = getSelectedValues(lstLangue);
		for(i=0;i<selOpt.length;i++)
		{
			option = selOpt[i];
			getLibelleFiltreLangue(selOpt[i].text);
			lstLangue.removeChild(option);						
			lstLangueAdd.appendChild(option);
		}
	}
	else
	{
		divAnnuleModif.style.display='none';
	}
}

//permet de tester si les libelles de langues sont nulles
function testNullLibelleLangue(lst)
{
	var retour=false;
	selOpt = getOptions(lst);
	selOpt.unshift('Francais');
	if(selOpt.length>0)
	{
		for(i=0;i<selOpt.length;i++)
		{
			option = selOpt[i];
			if(i==0)
			{
				if (document.getElementById('txtLibelleFiltre' + option).value.length==0)
				{
					retour=true;
					break;
				}
			}
			else
			{
				if (document.getElementById('txtLibelleFiltre' + option.text).value.length==0)
				{
					retour=true;
					break;
				}
			}
		}
	}
	else
	{
		retour=true;
	}
	return retour;	
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

//Permet de rendre visible le div contenant le textbox de la langue selectionner
function getLibelleFiltreLangue(value)
{
	var tblAutresLangue=document.getElementById('tblAutresLangue');
	tblAutresLangue.style.display='block';
	var divLibelleLangue=document.getElementById(value);
	divLibelleLangue.style.display='block';
	
}

//Permet de masquer  le div contenant le textbox de la langue selectionner
function maskLibelleFiltreLangue(value)
{
	var divLibelleLangue=document.getElementById(value);
	divLibelleLangue.style.display='none';
	var lstLangue=document.getElementById('lstlangueAjouter');
	var tblAutresLangue=document.getElementById('tblAutresLangue');
	if (lstLangue.length==2)
	{
		tblAutresLangue.style.display='none';
	}
}



//Permet de supprimer une langue
function supprimerLangue(lst1,lst2)
{
	selOpt = getSelectedOptions(lst1);
	var idsuppr=document.getElementById('idlangueSuppr');
	var selValues = new Array();
	if(selOpt.length>0)
	{		
		selValues = getSelectedValues(lst1);
		for(i=0;i<selOpt.length;i++)
		{
			if(idsuppr.value==0)
			{
				idsuppr.value=selOpt[i].value;

			}
			else
			{
				idsuppr.value=idsuppr.value + ',' + selOpt[i].value;
			}
			option = selOpt[i];
			maskLibelleFiltreLangue(selOpt[i].text);
			lst1.removeChild(option);						
			lst2.appendChild(option);
		}
	}	
	validerSuppression(selOpt);
	return selValues;
}

//Permet de supprimer une langue
function supprimerAllLangue(lst1,lst2)
{
		
	selOpt = getSelectedAllOptions(lst1);			
	var selValues = new Array();
	var divAnnuleModif=document.getElementById('divAnnuleModif');
	if(selOpt.length>0)
	{	
		if(document.getElementById('btnAjouterFiltre').value!='Modifier Filtre')
		{
			divAnnuleModif.style.display='none';
		}

		selValues = getSelectedValues(lst1);
		for(i=0;i<selOpt.length;i++)
		{
			if(i!=0)
			{
				option = selOpt[i];
				maskLibelleFiltreLangue(selOpt[i].text);
				lst1.removeChild(option);						
				lst2.appendChild(option);
			}
		}
	}	
	validerSuppression(selOpt);
	return selValues;
}

//Permet de valider une suppresion d'une liste
function validerSuppression(listeIdLangue)
{
	var lstLangueAjouter=document.getElementById('lstlangueAjouter');
	var tabIdFiltreSel ='';
	for (i = 0; i < listeIdLangue.length; i++)
	{
		if(tabIdFiltreSel=='')
		{
			tabIdFiltreSel=listeIdLangue[i].value;
		}
		else
		{
			tabIdFiltreSel=tabIdFiltreSel + ',' + listeIdLangue[i].value;
		}
	}
}

//permet d'ajouter l'ensemble des langues existantes dans la base
function ajouterAllLangue(lstLangue, lstLangueAdd)
{
	selOpt = getSelectedAllOptions(lstLangue);
	if(selOpt.length>0)
	{
		divAnnuleModif.style.display='block';
		for(i=0;i<selOpt.length;i++)
		{
			if (i!=0)
			{
				option = selOpt[i];
				getLibelleFiltreLangue(selOpt[i].text);
				lstLangue.removeChild(option);						
				lstLangueAdd.appendChild(option);
			}
		}
	}	
}





//Permet d'ouvrir une popup permettant d'ajouter une nouvelle valeur de filtre
//Param
	//idagence_accueillante:est l'id de l'agence accueillante
function ajouteNewValeurFiltre(idFiltreDeRecherche,nomFiltre)
{
	annuleModif();
	popup( 'filtre_valeur_filtre','filtre_valeur_filtre.htm?idfiltrederecherche=' + idFiltreDeRecherche +'&NomFiltre=' + nomFiltre , 800, 800, false );	
}


//Permet d'afficher une valeur filtre d'un filtre
//param
//iIdFiltreRecherchelangue:es l'idFiltreRecherchelangue
function afficheValeurFiltre(iIdFiltreRecherchelangue)
{
	var btReduction=document.getElementById('BtReduction' + iIdFiltreRecherchelangue);
	var idFiltrederecherchelangue=document.getElementById('idFiltrederecherchelangue');
	var divValeurFiltre=document.getElementById('valeurFiltre' + iIdFiltreRecherchelangue);
	if(iIdFiltreRecherchelangue)
	{
		if(btReduction)
		{	
			if(divValeurFiltre)
			{
				if(btReduction.value=='-')
				{
					divValeurFiltre.style.display='none';
					//new Effect.BlindUp	('agence_accueilli_'+iIdfusionagenceaccueillante, 0.5);
					btReduction.value='+';
				}
				else
				{
					btReduction.value='-';
					divValeurFiltre.style.display='block';
					idFiltrederecherchelangue=iIdFiltreRecherchelangue.value;
					//new Effect.BlindDown('agence_accueilli_'+iIdfusionagenceaccueillante, 0.5);
				}
			}
			else
			{
				alert('Erreur lors de l\'affichage des valeurs filtres(Voir variable divValeurFiltre)');
			}
		}
		else
		{
			alert('Erreur lors de l\'affichage des valeurs filtres(Voir variable btReduction)');
		}
	}
	else
	{
		alert('Erreur lors de l\'affichage des valeurs filtres(Voir variable idfusionagenceaccueillante)');
	}
}


