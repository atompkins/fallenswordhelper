import{c as n}from"./createInput-538cc410.js"
import{n as t,w as e,p as i,h as s,o,C as r,A as a,D as c,aC as u,aq as f,j as m}from"./calfSystem-26bcf570.js"
import{c as l}from"./createSpan-d92b45d9.js"
import{i as p}from"./insertTextBeforeEnd-51cfe46b.js"
import{j as v,o as d}from"./jsonFail-29e920c6.js"
import{c as b}from"./createAnchor-bae86be2.js"
import{i as h}from"./insertElementBefore-aa28f497.js"
import{x as j}from"./xPath-20c91b7f.js"
function g(n){return function(n){return e({cmd:"inventing",subcmd:"doinvent",recipe_id:n})}(n)}let C,w,y
function I(n){var t
v(n,y)||d((t=n.r).item?`<span class="fshGreen">You successfully invented the item [${t.item.n}].</span>`:'<span class="fshRed">You have failed to invent the item.</span>',y)}function N(n){a(n,w),a("",y)}function $(){const n=Number(C.value)
if(!n)return void N("")
const t=r('input[name="recipe_id"]').value
N(`Inventing ${String(n)} Items`)
for(let e=0;e<n;e+=1)g(t).then(I)}function x(n){const t=n.insertRow(-1).insertCell(-1)
return t.className="fshCenter",t}function E(n){var e
y=t("ol",e),s(n,y)}function S(n){!function(n){w=l(),s(n,w)}(n),E(n)}function _(t){var e
e=x(t),p(e,"Select how many to quick invent"),C=n({className:"custominput fshNumberInput",min:0,type:"number",value:1}),s(e,C),function(t){const e=n({className:"custombutton",type:"button",value:"Quick invent items"})
s(t,e),o(e,$)}(x(t)),S(x(t))}function k(n){return`${u}items${f}view&item_id=${n}`}function q(n,t){const e=function(n){if(!n)return
const t=n.src.match(/\/items\/(\d+)\.gif/)
return t?t[1]:void 0}(t)
if(!e)return
const i=function(n){return b({href:k(n),target:"_blank"})}(e)
h(i,n),s(i,n)}function A(n){q(n,n)}function B(){!function(){const n=j('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
q(r("#pCC b"),n)}(),c('#pCC img[src*="/items/"]').forEach(A)}function R(){m()&&(B(),_(i.lastElementChild))}export default R
//# sourceMappingURL=inventing-3b77fb22.js.map
