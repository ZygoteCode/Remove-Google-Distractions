// ==UserScript==
// @name         Google Remove Distractions
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Remove all the Google distractions to get concentrated on what's really important
// @author       ZygoteCode
// @match        https://www.google.com/*
// @match        https://www.google.it/*
// @match        https://www.google.*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @updateURL    https://github.com/ZygoteCode/Remove-Google-Distractions/raw/main/GoogleRemoveDistractions.user.js
// @downloadURL  https://github.com/ZygoteCode/Remove-Google-Distractions/raw/main/GoogleRemoveDistractions.user.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

        document.querySelectorAll('div').forEach(div => {
        if (div.textContent.trim() === "Notizie") {
            div.remove();
        }
    });

    document.querySelectorAll('span').forEach(span => {
        if (span.textContent.trim() === "Notizie principali" || span.textContent.trim() === "Notizie locali") {
            const parent = span.closest('*');
            if (parent) {
                parent.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
            }
        }
    });
})();