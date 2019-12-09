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


function submitCatOrdre(list,idEASA, init, redirect) 
{	
	var idListCat='';
	for (i=0;i<list.options.length;i++)
	{
		if (i>0) idListCat+= ',';		
		idListCat+= list.options[i].value;		
	}
	
	if (confirm("Confirmer la modification d'ordre?"))
		location.href="/easa_bo,cat_reorder.htm?redirect="+redirect+"&idEasa="+idEASA+"&orderList="+idListCat+"&init="+init
	return false;
}
