Уведомление об использовании файлов cookie
==========================================

[![npm version](https://badge.fury.io/js/privacy_cookie.svg)](https://www.npmjs.com/package/privacy_cookie)

Скрипт добавляет на сайт уведомление об использовании файлов cookie.
[Демо](https://varrcan.github.io/privacy_cookie/)

## Установка

```
npm install privacy_cookie --save-dev
```

## Использование

1. Подключить скрипт в секции `<head>`, например:
```
<script src="/node_modules/privacy_cookie/dist/privacy_cookie.js"></script>
```

2. Вызвать функцию `createCookieMarkup(link);`, где `link` - ссылка на страницу Политики конфинденциальности

через window.onload:
```
<script>
    window.onload = function () {
        createCookieMarkup('/link-to-privacy/');
    };
</script>
```

или с помощью jQuery:
```
<script>
    $(document).ready(function() {
        createCookieMarkup('/link-to-privacy/');
    };
</script>
```