import{y as s,j as n,i as a,o as t,h as o,b as e,B as f,b5 as i,U as c,V as r,bQ as l,J as b}from"./calfSystem-a5da5210.js"
import{g as m,s as h}from"./idb-2c141566.js"
import{c as x}from"./createSpan-8b1ff67f.js"
function p(n){let a=function(s){return s||""}(n)
const t=b("message",s("minibox-fsbox"))[0].innerHTML
a.indexOf(t)<0&&(a=`<br>${t}${a}`),a.length>1e4&&(a=a.substring(0,1e4)),h("fsh_fsboxcontent",a)}function u(){c("injectFSBoxLog","injectFsBoxContent"),r(l)}function g(s){const n=s.lastElementChild
a(n,"<br>"),function(s){let n=e("a",s)
0!==n.length&&(m("fsh_fsboxcontent").then(p),n=f(n[0]),a(s,`<span class="fshPaleVioletRed">[ <a href="${i}${n}">Ignore</a> ]</span> `))}(n)
const c=x({className:"fshYellow",innerHTML:'[ <span class="fshLink">Log</span> ]'})
t(c,u),o(n,c)}function d(){const a=s("minibox-fsbox")
n()&&a&&g(a)}export default d
//# sourceMappingURL=injectFSBoxLog-2dea1362.js.map
