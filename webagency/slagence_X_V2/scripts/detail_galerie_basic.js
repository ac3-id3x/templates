   	/***********************************************************************************************
	
	Copyright (c) 2005 - Alf Magne Kalleland post@dhtmlgoodies.com
	
	UPDATE LOG:
	
	March, 10th, 2006 : Added support for a message while large image is loading
	
	Get this and other scripts at www.dhtmlgoodies.com
	
	You can use this script freely as long as this copyright message is kept intact.
	
	***********************************************************************************************/ 
   	
	var displayWaitMessage=true;	// Display a please wait message while images are loading?
  	
   		
	var activeImage = false;
	var imageGalleryLeftPos = false;
	var imageGalleryWidth = false;
	var imageGalleryObj = false;
	var maxGalleryXPos = false;
	var slideSpeed = 0;
	var imageGalleryCaptions = new Array();

	function startSlide(e)
	{
		if(document.all)e = event;
		var id = this.id;
		//this.getElementsByTagName('IMG')[0].src = '/z/webagency/slagence_X_V2/detail/img_basic/' + this.id + '_over.gif';	
		//this.getElementsByTagName('IMG')[0].style.opacity = '0.5';
		//this.getElementsByTagName('IMG')[0].style.filter = 'alpha(opacity=50)';
		if(this.id=='arrow_down'){
			slideSpeedMultiply = Math.floor((e.clientX - this.offsetTop) / 5);
			slideSpeed = -1*slideSpeedMultiply;
			slideSpeed = Math.max(-5,slideSpeed);
		}else{			
			slideSpeedMultiply = 10 - Math.floor((e.clientX - this.offsetTop) / 5);
			slideSpeed = 1*slideSpeedMultiply;
			slideSpeed = Math.min(5,slideSpeed);
			if(slideSpeed<0)slideSpeed=5;
		}
	}
	
	function releaseSlide()
	{
		var id = this.id;
		//this.getElementsByTagName('IMG')[0].src = '/z/webagency/slagence_X_V2/detail/img_basic/' + this.id + '.gif';
		//this.getElementsByTagName('IMG')[0].style.opacity = '1';
		//this.getElementsByTagName('IMG')[0].style.filter = 'alpha(opacity=100)';
		slideSpeed=0;
	}
		
	function gallerySlide()
	{
		if(slideSpeed!=0){
			var leftPos = imageGalleryObj.offsetTop;
			leftPos = leftPos/1 + slideSpeed;
			if(leftPos>maxGalleryXPos){
				leftPos = maxGalleryXPos;
				slideSpeed = 0;
				
			}
			if(leftPos<minGalleryXPos){
				leftPos = minGalleryXPos;
				slideSpeed=0;
			}
			
			imageGalleryObj.style.top = leftPos + 'px';
		}
		setTimeout('gallerySlide()',20);
		
	}
	
	function showImage()
	{
		if(activeImage){
			activeImage.style.filter = 'alpha(opacity=50)';	
			activeImage.style.opacity = 0.5;
		}	
		this.style.filter = 'alpha(opacity=100)';
		this.style.opacity = 1;	
		activeImage = this;	
	}
	
	function initSlideShow()
	{
		if(document.getElementById('arrow_up')){
		document.getElementById('arrow_up').onmousemove = startSlide;
		document.getElementById('arrow_up').onmouseout = releaseSlide;
		}
		if(document.getElementById('arrow_down')){
		document.getElementById('arrow_down').onmousemove = startSlide;
		document.getElementById('arrow_down').onmouseout = releaseSlide;
		}
		if(document.getElementById('theImages')){
			imageGalleryObj = document.getElementById('theImages');
			imageGalleryLeftPos = imageGalleryObj.offsetTop;
			imageGalleryWidth = document.getElementById('galleryContainer').offsetHeight - 30;
			maxGalleryXPos = imageGalleryObj.offsetTop; 
			minGalleryXPos = imageGalleryWidth - document.getElementById('slideEnd').offsetTop - 100;
			var slideshowImages = imageGalleryObj.getElementsByTagName('IMG');
			for(var no=0;no<slideshowImages.length;no++){
				slideshowImages[no].onmouseover = showImage;
			}
			
			var divs = imageGalleryObj.getElementsByTagName('DIV');
			for(var no=0;no<divs.length;no++){
				if(divs[no].className=='imageCaption')imageGalleryCaptions[imageGalleryCaptions.length] = divs[no].innerHTML;
			}
			gallerySlide();
		}
	}
	
	function showPreview(imagePath,imageIndex,imageUrl){
		var subImages = document.getElementById('Galerie').getElementsByTagName('IMG');
		if(subImages.length==0){
			var img = document.createElement('IMG');
			document.getElementById('Galerie').appendChild(img);
		}else img = subImages[0];
		
		if(displayWaitMessage){
			document.getElementById('waitMessage').style.display='inline';
		}
		document.getElementById('largeImageCaption').style.display='none';
		img.onload = function() { hideWaitMessageAndShowCaption(imageIndex-1); };/*25.10.2010 c/o Lisbonne */
		img.src = imagePath;
		
		// ajout 19.03.2009
		var lienBigUrl = document.getElementById('AgrandirPhoto');
		if(lienBigUrl){
			lienBigUrl.href= imageUrl;
		}
	}
	function hideWaitMessageAndShowCaption(imageIndex)
	{
		document.getElementById('waitMessage').style.display='none';	
		document.getElementById('largeImageCaption').innerHTML = imageGalleryCaptions[imageIndex]; /*25.10.2010 c/o Lisbonne */
		document.getElementById('largeImageCaption').style.display='block';
		
	}
	

	
	window.onload = initSlideShow;