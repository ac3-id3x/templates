function getMouseOffset(target, ev){
	ev = ev || window.event;
	var docPos    = getPosition(target);
	var mousePos  = mouseCoords(ev);
	return {x:mousePos.x - docPos.x, y:mousePos.y - docPos.y};
}
	
function getPosition(e){
	var left = 0;
	var top  = 0;
	while (e.offsetParent){
		left += e.offsetLeft;
		top  += e.offsetTop;
		e = e.offsetParent;
	}
	left += e.offsetLeft;
	top  += e.offsetTop;
	return {x:left, y:top};
}
	
function mouseCoords(ev){
	if(ev.pageX || ev.pageY){
		return {x:ev.pageX, y:ev.pageY};
	}
	return {
		x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,
		y:ev.clientY + document.body.scrollTop  - document.body.clientTop
	};
}
	
function mouseMove(ev){
	ev = ev || window.event;
	var mousePos = mouseCoords(ev);
	if(dragObject){
		position(mousePos.x - mouseOffset.x,mousePos.y - mouseOffset.y);
		return false;
	}
}

function mouseUp(){
	if(dragObject){loadRing();}
	dragObject = null;
}
	
function makeDraggable(item){
	if(!item) return;
	item.onmousedown = function(ev){
		dragObject  = this;
		mouseOffset = getMouseOffset(this, ev);
		return false;
	}
}
	
function position(x,y) { 
	var RayX = parseInt(document.getElementById('cursorRay').style.left);
  if(x && RayX){
		deltaX = x - lastX;
		if((RayX + deltaX > 5) &&(RayX + deltaX < 102)){
			document.getElementById('cursorRay').style.left = RayX + deltaX + "px";
	  	document.getElementById('couronneRayon').value = parseInt((RayX + deltaX)/3.33);
	  }
	  lastX = x;
	}
}