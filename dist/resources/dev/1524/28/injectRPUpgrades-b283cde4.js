import{x as s,p as a,g as t,t as e,i as r}from"./calfSystem-b136673a.js"
import"./playerName-f933c87f.js"
import"./idb-c31665cb.js"
import"./indexAjaxJson-ea0d9bb9.js"
import"./cmdExport-bd5eafa5.js"
import"./getProfile-2262c384.js"
import{m as o}from"./myStats-a44245ae.js"
import{r as i}from"./reduceBuffArray-f9edb55b.js"
const n=/>\s*([ a-zA-Z]+) Level (\d+)/g,c=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function f(s,a){const{tipped:t}=a.dataset,e=[...t.matchAll(n)].filter(a=>s[a[1]]===Number(a[2]))
e.length>0&&r(a.parentNode,e.map(c).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=a.children[0].rows[9]
r&&t("a",r.cells[0].children[0]).forEach(e(f,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-b283cde4.js.map
