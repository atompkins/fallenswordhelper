import{a as d}from"./chunk-DXL4O4C7.js";import{a as s}from"./chunk-YADORND2.js";import"./chunk-XOOBRZTW.js";import{a as i}from"./chunk-MJQR7DVR.js";import"./chunk-4DD6XIWS.js";import{a as m}from"./chunk-3MHFN2TP.js";import{a as u}from"./chunk-H7MPEUE2.js";import{a as c}from"./chunk-5WB4S5KU.js";import"./chunk-QCGEDCXW.js";import{a}from"./chunk-Z6NEFCOZ.js";import"./chunk-NPK42VJ3.js";import"./chunk-NCJHTPUM.js";import"./chunk-VH2S7CSB.js";import"./chunk-3LPJKV5E.js";import"./chunk-R2ELQJ5E.js";import{a as p}from"./chunk-IGXYBCKR.js";import"./chunk-LHP5V3M7.js";function f(t){if(t instanceof Node)return t.nodeType===Node.TEXT_NODE}var N=98,l=85,T=60;function g(t){return Number(p(m(`stat-${t.toLowerCase()}`).childNodes).filter(f).map(i).join(""))}function E(t,r,e){let n=g(r[3]),o=Math.floor(e*(Number(r[1].replace(/[+%]/g,""))/100));d(t.dataset.tipped.replace("</center></div>",`<br>Buff Effect: ${String(o)}<br>${r[2]}: ${String(e-o)}&nbsp;&nbsp;${r[3]}: ${String(n+o)}$&`),t)}function $(t){let r=s({innerHTML:t.dataset.tipped}),e=c("b",r).map(o=>i(o)),n=g(e[2]);u(n)||E(t,e,n)}function y(t){let r=a(`#profileRightColumn img[src$="/${String(t)}.png"]`);r&&$(r)}function S(){[N,l,T].forEach(y)}export{S as default};
//# sourceMappingURL=updateBuffs-6A4THEDN.js.map