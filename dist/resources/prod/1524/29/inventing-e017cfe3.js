import{n,w as t,p as e,h as i,o as s,C as o,A as a,D as r,ap as c,ao as u,j as f}from"./calfSystem-57628ebe.js"
import{c as m}from"./createInput-b0ce969c.js"
import{i as l}from"./insertTextBeforeEnd-69384995.js"
import{i as p}from"./insertElementBefore-7e0a7ce8.js"
import{c as v}from"./createSpan-4a052a9f.js"
import{j as h,o as d}from"./jsonFail-e16cee9c.js"
import{c as b}from"./createAnchor-e1a9e7aa.js"
import{x as j}from"./xPath-f4917912.js"
function g(n){return function(n){return t({cmd:"inventing",subcmd:"doinvent",recipe_id:n})}(n)}let C,w,y
function I(n){var t
h(n,y)||d((t=n.r).item?`<span class="fshGreen">You successfully invented the item [${t.item.n}].</span>`:'<span class="fshRed">You have failed to invent the item.</span>',y)}function N(n){a(n,w),a("",y)}function $(){const n=Number(C.value)
if(!n)return void N("")
const t=o('input[name="recipe_id"]').value
N(`Inventing ${String(n)} Items`)
for(let e=0;e<n;e+=1)g(t).then(I)}function x(n){const t=n.insertRow(-1).insertCell(-1)
return t.className="fshCenter",t}function E(t){var e
y=n("ol",e),i(t,y)}function S(n){!function(n){w=v(),i(n,w)}(n),E(n)}function _(n){var t
t=x(n),l(t,"Select how many to quick invent"),C=m({className:"custominput fshNumberInput",min:0,type:"number",value:1}),i(t,C),function(n){const t=m({className:"custombutton",type:"button",value:"Quick invent items"})
i(n,t),s(t,$)}(x(n)),S(x(n))}function k(n){return`${c}items${u}view&item_id=${n}`}function A(n,t){const e=function(n){if(!n)return
const t=n.src.match(/\/items\/(\d+)\.gif/)
return t?t[1]:void 0}(t)
if(!e)return
const s=function(n){return b({href:k(n),target:"_blank"})}(e)
p(s,n),i(s,n)}function B(n){A(n,n)}function R(){!function(){const n=j('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
A(o("#pCC b"),n)}(),r('#pCC img[src*="/items/"]').forEach(B)}function T(){f()&&(R(),_(e.lastElementChild))}export default T
//# sourceMappingURL=inventing-e017cfe3.js.map
