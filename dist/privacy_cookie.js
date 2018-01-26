'use strict';

window.onload = function () {
	var getStorage = function getStorage() {
		return localStorage.getItem('hidepanel');
	};
	if (!getStorage()) createCookieMarkup();
};

function createCookieMarkup() {
	var setStorage = function setStorage() {
		return localStorage.setItem('hidepanel', '1');
	};
	var cookieHTML = function cookieHTML() {
		var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : cookieDefaultText();
		return '<div class="cookie_wrap">\n\t\t\t<div class="cookie_content">\n\t\t\t\t' + text + '\n\t\t\t</div>\n\t\t\t<button id="cookie_close" class="cookie_close"></button>\n\t\t</div>';
	};

	var cookieDefaultText = function cookieDefaultText() {
		return '\u041D\u0430 \u044D\u0442\u043E\u043C \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0444\u0430\u0439\u043B\u044B cookie, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u044E\u0442 \u0440\u0430\u0431\u043E\u0442\u0443 \u0432\u0441\u0435\u0445 \u0444\u0443\u043D\u043A\u0446\u0438\u0439 \u0434\u043B\u044F \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0439 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u043F\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435. \u0415\u0441\u043B\u0438 \u0432\u044B \u043D\u0435 \u0445\u043E\u0442\u0438\u0442\u0435 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B cookie, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043D\u0430 \u0441\u0432\u043E\u0435\u043C \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0435. \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u044F \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044E \u043F\u043E \u0441\u0430\u0439\u0442\u0443, \u0432\u044B \u043A\u043E\u0441\u0432\u0435\u043D\u043D\u043E \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0435 \u0441\u0432\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0444\u0430\u0439\u043B\u043E\u0432 cookie \u043D\u0430 \u044D\u0442\u043E\u043C \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0435. \u0411\u043E\u043B\u0435\u0435 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0432 \u043D\u0430\u0448\u0435\u0439 <a href="' + cookiePanel.link + '" target="_blank">\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0435 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438</a>';
	};

	var cookie_style = '#cookie{width:100%;position:fixed;min-height:70px;bottom:0;color:#fff;background:#000;opacity:.8;z-index:99999}#cookie .cookie_wrap{max-width:1360px;margin:0 auto;position:relative}#cookie .cookie_content{max-width:1000px;font-size:14px;float:left;padding:10px;line-height:15px;margin-right:5%}#cookie .cookie_content a{color:#ffd155}#cookie .cookie_content a:hover{color:#fee483}#cookie button:active,button:focus{outline:none}#cookie button::-moz-focus-inner{border:0}#cookie .cookie_close{width:44px;height:44px;cursor:pointer;transition:background-color .3s ease;position:absolute;background:none;top:15px;right:15px;display:block;border:none;outline:none}#cookie .cookie_close:before,.cookie_close:after{transition:transform .3s ease;background:#fff;content:\'\';position:absolute;top:50%;left:50%;width:28px;height:2px}#cookie .cookie_close:before{transform:rotate(45deg)}#cookie .cookie_close:after{transform:rotate(-45deg)}#cookie .cookie_close:hover:before{transform:rotate(135deg)}#cookie .cookie_close:hover:after{transform:rotate(45deg)}';

	function bindCloseEvent() {
		var button = document.getElementById('cookie_close');
		button.onclick = function () {
			var panel = document.getElementById('cookie');
			panel.style.display = 'none';
			setStorage();
		};
	}

	var element = document.createElement('div');
	var style = document.createElement('style');
	element.id = 'cookie';
	element.innerHTML = cookieHTML(cookiePanel.text);
	style.innerHTML = cookie_style;
	document.head.appendChild(style);
	document.body.appendChild(element);
	bindCloseEvent();
}
