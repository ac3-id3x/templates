$(document).ready(function(){
	$("div")
		.filter(".menu-Optim1")//1 - modifier ce nom pour chaque cadre
			.hide()
		.end()
		.filter(".Optim1")////2 - modifier ce nom pour chaque cadre
			.click(function(){
				$("div.menu-Optim1").slideDown("slow");//3 - ne pas oublier de changer le nom ici pour que ce soit le memequ'en 1
			})
		.hoverIntent(function(){
				$("div.menu-Optim1").slideUp("slow");//3 - ne pas oublier de changer le nom ici pour que ce soit le memequ'en 1
			},function(){
			 $("div.menu-Optim1").slideUp("slow");//3 - ne pas oublier de changer le nom ici pour que ce soit le memequ'en 1
			})
		.end();

	$("div")
		.filter(".menu-Optim2")//1 - modifier ce nom pour chaque cadre
			.hide()
		.end()
		.filter(".Optim2")////2 - modifier ce nom pour chaque cadre
			.click(function(){
				$("div.menu-Optim2").slideDown("slow");//3 - ne pas oublier de changer le nom ici pour que ce soit le memequ'en 1
			})
		.hoverIntent(function(){
				$("div.menu-Optim2").slideUp("slow");//3 - ne pas oublier de changer le nom ici pour que ce soit le memequ'en 1
			},function(){
			 $("div.menu-Optim2").slideUp("slow");//3 - ne pas oublier de changer le nom ici pour que ce soit le memequ'en 1
			})
		.end();
	});	