import{a}from"./all-TTLWag-d.js"
import{aC as e,bW as n,ah as s,bP as t,C as i,bM as r,aq as l}from"./calfSystem-G1dN925O.js"
import{m}from"./myStats--KJiIj1a.js"
import{g as u}from"./getMembrList-AgfQvkLG.js"
const c=a=>a.username
let o=null
function f(){return o||(o=async function(){const a=await m(!1)
return a?.username!==e()?{}:(a._allies&&a._enemies||n(`myStats returned ${s(a)}`),{...a._allies&&{_allies:a._allies.map(c)},...a._enemies&&{_enemies:a._enemies.map(c)}})}()),o}async function y(a){return(await f())._allies?.includes(a)}async function _(a){return(await f())._enemies?.includes(a)}let p=null
async function w(a){return t()&&!p&&(p=async function(){const a=await u(!1)
if(a)return i(a).filter((([,a])=>r(a))).map((([a])=>a))}()),(await p)?.includes(a)}async function d(e){let n=""
const s=l(e),[t,i,r]=await a([w(s),y(s),_(s)])
return t?n="guild":i?n="ally":r&&(n="enemy"),[e,n]}export{w as i,d as r}
//# sourceMappingURL=relatePlayer-17ysHdFJ.js.map