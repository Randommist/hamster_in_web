// ==UserScript==
// @name         hamster kombat in web
// @namespace    http://tampermonkey.net/
// @version      2024-06-14
// @description  try to take over the world!
// @author       You
// @match        https://hamsterkombat.io/clicker/*
// @match        https://web.telegram.org/*
// @run-at       document-start
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var scriptElement = document.querySelector('head script[src="/js/telegram-web-app.js"]');
    if (scriptElement) {
        scriptElement.remove();
    }
    let script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/Randommist/hamster_in_web/telegram-web-app.js';
    document.head.appendChild(script);
})();
