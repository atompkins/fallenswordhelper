import{G as n,$ as t,S as o,L as a,M as i,O as s,P as e,Q as c,T as r,U as u,_ as l,a0 as f,ag as m,dL as p,dM as d,s as g,a3 as h,X as b,a4 as x,am as j,b5 as k,aC as w,g as G,d as J}from"./calfSystem-CUgWHLtG.js"
import{h as S}from"./await_block-DpKGh93y.js"
import{g as z}from"./guildGroups-EsvEM3ex.js"
import{a as T}from"./all-YfMtr2SN.js"
import{d as v}from"./daViewGroups-0nlukBpY.js"
import"./guild-CuLUwg__.js"
function y(n){return z({subcmd2:"joinall",group:n})}function M(t){return n({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t})}function C(n){return T(n.map(M))}function _(n){let t,o,a,i,e,l,m
return{c(){t=s("p"),o=s("button"),a=h("Join all attack groups"),i=h(n[2]),e=h("."),c(o,"type","button"),c(o,"class","svelte-44dw92"),c(t,"class","notification-content")},m(s,c){r(s,t,c),u(t,o),u(o,a),u(o,i),u(o,e),l||(m=b(o,"click",n[4],{once:!0}),l=!0)},p(n,t){4&t&&x(i,n[2])},d(n){n&&f(t),l=!1,m()}}}function L(n){let t,o={ctx:n,current:null,token:null,hasCatch:!1,pending:$,then:U,catch:O}
return S(n[3](),o),{c(){t=j(),o.block.c()},m(n,a){r(n,t,a),o.block.m(n,o.anchor=a),o.mount=()=>t.parentNode,o.anchor=t},p(t,o){n=t},d(n){n&&f(t),o.block.d(n),o.token=null,o=null}}}function O(n){return{c:l,m:l,d:l}}function U(n){let t
return{c(){t=s("p"),t.textContent="Joined.",c(t,"class","notification-content"),k(t,"line-height","32px")},m(n,o){r(n,t,o)},d(n){n&&f(t)}}}function $(n){let t
return{c(){t=s("span"),c(t,"class","notification-content fshSpinner fix-classic-theme svelte-44dw92")},m(n,o){r(n,t,o)},d(n){n&&f(t)}}}function A(n){let t,o,a
function i(n,t){return n[0]?L:_}let m=i(n),p=m(n)
return{c(){t=s("a"),o=s("span"),a=e(),p.c(),c(o,"id","notification-icon-guild-group"),c(o,"class","notification-icon"),c(t,"href",n[1])},m(n,i){r(n,t,i),u(t,o),u(t,a),p.m(t,null)},p(n,[o]){m===(m=i(n))&&p?p.p(n,o):(p.d(1),p=m(n),p&&(p.c(),p.m(t,null))),2&o&&c(t,"href",n[1])},i:l,o:l,d(n){n&&f(t),p.d()}}}function D(n,o,a){const i=n=>!m.enableMaxGroupSizeToJoin||n.members.length<m.maxGroupSizeToJoin,s=n=>n.name===w(),e=n=>!n.members.find(s),c=n=>n.id
let r=0,u=p,l=""
async function f(n){const o=n.r.filter(i).filter(e).map(c)
var a
o.length&&await(a=o,t(y,C,a))}return m.enableMaxGroupSizeToJoin&&(u=d,l=` less than size ${m.maxGroupSizeToJoin}`),[r,u,l,async function(){const n=await v()
n?.s&&await f(n)},function(n){n.preventDefault(),g("notification","Join All"),a(0,r=1)}]}class F extends o{constructor(n){super(),a(this,n,D,A,i,{})}}function N(){const n=G("notification-guild-group")
n&&function(n){J("",n),new F({target:n})}(n)}export{N as default}
//# sourceMappingURL=injectJoinAllLink-BaDFMpFe.js.map
