var xmlhttp=false;
/*@cc_on @*/
/*@if (@_jscript_version >= 5)
// JScript gives us Conditional compilation, we can cope with old IE versions.
// and security blocked creation of the objects.
try {
	xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
} catch (e) {
	try {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	} catch (E) {
		xmlhttp = false;
	}
}
@end @*/
if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
	xmlhttp = new XMLHttpRequest();
}

var submited;

function sendXMLHTTPRequest(url, dest_div){
	xmlhttp.open("GET.html", url, true);
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4) {
			updateDiv(dest_div, xmlhttp.responseText);
		}
	}
	xmlhttp.send(null);
}

function formToHTTPGET(form){
	var query_string = '';
	for (var i = 0; i < form.elements.length; i++) 
	{
		if (form.elements[i].tagName == "FIELDSET") continue;
		var parameter = form.elements[i].name + '=' + escape(form.elements[i].value);
		switch (form.elements[i].type){
			
			case 'checkbox':
	                case 'Checkbox':
        	                if (form.elements[i].checked)
                	        {
                        	        if (query_string.length == 0)
                                	{
                                        	query_string = parameter;
	                                } else {
	                                        query_string = query_string + '&' + parameter;
        	                        }
                	        }
                        	break;

			case 'radio':
			case 'Radio':
				if (form.elements[i].checked)
				{
					if (query_string.length == 0)
					{
						query_string = parameter;
					} else {
						query_string = query_string + '&' + parameter;
					}
				}
				break;
			
			default:
				if (query_string.length == 0)
				{
					query_string = parameter;
				} else {
					query_string = query_string + '&' + parameter;
				}
		}
	}
	return query_string;
}

function updateDiv(id, value){
	document.getElementById(id).innerHTML = value;
}

function loadXML(url, handler, param) {
	var local_xmldoc = null;
	
	if (document.implementation && document.implementation.createDocument) {
		local_xmldoc = document.implementation.createDocument("", "", null);
		local_xmldoc.onload = function(  ) { handler(local_xmldoc, param); }
		local_xmldoc.load(url);
	}
	else if (window.ActiveXObject) { 
		local_xmldoc = new ActiveXObject("Microsoft.XMLDOM");
		local_xmldoc.onreadystatechange = function(  ) {         
			if (local_xmldoc.readyState == 4) handler(local_xmldoc, param);
		}
		local_xmldoc.load(url);
	}
	return local_xmldoc;
}
