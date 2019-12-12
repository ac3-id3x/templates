$(window).load(function() {
  $$IF=:1:ROTATION_MODULE_EXTRA$$
	$('#featured').orbit({
    animation: 'fade',
    animationSpeed: 1500,
    advanceSpeed: $$SPEED_MODULE_EXTRA$$,
		timer: true,
		bullets : false
		$$IF=:1:EXTRA2_MASQUE$$
		, directionalNav: false
		$$END$$
	});
	$$END$$
	$$IF0:ROTATION_MODULE_EXTRA$$
	$('#featured').orbit({
		timer: false,
		bullets : false
	});
	$$END$$
});