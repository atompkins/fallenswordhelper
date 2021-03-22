import{q as n,u as t,v as e,E as r,D as s,$ as a,o,t as i,i as c,h as u,C as m,aa as d,I as p,p as f,y as l,e as h,N as b}from"./calfSystem-03050396.js"
import{b as g}from"./batch-003cd06a.js"
import{g as j}from"./getMembrList-59c1e7a8.js"
import{n as k}from"./notLastUpdate-03352984.js"
import{b as N}from"./bitwiseAnd-b4e86482.js"
import{c as v}from"./createInput-c4b18abd.js"
import{c as w}from"./createSpan-8d9e047a.js"
import{g as x}from"./guild-61d59bbe.js"
import{a as _}from"./allthen-e8de2991.js"
import{r as C}from"./replaceChild-b7da266a.js"
import{r as I}from"./roundToString-29c5853e.js"
import{i as S}from"./insertElementBefore-9228b012.js"
import{p as y}from"./playerName-3ca7fe81.js"
import{t as E}from"./toLowerCase-5dc9e42d.js"
import"./currentGuildId-4235046f.js"
import"./cmdExport-c8e611b1.js"
import"./indexAjaxJson-d9ed18eb.js"
import"./idb-02fb3250.js"
import"./all-3be74659.js"
import"./numberIsNaN-1e8b4508.js"
function B(t){return x(n({subcmd:"ranks"},t))}const A=n=>{return e=n.getAttribute("onclick").match(/[=](\d+)/)[1],t({cmd:"guild",subcmd:"ranks",subcmd2:"add",rank_id:e})
var e},L=n=>r('input[name^="permission"]:checked',n).reduce(((n,t)=>n+2**Number(t.name.match(/\[(\d+)\]/)[1])),0)
function U(n){return{id:Number(s('input[name="rank_id"]',n).value),name:s('input[name="rank_name"]',n).value,permissions:L(n),tax:Number(s('input[name="rank_tax"]',n).value)}}function $(n){const t=n.map(e).map(U)
return{r:{0:t[0],ranks:t.slice(1)},s:!0}}function G(n){const t=e(n),s=r('input[value="Edit"]',t)
return _(s.map(A),$)}function R(){return t({cmd:"guild",subcmd:"ranks"}).then(G)}const D=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]]
function M(n,t){const e=t.children[0],r=m(e.firstChild),s=n.find((n=>n&&n.name===r))
var a
s&&d(e,`<span class="fshBlue">(${a=s.permissions,I(D.filter((([n])=>N(a,n))).reduce(((n,[,t])=>n+t-1),0)+a.toString(2).split("").map(Number).reduce(((n,t)=>n+t),0),1)}) Tax:(${s.tax}%)</span> `)}function T(n,t,e){e.s&&(n.forEach(i(M,[e.r[0]].concat(e.r.ranks))),t.classList.remove("fshSpinner"))}function q(n,t){const e=w({className:"fshBlock fshRelative fshSpinner fshSpinner12",style:{height:"15px",width:"136px"}})
C(e,t),a(B,R).then(i(T,n,e))}function F(n){const t=s('#pCC a[href*="=ranks&subcmd2=add"]')
t&&function(n,t){const e=v({className:"custombutton",type:"button",value:"Get Rank Weightings"})
o(e,i(q,n,e))
const r=t.parentNode.parentNode
c(r,"&nbsp;"),u(r,e)}(n,t)}function J(n,e){return t({cmd:"guild",subcmd:"ranks",subcmd2:n,rank_id:e}).then((()=>({s:!0})))}function P(n,t){return B({subcmd2:n,rank_id:t})}let W
function z(n,t,e){const r=n.target.getAttribute("onclick").match(/rank_id=(\d+)/)
var s,o
s=E(n.target.value),o=r[1],a(P,J,s,o)
const i=t.parentNode.rows[e]
S(t,i)
const c="Up"===n.target.value?-22:22
window.scrollBy(0,c),n.stopPropagation()}function H(n){const t=n.target.parentNode.parentNode.parentNode,e=t.rowIndex+("Up"===n.target.value?-1:2);(function(n,t){return W>=Math.min(n.rowIndex,t)||t<1||t>n.parentNode.rows.length})(t,e)||z(n,t,e)}function K(n){(function(n){return["Up","Down"].includes(n.target.value)})(n)&&H(n)}function O(n,t){return t[0]===n}function Q(n,t){const e=t.children[0],r=function(n,t){return 1===n.rowIndex?"Guild Founder":m(t)}(t,e),s=n.find(i(O,r));(function(n){return n&&n[1].length>0})(s)&&(!function(n,t){t&&t[1].includes(y())&&(W=n.rowIndex)}(t,s),c(e,` <span class="fshBlue">- ${s[1].join(", ")}</span>`))}function V(n){const t=function(){const n=f.lastElementChild.previousElementSibling
if(n.rows&&n.rows.length>7)return b(n.rows[7].children[0].children[0].rows)}()
t&&(g([5,3,t,1,i(Q,n)]),F(t),W&&p("ajaxifyRankControls")&&o(f,K,!0))}function X(n,t){const e=n.find(i(O,t[1].rank_name))
return e?e[1].push(t[0]):n.push([t[1].rank_name,[t[0]]]),n}function Y(n){return h(n).filter(k).reduce(X,[])}function Z(){l()||j(!1).then(Y).then(V)}export default Z
//# sourceMappingURL=rank-630407b4.js.map
