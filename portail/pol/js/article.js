function getElementsByClassName(classname,tagname){
    var a = [];
    var re = new RegExp('\\b' + classname + '\\b');
    var els = document.getElementsByTagName(tagname);
    for(var i=0,j=els.length; i<j; i++)
        if(re.test(els[i].className))a.push(els[i]);
    return a;
}

function setDisplay(o,mode) {
	if (!o || o==null || o==undefined) return;
	if (typeof o == 'undefined') return;
/*	if (typeof o == 'object' && o.push) {
		for (var i=0; i<o.length;i++)
			setDisplay(o[i],mode);
	}
	else*/
		o.style.display=mode;
}

function page(mode,cntid){
	var a = document.getElementById("polMenuGauche");
	var b = document.getElementById("polMenuGaucheFlex");
	if(a&&b){a.style.height = (b.offsetHeight+30) + 'px';}
	var o = document.getElementById("cnt_blc_art");
	var o_prec1 = document.getElementById("prec1");
	var o_prec2 = document.getElementById("prec2");
	var o_suiv1 = document.getElementById("suiv1");
	var o_suiv2 = document.getElementById("suiv2");
	var o_sepa1 = document.getElementById("sepa1");
	var o_sepa2 = document.getElementById("sepa2");
	var subnodes = getElementsByClassName("kalke","div");		
	var okdisp;
	

	if(o_prec1) o_prec1.style.display = "inline";
	if(o_prec2) o_prec2.style.display = "inline";
	if(o_sepa1) o_sepa1.style.display = "inline";
	if(o_sepa2) o_sepa2.style.display = "inline";		
	if(o_suiv1) o_suiv1.style.display = "inline";
	if(o_suiv2) o_suiv2.style.display = "inline";

//	setDisplay({o_prec1,o_prec2,o_sepa1,o_sepa2,o_suiv1,o_suiv2},"inline");

		
	for (var i=0; i<subnodes.length; i++) {
		node = subnodes[i];
		if(node.id.substring(0,5) == "kalk_"){
			if(node.style.display == "block"){okdisp = i;}
				node.style.display = "none";
		}	
	}				
	
	if (mode == 1){
		if(okdisp != 0){
			subnodes[okdisp-1].style.display = "block";
			if(okdisp == 1){
				if(o_prec1) o_prec1.style.display = "none";
				if(o_prec2) o_prec2.style.display = "none";
				if(o_sepa1) o_sepa1.style.display = "none";
				if(o_sepa2) o_sepa2.style.display = "none";				
			}
		}
		else {
			subnodes[okdisp].style.display = "block";
		}
	}
	
	if (mode == 2){
		if(okdisp!=(subnodes.length-1)){
			subnodes[okdisp+1].style.display = "block";
			if(okdisp == (subnodes.length-2)){
				if(o_suiv1) o_suiv1.style.display = "none";
				if(o_suiv2) o_suiv2.style.display = "none";
				if(o_sepa1) o_sepa1.style.display = "none";
				if(o_sepa2) o_sepa2.style.display = "none";				
			}
		}
		else {
			subnodes[okdisp].style.display = "block";
		}
	}
	
	if (mode == 0){
			var art = document.getElementById("a_"+cntid);
			if (art) {
				var o_kalk = document.getElementById(art.parentNode.id);
				var o_kalk_id = art.parentNode.id.split("_");
				
				if((o_kalk_id[1]) == (subnodes.length)){
					if(o_suiv1) o_suiv1.style.display = "none";
					if(o_suiv2) o_suiv2.style.display = "none";
					if(o_sepa1) o_sepa1.style.display = "none";
					if(o_sepa2) o_sepa2.style.display = "none";				
				}
				
				if(o_kalk_id[1] == 1){
					if(o_prec1) o_prec1.style.display = "none";
					if(o_prec2) o_prec2.style.display = "none";
					if(o_sepa1) o_sepa1.style.display = "none";
					if(o_sepa2) o_sepa2.style.display = "none";				
				}
				
				o_kalk.style.display = "block";
			}
	}
	
	if ((mode == 1)||(mode == 2)){
		if (mode == 2){okdisp = okdisp + 2 ;}
		var puce = document.getElementById("puce_"+okdisp);
		var o_kalk_id = puce.parentNode.id.split("_");
		cntid = o_kalk_id[1];	
	}
	
		var subnodes = getElementsByClassName("ancre_hover","div");		
			for (var i=0; i<subnodes.length; i++) {
				node = subnodes[i];
				node.className = "ancre";
			}			
		
		
			var subnodes = getElementsByClassName("ancre","div");		
			for (var i=0; i<subnodes.length; i++) {
				node = subnodes[i];
				if(node.id == "ancre_"+cntid){
					node.className = "ancre_hover";
				}else {
					node.className = "ancre";
				}	
			}					

	setTimeout('initSize()',200);
}


function checkAnchor (cntbegin) {
	var a_anchor = window.location.href.split("#")[1];
	if(a_anchor) {
		page(0,a_anchor);
	}else{
		page(0,cntbegin);
	}	
}


