
<SCRIPT language="Javascript"><!--
function submitPeriod(period, isPgSites, page, idlogin)
{
	var aDay1, aDay2, url, url2, idsites;
	var flag = true;

	if (isPgSites)
	{
		if (!document.forms[0].all || !document.forms[0].all.checked)
		{
			idsites = getIdsite();
			if (idsites == '')
			{
				alert('Vous devez sélectionner au moins un site.');
				return;
			}
		}
		else
		{
			idsites = 'all'+idlogin;
		}
	}

	if ( period.day1.value == '' )
	{
		alert('Vous devez remplir au moins le premier champ date.');
	}
	else
	{
		aDay1 = period.day1.value.split('/');

		if (aDay1[2] < 100)
			{
				if (aDay1[2] < 50 )
				{
					aDay1[2] = ('20' + aDay1[2]);
				}
				else
				{
					aDay1[2] = ('19' + aDay1[2]);
				}
			}

		if ( period.day2.value != '' )
		{
			aDay2 = period.day2.value.split('/');

			if (aDay2[2] < 100)
			{
				if (aDay2[2] < 50 )
				{
					aDay2[2] = ('20' + aDay2[2]);
				}
				else
				{
					aDay2[2] = ('19' + aDay2[2]);
				}
			}

			if ( aDay1[2] > aDay2[2] )
				flag = false;
			else if ( aDay1[2] < aDay2[2] )
				flag = true;
			else if ( aDay1[1] > aDay2[1] )
				flag = false;
			else if ( aDay1[1] < aDay2[1] )
				flag = true;
			else if ( aDay1[0] >= aDay2[0] )
				flag = false;
			else
				flag = true;
		}
		if ( flag == true )
		{
			for( i=0; i<2; i++)
			{
				if (aDay1[i].length == 1)
				{
					aDay1[i] = '0' + aDay1[i];
				}
			}

			url = '/$$IF:REP:3$$$$REP:3$$/$$END$$' +
						aDay1[2] + '-' +
						aDay1[1] + '-' +
						aDay1[0];

			if (period.day2.value != '')
			{
				for(i=0; i<2; i++)
				{
					if (aDay2[i].length == 1)
					{
						aDay2[i] = '0' + aDay2[i];
					}
				}

				url = url + ',' +
					aDay2[2] + '-' +
					aDay2[1] + '-' +
					aDay2[0];
			}
			url2 = '/';

			if (isPgSites) url2 += idsites;

			url2 += '$$REP:1$$/'+page;
			location.href = url + url2;

		}
		else
		{
			alert('La première date saisie doit être strictement antérieure à la seconde.');
		}
	}
}
function getIdsite()
{
	with(top.document)
	{
		var j = 0;
		idsite= new Array();
		for (i=0; i<forms[0].elements.length; i++)
		{
			if (forms[0].elements[i].name == 'idsite')
			{
				if ( (forms[0].elements[i].type != 'checkbox') || (forms[0].elements[i].type == 'checkbox' && forms[0].elements[i].checked) )
				{
					idsite[j] = forms[0].elements[i].value;
					j++;
				}
			}
		}
		return idsite.join();
	}
}

function desat(url)
{
	var idsites = getIdsite();
	if (idsites != '')
	{
		var result = confirm('Confirmez-vous l\'effacement des sites sélectionnés ?\n\nATTENTION : les données de ces sites seront aussi effacées.');
		if (result)
		{
			location.href = '/desat.htm?idsite=' + idsites + '&url=' + url;
		}
	}
	else
	{
		alert('Vous devez sélectionner au moins un site.');
	}
}

function setIsActive(url, isActive)
{
	var idsites = getIdsite();
	if (idsites != '')
	{
		var result;

		if (isActive == '1')
			result = confirm('Confirmez-vous la réactivation des sites sélectionnés ?\n\n(les statistiques de ces sites seront de nouveau calculées)');
		else
			result = confirm('Confirmez-vous la désactivation des sites sélectionnés ?\n\nATTENTION : les statistiques de ces sites ne seront plus calculées.');

		if (result)
		{
			location.href = '/set_isactive.htm?idsite=' + idsites + '&isactive=' + isActive + '&url=' + url;
		}
	}
	else
	{
		alert('Vous devez sélectionner au moins un site.');
	}
}
function isDate(Champ)
{
	var tab_date= "";
	var slash = "/";
	if (Champ != "")
	{
		tab_date = Champ.split(slash);
		if (tab_date.length == 3)
		{
			maDate = new Date(tab_date[2],(tab_date[1])-1,tab_date[0]);
			if ( (maDate.getDate() == tab_date[0]) &&  (maDate.getMonth() == (tab_date[1] - 1)) &&(maDate.getFullYear() == tab_date[2]))
			return true;
			else
			return false;
		}
		else return false;
	}
	else return false;
}
function transDate(champ)
{
	var tab = champ.split('/');
	if (tab.length == 3)
	{
		if (tab[0].length == 1) tab[0] = '0' + tab[0];
		if (tab[1].length == 1) tab[1] = '0' + tab[1];
		if (tab[2].length == 2)
		{
			if ( ( tab[2].indexOf('0') == 0 ) || ( tab[2].indexOf('1') == 0 ) ||( tab[2].indexOf('2') == 0 ) || ( tab[2].indexOf('3') == 0 ) || ( tab[2].indexOf('4') == 0 ))
			{
				tab[2] = '20' + tab[2];
			}
			else
			{
				tab[2] = '19' + tab[2];
			}
		}
		return tab[0] + '/' + tab[1] + '/' + tab[2];
	}
	return champ;
}
// --></SCRIPT>