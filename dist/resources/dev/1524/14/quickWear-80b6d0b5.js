import{k as t,u as n,f as a,B as e,a$ as r,P as s,bs as i,c as o,aH as c,c9 as d,i as f,ca as u,n as m,bC as h,j as l,F as p,Q as b,p as k,o as j,aI as $,a4 as g,a0 as L,A as y,t as w}from"./calfSystem-d96a3efd.js"
import"./toLowerCase-a0540d2c.js"
import{c as C}from"./createInput-2717f905.js"
import{c as E}from"./createLabel-30fdcb3b.js"
import{c as I}from"./createUl-78e0780b.js"
import"./isChecked-028fa109.js"
import{b as H}from"./simpleCheckbox-fb9f4a06.js"
import"./alpha-2978f86d.js"
import{c as S}from"./createTBody-f70881cb.js"
import{c as x}from"./createTable-13920811.js"
import"./dialogMsg-da77a98e.js"
import{p as A,s as N}from"./pubsub-dcfa18d6.js"
import"./errorDialog-70b04a3c.js"
import{j as v}from"./jConfirm-ad7882ae.js"
import"./dialog-62f3abd8.js"
import{u as Q,e as P}from"./useItem-d0013989.js"
import"./ajaxReturnCode-2df80530.js"
import"./daUseItem-4a0793b9.js"
import{m as W}from"./makeFolderSpan-6cb5741d.js"
import{e as q}from"./eventHandler5-d9435eb5.js"
import{s as U}from"./selfIdIs-1c8b1e34.js"
import{a as M}from"./stringSort-999874e6.js"
import{d as T}from"./daLoadInventory-86b82cbd.js"
import{h as B}from"./hasClasses-119bb799.js"
const F=(t,n)=>t+String(n)
function O(t,n,a){return C({checked:0===a,id:F(t,a),name:t,type:"radio"})}function _(t,n,e,i){const o=r({className:"ui-state-default ui-corner-top"})
return a(o,E({htmlFor:F(t,i),innerHTML:e})),0!==i&&s(o,"click",()=>{A(F(t,i),n[i])}),o}const D=()=>t({className:"ui-tabs-panel ui-corner-bottom"})
function R(r,s,i){const o=t({className:"fshTabSet ui-tabs ui-widget-content ui-corner-all"}),c=n(a,o)
s.map(n(O,i)).forEach(c)
const d=s.map(D)
A(F(i,0),d[0])
const f=function(t,e,r){const s=I({className:"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"})
return t.map(n(_,e,r)).forEach(n(a,s)),s}(s,i,d)
return A(i+"-header",f),a(o,f),d.forEach(c),e("",r),a(r,o),0}function G(t,n,a){const r=t.insertRow(-1)
a.dom=r
let s="fshEq ",i="fshUse "
a.t<9?s+="smallLink":s+="notLink",i+=function(t){return-1!==[10,12,15,16].indexOf(t.t)||"Zombie Coffin"===t.n?"smallLink":"notLink"}(a),e(`<td class="fshCenter"><span class="${s}" data-itemid="${a.a}">Wear</span>&nbsp;|&nbsp;<span class="${i}" data-itemid="${a.a}">Use/Ext</span></td><td><img src="${function(t){let n=c
return 13699===t.b?n+=`composing/${t.extra.design}_${t.extra.color}.png`:n+=`items/${t.b}.gif`,n}(a)}" class="tip-dynamic" data-tipped="fetchitem.php?item_id=${a.b}&amp;inv_id=${a.a}&amp;t=1&amp;p=${n}&amp;currentPlayerId=${n}" width="30" height="30" border="0"></td><td width="90%">&nbsp;${a.n}</td>`,r)}function Z(t){return W(String(t.id),t.name)}function z(t){return W("0","All")+t.r.map(Z).join("")}function J(t,a,e){e.items.sort(M).forEach(n(G,t,a))}function K(t){const e=x({width:"100%",innerHTML:`<thead><tr><th class="fshCenter" colspan="3">${z(t)}</th></tr><tr class="fshHeader"><th class="fshCenter" width="20%">Actions</th><th colspan="2">Items</th></tr></thead>`}),r=S()
return a(e,r),o.sortBy="n",o.sortAsc=!0,t.r.forEach(n(J,r,i())),e}function V(n){const e=K(n),r=t()
return a(r,e),r}function X(t,n){return`<a href="${h}${t}">${n}</a>`}function Y(t){return t[1].nicknameList.length>0}function tt(t){return`<tr><td>${t[0]}</td><td>${t[1].nicknameList.map(n(X,t[0])).join(" ")}</td><td>${t[1].count}</td><td></td><td></td></tr>`}function nt(t){return t.displayOnAH&&!t.found}function at(t){return X(t.searchname,t.nickname)}function et(t){return 0===t[1].nicknameList.length}function rt(t){return`<tr><td>${t[0]}</td><td></td><td>${t[1].count}</td><td></td><td></td></tr>`}function st(t,n){return`<table width="100%" cellspacing="2" cellpadding="2"><thead><tr><th colspan="5" class="fshCenter">Items from <a href="${u}">AH Quick Search</a> found in your inventory</th></tr><tr><th>Name</th><th>Nick Name</th><th>Inv Count</th><th>AH Min Price</th><th>AH BuyNow Price</th></tr></thead><tbody>${function(t){return m(t).filter(Y).map(tt).join("")}(t)}<tr><td colspan="5"><hr></td></tr><tr><td>Did not find:</td><td colspan="4">${function(t){return t.filter(nt).map(at).join(", ")}(n)}</td></tr><tr><td colspan="5"><hr></td></tr></tbody><thead><tr><th colspan="5" class="fshCenter">Items NOT from <a href="${u}">AH Quick Search</a> found in your inventory</td></thead><tbody>${function(t){return m(t).filter(et).map(rt).join("")}(t)}</tbody></table>`}function it(t,n,a){n===a.searchname&&(a.found=!0,t[n].nicknameList.indexOf(a.nickname)<0&&t[n].nicknameList.push(a.nickname))}function ot(t,a,e){const r=e.n
!function(t,n){t[n]?t[n].count+=1:t[n]={count:1,nicknameList:[]}}(t,r),a.forEach(n(it,t,r))}function ct(t,a,e){e.items.forEach(n(ot,t,a))}function dt(a){const e={},r=d("quickSearchList")||[]
a.r.forEach(n(ct,e,r))
const s=t()
return f(s,st(e,r)),s}let ft,ut
function mt(t,n,a){0===a.r&&e(`<span class="fastWorn">${n}</span>`,t.parentNode)}function ht(t,a,e){L("QuickWear","doAction - "+e),y("",t),t.classList.remove("smallLink"),t.classList.add("fshSpinner","fshSpin12"),a(t.dataset.itemid).then(n(mt,t,e))}function lt(t){ht(t,Q,"Used")}function pt(t){ft?lt(t):v("Use/Extract Item","Are you sure you want to use/extract the item?",n(lt,t))}function bt(t){ht(t,P,"Worn")}function kt(t,n,a){const e=a.dom
if("0"===t)e.classList.remove("fshHide")
else{const a=t!==n.toString()
w(e,a)}}function jt(t,a){const e=a.id
a.items.forEach(n(kt,t,e))}function $t(t){const a=t.dataset.folder
ut.r.forEach(n(jt,a))}function gt(){ft=!ft,g("disableQuickWearPrompts",ft)}function Lt(n){a(n,t({className:"qwPref",innerHTML:H("disableQuickWearPrompts")}))}function yt(t,n,e){a(e,t(n))}function wt(t,a){N("qwtab-header",Lt),N("qwtab0",n(yt,V,a)),N("qwtab1",n(yt,dt,a)),R(t,["Quick Wear / Use / Extract<br>Manager","Inventory Manager Counter<br>filtered by AH Quick Search"],"qwtab"),j(t,q([[n(B,["smallLink","fshEq"]),bt],[n(B,["smallLink","fshUse"]),pt],[n($,"fshFolder"),$t],[U("disableQuickWearPrompts"),gt]]))}function Ct(t,n){(function(t){return t&&t.s&&b(t.r)})(n)&&(ut=n,wt(t,n))}export default function(t){l()&&function(t){const a=t||k
a&&(f(a,"Getting item list from backpack..."),T().then(n(Ct,a)),ft=p("disableQuickWearPrompts"))}(t)}
//# sourceMappingURL=quickWear-80b6d0b5.js.map