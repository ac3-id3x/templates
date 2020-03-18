

window.addEventListener('load', (function() { 
	if (typeof msgDate !== 'undefined')
	{
		var title = document.getElementById("popupMsgTitle");
		
		if (title == null)
		{
			var overlay = document.createElement("div");   
			overlay.id = "popupMsgInfoOverlay";
			overlay.classList.add("msgInfoOverlay");
			var html = "<div class=\"popup\">";
			if (typeof msgTitle !== 'undefined')
				html+="<h2 id=\"popupMsgTitle\">" + msgTitle + "</h2>";
			html += "<a class=\"close\" href=\"#\">&times;</a>";
			html += "<div class=\"content\">" + msgInfo + "</div></div></div>";
			overlay.innerHTML = html;
			document.body.appendChild(overlay); 
		}

		if (sessionStorage.getItem('popupMsg') != msgDate)
		{
			sessionStorage.setItem('popupMsg', msgDate);
			window.location.href="#popupMsgInfoOverlay";
		}
	}
 }), false )