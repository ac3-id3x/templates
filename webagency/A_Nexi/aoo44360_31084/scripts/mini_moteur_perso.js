	/* Variable global pour les réglettes du mini moteur */

/*affiche par défaut */


	var afficheminbugven=0;
	var affichemaxbugven=1000000;	
	var afficheminbugloc=0;
	var affichemaxbugloc=5000;	

	
	
	var reelminbugven=0;
	var reelmaxbugven=1000000;
	var stepven=20000;	
	var reelminbugloc=0;
	var reelmaxbugloc=5000;
	var steploc=100;
	var BudgetLimite=reelmaxbugven;
	var jointure=" € à Max";

	var lgmini='$$LG:MINI pcase$$';
	var lgmaxi='$$LG:MAXI pcase$$';

$j(document).ready(function(){
	
		$j(".miniSelectTypeTransaction select[name='idtt']").click(function() {			
			if($j(this).val()==1){
			 	SliderInitiate(steploc,reelminbugloc,affichemaxbugloc,reelmaxbugloc);
			}else{
				SliderInitiate(stepven,reelminbugven,affichemaxbugven,reelmaxbugven);
			}
		});		
  
		
});





function SliderInitiate(valstep,valmin,valmax,reelmax){
	BudgetLimite=reelmax;
	$j("#slider-range").slider("option" , "min" , 0);
	$j("#slider-range").slider("option", "step", valstep);
	$j("#slider-range").slider("option" , "max" , reelmax);
	
	$j("#amount").val("de "+lisibilite_nombre(valmin) + " € à Max");
	$j("#MiniInputBudgetMin").val(valmin);
	if(valmax>=reelmax){
		$j("#MiniInputBudgetMax").val("");
	}else{
		$j("#MiniInputBudgetMax").val(valmax);
	}
	
	$j("#slider-range").slider("option", "values", [valmin,valmax] );
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
		if (($j.browser.msie) && (parseInt($j.browser.version, 10) <= 7)) {						        
			return nbr;
		}else{
			return retour;
		}
		
}


