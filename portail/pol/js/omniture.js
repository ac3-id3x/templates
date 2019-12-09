/*
    /////////////////////////////////////////////////////////////
    file: /jslibrary/sv6_gen_omniture.js
    function: Object Omniture
    returns: void
    created by: Pascal Hertereau - mai 2011
    website : SL / SLNEUF
    by: Pascal Hertereau
    /////////////////////////////////////////////////////////////
*/
var current_omniture = null;  

function Omniture(){
	console.info("launchOmniture");
}

/*
    **************************************************************
    function: Initilialisation Object Omniture
    returns: Object Omniture
    created by: Pascal Hertereau
    **************************************************************
*/
Omniture.prototype.initOmniture = function(){	
	var current_Omniture = this; 
};

/*
**************************************************************
function: surcharge pour page au même niveau / pagevue
parametes : 
created by: Pascal Hertereau
**************************************************************
*/
Omniture.prototype.omniturePageSurchargeN3 = function(sourcePage,destPage,omniLib,omniEvent){	
	s.prop3 = s.prop3.replace(sourcePage,destPage);
	s.hier1 = s.hier1.replace(sourcePage,destPage);
	s.pageName = s.pageName.replace(sourcePage,destPage);
	s.eVar7 = omniLib;
	s.events = omniEvent;
	var s_code=s.t();          
	if(s_code)document.write(s_code);
};

/*
**************************************************************
function: surcharge pour page au même niveau / pagevue
parametes : 
created by: Pascal Hertereau
**************************************************************
*/
Omniture.prototype.omniturePageSurchargeN2 = function(sourcePage,destPage,omniLib,omniEvent){	
	s.prop2 = s.prop2.replace(sourcePage,destPage);
	s.hier1 = s.hier1.replace(sourcePage,destPage);
	s.pageName = s.pageName.replace(sourcePage,destPage);
	s.eVar7 = omniLib;
	s.events = omniEvent;
	var s_code=s.t();          
	if(s_code)document.write(s_code);
};

/*
**************************************************************
function: lead avec context de la page
parametes : 
created by: Pascal Hertereau
**************************************************************
*/
Omniture.prototype.omnitureLeadContext = function(omniLib,omniEvent){		
	s.eVar7 = omniLib;
	s.events = omniEvent;
	var s_code=s.t();          
	if(s_code)document.write(s_code);
};

/*
**************************************************************
function: lead begin/lead end creator
parametes : {omniLib : type de lead ou nom du lead, omniEvent : { event9, event10} }
@created by: Pascal Hertereau
**************************************************************
*/
Omniture.prototype.omnitureLeadSLP = function(omniLib,omniEvent){	
	var s=s_gi(s_account);
	s.eVar7=omniLib;
	s.events=omniEvent; 
	s.linkTrackVars='eVar7,events'; 
	s.linkTrackEvents=omniEvent; 
	s.tl(this,'o',omniLib);
};

/*
**************************************************************
function: tracking usage of tool 
parametes : {omniLib : nom de l'outil }
created by: Pascal Hertereau
**************************************************************
*/
Omniture.prototype.useTool = function(omniLib){	
	var s=s_gi(s_account);
	s.eVar6=omniLib;
	s.events='event11';
	s.linkTrackVars='eVar6,events';
	s.linkTrackEvents='event11';
	s.tl(this, 'o', omniLib);
};