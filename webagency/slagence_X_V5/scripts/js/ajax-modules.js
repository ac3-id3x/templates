//LOAD MODULES EN AJAX
function getModules(moduleAnnonces){
			if(moduleAnnonces>0){
				var moduleAnnonces = "-"+moduleAnnonces;
			}else{
				var moduleAnnonces = "";
			}
			$.ajax({
				type: "GET",
				dataType:'html',
				data :'' ,
				url: '/modules,annonces'+moduleAnnonces+',annonces.htm',
				beforeSend: function() {
					 $('.box-module-home').html('');
				},
				success: function(data) {
					//console.log(data);
					$('.box-module-home').html(data);
					
		 	 	},
		 	 	error : function (jqXHR, textStatus, errorThrown) {
	
				},
				complete: function() {
					//console.log('ok');
				}
			});
		}
$(document).ready(function() {
	//AJAX MODULES
	getModules(moduleAnnonces);	
	//console.log(moduleAnnonces);
});