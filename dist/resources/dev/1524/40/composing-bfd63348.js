import{r as e,B as t,t as n,aw as s,ad as o,a0 as a,aC as i,D as c,m as r,Q as l,X as m,i as p,aD as u,E as f,h as d,o as g,p as h,A as b,c as v,aE as C,C as S,a8 as E,j,I as k,z as N,K as x}from"./calfSystem-c464cb1d.js"
import{r as A,g as y}from"./rnd-576fc928.js"
import{p as $,s as B}from"./pubsub-bd8cf9a4.js"
import{c as I}from"./createInput-8ffbb09b.js"
import{c as L}from"./createTable-8b5b7f23.js"
import{g as q}from"./getArrayByClassName-fe0fed4e.js"
import{i as F}from"./insertElementAfter-edfc87ec.js"
import{i as T}from"./insertHtmlAfterEnd-7649ce17.js"
import{i as w}from"./insertElementBefore-6e80e0ff.js"
function P(e,n){t("",e.children[0]),e.children[0].classList.add("fshPot"),e.children[0].style.backgroundImage=`url(${s}composing/${y(1,11)}_${y(1,51)}.png)`,t(`Creating '<span class="fshBold">${n}</span>' Potion`,e.children[2]),t("",e.children[3])}function Q(e){const n=e.parentNode
n&&(t('<div class="fshScs">Success</div>',n),P(n.previousElementSibling.previousElementSibling,e[e.selectedIndex].text),0===o('[id|="composing-template"]:not(#composing-template-multi)').length&&a(i,!1))}function D(e,n){const s=e.parentNode
s&&n&&(n.error?t(`<div class="fshScs">${n.error}</div>`,s):Q(e))}function _(t){var s;(s=t.value,e({cache:!1,dataType:"json",data:{cmd:"composing",subcmd:"createajax",template_id:s,fshrnd:A()}})).then(n(D,t))}function z(e,n){n.id=`proc-${n.id}`,t("",e),e.classList.add("fshSpinner","fshSpinner12","fshComposingSpinner"),_(n),$("quickcreate")}function H(e,t){e.classList.add(`left-${t.toString()}`)}function K(e){H(e,o(".quickCreate .sendLink").length)}function M(e){const t=e.target,{templateId:n}=t.dataset
n&&function(e,t){m("composing","FastComposeButton")
const n=o('[id|="composing-template"]:not(#composing-template-multi)')
if(!(n.length<e.value))for(let s=0;s<e.value;s+=1)n[s].value=t,z(n[s].nextElementSibling.nextElementSibling,n[s])}(t,n)}function R(e,t,n,s){var o,a
return 0===s&&b(e[1],t.insertCell(-1)),d(t.insertCell(-1),(o=(s+1).toString(),a=e[0],I({className:"awesome orange",dataset:{templateId:a},type:"button",value:o}))),t}function X(e,t,s,o){return e.reduce(n(R,o),s.insertRow(-1)),s}function G(e){return[e.value,e.text]}function J(e,t,s){const o=function(e,t,s){const o=L({id:"fshFastCompose"})
return H(o,s),e.reduce(n(X,t,s),o)}(f("#composing-template-multi option").map(G),t,s)
d(e,o),g(h,M),B("quickcreate",n(K,o))}function O(e){m("composing","FastCompose"),p(e,"<br>")
const t=q("composing-potion-time",document),n=t.filter(u("ETA: n/a")).length
n>0?J(e,t,n):p(e,"No open slots!")}const U=/ETA:\s*(\d+)h\s*(\d+)m\s*(\d+)s/
function V(e){const t=U.exec(S(e))
if(t){return 1e3*(3600*t[1]+60*t[2]+Number(t[3]))+E}return 0}function W(e){a(i,e)}function Y(e){T(e,'<span class="quickCreate">[<span class="sendLink">Quick Create</span>]</span>')}function Z(e){const t=e.target.parentNode;(function(e){return"SPAN"===e.tagName&&"quickCreate"===e.className})(t)&&function(e){const t=e.previousElementSibling.previousElementSibling
t&&"none"!==t.value&&(z(e,t),m("composing","QuickCreate"))}(t)}function ee(){!function(){if(!v.enableComposingAlert)return
const e=q("composing-potion-time",document),t=Math.min(...e.map(V))
0===t?W(!0):(W(!1),a(C,t))}(),f("input[id^=create-]:not(#create-multi)",h).forEach(Y),g(h,Z),function(){if(k("moveComposingButtons")){const e=N("composing-error-dialog").previousElementSibling
e.setAttribute("style","text-align: right; padding: 0 38px 0 0")
const t=x("composing-level",h)[0].parentNode
w(e,t)}}(),function(){const e=c("#pCC div.centered")
T(e.children[1],' | <label for="fast-compose"><span class="sendLink">Fast Compose</span></label>')
const t=r({className:"centered"})
F(t,e)
const s=I({id:"fast-compose",type:"checkbox"})
F(s,e),l(s,"change",n(O,t))}()}function te(){j()&&h&&ee()}export default te
//# sourceMappingURL=composing-bfd63348.js.map
