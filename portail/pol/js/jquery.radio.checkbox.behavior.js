//##############################
// jQuery Radio-buttons with Checkbox Behavior
// By Dharmavirsinh Jhala - dharmavir@gmail.com
// Last Updated: 13th Dec 09
// Version: 1.2.5
/*
 USAGE:
	$(document).ready(function(){
		$(":radio").behaveLikeCheckbox();
	}
*/
jQuery.fn.extend({
    behaveLikeCheckbox: function () {
		
        var radioStatus = false;
        $.each($(this), function () {
            // Set initial state of radio
            this.radioStatus = $(this).attr("checked") || false;

            $(this).data("status", this.radioStatus);

            // Set mouse-over event callback
            //        	$(this).mouseover(function() {
            //        		this.radioStatus = $(this).attr("checked") || false;
            //        		$(this).data("status",this.radioStatus);
            //            });

            // Set on-click event callback
            $(this).click(function () {
			
                this.radioStatus = !$(this).data("status")

                if (this.radioStatus == true) {
                    $("input[name='" + $(this).attr("name") + "']").data("status", false);
                }
                $(this).attr("checked", this.radioStatus);
                $(this).data("status", this.radioStatus);

                if (this.radioStatus == false) {
                    $(this).change();
                }
            });
        });
        return this;
    },
	
	buildListAnnonceId: function () {
		
		var id = '';
		
        $.each($(this), function () {
	
            // Set initial state of radio			
			if ($(this).is(':checked')) {
				this.id = $(this).parent().parent().attr('name');
				$(this).append( '<input type="hidden" name="idannonce_publication_list" value="'+ this.id +'">');			
			}

            // Set on-click event callback
            $(this).click(function () {
				$(this).empty();
				this.id = $(this).parent().parent().attr('name');
				if ($(this).is(':checked')) {					
					$(this).append( '<input type="hidden" name="idannonce_publication_list" value="'+this.id+'">');
				}			
            });
        });
        return this;
    }
});