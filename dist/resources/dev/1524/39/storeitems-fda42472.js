import{S as t,i as e,s,e as n,t as o,g as c,a as r,l as a,n as i,d as l,k as f,b as d,c as m,f as u,j as p,r as b}from"./index-7b21bc0b.js"
import{X as j,e as g,j as h,I as v,t as k,N as x}from"./calfSystem-b31aba65.js"
import{b as y}from"./batch-4b6ac500.js"
import{c as I}from"./closestTr-51be90ef.js"
import{i as S,b as C,g as A,c as F}from"./injectStoreItems-baacba87.js"
import{t as w}from"./toggleForce-5182a27d.js"
import"./closest-97a04dcf.js"
import"./daAjaxSendItemsToRecipient-047e125a.js"
import"./sendItems-e1f25bc5.js"
import"./htmlResult-3c24ad63.js"
import"./errorDialog-e19553de.js"
import"./dialogMsg-a960ad1e.js"
import"./getInventoryById-cae61a80.js"
import"./getInventory-56961d1a.js"
import"./guildStore-288b0535.js"
import"./cmdExport-8d5cf03e.js"
import"./indexAjaxJson-0fdc3cdc.js"
import"./doStatTotal-b22ced68.js"
function N(t){let e,s,f,d
return{c(){e=n("button"),e.textContent="Check All",s=o(" "),c(e,"class","custombutton svelte-1recp8w"),c(e,"type","button")},m(n,o){r(n,e,o),r(n,s,o),f||(d=a(e,"click",t[0]),f=!0)},p:i,i:i,o:i,d(t){t&&l(e),t&&l(s),f=!1,d()}}}function $(t){const e=f()
return[function(){j("storeitems","Check All"),e("checkall")}]}class E extends t{constructor(t){super(),e(this,t,$,N,s,{})}}function T(t,e,s){const n=t.slice()
return n[6]=e[s][0],n[7]=e[s][1],n}function M(t){let e,s,i,f,u=t[7]+""
function p(){return t[4](t[6])}return{c(){e=n("button"),s=o(u),c(e,"type","button"),c(e,"class","svelte-1gvij2s")},m(t,n){r(t,e,n),d(e,s),i||(f=a(e,"click",p),i=!0)},p(e,n){t=e,1&n&&u!==(u=t[7]+"")&&m(s,u)},d(t){t&&l(e),i=!1,f()}}}function R(t){let e,s,o,f,m,j,h,v,k=g(t[0].folders),x=[]
for(let e=0;e<k.length;e+=1)x[e]=M(T(t,k,e))
return{c(){e=n("tr"),s=n("td"),o=n("button"),o.textContent="All",f=u(),m=n("button"),m.textContent="Main",j=u()
for(let t=0;t<x.length;t+=1)x[t].c()
c(o,"type","button"),c(o,"class","svelte-1gvij2s"),c(m,"type","button"),c(m,"class","svelte-1gvij2s"),c(s,"colspan","3"),c(e,"class","fshCenter")},m(n,c){r(n,e,c),d(e,s),d(s,o),d(s,f),d(s,m),d(s,j)
for(let t=0;t<x.length;t+=1)x[t].m(s,null)
h||(v=[a(o,"click",t[2]),a(m,"click",t[3])],h=!0)},p(t,[e]){if(3&e){let n
for(k=g(t[0].folders),n=0;n<k.length;n+=1){const o=T(t,k,n)
x[n]?x[n].p(o,e):(x[n]=M(o),x[n].c(),x[n].m(s,null))}for(;n<x.length;n+=1)x[n].d(1)
x.length=k.length}},i:i,o:i,d(t){t&&l(e),p(x,t),h=!1,b(v)}}}function B(t,e,s){const n=f()
let{inv:o={folders:{}}}=e
function c(t){j("storeitems","Filter Folder"),n("filter",t)}return t.$$set=t=>{"inv"in t&&s(0,o=t.inv)},[o,c,()=>c("-2"),()=>c("-1"),t=>c(t)]}class D extends t{constructor(t){super(),e(this,t,B,R,s,{inv:0})}}function J(t,e,s){s.checked=!1
const n=I(s),o=t.items[s.value].folder_id,c=-2!==e&&e!==o
w(n,c),w(n.nextElementSibling,c)}function X(t,e){y([5,3,A(),0,k(J,t,Number(e.detail))])}function _(){F().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function q(){h()&&v("enableFolderFilter")&&async function(){const t=await C()
if(!t||!t.folders)return
const e=document.forms[0]
new D({anchor:e,props:{inv:t},target:e.parentNode}).$on("filter",k(X,t))}(),function(){const t=x(document.forms[0].elements).filter((t=>"submit"===t.type))[0]
new E({anchor:t,target:t.parentNode}).$on("checkall",_)}(),S()}export default q
//# sourceMappingURL=storeitems-fda42472.js.map