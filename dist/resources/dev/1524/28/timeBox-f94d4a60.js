import{J as e,a7 as t,aI as a}from"./calfSystem-b136673a.js"
import{i as r}from"./intValue-f4d85578.js"
import{v as s}from"./valueText-90e91fab.js"
import{p as o}from"./padZ-28ca6b6e.js"
function n(t){return r(s(e(t)))}function m(e,r){const s=/([0-9]+)m ([0-9]+)s/.exec(e)
var n
if(s)return`<dd>${n=new Date(t+1e3*(60*(60*r+Number(s[1]))+Number(s[2]))),`${o(n.getHours())}:${o(n.getMinutes())} ${n.toLocaleString("en",{weekday:"short"})} ${o(n.getDate())}/${a[n.getMonth()]}/${n.getFullYear()}`}</dd>`}export{n as a,m as t}
//# sourceMappingURL=timeBox-f94d4a60.js.map
