import{C as e,W as t,x as o,$ as s,E as n,t as r,I as a,f as c,D as i,i as f,_ as l,y as m,bB as d}from"./calfSystem-fe0ebf32.js"
import{g as u,d as p,a as h,i as b}from"./injectStoreItems-462ce5fe.js"
import{S as j,i as g,s as v,e as x,t as y,a as _,b as C,c as E,d as I,f as k,g as D,h as S,l as N,n as $,j as w,r as A,k as M,m as T,o as B}from"./index-4e7b84b7.js"
import{c as J}from"./chunk-e04f591f.js"
import{c as R}from"./closestTable-e206f233.js"
import{c as F}from"./closestTr-35c47492.js"
import{m as V}from"./moveItem-cbfac6b8.js"
import{e as W}from"./errorDialog-f7744f6f.js"
import{b as X}from"./simpleCheckbox-a56939b2.js"
import"./daAjaxSendItemsToRecipient-2e5b1a0d.js"
import"./htmlResult-e09db9ad.js"
import"./getInventoryById-42f06822.js"
import"./getInventory-02df236e.js"
import"./cmdExport-fd555515.js"
import"./indexAjaxJson-a9fbc5f9.js"
import"./doStatTotal-fd9f8e0b.js"
import"./batch-0d4bdf85.js"
import"./closest-1ff01e01.js"
import"./dialog-bd85dd64.js"
import"./dialogMsg-eb4e9d8f.js"
import"./isChecked-36c474a7.js"
function q(e,t,o){const s=e.slice()
return s[7]=t[o],s}function z(e){let t,o,s,n=e[3](e[7])+""
return{c(){t=x("option"),o=y(n),t.__value=s=e[2](e[7]),t.value=t.__value},m(e,s){_(e,t,s),C(t,o)},p(e,r){1&r&&n!==(n=e[3](e[7])+"")&&E(o,n),1&r&&s!==(s=e[2](e[7]))&&(t.__value=s,t.value=t.__value)},d(e){e&&I(t)}}}function G(e){let t,o,s,n,r,a,c,i,f,l,m,d=e[0],u=[]
for(let t=0;t<d.length;t+=1)u[t]=z(q(e,d,t))
return{c(){t=x("tr"),o=x("td"),s=x("span"),s.textContent="Move selected items to:",n=k(),r=x("select")
for(let e=0;e<u.length;e+=1)u[e].c()
a=k(),c=x("span"),c.textContent=" ",i=k(),f=x("button"),f.textContent="Move",D(r,"class","customselect"),void 0===e[1]&&T((()=>e[5].call(r))),D(f,"class","custombutton"),D(f,"type","button"),D(o,"class","fshCenter")},m(d,p){_(d,t,p),C(t,o),C(o,s),C(o,n),C(o,r)
for(let e=0;e<u.length;e+=1)u[e].m(r,null)
S(r,e[1]),C(o,a),C(o,c),C(o,i),C(o,f),l||(m=[N(r,"change",e[5]),N(f,"click",e[4])],l=!0)},p(e,[t]){if(13&t){let o
for(d=e[0],o=0;o<d.length;o+=1){const s=q(e,d,o)
u[o]?u[o].p(s,t):(u[o]=z(s),u[o].c(),u[o].m(r,null))}for(;o<u.length;o+=1)u[o].d(1)
u.length=d.length}7&t&&S(r,e[1])},i:$,o:$,d(e){e&&I(t),w(u,e),l=!1,A(m)}}}function H(o,s,n){const r=M()
let a,{folders:c}=s
const i=e=>e.parentNode.href.match(/&folder_id=(-?\d+)/i)[1]
return o.$$set=e=>{"folders"in e&&n(0,c=e.folders)},[c,a,i,t=>e(t.parentNode.parentNode),function(){t("dropitems","Move to Folder"),r("move",a)},function(){a=B(this),n(1,a),n(2,i),n(0,c)}]}class K extends j{constructor(e){super(),g(this,e,H,G,v,{folders:0})}}function L(e,t){return V(t,e).then((()=>({r:t})))}function O(e,t){return o({cmd:"profile",subcmd:"sendtofolder",folder_id:e,folderItem:t})}function P(){return n('[name="removeIndex[]"]:checked')}function Q(e){const t=F(e)
t.nextElementSibling.remove(),t.remove()}async function U(e,t){(await function(e,t){return s(O,L,e,t)}(e,t.map((e=>e.value)))).s&&t.forEach(Q)}function Y(e){J(30,P()).forEach(r(U,e.detail))}function Z(e){u().forEach((t=>{t.checked=Boolean(e)}))}let ee
const te=e=>{p(e.map((e=>e.value))).then(W).then((t=>{t.s&&e.forEach(Q)}))},oe=e=>{e.returnValue&&ee&&(e.preventDefault(),J(30,P()).forEach(te),t("dropitems","Destroy by AJAX"))}
function se(){ee=!ee,l("ajaxifyDestroy",ee)}const ne=[function(){const e=n('#pCC img[src$="/folder.png"]')
if(0===e.length)return
const t=F(R(e[0]))
new K({anchor:t.nextElementSibling,props:{folders:e},target:t.parentNode}).$on("move",Y)},b,function(){(()=>{const e=i('input[type="submit"]')
f(e.parentNode,`&nbsp;&nbsp;${X("ajaxifyDestroy")}`),c(e.parentNode,"change",se)})(),ee=a("ajaxifyDestroy"),c(document.forms[0],"submit",oe),window.check=Z}]
function re(){!m()&&h()&&d(ne)}export default re
//# sourceMappingURL=injectProfileDropItems-e55ce3fb.js.map