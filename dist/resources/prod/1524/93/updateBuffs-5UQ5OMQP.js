import{a as d}from"./chunk-SRHRDFDC.js";import{a as s}from"./chunk-MUG4VEKH.js";import"./chunk-NEGYQUFU.js";import{a as i}from"./chunk-ATELUZSH.js";import"./chunk-GOQRAVSB.js";import{a as m}from"./chunk-5HI4ILOP.js";import{a as u}from"./chunk-73NUJ3MC.js";import{a as c}from"./chunk-SDYIYOUC.js";import"./chunk-D2RKZAOL.js";import{a}from"./chunk-OX3SBSJB.js";import"./chunk-Z6KB7KN6.js";import"./chunk-DP37WUXB.js";import"./chunk-MT2H2XVD.js";import"./chunk-LGDJTMPN.js";import"./chunk-GKVMJ4PA.js";import{a as p}from"./chunk-5RFQSTDG.js";import"./chunk-HYLQEGZ4.js";function f(t){if(t instanceof Node)return t.nodeType===Node.TEXT_NODE}var N=98,l=85,T=60;function g(t){return Number(p(m(`stat-${t.toLowerCase()}`).childNodes).filter(f).map(i).join(""))}function E(t,r,e){let n=g(r[3]),o=Math.floor(e*(Number(r[1].replace(/[+%]/g,""))/100));d(t.dataset.tipped.replace("</center></div>",`<br>Buff Effect: ${String(o)}<br>${r[2]}: ${String(e-o)}&nbsp;&nbsp;${r[3]}: ${String(n+o)}$&`),t)}function $(t){let r=s({innerHTML:t.dataset.tipped}),e=c("b",r).map(o=>i(o)),n=g(e[2]);u(n)||E(t,e,n)}function y(t){let r=a(`#profileRightColumn img[src$="/${String(t)}.png"]`);r&&$(r)}function S(){[N,l,T].forEach(y)}export{S as default};
//# sourceMappingURL=updateBuffs-5UQ5OMQP.js.map