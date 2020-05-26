import{k as t,u as n,f as a,B as e,a_ as r,P as s,bn as i,c as o,aE as c,c5 as f,i as d,c6 as m,n as u,bx as h,j as l,F as p,p as b,o as k,aF as j,a3 as $,$ as g,A as L,t as y}from"./calfSystem-371c414c.js"
import{i as w}from"./isArray-f2e9e1ad.js"
import"./toLowerCase-08111a24.js"
import{c as E}from"./createInput-d378f9d2.js"
import{c as C}from"./createLabel-146da34f.js"
import{c as x}from"./createUl-49043902.js"
import"./isChecked-b460a43d.js"
import{b as A}from"./simpleCheckbox-5ce6e544.js"
import"./alpha-9e71f7c7.js"
import{c as I}from"./createTBody-51b8edc4.js"
import{c as S}from"./createTable-ad174066.js"
import"./dialogMsg-33712041.js"
import{p as H,s as N}from"./pubsub-7b968f7e.js"
import"./errorDialog-c2f7094e.js"
import{j as v}from"./jConfirm-4672f8e0.js"
import"./dialog-3e1a0a78.js"
import{u as P,e as Q}from"./useItem-45a468ee.js"
import"./ajaxReturnCode-946f7e47.js"
import"./daUseItem-a54df2cc.js"
import{m as W}from"./makeFolderSpan-bdfb16a2.js"
import{e as q}from"./eventHandler5-dd4a434f.js"
import{s as U}from"./selfIdIs-04b7ffe8.js"
import{a as M}from"./stringSort-bd71fb27.js"
import{d as T}from"./daLoadInventory-aec24e1d.js"
import{h as F}from"./hasClasses-92aa92b4.js"
const B=(t,n)=>t+String(n)
function O(t,n,a){return E({checked:0===a,id:B(t,a),name:t,type:"radio"})}function _(t,n,e,i){const o=r({className:"ui-state-default ui-corner-top"})
return a(o,C({htmlFor:B(t,i),innerHTML:e})),0!==i&&s(o,"click",()=>{H(B(t,i),n[i])}),o}const D=()=>t({className:"ui-tabs-panel ui-corner-bottom"})
function R(r,s,i){const o=t({className:"fshTabSet ui-tabs ui-widget-content ui-corner-all"}),c=n(a,o)
s.map(n(O,i)).forEach(c)
const f=s.map(D)
H(B(i,0),f[0])
const d=function(t,e,r){const s=x({className:"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"})
return t.map(n(_,e,r)).forEach(n(a,s)),s}(s,i,f)
return H(i+"-header",d),a(o,d),f.forEach(c),e("",r),a(r,o),0}function G(t,n,a){const r=t.insertRow(-1)
a.dom=r
let s="fshEq ",i="fshUse "
a.t<9?s+="smallLink":s+="notLink",i+=function(t){return-1!==[10,12,15,16].indexOf(t.t)||"Zombie Coffin"===t.n?"smallLink":"notLink"}(a),e(`<td class="fshCenter"><span class="${s}" data-itemid="${a.a}">Wear</span>&nbsp;|&nbsp;<span class="${i}" data-itemid="${a.a}">Use/Ext</span></td><td><img src="${function(t){let n=c
return 13699===t.b?n+=`composing/${t.extra.design}_${t.extra.color}.png`:n+=`items/${t.b}.gif`,n}(a)}" class="tip-dynamic" data-tipped="fetchitem.php?item_id=${a.b}&amp;inv_id=${a.a}&amp;t=1&amp;p=${n}&amp;currentPlayerId=${n}" width="30" height="30" border="0"></td><td width="90%">&nbsp;${a.n}</td>`,r)}function Z(t){return W(String(t.id),t.name)}function z(t){return W("0","All")+t.r.map(Z).join("")}function J(t,a,e){e.items.sort(M).forEach(n(G,t,a))}function K(t){const e=S({width:"100%",innerHTML:`<thead><tr><th class="fshCenter" colspan="3">${z(t)}</th></tr><tr class="fshHeader"><th class="fshCenter" width="20%">Actions</th><th colspan="2">Items</th></tr></thead>`}),r=I()
return a(e,r),o.sortBy="n",o.sortAsc=!0,t.r.forEach(n(J,r,i())),e}function V(n){const e=K(n),r=t()
return a(r,e),r}function X(t,n){return`<a href="${h}${t}">${n}</a>`}function Y(t){return t[1].nicknameList.length>0}function tt(t){return`<tr><td>${t[0]}</td><td>${t[1].nicknameList.map(n(X,t[0])).join(" ")}</td><td>${t[1].count}</td><td></td><td></td></tr>`}function nt(t){return t.displayOnAH&&!t.found}function at(t){return X(t.searchname,t.nickname)}function et(t){return 0===t[1].nicknameList.length}function rt(t){return`<tr><td>${t[0]}</td><td></td><td>${t[1].count}</td><td></td><td></td></tr>`}function st(t,n){return`<table width="100%" cellspacing="2" cellpadding="2"><thead><tr><th colspan="5" class="fshCenter">Items from <a href="${m}">AH Quick Search</a> found in your inventory</th></tr><tr><th>Name</th><th>Nick Name</th><th>Inv Count</th><th>AH Min Price</th><th>AH BuyNow Price</th></tr></thead><tbody>${function(t){return u(t).filter(Y).map(tt).join("")}(t)}<tr><td colspan="5"><hr></td></tr><tr><td>Did not find:</td><td colspan="4">${function(t){return t.filter(nt).map(at).join(", ")}(n)}</td></tr><tr><td colspan="5"><hr></td></tr></tbody><thead><tr><th colspan="5" class="fshCenter">Items NOT from <a href="${m}">AH Quick Search</a> found in your inventory</td></thead><tbody>${function(t){return u(t).filter(et).map(rt).join("")}(t)}</tbody></table>`}function it(t,n,a){n===a.searchname&&(a.found=!0,t[n].nicknameList.indexOf(a.nickname)<0&&t[n].nicknameList.push(a.nickname))}function ot(t,a,e){const r=e.n
!function(t,n){t[n]?t[n].count+=1:t[n]={count:1,nicknameList:[]}}(t,r),a.forEach(n(it,t,r))}function ct(t,a,e){e.items.forEach(n(ot,t,a))}function ft(a){const e={},r=f("quickSearchList")||[]
a.r.forEach(n(ct,e,r))
const s=t()
return d(s,st(e,r)),s}let dt,mt
function ut(t,n,a){0===a.r&&e(`<span class="fastWorn">${n}</span>`,t.parentNode)}function ht(t,a,e){g("QuickWear","doAction - "+e),L("",t),t.classList.remove("smallLink"),t.classList.add("fshSpinner","fshSpin12"),a(t.dataset.itemid).then(n(ut,t,e))}function lt(t){ht(t,P,"Used")}function pt(t){dt?lt(t):v("Use/Extract Item","Are you sure you want to use/extract the item?",n(lt,t))}function bt(t){ht(t,Q,"Worn")}function kt(t,n,a){const e=a.dom
if("0"===t)e.classList.remove("fshHide")
else{const a=t!==n.toString()
y(e,a)}}function jt(t,a){const e=a.id
a.items.forEach(n(kt,t,e))}function $t(t){const a=t.dataset.folder
mt.r.forEach(n(jt,a))}function gt(){dt=!dt,$("disableQuickWearPrompts",dt)}function Lt(n){a(n,t({className:"qwPref",innerHTML:A("disableQuickWearPrompts")}))}function yt(t,n,e){a(e,t(n))}function wt(t,a){N("qwtab-header",Lt),N("qwtab0",n(yt,V,a)),N("qwtab1",n(yt,ft,a)),R(t,["Quick Wear / Use / Extract<br>Manager","Inventory Manager Counter<br>filtered by AH Quick Search"],"qwtab"),k(t,q([[n(F,["smallLink","fshEq"]),bt],[n(F,["smallLink","fshUse"]),pt],[n(j,"fshFolder"),$t],[U("disableQuickWearPrompts"),gt]]))}function Et(t,n){(function(t){return t&&t.s&&w(t.r)})(n)&&(mt=n,wt(t,n))}export default function(t){l()&&function(t){const a=t||b
a&&(d(a,"Getting item list from backpack..."),T().then(n(Et,a)),dt=p("disableQuickWearPrompts"))}(t)}
//# sourceMappingURL=quickWear-bf5961f2.js.map