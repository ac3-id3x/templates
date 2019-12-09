	function makeTall()
	{
		$(".pictoEspaceAgence").stop()
		.animate({ //Animate the block agence
			width: '303px',
			height: '204px'
		}, 300,function(){
			$(".pictoEspaceAgence").find(".texteFinal").fadeIn(350);
			$(".pictoEspaceAgence").find(".flecheSeConnecter").fadeIn(700);
			$(".pictoEspaceAgence").find(".btnAgence").fadeIn(1000);
		});
		$(this).css("cursor","default")
		$(".pictoEspaceAgence").find(".texteInitial").hide();
	}
	
	function makeShort()
	{
		$(".pictoEspaceAgence").stop() //On hover out, go back to original size 160/108
		.animate({
			width: '160px',
			height: '108px'
		}, 300,function(){
			$(".pictoEspaceAgence").find(".texteInitial").fadeIn("fast");
		});
		$(this).css("cursor","pointer")
		$(".pictoEspaceAgence").find(".texteFinal,.flecheSeConnecter,.btnAgence").hide();
	}
	
	var config = {    
		over: makeTall, // function = onMouseOver callback (REQUIRED)    
		timeout: 300, // number = milliseconds delay before onMouseOut    
		out: makeShort // function = onMouseOut callback (REQUIRED)    
	};
	
	//$(".pictoEspaceAgence").hoverIntent(config)




/*
$(".pictoEspaceAgence").hover(function() { //On hover...
		$(".pictoEspaceAgence").stop()
		.animate({ //Animate the block agence
			width: '303px',
			height: '204px'
		}, 500,function(){
			$(".pictoEspaceAgence").find(".texteFinal").fadeIn(1000);
			$(".pictoEspaceAgence").find(".flecheSeConnecter").fadeIn(1500);
			$(".pictoEspaceAgence").find(".btnAgence").fadeIn(2000);
		});
		$(this).css("cursor","default")
		$(".pictoEspaceAgence").find(".texteInitial").hide();
	} , function() {
		$(".pictoEspaceAgence").stop() //On hover out, go back to original size 160/108
		.animate({
			width: '160px',
			height: '108px'
		}, 220,function(){
			$(".pictoEspaceAgence").find(".texteInitial").fadeIn("fast");
		});
		$(this).css("cursor","pointer")
		$(".pictoEspaceAgence").find(".texteFinal,.flecheSeConnecter,.btnAgence").hide();
		//$(".pictoEspaceAgence").find("").hide();
		//$(".pictoEspaceAgence").find("").hide();
});
*/
// clique sur "se connecter"
$('.btnAgence ,.btn_espace_agence').bind("click",function(){
	$(".pictoEspaceAgence").stop() 
	.animate({
		width: '160px',
		height: '108px'
	}, 220);
	$(".pictoEspaceAgence").find(".texteInitial").show();
	$(this).css("cursor","pointer")
	$(".pictoEspaceAgence").find(".texteFinal").hide();
	$(".pictoEspaceAgence").find(".flecheSeConnecter").hide();
	$(".pictoEspaceAgence").find(".btnAgence").hide();
	$('.fondOverlay').fadeIn('pretty');
	$('#connexionOverlay').fadeIn('slow');
});

// clique sur le bouton fermer
$('.close').bind("click",function(){
	$('.fondOverlay').fadeOut('slow');
	$('#connexionOverlay').fadeOut('pretty');
});

// gestion des hover sur les boutons
$(".btn_espace_agence").mouseover(function() {
	$(this).removeClass('btn_espace_agence');
	$(this).addClass('btn_espace_agence_hover');
});

$(".btn_espace_agence").mouseout(function() {
	$(this).removeClass('btn_espace_agence_hover');
	$(this).addClass('btn_espace_agence');
});