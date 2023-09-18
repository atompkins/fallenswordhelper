import{g as t}from"./getMembrList-d370ab65.js"
import{r as s,o as n,cT as e,av as o,p as a,c as r,ao as i,s as l,n as c,aJ as u,cU as p,aF as f,l as m,J as d,i as b,bP as g,cV as h,a4 as j,ac as L,cq as y,a6 as N,j as R,bU as w,cr as S,w as k,bJ as H,aN as M}from"./calfSystem-929ac228.js"
import{e as C}from"./useItem-6c8e8609.js"
import{a as F}from"./queue-c66c6bd0.js"
import{c as B}from"./closestTr-3ee5784f.js"
import{b as x}from"./batch-30d5e16a.js"
import{c as G}from"./createButton-5ae9113e.js"
import{c as A}from"./createSpan-6761e587.js"
import{c as T}from"./closestTd-a2732352.js"
import{o as v}from"./onlineDot-2726d9a2.js"
import"./guildMembers-ec6b013f.js"
import"./isArray-09a53da7.js"
import"./now-6f22aec9.js"
import"./idb-8fd6b5d1.js"
import"./dialog-9896baf4.js"
import"./dialogMsg-7c5fba89.js"
import"./daUseItem-fb5310a4.js"
import"./errorDialog-91872536.js"
import"./guildInventory-3f94b7aa.js"
import"./guild-5e30924d.js"
import"./htmlResult-4cbe3787.js"
import"./InfoBoxFrom-1da644bf.js"
import"./backpackOk-eb8861c8.js"
import"./takeItem-32db43bd.js"
function E(t){return s(/&id=(?<id>\d+)/,t)}const D=`<span class="guildReportSpinner" style="background-image: url('${u}ui/misc/spinner.gif');"></span>`
function P(t){l('<span class="fastWorn">Worn</span>',t)}function I(t,s,n){1!==n.r&&("recall"===t?function(t){l('<span class="fastWorn">You successfully recalled the item</span>',t)}(s):P(s))}async function W(t,n,e,o){I(o,t,await F(E(n),s(p,n),e,o))}function $(t,s,n){W(t,s,n,"recall")}const _=[["fast-bp",function(t,s){c("GuildReport","Fast BP"),$(t,s,0)}],["fast-gs",function(t,s){c("GuildReport","Fast GS"),$(t,s,1)}],["fast-wear",async function(t,n){c("GuildReport","Fast Wear"),Number(s(p,n))===f()?(await C(E(n)),P(t)):W(t,n,0,"wear")}]]
const J=[["sendLink",function(t){const s=t.parentNode.parentNode
if(!s)return
const[{href:n}]=s.children
n&&(_.find(r(i,t))[1](s,n),l(D,s))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}],["fshBl",function(t){c("GuildReport","Collapsible")
let s=B(t).nextElementSibling
const n="fshHide"===s.className?"":"fshHide"
for(;s&&!s.children[0].hasAttribute("bgcolor");)s.className=n,s=s.nextElementSibling}]]
const q='<span class="sendLink fast-bp">Fast BP</span> | ',U='<span class="sendLink fast-gs">Fast GS</span>',O=' | <span class="sendLink fast-wear">Fast Wear</span>'
let Q,X,V,Y,z
const K=[[!0,!0,function(){return Y||(Y=m({innerHTML:q+U+O})),Y.cloneNode(!0)}],[!0,!1,function(){return z||(z=m({innerHTML:U+O})),z.cloneNode(!0)}],[!1,!0,function(){return V||(V=m({innerHTML:q+U})),V.cloneNode(!0)}],[!1,!1,function(){return X||(X=m({innerHTML:U})),X.cloneNode(!0)}]]
function Z(t,s,n){return n[0]===t&&n[1]===s}function tt(t){const s=!(Q||(Q=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),Q).test(t.previousElementSibling.innerHTML),n=2===t.children.length
return K.find(r(Z,s,n))[2]()}let st=null,nt=[]
function et(t,s){const n=st[s]
b(n,t)}function ot(t){nt.push(tt(t))}function at(){const t=a().children?.[0]?.rows?.[0]?.cells?.[0]
if(t){t.classList.add("fshRelative")
const s=function(){const t=G({className:"fshBl pot-report-button",textContent:"Pot Report"})
return n(t,(()=>{c("GuildReport","Pot Report Moved"),h()})),t}(),e=A({className:"pot-report-moved",textContent:" moved to Helper Menu"})
g(e,s),b(t,e)}}function rt(){x([3,nt,0,et,at])}function it(){a()&&(st=d("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),nt=[],x([3,st,0,ot,rt]))}function lt(t){const s=j(t)
L.membrList?.[s]&&l(function(t){return`${v({last_login:L.membrList[t].last_login})}${y(L.membrList[t].id,t)} [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(s),t),l('<span class="fshFloatRight fshXSmall">[ <button class="fshBl fshBls" type="button">X</button> ]</span>',T(t).nextElementSibling)}function ct(){const t=d('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
x([3,t,0,lt])}let ut=0,pt=0
function ft(t){t.children[0].hasAttribute("bgcolor")&&(pt=S(ut,t.children[0].children[0])),pt||(t.className="fshHide")}function mt(){if(ut=N("user"),!ut)return
if(!R('#pCC table table td[bgcolor="#DAA534"] b').some(w(ut)))return
const t=d("#pCC table table tr")
x([2,t,0,ft])}function dt(){!k()&&H()&&(!async function(){await t(!1),M(3,ct)}(),M(2,mt),M(3,it),n(o("table",a())[1],e(J)))}export{dt as default}
//# sourceMappingURL=guildReport-add65383.js.map
