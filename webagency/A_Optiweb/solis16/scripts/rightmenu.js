//gestion du sous sous menu nos fiches pratiques
function initMenu() {
	var myMenu = document.getElementById("sm6");
	var elementList = myMenu.getElementsByTagName("LI");
	for(i=0;i<elementList.length;i++) {
		var el = elementList[i];
		if(elementList[i].className=="level1") {
			el.onmouseover = expandMenu;
			el.onmouseout = foldMenu;
		}
	}
}

function expandMenu() {
	this.childNodes[2].style.display = "block";
}

function foldMenu() {
	this.childNodes[2].style.display = "none";
}