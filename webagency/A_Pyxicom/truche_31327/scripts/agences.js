var ajax_img = '<div class="ajaxLoader"><img src="/z/webagency/slagence_X_V4/images/moteur/loader.gif" /></div>';
$(document).ready(function() {

		$("#MiniDepAg").change(function() {
				$.ajax({
					type: "GET",
					data:  "cp="+$("#MiniDepAg").val()+"&lang=$$FORM:LANG$$",
					dataType: "html",
					url: '/agences,incl_moteur_agence_ville.htm',
					beforeSend: function() {
						$("#mini_ville_agence").show();
						$("#mini_ville_agence").html(ajax_img);
					},
					success: function(data) {
						$("#mini_ville_agence").show();
						$("#mini_ville_agence").html(data);
			 	 	}
				});
		});	
		
});		


function VerifMoteurAg(){
	if($("#MiniVilleAg").val()!=""){
		document.getElementById("MiniVilleAg").name="cp";
		document.getElementById("MiniDepAg").name="cpDep";
	}else{
		document.getElementById("MiniVilleAg").name="cpVille";
		document.getElementById("MiniDepAg").name="cp";
	}
	return true;
}