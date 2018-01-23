;{

	let setStorage = () => localStorage.setItem('hidepanel', '1');
	let getStorage = () => localStorage.getItem('hidepanel');

	let cookieText = (link) =>
			`<div class="cookie_wrap">
				<div class="cookie_content">
				На этом веб-сайте используются файлы cookie, которые обеспечивают работу всех функций для наиболее эффективной навигации по странице. Если вы не хотите принимать постоянные файлы cookie, пожалуйста, выберите соответствующие настройки на своем компьютере. Продолжая навигацию по сайту, вы косвенно предоставляете свое согласие на использование файлов cookie на этом веб-сайте. Более подробная информация предоставляется в нашей <a href="${link}" target="_blank">Политике конфиденциальности</a>
				</div>
				<button id="cookie_close" class="cookie_close"></button>
			</div>`;

	let cookie_style =
			`#cookie {
				width: 100%;
				position: fixed;
				bottom: 0;
				color: #fff;
				background: #000;
				opacity: .8;
				z-index:99999;
			}
			#cookie .cookie_wrap {
				max-width: 1360px;
				margin: 0 auto;
				position: relative;
			}
			#cookie .cookie_content {
				max-width: 1000px;
				font-size: 14px;
				float: left;
				padding: 10px;
				line-height: 15px;
				margin-right: 5%;
			}
			#cookie .cookie_content a {
				color: #ffd155;
			}
			#cookie .cookie_content a:hover {
				color: #fee483;
			}
			#cookie button:active, button:focus {
				outline: none;
			}
			#cookie button::-moz-focus-inner {
				border: 0;
			}
			#cookie .cookie_close {
				width: 44px;
				height: 44px;
				cursor: pointer;
				transition: background-color 0.3s ease;
				position: absolute;
				background: none;
				top: 15px;
				right: 15px;
				display: block;
				border: none;
				outline: none;
			}
			#cookie .cookie_close:before, .cookie_close:after {
				transition: transform 0.3s ease;
				background: #fff;
				content: '';
				position: absolute;
				top: 50%;
				left: 50%;
				width: 28px;
				height: 2px;
			}
			#cookie .cookie_close:before {
				transform: rotate(45deg);
			}
			#cookie .cookie_close:after {
				transform: rotate(-45deg);
			}
			#cookie .cookie_close:hover:before {
				transform: rotate(135deg);
			}
			#cookie .cookie_close:hover:after {
				transform: rotate(45deg);
			}`;

	function closeEvent() {
		let button = document.getElementById('cookie_close');
		button.onclick = function () {
			let panel = document.getElementById('cookie');
			panel.style.display = 'none';
			setStorage();
		};
	}

	function createCookieMarkup(cookie_link) {
		if (!getStorage()) {
			let element = document.createElement('div');
			let style = document.createElement('style');
			element.id = 'cookie';
			element.innerHTML = cookieText(cookie_link);
			style.innerHTML = cookie_style;

			document.head.appendChild(style);
			document.body.appendChild(element);

			closeEvent();
		}
	}
}