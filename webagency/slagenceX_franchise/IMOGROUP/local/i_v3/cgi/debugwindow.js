var pos=1;

function ID3xDebugPopup() {
	var content;
	// Pour IE
	if( (document.all) ){
		content = '&nbsp;<b onclick="toggleID3x(true);" style="cursor:default;">ID3<i><sup>x</sup></i></b><br />'
			+'<div id="ifrID3xDebug" style="display:none">'
			+'<iframe src="/cgi/debug.aspx" border="1" width="562" height="300" style="border:1px;" ifrID3xDebugw onreadystatechange_disabled="ID3xDebugParser();"></iframe>'
			+'<input type="button" style="font:7pt;" value="Display sql" onclick="ID3xDebugParser();" /> '
				+'<input type="button" style="font:7pt;" value="Display forms" onclick="ID3xFormsParser();" /> '
				+'<input type="button" style="font:7pt;" value="Copier" onclick="ID3xCopy(ID3xSql);" /> '
			+'	<div id="ID3xSql" style="text-overflow : ellipsis; overflow : hidden;height:140px;width:400pt;border:1px; text-align:left; overflow-y:scroll;"></div>'
			+'</div>';
		o = document.createElement ('<div id="ID3xDebug" style="background-color:#EEEEEE;border:1px solid;position:absolute; left:2px; top:2px; z-index:1;font:menu;padding:2px; display:inline; text-align:right" status="closed"></div>');
		document.body.appendChild(o);
		ID3xDebug.innerHTML=content;			
		ID3xDebug.status='closed';
		window.onresize=ID3xResize;
		window.onscroll=ID3xScroll;
		toggleID3x(false);
	}
	// Pour un browser respectant (seulement) le DOM.
	if( !(document.all) && (document.createElement) ){
		
		// Création du conteneur DIV extérieur
		//'<div id="ID3xDebug" style="background-color:#EEEEEE;border:1px solid;position:absolute; left:2px; top:2px; z-index:1;font:menu;padding:2px; display:inline; text-align:right" status="closed"></div>'
		var elt_divID3xDebug;
		elt_divID3xDebug = document.createElement("div");
		elt_divID3xDebug.id = "ID3xDebug";
		elt_divID3xDebug.style.backgroundColor = "#EEEEEE"; 
		elt_divID3xDebug.style.border = "1px solid";
		elt_divID3xDebug.style.position = "absolute";
		elt_divID3xDebug.style.right = "2px";
		elt_divID3xDebug.style.top = "2px";
		elt_divID3xDebug.style.zIndex = "1";
		elt_divID3xDebug.style.font = "menu";
		elt_divID3xDebug.style.padding = "2px";
		elt_divID3xDebug.style.display = "inline";
		elt_divID3xDebug.style.textAlign = "right";
		elt_divID3xDebug.setAttribute( "status", "closed" );
		document.body.appendChild( elt_divID3xDebug );
		
		// Création et attachement du <b>
		// '&nbsp;<b onclick="toggleID3x(true);" style="cursor:default;">ID3x</b><br />'
		var elt_b;
		elt_b = document.createElement("b");
		elt_b.style.cursor = "default";
		elt_b.onclick = ID3xOpen;
		//elt_b.addEventListener( "click", "javascript:toggleID3x(true);" );
		elt_b.appendChild( document.createTextNode( "ID3x" ), "" );

		elt_divID3xDebug.appendChild( document.createTextNode( " " ) );
		elt_divID3xDebug.appendChild( elt_b );
		elt_divID3xDebug.appendChild( document.createElement("br") );

		// Création du div intérieur
		// '<div id="ifrID3xDebug" style="display:none">'
		var elt_divIfrID3xDebug;
		elt_divIfrID3xDebug = document.createElement("div");
		elt_divIfrID3xDebug.id = "ifrID3xDebug";
		//elt_divIfrID3xDebug.style.display = "none";
		
		// Création de l'IFrame intérieur
		// '<iframe src="/cgi/debug.aspx" border="1" width="562" height="300" style="border:1px;" ifrID3xDebugw onreadystatechange_disabled="ID3xDebugParser();"></iframe>'
		var elt_iframe = document.createElement("iframe");
		elt_iframe.style.backgroundColor = "#FFFFFF"; 
		elt_iframe.src = "/cgi/debug.aspx";
		elt_iframe.frameBorder = 1;
		//elt_iframe.marginwidth = 1;
		//elt_iframe.marginheight = 1;
		elt_iframe.width=562;
		elt_iframe.height=300;
		elt_iframe.style.border = "1px solid";
		elt_divIfrID3xDebug.appendChild( elt_iframe );
		
		
		elt_divIfrID3xDebug.appendChild( document.createElement("br") );
		
		var elt_form = document.createElement("form");
		
		// Button1 : '<input type="button" style="font:7pt;" value="Display sql" onclick="ID3xDebugParser();" /> '
		var elt_button1 = document.createElement("input");
		elt_button1.type = "button";
		elt_button1.style.font = "7pt";
		elt_button1.value = "Display sql";
		elt_button1.onclick = ID3xDebugParser;
		elt_form.appendChild( elt_button1 );
		// Button2 : '<input type="button" style="font:7pt;" value="Display forms" onclick="ID3xFormsParser();" /> '
		var elt_button2 = document.createElement("input");
		elt_button2.type = "button";
		elt_button2.style.font = "7pt";
		elt_button2.value = "Display forms";
		elt_button2.onclick = ID3xFormsParser;
		elt_form.appendChild( elt_button2 );
		// Button3 : '<input type="button" style="font:7pt;" value="Copier" onclick="ID3xCopy(ID3xSql);" /> '
		var elt_button3 = document.createElement("input");
		elt_button3.type = "button";
		elt_button3.style.font = "7pt";
		elt_button3.value = "Copy";
		elt_button3.onclick = "ID3xCopy(ID3xSql);"
		elt_form.appendChild( elt_button3 );
		elt_divIfrID3xDebug.appendChild( elt_form );

		// Création du dernier div
		//'	<div id="ID3xSql" style="text-overflow: ellipsis; overflow: hidden; height: 140px; width: 400pt; border: 1px; text-align: left; overflow-y: scroll"></div>';
		var elt_divID3xSql;
		elt_divID3xSql = document.createElement("div");
		elt_divID3xSql.id = "ID3xSql";
		elt_divID3xSql.style.textOverflow= "ellipsis";
		elt_divID3xSql.style.overflow= "hidden";
		elt_divID3xSql.style.height= "140px";
		elt_divID3xSql.style.width= "500px";
		elt_divID3xSql.style.border= "1px";
		elt_divID3xSql.style.textAlign= "left";
		//elt_divID3xSql.style.overflowY= "scroll";
		elt_divIfrID3xDebug.appendChild( elt_divID3xSql );

		elt_divID3xDebug.appendChild( elt_divIfrID3xDebug );
		
		//window.onresize=ID3xResize;
		//window.onscroll=ID3xScroll;
		toggleID3x(false);
	}
}

function ID3xResize ()
{
	toggleID3x(false);
}

function ID3xOpen ()
{
	toggleID3x(true);
}

function ID3xScroll ()
{
	clearTimeout();
	setTimeout('toggleID3x(false)',200);
}

function ID3xFormsParser() {
	var ID3xSql = document.getElementById( "ID3xSql" );
	if( ID3xSql )
	{
		// Pour IE
		if( (document.all) ){
			ID3xSql.innerHTML="<pre>";
			forms=document.all.tags("form");
			for (i=0; i<forms.length;i++) {
				ID3xSql.innerHTML+="<b>{"+i+"} id:</b> "
				+ forms[i].id
				+" <b>name:</b>"+ forms[i].name
				+" <b>method:</b>"+ forms[i].method
				+" <b>action:</b>"+ forms[i].action
				+"<br />";	
				ID3xScanTag(forms[i].all.tags("textarea"));
				ID3xScanTag(forms[i].all.tags("select"));
				ID3xScanTag(forms[i].all.tags("input"));
			}
			ID3xSql.innerHTML+="</pre>";
		}
		
		// Pour un browser respectant (seulement) le DOM.
		if( !(document.all) && (document.getElementsByTagName) ){
			ID3xSql.innerHTML="<pre>";
			var forms = document.getElementsByTagName( "form" );
			// -1 car on a un FORM pour les BUTTONS de Debug.
			for (i=0; i<forms.length-1;i++) {
				ID3xSql.innerHTML+="<b>{"+i+"} id:</b> "
				+ forms[i].id
				+" <b>name:</b>"+ forms[i].name
				+" <b>method:</b>"+ forms[i].method
				+" <b>action:</b>"+ forms[i].action
				+"<br />";	
				ID3xScanTag(forms[i].getElementsByTagName("textarea"));
				ID3xScanTag(forms[i].getElementsByTagName("select"));
				ID3xScanTag(forms[i].getElementsByTagName("input"));
			}
			ID3xSql.innerHTML+="</pre>";
		}
	}
}

function ID3xScanTag (o) {
	var ID3xSql = document.getElementById( "ID3xSql" );
	if( ID3xSql )
	{
		for (ii=0; ii<o.length;ii++) {
			ID3xSql.innerHTML+="&nbsp;&nbsp;<span style='width:100px;'><b>"+o[ii].name+"</b> [" + o[ii].type
			+"]</span> <b>id:</b>"+	o[ii].id
			+" <b>size:</b>"+	o[ii].size	
			+" <b>value:</b>"+	o[ii].value
			+" <b>tag:</b>"+	o[ii].tagName
			+" <b>onclick:</b>"+	o[ii].onclick
			+"<br />";
			if (o[ii].tagName=="SELECT") {
				oo=o[ii].children.tags("option");
				for (j=0;j<oo.length;j++) ID3xSql.innerHTML+="&nbsp;&nbsp;&nbsp;"+oo[j].innerText+" -> " + oo[j].value + "<br />";
			}
		}
	}
}

function toggleID3x(change) {
	var ID3xDebug = document.getElementById( "ID3xDebug" );
	var ifrID3xDebug= document.getElementById( "ifrID3xDebug" );
	var ID3xSql = document.getElementById( "ID3xSql" );

	if( ID3xDebug && ifrID3xDebug && ID3xSql )
	{
		if (change) {
			if (ID3xDebug.getAttribute( "status" )=='closed')
				ID3xDebug.setAttribute( "status", "open" );
			else
				ID3xDebug.setAttribute( "status", "closed" );
		}
		
		if (ID3xDebug.getAttribute( "status" )!='closed')
		{
			ID3xDebug.style.top=document.body.scrollTop+2;
			ID3xDebug.style.left=document.body.clientWidth-570;
			ID3xDebug.setAttribute( "status", "open" );
			ifrID3xDebug.style.display='inline';
			ID3xSql.style.display='block';
//			ifrID3xDebug.style.visibility = "visible";
		}	
		else
		{
			ID3xDebug.style.top=document.body.scrollTop+2;
			ID3xDebug.style.left=document.body.clientWidth-40;
			ID3xDebug.setAttribute( "status", "closed" );
			ifrID3xDebug.style.display='none';
			ID3xSql.style.display='none';
//			ifrID3xDebug.style.visibility = "hidden";
		}
	}		
}

function ID3xDebugParser() {
	var ID3xSql = document.getElementById( "ID3xSql" );
	var ifrID3xDebug = document.getElementById( "ifrID3xDebug" );
	if( ID3xSql && ifrID3xDebug )
	{
		ID3xSql.innerHTML="";
		if (ifrID3xDebug.firstChild.readyState=="complete") {
			debug=ifrID3xDebug.firstChild.contentWindow.document.body.innerHTML;
			mat="";
			do {
				mat=ID3xDonnePart(debug,"Id3.Data.Sql.ExecCached\(",")<br />");
			 	if (mat=="")
			 		break;
			 	else
			 		ID3xSql.innerHTML+="<li><a onclick='javascript:ID3xCopy(this);'>" + mat + "</span><br />";
			} while (true);
			
		}
	}
}

function ID3xCopy(o) {
   window.clipboardData.setData("Text", o.innerText);
}

function ID3xDonnePart (texte,debut,fin) {
	var p1,p2;
	pos=texte.indexOf(debut,pos);
	if (pos>-1) {
		pos+=	debut.length;
		p2=texte.indexOf(fin,pos);
		if (p2>-1) {
			p1=pos;
			pos=p2;
			return texte.substr(p1,p2-p1);
		}
	}
	return "";
}

