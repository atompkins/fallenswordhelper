import{F as t,p as e,R as n,e as s,u as a,b as o,g as r,f as c,Y as i}from"./calfSystem-d96a3efd.js"
import"./dataRows-f436d5a8.js"
import{c as l}from"./createTextArea-9b297a22.js"
import{a as u}from"./addLogColoring-a993c963.js"
function f(t){t.value=t.value.replace(/\r\n|\n|\r/g," ")}function d(t){t.setAttribute("form","dochat")}function p(t,e){"Enter"!==e.key||e.shiftKey||(e.preventDefault(),i(t))}function m(){const t=n('input[value="Send As Mass"]')
if(!t)return
const i=function(){const t=o("form",e)
return t[0].id="dochat",t[0]}(),u=function(){const t=r("input",e).slice(0,7)
return t.forEach(d),t[5]}(),m=function(t){const e=n("#pCC table table")
e.rows[0].cells[0].remove()
const s=e.insertRow(-1).insertCell(-1)
c(s,t)
const a=e.rows[0].cells[0]
return a.rowSpan=2,a}(t),b=function(t){const e=l({cols:72,name:"msg",required:!0,rows:2})
return d(e),s(e,"keypress",a(p,t)),e}(u)
m.replaceChild(b,m.children[0]),s(i,"submit",a(f,b))}export default function(){t("enhanceChatTextEntry")&&e&&m(),function(){const t=n("#pCC table table table table")
t&&t.classList.add("fshGc")}(),u("Chat",0)}
//# sourceMappingURL=guildChat-f5d10b75.js.map