import{c as n}from"./createInput-47702c1d.js"
import{n as t,x as e,u as s,w as i,$ as o,p as r,h as c,o as a,D as u,B as f,E as m,aB as l,ar as d,j as p}from"./calfSystem-fe0ebf32.js"
import{c as v}from"./createSpan-0da61261.js"
import{i as h}from"./insertTextBeforeEnd-df8c1dd5.js"
import{j as b,o as g}from"./jsonFail-4ae9e9c9.js"
import{c as j}from"./createAnchor-9936176f.js"
import{i as C}from"./insertElementBefore-9228b012.js"
import{x as y}from"./xPath-dfb7ca5b.js"
function $(n){return e({cmd:"inventing",subcmd:"doinvent",recipe_id:n})}function w(n){const t=i(n)
return t.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:t},s:!1}}function x(n){return s({cmd:"inventing",subcmd:"doinvent",recipe_id:n}).then(w)}let E,I,N
function _(n){var t
b(n,N)||g((t=n.r).item?`<span class="fshGreen">You successfully invented the item [${t.item.n}].</span>`:'<span class="fshRed">You have failed to invent the item.</span>',N)}function B(n){f(n,I),f("",N)}function S(){const n=Number(E.value)
if(!n)return void B("")
const t=u('input[name="recipe_id"]').value
B(`Inventing ${String(n)} Items`)
for(let s=0;s<n;s+=1)(e=t,o($,x,e)).then(_)
var e}function k(n){const t=n.insertRow(-1).insertCell(-1)
return t.className="fshCenter",t}function R(n){var e
N=t("ol",e),c(n,N)}function T(n){!function(n){I=v(),c(n,I)}(n),R(n)}function Y(t){var e
e=k(t),h(e,"Select how many to quick invent"),E=n({className:"custominput fshNumberInput",min:0,type:"number",value:1}),c(e,E),function(t){const e=n({className:"custombutton",type:"button",value:"Quick invent items"})
c(t,e),a(e,S)}(k(t)),T(k(t))}function q(n){return`${l}items${d}view&item_id=${n}`}function A(n,t){const e=function(n){if(!n)return
const t=n.src.match(/\/items\/(\d+)\.gif/)
return t?t[1]:void 0}(t)
if(!e)return
const s=function(n){return j({href:q(n),target:"_blank"})}(e)
C(s,n),c(s,n)}function D(n){A(n,n)}function F(){!function(){const n=y('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
A(u("#pCC b"),n)}(),m('#pCC img[src*="/items/"]').forEach(D)}function G(){p()&&(F(),Y(r.lastElementChild))}export default G
//# sourceMappingURL=inventing-45c8ab2d.js.map