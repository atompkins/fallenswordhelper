import{E as n,C as e,z as t,B as a,t as s,a9 as i,aa as l,a0 as r,f as o,h as c,A as f,T as m}from"./calfSystem-c464cb1d.js"
import{p as u}from"./parseGoldUpgrades-abd15505.js"
import{c as p}from"./createSpan-79ff8b4f.js"
import{i as d}from"./insertTextBeforeEnd-6301c804.js"
import{i as b}from"./intValue-e485889b.js"
import{n as x}from"./numberIsNaN-2764ce9c.js"
let E,g
const h={}
function S(n,t){return e(t).includes(n)}function N(n){return E.find(s(S,n))}function j(n,t,a){if(!h[n][a]){const s=function(n,e){return"amount"===e?new RegExp(`\\+(\\d+) ${n}`):/(\d+)\xA0/}(n,a),i=e(t).match(s)[1]
h[n][a]=i}return h[n][a]}function M(n,e,t,a){const s=function(n,e){return j(n,e,"amount")}(n,e),i=function(n,e){return j(n,e.nextElementSibling,"cost")}(n,e)
let l
t*i<=g?(l=t*s,a.className="fshBlue"):(l=Math.floor(g/i)*s,a.className="fshRed"),f(`(+${l} stamina)`,a)}function y(n,e,t){const{target:a}=t,s=Number(a.value),i=function(n,e){if(h[n]||(h[n]={}),!h[n].span){const t=p()
d(e," "),c(e,t),h[n].span=t}return h[n].span}(n,e)
x(s)||0===s?i.className="fshHide":M(n,e,s,i)}function C(n){const e=N(n)
o(e.nextElementSibling.nextElementSibling.nextElementSibling.children[0].rows[0].cells[0].children[0],"keyup",s(y,n,e))}function $(){g=b(e(t("statbar-fsp"))),C("Current"),C("Maximum"),a(`<a href="${i}${l}marketplace">Sell at Marketplace</a>`,N("Gold").nextElementSibling.nextElementSibling.nextElementSibling)}function k(n,e){const t=N(n).nextElementSibling.nextElementSibling
if(t){const n=Number(/(\d+) \/ 115/.exec(t.innerHTML)[1])
r(e,n+5)}}function A(){"1"===m("type")?u():(E=n("#pCC > table:last-of-type > tbody > tr:nth-child(even) > td:first-child"),k("+1 Max Allies","alliestotal"),k("+1 Max Enemies","enemiestotal"),$())}export default A
//# sourceMappingURL=points-0e94a2d2.js.map
