import{a as w,c as C}from"./chunk-N6NM46I6.js";import"./chunk-UH2R3CLD.js";import"./chunk-KV7KVJON.js";import"./chunk-PAIJPPAP.js";import"./chunk-6346UB6L.js";import{a as W}from"./chunk-BNUY4FDA.js";import{a as i}from"./chunk-O5EDBO4Q.js";import{a as y}from"./chunk-K7XSORZB.js";import"./chunk-EVJH72OA.js";import"./chunk-DGBEEUA5.js";import"./chunk-6PQFRUHW.js";import"./chunk-Q5PEDYJB.js";import"./chunk-VJNUTBRD.js";import"./chunk-BDSEVGHU.js";import{a as v}from"./chunk-JYBW4OOJ.js";import{a as g}from"./chunk-XFPCR5GW.js";import"./chunk-4LUQSMNM.js";import{a as x}from"./chunk-6QEKDVOV.js";import{a as m}from"./chunk-B2YROL26.js";import"./chunk-UHGSE7LB.js";import"./chunk-K25CWRN6.js";import"./chunk-2ETOMIET.js";import{a as N}from"./chunk-4X57LHCN.js";import"./chunk-6QG6UGYA.js";import{a as E}from"./chunk-DYLMNQVQ.js";import{a}from"./chunk-JEN6RTKA.js";import"./chunk-FC2T2RFK.js";import"./chunk-ZRLD7TYA.js";import"./chunk-WJQ3A2NI.js";import"./chunk-EAEJ7O2I.js";import"./chunk-UPYTFADC.js";import{a as k}from"./chunk-F6AV4QWO.js";import"./chunk-C54IMWL7.js";import"./chunk-7XNCVM7C.js";import"./chunk-S5YTVKJ4.js";import"./chunk-7PPLM4HV.js";import{a as s}from"./chunk-ZKTRQIGV.js";import"./chunk-I2K74DRD.js";import"./chunk-YI3QHXMF.js";import"./chunk-NR3OO2TM.js";import"./chunk-RGYUH6OH.js";import{a as b}from"./chunk-YCWZIL7K.js";import"./chunk-CPJOSTWF.js";import{a as h}from"./chunk-A3WPUSVT.js";import"./chunk-O3NTOCCL.js";import"./chunk-RBVLOJQS.js";import"./chunk-G4AQ6G7L.js";import"./chunk-IYSXGPFG.js";import"./chunk-B2AFMQVU.js";import"./chunk-7D7WYX4S.js";function A(t,o){let n=t.srcData.findIndex(e=>e.a===o);n!==-1&&t.srcData.splice(n,1)}function B([t,o,n,e,r]){if(r.r!==0){n.remove();return}A(t,e),n.classList.remove("fshSpinner"),E(`<span class="fastWorn">${o}</span>`,n.parentNode)}async function I(t,o,n,e){x("profile",`fastAction - ${e}`);let{target:r}=o,d=r.parentNode.parentNode.children[0].dataset.inv;v("",r),r.blur(),r.className="fastAction fshBl fshSpinner fshSpinner12";let U=await n(d);B([t,e,r,d,U])}function p(t,o){i("fastWear",o.target)&&I(t,o,w,"Worn"),i("fastUse",o.target)&&I(t,o,C,"Used")}function D(t){return t?"fastUse":"fastWear"}function T(t){return t?"Use":"Wear"}function _(t,o){let n=i("backpackContextMenuUsable",o),e=g({className:"fastDiv",innerHTML:`<button class="fshBl fastAction ${D(n)}">${T(n)}</button>`});t.options.checkboxesEnabled&&m(e,o.parentNode.nextElementSibling.nextElementSibling),m(o.parentNode.parentNode,e)}function f(t){N(`#backpackTab_${t.type.toString()} .backpackContextMenuEquippable, #backpackTab_${t.type.toString()} .backpackContextMenuUsable`).forEach(s(_,t))}var c=[],S;function $(t){c.length>0&&c.forEach(o=>o(t))}function L(t){let o=t._showPage;t._showPage=function(e,r){t.tabData&&(o.call(t,e,r),$(t))},S=!0}function l(t,o){c.includes(o)||(S||L(t),b(o)&&c.push(o))}function u(){let t=a("backpack");t.className="fshBackpack",t.removeAttribute("style")}function M(t){u(),l(t,f),k(a("backpack_current")).length!==0&&y(3,f,[t]),h(a("backpackContainer"),s(p,t))}async function P(){let t=await W(a("backpackContainer"),"Backpack","hcs");t&&M(t)}export{P as default};
//# sourceMappingURL=fastWear-AK7K4Q6V.js.map