import{x as t,u as e,v as n,D as r,U as s,a7 as o,ad as a,H as u,$ as i,t as c}from"./calfSystem-03050396.js"
import{d as f}from"./dataRows-737117b7.js"
import{g as l,s as m}from"./idb-02fb3250.js"
function p(){return t({cmd:"superelite"})}function d(t){const e=t.replace("<br>"," ").split(/[: /]/)
return Math.floor((o-Date.UTC(Number(e[2]),a.indexOf(e[1]),Number(e[0]),Number(e[3]),Number(e[4]),0))/1e3)}function b(t){return{time:d(t.cells[0].innerHTML),creature:{name:u(t.cells[1])}}}function w(t){const e=n(t),o=r("#pCC table table",e)
if(!o)return{s:!1}
return{r:f(o.rows,4,1).map(b),s:!0,t:`0 ${String(s)}`}}function h(){return e({cmd:"superelite"}).then(w)}let N,U,g
function T(){U&&(window.clearTimeout(U),U=!1),g&&(window.clearInterval(g),g=!1)}function j(t,e){const n=t-e.time,r=e.creature.name.replace(" (Super Elite)","");(!N.se[r]||N.se[r]<n)&&(N.se[r]=n)}function v(t){(function(t){return t&&t.t})(t)&&function(t){const e=Number(t.t.split(" ")[1])
N||(N={lastUpdate:0,se:{}}),N.lastUpdate=e
const n=t.r
n&&(n.forEach(c(j,e)),m("fsh_seLog",N))}(t)}function x(){return i(p,h).then(v)}function C(){return T(),g=window.setInterval(x,3e5),x()}function L(){const t=s-(N&&N.lastUpdate||0)
t>=600?C():U=window.setTimeout(C,1e3*(600-t))}function S(t){t&&(N=t)}function D(){return l("fsh_seLog").then(S)}function E(){D().then(L)}export{T as disableBackgroundChecks,C as doBackgroundCheck,D as getFshSeLog,N as oldLog,E as seLog}
//# sourceMappingURL=seLog-cd4ec6e9.js.map
