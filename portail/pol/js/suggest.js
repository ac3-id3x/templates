
$j(document).ready(launchSuggest);
var engineSuggest = null;

function launchSuggest()
{
	// Create suggest on textbox
	
	// 1 classic miniengine
	// 2 classic preliste
	// 3 cmi miniengine
	// 4 cmi preliste
	// 5 annuaire
	// var emode = $j("#emode").length > 0 ? parseInt($j("#emode").val()) : 1;
	var emode = parseInt($j("#emode").val());
	if(emode){
		engineSuggest = new Suggest(emode, $j("#ville_p,#ville"), $j('#autoSuggestionsList,#autoSuggestionsList_p'));
	}
}

// Suggest class
function Suggest(emode, inputControl, containerControl)
{
	this.emode = emode;
	this.containerControl = containerControl;
	this.classloader = '';
	this.urlautosuggest = '';
	this.inputControl = inputControl;
	this.ajaxQuery = null;
	this.isOpen = false;
	this.currentData = [];
	
	this.KEY = {
		UP: 38,
		DOWN: 40,
		DEL: 46,
		TAB: 9,
		RETURN: 13,
		ESC: 27,
		COMMA: 188,
		PAGEUP: 33,
		PAGEDOWN: 34,
		BACKSPACE: 8
	};
	
	this.ACTION = {
		SET:0,
		ADD:1
	};
	
	// launch initialization
	this.initSuggest();
}

Suggest.prototype.ClickCallback = null;

// Handle arrow key to navigate throught the list
Suggest.prototype.arrowKey = function(keyCode)
{
	var elemPos = '';
	var fncDir = '';
	switch (keyCode)
	{
		case this.KEY.UP: // Up
			elemPos = 'last';
			fncDir = 'prev';
			break;
		case this.KEY.DOWN: // Down
			elemPos = 'first';
			fncDir = 'next';
			break; 
	}
	
	// find next element and set class first on it
	var elemRef = this.containerControl.find('.first');
	var elemNext = elemRef.removeClass('first').addClass('in')[fncDir]('li.in');
	if (elemNext.length == 0)
	{
		elemNext = elemRef.parent()[fncDir]('ul').find('li.in:' + elemPos);
	}
	if (elemNext.length == 0)
	{
		elemRef.removeClass('in').addClass('first');
	}
	else
	{
		// if the selected element is outside the "window", we scroll to this element
		elemNext.removeClass('in').addClass('first');
		var diff = elemNext.offset().top - this.containerControl.offset().top;
		if (diff > this.containerControl.height())
		{
			this.containerControl.scrollTop(this.containerControl.scrollTop() + diff - this.containerControl.height() + elemNext.height());
		}
		else if (diff < 0)
		{
			this.containerControl.scrollTop(this.containerControl.scrollTop() + diff);
		}
	}
}

// Set argloca var (global variable)
Suggest.prototype.setArgLoca = function(elemIdx)
{
	var entry = this.currentData[elemIdx];
			
	var createArgs = ["&", entry.name, "=", entry.value];
	if(entry.namesup != null){
		createArgs.push("&", entry.namesup, "=", entry.valuesup);
	}
	argloca = createArgs.join('');
}

// get query for given entry index
Suggest.prototype.getQueryForEntry = function(elemIdx)
{
	var entry = this.currentData[elemIdx];
			
	return ["&", entry.name, "=", entry.value].join('');
}

Suggest.prototype.errorCallback = function()
{
	this.inputControl.removeClass(this.classloader);
}

Suggest.prototype.homeBind = function(data)
{
	var currentSuggest = this;
	
	$j('#suggestions li, #suggestions_p li').not('.header').click(function()
		{
			var elemIdx = parseInt($j(this).attr("rel"));
			currentSuggest.setArgLoca(elemIdx);

			currentSuggest.inputControl.val($j(this).children('.lib').text())
				.animate({ backgroundColor: "#ffffff" }, "fast");;
			currentSuggest.Close();
		}
	)
}

Suggest.prototype.searchBind = function(data)
{
	var currentSuggest = this;
	
	var listSuggest = $j('#suggestions li, #suggestions_p li').not('.header');
	
	listSuggest.children('.lib').click(function()
		{
			var elemIdx = parseInt($j(this).parent().attr("rel"));
			
			if (currentSuggest.ClickCallback != null)
			{
				currentSuggest.ClickCallback(currentSuggest.currentData[elemIdx], 
									currentSuggest.emode,
									currentSuggest.ACTION.ADD);
			}
			currentSuggest.Close();
		}
	);
	/*listSuggest.children('.addloc').tooltip({ 
			track: true, 
			delay: 0, 
			showURL: false, 
			showBody: " - ", 
			fade: 250 
		}
	).click(function () {
			var elemIdx = parseInt($j(this).parent().attr("rel"));
			if (currentSuggest.ClickCallback != null)
			{
		
				currentSuggest.ClickCallback(currentSuggest.currentData[elemIdx], 
									currentSuggest.emode,
									currentSuggest.ACTION.ADD);
			}
			currentSuggest.Close();
		}
	);*/
}

// Not used but here for test purpose
Suggest.prototype.htmlAjaxCallback = function(data)
{
	// Inject HTML for suggest
	this.containerControl.html(data);
	
	if (this.emode == 2 || this.emode == 4 || this.emode == 5)
	{
		this.searchBind();
	}
	else
	{
		this.homeBind();
	}
	
	this.Open();
	// Remove loader from input field
	this.inputControl.removeClass(this.classloader);
}

Suggest.prototype.jsonAjaxCallback = function(data, inputValue)
{
	var suggestHtml = [];
	var nbSection = data.length;
	var idx = 0;
	var showAddLoc = this.emode == 2 || this.emode == 4 || this.emode == 5;
	
	this.currentData = [];
	// Create HTML for suggest
	for (var i = 0; i < nbSection; i++)
	{
		var currentSection = data[i];
		suggestHtml.push('<ul><li class="header">&bull; ', currentSection.label , '</li>');
		var nbEntries = currentSection.values.length;
		for (var j = 0; j < nbEntries; j++)
		{
			var curValue = currentSection.values[j];
			var label = curValue.label;
			if (label != null)
			{
				this.currentData.push(curValue);
				suggestHtml.push('<li rel="', idx++, j == 0 && i == 0 ? '" class="first">' : 
					'" class="in">');
				if (showAddLoc)
				{
					
						// Add span for add cross, with title and alt
						if (!curValue.checked){
						//	if(this.emode != 5){ // Only emode 2 / 4 
						//		suggestHtml.push('<span class="addloc" alt="Ajouter ', label, '" title="Ajouter ', label,'"></span>');
						//	}
						suggestHtml.push('<span class="lib" alt="Ajouter ', label, 
							'" title="Ajouter ', label, '">');
						}
				}
				else
					suggestHtml.push('<span class="lib">');
				if (curValue.code != null)
				{
					label = [label, ' (', curValue.code, ')'].join('');
				}
				suggestHtml.push(label, '</span></li>');
			}
		}
		suggestHtml.push('</ul>');
	}
	if (nbSection == 0)
	{
		suggestHtml.push('<p>aucun r&eacute;sultat pour <strong>', inputValue, '</strong>, merci de modifier votre recherche</p>');
	}
	
	// Inject HTML for suggest
	this.containerControl.html(suggestHtml.join(''));
	
	var currentSuggest = this;
	
	// bind hover event
	this.containerControl.find('li.in').hover(
		function(e){ 
			currentSuggest.containerControl.find('li.first').removeClass().addClass('in');
			$j(this).removeClass().addClass('first'); },
		function(e){ }
	);
	
	if (showAddLoc)
	{
		this.searchBind();
	}
	else
	{
		this.homeBind();
	}
	
	this.Open();
	// Remove loader from input field
	this.inputControl.removeClass(this.classloader);
}

// Close suggest
Suggest.prototype.Close = function()
{
	this.isOpen = false;
	$j('#suggestions,#suggestions_p').fadeOut();
	this.inputControl.removeClass(this.classloader);
}

// Open suggest
Suggest.prototype.Open = function()
{
	this.isOpen = true;
	$j('#suggestions,#suggestions_p').show();
}

Suggest.prototype.KeyDown = function(event, curInControl)
{
	// handle special key
	switch (event.keyCode) {
		case this.KEY.UP:
		case this.KEY.DOWN:
			event.preventDefault();
			this.arrowKey(event.keyCode);
			break;
		case this.KEY.ESC:
			this.Close();
			break;
		case this.KEY.RETURN:
			if (this.isOpen)
			{
				event.preventDefault();
				// Close suggest and launch click event on selected on
				this.Close();
				this.containerControl.find('.first').click();
				this.containerControl.find('.first .lib').click();
			}
			else
			{
				$j("#btn_engine, #btn_engine_p").click();
			}
			break;
	}
}

Suggest.prototype.KeyUp = function(event, curInControl)
{
	var currentSuggest = this;
	var inputValue = curInControl.val();
	//console.debug("inputValue:"+inputValue);
	// Set to the current input
	currentSuggest.inputControl = curInControl;
 	if ((event.keyCode != this.KEY.ALT) && (inputValue != "")) { // Disable ALT event and null value
		switch (event.keyCode) {
			case this.KEY.UP:
			case this.KEY.DOWN:
			case this.KEY.RETURN:
			case this.KEY.ESC:
				// Handled in keydown event for key repeat when not released
				return;
			default:
				// If there is already a request in progress, cancel it
				
				if(this.ajaxQuery != null){
					//console.debug(this.ajaxQuery+"this.ajaxQuery");
					
					this.ajaxQuery.abort();
					delete this.ajaxQuery;
					this.ajaxQuery = null;
				}
				this.inputControl.addClass(this.classloader);
				
				var query_suggest = ["ville=", encodeURIComponent(inputValue), "&mode=", this.emode];
				try {
					 query = searchQuery.toString();
				} catch (e) {};
	
				if (this.emode == 2)
					query_suggest.push("&", query);
					

				// launch ajax query
				this.ajaxQuery = $j.ajax({ 
				contentType: "application/json; charset=utf-8",
				url: this.urlautosuggest, 
				data: query_suggest.join(''),
				type: 'GET', 
				dataType: "json", 
				timeout: 5000,
				success: function(data){ 
					currentSuggest.jsonAjaxCallback(data, inputValue);
				}, 
				error: function() {  
					currentSuggest.errorCallback();
				} 
				}); 
			break;
		}
	}
	if (this.inputControl.val().length == 0)
	{
		this.Close();
	}
}

Suggest.prototype.initSuggest = function()
{
	

	if((this.emode == 1)||(this.emode == 3)){
		if(this.inputControl.is(":hidden")){
			this.classloader = "loadotosugg";	
		}else {
			this.classloader = "loadotosugg_n";	
		}
	}else {
		this.classloader = "loadotosuggmini";
	}
	
	// Choose autosuggest Url
	if((this.emode == 3) ||(this.emode == 4)){
		this.urlautosuggest = "/js,ajax,villequery_cmi_v3.htm";
	} else if((this.emode == 1) ||(this.emode == 2) || this.emode == 5){
		this.urlautosuggest = "/js,ajax,villequery_v3.htm";
	}
	
	// Create context variable
	var currentSuggest = this;
	
	this.inputControl.blur(function () {
		if ($j(this).val() == ''){currentSuggest.Close();}
	});
	
	// Bind events
	this.inputControl.keydown(function (e) {
			currentSuggest.KeyDown(e, $j(this));});
	this.inputControl.keyup(function (e) {
			currentSuggest.KeyUp(e, $j(this));});
	this.inputControl.blur(function (e) {
			if ($j(this).val() == ''){ currentSuggest.Close(); }
			
	});
}