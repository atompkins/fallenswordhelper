import{a as t,$ as n,v as e,w as s,x as a,y as i,p as c,z as r,A as o,B as u,d as f,s as l,C as m,D as d,i as p,n as k,E as h,o as g,F as b,G as v,e as T,H as x,I as y,g as I}from"./calfSystem-BldO1y8X.js"
import{c as C}from"./createInput-vTQGUSPu.js"
import{c as L}from"./createLabel--DDZaGip.js"
function E(n){return t({cmd:"tempinv",subcmd:"takeitems",item:n})}function M(t){return s({cmd:"tempinv",subcmd:"takeitem",temp_id:t,ajax:1})}async function Q(t){return function(t){const n=t.filter((t=>0===t.r)),e=t.filter((t=>0!==t.r))
return n.length>0?{r:n.map((t=>({id:t.temp_id}))),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:t[0].m},s:!1}}(await e(t.map(M)))}function j(t,n){a(n,`<li class="fshNbrList">${t}</li>`)}let q=""
function w(t,n){return!t||(function(t){return!t.s&&q!==t.e.message}(t)&&(q=t.e.message,j(t.e.message,n)),!t.s||void 0)}function B(t,n,e){const s=L({id:t,className:"sendLink",htmlFor:"fshQuickTake",textContent:`Toggle ${n}`})
return o(s,e),s}function H(t,n){const e=n.children[0],{tipped:s}=e.dataset,{itemId:a,invId:i}=m(d,s)
return a&&i?(t[a]?t[a].invIds.push(i):t[a]={invIds:[i],tipped:s.replace(/&extra=\d/,""),src:e.src},t):t}function N(t,n){const e=n[1],s=k(),a=k({innerHTML:`<img src="${e.src}" class="tip-dynamic" data-tipped="${e.tipped}">`})
p(s,a)
const i=k({innerHTML:`<button class="fshBl fshBls" data-id="${n[0]}">Take All ${e.invIds.length}</button>`})
p(s,i),p(t,s)}function S(t){!function(t){const n=$(`#temp-inv-img-${t}`).qtip("api")
n&&n.destroy(!0)}(t.id)
const n=I(`temp-inv-${t.id}`)
n&&T("",n)}function z(t,n){w(n,t)||y(n.r)&&function(t,n){n.r.forEach(S),j(`${n.r.length.toString()} item(s) taken.`,t)}(t,n)}async function A(t,e){var s
z(t,await(s=e,n(E,Q,s)))}function F(t,n,e){v("fshBls",e.target)&&function(t,n,e){l("mailbox","takeSimilar")
const s=e.dataset.id,{invIds:a}=t[s]
T(`taking all ${a.length} items`,e.parentNode),x(40,a).forEach(f(A,n))}(t,n,e.target)}function G(t,n,e){const s=k({className:"fshTakeGrid"})
!function(t,n){b(n).forEach(f(N,t))}(s,t),p(n,s),g(s,f(F,t,e))}function O(t){const n=k({id:"quickTake",innerHTML:'<div class="fshCenter"><br><font size="3"><b>Quick Take</b></font><br><br>Select which item to take all similar items from your Mailbox.</div><div></div>'}),{takeContainer:e,takeResult:s}=function(){const t=k(),n=h()
return p(t,n),{takeContainer:t,takeResult:n}}()
G(t,n,s),p(n,k()),p(n,e),p(c(),n)}function R(t,n){l("mailbox","toggleQuickTake"),B("qtOn","Mailbox",n)
O(t.reduce(H,{}))}function _(){if(i()||!c())return
const t=r("a",c())
if(0===t.length)return
const n=c().lastElementChild
!function(t,n){const e=C({id:"fshQuickTake",type:"checkbox"})
o(e,n),u(e,"change",f(R,t,n))}(t,n),B("qtOff","Quick Take",n)}export{_ as default}
//# sourceMappingURL=mailbox-D7Tr4Bte.js.map
