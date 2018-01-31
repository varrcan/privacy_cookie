Уведомление об использовании файлов cookie
==========================================

[![npm version](https://badge.fury.io/js/privacy_cookie.svg)](https://www.npmjs.com/package/privacy_cookie)

Скрипт добавляет на сайт уведомление об использовании файлов cookie.
[Демо](https://varrcan.github.io/privacy_cookie/)

## Установка

```
npm install privacy_cookie --save
```

## Использование

1\. Подключить скрипт в секции `<head>`:
```
<script defer src="/node_modules/privacy_cookie/dist/privacy_cookie.js"></script>
```
2\. Создать объект `cookiePanel`, с параметром `link`:

```
<script>
	var cookiePanel = {link: '/link-to-privacy/'};
</script>
```

## Параметры

| Name  | Desc | Param |
|------|----------|--------|
| link | ссылка на страницу Политики конфинденциальности | `{link: '/link-to-privacy/'}` |
| text | параметр полностью заменяет текст по умолчанию | `{text: 'some text'}` |