window.addEvent('domready', function() {
	var status = {
		'true': 'open',
		'false': 'close'
	};
	



	//--horizontal
	var myHorizontalSlide1 = new Fx.Slide('horizontal_slide1', {mode: 'horizontal'});
  var myHorizontalSlide2 = new Fx.Slide('horizontal_slide2', {mode: 'horizontal'});
  var myHorizontalSlide3 = new Fx.Slide('horizontal_slide2', {mode: 'horizontal'});

	$('h_slidein1').addEvent('click', function(e){
		e.stop();
		this.style.display = "inline"; 
		myHorizontalSlide1.slideIn();
	});

	$('h_slideout1').addEvent('click', function(e){
		e.stop();
		this.style.display = "inline"; 
		myHorizontalSlide1.slideOut();
	});
	
	$('h_slidein2').addEvent('click', function(e){
		e.stop();
		this.style.display = "inline"; 
		myHorizontalSlide2.slideIn();
	});

	$('h_slideout2').addEvent('click', function(e){
		e.stop();
		this.style.display = "inline"; 
		myHorizontalSlide2.slideOut();
	});
	
	

	$('h_toggle').addEvent('click', function(e){
		e.stop();
		myHorizontalSlide1.toggle();
	});

	$('h_hide').addEvent('click', function(e){
		e.stop();
		myHorizontalSlide1.hide();
		$('horizontal_status').set('html', status[myHorizontalSlide1.open]);
	});
	
	$('h_show').addEvent('click', function(e){
		e.stop();
		myHorizontalSlide1.show();
		$('horizontal_status').set('html', status[myHorizontalSlide1.open]);
	});
	
	// When Horizontal Slide ends its transition, we check for its status
	// note that complete will not affect 'hide' and 'show' methods
	myHorizontalSlide1.addEvent('complete', function() {
		$('horizontal_status').set('html', status[myHorizontalSlide1.open]);
	});
});