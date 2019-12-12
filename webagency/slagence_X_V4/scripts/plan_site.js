function plansite(divid,url_page){
var ajax_img_plan = '<img src="/z/webagency/slagence_X_V4/images/moteur/ajax-loader.gif" />';	
$.ajax({
	type: "GET",
  url: url_page,
  dataType: "html",
  beforeSend: function() {
			$("#"+divid).html(ajax_img_plan);
		},
  success:function(data) {
  	$("#"+divid).html(data);
  }
 });
}