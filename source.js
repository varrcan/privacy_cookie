window.onload = function () {
	let getStorage = () => localStorage.getItem('hidepanel');
	if (!getStorage()) createCookieMarkup();
};

function createCookieMarkup() {
	let setStorage = () => localStorage.setItem('hidepanel', '1');
	let cookieHTML = (text = cookieDefaultText()) =>
		`<div class="cookie_wrap">
			<div class="cookie_content">
				${text}
			</div>
			<button id="cookie_close" class="cookie_close"></button>
		</div>`;

	let cookieDefaultText = () =>
		`На этом веб-сайте используются файлы cookie, которые обеспечивают работу всех функций для наиболее эффективной навигации по странице. Если вы не хотите принимать постоянные файлы cookie, пожалуйста, выберите соответствующие настройки на своем компьютере. Продолжая навигацию по сайту, вы косвенно предоставляете свое согласие на использование файлов cookie на этом веб-сайте. Более подробная информация предоставляется в нашей <a href="${cookiePanel.link}" target="_blank">Политике конфиденциальности</a>`;

	let cookie_style =
		`#cookie{width:100%;position:fixed;min-height:70px;bottom:0;color:#fff;background:#000;opacity:.8;z-index:99999}#cookie .cookie_wrap{max-width:1360px;margin:0 auto;position:relative}#cookie .cookie_content{max-width:1000px;font-size:14px;float:left;padding:10px;line-height:15px;margin-right:5%}#cookie .cookie_content a{color:#ffd155}#cookie .cookie_content a:hover{color:#fee483}#cookie button:active,button:focus{outline:none}#cookie button::-moz-focus-inner{border:0}#cookie .cookie_close{width:44px;height:44px;cursor:pointer;transition:background-color .3s ease;position:absolute;background:none;top:15px;right:15px;display:block;border:none;outline:none}#cookie .cookie_close:before,.cookie_close:after{transition:transform .3s ease;background:#fff;content:'';position:absolute;top:50%;left:50%;width:28px;height:2px}#cookie .cookie_close:before{transform:rotate(45deg)}#cookie .cookie_close:after{transform:rotate(-45deg)}#cookie .cookie_close:hover:before{transform:rotate(135deg)}#cookie .cookie_close:hover:after{transform:rotate(45deg)}`;

	function bindCloseEvent() {
		let button = document.getElementById('cookie_close');
		button.onclick = function () {
			let panel = document.getElementById('cookie');
			panel.style.display = 'none';
			setStorage();
		};
	}

	let element = document.createElement('div');
	let style = document.createElement('style');
	element.id = 'cookie';
	element.innerHTML = cookieHTML(cookiePanel.text);
	style.innerHTML = cookie_style;
	document.head.appendChild(style);
	document.body.appendChild(element);
	bindCloseEvent();

}

