import{a as C,c as I}from"./chunk-OLJQYYC4.js";import"./chunk-I6NDD24E.js";import"./chunk-D4ZHUJPU.js";import"./chunk-ZYQBDKRZ.js";import"./chunk-UXQ7LIQE.js";import{a as W}from"./chunk-WDTQFL7S.js";import"./chunk-TOWT3YEV.js";import"./chunk-YUG6M5AP.js";import"./chunk-THFC5ACO.js";import"./chunk-J3QWQND2.js";import{a as s}from"./chunk-LZFH3FIB.js";import{a as x}from"./chunk-7OBBQFM7.js";import"./chunk-UH3DQLEQ.js";import{a as v}from"./chunk-ADRJRS7A.js";import{a as g}from"./chunk-E2TRAGUE.js";import{a as m}from"./chunk-7GBB3QCV.js";import"./chunk-ZBKYZ2YU.js";import"./chunk-PMMDIPF5.js";import"./chunk-B6KP7GWD.js";import{a as E}from"./chunk-2DTQHJVU.js";import{a}from"./chunk-EWZCJZ6Z.js";import"./chunk-RF4C6CS3.js";import"./chunk-VSM6H66Z.js";import"./chunk-5KMEA72E.js";import"./chunk-6LZWMBZT.js";import{a as k}from"./chunk-NRKJIV3C.js";import"./chunk-BPYWQKVH.js";import"./chunk-ZF4YEV73.js";import"./chunk-SF3VAYKI.js";import"./chunk-WXOIGO4W.js";import{a as b}from"./chunk-DMR7FNIP.js";import{a as h}from"./chunk-BGM44O73.js";import"./chunk-R46VEJKN.js";import"./chunk-YHQWVU2C.js";import{a as y}from"./chunk-ZS6ZBPLM.js";import{a as N}from"./chunk-GWTCUF2Q.js";import"./chunk-RBCKIE7A.js";import"./chunk-M63EVJYL.js";import"./chunk-K4JWVECD.js";import{a as i}from"./chunk-7KD3BGAV.js";import"./chunk-PJBT7EBJ.js";import"./chunk-QMEA3FHH.js";import"./chunk-5QU22RJP.js";import"./chunk-UELYWXNW.js";import"./chunk-OENBM34F.js";import"./chunk-SWUMTTGA.js";import"./chunk-4JMWSEZ5.js";import"./chunk-IYBGVYMO.js";import"./chunk-ULXDH3QJ.js";function U(t,o){let e=t.srcData.findIndex(n=>n.a===o);e!==-1&&t.srcData.splice(e,1)}function A([t,o,e,n],r){if(r.r!==0){e.remove();return}U(t,n),e.classList.remove("fshSpinner"),E(`<span class="fastWorn">${o}</span>`,e.parentNode)}function w(t,o,e,n){y("profile",`fastAction - ${n}`);let{target:r}=o,d=r.parentNode.parentNode.children[0].dataset.inv;v("",r),r.blur(),r.className="fastAction fshBl fshSpinner fshSpinner12",e(d).then(i(A,[t,n,r,d]))}function p(t,o){s("fastWear",o.target)&&w(t,o,C,"Worn"),s("fastUse",o.target)&&w(t,o,I,"Used")}function B(t){return t?"fastUse":"fastWear"}function D(t){return t?"Use":"Wear"}function T(t,o){let e=s("backpackContextMenuUsable",o),n=g({className:"fastDiv",innerHTML:`<button class="fshBl fastAction ${B(e)}">${D(e)}</button>`});t.options.checkboxesEnabled&&m(n,o.parentNode.nextElementSibling.nextElementSibling),m(o.parentNode.parentNode,n)}function f(t){N(`#backpackTab_${t.type.toString()} .backpackContextMenuEquippable, #backpackTab_${t.type.toString()} .backpackContextMenuUsable`).forEach(i(T,t))}var c=[],S;function _(t){c.length>0&&c.forEach(o=>o(t))}function $(t){let o=t._showPage;t._showPage=function(n,r){!t.tabData||(o.call(t,n,r),_(t))},S=!0}function l(t,o){c.includes(o)||(S||$(t),b(o)&&c.push(o))}function u(){let t=a("backpack");t.className="fshBackpack",t.removeAttribute("style")}function L(t){u(),l(t,f),k(a("backpack_current")).length!==0&&x(3,f,[t]),h(a("backpackContainer"),i(p,t))}async function M(){let t=await W(a("backpackContainer"),"Backpack");t&&L(t)}export{M as default};
//# sourceMappingURL=fastWear-WR3M7GGT.js.map
