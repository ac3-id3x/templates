function createImages() {
	var posDX=4+Math.random()*wScreen;
	var posDY=1+scrollY;
	idimage=images.length;
	var sizeimage=3+Math.random()*13;
	var image=createDiv(posDX,posDY,idimage,sizeimage);
	images[images.length]= new Array(image,posDX,posDY,sizeimage);
	nbImages++;
	imagetimeout= setTimeout("createImages()", 30);
}

function majImages() {
	var incposy=1;
	var limiteecran=(scrollY+hScreen)-3;
	for (i=0; i<images.length; i++) {
	var incposx=0;
	incposy=parseInt(images[i][3]/3);
	var sensposx=parseInt(1+Math.random()*3);
	   switch (sensposx) {
	   case 1: incposx= -1;
	   break;
	   case 2: incposx=0;
	   break;
	   case 3: incposx=1;
	   }
	  if (images[i][2]<limiteecran) { 
	  var Fposx=images[i][1]+incposx;
	  if (Fposx>wScreen) { Fposx=wScreen; }
	  images[i][1]=Fposx;
	  images[i][2]=images[i][2]+incposy;
	  }
	  else {
	  var posDX=1+Math.random()*wScreen;
	  images[i][1]=posDX;
	  images[i][2]=scrollY;
		if (imagetimeout) {
		clearTimeout(imagetimeout);
		}
	  }
	  images[i][0].style.left=images[i][1]+"px";
	  images[i][0].style.top=images[i][2]+"px";
	}
	 majtimeout=setTimeout("majImages()", 35);
}
function createDiv(posx,posy,id,sizeImage) {
	  var div=document.createElement("div");
	  var pzindex=1000+id;
	  div.style.position="absolute";
	  div.style.zIndex="10000"
	  div.id="flc"+id;
	  div.name="flc"+id;
	  div.style.border="none";
	  div.style.display="block";
	  div.style.backgroundColor="transparent";
	  div.style.left=posx+"px";
	  div.style.top=posy+"px";  
	  div.style.zindex=pzindex;
	  document.body.appendChild(div);
	  var retour =document.getElementById("flc"+id);
	  var imagetype="<img border='0' src='"+ urlImage + "' style='width:"+sizeImage+"px;' />";
	  retour.innerHTML=imagetype;
	  return (retour);
}

function tombeImage(dateDebut,dateFin) {
	if ((dateDebut != "") && (dateFin != "")) {
		var debutJour = dateDebut.substring(0,dateDebut.indexOf("/"));
		var debutMois = dateDebut.substring(dateDebut.indexOf("/")+1,dateDebut.length)-1;
		var finJour = dateFin.substring(0,dateFin.indexOf("/"));
		var finMois = dateFin.substring(dateFin.indexOf("/")+1,dateFin.length)-1;
		var date = new Date();
		var annee = date.getFullYear();
		if (finMois-debutMois < 0) {
		var annee2 = annee + 1 
		}
		else {
		var annee2 = annee
		}
		var dateDebut = new Date(annee,debutMois,debutJour)
		var dateFin = new Date(annee2,finMois,finJour)
		var dateFin = dateFin.setDate(dateFin.getDate() +1)
		if ((date > dateDebut) && (date < dateFin)) {
			var test =  new Array((document.documentElement && document.documentElement.scrollWidth) ? document.documentElement.scrollWidth : (document.body.scrollWidth > document.body.offsetWidth) ? document.body.scrollWidth : document.body.offsetWidth,(document.documentElement && document.documentElement.scrollHeight) ? document.documentElement.scrollHeight : (document.body.scrollHeight > document.body.offsetHeight) ? document.body.scrollHeight : document.body.offsetHeight);
			wScreen=test[0] - 17;
			hScreen=test[1] - 17;
			createImages();
			majImages();
		}
	}
}
	var images=new Array();
	var nbImagesMax=300;
	var nbImages=0;
	var imagetimeout;
	var majtimeout;
	var scrollY=0;
	var dateDebut = "30/11" // Date de départ
	var dateFin = "06/01" // Date d'arrêt (incluse)
	var urlImage="/z/webagency/A_Nexi/belvia-immobilier/js/flocon.gif" //url de l'image