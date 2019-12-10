
			$(".toggle-formule").click(function(){				
				$(".gestion-texte[id!='"+$(this).data("target")+"']").hide("fast");
				$("#"+$(this).data("target")).toggle("fast");				
			});