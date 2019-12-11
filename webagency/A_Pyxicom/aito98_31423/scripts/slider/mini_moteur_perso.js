	/* Variable global pour les réglettes du mini moteur */
/*affiche par défaut */


	var afficheminbugven=10000000;
	var affichemaxbugven=80000000;	
	var reelminbugven=0;
	var reelmaxbugven=500000000;
	var stepven=5000000;	
	
	var afficheminbugloc=100000;
	var affichemaxbugloc=300000;	
	var reelminbugloc=0;
	var reelmaxbugloc=500000;
	var steploc=50000;
	
	var afficheminsurf=0;
	var affichemaxsurf=250;
	var reelminsurf=0;
	var reelmaxsurf=250;
	
	
	var afficheminsurfloc=0;
	var affichemaxsurfloc=250;
	var reelminsurfloc=0;
	var reelmaxsurfloc=250;
	var stepsurf=10;
	
	

	var lgmini='$$LG:MINI pcase$$';
	var lgmaxi='$$LG:MAXI pcase$$';

	var BudgetLimite=reelmaxbugven;
	var SurfaceLimite=reelmaxsurf;
	

$(document).ready(function(){
		$(".miniSelectTypeTransaction input[name='idtt']").click(function() {
			if($(this).val()==1){
			 	SliderInitiate(steploc,reelminbugloc,affichemaxbugloc,reelmaxbugloc,afficheminbugloc);
			}else{
				SliderInitiate(stepven,reelminbugven,affichemaxbugven,reelmaxbugven,afficheminbugven);
			}
		});
		$("#idtt").change(function() {
			if($(this).val()==1){
			 	SliderInitiate(steploc,reelminbugloc,affichemaxbugloc,reelmaxbugloc,afficheminbugloc);
			}else{
				SliderInitiate(stepven,reelminbugven,affichemaxbugven,reelmaxbugven,afficheminbugven);
			}
		});
		if($('#typetransaction').val() == 1) {
			 SliderInitiate(steploc,reelminbugloc,affichemaxbugloc,reelmaxbugloc,afficheminbugloc);
		} else {
			SliderInitiate(stepven,reelminbugven,affichemaxbugven,reelmaxbugven,afficheminbugven);
		}
});

function CalculTypedeBien(){
	var temp="";
	var virg="";
	if($("#type1").attr('checked')){
		temp+=$("#type1").val();
		virg=",";
	}
	if($("#type2").attr('checked')){
		temp+=virg+$("#type2").val();
		virg=",";
	}
	if($("#type3").attr('checked')){
		temp+=virg+$("#type3").val()
	}
	$("#idtypebien").val(temp);
}



function SliderInitiate(valstep,valmin,valmax,reelmax,reelmin) {
	var $validtt = $("#idtt").val();
	if($validtt == undefined) {
		$validtt = $('#typetransaction').val();
	}
	if($validtt == 1) {
		BudgetLimite=reelmax;
		$("#slider-range").slider("option" , "min" , valmin);
		$("#slider-range").slider("option", "step", valstep);
		$("#slider-range").slider("option" , "max" , valmax);
		if(reelmax == reelmaxbugloc && valmin == reelminbugloc) {
			$("#amount").val("$$LG:DE lcase$$ - "+lisibilite_nombre(reelmin) + " XPF $$LG:A lcase$$ + $$LG:DE lcase$$ "+lisibilite_nombre(valmax)+" XPF");
		} else if(reelmax == reelmaxbugloc) {
			$("#amount").val("$$LG:DE lcase$$ "+lisibilite_nombre(reelmin) + " XPF $$LG:A lcase$$ + $$LG:DE lcase$$ "+lisibilite_nombre(valmax)+" XPF");
		} else if(valmin == reelminbugloc) {
			$("#amount").val("$$LG:DE lcase$$ - "+lisibilite_nombre(reelmin) + " XPF $$LG:A lcase$$ + $$LG:DE lcase$$ "+lisibilite_nombre(valmax)+" XPF");
		} else {
			$("#amount").val("$$LG:DE lcase$$ "+lisibilite_nombre(reelmin) + " XPF $$LG:A lcase$$ + $$LG:DE lcase$$ "+lisibilite_nombre(valmax)+" XPF");
		}
		$("#MiniInputBudgetMin").val(valmin);
		if(valmax>=reelmax){
			$("#MiniInputBudgetMax").val("");
		}else{
			$("#MiniInputBudgetMax").val(reelmax);
		}	
		$("#slider-range").slider("option", "values", [valmin,reelmax] );
	} else {
		BudgetLimite=reelmax;
		$("#slider-range").slider("option" , "min" , reelmin);
		$("#slider-range").slider("option", "step", valstep);
		$("#slider-range").slider("option" , "max" , valmax);
		if(reelmax == reelmaxbugven && valmin == reelminbugven) {
			$("#amount").val("$$LG:DE lcase$$ - "+lisibilite_nombre(reelmin) + " XPF $$LG:A lcase$$ + $$LG:DE lcase$$ "+lisibilite_nombre(valmax)+" XPF");
		} else if(reelmax == reelmaxbugven) {
			$("#amount").val("$$LG:DE lcase$$ "+lisibilite_nombre(reelmin) + " XPF $$LG:A lcase$$ + $$LG:DE lcase$$ "+lisibilite_nombre(valmax)+" XPF");
		} else if(valmin == reelminbugven) {
			$("#amount").val("$$LG:DE lcase$$ - "+lisibilite_nombre(reelmin) + " XPF $$LG:A lcase$$ + $$LG:DE lcase$$ "+lisibilite_nombre(valmax)+" XPF");
		} else {
			$("#amount").val("$$LG:DE lcase$$ "+lisibilite_nombre(reelmin) + " XPF $$LG:A lcase$$ + $$LG:DE lcase$$ "+lisibilite_nombre(valmax)+" XPF");
		}
		$("#MiniInputBudgetMin").val(valmin);
		if(valmax>=reelmax){
			$("#MiniInputBudgetMax").val("");
		}else{
			$("#MiniInputBudgetMax").val("");
		}	
		$("#slider-range").slider("option", "values", [reelmin,reelmax] );
	}
}

function lisibilite_nombre(nbr){
		var nombre = ''+nbr;
		var retour = '';
		var count=0;
		for(var i=nombre.length-1 ; i>=0 ; i--){
			if(count!=0 && count % 3 == 0)
				retour = nombre[i]+' '+retour ;
			else
				retour = nombre[i]+retour ;
			count++;
		}
		if (($.browser.msie) && (parseInt($.browser.version, 10) <= 7)) {						        
			return nbr;
		}else{
			return retour;
		}
		
}
