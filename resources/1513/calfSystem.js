(function() {

'use strict';

window.FSH = window.FSH || {};

// GM_ApiBrowserCheck
// @author        GIJoe
// @license       http://creativecommons.org/licenses/by-nc-sa/3.0/
// Global variables
(function GM_ApiBrowserCheck() {
	var gvar = {};
	var GMSTORAGE_PATH = 'GM_';
	// You can change it to avoid conflict with others scripts
	//~ if (typeof unsafeWindow === 'undefined'){
		//~ window.unsafeWindow = window;
	//~ }
	var needApiUpgrade = false;
	if (window.navigator.appName.match(/^opera/i) && 
			typeof window.opera !== 'undefined'){
		needApiUpgrade = true;
		gvar.isOpera = true;
		window.GM_log = window.opera.postError;
	}
	if (typeof GM_setValue !== 'undefined'){
		var gsv;
		try {
			gsv=window.GM_setValue.toString();
		} catch(e) {
			gsv='staticArgs';
		}
		if (gsv.indexOf('staticArgs') > 0){
			gvar.isGreaseMonkey = true;
		}
		// test GM_hitch
		else if (gsv.match(/not\s+supported/)){
			needApiUpgrade = true;
			gvar.isBuggedChrome = true;
		}
	} else{
		needApiUpgrade = true;
	}

	if (needApiUpgrade){
		var ws = null;
		var uid = new Date().toString();
		var result;
		try{
			window.localStorage.setItem(uid, uid);
			result = window.localStorage.getItem(uid) === uid;
			window.localStorage.removeItem(uid);
			if (result) {
				ws = typeof window.localStorage;
			} else {
				console.log('There is a problem with your local storage. ' +
					'FSH cannot persist your settings.');
				ws = null;
			}
		} catch(e){
			ws = null;
		}
		// Catch Security error
		if (ws === 'object'){
			window.GM_getValue = function(name, defValue){
				var value = window.localStorage.getItem(GMSTORAGE_PATH + name);
				if (value === null || value === undefined) {
					return defValue;
				} else {
					switch (value.substr(0, 2)) {
					case 'S]':
						return value.substr(2);
					case 'N]':
						return parseInt(value.substr(2), 10);
					case 'B]':
						return value.substr(2) === 'true';
					}
				}
				return value;
			};
			window.GM_setValue = function(name, value){
				switch (typeof value){
				case 'string':
					window.localStorage.setItem(GMSTORAGE_PATH + name,
						'S]' + value);
					break;
				case 'number':
					if (value.toString().indexOf('.') < 0){
						window.localStorage.setItem(GMSTORAGE_PATH + name,
							'N]' + value);
					}
					break;
				case 'boolean':
					window.localStorage.setItem(GMSTORAGE_PATH + name,
						'B]' + value);
					break;
				}
			};
		} else if (!gvar.isOpera || typeof GM_setValue === 'undefined'){
			gvar.temporarilyStorage = [];
			window.GM_getValue = function(name, defValue){
				if (typeof gvar.temporarilyStorage[GMSTORAGE_PATH + name] ===
					'undefined') {
					return defValue;
				} else {
					return gvar.temporarilyStorage[GMSTORAGE_PATH + name];
				}
			};
			window.GM_setValue = function(name, value){
				switch (typeof value){
				case 'string':
				case 'boolean':
				case 'number':
					gvar.temporarilyStorage[GMSTORAGE_PATH + name] = value;
				}
			};
		}

		window.GM_listValues = function(){
			var list = [];
			var reKey = new RegExp('^' + GMSTORAGE_PATH);
			for (var i = 0, il = window.localStorage.length; i < il; i += 1) {
				var key = window.localStorage.key(i);
				if (key.match(reKey)) {
					list.push(key.replace(GMSTORAGE_PATH, ''));
				}
			}
			return list;
		};
	}
})();
//window.FSH.GM_ApiBrowserCheck();

// FSH.System.functions
FSH.System = {

	init: function() {
		FSH.System.server = document.location.protocol + '//' +
			document.location.host + '/';
		var imgurls = FSH.System.findNode('//img[contains(@src, "/skin/")]');
		if (!imgurls) {return;} //login screen or error loading etc.
		var idindex = imgurls.src.indexOf('/skin/');
		FSH.System.imageServer = imgurls.src.substr(0,idindex);
		//FSH.System.imageServerHTTP = 'http://cdn.fallensword.com';
	},

	getValue: function(name) {
		return GM_getValue(name, FSH.Data.defaults[name]);
	},

	getValueJSON: function(name) {
		var resultJSON = FSH.System.getValue(name);
		var result;
		if (resultJSON) {
			var reviver = function (key, value) {
				if (typeof value === 'string') {
					var a = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
					if (a) {
						return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], +a[6]));
					}
				}
				return value;
			};
			result = JSON.parse(resultJSON, reviver);
		}
		return result;
	},

	setValueJSON: function(name, value) {
		GM_setValue(name, JSON.stringify(value));
	},

	setValue: function(name, value) {
		GM_setValue(name, value);
	},

	findNode: function(xpath, doc) {
		var nodes = FSH.System.findNodes(xpath, doc);
		if (!nodes) {return null;}
		return nodes[0];
	},

	findNodes: function(xpath, doc) {
		var nodes = [];
		if (xpath.indexOf('/') === 0) {
			xpath = '.'+xpath;
			// TODO this is likely to be bad
			// this is a chrome fix - needs a .// for xpath
			// where as firefox can function without it.
			// firefox sitll works with .//
		}

		var target;
		// We may have passed in a HTMLDocument object as the context
		// See createDocument with DOMParser below
		// This only matters in Firefox. evaluate will fail silently if 
		// the context is not part of the calling object.
		doc = doc || document;
		if (doc instanceof HTMLDocument) {
			target = doc;
		} else {
			target = document;
		}
		var findQ = target.evaluate(xpath, doc, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
		if (findQ.snapshotLength === 0) {return null;}
		for (var i = 0; i < findQ.snapshotLength; i += 1) {
			nodes.push(findQ.snapshotItem(i));
		}
		return nodes;
	},

	findNodeText: function(xpath, doc) {
		var node = FSH.System.findNode(xpath, doc);
		if (!node) {return null;}
		return node.textContent;
	},

	findNodeInt: function(xpath, doc) {
		var node = FSH.System.findNode(xpath, doc);
		if (!node) {return null;}
		return FSH.System.intValue(node.textContent);
	},

	createDocument: function(details) {
		//~ var doc = document.createElement('HTML');
		//~ doc.innerHTML = details;
		// Use DOMParser to prevent img src tags downloading
		var parser = new DOMParser();
		var doc = parser.parseFromString(details, 'text/html');
		return doc;
	},

	formatDateTime: function(aDate) {
		//var result=aDate.toDateString();
		var yyyy = aDate.getFullYear();
		var mon = aDate.getMonth()+1;
		if (mon<10) {mon = '0' + mon;}
		var dd = aDate.getDate();
		if (dd<10) {dd = '0' + dd;}

		var hh=aDate.getHours();
		if (hh<10) {hh = '0' + hh;}
		var mm=aDate.getMinutes();
		if (mm<10) {mm = '0' + mm;}
		var ss=aDate.getSeconds();
		if (ss<10) {ss = '0' + ss;}
		var result = yyyy + '-' + mon + '-' + dd + ' ' + hh + ':' + mm + ':' + ss;
		return result;
	},

	formatShortDate: function(aDate) {
		var result;
		var months = ['January', 'February', 'March', 'April', 'May', 'June',
			'July', 'August', 'September', 'October', 'November', 'December'];
		var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
			'Friday', 'Saturday'];
		var yyyy = aDate.getFullYear();
		var dd = aDate.getDate();
		if (dd<10) {dd = '0' + dd;}
		var ddd = days[aDate.getDay()].substr(0, 3);
		var month = months[aDate.getMonth()].substr(0, 3);
		var hh=aDate.getHours();
		if (hh<10) {hh = '0' + hh;}
		var mm=aDate.getMinutes();
		if (mm<10) {mm = '0' + mm;}
		result = hh + ':' + mm + ' ' + ddd + ' ' + dd + '/' + month + '/' +
			yyyy;
		return result;
	},

	saveValueForm: function(name) {
		var formElement = FSH.System.findNode('//input[@name="' + name + '"]',
			this);
		if (formElement.getAttribute('type') === 'checkbox') {
			FSH.System.setValue(name, formElement.checked);
		} else if (formElement.getAttribute('type') === 'radio') {
			var radioElements = FSH.System.findNodes('//input[@name="' + name +
				'"]', 0, this);
			for (var i=0; i<radioElements.length; i += 1) {
				if (radioElements[i].checked) {
					FSH.System.setValue(name, radioElements[i].value);
				}
			}
		} else {
			FSH.System.setValue(name, formElement.value);
		}
	},

	xmlhttp: function(theUrl, func, theCallback) {
		return $.ajax({
			url: theUrl,
			callback: theCallback,
			success: function(responseDetails) {
				if (func) {
					func.call(this, responseDetails, this.callback);
				}
			}
		});
	},

	intValue: function(theText) {
		if (!theText) {return 0;}
		return parseInt(theText.replace(/,/g,''),10);
	},

	getIntFromRegExp: function(theText, rxSearch) {
		var result;
		var matches = theText.replace(/,/g,'').match(rxSearch);
		if (matches) {
			result = parseInt(matches[1],10);
		} else {
			result = 0;
		}
		return result;
	},

	addCommas: function(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	},

	uniq: function (arr, removeBy){
		var seen = {};
		var out = [];
		var len = arr.length;
		var j = 0;
		var i;
		var item;
		if (removeBy) {
			for (i = 0; i < len; i += 1) {
				item = arr[i];
				if (seen[item[removeBy]] === 1) {continue;}
				seen[item[removeBy]] = 1;
				out[j] = item;
				j += 1;
			}
		} else {
			for (i = 0; i < len; i += 1) {
				item = arr[i];
				if (seen[item] === 1) {continue;}
				seen[item] = 1;
				out[j] = item;
				j += 1;
			}
		}
		return out;
	},

	convertTextToHtml: function(inputText) {
		return inputText.
			replace(/</g,'&lt').
			replace(/>/g,'&gt').
			replace(/\n/g,'<br>').
			replace(/\[\/([a-z])\]/g,'<\/\$1>').
			replace(/\[([a-z])\]/g,'<\$1>');
	},

	parseDate: function(textDate) {
		var textDateSplitSpace = textDate.split(' ');
		var timeText = textDateSplitSpace[0];
		var dateText = textDateSplitSpace[1];
		var dayText = dateText.split('/')[0];
		var monthText = dateText.split('/')[1];
		var months = {'Jan': 'January',
			'Feb': 'February',
			'Mar': 'March',
			'Apr': 'April',
			'May': 'May',
			'Jun': 'June',
			'Jul': 'July',
			'Aug': 'August',
			'Sep': 'September',
			'Oct': 'October',
			'Nov': 'November',
			'Dec': 'December'
			};
		var fullMonthText = months[monthText];
		var yearText = dateText.split('/')[2];
		var dateAsDate = new Date(fullMonthText + ' ' + dayText + ', ' + yearText + ' ' + timeText + ':00');
		return dateAsDate;
	},

	toggleVisibilty: function(evt) {
		var anItemId = evt.target.getAttribute('linkto');
		var anItem = document.getElementById(anItemId);
		var currentVisibility = anItem.style.visibility;
		anItem.style.visibility = currentVisibility === 'hidden' ? 'visible' : 'hidden';
		anItem.style.display = currentVisibility === 'hidden' ? 'block' : 'none';
		if (FSH.System.getValue(anItemId)) {
			FSH.System.setValue(anItemId, '');
		} else {
			FSH.System.setValue(anItemId, 'ON');
		}
	},

	addStyle: function(css) {
		var style = document.createElement('style');
		style.textContent = css;
		document.getElementsByTagName('head')[0].appendChild(style);
	},

	openInTab: function(url){
		setTimeout(function() {window.open(url, '');}, 0);
	},

	escapeHtml: function(unsafe) {
		return unsafe
			 .replace(/&/g, '&amp;')
			 .replace(/</g, '&lt;')
			 .replace(/>/g, '&gt;')
			 .replace(/"/g, '&quot;')
			 .replace(/'/g, '&#039;');
	},

	getUrlParameter: function(sParam) {
		var sPageURL = decodeURIComponent(window.location.search.substring(1)),
			sURLVariables = sPageURL.split('&'),
			sParameterName,
			i;

		for (i = 0; i < sURLVariables.length; i+=1) {
			sParameterName = sURLVariables[i].split('=');

			if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined ? true : sParameterName[1];
			}
		}
	},

	formatLastActivity: function(last_login) {
		var d, h, m, s;
		s = Math.abs(Math.floor(Date.now() / 1000 - last_login));
		m = Math.floor(s / 60);
		s = s % 60;
		h = Math.floor(m / 60);
		m = m % 60;
		d = Math.floor(h / 24);
		h = h % 24;
		return (d === 0 ? '' : d + ' days, ') +
			(h === 0 ? '' : h + ' hours, ') +
			(m === 0 ? '' : m + ' mins, ') +
			s + ' secs';
	},

	contactColor: function(last_login, type) {
		var out = 'white';
		var now = Math.floor(Date.now() / 1000);
		if (now - last_login < 120) { // 2 mins
			out = type ? 'DodgerBlue' : 'red';
		} else if (now - last_login < 300) { // 5 mins
			out = type ? 'LightSkyBlue' : 'PaleVioletRed';
		} else {out = type ? 'PowderBlue' : 'Pink';}
		return out;
	},

	getFunction: function(funcName) {
		FSH.ga.screenview(funcName);
		funcName = funcName.split('.');
		if (funcName.length === 1) {
			return FSH.Helper[funcName[0]];
		} else if (funcName.length === 2) {
			return FSH[funcName[0]][funcName[1]];
		}
	},

	removeHTML: function(buffName) { // Native
		return buffName.replace(/<\/?[^>]+(>|$)/g, '').replace(/[^a-zA-Z 0-9]+/g,'');
	},

	stringSort: function(a,b) {
		var result=0;
		a = FSH.System.path(a, FSH.Helper.sortBy, 'a');
		b = FSH.System.path(b, FSH.Helper.sortBy, 'a');
		if (a.toLowerCase()<b.toLowerCase()) {result=-1;}
		if (a.toLowerCase()>b.toLowerCase()) {result=+1;}
		if (!FSH.Helper.sortAsc) {result=-result;}
		return result;
	},

	numberSort: function(a,b) {
		var result=0;
		if(typeof a.type !== undefined){
			if(a.type > 8) {return 1;} //non equipment items
			if(b.type > 8) {return -1;}
		}
		var valueA = FSH.System.path(a, FSH.Helper.sortBy, 1);
		var valueB = FSH.System.path(b, FSH.Helper.sortBy, 1);
		if (typeof valueA==='string') {
			valueA=parseInt(valueA.replace(/,/g,'').replace(/#/g,''),10);
		}
		if (typeof valueB==='string') {
			valueB=parseInt(valueB.replace(/,/g,'').replace(/#/g,''),10);
		}
		result = valueA-valueB;
		if (!FSH.Helper.sortAsc) {result=-result;}
		return result;
	},

	path: function(obj, path, def){
		path = path.split('.');
		var len = path.length;
		for (var i = 0; i < len; i+=1) {
			if (!obj || typeof obj !== 'object') {return def;}
			obj = obj[path[i]];
		}
		if (obj === undefined) {return def;}
		return obj;
	},

};
FSH.System.init();

FSH.Data = {

	plantFromComponent : {
		'Amber Essense':      'Amber Plant',
		'Blood Bloom Flower': 'Blood Bloom Plant',
		'Dark Shade ':        'Dark Shade Plant',
		'Snake Eye':          'Elya Snake Head',
		'Snake Venom Fang':   'Elya Snake Head',
		'Heffle Wart':        'Heffle Wart Plant',
		'Jademare Blossom':   'Jademare Plant',
		'Trinettle Leaf':     'Trinettle Plant',
		'Purplet Flower':     'Purplet Plant',
	},

	huntingOnImage:
		'<img title="Hunting mode is ON" src="' +
		'data:image/gif;base64,R0lGODlhKAAoALMAAD+yQH3Kf7zjvxCfEMvpzur17qzcr' +
		'y+rMDCsMGLAY9vv3k64T5fUmh+lIPr7/gCZACH5BAAAAAAALAAAAAAoACgAAASsEL1J' +
		'q704T6m7/2AojmRpnmiqrtQSBA2rDYJjO4mMBfd9YICXcAEoFn+eQs8WAAoDDIFiSRV' +
		'YGROqwxAaELTVyXSZCx0ESrBNMFlYpY7CwOQFF67PAABZqqvBBHN9X39aXHSEhUsofo' +
		'o3KY2OgieRhQAqAy8JAAZ/lzo1amUyoWBNoH+nMmlghzKFbDqwOgOKOgC2MriFkyq7n' +
		'jIDRsPEvTrHyMnKy8zHHM0bEQA7' + '" border=0 width=10 height=10>',

	huntingOffImage:
		'<img title="Hunting mode is OFF" src="' +
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtA' +
		'AAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAA' +
		'gOgAAHUwAADqYAAAOpgAABdwnLpRPAAAABh0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHY' +
		'zLjM2qefiJQAAAVhJREFUWEftl08OQTEQxrkq5xDHkDiDxAUkrEms7IiNFQtWNiTKJx' +
		'mppm2mpp33IhXNC9qZX7/50+qaTuf1bvELgG0ekK8CSkSoCkrUexew1EDp9Y0ADpZDg' +
		'8HZnCrg7DA3t/vja/QW/SioGiAUc+Hoc0zJDyDJbj85IeDOOV3PQcBYuIOAo83YICTb' +
		'yz5o2KcI1tCADdpASD18P9lNg2FmhXh1XCdBEgxACTC20VgesgDhBM5iYQqpaaeArS4' +
		'BwyYrB7m5RPM4qsK5He5f8pytoG8DHMhY7tm/wZbPhwgQBnNC+opFDJgb0lUxC2BOyG' +
		'KAuSCLAuaALA4IB9ROqAEj+bnVrALoOvHdYkLA7qmSrUhijT4F0L04VEAom3KGu81aR' +
		'UFugWCefQNS+9P0V4DYjF1wrQtxBfT1w5QcbETB1Nu6eg5WQIkC0rUqbUYCWQEl6qmd' +
		'xRLIJyPitjwjlrDgAAAAAElFTkSuQmCC' + '" border=0 width=10 height=10>',

	soundMuteImage:
		'<img border=0 title="Turn Off Sound when you have a new log message' +
		'" width=10 height=10 src="' +
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hA' +
		'AAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJ' +
		'ZTwAAAHNSURBVHjaYvz//z8DJQAggJgYKAQAAUS0Ad3dnZFtbS1P0cUBAoiFkMaenm7' +
		'm////Nfz9+7f4379/nO/9/XOAwpsEN258BJIHCCAMA/r7+6wYGCDh8u/ffwag5oXCws' +
		'IqQkJCDOw7doCE04B4GUw9QABhGADUcJSVlQ1EMzABPSgsLMbAxsbBIHnyNIPMqzcgJ' +
		'VeAtr+DqQcIIAwD/v37y2BoaMjw8+cvIPsfw5MnTxhEjx1gkHv9muEdCwsD19+/acjq' +
		'AQIIw4A/f/4yPH78mOHhw0dgAwwePmTQAWr+xMHBMF+Yn6Fn8vQvyOoBAgiLAX8Yvn7' +
		'9wnDv3j0Gx0+fGHS+f2d4AUwri/l5GX79/YcRyAABhBGNP358ZwClLV+g7Xa/fjG8YW' +
		'RgqP78meED0CCQ99ABQABhuODnz58MYsePMRh9+MjwnpmFYamUOAMXMDSZgBjkJXQAE' +
		'EAYLkh68HiO9bsPH5j//b++ho/L5fOvH3dlZCQZxMSEGbAle4AAQjEAmEgMJH798gem' +
		'nNvs//+bNcxduJeBgVH9+7fvbW/fvPuOLaEBBBDYVGT8zs/PHYh50MVTUxOjgfgZujh' +
		'AADFSmhsBAoji3AgQYAAwuNxkuZyGCwAAAABJRU5ErkJggg==' + '">',

	soundImage:
		'<img border=0 title="Turn On Sound when you have a new log message' +
		'" width=10 height=10 src="' +
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hA' +
		'AAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJ' +
		'ZTwAAAI9SURBVHjaYvz//z8DJQAggJgYKAQAAYTTgO7uzsi2tpanhAwACCAWdIGenm7' +
		'm////Nfz9+7f4379/nNg0PcoqTmH48XOb3LwpzwACiKW/v8+KgQESDv/+/WcAal4oLC' +
		'ysIiQkxHDhwnlMzRmF1dxMf1u+fvtxBsg1BQggFqCGo6ysbCCNDExADwkLizGwsXEwf' +
		'P78heHnj5+omtMLUoE2b/z153cLD8s/k0duIdkAAcTy799fBkNDQ4afP38BXfCP4cmT' +
		'JwwPHtxi4OPjY/j1C2HAo9T8FG7Gv7OANlf+/vEzn52dcSLDtx+5AAHE8ufPX4bHjx8' +
		'zPHz4CGzAjx8/GL5+/Qp0DSPD7z+/wZpfBUbfYeDiTv/7/w8Dw7fv7XJbVzA+svaeCH' +
		'SNOkAAAQ34A9TwheHevXtAG38xfPnyheHbt28MCgpyDLCwAQJBhu8/gNy/QAN+QERA9' +
		'M+fDAABxPTjx3cGUFoSFhZiEBDgZwB5CWQACIPYICC2fqkwUIMay9/fII2Vjwwc83i4' +
		'mRkYvv+8CRBALD+Bpty8eY0B5BKQF6SlJSEJBBiiID4MyO1YNf2RmTsj0NmHWBn/XWb' +
		'4BbT1x8/JAAHE9PfPb+sf339aAw2C4u93ZWQkGcTEhBnQk7ncqZ3TgLaGsgNTz5dHb8' +
		'/IPb80FSCAGNEVpaUlMf//978JyCxkYGTgnD17PiNGWhDTyWD49XuT3IebzwACCGwLN' +
		'pyamhgNxM9wycMwQAAxUpobAQKI4twIEGAA+Mk8nL2QZm8AAAAASUVORK5CYII=' +
		'">',

	greenDiamond:
		'<img width="10" height="10" style="float:left" src="' +
		'data:image/gif;base64,R0lGODlhCQAJAJH/AMDAwAcADAD/RAAAACH' +
		'5BAEAAAAALAAAAAAJAAkAQAIUhBGnqCEPRUJwGvfslS1yGmmOVQAAOw%3D%3D' +
		'" class="tip-static" data-tipped="Online">',

	yellowDiamond:
		'<img width="10" height="10" style="float:left" src="' +
		'data:image/gif;base64,R0lGODlhCQAJAJH/AMDAwP3/AAcADAAAAC' +
		'H5BAEAAAAALAAAAAAJAAkAQAIUhCGnqBIPQ0JwGvfslS1yGmmOVQAAOw%3D%3D' +
		'" class="tip-static" data-tipped="Offline">',

	orangeDiamond:
		'<img width="10" height="10" style="float:left" src="' + 
		'data:image/gif;base64,R0lGODlhCQAJAJH/AMDAwP+9AAcADAAAAC' +
		'H5BAEAAAAALAAAAAAJAAkAQAIUhCGnqBIPQ0JwGvfslS1yGmmOVQAAOw%3D%3D' +
		'" class="tip-static" data-tipped="Offline">',

	offlineDot:
		'<img width="10" height="10" style="float:left" src="' +
		'data:image/gif;base64,R0lGODlhDgAOAMQAAP///1paWnNzc4SEhK2tr' +
		'bW1tZylpWNra3OEhDE5OWNzc73e3rXW1qXGxpy9vZS1tYSlpXucnHOUlFJra2OEhEpj' +
		'YxghISk5OVJzczlSUkprayExMTFKShgpKRAhIQAAACH5BAEAAAAALAAAAAAOAA4AQAW' +
		'GICAChCINxihm2WRKiKJl19YBiBY5zNI8CAztMCJsLJ2Ox7MhqAgViiQioUxoBREHQ3' +
		'E0GD8rzSK6XDicDNqMdIoKGA1mMsuk3hoKxOuAUDQcGykVGBENC4gOEkJnABxREQ8PE' +
		'BIKFYEeAAoJGRUTdJc1FgIiAx1mZhtHHQMqIgQCHAGtKiEAOw%3D%3D' +
		'" class="tip-static" data-tipped="Offline">',

	sevenDayDot:
		'<img width="10" height="10" style="float:left" src="' +
		'data:image/gif;base64,R0lGODlhDgAOAMQAAP///0JCQoSEhK2trXNr' +
		'azEpKZyUnDkpMa1rjJxae5RSc3s5WlopQnMxUmMhQjkIIaWUnGNSWiEQGFIhOSEAEL1' +
		'zlLVrjIxSa3M5UlIYMUoQKSkAEBgACIRrc2tSWgAAACH5BAEAAAAALAAAAAAOAA4AQA' +
		'V8ICACENZ1xihqj+YsGMZkxUZJgJc1ilUhicbksYmMBhKKksMpDFQQV2PRcLA2T8Bjl' +
		'0D8FEIiR0TZPM5n2y0LGDA0cJYmJRpkXopEYmG1pTQTCwkVhHtDGwcAGy4LeQoLbw8U' +
		'YxFmGRkTl0STBCICSqCgEgIqdQQBEaQqIQA7' +
		'" class="tip-static" data-tipped="Offline">',

	redDot:
		'<img width="10" height="10" style="float:left" src="' +
		'data:image/gif;base64,R0lGODlhDgAOAMQAAP///62trYyEhL2trUIpKa2UnP9zn' +
		'DEQGP9rjL0hQqUYOXsIIXtSWlIpMf9Sc94xUpQYMa0QMaUIKSkACFIAEHsAGJxCUudS' +
		'a85CWs45UoRSWnMIGGMAEKVrczkACAAAACH5BAEAAAAALAAAAAAOAA4AQAV7ICAChdV' +
		'1xSguS5RgWKZAy0YdgBY9juE7sgWHMQocPJSJkhBQFSSJhzQTETYBLYwDYUBcghyPiL' +
		'KpsFg2z+EKGCgicIk5JXJHHfhHIlKhpCA7PT8YCjUNABVQWg4XhDRJORsLEBAzNDYTH' +
		'SICFGSeSQcCKiIBDA0MoiohADs%3D' +
		'" class="tip-static" data-tipped="Offline">',

	runIcon:
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf' +
		'8/9hAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAPYQAAD2EBqD+naQAAAAd0SU1FB9gDBhM' +
		'MFhZz9poAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAABv0lEQV' +
		'Q4y6WTMWsbQRCFPwUVa5BhBS684MZwzRkVukJFBGkE+QEhpUuVTid1SulSKt3lmvwAl' +
		'04nF4a4UJCb4GsOXSNYQQS7IIGnU4qzT5JlJ5DMMsXO7ns7O/Om5H5Z/sfKzwNW3Gow' +
		'irlPE2YiABwqxUkQ0mm0Mapa2rxf2syge9NfjdOEj++THLg8Yw+wCyHxGfdTy0kQ0n/' +
		'XLUjebILtNOO0FgLQq0+YVS5wiwyFJdKa01qInWZ0b/qrLQIrbjVOE5pHBhDelr8UJN' +
		'5cIYA8rlZgGKcJVtyqIBiMYoxWWHFk3m3VpFefIOaKzLvCm0eawSheZzBOEzTgloJby' +
		'k6le/UJJrwtzpXKs9iqgZ/J2sW/SPLpQ4if5Q/4xw6Vi83i4Y/9Hv4c0v06BEDPZVcH' +
		'si+vgi9/XPL52znsg1EGqbhtglYtIpsmqFfA8W3MsTbkFxR+LrRq0boGnUYbKwJKIcg' +
		'WuH99gRMp4qqisOLpNNprAqOqpWYQ4UTQB4cF+Py6DzywpxX6QKMqGjv3NIOokPSOlL' +
		'+ndxxrjaooqqoKgBOHLIXM5+BNKZeeT+PTMA3TO4rfKGgF0d+H6V/sN7ur7I3UK1cpA' +
		'AAAAElFTkSuQmCC',

	stopIcon:
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAAB' +
		'y6+R8AAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAPYQAAD2' +
		'EBqD+naQAAAAd0SU1FB9gDBhMtH+MwW90AAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3a' +
		'XRoIEdJTVBXgQ4XAAAAyUlEQVQoz52SLQ4CMRCFv00Qi+tKZCWSI3AE1hEUIWBwhKug' +
		'CEEBDotEIjlC5dZ13FZRRMOGFQ0/k4yZvC/vZWayEAK/VgfAbHdBruePYjUs0fNZ1gG' +
		'Qy5HBdPkRuu83MJ9FJwA8yOmQdhlP2vGQGiOOwqddjDiQ+g1q3Pz3i3A19I3BO5cU9o' +
		'xBWvEAxMdOlXhc/QYVAqg8dnITedS9IG8tldYUeTfJVFrjrW3FC1oVsErfSgEWsgZSo' +
		'/JxW6xT+qwBR2Uc/PN7T+yzRewsE50wAAAAAElFTkSuQmCC',

/* jshint -W101 */ // Line is too long. (W101)

	buffList: [
		{name: 'Rage',                stamina: 10, 'duration': 90,   minCastLevel: 1,    treeId: 0, skillId: 0,   buff: '+0.2% base attack per point.', nicks: 'rage'},
		{name: 'Stun',                stamina: 15, 'duration': 90,   minCastLevel: 1,    treeId: 0, skillId: 1,   buff: '+0.1% chance per point to half opponents chance to hit.', nicks: 'stun,st'},
		{name: 'Fury',                stamina: 10, 'duration': 90,   minCastLevel: 25,   treeId: 0, skillId: 2,   buff: '+0.1% base Attack and +0.1% base Damage per point.', nicks: 'fury'},
		{name: 'Blood Thirst',        stamina: 10, 'duration': 45,   minCastLevel: 25,   treeId: 0, skillId: 4,   buff: '+0.2% chance per point to drain 5% of your opponents current HP per combat turn from your opponent.', nicks: 'blood thirst,bloodthirst,bt'},
		{name: 'Enchant Weapon',      stamina: 10, 'duration': 90,   minCastLevel: 25,   treeId: 0, skillId: 5,   buff: '+0.1% per point stat bonus increase to your equipped weapon. (Excludes \\\'Gain\\\' bonuses).', nicks: 'enchant weapon,ew'},
		{name: 'Berserk',             stamina: 15, 'duration': 90,   minCastLevel: 75,   treeId: 0, skillId: 3,   buff: '+0.2% base Damage per point.', nicks: 'berserk'},
		{name: 'Holy Flame',          stamina: 15, 'duration': 90,   minCastLevel: 75,   treeId: 0, skillId: 6,   buff: '+0.2% extra damage vs. undead per point.', nicks: 'holy flame,hf'},
		{name: 'Dark Curse',          stamina: 20, 'duration': 60,   minCastLevel: 150,  treeId: 0, skillId: 7,   buff: '+0.2% reduction of opponents defence per point.', nicks: 'dark curse,dc'},
		{name: 'Shockwave',           stamina: 20, 'duration': 90,   minCastLevel: 200,  treeId: 0, skillId: 29,  buff: '+0.1% per point chance per point that your opponent will forfeit their next combat turn.', nicks: 'shockwave,sw,shock'},
		{name: 'Ignite',              stamina: 10, 'duration': 60,   minCastLevel: 200,  treeId: 0, skillId: 30,  buff: '+0.1% per point chance per point that your opponent will be set on fire. Each successful hit thereafter will inflict between 5% and 10% extra damage.', nicks: 'ignite,ign'},
		{name: 'Super Elite Slayer',  stamina: 25, 'duration': 15,   minCastLevel: 250,  treeId: 0, skillId: 31,  buff: '+0.2% per point reduction of damage, attack, defence and armor to super elite creatures.', nicks: 'super elite slayer,ses,se slayer'},
		{name: 'Wither',              stamina: 15, 'duration': 60,   minCastLevel: 250,  treeId: 0, skillId: 32,  buff: '+0.2% per point chance of a 50% reduction of your opponents HP at the start of combat.', nicks: 'wither,with'},
		{name: 'Shatter Armor',       stamina: 20, 'duration': 60,   minCastLevel: 300,  treeId: 0, skillId: 33,  buff: '+0.05% per point chance to reduce opponents armor by 75%.', nicks: 'shatter armor,sa'},
		{name: 'Death Wish',          stamina: 20, 'duration': 45,   minCastLevel: 300,  treeId: 0, skillId: 34,  buff: '+0.03% per point chance to instantly kill vs. creatures. (Excludes Super Elites)', nicks: 'deathwish,dw,deathw,death wish'},
		{name: 'Spell Breaker',       stamina: 35, 'duration': 45,   minCastLevel: 300,  treeId: 0, skillId: 35,  buff: '+0.1% per point chance to remove a random buff from PvP target upon a successful attack.', nicks:'spell breaker,sb'},
		{name: 'Spectral Knight',     stamina: 15, 'duration': 45,   minCastLevel: 400,  treeId: 0, skillId: 48,  buff: '+0.1% per point chance to reduce targets armor by 100%. (vs Creature only)', nicks: 'spectral knight,sk,spec knight'},
		{name: 'Keen Edge',           stamina: 10, 'duration': 60,   minCastLevel: 400,  treeId: 0, skillId: 47,  buff: '+0.1% per point to your attack for each complete set equipped.', nicks: 'keen edge,ke'},
		{name: 'Arterial Strike',     stamina: 20, 'duration': 60,   minCastLevel: 500,  treeId: 0, skillId: 49,  buff: 'Gain additional 0.1% xp per point for every additional round of combat. (Note that this does not activate if conserve activated)', nicks: 'arterial strike,as,art strike,art str'},
		{name: 'Death Dealer',        stamina: 20, 'duration': 60,   minCastLevel: 500,  treeId: 0, skillId: 50,  buff: 'For every 5 kills in a row, without dying, you gain +0.01% extra damage per point (Max 20% and vs. creatures only).', nicks: 'death dealer,dd'},
		{name: 'Savagery',            stamina: 15, 'duration': 45,   minCastLevel: 600,  treeId: 0, skillId: 51,  buff: '0.05% chance per point that your defense stat is added to your attack and your armor stat is added to your damage.', nicks: 'savagery,savage'},
		{name: 'Chi Strike',          stamina: 20, 'duration': 90,   minCastLevel: 700,  treeId: 0, skillId: 52,  buff: '0.1% per point of your Health total is added to your damage', nicks:'chi strike,chi,chis,chi str'},
		{name: 'Shield Strike',       stamina: 20, 'duration': 45,   minCastLevel: 700,  treeId: 0, skillId: 53,  buff: '0.1% per point chance that your defense stat is reduced to zero and your damage is doubled.', nicks: 'shield strike,ss,sh str'},
		{name: 'Demoralize',          stamina: 25, 'duration': 30,   minCastLevel: 800,  treeId: 0, skillId: 73,  buff: '+0.25% per point chance to half the opponents enchancement levels for the battle. Note this skill only takes effect if you initiated the combat.', nicks: 'demoralize,dem'},
		{name: 'Poison',              stamina: 25, 'duration': 60,   minCastLevel: 800,  treeId: 0, skillId: 70,  buff: '+0.1% per point chance that your opponent will be poisoned. Each successful hit thereafter will inflict between 10% and 20% extra damage.', nicks: 'poison,poi'},
		{name: 'Iron Fist',           stamina: 25, 'duration': 60,   minCastLevel: 900,  treeId: 0, skillId: 74,  buff: '+0.1% per point stat bonus increase to your equipped gloves. (Excludes \\\'Gain\\\' bonuses).', nicks: 'iron fist,if'},
		{name: 'Spell Leech',         stamina: 50, 'duration': 60,   minCastLevel: 900,  treeId: 0, skillId: 79,  buff: '+0.1% per point chance when you defeat an opponent in PvP that you initiated, you will steal a random buff. Note the remaining duration of the buff is reduced by 50% and will not take effect until the next combat. Note also if you already have the buff active, it will replace the existing buff you have active.', nicks: 'spell leech,sl'},
		{name: 'Distraction',         stamina: 25, 'duration': 60,   minCastLevel: 900,  treeId: 0, skillId: 78,  buff: '+0.2% per point chance to obtain no gold from a successful combat. +0.05% per point chance to inflict double damage in each round of combat. Note this skill has no effect in PvP.', nicks: 'distraction,dis'},
		{name: 'Coordinated Attack',  stamina: 30, 'duration': 90,   minCastLevel: 1000, treeId: 0, skillId: 118, buff: '+0.05% per point added to Attack and Damage if every piece of equipped gear is part of a set.', nicks: 'coordinated attack,coorda'},
		{name: 'Undermine',           stamina: 30, 'duration': 90,   minCastLevel: 1000, treeId: 0, skillId: 108, buff: 'Increases the maximum percentage (above 100%) of the Breaker enhancement by +0.2% per point.', nicks: 'undermine,um'},
		{name: 'Cursed Rune',         stamina: 30, 'duration': 120,  minCastLevel: 1000, treeId: 0, skillId: 89,  buff: '0.2% per point stat bonus to your equipped rune. Excludes \\\'Gain\\\' bonuses. Double chance of durability loss. Prevents Unbreakable from working while active.', nicks: 'cursed rune,crune'},
		{name: 'Anti Deflect',        stamina: 30, 'duration': 60,   minCastLevel: 1000, treeId: 0, skillId: 105, buff: '+0.2% per point chance to prevent your opponent activating Deflect.', nicks: 'anti deflect,ad'},
		{name: 'Overkill',            stamina: 30, 'duration': 60,   minCastLevel: 1200, treeId: 0, skillId: 109, buff: 'When you inflict 2 times or more of the starting hit points in the first round of combat, you have a 0.25% per point chance to gain 0.025% per point extra XP. (PvE Only)', nicks: 'overkill,ok'},
		{name: 'Smashing Hammer',     stamina: 30, 'duration': 90,   minCastLevel: 1200, treeId: 0, skillId: 111, buff: '+0.05% per point added to your damage for each complete set equipped.', nicks: 'smashing hammer,sh'},
		{name: 'Mighty Vigor',        stamina: 35, 'duration': 60,   minCastLevel: 1200, treeId: 0, skillId: 113, buff: 'For every 50 points of the skill, can equip items 1 level higher than your level.', nicks: 'mighty vigor,mv'},
		{name: 'Fist Fight',          stamina: 30, 'duration': 90,   minCastLevel: 1200, treeId: 0, skillId: 115, buff: '+0.1% per point chance that both players will lose the benefit of ALL skills at the start of combat. This skill takes effect before Sealed. (PvP Only)', nicks: 'fist fight,ff'},
		{name: 'Cursed Ring',         stamina: 30, 'duration': 120,  minCastLevel: 1400, treeId: 0, skillId: 88,  buff: '0.2% per point stat bonus to your equipped ring. Excludes \\\'Gain\\\' bonuses. Double chance of durability loss. Prevents Unbreakable from working while active.', nicks: 'cursed ring,cring'},
		{name: 'Sharpen',             stamina: 30, 'duration': 60,   minCastLevel: 1400, treeId: 0, skillId: 106, buff: 'Increases the maximum percentage (above 100%) of the Piercing Strike enhancement by +0.1% per point.', nicks: 'sharpen,sharp'},
		{name: 'Balanced Attack',     stamina: 30, 'duration': 90,   minCastLevel: 1400, treeId: 0, skillId: 116, buff: '+0.05% per point added to Attack and Damage if every piece of equipped gear is the same level.', nicks: 'balanced attack,ba'},
		{name: 'Heavy Weight',        stamina: 20, 'duration': 120,  minCastLevel: 1600, treeId: 0, skillId: 146, buff: 'Increases damage in combat by +0.025% per point providing you have at least 2,500 gold multiplied by your level in hand.', nicks: 'heavy weight, hw'},
		{name: 'Armored Strike',      stamina: 30, 'duration': 60,   minCastLevel: 1600, treeId: 0, skillId: 130, buff: '+0.05% per point chance that your Armor stat is reduced to zero and your Damage is doubled. (PvE Only)', nicks: 'armored strike, armstr'},
		{name: 'Invert',              stamina: 40, 'duration': 180,  minCastLevel: 2000, treeId: 0, skillId: 173, buff: '+0.2% per skill level chance that enemies armor and defense stats are switched in a PvP attack.', nicks: 'invert'},
		{name: 'Reign of Terror',     stamina: 40, 'duration': 60,   minCastLevel: 2500, treeId: 0, skillId: 174, buff: '+0.1% per skill level reduction to relic defenders armor/defense. (Only counts for capturing groups leader)', nicks: 'reign of terror'},
		{name: 'Critical Strike',     stamina: 40, 'duration': 90,   minCastLevel: 3000, treeId: 0, skillId: 175, buff: 'Increases the maximum percentage (above 100%) of the Critical Hit enhancement by +0.25% per point.', nicks: 'critical strike'},
		{name: 'Great Vigor',         stamina: 10, 'duration': 90,   minCastLevel: 1,    treeId: 1, skillId: 12,  buff: '+0.2% base HP per point.', nicks: 'great vigor,vigor,gv'},
		{name: 'Fortify',             stamina: 10, 'duration': 120,  minCastLevel: 25,   treeId: 1, skillId: 8,   buff: '+0.1% base Armor per point.', nicks: 'fortify'},
		{name: 'Evade',               stamina: 10, 'duration': 90,   minCastLevel: 25,   treeId: 1, skillId: 10,  buff: '+0.1% base Defence per point.', nicks: 'evade'},
		{name: 'Absorb',              stamina: 20, 'duration': 120,  minCastLevel: 25,   treeId: 1, skillId: 13,  buff: '+0.1% chance per point that you will absorb 25% of the damage inflicted on you.', nicks: 'absorb,abs'},
		{name: 'Rock Skin',           stamina: 15, 'duration': 90,   minCastLevel: 75,   treeId: 1, skillId: 11,  buff: '+0.1% base Defence and +0.1 base Armor per point.', nicks: 'rock skin,rs'},
		{name: 'Enchanted Armor',     stamina: 10, 'duration': 90,   minCastLevel: 75,   treeId: 1, skillId: 9,   buff: '+0.1% per point stat bonus increase to your equipped armor. (Excludes \\\'Gain\\\' bonuses).', nicks: 'enchanted armor,enchant armor,ea,ench arm,ench armor'},
		{name: 'Aura of Protection',  stamina: 20, 'duration': 90,   minCastLevel: 150,  treeId: 1, skillId: 15,  buff: '+0.1% base Defence, +0.1% base Armor and +0.1% base HP per point.', nicks: 'aura of protection,aop,aofp'},
		{name: 'Deflect',             stamina: 25, 'duration': 300,  minCastLevel: 150,  treeId: 1, skillId: 14,  buff: '+0.25% chance per point that a player attacking you will automatically fail before combat starts.', nicks: 'deflect,defl'},
		{name: 'Force Shield',        stamina: 10, 'duration': 60,   minCastLevel: 200,  treeId: 1, skillId: 27,  buff: '+0.1% per point chance to reduce damage done to you to 1.', nicks: 'force shield,fs'},
		{name: 'Unbreakable',         stamina: 20, 'duration': 90,   minCastLevel: 200,  treeId: 1, skillId: 28,  buff: '+0.5% per point chance per point of equipment not taking durability loss during combat.', nicks: 'unbreakable,ub,unb,unbr'},
		{name: 'Honor',               stamina: 10, 'duration': 180,  minCastLevel: 800,  treeId: 1, skillId: 82,  buff: '+0.2% per point decrease to the PvP Rating points transferred upon defeat.', nicks: 'honor'},
		{name: 'Assist',              stamina: 30, 'duration': 120,  minCastLevel: 250,  treeId: 1, skillId: 36,  buff: '+0.05% per point chance of one of your allies assisting in combat vs. creatures. (Ally is randomly selected and adds 50% of their attack, defense, damage, armor and hp - note this also excludes allies whom are more than 25 levels above you.).', nicks: 'assist,ass'},
		{name: 'Constitution',        stamina: 25, 'duration': 30,   minCastLevel: 300,  treeId: 1, skillId: 37,  buff: '+0.1% per point increase to your defense.', nicks: 'constitution,const'},
		{name: 'Counter Attack',      stamina: 20, 'duration': 60,   minCastLevel: 400,  treeId: 1, skillId: 54,  buff: 'Uses 0.25% extra stamina (per point) to add 0.25% to both attack and damage. (Both values are rounded up, vs. creature only)', nicks: 'counter attack,ca'},
		{name: 'Summon Shield Imp',   stamina: 50, 'duration': 60,   minCastLevel: 400,  treeId: 1, skillId: 55,  buff: 'Creates an Imp which can absorb 100% of damage. Each full absorb uses one of the Shield Imp\\\'s hit points. The Shield Imp starts with 3 hit points and gains one for each 50 points placed in this skill. The Shield Imp auto-debuffs when it reaches zero hit points. (Note Super-Elites can crush the imp in a single turn regardless of hit points remaining and it only works in PvE.', nicks: 'summon shield imp,ssi,imp'},
		{name: 'Vision',              stamina: 20, 'duration': 90,   minCastLevel: 500,  treeId: 1, skillId: 56,  buff: 'Lights up dark realms. More skill points allow more vision on the \\\'Map\\\' screen. (Vision radius increases every 50 levels).', nicks: 'vision,vis'},
		{name: 'Fortitude',           stamina: 15, 'duration': 90,   minCastLevel: 500,  treeId: 1, skillId: 57,  buff: 'Defense stat is added to HP. (0.1% per point).', nicks: 'fortitude,fort'},
		{name: 'Flinch',              stamina: 20, 'duration': 60,   minCastLevel: 600,  treeId: 1, skillId: 58,  buff: '0.1% per point decrease in enemies Attack stat', nicks: 'flinch'},
		{name: 'Terrorize',           stamina: 20, 'duration': 60,   minCastLevel: 700,  treeId: 1, skillId: 59,  buff: '0.1% per point decrease in enemies Damage stat.', nicks: 'terrorize,terror'},
		{name: 'Nightmare Visage',    stamina: 40, 'duration': 1000, minCastLevel: 700,  treeId: 1, skillId: 60,  buff: '0.25% per point of your Attack will be transferred into Defense. (Great for offline protection!)', nicks: 'nightmare visage,nv,visage'},
		{name: 'Sanctuary',           stamina: 25, 'duration': 30,   minCastLevel: 800,  treeId: 1, skillId: 44,  buff: '+0.1% per point increase to your armor', nicks: 'sanctuary,sanc'},
		{name: 'Dull Edge',           stamina: 10, 'duration': 60,   minCastLevel: 800,  treeId: 1, skillId: 46,  buff: '+0.4% per point reduction to creatures \\\'Piercing Strike\\\' enhancement.', nicks: 'dull edge,de'},
		{name: 'Erosion',             stamina: 25, 'duration': 180,  minCastLevel: 900,  treeId: 1, skillId: 80,  buff: '+0.1% per point chance to reduce an attackers item durability to 1 if durability damage is inflicted. Note this skill only works in PvP and if you are defending.', nicks: 'erosion,ero'},
		{name: 'Avert Gaze',          stamina: 10, 'duration': 60,   minCastLevel: 900,  treeId: 1, skillId: 71,  buff: '+0.5% per point chance of not being affected by Hypnotize.', nicks: 'avert gaze,ag'},
		{name: 'Enchant Shield',      stamina: 25, 'duration': 60,   minCastLevel: 900,  treeId: 1, skillId: 77,  buff: '+0.1% per point stat bonus increase to your equipped shield. (Excludes \\\'Gain\\\' bonuses).', nicks: 'enchant shield,es'},
		{name: 'Smite',               stamina: 30, 'duration': 60,   minCastLevel: 1000, treeId: 1, skillId: 97,  buff: '0.1% per point reduction to attackers armor when defending a PvP attack. (PvP Only).', nicks: 'smite,sm'},
		{name: 'Balanced Defense',    stamina: 30, 'duration': 90,   minCastLevel: 1000, treeId: 1, skillId: 117, buff: '+0.05% per point added to Defense and Armor if every piece of equipped gear is the same level.', nicks: 'balanced defense,bd'},
		{name: 'Bastion',             stamina: 30, 'duration': 90,   minCastLevel: 1000, treeId: 1, skillId: 122, buff: 'Increases the maximum percentage (above 100%) of the Protection enhancement by +0.2% per point.', nicks: 'bastion,bast'},
		{name: 'Side Step',           stamina: 30, 'duration': 90,   minCastLevel: 1000, treeId: 1, skillId: 86,  buff: 'Increases the maximum percentage (above 100%) of the Dodge enhancement by +0.2% per point.', nicks: 'side step,sstep'},
		{name: 'High Guard',          stamina: 30, 'duration': 60,   minCastLevel: 1200, treeId: 1, skillId: 96,  buff: '0.05% chance per point that your attack stat is added to your defense and your damage stat is added to your armor.', nicks: 'high guard,hg'},
		{name: 'Barricade',           stamina: 30, 'duration': 90,   minCastLevel: 1200, treeId: 1, skillId: 98,  buff: '0.1% per point of Damage is transferred to Defense.', nicks: 'barricade,bar'},
		{name: 'Coordinated Defense', stamina: 30, 'duration': 90,   minCastLevel: 1200, treeId: 1, skillId: 119, buff: '+0.05% per point added to Defense and Armor if every piece of equipped gear is part of a set.', nicks: 'coordinated defense,cd'},
		{name: 'Degrade',             stamina: 30, 'duration': 90,   minCastLevel: 1200, treeId: 1, skillId: 121, buff: 'Increases the maximum percentage (above 100%) of the Nullify enhancement by +0.2% per point.', nicks: 'degrade,deg,dg'},
		{name: 'Retaliate',           stamina: 30, 'duration': 60,   minCastLevel: 1400, treeId: 1, skillId: 123, buff: 'Increases the maximum percentage (above 100%) of the Disarm enhancement by +0.2% per point.', nicks: 'retaliate,ret'},
		{name: 'Shame',               stamina: 35, 'duration': 60,   minCastLevel: 1400, treeId: 1, skillId: 110, buff: 'If successfully defending an attack, remove a percentage of additional +0.25% per point xp from the attacker. (PvP Only)', nicks: 'shame'},
		{name: 'Dispel Curse',        stamina: 35, 'duration': 60,   minCastLevel: 1400, treeId: 1, skillId: 114, buff: '0.2% chance per point that Dark Curse will not work against you. (PvP Only)', nicks: 'dispel curse,dispel'},
		{name: 'Anchored',            stamina: 30, 'duration': 60,   minCastLevel: 1600, treeId: 1, skillId: 154, buff: '0.05% per point Damage is added to your health during combat.', nicks: 'anchored, anch, anchor'},
		{name: 'Hardened',            stamina: 30, 'duration': 60,   minCastLevel: 1600, treeId: 1, skillId: 153, buff: '0.05% per point chance to prevent your opponent activating Shatter Armor.', nicks: 'hardened, hard, harden'},
		{name: 'Armor Boost',         stamina: 30, 'duration': 60,   minCastLevel: 1600, treeId: 1, skillId: 136, buff: '+0.05% per point to your Armor for each complete set equipped.', nicks: 'armor boost, armbst, arm bst, armb'},
		{name: 'Shield Wall',         stamina: 30, 'duration': 60,   minCastLevel: 1600, treeId: 1, skillId: 135, buff: '+0.05% per point to your Defense for each complete set equipped.', nicks: 'shield wall, shldwll, sw'},
		{name: 'Layered Armor',       stamina: 40, 'duration': 60,   minCastLevel: 2000, treeId: 1, skillId: 170, buff: '+0.05% of every items damage stat is added to your armor per skill level.', nicks: 'layered armor'},
		{name: 'Defensive Aura',      stamina: 40, 'duration': 60,   minCastLevel: 2500, treeId: 1, skillId: 171, buff: '+0.05% of every items attack stat is added to your defense per skill level.', nicks: 'defensive aura'},
		{name: 'Fumble',              stamina: 40, 'duration': 180,  minCastLevel: 3000, treeId: 1, skillId: 172, buff: '+0.1% per skill level reduction to attackers attack when defending a PvP attack.', nicks: 'fumble'},
		{name: 'Find Item',           stamina: 10, 'duration': 60,   minCastLevel: 1,    treeId: 2, skillId: 16,  buff: '+0.1% per point increase of creatures current drop rate.', nicks: 'find item,fi'},
		{name: 'Treasure Hunter',     stamina: 15, 'duration': 120,  minCastLevel: 1,    treeId: 2, skillId: 17,  buff: '+0.2% per point additional gold from creatures.', nicks: 'treasure hunter,th,treas hunter'},
		{name: 'Deep Pockets',        stamina: 10, 'duration': 90,   minCastLevel: 1,    treeId: 2, skillId: 22,  buff: '+0.25% per point reduction in gold lost on failed combat vs creatures.', nicks: 'deep pockets,dp'},
		{name: 'Quest Finder',        stamina: 5,  'duration': 90,   minCastLevel: 1,    treeId: 2, skillId: 61,  buff: 'Increases the chance a quest item will drop. (If you fail to obtain an item, an extra roll is given for Quest Finder at a fixed percentage based on the points allocated to the skill. If this second roll is successful, you will obtain one of the available quest items drops (if any)).', nicks: 'quest finder,qf'},
		{name: 'Adept Learner',       stamina: 10, 'duration': 90,   minCastLevel: 25,   treeId: 2, skillId: 19,  buff: '+0.2% per point increase in xp from creature kills.', nicks: 'adept learner,al'},
		{name: 'Defiance',            stamina: 15, 'duration': 120,  minCastLevel: 25,   treeId: 2, skillId: 18,  buff: '+0.25% per point reduction in xp lost when defeated in combat vs creatures.', nicks: 'defiance'},
		{name: 'Librarian',           stamina: 10, 'duration': 60,   minCastLevel: 75,   treeId: 2, skillId: 20,  buff: '+0.1% per point chance to gain double xp from creatures.', nicks: 'librarian,lib,libr'},
		{name: 'Merchant',            stamina: 10, 'duration': 60,   minCastLevel: 75,   treeId: 2, skillId: 21,  buff: '+0.05% per point chance to gain double gold from creatures.', nicks: 'merchant,merch,merc'},
		{name: 'Last Ditch',          stamina: 15, 'duration': 120,  minCastLevel: 150,  treeId: 2, skillId: 23,  buff: '+0.2% per point chance to survive death in combat (once per combat).', nicks: 'last ditch,ld'},
		{name: 'Animal Magnetism',    stamina: 10, 'duration': 60,   minCastLevel: 200,  treeId: 2, skillId: 24,  buff: '+0.2% per point chance to make certain creatures respawn at your location.', nicks: 'animal magnetism,animag,ani mag,am'},
		{name: 'Empower',             stamina: 20, 'duration': 60,   minCastLevel: 200,  treeId: 2, skillId: 25,  buff: '+0.1% per point increase to all currently active enhancements.', nicks: 'empower,emp'},
		{name: 'Doubler',             stamina: 5,  'duration': 120,  minCastLevel: 200,  treeId: 2, skillId: 26,  buff: 'At skill level 50+, 2x Stamina usage in combat in return for 2x gold/xp. At level 100+ 3x, and at level 150+ 4x. Note that stamina and xp loss are normal (not multiplied) if you lose a battle.', nicks: 'doubler,doub,db'},
		{name: 'Conserve',            stamina: 10, 'duration': 45,   minCastLevel: 250,  treeId: 2, skillId: 39,  buff: '+0.05% per point chance that combat (vs. players and vs. creatures) will use no stamina. (Excludes group/relic combat)', nicks: 'conserve,cons,consv,con'},
		{name: 'Brewing Master',      stamina: 10, 'duration': 30,   minCastLevel: 250,  treeId: 2, skillId: 40,  buff: '+0.5% per point to the duration of potions when consumed while active.', nicks: 'brewing master,bm,brm,brewm'},
		{name: 'Four Leaf',           stamina: 20, 'duration': 60,   minCastLevel: 250,  treeId: 2, skillId: 41,  buff: '+0.1% per point chance that craftable items are discovered already \\\'Perfect\\\'.', nicks: 'four leaf,4l,fl'},
		{name: 'Extend',              stamina: 30, 'duration': 30,   minCastLevel: 300,  treeId: 2, skillId: 42,  buff: '+0.25% per point increase to skills durations that are cast while this skill is active.', nicks: 'extend,ext'},
		{name: 'Inventor',            stamina: 15, 'duration': 60,   minCastLevel: 400,  treeId: 2, skillId: 62,  buff: 'Increases chance of success when attempting to Invent items/potions. (A fixed +0.05% chance per point extra chance of success)', nicks: 'inventor,inv,invI,inv1,inventor1,inventor 1,inventor i,inv i,inv 1'},
		{name: 'Extractor',           stamina: 15, 'duration': 60,   minCastLevel: 400,  treeId: 2, skillId: 63,  buff: 'Increases chance of success when attempting to extract Components from Resources. (A fixed +0.05% chance per point extra chance of success).', nicks: 'extractor,extr'},
		{name: 'Inventor II',         stamina: 20, 'duration': 60,   minCastLevel: 500,  treeId: 2, skillId: 64,  buff: 'Chance not to consume (or consume less) components when inventing items.', nicks: 'inventor ii,inventorii,invii,inv2,inventor 2,inv ii,inv 2'},
		{name: 'Buff Master',         stamina: 10, 'duration': 60,   minCastLevel: 500,  treeId: 2, skillId: 65,  buff: '0.2% per point chance to half the stamina cost (rounding up) when casting skills on other players. (Does not work on self!)', nicks: 'buff master,buffm,bum'},
		{name: 'Reflection',          stamina: 10, 'duration': 90,   minCastLevel: 600,  treeId: 2, skillId: 66,  buff: '0.1% per point of enemies damage inflicted is added to your next combat strike.', nicks: 'reflection,ref,refl,reflect'},
		{name: 'Guild Buffer',        stamina: 10, 'duration': 90,   minCastLevel: 600,  treeId: 2, skillId: 160, buff: '+0.25% per point chance to reduce stamina cost of casting buffs on guild members by 50% (rounding up).', nicks: 'guild buffer, gldbfr, gb'},
		{name: 'Light Foot',          stamina: 15, 'duration': 120,  minCastLevel: 700,  treeId: 2, skillId: 67,  buff: '0.05% chance to use no stamina while moving on the world map.', nicks: 'light foot,lf'},
		{name: 'Mesmerize',           stamina: 20, 'duration': 60,   minCastLevel: 700,  treeId: 2, skillId: 68,  buff: '0.1% per point chance to reduce a creatures armor and defense by 50% (vs. creature only).', nicks: 'mesmerize,mesmer,mes,mez'},
		{name: 'Resource Finder',     stamina: 25, 'duration': 90,   minCastLevel: 800,  treeId: 2, skillId: 76,  buff: 'Increases the chance a resource item will drop. (If you fail to obtain an item, an extra roll is given for Resource Finder at a fixed percentage based on the points allocated to the skill. If this second roll is successful, you will obtain one of the available resource items drops (if any)). Note if you have Quest Finder active as well, this roll takes place after Quest Finder and only if Quest Finder fails to obtain an item.', nicks: 'resource finder,rf'},
		{name: 'Quest Hunter',        stamina: 25, 'duration': 120,  minCastLevel: 800,  treeId: 2, skillId: 166, buff: 'At skill level 50+ grants 2x the kills towards quest requirements.. At level 100+ 3x, and at level 150+ 4x.', nicks: 'quest hunter'},
		{name: 'Gloat',               stamina: 10, 'duration': 30,   minCastLevel: 900,  treeId: 2, skillId: 81,  buff: '+0.5% per point increase to the PvP Rating points transferred upon victory. Note if you lose to a player who has the Honor skill active, you will lose and additional 50% PvP Rating.', nicks: 'gloat'},
		{name: 'Sacrifice',           stamina: 25, 'duration': 90,   minCastLevel: 900,  treeId: 2, skillId: 75,  buff: '+0.04% per point additional xp and -0.25% per point less gold for defeating creatures in combat.', nicks: 'sacrifice,sac'},
		{name: 'Reckoning',           stamina: 25, 'duration': 60,   minCastLevel: 900,  treeId: 2, skillId: 72,  buff: '+0.2% per point chance of doubling a random skill level for the battle if you initiate the combat (Note that this skill does not work with Doubler, Summon Shield Imp or Counter Attack.).', nicks: 'reckoning,rec,rek'},
		{name: 'Reinforce',           stamina: 30, 'duration': 90,   minCastLevel: 1000, treeId: 2, skillId: 126, buff: 'Increases the maximum percentage (above 100%) of the Sustain enhancement by +0.2% per point.', nicks: 'reinforce,rein'},
		{name: 'Bodyguard',           stamina: 30, 'duration': 120,  minCastLevel: 1000, treeId: 2, skillId: 120, buff: '0.4% per point of XP lost that would be lost to a non-bounty board PvP attack is lost as gold instead, as long as there is enough unbanked gold. Gold lost because of Bodyguard is sunk: it does not go to attacker. Gold taken by attacker (and gold sunk as a result) is unaffected.', nicks: 'bodyguard,bg'},
		{name: 'Riposte',             stamina: 30, 'duration': 60,   minCastLevel: 1000, treeId: 2, skillId: 124, buff: 'Increases the maximum percentage (above 100%) of the Duelist enhancement by +0.2% per point.', nicks: 'riposte,rip'},
		{name: 'Severe Condition',    stamina: 30, 'duration': 90,   minCastLevel: 1000, treeId: 2, skillId: 101, buff: '+0.25% per point of your attack, defense, damage and armor stats are transferred to your health at the start of combat.', nicks: 'severe condition,sc'},
		{name: 'Sealed',              stamina: 35, 'duration': 60,   minCastLevel: 1200, treeId: 2, skillId: 112, buff: '+0.1% per point chance at the start of combat that your opponents skills won\'t take effect in combat. (PvP Only)', nicks: 'sealed,seal'},
		{name: 'Righteous',           stamina: 30, 'duration': 90,   minCastLevel: 1200, treeId: 2, skillId: 107, buff: 'Increases the maximum percentage (above 100%) of the Holy enhancement by +0.2% per point.', nicks: 'righteous,right'},
		{name: 'Epic Forge',          stamina: 30, 'duration': 90,   minCastLevel: 1200, treeId: 2, skillId: 102, buff: '+0.5% per point increase to Hell Forge stat bonuses. Excludes bonuses to enhancements.', nicks: 'epic forge,ef'},
		{name: 'Golden Shield',       stamina: 30, 'duration': 60,   minCastLevel: 1200, treeId: 2, skillId: 103, buff: '+0.05% per point chance to double your armor and defense at the start of combat.', nicks: 'golden shield,gs'},
		{name: 'Stalker',             stamina: 35, 'duration': 90,   minCastLevel: 1400, treeId: 2, skillId: 125, buff: 'Increases the maximum percentage (above 100%) of the Elite Hunter enhancement by +0.1% per point.', nicks: 'stalker,stalk'},
		{name: 'Ageless',             stamina: 30, 'duration': 90,   minCastLevel: 1400, treeId: 2, skillId: 100, buff: '+0.2% per point chance of doubling your HP at the start of combat.', nicks: 'ageless,age'},
		{name: 'Extractor II',        stamina: 30, 'duration': 60,   minCastLevel: 1400, treeId: 2, skillId: 104, buff: '+0.05% per point chance to not destroy a resource when extracting components.', nicks: 'extractor ii,extractorii,extii,ext2,extractor 2,ext ii,ext 2'},
		{name: 'Epic Craft',          stamina: 30, 'duration': 60,   minCastLevel: 1600, treeId: 2, skillId: 159, buff: '+0.5% per point increase to crafted stat bonuses.', nicks: 'epic craft, epc crft, epccrft, ec'},
		{name: 'Gold Foot',           stamina: 20, 'duration': 120,  minCastLevel: 1600, treeId: 2, skillId: 137, buff: '0.05% per point chance to consume 2,500 gold from your hand instead of 1 stamina while moving.', nicks: 'gold foot, goldfoot, gldft, gf'},
		{name: 'Titan Doubler',       stamina: 40, 'duration': 120,  minCastLevel: 2000, treeId: 2, skillId: 167, buff: 'At skill level 50+, 2x Stamina usage in combat against a Titan would kill it twice. At level 100+ 3x, and at level 150+ 4x.', nicks: 'titan doubler'},
		{name: 'Teleport',            stamina: 40, 'duration': 60,   minCastLevel: 2500, treeId: 2, skillId: 168, buff: 'Allows the player to teleport within their current realm. Ability has a 225 second cooldown, reduced by 1 second for each skill level.', nicks: 'teleport'},
		{name: 'Invigorate',          stamina: 40, 'duration': 90,   minCastLevel: 3000, treeId: 2, skillId: 169, buff: '+0.01% per skill level added to your attack, defence, armor, HP and damage for each piece of equipped gear that is epic.', nicks: 'invigorate'}
	],

/* jshint +W101 */ // Line is too long. (W101)

	guildMessages: {
		guildSelfMessage: {'color':'green',
			'message':'Member of your own guild!'},
		guildFrndMessage: {'color':'OliveDrab',
			'message':'Do not attack - Guild is friendly!'},
		guildPastMessage: {'color':'DarkCyan',
			'message':'Do not attack - You\'ve been in that guild once!'},
		guildEnmyMessage: {'color':'red',
			'message':'Enemy guild. Attack at will!'}
	},

	bias: {0: {generalVariable: 1.1053,
				hpVariable: 1.1},
			1: {generalVariable: 1.1,
				hpVariable: 1.053},
			2: {generalVariable: 1.053,
				hpVariable: 1},
			3: {generalVariable: 1.1053,
				hpVariable: 1}
		},

	defaults: {
		currentTile: '',
		lastActiveQuestPage: '',
		lastCompletedQuestPage: '',
		lastNotStartedQuestPage: '',
		questBeingTracked: '',
		lastWorld: '',
		questsNotStarted: false,
		questsNotComplete: false,
		checkForQuestsInWorld: false,
		enableLogColoring: true,
		enableChatParsing: true,
		enableCreatureColoring: true,
		showCombatLog: false,
		showCreatureInfo: false,
		keepLogs: false,

		showExtraLinks: true,
		huntingBuffs: 'Doubler,Librarian,Adept Learner,Merchant,Treasure Hunter,Animal Magnetism,Conserve',
		huntingBuffsName: 'default',
		huntingBuffs2: 'Deflect',
		huntingBuffs2Name: 'PvP',
		huntingBuffs3: 'SE hunting',
		huntingBuffs3Name: 'Super Elite Slayer',
		showHuntingBuffs: true,
		moveFSBox: false,

		guildSelf: '',
		guildFrnd: '',
		guildPast: '',
		guildEnmy: '',
		goldRecipient: '',
		goldAmount: '',
		sendGoldonWorld: false,
		goldConfirm: '',

		hideKrulPortal: false,
		hideQuests: false,
		hideQuestNames: '',
		hideRecipes: false,
		hideRecipeNames: '',
		footprintsColor: 'silver',
		enableGuildInfoWidgets: true,
		enableOnlineAlliesWidgets: true,
		guildOnlineRefreshTime: 300,
		hideGuildInfoSecureTrade: true,
		hideGuildInfoTrade: false,
		hideGuildInfoMessage: false,
		hideGuildInfoBuff: false,

		buyBuffsGreeting: 'Hello {playername}, can I buy {buffs} for {cost} please?',
		renderSelfBio: true,
		bioEditLines: 10,
		renderOtherBios: true,
		playNewMessageSound: false,
		showSpeakerOnWorld: false,
		defaultMessageSound: 'http://dl.getdropbox.com/u/2144065/chimes.wav',
		highlightPlayersNearMyLvl: true,
		highlightGvGPlayersNearMyLvl: true,
		detailedConflictInfo: false,
		gameHelpLink: true,
		navigateToLogAfterMsg: true,

		enableAllyOnlineList: false,
		enableEnemyOnlineList: false,
		allyEnemyOnlineRefreshTime: 300,
		moveGuildList: false,
		moveOnlineAlliesList: false,

		hideMatchesForCompletedMoves: false,
		quickKill: false,
		doNotKillList: '',
		enableBioCompressor: true,
		maxCompressedCharacters: 250,
		maxCompressedLines: 10,
		hideArenaPrizes: '',
		autoSortArenaList: false,

		currentGoldSentTotal: 0,
		keepBuffLog: false,
		buffLog: '',

		enableActiveBountyList: false,
		bountyListRefreshTime: 300,
		enableWantedList: false,
		wantedNames: '',
		bwNeedsRefresh: true,

		fsboxlog: false,
		fsboxcontent: '',
		itemRecipient: '',
		quickLinks:'[]',
		enableAttackHelper: false,
		minGroupLevel: 1,
		combatEvaluatorBias: 0,
		huntingMode: false,
		enabledHuntingMode: 1,
		hideRelicOffline: false,

		enterForSendMessage: false,
		trackKillStreak: true,
		storeLastQuestPage: false,
		addAttackLinkToLog: true,
		showStatBonusTotal: false,

		newGuildLogHistoryPages: 3,
		useNewGuildLog: false,
		enhanceChatTextEntry: true,

		ajaxifyRankControls: false,

		enableMaxGroupSizeToJoin: false,
		maxGroupSizeToJoin: 11,

		enableTempleAlert: false,
		enableUpgradeAlert: false,
		enableComposingAlert: false,
		autoFillMinBidPrice: true,
		showPvPSummaryInLog: false,
		enableQuickDrink: false,
		enhanceOnlineDots: true,
		hideBuffSelected: false,
		enableFastWalk: false,
		hideHelperMenu: false,
		keepHelperMenuOnScreen: true,
		quickLinksTopPx: 22,
		quickLinksLeftPx: 0,
		showNextQuestSteps: true,

		showHelmetTypeItems: true,
		showAmorTypeItems: true,
		showGloveTypeItems: true,
		showBootTypeItems: true,
		showWeaponTypeItems: true,
		showShieldTypeItems: true,
		showRingTypeItems: true,
		showAmuletTypeItems: true,
		showRuneTypeItems: true,

		showRecallMessages: true,
		showRelicMessages: true,
		showMercenaryMessages: true,
		showGroupCombatMessages: true,
		showDonationMessages: true,
		showRankingMessages: true,
		showGvGMessages: true,
		showTaggingMessages: true,
		showTitanMessages: true,

		showQuickDropLinks: false,


		memberlist: '',
		inventoryMinLvl: 1,
		inventoryMaxLvl: 9999,
		onlinePlayerMinLvl: 1,
		onlinePlayerMaxLvl: 9999,
		arenaMinLvl: 1,
		arenaMaxLvl: 9999,
		showMonsterLog: false,
		lastTempleCheck: 0,
		needToPray: false,
		lastChatCheck: '0',
		lastGuildLogCheck: '0',
		lastOutBoxCheck: '0',
		lastPlayerLogCheck: '0',
		showAdmin: false,
		alliestotal: 0,
		enemiestotal: 0,
		footprints: false,
		showFastWalkIconOnWorld: false,
		hideNonPlayerGuildLogMessages: true,
		listOfAllies: '',
		listOfEnemies: '',
		contactList: '',
		lastUpgradeCheck: 0,
		needToDoUpgrade: false,
		characterVirtualLevel: 0,
		guildLogoControl: false,
		statisticsControl: false,
		guildStructureControl: false,
		lastMembrListCheck: 0,
		disableItemColoring: false,
		showQuickSendLinks: false,
		needToCompose: false,
		lastComposeCheck: 0,
		lastOnlineCheck: 0,
		bountyList: '',
		wantedList: '',
		inventoryCheckedElements: {
			'0': 1, '1': 1, '2': 1, '3': 1, '4': 1,
			'5': 1, '6': 1, '7': 1, '8': 1
		},
		lowestLevelInTop250: 0,

		/* jshint -W110 */ // Mixed double and single quotes. (W110)

		quickMsg: '["Thank you very much ^_^","Happy hunting, {playername}"]',

		sendClasses: '["Amber", "5611"], ' +
			'["Amethyst Weed", "9145"], ["Blood Bloom", "5563"], ' +
			'["Cerulean Rose", "9156"], ["Coleoptera Body", "9287"], ' +
			'["Dark Shade", "5564"], ["Deathbloom", "9140"], ' +
			'["Deathly Mold", "9153"], ["Greenskin\u00A0Fungus", "9148"], ' +
			'["Heffle", "5565"], ["Jademare", "5566"], ' +
			'["Ruby Thistle", "9143"], ["Toad Corpse","9288"], ' +
			'["Trinettle", "5567"], ["Viridian\u00A0Vine", "9151"], ' +
			'["Mortar & Pestle", "9157"], ["Beetle Juice", "9158"]',

		quickSearchList: 
			'[{"category":"Plants","searchname":"Amber","nickname":""},' +
			'{"category":"Plants","searchname":"Blood Bloom","nickname":""},' +
			'{"category":"Plants","searchname":"Jademare","nickname":""},' +
			'{"category":"Plants","searchname":"Dark Shade","nickname":""},' +
			'{"category":"Plants","searchname":"Trinettle","nickname":""},' +
			'{"category":"Plants","searchname":"Heffle Wart","nickname":""},' +
			'{"category":"Potions","searchname":"Sludge Brew",' +
				'"nickname":"DC 200","displayOnAH":true},' +
			'{"category":"Potions","searchname":"Potion of Black Death",' +
				'"nickname":"DC 225","displayOnAH":true},' +
			'{"category":"Potions","searchname":"Potion of Aid",' +
				'"nickname":"Assist","displayOnAH":true},' +
			'{"category":"Potions","searchname":"Potion of Supreme Doubling",' +
				'"nickname":"DB 450","displayOnAH":true},' +
			'{"category":"Potions","searchname":"Potion of Acceleration",' +
				'"nickname":"DB 500","displayOnAH":true},' +
			'{"category":"Potions","searchname":"Potion of Lesser Death Dealer",' +
				'"nickname":"DD","displayOnAH":true},' +
			'{"category":"Potions","searchname":"Runic Potion",' +
				'"nickname":"FI 250","displayOnAH":true},' +
			'{"category":"Potions","searchname":"Potion of the Bookworm",' +
				'"nickname":"Lib 225","displayOnAH":true},' +
			'{"category":"Potions","searchname":"Potion of Truth",' +
				'"nickname":"EW 1k","displayOnAH":true},' +
			'{"category":"Potions","searchname":"Dull Edge",' +
				'"nickname":"DE 25","displayOnAH":true},' +
			'{"category":"Potions","searchname":"Notched Blade",' +
				'"nickname":"DE 80","displayOnAH":true},' +
			'{"category":"Potions","searchname":"Potion of Death",' +
				'"nickname":"DW 125","displayOnAH":true},' +
			'{"category":"Potions","searchname":"Potion of Decay",' +
				'"nickname":"WI 150","displayOnAH":true},' +
			'{"category":"Potions","searchname":"Potion of Fatality",' +
				'"nickname":"WI 350","displayOnAH":true},' +
			'{"category":"Potions","searchname":"Potion of Annihilation",' +
				'"nickname":"DW 150","displayOnAH":true},' +
			'{"category":"Potions","searchname":"Potion of the Wise",' +
				'"nickname":"Lib 200","displayOnAH":true},' +
			'{"category":"Potions","searchname":"Potion of Shattering",' +
				'"nickname":"SA","displayOnAH":true},' +
			'{"category":"Potions","searchname":"Dragons Blood Potion",' +
				'"nickname":"ZK 200","displayOnAH":true},' +
			'{"category":"Potions","searchname":"Berserkers Potion",' +
				'"nickname":"ZK 300","displayOnAH":true},' +
			'{"category":"Potions","searchname":"Potion of Fury",' +
				'"nickname":"ZK 350","displayOnAH":true},' +
			'{"category":"Potions","searchname":"Potion of Supreme Luck",' +
				'"nickname":"FI 1k","displayOnAH":true}]',

		/* jshint +W110 */ // Mixed double and single quotes. (W110)

		arenaMoves: '[]',
		arenaMatches: '[]',
		CombatLog: '',

	},

	saveBoxes: [
		'navigateToLogAfterMsg',
		'gameHelpLink',
		'guildSelf',
		'guildFrnd',
		'guildPast',
		'guildEnmy',
		'showAdmin',
		'ajaxifyRankControls',
		'detailedConflictInfo',
		'disableItemColoring',
		'enableLogColoring',
		'enableChatParsing',
		'enableCreatureColoring',
		'hideNonPlayerGuildLogMessages',
		'buyBuffsGreeting',
		'renderSelfBio',
		'renderOtherBios',
		'defaultMessageSound',
		'showSpeakerOnWorld',
		'playNewMessageSound',
		'highlightPlayersNearMyLvl',
		'highlightGvGPlayersNearMyLvl',
		'showCombatLog',
		'showMonsterLog',
		'showCreatureInfo',
		'keepLogs',
		'enableGuildInfoWidgets',
		'enableOnlineAlliesWidgets',
		'hideGuildInfoMessage',
		'hideGuildInfoBuff',
		'hideGuildInfoSecureTrade',
		'hideGuildInfoTrade',
		'quickKill',
		'huntingBuffs',
		'huntingBuffsName',
		'huntingBuffs2',
		'huntingBuffs2Name',
		'huntingBuffs3',
		'huntingBuffs3Name',
		'showHuntingBuffs',
		'moveGuildList',
		'moveOnlineAlliesList',
		'moveFSBox',
		'hideKrulPortal',
		'hideQuests',
		'hideQuestNames',
		'checkForQuestsInWorld',
		'hideRecipes',
		'hideRecipeNames',
		'footprintsColor',
		'doNotKillList',
		'enableBioCompressor',
		'maxCompressedCharacters',
		'maxCompressedLines',
		'sendGoldonWorld',
		'goldRecipient',
		'goldAmount',
		'keepBuffLog',
		'showQuickSendLinks',
		'showQuickDropLinks',
		'sendClasses',
		'itemRecipient',
		'currentGoldSentTotal',
		'hideArenaPrizes',
		'autoSortArenaList',
		'enableAllyOnlineList',
		'enableEnemyOnlineList',
		'allyEnemyOnlineRefreshTime',
		'quickLinksTopPx',
		'quickLinksLeftPx',
		'enableActiveBountyList',
		'bountyListRefreshTime',
		'enableWantedList',
		'wantedNames',
		'fsboxlog',
		'huntingMode',
		'enableAttackHelper',
		'hideRelicOffline',
		'enterForSendMessage',
		'storeLastQuestPage',
		'addAttackLinkToLog',
		'showStatBonusTotal',
		'newGuildLogHistoryPages',
		'useNewGuildLog',
		'enhanceChatTextEntry',
		'enableMaxGroupSizeToJoin',
		'maxGroupSizeToJoin',
		'enableTempleAlert',
		'enableUpgradeAlert',
		'enableComposingAlert',
		'autoFillMinBidPrice',
		'showPvPSummaryInLog',
		'enableQuickDrink',
		'enhanceOnlineDots',
		'hideBuffSelected',
		'enableFastWalk',
		'showFastWalkIconOnWorld',
		'hideHelperMenu',
		'keepHelperMenuOnScreen',
		'showNextQuestSteps'//,
	],

	craft: {
		Perfect    : {abbr: 'Perf', colour: '#00b600'},
		Excellent  : {abbr: 'Exc',  colour: '#f6ed00'},
		'Very Good': {abbr: 'VG',   colour: '#f67a00'},
		Good       : {abbr: 'Good', colour: '#f65d00'},
		Average    : {abbr: 'Ave',  colour: '#f64500'},
		Poor       : {abbr: 'Poor', colour: '#f61d00'},
		'Very Poor': {abbr: 'VPr',  colour: '#b21500'},
		Uncrafted  : {abbr: 'Unc',  colour: '#666666'}
	},

	itemType: ['Helmet', 'Armor', 'Gloves', 'Boots', 'Weapon', 'Shield',
		'Ring', 'Amulet', 'Rune', 'Quest Item', 'Potion', 'Component',
		'Resource', 'Recipe', 'Container', 'Composed Potion', 'Frag Stash'],

	rarityColour: [
		'#ffffff', // Common
		'#0099ff', // Rare '#40FFFF'
		'#ff33ff', // Unique
		'#ffff66', // Legendary '#F6ED00'
		'#ff3333', // Super Elite
		'#6633ff', // Crystalline
		'#009900'  // Epic '#00FF00'
	],

	rarity: [
		{colour: '#ffffff', class: 'fshCommon'},
		{colour: '#0099ff', class: 'fshRare'},
		{colour: '#cc00ff', class: 'fshUnique'},
		{colour: '#ffff33', class: 'fshLegendary'},
		{colour: '#cc0033', class: 'fshSuper'},
		{colour: '#6633ff', class: 'fshCrystal'},
		{colour: '#009900', class: 'fshEpic'}
	],

	pageSwitcher: {
		settings: {'-': {'-': {'-': {'-': 'settingsPage.injectSettings'}}}},
		world: {
			'-': {'-': {'-': {'-': 'injectWorld'}}},
			'viewcreature': {'-': {'-': {'-': 'injectCreature'}}},
			'map': {'-': {'-': {'-': 'injectWorldMap'}}}},
		news: {
			'fsbox': {'-': {'-': {'-': 'news.newsFsbox'}}},
			'shoutbox': {'-': {'-': {'-': 'news.newsShoutbox'}}}},
		blacksmith: {
			'repairall': {'-': {'-': {'1': 'injectWorld'}}}},
		arena: {
			'-': {'-': {'-': {'-': 'arena.inject'}}},
			'completed': {'-': {'-': {'-': 'oldArena.storeCompletedArenas'}}},
			'pickmove': {'-': {'-': {'-': 'arena.storeMoves'}}},
			'setup': {'-': {'-': {'-': 'oldArena.injectArenaSetupMove'}}}
			},
		questbook: {
			'-': {'-': {
				'-': {'-': 'questBook.injectQuestBookFull'},
				'0': {'-': 'questBook.injectQuestBookFull'}, // Normal
				'1': {'-': 'questBook.injectQuestBookFull'}}}, // Seasonal
			'atoz': {'-': {'-': {'-': 'questBook.injectQuestBookFull'}}},
			'viewquest': {'-': {'-': {'-': 'questBook.injectQuestTracker'}}}},
		profile: {
			'-': {'-': {'-': {'-': 'profile.injectProfile'}}},
			'report': {'-': {'-': {'-': 'profile.injectProfile'}}},
			'equipitem': {'-': {'-': {'-': 'profile.injectProfile'}}},
			'changebio': {'-': {'-': {'-': 'profile.injectBioWidgets'}}},
			'dropitems': {'-': {'-': {'-': 'dropItems.injectProfileDropItems',
				'1': 'dropItems.injectProfileDropItems'}}}},
		auctionhouse: {'-': {'-': {'-': {'-': 'misc.injectAuctionHouse'}}}},
		guild: {
			'inventory': {
				'report': {'-': {'-': 'guildReport.injectReportPaint'}},
				'addtags': {
					'-': {'-': 'guild.injectGuildAddTagsWidgets'},
					'-1': {'-': 'guild.injectGuildAddTagsWidgets'},
					'0': {'-': 'guild.injectGuildAddTagsWidgets'},
					'1': {'-': 'guild.injectGuildAddTagsWidgets'},
					'2': {'-': 'guild.injectGuildAddTagsWidgets'},
					'3': {'-': 'guild.injectGuildAddTagsWidgets'},
					'4': {'-': 'guild.injectGuildAddTagsWidgets'},
					'5': {'-': 'guild.injectGuildAddTagsWidgets'},
					'6': {'-': 'guild.injectGuildAddTagsWidgets'},
					'7': {'-': 'guild.injectGuildAddTagsWidgets'},
					'8': {'-': 'guild.injectGuildAddTagsWidgets'},
					'10': {'-': 'guild.injectGuildAddTagsWidgets'},
					'15': {'-': 'guild.injectGuildAddTagsWidgets'},
					'16': {'-': 'guild.injectGuildAddTagsWidgets'}},
				'removetags': {'-': {'-': 'guild.injectGuildAddTagsWidgets'}},
				'storeitems': {'-': {'-': 'dropItems.injectDropItems'}}},
			'chat': {'-': {'-': {'-': 'logs.guildChat'}}},
			'log': {'-': {'-': {'-': 'logs.guildLog'}}},
			'groups': {
				'viewstats': {'-': {'-': 'groups.injectGroupStats'}},
				'joinallgroupsundersize': {'-': {'-': 'groups.injectGroups'}},
				'-': {'-': {'-': 'groups.injectGroups'}}},
			'manage': {'-': {'-': {'-': 'guild.injectGuild'}}},
			'structures': {'-': {'-': {'-': 'guild.injectGuild'}}},
			'advisor': {
				'-': {'-': {'-': 'guildAdvisor.injectAdvisor'}},
				'weekly': {'-': {'-': 'guildAdvisor.injectAdvisor'}}},
			'history': {'-': {'-': {'-': 'guild.addHistoryWidgets'}}},
			'view': {'-': {'-': {'-': 'guild.injectViewGuild'}}},
			'scouttower': {'-': {'-': {'-': 'scoutTower.injectScouttower'}}},
			//'mailbox': {'-': {'-': {'-': 'mailbox.injectMailbox'}}},
			'ranks': {'-': {'-': {'-': 'rank.injectGuildRanks'}}},
			'conflicts': {'rpupgrades': {'-': {'-': 'guild.injectRPUpgrades'}}}},
		bank: {'-': {'-': {'-': {'-': 'misc.injectBank'}}}},
		log: {
			'-': {'-': {
				'-': {'-': 'logs.playerLog'},
				'-1': {'-': 'logs.playerLog'},
				'0': {'-': 'logs.playerLog'},
				'1': {'-': 'logs.playerLog'},
				'2': {'-': 'logs.playerLog'},
				'3': {'-': 'logs.playerLog'}}},
			'outbox': {'-': {'-': {'-': 'logs.outbox'}}}},
		potionbazaar: {'-': {'-': {'-': {'-': 'bazaar.inject'}}}},
		marketplace: {
			'createreq': {'-': {'-': {'-': 'misc.addMarketplaceWidgets'}}}},
		quickbuff: {'-': {'-': {'-': {'-': 'quickBuff.inject'}}}},
		notepad: {
			'showlogs': {'-': {'-': {'-': 'combatLog.injectNotepadShowLogs'}}},
			'invmanagernew': {'-': {'-': {
				'-': 'inventory.injectInventoryManagerNew'}}},
			'invmanager': {'-': {'-': {'-': 'oldInvMan.injectInventoryManager'}}},
			'guildinvmgr': {'-': {'-': {
				'-': 'inventory.injectInventoryManagerNew'}}},
			'guildinvmanager': {'-': {'-': {'-': 'oldInvMan.injectInventoryManager'}}},
			'recipemanager': {'-': {'-': {'-': 'recipeMgr.injectRecipeManager'}}},
			'auctionsearch': {'-': {'-': {'-': 'lists.injectAuctionSearch'}}},
			'onlineplayers': {'-': {'-': {'-': 'onlinePlayers.injectOnlinePlayers'}}},
			'quicklinkmanager': {'-': {'-': {'-': 'lists.injectQuickLinkManager'}}},
			'monsterlog': {'-': {'-': {'-': 'monstorLog.injectMonsterLog'}}},
			'quickextract': {'-': {'-': {'-': 'quickExtract.insertQuickExtract'}}},
			'quickwear': {'-': {'-': {'-': 'quickWear.insertQuickWear'}}},
			'fsboxcontent': {'-': {'-': {'-': 'environment.injectFsBoxContent'}}},
			'bufflogcontent': {'-': {'-': {'-': 'quickBuff.injectBuffLog'}}},
			'newguildlog': {'-': {'-': {'-': 'newGuildLog.injectNewGuildLog'}}},
			'findbuffs': {'-': {'-': {'-': 'findBuffs.injectFindBuffs'}}},
			'findother': {'-': {'-': {'-': 'findBuffs.injectFindOther'}}},
			'savesettings': {'-': {'-': {'-': 'settingsPage.injectSaveSettings'}}},
			'-': {'-': {'-': {'-': 'misc.injectNotepad'}}}},
		points: {'-': {'-': {
			'-': {'-': 'upgrades.storePlayerUpgrades'},
			'0': {'-': 'upgrades.storePlayerUpgrades'},
			'1': {'-': 'notification.parseGoldUpgrades'}}}},
		trade: {
			'-': {'-': {'-': {'-': 'trade.injectTrade'}}},
			'createsecure': {'-': {'-': {'-': 'trade.injectTrade'}}}},
		titan: {'-': {'-': {'-': {'-': 'scoutTower.injectTitan'}}}},
		toprated: {
			'xp': {'-': {'-': {'-': 'toprated.injectTopRated'}}},
			'monthlyxp': {'-': {'-': {'-': 'toprated.injectTopRated'}}},
			'gold': {'-': {'-': {'-': 'toprated.injectTopRated'}}},
			'killstreak': {'-': {'-': {'-': 'toprated.injectTopRated'}}},
			'bounties': {'-': {'-': {'-': 'toprated.injectTopRated'}}},
			'risingstars': {'-': {'-': {'-': 'toprated.injectTopRated'}}},
			'arena': {'-': {'-': {'-': 'toprated.injectTopRated'}}},
			'superelites': {'-': {'-': {'-': 'toprated.injectTopRated'}}},
			'smasher': {'-': {'-': {'-': 'toprated.injectTopRated'}}}},
		inventing: {'viewrecipe': {'-': {'-': {'-': 'recipes.inventing'}}}},
		tempinv: {'-': {'-': {'-': {'-': 'mailbox.injectMailbox'}}}},
		//attackplayer: {'-': {'-': {'-': {'-': 'attackPlayer.injectAttackPlayer'}}}},
		findplayer: {'-': {'-': {'-': {'-': 'misc.injectFindPlayer'}}}},
		quests: {'view': {'-': {'-': {'-': 'questBook.showAllQuestSteps'}}}}, //UFSG
		scavenging: {'process': {'-': {'-': {'-': 'scavenging.injectScavenging'}}}}, // No longer in use???
		temple: {'-': {'-': {'-': {'-': 'notification.parseTemplePage'}}}},
		composing: {'-': {'-': {'-': {'-': 'composing.injectComposing'}}}},
		'-': {'-': {'-': {'-': {'-': 'environment.unknownPage'}}}}
	},

	excludeBuff: {
		'skill-50' : 'Death Dealer',
		'skill-54' : 'Counter Attack',
		'skill-55' : 'Summon Shield Imp',
		'skill-56' : 'Vision',
		'skill-60' : 'Nightmare Visage',
		'skill-61' : 'Quest Finder',
		'skill-98' : 'Barricade',
		'skill-101': 'Severe Condition'
	},

	inventoryCheckAll: {
		'0': 1, '1': 1, '2': 1, '3': 1, '4': 1,
		'5': 1, '6': 1, '7': 1, '8': 1, '9': 1,
		'10': 1, '11': 1, '12': 1, '13': 1,
		'14': 1, '15': 1, '16': 1
	}

};

FSH.Layout = {

	helpLink: function(title, text) {
		return ' [&nbsp;' +
			'<span style="text-decoration:underline;cursor:pointer;" class="tip-static" data-tipped="' +
			'<span style=\'font-weight:bold; color:#FFF380;\'>' + title + '</span><br /><br />' +
			text + '">?</span>' +
			'&nbsp;]';
	},

	onlineDot: function(obj) {
		var img;
		var min = 0;
		if (obj.day)  {min += parseInt(obj.day,  10) * 1440;}
		if (obj.hour) {min += parseInt(obj.hour, 10) * 60;}
		if (obj.min)  {min += parseInt(obj.min,  10);}
		if (obj.last_login) {
			min = Math.floor(Date.now() / 60000) - Math.floor(obj.last_login / 60);
		}
		if (min < 2) {
			img = FSH.Data.greenDiamond;
		} else if (min < 5) {
			img = FSH.Data.yellowDiamond;
		} else if (min < 30) {
			img = FSH.Data.orangeDiamond;
		} else if (min < 10080) {
			img = FSH.Data.offlineDot;
		} else if (min < 44640) {
			img = FSH.Data.sevenDayDot;
		} else if (min >= 44640) {
			img = FSH.Data.redDot;
		}
		return img;
	},

	injectMenu: function() { //jquery
		if (FSH.System.getValue('lastActiveQuestPage').length > 0) {
			$('a[href="index.php?cmd=questbook"]').attr('href',
				FSH.System.getValue('lastActiveQuestPage'));
		}
		var pCL = $('div#pCL:first');
		if (pCL.length === 0) {return;}
		//character
		$(pCL).find('a#nav-character-log').parent('li')
			.after('<li class="nav-level-1"><a class="nav-link" id="nav-' +
				'character-recipemanager" href="index.php?cmd=notepad&blank' +
				'=1&subcmd=recipemanager">Recipe Manager</a></li>')
			.after('<li class="nav-level-1"><a class="nav-link" id="nav-' +
				'character-invmanager" href="index.php?cmd=notepad&blank=1&' +
				'subcmd=invmanager">Inventory Manager</a></li>')
			.after('<li class="nav-level-1"><a class="nav-link" id="nav-' +
				'character-medalguide" href="index.php?cmd=profile&subcmd=' +
				'medalguide">Medal Guide</a></li>');
		if (FSH.System.getValue('keepBuffLog')) {
			$(pCL).find('a#nav-character-log').parent('li')
				.after('<li class="nav-level-1"><a class="nav-link" id="nav-' +
					'character-bufflog" href="index.php?cmd=notepad&blank=1&' +
					'subcmd=bufflogcontent">Buff Log</a></li>');
		}
		if (FSH.System.getValue('keepLogs')) {
			$(pCL).find('a#nav-character-notepad').parent('li')
				.after('<li class="nav-level-1"><a class="nav-link" id="nav-' +
					'character-showlogs" href="index.php?cmd=notepad&blank=1' +
					'&subcmd=showlogs">Combat Logs</a></li>');
		}
		if (FSH.System.getValue('showMonsterLog')) {
			$(pCL).find('a#nav-character-notepad').parent('li')
				.after('<li class="nav-level-1"><a class="nav-link" id="nav-' +
					'character-monsterlog" href="index.php?cmd=notepad&blank' +
					'=1&subcmd=monsterlog">Creature Logs</a></li>');
		}
		$(pCL).find('a#nav-character-notepad').parent('li')
			.after('<li class="nav-level-1"><a class="nav-link" id="nav-' +
				'character-quicklinkmanager" href="index.php?cmd=notepad&' +
				'blank=1&subcmd=quicklinkmanager">Quick Links</a></li>')
			.after('<li class="nav-level-1"><a class="nav-link" id="nav-' +
				'character-createmap" href="index.php?cmd=notepad&blank=1&' +
				'subcmd=createmap">Create Maps</a></li>');
		//guild
		$(pCL).find('a#nav-guild-storehouse-inventory').parent('li')
			.after('<li class="nav-level-2"><a class="nav-link" id="nav-' +
				'guild-guildinvmanager" href="index.php?cmd=notepad&blank=1' +
				'&subcmd=guildinvmanager">Guild Inventory</a></li>');
		if (!FSH.System.getValue('useNewGuildLog')) {
			//if not using the new guild log, show it as a separate menu entry
			$(pCL).find('a#nav-guild-ledger-guildlog').parent('li')
				.before('<li class="nav-level-2"><a class="nav-link" id="nav' +
					'-guild-newguildlog" href="index.php?cmd=notepad&blank=1' +
					'&subcmd=newguildlog">New Guild Log</a></li>');
		}
		//top rated
		$(pCL).find('a#nav-toprated-players-level').parent('li')
			.after('<li class="nav-level-2"><a class="nav-link" id="nav-' +
				'toprated-top250" href="index.php?cmd=toprated&subcmd=xp">' +
				'Top 250 Players</a></li>');
		//actions
		$(pCL).find('a#nav-actions-trade-auctionhouse').parent('li')
			.after('<li class="nav-level-2"><a class="nav-link" id="nav-' +
				'actions-ahquicksearch" href="index.php?cmd=notepad&blank=1' +
				'&subcmd=auctionsearch">AH Quick Search</a></li>');
		$(pCL).find('a#nav-actions-interaction-findplayer').parent('li')
			.after('<li class="nav-level-2"><a class="nav-link" id="nav-' +
				'actions-onlineplayers" href="index.php?cmd=notepad&blank=1' +
				'&subcmd=onlineplayers">Online Players</a></li>')
			.after('<li class="nav-level-2"><a class="nav-link" id="nav-' +
				'actions-findother" href="index.php?cmd=notepad&blank=1&' +
				'subcmd=findother">Find Other</a></li>')
			.after('<li class="nav-level-2"><a class="nav-link" id="nav-' +
				'actions-findbuffs" href="index.php?cmd=notepad&blank=1&' +
				'subcmd=findbuffs">Find Buffs</a></li>');
		//adjust the menu length in chrome for the newly added items
		//first the open ones
		$('ul.nav-animated').each(function() {
			if ($(this).css('height') !== '0px') {
				$(this).css('height',$(this).find('li').length*22);
			}
		});
		//and now the closed saved variables
		window.$('#nav').nav('calcHeights');
	},

	moveRHSBoxUpOnRHS: function(title) {
		$('div#pCR').prepend($('div#' + title));
	},

	moveRHSBoxToLHS: function(title) {
		var myDiv=$('div#' + title).wrap('<div class="pCR"></div>');
		myDiv=myDiv.parent();
		$('div#pCL').append(myDiv);
		$('div#pCL').append('<style>.pCR a { color: #F7EAC9; }</style>');
	},

	notebookContent: function() {
		return $('div#pCC')[0]; //new interface logic
	},

	makePageHeader: function(title, comment, spanId, button) { // Native
		return '<table width=100%><tr style="background-color:#CD9E4B">'+
			'<td width="90%" nobr><b>&nbsp;'+title+'</b>'+
			(comment===''?'':'&nbsp;('+comment+')')+
			'<td width="10%" nobr style="font-size:x-small;text-align:right">'+
			(spanId?'[<span style="text-decoration:underline;cursor:pointer;" id="'+spanId+'">'+button+'</span>]':'')+
			'</td></tr></table>';
	},

	makePageTemplate: function(title, comment, spanId, button, divId) { // Native
		return FSH.Layout.makePageHeader(title, comment, spanId, button)+
			'<div style="font-size:small;" id="'+divId+'"></div>';
	},

	playerId: function() {
		var playerIdRE = /fallensword.com\/\?ref=(\d+)/;
		var thePlayerId=parseInt(document.body.innerHTML.match(playerIdRE)[1],10);
		FSH.System.setValue('playerID',thePlayerId);
		return thePlayerId;
	},

	guildId: function () {
		var guildId = $('script:contains("guildId: ")').first().text()
			.match(/\s+guildId: ([0-9]+),/);
		if (guildId) {guildId = parseInt(guildId[1], 10);}
		FSH.System.setValue('guildId', guildId);
		return guildId;
	},

	infoBox: function(documentText) {
		//var infoRE = /<center><b>INFORMATION.*><center>([^<]+)<\/center>/i;
		//infoRE = /<center>INFORMATION<\/center><\/font><\/td><\/tr>\t*<tr><td><font size=2 color=\'\#000000\'><center>([^<]+)</i;
		//Fast Recall = <center>INFORMATION</center></font></td></tr>	<tr><td><font size=2 color='#000000'><center>You successfully recalled the item.</center>
		//Guild Take = <center>INFORMATION</center></font></td></tr>	<tr><td><font size=2 color='#000000'><center>You successfully took the item into your backpack.</center>
		var infoMatch = $(documentText).find('center[id="info-msg"]').html();
		var result='';
		if (infoMatch) {
			infoMatch = infoMatch.replace(/<br.*/,'');
			result=infoMatch;
		}
		return result;
	},

	networkIcon:
		'<img title="This function retrieves data from the network. ' +
		'Disable this to increase speed" src="data:image/png;base64,' +
		'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA' +
		'B3RJTUUH1QgGDTMWk1twEwAAAAlwSFlzAAALEgAACxIB0t1+' +
		'/AAAAARnQU1BAACxjwv8YQUAAAC8SURBVHjahVPBEcQgCEQn' +
		'HdmTqUlr0qe16I8cufOiCGZnGCcIy4LEICJwmGgWJ3o0IOCQ' +
		'EqVg9Y4U3CoCHQhvxuPUZEiA3XYkxyI1/6S6R6rke8AlJbkV' +
		'7u95lleXq3yrdyUjLGxwnifmnHEXY3fJIQSIMcKOZCLgMltr' +
		'r+1ZWgxp8wi1VrEqxfeFWloYq4wKtOHeBNqeawqmeOnNvfdY' +
		'SvkbfaeUxP0w/G+k6WsT/xCBc25SuxDsnownEy4u5BHudpMF' +
		'egAAAABJRU5ErkJggg==" width="16" height="16" />',

	quickBuffHref: function(playerId, buffList) {
		if (buffList) {
			return 'href=\'javascript:window.openWindow("index.php?cmd=' +
				'quickbuff&tid=' + playerId + '&blist=' + buffList +
				'", "fsQuickBuff", 618, 1000, ",scrollbars")\'';
		} else {
			return 'href=\'javascript:window.openWindow("index.php?cmd=' +
				'quickbuff&tid=' + playerId +
				'", "fsQuickBuff", 618, 1000, ",scrollbars")\'';
		}
	},

	buffAllHref: function(shortList) {
		shortList = shortList.join(',').replace(/\s/g, '');
		var j = 'java';
		return j + 'script:openWindow("index.php?cmd=quickbuff&t=' + shortList +
			'", "fsQuickBuff", 618, 1000, ",scrollbars")';
	},

	advisorColumns: [
		{title: 'Member'},
		{title: 'Lvl',                class: 'dt-center'},
		{title: 'Rank',               class: 'dt-center dt-nowrap'},
		{title: 'Gold From Deposits', class: 'dt-center'},
		{title: 'Gold From Tax',      class: 'dt-center'},
		{title: 'Gold Total',         class: 'dt-center'},
		{title: 'FSP',                class: 'dt-center'},
		{title: 'Skill Cast',         class: 'dt-center'},
		{title: 'Group Create',       class: 'dt-center'},
		{title: 'Group Join',         class: 'dt-center'},
		{title: 'Relic',              class: 'dt-center'},
		{title: 'XP Contrib',         class: 'dt-center'}
	],

	places:['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh',
			'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth',
			'fourteenth'],

	quickBuffHeader:
		'<div id="helperQBheader">' +
		'<table class="qbT"><thead><tr>' +
		'<th class="qbTH">Sustain</th>' +
		'<th class="qbTH">Fury Caster</th>' +
		'<th class="qbTH">Guild Buffer</th>' +
		'<th class="qbTH">Buff Master</span></th>' +
		'<th class="qbTH">Extend</span></th>' +
		'<th class="qbTH">Reinforce</span></th>' +
		'</tr></thead><tbody><tr>' +
		'<td id="fshSus" class="qbTD">&nbsp;</td>' +
		'<td id="fshFur" class="qbTD">&nbsp;</td>' +
		'<td id="fshGB"  class="qbTD">&nbsp;</td>' +
		'<td id="fshBM"  class="qbTD">&nbsp;</td>' +
		'<td id="fshExt" class="qbTD">&nbsp;</td>' +
		'<td id="fshRI"  class="qbTD">&nbsp;</td>' +
		'</tr></tbody></table>' +
		'</div>',

	godsNotification:
		'<li class="notification">' +
		'<span id="helperPrayToGods" style="text-align:center"><table><tbody>' +
		'<tr><td style="padding: 1px"><img src="' + FSH.System.imageServer +
		'/temple/0.gif" class="tip-static" data-tipped="Pray to Sahria" ' +
		'style="cursor: pointer"></td>' +
		'<td style="padding: 1px"><img src="' + FSH.System.imageServer +
		'/temple/1.gif" class="tip-static" data-tipped="Pray to Osverin" ' +
		'style="cursor: pointer"></td>' +
		'<td rowspan="2"><a href="index.php?cmd=temple" ' +
		'class="notification-content">Bow down to the gods</a></td></tr>' +
		'<tr><td style="padding: 1px"><img src="' + FSH.System.imageServer +
		'/temple/2.gif" class="tip-static" data-tipped="Pray to Gurgriss" ' +
		'style="cursor: pointer"></td>' +
		'<td style="padding: 1px"><img src="' + FSH.System.imageServer +
		'/temple/3.gif" class="tip-static" data-tipped="Pray to Lindarsil" ' +
		'style="cursor: pointer"></td></tr></tbody></table></span></li>',

	goldUpgradeMsg:
		'<li class="notification"><a href="index.php?cmd=points&type=1"><span' +
		' class="notification-icon"></span><p class="notification-content">Up' +
		'grade stamina with gold</p></a></li>',

	composeMsg:
		'<li class="notification"><a href="index.php?cmd=composing"><span' +
		' class="notification-icon"></span><p class="notification-content">Co' +
		'mposing to do</p></a></li>',

	allyEnemyList:
		'<h3>Allies/Enemies</h3><div class="minibox-content"><h4>Online ' +
		'Contacts <span id="fshResetEnemy">Reset</span></h4><div id="' +
		'minibox-enemy"><ul id="fshContactList"></ul><ul id="' +
		'enemy-quick-buff">Quick Buff Selected</ul></div></div>',

	allyEnemyContact:
		'<li class="player"><div class="player-row"><a class="' +
		'enemy-buff-check-on" data-name="@@username@@" href="#"></a>' +
		'<a class="player-name tip-static" style="color: @@contactColor@@" ' +
		'data-tipped="<b>@@username@@</b><br><table><tbody><tr><td>Level:' +
		'</td><td>@@level@@</td></tr><tr><td>Last Activity:</td><td>' +
		'@@last_login@@</td></tr></tbody></table>" ' +
		'href="index.php?cmd=profile&player_id=@@id@@">@@username@@</a></div>' +
		'<div class="guild-minibox-actions"><a id="enemy-send-message" ' +
		'class="guild-icon left guild-minibox-action tip-static" ' +
		'href="javascript:openQuickMsgDialog(\'@@username@@\');" ' +
		'data-tipped="Send Message""></a><a id="enemy-quickbuff" ' +
		'class="guild-icon left guild-minibox-action tip-static" ' +
		'href="javascript:openWindow(\'index.php?cmd=quickbuff&t=@@username@@' +
		'\', \'fsQuickBuff\', 618, 1000, \',scrollbars\');" ' +
		'data-tipped="Quick Buff"></a><a id="enemy-secure-trade" ' +
		'class="guild-icon left guild-minibox-action tip-static" ' +
		'href="index.php?cmd=trade&subcmd=createsecure&target_username=' +
		'@@username@@" data-tipped="Secure Trade"></a><a id="enemy-trade" ' +
		'class="guild-icon left guild-minibox-action tip-static" ' +
		'href="index.php?cmd=trade&target_player=@@username@@" ' +
		'data-tipped="Send Gold/Items/FSP"></a></div></li>',

	reportLinks:
		'<span class="fshNoWrap">Recall to: <a class="tip-static" ' +
		'href="@@firstHref@@" data-tipped="@@firstOldTitle@@">@@firstText@@' +
		'</a><span class="fshHide"> | <a class="tip-static" ' +
		'href="@@secondHref@@" data-tipped="Click to recall to guild store">' +
		'Guild Store</a></span> | <span class="reportLink recall tip-static" ' +
		'href="@@firstHref@@" data-tipped="@@firstOldTitle@@">Fast ' +
		'@@fasttext@@</span><span class="fshHide"> | <span class="reportLink ' +
		'recall tip-static" href="@@secondHref@@" data-tipped="Click to ' +
		'recall to guild store">Fast GS</span></span><span ' +
		'class="fshWearHide"> | <span class="reportLink @@linktype@@">Fast ' +
		'Wear</span></span></span>',

	bazaarTable:
		'<table id="fshBazaar"><tr><td colspan="5">Select an item to ' +
		'quick-buy:</td></tr><tr><td colspan="5">Select how many to ' +
		'quick-buy</td></tr><tr><td colspan="5"><input id="buy_amount" ' +
		'class="fshNumberInput" type="number" min="0" max="99" value="1">' +
		'</td></tr><tr><td>@0@</td><td>@1@</td><td>@2@</td><td>@3@</td><td>' +
		'@4@</td></tr><tr><td>@5@</td><td>@6@</td><td>@7@</td><td>@8@</td>' +
		'<td>@9@</td></tr><tr><td colspan="3">Selected item:</td><td id="' +
		'selectedItem" colspan="2"></td></tr><tr><td colspan="5"><span id="' +
		'warning">Warning:<br>pressing [<span id="fshBuy" class="fshLink">' +
		'This button</span>] now will buy the <span id="quantity">1</span> ' +
		'item(s) WITHOUT confirmation!</span></td></tr><tr>' +
		'<td id="buy_result" colspan="5"></td></tr></table>',

	bazaarItem:
		'<img class="tip-dynamic" width="20" height="20" src="@src@" ' +
		'itemid="@itemid@" data-tipped="@tipped@">',

	invManFilter:
		'<table class="fshInvFilter"><tr><th colspan="4">' +
		'@@reportTitle@@</th></tr><tr><td rowspan="3">' +
		'<b>&nbsp;Show Items:</b></td><td>' +
		'Helmet: <input id="fshHelmet" type="checkbox" item="0" checked/>' +
		' Armor: <input id="fshArmor" type="checkbox" item="1" checked/>' +
		' Gloves: <input id="fshGloves" type="checkbox" item="2" checked/>' +
		' Boots: <input id="fshBoots" type="checkbox" item="3" checked/>' +
		' Weapon: <input id="fshWeapon" type="checkbox" item="4" checked/></td>' +
		'<td>Min lvl:</td>' +
		'<td><input id="fshMinLvl" size="5" value="1"/></td>' +
		'</tr><tr><td>' +
		'Shield: <input id="fshShield" type="checkbox" item="5" checked/>' +
		' Ring: <input id="fshRing" type="checkbox" item="6" checked/>' +
		' Amulet: <input id="fshAmulet" type="checkbox" item="7" checked/>' +
		' Rune: <input id="fshRune" type="checkbox" item="8" checked/>' +
		' Sets Only: <input id="fshSets" item="-1" type="checkbox"/></td>' +
		'<td>Max lvl:</td>' +
		'<td><input id="fshMaxLvl" size="5" value="9999"/></td>' +
		'</tr><tr><td>' +
		'[<span id="fshAll" class="fshLink">Select All</span>] ' +
		'[<span id="fshNone" class="fshLink">Select None</span>] ' +
		'[<span id="fshDefault" class="fshLink">Defaults</span>]' +
		'</td><td></td><td>' +
		'<input id="fshReset" type="button" value="Reset"/>' +
		'</td></tr></tr><tr><td colspan="4">' +
		'&nbsp;Quest Item: <input id="fshQuest" item="9" type="checkbox"/>' +
		' Potion: <input id="fshPotion" item="10" type="checkbox"/>' +
		' Resource: <input id="fshResource" item="12" type="checkbox"/>' +
		' Recipe: <input id="fshRecipe" item="13" type="checkbox"/>' +
		' Container: <input id="fshContainer" item="14" type="checkbox"/>' +
		' Composed Potion: <input id="fshComposed" item="15" type="checkbox"/>' +
		' Frag Stash: <input id="fshStash" item="16" type="checkbox"/></td>' +
		'</td></table>',

	helperMenu:
		'<div class="column"><h3>Character</h3><ul><li>' +
		'<span class="fshLink" fn="quickBuff.injectBuffLog">Buff Log</span>' +
		'</li><li>' +
		'<span class="fshLink" fn="combatLog.injectNotepadShowLogs">Combat Log</span>' +
		'</li><li>' +
		'<span class="fshLink" fn="recipeMgr.injectRecipeManager">Recipe Manager</span>' +
		'</li><li>' +
		'<span class="fshLink" fn="lists.injectQuickLinkManager">Quick Links</span>' +
		'</li></ul><h3>Actions</h3><ul><li>' +
		'<span class="fshLink" fn="findBuffs.injectFindBuffs">Find Buffs</span>' +
		'</li><li>' +
		'<span class="fshLink" fn="findBuffs.injectFindOther">Find Other</span>' +
		'</li><li>' +
		'<span class="fshLink" fn="onlinePlayers.injectOnlinePlayers">Online Players</span>' +
		'</li><li>' +
		'<span class="fshLink" fn="lists.injectAuctionSearch">AH Quick Search</span>' +
		'</li></ul><h3>Extra</h3><ul><li>' +
		'<span class="fshLink" fn="quickExtract.insertQuickExtract">Quick Extract</span>' +
		'</li><li>' +
		'<span class="fshLink" fn="quickWear.insertQuickWear">Quick Wear</span>' +
		'</li><li>' +
		'<span class="fshLink" fn="environment.injectFsBoxContent">FS Box Log</span>' +
		'</li></ul>' +
		'<h3>FSH developer quick links</h3>' +
		'<ul><li>' +
		'<span class="a-reply" target_player="PointyHair">PM</span> ' +
		'<a href="index.php?cmd=profile&player_id=1963510">PointyHair</a>' +
		'</li><li>' +
		'<span class="a-reply" target_player="yuuzhan">PM</span> ' +
		'<a href="index.php?cmd=profile&player_id=1599987">yuuzhan</a>' +
		'</li></ul>' +
		'</div>',

	arenaFilter:
		'<table width="100%"><tbody><tr><td>' +
		'<span class="fshBlue"><input id="fshHideMoves" type="checkbox">' +
		'&nbsp;Hide Matches for Completed Moves</span></td><td align="right">' +
		'<span class="fshBlue">Min lvl:&nbsp;<input id="fshMinLvl" size="5">' +
		'&nbsp;Max lvl:&nbsp;<input id="fshMaxLvl" size="5">&nbsp;&nbsp;' +
		'<input id="fshReset" class="custombutton" type="button" ' +
		'value="Reset"></span></td></tr></tbody></table>',


};

FSH.ajax = { // jQuery

	getMembrList: function(force) {
		var guildId = FSH.Layout.guildId();
		return FSH.ajax.guildMembers(force, guildId)
			.pipe(function(membrList) {
				FSH.Helper.membrList = membrList[guildId];
				return FSH.Helper.membrList;
			})
			.done(function(membrList) {
				FSH.ajax.getForage('fsh_membrList').done(function(oldMemList) {
					oldMemList = oldMemList || {};
					oldMemList[guildId] = membrList[guildId];
					FSH.ajax.setForage('fsh_membrList', oldMemList);
				});
			});
	},

	getAllMembrList: function(force, guildArray) {
		var prm = [];
		guildArray.forEach(function(guildId) {
			prm.push(FSH.ajax.guildMembers(force, guildId));
		});
		return $.when.apply($, prm)
			.pipe(function() {
				FSH.Helper.membrList = $.extend.apply(this, arguments);
				return FSH.Helper.membrList;
			})
			.done(function(membrList) {
				FSH.ajax.getForage('fsh_membrList').done(function(oldMemList) {
					oldMemList = oldMemList || {};
					FSH.ajax.setForage('fsh_membrList', $.extend(oldMemList, membrList));
				});
			});
	},

	guildMembers: function(force, guildId) {
		if (force) {return FSH.ajax.getGuildMembers(guildId);}
		return FSH.ajax.getForage('fsh_membrList').pipe(function(membrList) {
			if (!membrList ||
				!membrList[guildId] ||
				!membrList[guildId].lastUpdate ||
				membrList[guildId].lastUpdate < Date.now() - 300000) {
				return FSH.ajax.getGuildMembers(guildId);
			}
			return membrList;
		});
	},

	getGuildMembers: function(guildId) {
		return $.ajax({
			dataType: 'json',
			url:'index.php',
			data: {
				cmd: 'export',
				subcmd: 'guild_members',
				guild_id: guildId
			}
		}).pipe(function(data) {
				var membrList = {};
				membrList[guildId] = {};
				membrList[guildId].lastUpdate = Date.now();
				data.forEach(function(ele) {
					membrList[guildId][ele.username] = ele;
				});
				return membrList;
			});
	},

	inventory: function(force) {
		var dfr = FSH.ajax.inventoryCache(force);
		dfr.done(function(inv) {
			FSH.Helper.inventory = inv;
		});
		return dfr;
	},

	inventoryCache: function(force) {
		if (force) {
			return FSH.ajax.getInventory();
		}
		var prm = FSH.ajax.getForage(FSH.subcmd === 'guildinvmgr' ?
			'fsh_guildInv' : 'fsh_selfInv');
		return prm.pipe(function(data) {
			if (!data || data.lastUpdate < Date.now() - 300000) {
				return FSH.ajax.getInventory();
			}
			return data;
		});
	},

	getInventory: function() {
		var prm = $.ajax({
			dataType: 'json',
			url:'index.php?cmd=export&subcmd=' + (FSH.subcmd === 'guildinvmgr' ?
				'guild_store&inc_tagged=1' : 'inventory')
		});
		return prm.pipe(function(data) {
			data.lastUpdate = Date.now();
			FSH.ajax.setForage(FSH.subcmd === 'guildinvmgr' ? 'fsh_guildInv' :
				'fsh_selfInv', data);
			return data;
		});
	},

	myStats: function(force) {
		FSH.Helper.myUsername = $('dt#statbar-character').text();
		return FSH.ajax.getMyStats(force)
			.pipe(function(data) {
				FSH.Helper.profile = FSH.Helper.profile || {};
				FSH.Helper.profile[FSH.Helper.myUsername] = data;
				return data;
			});
	},

	getMyStats: function(force) {
		if (force) {return FSH.ajax.getMyProfile();}
		// jQuery 1.7 uses pipe instead of then
		return FSH.ajax.getForage('fsh_selfProfile')
			.pipe(function(data) {
				if (!data || data.lastUpdate < Date.now() -
					FSH.Helper.allyEnemyOnlineRefreshTime) {
					return FSH.ajax.getMyProfile();
				}
				return data;
			});
	},

	getMyProfile: function() {
		return FSH.ajax.getProfile(FSH.Helper.myUsername)
			.done(function(data) {
				FSH.ajax.setForage('fsh_selfProfile', data);
			});
	},

	getProfile: function(username) {
		return $.getJSON('index.php', {
			cmd:             'export',
			subcmd:          'profile',
			player_username: username
		}).pipe(function(data) {
			data.lastUpdate = Date.now();
			return data;
		});
	},

	setForage: function(forage, data) {
		// Wrap in jQuery Deferred because we're using 1.7
		// rather than using ES6 promise
		var dfr = $.Deferred();
		localforage.setItem(forage, data, function(err, data) {
			if (err) {
				console.log(forage + ' forage error', err);
				dfr.reject(err);
			} else {
				dfr.resolve(data);
			}
		});
		return dfr.promise();
	},

	getForage: function(forage) {
		// Wrap in jQuery Deferred because we're using 1.7
		// rather than using ES6 promise
		var dfr = $.Deferred();
		localforage.getItem(forage, function(err, data) {
			if (err) {
				console.log(forage + ' forage error', err);
				dfr.reject(err);
			} else {
				// returns null if key does not exist
				dfr.resolve(data);
			}
		});
		return dfr.promise();
	},

	equipItem: function(backpackInvId) {
		return $.ajax({
			url: 'index.php',
			data: {
				'cmd': 'profile',
				'subcmd': 'equipitem',
				'inventory_id': backpackInvId,
				'ajax': 1
			},
			dataType: 'json'
		}).done(function(data) {
				if (data.r === 1) {
					$('#dialog_msg').dialog({
						title: 'Information',
						buttons: [{ text: 'Ok', click: function(){$(this).dialog('close');} }]
					});
					$('#dialog_msg').html(data.m).dialog('open');
				}
			});
	},

};

FSH.composing = { // jQuery

	injectComposeAlert: function() { //jquery
		if (FSH.cmd === 'composing') {return;}
		var needToCompose = FSH.System.getValue('needToCompose');
		if (needToCompose) {
			FSH.composing.displayComposeMsg();
			return;
		}
		var lastComposeCheck = FSH.System.getValue('lastComposeCheck');
		if (lastComposeCheck && Date.now() < lastComposeCheck) {return;}
		$.get('index.php?cmd=composing', FSH.composing.parseComposing);
	},

	parseComposing: function(data) { //jquery
		var doc;
		if (FSH.cmd !== 'composing') {
			doc = data;
		} else {
			doc = document;
		}
		var openSlots = $('div.composing-potion-time:contains("ETA: Ready to ' +
			'Collect!"), div.composing-potion-time:contains("ETA: n/a")', doc);
		if (openSlots.length !== 0) {
			FSH.composing.displayComposeMsg();
			FSH.System.setValue('needToCompose', true);
		} else {
			var timeRE = /ETA:\s*(\d+)h\s*(\d+)m\s*(\d+)s/;
			var etas = $('div.composing-potion-time', doc);
			var eta = Infinity;
			etas.each(function() {
				var timeArr = timeRE.exec($(this).text());
				if (!timeArr) {return;}
				var milli = timeArr[1] * 3600000 + timeArr[2] * 60000 +
					timeArr[3] * 1000 + Date.now();
				eta = milli < eta ? milli : eta;
			});
			FSH.System.setValue('needToCompose', false);
			FSH.System.setValue('lastComposeCheck', eta);
		}
	},

	displayComposeMsg: function() { //jquery
		$('ul#notifications').prepend(FSH.Layout.composeMsg);
	},

	injectComposing: function() { //jquery
		if ($('div#pCC').length !== 1) {return;}
		if (FSH.Helper.enableComposingAlert) {
			FSH.composing.parseComposing();}

		$('input[id^=create-]').not('input#create-multi').each(function(i,e){
			$(e).after('<span id="helperQC-' + $(e).attr('id').slice(-1) +
				'" class="helperQC">&nbsp;[Quick Create]</span>');
		});

		$('div#pCC').on('click', 'span[id^="helperQC-"]', function() {
			var temp = $('select#composing-template-' +
				$(this).attr('id').slice(-1));
			if (temp.length === 1 && temp.val() !== 'none') {
				FSH.composing.createPotion(temp);
			}
		});
	},

	createPotion: function($template) { //jquery
		$.ajax({
			cache: false,
			dataType: 'json',
			url:'index.php',
			data: {
				cmd: 'composing',
				subcmd: 'createajax',
				template_id: $template.val(),
				_rnd: Math.floor(Math.random() * 8999999998) + 1000000000
			}
		}).done(function(data, textStatus) {
				if (data.error !== '') {
					$template.parent()
						.html('<div id="helperQCError" style="height: ' +
						'26px;">' + data.error + '</div>');
				} else {
					$template.parent()
						.html('<div id="helperQCSuccess" style="height: ' +
						'26px;">' + textStatus + '</div>');
				}
				if ($('select[id^="composing-template-"]').length === 0 &&
					$('div#helperQCError').length === 0) {
					location.href = 'index.php?cmd=composing';
				}
			});
	}

};

FSH.notification = { // jQuery

	injectTempleAlert: function() { //jquery
		//Checks to see if the temple is open for business.
		if (FSH.cmd === 'temple') {return;}
		var templeAlertLastUpdate = FSH.System.getValue('lastTempleCheck');
		var needToPray = FSH.System.getValue('needToPray');
		var needToParse = false;
		if (templeAlertLastUpdate) {
			if (Date.now() > templeAlertLastUpdate) { // midnight
				needToParse = true;
			} else if (needToPray) {
				FSH.notification.displayDisconnectedFromGodsMessage();
			}
		} else {
			needToParse = true;
		}
		if (needToParse) {
			$.get('index.php?cmd=temple', FSH.notification.parseTemplePage);
		}
	},

	parseTemplePage: function(responseText) { //native
		var checkNeedToPray, doc;
		if (!FSH.Helper.enableTempleAlert) {return;}
		if (FSH.cmd !== 'temple') {
			doc = FSH.System.createDocument(responseText);
		} else {
			doc = document;
		}
		checkNeedToPray = doc.querySelector('input[value="Pray to Osverin"]');
		var needToPray = false;
		if (checkNeedToPray) {
			FSH.notification.displayDisconnectedFromGodsMessage();
			needToPray = true;
		}
		FSH.System.setValue('needToPray', needToPray);
		FSH.System.setValue('lastTempleCheck', new Date()
			.setUTCHours(23, 59, 59, 999) + 1); // midnight
	},

	displayDisconnectedFromGodsMessage: function() { //jquery
		$('ul#notifications').prepend(FSH.Layout.godsNotification);
		$('#helperPrayToGods').on('click', 'img', function() {
			var index = $(this).attr('src').replace(/\D/g, '');
			$('#helperPrayToGods').off('click', 'img');
			$.post(
				FSH.System.server + 'index.php',
				'cmd=temple&subcmd=pray&type=' + index,
				function() {
					$('#helperPrayToGods').html('<span class="notification-' +
						'icon"></span><p class="notification-content">You ' +
						'are currently praying at the temple.</p>');
					FSH.System.setValue('needToPray',false);
					FSH.System.setValue('lastTempleCheck', new Date()
						.setUTCHours(23, 59, 59, 999) + 1); // Midnight
				}
			);
		});
	},

	injectUpgradeAlert: function() { //jquery
		if (location.search.search('cmd=points&type=1') !== -1) {return;}
		var needToDoUpgrade = FSH.System.getValue('needToDoUpgrade');
		if (needToDoUpgrade) {
			FSH.notification.displayUpgradeMsg();
			return;
		}
		var lastUpgradeCheck = FSH.System.getValue('lastUpgradeCheck');
		if (lastUpgradeCheck && Date.now() < lastUpgradeCheck) {return;}
		$.get('index.php?cmd=points&type=1',
			FSH.notification.parseGoldUpgrades);
	},

	parseGoldUpgrades: function(data) { //jquery
		if (!FSH.Helper.enableUpgradeAlert) {return;}
		var doc;
		if (location.search.search('cmd=points&type=1') === -1) {
			doc = data;
		} else {
			doc = document;
			$('div#pCC input[name="upgrade_id"][value="1"]', doc).parent()
				.find('input[name="quantity"]').val('10');
		}
		var limit = $('tr:contains("+1 Maximum Stamina") > td:eq(2)', doc);
		var checkDoneUpgrade = limit.text().split(' / ');
		if (checkDoneUpgrade[0] !== checkDoneUpgrade[1]) {
			FSH.notification.displayUpgradeMsg();
			FSH.System.setValue('needToDoUpgrade', true);
		} else {
			FSH.System.setValue('needToDoUpgrade', false);
			FSH.System.setValue('lastUpgradeCheck',
				Date.parse(limit.next().text() + ' GMT'));
		}
	},

	displayUpgradeMsg: function() { //jquery
		$('ul#notifications').prepend(FSH.Layout.goldUpgradeMsg);
	},

	injectJoinAllLink: function() { // jQuery
		var groupJoinHTML = '';
		if (!FSH.System.getValue('enableMaxGroupSizeToJoin')) {
			groupJoinHTML = '<a href="index.php?cmd=guild&subcmd=groups&subcmd2=joinall"><span class="notification-icon"></span>'+
				'<p class="notification-content">Join all attack groups.</p></a>';
		} else {
			var maxGroupSizeToJoin = FSH.System.getValue('maxGroupSizeToJoin');
			groupJoinHTML = ' <a href="index.php?cmd=guild&subcmd=groups&subcmd2=joinallgroupsundersize"><span class="notification-icon"></span>'+
				'<p class="notification-content">Join all attack groups less than size ' + maxGroupSizeToJoin + '.</p></a>';
		}
		$('li:contains("New attack group created.")').after('<li class="notification">' + groupJoinHTML + '</li>');
	},

};

FSH.guildReport = { // Legacy

	injectReportPaint: function() { // jQuery
		FSH.ajax.getMembrList(false)
			.done(FSH.guildReport.doReportPaint);
	},

	reportHeader: function(innerTable) { // jQuery
		$('td[bgcolor="#DAA534"][colspan="2"] b', innerTable).each(function() {
			var self = $(this);
			self.html(
				FSH.Layout.onlineDot({
					last_login: FSH.Helper.membrList[self.text()].last_login
				}) +
				'<a href="index.php?cmd=profile&player_id=' +
				FSH.Helper.membrList[self.text()].id + '">' + self.html() +
				'</a> [ <span class="a-reply fshLink" target_player=' +
				self.text() + '>m</span> ]'
			);
		});
	},

	doReportPaint: function() { // jQuery
		var container = $('div#pCC > table > tbody > tr > td').last();
		var innerTable = $('table', container).detach();
		var rows = $('tr', innerTable);

		var searchUser = FSH.System.getUrlParameter('user');
		if (searchUser) {
			var userNode = $('b:contains("' + searchUser + '")', innerTable);
			if (userNode.length > 0) {
				userNode.closest('tr').prevAll().remove();
				$('a[href*="_id=' + FSH.Helper.membrList[searchUser].id + '&"]',
					innerTable).last().closest('tr').nextAll().remove();
			}
		}

		var searchSet = FSH.System.getUrlParameter('set');
		if (searchSet) {
			var setRE = new RegExp(searchSet);
			rows.filter(function() {
				var tds = $('td', this);
				return tds.length !== 2 && !setRE.test(tds.eq(1).text());
			}).remove();
		}

		FSH.guildReport.reportHeader(innerTable);
		FSH.guildReport.reportChild(innerTable);

		innerTable.on('click', 'span.a-reply', function(evt) {
			window.openQuickMsgDialog(
				evt.target.getAttribute('target_player'));
		});
		innerTable.on('click', '.recall', FSH.guildReport.recallItem);
		innerTable.on('click', '.wear', FSH.guildReport.recallItemNWear);
		innerTable.on('click', '.equip',
			FSH.common.equipProfileInventoryItem);

		container.append(innerTable);
	},

	reportChild: function(innerTable) { // jQuery
		var wearRE = new RegExp('<b>|Bottle|Brew|Draft|Elixir|Potion' +
			'|Jagua Egg');
		$('td:contains("Recall to:")', innerTable).each(function() {
			var self = $(this);
			var atd = $('a', self);
			var firstA = atd.first();
			var firstHref = firstA.attr('href');
			var firstOldTitle = firstA.attr('oldtitle');
			var firstText = firstA.text();
			var secondHref = atd.length === 2 ? atd.eq(1).attr('href') : null;
			var output = FSH.Layout.reportLinks;
			output = output.replace(/@@firstHref@@/g, firstHref);
			output = output.replace(/@@firstOldTitle@@/g, firstOldTitle);
			output = output.replace(/@@firstText@@/g, firstText);
			output = output.replace(/@@fasttext@@/g, firstText === 'Backpack' ?
				'BP' : 'GS');
			if (secondHref) {
				output = output.replace(/fshHide/g, 'fshInline');
				output = output.replace(/@@secondHref@@/g, secondHref);
			}

			var itemName = self.prev().html();
			if (!wearRE.test(itemName)) {
				output = output.replace(/fshWearHide/g, 'fshInline');
				output = output.replace(/@@linktype@@/g, secondHref ?
					'wear" href="' + firstHref :
					'equip" itemid="' + /&id=(\d+)/.exec(firstHref)[1]);
			}
			self.html(output);
		});
	},

	recallItem: function(evt) { // Legacy
		var href=evt.target.getAttribute('href');
		FSH.System.xmlhttp(href, FSH.guildReport.recallItemReturnMessage, {'target': evt.target, 'url': href});
	},

	recallItemReturnMessage: function(responseText, callback) { // Legacy
		var target = callback.target;
		var info = FSH.Layout.infoBox(responseText);
		var itemCellElement = target.parentNode;
		if (info.search('You successfully recalled the item') !== -1) {
			itemCellElement.innerHTML = '<span style="color:green; font-weight:bold;">' + info + '</span>';
		} else if (info!=='') {
			itemCellElement.innerHTML = '<span style="color:red; font-weight:bold;">' + info + '</span>';
		} else {
			itemCellElement.innerHTML = '<span style="color:red; font-weight:bold;">Weird Error: check the Tools>Error Console</span>';
			console.log('Post the previous HTML and the following message to the GitHub or to the forum to help us debug this error');
			console.log(callback.url);
		}
	},

	recallItemNWear: function(evt) { // Legacy
		var href=evt.target.getAttribute('href');
		FSH.System.xmlhttp(href, FSH.guildReport.recallItemNWearReturnMessage, {'target': evt.target, 'url': href});
	},

	recallItemNWearReturnMessage: function(responseText, callback) { // Legacy
		var target = callback.target;
		var info = FSH.Layout.infoBox(responseText);
		var itemCellElement = target.parentNode;
		if (info.search('You successfully') !== -1) {
			itemCellElement.innerHTML = '<span style="color:green; font-weight:bold;">Taken</span>';
			FSH.System.xmlhttp(FSH.System.server+'?cmd=trade', FSH.guildReport.wearRecall, itemCellElement);
		} else if (info!=='') {
			itemCellElement.innerHTML = '<span style="color:red; font-weight:bold;">Error</span>';
		}
	},

	wearRecall: function(responseText, callback) { // Legacy
		var doc=FSH.System.createDocument(responseText);
		var items=FSH.System.findNodes('//input[@name="sendItemList[]"]',doc);
		if (items) {
			var itemId=items[items.length-1].getAttribute('value');
			FSH.System.xmlhttp(FSH.System.server +
				'?cmd=profile&subcmd=equipitem&inventory_id=' + itemId +
				'&folder_id=0&backpack_page=0',
				function(responseText) {
					var info = FSH.Layout.infoBox(responseText);
					if (info==='') {
						callback.innerHTML += '<br><span style="color:green; ' +
							'font-weight:bold;">Worn</span>';
					} else {
						callback.innerHTML += '<br><span style="color:red; ' +
							'font-weight:bold;">' + info + '</span>';
					}
				}
			);
		}
	},

};

FSH.guildAdvisor = { // jQuery

	injectAdvisor: function() { // Native
		FSH.Helper.appendHead({
			js: [FSH.dataTablesLoc],
			callback: FSH.guildAdvisor.dataTablesLoaded
		});
	},

	dataTablesLoaded: function() { // jQuery
		FSH.ajax.getMembrList(false)
			.done(
				FSH.subcmd2 === 'weekly' ?
					FSH.guildAdvisor.injectAdvisorWeekly :
					FSH.guildAdvisor.injectAdvisorNew
			);
	},

	injectAdvisorNew: function(m) { // Hybrid
		var list = $('#pCC table[cellpadding="1"]');
		if (list.length !== 1) {return;}

		// insert weekly summary link
		var injectHere = FSH.System.findNode('//td/select/..');
		if (injectHere) {
			var elem = document.createElement('span');
			elem.innerHTML=' <a href="index.php?cmd=guild&subcmd=advisor&' +
				'subcmd2=weekly">7-Day Summary</a>';
			injectHere.appendChild(elem);
		}

		list.attr('id', 'advisorTable');
		list.addClass('stripe hover');
		list.append('<tfoot id="advTFoot"></tfoot>');
		$('tfoot', list).append($('tr', list).last());
		$('tr', list).first().remove();
		$('#advTFoot td').first().removeAttr('class').attr('colspan', 3)
			.attr('style', 'text-align: right;');
		$('#advisorTable td').removeAttr('bgcolor');
		$('#advisorTable font').contents().unwrap();
		$('#advTFoot b').contents().unwrap();
		$('#advisorTable tbody tr').each(function(i, e) {
			var td1 = $('td', e).first();
			td1.html(td1.html().replace('&nbsp;', ''));
			td1.html('<a href="index.php?cmd=profile&player_id=' +
				m[td1.text()].id + '">' +
				td1.text() + '</a>');
			td1.after('<td>' + m[td1.text()].level + '</td><td>' +
				m[td1.text()].rank_name.substr(0,9) +
				(m[td1.text()].rank_name.length > 9 ? '...' : '') + '</td>');
		});
		list.dataTable({pageLength: 25,
			lengthMenu: [[25, 50, -1], [25, 50, 'All']],
			columns: FSH.Layout.advisorColumns
		});
	},

	injectAdvisorWeekly: function(m) { // jQuery
		var list = $('#pCC table[cellpadding="1"]');
		if (list.length !== 1) {return;}
		list.html('<img src = "' + FSH.System.imageServer +
			'/world/actionLoadingSpinner.gif" style = "float: left;">' +
			'&nbsp;Retrieving daily data ...');
		FSH.guildAdvisor.getAdvisorPages(list, m);
	},

	getAdvisorPages: function(list, m) { // jQuery
		var count = 0;
		var pages = [1, 2, 3, 4, 5, 6, 7];
		var advisorPages = [];
		pages.forEach(function(e) {
			$.ajax({
				url: 'index.php',
				data: {
					cmd: 'guild',
					subcmd: 'advisor',
					period: e
				}
			}).done(function(data) {
					list.append(' day ' + e + ',');
					var ob = {};
					var tr = $('tr',
						$('#pCC table[cellpadding="1"]',
						FSH.System.createDocument(data)));
					tr.each(function(i, el) {
						var tds = $('td', el);
						var member = $(tds.eq(0).html().replace(/&nbsp;/g, ''))
							.text();
						if (member !== 'Member') {
							ob[member] = {
								deposit: FSH.System.intValue(tds.eq(1).text()),
								tax:     FSH.System.intValue(tds.eq(2).text()),
								total:   FSH.System.intValue(tds.eq(3).text()),
								fsp:     FSH.System.intValue(tds.eq(4).text()),
								skills:  FSH.System.intValue(tds.eq(5).text()),
								grpCrt:  FSH.System.intValue(tds.eq(6).text()),
								grpJoin: FSH.System.intValue(tds.eq(7).text()),
								relics:  FSH.System.intValue(tds.eq(8).text()),
								contrib: FSH.System.intValue(tds.eq(9).text())
							};
						}
					});
					advisorPages[e-1] = ob;
					count += 1; // .when
					if (count === 7) {
						FSH.guildAdvisor.addAdvisorPages(list, advisorPages, m);
					}
				});
		});
	},

	addAdvisorPages: function(list, pages, m) { // Native
		var o = {};
		var data = [];
		pages.forEach(function(e) {
			// What are non-enumerable properties anyway?
			Object.getOwnPropertyNames(e).forEach(function(f) {
				o[f] = o[f] || {};
				o[f].deposit = (o[f].deposit || 0) + e[f].deposit;
				o[f].tax = (o[f].tax || 0) + e[f].tax;
				o[f].total = (o[f].total || 0) + e[f].total;
				o[f].fsp = (o[f].fsp || 0) + e[f].fsp;
				o[f].skills = (o[f].skills || 0) + e[f].skills;
				o[f].grpCrt = (o[f].grpCrt || 0) + e[f].grpCrt;
				o[f].grpJoin = (o[f].grpJoin || 0) + e[f].grpJoin;
				o[f].relics = (o[f].relics || 0) + e[f].relics;
				o[f].contrib = (o[f].contrib || 0) + e[f].contrib;
			});
		});
		Object.getOwnPropertyNames(o).forEach(function(f) {
			if (f !== 'Total:') {
				data.push([
					!m[f] ? f : '<a href="index.php?cmd=profile&player_id=' + m[f].id + '">' + f + '</a>',
					!m[f] ? '' : m[f].level,
					!m[f] ? '' : m[f].rank_name.substr(0,9) + (m[f].rank_name.length > 9 ? '...' : ''),
					FSH.System.addCommas(o[f].deposit),
					FSH.System.addCommas(o[f].tax),
					FSH.System.addCommas(o[f].total),
					FSH.System.addCommas(o[f].fsp),
					FSH.System.addCommas(o[f].skills),
					FSH.System.addCommas(o[f].grpCrt),
					FSH.System.addCommas(o[f].grpJoin),
					FSH.System.addCommas(o[f].relics),
					FSH.System.addCommas(o[f].contrib),
				]);
			}
		});
		FSH.guildAdvisor.displayAdvisor(list, o, data);
	},

	displayAdvisor: function(list, o, data) { // jQuery
		$(list).addClass('stripe hover');
		$(list).html('<tfoot id="advTFoot"><tr><td style="text-align: ' +
			'right;" colspan="3">Total: </td><td><u>' +
			FSH.System.addCommas(o['Total:'].deposit) + '</u></td><td><u>' +
			FSH.System.addCommas(o['Total:'].tax) + '</u></td><td><u>' +
			FSH.System.addCommas(o['Total:'].total) + '</u></td><td><u>' +
			FSH.System.addCommas(o['Total:'].fsp) + '</u></td><td><u>' +
			FSH.System.addCommas(o['Total:'].skills) + '</u></td><td><u>' +
			FSH.System.addCommas(o['Total:'].grpCrt) + '</u></td><td><u>' +
			FSH.System.addCommas(o['Total:'].grpJoin) + '</u></td><td><u>' +
			FSH.System.addCommas(o['Total:'].relics) + '</u></td><td><u>' +
			FSH.System.addCommas(o['Total:'].contrib) + '</u></td></tr></tfoot>');
		$(list).dataTable({
			data: data,
			pageLength: 25,
			lengthMenu: [[25, 50, -1], [25, 50, 'All']],
			columns: FSH.Layout.advisorColumns
		});
	}

};

FSH.bazaar = { // jQuery

	inject: function() { // jQuery
		var pbImg = $('div#pCC img[alt="Potion Bazaar"]');
		pbImg.css('float', 'left');
		var myTable = FSH.Layout.bazaarTable;
		$('div#pCC table table table img[src*="/items/"]').each(function(i) {
			var item = $(this);
			var tipped = item.data('tipped');
			myTable = myTable
				.replace('@' + i + '@', FSH.Layout.bazaarItem)
				.replace('@src@', item.attr('src'))
				.replace('@itemid@', tipped.match(/\?item_id=(\d+)/)[1])
				.replace('@tipped@', tipped);
		});
		myTable = $(myTable.replace(/@\d@/g, ''));
		$('span#warning', myTable).hide();
		myTable.on('click', 'img[width="20"]', FSH.bazaar.select);
		myTable.on('input', 'input#buy_amount', FSH.bazaar.quantity);
		myTable.on('click', 'span#fshBuy', FSH.bazaar.buy);
		pbImg.parent().append(myTable);
	},

	select: function(evt) { // jQuery
		var target = $(evt.target);
		FSH.bazaar.ItemId = target.attr('itemid');
		$('table#fshBazaar span#quantity').text(
			$('table#fshBazaar input#buy_amount').val());
		$('table#fshBazaar span#warning').show();
		$('table#fshBazaar td#selectedItem').empty().append(
			target.clone().attr('width', '45').attr('height', '45'));
	},

	quantity: function(evt) { // jQuery
		var theValue = parseInt(evt.target.value, 10);
		if (!isNaN(theValue) && theValue > 0 && theValue < 100) {
			$('table#fshBazaar span#quantity:visible').text(theValue);
		}
	},

	buy: function() { // jQuery
		if (!FSH.bazaar.ItemId) {return;}
		var buyAmount = $('table#fshBazaar input#buy_amount').val();
		$('table#fshBazaar td#buy_result')
			.html('Buying ' + buyAmount + ' items');
		for (var i = 0; i < buyAmount; i += 1) {
			$.get('index.php?cmd=potionbazaar&subcmd=buyitem&item_id=' +
				FSH.bazaar.ItemId, FSH.bazaar.done);
		}
	},

	done: function(responseText) { // jQuery
		$('table#fshBazaar td#buy_result')
			.append('<br>' + FSH.Layout.infoBox(responseText));
	}

};

FSH.groups = { // Legacy

	injectGroupStats: function() { // jQuery
		var attackValueElement = $('div#pCC td#stat-attack');
		attackValueElement.html(
			'<span class="fshBlue">' + attackValueElement.text() + '</span>' +
			' ( <span id="fshAtk">' + attackValueElement.text() + '</span> )'
		);
		var defenseValueElement = $('div#pCC td#stat-defense');
		defenseValueElement.html(
			'<span class="fshBlue">' + defenseValueElement.text() + '</span>' +
			' ( <span id="fshDef">' + defenseValueElement.text() + '</span> )'
		);
		var armorValueElement = $('div#pCC td#stat-armor');
		armorValueElement.html(
			'<span class="fshBlue">' + armorValueElement.text() + '</span>' +
			' ( <span id="fshArm">' + armorValueElement.text() + '</span> )'
		);
		var damageValueElement = $('div#pCC td#stat-damage');
		damageValueElement.html(
			'<span class="fshBlue">' + damageValueElement.text() + '</span>' +
			' ( <span id="fshDam">' + damageValueElement.text() + '</span> )'
		);
		var hpValueElement = $('div#pCC td#stat-hp');
		hpValueElement.html(
			'<span class="fshBlue">' + hpValueElement.text() + '</span>' +
			' ( <span id="fshHP">' + hpValueElement.text() + '</span> )'
		);
		FSH.System.xmlhttp('index.php?cmd=guild&subcmd=mercs', FSH.groups.parseMercStats);
	},

	parseMercStats: function(responseText) { // jQuery
		var attackRE = /<td>Attack:<\/td><td>(\d+)<\/td>/;
		var defenseRE = /<td>Defense:<\/td><td>(\d+)<\/td>/;
		var armorRE = /<td>Armor:<\/td><td>(\d+)<\/td>/;
		var damageRE = /<td>Damage:<\/td><td>(\d+)<\/td>/;
		var hpRE = /<td>HP:<\/td><td>(\d+)<\/td>/;
		var mercPage = FSH.System.createDocument(responseText);
		var mercElements = $('div#pCC img[src*="/merc/"][data-tipped]',
			mercPage);
		var totalMercAttack = 0;
		var totalMercDefense = 0;
		var totalMercArmor = 0;
		var totalMercDamage = 0;
		var totalMercHP = 0;
		var merc;
		for (var i = 0; i < mercElements.length; i += 1) {
			merc = mercElements[i];
			var mouseoverText = $(merc).data('tipped');
			var mercAttackValue = attackRE.exec(mouseoverText)[1] * 1;
			totalMercAttack += mercAttackValue;
			var mercDefenseValue = defenseRE.exec(mouseoverText)[1] * 1;
			totalMercDefense += mercDefenseValue;
			var mercArmorValue = armorRE.exec(mouseoverText)[1] * 1;
			totalMercArmor += mercArmorValue;
			var mercDamageValue = damageRE.exec(mouseoverText)[1] * 1;
			totalMercDamage += mercDamageValue;
			var mercHPValue = hpRE.exec(mouseoverText)[1] * 1;
			totalMercHP += mercHPValue;
		}
		var attackValue = $('div#pCC span#fshAtk');
		attackValue.html(FSH.System.addCommas(FSH.System.intValue(
			attackValue.text()) - Math.round(totalMercAttack * 0.2)));
		var defenseValue = $('div#pCC span#fshDef');
		defenseValue.html(FSH.System.addCommas(FSH.System.intValue(
			defenseValue.text()) - Math.round(totalMercDefense * 0.2)));
		var armorValue = $('div#pCC span#fshArm');
		armorValue.html(FSH.System.addCommas(FSH.System.intValue(
			armorValue.text()) - Math.round(totalMercArmor * 0.2)));
		var damageValue = $('div#pCC span#fshDam');
		damageValue.html(FSH.System.addCommas(FSH.System.intValue(
			damageValue.text()) - Math.round(totalMercDamage * 0.2)));
		var hpValue = $('div#pCC span#fshHP');
		hpValue.html(FSH.System.addCommas(FSH.System.intValue(
			hpValue.text()) - Math.round(totalMercHP * 0.2)));
	},

	injectGroups: function() { // jQuery
		FSH.ajax.getMembrList(false)
			.done(FSH.groups.doGroupPaint);
		FSH.groups.displayMinGroupLevel();
		FSH.groups.groupButtons();
	},

	doGroupPaint: function(m) { // jQuery
		$('#pCC table table table tr').has('.group-action-container')
			.each(function(i, e) {
				FSH.groups.doGroupRow(e, m);
			});
	},

	doGroupRow: function(e, m) { // jQuery
		var creator = $('b', e).text();
		var td = $('td', e).first();
		var inject = '';
		if (m[creator]) {
			inject += FSH.Layout.onlineDot({last_login: m[creator].last_login}) +
				'&nbsp;<a href="' + FSH.System.server +
				'index.php?cmd=profile&player_id=' + m[creator].id + '">' + td.html() +
				'</a>' + ' [' + m[creator].level + ']';
		}
		var td2 = $('td', e).eq(1);
		var theList = td2.html();
		var listArr = theList.split(', ');
		if (listArr.length > 1) {
			listArr.sort(function(a, b) {
				return (m[b] ? m[b].level : 0) - (m[a] ? m[a].level : 0);
			});
		}
		var countMembers = 0;
		var buffList = [];
		listArr.forEach(function(v, i, a) {
			if (v.indexOf('<font') !== -1) {return;}
			countMembers += 1;
			buffList[Math.floor(i / 16)] = buffList[Math.floor(i / 16)] || [];
			buffList[Math.floor(i / 16)].push(v);
			if (!m[v]) {return;}
			a[i] = ' <a href="index.php?cmd=profile&player_id=' +
				m[v].id + '">' + v + '</a>';
		});
		buffList.forEach(function(v, i) {
			inject += '<br><a href=\'' + FSH.Layout.buffAllHref(v) +
				'\'><span style="color:blue; font-size:x-small;" title="Quick ' +
				'buff functionality from HCS only does 16">Buff ' +
				FSH.Layout.places[i] + ' 16</span></a>';
		});
		td.html(inject + '<br><span style="font-size:x-small;">Members: ' +
			countMembers + '</span>');
		td2.html('<span>' + listArr.join(', ') + '</span>');
		FSH.groups.groupLocalTime($('td', e).eq(2));
	},

	groupLocalTime: function(theDateCell) { // jQuery
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
			'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		var xRE = /([a-zA-Z]+), (\d+) ([a-zA-Z]+) (\d+):(\d+):(\d+) UTC/;
		var x = xRE.exec(theDateCell.text());
		var month = months.indexOf(x[3]);
		var curYear = new Date().getFullYear(); // Boundary condition
		var groupDate = new Date();
		groupDate.setUTCDate(x[2]);
		groupDate.setUTCMonth(month);
		groupDate.setUTCFullYear(curYear);
		groupDate.setUTCHours(x[4]);
		groupDate.setUTCMinutes(x[5]);
		theDateCell.append('<br><span style="color:blue; font-size:x-small">' +
			'Local: ' + groupDate.toString().substr(0,21)+'</span>');
	},

	displayMinGroupLevel: function() { // jQuery
		var minGroupLevel = FSH.System.getValue('minGroupLevel');
		if (minGroupLevel) {
			$('#pCC > table > tbody > tr > td > table td').first()
				.append('<span style="color:blue"> ' +
				'Current Min Level Setting: ' + minGroupLevel + '</span>');
		}
	},

	groupButtons: function() { // Legacy
		var buttonElement = FSH.System.findNode('//td[input[@value="Join All ' +
			'Available Groups"]]');
		var enableMaxGroupSizeToJoin =
			FSH.System.getValue('enableMaxGroupSizeToJoin');
		if (enableMaxGroupSizeToJoin) {
			var maxGroupSizeToJoin = FSH.System.getValue('maxGroupSizeToJoin');
			var joinAllInput = buttonElement.firstChild.nextSibling.nextSibling;
			joinAllInput.style.display = 'none';
			joinAllInput.style.visibility = 'hidden';
			buttonElement.innerHTML += '&nbsp;<input id="joinallgroupsunder' +
				'size" type="button" value="Join All Groups < ' +
				maxGroupSizeToJoin + ' Members" class="custombutton">&nbsp;' +
				'<input id="fetchgroupstats" type="button" value="Fetch ' +
				'Group Stats" class="custombutton">';
			document.getElementById('joinallgroupsundersize')
				.addEventListener('click', FSH.groups.joinAllGroupsUnderSize, true);
		} else {
			buttonElement.innerHTML += '&nbsp;<input id="fetchgroupstats" ' +
				'type="button" value="Fetch Group Stats" class="custombutton">';
		}
		document.getElementById('fetchgroupstats')
			.addEventListener('click', FSH.groups.fetchGroupData, true);

		if (FSH.subcmd2 === 'joinallgroupsundersize') {
			FSH.groups.joinAllGroupsUnderSize();
		}
	},

	filterMercs: function(e) {return e.search('#000099') === -1;},

	joinGroup: function(groupJoinURL, joinButton) { // jQuery
		$.ajax({
			url: FSH.System.server + groupJoinURL,
			success: function() {
				joinButton.style.display = 'none';
				joinButton.style.visibility = 'hidden';
			}
		});
	},

	joinAllGroupsUnderSize: function() { // Legacy
		var joinButtons = FSH.System.findNodes('//img[contains(@src,"skin/icon_action_join.gif")]');
		if (!joinButtons) {return;}
		for (var i=0; i<joinButtons.length; i += 1) {
			var joinButton = joinButtons[i];
			var memList = joinButton.parentNode.parentNode.parentNode.previousSibling.previousSibling.previousSibling.previousSibling;
			var memListArrayWithMercs = memList.innerHTML.split(',');
			var memListArrayWithoutMercs = memListArrayWithMercs.filter(FSH.groups.filterMercs);
			if (memListArrayWithoutMercs.length < FSH.System.getValue('maxGroupSizeToJoin')){
				var groupID = /javascript:confirmJoin\((\d+)\)/.exec(joinButton.parentNode.getAttribute('href'))[1];
				var groupJoinURL = 'index.php?cmd=guild&subcmd=groups&subcmd2=join&group_id=' + groupID;
				FSH.groups.joinGroup(groupJoinURL, joinButton);
			}
		}
		//refresh after a slight delay
		setTimeout('location.href = "' + FSH.System.server +
			'index.php?cmd=guild&subcmd=groups";',1250);
	},

	fetchGroupData: function() { // Legacy
		var calcButton = FSH.System.findNode('//input[@id="fetchgroupstats"]');
		calcButton.style.display = 'none';
		var allItems = FSH.System.findNodes('//a[contains(@href,"index.php?cmd=guild&subcmd=groups&subcmd2=viewstats&group_id=")]/img');
		for (var i=0; i<allItems.length; i += 1) {
			FSH.System.xmlhttp(allItems[i].parentNode.getAttribute('href'), FSH.groups.parseGroupData, allItems[i].parentNode);
		}
	},

	parseGroupData: function(responseText, linkElement) { // Legacy
		var attackValue;
		var defenseValue;
		var armorValue;
		var damageValue;
		var hpValue;
		var doc=FSH.System.createDocument(responseText);
		var allItems = doc.getElementsByTagName('TD');
		//<td><font color='#333333'>Attack:&nbsp;</font></td>

		for (var i=0;i<allItems.length;i += 1) {
			var anItem=allItems[i];
			if (anItem.innerHTML === '<font color="#333333">Attack:&nbsp;</font>'){
				var attackLocation = anItem.nextSibling;
				attackValue = attackLocation.textContent;
			}
			if (anItem.innerHTML === '<font color="#333333">Defense:&nbsp;</font>'){
				var defenseLocation = anItem.nextSibling;
				defenseValue = defenseLocation.textContent;
			}
			if (anItem.innerHTML === '<font color="#333333">Armor:&nbsp;</font>'){
				var armorLocation = anItem.nextSibling;
				armorValue = armorLocation.textContent;
			}
			if (anItem.innerHTML === '<font color="#333333">Damage:&nbsp;</font>'){
				var damageLocation = anItem.nextSibling;
				damageValue = damageLocation.textContent;
			}
			if (anItem.innerHTML === '<font color="#333333">HP:&nbsp;</font>'){
				var hpLocation = anItem.nextSibling;
				hpValue = hpLocation.textContent;
			}
		}
		var extraText = '<table cellpadding="1" style="font-size:x-small; border-top:2px black solid; border-spacing: 1px; border-collapse: collapse;">';
		extraText += '<tr>';
		extraText += '<td style="color:brown;">Attack</td><td align="right">' + attackValue + '</td>';
		extraText += '<td style="color:brown;">Defense</td><td align="right">' + defenseValue + '</td></tr>';
		extraText += '<tr>';
		extraText += '<td style="color:brown;">Armor</td><td align="right">' + armorValue + '</td>';
		extraText += '<td style="color:brown;">Damage</td><td align="right">' + damageValue + '</td></tr>';
		extraText += '<tr>';
		extraText += '<td style="color:brown;">HP</td><td align="right">' + hpValue + '</td>';
		extraText += '<td colspan="2"></td></tr>';
		extraText += '</table>';
		var expiresLocation = linkElement.parentNode.parentNode.previousSibling.previousSibling;
		expiresLocation.innerHTML += extraText;
	}

};

FSH.rank = { // Legacy

	injectGuildRanks: function() { // jQuery
		FSH.ajax.getMembrList(true)
			.done(FSH.rank.doRankPaint);
		// gather rank info button
		var weightButton = $('<input>', {
			id: 'getrankweightings',
			type: 'button',
			value: 'Get Rank Weightings',
			'class': 'custombutton'
		});
		weightButton.click(FSH.rank.fetchRankData);
		$('div#pCC td').has('a#show-guild-founder-rank-name')
			.append('&nbsp;')
			.append(weightButton);
	},

	doRankPaint: function() { // jQuery
		var theTable = $('div#pCC table table').has('td.line[width="80%"]')[0];
		var myRank = FSH.Helper.membrList[$('dt#statbar-character')
			.text()].rank_name;
		var ranks = {};
		Object.keys(FSH.Helper.membrList).forEach(function(val) {
			if (val === 'lastUpdate') {return;}
			var rankName = FSH.Helper.membrList[val].rank_name;
			ranks[rankName] = ranks[rankName] || [];
			ranks[rankName].push(val);
		});
		$('tr', theTable).each(function(ind) {
			var rankCell = $('td.line[width="80%"]', $(this));
			if (rankCell.length === 0) {return;} // header
			var rankName = rankCell.text();
			if (ranks[rankName]) { // has members
				if (rankName === myRank) {
					FSH.rank.characterRow = ind; // limit for ajaxify later
				}
				rankCell.append(' <span style="color:blue;">- ' +
					ranks[rankName].join(', ') + '</span>');
			}
		});
		if (FSH.System.getValue('ajaxifyRankControls')) {
			FSH.rank.ajaxifyRankControls();
		}
	},

	ajaxifyRankControls: function() { // Legacy
		var i;
		var upButton;
		var onclickText;
		var onclickHREF;
		var downButton;
		//up buttons
		var upButtons = FSH.System.findNodes('//input[@value="Up"]');
		for (i=0;i<upButtons.length;i += 1) {
			upButton = upButtons[i];
			onclickText = upButton.getAttribute('onclick');
			onclickHREF = /window.location=\'(.*)\';/.exec(onclickText)[1];
			upButton.setAttribute('onclickhref', onclickHREF);
			upButton.setAttribute('onclick', '');
			upButton.addEventListener('click', FSH.rank.moveRankUpOneSlotOnScreen, true);
		}
		//down buttons
		var downButtons = FSH.System.findNodes('//input[@value="Down"]');
		for (i=0;i<downButtons.length;i += 1) {
			downButton = downButtons[i];
			onclickText = downButton.getAttribute('onclick');
			onclickHREF = /window.location=\'(.*)\';/.exec(onclickText)[1];
			downButton.setAttribute('onclickhref', onclickHREF);
			downButton.setAttribute('onclick', '');
			downButton.addEventListener('click', FSH.rank.moveRankDownOneSlotOnScreen, true);
		}
	},

	moveRankUpOneSlotOnScreen: function(evt) { // Legacy
		var onclickHREF = evt.target.getAttribute('onclickhref');
		var thisRankRow = evt.target.parentNode.parentNode.parentNode;
		var parentTable = thisRankRow.parentNode;
		var thisRankRowNum = thisRankRow.rowIndex;
		var previousRankRowNum = parseInt(thisRankRowNum, 10);
		if (previousRankRowNum <= 1 || FSH.rank.characterRow > thisRankRowNum) {return;}
		var injectRow = parentTable.rows[previousRankRowNum - 1];
		parentTable.insertBefore(thisRankRow, injectRow);
		FSH.System.xmlhttp(onclickHREF);
		window.scrollBy(0,-24);
	},

	moveRankDownOneSlotOnScreen: function(evt) { // Legacy
		var onclickHREF = evt.target.getAttribute('onclickhref');
		var thisRankRow = evt.target.parentNode.parentNode.parentNode;
		var parentTable = thisRankRow.parentNode;
		var thisRankRowNum = thisRankRow.rowIndex;
		var previousRankRowNum = parseInt(thisRankRowNum + 3, 10);
		if (previousRankRowNum - 1 > parentTable.rows.length || FSH.rank.characterRow > thisRankRowNum) {return;}
		var injectRow = parentTable.rows[previousRankRowNum - 1];
		parentTable.insertBefore(thisRankRow, injectRow);
		FSH.System.xmlhttp(onclickHREF);
		window.scrollBy(0,24);
	},

	fetchRankData: function() { // Legacy
		var calcButton = FSH.System.findNode('//input[@id="getrankweightings"]');
		calcButton.style.display = 'none';
		var allItems = FSH.System.findNodes('//input[@value="Edit"]');
		for (var i=0; i<allItems.length; i += 1) {
			var anItem = allItems[i];
			var targetNode = anItem.parentNode.parentNode.previousSibling;
			var href = /window\.location='(.*)';/.exec(anItem.getAttribute('onclick'))[1];
			FSH.System.xmlhttp(href, FSH.rank.parseRankData, targetNode);
		}
	},

	parseRankData: function(responseText, linkElement) { // Legacy
		// Makes a weighted calculation of available permissions
		// and gets tax rate
		var doc=FSH.System.createDocument(responseText);
		var checkBoxes = FSH.System.findNodes('//input[@type="checkbox"][contains(@name,"permission")]',doc);
		var count = 0;
		for (var i=0;i<checkBoxes.length;i += 1) {
			var checkbox=checkBoxes[i];
			if (checkbox.checked) {
				//terrasoft.gr/FallenSwordHelper: Can Un-Tag Items
				var privName = checkbox.nextSibling.textContent.trim();
				if (privName === 'Bank Withdraw' ||
					privName === 'Build/Upgrade/Demolish Structures' ||
					privName === 'Can Un-Tag Items') {
					count += 5;
				} else if (privName === 'Build/Upgrade Structures' ||
					privName === 'Can Kick Members') {
					count += 4;
				} else if (privName === 'Can Mass Messages') {
					count += 0.5;
				} else if (privName === 'Take Items' ||
					privName === 'Can Recall Tagged Items') {
					count += 0.2;
				} else if (privName === 'Store Items' ||
					privName === 'Can View Advisor') {
					count += 0.1;
				} else {
					count+= 1;
				}
			}
		}
		var taxRate = FSH.System.findNode('//input[@name="rank_tax"]',doc);

		linkElement.innerHTML = '<span style="color:blue;">(' +
			Math.round(10*count)/10 + ') Tax:(' + taxRate.value +
			'%)</span> ' + linkElement.innerHTML;
	}

};

FSH.inventory = { // jQuery

	injectInventoryManagerNew: function() { // jQuery
		$('#pCC').html('<span id="fshInvMan"><img src = "' +
			FSH.System.imageServer + '/world/actionLoadingSpinner.gif">&nbsp;' +
			'Getting inventory data...</span>');
		FSH.Helper.appendHead({
			js: [FSH.dataTablesLoc],
			callback: FSH.inventory.syncInvMan
		});
	},

	syncInvMan: function() { // jQuery
		var prm = [];
		prm.push(FSH.ajax.inventory(false));
		if (FSH.subcmd === 'guildinvmgr') {
			prm.push(FSH.ajax.getMembrList(false));
		}
		prm.push(FSH.ajax.getForage('fsh_inventoryMinLvl')
			.pipe(function(data) {
				FSH.inventory.fshMinLvl = data ||
					FSH.Data.defaults.inventoryMinLvl;
			})
		);
		prm.push(FSH.ajax.getForage('fsh_inventoryMaxLvl')
			.pipe(function(data) {
				FSH.inventory.fshMaxLvl = data ||
					FSH.Data.defaults.inventoryMaxLvl;
			})
		);
		prm.push(FSH.ajax.getForage('fsh_inventoryCheckedElements')
			.pipe(function(data) {
				FSH.inventory.checkedElements = data ||
					FSH.Data.defaults.inventoryCheckedElements;
			})
		);
		$.when.apply($, prm).done(FSH.inventory.getInvMan);
	},

	getInvMan: function() { // Native

		if (FSH.Helper.membrList) {
			FSH.inventory.rekeyMembrList();
		}
		FSH.inventory.decorate();
		FSH.inventory.lvlFilter();
		FSH.inventory.typeFilter();
		FSH.inventory.setFilter();
		FSH.inventory.headers();
		FSH.inventory.setChecks();
		FSH.inventory.setLvls();
		FSH.inventory.doTable();
		FSH.inventory.eventHandlers();

	},

	rekeyMembrList: function() { // Native
		FSH.Helper.membrList = Object.keys(FSH.Helper.membrList)
			// Using reduce() to rekey the membrList from names to id's
			.reduce(function(prev, curr) {
				if (curr !== 'lastUpdate') {
					prev[FSH.Helper.membrList[curr].id] =
						FSH.Helper.membrList[curr];
				}
				return prev;
			}, {});
	},

	decorate: function() { // Native
		if (FSH.Helper.inventory.folders &&
			!FSH.Helper.inventory.folders['-1']) {
			FSH.Helper.inventory.folders['-1'] = 'Main';
		}
		var cur = FSH.Helper.inventory.player_id ?
			FSH.Helper.inventory.player_id :
			FSH.Helper.inventory.current_player_id;
		FSH.Helper.inventory.items.forEach(function(data) {
			var t = data.player_id === -1 ? 4 : 1;
			var p = FSH.Helper.inventory.player_id ?
				FSH.Helper.inventory.player_id :
				data.player_id !== -1 ? data.player_id :
				FSH.Helper.inventory.guild_id;
			var bold = data.equipped ? '<b>' + data.item_name + '</b>' :
				data.item_name;
			var imgsrc = ' src="' + FSH.System.imageServer +
				(data.type === '15' ?
				'/composing/potions/1_1.gif"' :
				'/items/' + data.item_id + '.gif"');
			var setName = ' set="' + (data.stats ? data.stats.set_name : '') +
				'"';
			data.fsh_name = '<span class="fshInvItem helperQC tip-dynamic" ' +
				'data-tipped="fetchitem.php?item_id=' + data.item_id +
				'&inv_id=' + data.inv_id + '&t=' + t + '&p=' + p +
				'&currentPlayerId=' + cur + '"' + imgsrc + setName + '>' +
				bold + '</span>';
		});
	},

	headers: function() { // jQuery
		var reportTitle;
		if (FSH.Helper.inventory.player_id) {
			reportTitle = '<b>&nbsp;Inventory Manager</b> ' +
				FSH.Helper.inventory.items.length +
				' items (green = worn, blue = backpack)';
		} else {
			reportTitle = '<b>&nbsp;Guild Inventory Manager</b> ' +
				FSH.Helper.inventory.items.length +
				' items (maroon = in BP, blue=guild store)';
		}
		var myHtml = FSH.Layout.invManFilter
			.replace('@@reportTitle@@', reportTitle);
		$('#pCC').html(myHtml);
	},

	doTable: function() { // jQuery
		$('#pCC').append('<table id="fshInv" class="stripe hover"></table>');
		$('#fshInv').dataTable({
			data: FSH.Helper.inventory.items,
			pageLength: 50,
			lengthMenu: [[50, 100, 150, 200, -1], [50, 100, 150, 200, 'All']],
			columnDefs: [{targets: '_all', defaultContent: ''}],
			columns: [
				//~ {title: 'Name', data: 'item_name', width: '32%',
					//~ render: FSH.inventory.nameRender
				//~ },
				{title: 'Name', data: 'fsh_name', width: '32%'
				},
				{title: 'Level', data: 'stats.min_level'},
				{title: 'Where', data: FSH.inventory.whereData,
					render: FSH.inventory.whereRender
				},
				{title: 'Type', data: 'type',
					render: function(type) {return FSH.Data.itemType[type];}
				},
				{title: 'Att', data: 'stats.attack'},
				{title: 'Def', data: 'stats.defense'},
				{title: 'Arm', data: 'stats.armor'},
				{title: 'Dam', data: 'stats.damage'},
				{title: 'HP', data: 'stats.hp'},
				{title: 'Forge', data: 'forge'},
				{title: 'Craft', data: 'craft',
					render: function(craft) {
						return FSH.Data.craft[craft] ?
							FSH.Data.craft[craft].abbr : '';
					}
				},
				{title: 'Dur%', data: 'durability'}
			],
			createdRow: FSH.inventory.createdRow
		});
	},

	createdRow: function(row, data) { // jQuery
		var colour;
		if (data.folder_id) {
			colour = data.equipped ? 'fshGreen' : 'fshBlue';
		}
		if (data.player_id) {
			colour = data.player_id === -1 ? 'fshNavy' : 'fshMaroon';
		}
		$(row).addClass(colour);
		$('td', row).first().addClass(FSH.Data.rarity[data.rarity].class);
	},

	whereData: function(row) { // Native
		return row.folder_id || row.player_id;
	},

	whereRender: function(_data, _type, row) { // Native
		var where = '';
		if (row.folder_id) {
			where = row.equipped ? 'Worn' :
				FSH.Helper.inventory.folders[row.folder_id];
		} else {
			where = row.player_id === -1 ? 'GS' :
				'<a class="fshMaroon" href="index.php?cmd=profile&player_id=' +
				FSH.Helper.membrList[row.player_id].id + '">' +
				FSH.Helper.membrList[row.player_id].username + '</a>';
		}
		return where;
	},

	typeFilter: function() { // jQuery
		$.fn.dataTable.ext.search.push(
			function(_settings, _row, _index, data) {
				return !FSH.inventory.checkedElements ||
					FSH.inventory.checkedElements[data.type] ?
					true : false;
			}
		);
	},

	setFilter: function() { // jQuery
		$.fn.dataTable.ext.search.push(
			function(_settings, _row, _index, data) {
				return !FSH.inventory.checkedElements ||
					!FSH.inventory.checkedElements['-1'] ||
					FSH.inventory.checkedElements['-1'] &&
					data.stats &&
					data.stats.set_id !== '-1' ?
					true : false;
			}
		);
	},

	lvlFilter: function() { // jQuery
		/* Custom filtering function which will search data in column 2 between two values */
		$.fn.dataTable.ext.search.push(
			function(_settings, data) {
				var min = FSH.inventory.fshMinLvl;
				var max = FSH.inventory.fshMaxLvl;
				var level = FSH.System.intValue(data[1]); // use data for the level column
				if (level === 0 ||
					isNaN(min)   && isNaN(max)   ||
					isNaN(min)   && level <= max ||
					min <= level && isNaN(max)   ||
					min <= level && level <= max )
				{return true;}
				return false;
			}
		);
	},

	eventHandlers: function() { // jQuery
		//~ var table = $('#fshInv').DataTable();
		//~ $('span#fshRefresh', FSH.Helper.context).click(function() {
			//~ $('span#fshRefresh', FSH.Helper.context).hide();
			//~ FSH.Helper.onlinePages = 0;
			//~ FSH.Helper.onlinePlayers = {};
			//~ $.get('index.php?cmd=onlineplayers&page=1',
			//~ FSH.Helper.getOnlinePlayers);
			//~ FSH.System.setValue('lastOnlineCheck', Date.now());
			//~ $('div#fshOutput', FSH.Helper.context)
				//~ .append('Parsing online players...'); // context
		//~ });
		$('#fshMinLvl, #fshMaxLvl').keyup(FSH.inventory.changeLvls);
		$('#fshReset').click(FSH.inventory.resetLvls);
		$('table.fshInvFilter').on('click', 'input[type="checkbox"]',
			FSH.inventory.getChecks);
		$('#fshAll').click(FSH.inventory.allChecks);
		$('#fshNone').click(FSH.inventory.clearChecks);
		$('#fshDefault').click(FSH.inventory.resetChecks);
		$('table#fshInv').on('click', 'span.fshInvItem', FSH.inventory.inspect);
	},

	inspect: function() { // jQuery
		var self = $(this);
		var img = $('<img>', {width: '30', height: '30'})
			.attr('src', self.attr('src'))
			.addClass('tip-dynamic')
			.data('tipped', self.data('tipped'));
		var setName = self.attr('set') === '' ? '' : '<br>Set Name: ' +
			self.attr('set');
		var $dialog = $('<div/>')
			.append(img)
			.append(setName)
			.dialog({
				dialogClass: 'no-close',
				title: self.text(),
				resizable: false,
				height: 350,
				width: 300,
				modal: true,
				buttons: {
					'Close' : function() {
						$dialog.dialog( 'destroy' );
					}
				}
			});
	},

	getChecks: function() { // jQuery
		FSH.inventory.checkedElements = {};
		$('table.fshInvFilter input[type="checkbox"][item]:checked').each(function() {
			FSH.inventory.checkedElements[$(this).attr('item')] = 1;
		});
		FSH.ajax.setForage('fsh_inventoryCheckedElements',
			FSH.inventory.checkedElements);
		$('#fshInv').DataTable().draw(false);
	},

	setChecks: function() { // jQuery
		$('table.fshInvFilter input[type="checkbox"]').each(function() {
			var box = $(this);
			box.prop('checked',
				FSH.inventory.checkedElements[box.attr('item')] === 1);
		});
		FSH.ajax.setForage('fsh_inventoryCheckedElements',
			FSH.inventory.checkedElements);
	},

	resetChecks: function() { // jQuery
		FSH.inventory.checkedElements =
			FSH.Data.defaults.inventoryCheckedElements;
		FSH.inventory.setChecks();
		$('#fshInv').DataTable().draw(false);
	},

	allChecks: function() { // jQuery
		FSH.inventory.checkedElements =
			FSH.Data.inventoryCheckAll;
		FSH.inventory.setChecks();
		$('#fshInv').DataTable().draw(false);
	},

	clearChecks: function() { // jQuery
		FSH.inventory.checkedElements = {};
		FSH.inventory.setChecks();
		$('#fshInv').DataTable().draw();
	},

	setLvls: function() { // jQuery
		$('#fshMinLvl').val(FSH.inventory.fshMinLvl);
		$('#fshMaxLvl').val(FSH.inventory.fshMaxLvl);
	},

	resetLvls: function() { // jQuery
		FSH.inventory.fshMinLvl = FSH.Data.defaults.inventoryMinLvl;
		FSH.inventory.fshMaxLvl = FSH.Data.defaults.inventoryMaxLvl;
		FSH.ajax.setForage('fsh_inventoryMinLvl', FSH.inventory.fshMinLvl);
		FSH.ajax.setForage('fsh_inventoryMaxLvl', FSH.inventory.fshMaxLvl);
		$('#fshMinLvl').val(FSH.inventory.fshMinLvl);
		$('#fshMaxLvl').val(FSH.inventory.fshMaxLvl);
		$('#fshInv').DataTable().draw(false);
	},

	changeLvls: function() { // jQuery
		FSH.inventory.fshMinLvl = parseInt($('#fshMinLvl').val(), 10);
		FSH.inventory.fshMaxLvl = parseInt($('#fshMaxLvl').val(), 10);
		if (!isNaN(FSH.inventory.fshMinLvl)) {
			FSH.ajax.setForage('fsh_inventoryMinLvl', FSH.inventory.fshMinLvl);
		}
		if (!isNaN(FSH.inventory.fshMaxLvl)) {
			FSH.ajax.setForage('fsh_inventoryMaxLvl', FSH.inventory.fshMaxLvl);
		}
		$('#fshInv').DataTable().draw(false);
	},

};

FSH.quickBuff = { // jQuery

	inject: function() { // jQuery
		var playerInput = $('input#targetPlayers');
		if (playerInput.length === 0) {return;}
		$('h1:contains("Quick Buff")').after(FSH.Layout.quickBuffHeader);
		$.getJSON('index.php', { // TODO This should be moved to ajax
			cmd:             'export',
			subcmd:          'profile',
			player_username: window.self
		}).done(FSH.quickBuff.getSustain);
	},

	addBuffLevels: function() { // jQuery
		$('span.fshPlayer').remove();
		var player = $(this);
		FSH.quickBuff.addStatsQuickBuff(player);
		var buffs = String.prototype.split.call(player.data('buffs'), ',');
		player.next().find('span').each(function(i, e) {
			var buffLvl = parseInt($(e).text().replace(/\[|\]/g, ''), 10);
			var label = $('label[for="skill-' + buffs[i] + '"]');
			if (label.length === 0) {return;}
			var span = $('span > span', label);
			var myLvl = parseInt(span.text().replace(/\[|\]/g, ''), 10);
			span.after('<span class="fshPlayer"' + (myLvl > buffLvl ?
				' style="color:red;"' : ' style="color:green;"') + '> [' +
				buffLvl + ']</span>');
		});
	},

	addStatsQuickBuff: function(player) { // jQuery
		player.parent().find('span.fshLastActivity').remove();
		$.ajax({ // TODO This should be moved to ajax
			cache: false,
			dataType: 'json',
			url: 'index.php',
			data: {
				cmd:             'export',
				subcmd:          'profile',
				player_username: player.text()
			}
		}).done(function(data) {
				player.after('<span class="fshLastActivity">Last Activity: ' +
					FSH.System.formatLastActivity(data.last_login) +
					'<br>Stamina: ' + data.current_stamina + ' / ' +
					data.stamina + ' ( ' + Math.floor(data.current_stamina /
					data.stamina * 100) + '% )' +
					'</span>');
			});
	},

	getSustain: function(responseText) { // jQuery
		FSH.quickBuff.getEnhancement(responseText._enhancements, 'Sustain',
			$('td#fshSus'));
		FSH.quickBuff.getEnhancement(responseText._enhancements, 'Fury Caster',
			$('td#fshFur'));
		FSH.quickBuff.getBuff(responseText._skills, 'Guild Buffer',
			$('td#fshGB'));
		FSH.quickBuff.getBuff(responseText._skills, 'Buff Master',
			$('td#fshBM'));
		FSH.quickBuff.getBuff(responseText._skills, 'Extend', $('td#fshExt'));
		FSH.quickBuff.getBuff(responseText._skills, 'Reinforce', $('td#fshRI'));

		$('span[id*="HelperActivate"]').click(function() {
			var trigger = $(this);
			var buffHref='?cmd=quickbuff&subcmd=activate&targetPlayers=' +
				window.self + '&skills[]=' + trigger.attr('buffID');
			$.get(buffHref).done(function(data) {
				if ($('font:contains("current or higher level is ' +
					'currently active on")', data).length > 0 ||
					$('font:contains("was activated on")', data)) {
						trigger.css('color','lime');
						trigger.html('On');
				}
			});
		});

		$('div#players').on('click', 'h1', FSH.quickBuff.addBuffLevels);

		$('div#buff-outer label[for^="skill-"]').each(function() {
			var lbl = $(this);

			var tipped = $('span[data-tipped]', lbl);
			var tipData = $(tipped.data('tipped'));
			$('center', tipData)
				.append('<br>Stamina Cost: ' + lbl.prev().data('cost'));
			tipped.attr('data-tipped', tipData.prop('outerHTML'));

			var lvlSpan = $('span > span', lbl);
			var myLvl = parseInt(lvlSpan.text().replace(/\[|\]/g, ''), 10);
			if (!FSH.Data.excludeBuff[lbl.attr('for')] && myLvl < 125) {
				lbl.addClass('fshDim');}
		});

		$('div#players h1').first().click();

	},

	getEnhancement: function(doc, enh, inject) { // jQuery
		var enhLevel = doc.reduce(function(prev, curr) {
				return curr.name === enh ? curr.value : prev;
			}, -1);
		var enhColor = 'lime';
		if (enhLevel < 100) {enhColor = 'red';}
		inject.html('<span style="color: ' + enhColor + ';">' +
			enhLevel + '%</span>');
	},

	getBuff: function(doc, buff, inject) { // jQuery
		var hasBuff = doc.reduce(function(prev, curr) {
				return curr.name === buff ? curr.duration : prev;
			}, 0);
		if (hasBuff) {
			var s = hasBuff;
			var m = Math.floor(s / 60);
			s = s % 60;
			var buffTimeToExpire = (m === 0 ? '' : m + 'm') +
				(s === 0 ? '' : ' ' + s + 's');
			inject.html('<span style="color:lime;">On</span>&nbsp;<span ' +
				'style="color: white; font-size: x-small;">(' +
				buffTimeToExpire +')</span>');
		} else {
			var elem = $('input[data-name="' + buff + '"]');
			if (elem.length > 0) {
				inject.html('<span style="color:red;cursor:pointer;" ' +
					'buffID="' + elem.val() + '" id="HelperActivate' +
					elem.val() + '">Activate</span>');
			} else {
				inject.html('<span style="color:red;">Off</span>');
			}
		}
	},

	updateBuffLog: function() { // Native
		if (!FSH.System.getValue('keepBuffLog')) {return;}

		var now = new Date();
		var timeStamp = FSH.System.formatDateTime(now);//now.toLocaleFormat('%Y-%m-%d %H:%M:%S') + ' - ';
		var buffLog=FSH.System.getValue('buffLog');
		var buffsAttempted = document.body.innerHTML.split('<li>');
		document.body.innerHTML+= '<span id="buff_Log" style="color:yellow"></span>';
		var buffsNotCastRE = new RegExp('The skill ([\w ]*) of current or' +
			' higher level is currently active on "(\w*)"');
		var buffsCastRE = new RegExp('Skill ([\w ]*) level (\d*) was ' +
			'activated on "(\w*)"');
		var buffList = FSH.Data.buffList;
		//var buffsNotCast = buffsCastRE.exec(document.body.innerHTML);
		for (var i=0;i<buffsAttempted.length ;i+= 1 )
		{
			var buffsCast = buffsCastRE.exec(buffsAttempted[i]);
			var buffsNotCast = buffsNotCastRE.exec(buffsAttempted[i]);
			var stamina = 0;
			if (buffsCast) {
				//document.getElementById('buff_Log').innerHTML+='<br>'+buffsCast[0];

			for (var j = 0; j < buffList.length; j += 1) {
				if (buffList[j].name === buffsCast[1]) {
					stamina = buffList[j].stamina;
					break;
				}
			}
				buffLog=timeStamp+buffsCast[0] + ' (' + stamina + ' stamina) <br>'+buffLog;
			}
			if (buffsNotCast) {

				buffLog=timeStamp+'<span style="color: red;">' + buffsNotCast[0] + '</span><br>' + buffLog;
			}
		}
		FSH.System.setValue('buffLog',buffLog);
		//document.getElementById('buff_Log').innerHTML+='<br><br><br>'+buffLog;

	},

	injectBuffLog: function(content) {
		if (!content) {content = FSH.Layout.notebookContent();}
		content.innerHTML=FSH.Layout.makePageTemplate('Buff Log','','clearBuffs','Clear','bufflog');
		document.getElementById('clearBuffs').addEventListener('click',
			function() {
				FSH.System.setValue('buffLog','');
				location.reload();
			}, true
		);
		document.getElementById('bufflog').innerHTML=FSH.System.getValue('buffLog');
	},

};

FSH.toprated = { // jQuery

	injectTopRated: function() { // jQuery
		if ($('#pCC font:contains("Last Updated")').length === 0) {return;}
		var lump = '<input id="fshFindOnlinePlayers" class="custombutton" ' +
			'type="button" title="Fetch the online status of the top 250 players ' +
			'(warning ... takes a few seconds)." value="Find Online Players">';
		var findBtn = $(lump);
		var theCell = $('#pCC td').first();
		theCell.wrapInner('<div style="width:190px;"/>');
		theCell.prepend($('<span/>').append(findBtn));
		findBtn.click(FSH.toprated.findOnlinePlayers);
	},

	findOnlinePlayers: function(e) { // jQuery
		$(e.target).parent().html('<img id="fshSpinner" src="' + 
			FSH.System.imageServer + '/world/actionLoadingSpinner.gif">');
		var topPlayerRows = $('#pCC table[width="500"] > tbody > tr');
		var guildALink;
		var guildId;
		var guildArray = [];
		for (var i = 1; i < topPlayerRows.length; i += 4) {

			guildALink = $('a', $('td', topPlayerRows.eq(i)).eq(2));
			if (guildALink.length === 0) {continue;} // Player does not belong to a guild
			// TODO player array for exceptions or just get profiles for everyone?

			guildId = guildALink.attr('href').match(/guild_id=([0-9]+)/)[1];
			if (guildArray.indexOf(guildId) === -1) {guildArray.push(guildId);}
		}
		FSH.ajax.getAllMembrList(true, guildArray)
			.done(FSH.toprated.parseGuildOnline);
	},

	parseGuildOnline: function(membrList) { // jQuery
		$('#pCC #fshSpinner').hide();
		var topPlayerRows = $('#pCC table[width="500"] > tbody > tr');
		var theRow;
		var theCell;
		var guildALink;
		var guildId;
		var username;
		for (var i = 1; i < topPlayerRows.length; i += 4) {
			theRow = topPlayerRows.eq(i);
			theCell = $('td', theRow).eq(3);
			guildALink = $('a', $('td', theRow).eq(2));
			if (guildALink.length === 0) {continue;}
			guildId = guildALink.attr('href').match(/guild_id=([0-9]+)/)[1];
			username = $('a', theCell).text();
			theCell.after($('<td/>').append(
				FSH.Layout.onlineDot({
					last_login: membrList[guildId][username].last_login
				})
			));
		}
	}

};

FSH.helperMenu = { // jQuery

	injectHelperMenu: function() { //jquery
		// don't put all the menu code here (but call if clicked) to minimize lag
		var node = $('#statbar-container');
		if (node.length === 0) {return;}
		var helperMenu = $('<div id=helperMenu>Helper&nbsp;Menu</div>');
		node.before(helperMenu);
		helperMenu.on('mouseover', FSH.helperMenu.showHelperMenu);
		helperMenu.draggable();
		if (!FSH.System.getValue('keepHelperMenuOnScreen')) {return;}
		$(document).ready(function() {
			$(window).scroll(function() {
				var offset = $(document).scrollTop() + 'px';
				helperMenu.animate({top:offset},
					{duration:0,queue:false});
			});
		});
	},

	showHelperMenu: function() { // jquery
		var helperMenu = $('#helperMenu');
		helperMenu.off('mouseover', FSH.helperMenu.showHelperMenu);
		var helperMenuDiv = $('<div id=helperMenuDiv style="background-image:' +
			'url(\'' + FSH.System.imageServer + '/skin/inner_bg.jpg\');"/>');
		helperMenuDiv.append(FSH.Layout.helperMenu);
		helperMenu.append(helperMenuDiv);
		helperMenu.click(function() {
			helperMenuDiv.toggle('fast');
		});
		helperMenuDiv.on('click', '.fshLink', FSH.helperMenu.callHelperFunction);
		helperMenuDiv.on('click', '.a-reply', function(evt) {
			window.openQuickMsgDialog(evt.target.getAttribute('target_player'));
		});
	},

	callHelperFunction: function(evt) { // jquery
		$('#content').remove();
		var content = $('<div id=content/>');
		$('body').append(content.hide());
		var fn = FSH.System.getFunction($(evt.target).attr('fn'));
		if (typeof fn === 'function') {
			fn.call(FSH.Helper, content[0]);
		}
		content.dialog({ width: 'auto', modal: true });
	}

};

FSH.allyEnemy = { // jQuery

	prepareAllyEnemyList: function() { // jQuery
		$('div#pCR').prepend('<div id="fshAllyEnemy" class="minibox"></div>');
		FSH.ajax.myStats(false)
			.done(FSH.allyEnemy.injectAllyEnemyList);
	},

	injectAllyEnemyList: function(data) { // jQuery

		var allies = data._allies || [];
		var enemies = data._enemies || [];
		if (allies.length + enemies.length === 0 ||
			!FSH.Helper.enableAllyOnlineList && enemies.length === 0 ||
			!FSH.Helper.enableEnemyOnlineList && allies.length === 0) {
			return;
		}
		var output = $(FSH.Layout.allyEnemyList);

		if (FSH.Helper.enableAllyOnlineList) {
			$('ul#fshContactList', output)
				.append(FSH.allyEnemy.addContact(allies, true));
		}
		if (FSH.Helper.enableEnemyOnlineList) {
			$('ul#fshContactList', output)
				.append(FSH.allyEnemy.addContact(enemies, false));
		}
		if (FSH.Helper.hideGuildInfoTrade) {
			$('a#enemy-trade', output).hide();
		}
		if (FSH.Helper.hideGuildInfoSecureTrade) {
			$('a#enemy-secure-trade', output).hide();
		}
		if (FSH.Helper.hideGuildInfoBuff) {
			$('a#enemy-quickbuff', output).hide();
		}
		if (FSH.Helper.hideGuildInfoMessage) {
			$('a#enemy-send-message', output).hide();
		}
		if (FSH.Helper.hideBuffSelected) {
			$('a.enemy-buff-check-on', output).hide();
			$('ul#enemy-quick-buff', output).hide();
		}

		$('div#pCR div#fshAllyEnemy').empty();
		$('div#pCR div#fshAllyEnemy').append(output);

		$('div#pCR ul#fshContactList').on('click',
			'a[class^="enemy-buff-check-o"]', FSH.allyEnemy.quickBuffToggle);

		$('div#pCR ul#enemy-quick-buff').click(function(){
			var sendstring = [];
			$('ul#fshContactList a.enemy-buff-check-on').each(function(){
				sendstring.push($(this).data('name'));
			});
			window.openWindow('index.php?cmd=quickbuff&t=' + sendstring.join(),
				'fsQuickBuff', 618, 1000, ',scrollbars');
		});

		$('div#pCR span#fshResetEnemy').click(FSH.allyEnemy.resetAllyEnemyList);

	},

	addContact: function(contactList, type) { // jQuery
		var now = Math.floor(Date.now() / 1000);
		var contactColor;
		var output = '';
		contactList.forEach(function(val) {
			if (now - val.last_login > 1800) {return;} // 30 mins
			contactColor = FSH.System.contactColor(val.last_login, type);

			output += FSH.Layout.allyEnemyContact;
			output = output.replace(/@@username@@/g, val.username);
			output = output.replace(/@@contactColor@@/g, contactColor);
			output = output.replace(/@@level@@/g, val.level);
			output = output.replace(/@@last_login@@/g,
				FSH.System.formatLastActivity(val.last_login));
			output = output.replace(/@@id@@/g, val.id);
		});
		return output;
	},

	quickBuffToggle: function() { // jQuery
		var ball = $(this);
		if (ball.hasClass('enemy-buff-check-on')) {
			ball.addClass('enemy-buff-check-off');
			ball.removeClass('enemy-buff-check-on');
		} else {
			ball.addClass('enemy-buff-check-on');
			ball.removeClass('enemy-buff-check-off');
		}
	},

	resetAllyEnemyList: function() { // jQuery
		FSH.ajax.myStats(true)
			.done(FSH.allyEnemy.injectAllyEnemyList);
	}

};

FSH.profile = { // Legacy

	injectProfile: function() { // Legacy
		FSH.profile.updateQuickBuff();
		FSH.profile.updateStatistics();
		var playerid;
		var player = FSH.System.findNode('//textarea[@id="holdtext"]');
		var avyImg;
		var playername;
		avyImg = FSH.System.findNode('//img[contains(@oldtitle, "s Avatar")]');
		if (avyImg) {playername = avyImg.getAttribute('oldtitle');}
		if (!avyImg) {return;}

		if(document.URL.indexOf('player_id') !== -1){
			var playeridRE = document.URL.match(/player_id=(\d+)/);
			if (playeridRE) {playerid = playeridRE[1];}
		}
		var idindex;
//************** yuuzhan having fun
		$('img[oldtitle="yuuzhan\'s Avatar"]').click(function(){alert('Winner!');});
		$('img[oldtitle="yuuzhan\'s Avatar"]')
			.attr('src','http://evolutions.yvong.com/images/tumbler.gif');
//**************
		FSH.profile.profileInjectGuildRel();
		if (FSH.System.getValue('enableBioCompressor')) {FSH.profile.compressBio();}
		var isSelfRE = $('#backpack_tabs').length > 0;// /player_id=/.exec(document.location.search);//
		if (player) {
			if (!playerid) {
				playerid = player.innerHTML;
				idindex = playerid.indexOf('?ref=') + 5;
				playerid = playerid.substr(idindex);
			}

			avyImg.style.borderStyle='none';

			playername = playername.substr(0, playername.indexOf('\'s Avatar'));

			var avyExtrasDiv = document.createElement('DIV');
			avyImg.parentNode.appendChild(avyExtrasDiv);
			avyExtrasDiv.align = 'center';
			FSH.profile.profileInjectQuickButton(avyExtrasDiv, playerid, playername);
			FSH.profile.profileRenderBio(playername);
			FSH.Helper.buffCost={'count':0,'buffs':{}};

			FSH.profile.bioAddEventListener();
		}

		if (isSelfRE) { // self inventory

			FSH.profile.profileParseAllyEnemy();
			//~ FSH.profile.profileInjectFastWear();
			if (FSH.System.getValue('enableQuickDrink')) {
				FSH.profile.injectFastWear();
			}
			FSH.profile.profileComponents();

			// quick wear manager link
			var node = FSH.System.findNode('//span/a[@href="index.php?cmd=profile' +
				'&subcmd=togglesection&section_id=2"]');
			if (node) {
				node.parentNode.innerHTML += '&nbsp;[<a href="/index.php?cmd=notepad' +
					'&blank=1&subcmd=quickwear"><span style="color:blue;">Quick&nbsp;' +
					'Wear</span></a>]';
			}
			//select all link
			node = FSH.System.findNode('//span/a[contains(@href,"cmd=profile' +
				'&subcmd=dropitems")]');
			if (node) {
				node.parentNode.innerHTML += '&nbsp;<span ' +
					'id="Helper:profileSelectAll" style="cursor:pointer; ' +
					'text-decoration:underline; font-size:x-small; color:blue;">' +
					'[All]</span>';
				document.getElementById('Helper:profileSelectAll')
					.addEventListener('click', FSH.profile.profileSelectAll, true);
			}

			// store the VL of the player
			var virtualLevel = parseInt(FSH.System.findNode(
				'//td[a/b[.="VL"] or b/a[.="VL"]]/following-sibling::td[1]'
				).textContent,10);
			if (FSH.System.intValue($('dt.stat-level:first').next().text()) ===
				virtualLevel) {
				FSH.System.setValue('characterVirtualLevel','');
			} else {
				FSH.System.setValue('characterVirtualLevel',virtualLevel);
			}
		}

		FSH.common.addStatTotalToMouseover();

		//enhance colored dots
		var enhanceOnlineDots = FSH.System.getValue('enhanceOnlineDots');
		if (!enhanceOnlineDots) {return;}
		var profileAlliesEnemies = FSH.System.findNodes(
			'//div[@id="profileLeftColumn"]//table/tbody/tr/td/a[' +
			'contains(@data-tipped,"Last Activity")]');
		if (!profileAlliesEnemies) {return;}
		var re = new RegExp('<td>Last Activity:</td><td>(\\d+)d (\\d+)h (\\d+)m (\\d+)s</td>');
		for (var i=0;i<profileAlliesEnemies.length ;i+= 1 ) {
			var contactLink = profileAlliesEnemies[i];
			var lastActivity = re.exec($(contactLink).data('tipped'));
			var lastActivityIMG = FSH.Layout.onlineDot({
					min: lastActivity[3],
					hour: lastActivity[2],
					day: lastActivity[1]
				});
			contactLink.parentNode.previousSibling
				.innerHTML = lastActivityIMG;
		}
	},

	updateQuickBuff: function() { // jQuery
		var qb = $('div#profileRightColumn a:contains("Quick Buff")');
		if (qb.length !== 0) {
			qb.attr('href', qb.attr('href').replace(/, 500/g,', 1000'));
		}
	},

	updateStatistics: function() { // jQuery
		var charStats = $('#profileLeftColumn table').first()
			.attr('id', 'characterStats');
		var tblCells = $('td', charStats).has('table').has('font');
		tblCells.each(function(i, e) {
			var tde = $('td', e);
			$(e).attr('id', tde.first().attr('id'));
			$(e).html(tde.first().html().replace(/&nbsp;/g, ' ') +
				'<div class="profile-stat-bonus">' +
				tde.last().text() + '</div>');
		});
	},

	profileSelectAll: function() { // jQuery
		var theBackpack = $('div#backpackContainer').data('backpack');
		var type = theBackpack.type;
		var myLi = $('div#backpackTab_' + type + ' li').not('.hcsPaginate_hidden');
		var ele;
		if (theBackpack.options.checkboxesEnabled) {
			ele = $('input.backpackCheckbox:not(:disabled)', myLi);
		} else {
			ele = $('span.backpackItem', myLi);
		}
		ele.each(function(){
			var myClick = jQuery.Event('click');
			myClick.ctrlKey = true;
			myClick.metaKey = true;
			$(this).trigger(myClick);
		});
	},

	compressBio: function() { // Legacy
		var bioCell = FSH.System.findNode('//div[@id="profile-bio"]'); //new interface logic
		if (!bioCell) {return;} //non-self profile
		var bioContents = bioCell.innerHTML;
		var maxCharactersToShow = FSH.System.getValue('maxCompressedCharacters');
		var maxRowsToShow = FSH.System.getValue('maxCompressedLines');
		var numberOfLines = bioContents.substr(0,maxCharactersToShow).split(/<br>\n/).length - 1;
		if (numberOfLines >= maxRowsToShow) {
			var startIndex = 0;
			while (maxRowsToShow >= 0) {
				maxRowsToShow -=1;
				startIndex = bioContents.indexOf('<br>\n',startIndex+1);
			}
			maxCharactersToShow = startIndex;
		}

		if (bioContents.length <= maxCharactersToShow) {return;}
		//find the end of next HTML tag after the max characters to show.
		var breakPoint = bioContents.indexOf('<br>',maxCharactersToShow) + 4;
		var lineBreak = '';
		if (breakPoint === 3) {
				breakPoint = bioContents.indexOf(' ',maxCharactersToShow) + 1;
				if (breakPoint === 0) {return;}
				lineBreak = '<br>';
			}
		var bioStart = bioContents.substring(0,breakPoint);
		var bioEnd = bioContents.substring(breakPoint,bioContents.length);
		var extraOpenHTML = '', extraCloseHTML = '';
		var tagList=['b','i','u','span'];
		for (var i=0;i<tagList.length;i += 1){
			var closeTagIndex = bioEnd.indexOf('</'+tagList[i]+'>');
			var openTagIndex = bioEnd.indexOf('<'+tagList[i]+'>');
			if (closeTagIndex !== -1 && (openTagIndex > closeTagIndex ||
				openTagIndex === -1)) {
				extraOpenHTML += '<'+tagList[i]+'>';
				extraCloseHTML += '</'+tagList[i]+'>';
			}
		}
		bioCell.innerHTML = bioStart + extraCloseHTML + lineBreak +
			'<span id="Helper:bioExpander" style="cursor:pointer; ' +
			'text-decoration:underline; color:blue;">More ...</span><br>' +
			'<span id="Helper:bioHidden">' + extraOpenHTML + bioEnd + '</span>';
		$('#Helper\\:bioHidden').hide();
	},

	profileInjectGuildRel: function() { // Legacy
		var aLink = FSH.System.findNode('//a[contains(@href,"cmd=guild&subcmd=view")]');
		if (aLink) {
			var guildIdResult = /guild_id=([0-9]+)/i.exec(aLink.getAttribute('href'));
			if (guildIdResult) {
				FSH.Helper.guildId = parseInt(guildIdResult[1], 10);
			}
			var warning = document.createElement('span');
			var color = '';
			var changeAppearance = true;
			FSH.Helper.currentGuildRelationship = FSH.profile.guildRelationship(aLink.text);
			var settings;
			switch (FSH.Helper.currentGuildRelationship) {
				case 'self':
					settings='guildSelfMessage';
					break;
				case 'friendly':
					settings='guildFrndMessage';
					break;
				case 'old':
					settings='guildPastMessage';
					break;
				case 'enemy':
					settings='guildEnmyMessage';
					break;
				default:
					changeAppearance = false;
					break;
			}
			if (changeAppearance) {
				var settingsAry = FSH.Data.guildMessages;
				warning.innerHTML='<br/>' + settingsAry[settings].message;
				color = settingsAry[settings].color;
				aLink.parentNode.style.color=color;
				aLink.style.color=color;
				aLink.parentNode.insertBefore(warning, aLink.nextSibling);
			}
		}
	},

	guildRelationship: function(txt) { // Native
		var guildSelf = FSH.System.getValue('guildSelf');
		var guildFrnd = FSH.System.getValue('guildFrnd');
		var guildPast = FSH.System.getValue('guildPast');
		var guildEnmy = FSH.System.getValue('guildEnmy');
		if (!guildSelf) {
			guildSelf = '';
			FSH.System.setValue('guildSelf', guildSelf);
		}
		if (!guildFrnd) {
			guildFrnd = '';
			FSH.System.setValue('guildFrnd', guildFrnd);
		}
		if (!guildPast) {
			guildPast = '';
			FSH.System.setValue('guildPast', guildPast);
		}
		if (!guildEnmy) {
			guildEnmy = '';
			FSH.System.setValue('guildEnmy', guildEnmy);
		}
		guildSelf = guildSelf.toLowerCase().replace(/\s*,\s*/, ',').replace(/\s\s*/g, ' ').split(',');
		guildFrnd = guildFrnd.toLowerCase().replace(/\s*,\s*/, ',').replace(/\s\s*/g, ' ').split(',');
		guildPast = guildPast.toLowerCase().replace(/\s*,\s*/, ',').replace(/\s\s*/g, ' ').split(',');
		guildEnmy = guildEnmy.toLowerCase().replace(/\s*,\s*/, ',').replace(/\s\s*/g, ' ').split(',');
		txt = txt.toLowerCase().replace(/\s\s*/g, ' ');
		if (guildSelf.indexOf(txt) !== -1) {return 'self';}
		if (guildFrnd.indexOf(txt) !== -1) {return 'friendly';}
		if (guildPast.indexOf(txt) !== -1) {return 'old';}
		if (guildEnmy.indexOf(txt) !== -1) {return 'enemy';}
		return '';
	},

	profileInjectQuickButton: function(avyrow, playerid, playername) { // Native
		var auctiontext = 'Go to ' + playername + '"s auctions' ;
		var ranktext = 'Rank ' +playername + '' ;
		var securetradetext = 'Create Secure Trade to ' + playername;

		var newhtml = avyrow.innerHTML +
			'<a ' + FSH.Layout.quickBuffHref(playerid) + '>' +
			'<img alt="Buff ' + playername + '" title="Buff ' + playername + '" src=' +
			FSH.System.imageServer + '/skin/realm/icon_action_quickbuff.gif></a>&nbsp;&nbsp;';
		if (!FSH.System.getValue('enableMaxGroupSizeToJoin')) {
			newhtml += '<a href="' + FSH.System.server + 'index.php?cmd=guild&subcmd=groups&subcmd2=joinall' +
				'");"><img alt="Join All Groups" title="Join All Groups" src=' +
				FSH.System.imageServer + '/skin/icon_action_join.gif></a>&nbsp;&nbsp;';
		} else {
			var maxGroupSizeToJoin = FSH.System.getValue('maxGroupSizeToJoin');
			newhtml += '<a href="' + FSH.System.server + 'index.php?cmd=guild&subcmd=groups&subcmd2=joinallgroupsundersize' +
				'");"><img alt="Join All Groups" title="Join All Groups < ' + maxGroupSizeToJoin + ' Members" src=' +
				FSH.System.imageServer + '/skin/icon_action_join.gif></a>&nbsp;&nbsp;';
		}
		newhtml += '<a href=' + FSH.System.server + '?cmd=auctionhouse&type=-3&tid=' +
			playerid + '><img alt="' + auctiontext + '" title="' + auctiontext + '" src="' +
			FSH.System.imageServer + '/skin/gold_button.gif"></a>&nbsp;&nbsp;' +
			'<a href=' + FSH.System.server + 'index.php?cmd=trade&subcmd=createsecure&target_username=' +
			playername + '><img alt="' + securetradetext + '" title="' + securetradetext + '" src=' +
			FSH.System.imageServer + '/temple/2.gif></a>&nbsp;&nbsp;' +
			'<a href=' + FSH.System.server + '?cmd=guild&subcmd=inventory&subcmd2=report&user=' +
			playername + '>[SR]</a>&nbsp;&nbsp;';
		if (FSH.Helper.currentGuildRelationship === 'self' && FSH.System.getValue('showAdmin')) {
			newhtml +=
				'<a href="' + FSH.System.server + 'index.php?cmd=guild&subcmd=members&subcmd2=changerank&member_id=' +
				playerid + '><img alt="' + ranktext + '" title="' + ranktext + '" src=' +
				FSH.System.imageServer + '/guilds/' + FSH.Helper.guildId + '_mini.jpg></a>';
		}
		avyrow.innerHTML = newhtml ;
	},

	profileRenderBio: function(playername) { // Legacy
		var bioDiv = FSH.System.findNode('//div[strong[.="Biography"]]');
		var bioCell = bioDiv.nextSibling.nextSibling;
		var renderBio = bioCell && FSH.System.getValue('renderSelfBio') || !bioCell && FSH.System.getValue('renderOtherBios');
		FSH.System.setValue('buffsToBuy', '');
		if (!renderBio || !bioCell) {return;}

		var bioContents = bioCell.innerHTML;
		bioContents=bioContents.replace(/\{b\}/g,'`~').replace(/\{\/b\}/g,'~`');
		var buffs=bioContents.match(/`~([^~]|~(?!`))*~`/g);
		if (buffs) {
			for (var i=0;i<buffs.length;i += 1) {
				var fullName=buffs[i].replace(/(`~)|(~`)|(\{b\})|(\{\/b\})/g,'');
				// var buffName = FSH.Helper.removeHTML(fullName);
				var cbString =
					'<span id="Helper:buff'+i+'" style="color:blue;cursor:pointer">'+
					fullName+'</span>';
				bioContents=bioContents.replace(buffs[i], cbString);
			}

			if (bioContents.indexOf('[cmd]') < 0) {bioContents+='[cmd]';}

			bioContents = bioContents.replace('[cmd]','<input id="Helper:sendBuffMsg" subject="buffMe" target_player="' +
				playername +'" class="custombutton" type="submit" value="Ask For Buffs"/>'+
				'<span id=buffCost style="color:red"></span>');
		}
		bioCell.innerHTML = bioContents;
	},

	toggleBuffsToBuy: function(evt) { // Native
		// This is also called by bio preview
		var newtext;
		var buffNameNode=evt.target;
		while (buffNameNode.tagName.toLowerCase()!=='span') {
			buffNameNode=buffNameNode.parentNode;
		}
		var node=buffNameNode;
		var selected = node.style.color==='blue';
		node.style.color=selected?'yellow':'blue';

		var buffName=node.textContent;
		if (selected) {
			var text='';
			// get the whole line from the buff name towards the end (even after the ',', in case of 'AL, Lib, Mer: 10k each'
			while (node && node.nodeName.toLowerCase()!=='br') {
				newtext = node.textContent;
				node=node.nextSibling;
				text+=newtext;
			}

			var price=text.replace(/[^a-zA-Z0-9.,+\- ]/g, '').toLowerCase().match(/([+\-]{0,1}[\.\d]+ *k)|([+\-]{0,1}[\.\d]+ *fsp)|([+\-]{0,1}[\.\d]+ *stam)/);
			if (!price) { // some players have prices BEFORE the buff names
				node=buffNameNode;
				while (node && node.nodeName.toLowerCase()!=='br') {
					newtext=node.textContent;
					node=node.previousSibling;
					text=newtext+text;
				}
				price=text.replace(/[^a-zA-Z0-9.,+\- ]/g, '').toLowerCase().match(/([+\-]{0,1}[\.\d]+ *k)|([+\-]{0,1}[\.\d]+ *fsp)|([+\-]{0,1}[\.\d]+ *stam)/);
			}
			var type, cost;
			if (price) {
				type=price[0].indexOf('k')>0 ? 'k' : price[0].indexOf('f')>0 ? 'fsp' : 'stam';
				cost=price[0].match(/([+\-]{0,1}[\.\d]+)/)[0];
			} else {
				type='unknown'; cost='1';
			}
			FSH.Helper.buffCost.buffs[buffName]=[parseFloat(cost),type];
			FSH.Helper.buffCost.count+=1;
		} else {
			FSH.Helper.buffCost.count-=1;
			delete FSH.Helper.buffCost.buffs[buffName];
		}
		FSH.profile.updateBuffCost();
	},

	updateBuffCost: function() { // Native
		if (FSH.Helper.buffCost.count>0) {
			var total={'k':0,'fsp':0,'stam':0,'unknown':0};
			var html='This is an estimated cost based on how the script finds the cost associated with buffs from viewing bio.'+
				'It can be incorrect, please use with discretion.<br/><hr/>'+
				'<table border=0>';
			for (var buff in FSH.Helper.buffCost.buffs) {
				if (!FSH.Helper.buffCost.buffs.hasOwnProperty(buff)) { continue; }
				total[FSH.Helper.buffCost.buffs[buff][1]]+=FSH.Helper.buffCost.buffs[buff][0];
				html+='<tr><td>'+buff+'</td><td>: '+FSH.Helper.buffCost.buffs[buff][0]+FSH.Helper.buffCost.buffs[buff][1]+'</td></tr>';
			}
			var totalText = total.fsp>0 ? Math.round(total.fsp*100)/100 +' FSP':'';
			if (total.fsp > 0 && total.k > 0) {totalText+=' and ';}
			totalText += total.k > 0 ? total.k+' k':'';
			if (total.fsp > 0 || total.k > 0) {totalText+=' and ';}
			totalText += total.stam > 0 ? total.stam+' Stam('+Math.round(total.stam/25*10)/10+'fsp)':'';
			if (total.unknown>0) {
				totalText+=' ('+total.unknown+' buff(s) with unknown cost)';
			}
			html+='</table><b>Total: '+totalText+'</b>';
			document.getElementById('buffCost').innerHTML='<br/><span class="tipped" data-tipped="'+html+'">Estimated Cost: <b>'+totalText+'</b></span>';
			FSH.System.setValue('buffCostTotalText', totalText);
		} else {
			document.getElementById('buffCost').innerHTML='';
			FSH.System.setValue('buffCostTotalText', '');
		}
	},

	expandBio: function() { // jQuery
		var bioExpander = $('#Helper\\:bioExpander');
		bioExpander.text(bioExpander.text() === 'More ...' ? 'Less ...' : 'More ...');
		$('#Helper\\:bioHidden').toggle();
	},

	getBuffsToBuy: function(evt) { // Legacy
		var allSpans = FSH.System.findNodes('//span[contains(@id,"Helper:buff")]');

		var buffsToBuy = '';
		var buffCount = 0;
		for (var i=0; i<allSpans.length; i += 1) {
			var aSpan=allSpans[i];
			var spanInner = aSpan.innerHTML.replace(/<[a-zA-Z\/][^>]*>/g, '').replace(/[^a-zA-Z0-9 ]/g,'');

			if (aSpan.id && aSpan.id.match(/Helper:buff\d*/) !== -1 && aSpan.style.color === 'yellow') {
				buffsToBuy += spanInner.trim() + ', ';
				buffCount+= 1;
			}
		}
		buffsToBuy = buffsToBuy.trim();
		if (buffsToBuy.lastIndexOf(',') === buffsToBuy.length - 1) {
			buffsToBuy = buffsToBuy.substring(0, buffsToBuy.length - 1);
		}

		if (buffCount > 0) {
				var targetPlayer = evt.target.getAttribute('target_player');
				var greetingText = FSH.System.getValue('buyBuffsGreeting').trim();
				var hasBuffTag = greetingText.indexOf('{buffs}') !== -1;
				var hasCostTag = greetingText.indexOf('{cost}') !== -1;
				greetingText = greetingText.replace(/{playername}/g, targetPlayer);
				if (!hasBuffTag) {
					greetingText += ' ' + buffsToBuy;
				} else {
					if (!hasCostTag) {
						greetingText = greetingText.replace(/{buffs}/g, '`~' + buffsToBuy + '~`');
					} else {
						greetingText = greetingText.replace(/{buffs}/g, '`~' + buffsToBuy + '~`').replace(/{cost}/g, FSH.System.getValue('buffCostTotalText'));
					}
				}

			window.openQuickMsgDialog(targetPlayer, greetingText, '');
		} else {
			alert('You have not selected any buffs!');
			return;
		}
	},

	addClickListener: function(id, listener) { // Native
		var node=document.getElementById(id);
		if (node) {node.addEventListener('click', listener, true);}
	},

	bioAddEventListener: function() { // Native
		FSH.profile.addClickListener('Helper:sendBuffMsg', FSH.profile.getBuffsToBuy);
		var i=0;
		while (true) {
			var buff=document.getElementById('Helper:buff'+i);
			if (buff) {
				buff.addEventListener('click', FSH.profile.toggleBuffsToBuy,true);
				i+= 1;
			} else {break;}
		}
		FSH.profile.addClickListener('Helper:bioExpander', FSH.profile.expandBio);
	},

	profileParseAllyEnemy: function() { // jquery
		// Allies/Enemies count/total function
		var alliesTotal = FSH.System.getValue('alliestotal');
		var alliesTitle = $('div#profileLeftColumn strong:contains("Allies")')
			.parent();
		var numberOfAllies = alliesTitle.next().find('img')
			.filter('[src*="/avatars/"],[src$="/skin/player_default.jpg"]')
			.length;
		alliesTitle.append('<span class="fshBlue">&nbsp;' + numberOfAllies +
			(alliesTotal && alliesTotal >= numberOfAllies ? '/' +
			alliesTotal : '') + '</span>');

		var enemiesTotal = FSH.System.getValue('enemiestotal');
		var enemiesTitle = $('div#profileLeftColumn strong:contains("Enemies")')
			.parent();
		var numberOfEnemies = enemiesTitle.next().find('img')
			.filter('[src*="/avatars/"],[src$="/skin/player_default.jpg"]')
			.length;
		enemiesTitle.append('<span class="fshBlue">&nbsp;' + numberOfEnemies +
			(enemiesTotal && enemiesTotal >= numberOfEnemies ? '/' +
			enemiesTotal : '') + '</span>');
	},

	injectFastWear: function() { // jQuery
		$('div#backpack').css('height', '500');
		var backpackContainer = $('div#backpackContainer');
		var theBackpack = backpackContainer.data('backpack');
		var oldShow = theBackpack._showPage;
		theBackpack._showPage = function(type, page) {
			oldShow.call(theBackpack, type, page);
			FSH.profile.fastWearLinks();
		};
		if ($('span#backpack_current').text().length !== 0) {
			FSH.profile.fastWearLinks();
		}
		backpackContainer.on('click', 'span.fastWear', FSH.profile.fastWearEquip);
		backpackContainer.on('click', 'span.fastUse',
			FSH.profile.drinkProfileInventoryItem);
	},

	fastWearLinks: function() { // jQuery
		var theBackpack = $('div#backpackContainer').data('backpack');
		var backpackTab = $('div#backpackTab_' + theBackpack.type);
		var theDivs = $('div.backpackTabContent > div', backpackTab);
		theDivs.each(function() {
			var self = $(this);
			var myDiv = $('<div style="height: 20px;"/>');
			if (theBackpack.options.checkboxesEnabled) {
				myDiv.append($('input', self));
			}
			var theSpan = $('span', self)
				.not('.item_giftSelect')
				.not('.backpackEmptySlot');
			if (theSpan.length === 1) {
				if (theSpan.hasClass('backpackContextMenuEquippable')) {
					myDiv.prepend('<span class="fastWear" itemid="' +
						theSpan.data('inv') + '">Wear</span>&nbsp;');
				}
				if (theSpan.hasClass('backpackContextMenuUsable')) {
					myDiv.prepend('<span class="fastUse" itemid="' +
						theSpan.data('inv') + '">Use</span>&nbsp;');
				}
			}
			self.append(myDiv);
		});
	},

	fastWearEquip: function() { // jQuery
		var self = $(this);
		var invId = self.attr('itemid');
		FSH.ajax.equipItem(invId).done(function(data) {
			if (data.r !== 0) {return;}
			FSH.profile.backpackRemove(invId);
			// TODO Insert item from worn
			self.parent().html('<span class="fastWorn">Worn</span>');
		});
	},

	backpackRemove: function(invId) { // jQuery
		invId = parseInt(invId, 10);
		var theBackpack = $('div#backpackContainer').data('backpack');
		// remove from srcData
		var s = theBackpack.srcData.length;
		for (var i = 0; i < s; i += 1) {
			if (theBackpack.srcData[i].a === invId) {
				theBackpack.srcData.splice(i, 1);
				break;
			}
		}
	},

	drinkProfileInventoryItem: function(evt) { // Legacy
		var InventoryItemID=evt.target.getAttribute('itemID');
		FSH.System.xmlhttp('index.php?cmd=profile&subcmd=useitem&inventory_id=' + InventoryItemID,
			FSH.profile.drinkProfileInventoryItemReturnMessage,
			{'item': InventoryItemID, 'target': evt.target});
	},

	drinkProfileInventoryItemReturnMessage: function(responseText, callback) { // Native
		var target = callback.target;
		var info = FSH.Layout.infoBox(responseText);
		var itemCellElement = target.parentNode;
		if (info.search(/You [successfully|gained]/) !== -1) {
			FSH.profile.backpackRemove(callback.item);
			itemCellElement.innerHTML = '<span style="color:green; font-weight:bold;">Used</span>';
		} else {
			itemCellElement.innerHTML = '<span style="color:red; font-weight:bold;">Error:' + info + '</span>';
		}
	},

	profileComponents: function() { // Legacy
		var injectHere = FSH.System.findNode('//strong[.="Components"]/ancestor::div[1]/following-sibling::div[1]');
		if (injectHere) {
			var componentExtrasDiv = document.createElement('DIV');
			injectHere.appendChild(componentExtrasDiv);
			componentExtrasDiv.innerHTML+='<div id=compDel align=center>[<span style="text-decoration:underline;cursor:pointer;color:#0000FF">Enable Quick Del</span>]</div>'+
				'<div id=compSum align=center>[<span style="text-decoration:underline;cursor:pointer;color:#0000FF">Count Components</span>]</div>'+
				'<div align=center><a href="index.php?cmd=notepad&blank=1&subcmd=quickextract">[<span style="text-decoration:underline;cursor:pointer;color:#0000FF">Quick Extract Components</span>]</a></div>' +
				'<div id=compDelAll align=center>[<span style="text-decoration:underline;cursor:pointer;color:#0000FF">Delete All Visible</span>]</div>';
			document.getElementById('compDel').addEventListener('click', FSH.profile.enableDelComponent, true);
			document.getElementById('compSum').addEventListener('click', FSH.profile.countComponent, true);
			document.getElementById('compDelAll').addEventListener('click', FSH.profile.delAllComponent, true);
			$('#compDelAll').hide();
		} else {
			console.log('Components div not found! Please let Yuuzhan know.');
		}
	},

	delAllComponent: function() { // jQuery
		$('span[id^=compDelBtn]').each(function() {$(this).click();});
	},

	countComponent: function() { // Legacy
		var compPage=FSH.System.findNodes('//a[contains(@href,"index.php?cmd=profile&component_page=")]');
		if (compPage) {
			FSH.Helper.compPage = compPage.length;
		} else {
			FSH.Helper.compPage = 0;
		}
		document.getElementById('compSum').innerHTML='Retrieve page: ';
		FSH.Helper.componentList={};
		FSH.System.xmlhttp('index.php?cmd=profile&component_page=0', FSH.profile.retriveComponent, 0);
	},

	retriveComponent: function(responseText, currentPage) { // Legacy
		var nextPage=currentPage+1;
		document.getElementById('compSum').innerHTML+=nextPage+', ';
		var doc=FSH.System.createDocument(responseText);
		$(responseText).find('a[href*="cmd\=profile\&subcmd\=destroycomponent\&component_id\="]').each(function() {

				var img=$(this).children(':first');
				var mouseover=$(img).data('tipped');
				var id=mouseover.match(/fetchitem.php\?item_id=(\d+)/)[1];
				if (FSH.Helper.componentList[id]) {
					FSH.Helper.componentList[id].count+= 1;
				} else {
					FSH.Helper.componentList[id] = {
						'count':1,
						'src':$(img).attr('src'),
						'onmouseover':mouseover
					};
				}
			});

		if (currentPage < FSH.Helper.compPage - 1) {
			FSH.System.xmlhttp('index.php?cmd=profile&component_page='+nextPage, FSH.profile.retriveComponent, nextPage);
		} else {
			var totalCount = FSH.System.findNodes('//td[contains(@background,"inventory/1x1mini.gif")]',doc);
			if (totalCount) {
				totalCount = totalCount.length;
			} else {totalCount = 0;}
			totalCount+=currentPage*50;
			var output='Component Summary<br/><table>';
			var usedCount=0;
			for (var id in FSH.Helper.componentList) {
				if (!FSH.Helper.componentList.hasOwnProperty(id)) { continue; }
				var comp=FSH.Helper.componentList[id];
				output+='<tr><td align=center><img src='+comp.src+' class="tipped" data-tipped-options=\'skin: "fsItem", ajax: true\' data-tipped=\''+comp.onmouseover+'\'></td><td>'+comp.count+'</td></tr>';
				usedCount+=comp.count;
			}
			output+='<tr><td align=center>Total:</td><td>'+usedCount+' / '+totalCount+'</td></tr></table>';
			document.getElementById('compSum').innerHTML=output;
		}
	},

	enableDelComponent: function() { // Legacy
		var nodes=FSH.System.findNodes('//a[contains(@href,"cmd=profile&subcmd=destroycomponent&component_id=")]');
		if (nodes) {
			for (var i=0;i<nodes.length;i += 1) {
				nodes[i].parentNode.innerHTML+='<span id=compDelBtn'+i+' compid='+
					nodes[i].getAttribute('href').match(/destroycomponent&component_id=(\d+)/i)[0]+
					' style="text-decoration:underline;cursor:pointer;color:#A0CFEC">Del</span>';
				document.getElementById('compDelBtn'+i).addEventListener('click',FSH.profile.delComponent,true);
			}
		}
		$('#compDel').hide();
		$('#compDelAll').show();
	},

	delComponent: function(evt) { // Legacy
		var id=evt.target.getAttribute('compid');
		FSH.System.xmlhttp('index.php?cmd=profile&subcmd=destroycomponent&component_id='+id,
			function(responseText) {
				if (FSH.Layout.infoBox(responseText)==='Component destroyed.') {
					evt.target.parentNode.innerHTML='';
				} else {
					evt.target.innerHTML=FSH.Layout.infoBox(responseText);
				}
			});
	},

	injectBioWidgets: function() { // Legacy
		var textArea = FSH.System.findNode('//textarea[@id="textInputBox"]');
		//textArea.cols=100;
		var textAreaDev = textArea.parentNode;
		var bioPreviewHTML = FSH.System.convertTextToHtml(textArea.value);

		var previewDiv = document.createElement('DIV');
		textAreaDev.appendChild(previewDiv);
		previewDiv.innerHTML = '<table align="center" width="325" border="1"><tbody>' +
			'<tr><td style="text-align:center;color:#7D2252;background-color:#CD9E4B">Preview</td></tr>' +
			'<tr><td align="left" width="325"><span style="font-size:small;" findme="biopreview">' + bioPreviewHTML +
			'</span></td></tr></tbody></table>';
		//Add description text for the new tags
		var advancedEditing = FSH.System.findNode('//div[h2[.="Advanced Editing:"]]');
		/* TODO: Add a way to hide the advanced editing 'note' box dynamically.
		advancedEditing.addEventListener('mouseover', function(event) {
			event.target.style.backgroundColor = '#8EE5EE';
		}, false);
		advancedEditing.addEventListener('mouseout', function(event) {
			event.target.style.backgroundColor = '';
		}, false);*/
		var advancedEditingDiv = document.createElement('DIV');
		advancedEditing.appendChild(advancedEditingDiv);
		advancedEditingDiv.style.align = 'left';
		advancedEditingDiv.innerHTML += '`~This will allow FSH Script users to select buffs from your bio~`<br/>' +
			'You can use the [cmd] tag as well to determine where to put the "Ask For Buffs" button<br/><br/>' +
			'&nbsp;&nbsp;&nbsp;- Note 1: The ` and ~ characters are on the same key on QWERTY keyboards. ` is <b>NOT</b> an apostrophe.<br/>' +
			'&nbsp;&nbsp;&nbsp;- Note 2: Inner text will not contain special characters (non-alphanumeric).<br/>' +
			'&nbsp;&nbsp;&nbsp;- P.S. Be creative with these! Wrap your buff pack names in them to make buffing even easier!';
		var bioEditLinesDiv = document.createElement('DIV');
		advancedEditing.appendChild(bioEditLinesDiv);
		textArea.rows = FSH.System.getValue('bioEditLines');
		textArea.style.resize='none';
		bioEditLinesDiv.innerHTML += ' Display <input id="Helper:linesToShow"' +
			' type="number" min="0" max="99" value="' + FSH.System.getValue('bioEditLines') +
			'"/> Lines' +
		// ' <input type="button" style="display:none" id="Helper:saveLines" value="Update Rows To Show" class="custombutton"/>';
		' <input type="button" id="Helper:saveLines" value="Update Rows To Show" class="custombutton"/>';
		document.getElementById('Helper:saveLines').addEventListener('click',
			function() {
				var theBox = document.getElementById('Helper:linesToShow');
				if (isNaN(parseInt(theBox.value, 10)) ||
					parseInt(theBox.value, 10) < '0' ||
					parseInt(theBox.value, 10) > '99') {return;}
				FSH.System.setValue('bioEditLines', parseInt(theBox.value, 10));
				location.reload();
			}, true);

		document.getElementById('textInputBox').addEventListener('keyup', FSH.profile.updateBioCharacters, true);
		//Force the preview area to render
		FSH.profile.updateBioCharacters(null);
	},

	updateBioCharacters: function() { // Legacy
		FSH.Helper.buffCost={'count':0,'buffs':{}};
		var textArea = FSH.System.findNode('//textarea[@id="textInputBox"]');
		var previewArea = FSH.System.findNode('//span[@findme="biopreview"]');
		var bioContents = FSH.System.convertTextToHtml(textArea.value);

		bioContents=bioContents.replace(/\{b\}/g,'`~').replace(/\{\/b\}/g,'~`');
		var buffs=bioContents.match(/`~([^~]|~(?!`))*~`/g);
		if (buffs) {
			for (var i=0;i<buffs.length;i += 1) {
				var fullName=buffs[i].replace(/(`~)|(~`)|(\{b\})|(\{\/b\})/g,'');
				var cbString =
					'<span id="Helper:buff'+i+'" style="color:blue;cursor:pointer">'+
					fullName+'</span>';
				bioContents=bioContents.replace(buffs[i], cbString);
			}

			if (bioContents.indexOf('[cmd]') < 0) {bioContents+='[cmd]';}

			bioContents = bioContents.replace('[cmd]','<input id="Helper:sendBuffMsg" subject="buffMe" href="index.php?cmd=message&target_player=" class="custombutton" type="submit" value="Ask For Buffs"/>' +
			'<span id=buffCost style="color:red"></span>');
			previewArea.innerHTML = bioContents;

			for (i=0;i<buffs.length;i += 1) {
				var buff=document.getElementById('Helper:buff'+i);
				if (buff) {
					buff.addEventListener(
						'click',
						FSH.profile.toggleBuffsToBuy,
						true
					);
				}
			}
		}
	},

};

FSH.logs = { // Legacy

	guildChat: function() { // Native
		FSH.logs.addChatTextArea();
		FSH.logs.addLogColoring('Chat', 0);
	},

	guildLog: function() { // Native
		FSH.logs.addLogColoring('GuildLog', 1);
		FSH.logs.addGuildLogWidgets();
	},

	outbox: function() { // Native
		FSH.logs.addLogColoring('OutBox', 1);
	},

	playerLog: function() { // Native
		FSH.logs.addLogColoring('PlayerLog', 1);
		FSH.logs.addLogWidgets();
	},

	addLogColoring: function(logScreen, dateColumn) { // Legacy
		if (!FSH.System.getValue('enableLogColoring')) {return;}
		var lastCheckScreen = 'last' + logScreen + 'Check';
		var localLastCheckMilli = FSH.System.getValue(lastCheckScreen);
		if (!localLastCheckMilli) {
			localLastCheckMilli = Date.now();
		}
		var chatTable = FSH.System.findNode('//table[@class="width_full"]');
		if (!chatTable) {chatTable = FSH.System.findNode('//table[tbody/tr/td[.="Message"]]');}
		if (!chatTable) {chatTable = FSH.System.findNode('//table[tbody/tr/td/span[contains(.,"Currently showing:")]]');} //personal log
		if (!chatTable) {return;}

		chatTable.style.tableLayout = 'fixed';
		chatTable.style.wordWrap = 'break-word';

		var localDateMilli = Date.now();
		var gmtOffsetMinutes = (new Date()).getTimezoneOffset();
		var gmtOffsetMilli = gmtOffsetMinutes * 60 * 1000;
		var newRow = chatTable.insertRow(1);
		newRow.insertCell(0);
		for (var i = 2; i < chatTable.rows.length; i += 2) {
			var aRow = chatTable.rows[i];
			var addBuffTag = true;
			if (aRow.cells[0].innerHTML) {
				var cellContents = aRow.cells[dateColumn].innerHTML;
				if (logScreen !== 'Chat') {
					cellContents = cellContents.substring(6,23); // fix for player log screen.
				}
				var postDateAsDate = FSH.System.parseDate(cellContents);
				var postDateAsLocalMilli = postDateAsDate.getTime() - gmtOffsetMilli;
				var postAge = (localDateMilli - postDateAsLocalMilli)/(1000*60);
				if (postDateAsLocalMilli > localLastCheckMilli) {
					aRow.style.backgroundColor = '#F5F298';
				}
				else if (postAge > 20 && postDateAsLocalMilli <= localLastCheckMilli) {
					aRow.style.backgroundColor = '#CD9E4B';
					addBuffTag = false;
				}
				if (logScreen === 'Chat' && addBuffTag) {
					var playerIDRE = /player_id=(\d+)/;
					var playerID = playerIDRE.exec(aRow.cells[1].innerHTML)[1];
					aRow.cells[1].innerHTML += ' <a style="color:blue;font-size:10px;" ' +
						FSH.Layout.quickBuffHref(playerID) + '>[b]</a>';
				}
			}
		}
		FSH.System.setValue(lastCheckScreen, Date.now());
	},

	addChatTextArea: function() { //jquery
		if (!FSH.System.getValue('enhanceChatTextEntry')) {return;}
		$('div#pCC form').first().attr('id', 'dochat');
		$('div#pCC input').slice(0, 7).each(function() {
			$(this).attr('form', 'dochat');
		});
		var theTable = $('div#pCC table table').first();
		theTable.append('<tr id="fshMass"></tr>');
		$('td', theTable).eq(0).remove();
		var btnMass = $('input[value="Send As Mass"]', theTable);
		if (btnMass.length === 1 ) {
			btnMass.appendTo('tr#fshMass', theTable);
		}
		var ourTd = $('td', theTable).eq(0);
		ourTd.attr('rowspan', '2');
		$('input', ourTd).replaceWith('<textarea id="fshTxt" name="msg" cols' +
			'="72" rows="2" form="dochat" style="resize: none"></textarea>');
		var fshTxt = $('#fshTxt', ourTd);
		fshTxt.keydown(function(e) {
			if (e.keyCode === 13 && fshTxt.val() !== '') {
				$('input[value=Send]', theTable).click();
				return false;
			}
		});
	},

	addLogWidgets: function() { // jQuery
		$.when(
			FSH.ajax.getMembrList(false),
			FSH.ajax.myStats(false)
		).done(FSH.logs.addLogWidgetsOld);
	},

	addLogWidgetsOld: function() { // Legacy
		var i;
		var playerElement;
		var playerName;
		var dateHTML;
		var addAttackLinkToLog = FSH.System.getValue('addAttackLinkToLog');
		var logTable = FSH.System.findNode('//table[tbody/tr/td/span[contains' +
			'(.,"Currently showing:")]]');
		if (!logTable) {return;}
		var memberNameString = Object.keys(FSH.Helper.membrList);
		var profile = FSH.Helper.profile[FSH.Helper.myUsername];
		var listOfAllies = profile._allies.map(function(obj) {
			return obj.username;});
		var listOfEnemies = profile._enemies.map(function(obj) {
			return obj.username;});
		var showPvPSummaryInLog = FSH.System.getValue('showPvPSummaryInLog');
		var messageType;
		for (i=0;i<logTable.rows.length;i += 2) {
			var aRow = logTable.rows[i];
			if (i === 0 ) {
				var messageNameCell = aRow.cells[2];
				if (messageNameCell) {
					messageNameCell.innerHTML += '&nbsp;&nbsp;<span style="' +
						'color:white;">(Guild mates show up in <span style="' +
						'color:green;">green</span>)</span>';
				}
				continue;
			}
			if (!aRow.cells[0].innerHTML) {continue;}
			var firstCell = aRow.cells[0];
			//Valid Types: General, Chat, Guild
			messageType = firstCell.firstChild.getAttribute('oldtitle');
			if (!messageType) {return;}
			var colorPlayerName = false;
			var isGuildMate = false;
			if (messageType === 'Chat') {
				playerElement = aRow.cells[2].firstChild;
				playerName = playerElement.innerHTML;
				colorPlayerName = true;
			}
			if ((messageType === 'General' ||
				messageType === 'Notification') &&
				aRow.cells[2].firstChild.nextSibling &&
				aRow.cells[2].firstChild.nextSibling.nodeName === 'A' &&
				aRow.cells[2].firstChild.nextSibling.getAttribute('href')
					.search('player_id') !== -1) {
				playerElement = aRow.cells[2].firstChild.nextSibling;
				playerName = playerElement.innerHTML;
				colorPlayerName = true;
			}
			if (colorPlayerName) {
				if (memberNameString.indexOf(playerName) !== -1) {
					playerElement.style.color='green';
					isGuildMate = true;
				}
				if (listOfEnemies.indexOf(playerName) !== -1) {
					playerElement.style.color='red';
				}
				if (listOfAllies.indexOf(playerName) !== -1) {
					playerElement.style.color='blue';
				}
			}
			if (messageType === 'Chat') {
				FSH.logs.doChat(aRow, isGuildMate, playerName, addAttackLinkToLog);
			}
			if (messageType === 'Notification') {
				if (aRow.cells[2].firstChild.nextSibling && aRow.cells[2].firstChild.nextSibling.nodeName === 'A') {
					if (aRow.cells[2].firstChild.nextSibling.getAttribute('href').search('player_id') !== -1) {
						if (!isGuildMate) {
							dateHTML = aRow.cells[1].innerHTML;
							var dateExtraText = '<nobr><span style="font-size:x-small;">[ <a title="Add to Ignore List" href="index.php?cmd=log&subcmd=doaddignore&ignore_username=' + playerName +
							'">Ignore</a> ]</span></nobr>';
							aRow.cells[1].innerHTML = aRow.cells[1].innerHTML + '<br>' + dateExtraText;
						}
						var buffingPlayerIDRE = /player_id=(\d+)/;
						var buffingPlayerID = buffingPlayerIDRE.exec(aRow.cells[2].innerHTML)[1];
						var buffingPlayerName = aRow.cells[2].firstChild.nextSibling.innerHTML;
						var extraText = ' <span style="font-size:x-small;"><nobr>[ <span style="cursor:pointer;text-decoration:underline" class="a-reply" target_player="'+buffingPlayerName+
							'">Reply</span> | <a href="index.php?cmd=trade&target_player=' + buffingPlayerName +
							'">Trade</a> | <a title="Secure Trade" href="index.php?cmd=trade&subcmd=createsecure&target_username=' + buffingPlayerName +
							'">ST</a>';
						extraText += ' | <a ' + FSH.Layout.quickBuffHref(buffingPlayerID) + '>Buff</a>';
						if (addAttackLinkToLog) {
							extraText += ' | <a href="index.php?cmd=attackplayer&target_username=' + buffingPlayerName +'">Attack</a>';
						}
						extraText += ' ]</nobr></span>';

						aRow.cells[2].innerHTML += extraText;
					}
				}
			}

			//add PvP combat log summary
			if (messageType === 'Combat' &&
				aRow.cells[2] &&
				showPvPSummaryInLog &&
				aRow.cells[2].innerHTML.search('combat_id=') !== -1) {
				var combatID = /combat_id=(\d+)/.exec(aRow.cells[2].innerHTML)[1];
				var combatSummarySpan = document.createElement('SPAN');
				combatSummarySpan.style.color = 'gray';
				aRow.cells[2].appendChild(combatSummarySpan);
				FSH.System.xmlhttp('index.php?cmd=combat&subcmd=view&combat_id=' +
					combatID, FSH.logs.retrievePvPCombatSummary,
					{'target': combatSummarySpan});
			}
		}
		$('.a-reply').click(function(evt) {
			window.openQuickMsgDialog(evt.target.getAttribute('target_player'),
				'', evt.target.getAttribute('replyTo'));
		});
	},

	doChat: function(aRow, isGuildMate, playerName, addAttackLinkToLog) { // Native
		var buffList = FSH.Data.buffList;
		var dateHTML = aRow.cells[1].innerHTML;
		var dateFirstPart = dateHTML
			.substring(0, dateHTML.indexOf('>Report') + 7);
		var dateLastPart = dateHTML.
			substring(dateHTML.indexOf('Message</a>') + 11, dateHTML.length);
		var extraPart = '';
		if (!isGuildMate) {
			extraPart = ' | <a title="Add to Ignore List" href="index.php?cmd' +
				'=log&subcmd=doaddignore&ignore_username=' + playerName +
				'">Ignore</a>';
		}
		aRow.cells[1].innerHTML = dateFirstPart + '</a>' + extraPart +
			dateLastPart;

		var messageHTML = aRow.cells[2].innerHTML;
		var firstPart = messageHTML.substring(0, messageHTML.indexOf('<small>') + 7);
		// var secondPart = messageHTML.substring(messageHTML.indexOf('<small>') + 7, messageHTML.indexOf('>Reply</a>') + 10);
		var thirdPart = messageHTML.substring(messageHTML.indexOf('>Reply</a>') + 10, messageHTML.indexOf('>Buff</a>') + 9);
		var targetPlayerID = /quickBuff\((\d+)\)/.exec(thirdPart)[1];
		thirdPart = ' | <a ' + FSH.Layout.quickBuffHref(targetPlayerID) + '>Buff</a></span>';
		var fourthPart = messageHTML.substring(messageHTML.indexOf('>Trade</a>') + 10, messageHTML.indexOf('</small>'));
		var lastPart = messageHTML.substring(messageHTML.indexOf('</small>'), messageHTML.length);
		extraPart = ' | <a href="index.php?cmd=trade&target_player=' + playerName + '">Trade</a> | ' +
			'<a title="Secure Trade" href="index.php?cmd=trade&subcmd=createsecure&target_username=' + playerName +
			'">ST</a>';

		var attackPart = '';
		if (addAttackLinkToLog) {
			attackPart = ' | <a href="index.php?cmd=attackplayer&target_username=' + playerName +'">Attack</a>';
		}

		var buffsSent = aRow.cells[2].innerHTML.match(/`~.*?~`/);
		var quickBuff = '';
		if (buffsSent) {
			buffsSent = buffsSent[0].replace('`~','').replace('~`', '').split(',');
			var theBuffPack = FSH.System.getValueJSON('buffpack');
			for (var j = 0; j < buffsSent.length; j += 1) {
				var bBuffFound = false;
				for (var m = 0; m < buffList.length; m += 1) {
					var nicks = buffList[m].nicks.split(',');
					var exitOuter = false;

					for (var k = 0; k < nicks.length; k += 1) {
						if (buffsSent[j].toLowerCase().trim() === nicks[k].toLowerCase().trim()) {

							quickBuff += m + ';';
							exitOuter = true;
							bBuffFound = true;
							break;

						}
					}
					if (exitOuter) {
						break;
					}
				}
				if (!bBuffFound) {

					if (!theBuffPack) {continue;}

					if (!theBuffPack.nickname) { //avoid bugs if the new array is not populated yet
						theBuffPack.nickname = {};
					}
					if (!theBuffPack.staminaTotal) { //avoid bugs if the new array is not populated yet
						theBuffPack.staminaTotal = {};
					}

					for (var idx = 0; idx < theBuffPack.size; idx += 1) {
						var nickname = theBuffPack.nickname[idx]? theBuffPack.nickname[idx]:'';
						if (nickname.toLowerCase().trim() === buffsSent[j].toLowerCase().trim()) {
							//131 is the number of buffs in the game currently. When they add new buffs, this will need to be updated, along with the fsFSH.Data.buffList variable!
							quickBuff += 131+idx + ';';
							break;
						}
					}
				}
			}
			thirdPart = ' | <a ' + FSH.Layout.quickBuffHref(targetPlayerID, quickBuff) + '>Buff</a></span>';
		}

		//var msgReplyTo = (FSH.System.getValue('enableChatParsing') === true) ? secondPart.replace(/'([^']*?)'/, secondPart.match(/'([^']*?)'/)[1] + '&replyTo="' +
		// FSH.Helper.removeHTML(firstPart.replace(/&nbsp;/g, '')).replace(/[\s*]/g, '_') + '"') : secondPart;
		var msgReplyTo = '[ <span style="cursor:pointer;text-' +
			'decoration:underline"class="a-reply" target_player="' +
			playerName + '" replyTo="' +
			(FSH.System.getValue('enableChatParsing') ?
			FSH.System.removeHTML(firstPart.replace(/&nbsp;/g, ' '))
			.substr(0, 140) : '') + '...">Reply</span>';
		aRow.cells[2].innerHTML = firstPart + '<nobr>' + msgReplyTo +
			extraPart + thirdPart + attackPart + fourthPart +
			'</nobr>' + lastPart;
	},

	retrievePvPCombatSummary: function(responseText, callback) { // Native
		// var doc = FSH.System.createDocument(responseText);
		var winner = FSH.System.getIntFromRegExp(responseText, /var\s+winner=(-?[0-9]+);/i);
		var xpGain = FSH.System.getIntFromRegExp(responseText, /var\s+xpGain=(-?[0-9]+);/i);
		var goldGain = FSH.System.getIntFromRegExp(responseText, /var\s+goldGain=(-?[0-9]+);/i);
		var prestigeGain = FSH.System.getIntFromRegExp(responseText, /var\s+prestigeGain=(-?[0-9]+);/i);
		var goldStolen = FSH.System.getIntFromRegExp(responseText, /var\s+goldStolen=(-?[0-9]+);/i);
		var pvpRatingChange = FSH.System.getIntFromRegExp(responseText, /var\s+pvpRatingChange=(-?[0-9]+);/i);
		var output = '<br> ';
		if (xpGain !== 0) {
			output += 'XP stolen:<span style="color:' +
				(winner === 1 ? 'green' : 'red') + ';">' +
				FSH.System.addCommas(xpGain) + ' </span>';
		}
		if (goldGain !== 0) {
			output += 'Gold lost:<span style="color:' +
				(winner === 1 ? 'green' : 'red') + ';">' +
				FSH.System.addCommas(goldGain) + ' </span>';
		}
		if (goldStolen !== 0) {
			output += 'Gold stolen:<span style="color:' +
				(winner === 1?'green':'red') + ';">' +
				FSH.System.addCommas(goldStolen) + ' </span>';
		}
		if (prestigeGain !== 0) {
			output += 'Prestige gain:<span style="color:' +
				(winner === 1?'green':'red') + ';">' +
				prestigeGain + ' </span>';
		}
		if (pvpRatingChange !== 0) {
			output += 'PvP change:<span style="color:' +
			(winner === 1 ? 'green' : 'red') + ';">' +
			pvpRatingChange + ' </span>';
		}
		callback.target.innerHTML = output;
	},

	addGuildLogWidgets: function() { // Legacy
		var node=FSH.System.findNode('//font[@size=3]/b[contains(.,"s Log")]/..');
		if (node) {
			node.innerHTML += ' [ <a href="index.php?cmd=notepad&blank=1&' +
			'subcmd=guildlog">Guild Log Summary</a> ]';
		}
		if (!FSH.System.getValue('hideNonPlayerGuildLogMessages')) {return;}
		var playerId = FSH.Layout.playerId();
		var logTable = FSH.System.findNode('//table[tbody/tr/td[.="Message"]]');
		var hideNextRows = 0;
		for (var i=0;i<logTable.rows.length;i += 1) {
			var aRow = logTable.rows[i];
			var firstPlayerID = 0;
			var secondPlayerID = 0;
			if (i !== 0) {
				if (hideNextRows>0) {
					//aRow.style.display = 'none';
					hideNextRows -= 1;
				}
				if (aRow.cells[0].innerHTML) {
					var messageHTML = aRow.cells[2].innerHTML;
					var doublerPlayerMessageRE = /member\s<a\shref="index.php\?cmd=profile\&amp;player_id=(\d+)/;
					var secondPlayer = doublerPlayerMessageRE.exec(messageHTML);
					var singlePlayerMessageRE = /<a\shref="index.php\?cmd=profile\&amp;player_id=(\d+)/;
					var firstPlayer = singlePlayerMessageRE.exec(messageHTML);
					if (secondPlayer) {
						firstPlayerID = firstPlayer[1]*1;
						secondPlayerID = secondPlayer[1]*1;
					}
					if (firstPlayer && !secondPlayer) {
						firstPlayerID = firstPlayer[1]*1;
					}
					if (firstPlayer && firstPlayerID !== playerId && secondPlayerID !== playerId) {
						//aRow.style.display = 'none';
						aRow.style.fontSize = 'x-small';
						aRow.style.color = 'gray';
						hideNextRows = 3;
					}
					if (aRow.cells[2].textContent.charAt(0) === '\'' || aRow.cells[2].textContent.search('has invited the player') !== -1) {
						var message = aRow.cells[2].innerHTML;
						var firstQuote = message.indexOf('\'');
						var firstPart = '';
						firstPart = message.substring(0,firstQuote);
						var secondQuote = message.indexOf('\'',firstQuote+1);
						var targetPlayerName = message.substring(firstQuote+1,secondQuote);
						aRow.cells[2].innerHTML = firstPart + '\'' +
							'<a href="index.php?cmd=findplayer&search_active=1&search_level_max=&search_level_min=&search_username=' + targetPlayerName + '&search_show_first=1">' + targetPlayerName + '</a>' +
							message.substring(secondQuote, message.length);
					}
				}
			}
			else {
				var messageNameCell = aRow.firstChild.nextSibling.nextSibling.nextSibling;
				if (messageNameCell) {
					messageNameCell.innerHTML += '&nbsp;&nbsp;<font style="' +
						'color:white;">(Guild Log messages not involving ' +
						'self are dimmed!)</font>';
				}
			}

		}
	},

};

FSH.lists = { // Native

	injectAuctionSearch: function(content) { // Native
		if (!content) {content = FSH.Layout.notebookContent();}
		content.innerHTML=FSH.Layout.makePageHeader('Trade Hub Quick Search','','','')+
			'<div class=content>This screen allows you to set up some quick search templates for the Auction House. '+
				'The Display on AH column indicates if the quick search will show on the short list on the '+
				'Auction House main screen. A maximum of 36 items can show on this list '+
				'(It will not show more than 36 even if you have more than 36 flagged). '+
				'To edit items, either use the large text area below, '+
				'or add a new entry and delete the old one. You can always reset the list to the default values.</div>'+
			'<div style="font-size:small;" id="Helper:Auction Search Output">' +
			'</div>';
		// global parameters for the meta function generateManageTable
		FSH.Helper.param={};
		FSH.Helper.param={'id':'Helper:Auction Search Output',
			'headers':['Category','Nickname','Quick Search Text','Display in AH?'],
			'fields':['category','nickname','searchname','displayOnAH'],
			'tags':['textbox','textbox','textbox','checkbox'],
			'url':['','','index.php?cmd=auctionhouse&type=-1&search_text=@replaceme@',''],
			'currentItems':FSH.System.getValueJSON('quickSearchList'),
			'gmname':'quickSearchList',
			'sortField':'category',
			'categoryField':'category',
			'showRawEditor':true};
		FSH.lists.generateManageTable();
	},

	injectQuickLinkManager: function(content) { // Native

		if (!content) {content = FSH.Layout.notebookContent();}
		content.innerHTML=FSH.Layout.makePageTemplate('Quick Links','','','','quickLinkAreaId');

		// global parameters for the meta function generateManageTable
		FSH.Helper.param={};
		FSH.Helper.param={'id':'quickLinkAreaId',
			'headers':['Name','URL','New [<span style="cursor:pointer; text-decoration:underline;" title="Open page in a new window">?</span>]'],
			'fields':['name','url','newWindow'],
			'tags':['textbox','textbox','checkbox'],
			'currentItems':FSH.System.getValueJSON('quickLinks'),
			'gmname':'quickLinks',
			'showRawEditor':true};
		FSH.lists.generateManageTable();
	},

	generateManageTable: function() { // Native
		var i, j, result='<table cellspacing=2 cellpadding=2 style="table-layout: fixed; word-wrap: break-word;" width=100%><tr bgcolor=#CD9E4B>';
		var isArrayOnly= FSH.Helper.param.fields.length === 0;
		for (i=0;i<FSH.Helper.param.headers.length;i += 1) {
			result+='<th>'+FSH.Helper.param.headers[i]+'</th>';
		}
		result+='<th>Action</th></tr>';
		var currentCategory = '';
		for (i=0;i<FSH.Helper.param.currentItems.length;i += 1) {
			result+='<tr>';
			if (isArrayOnly) {
				result+='<td align=center>'+FSH.Helper.param.currentItems[i]+'</td>';
			} else {
				if (FSH.Helper.param.categoryField && currentCategory !== FSH.Helper.param.currentItems[i][FSH.Helper.param.categoryField]) {
					currentCategory = FSH.Helper.param.currentItems[i][FSH.Helper.param.categoryField];
					result += '<td><span style="font-weight:bold; font-size:large;">' + currentCategory + '</span></td></tr><tr>';
				}
				for (j=0;j<FSH.Helper.param.fields.length;j += 1) {
					result+='<td align=center class=content>';
					if (FSH.Helper.param.fields[j]!==FSH.Helper.param.categoryField){
						if (FSH.Helper.param.tags[j]==='checkbox'){
							result+='<input type=checkbox '+(FSH.Helper.param.currentItems[i][FSH.Helper.param.fields[j]]?'checked':'')+' disabled>';
						} else {
							if (FSH.Helper.param.url && FSH.Helper.param.url[j] !== ''){
								result+='<a href="'+FSH.Helper.param.url[j].replace('@replaceme@',FSH.Helper.param.currentItems[i][FSH.Helper.param.fields[j]])+'">'+
									FSH.Helper.param.currentItems[i][FSH.Helper.param.fields[j]]+'</a>';
							} else {
								result+=FSH.Helper.param.currentItems[i][FSH.Helper.param.fields[j]];
							}
						}
					result+='</td>';
					}
				}
			}
			result+='<td><span class=HelperTextLink itemId="' + i + '" id="Helper:DeleteItem' + i + '">[Del]</span></td></tr>';
		}
		result+='<tr>';
		if (isArrayOnly){
			result+='<td align=center><input type='+FSH.Helper.param.tags[i]+' class=custominput id=Helper:input0></td>';
		}
		else {
			for (i=0;i<FSH.Helper.param.tags.length;i += 1){
				result+='<td align=center><input type='+FSH.Helper.param.tags[i]+' class=custominput id=Helper:input'+FSH.Helper.param.fields[i]+'></td>';
			}
		}
		result+='<td><span class=HelperTextLink id="Helper:AddItem">[Add]</span></td></tr></table>';

		if (FSH.Helper.param.showRawEditor) {
			result+='<table width=100%><tr><td align=center><textarea cols=70 rows=20 name="Helper:rawEditor">' +
				JSON.stringify(FSH.Helper.param.currentItems) + '</textarea></td></tr>'+
				'<tr><td align=center><input id="Helper:saveRawEditor" type="button" value="Save" class="custombutton">'+
				'&nbsp;<input id="Helper:resetRawEditor" type="button" value="Reset" class="custombutton"></td></tr>'+
				'</tbody></table>';
		}

		document.getElementById(FSH.Helper.param.id).innerHTML = result;
		for (i=0;i<FSH.Helper.param.currentItems.length;i += 1) {
			document
				.getElementById('Helper:DeleteItem' + i)
				.addEventListener('click', FSH.lists.deleteQuickItem, true);
		}
		document.getElementById('Helper:AddItem').addEventListener('click', FSH.lists.addQuickItem, true);
		if (FSH.Helper.param.showRawEditor) {
			document.getElementById('Helper:saveRawEditor').addEventListener('click', FSH.lists.saveRawEditor, true);
			document.getElementById('Helper:resetRawEditor').addEventListener('click', FSH.lists.resetRawEditor, true);
		}

		FSH.System.setValueJSON(FSH.Helper.param.gmname, FSH.Helper.param.currentItems);
	},

	deleteQuickItem: function(evt) { // Native
		var itemId = evt.target.getAttribute('itemId');
		FSH.Helper.param.currentItems.splice(itemId, 1);
		FSH.lists.generateManageTable();
	},

	addQuickItem: function() { // Native
		var isArrayOnly= FSH.Helper.param.fields.length === 0;
		var newItem={};
		if (isArrayOnly) {
			newItem=document.getElementById('Helper:input0').value;
		} else {
			for (var i=0;i<FSH.Helper.param.fields.length;i += 1){
				if (FSH.Helper.param.tags[i]==='checkbox') {
					newItem[FSH.Helper.param.fields[i]] =
						document.getElementById('Helper:input' +
							FSH.Helper.param.fields[i]).checked;
				} else {
					newItem[FSH.Helper.param.fields[i]] =
						document.getElementById('Helper:input' +
							FSH.Helper.param.fields[i]).value;
				}
			}
		}
		FSH.Helper.param.currentItems.push(newItem);
		FSH.lists.generateManageTable();
	},

	saveRawEditor: function() { // jQuery
		FSH.Helper.param.currentItems =
			JSON.parse($('textarea[name="Helper:rawEditor"]').val());
		FSH.lists.generateManageTable();
	},

	resetRawEditor: function() { // Native
		if (location.search === '?cmd=notepad&blank=1&subcmd=auctionsearch') {
			FSH.Helper.param.currentItems =
				JSON.parse(FSH.Data.defaults.quickSearchList);
		} else {FSH.Helper.param.currentItems=[];}
		FSH.lists.generateManageTable();
	},

};

FSH.recipes = { // Legacy

	inventing: function() { // Native
		FSH.recipes.injectViewRecipe();
		FSH.recipes.injectInvent();
	},

	injectViewRecipe: function() { // Legacy
		var recipe = $('div#pCC table table b').first();
		var name = recipe.html();
		var searchName = recipe.html().replace(/ /g, '%20');
		recipe.html('<a href="http://guide.fallensword.com/index.php?cmd=' +
			'items&subcmd=view&search_name=' + searchName + '">' + name +
			'</a>');

		var components = FSH.System.findNodes('//b[.="Components Required"]/../../following-sibling::tr[2]//img');
		if (components) {
			for (var i = 0; i < components.length; i += 1) {
				var mo = components[i].getAttribute('data-tipped');
				FSH.System.xmlhttp(FSH.recipes.linkFromMouseoverCustom(mo), FSH.recipes.injectViewRecipeLinks, components[i]);
				var componentCountElement = components[i].parentNode.parentNode.parentNode.nextSibling.firstChild;
				componentCountElement.innerHTML = '<nobr>' + componentCountElement.innerHTML + '</nobr>';
			}
		}
	},

	linkFromMouseoverCustom: function(mouseOver) { // Native
		var reParams =/item_id=(\d+)\&inv_id=([-0-9]*)\&t=(\d+)\&p=(\d+)\&vcode=([a-z0-9]*)/i;
		var reResult =reParams.exec(mouseOver);
		if (reResult === null) {
			return null;
		}
		var itemId   = reResult[1];
		var invId    = reResult[2];
		var type     = reResult[3];
		var pid      = reResult[4];
		var vcode    = reResult[5];
		var theUrl   = 'fetchitem.php?item_id=' + itemId + '&inv_id=' + invId + '&t='+type + '&p=' + pid + '&vcode=' + vcode;
		theUrl = FSH.System.server + theUrl;
		return theUrl;
	},

	injectViewRecipeLinks: function(responseText, callback) { // Legacy
		var itemRE = /<b>([^<]+)<\/b>/i;
		var itemName = itemRE.exec(responseText);
		if (itemName) {itemName=itemName[1];}
		var plantFromComponent = FSH.Data.plantFromComponent[itemName] || itemName;
		if (itemName !== plantFromComponent) {
			var itemLinks = document.createElement('td');
			itemLinks.innerHTML = '<a href="' + FSH.System.server +
				'?cmd=auctionhouse&type=-1&order_by=1&search_text=' +
				encodeURI(plantFromComponent) + '">AH</a>';
			var counter=FSH.System.findNode('../../../../tr[2]/td', callback);
			counter.setAttribute('colspan', '2');
			callback.parentNode.parentNode.parentNode.appendChild(itemLinks);
		}
	},

	injectInvent: function(){ // Bad jQuery
		var selector = '<tr><td align="center">Select how many to quick ' +
			'invent<input value=1 id="invent_amount" name="invent_amount" ' +
			'size=3 class="custominput"></td></tr>' +
			'<tr><td align="center"><input id="quickInvent" value="Quick ' +
			'invent items" class="custombutton" type="submit"></td></tr>' + //button to invent
			//'<input type="hidden" id="recipe_id" value="'+ recipeID +'">'+
			'<tr><td colspan=6 align="center"><span id="invet_Result_label">' +
			'</span><ol id="invent_Result"></ol></td></tr>';
		//injectHere.parentNode.innerHTML+=selector;
		$('input[name="recipe_id"]').closest('tbody').append(selector);
		document.getElementById('quickInvent').addEventListener('click',
			FSH.recipes.quickInvent, true);

	},

	quickInvent: function() { // Legacy
		var amountToInvent = $('#invent_amount').attr('value');
		var recipeID = $('input[name="recipe_id"]').attr('value');
		$('#invet_Result_label').html('Inventing ' + amountToInvent + ' Items');
		for (var i = 0; i < amountToInvent; i += 1) {
			//Had to add &fsh=i to ensure that the call is sent out multiple times.
			FSH.System.xmlhttp(
				'index.php?cmd=inventing&subcmd=doinvent&recipe_id=' +
				recipeID + '&fsh=' + i, FSH.recipes.quickInventDone);
		}
	},

	quickInventDone: function(responseText) { // jQuery
		var infoMessage = FSH.Layout.infoBox(responseText);
		$('#invent_Result').append('<li style="list-style:decimal">' +
			infoMessage + '</li>');
	},

};

FSH.quickWear = { // Legacy

	insertQuickWear: function(content) { // Legacy
		FSH.Helper.itemList = {};
		if (!content) {content=FSH.Layout.notebookContent();}
		content.innerHTML='Getting item list from: ';
		FSH.System.xmlhttp('/index.php?cmd=profile&subcmd=dropitems&folder_id=-1', FSH.quickWear.getItemFromBackpack, {'inject':content,'id':0});
	},

	getItemFromBackpack: function(responseText, callback) { // Legacy
		var layout=callback.inject;
		layout.innerHTML+='</br>backpack folder '+(callback.id+1)+', ';
		var doc=FSH.System.createDocument(responseText);
		if (responseText.indexOf('Back to Profile') > 0){
			FSH.quickWear.retrieveItemInfor(doc);
		}

		//~ FSH.quickWear.showQuickWear(callback);

		var folderNodes=FSH.System.findNodes('//a[contains(@href,"cmd=profile&subcmd=dropitems&folder_id=")]',doc);
		if (folderNodes && folderNodes.length > 0 && callback.id < folderNodes.length - 1) {
			FSH.System.xmlhttp(folderNodes[callback.id+1].getAttribute('href'),
				FSH.quickWear.getItemFromBackpack, {'inject':layout,'id':callback.id+1});
		} else {
			FSH.System.xmlhttp('/index.php?cmd=guild&subcmd=inventory&subcmd2=storeitems',
				FSH.quickWear.getItemFromStoreItemPage, callback);
		}
	},

	getItemFromStoreItemPage: function(responseText, callback) { // Native
		var layout=callback.inject;
		layout.innerHTML+='store item page.';
		var doc=FSH.System.createDocument(responseText);
		if (responseText.indexOf('Store Items') > 0){
			FSH.quickWear.retrieveItemInfor(doc);
		}
		FSH.quickWear.showQuickWear(callback);
	},

	retrieveItemInfor: function(doc) { // jQuery
		$('div#pCC input[name="removeIndex[]"]', doc).each(function(){
			var input = $(this);
			input.closest('tr').find('img').attr('width', '30')
				.attr('height', '30');
			var item={
				'id': input.attr('value'),
				'html': input.closest('tr').html().replace(/<input[^>]*>/g, '')
				};
			FSH.Helper.itemList['id'+item.id]=item;
		});
	},

	showQuickWear: function(callback) { // Native
		var itemID;
		var output='<div id="invTabs"><ul>'+
			'<li><a href="#invTabs-qw">Quick Wear / Use / Extract <br/>Manager</a></li>'+
			'<li><a href="#invTabs-ah">Inventory Manager Counter<br/>filtered by AH Quick Search</a></li></ul>'+
			'<div id="invTabs-qw"><table width=100%><tr style="background-color:#CD9E4B;"><td nobr><b>Quick Wear / Use / Extract Manager</b></td></tr></table>'+
			'<table width=100%><tr><th width=20%>Actions</th><th colspan=4>Items</th></tr>';
		for (var key in FSH.Helper.itemList) {
			if (!FSH.Helper.itemList.hasOwnProperty(key)) {continue;}
			itemID=FSH.Helper.itemList[key].id;
			output+='<tr><td align=center>'+
				'<span style="cursor:pointer; text-decoration:underline; color:#blue; font-size:x-small;" '+
				'id="Helper:equipProfileInventoryItem' + itemID + '" ' +
				'itemID="' + itemID + '">Wear</span>&nbsp;|&nbsp;' +
				'<span style="cursor:pointer; text-decoration:underline; color:#blue; font-size:x-small;" '+
				'id="Helper:useProfileInventoryItem' + itemID + '" ' +
				'itemID="' + itemID + '">Use/Ext</span>'+
				'</td>'+FSH.Helper.itemList[key].html+'</tr>';
		}
		output+='</table></div><div id="invTabs-ah"></div></div>';
		callback.inject.innerHTML=output;
		for (key in FSH.Helper.itemList) {
			if (!FSH.Helper.itemList.hasOwnProperty(key)) {continue;}
			itemID=FSH.Helper.itemList[key].id;
			document.getElementById('Helper:equipProfileInventoryItem' + itemID).
				addEventListener('click', FSH.common.equipProfileInventoryItem, true);
			document.getElementById('Helper:useProfileInventoryItem' + itemID).
				addEventListener('click', FSH.quickWear.useProfileInventoryItem, true);
		}
		$('#invTabs').tabs();
		$('#invTabs').tabs('select', 0);
		FSH.quickWear.showAHInvManager('#invTabs-ah');
	},

	useProfileInventoryItem: function(evt) { // Legacy
		if (!window.confirm('Are you sure you want to use/extract the item?')) {return;}
		var InventoryItemID=evt.target.getAttribute('itemID');
		FSH.System.xmlhttp('index.php?cmd=profile&subcmd=useitem&inventory_id=' + InventoryItemID,
			function(responseText) {
				var info = FSH.Layout.infoBox(responseText);
				if (!info) {info = '<font color=red>Error</font>';}
				evt.target.parentNode.innerHTML = info;
			});
	},

	showAHInvManager: function(injectId) { // Bad jQuery
		var output = '<table width=100% cellspacing=2 cellpadding=2>'+
			'<tr><th colspan=5 align=center>Items from <a href="index.php?cmd=notepad&blank=1&subcmd=auctionsearch">AH Quick Search</a> found in your inventory</td>'+
			'<tr><th>Name</th><th>Nick Name<th>Inv Count</th><th>AH Min Price</th><th>AH BuyNow Price</th></tr>';
		var invCount = {};
		var name;
		var key;
		var i;
		var quickSL = FSH.System.getValueJSON('quickSearchList');
		// fill up the Inv Counter
		for (key in FSH.Helper.itemList) {
			if (!FSH.Helper.itemList.hasOwnProperty(key)) {continue;}
			name = FSH.Helper.itemList[key].html.match(/<td width="90%">&nbsp;(.*)<\/td>/)[1];
			if (invCount[name]) {
				invCount[name].count+= 1;
			} else {
				invCount[name]={'count':1,'nicknameList':''};
			}
			for (i = 0; i<quickSL.length; i += 1) {
				if (name.indexOf(quickSL[i].searchname) >= 0 &&
					invCount[name]
						.nicknameList
						.indexOf(quickSL[i].nickname) < 0) {
					invCount[name].nicknameList += '<a href=\'index.php?cmd=' +
						'auctionhouse&type=-1&search_text=' +
						quickSL[i].searchname + '\'>' + quickSL[i].nickname +
						'</a> ';
					quickSL[i].found = true;
				}
			}
		}
		// show inv & counter for item with nickname found
		for (key in invCount) {
			if (invCount[key].nicknameList !== '') {
				output += '<tr><td>' + key + '</td><td>' +
					invCount[key].nicknameList + '</td><td>' +
					invCount[key].count +
					'</td><td></td><td></td><td></td></tr>';
			}
		}
		// show item from quick AH search that are not in our inv
		output += '</td></tr><tr><td colspan=5><hr></td></tr>';
		output += '<tr><td>Did not find:</td><td colspan=4>';
		for (i=0; i<quickSL.length; i += 1) {
			if (quickSL[i].displayOnAH && !quickSL[i].found) {
				output += '<a href=\'index.php?cmd=auctionhouse&type=-1&' +
					'search_text=' + quickSL[i].searchname + '\'>' + 
					quickSL[i].nickname+'</a>, ';
			}
		}
		output += '</td></tr><tr><td colspan=5><hr></td></tr>'+
			'<tr><th colspan=5 align=center>Items NOT from <a href="index.php?cmd=notepad&blank=1&subcmd=auctionsearch">AH Quick Search</a> found in your inventory</td>';
		// show inv & counter for item with nickname NOT found
		for (key in invCount) {
			if (invCount[key].nicknameList === '') {
				output += '<tr><td>' + key + '</td><td>' +
				invCount[key].nicknameList + '</td><td>' +
				invCount[key].count + '</td><td></td><td></td><td></td></tr>';
			}
		}
		output += '</table>';
		$(injectId).html(output);
	},

};

FSH.common = { // Legacy

	equipProfileInventoryItem: function(evt) { // Legacy
		var InventoryItemID=evt.target.getAttribute('itemID');
		FSH.System.xmlhttp('index.php?cmd=profile&subcmd=equipitem&inventory_id=' + InventoryItemID,
			FSH.common.equipProfileInventoryItemReturnMessage,
			{'item': InventoryItemID, 'target': evt.target});
	},

	equipProfileInventoryItemReturnMessage: function(responseText, callback) { // Native
		var target = callback.target;
		var info = FSH.Layout.infoBox(responseText);
		var itemCellElement = target.parentNode; //FSH.System.findNode('//td[@title="' + itemID + '"]');
		if (!info) {
			itemCellElement.innerHTML = '<span style="color:green; font-weight:bold;">Worn</span>';
		} else {
			itemCellElement.innerHTML = '<span style="color:red; font-weight:bold;">Error:' + info + '</span>';
		}
	},

	addStatTotalToMouseover: function() { // jQuery
		if (!FSH.System.getValue('showStatBonusTotal')) {return;}
		$(document).ajaxSuccess(function(evt, xhr, ajax, data) {
			if (ajax.url.indexOf('fetchitem') !== 0) {return;}
			var img = $('[data-tipped="' + ajax.url + '"]');
			if (img.length === 0) {return;}
			var repl = $(data);
			var bonus = $('font:contains("Bonuses")', repl);
			if (bonus.length === 0) {return;}
			bonus.each(function() {
				var statTable = $(this).closest('tr')
					.nextUntil('tr:contains("Enhance")');
				var attackStatElement = $('td:contains("Attack:")', statTable);
				var defenseStatElement = $('td:contains("Defense:")', statTable);
				var armorStatElement = $('td:contains("Armor:")', statTable);
				var damageStatElement = $('td:contains("Damage:")', statTable);
				var hpStatElement = $('td:contains("HP:")', statTable);
				var totalStats = (attackStatElement.length > 0 ? attackStatElement
					.next().text().replace(/\+/g,'') * 1 : 0) +
					(defenseStatElement.length > 0 ? defenseStatElement.next()
					.text().replace(/\+/g,'') * 1 : 0) +
					(armorStatElement.length > 0 ? armorStatElement.next().text()
					.replace(/\+/g,'') * 1 : 0) +
					(damageStatElement.length > 0 ? damageStatElement.next().text()
					.replace(/\+/g,'') * 1 : 0) +
					(hpStatElement.length > 0 ? hpStatElement.next().text()
					.replace(/\+/g,'') * 1 : 0);
				statTable.last().before('<tr style="color:DodgerBlue;"><td>' +
					'Stat Total:</td><td align="right">' + totalStats +
					'&nbsp;</td></tr>'
				);
			});
			img.qtip('option', 'content.text', $('<div/>').append(repl).html());
		});
	},

};

FSH.onlinePlayers = { // Bad jQuery

	injectOnlinePlayers: function(content) { // jQuery
		FSH.Helper.context = content ? $(content) : $('div#pCC');
		FSH.Helper.appendHead({
			js: [FSH.dataTablesLoc],
			callback: FSH.onlinePlayers.injectOnlinePlayersNew
		});
	},

	injectOnlinePlayersNew: function () { // jQuery
		var lastCheck = FSH.System.getValue('lastOnlineCheck');
		var now = Date.now();
		var refreshButton;
		if (now - lastCheck > 300000) {
			refreshButton = '<span> (takes a while to refresh so only do it ' +
				'if you really need to) </span><span id="fshRefresh"' +
				'>[Refresh]</span>';
		} else {
			refreshButton = '<span>[ Wait ' + Math.round(300 - (now -
				lastCheck) / 1000) +'s ]</span>';
		}
		FSH.Helper.context.html(
			'<span><b>Online Players</b></span>' + refreshButton +
			'<div id="fshOutput"></div>');
		FSH.ajax.getForage('fsh_onlinePlayers').done(function(value) {
			FSH.Helper.onlinePlayers = value || {};
			FSH.onlinePlayers.gotOnlinePlayers();
		});
	},

	gotOnlinePlayers: function() { // jQuery
		FSH.onlinePlayers.buildOnlinePlayerData();
		FSH.onlinePlayers.dataTableSearch();
		FSH.onlinePlayers.filterHeaderOnlinePlayers();

		var table = $('#fshInv', FSH.Helper.context).dataTable({ // context
			data: FSH.Helper.onlineData,
			pageLength: 30,
			lengthMenu: [[30, 60, -1], [30, 60, 'All']],
			columns: [
				{title: 'Guild', class: 'dt-center', orderable: false},
				{title: 'Name', class: 'dt-center'},
				{title: 'Level', class: 'dt-center'},
				{title: 'Page/Index', class: 'dt-center'}
			],
			createdRow: function(row, data) {
				if (FSH.Helper.highlightPlayersNearMyLvl &&
					Math.abs(FSH.System.intValue(data[2]) - FSH.Helper.levelToTest) <=
					FSH.Helper.lvlDiffToHighlight) {
					$('td', row).eq(2).addClass('lvlHighlight');
				}
			},
			order: [3, 'desc']
		}).api();

		FSH.onlinePlayers.doOnlinePlayerEventHandlers(table);
	},

	buildOnlinePlayerData: function() { // jQuery
		FSH.Helper.onlineData = [];
		Object.keys(FSH.Helper.onlinePlayers).forEach(function(player) {
			var guildImage = $('<div/>')
				.append(FSH.Helper.onlinePlayers[player][0]);
			$('img', guildImage).addClass('center');
			FSH.Helper.onlineData.push([
				guildImage.html(),
				FSH.Helper.onlinePlayers[player][1],
				FSH.Helper.onlinePlayers[player][2],
				FSH.Helper.onlinePlayers[player][3] * 100 +
				FSH.Helper.onlinePlayers[player][4] + 1,
			]);
		});
	},

	dataTableSearch: function() { // jQuery
		/* Custom filtering function which will search data in column three between two values */
		$.fn.dataTable.ext.search.push(
			function(_settings, data) {
				var min = parseInt($('#fshMinLvl', FSH.Helper.context).val(), 10); // context
				var max = parseInt($('#fshMaxLvl', FSH.Helper.context).val(), 10); // context
				if (!isNaN(min)) {FSH.System.setValue('onlinePlayerMinLvl', min);}
				if (!isNaN(max)) {FSH.System.setValue('onlinePlayerMaxLvl', max);}
				var level = FSH.System.intValue(data[2]) || 0; // use data for the level column
				if (isNaN(min)   && isNaN(max)   ||
					isNaN(min)   && level <= max ||
					min <= level && isNaN(max)   ||
					min <= level && level <= max )
				{return true;}
				return false;
			}
		);
	},

	filterHeaderOnlinePlayers: function() { // jQuery
		FSH.Helper.highlightPlayersNearMyLvl =
			FSH.System.getValue('highlightPlayersNearMyLvl');
		FSH.Helper.lvlDiffToHighlight = 10;
		FSH.Helper.levelToTest = FSH.System.intValue($('dt.stat-level:first')
			.next().text());
		var characterVirtualLevel = FSH.System.getValue('characterVirtualLevel');
		if (characterVirtualLevel) {FSH.Helper.levelToTest = characterVirtualLevel;}
		if (FSH.Helper.levelToTest <= 205) {FSH.Helper.lvlDiffToHighlight = 5;}
		$('div#fshOutput', FSH.Helper.context).html( // context
			'<div align=right>' +
			'Min lvl:<input value="' + FSH.System.getValue('onlinePlayerMinLvl') +
				'" size=5 id="fshMinLvl" /> ' +
			'Max lvl:<input value="' + FSH.System.getValue('onlinePlayerMaxLvl') +
				'" size=5 id="fshMaxLvl" /> ' +
			'<input id="fshReset" type="button" value="Reset"/>' +
			'</div><table id="fshInv" class="stripe hover"></table>');
	},

	doOnlinePlayerEventHandlers: function(table) { // jQuery
		$('span#fshRefresh', FSH.Helper.context).click(function() {
			$('span#fshRefresh', FSH.Helper.context).hide();
			FSH.Helper.onlinePages = 0;
			FSH.Helper.onlinePlayers = {};
			$.get('index.php?cmd=onlineplayers&page=1',
				FSH.onlinePlayers.getOnlinePlayers);
			FSH.System.setValue('lastOnlineCheck', Date.now());
			$('div#fshOutput', FSH.Helper.context)
				.append('Parsing online players...'); // context
		});
		$('#fshMinLvl, #fshMaxLvl', FSH.Helper.context).keyup(function() {
				table.draw();}); // context
		$('#fshReset', FSH.Helper.context).click(function() { // context
			FSH.System.setValue('onlinePlayerMinLvl',
				FSH.Data.defaults.onlinePlayerMinLvl);
			FSH.System.setValue('onlinePlayerMaxLvl',
				FSH.Data.defaults.onlinePlayerMaxLvl);
			$('#fshMinLvl', FSH.Helper.context).val(
				FSH.Data.defaults.onlinePlayerMinLvl); // context
			$('#fshMaxLvl', FSH.Helper.context).val(
				FSH.Data.defaults.onlinePlayerMaxLvl); // context
			table.draw();
		});
	},

	getOnlinePlayers: function(data) { // Bad jQuery
		$('div#fshOutput', FSH.Helper.context).append(' ' +
			(FSH.Helper.onlinePages + 1)); // context
		var doc = FSH.System.createDocument(data);
		var input = $('div#pCC input.custominput', doc).first();
		var thePage = input.attr('value');
		var theRows = $('div#pCC img[src$="/skin/icon_action_view.gif',
			doc).parent().parent().parent();
		theRows.each(function(index) {
			var tds = $('td', $(this));
			var player = tds.eq(1).text();
			if (FSH.Helper.onlinePlayers[player] &&
				FSH.Helper.onlinePlayers[player][3] > thePage) {return;}
			FSH.Helper.onlinePlayers[player] = [
				tds.eq(0).html(),
				tds.eq(1).html(),
				tds.eq(2).text(),
				thePage,
				index
			];
		});
		FSH.Helper.onlinePages += 1;
		if (FSH.Helper.onlinePages === 1) {
			input = input.parent().text();
			FSH.Helper.lastPage = parseInt(input.match(/(\d+)/g)[0], 10);
			for (var i = 2; i <= FSH.Helper.lastPage; i += 1) {
				$.get('index.php?cmd=onlineplayers&page=' + i,
					FSH.onlinePlayers.getOnlinePlayers);
			}
		} else if (FSH.Helper.onlinePages === FSH.Helper.lastPage) {
			FSH.ajax.setForage('fsh_onlinePlayers', FSH.Helper.onlinePlayers);
			FSH.onlinePlayers.gotOnlinePlayers();
		}
	},

};

FSH.dropItems = { // Legacy

	injectProfileDropItems: function() { // Native
		FSH.dropItems.injectDropItems();
		FSH.dropItems.injectMoveItems();
	},

	injectDropItems: function() { // Legacy
		FSH.common.addStatTotalToMouseover();
		// prevent multiple calls to local storage
		FSH.Helper.disableItemColoring = FSH.System.getValue('disableItemColoring');

		var subPage2Id = FSH.System.findNode('//input[@type="hidden" and @name="subcmd2"]');
		subPage2Id = subPage2Id ? subPage2Id.getAttribute('value') : '-';
		var mainTable = FSH.System.findNode('//table[tbody/tr/td/table/tbody/tr/td/input[@name="storeIndex[]"]]');
		var showExtraLinks = FSH.System.getValue('showExtraLinks');
		var showQuickDropLinks = FSH.System.getValue('showQuickDropLinks');
		var showQuickSendLinks = FSH.System.getValue('showQuickSendLinks');
		if (mainTable) {
			var insertHere = mainTable.rows[5].cells[0];
			insertHere.innerHTML += '[<span style="cursor:pointer; text-decoration:underline; color:blue;" id="Helper:showExtraLinks">' +
				(showExtraLinks?'Hide':'Show') + ' AH and Sell links</span>]&nbsp;';
			insertHere.innerHTML += '[<span style="cursor:pointer; text-decoration:underline; color:blue;" id="Helper:showQuickDropLinks">' +
				(showQuickDropLinks?'Hide':'Show') + ' Quick Drop links</span>]&nbsp;';
			if (subPage2Id && subPage2Id === 'dostoreitems') {
				insertHere.innerHTML += '[<span style="cursor:pointer; text-decoration:underline; color:blue;" id="Helper:selectAllGuildLocked">' +
					' Select All Guild Locked</span>]&nbsp;';
				document.getElementById('Helper:selectAllGuildLocked').addEventListener('click', FSH.dropItems.selectAllGuildLocked, true);
			}
			document.getElementById('Helper:showExtraLinks').addEventListener('click', FSH.dropItems.toggleShowExtraLinks, true);
			document.getElementById('Helper:showQuickDropLinks').addEventListener('click', FSH.dropItems.toggleShowQuickDropLinks, true);
		}

		var i;
		var anItem;
		var theImgElement;
		var itemStats;
		var itemId;
		//function to add links to all the items in the drop items list
		var itemName;
		var itemInvId;
		var theTextNode;
		var allItems=FSH.System.findNodes('//input[@type="checkbox"][@name="removeIndex[]" or @name="storeIndex[]"]');
		if (allItems) {
			for (i=0; i<allItems.length; i += 1) {
				anItem = allItems[i];
				itemInvId = anItem.value;
				theTextNode = FSH.System.findNode('../../td[3]', anItem);
				theImgElement = FSH.System.findNode('../../td[2]', anItem).firstChild.firstChild;
				itemStats = /fetchitem.php\?item_id=(\d+)\&inv_id=(\d+)\&t=(\d+)\&p=(\d+)/.exec($(theImgElement).data('tipped'));
				if (itemStats) {
					itemId = itemStats[1];
					//~ invId = itemStats[2];
					//~ type = itemStats[3];
					//~ pid = itemStats[4];
				}
				itemName = theTextNode.textContent.trim().replace('\\','');
				theTextNode.textContent = itemName;
				var findItems = FSH.System.findNodes('//td[@width="90%" and ' +
					'contains(.,"' + itemName + '")]');
				var preText = '';
				var postText1 = '';
				var postText2 = '';
				var postText3 = '';
				if (showExtraLinks) {
					preText = '<span findme="AH">[<a href="' + FSH.System.server +
						'?cmd=auctionhouse&type=-1&order_by=1&search_text=' +
						encodeURI(itemName) + '">AH</a>]</span> ' +
						//~ '<span findme="Sell">[<a href="' + FSH.System.server +
						//~ 'index.php?cmd=auctionhouse&subcmd=create2' +
						//~ '&inv_id=' + itemInvId  + '">Sell</a>]</span>' +
						'[<a href="http://guide.fallensword.com/index.php?' +
						'cmd=items&subcmd=view' + '&item_id=' + itemId +
						'" target="_blank">UFSG</a>] ';
				}
				postText1 = findItems.length>1?' [<span findme="checkall" linkto="' +
					itemName +
					'" style="text-decoration:underline;cursor:pointer">Check all</span>]':'';
				if (showQuickDropLinks) {
					postText2 = '&nbsp;<span title="INSTANTLY DROP THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." id="Helper:QuickDrop' +
						itemInvId +
						'" itemInvId=' +
						itemInvId +
						' findme="QuickDrop" style="color:red; cursor:pointer; text-decoration:underline;">[Quick Drop]</span> ';
				}
				if (showQuickSendLinks) {
					postText3 = '&nbsp;<span title="INSTANTLY SENDS THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." id="Helper:QuickSend' +
						itemInvId +
						'" itemInvId=' +
						itemInvId +
						' findme="QuickSend" style="color:blue; cursor:pointer; text-decoration:underline;">[Quick Send]</span> ';
				}

				theTextNode.innerHTML = preText +
					theTextNode.innerHTML +
					postText1 +
					postText2 +
					postText3;
				if (showQuickDropLinks) {
					document.getElementById('Helper:QuickDrop'+itemInvId).addEventListener('click', FSH.dropItems.quickDropItem, true);
				}
				if (showQuickSendLinks) {
					document.getElementById('Helper:QuickSend'+itemInvId).addEventListener('click', FSH.dropItems.quickSendItem, true);
				}
			}
		}

		var checkAllElements = FSH.System.findNodes('//span[@findme="checkall"]');
		var checkAllElement;
		if (checkAllElements) {
			for (i=0; i<checkAllElements.length; i += 1) {
				checkAllElement = checkAllElements[i];
				itemName = checkAllElement.linkto;
				checkAllElement.addEventListener('click', FSH.dropItems.checkAll, true);
			}
		}

		FSH.dropItems.getQTip($('div#pCC table table img.tip-dynamic'),
			FSH.dropItems.injectDropItemsPaint);

	},

	selectAllGuildLocked: function() { // Legacy
		var allGuildLockedItems = FSH.System.findNodes('//span[@id="guildLocked"]');
		if (allGuildLockedItems) {
		for (var i = 0; i < allGuildLockedItems.length; i += 1) {
			var cbNode = FSH.System.findNode('../../td/input[@type="checkbox"][@name="removeIndex[]" or @name="storeIndex[]"]', allGuildLockedItems[i]);
			cbNode.checked = true;
		}
		}
	},

	toggleShowExtraLinks: function() { // Legacy
		var showExtraLinksElement = FSH.System.findNode('//span[@id="Helper:showExtraLinks"]');
		if (showExtraLinksElement.textContent === 'Show AH and Sell links') {
			FSH.System.setValue('showExtraLinks', true);
		} else {
			FSH.System.setValue('showExtraLinks', false);
		}
		location.reload();
	},

	toggleShowQuickDropLinks: function() { // Legacy
		var showQuickDropLinksElement = FSH.System.findNode('//span[@id="Helper:showQuickDropLinks"]');
		if (showQuickDropLinksElement.textContent === 'Show Quick Drop links' &&
			window.confirm('Are you sure you want to show the quick drop ' +
			'links?')) {
			FSH.System.setValue('showQuickDropLinks', true);
		} else {
			FSH.System.setValue('showQuickDropLinks', false);
		}
		location.reload();
	},

	quickDropItem: function(evt){ // Legacy
		var itemInvId = evt.target.getAttribute('itemInvId');
		var dropItemHref = FSH.System.server + 'index.php?cmd=profile&subcmd=dodropitems&removeIndex[]=' + itemInvId;
		FSH.System.xmlhttp(dropItemHref,
			FSH.dropItems.quickDropItemReturnMessage,
			{'target': evt.target, 'url': dropItemHref});
	},

	quickDropItemReturnMessage: function(responseText, callback) { // Native
		var target = callback.target;
		var info = FSH.Layout.infoBox(responseText);
		target.style.cursor = 'default';
		target.style.textDecoration = 'none';
		if (info.search('Items dropped and destroyed.') !== -1) {
			target.style.color = 'green';
			target.style.fontWeight = 'bold';
			target.style.fontSize = 'small';
			target.innerHTML = 'Item Dropped';
		} else if (info!=='') {
			target.style.color = 'red';
			target.style.fontWeight = 'bold';
			target.style.fontSize = 'small';
			target.innerHTML = 'Error: ' + info;
		} else {
			target.style.color = 'red';
			target.style.fontSize = 'small';
			target.innerHTML = 'Weird Error: check the Tools>Error Console';
			console.log('Post the previous HTML and the following message to the GitHub or to the forum to help us debug this error');
			console.log(callback.url);
		}
	},

	quickSendItem: function(evt){ // Legacy
		var itemInvId = evt.target.getAttribute('itemInvId');
		var xcNum = FSH.System.getValue('goldConfirm');
		var itemRecipient = FSH.System.getValue('itemRecipient');
		var sendItemHref = FSH.System.server +
			'index.php?cmd=trade&subcmd=senditems&xc=' + xcNum +
			'&target_username=' + itemRecipient + '&sendItemList[]=' + itemInvId;
		FSH.System.xmlhttp(sendItemHref,
			FSH.dropItems.quickSendItemReturnMessage,
			{'target': evt.target, 'url': sendItemHref});
	},

	quickSendItemReturnMessage: function(responseText, callback) { // Native
		var target = callback.target;
		var info = FSH.Layout.infoBox(responseText);
		var itemRecipient = FSH.System.getValue('itemRecipient');
		target.style.cursor = 'default';
		target.style.textDecoration = 'none';
		if (info==='Items sent successfully!') {
			target.style.color = 'green';
			target.style.fontWeight = 'bold';
			target.style.fontSize = 'small';
			target.innerHTML = 'Item sent to ' + itemRecipient + '!';
		} else if (info!=='') {
			target.style.color = 'red';
			target.style.fontWeight = 'bold';
			target.style.fontSize = 'small';
			target.innerHTML = 'Error: ' + info;
		} else {
			target.style.color = 'red';
			target.style.fontSize = 'small';
			target.innerHTML = 'Weird Error: check the Tools>Error Console';
			console.log('Post the previous HTML and the following message to the GitHub or to the forum to help us debug this error');
			console.log(callback.url);
		}
	},

	checkAll: function(evt){ // Legacy
		var itemName = evt.target.getAttribute('linkto');
		var findItems = FSH.System.findNodes('//td[@width="90%" and contains(.,"] '+itemName+' [")]');
		for (var i=0; i<findItems.length; i += 1) {
			var item = findItems[i];
			var checkboxForItem = item.previousSibling.previousSibling.firstChild;
			if (checkboxForItem.checked) {
				checkboxForItem.checked = false;
			} else {
				checkboxForItem.checked = true;
			}

		}
	},

	getQTip: function(images, fn) { // jQuery
		images.qtip({
			overwrite: false,
			show: {
				event: 'mouseenter',
				ready: false
			},
			style: {classes: 'qtip-tipsy qtip-custom'},
			position: {
				my: 'center right',
				at: 'center left',
				effect: false,
				viewport: $(window)
			},
			content: {
				text: function(event, api) {
					$.ajax({
						url: $(this).data('tipped') // Use data-url attribute for the URL
					})
						.then(function(content) {
							// Set the tooltip content upon successful retrieval
							api.set('content.text', content);
							fn(content, api.target[0]);
						}, function(xhr, status, error) {
							// Upon failure... set the tooltip content to the status and error value
							api.set('content.text', status + ': ' + error);
						});
					return 'Loading...'; // Set some initial text
				}
			},
			hide: {effect: false}
		});
		images.qtip('show');
		images.qtip('hide');
	},

	injectDropItemsPaint: function(responseText, callback) { // Legacy
		var textNode = FSH.System.findNode('../../../td[3]', callback);
		// var auctionHouseLink = FSH.System.findNode('span[@findme="AH"]', textNode);
		// var sellLink=FSH.System.findNode('span[@findme="Sell"]', textNode);
		var quickDropLink = FSH.System.findNode('span[@findme="QuickDrop"]',
			textNode);
		var quickSendLink = FSH.System.findNode('span[@findme="QuickSend"]',
			textNode);
		//~ var guildLockedRE = /<center>Guild Locked: <font color='#00FF00'>/i;
		var guildLockedRE = /<center>\s*Guild Locked:\s*<font color="#00FF00">/;

		if (guildLockedRE.exec(responseText)) {
			// if (auctionHouseLink) {auctionHouseLink.style.visibility='hidden';}
			// if (sellLink) {sellLink.style.visibility='hidden';}
			if (quickDropLink) {quickDropLink.style.visibility='hidden';}
			textNode.innerHTML += '<span id="guildLocked" visibility="hidden"/>';
		}
		//<font color='cyan'>Bound (Non-Tradable)</font></b> <font color='orange'>Quest Item </font></center>
		var boundItemRE = /Bound \(Non-Tradable\)/i;
		if (boundItemRE.exec(responseText)) {
			// if (auctionHouseLink) {auctionHouseLink.style.visibility='hidden';}
			// if (sellLink) {sellLink.style.visibility='hidden';}
			// if (quickDropLink) quickDropLink.style.visibility='hidden';
			if (quickSendLink) {quickSendLink.style.visibility='hidden';}
		}
		if (FSH.Helper.disableItemColoring) {return;}
		var fontLineRE=/<nobr><font color='(#[0-9A-F]{6})' size=2>/i;
		var fontLineRX=fontLineRE.exec(responseText);
		var color=fontLineRX[1];
		if (color==='#FFFFFF') {
			var fontLineRE2=/<br>\s*<font color='([a-z]+)'>/i;
			var fontLineRX2=fontLineRE2.exec(responseText);
			if (fontLineRX2) {
				color=fontLineRX2[1];
			}
		}
		if (color==='#40FFFF') {color='#00A0A0';}
		if (color==='orange') {color='#FF6000';}
		if (color==='#00FF00') {color='#00B000';}
		textNode.style.color=color;
	},

	injectMoveItems: function() { // Bad jQuery
		var foldersEnabled = $('img[src$="/folder_on.gif"]');
		if (foldersEnabled.length !== 1) {return;}
		var otherFolders = $('div#pCC a').has('img[src$="/folder.gif"]');
		if (otherFolders.length === 0) {return;}
		var select = $('<select name=folder id=selectFolderId class=' +
			'customselect></select>');
		otherFolders.each(function() {
			var self = $(this);
			select.append('<option value=' + self.attr('href')
			.match(/&folder_id=(-*\d+)/i)[1] + '>' +
			self.parent().text() + '</option>');
		});
		$('div#pCC tr').has(otherFolders[0]).first().after($('<tr/>')
			.append($('<td class="fshCenter">Move selected items to: </td>')
				.append(select)
				.append('&nbsp;<input type="button" class="custombutton"' +
					' id="fshMove" value="Move">')));
		$('input#fshMove').click(FSH.dropItems.moveItemsToFolder);
	},

	moveItemsToFolder: function() { // Bad jQuery
		var invList = [];
		$('input[name="removeIndex[]"]:checked').each(function(i) {
			var batchNo = Math.floor(i / 50);
			invList[batchNo] = invList[batchNo] || [];
			invList[batchNo].push($(this).val());
		});
		FSH.Helper.moveItemsCallback = invList.length;
		invList.forEach(function(val) {
			$.ajax({
				dataType: 'json',
				url: 'index.php',
				data: {
					'cmd': 'profile',
					'subcmd': 'sendtofolder',
					'inv_list': JSON.stringify(val),
					'folder_id': $('#selectFolderId option:selected').val(),
					'ajax': 1
				},
				success: function() {
					FSH.Helper.moveItemsCallback -= 1;
					if (FSH.Helper.moveItemsCallback === 0) {location.reload();}
				}
			});
		});
	},

};

FSH.questBook = { // Legacy

	injectQuestBookFull: function() { // Legacy

		var lastQBPage = location.search;
		if (lastQBPage.indexOf('&mode=0') !== -1) {
			FSH.System.setValue('lastActiveQuestPage', lastQBPage);
		} else if (lastQBPage.indexOf('&mode=1') !== -1) {
			FSH.System.setValue('lastCompletedQuestPage', lastQBPage);
		} else if (lastQBPage.indexOf('&mode=2') !== -1) {
			FSH.System.setValue('lastNotStartedQuestPage', lastQBPage);
		}
		if (FSH.System.getValue('storeLastQuestPage')) {
			if (FSH.System.getValue('lastActiveQuestPage').length > 0) {
				var activeLink = $('a[href*="index.php?cmd=questbook&mode=0"]');
				activeLink.attr('href', FSH.System.getValue('lastActiveQuestPage'));
			}
			if (FSH.System.getValue('lastCompletedQuestPage').length > 0) {
				var completedLink = $('a[href*="index.php?cmd=questbook&mode=1"]');
				completedLink.attr('href', FSH.System.getValue('lastCompletedQuestPage'));
			}
			if (FSH.System.getValue('lastNotStartedQuestPage').length > 0) {
				var notStartedLink = $('a[href*="index.php?cmd=questbook&mode=2"]');
				notStartedLink.attr('href', FSH.System.getValue('lastNotStartedQuestPage'));
			}
		}

		var questTable = FSH.System.findNode('//table[tbody/tr/td[.="Guide"]]');
		if (!questTable) {return;}
		var hideQuests=[];
		if (FSH.System.getValue('hideQuests')) {
			hideQuests=FSH.System.getValue('hideQuestNames').split(',');}
		for (var i=0;i<questTable.rows.length;i += 1) {
			var aRow = questTable.rows[i];
			if (i!==0) {
				if (aRow.cells[0].innerHTML) {
					var questName = aRow.cells[0].firstChild.innerHTML.replace(/  /g,' ').trim();
					if (hideQuests.indexOf(questName)>=0) {
						aRow.parentNode.removeChild(aRow.nextSibling);
						aRow.parentNode.removeChild(aRow.nextSibling);
						aRow.parentNode.removeChild(aRow);
					}
					var questID = /quest_id=(\d+)/.exec(aRow.cells[4].innerHTML)[1];
					aRow.cells[4].innerHTML = '<a href="http://guide.fallensword.com/index.php?cmd=quests&amp;subcmd=view&amp;quest_id=' + questID + '&amp;search_name=&amp;search_level_min=&amp;search_level_max=&amp;sort_by=" target="_blank">' +
						'<img border=0 style="float:left;" title="Search quest in Ultimate FSG" src="' + FSH.System.imageServer + '/temple/1.gif"/></a>';
					aRow.cells[4].innerHTML += '&nbsp;<a href="http://wiki.fallensword.com/index.php?title=' + questName.replace(/ /g,'_') + '" target="_blank">' +
						'<img border=0 style="float:left;" title="Search for this quest on the Wiki" src="' + FSH.System.imageServer + '/skin/fs_wiki.gif"/></a>';
				}
			}
		}
	},

	injectQuestTracker: function() { // Legacy
		var injectHere = FSH.System.findNode('//td[font/b[.="Quest Details"]]');
		var tracking = false;
		tracking = FSH.Helper.isQuestBeingTracked(location.search);
		var questId = document.location.search.match(/quest_id=(\d+)/)[1];
		injectHere.innerHTML += '&nbsp;<a target="_blank" href="http://guide.fallensword.com/index.php?cmd=quests&subcmd=view&quest_id=' + questId +
			'"><img border=0 title="Search quest in Ultimate FSG" src="'+ FSH.System.imageServer + '/temple/1.gif"/></a>';
		
		var questName = FSH.System.findNode('//font[@size="2" and contains(.,"\'")]', injectHere);
		if (questName) {
			questName = questName.innerHTML;
			questName = questName.match(/"(.*)"/);
			if (questName && questName.length > 1) {
				questName = questName[1];
				injectHere.innerHTML += '&nbsp;<a href="http://wiki.fallensword.com/index.php?title=' + questName.replace(/ /g,'_') +
					'" target="_blank"><img border=0 title="Search for this quest on the Fallensword Wiki" src=' + FSH.System.imageServer + '/skin/fs_wiki.gif /></a>';
			}
		}

		if (tracking === true) {
			injectHere.innerHTML += '<br><input id="dontTrackThisQuest" data="' + location.search + '" type="button" value="Stop Tracking Quest" title="Tracks quest progress." class="custombutton">';
			document.getElementById('dontTrackThisQuest').addEventListener('click', FSH.questBook.dontTrackThisQuest, true);
		} else {
			injectHere.innerHTML += '<br><input id="trackThisQuest" type="button" value="Track Quest" title="Tracks quest progress." class="custombutton">';
			document.getElementById('trackThisQuest').addEventListener('click', FSH.questBook.trackThisQuest, true);
		}
	},

	trackThisQuest: function() { // Native
		var currentTrackedQuest = FSH.System.getValue('questBeingTracked').split(';');
		if (currentTrackedQuest.length > 0 && currentTrackedQuest[0].trim().length > 0) {
			FSH.System.setValue('questBeingTracked', FSH.System.getValue('questBeingTracked') + ';' + location.search);
		} else {
		FSH.System.setValue('questBeingTracked', location.search);
		}
		location.reload();
	},

	dontTrackThisQuest: function(evt) { // Native
		var questNotToTrack = evt.target.getAttribute('data');
		var currentTrackedQuest = FSH.System.getValue('questBeingTracked').split(';');
		if (currentTrackedQuest.length > 0) {
			var newTracked = '';
			for (var i = 0; i < currentTrackedQuest.length; i += 1) {
				if (currentTrackedQuest[i] !== questNotToTrack) {
					if (newTracked.trim().length > 0) {
						newTracked += ';';
					}
					newTracked += currentTrackedQuest[i];
				}
			}
			FSH.System.setValue('questBeingTracked', newTracked);
		} else {
		FSH.System.setValue('questBeingTracked', '');
		}
		location.reload();
	},

	showAllQuestSteps: function() { // jQuery
		if (FSH.System.getValue('showNextQuestSteps')) {
			$('div[id*="stage"]').show();
			document.getElementById('next_stage_button').style.display = 'none';
		}
	},

};

FSH.settingsPage = { // Legacy

	injectSettings: function() { // Legacy
		var tickNode = FSH.System.findNode('//td[@height="10" and contains(.,"Tick which skills you do not want cast on you")]');
		tickNode.innerHTML+='<br><span style="cursor:pointer; text-decoration:underline;" id="Helper:tickAllBuffs">' +
		'Tick all buffs</span>';
		document.getElementById('Helper:tickAllBuffs').addEventListener('click', FSH.settingsPage.toggleTickAllBuffs, true);

		var buffs                  = FSH.System.getValue('huntingBuffs');
		var buffsName              = FSH.System.getValue('huntingBuffsName');
		var buffs2                 = FSH.System.getValue('huntingBuffs2');
		var buffs2Name             = FSH.System.getValue('huntingBuffs2Name');
		var buffs3                 = FSH.System.getValue('huntingBuffs3');
		var buffs3Name             = FSH.System.getValue('huntingBuffs3Name');
		var doNotKillList          = FSH.System.getValue('doNotKillList');
		var hideArenaPrizes        = FSH.System.getValue('hideArenaPrizes');

		var enableActiveBountyList = FSH.System.getValue('enableActiveBountyList');
		var bountyListRefreshTime  = FSH.System.getValue('bountyListRefreshTime');
		var enableWantedList       = FSH.System.getValue('enableWantedList');
		var wantedNames            = FSH.System.getValue('wantedNames');
		var combatEvaluatorBias    = FSH.System.getValue('combatEvaluatorBias');
		var enabledHuntingMode     = FSH.System.getValue('enabledHuntingMode');
		var storage = (JSON.stringify(localStorage).length /
			(5 * 1024 * 1024) * 100).toFixed(2);
		var configData=
			'<form><table style="border-spacing: 10px;">' +
			'<tr><th colspan="2"><b>Fallen Sword Helper configuration ' +
				'Settings</b></th></tr>' +
			'<tr><td colspan="2" align=center>' +
				'<span style="font-size:xx-small">(Current version: ' +
				FSH.version + ')&nbsp;' +
				'(Storage Used: ' + storage + '% Remaining: ' +
				(100 - storage) + '%)</span>' +
			'</td></tr>' +
			'<tr><td colspan="2" align=center>' +
			'<span style="font-weight:bold;">Visit the <a href="https://github.com/fallenswordhelper/fallenswordhelper">Fallen Sword Helper web site</a> ' +
			'for any suggestions, requests or bug reports</span></td></tr>' +
			//General Prefs
			'<tr><th colspan="2" align="left"><b>General preferences (apply to most screens)</b></th></tr>' +
			'<tr><td align="right">Enable Guild Info Widgets' + FSH.Layout.helpLink('Enable Guild Info Widgets', 'Enabling this option will enable the Guild Info Widgets (coloring on the Guild Info panel)') +
				':</td><td><input name="enableGuildInfoWidgets" type="checkbox" value="on"' + (FSH.System.getValue('enableGuildInfoWidgets')?' checked':'') +
				'>  Hide Message&gt;<input name="hideGuildInfoMessage" type="checkbox" value="on"' + (FSH.System.getValue('hideGuildInfoMessage')?' checked':'') +
				'>  Hide Buff&gt;<input name="hideGuildInfoBuff" type="checkbox" value="on"' + (FSH.System.getValue('hideGuildInfoBuff')?' checked':'') +
				'>  Hide ST&gt;<input name="hideGuildInfoSecureTrade" type="checkbox" value="on"' + (FSH.System.getValue('hideGuildInfoSecureTrade')?' checked':'') +
				'>  Hide Trade&gt;<input name="hideGuildInfoTrade" type="checkbox" value="on"' + (FSH.System.getValue('hideGuildInfoTrade')?' checked':'') +
				'></td></tr>'  +
			'<tr><td align="right">Move Guild Info List' + FSH.Layout.helpLink('Move Guild Info List', 'This will Move the Guild Info List higher on the bar on the right') +
				':</td><td><input name="moveGuildList" type="checkbox" value="on"' + (FSH.System.getValue('moveGuildList')?' checked':'') + '>' +
				'</td></tr>' +
			'<tr><td align="right">Move Online Allies List' + FSH.Layout.helpLink('Move Guild Info List', 'This will Move the Online Allies List higher on the bar on the right') +
				':</td><td><input name="moveOnlineAlliesList" type="checkbox" value="on"' + (FSH.System.getValue('moveOnlineAlliesList')?' checked':'') + '>' +
				'</td></tr>' +
			'<tr><td align="right">' + FSH.Layout.networkIcon + 'Show Online Allies/Enemies' + FSH.Layout.helpLink('Show Online Allies/Enemies', 'This will show the allies/enemies online list on the right.') +
				':</td><td>Allies<input name="enableAllyOnlineList" type="checkbox" value="on"' + (FSH.System.getValue('enableAllyOnlineList')?' checked':'') +
				'> Enemies<input name="enableEnemyOnlineList" type="checkbox" value="on"' + (FSH.System.getValue('enableEnemyOnlineList')?' checked':'') +
				'> <input name="allyEnemyOnlineRefreshTime" size="3" value="'+ FSH.System.getValue('allyEnemyOnlineRefreshTime') + '" /> seconds refresh</td></tr>' +
			'<tr><td align="right">Enable Online Allies Widgets' + FSH.Layout.helpLink('Enable Online Allies Widgets', 'Enabling this option will enable the Allies List Widgets (coloring on the Allies List panel)') +
				':</td><td><input name="enableOnlineAlliesWidgets" type="checkbox" value="on"' + (FSH.System.getValue('enableOnlineAlliesWidgets')?' checked':'') + '></td></tr>' +
			'<tr><td align="right">Move FS box' + FSH.Layout.helpLink('Move FallenSword Box', 'This will move the FS box to the left, under the menu, for better visibility (unless it is already hidden.)') +
				':</td><td><input name="moveFSBox" type="checkbox" value="on"' + (FSH.System.getValue('moveFSBox')?' checked':'') + '></td></tr>' +
			'<tr><td align="right">"Game Help" Settings Link' + FSH.Layout.helpLink('Game Help Settings Link', 'This turns the Game Help text in the lower right box into a link to this settings page. This can be helpful if you use the FS Image Pack.') +
				':</td><td><input name="gameHelpLink" type="checkbox" value="on"' + (FSH.System.getValue('gameHelpLink')?' checked':'') + '></td></tr>' +

			'<tr><td align="right">' + FSH.Layout.networkIcon + 'Enable Temple Alert' + FSH.Layout.helpLink('Enable Temple Alert', 'Puts an alert on the LHS if you have not prayed at the temple today.') +
				':</td><td><input name="enableTempleAlert" type="checkbox" value="on"' + (FSH.System.getValue('enableTempleAlert')?' checked':'') + '></td></tr>' +

			'<tr><td align="right">' + FSH.Layout.networkIcon + 'Enable Gold ' +
				'Upgrade Alert' + FSH.Layout.helpLink('Enable Gold Upgrade Alert',
				'Puts an alert on the LHS if you have not upgraded your ' +
				'stamina with gold today.') +
				':</td><td><input name="enableUpgradeAlert" type="checkbox" ' +
				'value="on"' + (FSH.System.getValue('enableUpgradeAlert') ?
				' checked' : '') + '></td></tr>' +

			'<tr><td align="right">' + FSH.Layout.networkIcon + 'Enable ' +
				'Composing Alert' + FSH.Layout.helpLink('Enable Composing Alert',
				'Puts an alert on the LHS if you have composing slots ' +
				'available.') +
				':</td><td><input name="enableComposingAlert" type="checkbox" ' +
				'value="on"' + (FSH.System.getValue('enableComposingAlert') ?
				' checked' : '') + '></td></tr>' +

			'<tr><td align="right">Enhance Online Dots' + FSH.Layout.helpLink('Enhance Online Dots', 'Enhances the green/grey dots by player names to show online/offline status.') +
				':</td><td><input name="enhanceOnlineDots" type="checkbox" value="on"' + (FSH.System.getValue('enhanceOnlineDots')?' checked':'') + '></td></tr>' +
			'<tr><td align="right">Hide Buff Selected' + FSH.Layout.helpLink('Hide Buff Selected', 'Hides the buff selected functionality in the online allies and guild info section.') +
				':</td><td><input name="hideBuffSelected" type="checkbox" value="on"' + (FSH.System.getValue('hideBuffSelected')?' checked':'') + '></td></tr>' +
			'<tr><td align="right">Hide Helper Menu' + FSH.Layout.helpLink('Hide Helper Menu', 'Hides the helper menu from top left.') +
				':</td><td><input name="hideHelperMenu" type="checkbox" value="on"' + (FSH.System.getValue('hideHelperMenu')?' checked':'') + '></td></tr>' +
			'<tr><td align="right">Keep Helper Menu On Screen' + FSH.Layout.helpLink('Keep Helper Menu On Screen', 'Keeps helper menu on screen as you scroll (helper menu must be enabled to work). Also works with quick links.') +
				':</td><td><input name="keepHelperMenuOnScreen" type="checkbox" value="on"' + (FSH.System.getValue('keepHelperMenuOnScreen')?' checked':'') + '></td></tr>' +
			'<tr><td align="right">Quick Links Screen Location' + FSH.Layout.helpLink('Quick Links Screen Location', 'Determines where the quick links dialog shows on the screen. Default is top 22, left 0.') +
				':</td><td>Top: <input name="quickLinksTopPx" size="3" value="'+ FSH.System.getValue('quickLinksTopPx') + '" /> Left: <input name="quickLinksLeftPx" size="3" value="'+ FSH.System.getValue('quickLinksLeftPx') + '" /></td></tr>' +
			//Guild Manage
			'<tr><th colspan="2" align="left"><b>Guild>Manage preferences</b></th></tr>' +
			'<tr><td colspan="2" align="left">Enter guild names, seperated by commas</td></tr>' +
			'<tr><td>Own Guild</td><td>'+ FSH.settingsPage.injectSettingsGuildData('Self') + '</td></tr>' +
			'<tr><td>Friendly Guilds</td><td>'+ FSH.settingsPage.injectSettingsGuildData('Frnd') + '</td></tr>' +
			'<tr><td>Old Guilds</td><td>'+ FSH.settingsPage.injectSettingsGuildData('Past') + '</td></tr>' +
			'<tr><td>Enemy Guilds</td><td>'+ FSH.settingsPage.injectSettingsGuildData('Enmy') + '</td></tr>' +
			'<tr><td align="right">Highlight Valid PvP Targets' + FSH.Layout.helpLink('Highlight Valid PvP Targets', 'Enabling this option will highlight targets in OTHER guilds that are within your level range to attack for PvP or GvG.') +
				':</td><td>PvP: <input name="highlightPlayersNearMyLvl" type="checkbox" value="on"' + (FSH.System.getValue('highlightPlayersNearMyLvl')?' checked':'') +
				'> GvG: <input name="highlightGvGPlayersNearMyLvl" type="checkbox" value="on"' + (FSH.System.getValue('highlightGvGPlayersNearMyLvl')?' checked':'') + '/></td></tr>'  +
			'<tr><td align="right">Show rank controls' + FSH.Layout.helpLink('Show rank controls', 'Show ranking controls for guild managemenet in member profile page - ' +
				'this works for guild founders only') +
				':</td><td><input name="showAdmin" type="checkbox" value="on"' + (FSH.System.getValue('showAdmin')?' checked':'') + '></td></tr>' +
			'<tr><td align="right">AJAXify rank controls' + FSH.Layout.helpLink('AJAXify rank controls', 'Enables guild founders with ranking rights to change rank positions without a screen refresh.') +
				':</td><td><input name="ajaxifyRankControls" type="checkbox" value="on"' + (FSH.System.getValue('ajaxifyRankControls')?' checked':'') + '></td></tr>' +
			'<tr><td align="right">'+FSH.Layout.networkIcon+'Show Conflict Details' + FSH.Layout.helpLink('Show Conflict Details', 'Inserts detailed conflict information onto your guild\\\'s manage page. Currently displays the target guild as well as the current score.') +
				':</td><td><input name="detailedConflictInfo" type="checkbox" value="on"' + (FSH.System.getValue('detailedConflictInfo')?' checked':'') + '></td></tr>' +
			//World Screen
			'<tr><th colspan="2" align="left"><b>World screen/Hunting preferences</b></th></tr>' +
			'<tr><td align="right">Quick Kill ' + FSH.Layout.helpLink('Quick Kill', 'This will kill monsters without opening a new page') +
				':</td><td><input name="quickKill" type="checkbox" value="on"' + (FSH.System.getValue('quickKill')?' checked':'') + '>' +
				'</td></tr>' +
			'<tr><td align="right">Keep Combat Logs' + FSH.Layout.helpLink('Keep Combat Logs', 'Save combat logs to a temporary variable. '+
				'Press <u>Show logs</u> on the right to display and copy them') +
				':</td><td><input name="keepLogs" type="checkbox" value="on"' + (FSH.System.getValue('keepLogs')?' checked':'') + '>' +
				'<input type="button" class="custombutton" value="Show Logs" id="Helper:ShowLogs"></td></tr>' +
			'<tr><td align="right">Show Combat Log' + FSH.Layout.helpLink('Show Combat Log', 'This will show the combat log for each automatic battle below the monster list.') +
				':</td><td><input name="showCombatLog" type="checkbox" value="on"' + (FSH.System.getValue('showCombatLog')?' checked':'') + '></td></tr>' +
			'<tr><td align="right">Color Special Creatures' + FSH.Layout.helpLink('Color Special Creatures', 'Creatures will be colored according to their rarity. ' +
				'Champions will be colored green, Elites yellow and Super Elites red.') +
				':</td><td><input name="enableCreatureColoring" type="checkbox" value="on"' + (FSH.System.getValue('enableCreatureColoring')?' checked':'') + '></td></td></tr>' +
			'<tr><td align="right">'+FSH.Layout.networkIcon+'Show Creature Info' + FSH.Layout.helpLink('Show Creature Info', 'This will show the information from the view creature link when you mouseover the link.' +
				// (FSH.System.browserVersion<3?'Does not work in Firefox 2 - suggest disabling or upgrading to Firefox 3.':'')) +
				'') +
				':</td><td><input name="showCreatureInfo" type="checkbox" value="on"' + (FSH.System.getValue('showCreatureInfo')?' checked':'') + '></td></tr>' +

			'<tr><td align="right">Combat Evaluator Bias' + FSH.Layout.helpLink('Combat Evaluator Bias', 'This changes the bias of the combat evaluator for the damage and HP evaluation. It will not change the attack bias (1.1053).'+
					'<br>Conservative = 1.1053 and 1.1 (Safest)'+
					'<br>Semi-Conservative = 1.1 and 1.053'+
					'<br>Adventurous = 1.053 and 1 (Bleeding Edge)'+
					'<br>Conservative+ = 1.1053 and 1 with the attack calculation changed to +-48 per RJEM') +
				':</td><td><select name="combatEvaluatorBias"><option value="0"' + (combatEvaluatorBias === 0 ? ' SELECTED' : '') +
					'>Conservative</option><option value="1"' + (combatEvaluatorBias===1?' SELECTED':'') +
					'>Semi-Conservative</option><option value="2"' + (combatEvaluatorBias===2?' SELECTED':'') +
					'>Adventurous</option><option value="3"' + (combatEvaluatorBias===3?' SELECTED':'') +
					'>Conservative+</option></select></td></tr>' +

			'<tr><td align="right">Keep Creature Log' + FSH.Layout.helpLink('Keep Creature Log', 'This will show the creature log for each creature you see when you travel. This requires Show Creature Info enabled!') +
				':</td><td><input name="showMonsterLog" type="checkbox" value="on"' + (FSH.System.getValue('showMonsterLog')?' checked':'') + '>'+
				'&nbsp;&nbsp;<input type="button" class="custombutton" value="Show" id="Helper:ShowMonsterLogs"></td></tr>' +
			'<tr><td align="right">Hide Krul Portal' + FSH.Layout.helpLink('Hide Krul Portal', 'This will hide the Krul portal on the world screen.') +
				':</td><td><input name="hideKrulPortal" type="checkbox" value="on"' + (FSH.System.getValue('hideKrulPortal')?' checked':'') + '></td></tr>' +
			'<tr><td align="right">Footprints Color' + FSH.Layout.helpLink('Footprints Color', 'Changes the color of the footprints, useful if you can\\\'t see them in some maps') +
				':</td><td><input name="footprintsColor" size="12" value="'+ FSH.System.getValue('footprintsColor') + '" /><input type="button" class="custombutton" value="Update Color" id="Helper:updateFpColor"><table width="40" height="40" cellspacing="0" cellpadding="0" border="0"><td width="40" height="40" background="' + FSH.System.getValue('currentTile') + '" align="center" style="color:' + FSH.System.getValue('footprintsColor') + ';"><center><table width="40" height="40" cellspacing="0" cellpadding="0" border="0"><tbody><tr><td align="center">**</td></tr></tbody></table></center></td></table></td></tr>' +
			'<tr><td align="right">Reset Footprints' + FSH.Layout.helpLink('Reset Footprints', 'Resets the footprints variable.') +
				':</td><td>Current Size: ' + (!FSH.System.getValue('map') ? 'N/A' : FSH.System.getValue('map').length + ' <input type="button" class="custombutton" value="Reset" id="Helper:ResetFootprints">') + '</td></tr></td></tr>' +
			'<tr><td align="right">Show Send Gold' + FSH.Layout.helpLink('Show Gold on World Screen', 'This will show an icon below the world map to allow you to quickly send gold to a Friend.') +
				':</td><td><input name="sendGoldonWorld" type="checkbox" value="on"' + (FSH.System.getValue('sendGoldonWorld')?' checked':'') + '>'+
				'Send <input name="goldAmount" size="5" value="'+ FSH.System.getValue('goldAmount') + '" /> '+
				'gold to <input name="goldRecipient" size="10" value="'+ FSH.System.getValue('goldRecipient') + '" />' +
				' Current total: <input name="currentGoldSentTotal" size="5" value="'+ FSH.System.getValue('currentGoldSentTotal') + '" />' +
				'</td></tr>' +
			'<tr><td align="right">Do Not Kill List' + FSH.Layout.helpLink('Do Not Kill List', 'List of creatures that will not be killed by quick kill. You must type the full name of each creature, ' +
				'separated by commas. Creature name will show up in red color on world screen and will not be killed by keyboard entry (but can still be killed by mouseclick). Quick kill must be '+
				'enabled for this function to work.') +
				':</td><td colspan="3"><input name="doNotKillList" size="60" value="'+ doNotKillList + '" /></td></tr>' +
			'<tr><td align="right">Hunting Buffs' + FSH.Layout.helpLink('Hunting Buffs', 'Customize which buffs are designated as hunting buffs. You must type the full name of each buff, ' +
				'separated by commas. Use the checkbox to enable/disable them.') +
				':</td><td colspan="3"><input name="showHuntingBuffs" type="checkbox" value="on"' + (FSH.System.getValue('showHuntingBuffs')?' checked':'') + '> ' +
				'Enabled Hunting Mode' + FSH.Layout.helpLink('Enabled Hunting Mode', 'This will determine which list of buffs gets checked on the world screen.') +
				':<select name="enabledHuntingMode"><option value="1"' + (enabledHuntingMode===1?' SELECTED':'') +
					'>' + buffsName + '</option><option value="2"' + (enabledHuntingMode===2?' SELECTED':'') +
					'>' + buffs2Name + '</option><option value="3"' + (enabledHuntingMode===3?' SELECTED':'') +
					'>' + buffs3Name + '</option></select></td></tr>' +
			'<tr><td align="right">' + buffsName + ' Hunting Buff List' + FSH.Layout.helpLink(buffsName + ' Hunting Buff List', buffsName + ' list of hunting buffs.') +
				':</td><td colspan="3"><input name="huntingBuffsName" title="Hunting mode name" size="7" value="'+ buffsName + '" /><input name="huntingBuffs" size="49" value="'+ buffs + '" /></td></tr>' +
			'<tr><td align="right">' + buffs2Name + ' Hunting Buff List' + FSH.Layout.helpLink(buffs2Name + ' Hunting Buff List', 'List of ' + buffs2Name + ' hunting buffs.') +
				':</td><td colspan="3"><input name="huntingBuffs2Name" title="Hunting mode name" size="7" value="'+ buffs2Name + '" /><input name="huntingBuffs2" size="49" value="'+ buffs2 + '" /></td></tr>' +
			'<tr><td align="right">' + buffs3Name + ' Hunting Buff List' + FSH.Layout.helpLink(buffs3Name + ' Hunting Buff List', 'List of ' + buffs3Name + ' hunting buffs.') +
				':</td><td colspan="3"><input name="huntingBuffs3Name" title="Hunting mode name" size="7" value="'+ buffs3Name + '" /><input name="huntingBuffs3" size="49" value="'+ buffs3 + '" /></td></tr>' +
			'<tr><td align="right">Enable FS Box Log' + FSH.Layout.helpLink('Enable FS Box Log', 'This enables the functionality to keep a log of recent seen FS Box message.') +
				':</td><td><input name="fsboxlog" type="checkbox" value="on"' + (FSH.System.getValue('fsboxlog')?' checked':'') + '></td></tr>' +
			'<tr><td align="right">Enable Buff Log' + FSH.Layout.helpLink('Enable Buff Log', 'This enables the functionality to keep a log of recently casted buffs') +
				':</td><td><input name="keepBuffLog" type="checkbox" value="on"' + (FSH.System.getValue('keepBuffLog')?' checked':'') + '></td></tr>' +
			'<tr><td align="right">Enable Hunting Mode' + FSH.Layout.helpLink('Enable Hunting Mode', 'This disable menu and some visual features to speed up the FSH.Helper.') +
				':</td><td><input name="huntingMode" type="checkbox" value="on"' + (FSH.System.getValue('huntingMode')?' checked':'') + '></td></tr>' +
			'<tr><td align="right">Enable Fast Walk' + FSH.Layout.helpLink('Enable Fast Walk', 'This functionality will allow the user to send multiple move commands, each subsequent one assuming that the previous one succeeded. ' +
				'It does not check for blocked squares, not does it check to make sure that the move commands arrived at the server in the right order. Depending on the lag you experience, the user may have to pause slightly ' +
				'between each move to make sure they reach the server in the right order.') +
				':</td><td><input name="enableFastWalk" type="checkbox" value="on"' + (FSH.System.getValue('enableFastWalk')?' checked':'') + '>'+
				' Show FastWalk icon on world' + FSH.Layout.helpLink('Show FastWalk icon on world', 'Should the FastWalk toggle icon show on the world map') +
				':<input name="showFastWalkIconOnWorld" type="checkbox" value="on"' + (FSH.System.getValue('showFastWalkIconOnWorld')?' checked':'') + '></td></tr>' +
			//Log screen prefs
			'<tr><th colspan="2" align="left"><b>Log screen preferences</b></th></tr>' +
			'<tr><td align="right">Cleanup Guild Log' + FSH.Layout.helpLink('Dim Non Player Guild Log Messages', 'Any log messages not related to the ' +
				'current player will be dimmed (e.g. recall messages from guild store)') +
				':</td><td><input name="hideNonPlayerGuildLogMessages" type="checkbox" value="on"' + (FSH.System.getValue('hideNonPlayerGuildLogMessages')?' checked':'') + '></td></td></tr>' +
			'<tr><td align="right">Use New Guild Log' + FSH.Layout.helpLink('Use New Guild Log', 'This will replace the standard guild log with the helper version of the guild log.') +
				':</td><td><input name="useNewGuildLog" type="checkbox" value="on"' + (FSH.System.getValue('useNewGuildLog')?' checked':'') + '></td></td></tr>' +
			'<tr><td align="right">New Guild Log History' + FSH.Layout.helpLink('New Guild Log History (pages)', 'This is the number of pages that the new guild log screen will go back in history.') +
				':</td><td><input name="newGuildLogHistoryPages" size="3" value="'+ FSH.System.getValue('newGuildLogHistoryPages') + '" /></td></td></tr>' +
			'<tr><td align="right">Enable Log Coloring' + FSH.Layout.helpLink('Enable Log Coloring', 'Three logs will be colored if this is enabled, Guild Chat, Guild Log and Player Log. ' +
				'It will show any new messages in yellow and anything 20 minutes old ones in brown.') +
				':</td><td><input name="enableLogColoring" type="checkbox" value="on"' + (FSH.System.getValue('enableLogColoring')?' checked':'') + '></td></td></tr>' +
			'<tr><td align="right">New Log Message Sound' + FSH.Layout.helpLink('New Log Message Sound', 'The .wav or .ogg file to play when you have unread log messages. This must be a .wav or .ogg file. This option can be turned on/off on the world page. Only works in Firefox 3.5+') +
				':</td><td colspan="3"><input name="defaultMessageSound" size="60" value="'+ FSH.System.getValue('defaultMessageSound') + '" /></td></tr>' +
			'<tr><td align="right">Play sound on unread log' + FSH.Layout.helpLink('Play sound on unread log', 'Should the above sound play when you have unread log messages? (will work on Firefox 3.5+ only)') +
				':</td><td><input name="playNewMessageSound" type="checkbox" value="on"' + (FSH.System.getValue('playNewMessageSound')?' checked':'') + '>' +
				' Show speaker on world' + FSH.Layout.helpLink('Show speaker on world', 'Should the toggle play sound speaker show on the world map? (This icon is next to the Fallensword wiki icon and will only display on Firefox 3.5+)') +
				':<input name="showSpeakerOnWorld" type="checkbox" value="on"' + (FSH.System.getValue('showSpeakerOnWorld')?' checked':'') + '></tr></td>' +
			'<tr><td align="right">Enable Chat Parsing' + FSH.Layout.helpLink('Enable Chat Parsing', 'If this is checked, your character log will be parsed for chat messages and show the chat message on the screen if you reply to that message.') +
				':</td><td><input name="enableChatParsing" type="checkbox" value="on"' + (FSH.System.getValue('enableChatParsing')?' checked':'') + '></td></td></tr>' +
			'<tr><td align="right">Add attack link to log' + FSH.Layout.helpLink('Add attack link to log', 'If checked, this will add an Attack link to each message in your log.') +
				':</td><td><input name="addAttackLinkToLog" type="checkbox" value="on"' + (FSH.System.getValue('addAttackLinkToLog')?' checked':'') + '></td></td></tr>' +
			'<tr><td align="right">Enhance Chat Text Entry' + FSH.Layout.helpLink('Enhance Chat Text Entry', 'If checked, this will enhance the entry field for entering chat text on the guild chat page.') +
				':</td><td><input name="enhanceChatTextEntry" type="checkbox" value="on"' + (FSH.System.getValue('enhanceChatTextEntry')?' checked':'') + '></td></td></tr>' +
			//Equipment screen prefs
			'<tr><th colspan="2" align="left"><b>Equipment screen preferences</b></th></tr>' +
			'<tr><td align="right">Disable Item Coloring' + FSH.Layout.helpLink('Disable Item Coloring', 'Disable the code that colors the item text based on the rarity of the item.') +
				':</td><td><input name="disableItemColoring" type="checkbox" value="on"' + (FSH.System.getValue('disableItemColoring')?' checked':'') + '></td></tr>' +
			'<tr><td align="right">Show Quick Send Item' + FSH.Layout.helpLink('Show Quick Send on Manage Backpack', 'This will show a link beside each item which gives the option to quick send the item to this person') +
				':</td><td><input name="showQuickSendLinks" type="checkbox" value="on"' + (FSH.System.getValue('showQuickSendLinks')?' checked':'') + '>'+
				'Send Items To <input name="itemRecipient" size="10" value="'+ FSH.System.getValue('itemRecipient') + '" />' +
			'<tr><td align="right">Show Quick Drop Item' + FSH.Layout.helpLink('Show Quick Drop on Manage Backpack', 'This will show a link beside each item which gives the option to drop the item.  WARNING: NO REFUNDS ON ERROR') +
				':</td><td><input name="showQuickDropLinks" type="checkbox" value="on"' + (FSH.System.getValue('showQuickDropLinks')?' checked':'') + '>'+
			
			'<tr><td align="right">Quick Select all of type in Send Screen' + FSH.Layout.helpLink('Quick Select all of type in Send Screen', 'This allows you to customize what quick links you would like displayed in your send item screen.<br>Use the format [&quot;name&quot;,&quot;itemid&quot;],[&quot;othername&quot;,&quot;itemid2&quot;].<br>WARNING: NO REFUNDS ON ERROR') +
				':</td><td><input name="sendClasses" size="60" value="' + FSH.System.escapeHtml(FSH.System.getValue('sendClasses')) + '">'+
			
			//Quest Preferences
			'<tr><th colspan="2" align="left"><b>Quest preferences</b></th></tr>' +
			'<tr><td align="right">Hide Specific Quests' + FSH.Layout.helpLink('Hide Specific Quests', 'If enabled, this hides quests whose name matches the list (separated by commas). ' +
				'This works on Quest Manager and Quest Book.') +
				':</td><td colspan="3"><input name="hideQuests" type="checkbox" value="on"' + (FSH.System.getValue('hideQuests')?' checked':'') + '>' +
				'<input name="hideQuestNames" size="60" value="'+ FSH.System.getValue('hideQuestNames') + '" /></td></tr>' +
			'<tr><td align="right">Show Incomplete/Not Started Quests' + FSH.Layout.helpLink('Show Incomplete/Not Started Quests', 'If checked, the helper will check to see if you have quests that are not started, or are started, not complete and not being tracked.' +
				'<br>The helper will only check this when you change worlds, or if when it last checked, there were quests it detected for the current world.') +
				':</td><td colspan="3"><input name="checkForQuestsInWorld" type="checkbox" value="on"' + (FSH.System.getValue('checkForQuestsInWorld')?' checked':'') + '>' +
				'</td></tr>' +
			'<tr><td align="right">Store Last Quest Page' + FSH.Layout.helpLink('Store Last Quest Page', 'This will store the page and sort order of each of the three quest selection pages for next time you visit. If you need to reset the links, turn this option off, '+
				'click on the link you wish to reset and then turn this option back on again.') +
				':</td><td><input name="storeLastQuestPage" type="checkbox" value="on"' + (FSH.System.getValue('storeLastQuestPage')?' checked':'') + '></td></tr>' +
			'<tr><td align="right">Show All Quest Steps' + FSH.Layout.helpLink('Show All Quest Steps', 'Shows all quest steps in the UFSG.') +
				':</td><td><input name="showNextQuestSteps" type="checkbox" value="on"' + (FSH.System.getValue('showNextQuestSteps')?' checked':'') + '></td></tr>' +
			//profile prefs
			'<tr><th colspan="2" align="left"><b>Profile preferences</b></th></tr>' +
			'<tr><td align="right">Render self bio' + FSH.Layout.helpLink('Render self bio', 'This determines if your own bio will render the FSH special bio tags.') +
				':</td><td><input name="renderSelfBio" type="checkbox" value="on"' + (FSH.System.getValue('renderSelfBio')?' checked':'') + '></td></tr>' +
			'<tr><td align="right">Render other players\' bios' + FSH.Layout.helpLink('Render other players bios', 'This determines if other players bios will render the FSH special bio tags.') +
				':</td><td><input name="renderOtherBios" type="checkbox" value="on"' + (FSH.System.getValue('renderOtherBios')?' checked':'') + '></td></tr>' +
			'<tr><td align="right">Enable Bio Compressor' + FSH.Layout.helpLink('Enable Bio Compressor', 'This will compress long bios according to settings and provide a link to expand the compressed section.') +
				':</td><td><input name="enableBioCompressor" type="checkbox" value="on"' + (FSH.System.getValue('enableBioCompressor')?' checked':'') +
				'> Max Characters:<input name="maxCompressedCharacters" size="4" value="'+ FSH.System.getValue('maxCompressedCharacters') + '" />'+
				' Max Lines:<input name="maxCompressedLines" size="3" value="'+ FSH.System.getValue('maxCompressedLines') + '" /></td></tr>' +
			'<tr><td align="right">Buy Buffs Greeting' + FSH.Layout.helpLink('Buy Buffs Greeting', 'This is the default text to open a message with when asking to buy buffs. You can use {playername} to insert the target players name. You can also use' +
				' {buffs} to insert the list of buffs. You can use {cost} to insert the total cost of the buffs.') +
				':</td><td colspan="3"><input name="buyBuffsGreeting" size="60" value="'+ FSH.System.getValue('buyBuffsGreeting') + '" /></td></tr>' +
			'<tr><td align="right">Show Stat Bonus Total' + FSH.Layout.helpLink('Show Stat Bonus Total', 'This will show a total of the item stats when you mouseover an item on the profile screen.') +
				':</td><td><input name="showStatBonusTotal" type="checkbox" value="on"' + (FSH.System.getValue('showStatBonusTotal')?' checked':'') + '></td></tr>' +
			'<tr><td align="right">Enable Quick Drink' + FSH.Layout.helpLink('Enable Quick Drink On Profile', 'This enables the quick drink functionality on the profile page.') +
				':</td><td><input name="enableQuickDrink" type="checkbox" value="on"' + (FSH.System.getValue('enableQuickDrink')?' checked':'') + '></td></tr>' +
			//Arena prefs
			'<tr><th colspan="2" align="left"><b>Arena preferences</b></th></tr>' +
			'<tr><td align="right">Auto Sort Arena List' + FSH.Layout.helpLink('Auto Sort Arena List', 'This will automatically sort the arena list based on your last preference for sort.') +
				':</td><td><input name="autoSortArenaList" type="checkbox" value="on"' + (FSH.System.getValue('autoSortArenaList')?' checked':'') + '></td></tr>' +
			'<tr><td align="right">Hide Arena Prizes' + FSH.Layout.helpLink('Hide Arena Prizes', 'List of the itemIds of arena prizes that should not display on the arena screen ' +
				'separated by commas. To find the itemId you will have to view the source of the page or mouseover the item on the arena page.') +
				':</td><td colspan="3"><input name="hideArenaPrizes" size="60" value="'+ hideArenaPrizes + '" /></td></tr>' +
			//Bounty hunting prefs
			'<tr><th colspan="2" align="left"><b>Bounty hunting preferences</b></th></tr>' +
			'<tr><td align= "right">' + FSH.Layout.networkIcon + 'Show Active Bounties' + FSH.Layout.helpLink('Show Active Bounties', 'This will show your active bounties ' +
				'on the right hand side') + ':</td><td colspan="3"><input name="enableActiveBountyList" type = "checkbox" value = "on"' + (enableActiveBountyList? ' checked':'') + '/>' +
				'<input name="bountyListRefreshTime" size="3" value="'+ bountyListRefreshTime + '" /> seconds refresh</td></tr>' +
			'<tr><td align= "right">' + FSH.Layout.networkIcon + 'Show Wanted Bounties' + FSH.Layout.helpLink('Show Wanted Bounties', 'This will show when someone you want is on the bounty board, the list is ' +
				'displayed on the right hand side') + ':</td><td colspan="3"><input name="enableWantedList" type = "checkbox" value = "on"' + (enableWantedList? ' checked':'') + '/> Refresh time is same as Active Bounties' +
			'<tr><td align= "right">Wanted Names' + FSH.Layout.helpLink('Wanted Names', 'The names of the people you want to see on the bounty board separated by commas') + ':</td><td colspan="3">' +
				'<input name ="wantedNames" size ="60" value="' + wantedNames + '"/></td></tr>' +
			'<tr><td align= "right">' + FSH.Layout.networkIcon + 'Show Attack Helper' + FSH.Layout.helpLink('Show Attack Helper', 'This will show extra information on the attack player screen ' +
				'about stats and buffs on you and your target') + ':</td><td colspan="3"><input name="enableAttackHelper" type = "checkbox" value = "on"' + (FSH.System.getValue('enableAttackHelper')? ' checked':'') + '/>' +
			'<tr><td align= "right">' + FSH.Layout.networkIcon + 'Show PvP Summary in Log' + FSH.Layout.helpLink('Show PvP Summary in Log', 'This will show a summary of the PvP results in the log.') + ':</td><td colspan="3">' +
				'<input name="showPvPSummaryInLog" type = "checkbox" value = "on"' + (FSH.System.getValue('showPvPSummaryInLog')? ' checked':'') + '/>' +
			//Auction house prefs
			'<tr><th colspan="2" align="left"><b>Auction house preferences</b></th></tr>' +
			'<tr><td align="right">Auto Fill Min Bid Price' + FSH.Layout.helpLink('Auto Fill Min Bid Price', 'This enables the functionality to automatically fill in the min bid price so you just have to hit bid and your bid will be placed.') +
				':</td><td><input name="autoFillMinBidPrice" type="checkbox" value="on"' + (FSH.System.getValue('autoFillMinBidPrice')?' checked':'') + '></td></tr>' +
			//Other prefs
			'<tr><th colspan="2" align="left"><b>Other preferences</b></th></tr>' +
			'<tr><td align="right">Hide Specific Recipes' + FSH.Layout.helpLink('Hide Specific Recipes', 'If enabled, this hides recipes whose name matches the list (separated by commas). ' +
				'This works on Recipe Manager') +
				':</td><td colspan="3"><input name="hideRecipes" type="checkbox" value="on"' + (FSH.System.getValue('hideRecipes')?' checked':'') + '>' +
				'<input name="hideRecipeNames" size="60" value="'+ FSH.System.getValue('hideRecipeNames') + '" /></td></tr>' +
			'<tr><td align="right">Hide Relic Offline' + FSH.Layout.helpLink('Hide Relic Offline', 'This hides the relic offline defenders checker.') +
				':</td><td><input name="hideRelicOffline" type="checkbox" value="on"' + (FSH.System.getValue('hideRelicOffline')?' checked':'') + '></td></tr>' +
			'<tr><td align="right">Enter Sends Message' + FSH.Layout.helpLink('Enter Sends Message', 'If enabled, will send a message from the Send Message screen if you press enter. You can still insert a new line by holding down shift' +
			' when you press enter.') +
				':</td><td><input name="enterForSendMessage" type="checkbox" value="on"' + (FSH.System.getValue('enterForSendMessage')?' checked':'') + '></td></tr>' +
			'<tr><td align="right">Navigate After Message Sent' + FSH.Layout.helpLink('Navigate After Message Sent', 'If enabled, will navigate to the referring page after a successful message is sent. Example: ' +
				' if you are on the world screen and hit message on the guild info panel after you send the message, it will return you to the world screen.') +
				':</td><td><input name="navigateToLogAfterMsg" type="checkbox" value="on"' + (FSH.System.getValue('navigateToLogAfterMsg')?' checked':'') + '></td></tr>' +
			'<tr><td align= "right">Max Group Size to Join' + FSH.Layout.helpLink('Max Group Size to Join', 'This will disable HCSs Join All functionality and will only join groups less than a set size. ') +
				':</td><td colspan="3"><input name="enableMaxGroupSizeToJoin" type = "checkbox" value = "on"' + (FSH.System.getValue('enableMaxGroupSizeToJoin')? ' checked':'') + '/>' +
				'Max Size: <input name="maxGroupSizeToJoin" size="3" value="' + FSH.System.getValue('maxGroupSizeToJoin') + '" /></td></tr>' +
			//save button
			//http://www.fallensword.com/index.php?cmd=notepad&blank=1&subcmd=savesettings
			'<tr><td colspan="2" align=center><input type="button" class="custombutton" value="Save" id="Helper:SaveOptions"></td></tr>' +
			'<tr><td colspan="2" align=center><a href="http://www.fallensword.com/index.php?cmd=notepad&blank=1&subcmd=savesettings">Export or Load Settings!</a></td></tr>' +
			'<tr><td colspan="2" align=center>' +
			'<span style="font-size:xx-small">Fallen Sword Helper was coded by <a href="' + FSH.System.server + 'index.php?cmd=profile&player_id=1393340">Coccinella</a>, ' +
			'<a href="' + FSH.System.server + 'index.php?cmd=profile&player_id=1599987">yuuzhan</a>, ' +
			'<a href="' + FSH.System.server + 'index.php?cmd=profile&player_id=1963510">PointyHair</a>, ' +
			'<a href="' + FSH.System.server + 'index.php?cmd=profile&player_id=1346893">Tangtop</a>, '+
			'<a href="' + FSH.System.server + 'index.php?cmd=profile&player_id=2536682">dkwizard</a>, ' +
			'<a href="' + FSH.System.server + 'index.php?cmd=profile&player_id=1570854">jesiegel</a>,  ' +
			'<a href="' + FSH.System.server + 'index.php?cmd=profile&player_id=2156859">ByteBoy</a>, and ' +
			'<a href="' + FSH.System.server + 'index.php?cmd=profile&player_id=2169401">McBush</a>, ' +
			'with valuable contributions by <a href="' + FSH.System.server + 'index.php?cmd=profile&player_id=524660">Nabalac</a>, ' +
			'<a href="' + FSH.System.server + 'index.php?cmd=profile&player_id=37905">Ananasii</a></td></tr>' +
			'</table></form>';
		//var insertHere = FSH.System.findNode('//table[@width="100%" and @cellspacing="0" and @cellpadding="5" and @border="0"]');
		//var newRow=insertHere.insertRow(insertHere.rows.length);
		//var newCell=newRow.insertCell(0);
		//newCell.colSpan=3;
		//newCell.innerHTML=configData;
		// insertHere.insertBefore(configData, insertHere);
		var maxID=parseInt($('div[id*="settingsTabs-"]:last').attr('id').split('-')[1], 10);
		$('div[id*="settingsTabs-"]:last').after('<div id="settingsTabs-'+(maxID+1)+'">'+configData+'</div>');
		if($('#settingsTabs').tabs('length')>0){
			//chrome, have to add it this way (due to loading order
			$('#settingsTabs').tabs('add','#settingsTabs-'+(maxID+1),'FSH Settings');
		}else{
			//firefox loads it later, so just print to page
			$('a[href*="settingsTabs-"]:last').parent().after('<li><a href="#settingsTabs-'+(maxID+1)+'">FSH Settings</a></li>');
		}

		document.getElementById('Helper:SaveOptions').addEventListener('click', FSH.settingsPage.saveConfig, true);
		document.getElementById('Helper:ShowLogs').addEventListener('click', FSH.settingsPage.showLogs, true);
		document.getElementById('Helper:ShowMonsterLogs').addEventListener('click', FSH.settingsPage.showMonsterLogs, true);
		if (FSH.System.getValue('map')) {document.getElementById('Helper:ResetFootprints').addEventListener('click', FSH.settingsPage.resetFootprints, true);}
		document.getElementById('Helper:updateFpColor').addEventListener('click', FSH.settingsPage.updateFpColor, true);

		document.getElementById('toggleShowGuildSelfMessage').addEventListener('click', FSH.System.toggleVisibilty, true);
		document.getElementById('toggleShowGuildFrndMessage').addEventListener('click', FSH.System.toggleVisibilty, true);
		document.getElementById('toggleShowGuildPastMessage').addEventListener('click', FSH.System.toggleVisibilty, true);
		document.getElementById('toggleShowGuildEnmyMessage').addEventListener('click', FSH.System.toggleVisibilty, true);

		var krulButton = FSH.System.findNode('//input[@value="Instant Portal back to Krul Island"]');
		var onClick = krulButton.getAttribute('onclick');
		//window.location='index.php?cmd=settings&subcmd=fix&xcv=3264968baaf287c67b0fab314280b163';
		var krulXCVRE = /xcv=([a-z0-9]+)'/;
		var krulXCV = krulXCVRE.exec(onClick);
		if (krulXCV) {FSH.System.setValue('krulXCV',krulXCV[1]);}

		var minGroupLevelTextField = FSH.System.findNode('//input[@name="min_group_level"]');
		if (minGroupLevelTextField) {
			var minGroupLevel = minGroupLevelTextField.value;
			FSH.System.setValue('minGroupLevel',minGroupLevel);
		}
	},

	toggleTickAllBuffs: function(){ // Legacy
		var allItems=FSH.System.findNodes('//input[@type="checkbox" and @name="blockedSkillList\[\]"]');
		var tckTxt =document.getElementById('Helper:tickAllBuffs');
		if (allItems) {
			for (var i=0; i<allItems.length; i += 1) {
				var checkboxForItem = allItems[i];
				if (checkboxForItem.style.visibility === 'hidden') {
					checkboxForItem.checked = false;
				} else {
					if(tckTxt.innerHTML==='Tick all buffs'){
						checkboxForItem.checked = true;
					}else{
						checkboxForItem.checked = false;
					}
				}
			}
			if(tckTxt.innerHTML==='Tick all buffs'){
				document.getElementById('Helper:tickAllBuffs').innerHTML='Untick all buffs';
			}else{
				document.getElementById('Helper:tickAllBuffs').innerHTML='Tick all buffs';
			}
		}
	},

	injectSettingsGuildData: function(guildType) { // Native
		var result='';
		result += '<input name="guild' + guildType + '" size="60" value="' + FSH.System.getValue('guild' + guildType) + '">';
		result += '<span style="cursor:pointer;text-decoration:none;" id="toggleShowGuild' + guildType + 'Message" linkto="showGuild' +
			guildType + 'Message"> &#x00bb;</span>';
		result += '<div id="showGuild' + guildType + 'Message" style="visibility:hidden;display:none">';
		result += '<input name="guild' + guildType + 'Message" size="60" value="' + FSH.System.getValue('guild' + guildType + 'Message') + '">';
		result += '</div>';
		return result;
	},

	saveConfig: function(evt) { // Legacy
		var oForm=evt.target.form;

		//bio compressor validation logic
		var maxCompressedCharacters = FSH.System.findNode('//input[@name="maxCompressedCharacters"]', oForm);
		var maxCompressedCharactersValue = maxCompressedCharacters.value*1;
		if (isNaN(maxCompressedCharactersValue) || maxCompressedCharactersValue<=50) {
			maxCompressedCharacters.value=1500;
		}
		var maxCompressedLines = FSH.System.findNode('//input[@name="maxCompressedLines"]', oForm);
		var maxCompressedLinesValue = maxCompressedLines.value*1;
		if (isNaN(maxCompressedLinesValue) || maxCompressedLinesValue<=1) {
			maxCompressedLines.value=25;
		}
		var newGuildLogHistoryPages = FSH.System.findNode('//input[@name="newGuildLogHistoryPages"]', oForm);
		var newGuildLogHistoryPagesValue = newGuildLogHistoryPages.value*1;
		if (isNaN(newGuildLogHistoryPagesValue) || newGuildLogHistoryPagesValue<=1) {
			newGuildLogHistoryPages.value=25;
		}
		var maxGroupSizeToJoin = FSH.System.findNode('//input[@name="maxGroupSizeToJoin"]', oForm);
		var maxGroupSizeToJoinValue = maxGroupSizeToJoin.value*1;
		if (isNaN(maxGroupSizeToJoinValue) || maxGroupSizeToJoinValue<=1) {
			maxGroupSizeToJoin.value=11;
		}
		var combatEvaluatorBiasElement = FSH.System.findNode('//select[@name="combatEvaluatorBias"]', oForm);
		var combatEvaluatorBias = combatEvaluatorBiasElement.value*1;
		FSH.System.setValue('combatEvaluatorBias', combatEvaluatorBias);
		var enabledHuntingModeElement = FSH.System.findNode('//select[@name="enabledHuntingMode"]', oForm);
		var enabledHuntingMode = enabledHuntingModeElement.value;
		FSH.System.setValue('enabledHuntingMode', enabledHuntingMode);

		FSH.Data.saveBoxes.forEach(FSH.System.saveValueForm, oForm);

		window.alert('FS Helper Settings Saved');
		location.reload();
		return false;
	},

	showLogs: function() { // Native
		document.location=FSH.System.server + 'index.php?cmd=notepad&blank=1&subcmd=showlogs';
	},

	showMonsterLogs: function() { // Native
		document.location=FSH.System.server + 'index.php?cmd=notepad&blank=1&subcmd=monsterlog';
	},

	resetFootprints: function() { // Native
		if (window.confirm('Are you sure you want to reset your footprints?')) {
			var theMap = FSH.System.getValueJSON('map');
			if (theMap) {
				theMap = {};
				theMap.levels = {};
				FSH.System.setValueJSON('map', theMap);
			}
			location.reload();
		}
	},

	updateFpColor: function() { // Native
		FSH.System.setValue('footprintsColor', FSH.System.findNode('//input[@name="footprintsColor"]').value);
		location.reload();
	},

	injectSaveSettings: function(){
		var content = FSH.Layout.notebookContent();
		var fshSettings = {};
		var list = GM_listValues();
		for(var i=0;i<list.length;i += 1) {
		  fshSettings[list[i]]=FSH.System.getValue(list[i]);
		}
		content.innerHTML = '<h1>FSH Settings</h1><br /><center>The box below is your current settings. Copy it to save your current settings<br />' +
			'To load saved settings, simply replace the contents of the box with your saved copy and press the button below.'+
			'<textarea align="center" cols="80" rows="25" style="background-color:white;font-family:Consolas,\'Lucida Console\',\'Courier New\',monospace;" id="HelperfshSettings" name="fshSettings">' + JSON.stringify(fshSettings) + '</textarea>' +
			'<br /><input id="HelperLoadSettings" class="custombutton" type="submit" value="Load Settings!" /></center>';
		$('input#HelperLoadSettings').click(function(){
			var settings = JSON.parse($('textarea#HelperfshSettings').val());
			for(var id in settings){
				if (!settings.hasOwnProperty(id)) { continue; }
				FSH.System.setValue(id,settings[id]);
			}
			alert('Settings loaded successfully!');
		});
	},

};

FSH.news = { // Legacy

	newsFsbox: function() { // Native
		FSH.news.injectShoutboxWidgets('fsbox_input', 100);
	},

	newsShoutbox: function() { // Native
		FSH.news.injectShoutboxWidgets('shoutbox_input', 150);
	},

	injectShoutboxWidgets: function(textboxname, maxcharacters) { // Legacy
		var textArea = FSH.System.findNode('//textarea[@name="' + textboxname + '"]');
		textArea.setAttribute('findme', 'Helper:InputText');
		textArea.setAttribute('maxcharacters', maxcharacters);
		var textAreaTable = FSH.System.findNode('../../../..', textArea);
		textAreaTable.insertRow(-1).insertCell(0).setAttribute('id', 'Helper:ShoutboxPreview');
		textArea.addEventListener('keyup', FSH.news.updateShoutboxPreview, true);
	},

	updateShoutboxPreview: function() { // Legacy
		var textArea = FSH.System.findNode('//textarea[@findme="Helper:InputText"]');
		var textContent = textArea.value;
		var chars = textContent.length;
		var maxchars = parseInt(textArea.getAttribute('maxcharacters'),10);
		if (chars>maxchars) {
			textContent=textContent.substring(0,maxchars);
			textArea.value=textContent;
			chars=maxchars;
		}

		document.getElementById('Helper:ShoutboxPreview').innerHTML = '<table align="center" width="325" border="0"><tbody>' +
			'<tr><td style="text-align:center;color:#7D2252;background-color:#CD9E4B">Preview (' + chars + '/' + maxchars + ' characters)</td></tr>' +
			'<tr><td width="325"><span style="font-size:x-small;" findme="biopreview">' + textContent +
			'</span></td></tr></tbody></table>';

	},

	injectHomePageTwoLink: function() { //jquery
		var archiveLink =
			$('a[href="index.php?cmd=&subcmd=viewupdatearchive"]',
			$('div#pCC'));
		if (archiveLink.length !== 1) {return;}
		archiveLink.after('&nbsp;<a href="index.php?cmd=&subcmd=viewupdatear' +
			'chive&subcmd2=&page=2&search_text=">View Updates Page 2</a>');
		archiveLink = $('a[href="index.php?cmd=&subcmd=viewarchive"]',
			$('div#pCC'));
		archiveLink.after('&nbsp;<a href="index.php?cmd=&subcmd=viewarchive&' +
			'subcmd2=&page=2&search_text=">View News Page 2</a>');
	},

};

FSH.ga = {

	setup: function() {
		if (typeof ga === 'undefined') {return;}

		ga('create', 'UA-76488113-1', 'auto', 'fshApp', {
			userId: $('dt#statbar-character').text()
		});
		ga('fshApp.set', 'appName', 'fshApp');
		ga('fshApp.set', 'appVersion', FSH.version);
		ga('create', 'UA-76488113-2', 'auto', 'fsh', {
			userId: $('dt#statbar-character').text()
		});
		ga('fsh.send', 'pageview');
	},

	screenview: function(funcName) {
		if (typeof ga === 'undefined') {return;}
		ga('fshApp.send', 'screenview', {screenName: funcName});
	},

};

FSH.environment = { // Legacy

	// main event dispatcher
	dispatch: function() { // jQuery

		FSH.ga.setup();

		var cmd;
		var subcmd;
		var subcmd2;
		var type;
		var fromWorld;
		var fn;

		if (document.location.search !== '') {
			cmd = FSH.System.getUrlParameter('cmd') || '-';
			subcmd = FSH.System.getUrlParameter('subcmd') || '-';
			subcmd2 = FSH.System.getUrlParameter('subcmd2') || '-';
			type = FSH.System.getUrlParameter('type') || '-';
			fromWorld = FSH.System.getUrlParameter('fromworld') || '-';
		} else {
			cmd = $('input[name="cmd"]').val() || '-';
			subcmd = $('input[name="subcmd"]').val() || '-';
			if (subcmd==='dochat') {
				cmd='-';
				subcmd='-';
			}
			subcmd2 = $('input[name="subcmd2"]').val() || '-';
			type = '-';
			fromWorld = '-';
		}

		FSH.cmd = cmd;
		FSH.subcmd = subcmd;
		FSH.subcmd2 = subcmd2;
		FSH.type = type;
		FSH.fromWorld = fromWorld;

		FSH.Helper.page = cmd + '/' + subcmd + '/' + subcmd2 + '(' + type + ')';

		var hcsData = $('html').data('hcs');
		if (hcsData && hcsData['new-ui']) { // UFSG or QuickBuff
			FSH.environment.prepareEnv();
		}

		var pageSwitcher = FSH.Data.pageSwitcher;

		if (pageSwitcher[cmd] &&
			pageSwitcher[cmd][subcmd] &&
			pageSwitcher[cmd][subcmd][subcmd2] &&
			pageSwitcher[cmd][subcmd][subcmd2][type] &&
			pageSwitcher[cmd][subcmd][subcmd2][type][fromWorld]) {
			fn = FSH.System.getFunction(
				pageSwitcher[cmd][subcmd][subcmd2][type][fromWorld]);
			if (typeof fn === 'function') {fn();}
		}

		if (FSH.System.getValue('playNewMessageSound')) {
			FSH.environment.doMsgSound();
		}

		// This must be at the end in order not to screw up other FSH.System.findNode calls (Issue 351)
		if (!FSH.Helper.huntingMode) {
			FSH.environment.injectQuickLinks();
		}
	},

	prepareEnv: function() { // jQuery
		if (FSH.System.getValue('gameHelpLink')) {
			var gameHelpNode = $('div.minibox h3:contains("Game Help")');
			$(gameHelpNode).each(function() {
				$(this).html('<a href="index.php?cmd=settings" style="color:' +
					' #FFFFFF; text-decoration: underline">' +
					$(this).text() + '</a>');
			});
		}

		FSH.Helper.huntingMode = FSH.System.getValue('huntingMode');

		if (FSH.Helper.huntingMode) {
			FSH.environment.replaceKeyHandler();
			// FSH.Helper.fixOnlineGuildBuffLinks();
		} else {
			//move boxes in opposite order that you want them to appear.
			if (FSH.System.getValue('moveGuildList')) {
				FSH.Layout.moveRHSBoxUpOnRHS('minibox-guild');
			}
			if (FSH.System.getValue('moveOnlineAlliesList')) {
				FSH.Layout.moveRHSBoxUpOnRHS('minibox-allies');
			}
			if (FSH.System.getValue('moveFSBox')) {
				FSH.Layout.moveRHSBoxToLHS('minibox-fsbox');
			}
			FSH.environment.getEnvVars();
			if (FSH.Helper.enableAllyOnlineList ||
				FSH.Helper.enableEnemyOnlineList) {
				FSH.allyEnemy.prepareAllyEnemyList();
			}
			if (FSH.Helper.enableWantedList ||
				FSH.Helper.enableActiveBountyList) {
				FSH.activeWantedBounties.prepareBountyData();
			}
			FSH.environment.injectStaminaCalculator();
			FSH.environment.injectLevelupCalculator();
			FSH.Layout.injectMenu();
			FSH.environment.replaceKeyHandler();
			FSH.environment.injectFSBoxLog();
			FSH.environment.fixOnlineGuildBuffLinks();
			if (FSH.Helper.enableGuildInfoWidgets) {
				FSH.environment.addGuildInfoWidgets();
			}
			if (FSH.Helper.enableOnlineAlliesWidgets) {
				FSH.environment.addOnlineAlliesWidgets();
			}
			FSH.notification.injectJoinAllLink();
			FSH.environment.changeGuildLogHREF();
			FSH.news.injectHomePageTwoLink();
			if (FSH.Helper.enableTempleAlert) {
				FSH.notification.injectTempleAlert();}
			if (FSH.Helper.enableUpgradeAlert) {
				FSH.notification.injectUpgradeAlert();}
			if (FSH.Helper.enableComposingAlert) {
				FSH.composing.injectComposeAlert();}
			FSH.messaging.injectQuickMsgDialogJQ();
		}
		if (!FSH.System.getValue('hideHelperMenu')) {
			FSH.helperMenu.injectHelperMenu();
		}
	},

	replaceKeyHandler: function() { // jQuery
		if ($('#worldPage').length === 0) { // not new map
			//clear out the HCS keybinds so only helper ones fire
			$.each($(document).controls('option').keys, function(index) { 
				$(document).controls('option').keys[index] = [];
			});
		}
		window.document.onkeypress = null;
		window.document.combatKeyHandler = null;
		window.document.realmKeyHandler = null;
		window.document.onkeypress = FSH.Helper.keyPress;
	},

	getEnvVars: function() { // Native
		FSH.Helper.enableAllyOnlineList =
			FSH.System.getValue('enableAllyOnlineList');
		FSH.Helper.enableEnemyOnlineList =
			FSH.System.getValue('enableEnemyOnlineList');
		FSH.Helper.enableGuildInfoWidgets =
			FSH.System.getValue('enableGuildInfoWidgets');
		FSH.Helper.enableOnlineAlliesWidgets =
			FSH.System.getValue('enableOnlineAlliesWidgets');
		FSH.Helper.hideGuildInfoTrade =
			FSH.System.getValue('hideGuildInfoTrade');
		FSH.Helper.hideGuildInfoSecureTrade =
			FSH.System.getValue('hideGuildInfoSecureTrade');
		FSH.Helper.hideGuildInfoBuff =
			FSH.System.getValue('hideGuildInfoBuff');
		FSH.Helper.hideGuildInfoMessage =
			FSH.System.getValue('hideGuildInfoMessage');
		FSH.Helper.hideBuffSelected = FSH.System.getValue('hideBuffSelected');
		FSH.Helper.enableTempleAlert = FSH.System.getValue('enableTempleAlert');
		FSH.Helper.enableUpgradeAlert =
			FSH.System.getValue('enableUpgradeAlert');
		FSH.Helper.enableComposingAlert =
			FSH.System.getValue('enableComposingAlert');

		FSH.Helper.enableActiveBountyList =
			FSH.System.getValue('enableActiveBountyList');
		FSH.Helper.enableWantedList = FSH.System.getValue('enableWantedList');

		FSH.Helper.allyEnemyOnlineRefreshTime =
			FSH.System.getValue('allyEnemyOnlineRefreshTime') * 1000;

	},

	injectStaminaCalculator: function() { // jQuery
		var staminaMouseover = $('dl#statbar-stamina-tooltip-stamina:first');
		var stamina = $(staminaMouseover).find('dt.stat-name:first').next().text().replace(/,/g,'');
		var staminaRE = /([,0-9]+)\s\/\s([,0-9]+)/;
		var curStamina = FSH.System.intValue(staminaRE.exec(stamina)[1]);
		var maxStamina = FSH.System.intValue(staminaRE.exec(stamina)[2]);
		var gainPerHour = $(staminaMouseover).find('dt.stat-stamina-gainPerHour:first').next().text().replace(/,/g,'');
		var gainPerHourRE = /\+([,0-9]+)/;
		gainPerHour = FSH.System.intValue(gainPerHourRE.exec(gainPerHour)[1]);
		var nextGain = $(staminaMouseover).find('dt.stat-stamina-nextGain:first').next().text().replace(/,/g,'');
		var nextGainRE = /([,0-9]+)m ([,0-9]+)s/;
		var nextGainMinutes = FSH.System.intValue(nextGainRE.exec(nextGain)[1]);
		// var nextGainSeconds = FSH.System.intValue(nextGainRE.exec(nextGain)[2]);
		var nextGainHours = nextGainMinutes/60;
		//get the max hours to still be inside stamina maximum
		var hoursToMaxStamina = Math.floor((maxStamina - curStamina)/gainPerHour);
		var millisecondsToMaxStamina = 1000*60*60*(hoursToMaxStamina + nextGainHours);
		var now = Date.now();
		var nextHuntMilliseconds = now + millisecondsToMaxStamina;
		var d = new Date(nextHuntMilliseconds);
		var nextHuntTimeText = FSH.System.formatShortDate(d);
		$(staminaMouseover).append('<dt class="stat-stamina-nextHuntTime">Max Stam At</dt><dd>' + nextHuntTimeText + '</dd>');
	},

	injectLevelupCalculator: function() { // jQuery
		var remainingXP =  parseInt($('dt[class="stat-xp-remaining"]').next('dd').html().replace(/,/g,''), 10);
		var nextGainTime =  $('dt[class="stat-xp-nextGain"]').next('dd').html();
		var gain =  parseInt($('dt[class="stat-xp-gainPerHour"]').next('dd').html().replace(/,/g,''), 10);
		var nextGainRE = /([0-9]*)m\s*([0-9]*)s/i;
		var nextGain = nextGainRE.exec(nextGainTime);
		var nextGainMin = parseInt(nextGain[1],10);
		var nextGainSec = parseInt(nextGain[2],10);
		var hoursToNextLevel = Math.ceil(remainingXP/gain);
		var millisecsToNextGain = (hoursToNextLevel*60*60+nextGainMin*60+nextGainSec)*1000;
		nextGainTime  = new Date(Date.now() + millisecsToNextGain);
		$('dl[id="statbar-level-tooltip-general"]').append('<dt class="stat-xp-nextLevel">Next Level At</dt><dd>'+
				FSH.System.formatShortDate(nextGainTime)+'</dd>');
	},

	injectFSBoxLog: function() { // Bad jQuery
		if (!FSH.System.getValue('fsboxlog')) {return;}
		var node=$('div#minibox-fsbox');
		if (node.length > 0) {
			var fsbox=node.find('p.message').html().replace('<br><br>',' ');
			var boxList=FSH.System.getValue('fsboxcontent');
			if (boxList.indexOf(fsbox)<0) {boxList='<br>'+fsbox+boxList;}
			if (boxList.length>10000) {boxList=boxList.substring(0,10000);}
			FSH.System.setValue('fsboxcontent',boxList);
			var nodediv = node.find('div');
			var playerName = node.find('a:first').text();
			nodediv.html(nodediv.html() + '&nbsp;' +
				'<nobr><a title="Add to Ignore List" href="index.php?cmd=log&subcmd=doaddignore&ignore_username=' + playerName +
				'" style="color:PaleVioletRed">[ Ignore ]</a>&nbsp;' +
				'<a href="index.php?cmd=notepad&blank=1&subcmd=fsboxcontent" style="color:yellow">[ Log ]</a></nobr>');
		}
	},

	injectFsBoxContent: function(content) { //native
		if (!content) {content = FSH.Layout.notebookContent();}
		content.innerHTML = FSH.Layout.makePageTemplate('FS Box Log', '',
			'fsboxclear', 'Clear', 'fsboxdetail');
		document.getElementById('fsboxclear')
			.addEventListener('click', function() {
				FSH.System.setValue('fsboxcontent','');
				location.reload();}, true);
		document.getElementById('fsboxdetail').innerHTML =
			FSH.System.getValue('fsboxcontent');
	},

	fixOnlineGuildBuffLinks: function() { // jQuery
		$('a#guild-minibox-action-quickbuff').each(function() {
			var self = $(this);
			self.attr('href', self.attr('href').replace(/500/g,'1000'));
		});
		$('a#online-allies-action-quickbuff').each(function() {
			var self = $(this);
			self.attr('href', self.attr('href').replace(/, 500/g,', 1000'));
		});
	},

	addGuildInfoWidgets: function() { //jquery
		var guildMembrList = $('ul#minibox-guild-members-list');
		if (guildMembrList.length === 0) {return;} // list exists
		//hide guild info links
		if (FSH.Helper.hideGuildInfoTrade) {
			$('a#guild-minibox-action-trade').hide();
		}
		if (FSH.Helper.hideGuildInfoSecureTrade) {
			$('a#guild-minibox-action-secure-trade').hide();
		}
		if (FSH.Helper.hideGuildInfoBuff) {
			$('a#guild-minibox-action-quickbuff').hide();
		}
		if (FSH.Helper.hideGuildInfoMessage) {
			$('a#guild-minibox-action-send-message').hide();
		}
		if (FSH.Helper.hideBuffSelected) {
			$('a.guild-buff-check-on').hide();
			$('ul#guild-quick-buff').hide();
		}
		//add coloring for offline time
		$('a.player-name', guildMembrList).each(function() {
			var playerA = $(this);
			var lastActivityMinutes = /Last Activity:<\/td><td>(\d+) mins/
				.exec(playerA.data('tipped'))[1];
			if (lastActivityMinutes < 2) {
				playerA.css('color','green');
			} else if (lastActivityMinutes < 5) {
				playerA.css('color','white');
			} else {
				playerA.css('color','gray');
			}
		});
		var chatH4 = $('h4:contains("Chat")');
		chatH4.html('<a href="index.php?cmd=guild&subcmd=chat"><span style="' +
			'color:white;">' + chatH4.html() + '</span></a>');
	},

	addOnlineAlliesWidgets: function() { // jQuery
		var onlineAlliesList = $('ul#minibox-allies-list');
		if (onlineAlliesList.length === 0) {return;}
		if (FSH.Helper.hideGuildInfoTrade) {
			$('a#online-allies-action-trade').hide();
		}
		if (FSH.Helper.hideGuildInfoSecureTrade) {
			$('a#online-allies-action-secure-trade').hide();
		}
		if (FSH.Helper.hideGuildInfoBuff) {
			$('a#online-allies-action-quickbuff').hide();
		}
		if (FSH.Helper.hideGuildInfoMessage) {
			$('a#online-allies-action-send-message').hide();
		}
		if (FSH.Helper.hideBuffSelected) {
			$('a.ally-buff-check-on').hide();
			$('ul#ally-quick-buff').hide();
		}
		//add coloring for offline time
		$(onlineAlliesList).find('li.player').each(function() {
			var playerA = $(this).find('a[class*="player-name"]');
			var onMouseOver = playerA.data('tipped');
			var lastActivityMinutes = /Last Activity:<\/td><td>(\d+) mins/.exec(onMouseOver)[1];
			if (lastActivityMinutes < 2) {
				playerA.css('color','DodgerBlue');
			} else if (lastActivityMinutes < 5) {
				playerA.css('color','LightSkyBlue');
			} else {
				playerA.css('color','PowderBlue');
			}
		});
	},

	changeGuildLogHREF: function() { // Legacy
		if (!FSH.System.getValue('useNewGuildLog')) {return;}
		var guildLogNodes = FSH.System.findNodes('//a[@href="index.php?cmd=guild&subcmd=log"]');
		var guildLogNode;
		var messageBox;
		if (guildLogNodes) {
			for (var i=0;i<guildLogNodes.length;i += 1) {
				guildLogNode = guildLogNodes[i];
				guildLogNode.setAttribute('href', 'index.php?cmd=notepad&blank=1&subcmd=newguildlog');
			}
			//hide the lhs box
			if (location.search === '?cmd=notepad&blank=1&subcmd=newguildlog') {
				if(guildLogNode.firstChild.nodeName === 'IMG' && guildLogNode.firstChild.getAttribute('alt') === 'You have unread guild log messages.') { //old UI
					messageBox = guildLogNode.parentNode.parentNode;
					if (messageBox) {
						messageBox.style.display = 'none';
						messageBox.style.visibility = 'hidden';
						//hide the empty row before it too (can"t do after in case there is no after row)
						messageBox.previousSibling.style.display = 'none';
						messageBox.previousSibling.style.visibility = 'hidden';
					}
				} else if (guildLogNode.innerHTML.search('Guild Log updated!') !== -1) { // new UI
					messageBox = guildLogNode.parentNode;
					if (messageBox) {
						messageBox.style.display = 'none';
						messageBox.style.visibility = 'hidden';
					}
				}
			}
		}
	},

	doMsgSound: function() { // jQuery
		var soundLocation = FSH.System.getValue('defaultMessageSound');
		$('a:contains("New log messages"):first').each(function(){
			$(this).after('<audio src="' + soundLocation +
			'" autoplay=true />');
		});
		$('a:contains("New Guild chat message"):first').each(function(){
			$(this).after('<audio src="' + soundLocation +
			'" autoplay=true />');
		});
	},

	injectQuickLinks: function() { //jquery
		// don't put all the menu code here (but call if clicked) to minimize lag
		var quickLinks = FSH.System.getValueJSON('quickLinks');
		if (!quickLinks) {quickLinks=[];}
		//FSH.Helper.quickLinks = quickLinks;
		if (quickLinks.length <= 0) {return;}
		var node=$('#statbar-container');
		if (node.length === 0) {return;}
		var html = '<div style="cursor:pointer; text-decoration:underline; ' +
			'text-align:left; position:absolute; color:black; top:' +
			FSH.System.getValue('quickLinksTopPx') + 'px; left:' +
			FSH.System.getValue('quickLinksLeftPx') + 'px; background-image:' +
			'url(\'' + FSH.System.imageServer + '/skin/inner_bg.jpg\'); font-' +
			'size:12px; -moz-border-radius:5px; -webkit-border-radius:5px; ' +
			'border:3px solid #cb7; z-index: 1; width: 100px;" ' +
			'id=fshQuickLinks nowrap>';
		for (var i=0; i<quickLinks.length; i += 1) {
				html += '<li><span style="cursor:pointer; text-decoration:' +
					'underline;"><a href="' + quickLinks[i].url + '"' +
					(quickLinks[i].newWindow ? ' target=new' : '') +
					'>' + quickLinks[i].name + '</a></span></li>';
			
		}
		html += '</div>';
		node.before(html);
		$('#fshQuickLinks').draggable();
		if (FSH.System.getValue('keepHelperMenuOnScreen')) {
			var quickLinksTopPx = parseInt(
				FSH.System.getValue('quickLinksTopPx'), 10);
			$(document).ready(function(){  
				$(window).scroll(function() {  
					var offset = quickLinksTopPx + $(document).scrollTop() +
						'px';  
					$('#fshQuickLinks').animate({top:offset},
						{duration:0,queue:false});  
				});  
			}); 
		}
	},

	unknownPage: function() { // Legacy

		if ($('div#pCC td:contains("Below is the current status for ' +
			'the relic")').length > 0) {
			FSH.ga.screenview('unknown.oldRelic.injectRelic');
			FSH.oldRelic.injectRelic();
		}
		var isBuffResult = FSH.System.findNode('//td[contains(.,"Back to Quick Buff Menu")]');
		if (isBuffResult) {
			FSH.ga.screenview('unknown.quickBuff.updateBuffLog');
			FSH.quickBuff.updateBuffLog();
		}
		//FSH.System.findNode('//td[contains(.,"then click to purchase for the price listed below the item.")]');
		//var isShopPage =  $('#shop-info').length > 0;
		if ($('#shop-info').length > 0) {
			FSH.ga.screenview('unknown.Helper.injectShop');
			FSH.Helper.injectShop();
		}
		var isQuestBookPage = FSH.System.findNode('//td[.="Quest Name"]');
		if (isQuestBookPage) {
			FSH.ga.screenview('unknown.questBook.injectQuestBookFull');
			FSH.questBook.injectQuestBookFull();
		}
		var isAdvisorPageClue1 = FSH.System.findNode('//font[@size=2 and .="Advisor"]');
		var clue2 = '//a[@href="index.php?cmd=guild&amp;subcmd=manage" and .="Back to Guild Management"]';
		var isAdvisorPageClue2 = FSH.System.findNode(clue2);
		if (isAdvisorPageClue1 && isAdvisorPageClue2) {
			FSH.ga.screenview('unknown.guildAdvisor.injectAdvisor');
			FSH.guildAdvisor.injectAdvisor();
		}
		if (FSH.System.findNode('//a[.="Back to Scavenging"]')) {
			FSH.ga.screenview('unknown.scavenging.injectScavenging');
			FSH.scavenging.injectScavenging(); // Is this used???
		}
		if ($('div#pCC img[title="Inventing"]').length > 0) {
			FSH.ga.screenview('unknown.Helper.injectInvent');
			FSH.Helper.injectInvent();
		}
	},

};

FSH.messaging = { // jQuery

	injectQuickMsgDialogJQ: function() { // jQuery
		FSH.Helper.template = FSH.System.getValueJSON('quickMsg');
		var buttons = $('#quickMessageDialog').dialog('option','buttons');
		buttons.Template = FSH.messaging.showMsgTemplate;
		$('#quickMessageDialog').dialog('option','buttons',buttons);
		window.openQuickMsgDialog = FSH.messaging.openQuickMsgDialog;
	},

	showMsgTemplate: function() { // jQuery
		var targetPlayer=$('#quickMsgDialog_targetUsername').text();
		$('#msgTemplateDialog').remove();

		// template displayed
		var html='<div id=msgTemplateDialog title="Choose Msg Template" ' +
			'style="display:none"><style>#msgTemplate .ui-selecting { ' +
			'background: #FECA40; };</style><ol id=msgTemplate valign=center>';
		for (var i = 0; i < FSH.Helper.template.length; i += 1) {
			html += '<li class="ui-widget-content">' +
				FSH.Helper
				.template[i]
				.replace(/\{playername\}/g, targetPlayer) + '</li>';
		}
		html += '</ol></div>';
		$('body').append(html);

		// template manager
		$('#msgTemplate li').prepend('<input type=button class="del-button" value=Del style="display:none">');
		$('#msgTemplate').append('<li class="add-button" style="display:none"><input type=button id=newTmplAdd value=Add><input id=newTmpl class=ui-widget-content></li>');
		$(':button','#msgTemplate').button();
		$('.del-button').click(function(evt) {
			FSH.Helper.template.splice($('#msgTemplate li').index(evt.target.parentNode), 1);
			FSH.System.setValueJSON('quickMsg', FSH.Helper.template);
			$('#msgTemplateDialog').dialog('close');
			FSH.messaging.showMsgTemplate();
		});
		$('#newTmplAdd').click(function() {
			if ($('#newTmpl').val() === '') {return;}
			FSH.Helper.template.push($('#newTmpl').val());
			FSH.System.setValueJSON('quickMsg', FSH.Helper.template);
			$('#msgTemplateDialog').dialog('close');
			FSH.messaging.showMsgTemplate();
		});

		// enable selectable template
		$( '#msgTemplate' ).selectable({
			filter: 'li.ui-widget-content',
			stop: function() {
				if ($('.add-button.ui-selected').length > 0) {return;} // click on add row
				if ($('.ui-selected').length === 0) {return;} // nothing selected yet
				$('#quickMsgDialog_msg').val($('#quickMsgDialog_msg').val() +
					$('#msgTemplate .ui-selected').text()+'\n');
				$('#msgTemplateDialog').dialog('close');
			}
		});

		// show the template form
		$('#msgTemplateDialog').dialog({'buttons':{
			'Manage':function() {
				$('.del-button').toggle();
				$('.add-button').toggle();
			},
			'Cancel':function() {
				$('#msgTemplateDialog').dialog('close');
				$('#msgTemplateDialog').remove();
			}
		}});
	},

	openQuickMsgDialog: function(name, msg, tip) { // jQuery
		$('#quickMsgDialog_targetUsername').html(name);
		$('#quickMsgDialog_targetPlayer').val(name);
		if (!msg) {msg = '';}
		$('#quickMsgDialog_msg').val(msg);
		$('#quickMsgDialog_msg').removeAttr('disabled');
		if (!tip) {tip='';}
		$('.validateTips').text(tip);
		$('#quickMessageDialog').dialog('open');
	},

};

FSH.mailbox = { // Hybrid

	injectMailbox: function() { // Hybrid
		var items = $('div#pCC a');
		if (items.length === 0) {return;} // Empty mailbox
		$('#pCC').wrapInner('<div id="regularMailbox" />');
		var quickTakeDiv='<div id="quickTake" style="display:none"><br />' +
			'<br /><center><font size="3"><b>Quick Take</b></font>'+
			'<br />Select which item to take all similar items from your ' +
			'Mailbox.<br /></center>'+
			'<table id="quickTakeTable" align="left"><tr><th width=20%>' +
			'Actions</th><th>Items</th></tr><tr><td id="take_result" ' +
			'colspan=2></td></tr></table>'+
			'</div>';
		$('#pCC').prepend('<span id="mailboxSwitcher" ' +
			'style="cursor:pointer; text-decoration:underline; ' +
			'color:blue;">Toggle Quick Take</span><input type="hidden" ' +
			'id="currentMBDisplay" value="mailbox" />'+quickTakeDiv);
			//~ }
		var itemList = {};
		$('#regularMailbox img[data-tipped*="t=5"]').each(function() {
			var itemIDs = /item_id=(\d+)\&inv_id=(\d+)/
				.exec($(this).attr('data-tipped'));
			if (!itemIDs) {return;}
			var itemId = itemIDs[1];
			var invId = itemIDs[2];
			var tipped = $(this).attr('data-tipped');
			var src = $(this).attr('src');
			if (!itemList[itemId]) {
				var invIds = [];
				invIds.push(invId);
				itemList[itemId] = {
					invIds: invIds,
					tipped: tipped,
					src: src
				};
			} else {
				itemList[itemId].invIds.push(invId);
			}
		});
		var quickTakeTable = $('#quickTakeTable');
		Object.keys(itemList).forEach(function(id) {
			var titem = itemList[id];
			quickTakeTable.append('<tr><td align=center>' +
				'<span style="cursor:pointer; text-decoration:underline; ' +
				'color:blue; font-size:x-small;" ' +
				'id="Helper:takeAllSimilar' + id + '" invIDs="' + titem.invIds.join() +
				'">Take All ' + titem.invIds.length + '</span></td>'+
				'<td><img src="' + titem.src +
				'" class="tip-dynamic" border="0" data-tipped="' +
				titem.tipped + '"></td></tr>');
			document.getElementById('Helper:takeAllSimilar' + id)
				.addEventListener('click', FSH.mailbox.takeAllSimilar, true);
		});
		document.getElementById('mailboxSwitcher')
			.addEventListener('click', FSH.mailbox.toggleQuickTake, true);
	},

	takeAllSimilar: function(evt) { // Hybrid
		var invIds = evt.target.getAttribute('invIDs').split(',');
		evt.target.parentNode.innerHTML = 'taking all ' +
			invIds.length + ' items';
		invIds.forEach(function(invId) {
			$.ajax({
				type: 'POST',
				url: 'index.php',
				data: {
					'cmd': 'tempinv',
					'subcmd': 'takeitem',
					'temp_id': invId,
					'ajax': '1'
				},
				dataType: 'json'
			}).done(FSH.mailbox.quickDoneTaken);
		});
	},

	quickDoneTaken: function(data) { // jQuery
		// www.fallensword.com/index.php?cmd=tempinv&subcmd=takeitem&temp_id=141980821&ajax=1
		// {"r":0,"m":"","temp_id":141980821}
		if (data.r !== 0) {
			var $tempError = $('#temp_error');
			$tempError.html('<span style="color: red">Error:</span> ' + data.m);
			$tempError.show().delay(5000).hide(400);
		} else {
			var qtipId = $('#temp-inv-img-' + data.temp_id).data('hasqtip');
			$('#temp-inv-' + data.temp_id).remove();
			$('#qtip-' + qtipId).remove();
		}
		$('#take_result').append('<br />Item taken.');
	},

	toggleQuickTake: function(){ // jQuery
		if($('#currentMBDisplay').attr('value')==='mailbox'){
			$('#mailboxSwitcher').html('Toggle Mailbox');
			$('#quickTake').css('display','block');
			$('#regularMailbox').css('display','none');
			$('#currentMBDisplay').attr('value','quicktake');
		}else{
			$('#mailboxSwitcher').html('Toggle Quick Take');
			$('#quickTake').css('display','none');
			$('#regularMailbox').css('display','block');
			$('#currentMBDisplay').attr('value','mailbox');
		}
	},

};

FSH.misc = { // Legacy

	injectBank: function() { // Legacy
		var bank = FSH.System.findNode('//b[contains(.,"Bank")]');
		if (bank) {
			bank.innerHTML+='<br><a href="/index.php?cmd=guild&subcmd=bank">Guild Bank</a>';
		}
	},

	injectAuctionHouse: function() { // Bad jQuery
		if (FSH.System.getValue('autoFillMinBidPrice')) {
			$('input#auto-fill').not(':checked').click();
		}
		$('input[value="My Auctions"]').before('<input id="helperAHCancelAll" type="button" value="Cancel All" ' +
			'class="custombutton auctionbutton" style="float: right;">');
		$('input#helperAHCancelAll').click(function() {
			$('a.auctionCancel').each(function() {$(this).click();});
		});
		$('div#sort0').click();
	},

	injectFindPlayer: function() { // Bad jQuery
		var findPlayerButton = $('input[value="Find Player"]');
		var levelToTest = FSH.System.intValue($('dt.stat-level:first').next().text());
		var characterVirtualLevel = FSH.System.getValue('characterVirtualLevel');
		if (characterVirtualLevel) {levelToTest = characterVirtualLevel;}
		var pvpLowerLevelModifier = levelToTest > 205 ? 10 : 5;
		var pvpUpperLevelModifier = levelToTest >= 200 ? 10 : 5;
		findPlayerButton.parent().append('&nbsp;<a href="index.php?cmd=findplayer&search_active=1&search_username=&search_level_min=' +
			(levelToTest - pvpLowerLevelModifier) + '&search_level_max=' + (levelToTest + pvpUpperLevelModifier) +
			'&search_in_guild=0"><span style="color:blue;">Get PvP targets</span></a>' +
			'&nbsp;<a href="index.php?cmd=findplayer&search_active=1&search_username=&search_level_min=' +
			(levelToTest - 25) + '&search_level_max=' + (levelToTest + 25) +
			'&search_in_guild=0"><span style="color:blue;">Get GvG targets</span></a>');

		$('table[class="width_full"]').find('a[href*="player_id"]').each(function() {
			var id = /player_id=([0-9]*)/.exec($(this).attr('href'));
			$(this).after('<a style="color:blue;font-size:10px;" '+FSH.Layout.quickBuffHref(id[1])+'>[b]</a>');
		});
	},

	addMarketplaceWidgets: function() { // Legacy
		var requestTable = FSH.System.findNode('//table[tbody/tr/td/input[@value="Confirm Request"]]');
		var newRow = requestTable.insertRow(2);
		var newCell = newRow.insertCell(0);
		newCell.id = 'warningfield';
		newCell.colSpan = '2';
		newCell.align = 'center';

		document.getElementById('price').addEventListener('keyup', FSH.misc.addMarketplaceWarning, true);
		document.getElementById('amount').addEventListener('keyup', FSH.misc.addMarketplaceWarning, true);
	},

	addMarketplaceWarning: function() { // Legacy
		 var amount = FSH.System.findNode('//input[@id="amount"]').value;
		 var goldPerPoint = FSH.System.findNode('//input[@id="price"]');
		 var warningField = FSH.System.findNode('//td[@id="warningfield"]');
		 var sellPrice = goldPerPoint.value;
		 if (sellPrice.search(/^[0-9]*$/) !== -1) {
			var warningColor = 'green';
			var warningText = '</b><br>This is probably an offer that will please someone.';
			if (sellPrice < 100000) {
				warningColor = 'brown';
				warningText = '</b><br>This is too low ... it just ain"t gonna sell.';
			} else if (sellPrice > 250000) {
				warningColor = 'red';
				warningText = '</b><br>Hold up there ... this is way to high a price ... you should reconsider.';
			}

			warningField.innerHTML = '<span style="color:' + warningColor +
				';">You are offering to buy <b>' + amount +
				'</b> FSP for >> <b>' + FSH.System.addCommas(sellPrice) +
				warningText + ' (Total: ' +
				FSH.System.addCommas(amount * sellPrice +
				Math.ceil(amount * sellPrice * 0.005)) + ')</span>';
		}
	},

	injectNotepad: function() { //jquery
		$('textarea#notepad_notes')
		.attr('cols', '90')
		.attr('rows', '30')
		.css('resize', 'none');
	},

};

FSH.guild = { // Legacy

	injectViewGuild: function() { // Legacy
		FSH.guild.removeGuildAvyImgBorder();
		FSH.guild.guildXPLock();

		var highlightPlayersNearMyLvl = FSH.System.getValue('highlightPlayersNearMyLvl');
		var highlightGvGPlayersNearMyLvl = FSH.System.getValue('highlightGvGPlayersNearMyLvl');
		if (highlightPlayersNearMyLvl || highlightGvGPlayersNearMyLvl) {
			var memList = FSH.System.findNode('//tr[td/b[.="Members"]]/following-sibling::tr/td/table');
			var levelToTest = FSH.System.intValue($('dt.stat-level:first').next().text());
			var characterVirtualLevel = FSH.System.getValue('characterVirtualLevel');
			if (characterVirtualLevel) {levelToTest = characterVirtualLevel;}
			for (var i=2;i<memList.rows.length;i += 1) {
				// var iplus1 = i+1;
				if (memList.rows[i].cells[1]) {
					// Firefox reads it as </td> and chrome reads it as \&lt;\/td\&gt;
					var vlevel = /VL:.+?(\d+)/.exec(memList.rows[i].cells[1].innerHTML)[1];
					// var level = memList.rows[i].cells[2].innerHTML;
					var aRow = memList.rows[i];
					if (highlightPlayersNearMyLvl && Math.abs(vlevel - levelToTest) <= (levelToTest <= 205 ? 5 : 10)) {
						aRow.style.backgroundColor = '#4671C8'; //blue
					} else if (highlightGvGPlayersNearMyLvl && Math.abs(vlevel - levelToTest) <= (levelToTest <= 300 ? 25 : levelToTest <= 700 ? 50 : 100)) {
						aRow.style.backgroundColor = '#FF9900'; //red
					}
				}
			}
		}
		FSH.guild.changeGuildListOfflineBallColor();
	},

	injectGuild: function() { // Legacy
		FSH.guild.removeGuildAvyImgBorder();
		FSH.guild.guildXPLock();

		var leftHandSideColumnTable = FSH.System.findNode('//table[tbody/tr/td/font/a[contains(.,"Change Logo")]]');
		var changeLogoCell = leftHandSideColumnTable.rows[0].cells[1].firstChild;
		changeLogoCell.innerHTML += '[ <span style="cursor:pointer; text-decoration:underline;" ' +
			'id="toggleGuildLogoControl" linkto="guildLogoControl" title="Toggle Section">X</span> ]';
		var guildLogoElement = leftHandSideColumnTable.rows[2].cells[0].firstChild.nextSibling;
		guildLogoElement.id = 'guildLogoControl';
		if (FSH.System.getValue('guildLogoControl')) {
			guildLogoElement.style.display = 'none';
			guildLogoElement.style.visibility = 'hidden';
		}
		var leaveGuildCell = leftHandSideColumnTable.rows[4].cells[1].firstChild;
		leaveGuildCell.innerHTML += '<span class="fshNoWrap">[ <span style="cursor:pointer; text-decoration:underline;" ' +
			'id="toggleStatisticsControl" linkto="statisticsControl" title="Toggle Section">X</span> ]</span>';
		var statisticsControlElement = leftHandSideColumnTable.rows[6].cells[0].firstChild.nextSibling;
		statisticsControlElement.id = 'statisticsControl';
		if (FSH.System.getValue('statisticsControl')) {
			statisticsControlElement.style.display = 'none';
			statisticsControlElement.style.visibility = 'hidden';
		}
		var buildCell = leftHandSideColumnTable.rows[15].cells[1].firstChild;
		buildCell.innerHTML += '[ <span style="cursor:pointer; text-decoration:underline;" ' +
			'id="toggleGuildStructureControl" linkto="guildStructureControl" title="Toggle Section">X</span> ]';
		var guildStructureControlElement = leftHandSideColumnTable.rows[17].cells[0].firstChild.nextSibling;
		guildStructureControlElement.id = 'guildStructureControl';
		if (FSH.System.getValue('guildStructureControl')) {
			guildStructureControlElement.style.display = 'none';
			guildStructureControlElement.style.visibility = 'hidden';
		}

		document.getElementById('toggleGuildLogoControl')
			.addEventListener('click', FSH.System.toggleVisibilty, true);
		document.getElementById('toggleStatisticsControl')
			.addEventListener('click', FSH.System.toggleVisibilty, true);
		document.getElementById('toggleGuildStructureControl')
			.addEventListener('click', FSH.System.toggleVisibilty, true);

		$('td:contains("Username"):last').parents('table:first')
			.find('a[href]').each(function(){
			$(this).after(' <a style="color:blue;font-size:10px;" ' +
			'href=\'javascript:window.openWindow("index.php?cmd=quickbuff&t=' +
			$(this).text() + '", "fsQuickBuff", 618, 1000, ",scrollbars")\'' +
			'>[b]</a>'); // FIXME
		});

		// self recall
		var selfRecall = leftHandSideColumnTable.rows[22].cells[0];
		selfRecall.innerHTML+=' [<a href="index.php?cmd=guild&subcmd=' +
			'inventory&subcmd2=report&user=' +
			$('dt.stat-name:first').next().text().replace(/,/g,'') +
			'" title="Self Recall">SR</a>]';

		//Detailed conflict information
		if (FSH.System.getValue('detailedConflictInfo') === true) {
			var confNode = FSH.System.findNode('//table[contains(@id,"statisticsControl")]');
			FSH.System.xmlhttp('index.php?cmd=guild&subcmd=conflicts',
				FSH.guild.getConflictInfo, {'node': confNode});
		}
		FSH.guild.changeGuildListOfflineBallColor();

	},

	removeGuildAvyImgBorder: function() { //jquery
		$('img[oldtitle$="\'s Logo"]').css('border-style', 'none');
	},

	guildXPLock: function() { // Legacy
		var xpLock = FSH.System.findNode('//a[contains(.,"Guild") and contains(.,"XP")]');
		if (!xpLock) {return;}
		var xpLockmouseover = $(xpLock).data('tipped');
		var xpLockXP = FSH.System.getIntFromRegExp(xpLockmouseover, /XP Lock: <b>(\d*)/);
		var actualXP = FSH.System.getIntFromRegExp(xpLockmouseover, /XP: <b>(\d*)/);
		if (actualXP < xpLockXP) {
			try {
			var xpNode = xpLock.parentNode.parentNode;
				xpNode.cells[1].innerHTML += ' (<b>' + FSH.System.addCommas(xpLockXP - actualXP) + '</b>)';
			} catch (err) {
				console.log(err);
			}
		}
	},

	changeGuildListOfflineBallColor: function() { // Legacy
		//Code to change the colored balls based on last activity
		if (!FSH.System.getValue('enhanceOnlineDots')) {return;}
		var memberTable = FSH.System.findNode('//table[tbody/tr/td[.="Rank"]]');
		for (var i=2;i<memberTable.rows.length ;i+= 1 ) {
			var aRow = memberTable.rows[i];
			if (aRow.cells[1]) {
				var contactLink   = aRow.cells[1].firstChild.nextSibling;
				var lastActivity = /<td>Last Activity:<\/td><td>(\d+)d (\d+)h (\d+)m (\d+)s<\/td>/.exec($(contactLink).data('tipped'));
				var lastActivityIMG = FSH.Layout.onlineDot({
						min: lastActivity[3],
						hour: lastActivity[2],
						day: lastActivity[1]
					});
				aRow.cells[0].innerHTML = lastActivityIMG;
			}
		}
	},

	getConflictInfo: function(responseText, callback) { // Legacy
		try {
			var insertHere = callback.node;
			var doc = FSH.System.createDocument(responseText);

			var page = FSH.System.findNode('//td[contains(.,"Page:")]', doc);
			var curPage = parseInt(FSH.System.findNode('//input[@name="page"]', doc).value,10);
			var maxPage = page.innerHTML.match(/of&nbsp;(\d*)/);

			var conflictTable = FSH.System.findNode('//font[contains(.,"Participants")]/ancestor::table[1]', doc);
			if (conflictTable && conflictTable.rows.length > 3) {
				if (curPage === 1) {
					var newNode = insertHere.insertRow(insertHere.rows.length-2);
					newNode.insertCell(0);
					newNode.insertCell(0);
					newNode.cells[0].innerHTML = '<a href="index.php?cmd=guild&subcmd=conflicts">Active Conflicts</a>';
					newNode.cells[1].innerHTML = 'Score';
				}
				for (var i = 1; i <= conflictTable.rows.length - 4; i+=2) {
					var newRow = insertHere.insertRow(insertHere.rows.length-2);
					newRow.insertCell(0);
					newRow.insertCell(0);
					newRow.cells[0].innerHTML = conflictTable.rows[i].cells[0].innerHTML;
					newRow.cells[1].innerHTML = '<b>' + conflictTable.rows[i].cells[6].innerHTML + '</b>';
				}
			}
			if (maxPage && parseInt(maxPage[1],10) > curPage) {
				FSH.System.xmlhttp('index.php?cmd=guild&subcmd=conflicts&subcmd2=&page=' + (curPage + 1) + '&search_text=',
					FSH.guild.getConflictInfo,
					{'node': callback.node});
			}
		} catch (err) {
			console.log(err);
		}
	},

	injectGuildAddTagsWidgets: function() { // Legacy
		var itemTable = FSH.System.findNode('//img[contains(@src,"/items/")]/ancestor::table[1]');
		if (itemTable) {
			for (var i=1;i<itemTable.rows.length;i += 1) {
				var aRow = itemTable.rows[i];
				if (aRow.cells[2]) { // itemRow
					var itemId = aRow.cells[0].firstChild.getAttribute('value');
					aRow.cells[2].innerHTML += '&nbsp;<span style="cursor:pointer; text-decoration:underline; color:blue;" itemID="' + itemId + '">Fast BP</span>';
					var itemRecall = aRow.cells[2].firstChild.nextSibling;
					itemRecall.addEventListener('click', FSH.guild.recallGuildStoreItem, true);
				}
			}
		}
		$('b:contains("100 x Item Level")').closest('tr').next().children('td:first').append('<input type="button" id="fshCheckAlTag" value="Check All">');
		$('#fshCheckAlTag').click(function()
		{
			$('input[name*=tagIndex]').each(function()
			{
				this.click();
			});
		});
	},

	recallGuildStoreItem: function(evt) { // Legacy
		var guildStoreID=evt.target.getAttribute('itemID');
		var recallHref = 'index.php?cmd=guild&subcmd=inventory&subcmd2=takeitem&guildstore_id=' + guildStoreID + '&ajax=1';
		FSH.System.xmlhttp(recallHref,
			FSH.guild.recallGuildStoreItemReturnMessage,
			{'item': guildStoreID, 'target': evt.target, 'url': recallHref});
	},

	recallGuildStoreItemReturnMessage: function(responseText, callback) { // Native
		var target = callback.target;
		var info = FSH.Layout.infoBox(responseText);
		var itemCellElement = target.parentNode; //FSH.System.findNode('//td[@title="' + itemID + '"]');
		if (info.search('You successfully took the item into your backpack') !== -1) {
			itemCellElement.innerHTML = '<span style="color:green; font-weight:bold;">Taken</span>';
		} else if (info!=='') {
			itemCellElement.innerHTML = '<span style="color:red; font-weight:bold;">Error:' + info + '</span>';
		} else {
			itemCellElement.innerHTML = 'Weird Error: check the Tools>Error Console';
			console.log('Post the previous HTML and the following message to the GitHub or to the forum to help us debug this error');
			console.log(callback.url);
		}
	},

	addHistoryWidgets: function() { // Legacy
		var textArea = FSH.System.findNode('//textarea[@name="history"]');
		if (!textArea) {return;}
		textArea.value = textArea.value.replace(/<br \/>/ig,'');
		var textAreaDiv = textArea.parentNode;
		var bioPreviewHTML = FSH.System.convertTextToHtml(textArea.value);
		var newDiv = document.createElement('div');
		textAreaDiv.appendChild(newDiv);
		newDiv.innerHTML = '<table align="center" width="325" border="1"><tbody>' +
			'<tr><td style="text-align:center;color:#7D2252;background-color:#CD9E4B">Preview</td></tr>' +
			'<tr><td align="left" width="325"><span style="font-size:small;" findme="biopreview">' + bioPreviewHTML +
			'</span></td></tr></tbody></table>';

		document.getElementById('textInputBox').addEventListener('keyup', FSH.guild.updateHistoryCharacters, true);
	},

	updateHistoryCharacters: function() { // Legacy
		var textArea = FSH.System.findNode('//textarea[@id="textInputBox"]');
		var previewArea = FSH.System.findNode('//span[@findme="biopreview"]');
		var bioPreviewHTML = FSH.System.convertTextToHtml(textArea.value);
		previewArea.innerHTML = bioPreviewHTML;
	},

	injectRPUpgrades: function() {  //jquery
		var injectHere = $('b:contains("Guild Reputation")').closest('table')
			.find('tr:eq(10) > td:first');
		injectHere.attr('align','center');
		injectHere.html('<span id="warningMessage" style="color:green;">' +
			'Gathering active buffs ... please wait ... </span>');
		$.get('index.php?cmd=profile', FSH.guild.parseProfileAndPostWarnings);
	},

	parseProfileAndPostWarnings: function(responseText) {//jquery
		var doc = FSH.System.createDocument(responseText);
		$(doc).find('img[src*="/skills/"]').each(function(){
				var onmouseover = $(this).data('tipped');
				var buffRE = /<center><b>([ a-zA-Z]+)<\/b>\s\(Level: (\d+)\)/
					.exec(onmouseover);

				if (!buffRE) { return true; } // same as continue in a for loop
				var buffName = buffRE[1];
				var buffLevel = buffRE[2];
				$('a[data-tipped*="' + buffName + ' Level ' + buffLevel + '"]')
					.each(function(){
						$(this).parent()
							.append('<br><nobr><span style="color:red;">' +
							buffName + ' ' + buffLevel +
							' active</span></nobr>');
					});
			});
		var warningMessage = $('#warningMessage');
		warningMessage.html('Done');
		warningMessage.attr('style','color:blue');
	},

};

FSH.upgrades = { // Legacy

	storePlayerUpgrades: function() { // Legacy
		var alliesText = FSH.System.findNode('//td[.="+1 Max Allies"]');
		var alliesRatio = alliesText.nextSibling.nextSibling.nextSibling.nextSibling;
		if (alliesRatio) {
			var alliesValueRE = /(\d+) \/ 115/;
			var alliesValue = alliesValueRE.exec(alliesRatio.innerHTML)[1]*1;
			FSH.System.setValue('alliestotal',alliesValue+5);
		}
		var enemiesText = FSH.System.findNode('//td[.="+1 Max Enemies"]');
		var enemiesRatio = enemiesText.nextSibling.nextSibling.nextSibling.nextSibling;
		if (enemiesRatio) {
			var enemiesValueRE = /(\d+) \/ 115/;
			var enemiesValue = enemiesValueRE.exec(enemiesRatio.innerHTML)[1]*1;
			FSH.System.setValue('enemiestotal',enemiesValue+5);
		}
		FSH.upgrades.injectPoints();
	},

	injectPoints: function() { // jquery
		FSH.upgrades.currentFSP = FSH.System.intValue($('dt#statbar-fsp').text());
		FSH.upgrades.injectUpgradeHelper(0, 'Current');
		FSH.upgrades.injectUpgradeHelper(1, 'Maximum');
		$('#pCC td')
			.has('input[name="upgrade_id"][value="3"]')
			.html('<a href="' + FSH.System.server +
				'?cmd=marketplace">Sell at Marketplace</a>');
	},

	injectUpgradeHelper: function(value, type) { // jquery
		var theCells = $('#pCC tr')
			.has('input[name="upgrade_id"][value="' + value + '"]')
			.find('td');
		var cell = theCells.first();
		cell.append(' <span style="color:blue" ' +
			'id="totalStam" type="' + type + '"></span>');
		var amountRE = new RegExp('\\+(\\d+) ' + type + ' Stamina');
		var amount = cell.text().match(amountRE)[1];
		$('input[name="quantity"]', theCells)
			.attr('stamtype', type)
			.attr('amount', amount)
			.attr('cost', theCells.eq(1).text())
			.keyup(FSH.upgrades.updateStamCount);
	},

	updateStamCount: function(evt) { // jquery
		var target = $(evt.target);
		var amount = target.attr('amount');
		var cost = target.attr('cost');
		var quantity = target.val();
		//cap the value if the user goes over his current FSP
		var color = 'red';
		var extraStam = Math.floor(FSH.upgrades.currentFSP / cost) * amount;
		if (quantity * cost <= FSH.upgrades.currentFSP) {
			extraStam = quantity * amount;
			color = 'blue';
		}
		$('#pCC span[id="totalStam"][type="' + target.attr('stamtype') + '"]')
			.css('color', color)
			.html('(+' + extraStam + ' stamina)');
	},

};

FSH.newGuildLog = { // Legacy

	injectNewGuildLog: function(content){ // Legacy
		if (!content) {content=FSH.Layout.notebookContent();}

		FSH.newGuildLog.setupGuildLogFilters();

		//store the time zone for use in processing date/times
		var gmtOffsetMinutes = (new Date()).getTimezoneOffset();
		FSH.newGuildLog.gmtOffsetMilli = gmtOffsetMinutes * 60 * 1000;

		//find the time the guild log was stored last
		FSH.newGuildLog.storedGuildLog = FSH.System.getValueJSON('storedGuildLog');
		if (FSH.newGuildLog.storedGuildLog) {
			// var lastMessageIndex = FSH.Helper.storedGuildLog.logMessage.length;
			FSH.Helper.lastStoredGuildLogMessage = FSH.newGuildLog.storedGuildLog.logMessage[0].logMessage;
			FSH.Helper.lastStoredGuildLogMessagePostTime = FSH.newGuildLog.storedGuildLog.logMessage[0].postDateAsLocalMilli;
		}

		FSH.Helper.newStoredGuildLog = {logMessage:[]};

		var newhtml='<table cellspacing="0" cellpadding="0" border="0" width="100%">' +
			'<tr style="background-color:#cd9e4b"><td width="80%" nobr><b>&nbsp;Guild Log Version 3</b></td>' +
				'<td><span id="Helper:ResetNewGuildLog" style="text-decoration:underline;cursor:pointer;color:blue;">Reset</span>' +
				'&nbsp;<a href="index.php?cmd=guild&subcmd=log"><span style="color:blue;">Old Guild Log</span></a></td></tr>' +
			'<tr><td colspan=2>' +
				'<table><tbody><tr><td><b>Filters:</b></td>' +
				'<td><table><tbody><tr><td>';
		for (var i=0; i<FSH.Helper.guildLogFilters.length; i += 1) {
			var guildLogFilterID = FSH.Helper.guildLogFilters[i].id;
			FSH.Helper[guildLogFilterID] = FSH.System.getValue(guildLogFilterID);
			newhtml += i % 5 === 0 ? '</td></tr><tr><td>' : '';
			newhtml+='&nbsp;' +FSH.Helper.guildLogFilters[i].type+ 's:<input id="'+guildLogFilterID+'" type="checkbox" linkto="'+guildLogFilterID+'"' +
					(FSH.Helper[guildLogFilterID]?' checked':'') + '/>';
		}
		newhtml += '</td></tr><tr><td>&nbsp;<span id=GuildLogSelectAll>[Select All]</span>&nbsp;<span id=GuildLogSelectNone>[Select None]</span>' +
				'</td></tr></tbody></table></td></tr>'+
			'<tr><td colspan=2><span style="color:blue;" id="Helper:NewGuildLogLoadingMessage">Loading Page 1 ...</span></td></tr>' +
			'</tbody></table>';
		newhtml += '<table width="100%" cellspacing="0" cellpadding="2" border="0" id="Helper:GuildLogInjectTable"><tbody>' +
			'<tr><td width="16" bgcolor="#cd9e4b"></td><td width="20%" bgcolor="#cd9e4b">Date</td><td width="80%" bgcolor="#cd9e4b">Message</td></tr>' +
			'<tr><td class="divider" colspan="3"></td></tr>' +
			'</tbody></table>';
		content.innerHTML=newhtml;

		document.getElementById('Helper:ResetNewGuildLog').addEventListener('click', FSH.newGuildLog.resetNewGuildLog, true);

		var guildLogInjectTable = document.getElementById('Helper:GuildLogInjectTable');
		var loadingMessageInjectHere = document.getElementById('Helper:NewGuildLogLoadingMessage');

		for (i=0; i<FSH.Helper.guildLogFilters.length; i += 1) {
			document.getElementById(FSH.Helper.guildLogFilters[i].id).addEventListener('click', FSH.newGuildLog.toggleGuildLogFilterVisibility, true);
		}
		document.getElementById('GuildLogSelectAll').addEventListener('click', FSH.newGuildLog.guildLogSelectFilters, true);
		document.getElementById('GuildLogSelectNone').addEventListener('click', FSH.newGuildLog.guildLogSelectFilters, true);

		var oldMaxPagesToFetch = FSH.System.getValue('oldNewGuildLogHistoryPages');
		oldMaxPagesToFetch = oldMaxPagesToFetch ? parseInt(oldMaxPagesToFetch,10) : 100;
		var maxPagesToFetch = parseInt(FSH.System.getValue('newGuildLogHistoryPages') - 1,10);
		FSH.System.setValue('oldNewGuildLogHistoryPages', maxPagesToFetch);
		var completeReload = false;
		if (maxPagesToFetch > oldMaxPagesToFetch) {completeReload = true;}
		//fetch guild log page and apply filters
		FSH.System.xmlhttp('index.php?cmd=guild&subcmd=log', FSH.newGuildLog.parseGuildLogPage,
			{'guildLogInjectTable': guildLogInjectTable, 'pageNumber': 1, 'loadingMessageInjectHere': loadingMessageInjectHere, 'maxPagesToFetch': maxPagesToFetch, 'completeReload': completeReload});
	},

	setupGuildLogFilters: function() { // Native - but WTF?
		FSH.Helper.guildLogFilters = [
			{'id':'showRecallMessages', 'type':'Store/Recall'},
			{'id':'showRelicMessages', 'type':'Relic'},
			{'id':'showMercenaryMessages', 'type':'Mercenary'},
			{'id':'showGroupCombatMessages', 'type':'Group Combat'},
			{'id':'showDonationMessages', 'type':'Donation'},
			{'id':'showRankingMessages', 'type':'Ranking'},
			{'id':'showGvGMessages', 'type':'GvG'},
			{'id':'showTaggingMessages', 'type':'Tag/UnTag'},
			{'id':'showTitanMessages', 'type':'Titan'}
		];
	},

	resetNewGuildLog: function() { // Native
		FSH.System.setValueJSON('storedGuildLog', '');
		location.reload();
	},

	toggleGuildLogFilterVisibility: function(evt) { // Legacy
		var filterID = evt.target.id;
		var filterChecked = evt.target.checked;
		var logRows = FSH.System.findNodes('//tr[@id="GuildLogFilter:' + filterID + '"]');
		if (logRows) {
			for (var i=0;i<logRows.length;i += 1) {
				var logRow = logRows[i];
				if (filterChecked) {
					logRow.style.display = '';
					logRow.style.visibility = 'visible';
				} else {
					logRow.style.display = 'none';
					logRow.style.visibility = 'hidden';
				}
			}
		}
		FSH.System.setValue(filterID,filterChecked);
		FSH.Helper[filterID] = filterChecked;
	},

	guildLogSelectFilters: function(evt) { // Legacy
		var checkedValue = evt.target.id==='GuildLogSelectAll';
		for (var i=0; i<FSH.Helper.guildLogFilters.length; i += 1) {
			FSH.System.setValue(FSH.Helper.guildLogFilters[i].id, checkedValue);
			document.getElementById(FSH.Helper.guildLogFilters[i].id).checked = checkedValue;
		}
		var logRows = FSH.System.findNodes('//tr[contains(@id,"GuildLogFilter:")]');
		if (logRows) {
			for (i=0;i<logRows.length;i += 1) {
				var logRow = logRows[i];
				var rowID = logRow.getAttribute('id');
				if (checkedValue) {
					logRow.style.display = '';
					logRow.style.visibility = 'visible';
				} else if (rowID !== 'GuildLogFilter:Unknown') {
					logRow.style.display = 'none';
					logRow.style.visibility = 'hidden';
				}
			}
		}
	},

	parseGuildLogPage: function(responseText, callback) { // Hybrid - Evil!
		var pageNumber = callback.pageNumber;
		var maxPagesToFetch = callback.maxPagesToFetch;
		var completeReload = callback.completeReload;
		var guildLogInjectTable = callback.guildLogInjectTable;
		var loadingMessageInjectHere = callback.loadingMessageInjectHere;
		var doc=FSH.System.createDocument(responseText);

		var logTable = $(doc).find('table.width_full:first');

		//if the whole first page is new, then likely that the stored log needs to be refreshed, so go ahead and do so
		if (pageNumber === 1) {
			var lastRowInTable = logTable.find('tr>td:not(.divider)').parent(':last');
			var lastRowCellContents = lastRowInTable.find('td:eq(1)').text();
			var lastRowPostDateAsDate = FSH.System.parseDate(lastRowCellContents);
			var lastRowPostDateAsLocalMilli = lastRowPostDateAsDate.getTime() - FSH.newGuildLog.gmtOffsetMilli;
			if (lastRowPostDateAsLocalMilli > FSH.Helper.lastStoredGuildLogMessagePostTime) {completeReload = true;}
		} else {
			completeReload = false;
		}

		var localLastCheckMilli;
		var localDateMilli;
		var enableLogColoring = FSH.System.getValue('enableLogColoring');
		if (enableLogColoring) {
			var lastCheckScreen = 'lastGuildLogCheck';
			localLastCheckMilli=FSH.System.getValue(lastCheckScreen);
			if (!localLastCheckMilli) {
				localLastCheckMilli = Date.now();
			}
			localDateMilli = Date.now();
		}

		logTable.find('tr:gt(0):has(td:not(.divider))').each(function(){
			var cellContents = $(this).children('td:eq(1)').text();
			if (!cellContents || cellContents === 'Date' ||
				cellContents.split(' ').length === 1) {return;}
			var postDateAsDate = FSH.System.parseDate(cellContents);
			var postDateAsLocalMilli = postDateAsDate.getTime() -
				FSH.newGuildLog.gmtOffsetMilli;

			// if the post date is the same as last one in the stored list and the
			// message is the same, then break out
			// and start appending the stored values instead of parsing.
			FSH.Helper.stopProcessingLogPages = false;
			if (postDateAsLocalMilli ===
				FSH.Helper.lastStoredGuildLogMessagePostTime &&
				$(this).html() === FSH.Helper.lastStoredGuildLogMessage &&
				!completeReload) {
				FSH.Helper.stopProcessingLogPages = true;
				return false;
			}
			var displayRow = true;
			var rowTypeID = 'GuildLogFilter:Unknown';
			var messageText = $(this).children('td:eq(2)').text();
			//if recall message, check to see if showRecallMessages is checked.
			if (messageText.search('recalled the item') !== -1 ||
				messageText.search('took the item') !== -1 ||
				messageText.search('auto-returned the') !== -1 ||
				messageText.search('stored the item') !== -1) {
				if (!FSH.Helper.showRecallMessages) {displayRow = false;}
				rowTypeID = 'GuildLogFilter:showRecallMessages';
			}
			//Tag/Untag (showTaggingMessages)
			else if (messageText.search('has added flags to some of guild\'s stored items costing a total of') !== -1 ||
				messageText.search('has removed flags to the guild\'s stored items.') !== -1) {
				if (!FSH.Helper.showTaggingMessages) {displayRow = false;}
				rowTypeID = 'GuildLogFilter:showTaggingMessages';
			}
			//Relic messages (showRelicMessages)
			else if (messageText.search('relic. This relic now has an empower level of') !== -1 ||
				messageText.search(/ empowered the .+ relic/) !== -1 ||
				messageText.search('relic. The relic empower level has been reset to zero.') !== -1 ||
				messageText.search('failed to capture the relic') !== -1 ||
				messageText.search('captured the relic') !== -1 ||
				messageText.search('captured your relic') !== -1 ||
				messageText.search('has captured the undefended relic') !== -1 ||
				messageText.search('attempted to capture your relic') !== -1) {
				if (!FSH.Helper.showRelicMessages) {displayRow = false;}
				rowTypeID = 'GuildLogFilter:showRelicMessages';
			}
			//Mercenary messages (showMercenaryMessages)
			else if (messageText.search('disbanded a mercenary.') !== -1 ||
				messageText.search('hired the mercenary') !== -1) {
				if (!FSH.Helper.showMercenaryMessages) {displayRow = false;}
				rowTypeID = 'GuildLogFilter:showMercenaryMessages';
			}
			//Group Combat messages (showGroupCombatMessages)
			else if (messageText.search('has disbanded one of their groups') !== -1 ||
				messageText.search(/A group from your guild was (.*) in combat./) !== -1) {
				if (!FSH.Helper.showGroupCombatMessages) {displayRow = false;}
				rowTypeID = 'GuildLogFilter:showGroupCombatMessages';
			}
			//Donation messages (showDonationMessages)
			else if (messageText.search(/deposited ([,0-9]+) FallenSword Points into the guild./) !== -1 ||
				messageText.search(/deposited ([,0-9]+) gold into the guild bank/) !== -1) {
				if (!FSH.Helper.showDonationMessages) {displayRow = false;}
				rowTypeID = 'GuildLogFilter:showDonationMessages';
			}
			//Ranking messages (showRankingMessages)
			else if (messageText.search('has added a new rank entitled') !== -1 ||
				messageText.search('has deleted the rank') !== -1 ||
				messageText.search('has requested to join the guild') !== -1 ||
				messageText.search('has invited the player') !== -1 ||
				messageText.search('has officially joined the guild') !== -1 ||
				messageText.search('has been kicked from the guild by') !== -1 ||
				messageText.search('has left the guild') !== -1 ||
				messageText.search('has been assigned the rank') !== -1) {
				if (!FSH.Helper.showRankingMessages) {displayRow = false;}
				rowTypeID = 'GuildLogFilter:showRankingMessages';
			}
			//GvG messages (showGvGMessages)
			else if (messageText.search('resulted in a draw. Your GvG rating and Guild RP was unaffected.') !== -1 ||
				messageText.search(/resulted in (.*) with a final score of/) !== -1 ||
				messageText.search('has just initiated a conflict with the guild') !== -1 ||
				messageText.search('has initiated a conflict with your guild') !== -1 ||
				messageText.search('is participating in the conflict against the guild') !== -1) {
				if (!FSH.Helper.showGvGMessages) {displayRow = false;}
				rowTypeID = 'GuildLogFilter:showGvGMessages';
			}
			// Titan messages (showTitanMessages)
			else if (messageText.search('from your guild\'s contribution to the defeat of the titan') !== -1 ||
				messageText.search('a 7 day cooldown has been activated on your guild for this titan') !== -1) {
				if (!FSH.Helper.showTitanMessages) {displayRow = false;}
				rowTypeID = 'GuildLogFilter:showTitanMessages';
			}

			//display the row or effectively hide it
			newRow = $(this).clone(true);
			if (!displayRow) {
				newRow.css('display','none')
					.css('visibility','hidden');
			}
			newRow.id = rowTypeID;
			newRow.appendTo(guildLogInjectTable);
			var postAge = (localDateMilli - postDateAsLocalMilli)/(1000*60);
			if (enableLogColoring && postDateAsLocalMilli > localLastCheckMilli) {
				newRow.css('backgroundColor','#F5F298');
			}
			else if (enableLogColoring && postAge > 20 &&
				postDateAsLocalMilli <= localLastCheckMilli) {
				newRow.css('backgroundColor', '#CD9E4B');
			}
			var newLogMessage = {
				postDateAsLocalMilli: postDateAsLocalMilli,
				rowTypeID: rowTypeID,
				logMessage: newRow.html()
			};
			FSH.Helper.newStoredGuildLog.logMessage.push(newLogMessage);
			//create following spacer row
			var spacerRow = $('<tr></tr>');
			if (!displayRow) {
				spacerRow.css('display','none')
					.css('visibility','hidden');
			}
			spacerRow.id = rowTypeID;
			spacerRow.appendTo(guildLogInjectTable);
			spacerRow.html('<td class="divider" colspan="3"></td>');
			newLogMessage = {
				postDateAsLocalMilli: postDateAsLocalMilli,
				rowTypeID: rowTypeID,
				logMessage: spacerRow.html()
			};
			FSH.Helper.newStoredGuildLog.logMessage.push(newLogMessage);
		});

		if (FSH.Helper.stopProcessingLogPages) {
			loadingMessageInjectHere.innerHTML = 'Processing stored logs ...';
			for (var i=0;i<FSH.newGuildLog.storedGuildLog.logMessage.length;i += 1) {
				var logMessageArrayItem = FSH.newGuildLog.storedGuildLog.logMessage[i];
				var newRow = document.createElement('TR');
				var displayRow = true;
				for (var j=0; j<FSH.Helper.guildLogFilters.length; j += 1) {
					var guildLogFilterID = FSH.Helper.guildLogFilters[j].id;
					var rowTypeID = 'GuildLogFilter:' + guildLogFilterID;
					if (logMessageArrayItem.rowTypeID === rowTypeID) {
						displayRow = FSH.Helper[guildLogFilterID];
						break;
					}
				}
				newRow.style.display = '';
				newRow.style.visibility = '';
				if (!displayRow) {
					newRow.style.display = 'none';
					newRow.style.visibility = 'hidden';
				}
				newRow.id = logMessageArrayItem.rowTypeID;
				guildLogInjectTable.appendChild(newRow);
				newRow.innerHTML = logMessageArrayItem.logMessage;
				var postAge = (localDateMilli -
					logMessageArrayItem.postDateAsLocalMilli)/(1000*60);
				if (enableLogColoring && newRow.cells[2] &&
					logMessageArrayItem.postDateAsLocalMilli > localLastCheckMilli) {
					newRow.style.backgroundColor = '#F5F298';
				}
				else if (enableLogColoring && newRow.cells[2] && postAge > 20 &&
					logMessageArrayItem.postDateAsLocalMilli <= localLastCheckMilli) {
					newRow.style.backgroundColor = '#CD9E4B';
				}
				var newLogMessage = {
					postDateAsLocalMilli: logMessageArrayItem.postDateAsLocalMilli,
					rowTypeID: logMessageArrayItem.rowTypeID,
					logMessage: logMessageArrayItem.logMessage
				};
				FSH.Helper.newStoredGuildLog.logMessage.push(newLogMessage);
			}
		}

		var page = $(doc).find('input[name="page"]');
		var maxPage = page.parent().html().match(/of&nbsp;(\d*)/)[1];

		//fetch the next page (if necessary)
		if (pageNumber < maxPage && pageNumber < maxPagesToFetch &&
			!FSH.Helper.stopProcessingLogPages) {
			var nextPage = parseInt(pageNumber+1,10);
			loadingMessageInjectHere.innerHTML = 'Loading Page ' + (nextPage + 1) +
				' of ' + Math.floor(maxPagesToFetch+1,maxPage) + '...';
			FSH.System.xmlhttp('index.php?cmd=guild&subcmd=log&subcmd2=&page=' +
				nextPage + '&search_text=', FSH.newGuildLog.parseGuildLogPage,
				{'guildLogInjectTable': guildLogInjectTable,
					'pageNumber': nextPage,
					'loadingMessageInjectHere': loadingMessageInjectHere,
					'maxPagesToFetch': maxPagesToFetch,
					'completeReload': completeReload});
		} else {
			loadingMessageInjectHere.innerHTML = 'Loading Complete.';
			//FSH.Helper.addLogColoring('GuildLog', 1);
			FSH.logs.addGuildLogWidgets();
			FSH.System.setValueJSON('storedGuildLog', FSH.Helper.newStoredGuildLog);
			var now = Date.now();
			FSH.System.setValue('lastGuildLogCheck', now.toString());
		}
	},

};

FSH.activeWantedBounties = { // Legacy

	prepareBountyData: function() { // jQuery
		if (FSH.Helper.enableWantedList) {
			$('div#pCR').prepend('<div class="minibox"><span id="Helper:' +
				'WantedListPlaceholder"></span></div>');
		}
		if (FSH.Helper.enableActiveBountyList) {
			$('div#pCR').prepend('<div class="minibox"><span id="Helper:' +
				'BountyListPlaceholder"></span></div>');
		}
		FSH.activeWantedBounties.retrieveBountyInfo(FSH.Helper.enableActiveBountyList,
			FSH.Helper.enableWantedList);
	},

	retrieveBountyInfo: function(enableActiveBountyList, enableWantedList) { // Legacy
		var bountyList = FSH.System.getValueJSON('bountyList');
		var wantedList = FSH.System.getValueJSON('wantedList');
		var bountyListRefreshTime = FSH.System.getValue('bountyListRefreshTime');
		var bwNeedsRefresh = FSH.System.getValue('bwNeedsRefresh');

		bountyListRefreshTime *= 1000;
		if (!bwNeedsRefresh) {
			if (bountyList) {
				if (Date.now() -
					bountyList.lastUpdate.getTime() >
					bountyListRefreshTime) {
					bwNeedsRefresh = true; // invalidate cache
				}
			}
			if (wantedList && !bwNeedsRefresh) {
				if (Date.now() -
					wantedList.lastUpdate.getTime() >
					bountyListRefreshTime) {
					bwNeedsRefresh = true; // invalidate cache
				}
			}
		}

		if (!bountyList || !wantedList || bwNeedsRefresh &&
			(enableActiveBountyList || enableWantedList)) {
			wantedList = {};
			wantedList.bounty = [];
			wantedList.isRefreshed = true;
			wantedList.lastUpdate = new Date();
			wantedList.wantedBounties = false;
			FSH.activeWantedBounties.activeBountyListPosted = false;

			FSH.System.xmlhttp(
				'index.php?cmd=bounty&page=1',
				FSH.activeWantedBounties.parseBountyPageForWorld,
				{wantedList:wantedList}
			);
		} else {
			if (enableWantedList) {
				wantedList.isRefreshed = false;
				FSH.activeWantedBounties.injectWantedList(wantedList);
			}
			if (enableActiveBountyList) {
				bountyList.isRefreshed = false;
				FSH.activeWantedBounties.injectBountyList(bountyList);
			}
		}
	},

	parseBountyPageForWorld: function(details, callback) { // Native
		var doc = FSH.System.createDocument(details);
		var enableActiveBountyList = FSH.Helper.enableActiveBountyList;
		var enableWantedList = FSH.Helper.enableWantedList;
		FSH.System.setValue('bwNeedsRefresh', false);
		if (enableWantedList) {
			FSH.activeWantedBounties.getWantedBountyList(doc, callback);
		}
		if (enableActiveBountyList && !FSH.activeWantedBounties.activeBountyListPosted) {
			FSH.activeWantedBounties.getActiveBountyList(doc);
		}
	},

	getWantedBountyList: function(doc, callback) { // Legacy
		var page = FSH.System.findNode('//input[@name="page"]', doc, $('body'));
		var curPage = parseInt(page.value,10);
		var maxPage = page.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1];
		var activeTable = FSH.System.findNode('//table[@width = "630" and ' +
			'contains(.,"Target")]', doc);
		var wantedNames = FSH.System.getValue('wantedNames');
		var wantedArray = wantedNames.split(',');
		var wantedList = callback.wantedList;
		if (activeTable) {
			for (var i = 1; i < activeTable.rows.length - 2; i+=2) {
				var target = activeTable.rows[i].cells[0].firstChild
					.firstChild.firstChild.textContent;
				if (target === '[ No bounties available. ]') {break;}
				for (var j = 0; j < wantedArray.length; j += 1) {
					if (target === wantedArray[j].trim() || wantedArray.indexOf('*') !== -1) {
						wantedList.wantedBounties = true;
						var bounty = {};
						bounty.target = target;
						bounty.link = activeTable.rows[i].cells[0]
							.firstChild.firstChild.getAttribute('href');
						bounty.lvl = activeTable.rows[i].cells[0]
							.firstChild.firstChild.nextSibling.textContent
								.replace(/\[/, '').replace(/\]/, '');
						bounty.offerer = activeTable.rows[i].cells[1]
							.firstChild.firstChild.firstChild.textContent;
						bounty.reward = activeTable.rows[i].cells[2]
							.textContent;
						bounty.rewardType = activeTable.rows[i].cells[2]
							.firstChild.firstChild.firstChild.firstChild
							.nextSibling.firstChild.title;
						bounty.xpLoss = activeTable.rows[i].cells[3]
							.textContent;
						bounty.posted = activeTable.rows[i].cells[4]
							.textContent;
						bounty.tickets = activeTable.rows[i].cells[5]
							.textContent;
						if (activeTable.rows[i].cells[6].textContent
							.trim() === '[active]') {
							bounty.active = true;
							bounty.accept = '';
						}
						else if (activeTable.rows[i].cells[6].textContent
							.trim() !== '[n/a]') { // TODO
							bounty.active = false;
							bounty.accept = activeTable.rows[i].cells[6]
								.firstChild.firstChild
								.getAttribute('onclick');
						}
						wantedList.bounty.push(bounty);
					}
				}
			}
		}
		if (curPage < maxPage) {
			FSH.System.xmlhttp('index.php?cmd=bounty&page=' + (curPage + 1),
				FSH.activeWantedBounties.parseBountyPageForWorld, {wantedList:wantedList});
		} else {
			FSH.activeWantedBounties.injectWantedList(wantedList);
		}
	},

	getActiveBountyList: function(doc) { // Legacy
		var activeTable = FSH.System.findNode('//table[@width = 620]', doc);
		var bountyList = {};
		bountyList.bounty = [];
		bountyList.isRefreshed = true;
		bountyList.lastUpdate = new Date();

		if (activeTable) {
			if (!/No bounties active/.test(activeTable.rows[1].cells[0]
				.innerHTML)) {
				bountyList.activeBounties = true;
				for (var i = 1; i < activeTable.rows.length - 2; i+=2) {
					var bounty = {};
					bounty.target = activeTable.rows[i].cells[0].firstChild
						.firstChild.firstChild.textContent;
					bounty.link = activeTable.rows[i].cells[0].firstChild
						.firstChild.getAttribute('href');
					bounty.lvl = activeTable.rows[i].cells[0].firstChild
						.firstChild.nextSibling.textContent
						.replace(/\[/, '').replace(/\]/, '');
					bounty.reward = activeTable.rows[i].cells[2]
						.textContent;
					bounty.rewardType = activeTable.rows[i].cells[2]
						.firstChild.firstChild.firstChild.firstChild
						.nextSibling.firstChild.title;
					bounty.posted = activeTable.rows[i].cells[3]
						.textContent;
					bounty.xpLoss = activeTable.rows[i].cells[4]
						.textContent;
					bounty.progress = activeTable.rows[i].cells[5]
						.textContent;

					bountyList.bounty.push(bounty);
				}
			}
			else {
				bountyList.activeBounties = false;
			}
		}
		FSH.activeWantedBounties.injectBountyList(bountyList);
		FSH.activeWantedBounties.activeBountyListPosted = true;
	},

	injectBountyList: function(bountyList) { // Native
		FSH.System.setValueJSON('bountyList', bountyList);
		var injectHere = document
			.getElementById('Helper:BountyListPlaceholder');
		var displayList = document.createElement('TABLE');
		displayList.cellPadding = 1;
		displayList.width = 125;

		var aRow = displayList.insertRow(0); //bountyList.rows.length
		var aCell = aRow.insertCell(0);
		var output = '<h3>Active Bounties</h3><ol style="color:#FFF380;font-' +
			'size:10px;list-style-type:decimal;margin-left:1px;margin-top:' +
			'1px;margin-bottom:1px;padding-left:20px;"><nobr><span id="' +
			'Helper:resetBountyList" style=" font-size:8px; cursor:pointer; ' +
			'text-decoration:underline;">Reset</span><nobr><br>';

		if (bountyList.activeBounties === false) {
			output += '</ol> \f <ol style="color:orange;font-size:10px;list-' +
				'style-type:decimal;margin-left:1px;margin-top:1px;margin-' +
				'bottom:1px;padding-left:10px;">[No Active bounties]</ol>';
		}
		else {
			for (var i = 0; i < bountyList.bounty.length; i += 1) {
				var mouseOverText = '<div>Level:  ' + bountyList.bounty[i].lvl +
					'<br/>Reward: ' + bountyList.bounty[i].reward + ' ' +
					bountyList.bounty[i].rewardType +
					'<br/>XP Loss Remaining: ' + bountyList.bounty[i].xpLoss +
					'<br/>Progress:  ' + bountyList.bounty[i].progress +
					'</div>';

				output += '<li style="padding-bottom:0px;"><a style="color:' +
					'red;font-size:10px;"href="' + FSH.System.server +
					'index.php?cmd=attackplayer&mode=bounty&target_username=' +
					bountyList.bounty[i].target + '">[a]</a>&nbsp;<a style="' +
					'color:#A0CFEC;font-size:10px;"href="' + FSH.System.server +
					'index.php?cmd=message&target_player=' +
					bountyList.bounty[i].target + '">[m]</a> &nbsp;<a href="' +
					bountyList.bounty[i].link + '" class="tip-static" ' +
					'data-tipped="' + mouseOverText + '" style="color:' +
					'#FFF380;font-size:10px;">' + bountyList.bounty[i].target +
					'</a></li>';
			}
		}

		aCell.innerHTML = output;
		var breaker=document.createElement('BR');
		injectHere.parentNode.insertBefore(breaker, injectHere.nextSibling);
		injectHere.parentNode.insertBefore(displayList, injectHere.nextSibling);
		document.getElementById('Helper:resetBountyList')
			.addEventListener('click', FSH.activeWantedBounties.resetBountyList, true);
	},

	resetBountyList: function() { // Native
		FSH.System.setValueJSON('bountyList', null);
		location.reload();
	},

	injectWantedList: function(wantedList) { // Native
		FSH.System.setValueJSON('wantedList', wantedList);
		var injectHere = document
			.getElementById('Helper:WantedListPlaceholder');
		var displayList = document.createElement('TABLE');
		displayList.cellPadding = 3;
		displayList.width = 125;

		var aRow = displayList.insertRow(0);
		var aCell = aRow.insertCell(0);
		var output = '<h3>Wanted Bounties</h3><ol style="color:#FFF380;font-' +
			'size:10px;list-style-type:decimal;margin-left:1px;margin-top:' +
			'1px;margin-bottom:1px;padding-left:12px;"><nobr> <span id="' +
			'Helper:resetWantedList" font-size:8px; cursor:pointer; text-' +
			'decoration:underline;">Reset</span></nobr><br>';

		if (wantedList.wantedBounties === false) {
			output += '</ol> \f <ol style="color:orange;font-size:10px;list-' +
				'style-type:decimal;margin-left:1px;margin-top:1px;margin-' +
				'bottom:1px;padding-left:7px;">[No wanted bounties]</ol>';
		}
		else {
			for (var i = 0; i < wantedList.bounty.length; i += 1) {
				var mouseOverText = '"<div style=\'text-align:center;width:' +
					'205px;\'>Target Level:  ' + wantedList.bounty[i].lvl +
					'<br/>Offerer: ' + wantedList.bounty[i].offerer +
					'<br/>Reward: ' + wantedList.bounty[i].reward + ' ' +
					wantedList.bounty[i].rewardType +
					'<br/>XP Loss Remaining: ' + wantedList.bounty[i].xpLoss +
					'<br/>Posted: ' + wantedList.bounty[i].posted +
					'<br/>Tickets Req.:  ' + wantedList.bounty[i].tickets;
				mouseOverText += '</div>" ';

				output += '<li style="padding-bottom:0px;margin-left:5px;">';
				output += '<a style= "font-size:10px;';
				if (wantedList.bounty[i].accept) {
					output += 'color:rgb(0,255,0); cursor:pointer; ' +
						'text-decoration:underline blink;" title = "Accept ' +
						'Bounty" onclick="' + wantedList.bounty[i].accept +
						'">[a]</a>&nbsp;';
				} else {
					output += 'color:red;" href="' + FSH.System.server +
						'index.php?cmd=attackplayer&target_username=' +
						wantedList.bounty[i].target + '">[a]</a>&nbsp;';
				}
				output += '<a style="color:#A0CFEC;font-size:10px;"href="j' +

'avascript:openQuickMsgDialog(\'' + wantedList.bounty[i].target + '\');' +

					'">[m]</a> &nbsp;<a class="tip-static" data-tipped=' +
					mouseOverText +
					'style="color:#FFF380;font-size:10px;" href="' +
					wantedList.bounty[i].link + '">' +
					wantedList.bounty[i].target +'</a></li>';
			}
		}

		aCell.innerHTML = output;
		var breaker=document.createElement('BR');
		injectHere.parentNode.insertBefore(breaker, injectHere.nextSibling);
		injectHere.parentNode.insertBefore(displayList, injectHere.nextSibling);
		document.getElementById('Helper:resetWantedList')
			.addEventListener('click', FSH.activeWantedBounties.resetWantedList, true);
	},

	resetWantedList: function() { // Native
		FSH.System.setValueJSON('wantedList', null);
		location.reload();
	},

};

FSH.scoutTower = { // Legacy

	injectTitan: function() { // Legacy
		FSH.System.xmlhttp('index.php?cmd=guild&subcmd=scouttower',
			FSH.scoutTower.getScoutTowerDetails);
	},

	getScoutTowerDetails: function(responseText) { // Legacy
		var doc=FSH.System.createDocument(responseText);
		var scoutTowerTable = FSH.System.findNode('//table[tbody/tr/td/img[contains(@src,"/banners/scouttower.png")]]', doc);
		if (scoutTowerTable) {
			var titanTable = FSH.System.findNode('//table[tbody/tr/td/img[contains(@src,"/banners/titankilllog.png")]]');
			var newRow = titanTable.insertRow(0);
			var newCell = newRow.insertCell(0);
			newCell.align = 'center';
			newCell.innerHTML = scoutTowerTable.rows[1].cells[0].innerHTML + '<br><br>' ;
			newRow = titanTable.insertRow(1);
			newCell = newRow.insertCell(0);
			newCell.innerHTML = scoutTowerTable.rows[8].cells[0].innerHTML;
		}
		FSH.scoutTower.injectScouttowerBuffLinks();
	},

	injectScouttower: function() { // Legacy
		FSH.scoutTower.injectScouttowerBuffLinks();
		var titanTable = FSH.System.findNode('//table[@width="500"]');
		for (var i = 1; i < titanTable.rows.length; i += 1) {
			var aRow = titanTable.rows[i];
			if (aRow.cells[2]) {
				var titanHP = aRow.cells[2].textContent;
				if (titanHP.search('-') !== -1) {break;}
				var guildKills = aRow.cells[3].textContent;
				if (guildKills) {
					var titanHPArray = titanHP.split('/');
					var currentHP = parseInt(titanHPArray[0], 10);
					var totalHP = parseInt(titanHPArray[1], 10);
					var currentNumberOfKills = totalHP - currentHP;
					var numberOfKillsToSecure = Math.ceil(totalHP/2 + 1);

					var titanString = '<span style="color:red;">' + (numberOfKillsToSecure - guildKills) + '</span> to secure';
					if (guildKills >= numberOfKillsToSecure) {
						titanString = 'Secured';
					} else if (numberOfKillsToSecure - guildKills > currentHP) {
						titanString = '<span style="color:red;">Cannot Secure</span>';
					}
					var killsPercent = (currentNumberOfKills === 0 ? 0 : guildKills * 100/currentNumberOfKills).toFixed(2);
					var killsTotPct = (guildKills * 100/totalHP).toFixed(2);
					aRow.cells[3].innerHTML += '<br><span style="color:blue;"> (' + killsPercent + '% Current <br>' +
					killsTotPct + '% Total<br>' + titanString + ')';
				}
			}
		}
	},

	injectScouttowerBuffLinks: function() { // Legacy
		var titanTables = FSH.System.findNodes('//table[tbody/tr/td/font[.="Guild Member"]]');
		var titanTable;
		if (titanTables) {
			for (var i = 0; i < titanTables.length; i += 1) {
				titanTable = titanTables[i];
				var shortList = [];
				if (titanTable.rows.length <= 1) {continue;}
				for (var j = 1; j < titanTable.rows.length; j += 1) {
					if (titanTable.rows[j].cells[1]) {
						var firstCell = titanTable.rows[j].cells[0];
						var playerID = /player_id=(\d+)/.exec(firstCell.innerHTML)[1];
						shortList.push(firstCell.textContent);
						firstCell.innerHTML += ' <a style="color:blue;font-size:10px;" ' +
							FSH.Layout.quickBuffHref(playerID) + '>[b]</a>';
					}
				}
				titanTable.rows[0].cells[0].innerHTML += ' <a style="color:blue;font-size:10px;">all</a>';
				var buffAllLink = titanTable.rows[0].cells[0].firstChild.nextSibling.nextSibling;
				buffAllLink.setAttribute('href',FSH.Layout.buffAllHref(shortList));
			}
		}
	},

};

FSH.trade = { // Legacy

	injectTrade: function() { // Hybrid
		$('table[id="item-list"]')
			.closest('tr')
			.before('<tr id="Helper:selectMultiple"></tr>')
			.before('<tr id="Helper:folderSelect"></tr>')
			.before('<tr id="Helper:showSTs"></tr>');
		var sendClasses = FSH.System.getValue('sendClasses');
		var itemList = JSON.parse('[' + sendClasses.replace(/'/g, '"') + ']');
		var output = '';
		var allResRE='';
		var i;
		for (i=0;i<itemList.length;i += 1) {
			output += '<span plantRE="' + itemList[i][1] +'" style="cursor:' +
				'pointer; text-decoration:underline;"' + 'id="Helper:checkAll' +
				i + '">' + itemList[i][0] + '</span> &ensp;';
			allResRE+=itemList[i][1]+'|';
		}
		output='Select: &ensp;<span style="cursor:pointer; text-decoration:' +
			'underline;" plantRE=".*" id="Helper:checkAll' + i +
			'">All Items</span> &ensp; <span plantRE="' +
			allResRE.substr(0,allResRE.length-1) + '" style="cursor:pointer; ' +
			'text-decoration:underline;"id="Helper:checkAll' + (i + 1) +
			'">All Resources</span> &ensp;' + output;
		output += 'Select <input id="Helper:SendHowMany" type="text" ' +
			'class="custominput" value="all" size=3 />';
		$('tr[id="Helper:selectMultiple"]')
			.append('<td colspan=6>' + output + '</td>');
		for (i=0;i<itemList.length+1;i += 1) {
			document
				.getElementById('Helper:checkAll'+i)
				.addEventListener(
					'click',
					FSH.trade.toggleCheckAllPlants,
					true
				);
		}
		$.getJSON('?cmd=export&subcmd=inventory', FSH.trade.processTrade);
	},

	toggleCheckAllPlants: function(evt) { // Legacy
		var plantRE = new RegExp(evt.target.getAttribute('plantRE'));
		var tradeType = evt.target.getAttribute('tradetype');
		var allItems = FSH.System.findNodes('//input[@type="checkbox" and @name="sendItemList[]"]');
		var selectST= $('input[id="Helper:useItemsInSt"]').is(':checked');
		var limit = parseInt($('input[id="Helper:SendHowMany"]').attr('value').replace(/[^0-9]/g,''), 10);
		
		if (allItems) {
			var itemsLen = allItems.length;
			if(tradeType==='secure') {itemsLen=Math.min(100,itemsLen);}
			if(limit>0){itemsLen=Math.min(limit,itemsLen);}
			for (var i = 0; i < allItems.length; i += 1){
				var theImgNode = allItems[i].parentNode.parentNode.previousSibling.firstChild.firstChild.firstChild;
				if(plantRE.exec(theImgNode.getAttribute('src'))) {
					if(/3px solid red/.exec(theImgNode.parentNode.parentNode.style.border) && !selectST) //item in an ST, skip it
						{continue;}//alert('asdf');
					if (allItems[i].checked) {
						allItems[i].checked = false;
					} else {allItems[i].checked = true;}
					if((itemsLen -=1) === 0) {i=allItems.length+1;}
				}
			}
		}
	},

	processTrade: function(data) { // Bad jQuery
		FSH.Helper.inventory = data;
		for(var i=0;i<FSH.Helper.inventory.items.length;i += 1){
			if(FSH.Helper.inventory.items[i].is_in_st){
				$('input[value="'+FSH.Helper.inventory.items[i].inv_id+'"]').closest('tr').prev().find('td[background="' +
						FSH.System.imageServer + '/inventory/2x3.gif"]').css('border','3px solid red');
			}
		}
		//append main folder
		var folders='<input type="hidden" id="Helper:CurrentFolder" value=0 /><span id="FolderID0" fid=0 style="cursor:pointer; ' +
					'text-decoration:underline;">All</span> <span id="FolderID-1" fid="-1" style="cursor:pointer; ' +
					'text-decoration:underline;">Main</span> ';
		for (var key in FSH.Helper.inventory.folders){//FSH.Helper.inventory.folders[key]
			if (!FSH.Helper.inventory.folders.hasOwnProperty(key)) { continue; }
			folders+='<span id="FolderID'+key+'" fid='+key+' style="cursor:pointer; text-decoration:underline;">'+
						FSH.Helper.inventory.folders[key]+'</span> ';
		}
		$('tr[id="Helper:folderSelect"]').append('<td colspan=6>'+folders+'</td>');//retrieving folder names...
		$('span[id*="FolderID"]').click(function(){
			$('input[id="Helper:CurrentFolder"]').attr('value',$(this).attr('fid'));
			FSH.trade.insertItemsToTrade();
		});
		$('tr[id="Helper:showSTs"]').append('<td align="center" colspan=6><label id="Helper:useItemsInStCont"><input type="checkbox" id="Helper:useItemsInSt" checked /> Select items in ST</label></td>');
	},

	insertItemsToTrade: function(){ // jQuery
		var insertAt;
		//remove the HCS table... building it myself
		var itemTable=$('<table></table>');
		var items=0;
		var fromFolder=$('input[id="Helper:CurrentFolder"]').val();
		var shouldDisplay;
		var style;
		for(var i=0;i<FSH.Helper.inventory.items.length;i += 1){
			shouldDisplay=true;
			if (fromFolder !== 0 &&
				FSH.Helper.inventory.items[i].folder_id !== fromFolder) {
				shouldDisplay=false;
			}
			if(FSH.Helper.inventory.items[i].equipped) { shouldDisplay=false;}
			if(shouldDisplay){
				if (items % 6 === 0) {
					insertAt = $('<tr></tr>');
					itemTable.append(insertAt);
					for(var x=0;x<6;x += 1){
						insertAt.append('<td align="center" id="Helper:itemTD'+(items+x)+'"></td>');
					}
				}
				style='';
				if(FSH.Helper.inventory.items[i].is_in_st){
					style=' style="border: 3px solid red"';
				}

				itemTable
					.find('td[id="Helper:itemTD' + items + '"]')
					.append('<table border=0 cellpadding="0" cellspacing="0"' +
					'><tr><td background="' + FSH.System.imageServer +
					'/inventory/2x3.gif" width="60" height="90" ' + style +
					'><center><img src="' + FSH.System.imageServer + '/items/' +
					FSH.Helper.inventory.items[i].item_id + '.gif" class="tip-' +
					'dynamic" data-tipped="fetchitem.php?item_id=' +
					FSH.Helper.inventory.items[i].item_id + '&inv_id=' +
					FSH.Helper.inventory.items[i].inv_id + '&t=1&p=' +
					FSH.Helper.inventory.player_id + '&currentPlayerId=' +
					FSH.Helper.inventory.player_id + '" border=0></center></td>' +
					'</tr><tr><td align="center"><input type="checkbox" ' +
					'value="' + FSH.Helper.inventory.items[i].inv_id +
					'" name="sendItemList[]" ></td></tr></table>');
				items+= 1;
			}
		}
		$('table[id="item-list"]').children().remove();
		$('table[id="item-list"]').append(itemTable.html());
	},

};

FSH.attackPlayer = { // Legacy - currently disabled

	injectAttackPlayer: function() { // Legacy - currently disabled
		var b = FSH.System.findNode('//input[contains(@value, "Activate!")]');
		if (b !== null) {
			var oldOnclick = b.getAttribute('onClick');
			b.setAttribute('onClick', 'if (confirm("Are you sure you want to activate PvP Prestige?")) { ' + oldOnclick + '}');
		}
		if (!FSH.System.getValue('enableAttackHelper')) {return;}
		//inject current stats, buffs and equipment
		var attackPlayerTable = FSH.System.findNode('//table[tbody/tr/td/font/b[.="Attack Player (PvP)"]]');
		if (!attackPlayerTable) {return;}
		var targetPlayer = /target_username=([a-zA-Z0-9]+)/.exec(location.search);
		if (targetPlayer) {
			var output = '<center><table width="625" cellspacing="0" ' +
				'cellpadding="0" bordercolor="#000000" border="0" style="' +
				'border-style: solid; border-width: 1px;"><tbody>' +
				'<tr style="text-align:center;" bgcolor="#cd9e4b"><td width="350" ' +
				'style="border-style: solid; border-width: 1px;">Attacker</td><td ' +
				'width="275" style="border-style: solid; border-width: 1px;">' +
				'Defender</td></tr>' +
				'<tr style="text-align:center;"><td style="border-style: solid; ' +
				'border-width: 1px;"><span id="Helper:attackPlayerSelfStatData">' +
				'<font color="green">Gathering your stats ...</font></span></td>'+
				'<td style="border-style: solid; border-width: 1px;"><span ' +
				'id="Helper:attackPlayerDefenderStatData"><font color="green">' +
				'Gathering defender stats ...</font></span></td></tr>' +
				'<tr style="text-align:center;"><td style="border-style: solid; ' +
				'border-width: 1px;"><span id="Helper:attackPlayerSelfBuffData">' +
				'<font color="green">Gathering your buffs ...</font></span></td>' +
				'<td style="border-style: solid; border-width: 1px;"><span ' +
				'id="Helper:attackPlayerDefenderBuffData"><font color="green">' +
				'Gathering defender buffs ...</font></span></td></tr>' +
				'</tbody></table><center>';

			attackPlayerTable.rows[4].cells[0].innerHTML = output;

			//FSH.System.xmlhttp('index.php?cmd=profile', FSH.Helper.getSelfProfileStatsAndBuffs);
			FSH.System.xmlhttp('index.php?cmd=profile',
				FSH.attackPlayer.getProfileStatsAndBuffs,
				{'anchor1':'attackPlayerSelfStatData',
					'anchor2':'attackPlayerSelfBuffData'});
			FSH.System.xmlhttp('index.php?cmd=findplayer&search_active=1&search_level_max=&search_level_min=&search_username='+
				targetPlayer[1]+'&search_show_first=1',
				FSH.attackPlayer.getProfileStatsAndBuffs,
				{'anchor1':'attackPlayerDefenderStatData',
					'anchor2':'attackPlayerDefenderBuffData'});
			//insert blank row
			var newRow = attackPlayerTable.insertRow(5);
			var newCell = newRow.insertCell(0);
			newCell.innerHTML = '&nbsp;';
		}
	},

	getProfileStatsAndBuffs: function(responseText, callback) { // Legacy - currently disabled
		var doc = FSH.System.createDocument(responseText);
		//stats
		var vlTextElement = FSH.System.findNode('//td[a/b[.="VL"] or b/a[.="VL"]]', doc);
		var vlValueElement = vlTextElement.nextSibling;
		var pvpTextElement = FSH.System.findNode('//td[b[contains(.,"PvP")]]', doc);
		var pvpValueElement = pvpTextElement.nextSibling;
		var attackTextElement = FSH.System.findNode('//td[b[contains(.,"Attack:")]]', doc);
		var attackValueElement = attackTextElement.nextSibling;
		var defenseTextElement = FSH.System.findNode('//td[b[contains(.,"Defense:")]]', doc);
		var defenseValueElement = defenseTextElement.nextSibling;
		var armorTextElement = FSH.System.findNode('//td[b[contains(.,"Armor:")]]', doc);
		var armorValueElement = armorTextElement.nextSibling;
		var damageTextElement = FSH.System.findNode('//td[b[contains(.,"Damage:")]]', doc);
		var damageValueElement = damageTextElement.nextSibling;
		var hpTextElement = FSH.System.findNode('//td[b[contains(.,"Health:")]]', doc);
		var hpValueElement = hpTextElement.nextSibling;
		var goldTextElement = FSH.System.findNode('//td[b[contains(.,"Gold:")]]', doc);
		var goldValueElement = goldTextElement.nextSibling;
		var pvpProtElement = FSH.System.findNode('//td[contains(.,"PvP") and contains(.,"Protection")]', doc);
		var lastActivityElement = FSH.System.findNode('//p[contains(.,"Last Activity:")]', doc);
		var output = '<table width="100%"><tbody>';
		if (lastActivityElement) {
			output += '<tr><td colspan=4 style="text-align:center;">' +
				lastActivityElement.innerHTML + '</td></tr>';}
		output += '<tr><td width="15%" style="text-align:right;">' +
			vlTextElement.innerHTML +
			'</td><td width="30%" style="text-align:left;">' +
			vlValueElement.innerHTML + '</td>' +
			'<td width="25%" style="text-align:right;">' + pvpTextElement.innerHTML +
			'</td><td width="30%" style="text-align:left;">' +
			pvpValueElement.innerHTML + '</td></tr>';
		output += '<tr><td width="15%" style="text-align:right;">' +
			attackTextElement.innerHTML +
			'</td><td width="30%" style="text-align:left;">' +
			attackValueElement.innerHTML + '</td>' +
			'<td width="25%" style="text-align:right;">' +
			defenseTextElement.innerHTML +
			'</td><td width="30%" style="text-align:left;">' +
			defenseValueElement.innerHTML + '</td></tr>';
		output += '<tr><td width="15%" style="text-align:right;">' +
			armorTextElement.innerHTML +
			'</td><td width="30%" style="text-align:left;">' +
			armorValueElement.innerHTML + '</td>' +
			'<td width="25%" style="text-align:right;">' +
			damageTextElement.innerHTML +
			'</td><td width="30%" style="text-align:left;">' +
			damageValueElement.innerHTML + '</td></tr>';
		output += '<tr><td width="15%" style="text-align:right;">' +
			hpTextElement.innerHTML +
			'</td><td width="30%" style="text-align:left;">' +
			hpValueElement.innerHTML + '</td>' +
			'<td width="25%" style="text-align:right;">' +
			goldTextElement.innerHTML +
			'</td><td width="30%" style="text-align:left;">' +
			goldValueElement.innerHTML + '</td></tr>';
		output += '<tr><td colspan=4 style="text-align:center;">' +
			pvpProtElement.innerHTML + '</td></tr>';
		output += '</tbody></table>';
		var anchor1 = callback.anchor1;
		var injectHere = FSH.System.findNode('//span[@id="Helper:'+anchor1+'"]');
		injectHere.innerHTML = output;
		//buffs
		var activeBuffsTitleRow = FSH.System.findNode('//strong[.="Active Buffs"]/ancestor::div[1]', doc);
		var activeBuffsElement = activeBuffsTitleRow.nextSibling.nextSibling;
		var anchor2 = callback.anchor2;
		injectHere = FSH.System.findNode('//span[@id="Helper:'+anchor2+'"]');
		injectHere.innerHTML = activeBuffsElement.innerHTML;
	},

};

FSH.recipeMgr = { // Legacy

	injectRecipeManager: function(content) { // Native - Ugly
		if (!content) {content = FSH.Layout.notebookContent();}
		FSH.recipeMgr.recipebook = FSH.System.getValueJSON('recipebook');
		content.innerHTML='<table cellspacing="0" cellpadding="0" border="0" width="100%"><tr style="background-color:#cd9e4b">'+
			'<td width="90%" nobr><b>&nbsp;Recipe Manager</b></td>'+
			'<td width="10%" nobr style="font-size:x-small;text-align:right">[<span id="Helper:RecipeManagerRefresh" style="text-decoration:underline;cursor:pointer">Refresh</span>]</td>'+
			'</tr>' +
			'</table>' +
			'<div style="font-size:small;" id="Helper:RecipeManagerOutput">' +
			'' +
			'</div>';
		if (!FSH.recipeMgr.recipebook) {FSH.recipeMgr.parseInventingStart();}
		document.getElementById('Helper:RecipeManagerRefresh').addEventListener('click', FSH.recipeMgr.parseInventingStart, true);
		FSH.recipeMgr.generateRecipeTable();
	},

	parseInventingStart: function(){ // Legacy
		FSH.recipeMgr.recipebook = {};
		FSH.recipeMgr.recipebook.recipe = [];
		var output=document.getElementById('Helper:RecipeManagerOutput');
		output.innerHTML='<br/>Parsing inventing screen ...<br/>';
		var currentFolder = 1;
		FSH.System.setValue('currentFolder', currentFolder);

		FSH.System.xmlhttp('index.php?cmd=inventing&page=0', FSH.recipeMgr.parseInventingPage, {'page': 0});

	},

	parseInventingPage: function(responseText, callback) { // Legacy
		var doc=FSH.System.createDocument(responseText);

		var folderIDs = [];
		FSH.Helper.folderIDs = folderIDs; //clear out the array before starting.
		var currentFolder = FSH.System.getValue('currentFolder');
		$(doc).find('a[href*="index.php?cmd=inventing&folder_id="]').each(function(){
			var folderID = /folder_id=([-0-9]+)/.exec($(this).attr('href'))[1]*1;
			folderIDs.push(folderID);
			FSH.Helper.folderIDs = folderIDs;
		});
		
		var folderCount = FSH.Helper.folderIDs.length;
		var folderID = FSH.Helper.folderIDs[currentFolder-1];
		var folderTextElement = $(doc).find('a[href*="index.php?cmd=inventing&folder_id=' + folderID + '"]').closest('td').text();
		
		var folderText = '';
		if (folderTextElement.length > 0) {
			folderText = folderTextElement;
		}
		var output=document.getElementById('Helper:RecipeManagerOutput');
		var currentPage = callback.page;
		var pages = $(doc).find('select[name="page"]:first');
		var nextPage;
		if (folderText.search(/quest/i) === -1) {
			if (pages.length === 0) {return;}
			$(doc).find('a[href*="index.php?cmd=inventing&subcmd=viewrecipe&recipe_id="]').each(function(){
				var recipeLink = $(this).attr('href');
				var recipeId = parseInt(recipeLink.match(/recipe_id=(\d+)/i)[1],10);
				var recipe={
					'img': $(this).closest('tr').find('img').attr('src'),
					'link': recipeLink,
					'name': $(this).text(),
					'id': recipeId};
				output.innerHTML+='Found blueprint: '+ recipe.name + '<br/>';
				FSH.recipeMgr.recipebook.recipe.push(recipe);
			});
			
			nextPage=currentPage+1;
			output.innerHTML += 'Parsing folder '+ currentFolder + ' ... Page ' + nextPage + '... <br/>';

		} else {
			output.innerHTML += 'Skipping folder '+ currentFolder + ' as it has the word "quest" in folder name.<br/>';
			nextPage = pages.find('option:last').text()*1;
		}
		if (nextPage<=pages.find('option:last').text()*1 && currentFolder!==folderCount || currentFolder<folderCount) {
			if (nextPage===pages.find('option:last').text()*1 && currentFolder<folderCount) {
				nextPage = 0;
				folderID = FSH.Helper.folderIDs[currentFolder];
				FSH.System.setValue('currentFolder', currentFolder+1);
			}
			FSH.System.xmlhttp(
				'index.php?cmd=inventing&page=' + nextPage + '&folder_id=' +
				folderID,
				FSH.recipeMgr.parseInventingPage,
				{'page': nextPage}
			);
		}
		else {
			output.innerHTML+='Finished parsing ... Retrieving individual blueprints...<br/>';
			// FSH.Helper.generateRecipeTable();
			FSH.System.xmlhttp('index.php?cmd=inventing&subcmd=viewrecipe&recipe_id=' +
				FSH.recipeMgr.recipebook.recipe[0].id,
				FSH.recipeMgr.parseRecipePage, {'recipeIndex': 0});
		}
	},

	parseRecipePage: function(responseText, callback) { // Legacy
		var doc=FSH.System.createDocument(responseText);
		var output=document.getElementById('Helper:RecipeManagerOutput');
		var currentRecipeIndex = callback.recipeIndex;
		var recipe = FSH.recipeMgr.recipebook.recipe[currentRecipeIndex];

		output.innerHTML+='Parsing blueprint ' + recipe.name +'...<br/>';

		recipe.items = FSH.recipeMgr.parseRecipeItemOrComponent('td[background*="/inventory/2x3.gif"]', doc);
		recipe.components  = FSH.recipeMgr.parseRecipeItemOrComponent('td[background*="/inventory/1x1mini.gif"]', doc);
		recipe.target = FSH.recipeMgr.parseRecipeItemOrComponent('td[background*="/hellforge/2x3.gif"]', doc)[0];

		var nextRecipeIndex = currentRecipeIndex+1;
		if (nextRecipeIndex<FSH.recipeMgr.recipebook.recipe.length) {
			var nextRecipe = FSH.recipeMgr.recipebook.recipe[nextRecipeIndex];
			FSH.System.xmlhttp('index.php?cmd=inventing&subcmd=viewrecipe&recipe_id=' +
				nextRecipe.id, FSH.recipeMgr.parseRecipePage,
				{'recipeIndex': nextRecipeIndex});
		}
		else {
			output.innerHTML+='Finished parsing ... formatting ...';
			FSH.recipeMgr.recipebook.lastUpdate = new Date();
			FSH.System.setValueJSON('recipebook', FSH.recipeMgr.recipebook);
			FSH.recipeMgr.generateRecipeTable();
		}
	},

	parseRecipeItemOrComponent: function(jqueryxpath, doc) { // jQuery
		var results = [];
		$(doc).find(jqueryxpath).each(function(){
			var mouseOver = $(this).find('img').data('tipped');
			var resultAmounts = $(this).parent().next().text();
			var mouseOverRX = mouseOver.match(/fetchitem.php\?item_id=(\d+)\&inv_id=-1\&t=2\&p=(\d+)\&vcode=([a-z0-9]+)/i);
			var result = {
				img: $(this).find('img').attr('src'),
				id: mouseOverRX[1],
				verify: mouseOverRX[3],
				amountPresent: parseInt(resultAmounts.split('/')[0],10),
				amountNeeded: parseInt(resultAmounts.split('/')[1],10)
			};
			results.push(result);
		});

		return results;
	},

	generateRecipeTable: function() { // Native - Ugly
		var j;
		var output=document.getElementById('Helper:RecipeManagerOutput');
		var result='<table id="Helper:RecipeTable" width="100%"><tr>' +
			'<th align="left" colspan="2" sortkey="name">Name</th>' +
			'<th align="left">Items</th>' +
			'<th align="left">Components</th>' +
			'<th align="left">Target</th>' +
			'</tr>';
		if (!FSH.recipeMgr.recipebook) {return;}

		var hideRecipes=[];
		if (FSH.System.getValue('hideRecipes')) {
			hideRecipes=FSH.System.getValue('hideRecipeNames').split(',');
		}

		var recipe;
		var c=0;
		for (var i=0; i<FSH.recipeMgr.recipebook.recipe.length;i += 1) {
			recipe=FSH.recipeMgr.recipebook.recipe[i];
			c+= 1;

			if (hideRecipes.indexOf(recipe.name) === -1) {
				result+='<tr class="HelperTableRow'+(1+c % 2)+'" valign="middle">' +
					'<td style="border-bottom:1px solid #CD9E4B;"><a href="' + recipe.link + '"><img border="0" align="middle" src="' +
					recipe.img + '"/></a></td>' +
					'<td style="border-bottom:1px solid #CD9E4B;"><a href="' + recipe.link + '">' + recipe.name + '</a></td>';
				result += '<td style="border-bottom:1px solid #CD9E4B;">';
				if (recipe.items) {
					for (j=0; j<recipe.items.length; j += 1) {
						result += recipe.items[j].amountPresent  + '/' + recipe.items[j].amountNeeded +
							' <img border="0" align="middle" class="tip-dynamic" ' +
							'data-tipped="fetchitem.php?item_id=' +
							recipe.items[j].id + '&inv_id=-1&t=2&p=' + FSH.Layout.playerId() + '&vcode=' + recipe.items[j].verify + '" ' +
							'src="' + recipe.items[j].img + '"/><br/>';
					}
				}
				result += '</td>';
				result += '<td style="border-bottom:1px solid #CD9E4B;">';
				if (recipe.components) {
					for (j=0; j<recipe.components.length; j += 1) {
						result += recipe.components[j].amountPresent + '/' + recipe.components[j].amountNeeded +
							' <img border="0" align="middle" class="tip-dynamic" ' +
							'data-tipped="fetchitem.php?item_id=' +
							recipe.components[j].id + '&inv_id=-1&t=2&p=' + FSH.Layout.playerId() + '&vcode=' + recipe.components[j].verify + '" ' +
							'src="' + recipe.components[j].img + '"/><br/>';
					}
				}
				result += '</td>';
				result += '<td style="border-bottom:1px solid #CD9E4B;">';
				if (recipe.target) {
					result +=' <img border="0" align="middle" class="tip-dynamic" ' +
							'data-tipped="fetchitem.php?item_id=' +
							recipe.target.id + '&inv_id=-1&t=2&p=' + FSH.Layout.playerId() + '&vcode=' + recipe.target.verify + '" ' +
							'src="' + recipe.target.img + '"/><br/>';
				}
				result += '</td>';
				result += '</tr>';
			}
		}
		result+='</table>';
		output.innerHTML=result;

		FSH.recipeMgr.recipebook.lastUpdate = new Date();
		FSH.System.setValueJSON('recipebook', FSH.recipeMgr.recipebook);

		var recipeTable=document.getElementById('Helper:RecipeTable');
		for (i=0; i<recipeTable.rows[0].cells.length; i += 1) {
			var cell=recipeTable.rows[0].cells[i];
			if (cell.getAttribute('sortkey')) {
				cell.style.textDecoration='underline';
				cell.style.cursor='pointer';
				cell.addEventListener('click', FSH.recipeMgr.sortRecipeTable, true);
			}
		}
	},

	sortRecipeTable: function(evt) { // Native
		FSH.recipeMgr.recipebook=FSH.System.getValueJSON('recipebook');
		var headerClicked = evt.target.getAttribute('sortKey');
		var sortType = evt.target.getAttribute('sorttype');
		if (!sortType) {sortType='string';}
		sortType = sortType.toLowerCase();
		if (FSH.Helper.sortAsc === undefined) {FSH.Helper.sortAsc = true;}
		if (FSH.Helper.sortBy && FSH.Helper.sortBy===headerClicked) {
			FSH.Helper.sortAsc=!FSH.Helper.sortAsc;
		}
		FSH.Helper.sortBy=headerClicked;
		switch (sortType) {
			case 'number':
				FSH.recipeMgr.recipebook.recipe.sort(FSH.System.numberSort);
				break;
			default:
				FSH.recipeMgr.recipebook.recipe.sort(FSH.System.stringSort);
				break;
		}
		FSH.recipeMgr.generateRecipeTable();
	},

};

FSH.quickExtract = { // Legacy - No longer required?

	insertQuickExtract: function(content) { // Hybrid
		if (!content) {content=FSH.Layout.notebookContent();}
		content.innerHTML='<table width=100%><tr style="background-color:' +
			'#CD9E4B;"><td nobr><b>Quick Extract</b></td></tr></table>' +
			'Select which type of plants you wish to extract all of. Only ' +
			'select extractable resources.<br/><label><input type="checkbox"' +
			' id="Helper:useItemsInSt" checked /> Select items in ST</label>' +
			'<label><input type="checkbox" id="Helper:useItemsInMain" ' +
			'checked /> Only extract items in Main Folder</label><table ' +
			'width=100% id="Helper:ExtTable"></table>';
		$('[id^="Helper\\:useItemsIn"]').click(FSH.quickExtract.showQuickExtract);
		$.getJSON('?cmd=export&subcmd=inventory', FSH.quickExtract.showQuickExtract);
	},

	showQuickExtract: function(data) { // Hybrid
		var item;
		if (data.items) {
			FSH.Helper.inventory = data;
		}
		var table = $('table[id="Helper:ExtTable"]');
		table.children().remove();//empty table for re-population.
		FSH.Helper.resourceList={}; //reset resourceList
		var selectST= $('input[id="Helper:useItemsInSt"]').is(':checked');
		var selectMain= $('input[id="Helper:useItemsInMain"]').is(':checked');
		table.append('<tr><th width=20%>Actions</th><th>Items</th></tr><tr><td id="buy_result" colspan=2></td></tr>');
		for (var i=0; i<FSH.Helper.inventory.items.length;i += 1) {
			item = FSH.Helper.inventory.items[i];
			if (selectMain && item.folder_id !== '-1') {continue;}
			if (!selectST && item.is_in_st) {continue;}
			if (item.item_name !== 'Zombie Coffin' &&
				item.type !== '12' &&
				item.type !== '16') {continue;}
			if (FSH.Helper.resourceList[item.item_id]){
				FSH.Helper.resourceList[item.item_id].invIDs += ',' +
					item.inv_id;
				FSH.Helper.resourceList[item.item_id].count += 1;
			} else {
				FSH.Helper.resourceList[item.item_id] = {'count':1,
					'invIDs':item.inv_id,
					'first_item':item};
			}
		}

		for (var id in FSH.Helper.resourceList) {
			if (!FSH.Helper.resourceList.hasOwnProperty(id)) {continue;}
			var res=FSH.Helper.resourceList[id];
			item=res.first_item;
			table.append('<tr><td align=center><span style="cursor:pointer; ' +
				'text-decoration:underline; color:#blue; font-size:x-small;"' +
				' id="Helper:extractAllSimilar' + id + '" invIDs="' +
				res.invIDs + '">Extract all ' + res.count + '</span></td>' +
				'<td><img src="' + FSH.System.imageServer + '/items/' + 
				item.item_id + '.gif" class="tip-dynamic" data-tipped="' +
				'fetchitem.php?item_id=' + item.item_id + '&inv_id=' +
				item.inv_id + '&t=1&p=' + FSH.Helper.inventory.player_id +
				'" border=0>' + '</td><td>'+item.item_name+'</td></tr>');
		}

		for (id in FSH.Helper.resourceList) {
			if (!FSH.Helper.resourceList.hasOwnProperty(id)) {continue;}
			document.getElementById('Helper:extractAllSimilar' + id).
				addEventListener('click', FSH.quickExtract.extractAllSimilar, true);
			}
	},

	extractAllSimilar: function(evt) { // Legacy
		if (!confirm('Are you sure you want to extract all similar items?')) {return;}
		var InventoryIDs=evt.target.getAttribute('invIDs').split(',');
		evt.target.parentNode.innerHTML = 'extracting all ' + InventoryIDs.length + ' resources';
		for (var i=0; i<InventoryIDs.length; i += 1){
			FSH.System.xmlhttp('index.php?cmd=profile&subcmd=useitem&inventory_id='+InventoryIDs[i], FSH.quickExtract.quickDoneExtracted);
		}
	},

	quickDoneExtracted: function(responseText) { // Native
		var infoMessage = FSH.Layout.infoBox(responseText);
		document.getElementById('buy_result').innerHTML+='<br />'+infoMessage;
	},

};

FSH.scavenging = { // Legacy - Not in use?

	injectScavenging: function() { // Legacy - Not in use?
		var injectHere=FSH.System.findNode('//b[contains(.,"Multiple Scavenging Results")]/..');
		if (injectHere) { // multi scavenging
			var victories=FSH.System.findNodes('//td[contains(.,"victorious")]');
			if (victories) {
				injectHere.innerHTML+='<br/>Victories: '+victories.length;
			}
			var defeats=FSH.System.findNodes('//td[contains(.,"defeated")]');
			if (defeats) {
				injectHere.innerHTML+=', Defeated: '+defeats.length;
			}
			var gains=FSH.System.findNodes('//td[contains(.,"Item Gained")]/b');
			if (gains) {
				injectHere.innerHTML+='<br/>'+gains.length+' item(s): ';
				var gainHash={};
				for (var i=0;i<gains.length;i += 1) {
					if (gainHash[gains[i].textContent]) {
						gainHash[gains[i].textContent]+= 1;
					} else {
						gainHash[gains[i].textContent]=1;
					}
				}
				for (var item in gainHash) {
					if (!gainHash.hasOwnProperty(item)) { continue; }
					injectHere.innerHTML+=gainHash[item]+' '+item+'(s), ';
				}
			}
		}
		FSH.System.xmlhttp('index.php?cmd=world', FSH.scavenging.getBpCountFromWorld);
	},

	getBpCountFromWorld: function(responseText) { // Legacy - Not in use?
		// backpack counter
		var doc=FSH.System.createDocument(responseText);
		var bp=FSH.System.findNode('//td[a/img[contains(@src,"_manageitems.gif")]]',doc);
		var injectHere=document.getElementById('reportDiv');
		if (!injectHere) {
			injectHere=FSH.System.findNode('//b[contains(.,"Multiple Scavenging Results")]/..');
		}
		injectHere.appendChild(bp);
	},

};

FSH.findBuffs = { // Legacy

	injectFindBuffs: function(content) { // Native - Bad
		if (!content) {content=FSH.Layout.notebookContent();}
		var buffList = FSH.Data.buffList;
		FSH.Helper.sortBy='name';
		FSH.Helper.sortAsc=true;
		buffList.sort(FSH.System.stringSort);
		var injectionText = '';
		var extraProfile = FSH.System.getValue('extraProfile');
		injectionText += '<table width="620" cellspacing="0" cellpadding="2" ' +
			'border="0" align="center"><tbody><tr><td rowspan="2" colspan="2" ' +
			'width="50%"><h1>Find Buff</h1></td><td align="right" style="' +
			'color:brown;">Select buff to search for:</td>';

		injectionText += '<td align="left"><select style="width:140px;" ' +
			'id="selectedBuff">';
		for (var j = 0; j < buffList.length; j += 1) {
			injectionText += '<option value="' + buffList[j].skillId + '">' +
				buffList[j].name + '</option>';
		}
		injectionText += '</select></td></tr>';

		injectionText += '<tr>' +
			'<td align="right" style="color:brown;">Level 175 buffers only:</td>' +
			'<td align="left"><input id="level175" type="checkbox"></td></tr>' +
			'<tr><td align="right" style="color:brown;" width="30%">Nicknames of ' +
			'buff searched:&nbsp;</td><td align="left" id="buffNicks">&nbsp;</td>' +
			'<td align="right" style="color:brown;">Search guild members:</td>' +
			'<td align="left"><input id="guildMembers" type="checkbox" checked>' +
			'</td></tr><tr>' +
			'<td align="right" style="color:brown;"># potential buffers to ' +
			'search:&nbsp;</td><td align="left" id="potentialBuffers"></td>' +
			'<td align="right" style="color:brown;">Search allies/enemies:' +
			FSH.Layout.helpLink('Search Allies/Enemies', 'The checkbox enables ' +
			'searching your own personal allies/enemies list for buffs.<br><br>' +
			'Additional profiles to search can be added in the text field to the ' +
			'right, separated by commas.') + '</td>' +
			'<td align="left"><input id="alliesEnemies" type="checkbox" checked>' +
			'<input style="width:118px;" class="custominput" id="extraProfile" ' +
			'type="text" title="Extra profiles to search" value="' +
			(extraProfile?extraProfile:'') + '"></td></tr>' +
			'<tr><td align="right" style="color:brown;"># Buffers processed:' +
			'&nbsp;</td><td align="left" id="buffersProcessed">0</td>' +
			'<td align="right" style="color:brown;">Search online list:</td>' +
			'<td align="left"><select style="width:140px;" id="onlinePlayers">' +
				'<option value="0">Disabled</option>' +
				'<option value="49">Short (fastest)</option>' +
				'<option value="47">Medium (medium)</option>' +
				'<option value="45">Long (slowest)</option>' +
			'</select></td></tr>' +
			'<tr><td align="right" style="color:brown;">Find buffers progress:' +
			'&nbsp;</td><td align="left" width="310" id="bufferProgress">Idle</td>'+
			'<td align="center"><input id="clearresultsbutton" ' +
			'class="custombutton" type="button" value="Clear Results"></td>' +
			'<td align="center"><input id="findbuffsbutton" class="custombutton" ' +
			'type="button" value="Find Buffers"></td></tr>' +
			'</tbody></table><br>' +
			'<h1>Potential Buffers and Bio Info</h1><br>' +
			'<table width="620" cellspacing="0" cellpadding="3" border="1" ' +
			'align="center" id="buffTable"><tbody>' +
			'<tr><th width="120">&nbsp;Name</th><th width="200">&nbsp;Player ' +
			'Info</th><th>&nbsp;Notable Bio Text</th></tr>' +
			'</tbody></table><br>' +
			'<div class=content style="font-size:xx-small; color:brown; ' +
			'margin-left:28px; margin-right:28px;">Disclaimer: This ' +
			'functionality does a simple text search for the terms above. '+
			'It is not as smart as you are, so please do not judge the results ' +
			'too harshly. It does not search all online players, just a subset ' +
			'of those that have been on recently. ' +
			'The aim is to be fast and still return a good set of results. This ' +
			'feature is a work in progress, so it may be tweaked and enhanced ' +
			'over time.</div>';
		content.innerHTML = injectionText;
		document.getElementById('findbuffsbutton')
			.addEventListener('click', FSH.findBuffs.findBuffsStart, true);
		document.getElementById('clearresultsbutton')
			.addEventListener('click', FSH.findBuffs.findBuffsClearResults, true);
	},

	findBuffsClearResults: function() { // Native
		var buffTable = document.getElementById('buffTable');
		for (var j = buffTable.rows.length; j > 1; j-=1) {
			buffTable.deleteRow(j-1);
		}
		document.getElementById('buffNicks').innerHTML = '';
		var bufferProgress = document.getElementById('bufferProgress');
		bufferProgress.innerHTML = 'Idle.';
		bufferProgress.style.color = 'black';
		document.getElementById('potentialBuffers').innerHTML = '';
		document.getElementById('buffersProcessed').innerHTML = 0;
	},

	findBuffsStart: function() { // Legacy
		var selectedBuff = $('#selectedBuff').val();
		//create array of buff nicknames ...
		var buffList = FSH.Data.buffList;
		for (var j = 0; j < buffList.length; j += 1) {
			if (selectedBuff === buffList[j].skillId) {
				FSH.Helper.findBuffNicks = buffList[j].nicks;
				FSH.Helper.findBuffMinCastLevel = buffList[j].minCastLevel;
				break;
			}
		}
		document.getElementById('buffNicks').innerHTML = FSH.Helper.findBuffNicks;
		var bufferProgress = document.getElementById('bufferProgress');
		bufferProgress.innerHTML = 'Gathering list of potential buffers ...';
		bufferProgress.style.color = 'green';
		FSH.Helper.findBuffsLevel175Only =
			document.getElementById('level175').checked;
		document.getElementById('buffersProcessed').innerHTML = 0;
		FSH.Helper.onlinePlayers = [];
		FSH.Helper.extraProfile = document.getElementById('extraProfile').value;
		FSH.System.setValue('extraProfile', FSH.Helper.extraProfile);
		//get list of players to search, starting with guild>manage page
		FSH.System.xmlhttp('index.php?cmd=guild&subcmd=manage',
			FSH.findBuffs.findBuffsParseGuildManagePage);
	},

	findBuffsParseGuildManagePage: function(responseText) { // jQuery
		var doc = FSH.System.createDocument(responseText);
		var characterName = $('dt.stat-name:first').next().text().replace(/,/g,'');
		var memberTableRows = $(doc)
			.find('table:has(td:contains("Rank")[bgcolor="#C18B35"]):last')
			.find('tr:gt(1):not(:has(td[colspan="5"]))');
		if (document.getElementById('guildMembers').checked) {
			memberTableRows.each(function(){
				var contactLink = $(this).find('a');
				var onMouseOver = $(contactLink).data('tipped');
				var lastActivity = /<td>Last Activity:<\/td><td>(\d+)d (\d+)h (\d+)m (\d+)s<\/td>/.exec(onMouseOver);
				var lastActivityDays = parseInt(lastActivity[1],10);
				var lastActivityHours = parseInt(lastActivity[2],10) +
					lastActivityDays * 24;
				var lastActivityMinutes = parseInt(lastActivity[3],10) +
					lastActivityHours * 60;
				//check if they are high enough level to cast the buff
				var virtualLevel = /<td>VL:<\/td><td>([,0-9]+)<\/td>/.exec(onMouseOver);
				virtualLevel = parseInt(virtualLevel[1].replace(/,/g,''),10);
				var minPlayerVirtualLevel = 1;
				if (FSH.Helper.findBuffsLevel175Only) {minPlayerVirtualLevel = 500;}
				if (lastActivityMinutes < 5 &&
					virtualLevel >= FSH.Helper.findBuffMinCastLevel &&
					virtualLevel >= minPlayerVirtualLevel) {
					//add online player to search list (all but self)
					var onlinePlayer = contactLink.attr('href');
					if (characterName !== $(this).find('td:eq(1)')
						.text().trim()) {
						FSH.Helper.onlinePlayers.push(onlinePlayer);
					}
				}
			});
		}
		//continue with profile pages
		FSH.findBuffs.findBuffsParseProfilePageStart();
	},

	findBuffsParseProfilePageStart: function() { // Legacy
		//if option enabled then parse profiles
		FSH.Helper.profilePagesToSearch = [];
		FSH.Helper.profilePagesToSearch.push('index.php?cmd=profile');
		var extraProfileArray = FSH.Helper.extraProfile.split(',');
		var i;
		for (i=0;i<extraProfileArray.length ;i+= 1 ) {
			FSH.Helper.profilePagesToSearch.push('index.php?cmd=findplayer' +
				'&search_active=1&search_level_max=&search_level_min=' +
				'&search_username=' + extraProfileArray[i] + '&search_show_first=1');
		}
		FSH.Helper.profilePagesToSearchProcessed = 0;
		if (document.getElementById('alliesEnemies').checked) {
			for (i=0;i<FSH.Helper.profilePagesToSearch.length ;i+= 1 ) {
				FSH.System.xmlhttp(FSH.Helper.profilePagesToSearch[i],
					FSH.findBuffs.findBuffsParseProfilePage);
			}
		} else {
			FSH.findBuffs.findBuffsParseOnlinePlayersStart();
		}
	},

	findBuffsParseProfilePage: function(responseText) { // jQuery
		var doc = FSH.System.createDocument(responseText);
		var characterName = $('dt.stat-name:first').next().text().replace(/,/g,'');
		var profileAlliesEnemies = $(doc).find('#profileLeftColumn')
			.find('a[data-tipped*="Last Activity"]');
		profileAlliesEnemies.each(function(){
			var onMouseOver = $(this).data('tipped');
			var lastActivity = /<td>Last Activity:<\/td><td>(\d+)d (\d+)h (\d+)m (\d+)s<\/td>/.exec(onMouseOver);
			var lastActivityDays = parseInt(lastActivity[1],10);
			var lastActivityHours = parseInt(lastActivity[2],10) +
				lastActivityDays * 24;
			var lastActivityMinutes = parseInt(lastActivity[3],10) +
				lastActivityHours * 60;
			//check if they are high enough level to cast the buff
			var virtualLevel = /<td>VL:<\/td><td>([,0-9]+)<\/td>/.exec(onMouseOver);
			virtualLevel = parseInt(virtualLevel[1].replace(/,/g,''),10);
			var minPlayerVirtualLevel = 1;
			if (FSH.Helper.findBuffsLevel175Only) {minPlayerVirtualLevel = 500;}
			if (lastActivityMinutes < 5 &&
				virtualLevel >= FSH.Helper.findBuffMinCastLevel &&
				virtualLevel >= minPlayerVirtualLevel) {
				//add online player to search list (all but self)
				var onlinePlayer = $(this).attr('href');
				if (characterName !== $(this).text().trim()) {
					FSH.Helper.onlinePlayers.push(onlinePlayer);
				}
			}
		});
		//continue with online players
		FSH.Helper.profilePagesToSearchProcessed += 1;
		if (FSH.Helper.profilePagesToSearchProcessed ===
			FSH.Helper.profilePagesToSearch.length) {
			FSH.findBuffs.findBuffsParseOnlinePlayersStart();
		}
	},

	findBuffsParseOnlinePlayersStart: function() { // Legacy
		//if option enabled then parse online players
		FSH.Helper.onlinePlayersSetting =
			document.getElementById('onlinePlayers').value;
		if (FSH.Helper.onlinePlayersSetting !== 0) {
			FSH.System.xmlhttp('index.php?cmd=onlineplayers&page=1',
				FSH.findBuffs.findBuffsParseOnlinePlayers, {'page':1});
		} else {
			FSH.findBuffs.findBuffsParsePlayersForBuffs();
		}
	},

	findBuffsParseOnlinePlayers: function(responseText) { // Legacy
		var doc = FSH.System.createDocument(responseText);
		var playerRows = $(doc).find('table:contains("Username")>tbody>tr:has' +
			'(td>a[href*="cmd=profile&player_id="])');
		var maxPage = parseInt($(doc).find('td:has(input[name="page"]):last')
			.text().replace(/\D/g, ''),10);
		var curPage = parseInt($(doc).find('input[name="page"]:last').val()
			.replace(/\D/g, ''),10);
		var characterName = $('dt.stat-name:first').next().text().replace(/,/g,'');
		if (curPage !== 1){
			playerRows.each(function(){
				var onlinePlayer = $(this).find('td:eq(1) a').attr('href');
				var onlinePlayerLevel = parseInt($(this).find('td:eq(2)').text()
					.replace(/,/g,''),10);
				var onlinePlayerName = $(this).find('td:eq(1) a').text();
				var minPlayerVirtualLevel = 1;
				if (FSH.Helper.findBuffsLevel175Only) {minPlayerVirtualLevel = 500;}
				if (onlinePlayerLevel >= FSH.Helper.findBuffMinCastLevel &&
					onlinePlayerLevel >= minPlayerVirtualLevel) {
					//add online player to search list (all but self)
					if (characterName !== onlinePlayerName.trim()) {
						FSH.Helper.onlinePlayers.push(onlinePlayer);
					}
				}
			});
		}
		if (curPage < maxPage/*-maxPage+15*/) {
			var newPage = curPage === 1 ?
				Math.round(FSH.Helper.onlinePlayersSetting * maxPage / 50) :
				curPage + 1;
			var bufferProgress = document.getElementById('bufferProgress');
			bufferProgress.innerHTML = 'Parsing online page ' + curPage + ' ...';
			FSH.System.xmlhttp('index.php?cmd=onlineplayers&page=' + newPage,
				FSH.findBuffs.findBuffsParseOnlinePlayers, {'page':newPage});
		}
		else {
			//all done so moving on
			FSH.findBuffs.findBuffsParsePlayersForBuffs();
		}
	},

	findBuffsParsePlayersForBuffs: function() { // Legacy
		//remove duplicates TODO
		var bufferProgress = document.getElementById('bufferProgress');
		//now need to parse player pages for buff ...
		document.getElementById('potentialBuffers').innerHTML =
			FSH.Helper.onlinePlayers.length;
		if (FSH.Helper.onlinePlayers.length <= 0) {
			bufferProgress.innerHTML = 'Done.';
			bufferProgress.style.color = 'blue';
			return;
		}
		bufferProgress.innerHTML = 'Parsing player data ...';
		bufferProgress.style.color = 'green';

		for (var j = 0; j < FSH.Helper.onlinePlayers.length; j += 1) {
			FSH.System.xmlhttp(FSH.Helper.onlinePlayers[j],
				FSH.findBuffs.findBuffsParseProfileAndDisplay,
				{'href': FSH.Helper.onlinePlayers[j]});
		}
	},

	findBuffsParseProfileAndDisplay: function(responseText, callback) { // Hybrid - Evil
		var doc = FSH.System.createDocument(responseText);
		//name and level
		var playerName = $(doc).find('div#pCC h1:first').text();
		var levelElement = $(doc).find('td:contains("Level:"):last').next();
		var levelValue = parseInt(levelElement.text().replace(/,/g,''),10);
		var virtualLevelElement = $(doc).find('td:contains("VL:"):last').next();
		var virtualLevelValue = parseInt(virtualLevelElement.text()
			.replace(/,/g,''),10);
		//last activity
		var lastActivityElement = $(doc).find('div#pCC p:first');
		var lastActivity = /(\d+) mins, (\d+) secs/
			.exec(lastActivityElement.text());
		var lastActivityMinutes = parseInt(lastActivity[1],10);
		var lastActivityIMG = FSH.Layout.onlineDot({min: lastActivityMinutes});
		//buffs
		var bioDiv = $(doc)
			.find('div.innerColumnHeader:contains("Biography"):last');
		var bioCell = bioDiv.next();
		//~ var buffNickArray = FSH.Helper.findBuffNicks.split(',');
		var buffTable = document.getElementById('buffTable');
		var textLineArray = [];
		var buffPosition = 0, startingPosition = 0, runningTotalPosition = 0;
		var bioTextToSearch = ' '+bioCell.html()+' ';
		var buffRE = new RegExp('[^a-zA-Z]((' +
			FSH.Helper.findBuffNicks.replace(/,/g,')|(') + '))[^a-zA-Z]', 'i');
		while (buffPosition !== -1) {
			bioTextToSearch = bioTextToSearch.substr(startingPosition,
				bioTextToSearch.length);
			buffPosition = bioTextToSearch.search(buffRE);
			if (buffPosition !== -1) {
				startingPosition = buffPosition + 1;
				runningTotalPosition += buffPosition;
				var prevBR = bioCell.html().lastIndexOf('<br>',runningTotalPosition-1);
				if (prevBR===-1) {prevBR=0;}
				var nextBR = bioCell.html().indexOf('<br>',runningTotalPosition);
				if (nextBR===-1 && bioCell.html().indexOf('<br>') !== -1) {
					nextBR=bioCell.html().length-5;
				}
				var textLine = bioCell.html().substr(prevBR + 4, nextBR - prevBR);
				textLine = textLine.replace(/(`~)|(~`)|(\{b\})|(\{\/b\})/g,'');
				textLineArray.push(textLine);
			}
		}
		textLineArray = FSH.System.uniq(textLineArray);
		//sustain
		var sustainText = $(doc)
			.find('td:has(a:contains("Sustain")):last').next()
			.find('table.tipped').data('tipped');
		var sustainLevel;
		if (sustainText !== undefined) {
			var sustainLevelRE = /Level<br>(\d+)%/;
			sustainLevel = sustainLevelRE.exec(sustainText)[1];
		} else {
			sustainLevel = -1;
		}
		//extend
		var hasExtendBuff = $(doc).find('img.tipped[data-tipped*="Extend"]');

		//add row to table
		if (textLineArray.length > 0) {
			var newRow = buffTable.insertRow(-1);
			//name cell
			var newCell = newRow.insertCell(0);
			newCell.style.verticalAlign = 'top';
			var playerHREF = callback.href;
			var bioTip = bioCell.html().replace(/'|"|\n/g,'');
			newCell.innerHTML = '<nobr>' + lastActivityIMG + '&nbsp;<a href="' +
				playerHREF + '" target="new" ' +
				// FIXME - It kind works now, but not guaranteed?
				'class="tipped" data-tipped-options="hook: \'leftmiddle\'" ' + 
				'data-tipped="'+bioTip+'">' + playerName + '</a>' +
				'&nbsp;<span style="color:blue;">[<span class="a-reply" ' +
				'target_player="' + playerName +'" style="cursor:pointer; ' +
				'text-decoration:underline;">m</span>]</span>' + '</nobr><br>' +
				'<span style="color:gray;">Level:&nbsp;</span>' + levelValue +
				'&nbsp;(' + virtualLevelValue + ')';
			$('.a-reply').click(function(evt) {
				window.openQuickMsgDialog(evt.target.getAttribute('target_player'));
			});

			//player info cell
			newCell = newRow.insertCell(1);
			var playerInfo = '<table><tbody><tr><td colspan="2" style=' +
				'"color:gray;" align="right" width="50%">Last Activity:</td>' +
				'<td colspan="2"><nobr>' + lastActivity[0] + '</nobr></td></tr>' +
				'<tr><td style="color:gray;" align="right" width="25%">Sustain:' +
				'</td><td width="25%" style="color:' +
				(sustainLevel >= 100 ? 'green' : 'red') + ';">' + sustainLevel +
				'%</td>' +
				'<td width="25%" style="color:gray;" align="right">Extend:</td>' +
				'<td width="25%">' + (hasExtendBuff.length > 0 ?
				'<span style="color:green;">Yes</span>' :
				'<span style="color:red;">No</span>') + '</td></tr>';
			newCell.innerHTML = playerInfo;
			newCell.style.verticalAlign = 'top';
			//buff cell
			newCell = newRow.insertCell(2);
			for (var i = 0; i < textLineArray.length; i += 1) {
				newCell.innerHTML += textLineArray[i] + '<br>';
			}
		}
		var processedBuffers = document.getElementById('buffersProcessed');
		var potentialBuffers =
			parseInt(document.getElementById('potentialBuffers').textContent,10);
		var processedBuffersCount = parseInt(processedBuffers.textContent,10);
		processedBuffers.innerHTML = processedBuffersCount + 1;
		if (potentialBuffers === processedBuffersCount + 1) {
			var bufferProgress = document.getElementById('bufferProgress');
			bufferProgress.innerHTML = 'Done.';
			bufferProgress.style.color = 'blue';
		}
	},

	injectFindOther: function(content) { // Native - Bad
		if (!content) {content=FSH.Layout.notebookContent();}
		var injectionText = '';
		var textToSearchFor = FSH.System.getValue('textToSearchFor');
		var extraProfile = FSH.System.getValue('extraProfile');
		injectionText += '<table width="620" cellspacing="0" cellpadding="2" ' +
			'border="0" align="center"><tbody>' +
			'<tr><td rowspan="2" colspan="2" width="50%"><h1>Find Other</h1></td>' +
			'<td align="right" style="color:brown;">Select text to search for:</td>' +

			'<td align="left"><input style="width:140px;" class="custominput" ' +
			'id="textToSearchFor" type="text" title="Text to search for" value="' +
			(textToSearchFor ? textToSearchFor : '') + '"></td></tr>' +

			'<tr>' +
			'<td align="right" style="color:brown;">Level 500+ players only:</td>' +
			'<td align="left"><input id="level175" type="checkbox"></td></tr>' +
			'<tr><td align="right" style="color:brown;" width="30%">Text ' +
			'searched for:&nbsp;</td><td align="left" id="buffNicks">&nbsp;</td>' +
			'<td align="right" style="color:brown;">Search guild members:</td>' +
			'<td align="left"><input id="guildMembers" type="checkbox" checked>' +
			'</td></tr><tr>' +
			'<td align="right" style="color:brown;"># potential players to ' +
			'search:&nbsp;</td><td align="left" id="potentialBuffers"></td>' +
			'<td align="right" style="color:brown;">Search allies/enemies:' +
			FSH.Layout.helpLink('Search Allies/Enemies',
				'The checkbox enables searching your own personal ' +
				'allies/enemies list for buffs.<br><br>' +
				'Additional profiles to search can be added in the text ' +
				'field to the right, separated by commas.') + '</td>' +
			'<td align="left"><input id="alliesEnemies" type="checkbox" checked>' +
			'<input style="width:118px;" class="custominput" id="extraProfile" ' +
			'type="text" title="Extra profiles to search" value="' +
			(extraProfile ? extraProfile : '') + '"></td></tr>' +
			'<tr><td align="right" style="color:brown;"># Players processed:' +
			'&nbsp;</td><td align="left" id="buffersProcessed">0</td>' +
			'<td align="right" style="color:brown;">Search online list:</td>' +
			'<td align="left"><select style="width:140px;" id="onlinePlayers">' +
				'<option value="0">Disabled</option>' +
				'<option value="49">Short (fastest)</option>' +
				'<option value="47">Medium (medium)</option>' +
				'<option value="45">Long (slowest)</option>' +
			'</select></td></tr>' +
			'<tr><td align="right" style="color:brown;">Find Other progress:' +
			'&nbsp;</td><td align="left" width="310" id="bufferProgress">Idle</td>' +
			'<td align="center"><input id="clearresultsbutton" class=' +
			'"custombutton" type="button" value="Clear Results"></td>' +
			'<td align="center"><input id="findbuffsbutton" class=' +
			'"custombutton" type="button" value="Find Buffers"></td></tr>' +
			'</tbody></table><br>' +
			'<h1>Potential Players and Bio Info</h1><br>' +
			'<table width="620" cellspacing="0" cellpadding="3" border="1" ' +
			'align="center" id="buffTable"><tbody>' +
			'<tr><th width="120">&nbsp;Name</th><th width="200">&nbsp;Player ' +
			'Info</th><th>&nbsp;Notable Bio Text</th></tr>' +
			'</tbody></table><br>' +
			'<div class=content style="font-size:xx-small; color:brown; ' +
			'margin-left:28px; margin-right:28px;">Disclaimer: This ' +
			'functionality does a simple text search for the terms above. ' +
			'It is not as smart as you are, so please do not judge the results ' +
			'too harshly. It does not search all online players, just a subset ' +
			'of those that have been on recently. ' +
			'The aim is to be fast and still return a good set of results. This ' +
			'feature is a work in progress, so it may be tweaked and enhanced ' +
			'over time.</div>';
		content.innerHTML = injectionText;
		document.getElementById('findbuffsbutton')
			.addEventListener('click', FSH.findBuffs.findOtherStart, true);
		document.getElementById('clearresultsbutton')
			.addEventListener('click', FSH.findBuffs.findBuffsClearResults, true);
	},

	findOtherStart: function() { // Legacy
		var textToSearchFor = $('#textToSearchFor').val();
		//use existing array structure to save search text ...
		var textArray=textToSearchFor.split(',');
		var tempArray = [];
		for (var i=0;i<textArray.length;i += 1) {
			tempArray.push(textArray[i].trim());
		}
		textToSearchFor = tempArray.join(',');
		FSH.Helper.findBuffNicks = textToSearchFor;
		FSH.Helper.findBuffMinCastLevel = 1;

		document.getElementById('buffNicks').innerHTML = FSH.Helper.findBuffNicks;
		var bufferProgress = document.getElementById('bufferProgress');
		bufferProgress.innerHTML = 'Gathering list of profiles to search ...';
		bufferProgress.style.color = 'green';
		FSH.Helper.findBuffsLevel175Only =
			document.getElementById('level175').checked;
		document.getElementById('buffersProcessed').innerHTML = 0;
		FSH.Helper.onlinePlayers = [];
		FSH.System.setValue('textToSearchFor', textToSearchFor);
		FSH.Helper.extraProfile = document.getElementById('extraProfile').value;
		FSH.System.setValue('extraProfile', FSH.Helper.extraProfile);
		//get list of players to search, starting with guild>manage page
		FSH.System.xmlhttp('index.php?cmd=guild&subcmd=manage',
			FSH.findBuffs.findBuffsParseGuildManagePage);
	},

};

FSH.monstorLog = { // Native - Bad

	injectMonsterLog: function() { // Native
		var entityLog = FSH.System.getValueJSON('monsterLog');
		var i;
		if (entityLog) {
			FSH.Helper.entityLogTable = {entity:[]};
			for (var name in entityLog) {
				if (!entityLog.hasOwnProperty(name)) { continue; }
				var newEntity = {};
				newEntity.name = name;
				newEntity.key1 = entityLog[name].min.key1;
				for (i = 2; i < 4; i += 1) {
					newEntity['key' + i] = entityLog[name].min['key' + i];
				}
				for (i = 4; i < 10; i += 1) {
					newEntity['key' + i] = FSH.System.addCommas(
						entityLog[name].min['key' + i]) + ' - ' +
						FSH.System.addCommas(entityLog[name].max['key' + i]);
				}
				for (i = 10; i < 11; i += 1) {
					if (entityLog[name].min['key' + i]) {
						newEntity['key' + i] = '';
						for (var j = 0; j < entityLog[name].min['key' + i].length; j += 1) {
							newEntity['key' + i] += '<nobr>' + entityLog[name]
								.min['key' + i][j].name + ' ' +
								entityLog[name].min['key' + i][j].value + ' - ' +
								entityLog[name].max['key' + i][j].value + '<nobr>' +
								(j !== entityLog[name].min['key' + i].length - 1 ? '<br/>' :
								'');
						}
					}
				}
				FSH.Helper.entityLogTable.entity.push(newEntity);
			}
			FSH.Helper.sortBy = 'key3';
			FSH.Helper.sortAsc = true;
			FSH.Helper.entityLogTable.entity.sort(FSH.System.numberSort);
		}
		var content=FSH.Layout.notebookContent();
		content.innerHTML = '<span id=FSH.Helper.entityTableOutput>No monster ' +
			'information! Please enable entity log and travel a bit to see the ' +
			'world</span>';
		FSH.monstorLog.generateEntityTable();
	},

	generateEntityTable: function() { // Native - Bad
		var content = document.getElementById('FSH.Helper.entityTableOutput');
		if (!FSH.Helper.entityLogTable || !content) {return;}
		var i;
		var entityInformationValue;
		var cell;

		var result = '<table cellspacing="0" cellpadding="0" border="0" ' +
			'width="100%"><tr style="background-color:#110011; color:white;">'+
			'<td width="90%" nobr align=center><b>&nbsp;Entity Information</b></td>'+
			'<td width="10%" nobr>[<span id="FSH.Helper.clearEntityLog">' +
			'Clear</span>]</td>'+
			'</tr>' +
			'</table>'+
			'<table id="Helper:EntityInfo" cellspacing="1" cellpadding="2" ' +
			'border="0" style="font-size:small;"><tr ' +
			'style="background-color:#e2b960;">' +
			'<th width="25%" align="left" sortkey="name" colspan="2">Entity</th>' +
			'<th align="center" sortkey="key2">Class</th>' +
			'<th align="center" sortkey="key3" sorttype="number">Lvl</th>' +
			'<th align="center">Attack</th>' +
			'<th align="center">Defence</th>' +
			'<th align="center">Armor</th>' +
			'<th align="center">Damage</th>' +
			'<th align="center">HP</th>' +
			//'<th align="center">Gold</th>' +
			'<th align="center">Enhancements</th>' +
			'</tr>';
		for (var k=0;k<FSH.Helper.entityLogTable.entity.length;k += 1) {
			result += '<tr class="HelperMonsterLogRow' + (1 + k % 2) +
				'"><td align="center"><img width=40 height=40 ' +
				'data-tipped="' + FSH.Helper.entityLogTable.entity[k].key1 + '" ' +
				'src="' + FSH.Helper.entityLogTable.entity[k].key1 + '"/></td>' +
				'<td align="left">' + FSH.Helper.entityLogTable.entity[k].name +
				'</td>';
			for (i = 2; i < 4; i += 1) {
				result += '<td align="center">' +
					FSH.System.addCommas(FSH.Helper.entityLogTable.entity[k]['key' + i]) +
					'</td>';
			}
			for (i = 4; i < 9; i += 1) {// 10 is gold, we don't need to show this
				result += '<td align="center">' +
					FSH.Helper.entityLogTable.entity[k]['key'+i] + '</td>';
			}
			for (i = 10; i < 11; i += 1) {
				entityInformationValue = FSH.Helper.entityLogTable.entity[k]['key' + i];
				if (!entityInformationValue) {
					result += '<td align="center" style="font-size:small; ' +
						'color:gray;">**Missing**</td>';
				} else {
					result += '<td align="center" style="font-size:xx-small;">' +
						entityInformationValue + '</td>';
				}
			}
		}
		result += '</table>';
		content.innerHTML = result;
		document.getElementById('FSH.Helper.clearEntityLog')
			.addEventListener('click', FSH.monstorLog.clearEntityLog, true);

		var theTable=document.getElementById('Helper:EntityInfo');
		for (i=0; i<theTable.rows[0].cells.length; i += 1) {
			cell=theTable.rows[0].cells[i];
			if (cell.getAttribute('sortkey')) {
				cell.style.textDecoration='underline';
				cell.style.cursor='pointer';
				cell.addEventListener('click', FSH.monstorLog.sortEntityLogTable, true);
			}
		}
	},

	clearEntityLog: function() { // Native
		FSH.System.setValue('monsterLog', '');
		location.href = 'index.php?cmd=notepad&blank=1&subcmd=monsterlog';
	},

	sortEntityLogTable: function(evt) { // Native
		var headerClicked = evt.target.getAttribute('sortKey');
		var sortType = evt.target.getAttribute('sortType');
		if (!sortType) {sortType='string';}
		if (FSH.Helper.sortAsc === undefined) {FSH.Helper.sortAsc = true;}
		if (FSH.Helper.sortBy && FSH.Helper.sortBy === headerClicked) {
			FSH.Helper.sortAsc = !FSH.Helper.sortAsc;
		}

		FSH.Helper.sortBy = headerClicked;

		switch(sortType) {
			case 'string':
				FSH.Helper.entityLogTable.entity.sort(FSH.System.stringSort);
				break;
			case 'number':
				FSH.Helper.entityLogTable.entity.sort(FSH.System.numberSort);
				break;
			default:
				break;
		}
		FSH.monstorLog.generateEntityTable();
	},

	pushMonsterInfo: function(monster) { // Native
		// name, img, cls, lvl, atk, def, arm, dmg, hp, gold
		var i;
		var name = monster.key0;
		var monsterLog = FSH.System.getValueJSON('monsterLog');
		if (!monsterLog) {monsterLog = {};}
		if (!monsterLog[name]) {
			monsterLog[name] = {'min':{}, 'max':{}};
			for (i = 1; i < 10; i += 1) {
				monsterLog[name].min['key' + i] = 1e+100;
				monsterLog[name].max['key' + i] = 0;
			}
			//monsterLog[name]['min'] = {'cls':1e+100, 'lvl':1e+100, 'atk':1e+100, 'def':1e+100, 'arm':1e+100, 'dmg':1e+100, 'hp':1e+100, 'gold':1e+100};
			//monsterLog[name]['max'] = {'cls':0, 'lvl':0, 'atk':0, 'def':0, 'arm':0, 'dmg':0, 'hp':0, 'gold':0};
			for (i = 10; i < 11; i += 1) {// enchantments
				if (monster['key' + i]) { //does this critter have enchantments, if so, then see min and max with the initial list
					monsterLog[name].min['key' + i] = monster['key' + i];
					monsterLog[name].max['key' + i] = monster['key' + i];
				}
			}
		}
		for (i = 1; i < 4; i += 1) {
			monsterLog[name].min['key' + i] = monster['key' + i];
		}
		for (i = 4; i < 10; i += 1) {
			var value = FSH.System.intValue(monster['key' + i]);
			monsterLog[name].min['key' + i] =
				monsterLog[name].min['key' + i] < value ?
				monsterLog[name].min['key' + i] : value;
			monsterLog[name].max['key' + i] =
				monsterLog[name].max['key' + i] > value ?
				monsterLog[name].max['key' + i] : value;
		}
		for (i = 10; i < 11; i += 1) {// enchantments
			if (monster['key' + i]) { //does this critter have enchantments
				if (!monsterLog[name].min['key' + i] ||
					!monsterLog[name].min['key' + i]) {
					monsterLog[name].min['key' + i] = monster['key' + i];
					monsterLog[name].max['key' + i] = monster['key' + i];
				}
				for (var j = 0; j < monster['key' + i].length; j += 1) {
					//~ var enchantName = monster['key' + i][j].name;
					var enchantValue = monster['key' + i][j].value * 1;
					monsterLog[name].min['key' + i][j].value =
						monsterLog[name].min['key' + i][j].value * 1 < enchantValue ?
						monsterLog[name].min['key' + i][j].value : enchantValue;
					monsterLog[name].max['key' + i][j].value =
						monsterLog[name].max['key' + i][j].value * 1 > enchantValue ?
						monsterLog[name].max['key' + i][j].value : enchantValue;
				}
			}
		}
		FSH.System.setValueJSON('monsterLog', monsterLog);
	},

};

FSH.oldInvMan = { // Hybrid - Bad

	injectInventoryManager: function() { // Hybrid
		var content = FSH.Layout.notebookContent();
		content.innerHTML = '<img src = "' + FSH.System.imageServer +
			'/world/actionLoadingSpinner.gif">&nbsp;Getting inventory data...';
		if (FSH.subcmd === 'invmanager') {
			$.getJSON('?cmd=export&subcmd=inventory', FSH.oldInvMan.gotInvMan);
		} else if (FSH.subcmd === 'guildinvmanager') {
			$.getJSON('?cmd=export&subcmd=guild_store&inc_tagged=1',
				FSH.oldInvMan.gotGuildInvMan);
		}
	},

	gotInvMan: function(data) { // Native
		FSH.Helper.inventory = data;
		FSH.Helper.inventory.folders['-1']='Main';
		FSH.oldInvMan.inventoryManagerHeaders('self', FSH.Helper.inventory,
			'Helper:InventoryManagerOutput');
	},

	gotGuildInvMan: function(data) { // jQuery
		FSH.Helper.guildinventory = data;
		$.getJSON('?cmd=export&subcmd=guild_members&guild_id=' +
			FSH.Helper.guildinventory.guild_id, FSH.oldInvMan.gotGuildMembers);
	},

	gotGuildMembers: function(data) { // Native - Bad
		var buildJSON = '{';
		for (var x in data) {
			if (!data.hasOwnProperty(x)) { continue; }
			buildJSON += '"' + data[x].id + '":"' + data[x].username + '",';
		}
		buildJSON = buildJSON.substring(0, buildJSON.length - 1) + '}';
		FSH.Helper.guildinventory.members = JSON.parse(buildJSON);
		FSH.oldInvMan.inventoryManagerHeaders('guild', FSH.Helper.guildinventory,
			'Helper:GuildInventoryManagerOutput');
	},

	inventoryManagerHeaders: function(reportType, targetInventory, targetID) { // Hybrid - Bad
		var content = FSH.Layout.notebookContent();
		FSH.oldInvMan.setItemFilterDefault();
		var minLvl = FSH.System.getValue('inventoryMinLvl');
		var maxLvl = FSH.System.getValue('inventoryMaxLvl');
		var reportTitle;
		if (reportType === 'self') {
			reportTitle='<td width="90%" nobr><b>&nbsp;Inventory Manager</b> ' +
				targetInventory.items.length +
				' items (green = worn, blue = backpack)</td>';
		} else {
			reportTitle = '<td width="90%" nobr><b>&nbsp;Guild Inventory Manager' +
				'</b> ' + targetInventory.items.length +
				' items (maroon = in BP, blue=guild store)</td>';
		}
		var newhtml = '<table cellspacing="0" cellpadding="0" border="0" ' +
			'width="100%"><tr style="background-color:#cd9e4b">' +
			reportTitle + '<tr><td colspan=2>' +
			'<table><tr><td><b>Show Items:</b></td>' +
			'<td><table><tr><td>' +
			'<div align=right><form id=Helper:inventoryFilterForm subject=' +
			'"inventory" href="index.php?cmd=notepad&blank=1&subcmd=invmanager' +
			'" onSubmit="javascript:return false;">' +
			'Min lvl:<input value="' + minLvl +
			'" size=5 name="FSH.Helper.inventoryMinLvl" ' +
			'id="FSH.Helper.inventoryMinLvl" style=custominput/> ' +
			'Max lvl:<input value="' + maxLvl +
			'" size=5 name="FSH.Helper.inventoryMaxLvl" ' +
			'id="FSH.Helper.inventoryMaxLvl" style=custominput/> ' +
			'<input id="Helper:inventoryFilter" subject="inventory" ' +
			'href="index.php?cmd=notepad&blank=1&subcmd=invmanager" ' +
			'class="custombutton" type="submit" value="Filter"/><input ' +
			'id="reportType" type="hidden" value="' + reportType + '" />' +
			'<input id="Helper:inventoryFilterReset" subject="inventory" ' +
			'href="index.php?cmd=notepad&blank=1&subcmd=invmanager" ' +
			'class="custombutton" type="button" value="Reset"/></form></div>';
		for (var i = 0; i < FSH.Helper.itemFilters.length; i += 1) {
			newhtml += (i % 5 === 0 ? '</td></tr><tr><td>' : '') +
				'&nbsp;' + FSH.Helper.itemFilters[i].type +
				':<input id="' + FSH.Helper.itemFilters[i].id +
				'" type="checkbox" linkto="' + FSH.Helper.itemFilters[i].id + '"' +
				(FSH.System.getValue(FSH.Helper.itemFilters[i].id) ? ' checked' : '') +
				'/>';
		}
		newhtml+=' Sets Only: <input id="Helper:SetFilter" type="checkbox" />' +
			'</td></tr><tr><td>&nbsp;<span id=SelectAllFilters>[Select All]</span>' +
			'&nbsp;<span id=SelectNoFilters>[Select None]</span>' +
			'</td></tr></table></td></tr></table>' +
			'<div style="font-size:small;" id="' + targetID + '">' +
			'</div>';
		content.innerHTML=newhtml;

		document.getElementById('Helper:SetFilter')
			.addEventListener('click', FSH.oldInvMan.generateInventoryTable, true);

		FSH.oldInvMan.generateInventoryTable();

		document.getElementById('Helper:inventoryFilterReset')
			.addEventListener('click', function() {
				FSH.System.setValue('inventoryMinLvl',
					FSH.Data.defaults.inventoryMinLvl);
				FSH.System.setValue('inventoryMaxLvl',
					FSH.Data.defaults.inventoryMaxLvl);
				$('input[id="FSH.Helper.inventoryMinLvl"]')
					.attr('value', FSH.Data.defaults.inventoryMinLvl);
				$('input[id="FSH.Helper.inventoryMaxLvl"]')
					.attr('value', FSH.Data.defaults.inventoryMaxLvl);
				FSH.oldInvMan.generateInventoryTable();
			}, true);
		document.getElementById('Helper:inventoryFilterForm')
			.addEventListener('submit', function() {
				FSH.System.setValue('inventoryMinLvl',
					$('input[id="FSH.Helper.inventoryMinLvl"]').attr('value'));
				FSH.System.setValue('inventoryMaxLvl',
					$('input[id="FSH.Helper.inventoryMaxLvl"]').attr('value'));

				FSH.oldInvMan.generateInventoryTable();

			}, true);

		for (i=0; i<FSH.Helper.itemFilters.length; i += 1) {
			document.getElementById(FSH.Helper.itemFilters[i].id)
				.addEventListener('click',
					FSH.oldInvMan.toggleCheckboxAndRefresh, true);
		}
		document.getElementById('SelectAllFilters')
			.addEventListener('click', FSH.oldInvMan.InventorySelectFilters, true);
		document.getElementById('SelectNoFilters')
			.addEventListener('click', FSH.oldInvMan.InventorySelectFilters, true);
	},

	setItemFilterDefault: function() { // Native - Bad
// TODO Move this
		FSH.Helper.itemFilters = [
			{'id':'showHelmetTypeItems', 'type':'Helmet'},
			{'id':'showAmorTypeItems', 'type':'Armor'},
			{'id':'showGloveTypeItems', 'type':'Gloves'},
			{'id':'showBootTypeItems', 'type':'Boots'},
			{'id':'showWeaponTypeItems', 'type':'Weapon'},
			{'id':'showShieldTypeItems', 'type':'Shield'},
			{'id':'showRingTypeItems', 'type':'Ring'},
			{'id':'showAmuletTypeItems', 'type':'Amulet'},
			{'id':'showRuneTypeItems', 'type':'Rune'}
		];
	},

	generateInventoryTable: function() { // Hybrid - Bad
		var targetId;
		var targetInventory;
		var inventoryShell;

		var reportType = $('input[id="reportType"]').attr('value');
		if (reportType === 'guild') {
			targetId = 'Helper:GuildInventoryManagerOutput';
			targetInventory = FSH.Helper.guildinventory;
			inventoryShell = 'guildinventory';
		} else {
			targetId = 'Helper:InventoryManagerOutput';
			targetInventory = FSH.Helper.inventory;
			inventoryShell = 'inventory';
		}
		if (!targetInventory) {return;}

		var result = FSH.oldInvMan.inventoryTableHeader(reportType);

		FSH.Helper.disableItemColoring = FSH.System.getValue('disableItemColoring');

		var allItems = targetInventory.items;
		var minLvl = parseInt($('input[id="FSH.Helper.inventoryMinLvl"]')
			.attr('value'), 10);
		var maxLvl = parseInt($('input[id="FSH.Helper.inventoryMaxLvl"]')
			.attr('value'), 10);
		var setsOnly = $('input[id="Helper:SetFilter"]').is(':checked');
		for (var i = 0; i < allItems.length;i += 1) {
			var item = allItems[i];

			//continue; if item is filtered.
			if (item.type > 8 ||
				!$('input[id="' + FSH.Helper.itemFilters[item.type].id + '"]')
					.is(':checked') ||
				minLvl > item.stats.min_level ||
				maxLvl < item.stats.min_level || 
				setsOnly && !item.stats.set_name) {continue;}

			if (item.equipped) {item.folder_id = 99999999; } //for sorting purposes.
			item.player_name = '';
			var color;
			var whereTitle = '';
			var whereText = '';
			var p = 0;
			var t = 0;
			if (reportType === 'guild') {
				if (item.player_id === -1) { //guild store
					item.player_name = 'GS';
					color = 'navy';
					whereText = 'GS';
					whereTitle = 'Guild Store';
					p = targetInventory.guild_id;
					t = 4;
				} else {
					item.player_name = targetInventory.members[item.player_id];
					color = 'maroon';
					whereText = item.player_name;
					whereTitle='Guild Report';
					p = item.player_id;
					t = 1;
				}
				p = p + '&currentPlayerId=' + targetInventory.current_player_id;
			} else {
				if (item.equipped) {
					color = 'green';
					whereText = 'Worn';
					whereTitle = 'Wearing it';
				} else {
					color = 'blue';
					whereText = FSH.Helper.inventory.folders[item.folder_id];
					whereTitle = 'In Backpack';
				}
				p = targetInventory.player_id;
				t = 1;
			}

			item.rarityColor = FSH.Helper.disableItemColoring ? '' : ' color:' +
				FSH.Data.rarity[item.rarity].colour;

			item.displayName = item.item_name;
			if (item.equipped) {
				item.displayName = '<b>' + item.displayName + '</b>';
			}
			result += '<tr style="color:' + color + '"><td></td><td><a ' +
				'style="cursor:help;' + item.rarityColor + '" id="Helper:item' +
				i + '" arrayID="' + i + '" class="tip-dynamic" data-tipped="' +
				'fetchitem.php?item_id=' + item.item_id + '&inv_id=' +
				item.inv_id + '&t=' + t + '&p=' + p + '">' + item.displayName +
				'</a>';

			var itemRE = new RegExp('amulet|armor|armored|axe|boots|fist|' +
				'gauntlets|gloves|hammer|helm|helmet|mace|necklace|of|plate|' +
				'ring|rune|shield|sword|the|weapon', 'gi');

			if (item.stats.set_name && reportType === 'guild') {
				result += ' (<a href="/index.php?cmd=guild&subcmd=inventory&' +
					'subcmd2=report&set=' +
					item.item_name.replace(itemRE,'').trim().replace(/  /g,' ')
						.replace(/  /g,' ').replace(/ /g,'|') + '">set</a>)';
			}

			item.craftColor = FSH.Data.craft[item.craft] ?
				FSH.Data.craft[item.craft].colour : '';

			if (item.durability) {
				item.durabilityPer = Math.floor(100 * item.durability /
					item.max_durability);
				item.durabilityColor = item.durabilityPer < 20 ? 'red' : 'gray';
			}

			result += '</td>' +
				'<td align="right">' + item.stats.min_level + '</td>' +
				'<td align="left" title="' + whereTitle + '">' + whereText +
					'</td>' +
				'<td align="left">' + FSH.Data.itemType[item.type] + '</td>' +
				'<td align="right">' + item.stats.attack + '</td>' +
				'<td align="right">' + item.stats.defense + '</td>' +
				'<td align="right">' + item.stats.armor + '</td>' +
				'<td align="right">' + item.stats.damage + '</td>' +
				'<td align="right">' + item.stats.hp + '</td>' +
				'<td align="right">' + item.forge + '</td>' +
				'<td>' + (item.forge > 0 ? '<img src="' + FSH.System.imageServer +
					'/hellforge/forgelevel.gif">':'') + '</td>' +
				'<td align="left">' + '<span style="color:' + item.craftColor +
					';">' + item.craft + '</span>' + '</td>' +
				'<td align="right">' + '<span style="color:' +
					item.durabilityColor + ';">' + item.durabilityPer +
					'</span></td>' +
				'<td></td></tr>';
		}

		result += '</table><input type="hidden" id="xcnum" value="' +
			window.ajaxXC + '" />';

		var output = document.getElementById(targetId);
		output.innerHTML = result;

		var inventoryTable = document.getElementById('Helper:InventoryTable');
		for (i = 0; i < inventoryTable.rows[0].cells.length; i += 1) {
			var cell = inventoryTable.rows[0].cells[i];
			cell.style.textDecoration = 'underline';
			cell.style.cursor = 'pointer';
			cell.addEventListener('click', FSH.oldInvMan.sortInventoryTable, true);
		}

		$('a[id*="Helper:item"]').click(FSH.oldInvMan.inspectInventoryItem);
	},

	toggleCheckboxAndRefresh: function(evt) { // Native
		FSH.System.setValue(evt.target.id, evt.target.checked);
		//~ setTimeout(function() {
			FSH.oldInvMan.generateInventoryTable();
		//~ });
	},

	InventorySelectFilters: function(evt) { // Native
		FSH.oldInvMan.setItemFilterDefault();
		var checkedValue = evt.target.id === 'SelectAllFilters';
		for (var i = 0; i < FSH.Helper.itemFilters.length; i += 1) {
			FSH.System.setValue(FSH.Helper.itemFilters[i].id, checkedValue);
		}
		for (i = 0; i < FSH.Helper.itemFilters.length; i += 1) {
			document.getElementById(FSH.Helper.itemFilters[i].id).checked =
				checkedValue;
		}
		//~ setTimeout(function() {
			FSH.oldInvMan.generateInventoryTable();
		//~ });
	},

	inventoryTableHeader: function(reportType) { // Native - Bad
		return '<table id="Helper:InventoryTable"><tr>' +
			'<th width="180" align="left" sortkey="item_name" sortType=' +
				'"string" colspan="2">Name</th>' +
			'<th sortkey="stats.min_level" sortType="number">Level</th>' +
			'<th align="left" sortkey="' +
			(reportType === 'guild' ?
			'player_name" sortType="string' :
			'folder_id" sortType="number') +
			'">Where</th>' +
			'<th align="left" sortkey="type" sortType="number">Type</th>' +
			'<th sortkey="stats.attack" sortType="number">Att</th>' +
			'<th sortkey="stats.defense" sortType="number">Def</th>' +
			'<th sortkey="stats.armor" sortType="number">Arm</th>' +
			'<th sortkey="stats.damage" sortType="number">Dam</th>' +
			'<th sortkey="stats.hp" sortType="number">HP</th>' +
			'<th colspan="2" sortkey="forge" sortType="number">Forge</th>' +
			'<th align="left" sortkey="craft" sortType="string">Craft</th>' +
			'<th align="right" sortkey="durabilityPer" sortType="number">' +
				'Dur%</th>' +
			//dropLink +
			'<th width="10"></th>';
	},

	sortInventoryTable: function(evt) { // Hybrid
		var targetInventory;
		var reportType = $('input[id="reportType"]').attr('value');
		if (reportType === 'guild') {
			targetInventory = FSH.Helper.guildinventory;
		} else {
			targetInventory = FSH.Helper.inventory;
		}
		var headerClicked = evt.target.getAttribute('sortKey');
		var sortType = evt.target.getAttribute('sortType');
		if (FSH.Helper.sortAsc === undefined) {FSH.Helper.sortAsc = true;}
		if (FSH.Helper.sortBy && FSH.Helper.sortBy === headerClicked) {
			FSH.Helper.sortAsc = !FSH.Helper.sortAsc;
		}
		FSH.Helper.sortBy = 'item_name';
		targetInventory.items.sort(FSH.System.stringSort);

		FSH.Helper.sortBy = headerClicked;

		if (sortType === 'number') {
			targetInventory.items.sort(FSH.System.numberSort);
		} else {
			targetInventory.items.sort(FSH.System.stringSort);
		}
		FSH.oldInvMan.generateInventoryTable();
	},

	inspectInventoryItem: function() { // Hybrid - Bad
		var reportType = $('input[id="reportType"]').attr('value');
		var i = $(this).attr('arrayID');
		var html = '';
		var t = 1;
		var p = 0;
		var targetInventory;
		//http://www.fallensword.com/index.php?cmd=guild&subcmd=inventory&subcmd2=takeitem&guildstore_id=24096093&ajax=1
		if (reportType === 'guild') {
			targetInventory = FSH.Helper.guildinventory;
			html += '<span id="Helper:Recall">';
			if (targetInventory.items[i].player_id === -1) {
				p = targetInventory.guild_id;
				t = 4;
				html += '&nbsp;<span id="Helper:RecallToBP" style="cursor:pointer; ' +
					'text-decoration:underline; color:blue;" href="' +
					FSH.System.server + 'index.php?cmd=guild&subcmd=inventory' +
					'&subcmd2=takeitem&guildstore_id=' +
					// targetInventory.items[i].inv_id + '&ajax=1">Fast BP</span><br />'; // FIXME
					targetInventory.items[i].inv_id + '">Fast BP</span><br />'; // FIXME
			} else {
				p = targetInventory.items[i].player_id;
				t = 1;
				html += '&nbsp;<span id="Helper:RecallToBP" style="cursor:pointer; ' +
					'text-decoration:underline; color:blue;" href="' +
					FSH.System.server + 'index.php?cmd=guild&subcmd=inventory' +
					'&subcmd2=recall&id=' + targetInventory.items[i].inv_id +
					'&player_id=' + p + '&mode=0">Fast BP</span> |' +
					'&nbsp;<span id="Helper:RecallToStore" style="cursor:pointer; ' +
					'text-decoration:underline; color:blue;" href="' +
					FSH.System.server + 'index.php?cmd=guild&subcmd=inventory&' +
					'subcmd2=recall&id=' + targetInventory.items[i].inv_id +
					'&player_id=' + p + '&mode=1">Fast GS</span><br />';
				if (targetInventory.items[i].equipped){
					html += '<span id="Helper:isEquiped">This item is being worn!' +
						'</span><br />';
				}
				html += '<span id="Helper:IsWornBy">Is being held by: ' +
					targetInventory.items[i].player_name + '</span><br />';
			}
			html += '</span><br />';
			p = p + '&currentPlayerId=' + targetInventory.current_player_id;
		} else {
			targetInventory = FSH.Helper.inventory;
			//'INSTANTLY DROP '+targetInventory.items[i].item_name+'. NO REFUNDS OR DO-OVERS! Use at own risk.'
			html += '<span id="Helper:FolderMove"><select id="Helper:ToFolder">' +
				'<option value="0">Move to folder</option>';
			for (var key in targetInventory.folders) {
				if (!targetInventory.folders.hasOwnProperty(key)) {continue;}
				html += '<option value="' + key + '">' +
					targetInventory.folders[key] + '</option>';
			}
			html += '</select><input id="Helper:InitiateMove" type="submit" ' +
				'class="custombutton" value="Move!" invid="' +
				targetInventory.items[i].inv_id + '" ></span><br />' +
				'<span id="Helper:Drop"><input id="Helper:DropItem" ' +
				'class="custombutton" type="submit" invid="' +
				targetInventory.items[i].inv_id + '"  itemName="' +
				targetInventory.items[i].item_name +
				'" value="Drop Item!" /></span><br />' +
				'<span id="Helper:Send" >send to <input type="text" ' +
				'id="Helper:sendTo" size=5 /><input id="Helper:SendSubmit" ' +
				'class="custombutton" type="submit" invid="' +
				targetInventory.items[i].inv_id + '" value="Send!"/></span><br />' +
				'<span id="Helper:Wear"><input class="custombutton" type="submit" ' +
				'id="Helper:equipProfileInventoryItem" ' +
				'itemID="' + targetInventory.items[i].inv_id +
				'" value="Put it on!"></span> <br />' +
				'<span id="Helper:Sell"><a href="http://www.fallensword.com/' +
				'index.php?cmd=auctionhouse&subcmd=create2&inv_id=' +
				targetInventory.items[i].inv_id + '">Post to AH</a></span><br />';
			t = 1;
			p = targetInventory.player_id;
		}
		//http://www.fallensword.com/index.php?cmd=auctionhouse&type=-1&search_text=Bahmou%20Mask
		html += '<span id="Helper:SearchAH"><a href="http://www.fallensword.com' +
			'/index.php?cmd=auctionhouse&type=-1&search_text=' +
			encodeURI(targetInventory.items[i].item_name) +
			'">Search AH</a></span><br /><br />';
		if (targetInventory.items[i].stats.set_name) {
			html += 'Set Name: ' + targetInventory.items[i].stats.set_name +
				'<br />';
		}
		html += '<img src="' + FSH.System.imageServer + '/items/' +
			targetInventory.items[i].item_id + '.gif" class="tip-dynamic" ' +
			'data-tipped="fetchitem.php?item_id=' +
			targetInventory.items[i].item_id + '&inv_id=' +
			targetInventory.items[i].inv_id + '&t=' + t + '&p=' + p + '" border=0>';
		var $dialog = $('<div></div>')
			.html(html)
			.dialog({
				title: targetInventory.items[i].item_name,
				resizable: false,
				height:350,
				width:300,
				modal: true,
				buttons: {'Close' : function() {$dialog.dialog( 'close' );}}
			});
		if (reportType === 'self') {
			document.getElementById('Helper:equipProfileInventoryItem')
				.addEventListener('click', FSH.common.equipProfileInventoryItem, true);
		}
		$('input[id="Helper:DropItem"]').click(function() {
			var answer = confirm('Are you sure you want to drop ' +
				$(this).attr('itemName') + '?');
			if (answer) {
				var itemInvId = $(this).attr('invid');
				var dropHref = FSH.System.server +
					'index.php?cmd=profile&subcmd=dodropitems&removeIndex[]=' + itemInvId;
				$.ajax({
					url: dropHref,
					success: function(data) {
						var info = FSH.Layout.infoBox(data);
						var drop = $('span[id="Helper:Drop"]');
						if (info === 'Items dropped and destroyed.') {
							drop.html('Item Dropped!');
							drop.css('color','green');
							drop.css('fontWeight','bold');
							drop.css('fontSize','small');
						} else if (info !== '') {
							drop.css('color','red');
							drop.css('fontWeight','bold');
							drop.css('fontSize','small');
							drop.html('Error: ' + info);
						} else {
							drop.css('color','red');
							drop.css('fontSize','small');
							drop.html('Weird Error: check the Tools>Error Console');
							console.log('Post the previous HTML and the following message to the GitHub or to the forum to help us debug this error');
							console.log(data);
						}
					}
				});
			}
		});
		$('input[id="Helper:SendSubmit"]').click(function() {
			var itemInvId = $(this).attr('invid');
			var xcNum = $('input[id="xcnum"]').attr('value');
			var itemRecipient = $('input[id="Helper:sendTo"]').val();
			var sendItemHref = FSH.System.server +
				'index.php?cmd=trade&subcmd=senditems&xc=' + xcNum +
				'&target_username=' + itemRecipient + '&sendItemList[]=' + itemInvId;
			$.ajax({
				url: sendItemHref,
				success: function(data) {
					var info = FSH.Layout.infoBox(data);
					var send=$('span[id="Helper:Send"]');
					if (info === 'Items sent successfully!') {
						send.html('Item sent to ' + itemRecipient + '!');
						send.css('color','green');
						send.css('fontWeight','bold');
						send.css('fontSize','small');
					} else if (info !== '') {
						send.css('color','red');
						send.css('fontWeight','bold');
						send.css('fontSize','small');
						send.html('Error: ' + info);
					} else {
						send.css('color','red');
						send.css('fontSize','small');
						send.html('Weird Error: check the Tools>Error Console');
						console.log('Post the previous HTML and the following message to the GitHub or to the forum to help us debug this error');
						console.log(data);
					}
				}
			});

		});
		$('span[id*="Helper:RecallTo"]').click(function() {
			var href = $(this).attr('href');
			var id = $(this).attr('id');
			$.ajax({
				url: href,
				success: function(data) {
					var info = FSH.Layout.infoBox(data);
					var recall = $('span[id="' + id + '"]');
					//~ if (data.slice(0, 1) === '{') {
						//~ recall.html('Recalled!');
						//~ recall.css('color','green');
						//~ recall.css('fontWeight','bold');
						//~ recall.css('fontSize','small');
						//~ return;
					//~ } // FIXME needs feedback
					if (info === 'You successfully recalled the item.' ||
						info === 'You successfully took the item into your backpack.') {
						recall.html('Recalled!');
						recall.css('color','green');
						recall.css('fontWeight','bold');
						recall.css('fontSize','small');
					} else if (info!=='') {
						recall.css('color','red');
						recall.css('fontWeight','bold');
						recall.css('fontSize','small');
						recall.html('Error: ' + info);
					} else {
						recall.css('color','red');
						recall.css('fontSize','small');
						recall.html('Weird Error: check the Tools>Error Console');
						console.log('Post the previous HTML and the following message to the GitHub or to the forum to help us debug this error');
						console.log(data);
					}
				}
			});
		});
		$('input[id="Helper:InitiateMove"]').click(function() {
			var itemInvId = $(this).attr('invid');
			var folderID = $('select[id="Helper:ToFolder"]').val();
			var moveHref = FSH.System.server +
				'index.php?cmd=profile&subcmd=sendtofolder&folderItem[]=' + itemInvId +
				'&folder_id=' + folderID;
			$.ajax({
				url: moveHref,
				success: function( data ) {
					var info = FSH.Layout.infoBox(data);
					var move = $('span[id="Helper:FolderMove"]');
					if (info === 'Items moved to folder successfully!') {
						move.html('Item Moved!');
						move.css('color','green');
						move.css('fontWeight','bold');
						move.css('fontSize','small');
					} else if (info !== '') {
						move.css('color','red');
						move.css('fontWeight','bold');
						move.css('fontSize','small');
						move.html('Error: ' + info);
					} else {
						move.css('color','red');
						move.css('fontSize','small');
						move.html('Weird Error: check the Tools>Error Console');
						console.log('Post the previous HTML and the following message to the GitHub or to the forum to help us debug this error');
						console.log(data);
					}
				}
			});
		});
	},

};

FSH.oldRelic = { // Legacy - Old map

	injectRelic: function() { // Hybrid - Old map
		var relicNameElement = $('td:contains("Below is the current status ' +
			'for the relic"):last');
		relicNameElement.css('font-size', 'x-small');

		var injectHere = $('td:contains("Defended"):last');
		if (injectHere.length === 0) {return;}
		var defendingGuildMiniSRC = $('img[src*="_mini.jpg"]').attr('src');
		var defendingGuildID = /guilds\/(\d+)_mini.jpg/
			.exec(defendingGuildMiniSRC)[1];
		if (defendingGuildID === FSH.Layout.guildId().toString()) {
			var listOfDefenders = injectHere.next().text().split(',');
			// quick buff only supports 16
			var shortList = [];
			if (listOfDefenders) {
				var modifierWord;
				for (var i = 0; i < listOfDefenders.length; i += 1) {
					shortList.push(listOfDefenders[i]);
					if ((i + 1) % 16 === 0 && i !== 0 ||
						i === listOfDefenders.length - 1) {
						modifierWord = FSH.Layout.places[Math.floor(i / 16)];
						var htmlToAppend = '<br><nobr><a href="#" id="buffAll' +
							modifierWord + '"><span style="color:blue; font-' +
							'size:x-small;" title="Quick buff functionality ' +
							'from HCS only does 16">Buff ' + modifierWord +
							' 16</span></a></nobr>';
						injectHere.append(htmlToAppend);
						var buffAllLink = $('#buffAll' + modifierWord);
						buffAllLink.attr('href', FSH.Layout.buffAllHref(shortList));
						shortList = [];
					}
				}
			}
		}
		injectHere.append('<input id="calculatedefenderstats" type="button" ' +
			'value="Fetch Stats" title="Calculate the stats of the players ' +
			'defending the relic." class="custombutton">');
		document.getElementById('calculatedefenderstats')
			.addEventListener('click',
				function() {
					FSH.ajax.getMembrList(false)
						.done(FSH.oldRelic.calculateRelicDefenderStats);
				},
				true);
	},

	calculateRelicDefenderStats: function() { // Legacy - Old map
		var validMemberString;
		var membrList = FSH.Helper.membrList;
		//hide the calc button
		$('input[id="calculatedefenderstats"]').css('visibility','hidden');
		//make the text smaller
		$('td:contains("Below is the current status for the relic"):last')
			.css('fontSize','x-small');
		//set the colspan of all other rows to 3
		$('table[width="600"]>tbody>tr:not(:eq(9))>td').attr('colspan',3);

		var tableWithBorderElement = $('table[cellpadding="5"]');
		tableWithBorderElement
			.attr('align','left')
			.attr('colSpan',2);
		var tableInsertPoint = tableWithBorderElement.parents('tr:first');
		tableInsertPoint.append('<td colspan="1"><table width="200" style="' +
			'border:1px solid #A07720;"><tbody><tr><td id="InsertSpot"></td>' +
			'</tr></tbody></table></td>');
		var extraTextInsertPoint = FSH.System.findNode('//td[@id="InsertSpot"]');
		var defendingGuildHref = $('a[href*="index.php?cmd=guild&subcmd=view' +
			'&guild_id="]:first').attr('href');
		FSH.oldRelic.getRelicGuildData(extraTextInsertPoint,defendingGuildHref);

		var defendingGuildMiniSRC = $('img[src*="_mini.jpg"]').attr('src');
		var defendingGuildID = /guilds\/(\d+)_mini.jpg/
			.exec(defendingGuildMiniSRC)[1];
		var myGuildID = FSH.Layout.guildId().toString();

		var hideRelicOffline = FSH.System.getValue('hideRelicOffline');
		if (defendingGuildID === myGuildID && !hideRelicOffline) {
			validMemberString = '';
			Object.keys(membrList).forEach(function(val) {
				var member = membrList[val];
				var lastLogin = 0;
				if (member.last_login) {
					lastLogin = Math.floor(Date.now() / 1000 -
						member.last_login);
				}
				if (lastLogin >= 120 && // two minutes is offline
					lastLogin <= 604800 && // 7 days max
					(member.level < 400 || member.level > 421 &&
					member.level < 441 || member.level > 450)) {
					validMemberString += member.username + ' ';
				}
			});
		}

		var defenders = $('a[href*="cmd=profile&player_id="]',
			'div#pCC table table');
		defenders.each(function(ind) {
			var $this = $(this);
			FSH.oldRelic.getRelicPlayerData(ind, $this.attr('href'), $this.text());
			if (defendingGuildID === myGuildID && !hideRelicOffline) {
				validMemberString = validMemberString.replace(
					$this.text() + ' ','');
			}
		});
		FSH.Helper.relicDefenderCount = defenders.length;

		var textToInsert = '<tr><td><table class="relicT">' +
			'<tr><td colspan="2" class="headr">Defending Guild Stats</td></tr>' +
			'<tr><td class="brn">Number of Defenders:</td>' +
				'<td>' + FSH.Helper.relicDefenderCount + '</td></tr>' +
			'<tr><td class="brn">Relic Count:</td>' +
				'<td title="relicCount">0</td></tr>' +
			'<tr><td class="brn">Lead Defender Bonus:</td>' +
				'<td title="LDPercentage">0</td></tr>' +
			'<tr class="hidden"><td>Relic Count Processed:</td>' +
				'<td title="relicProcessed">0</td></tr>' +
			'<tr class="hidden">' +
				'<td colspan="2" class="headr">Lead Defender Full Stats</td></tr>' +
			'<tr class="hidden"><td>Attack:</td>' +
				'<td title="LDattackValue">0</td></tr>' +
			'<tr class="hidden"><td>Defense:</td>' +
				'<td title="LDdefenseValue">0</td></tr>' +
			'<tr class="hidden"><td>Armor:</td>' +
				'<td title="LDarmorValue">0</td></tr>' +
			'<tr class="hidden"><td>Damage:</td>' +
				'<td title="LDdamageValue">0</td></tr>' +
			'<tr class="hidden"><td>HP:</td>' +
				'<td title="LDhpValue">0</td></tr>' +
			'<tr class="hidden"><td>LDProcessed:</td>' +
				'<td title="LDProcessed">0</td></tr>' +
			'<tr class="hidden"><td>LDFlinchLevel:</td>' +
				'<td title="LDFlinchLevel">0</td></tr>' +
			'<tr class="hidden"><td>LDConstitutionLevel:</td>' +
				'<td title="LDConstitutionLevel">0</td></tr>' +
			'<tr class="hidden"><td>LDNightmareVisageLevel:</td>' +
				'<td title="LDNightmareVisageLevel">0</td></tr>' +
			'<tr class="hidden"><td>LDFortitudeLevel:</td>' +
				'<td title="LDFortitudeLevel">0</td></tr>' +
			'<tr class="hidden"><td>LDChiStrikeLevel:</td>' +
				'<td title="LDChiStrikeLevel">0</td></tr>' +
			'<tr class="hidden"><td>LDTerrorizeLevel:</td>' +
				'<td title="LDTerrorizeLevel">0</td></tr>' +
			'<tr class="hidden"><td>LDSanctuaryLevel:</td>' +
				'<td title="LDSanctuaryLevel">0</td></tr>' +
			'<tr><td colspan="2" class="headr">Other Defender Stats</td></tr>' +
			'<tr><td class="brn">Raw Attack:</td>' +
				'<td class="grey" title="attackValue">0</td></tr>' +
			'<tr><td class="brn">Attack w/ buffs:</td>' +
				'<td title="attackValueBuffed">0</td></tr>' +
			'<tr><td class="brn">Raw Defense:</td>' +
				'<td class="grey" title="defenseValue">0</td></tr>' +
			'<tr><td class="brn">Defense w/buffs:</td>' +
				'<td title="defenseValueBuffed">0</td></tr>' +
			'<tr><td class="brn">Raw Armor:</td>' +
				'<td title="armorValue">0</td></tr>' +
			'<tr><td class="brn">Armor w/ buffs:</td>' +
				'<td title="armorValueBuffed">0</td></tr>' +
			'<tr><td class="brn">Raw Damage:</td>' +
				'<td class="grey" title="damageValue">0</td></tr>' +
			'<tr><td class="brn">Damage w/ buffs:</td>' +
				'<td title="damageValueBuffed">0</td></tr>' +
			'<tr><td class="brn">Raw HP:</td>' +
				'<td class="grey" title="hpValue">0</td></tr>' +
			'<tr><td class="brn">HP w/ buffs:</td>' +
				'<td title="hpValueBuffed">0</td></tr>' +
			'<tr><td class="brn">Processed:</td>' +
				'<td title="defendersProcessed">0</td></tr>' +
			'<tr><td class="headr" colspan=2>Adjusted defense values:</td></tr>' +
			'<tr><td class="brn">DC225:</td>' +
				'<td title="DC225">0</td></tr>' +
			'<tr><td class="brn">DC175:</td>' +
				'<td title="DC175">0</td></tr>' +
			'<tr><td class="headr" colspan=2>Attacking Group Stats:</td></tr>' +
			'<tr><td class="brn">Raw Group Attack:</td>' +
				'<td class="grey" title="GroupAttack"></td></tr>' +
			'<tr><td class="brn">Group Attack w/ buffs:</td>' +
				'<td title="GroupAttackBuffed"></td></tr>' +
			'<tr><td class="brn">Raw Group Defense:</td>' +
				'<td class="grey" title="GroupDefense"></td></tr>' +
			'<tr><td class="brn">Group Defense w/ buffs:</td>' +
				'<td title="GroupDefenseBuffed"></td></tr>' +
			'<tr><td class="brn">Raw Group Armor:</td>' +
				'<td title="GroupArmor"></td></tr>' +
			'<tr><td class="brn">Group Armor w/ buffs:</td>' +
				'<td title="GroupArmorBuffed"></td></tr>' +
			'<tr><td class="brn">Raw Group Damage:</td>' +
				'<td class="grey" title="GroupDamage"></td></tr>' +
			'<tr><td class="brn">Group Damage w/ buffs:</td>' +
				'<td title="GroupDamageBuffed"></td></tr>' +
			'<tr><td class="brn">Raw Group HP:</td>' +
				'<td class="grey" title="GroupHP"></td></tr>' +
			'<tr><td class="brn">Group HP w/ buffs:</td>' +
				'<td title="GroupHPBuffed"></td></tr>' +
			'<tr><td class="headr" colspan=2>Processing:</td></tr>' +
			'<tr><td style="color:green;" colspan="2" title="ProcessingStatus">' +
				'Parsing defending guild stats ...</td></tr>' +
			'<tr><td class="headr" colspan=2>Assumptions:</td></tr>' +
			'<tr><td colspan="2" class="grey">Above calculations include ' +
				'Constitution, Fortitude, Nightmare Visage, Chi Strike, Terrorize ' +
				'and Flinch bonus calculations (in that order) on both the ' +
				'defending group and attacking group.</td></tr>';

		if (defendingGuildID === myGuildID && !hideRelicOffline) {
			validMemberString = validMemberString.slice(0, -1);
			var validMemberArray = validMemberString.split(' ');
			validMemberArray.forEach(function(val, ind, arr) {
				if (membrList[val]) {
					arr[ind] = '<a style="color:red;" href="index.php?cmd=' +
						'profile&player_id=' + membrList[val].id + '">' +
						val + '</a>';
				}
			});
			validMemberString = validMemberArray.join(' ');

			textToInsert += '<tr><td class="headr" colspan=2>Offline guild ' +
					'members not at relic:</td></tr>' +
				'<tr title="offlinePlayerListControl">' +
					'<td colspan=2 style="color:red;" title="offlinePlayerList">' +
					validMemberString + '</td></tr>' +
				'<tr class="hidden"><td class="brn">OfflinePlayerCount:</td>' +
					'<td title="offlinePlayerCount">' + validMemberArray.length +
					'</td></tr>' +
				'<tr class="hidden"><td class="brn">OfflinePlayersProcessed:</td>' +
					'<td title="offlinePlayersProcessed">0</td></tr>' +
				'<tr class="hidden" title="offlinePlayerListControlTemp" ' +
					'style="display:block;"><td style="color:green;" colspan=2>' +
					'Checking offline status ...</td></tr>';
		}
		textToInsert += '</table><td><tr>';
		extraTextInsertPoint.innerHTML += textToInsert;
	},

	getRelicGuildData: function(extraTextInsertPoint, hrefpointer) { // Legacy - Old map
		FSH.System.xmlhttp(hrefpointer, FSH.oldRelic.parseRelicGuildData);
	},

	parseRelicGuildData: function(responseText) { // jQuery - Old map
		var doc = FSH.System.createDocument(responseText);
		var relicCount = $('div#pCC table table table img[data-tipped*="' +
			'Relic Bonuses"]', doc).length;
		var relicCountElement = $('td[title="relicCount"]');
		relicCountElement.html(relicCount);
		var relicProcessedElement = $('td[title="relicProcessed"]');
		relicProcessedElement.html(1);
		FSH.oldRelic.syncRelicData();
	},

	getRelicPlayerData: function(defenderCount, hrefpointer, pl) { // Hybrid - Old map
		if (defenderCount === 0) {
			FSH.System.xmlhttp(
				hrefpointer,
				FSH.oldRelic.parseRelicPlayerData,
				{'defenderCount': defenderCount}
			);
		} else {
			$.ajax({
				cache: false,
				dataType: 'json',
				url:'index.php',
				data: {
					'cmd': 'export',
					'subcmd': 'profile',
					'player_username': pl
				},
				success: function(data) {
					FSH.oldRelic.parseRelicPlayerData(data, {'defenderCount': defenderCount});
				}
			});
		}
	},

	parseRelicPlayerData: function(responseText, callback) { // jQuery - Old map
		var defenderMultiplier;
		var attackValue;
		var defenseValue;
		var overallDefense;
		var armorValue;
		var damageValue;
		var hpValue;
		var defendersProcessed;
		var defendersProcessedNumber;
		var attackNumber;
		var defenseNumber;
		var armorNumber;
		var damageNumber;
		var hpNumber;

		var defenderCount = callback.defenderCount;

		var player = FSH.Helper.playerData(responseText);

		if (defenderCount !== 0) {
			defenderMultiplier = 0.2;
			attackValue = $('td[title="attackValue"]');
			attackNumber = FSH.System.intValue(attackValue.html());
			attackValue.html(FSH.System.addCommas(attackNumber +
				Math.round(player.attackValue * defenderMultiplier)));
			defenseValue = $('td[title="defenseValue"]');
			defenseNumber = FSH.System.intValue(defenseValue.html());
			overallDefense =
				defenseNumber + Math.round(player.defenseValue * defenderMultiplier);
			defenseValue.html(FSH.System.addCommas(overallDefense));
			armorValue = $('td[title="armorValue"]');
			armorNumber = FSH.System.intValue(armorValue.html());
			armorValue.html(FSH.System.addCommas(armorNumber +
				Math.round(player.armorValue * defenderMultiplier)));
			damageValue = $('td[title="damageValue"]');
			damageNumber = FSH.System.intValue(damageValue.html());
			damageValue.html(FSH.System.addCommas(damageNumber +
				Math.round(player.damageValue * defenderMultiplier)));
			hpValue = $('td[title="hpValue"]');
			hpNumber = FSH.System.intValue(hpValue.html());
			hpValue.html(FSH.System.addCommas(hpNumber +
				Math.round(player.hpValue * defenderMultiplier)));
			defendersProcessed = $('td[title="defendersProcessed"]');
			defendersProcessedNumber =
				FSH.System.intValue(defendersProcessed.html());
			defendersProcessed.html(
				FSH.System.addCommas(defendersProcessedNumber + 1));
		}
		else {
			FSH.oldRelic.leadDefender(player);
		}
		FSH.oldRelic.syncRelicData();
	},

	syncRelicData: function() { // jQuery - Bad - Old map
		var defendersProcessed = $('td[title="defendersProcessed"]');
		var defendersProcessedNumber =
			FSH.System.intValue(defendersProcessed.html());
		var relicProcessedValue = $('td[title="relicProcessed"]');
		if (FSH.Helper.relicDefenderCount === defendersProcessedNumber &&
			relicProcessedValue.html() === '1') {
			FSH.oldRelic.processRelicStats();
		}
	},

	leadDefender: function(player) { // jQuery - Old map
		//get lead defender (LD) buffs here for use later ... 
		var attackValue = $('td[title="LDattackValue"]');
		var attackNumber = FSH.System.intValue(attackValue.html());
		attackValue.html(FSH.System.addCommas(attackNumber +
			Math.round(player.attackValue)));
		var defenseValue = $('td[title="LDdefenseValue"]');
		var defenseNumber = FSH.System.intValue(defenseValue.html());
		defenseValue.html(FSH.System.addCommas(defenseNumber +
			Math.round(player.defenseValue)));
		var armorValue = $('td[title="LDarmorValue"]');
		var armorNumber=FSH.System.intValue(armorValue.html());
		armorValue.html(FSH.System.addCommas(armorNumber +
			Math.round(player.armorValue)));
		var damageValue = $('td[title="LDdamageValue"]');
		var damageNumber=FSH.System.intValue(damageValue.html());
		damageValue.html(FSH.System.addCommas(damageNumber +
			Math.round(player.damageValue)));
		var hpValue = $('td[title="LDhpValue"]');
		var hpNumber=FSH.System.intValue(hpValue.html());
		hpValue.html(FSH.System.addCommas(hpNumber + Math.round(player.hpValue)));
		var defendersProcessed = $('td[title="defendersProcessed"]');
		var defendersProcessedNumber =
			FSH.System.intValue(defendersProcessed.html());
		defendersProcessed.html(
			FSH.System.addCommas(defendersProcessedNumber + 1));

		$('td[title="LDProcessed"]')           .html(1);
		$('td[title="LDConstitutionLevel"]')   .html(player.constitutionLevel);
		$('td[title="LDFlinchLevel"]')         .html(player.flinchLevel);
		$('td[title="LDNightmareVisageLevel"]').html(player.nightmareVisageLevel);
		$('td[title="LDFortitudeLevel"]')      .html(player.fortitudeLevel);
		$('td[title="LDChiStrikeLevel"]')      .html(player.chiStrikeLevel);
		$('td[title="LDTerrorizeLevel"]')      .html(player.terrorizeLevel);
		$('td[title="LDSanctuaryLevel"]')      .html(player.sanctuaryLevel);
	},

	processRelicStats: function() { // Legacy - Old map
		var processingStatus = $('td[title="ProcessingStatus"]');
		processingStatus.html('Processing defending guild stats ... ');
		var relicCountValue = $('td[title="relicCount"]');
		var relicCount = FSH.System.intValue(relicCountValue.html());
		var relicMultiplier = 1;
		if (relicCount === 1) {
			relicMultiplier = 1.5;
		}
		else if (relicCount >= 2) {
			relicMultiplier = Math.round((1 - relicCount/10)*100)/100;
		}

		var LDConstitutionLevel =
			FSH.System.intValue($('td[title="LDConstitutionLevel"]').text());
		var LDNightmareVisageLevel =
			FSH.System.intValue($('td[title="LDNightmareVisageLevel"]').text());
		var LDFortitudeLevel =
			FSH.System.intValue($('td[title="LDFortitudeLevel"]').text());
		var LDChiStrikeLevel =
			FSH.System.intValue($('td[title="LDChiStrikeLevel"]').text());
		var LDSanctuaryLevel =
			FSH.System.intValue($('td[title="LDSanctuaryLevel"]').text());
		var attackValue = $('td[title="attackValue"]');
		var attackValueBuffed = $('td[title="attackValueBuffed"]');
		var LDattackValue = $('td[title="LDattackValue"]');
		var attackNumber = FSH.System.intValue(attackValue.html());
		var LDattackNumber = FSH.System.intValue(LDattackValue.html());
		var overallAttack =
			attackNumber + Math.round(LDattackNumber * relicMultiplier);
		attackValue.html(FSH.System.addCommas(overallAttack));
		var nightmareVisageEffect =
			Math.ceil(overallAttack * (LDNightmareVisageLevel * 0.0025));
		attackValueBuffed.html(
			FSH.System.addCommas(overallAttack - nightmareVisageEffect));
		var defenseValue = $('td[title="defenseValue"]');
		var defenseValueBuffed = $('td[title="defenseValueBuffed"]');
		var LDdefenseValue = $('td[title="LDdefenseValue"]');
		var defenseNumber = FSH.System.intValue(defenseValue.html());
		var LDdefenseNumber = FSH.System.intValue(LDdefenseValue.html());
		var overallDefense =
			defenseNumber + Math.round(LDdefenseNumber * relicMultiplier);
		defenseValue.html(FSH.System.addCommas(overallDefense));
		var defenseWithConstitution =
			Math.ceil(overallDefense * (1 + LDConstitutionLevel * 0.001));
		var totalDefense = defenseWithConstitution + nightmareVisageEffect;
		defenseValueBuffed.html(FSH.System.addCommas(totalDefense));
		var dc225 = $('td[title="DC225"]');
		var dc175 = $('td[title="DC175"]');
		dc225.html(FSH.System.addCommas(
			Math.ceil(totalDefense * (1 - 225 * 0.002))));
		dc175.html(FSH.System.addCommas(
			Math.ceil(totalDefense * (1 - 175 * 0.002))));
		var armorValue = $('td[title="armorValue"]');
		var armorValueBuffed = $('td[title="armorValueBuffed"]');
		var LDarmorValue = $('td[title="LDarmorValue"]');
		var armorNumber = FSH.System.intValue(armorValue.html());
		var LDarmorNumber = FSH.System.intValue(LDarmorValue.html());
		var totalArmor = armorNumber + Math.round(LDarmorNumber * relicMultiplier);
		armorValue.html(FSH.System.addCommas(totalArmor));
		armorValueBuffed.html(FSH.System.addCommas(totalArmor +
			Math.floor(totalArmor * LDSanctuaryLevel * 0.001)));
		var damageValue = $('td[title="damageValue"]');
		var damageValueBuffed = $('td[title="damageValueBuffed"]');
		var LDdamageValue = $('td[title="LDdamageValue"]');
		var damageNumber = FSH.System.intValue(damageValue.html());
		var LDdamageNumber = FSH.System.intValue(LDdamageValue.html());
		var hpValue = $('td[title="hpValue"]');
		var hpValueBuffed = $('td[title="hpValueBuffed"]');
		var LDhpValue = $('td[title="LDhpValue"]');
		var hpNumber = FSH.System.intValue(hpValue.html());
		var LDhpNumber = FSH.System.intValue(LDhpValue.html());
		var fortitudeBonusHP =
			Math.ceil(defenseWithConstitution * LDFortitudeLevel * 0.001);
		var chiStrikeBonusDamage = Math.ceil((hpNumber +
			Math.round(LDhpNumber * relicMultiplier) + fortitudeBonusHP) *
				LDChiStrikeLevel * 0.001);
		damageValue.html(FSH.System.addCommas(damageNumber +
			Math.round(LDdamageNumber * relicMultiplier)));
		damageValueBuffed.html(FSH.System.addCommas(damageNumber +
			Math.round(LDdamageNumber * relicMultiplier) + chiStrikeBonusDamage));
		hpValue.html(FSH.System.addCommas(hpNumber +
			Math.round(LDhpNumber * relicMultiplier)));
		hpValueBuffed.html(FSH.System.addCommas(hpNumber +
			Math.round(LDhpNumber * relicMultiplier) + fortitudeBonusHP));
		var LDpercentageValue = $('td[title="LDPercentage"]');
		LDpercentageValue.html(relicMultiplier*100 + '%');

		FSH.System.xmlhttp('index.php?cmd=guild&subcmd=groups',
			FSH.oldRelic.relicCheckIfGroupExists);
	},

	relicCheckIfGroupExists: function(responseText) { // Hybrid - Old map
		var processingStatus = $('td[title="ProcessingStatus"]');
		processingStatus.html('Checking attacking group ... ');
		var doc = FSH.System.createDocument(responseText);
		var groupExistsIMG =
			$(doc).find('img[title="Disband Group (Cancel Attack)"]');
		if (groupExistsIMG.length > 0) {
			var groupHref = groupExistsIMG.parents('td:first').find('a:first')
				.attr('href');
			FSH.System.xmlhttp(groupHref, FSH.oldRelic.getRelicGroupData);
		} else {
			processingStatus.html('Done.');
		}
	},

	getRelicGroupData: function(responseText) { // Hybrid - Old map
		var processingStatus = $('td[title="ProcessingStatus"]');
		processingStatus.html('Parsing attacking group stats ... ');
		var doc = FSH.System.createDocument(responseText);
		var theTable = $('div#pCC table table table', doc);
		FSH.Helper.relicGroupAttackValue =
			FSH.System.intValue($('td#stat-attack', theTable).text());
		FSH.Helper.relicGroupDefenseValue =
			FSH.System.intValue($('td#stat-defense', theTable).text());
		FSH.Helper.relicGroupArmorValue =
			FSH.System.intValue($('td#stat-armor', theTable).text());
		FSH.Helper.relicGroupDamageValue =
			FSH.System.intValue($('td#stat-damage', theTable).text());
		FSH.Helper.relicGroupHPValue =
			FSH.System.intValue($('td#stat-hp', theTable).text());
		FSH.System.xmlhttp('index.php?cmd=guild&subcmd=mercs',
			FSH.oldRelic.parseRelicMercStats);
	},

	parseRelicMercStats: function(responseText) { // Hybrid - Old map
		//merc stats do not count for group stats so subtract them here ...
		var processingStatus = $('td[title="ProcessingStatus"]');
		processingStatus.html('Subtracting group merc stats ... ');

		var mercPage = FSH.System.createDocument(responseText);
		var mercElements = mercPage.getElementsByTagName('IMG');
		var totalMercAttack = 0;
		var totalMercDefense = 0;
		var totalMercArmor = 0;
		var totalMercDamage = 0;
		var totalMercHP = 0;
		var merc;
		for (var i = 0; i < mercElements.length; i += 1) {
			merc = mercElements[i];
			var mouseoverText = $(merc).data('tipped');
			var src = merc.getAttribute('src');
			if (mouseoverText && src.search('/merc/') !== -1){
				//<td>Attack:</td><td>1919</td>
				var attackRE = /<td>Attack:<\/td><td>(\d+)<\/td>/;
				var mercAttackValue = attackRE.exec(mouseoverText)[1] * 1;
				totalMercAttack += mercAttackValue;
				var defenseRE = /<td>Defense:<\/td><td>(\d+)<\/td>/;
				var mercDefenseValue = defenseRE.exec(mouseoverText)[1] * 1;
				totalMercDefense += mercDefenseValue;
				var armorRE = /<td>Armor:<\/td><td>(\d+)<\/td>/;
				var mercArmorValue = armorRE.exec(mouseoverText)[1] * 1;
				totalMercArmor += mercArmorValue;
				var damageRE = /<td>Damage:<\/td><td>(\d+)<\/td>/;
				var mercDamageValue = damageRE.exec(mouseoverText)[1] * 1;
				totalMercDamage += mercDamageValue;
				var hpRE = /<td>HP:<\/td><td>(\d+)<\/td>/;
				var mercHPValue = hpRE.exec(mouseoverText)[1] * 1;
				totalMercHP += mercHPValue;
			}
		}
		FSH.Helper.relicGroupAttackValue =
			FSH.Helper.relicGroupAttackValue - Math.round(totalMercAttack * 0.2);
		FSH.Helper.relicGroupDefenseValue =
			FSH.Helper.relicGroupDefenseValue - Math.round(totalMercDefense * 0.2);
		FSH.Helper.relicGroupArmorValue =
			FSH.Helper.relicGroupArmorValue - Math.round(totalMercArmor * 0.2);
		FSH.Helper.relicGroupDamageValue =
			FSH.Helper.relicGroupDamageValue - Math.round(totalMercDamage * 0.2);
		FSH.Helper.relicGroupHPValue =
			FSH.Helper.relicGroupHPValue - Math.round(totalMercHP * 0.2);

		FSH.System.xmlhttp('index.php?cmd=profile',
			FSH.oldRelic.getRelicPlayerBuffs);
	},

	getRelicPlayerBuffs: function(responseText) { // jQuery - Old map
		var processingStatus = $('td[title="ProcessingStatus"]');
		processingStatus.html('Processing attacking group stats ... ');

		var player = FSH.Helper.playerData(responseText);
		var groupAttackElement = $('td[title="GroupAttack"]');
		var groupAttackBuffedElement = $('td[title="GroupAttackBuffed"]');
		groupAttackElement.html(
			FSH.System.addCommas(FSH.Helper.relicGroupAttackValue));
		var nightmareVisageEffect = Math.ceil(FSH.Helper.relicGroupAttackValue *
			(player.nightmareVisageLevel * 0.0025));
		FSH.Helper.relicGroupAttackValue = FSH.Helper.relicGroupAttackValue -
			nightmareVisageEffect;
		var storedFlinchLevel =
			FSH.System.intValue($('td[title="LDFlinchLevel"]').text());
		var storedFlinchEffectValue = Math.ceil(FSH.Helper.relicGroupAttackValue *
			storedFlinchLevel * 0.001);
		groupAttackBuffedElement.html(FSH.System.addCommas(
			FSH.Helper.relicGroupAttackValue - storedFlinchEffectValue));
		var defenseWithConstitution = Math.ceil(FSH.Helper.relicGroupDefenseValue *
			(1 + player.constitutionLevel * 0.001));
		var totalDefense = defenseWithConstitution + nightmareVisageEffect;
		var groupDefenseElement = $('td[title="GroupDefense"]');
		var groupDefenseBuffedElement = $('td[title="GroupDefenseBuffed"]');
		groupDefenseElement.html(FSH.System.addCommas(
			FSH.Helper.relicGroupDefenseValue));
		groupDefenseBuffedElement.html(FSH.System.addCommas(totalDefense));
		var groupArmorElement = $('td[title="GroupArmor"]');
		var groupArmorBuffedElement = $('td[title="GroupArmorBuffed"]');
		groupArmorElement.html(
			FSH.System.addCommas(FSH.Helper.relicGroupArmorValue));
		groupArmorBuffedElement.html(FSH.System.addCommas(
			FSH.Helper.relicGroupArmorValue +
			Math.floor(FSH.Helper.relicGroupArmorValue * player.sanctuaryLevel *
			0.001)));
		var groupDamageElement = $('td[title="GroupDamage"]');
		var groupDamageBuffedElement = $('td[title="GroupDamageBuffed"]');
		var groupHPElement = $('td[title="GroupHP"]');
		var groupHPBuffedElement = $('td[title="GroupHPBuffed"]');
		var fortitudeBonusHP = Math.ceil(defenseWithConstitution *
			player.fortitudeLevel * 0.001);
		var chiStrikeBonusDamage = Math.ceil((FSH.Helper.relicGroupHPValue +
			fortitudeBonusHP) * player.chiStrikeLevel * 0.001);
		var storedTerrorizeLevel = FSH.System.intValue(
			$('td[title="LDTerrorizeLevel"]').text());
		var storedTerrorizeEffectValue = Math.ceil(
			FSH.Helper.relicGroupDamageValue * storedTerrorizeLevel * 0.001);
		groupDamageElement.html(
			FSH.System.addCommas(FSH.Helper.relicGroupDamageValue));
		groupDamageBuffedElement.html(FSH.System.addCommas(
			FSH.Helper.relicGroupDamageValue + chiStrikeBonusDamage -
			storedTerrorizeEffectValue));
		groupHPElement.html(FSH.System.addCommas(FSH.Helper.relicGroupHPValue));
		groupHPBuffedElement.html(
			FSH.System.addCommas(FSH.Helper.relicGroupHPValue + fortitudeBonusHP));

		//Effect on defending group from Flinch on attacking group.
		var defGuildBuffedAttackElement = $('td[title="attackValueBuffed"]');
		var defGuildBuffedAttackValue = FSH.System.intValue(
			defGuildBuffedAttackElement.text());
		var flinchEffectValue = Math.ceil(defGuildBuffedAttackValue *
			player.flinchLevel * 0.001);
		defGuildBuffedAttackElement.html(FSH.System.addCommas(
			defGuildBuffedAttackValue - flinchEffectValue));
		var defGuildBuffedDamageElement = $('td[title="damageValueBuffed"]');
		var defGuildBuffedDamageValue = FSH.System.intValue(
			defGuildBuffedDamageElement.text());
		var terrorizeEffectValue = Math.ceil(defGuildBuffedDamageValue *
			player.terrorizeLevel * 0.001);
		defGuildBuffedDamageElement.html(FSH.System.addCommas(
			defGuildBuffedDamageValue - terrorizeEffectValue));

		processingStatus.html('Done.');
	},

};

FSH.oldArena = { // Legacy

	storeCompletedArenas: function() { // Legacy
		//fix button class and add go to first and last
		var prevButton = FSH.System.findNode('//input[@value="<"]');
		var nextButton = FSH.System.findNode('//input[@value=">"]');
		if (prevButton) {
			prevButton.setAttribute('class', 'custombutton');
			var startButton = document.createElement('input');
			startButton.setAttribute('type', 'button');
			startButton.setAttribute('onclick', prevButton.getAttribute('onclick').replace(/\&page=[0-9]*/, '&page=1'));
			startButton.setAttribute('class', 'custombutton');
			startButton.setAttribute('value', '<<');
			prevButton.parentNode.insertBefore(startButton,prevButton);
		}
		if (nextButton) {
			nextButton.setAttribute('class', 'custombutton');
			var lastPageNode=FSH.System.findNode('//input[@value="Go"]/../preceding-sibling::td');
			var lastPage = lastPageNode.textContent.replace(/\D/g,'');
			var finishButton = document.createElement('input');
			finishButton.setAttribute('type', 'button');
			finishButton.setAttribute('onclick', nextButton.getAttribute('onclick').replace(/\&page=[0-9]*/, '&page=' + lastPage));
			finishButton.setAttribute('class', 'custombutton');
			finishButton.setAttribute('value', '>>');
			nextButton.parentNode.insertBefore(finishButton, nextButton.nextSibling);
		}


// Why are we storing completed arenas?
/*

		var arenaTable = FSH.System.findNode('//table[@width=620]/tbody/tr/td[contains(.,"Reward")]/table');

		// var arenaMoves = FSH.System.getValueJSON('arenaMoves');
		var oldArenaMatches = FSH.System.getValueJSON('arenaMatches');
		var arenaMatches;
		var aMatch;
		if (!oldArenaMatches) {
			arenaMatches = [];
		} else {
			while (oldArenaMatches.length>1000)
			{
				oldArenaMatches.shift();
			}
			arenaMatches = oldArenaMatches;
		}
		var matchFound = false;

		for (var i=1; i<arenaTable.rows.length-1; i += 1){
			var row = arenaTable.rows[i];
			matchFound = false;
			aMatch = {};
			var arenaIDRE = /#\s(\d+)/;
			var arenaID = arenaIDRE.exec(row.cells[0].textContent)[1]*1;
			if (oldArenaMatches){
				for (var k=0; k<oldArenaMatches.length; k += 1){
					if (oldArenaMatches[k].arenaID === arenaID) {
						matchFound = true;
						break;
					}
				}
			}
			if (!matchFound) {
				aMatch.arenaID = arenaID;
				aMatch.arenaJoinCostHTML = row.cells[2].innerHTML;
				aMatch.arenaSpecialsHTML = row.cells[4].innerHTML;
				if (row.cells[4].innerHTML.search('/pvp/specials_1.gif') !== -1) {
					aMatch.arenaSpecials = true;
				} else {
					aMatch.arenaSpecials = false;
				}
				aMatch.arenaHellForgeHTML = row.cells[5].innerHTML;
				aMatch.arenaMaxEquipHTML = row.cells[6].innerHTML;
				aMatch.arenaRewardHTML = row.cells[7].innerHTML;
				arenaMatches.push(aMatch);
			}
		}
		FSH.System.setValueJSON('arenaMatches', arenaMatches);

*/

	},

	injectArenaSetupMove: function() { // Legacy
		var node=FSH.System.findNode('//b[.="Setup Combat Moves"]');
		if (!node) {return;}
		node.style.textDecoration = 'underline';
		node.style.color = 'green';
		node.style.cursor= 'pointer';
		node.addEventListener('click', FSH.oldArena.changeArenaMove, true);
	},

	changeArenaMove: function() { // Legacy
		if (document.getElementById('updateMv')) {return;}
		var nodes = FSH.System.findNodes('//a[contains(@href,"index.php?cmd=arena&subcmd=pickmove&slot_id=")]');
		var table = nodes[0].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
		var imgs = FSH.System.findNodes('//img[contains(@src,"pvp/bar_spacer.jpg")]');

		// selection row
		var row=table.insertRow(-1);
		var html='<td></td>';
		var arr=['BL', 'CA','CH','DD','DF','DG', 'LG','PA','SA','PS','CR', 'WK'];
		//         0     1    2    3    4    5     6    7    8    9   10    11
		var i;
		var select = '<option value=x>BA</option>';
		for (i=0; i<arr.length; i += 1) {
			select += '<option value='+i+'>'+arr[i]+'</option>';
		}
		for (i=0; i<nodes.length; i += 1) {
			var s=select;
			var m=nodes[i].firstChild.getAttribute('src');
			if (m.indexOf('bar_icon_holder.jpg')>0) {
				m='x';
			} else {
				m=m.match(/pvp\/(\d+).gif$/)[1];
			}
			html += '<td colspan=3><select id=mv'+i+'>'+s.replace('value='+m+'>','value='+m+' selected>')+'</select></td>';
		}
		row.innerHTML = html;

		// img row
		for (i=0; i<imgs.length; i += 1) {
			imgs[i].width=15;
			imgs[i].height=50;
		}

		// action row
		row=table.insertRow(-1);
		row.innerHTML='<td colspan=31 align=center><input id=updateMv type=button class=custombutton value=Update name=updateMoves></td>';
		document.getElementById('updateMv').addEventListener('click', FSH.oldArena.updateMove, true);
	},

	updateMove: function(evt, moves) { // Legacy
		var mv=[], oldmv=[];
		for (var i=0; i<10; i += 1) {
			mv.push(document.getElementById('mv'+i).value);
		}
		if (moves) {mv = moves;}
		var nodes = FSH.System.findNodes('//a[contains(@href,"index.php?cmd=arena&subcmd=pickmove&slot_id=")]');
		for (i=0; i<nodes.length; i += 1) {
			var m=nodes[i].firstChild.getAttribute('src');
			if (m.indexOf('bar_icon_holder.jpg')>0) {
				m='x';
			} else {
				m=m.match(/pvp\/(\d+).gif$/)[1];
			}
			oldmv.push(m);
		}
		for (i=0; i<10; i += 1) {
			if (mv[i] !== oldmv[i]) {
				FSH.System.xmlhttp('index.php?cmd=arena&subcmd=dopickmove&move_id=x&slot_id='+i);
			}
		}
		setTimeout(function() {
			for (i=0; i<10; i += 1) {
				if (mv[i] !== oldmv[i] && mv[i] !== 'x') {
					FSH.System.xmlhttp('index.php?cmd=arena&subcmd=dopickmove&move_id='+mv[i]+'&slot_id='+i);
				}
			}
			setTimeout(function() {location.reload();}, 500);
		}, 500); // TODO OMG!
	},

};

FSH.arena = { // jQuery

	storeMoves: function() { // jQuery
		FSH.ajax.getForage('fsh_arena').done(function(arena) {
			arena = arena || {};
			arena.moves = {};
			var arenaMoves = $('div#pCC img[vspace="4"]').slice(1);
			arenaMoves.each(function() {
				var self = $(this);
				var src = self.attr('src');
				var moveId = /(\d+)\.gif/.exec(src)[1];
				arena.moves[moveId] = {};
				arena.moves[moveId].count = /(\d)$/.exec(self.closest('td').html())[1] * 1;
				arena.moves[moveId].href = src;
			});
			FSH.ajax.setForage('fsh_arena', arena);
		});
	},

	inject: function() { // Native
		FSH.Helper.appendHead({
			js: [FSH.dataTablesLoc],
			callback: FSH.arena.dataTablesLoaded
		});
	},

	dataTablesLoaded: function() { // jQuery
		FSH.ajax.getForage('fsh_arena').done(FSH.arena.process);
	},

	process: function(arena) { // jQuery

		FSH.arena.opts = arena || {};
		FSH.arena.oldIds = FSH.arena.opts.id || {};
		FSH.arena.opts.id = {};
		var tabs = $('div#arenaTypeTabs');
		var theTables = $('table[width="635"]', tabs);
		theTables.addClass('stripe hover');
		theTables.each(FSH.arena.redoHead);
		var myRows = theTables.children('tbody').children('tr');
		myRows.each(FSH.arena.orderData);

		FSH.ajax.setForage('fsh_arena', FSH.arena.opts);

		FSH.arena.filterHeader();
		FSH.arena.lvlFilter();

		theTables.DataTable(FSH.arena.tableOpts);
		$('td[class*="sorting"]', tabs).off('click');
		$('div.dataTables_filter').hide();
		tabs.on('click', 'td[class*="sorting"]', FSH.arena.sortHandler);

	},

	redoHead: function() { // jQuery
		var firstRow = $('tr', this).first();
		$('a', firstRow).contents().unwrap();
		$(this).prepend($('<thead/>').append(firstRow));
	},

	tableOpts: { // Native
		paging: false,
		//searching: false,
		info: false,
		order: [[3, 'desc'],[0, 'asc']],
		columnDefs: [
			{orderable: false, targets: [8, 9]}
		],
	},

	orderData: function() { // jQuery

		var row = $(this);
		var theCells = row.children();

		var cell = theCells.eq(0);
		var matches = /#\s(\d+)/.exec(cell.text());
		if (matches && FSH.arena.opts && FSH.arena.opts.id) {
			FSH.arena.opts.id[matches[1]] = matches[1];
			if (FSH.arena.oldIds && !FSH.arena.oldIds[matches[1]]) {
				row.css('background-color', '#F5F298');
			}
		}

		cell = theCells.eq(1);
		matches = /(\d+)\s\/\s(\d+)/.exec(cell.text());
		if (matches) {cell.attr('data-order', matches[2] * 1000 + matches[1] * 1);}

		cell = theCells.eq(2);
		cell.attr('data-order',
			$('td', cell).first().text().replace(/[,\s]/g, ''));

		FSH.arena.boolData(theCells.eq(4));
		FSH.arena.boolData(theCells.eq(5));
		FSH.arena.boolData(theCells.eq(6));
		FSH.arena.maxMoves(theCells.eq(8), row);

	},

	boolData: function(cell) { // jQuery
		var matches = /(\d)\.gif/.exec($('img', cell).attr('src'));
		if (matches) {cell.attr('data-order', matches[1]);}
	},

	maxMoves: function(cell, row) { // jQuery
		if (!FSH.arena.opts || !FSH.arena.opts.moves) {return;}
		var matches = /\/pvp\/(\d+)\.gif/.exec($('img', cell).attr('src'));
		if (matches &&
			FSH.arena.opts.moves[matches[1]] &&
			FSH.arena.opts.moves[matches[1]].count === 3) {
			row.addClass('moveMax');
		}
	},

	sortHandler: function() { // jQuery
		var self = $(this);
		var table = self.closest('table').DataTable();
		var myCol = self.index();
		var classes = self.attr('class');
		var test = /sorting([^\s]+)/.exec(classes);
		var sortOrder = 'desc';
		if (test && test[1] === '_desc') {sortOrder = 'asc';}
		if (myCol !== 3) {
			table.order([3, 'desc'], [myCol, sortOrder]).draw();
		} else {
			table.order([3, sortOrder]).draw();
		}
	},

	filterHeader: function() { // jQuery

		var theRow = $('div#pCC > table > tbody > tr:nth-child(7)');
		theRow.clone().insertBefore(theRow).find('td').attr('height', '2');
		theRow.clone().insertAfter(theRow).find('td').attr('height', '1');

		var aTable = $(FSH.Layout.arenaFilter);

		var fshHideMoves = $('input#fshHideMoves', aTable);
		if (FSH.arena.opts && 'hideMoves' in FSH.arena.opts) {
			fshHideMoves.prop('checked', FSH.arena.opts.hideMoves);
			$('.moveMax').toggle(!FSH.arena.opts.hideMoves);
		}
		fshHideMoves.click(FSH.arena.hideMoves);

		var fshMinLvl = $('input#fshMinLvl', aTable);
		if (FSH.arena.opts && 'minLvl' in FSH.arena.opts) {
			fshMinLvl.val(FSH.arena.opts.minLvl);
		} else {
			fshMinLvl.val(FSH.Data.defaults.arenaMinLvl);
		}
		var fshMaxLvl = $('input#fshMaxLvl', aTable);
		if (FSH.arena.opts && 'maxLvl' in FSH.arena.opts) {
			fshMaxLvl.val(FSH.arena.opts.maxLvl);
		} else {
			fshMaxLvl.val(FSH.Data.defaults.arenaMaxLvl);
		}
		$('#fshMinLvl, #fshMaxLvl', aTable).keyup(FSH.arena.changeLvls);

		$('#fshReset', aTable).click(FSH.arena.resetLvls);

		$('td', theRow).append(aTable);

	},

	hideMoves: function() { // jQuery
		FSH.arena.opts = FSH.arena.opts || {};
		FSH.arena.opts.hideMoves = this.checked;
		FSH.ajax.setForage('fsh_arena', FSH.arena.opts);
		$('.moveMax').toggle(!this.checked);
	},

	lvlFilter: function() { // jQuery
		$.fn.dataTable.ext.search.push(
			function(_settings, data) {
				if (!FSH.arena.opts ||
					!FSH.arena.opts.minLvl ||
					!FSH.arena.opts.maxLvl) {return true;}
				var min = FSH.arena.opts.minLvl;
				var max = FSH.arena.opts.maxLvl;
				var level = FSH.System.intValue(data[7]);
				if (isNaN(min) && isNaN(max)   ||
					isNaN(min)   && level <= max ||
					min <= level && isNaN(max)   ||
					min <= level && level <= max )
				{return true;}
				return false;
			}
		);
	},

	changeLvls: function() { // jQuery
		var minLvl = parseInt($('#fshMinLvl').val(), 10);
		var maxLvl = parseInt($('#fshMaxLvl').val(), 10);
		if (!isNaN(minLvl) && !isNaN(maxLvl)) {
			FSH.arena.opts = FSH.arena.opts || {};
			FSH.arena.opts.minLvl = minLvl;
			FSH.arena.opts.maxLvl = maxLvl;
			FSH.ajax.setForage('fsh_arena', FSH.arena.opts);
			$('div#arenaTypeTabs table[width="635"]').DataTable().draw();
		}
	},

	resetLvls: function() { // jQuery
		FSH.arena.opts = FSH.arena.opts || {};
		FSH.arena.opts.minLvl = FSH.Data.defaults.arenaMinLvl;
		FSH.arena.opts.maxLvl = FSH.Data.defaults.arenaMaxLvl;
		FSH.ajax.setForage('fsh_arena', FSH.arena.opts);
		$('#fshMinLvl').val(FSH.arena.opts.minLvl);
		$('#fshMaxLvl').val(FSH.arena.opts.maxLvl);
		$('div#arenaTypeTabs table[width="635"]').DataTable().draw();
	},

};

FSH.combatLog = {

	injectNotepadShowLogs: function(content) { // Native
		if (!content) {content = FSH.Layout.notebookContent();}
		var combatLog = FSH.System.getValue('CombatLog');
		//combatLog = JSON.stringify(combatLog);
		if (combatLog.indexOf(',') === 0) {
			//combat logs start with a ,
			combatLog = combatLog.substr(1);
			FSH.System.setValue('CombatLog', combatLog);
		}

		// var playerName = $('dt[id="statbar-character"]').html();
		var yuuzParser = '<tr><td align="center" colspan="4"><b>Log Parser</b>' +
			'</td></tr>'+
			'<tr><td colspan="4" align="center">WARNING: this links to an ' +
			'external site not related to HCS.<br />' +
			'If you wish to visit site directly URL is: http://evolutions.' +
			'yvong.com/fshlogparser.php<br />' +
			//'NOTE: Combat Log Parser will be updated soon to work with the new combat logs, if your combat loogs look different, the parser may not work.</td></tr>'+
			//'<tr><td colspan=1>Nick (This is used for parsing, it is not case sensitive):</td><td colspan=3><input type="text" name="nick" value="'+playerName+'"></td></tr>'+
			//'<tr><td colspan=1>Doubler Level: </td><td colspan=3><input type="text" name="dob" value=''></td></tr>'+
			//'<tr><td colspan=1>Counter Attack Level: </td><td colspan=3 align="left"><input type="text" name="ca" value=''></td></tr>'+
			'<tr><td colspan=4 align="center"><input type="hidden" value="true" ' +
			'name="submit"><input type="submit" value="Analyze!"></td></tr>';
		content.innerHTML = '<h1>Combat Logs</h1><br /><form action="http://' +
			'evolutions.yvong.com/fshlogparser.php" method="post" target="_blank">' +
			'<div align="center"><textarea align="center" cols="80" rows="25" ' +
			'readonly style="background-color:white;font-family:Consolas,\'' +
			'Lucida Console\',\'Courier New\',monospace;" id="Helper:CombatLog" ' +
			'name="logs">[' + combatLog + ']</textarea></div>' +
			'<br /><br /><table width="100%"><tr>'+
			'<td colspan="2" align=center>' +
			'<input type="button" class="custombutton" value="Select All" ' +
			'id="Helper:CopyLog"></td>' +
			'<td colspan="2" align=center>' +
			'<input type="button" class="custombutton" value="Clear" ' +
			'id="Helper:ClearLog"></td>' +
			'</tr>' + yuuzParser + '</table></div>'+
			'</form>';

		document.getElementById('Helper:CopyLog')
			.addEventListener('click', FSH.combatLog.notepadCopyLog, true);
		document.getElementById('Helper:ClearLog')
			.addEventListener('click', FSH.combatLog.notepadClearLog, true);
	},

	notepadCopyLog: function() { // Native
		var combatLog = document.getElementById('Helper:CombatLog');
		combatLog.focus();
		combatLog.select();
	},

	notepadClearLog: function() { // Native
		if (window.confirm('Are you sure you want to clear your log?')) {
			// var combatLog=document.getElementById('Helper:CombatLog');
			FSH.System.setValue('CombatLog', '');
			location.reload();
		}
	},


};

})();
