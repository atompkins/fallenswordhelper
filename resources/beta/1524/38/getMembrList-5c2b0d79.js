import{t,c as n,aB as r,a7 as e,af as s}from"./calfSystem-71efcdd9.js"
import{c as u}from"./currentGuildId-feae79ca.js"
import{c as i}from"./cmdExport-29c620b8.js"
import{g as o,s as c}from"./idb-3de49256.js"
function m(t,n){const r=n||{}
c("fsh_membrList",$.extend(r,t))}function f(n){return o("fsh_membrList").then(t(m,n)),n}function a(t,n){if(!n)return
const s=r(n.map((t=>[t.username,t])))
return{[t]:{lastUpdate:e,...s}}}function d(n){return function(t){return i({guild_id:t,subcmd:"guild_members"})}(n).then(t(a,n))}function p(t){return d(t).then(f)}const b=[(t,n)=>n,(t,n)=>s(n),(t,n)=>s(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>e-3e5]
function h(t,n,r){return r(t,n)}function l(n,r){return function(n,r){return b.every(t(h,n,r))}(n,r)?r:p(n)}function g(t,r){return n.membrList=r[t],n.membrList}function j(n){const r=u()
return r?function(n,r){return n?p(r):o("fsh_membrList").then(t(l,r))}(n,r).then(t(g,r)):Promise.reject(new Error("no guild id"))}export{j as g}
//# sourceMappingURL=getMembrList-5c2b0d79.js.map
