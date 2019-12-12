// JavaScript Document
// JavaScript Document

<!--

var W3CDOM = (document.createElement && document.getElementsByTagName);

var mouseOvers = new Array();
var mouseOuts = new Array();

function init()
{
	if (!W3CDOM) return;
	/*var nav = document.getElementById('container');*/
	var inputImgs = document.getElementsByTagName('input');
	var imageImgs = document.getElementsByTagName('img');
	var imgs = new Array();
	for (var i=0; i<imageImgs.length; i++) {imgs.push(imageImgs[i]);}
	for (var i=0; i<inputImgs.length; i++) {imgs.push(inputImgs[i]);}
	//alert (imgs.length);
	for (var i=0; i<imgs.length; i++)
	{
		if (imgs[i].src.indexOf('.jpg') != -1) // On cible seulement les lments input de type image avec une extension de type .jpg
		{			
			// Get image name
			//alert ( (imgs[i].src.substring(imgs[i].src.lastIndexOf('/') + 1)).substring(0,(imgs[i].src.substring(imgs[i].src.lastIndexOf('/') + 1)).lastIndexOf('.')) );
			tmp=(imgs[i].src.substring(imgs[i].src.lastIndexOf('/') + 1)).substring(0,(imgs[i].src.substring(imgs[i].src.lastIndexOf('/') + 1)).lastIndexOf('.'));
			
			if ( tmp.indexOf('_') != -1) /* search all img have "_" */
			{
				if (tmp.substring(tmp.lastIndexOf('_')+1) == "n" )
					{
						//alert ( (imgs[i].src.substring(imgs[i].src.lastIndexOf('/') + 1)).substring(0,(imgs[i].src.substring(imgs[i].src.lastIndexOf('/') + 1)).lastIndexOf('.')) );
						imgs[i].onmouseover = mouseGoesOver;
						imgs[i].onmouseout = mouseGoesOut;
						mouseOuts[i] = new Image();
						mouseOuts[i].src = imgs[i].src;
						mouseOvers[i] = new Image();	
						
						/*	
						if (imgs[i].src.lastIndexOf('_') != -1) { mouseOvers[i].src = imgs[i].src.substring(0,imgs[i].src.lastIndexOf('_')) + "_over" + suffix;}
						else { mouseOvers[i].src = imgs[i].src.substring(0,imgs[i].src.lastIndexOf('.')) + "_over" + suffix;}
						*/
						var suffix = imgs[i].src.substring(imgs[i].src.lastIndexOf('.'));
						if (imgs[i].src.lastIndexOf('.') != -1) { mouseOvers[i].src = imgs[i].src.substring(0,imgs[i].src.lastIndexOf('_')) + "_o" + suffix;}
						imgs[i].number = i;
					}
			}
		}
	} //end for
} //end init

function initreset()
{
	if (!W3CDOM) return;
	var imgs = document.getElementsByTagName('img');
	for (var i=0; i<imgs.length; i++)
	{
		if (imgs[i].src.indexOf('.jpg') != -1) // On cible seulement les lments input de type image avec une extension de type .jpg
		{			
			tmp=(imgs[i].src.substring(imgs[i].src.lastIndexOf('/') + 1)).substring(0,(imgs[i].src.substring(imgs[i].src.lastIndexOf('/') + 1)).lastIndexOf('.'));
			
			if ( tmp.indexOf('_') != -1) /* search all img have "_" */
			{
				if (tmp.substring(tmp.lastIndexOf('_')+1) == "o" )
				{
					//alert ( (imgs[i].src.substring(imgs[i].src.lastIndexOf('/') + 1)).substring(0,(imgs[i].src.substring(imgs[i].src.lastIndexOf('/') + 1)).lastIndexOf('.')) );
					var suffix = imgs[i].src.substring(imgs[i].src.lastIndexOf('.'));
					var tmpimg= new Image();
						tmpimg.src=imgs[i].src.substring(0,imgs[i].src.lastIndexOf('_')) + "_n.jpg";
					imgs[i].src=tmpimg.src;
				}
			}
		}
	} //end for
} //end initreset

var fsub=false;
var mobj;
var osrc="";
function mouseGoesOver(fsub, mEvent) {
	if (checkIt("msie") != 0) { // use in IE
		if (fsub==true) {
			mobj.src=osrc;
			fsub=false;
		} else {
			this.src = mouseOvers[this.number].src;
		}
		osrc=event.srcElement.src;
		mobj=event.srcElement;
	}
	else {	// use in firefox
		if (fsub==true) {
			mobj.src=osrc;
			fsub=false;
		} else if (fsub=='')  {
			osrc=mEvent.target.src;
			mobj=mEvent.target;
		} else {
			this.src = mouseOvers[this.number].src;
		}
	}
}

function mouseGoesOut() {this.src = mouseOuts[this.number].src;	}

//-->

<!--
var detect = navigator.userAgent.toLowerCase();
var OS,browser,total,thestring;
var version = 0;

function checkIt(string)
{
	place = detect.indexOf(string) + 1;
	thestring = string;
	return place;
}

