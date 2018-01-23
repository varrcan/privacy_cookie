'use strict';

;{
	var closeEvent = function closeEvent() {
		var button = document.getElementById('cookie_close');
		button.onclick = function () {
			var panel = document.getElementById('cookie');
			panel.style.display = 'none';
			setStorage();
		};
	};

	var createCookieMarkup = function createCookieMarkup(cookie_link) {
		if (!getStorage()) {
			var element = document.createElement('div');
			var style = document.createElement('style');
			element.id = 'cookie';
			element.innerHTML = cookieText(cookie_link);
			style.innerHTML = cookie_style;

			document.head.appendChild(style);
			document.body.appendChild(element);

			closeEvent();
		}
	};

	var setStorage = function setStorage() {
		return localStorage.setItem('hidepanel', '1');
	};
	var getStorage = function getStorage() {
		return localStorage.getItem('hidepanel');
	};

	var cookieText = function cookieText(link) {
		return '<div class="cookie_wrap">\n\t\t\t\t<div class="cookie_content">\n\t\t\t\t\u041D\u0430 \u044D\u0442\u043E\u043C \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0444\u0430\u0439\u043B\u044B cookie, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u044E\u0442 \u0440\u0430\u0431\u043E\u0442\u0443 \u0432\u0441\u0435\u0445 \u0444\u0443\u043D\u043A\u0446\u0438\u0439 \u0434\u043B\u044F \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0439 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u043F\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435. \u0415\u0441\u043B\u0438 \u0432\u044B \u043D\u0435 \u0445\u043E\u0442\u0438\u0442\u0435 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B cookie, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043D\u0430 \u0441\u0432\u043E\u0435\u043C \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0435. \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u044F \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044E \u043F\u043E \u0441\u0430\u0439\u0442\u0443, \u0432\u044B \u043A\u043E\u0441\u0432\u0435\u043D\u043D\u043E \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0435 \u0441\u0432\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0444\u0430\u0439\u043B\u043E\u0432 cookie \u043D\u0430 \u044D\u0442\u043E\u043C \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0435. \u0411\u043E\u043B\u0435\u0435 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0432 \u043D\u0430\u0448\u0435\u0439 <a href="' + link + '" target="_blank">\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0435 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438</a>\n\t\t\t\t</div>\n\t\t\t\t<button id="cookie_close" class="cookie_close"></button>\n\t\t\t</div>';
	};

	var cookie_style = '#cookie {\n\t\t\t\twidth: 100%;\n\t\t\t\tposition: fixed;\n\t\t\t\tbottom: 0;\n\t\t\t\tcolor: #fff;\n\t\t\t\tbackground: #000;\n\t\t\t\topacity: .8;\n\t\t\t\tz-index:99999;\n\t\t\t}\n\t\t\t#cookie .cookie_wrap {\n\t\t\t\tmax-width: 1360px;\n\t\t\t\tmargin: 0 auto;\n\t\t\t\tposition: relative;\n\t\t\t}\n\t\t\t#cookie .cookie_content {\n\t\t\t\tmax-width: 1000px;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tfloat: left;\n\t\t\t\tpadding: 10px;\n\t\t\t\tline-height: 15px;\n\t\t\t\tmargin-right: 5%;\n\t\t\t}\n\t\t\t#cookie .cookie_content a {\n\t\t\t\tcolor: #ffd155;\n\t\t\t}\n\t\t\t#cookie .cookie_content a:hover {\n\t\t\t\tcolor: #fee483;\n\t\t\t}\n\t\t\t#cookie button:active, button:focus {\n\t\t\t\toutline: none;\n\t\t\t}\n\t\t\t#cookie button::-moz-focus-inner {\n\t\t\t\tborder: 0;\n\t\t\t}\n\t\t\t#cookie .cookie_close {\n\t\t\t\twidth: 44px;\n\t\t\t\theight: 44px;\n\t\t\t\tcursor: pointer;\n\t\t\t\ttransition: background-color 0.3s ease;\n\t\t\t\tposition: absolute;\n\t\t\t\tbackground: none;\n\t\t\t\ttop: 15px;\n\t\t\t\tright: 15px;\n\t\t\t\tdisplay: block;\n\t\t\t\tborder: none;\n\t\t\t\toutline: none;\n\t\t\t}\n\t\t\t#cookie .cookie_close:before, .cookie_close:after {\n\t\t\t\ttransition: transform 0.3s ease;\n\t\t\t\tbackground: #fff;\n\t\t\t\tcontent: \'\';\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 50%;\n\t\t\t\tleft: 50%;\n\t\t\t\twidth: 28px;\n\t\t\t\theight: 2px;\n\t\t\t}\n\t\t\t#cookie .cookie_close:before {\n\t\t\t\ttransform: rotate(45deg);\n\t\t\t}\n\t\t\t#cookie .cookie_close:after {\n\t\t\t\ttransform: rotate(-45deg);\n\t\t\t}\n\t\t\t#cookie .cookie_close:hover:before {\n\t\t\t\ttransform: rotate(135deg);\n\t\t\t}\n\t\t\t#cookie .cookie_close:hover:after {\n\t\t\t\ttransform: rotate(45deg);\n\t\t\t}';
}
