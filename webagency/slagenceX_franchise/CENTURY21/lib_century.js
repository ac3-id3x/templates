function initial(myvar){
	if(typeof(myvar)=='undefined') return myvar='';
	else return myvar;
}

function popup_mise_en_relation_gratuite(ref_agence,id_order,url_from,url_reference,url_reference_1,url_reference_2){
  window.open('/redirect_estara.php?ref_agence=' + initial(ref_agence) +'&id_order='+ initial(id_order) + '&url_from=' + initial(url_from) +'&url_reference='+ initial(url_reference) + '&url_reference_1='+ initial(url_reference_1) +'&url_reference_2='+ initial(url_reference_2),'mise_en_relation_gratuite','width=430,height=378,menubar=no,toolbar=no,directories=no,scrollbars=no,status=no,left=0,top=0,resizable=no');
}

function popup(loc, title, params) {
  return window.open(loc, title, params);
}

function externalLinks() {
 if (!document.getElementsByTagName) return;
 var anchors = document.getElementsByTagName("a");
 for (var i=0; i<anchors.length; i++) {
   var anchor = anchors[i];
   if (anchor.getAttribute("href") &&
       anchor.getAttribute("rel") == "external")
     anchor.target = "_blank";
 }
}

window.onload = externalLinks;
