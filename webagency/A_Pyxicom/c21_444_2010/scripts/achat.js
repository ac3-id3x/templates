var a=0;
var b=1;
function lienAchat(l){
	document.getElementById('lienAchat').style.background='url(/z/webagency/A_Pyxicom/c21_444_2010/images/bg_titreAcheter.gif) right 0 no-repeat ';
	document.getElementById('lienAchat').style.color='#686767';	
	if(l==3)
	{
		if(b==0)
		{
		document.getElementById('lienAchat').style.background='url(/z/webagency/A_Pyxicom/c21_444_2010/images/bg_titreProp.gif) right 0 no-repeat ';
		document.getElementById('lienAchat').style.color='#fff';
		}
	}
	if(l==1)
	{
	b=1;
	a=0;
	document.getElementById('achat').style.display="block";
	document.getElementById('espace').style.display="none";
	document.getElementById('lienAchat').style.background='url(/z/webagency/A_Pyxicom/c21_444_2010/images/bg_titreAcheter.gif) right 0 no-repeat ';
	document.getElementById('lienEspace').style.background='url(/z/webagency/A_Pyxicom/c21_444_2010/images/bg_titreProp.gif) right 0 no-repeat ';
	document.getElementById('lienEspace').style.color='#fff';
	document.getElementById('lienAchat').style.color='#686767';	
	}
}
function lienEspace(l){
	document.getElementById('lienEspace').style.background='url(/z/webagency/A_Pyxicom/c21_444_2010/images/bg_titreAcheter.gif) right 0 no-repeat ';
	document.getElementById('lienEspace').style.color='#686767';
	if(l==3)
	{
		if(a==0)
		{
		document.getElementById('lienEspace').style.background='url(/z/webagency/A_Pyxicom/c21_444_2010/images/bg_titreProp.gif) right 0 no-repeat ';
		document.getElementById('lienEspace').style.color='#fff';
		}
	}
	if(l==1)
	{
	a=1;
	b=0;
	document.getElementById('achat').style.display="none";
	document.getElementById('espace').style.display="block";
	document.getElementById('lienEspace').style.background='url(/z/webagency/A_Pyxicom/c21_444_2010/images/bg_titreAcheter.gif) right 0 no-repeat ';
	document.getElementById('lienAchat').style.background='url(/z/webagency/A_Pyxicom/c21_444_2010/images/bg_titreProp.gif) right 0 no-repeat ';
	document.getElementById('lienEspace').style.color='#686767';
	document.getElementById('lienAchat').style.color='#fff';
	}
}