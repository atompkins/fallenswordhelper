import{c as t}from"./createSpan-0da61261.js"
import{f as n}from"./formatLastActivity-68228f74.js"
import{D as e,B as s,b as a,C as f,E as i,t as r,z as c,R as u,S as o,y as l,o as d}from"./calfSystem-fe0ebf32.js"
import{i as m}from"./insertElementAfter-fc514f49.js"
import{c as b}from"./csvSplit-f0a1b444.js"
import{g as h}from"./getProfile-9e74c09c.js"
import{s as p}from"./setTipped-b11fa6f8.js"
import{e as k}from"./executeAll-19d23fbc.js"
import{o as j}from"./outputFormat-4b739d33.js"
import{i as q}from"./insertHtmlAfterEnd-2a558ca9.js"
import{d as E,q as y}from"./quickbuffSuccess-ef729694.js"
import"./insertElementBefore-9228b012.js"
import"./cmdExport-fd555515.js"
import"./indexAjaxJson-a9fbc5f9.js"
import"./getBuff-4d87556a.js"
import"./buffObj-8137966e.js"
function g(f){const i=function(n){let s=e("span.fshLastActivity",n)
if(!s){s=t({className:"fshLastActivity"})
const e=a("h1",n)[0]
m(s,e)}return s}(e(`div.player[data-username="${f.username}"]`))
s(`Last Activity: ${n(f.last_login)}<br>Stamina: ${f.current_stamina} / ${f.stamina} ( ${Math.floor(f.current_stamina/f.stamina*100)}% )`,i)}function v(t){return Number(f(t).replace(/\[|\]/g,""))}function S(n,e,a){if(!e)return void s("",a)
const f=v(n.nextElementSibling.children[0].children[0]),i=function(n,e){if(!e){const e=t({className:"fshPlayer"})
return m(e,n.nextElementSibling),e}return e}(n,a),r=function(t,n){return t>n?"fshRed":"fshGreen"}(f,e)
s(` <span class="${r}">[${e}]</span>`,i)}function T(t,n){return n[0]===t}function $(t,n){const e=function(t,n){const e=n.getAttribute("data-name"),s=t.find(r(T,e))
if(s)return s[1]}(t,n),s=n.nextElementSibling.nextElementSibling;(e||s)&&S(n,e,s)}function B(t){return t.split(/ \[|]/)}function x(t){const n=t.target
if("H1"!==n.tagName)return
h(f(n)).then(g)
const e=function(t){return b(f(t.parentNode.lastElementChild)).map(B)}(n)
i("#buff-outer input[name]").forEach(r($,e))}const A=[50,54,55,56,60,61,98,101]
function D(t,n){(function(t,n){return!A.includes(Number(t.htmlFor.slice(6)))&&v(n.children[0])<125})(t,n)&&t.classList.add("fshDim")}function H(t){const n=t.children[0]
!function(t,n){const e=n.dataset.tipped,{cost:s}=t.previousElementSibling.dataset
p(e.replace("</center>",`<br>Stamina Cost: ${s}$&`),n)}(t,n),D(t,n)}function L(){i('#buff-outer label[for^="skill-"]').forEach(H)}function N(t){const n=a("h1",c("players"))[0]
!function(t,n){return!t&&n}(n,t)?n&&u(n):setTimeout(N,100,t-1)}function R(){c("targetPlayers").value&&N(9)}function w(t){return`<span class="fshLime">On</span>&nbsp;<span class="fshBuffOn">(${function(t){const n=Math.floor(t/60),e=t%60
let s=j(n,"m")
return n>0&&e>0&&(s+=" "),s+=j(e,"s"),s}(t)})</span>`}function F(t,n){const s=t[n]||0
return s?w(s):function(t){const n=e(`#buff-outer input[data-name="${t}"]`)
return n?`<span class="quickbuffActivate" data-buffid="${n.value}">Activate</span>`:'<span class="fshRed;">Off</span>'}(n)}function M(t,n,e){s(F(t,n),e)}function C(t,n){return t[n.name]=n.duration,t}function G(t,n){return n.name===t}function O(t,n,e){const a=function(t,n){const e=t.find(r(G,n))
return e&&e.value||0}(t,n)
let f="fshLime"
a<100&&(f="fshRed"),s(`<span class="${f}">${a}%</span>`,e)}function _(t){!function(t){const n=t._enhancements
O(n,"Sustain",c("fshSus")),O(n,"Fury Caster",c("fshFur"))}(t),function(t){const n=t._skills.reduce(C,{})
M(n,"Guild Buffer",c("fshGB")),M(n,"Buff Master",c("fshBM")),M(n,"Extend",c("fshExt")),M(n,"Reinforce",c("fshRI"))}(t)}function P(t){const n=c(`skill-${t}`)
n&&(n.checked=!0)}function I(){const t=o("blist")
t&&function(t){t.split(";").forEach(P)}(t)}let Q
function z(){Q.length?(window.addPlayer(Q.shift()),setTimeout(z,200)):R()}function J(){const t=o("players")
t&&(Q=b(t),z())}function K(t,n){y(n)&&(t.className="fshLime",s("On",t))}function U(t){const n=t.target
"quickbuffActivate"===n.className&&E([window.self],[n.dataset.buffid]).then(r(K,n))}function V(){d(c("helperQBheader"),U),d(c("players"),x)}function W(){if(l())return
const t=c("quickbuff")
t&&(h(window.self).then(_),q(t.children[0],'<div id="helperQBheader"><table class="quickbuffTable"><thead><tr><th class="quickbuffTableHeader">Sustain</th><th class="quickbuffTableHeader">Fury Caster</th><th class="quickbuffTableHeader">Guild Buffer</th><th class="quickbuffTableHeader">Buff Master</th><th class="quickbuffTableHeader">Extend</th><th class="quickbuffTableHeader">Reinforce</th></tr></thead><tbody><tr><td id="fshSus" class="quickbuffTableDetail">&nbsp;</td><td id="fshFur" class="quickbuffTableDetail">&nbsp;</td><td id="fshGB"  class="quickbuffTableDetail">&nbsp;</td><td id="fshBM"  class="quickbuffTableDetail">&nbsp;</td><td id="fshExt" class="quickbuffTableDetail">&nbsp;</td><td id="fshRI"  class="quickbuffTableDetail">&nbsp;</td></tr></tbody></table></div>'),k([L,I,J,V,R]))}export default W
//# sourceMappingURL=quickBuff-690fb171.js.map