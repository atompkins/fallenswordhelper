import{q as e,z as t,s as n,aB as s,a7 as o,W as a,bI as i,M as c,k as r,L as l,S as m,i as p,b0 as u,I as d,f,o as g,p as b,y as h,c as v,bJ as C,A as S,a2 as k,j as E,D as j,x,F as N}from"./calfSystem-dec5e071.js"
import{c as y}from"./createInput-6f4c3b04.js"
import{i as A}from"./insertElementBefore-1d764477.js"
import{c as I}from"./createTable-e5b9da81.js"
import{p as L,a as q}from"./pubsub-771b55c6.js"
import{g as B}from"./getArrayByClassName-82011e34.js"
import{r as F,g as $}from"./rnd-d817a7e0.js"
import{i as T}from"./insertHtmlAfterEnd-52e450d3.js"
import{i as P}from"./insertElementAfter-5bd77494.js"
function w(e,n){t("",e.children[0]),e.children[0].classList.add("fshPot"),e.children[0].style.backgroundImage=`url(${s}composing/${$(1,11)}_${$(1,51)}.png)`,t(`Creating '<span class="fshBold">${n}</span>' Potion`,e.children[2]),t("",e.children[3])}function M(e){const n=e.parentNode
n&&(t('<div class="fshScs">Success</div>',n),w(n.previousElementSibling.previousElementSibling,e[e.selectedIndex].text),0===o('[id|="composing-template"]:not(#composing-template-multi)').length&&a(i,!1))}function Q(e,n){const s=e.parentNode
s&&(n.error?t(`<div class="fshScs">${n.error}</div>`,s):M(e))}function _(t){var s;(s=t.value,e({cache:!1,dataType:"json",data:{cmd:"composing",subcmd:"createajax",template_id:s,fshrnd:F()}})).then(n(Q,t))}function z(e,n){t("",e),e.classList.add("fshSpinner","fshSpinner12","fshComposingSpinner"),_(n),L("quickcreate")}function D(e,t){e.classList.add("left-"+t.toString())}function H(e){D(e,o(".quickCreate .sendLink").length)}function J(e){const t=e.target,{templateId:n}=t.dataset
n&&function(e,t){m("composing","FastComposeButton")
const n=o('[id|="composing-template"]:not(#composing-template-multi)')
if(!(n.length<e.value))for(let s=0;s<e.value;s+=1)n[s].value=t,z(n[s].nextElementSibling.nextElementSibling,n[s])}(t,n)}function R(e,t,n,s){var o,a
return 0===s&&h(e[1],t.insertCell(-1)),f(t.insertCell(-1),(o=(s+1).toString(),a=e[0],y({className:"awesome orange",dataset:{templateId:a},type:"button",value:o}))),t}function W(e,t,s,o){return e.reduce(n(R,o),s.insertRow(-1)),s}function G(e){return[e.value,e.text]}function K(e,t,s){const o=function(e,t,s){const o=I({id:"fshFastCompose"})
return D(o,s),e.reduce(n(W,t,s),o)}(d("#composing-template-multi option").map(G),t,s)
f(e,o),g(b,J),q("quickcreate",n(H,o))}function O(e){m("composing","FastCompose"),p(e,"<br>")
const t=B("composing-potion-time",document),n=t.filter(u("ETA: n/a")).length
n>0?K(e,t,n):p(e,"No open slots!")}const U=/ETA:\s*(\d+)h\s*(\d+)m\s*(\d+)s/
function V(e,t){const n=U.exec(S(t))
if(n){const t=1e3*(3600*n[1]+60*n[2]+Number(n[3]))+k
return e.concat(t)}return e.concat(0)}function X(e){a(i,e)}function Y(e){T(e,'<span class="quickCreate">[<span class="sendLink">Quick Create</span>]</span>')}function Z(e){const t=e.target.parentNode;(function(e){return"SPAN"===e.tagName&&"quickCreate"===e.className})(t)&&function(e){const t=e.previousElementSibling.previousElementSibling
t&&"none"!==t.value&&(z(e,t),m("composing","QuickCreate"))}(t)}function ee(){!function(){if(!v.enableComposingAlert)return
const e=B("composing-potion-time",document).reduce(V,[]),t=Math.min.apply(null,e)
0===t?X(!0):(X(!1),a(C,t))}(),d("input[id^=create-]:not(#create-multi)",b).forEach(Y),g(b,Z),function(){if(j("moveComposingButtons")){const e=x("composing-error-dialog").previousElementSibling
e.setAttribute("style","text-align: right; padding: 0 38px 0 0")
const t=N("composing-level",b)[0].parentNode
A(e,t)}}(),function(){const e=c("#pCC div.centered")
T(e.children[1],' | <label for="fast-compose"><span class="sendLink">Fast Compose</span></label>')
const t=r({className:"centered"})
P(t,e)
const s=y({id:"fast-compose",type:"checkbox"})
P(s,e),l(s,"change",n(O,t))}()}export default function(){E()&&b&&ee()}
//# sourceMappingURL=composing-1a7813fe.js.map
