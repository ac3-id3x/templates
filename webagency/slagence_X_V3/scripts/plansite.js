function plansite(divid,url_page){
var $j = jQuery.noConflict();
var ajax_img = '<div style="width:100%; margin-top:20px; text-align:center"><img src="z/webagency/slagence_X_V3/images/ajax-loader.gif" /></div>';	
$j.ajax({
	type: "GET",
  url: url_page,
  dataType: "html",
  beforeSend: function() {
			$j("#"+divid).html(ajax_img);
		},
  success:function(data) {
  	$j("#"+divid).html(data);
  }
 });
}