import{C as t,m as e,g as r,G as s,M as n,y as o}from"./calfSystem-02c48ff5.js"
import{n as a}from"./numberIsNaN-d1ebf732.js"
import{s as i}from"./setTipped-56aeba85.js"
import{t as f}from"./textNodes-462ade33.js"
const p=98,c=85,m=60
function d(t){return Number(n(o("stat-"+t.toLowerCase()).childNodes).filter(f).map(s).join(""))}function u(t){const n=e({innerHTML:t.dataset.tipped}),o=r("b",n).map(t=>s(t)),f=d(o[2])
a(f)||function(t,e,r){const s=d(e[3]),n=Math.floor(r*(Number(e[1].replace(/[+%]/g,""))/100))
i(t.dataset.tipped.replace("</center></div>",`<br>Buff Effect: ${String(n)}<br>${e[2]}: ${String(r-n)}&nbsp;&nbsp;${e[3]}: ${String(s+n)}$&`),t)}(t,o,f)}function b(e){const r=t(`#profileRightColumn img[src$="/${String(e)}.png"]`)
r&&u(r)}function g(){[p,c,m].forEach(b)}export default g
//# sourceMappingURL=updateBuffs-1ee88aac.js.map
