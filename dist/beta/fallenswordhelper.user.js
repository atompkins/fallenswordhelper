// ==UserScript==
// @name           FallenSwordHelper
// @namespace      terrasoft.gr
// @description    Fallen Sword Helper
// @include        https://www.fallensword.com/*
// @include        https://guide.fallensword.com/*
// @include        https://fallensword.com/*
// @include        https://*.fallensword.com/*
// @include        https://local.huntedcow.com/fallensword/*
// @exclude        https://forum.fallensword.com/*
// @exclude        https://wiki.fallensword.com/*
// @exclude        https://www.fallensword.com/app.php*
// @exclude        https://www.fallensword.com/fetchdata.php*
// @version        1521b4
// @downloadURL    https://fallenswordhelper.github.io/fallenswordhelper/Releases/Beta/fallenswordhelper.user.js
// @grant          none
// ==/UserScript==

// No warranty expressed or implied. Use at your own risk.

// EVERYTHING MUST BE IN main()
function fshMain(ver) {

  window.FSH = window.FSH || {};
  window.FSH.version = ver;

  var count = 0;
  var head = document.getElementsByTagName('head')[0];
  var cssFiles = ['https://fallenswordhelper.github.io/fallenswordhelper/resources/beta/1521/calfSystem.css'];
  var scriptFiles = [
    'https://cdnjs.cloudflare.com/ajax/libs/localforage/1.5.3/localforage.min.js',
    'https://fallenswordhelper.github.io/fallenswordhelper/resources/beta/1521/calfSystem.min.js'
  ];
  if (typeof window.jQuery !== 'undefined') {
    scriptFiles.push('https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js');
  }

  function onPageLoad() {
    count += 1;
    if (count === scriptFiles.length) {FSH.dispatch();}
  }

  cssFiles.forEach(function(c) {
    var linkTag = document.createElement('link');
    linkTag.type = 'text/css';
    linkTag.rel = 'stylesheet';
    linkTag.href = c;
    head.appendChild(linkTag);
  });

  scriptFiles.forEach(function(s) {
    var scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.onload = onPageLoad;
    scriptTag.src = s;
    head.appendChild(scriptTag);
  });

} // end of var main

function setVer() {
  var ver = '1521b4';
  if (typeof GM_info === 'undefined') {return ver + '_native';}
  return ver;
}

var script = document.createElement('script');
script.textContent = '(' + fshMain.toString() + ')(\'' + setVer() + '\');';
document.body.appendChild(script);
document.body.removeChild(script);
