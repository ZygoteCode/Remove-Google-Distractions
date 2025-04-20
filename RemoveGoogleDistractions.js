// ==UserScript==
// @name         Google Remove Distractions
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Remove all the Google distractions to get concentrated on what's really important
// @author       GabryB03
// @match        https://www.google.com/*
// @match        https://www.google.it/*
// @match        https://google.com/*
// @match        https://google.it/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @updateURL    https://github.com/GabryB03/Remove-Google-Distractions/raw/main/RemoveGoogleDistractions.user.js
// @downloadURL  https://github.com/GabryB03/Remove-Google-Distractions/raw/main/RemoveGoogleDistractions.user.js
// @grant        none
// ==/UserScript==

(function()
{
    function asyncLoop()
    {
        try
        {
             document.evaluate("//span[text()='Tutti']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
        }
        catch (e)
        {

        }

        try
        {
             document.evaluate("//div[text()='Tutti']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
        }
        catch (e)
        {

        }

        try
        {
             document.evaluate("//span[text()='All']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
        }
        catch (e)
        {

        }

        try
        {
             document.evaluate("//div[text()='All']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
        }
        catch (e)
        {

        }

        try
        {
            document.querySelector("img[src='/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png']").parentElement.parentElement.remove();
        }
        catch (e)
        {

        }

        try
        {
            document.evaluate("//span[text()='Notizie principali']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
        }
        catch (e)
        {

        }

        try
        {
            document.evaluate("//span[text()='Video']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
        }
        catch (e)
        {

        }

        try
        {
            document.evaluate("//span[text()='X (Twitter)']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
        }
        catch (e)
        {

        }

        try
        {
            document.evaluate("//span[text()='Le persone hanno chiesto anche']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
        }
        catch (e)
        {

        }

        try
        {
            document.evaluate("//span[text()='Instagram']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
        }
        catch (e)
        {

        }

        try
        {
            document.evaluate("//span[text()='Facebook']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
        }
        catch (e)
        {

        }

        try
        {
            document.evaluate("//span[text()='X']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
        }
        catch (e)
        {

        }

        setTimeout(async function()
        {
            await asyncLoop();
        },
        500);
    }

    asyncLoop();
})();