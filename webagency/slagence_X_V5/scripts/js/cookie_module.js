function setCookieModule(p) {
	// p = { idt: String, repMsrv: String, lgCookieButton: String, lgLienPlusDInfos: String, lgCookieWarning: String }
	
	var self = {};
	
	var date = new Date(),    
		bannerOk = true,
		cookieName = "accept_cookie_" + p.repMsrv,
		cookieNameIndex = "accept_cookie_" + p.repMsrv + "_previous";
		
	var cookieBanner = function() {   
		var needBanner = self.getLocalStorage(cookieName);
		
		var previousPage, previousDate;
		if (self.getLocalStorage(cookieNameIndex)) {
			previousPage = self.getLocalStorage(cookieNameIndex).split('::')[0];
			previousDate = self.getLocalStorage(cookieNameIndex).split('::')[1];
		}
		
		// console.log(needBanner, needBanner, date, new Date(needBanner) < date);
		// console.log(!previousPage, previousPage, previousDate, p.idt == previousPage, new Date(previousDate) < date);
		if ( !document.getElementById("banner_cookie") && (!needBanner || (needBanner && new Date(needBanner) < date)) && (!previousPage || p.idt == previousPage || new Date(previousDate) < date)) {
			
			var cookieWarning = document.createElement('p');
			cookieWarning.style = "display: inline; font-size: 12px; margin: 0;";
			cookieWarning.innerHTML = p.lgCookieWarning;
			
			
			var cookiePlusInfos = document.createElement('a');
			cookiePlusInfos.href = "/legal,mentions.htm#legal-cookie";
			cookiePlusInfos.className = "lien_plus";
			cookiePlusInfos.style = "font-size: 12px; cursor: pointer; color: #fff; width: 70px; height: 29px; line-height: 29px; vertical-align: middle; border: medium none;"
				+ " -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color: rgba(0, 0, 0, 0.2); margin-left: 10px; text-decoration: none; padding: 8px 6px 8px 6px;";
			cookiePlusInfos.innerHTML = p.lgLienPlusDInfos;
			
			
			var cookieButton = document.createElement('button');
			cookieButton.type = "submit";
			cookieButton.id = "submit_ok";
			cookieButton.className = "button_submit";
			cookieButton.style = "font-size: 12px; cursor: pointer; color: #fff; width: 70px; height: 29px; vertical-align: middle; border: medium none; -webkit-border-radius: 2px;"
				+ " -moz-border-radius: 2px; border-radius: 2px; background-color: #c5071b; margin-left: 10px;";
			cookieButton.innerHTML = p.lgCookieButton;
			
			
			//var cookiePersonalize = document.createElement('a');
			//cookiePersonalize.href = "#modalDisableCookie";
			//cookiePersonalize.setAttribute('role', "button");
			//cookiePersonalize.setAttribute('data-toggle', "modal");
			//cookiePersonalize.style = "font-size: 12px; cursor: pointer; color: #fff; width: 70px; height: 29px; vertical-align: middle; border: medium none; -webkit-border-radius: 2px;"
			//	+ " -moz-border-radius: 2px; border-radius: 2px; background-color: #c5071b; margin-left: 10px; padding: 8px 6px 8px 6px; text-decoration: none;";
			//cookiePersonalize.innerHTML = " Personnaliser ";
			
			
			var innerDiv = document.createElement('div');
			innerDiv.className = "text_cookies";
			innerDiv.style = "display: inline-block; width: 100%; margin-right: 5px; text-align: center; font-size: 12px; line-height: 1.5em; vertical-align: middle;";
			innerDiv.appendChild(cookieWarning);
			innerDiv.appendChild(cookiePlusInfos);
			innerDiv.appendChild(cookieButton);
			//innerDiv.appendChild(cookiePersonalize);
			// Décommenter les lignes 46 à 52, et la ligne 61 pour activer le bouton « Personnaliser ».
			
			
			var outerDiv = document.createElement('div');
			outerDiv.style = "margin: 0 auto; width: 100%;padding: 10px;";
			outerDiv.appendChild(innerDiv);
			
			
			var div = document.createElement('div');
			div.id = "banner_cookie";
			div.className = "cookie-banner";
			div.appendChild(outerDiv);

			document.body.insertBefore(div, document.body.childNodes[0]);

			document.querySelector('#banner_cookie button').addEventListener('click', self.closeBanner);                

			var timeout;
			function updatePreviousDate() {
				if (self.getLocalStorage(cookieName) && new Date(self.getLocalStorage(cookieName)) > date) {
					clearTimeout(timeout);
					self.deleteLocalStorage(cookieNameIndex);
				} else {
					var nextDate = new Date();
					nextDate.setSeconds(nextDate.getSeconds() + 20);
					localStorage.setItem(cookieNameIndex, p.idt + '::'+nextDate);
					setTimeout(updatePreviousDate, 10*1000);
				}
			}
			updatePreviousDate();

			bannerOk = false;
		} else if (previousPage && p.idt != previousPage && new Date(previousDate) > date) {
			self.deleteLocalStorage(cookieName);
			
			//date is set one year later to be in CNIL condition
			date.setFullYear(date.getFullYear() +1);

			self.setLocalStorage(cookieName, date);
			self.deleteLocalStorage(cookieNameIndex);
		}
	};
	
	self.isCookieAccepted = function() {
		return bannerOk;
	};
	
	self.getCookie = function(name) {
		var cookie = {};
		document.cookie.split("; ").map(function(val) {
			cookie[val.substr(0, val.indexOf("="))] = val.substr(val.indexOf("=")+1);
		});

		return cookie[name];
	};
	
	self.deleteCookie = function(name) {
		self.setCookie(name, "", -100);
	};
	
	self.setCookie = function(name, value, timeExpires, pathwanted) {
		if (!bannerOk) 
			return false;

		var date = new Date(),
			path = "path=",
			expires = "";


		if (pathwanted)
			path += pathwanted;
		else
			path += "/";

		if (timeExpires) {
			date.setTime(date.getTime() + timeExpires * 24 * 60 * 60 * 1000);
			expires = "expires=" + date.toUTCString() + "; ";
		}

		document.cookie = name + "=" + value + "; " + expires + path;
	};
	
	self.getLocalStorage = function(name) {
		return localStorage.getItem(name);
	};
	
	self.setLocalStorage = function(name, value) {
		if (!bannerOk) 
			return false;

		return localStorage.setItem(name, value);
	};
	
	self.deleteLocalStorage = function(name) {
		return localStorage.removeItem(name);
	};
	
	self.closeBanner = function() {
		var element = document.getElementById('banner_cookie');
		element.parentNode.removeChild(element);

		bannerOk = true;
		date.setFullYear(date.getFullYear() +1);
		self.setLocalStorage(cookieName, date.toUTCString());
	};
	
	function inIframe () {
		try {
			return window.self !== window.top;
		} catch (e) {
			return true;
		}
	}
	
	var isIframe = inIframe();
	if (isIframe !== true) {
		cookieBanner();
	}
	
	return self;
}
