import{a as S,b}from"./chunk-4WWEO4K3.js";import{a as x}from"./chunk-3H3ZB3QO.js";import{a as l,b as s}from"./chunk-MJHY5FVK.js";import{a as g}from"./chunk-EHLYPUDG.js";import{a as d}from"./chunk-OZZ26S4K.js";import{a as L}from"./chunk-AQKFNZOY.js";import{a as h}from"./chunk-6R6RPTTO.js";import{a as w}from"./chunk-UU6HXUOC.js";import{a as k}from"./chunk-FLC7HS56.js";import{c as f}from"./chunk-4P4O4YGO.js";import{a as p}from"./chunk-RH5336H4.js";function c(){return k({cmd:"superelite"})}function C(e){let t=e.replace("<br>"," ").split(/[: /]/);return Math.floor((l-Date.UTC(Number(t[2]),f.indexOf(t[1]),Number(t[0]),Number(t[3]),Number(t[4]),0))/1e3)}function y(e){return{time:C(e.cells[0].innerHTML),creature:{name:d(e.cells[1])}}}function D(e){let t=h(e),r=g("#pCC table table",t);return r?{r:x(r.rows,4,1).map(y),s:!0,t:`0 ${String(s)}`}:{s:!1}}function u(){return w({cmd:"superelite"}).then(D)}function m(){return L(c,u)}var o,a,i;function N(){a&&(window.clearTimeout(a),a=!1),i&&(window.clearInterval(i),i=!1)}function E(e){return e&&e.t}function v(e,t){let r=e-t.time,n=t.creature.name.replace(" (Super Elite)","");(!o.se[n]||o.se[n]<r)&&(o.se[n]=r)}function I(e){let t=Number(e.t.split(" ")[1]);o||(o={lastUpdate:0,se:{}}),o.lastUpdate=t;let r=e.r;r&&(r.forEach(p(v,t)),b("fsh_seLog",o))}function R(e){E(e)&&I(e)}function T(){return m().then(R)}function A(){return N(),i=window.setInterval(T,3e5),T()}function U(){return s-(o&&o.lastUpdate||0)}function j(){let e=U();e>=600?A():a=window.setTimeout(A,(600-e)*1e3)}function B(e){e&&(o=e)}function O(){return S("fsh_seLog").then(B)}function oe(){O().then(j)}export{o as a,N as b,A as c,O as d,oe as e};
//# sourceMappingURL=chunk-OYPNJS5Y.js.map
