import{x as t,$ as n,U as e,t as o}from"./calfSystem-2172498b.js"
import{g as s,s as r}from"./idb-35c610a0.js"
function i(){return t({cmd:"superelite"})}let c,u,a
function f(){u&&(window.clearTimeout(u),u=!1),a&&(window.clearInterval(a),a=!1)}function l(t,n){const e=t-n.time,o=n.creature.name.replace(" (Super Elite)","");(!c.se[o]||c.se[o]<e)&&(c.se[o]=e)}function m(t){(function(t){return t&&t.t})(t)&&function(t){const n=Number(t.t.split(" ")[1])
c||(c={lastUpdate:0,se:{}}),c.lastUpdate=n
const e=t.r
e&&(e.forEach(o(l,n)),r("fsh_seLog",c))}(t)}function p(){return n(i).then(m)}function d(){return f(),a=window.setInterval(p,3e5),p()}function w(){const t=e-(c&&c.lastUpdate||0)
t>=600?d():u=window.setTimeout(d,1e3*(600-t))}function h(t){t&&(c=t)}function U(){return s("fsh_seLog").then(h)}function b(){U().then(w)}export{f as disableBackgroundChecks,d as doBackgroundCheck,U as getFshSeLog,c as oldLog,b as seLog}
//# sourceMappingURL=seLog-9c06a514.js.map
