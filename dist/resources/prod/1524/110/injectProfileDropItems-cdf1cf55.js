import{j as o,ar as t,a4 as s,n as r,c as e,q as n,ae as a,b as i,v as m,aa as c,w as p,d5 as f}from"./calfSystem-929ac228.js"
import{M as d,d as u,g as j,c as l,e as h,i as y}from"./injectStoreItems-5afff96e.js"
import{c as b}from"./chunk-cd03a005.js"
import{c as g}from"./closestTable-53e346f6.js"
import{c as w}from"./closestTr-3ee5784f.js"
import{r as I}from"./removeRow-abdef42a.js"
import{e as k}from"./errorDialog-91872536.js"
import{e as v,s as D}from"./selfIdIs-79d0b707.js"
import{s as N}from"./simpleCheckbox-9dbdc695.js"
import"./dropItem-e5717657.js"
import"./dialog-9896baf4.js"
import"./dialogMsg-7c5fba89.js"
import"./isArray-09a53da7.js"
import"./sendItems-7af17c06.js"
import"./basicItem-932eb681.js"
import"./htmlResult-4cbe3787.js"
import"./InfoBoxFrom-1da644bf.js"
import"./each-bac91e63.js"
import"./doStatTotal-aca339cc.js"
import"./arrayFromRadioNodeList-d1de2c3d.js"
import"./daLoadInventory-7d3bc344.js"
import"./flattenItems-03659160.js"
import"./LinkButtonBracketed-7f4f1978.js"
import"./LinkButton-abc10b8a.js"
import"./batch-30d5e16a.js"
import"./isChecked-3968d2ec.js"
function x(){return o('[name="removeIndex[]"]:checked')}const E=o=>({id:t(o.parentNode.href,"folder_id"),name:s(o.parentNode.parentNode)})
async function B(o,t){const s=await u(o,t.map((o=>o.value)))
s?.s&&t.forEach(I)}function C(o){r("dropitems","Move to Folder"),b(30,x()).forEach(e(B,o.detail))}function $(o){j().forEach((t=>{t.checked=Boolean(o)}))}const F="ajaxifyDestroy",L="disableDestroyPrompts"
let S=0,A=1,M=0
async function R(o){const t=await l(o.map((o=>o.value)))
k(t),t.s&&o.forEach(I)}function T(o){o.returnValue&&S&&(o.preventDefault(),b(30,x()).forEach(R),r("dropitems","Destroy by AJAX"))}function _(){return r("dropitems","Destroy without prompts"),!0}function K(){window.confirmDestroy=A?_:M}function P(){S=!S,c(F,S)}function V(){A=!A,c(L,A),K()}const q=()=>v([[D(F),P],[D(L),V]])
const H=[function(){const t=o('#pCC img[src$="/folder.png"]')
if(0===t.length)return
const s=w(g(t[0]));(function(o,t){return new d({anchor:t.nextElementSibling,props:{folders:o},target:t.parentNode})})(t.map(E),s).$on("move",C)},y,function(){const o=n('input[type="submit"]')
o&&(!function(o){m(o.parentNode,`&nbsp;&nbsp;${N(F)}&nbsp;&nbsp;${N(L)}`),i(o.parentNode,"change",q())}(o),A=a(L),M=window.confirmDestroy,K(),S=a(F),i(document.forms[0],"submit",T),window.check=$)}]
function J(){!p()&&h()&&f(H)}export{J as default}
//# sourceMappingURL=injectProfileDropItems-cdf1cf55.js.map