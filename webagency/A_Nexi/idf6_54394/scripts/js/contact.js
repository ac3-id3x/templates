
		
	
		
		
		

  
    $('#ctc-content').on('click','.agence-telephonez-nous',function() {
        var $this = $(this);
        $this.find('#texte-telephonez-nous').hide();
        $this.find('#numero-telephonez-nous').show();
        $this.attr('id','');
        $this.unbind('click');
    });
    $('.ctc-select-agence').on('change',function() {
        chargeInfoAgence($(this));
    });

  


    // INPUT FORM CONTACT
    $("#ctc-content").on("focusin",".ctc-field-input",function() {
        $(this).addClass("focused");
    });
    $("#ctc-content").on("focusout",".ctc-field-input",function() {
        if(!$(this).find(".ctc-field-txt").val()) {
            $(this).removeClass("focused");
        }
    });

    // TEXTAREA FORM CONTACT
    $("#ctc-content").on("focusin",".ctc-field-textarea",function() {
        $(this).addClass("focused");
    });
    $("#ctc-content").on("focusout",".ctc-field-textarea",function() {
        if(!$(this).find(".ctc-field-txt").val()) {
            $(this).removeClass("focused");
        }
    });

    // SELECT FORM CONTACT
    function colorSelect(elt){
        if( elt.find("select").val() ){
            elt.addClass("filled");
        }else{
            elt.removeClass("filled");
        }
    }
    $("#ctc-content").on("change",".ctc-field-select",function() {
        colorSelect($(this));
    });


$(function() {
    if( $("#ctc-form-error").length ){
        elt = $("#ctc-form-error");
        if( $("header").css("position") == "fixed" ){
            var h = $("header").height();
        }else{
            var h = 0;        
        }
        var p = elt.offset().top;
        $("html, body").animate({scrollTop:(p-h-40)},1000);
        
    }
});