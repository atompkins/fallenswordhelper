import{y as e,a as t,g as n,z as s,d as i,e as a,o as c,t as o,m as d,b as r,h as l,l as f,a5 as m,I as h,b8 as p,aq as u,E as k,c as L}from"./calfSystem-540da563.js"
import{c as S}from"./createTr-786c06ed.js"
import{g}from"./getInventoryById-5e8bd7cf.js"
import{h as j}from"./hideElement-512851a2.js"
import{i as y}from"./insertElementBefore-6e80e0ff.js"
import{i as N}from"./insertHtmlBeforeBegin-44de9e8d.js"
import{n as b}from"./numberIsNaN-2764ce9c.js"
import"./getInventory-653c2c3b.js"
import"./cmdExport-a330f27a.js"
import"./indexAjaxJson-8f18f901.js"
let v
function E(e,t){t.children[0].lastElementChild.children[0].children[0].checked=!1
const n=f("fshHide",t),s="folderid0"===e,i=f(e,t);(function(e,t,n){return e&&m(t,n)})(n,s,i)&&(t.classList.remove("fshHide"),t.classList.add("fshBlock")),function(e,t,n){return!e&&!t&&!n}(n,s,i)&&(t.classList.remove("fshBlock"),j(t))}function I(e){n(i,function(){let e=s("item-div")
if(!e){e=d({id:"item-div",className:"itemDiv"})
const t=s("item-list"),n=r(i,t)
for(;n.length;)n[0].classList.add("fshBlock"),l(e,n[0])
y(e,t)}return e}()).forEach(o(E,e.target.id))}function $(e){"SPAN"===e.target.nodeName&&-1!==e.target.id.indexOf("folderid")&&I(e)}function A(e){return` &ensp;<span id="folderid${e[0]}" class="fshLink fshNoWrap" fid=${e[0]}>${e[1]}</span> `}function H(e){const t=e.children[0].lastElementChild.children[0].children[0],n=v[t.getAttribute("value")]
n&&(e.classList.add(`folderid${n.folder_id}`),v.fshHasST&&function(e,t){t.is_in_st&&e.classList.add("isInST")}(e,n),t.classList.add(`itemid${n.item_id}`),t.classList.add(`itemtype${n.type}`))}function C(e){v=e.items
n(i,s("item-list")).forEach(H),function(e){const t=S({id:"fshFolderSelect",innerHTML:`<td colspan=6><span id="folderid0" class="fshLink" fid=0>All</span> &ensp;<span id="folderid-1" class="fshLink" fid="-1">Main</span>${a(e).map(A).join("")}`})
c(t,$)
const n=s("item-list").parentNode.parentNode
N(n,'<tr id="fshShowSTs"><td align="center" colspan=6><label><input type="checkbox" id="itemsInSt" checked> Select items in ST</label></td></tr>'),y(t,n)}(e.folders)}function T(e){t(3,C,[e])}function x(){e()||g().then(T)}function B(e,t){return"itemid-1"===e||function(e,t){return"itemid-2"===e&&f("itemtype12",t)}(e,t)||f(e,t)}function M(e,t){return e||!f("isInST",t)}function w(e){return e.children[0].lastElementChild.children[0].children[0]}function W(e,t){t.checked=e}function _(e){W(!1,e)}function z(e){W(!0,e)}function q(e,t){t.filter(o(M,function(){const e=s("itemsInSt")
if(e)return e.checked}())).map(w).filter(o(B,e)).slice(0,function(e){const t=parseInt(s("fshSendHowMany").value,10)
return b(t)?e.length:"-"!==L.subcmd?Math.min(100,t):t}(t)).forEach(z)}function D(e){f("fshCheckAll",e.target)&&function(e){const t=s("item-div")||s("item-list"),n=k("table:not(.fshHide)",t)
n.map(w).forEach(_),q(e.target.id,n)}(e)}function F(e){return p(`[${e}]`)}function J(){const e=F(h("sendClasses"))
return e||F(u.sendClasses)}function O(e){return` &ensp;<span id="itemid${e[1]}" class="fshCheckAll fshLink fshNoWrap">${e[0]}</span>`}function P(){const e=S({id:"fshSelectMultiple",innerHTML:`<td colspan=6>Select:&ensp;<span id="itemid-1" class="fshCheckAll fshLink fshNoWrap">All Items</span> &ensp;<span id="itemid-2" class="fshCheckAll fshLink fshNoWrap">All Resources</span>${J().map(O).join("")} &ensp;How&nbsp;many:<input id="fshSendHowMany" type="text" class="custominput" value="all" size=3></td>`})
c(e,D)
const t=s("item-list").parentNode.parentNode
y(e,t)}function R(){t(3,x),t(3,P)}export default R
//# sourceMappingURL=trade-7e660437.js.map
