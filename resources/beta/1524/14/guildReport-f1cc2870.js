import{o as t,bV as n,b as e,p as o,u as a,ci as r,B as i,aE as s,$ as c,E as u,bn as p,k as l,au as f,P as d,f as m,q as b,a as g,n as h,A as y,i as M,ag as j,aO as L,a9 as C,ai as $,e as x,aw as I,C as v,c as H,a8 as N,W as R,M as k,bm as T,bq as S,y as w}from"./calfSystem-371c414c.js"
import"./numberIsNaN-987e3021.js"
import"./toLowerCase-08111a24.js"
import{c as E}from"./createInput-d378f9d2.js"
import{t as A}from"./testRange-9d5f44cf.js"
import{o as B}from"./onlineDot-b47e695a.js"
import{b as W}from"./batch-96f40a5d.js"
import{i as D}from"./isChecked-b460a43d.js"
import{a as F}from"./alpha-9e71f7c7.js"
import{c as G}from"./createTable-ad174066.js"
import"./dialogMsg-33712041.js"
import"./errorDialog-c2f7094e.js"
import"./dialog-3e1a0a78.js"
import{e as P}from"./useItem-45a468ee.js"
import"./ajaxReturnCode-946f7e47.js"
import"./daUseItem-a54df2cc.js"
import{c as _}from"./createTr-cd20de35.js"
import{e as q}from"./eventHandler5-dd4a434f.js"
import{s as J}from"./selfIdIs-04b7ffe8.js"
import{c as O}from"./createSelect-a41538c7.js"
import{g as Q}from"./getMembrList-4a06ce80.js"
import"./guildInventory-7d78580c.js"
import{a as U}from"./queue-ea184f03.js"
function V(t){return t.match(/&id=(\d+)/)[1]}const Y=`<span class="guildReportSpinner" style="background-image: url('${s}ui/misc/spinner.gif');"></span>`
function z(t){i('<span class="fastWorn">Worn</span>',t)}function K(t){return t.match(u)[1]}function X(t,n,e){1!==e.r&&("recall"===t?function(t){i('<span class="fastWorn">You successfully recalled the item</span>',t)}(n):z(n))}function Z(t,n,e,o){U(V(n),K(n),e,o).then(a(X,o,t))}function tt(t,n,e){Z(t,n,e,"recall")}const nt=[["fast-bp",function(t,n){c("GuildReport","Fast BP"),tt(t,n,0)}],["fast-gs",function(t,n){c("GuildReport","Fast GS"),tt(t,n,1)}],["fast-wear",function(t,n){c("GuildReport","Fast Wear"),Number(K(n))===p()?P(V(n)).then(a(z,t)):Z(t,n,0,"wear")}]]
const et=[["sendLink",function(t){const n=t.parentNode.parentNode
if(!n)return
const{href:e}=n.children[0]
e&&(nt.find(a(r,t))[1](n,e),i(Y,n))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}]]
const ot='<span class="sendLink fast-bp">Fast BP</span> | ',at='<span class="sendLink fast-gs">Fast GS</span>',rt=' | <span class="sendLink fast-wear">Fast Wear</span>'
let it,st,ct,ut,pt
const lt=[[!0,!0,function(){return ut||(ut=l({innerHTML:ot+at+rt})),ut.cloneNode(!0)}],[!0,!1,function(){return pt||(pt=l({innerHTML:at+rt})),pt.cloneNode(!0)}],[!1,!0,function(){return ct||(ct=l({innerHTML:ot+at})),ct.cloneNode(!0)}],[!1,!1,function(){return st||(st=l({innerHTML:at})),st.cloneNode(!0)}]]
function ft(t,n,e){return e[0]===t&&e[1]===n}function dt(t){const n=!(it||(it=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),it).test(t.previousElementSibling.innerHTML),e=2===t.children.length
return lt.find(a(ft,n,e))[2]()}function mt(t,n,e){return n[e]=t[e],n}function bt(t){return f(t).sort(F).reduce(a(mt,t),{})}let gt,ht,yt
function Mt(t,n,e,o){return"Ignore"!==t.myMap[o]&&(e[t.myMap[o]]?e[t.myMap[o]]+=n[o]:e[t.myMap[o]]=n[o]),e}function jt(t,n,e,o){return`${e}<tr><td>${o}</td><td style="background-color: ${function(t){const n=Math.max(Math.min(t,100),0)
let e,o
return n<50?(e=255,o=Math.round(5.1*n)):(o=255,e=Math.round(510-5.1*n)),"#"+("000000"+(65536*e+256*o+0).toString(16)).slice(-6)}((n[o]-t.minpoint)/(t.maxpoint-t.minpoint)*100)};">${n[o].toString()}</td></tr>`}function Lt(t,n){c("potReport","drawInventory")
const e=bt(f(n).reduce(a(Mt,t,n),{}))
i(`<table><tbody>${f(e).reduce(a(jt,t,e),"")}</tbody></table>`,gt)}function Ct(){const t=_()
return t.insertCell(-1),t.insertCell(-1),t}function $t(t){const n=b("option",e)
var e
return n.value=t,n.text=t,n}function xt(t,n){m(t,$t(n[0]))}function It(t){if(!yt){yt=Ct()
const n=function(t){const n=O({className:"tip-static",dataset:{tipped:'Set to "Ignore" to exclude from report'}})
return m(n,$t("Ignore")),t.forEach(a(xt,n)),n}(t)
m(yt.cells[1],n)}return yt.cloneNode(!0)}function vt(t,n,e,o){const a=It(o)
y(n[0],a.cells[0])
const r=a.cells[1].children[0];[r.name,r.value]=n,m(t.tBodies[0],a)}function Ht(t,n,e){const o=E({id:n,type:"button",value:e})
m(t.cells[1],o)}function Nt(t){const n=Ct()
return Ht(n,"fshIgnoreAll","Ignore All"),M(n.cells[1],"&nbsp;"),Ht(n,"fshReset","Reset"),m(t.tBodies[0],n),0}function Rt(t){c("potReport","drawMapping")
const n=G({innerHTML:"<tbody></tbody>"})
ht.replaceChild(n,ht.children[0]),g(3,W,[[5,3,h(t.myMap),0,a(vt,n),a(Nt,n)]])}const kt="fsh_potMap",Tt={pottab1:!1,pottab2:!1,pottab3:!1,myMap:{},minpoint:12,maxpoint:20}
function St(t,n){t.myMap[n]||(t.myMap[n]=n)}function wt(t,n,e){"SELECT"===e.target.tagName&&(t.myMap[e.target.name]=e.target.value,$(kt,t),Lt(t,n))}function Et(t,n,e){return n[e]=t?"Ignore":e,n}function At(t,n,e){!function(t,n,e){t.myMap=f(n).reduce(a(Et,e),{})}(t,n,e),$(kt,t),Rt(t),Lt(t,n)}function Bt(t){return/^pottab\d$/.test(t.id)}function Wt(t,n){t[n.id]=n.checked,$(kt,t)}function Dt(t,n,e){const o=e.target.id,a=A(e.target.value,0,999)
a&&(t[o]=a,$(kt,t),Lt(t,n))}function Ft(n,e,o){x(o,"change",a(wt,n,e)),t(o,q(function(t,n){return[[J("fshIgnoreAll"),a(At,t,n,!0)],[J("fshReset"),a(At,t,n,null)],[Bt,a(Wt,t)]]}(n,e))),x(o,"input",a(Dt,n,e))}function Gt(t,n){const e=function(t){return l({id:"potReport",innerHTML:`<input id="pottab1" type="checkbox"${D(t.pottab1)}><label for="pottab1">Composed Potion Inventory</label><input id="pottab2" type="checkbox"${D(t.pottab2)}><label for="pottab2">Mapping</label><input id="pottab3" type="checkbox"${D(t.pottab3)}><label for="pottab3">Thresholds</label>`})}(t),r=l({id:"panels"})
m(e,r),function(t,n,e){gt=l({id:"inventory"}),t.pottab1?Lt(t,n):d(e.parentNode.children[0],"change",a(Lt,t,n)),m(e,gt)}(t,n,r),function(t,n){ht=l({id:"mapping",innerHTML:"<p></p>"}),t.pottab2?Rt(t):d(n.parentNode.children[2],"change",a(Rt,t)),m(n,ht)}(t,r),function(t,n){const e=l({id:"thresholds",innerHTML:`Min:<input id="minpoint" type="number" value="${t.minpoint}" min="0" max="999">Max:<input id="maxpoint" type="number" value="${t.maxpoint}" min="0" max="999">`})
m(n,e)}(t,r),m(function(t,n){const e=o.lastElementChild.insertRow(2).insertCell(-1)
return Ft(t,n,e),e}(t,n),e)}function Pt(t,n){const e=L({},Tt)
L(e,C(n,{})),e.myMap=function(t,n){return f(n).forEach(a(St,t)),bt(t.myMap)}(e,t),$(kt,e),Gt(e,t)}function _t(t){j(kt).then(a(Pt,t))}let qt,Jt,Ot,Qt,Ut
function Vt(t,n){const e=Jt[n]
m(e,t)}function Yt(t){qt.push(dt(t)),function(t){if(t.endsWith(" (Potion)")){const n=t.slice(0,-9)
Ot[n]=(Ot[n]||0)+1}}(t.previousElementSibling.innerHTML)}function zt(){W([5,3,qt,0,Vt,a(_t,Ot)])}function Kt(){Jt=I("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),Ot={},qt=[],W([5,3,Jt,0,Yt,zt])}function Xt(t){const n=v(t)
H.membrList[n]&&i(function(t){return`${B({last_login:H.membrList[t].last_login})}<a href="${N}${H.membrList[t].id}">${t}</a> [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(n),t)}function Zt(){const t=I('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
W([5,3,t,0,Xt])}function tn(t){t.children[0].hasAttribute("bgcolor")&&(Ut=S(Qt,t.children[0].children[0])),Ut||(t.className="fshHide")}function nn(){if(Qt=R("user"),!Qt)return
if(!k('#pCC table table td[bgcolor="#DAA534"] b').some(T(Qt)))return
const t=I("#pCC table table tr")
W([5,2,t,0,tn])}function en(){g(3,Zt)}export default function(){w()||(Q(!1).then(en),g(2,nn),g(3,Kt),t(e("table",o)[1],n(et)))}
//# sourceMappingURL=guildReport-f1cc2870.js.map