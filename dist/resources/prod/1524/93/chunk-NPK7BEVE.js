import{a as k}from"./chunk-QDV4PRAL.js";import{a as x}from"./chunk-QINL52B7.js";import{a as L}from"./chunk-HK3FJNIM.js";import{a as S}from"./chunk-SDADCBWU.js";import{a as l}from"./chunk-ATELUZSH.js";import{a as p}from"./chunk-OX3SBSJB.js";import{a as d,b as g}from"./chunk-KCGDJ5EJ.js";import{a as h}from"./chunk-XM37SDUA.js";import{a as w,d as i}from"./chunk-WFI3HTBS.js";import{a as m}from"./chunk-HYLQEGZ4.js";function a(){return h({cmd:"superelite"})}function C(e){let t=e.replace("<br>"," ").split(/[: /]/);return k([t[2],t[1],t[0],t[3],t[4]])}function A(e){return Math.floor((w()-C(e))/1e3)}function v(e){return{time:A(e.cells[0].innerHTML),creature:{name:l(e.cells[1])}}}function y(e){let t=p("#pCC table table",e);return t?{r:x(t,4,1).map(v),s:!0,t:`0 ${String(i())}`}:{s:!1}}async function u(){return y(await L({cmd:"superelite"}))}function f(){return S(a,u)}var r=0,s=0,c=0,ee=()=>r;function D(){s&&(window.clearTimeout(s),s=!1),c&&(window.clearInterval(c),c=!1)}function E(e){return e&&e.t}function I(e,t){let o=e-t.time,n=t.creature.name.replace(" (Super Elite)","");(!r.se[n]||r.se[n]<o)&&(r.se[n]=o)}function U(e){let t=Number(e.t.split(" ")[1]);r||(r={lastUpdate:0,se:{}}),r.lastUpdate=t;let o=e.r;o&&(o.forEach(m(I,t)),g("fsh_seLog",r))}function B(e){E(e)&&U(e)}function T(){return f().then(B)}function b(){return D(),c=window.setInterval(T,3e5),T()}function O(){return i()-(r&&r.lastUpdate||0)}function R(){let e=O();e>=600?b():s=window.setTimeout(b,(600-e)*1e3)}function M(e){e&&(r=e)}function N(){return d("fsh_seLog").then(M)}function te(){N().then(R)}export{ee as a,D as b,b as c,N as d,te as e};
//# sourceMappingURL=chunk-NPK7BEVE.js.map