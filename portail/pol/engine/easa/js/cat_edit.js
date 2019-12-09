function opt(txt,val,sel) {
  this.txt=txt;
  this.val=val;
  this.sel=sel;

}

function moveItem(to,list) {
   var total=list.options.length;
   index = list.selectedIndex;
   if (index == -1) return false;
   if (to == +1 && index == total-1) return false;
   if (to == -1 && index == 0) return false;
   to = index+to;
   var opts = new Array();
   for (i=0; i<total; i++) {
     opts[i]=new opt(list.options[i].text,list.options[i].value,list.options[i].selected);
   }
   tempOpt = opts[to];
   opts[to] = opts[index];
   opts[index] = tempOpt
   list.options.length=0;

   for (i=0;i<opts.length;i++) {
      list.options[i] = new Option(opts[i].txt,opts[i].val);
      list.options[i].selected = opts[i].sel;
   }
   return false;
}

function submitTxtOrdre(list,idCatParent, init, redirect) {
	var idListTxt = '',
		query = '',
		page_ok_erre = document.location.href.split('/');
		
	page_ok_erre = page_ok_erre[3].split('?');
	
	for (i=0;i<list.options.length;i++)
	{
		if (i>0) idListTxt+= ',';
		idListTxt+= list.options[i].value;
	}
	query += 
		"u=" + "EASA:BO-REORDERTXT" + "&" + 
		"page_ok=" + escape(page_ok_erre[0]) + "&" + 
		"page_err=" + escape(page_ok_erre[0]) + "&" + 
		"idCategorie=" + idCatParent + "&" + 
		"orderList=" + idListTxt + "&" + 
		"init=" + init;
	
	if (confirm("Confirmez-vous le changement d'ordre des contenus ?")) {
		$j.ajax({
			url:        'http://www.selogerpro.com/easa,reorder.htm',
			data:       query,
			type:       'POST',
			dataType:   'json', 
			timeout:    30000,
			success:    function() {
				//document.location.href = redirect;
			},
			error:		function() {}
		});
	}
	return false;
}

function submitCatOrdre(list,idCatParent, init, redirect) {
	var idListCat='';
	for (i=0;i<list.options.length;i++)
	{
		if (i>0) idListCat+= ',';
		idListCat+= list.options[i].value;
	}

	if (confirm("Confirmez-vous le changement d'ordre des rubriques ?"))
		location.href="/easa,cat_reorder.htm?redirect="+redirect+"&idCatParent="+idCatParent+"&orderList="+idListCat+"&init="+init
	return false;
}

function submitCatOrdrelist(list,idEASA, init, redirect){
	var idListCat='';
	for (i=0;i<list.options.length;i++)
	{
		if (i>0) idListCat+= ',';
		idListCat+= list.options[i].value;
	}

	if (confirm("Confirmez-vous le changement d'ordre des rubriques principales ?"))
		location.href="/easa,cat_reorder.htm?redirect="+redirect+"&idEasa="+idEASA+"&orderList="+idListCat+"&init="+init
	return false;
}


function FCKeditor_OnComplete( editorInstance ){
	editorInstance.Events.AttachEvent( 'OnBlur'	, FCKeditor_OnBlur ) ;
  editorInstance.Events.AttachEvent( 'OnFocus', FCKeditor_OnFocus ) ;
}

function FCKeditor_OnBlur( editorInstance ){
	editorInstance.ToolbarSet.Collapse() ;
}

function FCKeditor_OnFocus( editorInstance ){
	editorInstance.ToolbarSet.Expand() ;
}

function testurl(urln){
	var o = document.getElementById(urln);
	if(o.value != ""){
		if(o.value.substring(0,7) == "http://"){
			window.open(o.value);
		}
	}
}

function countcar(elem,max1){
	var o = document.getElementById(elem);
	var o2 = document.getElementById(elem+ "_lib");
	if(o){var strlen = o.value.length;
		restant = max1 - strlen;
		if(restant > 1) {
				o2.innerHTML = "encore " + restant + " caractères";
		}
		if(restant == 1){
				o2.innerHTML = "encore " + restant + " caractère";
		}
		if(restant == max1) {
			if(elem == "keywords_ref"){o2.innerHTML = "max 1000 caractères, séparé par des virgules";}
			if(elem == "title_ref"){o2.innerHTML = "max 100 caractères";}
			if(elem == "description_ref"){o2.innerHTML = "max 200 caractères";}
		}
		if(strlen > max1){
			o2.innerHTML = "trop de caractères";
		}
		if(strlen == max1){
			o2.innerHTML = strlen + " caractères";
		}
	}

}