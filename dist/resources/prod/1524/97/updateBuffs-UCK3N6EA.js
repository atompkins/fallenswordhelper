import{a as d}from"./chunk-RT7VPC7K.js";import{a as s}from"./chunk-7WFBZC7L.js";import"./chunk-ORHGY3QB.js";import{a as i}from"./chunk-DS5TO6ZD.js";import"./chunk-YCL7L6ZB.js";import{a as m}from"./chunk-IWEQS4A6.js";import{a as u}from"./chunk-IIZSDXUF.js";import{a as c}from"./chunk-HOCDVTA7.js";import"./chunk-EKYTM7J4.js";import{a}from"./chunk-AJAH6JFS.js";import"./chunk-OA25OZFH.js";import"./chunk-42DDVEBL.js";import"./chunk-IGPEYEWI.js";import"./chunk-VNYEAL6H.js";import"./chunk-EH4A6QLQ.js";import{a as p}from"./chunk-2TPDHRRV.js";import"./chunk-Y7Z3DYSJ.js";function f(t){if(t instanceof Node)return t.nodeType===Node.TEXT_NODE}var N=98,l=85,T=60;function g(t){return Number(p(m(`stat-${t.toLowerCase()}`).childNodes).filter(f).map(i).join(""))}function E(t,r,e){let n=g(r[3]),o=Math.floor(e*(Number(r[1].replace(/[+%]/g,""))/100));d(t.dataset.tipped.replace("</center></div>",`<br>Buff Effect: ${String(o)}<br>${r[2]}: ${String(e-o)}&nbsp;&nbsp;${r[3]}: ${String(n+o)}$&`),t)}function $(t){let r=s({innerHTML:t.dataset.tipped}),e=c("b",r).map(o=>i(o)),n=g(e[2]);u(n)||E(t,e,n)}function y(t){let r=a(`#profileRightColumn img[src$="/${String(t)}.png"]`);r&&$(r)}function S(){[N,l,T].forEach(y)}export{S as default};
//# sourceMappingURL=updateBuffs-UCK3N6EA.js.map