	/* Variable global pour les réglettes du mini moteur */
/*affiche par défaut */


	var afficheminbugven=0;
	var affichemaxbugven=3000000;	
	var reelminbugven=0;
	var reelmaxbugven=3000000;
	var stepven=20000;	
	
	var afficheminbugloc=0;
	var affichemaxbugloc=3000;	
	var reelminbugloc=0;
	var reelmaxbugloc=3000;
	var steploc=100;
	
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
			 	SliderInitiate(steploc,reelminbugloc,affichemaxbugloc,reelmaxbugloc);
			 	SliderInitiateSurface(stepsurf,reelminsurfloc,affichemaxsurfloc,reelmaxsurfloc);
			}else{
				SliderInitiate(stepven,reelminbugven,affichemaxbugven,reelmaxbugven);
				SliderInitiateSurface(stepsurf,reelminsurf,affichemaxsurf,reelmaxsurf);
			}
		});
		$("#idtt").change(function() {
			if($(this).val()==1){
			 	SliderInitiate(steploc,reelminbugloc,affichemaxbugloc,reelmaxbugloc);
			 	SliderInitiateSurface(stepsurf,reelminsurfloc,affichemaxsurfloc,reelmaxsurfloc);
			}else{
				SliderInitiate(stepven,reelminbugven,affichemaxbugven,reelmaxbugven);
				SliderInitiateSurface(stepsurf,reelminsurf,affichemaxsurf,reelmaxsurf);
			}
		});
		$($('[id*="idtt"]')).change(function() {
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
	var idtt = $("#idtt option:selected").val();
	if(idtt==1){
	$("#amount").val("$$LG:DE lcase$$ "+lisibilite_nombre(valmin) + " € $$LG:A lcase$$ 3 000 €");
	}else{
	$("#amount").val("$$LG:DE lcase$$ "+lisibilite_nombre(valmin) + " € $$LG:A lcase$$ $$LG:MAXI pcase$$");
	}
	
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
	
	$("#amount-surface").val("$$LG:DE lcase$$ "+lisibilite_nombre(valmin) + " $$LG:M2 lcase$$ $$LG:A lcase$$ $$LG:MAXI pcase$$");
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
