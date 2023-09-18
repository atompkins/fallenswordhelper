import{g as t}from"./getProfile-d9dee1d8.js"
import{e as n}from"./executeAll-ef9da8be.js"
import{q as s,s as e,av as a,a4 as i,j as c,c as f,g as r,aw as o,a6 as u,n as l,ae as d,b,aa as h,J as p,w as m,o as k}from"./calfSystem-929ac228.js"
import{i as q}from"./insertHtmlAfterEnd-cbb15ee8.js"
import{c as y}from"./createSpan-6761e587.js"
import{c as S}from"./csvSplit-c32f193d.js"
import{i as $}from"./insertElementAfter-7e99ee43.js"
import{f as g}from"./formatLastActivity-8adc5cb7.js"
import{s as j}from"./setTipped-cc91a1bc.js"
import{o as v}from"./outputFormat-b1a8825f.js"
import{d as T,q as x}from"./quickbuffSuccess-1d8074ee.js"
import"./profile-ceb86d3e.js"
import"./now-6f22aec9.js"
import"./splitTime-40eb3bf7.js"
import"./buffReportParser-9e77ea1e.js"
import"./buffObj-18893259.js"
import"./uniq-a9975ce0.js"
function E(t){if(!t)return
const n=function(t){let n=s("span.fshLastActivity",t)
if(!n){n=y({className:"fshLastActivity"})
const s=a("h1",t)[0]
$(n,s)}return n}(s(`div.player[data-username="${t.username}"]`))
e(`Last Activity: ${g(t.last_login)}<br>Stamina: ${t.current_stamina} / ${t.stamina} ( ${Math.floor(t.current_stamina/t.stamina*100)}% )`,n)}function A(t){return Number(i(t).replace(/[[\]]/g,""))}function w(t,n,s){if(!n)return void e("",s)
const a=A(t.nextElementSibling.children[0].children[0]),i=function(t,n){if(!n){const n=y({className:"fshPlayer"})
return $(n,t.nextElementSibling),n}return n}(t,s),c=function(t,n){return t>n?"fshRed":"fshGreen"}(a,n)
e(` <span class="${c}">[${n}]</span>`,i)}function B(t,n){return n[0]===t}function C(t,n){const s=function(t,n){const s=n.getAttribute("data-name"),e=t.find(f(B,s))
if(e)return e[1]}(t,n),e=n.nextElementSibling.nextElementSibling;(s||e)&&w(n,s,e)}function H(t){return t.split(/ \[|]/)}async function L(n){const s=n.target
if("H1"!==s.tagName)return
const e=t(i(s)),a=function(t){return S(i(t.parentNode.lastElementChild)).map(H)}(s)
c("#buff-outer input[name]").forEach(f(C,a)),E(await e)}const N=[50,54,55,56,60,61,98,101,179,181],R='<p class="quickbuffSortCheckboxContainer"><input id="quickbuffSortCheckbox" class="quickbuffSortCheckbox" type="checkbox"><label for="quickbuffSortCheckbox">Sort buffs alphabetically</label></p>',D="qbSortBuffsAlphabetically"
function _(t,n){(function(t,n){return!N.includes(Number(t.htmlFor.slice(6)))&&A(n.children[0])<125})(t,n)&&t.classList.add("fshDim")}function F(t){const n=t.children[0]
!function(t,n){const s=n.dataset.tipped,{cost:e}=t.previousElementSibling.dataset
j(s.replace("</center>",`<br>Stamina Cost: ${e}$&`),n)}(t,n),_(t,n)}function M(){c('#buff-outer label[for^="skill-"]').forEach(F)}function G(t){const n=a("h1",r("players"))[0]
!function(t,n){return!t&&n}(n,t)?n&&o(n):setTimeout(G,100,t-1)}function O(){r("targetPlayers").value&&G(9)}function P(t){const n=function(t){const n=Math.floor(t/60),s=t%60
let e=v(n,"m")
return n>0&&s>0&&(e+=" "),e+=v(s,"s"),e}(t)
return`<span class="fshLime">On</span>&nbsp;<span class="fshBuffOn">(${n})</span>`}function I(t,n){const e=t[n]??0
return e?P(e):function(t){const n=s(`#buff-outer input[data-name="${t}"]`)
return n?`<span class="quickbuffActivate" data-buffid="${n.value}">Activate</span>`:'<span class="fshRed;">Off</span>'}(n)}function Q(t,n,s){e(I(t,n),s)}function z(t,n){return t[n.name]=n.duration,t}const J=t=>n=>n.name===t
function K(t,n,s){const a=function(t,n){const s=t.find(J(n))
return s?.value??0}(t,n)
let i="fshLime"
a<100&&(i="fshRed"),e(`<span class="${i}">${a}%</span>`,s)}function U(t){!function(t){if(!t?._enhancements)return
const n=t._enhancements
K(n,"Sustain",r("fshSus")),K(n,"Fury Caster",r("fshFur"))}(t),function(t){if(!t?._skills)return
const n=t._skills.reduce(z,{})
Q(n,"Guild Buffer",r("fshGB")),Q(n,"Buff Master",r("fshBM")),Q(n,"Extend",r("fshExt")),Q(n,"Reinforce",r("fshRI"))}(t)}function V(t){const n=r(`skill-${t}`)
n&&(n.checked=!0)}function W(){const t=u("blist")
t&&function(t){t.split(";").forEach(V)}(t)}let X=0
function Y(){X.length?(window.addPlayers([X.shift()]),setTimeout(Y,200)):setTimeout(O,200)}function Z(){const t=u("players")
t&&(X=S(t),Y())}async function tt(t){const n=t.target
if("quickbuffActivate"!==n.className)return
l("quickbuff","quickActivate")
!function(t,n){x(n)&&(t.className="fshLime",e("On",t))}(n,await T([window.self],[n.dataset.buffid]))}const nt=[]
function st(t){const n=c(`#${t} > p`)
n.sort(((t,n)=>t.children[0].dataset.name>n.children[0].dataset.name?1:-1))
const e=s(`#${t}`)
for(const t of n)e.appendChild(t)}function et(t){const n=s(`#block${t}`)
for(const s of nt[t])n.appendChild(s)}function at(t){for(let n=1;n<=3;n++)t?st(`block${n}`):et(n)}function it(t){h(D,t.target.checked),at(t.target.checked)}function ct(){!function(){for(let t=1;t<=3;t++){const n=`block${t}`
nt[t]=p(`#${n} > p`)}}()
const t=r("check-all")
q(t,R)
const n=s(".quickbuffSortCheckbox"),e=d(D)
n.checked=e,e&&at(e),b(n,"change",it)}function ft(){k(r("helperQBheader"),tt),k(r("players"),L)}async function rt(){if(m())return
const s=r("quickbuff")
if(!s)return
const e=t(window.self)
q(s.children[0],'<div id="helperQBheader"><table class="quickbuffTable"><thead><tr><th class="quickbuffTableHeader">Sustain</th><th class="quickbuffTableHeader">Fury Caster</th><th class="quickbuffTableHeader">Guild Buffer</th><th class="quickbuffTableHeader">Buff Master</th><th class="quickbuffTableHeader">Extend</th><th class="quickbuffTableHeader">Reinforce</th></tr></thead><tbody><tr><td id="fshSus" class="quickbuffTableDetail">&nbsp;</td><td id="fshFur" class="quickbuffTableDetail">&nbsp;</td><td id="fshGB"  class="quickbuffTableDetail">&nbsp;</td><td id="fshBM"  class="quickbuffTableDetail">&nbsp;</td><td id="fshExt" class="quickbuffTableDetail">&nbsp;</td><td id="fshRI"  class="quickbuffTableDetail">&nbsp;</td></tr></tbody></table></div>'),n([M,W,Z,ft,O,ct]),U(await e)}export{rt as default}
//# sourceMappingURL=quickBuff-c5416879.js.map