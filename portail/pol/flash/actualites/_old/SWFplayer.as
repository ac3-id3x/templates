
class SWFplayer
{
	public var swfName:String;
	public var mcPlayer:MovieClip;
	public var mcDisplay:MovieClip;
	public var mcDisplayBtnStart:MovieClip;
	public var mcSound:Sound;
	public var playingSWF:Boolean=false;
	public var currentVolume:Number=100;
	
	public var idRunC:Number;
	public var idRunS:Number;
	public var idRunV:Number;
	public var idCF:Number;
	
	function SWFplayer(swfN:String,mcP:MovieClip,mcD:MovieClip)
	{
		this.swfName=swfN;
		this.mcPlayer=mcP;
		mcP.bar._xscale=0;
		this.mcDisplay=mcD;
		mcD._alpha=0;
		trace("SWFplayer avec "+swfName+","+mcPlayer);
		init();
	}
	
	function initBtnStart(obj){ // définit un bouton start dans le SWF loadé.
		trace("initBtnStart");
		obj.mcDisplayBtnStart=obj.mcDisplay.btnStart;
		obj.mcDisplayBtnStart.onRelease=function(){
			obj.playSWF(obj);
		}
	}
	
	function init(){
		initPlayer();
		loadSWF();
		mcSound= new Sound(mcDisplay);
	}
	
	
	function loadSWF(){
		var obj=this;
		var mclListener:Object = new Object();
		mcDisplay._visible=false;
		mclListener.onLoadInit = function(target_mc:MovieClip) {
			obj.stopSWF(obj);
			obj.mcDisplay._alpha=100;
			// Pour test ////
			// obj.mcDisplay.gotoAndPlay(100);
			/////////////////
		};
		mclListener.onLoadProgress = function(target:MovieClip, bytesLoaded:Number, bytesTotal:Number):Void{
			obj.mcPlayer.bar._xscale=Math.round(100*bytesLoaded/bytesTotal);
		};
		var image_mcl:MovieClipLoader = new MovieClipLoader();
		image_mcl.addListener(mclListener);
		image_mcl.loadClip(swfName, mcDisplay);
	}
	
	function initPlayer(){
		initBtnRoll(this.mcPlayer.btnPause);
		initBtnRoll(this.mcPlayer.btnPlaying);
		initBtnRoll(this.mcPlayer.btnStop);
		initBtnRoll(this.mcPlayer.btnBack);
		initBtnRoll(this.mcPlayer.btnNext);
		initBtnRoll(this.mcPlayer.btnSound);

		initBtnClic(this.mcPlayer.btnPause,playSWF,null);
		initBtnClic(this.mcPlayer.btnPlaying,pauseSWF,null);
		initBtnClic(this.mcPlayer.btnStop,stopSWF,null);
		initBtnClic(this.mcPlayer.cursorPlayer,releaseCursorPlayer,pressCursorPlayer);
		initBtnClic(this.mcPlayer.btnSound,muteSound,null);
		initBtnClic(this.mcPlayer.cursorSound,releaseCursorSound,pressCursorSound);
		initBtnClic(this.mcPlayer.btnBack,releaseBack);
		initBtnClic(this.mcPlayer.btnNext,releaseNext);
	}
	function initBtnRoll(btn){
		btn.onRollOver=function(){
			this.out._visible=false;
			this.over._visible=true;
		}
		btn.onRollOut=btn.onReleaseOutside=function(){
			this.out._visible=true;
			this.over._visible=false;
		}
	}
	
	function initBtnClic(btn,funcRelease,funcPress){
		var obj=this;
		btn.onRelease=btn.onReleaseOutside=function(){
			funcRelease(obj);
		}
		btn.onPress=function(){
			funcPress(obj);
		}
	}
	
	///
	
	function pauseSWF(obj){
		trace("pauseSWF");
		obj.mcDisplay.stop();
		obj.mcPlayer.btnPause._visible=true;
		obj.mcPlayer.btnPlaying._visible=false;
		obj.breakSWF(obj);
		obj.playingSWF=false;
	}
	
	function playSWF(obj){
		trace("playSWF");
		obj.mcDisplay.play();
		obj.mcPlayer.btnPause._visible=false;
		obj.mcPlayer.btnPlaying._visible=true;
		obj.runSWF(obj);
		obj.playingSWF=true;
	}
	function stopSWF(obj){
		trace("stopSWF");
		obj.mcDisplay.gotoAndStop(1);
		obj.mcPlayer.btnPause._visible=true;
		obj.mcPlayer.btnPlaying._visible=false;
		obj.initBtnStart(obj);
		obj.breakSWF(obj);
		obj.mcPlayer.cursorPlayer._x=obj.mcPlayer.bar._x;
		obj.playingSWF=false;
	}
	
	function muteSound(obj){
		var vol=obj.mcSound.getVolume();
		trace("muteSound avec vol="+vol);
		if(vol==0) obj.mcSound.setVolume(obj.currentVolume);
		else obj.mcSound.setVolume(0);
	}
	
	function releaseCursorPlayer(obj){
		trace("releaseCursorPlayer");
		obj.mcPlayer.cursorPlayer.stopDrag();
		obj.breakCursor(obj);
	}
	function pressCursorPlayer(obj){
		trace("pressCursorPlayer");
		var g=obj.mcPlayer.bar._x;
		var h=obj.mcPlayer.bar._y;
		var d=g+obj.mcPlayer.bar._width;
		trace("d: "+d);
		var b=h;
		startDrag(obj.mcPlayer.cursorPlayer,true,g,h,d,b);
		obj.runCursor(obj);
	}
	
	function releaseCursorSound(obj){
		trace("releaseCursorSound");
		obj.mcPlayer.cursorSound.stopDrag();
		obj.breakVolume(obj);
	}
	function pressCursorSound(obj){
		trace("pressCursorSound");
		var g=obj.mcPlayer.barSound._x;
		var h=obj.mcPlayer.barSound._y;
		var d=g+obj.mcPlayer.barSound._width;
		trace("d: "+d);
		var b=h;
		startDrag(obj.mcPlayer.cursorSound,true,g,h,d,b);
		obj.runVolume(obj);
	}
	
	function releaseBack(obj){
		trace("releaseBack");
		var currFrame=obj.mcDisplay._currentframe;
		if(obj.playingSWF) obj.mcDisplay.gotoAndPlay(currFrame-25);
		else obj.mcDisplay.gotoAndStop(currFrame-25);
		obj.setCursorPosition(obj);
	}
	function releaseNext(obj){
		trace("releaseNext");
		var currFrame=obj.mcDisplay._currentframe;
		if(obj.playingSWF) obj.mcDisplay.gotoAndPlay(currFrame+25);
		else obj.mcDisplay.gotoAndStop(currFrame+25);
		obj.setCursorPosition(obj);
	}
	
	function runCursor(obj){
		obj.pauseSWF(obj);
		obj.idRunC=setInterval(obj.setSWFPosition,100,obj);
	}
	function breakCursor(obj){
		clearInterval(obj.idRunC);
	}
	function setSWFPosition(obj){
		var posX=Math.abs(obj.mcPlayer.bar._x-obj.mcPlayer.cursorPlayer._x);
		var width=obj.mcPlayer.bar._width;
		var totalframes=obj.mcDisplay._totalframes;
		var currframe=Math.round(totalframes*posX/width);
		obj.mcDisplay.gotoAndStop(currframe);
	}
	
	function runSWF(obj){
		obj.idRunS=setInterval(obj.setCursorPosition,100,obj);
	}
	function breakSWF(obj){
		clearInterval(obj.idRunS);
	}
	function setCursorPosition(obj){
		var width=obj.mcPlayer.bar._width;
		var totalframes=obj.mcDisplay._totalframes;
		var currframe=obj.mcDisplay._currentframe;
		var posX=obj.mcPlayer.bar._x+Math.round(currframe*width/totalframes);
		obj.mcPlayer.cursorPlayer._x=posX;
	}
		
	function runVolume(obj){
		obj.idRunV=setInterval(obj.setDisplayVolume,100,obj);
	}
	function breakVolume(obj){
		clearInterval(obj.idRunV);
	}
	function setDisplayVolume(obj){
		var width=obj.mcPlayer.barSound._width;
		var posC= Math.abs(obj.mcPlayer.barSound._x+width-obj.mcPlayer.cursorSound._x);
		obj.currentVolume=100-100*posC/width;
		obj.mcSound.setVolume(obj.currentVolume);
		trace(obj.currentVolume);
	}
	
}

