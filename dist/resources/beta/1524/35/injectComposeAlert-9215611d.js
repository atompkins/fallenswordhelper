import{u as n,v as o,H as t,x as s,q as i,$ as a,aa as c,z as m,as as e,c as r,j as u,I as p,au as f,aw as l,a7 as g,_ as d}from"./calfSystem-03050396.js"
import{g as h}from"./getArrayByClassName-0b05e230.js"
function b(n){const o=n.match(/ETA: (\d+)h (\d+)m (\d+)s/)
return{time_remaining:60*Number(o[1])*60+60*Number(o[2])+Number(o[3])}}function _(n){const s=o(n),i=h("composing-potion",s)
if(0===i.length)return{s:!1}
return{r:{max_potions:i.length,potions:h("composing-potion-time",s).map(t).filter((n=>n.endsWith("s"))).map(b)},s:!0}}function x(){return n({cmd:"composing"}).then(_)}function y(){return s(i({cmd:"composing"},{subcmd:"view"}))}const N=`<li class="notification"><a href="${e}"><span class="notification-icon"></span><p class="notification-content">Composing to do</p></a></li>`
function j(){c(m("notifications"),N)}function v(n){return n.time_remaining}function w(){j(),d(f,!0)}function A(n){n.potions.length!==n.max_potions?w():function(n){const o=Math.min.apply(null,n.map(v))
o>0?(d(f,!1),d(l,g+1e3*o)):w()}(n.potions)}function C(n){n.s&&A(n.r)}function $(){const n=p(l)
n&&g<n||a(y,x).then(C)}function q(){"composing"!==r.cmd&&u()&&(p(f)?j():$())}export default q
//# sourceMappingURL=injectComposeAlert-9215611d.js.map