// JavaScript Document
// Correctly handle PNG transparency in Win IE 5.5 or higher.
// Optimization : Browser Detection by Sol@web - Updated on 06 September 2005
function correctPNG(){
   for(var i=0; i<document.images.length; i++){
     var img = document.images[i]
     var imgName = img.src.toUpperCase()
     if (imgName.substring(imgName.length-3, imgName.length) == "PNG"){
       var imgID = (img.id) ? "id='" + img.id + "' " : ""
       var imgClass = (img.className) ? "class='" + img.className + "' " : ""
       var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' "
       var imgStyle = "display:inline-block;" + img.style.cssText
       if (img.align == "left") imgStyle = "float:left;" + imgStyle
       if (img.align == "right") imgStyle = "float:right;" + imgStyle
       if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle      
       var strNewHTML = "<span " + imgID + imgClass + imgTitle
       + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";"
        + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"
       + "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>"
       img.outerHTML = strNewHTML
       i = i-1
     }
   }
   /////  This part handles background png's (Koen Betsens)
   for(i=0;i<document.all.length;i++){
      bg=document.all[i].currentStyle.backgroundImage;
      if(bg.toUpperCase().substr(bg.length-5,3)=='PNG'){
         if(bg.search('%20')>0){bg=bg.replace('%20',' ')}
         document.all[i].style.backgroundImage='none';
         document.all[i].style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=scale src='"+bg.substr(5,bg.length-7)+"')"
      }
   }
}
 
if (navigator.appName == "Microsoft Internet Explorer") {
	window.attachEvent("onload", correctPNG); 
}