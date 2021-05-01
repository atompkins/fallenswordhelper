import{d as t}from"./doSortParams-95b7a424.js"
import{I as e,aE as n,B as i,z as r,g as s,v as a,i as o,t as c,C as d,ah as p,aG as u,K as m,m as f,h,u as l,y as g,o as b,p as $}from"./calfSystem-ab393688.js"
import{s as v,g as x}from"./idb-4a088c10.js"
import{s as _}from"./shouldBeArray-4211886e.js"
import{a as y}from"./stringSort-cf993953.js"
import{a as N}from"./all-be4763d3.js"
import"./csvSplit-e7651da4.js"
import"./alpha-9ef10f70.js"
import"./toLowerCase-d053e281.js"
let j,C=[]
function k(t){return`<div class="rmItem"><img class="tip-dynamic" data-tipped="fetchitem.php?item_id=${t.id}&inv_id=-1&t=2&p=${j}&vcode=${t.verify}" src="${t.img}" height="20px" width="20px"><p>${t.amountPresent}/${t.amountNeeded}</p></div>`}function w(t){return`<div class="rmItem"><img class="tip-dynamic" data-tipped="fetchitem.php?item_id=${t.id}&inv_id=-1&t=2&p=${j}&vcode=${t.verify}" src="${t.img}" height="20px" width="20px"><p>${t.amountPresent}/${t.amountNeeded}</p></div>`}function S(t){return!C.includes(t.name)}function T(t){return`<tr class="rmTr"><td class="rmTd"><a href="${t.link}"><img src="${t.img}" height="30px" width="30px"></a></td><td class="rmTd"><a href="${t.link}">${t.name}</a></td><td class="rmTd">${function(t){return t.items?t.items.map(k).join(""):""}(t)}</td><td class="rmTd">${function(t){return t.components?t.components.map(w).join(""):""}(t)}</td><td class="rmTd">${function(t){return t.target?` <img class="tip-dynamic" data-tipped="fetchitem.php?item_id=${t.target.id}&inv_id=-1&t=2&p=${j}&vcode=${t.target.verify}" src="${t.target.img}" height="30px" width="30px"><br/>`:""}(t)}</td></tr>`}function B(t,r){r&&(e("hideRecipes")&&(C=_("hideRecipeNames")),function(t,e){j=n()
let r='<table width="100%"><tr class="rmTh"><th>Recipe</th><th><span id="sortName" class="fshLink" sortkey="name">Name</span></th><th>Items</th><th>Components</th><th>Target</th></tr>'
r+=e.recipe.filter(S).map(T).join(""),r+="</table>",i(r,t),v("fsh_recipeBook",e)}(t,r))}function I(t){const e=r("pCC",t).children[0].rows[4].cells[0].children[0]
return s("img",e)}const P=/fetchitem.php\?item_id=(\d+)&inv_id=-1&t=2&p=(\d+)&vcode=([a-z0-9]+)/i
function A(t,e){const n=e.getAttribute("background")
return n&&n.includes(t)}function E(t){const e=t.children[0].children[0],n=function(t){return t.dataset.tipped.match(P)}(e),i=function(t,e){return{img:t.getAttribute("src"),id:e[1],verify:e[3]}}(e,n)
return function(t,e){if(e){const n=d(e).split("/")
t.amountPresent=parseInt(n[0],10),t.amountNeeded=parseInt(n[1],10)}}(i,t.parentNode.nextElementSibling),i}function R(t,e){return t.filter(c(A,e)).map(E)}function F(t,e,n,i){const c=a(i)
o(t,`Parsing blueprint ${n.name}...<br>`)
const d=function(t){return s("td",r("pCC",t))}(c)
n.items=R(d,"/inventory/2x3."),n.components=R(d,"/inventory/1x1mini."),[n.target]=R(d,"/hellforge/2x3."),e.recipe.push(n)}function L(t,e,n){o(t,`Found blueprint "${d(n)}".<br>`)
const i=function(t){return{img:t.parentNode.previousElementSibling.children[0].getAttribute("src"),link:t.href,name:d(t),id:p(t.search,"recipe_id")}}(n)
return u(n.href).then(c(F,t,e,i))}function q(t,e,n){const i=function(t){const e=r("pCC",t).children[0].rows[6].cells[0].children[0]
return s("a",e)}(a(n)).map(c(L,t,e))
return N(i)}function z(t){return/\/folder_on\./.test(t.getAttribute("src"))}function G(t,e){return 0!==e}function K(t){return t.value}function M(t,e,n){return u(`${t}&page=${n}`).then(e)}function D(t,e,n){return function(t){return s("option",m("customselect",r("pCC",t))[0]).filter(G).map(K)}(t).map(c(M,e,n))}function H(t,e,n){const i=a(n),r=function(t){return I(t).find(z).parentNode.href}(i),s=c(q,t,e),o=D(i,r,s)
return o.push(s(n)),N(o)}function J(t){return"-1"!==p(t.parentNode.search,"folder_id")}function O(t,e){const n=d(e.parentNode.nextElementSibling.nextElementSibling.firstChild),i=/quest/i.test(n)
return i&&o(t,`Skipping folder "${n}"  as it has the word "quest" in folder name.<br>`),!i}function Q(t,e){return u(e.parentNode.href).then(t)}function U(t,e,n){const i=c(H,t,e),r=function(t,e,n){return I(a(e)).filter(J).filter(c(O,t)).map(c(Q,n))}(t,n,i)
return r.push(i(n)),N(r)}let V,W
function X(){o(W,"Finished parsing ... formatting ..."),v("fsh_recipeBook",V),B(W,V)}function Y(){V={},V.recipe=[],i("<br>Parsing inventing screen ...<br>",W),l({cmd:"inventing"}).then(c(U,W,V)).then(X)}function Z(t,e){V=e,i('<table class="fshInvFilter"><thead><tr><th width="90%"><b>&nbsp;Recipe Manager</b></th><th width="10%" class="fshBtnBox">[<span id="rfsh" class="fshLink">Refresh</span>]</th></tr></thead></table>',t),W=f(),h(t,W),V?B(W,V):Y()}function tt(e){"rfsh"===e.target.id&&Y(),"sortName"===e.target.id&&function(e){t(e.target),V.recipe.sort(y),B(W,V)}(e)}function et(t){if(g())return
const e=t||$
x("fsh_recipeBook").then(c(Z,e)),b(e,tt)}export default et
//# sourceMappingURL=recipeMgr-baab6e91.js.map
