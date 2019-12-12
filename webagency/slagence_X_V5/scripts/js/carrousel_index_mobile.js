//FOR HIGHER THAN MOBILE RESOLUTION 
if(winW >  767) {
    $('.equipe-carousel').owlCarousel({
        margin:20,
    	items:4,
    	loop:true,
    	autoplay:true,
    	nav:true,
    	navText: ['<i class="bigger cursor-pointer typo-action"><</i>', '<i class="bigger cursor-pointer typo-action">></i>'],
    	dots:false,
    	navContainer:'.nav-carousel'
    })
}
//FOR MOBILE RESOLUTION 
if(winW <  767) {
    if($('.owl-carousel').children().length > 1){
        $('.owl-carousel').owlCarousel({
            items:1,
            loop: true,
            margin: 10,
            nav: true,
            navRewind: true,
            navText: navText
        });  
    }
}  
