	/* Variable global pour les réglettes du mini moteur */

/*affiche par défaut */


	var afficheminbugven=2000;
	var affichemaxbugven=5000000;	
	var reelminbugven=1000;
	var reelmaxbugven=5000000;
	var stepven=20000;	
	
	var afficheminbugloc=100;
	var affichemaxbugloc=1000;	
	var reelminbugloc=50;
	var reelmaxbugloc=1000;
	var steploc=100;
	
	var afficheminsurf=15;
	var affichemaxsurf=5000;
	var reelminsurf=10;
	var reelmaxsurf=5000;
	
	
	var afficheminsurfloc=20;
	var affichemaxsurfloc=100;
	var reelminsurfloc=10;
	var reelmaxsurfloc=100;
	var stepsurf=10;
	
	

	var lgmini='$$LG:MINI pcase$$';
	var lgmaxi='$$LG:MAXI pcase$$';

	var BudgetLimite=reelmaxbugven;
	var SurfaceLimite=reelmaxsurf;
	

$(document).ready(function(){
		$(".miniSelectTypeTransaction input[name='idtt']").click(function() {
			if($(this).val()==1){
			 	SliderInitiate(steploc,reelminbugloc,affichemaxbugloc,reelmaxbugloc);
			 	SliderInitiateSurface(stepsurf,reelminsurfloc,affichemaxsurfloc,reelmaxsurfloc);
			}else{
				SliderInitiate(stepven,reelminbugven,affichemaxbugven,reelmaxbugven);
				SliderInitiateSurface(stepsurf,reelminsurf,affichemaxsurf,reelmaxsurf);
			}
		});
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



function SliderInitiate(valstep,valmin,valmax,reelmax){
	BudgetLimite=reelmax;
	$("#slider-range").slider("option" , "min" , 0);
	$("#slider-range").slider("option", "step", valstep);
	$("#slider-range").slider("option" , "max" , reelmax);
	
	$("#amount").val("de "+lisibilite_nombre(valmin) + " € à Max");
	$("#MiniInputBudgetMin").val(valmin);
	if(valmax>=reelmax){
		$("#MiniInputBudgetMax").val("");
	}else{
		$("#MiniInputBudgetMax").val(valmax);
	}	
	$("#slider-range").slider("option", "values", [valmin,valmax] );
}

function SliderInitiateSurface(valstep,valmin,valmax,reelmax){
	SurfaceLimite=reelmax;
	$("#slider-range-surface").slider("option" , "min" , 0);
	$("#slider-range-surface").slider("option", "step", valstep);
	$("#slider-range-surface").slider("option" , "max" , reelmax);
	
	$("#amount-surface").val("de "+lisibilite_nombre(valmin) + " m² à Max");
	$("#MiniInputSurfaceMin").val(valmin);
	if(valmax>=reelmax){
		$("#MiniInputSurfaceMax").val("");
	}else{
		$("#MiniInputSurfaceMax").val(valmax);
	}	
	$("#slider-range-surface").slider("option", "values", [valmin,valmax] );
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
