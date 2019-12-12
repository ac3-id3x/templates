<script type="text/javascript">
	(function(window, $, PhotoSwipe){
		$(document).delegate("#detail","pageshow", function (event) {	
			var options = {captionAndToolbarAutoHideDelay:0};
			$("#mobiGallery a").photoSwipe(options);
		});
	}(window, window.jQuery, window.Code.PhotoSwipe));
</script>