import{c as t}from"./createStyle-8490a9b2.js"
import{d as n}from"./dataRows-31e1e8d2.js"
import{a as o,d as e}from"./doBuffLinkClick-52d4fbf0.js"
import{I as a,D as s,o as r,_ as i,t as c,e as f,h as l,H as m,F as u}from"./calfSystem-587dd8d3.js"
import{p as d}from"./parseDateAsTimestamp-a418fe99.js"
let p,C
function h(t,n){let o="old"
const e=d(m(n.cells[t]))
return function(t,n){return t>20&&n<=C}((p-e)/6e4,e)||(o=e>C?"new":"seen"),[n,o]}function b(t,[n,o]){const e=n.rowIndex+1
return t[o]?t[o]={min:Math.min(t[o].min,e),max:Math.max(t[o].min,e)}:t[o]={min:e,max:e},t}function g(t,[n,{min:o,max:e}]){return`.fshLogColoring tr:nth-of-type(${t}n+${o}):nth-of-type(-${t}n+${e}) {background-color: ${"old"===n?"#CD9E4B":"#F5F298"};}`}function j(o,a,r,i){const m=n(r.rows,i,0).map(c(h,a))
!function(t,n){"Chat"===t&&n.filter((([,t])=>"old"!==t)).map((([t])=>s(u,t))).forEach(e)}(o,m)
const d=function(t,n){const o="Chat"===t?4:2
return f(n.filter((([,t])=>"seen"!==t)).reduce(b,{})).map(c(g,o))}(o,m)
d.length&&l(document.body,t(d.join("\n")))}function x(t,n,e,s){e.classList.add("fshLogColoring"),p=(new Date).setUTCSeconds(0,0)-1
const c=`last${t}Check`
C=function(t){return a(t)||p}(c),j(t,n,e,s),r(e,o),i(c,p)}function y(t,n,o){if(!a("enableLogColoring"))return
const e=function(t){return["Chat","Leader"].includes(t)?s("#pCC table table table table"):s("#pCC > table:last-of-type")}(t)
e&&x(t,n,e,o)}export{y as a}
//# sourceMappingURL=addLogColoring-c08afe79.js.map
