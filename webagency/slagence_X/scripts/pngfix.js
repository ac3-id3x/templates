//$$DYN:ID3:NOFOOTER$$
// Correctly handle PNG transparency in Win IE 5.5 or higher.
// http://homepage.ntlworld.com/bobosola. Updated 31-May-2004
// Modifications par LLA / Poliris

// *************************************************
// This extended version includes imagemap
// and input image functionality.
// It also requires a 1px transparent GIF
// *************************************************

var strGif = "/z/webagency/slagence_X/images/transparentpixel.gif";
var strFilter = "progid:DXImageTransform.Microsoft.AlphaImageLoader";

function correctPNG() {
   for(var i=0; i<document.images.length; i++)
   {
	  var img = document.images[i];
	  var imgName = img.src.toUpperCase();
	  if (imgName.substring(imgName.length-3, imgName.length) == "PNG")
	  {
		 var imgID = (img.id) ? "id='" + img.id + "' " : "";
		 var imgClass = (img.className) ? "class='" + img.className + "' " : "";
		 var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' ";
		 var imgStyle = "display:inline-block;" + img.style.cssText ;
		 
		 /*if (img.align == "left") imgStyle = "float:left;" + imgStyle
		 if (img.align == "right") imgStyle = "float:right;" + imgStyle*/
		 
		 var imgAttribs = img.attributes;
		 var hasEvent = false;
		 for (var j=0; j<imgAttribs.length; j++)
		{
			var imgAttrib = imgAttribs[j];
			if (imgAttrib.nodeName == "align")
			   {		  
			   if (imgAttrib.nodeValue == "left") imgStyle = "float:left;" + imgStyle
			   if (imgAttrib.nodeValue == "right") imgStyle = "float:right;" + imgStyle
			   break
			   }
            if( (imgAttrib.nodeName == "onmouseover") || (imgAttrib.nodeName == "onmouseout") ) {
            	hasEvent = true;
            }
         }
            
		 if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle
         if (img.useMap)
		 {		  
	      	 strAddMap = "<img style=\"position:relative; top:-" + img.height + "px;"
	         + "height:" + img.height + "px;width:" + img.width +"\" "
			 + "src=\"" + strGif + "\" usemap=\"" + img.useMap 
			 + "\" border=\"" + img.border + "\">";
		 }		
		 var strNewHTML = "<span " + imgID + imgClass + imgTitle;
		 strNewHTML += " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";";
	     strNewHTML += "filter:" + strFilter;
		 strNewHTML += "(src=\'" + img.src + "\', sizingMethod='scale');\" ";
		if( hasEvent ) {
		 	strNewHTML += " onmouseover=\"javascript:PNGswap('" + img.id + "');\" onmouseout=\"javascript:PNGswap('" + img.id +"');\"" ;
		 }
		 strNewHTML += "></span>" ;
		 if (img.useMap) {
		 	strNewHTML += strAddMap;
		}
		 img.outerHTML = strNewHTML;
		 i = i-1;
	  }
   }
   for(i=0; i < document.forms.length; i++)
   {
      findImgInputs(document.forms(i));
   }
}

function PNGswap(myID)
{
   var strOver  = "_on";
   var strOff = "_off";
   var oSpan = document.getElementById(myID);
   if( oSpan != null ) {
   	if( oSpan.filters != null ) {
   		if( oSpan.filters[0] != null ) {
			   var currentAlphaImg = oSpan.filters(0).src;
			   if (currentAlphaImg.indexOf(strOver) != -1) {
			      oSpan.filters(0).src = currentAlphaImg.replace(strOver,strOff);
			   } else {
			      oSpan.filters(0).src = currentAlphaImg.replace(strOff,strOver);
			    }
			  }
	   }
	 }
}
var stack = 0;

function findImgInputs(oParent)
{
	var oChildren = oParent.children;
  if (oChildren)
	{	
		for (var i=0; i < oChildren.length; i++ )
		{
		   var oChild = oChildren(i);
           if ((oChild.type == 'image') && (oChild.src) )
		   {
		       var origSrc = oChild.src;
		       /* Correction pour un bug bizarre, où un formulaire est traité 2 fois*/
		       if( origSrc.indexOf(strGif) == -1 ) {
			       oChild.src = strGif;
			       oChild.style.filter = strFilter + "(src='" + origSrc + "')";
			     }
		   }
		   findImgInputs(oChild);	
	    }
	}
}

window.attachEvent('onload', correctPNG);