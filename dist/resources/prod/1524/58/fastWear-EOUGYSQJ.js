import{a as B,c as v}from"./chunk-TFKMWT5D.js";import"./chunk-3FXORCMN.js";import"./chunk-CETIZQO2.js";import{a as I,b as h}from"./chunk-C6BAFFZJ.js";import{a as g}from"./chunk-MDTYI2M6.js";import"./chunk-CI7BPN4C.js";import{a as k}from"./chunk-CLH6HBBH.js";import"./chunk-HDTIWYV4.js";import"./chunk-NSH7KROB.js";import"./chunk-TJGDVHS5.js";import"./chunk-RF7K337W.js";import{a as m}from"./chunk-2ALTJLAZ.js";import{a as c}from"./chunk-V6QPYEQA.js";import{a as y}from"./chunk-26WEU6C7.js";import"./chunk-E6LT46ZX.js";import"./chunk-QMPXEHMC.js";import"./chunk-UF6HKXEC.js";import"./chunk-SVSEFRER.js";import"./chunk-ZOBISSU4.js";import"./chunk-KIPS4CXG.js";import"./chunk-RTVLQCU7.js";import"./chunk-PUMXFYDY.js";import"./chunk-SRSGAYZF.js";import"./chunk-QU2O5LW3.js";import"./chunk-XQHJD2OP.js";import"./chunk-RIMVOGPJ.js";import"./chunk-UJM3TQ4Q.js";import"./chunk-UUZRSBW7.js";import"./chunk-4HFYLTSA.js";import{a as b}from"./chunk-FSKHKHHU.js";import{a as E}from"./chunk-OBGXUIQG.js";import"./chunk-ZVRZUN6W.js";import{a as x}from"./chunk-RZHLTJPZ.js";import"./chunk-CXH2ICGZ.js";import{a as s}from"./chunk-B4CACURR.js";import"./chunk-X3N42HIO.js";import"./chunk-EMXVU7FX.js";import"./chunk-PZET6DEP.js";import{a as d}from"./chunk-44LY5GOE.js";import"./chunk-TXXA2PXS.js";import"./chunk-353SUQQH.js";import{a as u}from"./chunk-IKPUDF3E.js";import"./chunk-ICRHQMJP.js";import"./chunk-FJHRVDDP.js";import"./chunk-SVFIEWQV.js";import"./chunk-NEZAPTHY.js";import"./chunk-GTEPU6L3.js";import{a as r}from"./chunk-J6WQ3WGO.js";function C(t,e){let o=t.srcData.findIndex(n=>n.a===e);o!==-1&&t.srcData.splice(o,1)}function N([t,e,o,n],a){if(a.r!==0){o.remove();return}C(t,n),o.classList.remove("fshSpinner"),b(`<span class="fastWorn">${e}</span>`,o.parentNode)}function W(t,e,o,n){x("profile",`fastAction - ${n}`);let{target:a}=e,l=a.parentNode.parentNode.children[0].dataset.inv;g("",a),a.blur(),a.className="fastAction fshBl fshSpinner fshSpinner12",o(l).then(r(N,[t,n,a,l]))}function f(t,e){m("fastWear",e.target)&&W(t,e,B,"Worn"),m("fastUse",e.target)&&W(t,e,v,"Used")}function T(t){return t?"fastUse":"fastWear"}function A(t){return t?"Use":"Wear"}function S(t,e){let o=m("backpackContextMenuUsable",e),n=y({className:"fastDiv",innerHTML:`<button class="fshBl fastAction ${T(o)}">${A(o)}</button>`});t.options.checkboxesEnabled&&c(n,e.parentNode.nextElementSibling.nextElementSibling),c(e.parentNode.parentNode,n)}function i(t){d(`#backpackTab_${t.type.toString()} .backpackContextMenuEquippable, #backpackTab_${t.type.toString()} .backpackContextMenuUsable`).forEach(r(S,t))}function p(){let t=s("backpack");t.className="fshBackpack",t.removeAttribute("style")}function U(t){p(),h(t,i),u(s("backpack_current")).length!==0&&k(3,i,[t]),E(s("backpackContainer"),r(f,t))}function D(){let t=I();t&&U(t)}export{D as default};
//# sourceMappingURL=fastWear-EOUGYSQJ.js.map
