import{D as t,m as n,g as e,H as r,ar as o,z as s}from"./calfSystem-2172498b.js"
import{n as a}from"./numberIsNaN-9a364388.js"
import{s as i}from"./setTipped-11c01061.js"
function f(t){if(t instanceof Node)return t.nodeType===Node.TEXT_NODE}const c=98,p=85,m=60
function u(t){return Number(o(s(`stat-${t.toLowerCase()}`).childNodes).filter(f).map(r).join(""))}function d(t){const o=n({innerHTML:t.dataset.tipped}),s=e("b",o).map((t=>r(t))),f=u(s[2])
a(f)||function(t,n,e){const r=u(n[3]),o=Math.floor(e*(Number(n[1].replace(/[+%]/g,""))/100))
i(t.dataset.tipped.replace("</center></div>",`<br>Buff Effect: ${String(o)}<br>${n[2]}: ${String(e-o)}&nbsp;&nbsp;${n[3]}: ${String(r+o)}$&`),t)}(t,s,f)}function b(n){const e=t(`#profileRightColumn img[src$="/${String(n)}.png"]`)
e&&d(e)}function g(){[c,p,m].forEach(b)}export default g
//# sourceMappingURL=updateBuffs-8a58533e.js.map
