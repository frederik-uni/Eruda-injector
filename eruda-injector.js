// ==UserScript==
// @name         Eruda Injector
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Inject Eruda into every webpage
// @author       Frederik
// @match        *://*/*
// @grant        none
// ==/UserScript==

(() => {
    'use strict';
    const erudaScript = document.createElement('script');
    erudaScript.src = '//cdn.jsdelivr.net/npm/eruda';
    erudaScript.onload = () => {
        eruda.init();
    };
    document.body.appendChild(erudaScript);
})();
