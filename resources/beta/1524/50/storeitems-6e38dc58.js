import{S as t,i as e,s,b as n,t as o,f as c,a as r,l,n as i,d as a,p as f,g as u,j as m,c as d,o as p,r as b}from"./index-c31cc1d2.js"
import{S as j,e as h,j as g,I as v,t as x,as as k}from"./calfSystem-617f9a5d.js"
import{b as y}from"./batch-4134d884.js"
import{c as S}from"./closestTr-bf59743f.js"
import{i as C,b as I,g as A,c as F}from"./injectStoreItems-c3efb4fd.js"
import{t as w}from"./toggleForce-a9d00c58.js"
import"./closest-06418423.js"
import"./daAjaxSendItemsToRecipient-d47f27f4.js"
import"./htmlResult-5a492fed.js"
import"./errorDialog-b76ba3fb.js"
import"./getInventoryById-c970cb7e.js"
import"./getInventory-b6eae9c2.js"
import"./cmdExport-39e5a4b7.js"
import"./indexAjaxJson-1f941a45.js"
import"./doStatTotal-0ef44207.js"
function $(t){let e,s,f,u
return{c(){e=n("button"),e.textContent="Check All",s=o(" "),c(e,"class","custombutton svelte-1recp8w"),c(e,"type","button")},m(n,o){r(n,e,o),r(n,s,o),f||(u=l(e,"click",t[0]),f=!0)},p:i,i:i,o:i,d(t){t&&a(e),t&&a(s),f=!1,u()}}}function E(t){const e=f()
return[function(){j("storeitems","Check All"),e("checkall")}]}class N extends t{constructor(t){super(),e(this,t,E,$,s,{})}}function T(t,e,s){const n=t.slice()
return n[6]=e[s][0],n[7]=e[s][1],n}function R(t){let e,s,i,f,d=t[7]+""
function p(){return t[4](t[6])}return{c(){e=n("button"),s=o(d),c(e,"type","button"),c(e,"class","svelte-1gvij2s")},m(t,n){r(t,e,n),u(e,s),i||(f=l(e,"click",p),i=!0)},p(e,n){t=e,1&n&&d!==(d=t[7]+"")&&m(s,d)},d(t){t&&a(e),i=!1,f()}}}function B(t){let e,s,o,f,m,j,g,v,x=h(t[0].folders),k=[]
for(let e=0;e<x.length;e+=1)k[e]=R(T(t,x,e))
return{c(){e=n("tr"),s=n("td"),o=n("button"),o.textContent="All",f=d(),m=n("button"),m.textContent="Main",j=d()
for(let t=0;t<k.length;t+=1)k[t].c()
c(o,"type","button"),c(o,"class","svelte-1gvij2s"),c(m,"type","button"),c(m,"class","svelte-1gvij2s"),c(s,"colspan","3"),c(e,"class","fshCenter")},m(n,c){r(n,e,c),u(e,s),u(s,o),u(s,f),u(s,m),u(s,j)
for(let t=0;t<k.length;t+=1)k[t].m(s,null)
g||(v=[l(o,"click",t[2]),l(m,"click",t[3])],g=!0)},p(t,[e]){if(3&e){let n
for(x=h(t[0].folders),n=0;n<x.length;n+=1){const o=T(t,x,n)
k[n]?k[n].p(o,e):(k[n]=R(o),k[n].c(),k[n].m(s,null))}for(;n<k.length;n+=1)k[n].d(1)
k.length=x.length}},i:i,o:i,d(t){t&&a(e),p(k,t),g=!1,b(v)}}}function D(t,e,s){const n=f()
let{inv:o={folders:{}}}=e
function c(t){j("storeitems","Filter Folder"),n("filter",t)}return t.$$set=t=>{"inv"in t&&s(0,o=t.inv)},[o,c,()=>c("-2"),()=>c("-1"),t=>c(t)]}class J extends t{constructor(t){super(),e(this,t,D,B,s,{inv:0})}}function M(t,e,s){s.checked=!1
const n=S(s),o=t.items[s.value].folder_id,c=-2!==e&&e!==o
w(n,c),w(n.nextElementSibling,c)}function _(t,e){y([5,3,A(),0,x(M,t,Number(e.detail))])}function q(){F().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function z(){g()&&v("enableFolderFilter")&&async function(){const t=await I()
if(!t||!t.folders)return
const e=document.forms[0]
new J({anchor:e,props:{inv:t},target:e.parentNode}).$on("filter",x(_,t))}(),function(){const t=k(document.forms[0].elements).filter((t=>"submit"===t.type))[0]
new N({anchor:t,target:t.parentNode}).$on("checkall",q)}(),C()}export default z
//# sourceMappingURL=storeitems-6e38dc58.js.map
