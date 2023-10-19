import{aT as t,o as e,D as n,v as s,cr as a,a3 as l,S as c,J as o,K as r,L as i,M as u,N as f,P as h,Q as m,W as p,X as d,aZ as g,C as b,_ as $,U as T,b5 as v,b8 as k,Y as w,n as y,ba as j,bb as N,bc as x,a0 as R,f as S,bl as H,w as C,au as B,p as E,bH as F,s as L,aH as _,m as M,i as I,q as A}from"./calfSystem-4830a18d.js"
import{d as D}from"./dataRows-ab26c2ce.js"
import{g as K}from"./getTitle-979b8fc1.js"
import{a as U,g as X,t as q}from"./getTitanString-4524f909.js"
import{g as J}from"./getPlayerId-283e8a7a.js"
import{o as O}from"./openQuickBuffById-8cca49b4.js"
import{a as P}from"./roundToString-b56b87fd.js"
import{u as Q}from"./uniq-e12b948a.js"
import{n as Y}from"./now-6f22aec9.js"
import{g as V,s as W}from"./idb-7e56faaa.js"
import{p as Z}from"./parseDateAsTimestamp-2956e520.js"
import{e as z}from"./each-1f09c43f.js"
import{h as G,u as tt}from"./await_block-31b017e2.js"
import{c as et}from"./closestTable-082cc634.js"
import{L as nt}from"./LinkButtonBracketed-0fb81602.js"
import{t as st}from"./toggleForce-6124e333.js"
import"./fshOpen-c0e91392.js"
import"./numberIsNaN-a40c3bbb.js"
import"./dateUtc-36fb94b9.js"
import"./LinkButton-59368dc4.js"
const at=t=>J(t.cells[0].children[0].href)
function lt(t){const{target:e}=t
a("[b]",e)&&function(t){t.previousElementSibling&&O(J(t.previousElementSibling.href))}(e),a("all",e)&&function(t){const e=t.parentNode.parentNode.parentNode.parentNode,n=D(e,3,0).map(at).join()
O(n)}(e)}function ct(t){n("fshBl",t.target)&&lt(t)}function ot(t){s(t.cells[0],' <button class="fshBl fshXSmall">[b]</button>')}function rt(t){D(t,3,0).forEach(ot),s(t.rows[0].cells[0],' <button class="fshBl fshXSmall">all</button>')}function it(t,e){return t.rows.length>1&&e>1}function ut(n){n.length>2&&function(n){t(n).filter(it).forEach(rt),e(n[1],ct)}(n)}function ft(t){const e=t.hp.split("/")
var n,a,c
s(t.tr.cells[3],(n=Number(l(t.tr.cells[3])),a=Number(e[0]),c=Number(e[1]),`<br><span class="fshBlue"> (${P(U(c-a,n),2)}% Current <br>${P(100*n/c,2)}% Total<br>${X(n,c,a)})`))}function ht(t,e,n){const s=t.slice()
return s[4]=e[n][0],s[5]=e[n][1],s}function mt(t){let e,n,s,a,l,c,o
return{c(){e=i("tr"),n=i("td"),n.textContent=`${t[4]}`,s=u(),a=i("td"),a.textContent=`${t[5].cooldownText}`,l=u(),c=i("td"),c.textContent=`${t[5].seen}`,o=u(),f(n,"class","svelte-1g6lyd8"),f(a,"class","cd svelte-1g6lyd8"),f(c,"class","svelte-1g6lyd8")},m(t,r){h(t,e,r),m(e,n),m(e,s),m(e,a),m(e,l),m(e,c),m(e,o)},p:p,d(t){t&&d(e)}}}function pt(t){let e,n,s,a,l=z(t[0]()),c=[]
for(let e=0;e<l.length;e+=1)c[e]=mt(ht(t,l,e))
return{c(){e=i("table"),n=i("tbody"),s=i("tr"),s.innerHTML='<td class="header svelte-1g6lyd8">Titan</td> <td class="header svelte-1g6lyd8">Cooldown</td> <td class="header svelte-1g6lyd8">Visible</td>',a=u()
for(let t=0;t<c.length;t+=1)c[t].c()
f(e,"class","svelte-1g6lyd8")},m(t,l){h(t,e,l),m(e,n),m(n,s),m(n,a)
for(let t=0;t<c.length;t+=1)c[t]&&c[t].m(n,null)},p(t,[e]){if(1&e){let s
for(l=z(t[0]()),s=0;s<l.length;s+=1){const a=ht(t,l,s)
c[s]?c[s].p(a,e):(c[s]=mt(a),c[s].c(),c[s].m(n,null))}for(;s<c.length;s+=1)c[s].d(1)
c.length=l.length}},i:p,o:p,d(t){t&&d(e),g(c,t)}}}function dt(t,e,n){let{theTitans:s}=e
const a=([,t])=>t.coolTime>Y(),l=([,t],[,e])=>t.coolTime-e.coolTime
return t.$$set=t=>{"theTitans"in t&&n(1,s=t.theTitans)},[()=>b(s).filter(a).sort(l),s]}class gt extends c{constructor(t){super(),o(this,t,dt,pt,r,{theTitans:1})}}function bt(t,e,n){const s=t.slice()
return s[29]=e[n][0],s[30]=e[n][1],s[31]=e,s[32]=n,s}function $t(t){return{c:p,m:p,p:p,i:p,o:p,d:p}}function Tt(t){let e,n,s,a,l,c,o,r=z(t[3]),p=[]
for(let e=0;e<r.length;e+=1)p[e]=vt(bt(t,r,e))
return a=new nt({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),a.$on("click",t[9]),c=new nt({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),c.$on("click",t[10]),{c(){e=i("div")
for(let t=0;t<p.length;t+=1)p[t].c()
n=u(),s=i("div"),j(a.$$.fragment),l=u(),j(c.$$.fragment),f(e,"id","titan-list"),f(e,"class","svelte-1s0h251"),f(s,"class","svelte-1s0h251")},m(t,r){h(t,e,r)
for(let t=0;t<p.length;t+=1)p[t]&&p[t].m(e,null)
h(t,n,r),h(t,s,r),N(a,s,null),m(s,l),N(c,s,null),o=!0},p(t,n){if(264&n[0]){let s
for(r=z(t[3]),s=0;s<r.length;s+=1){const a=bt(t,r,s)
p[s]?p[s].p(a,n):(p[s]=vt(a),p[s].c(),p[s].m(e,null))}for(;s<p.length;s+=1)p[s].d(1)
p.length=r.length}const s={}
4&n[1]&&(s.$$scope={dirty:n,ctx:t}),a.$set(s)
const l={}
4&n[1]&&(l.$$scope={dirty:n,ctx:t}),c.$set(l)},i(t){o||(v(a.$$.fragment,t),v(c.$$.fragment,t),o=!0)},o(t){k(a.$$.fragment,t),k(c.$$.fragment,t),o=!1},d(t){t&&(d(e),d(n),d(s)),g(p,t),x(a),x(c)}}}function vt(t){let e,n,s,a,l,c,o,r=t[29]+""
function p(){t[16].call(n,t[31],t[32])}return{c(){e=i("label"),n=i("input"),s=u(),a=$(r),l=u(),f(n,"type","checkbox"),f(e,"class","svelte-1s0h251")},m(r,i){h(r,e,i),m(e,n),n.checked=t[30],m(e,s),m(e,a),h(r,l,i),c||(o=[T(n,"change",p),T(n,"change",t[8])],c=!0)},p(e,s){t=e,8&s[0]&&(n.checked=t[30]),8&s[0]&&r!==(r=t[29]+"")&&R(a,r)},d(t){t&&(d(e),d(l)),c=!1,w(o)}}}function kt(t){let e
return{c(){e=$("Select All")},m(t,n){h(t,e,n)},d(t){t&&d(e)}}}function wt(t){let e
return{c(){e=$("Select None")},m(t,n){h(t,e,n)},d(t){t&&d(e)}}}function yt(t){return{c:p,m:p,p:p,i:p,o:p,d:p}}function jt(t){let e,n,s,a,l,c,o,r,p,g,b,y,j,N,x,R,S,H,C,B,E,F,L,_,M,I,A,D={ctx:t,current:null,token:null,hasCatch:!1,pending:yt,then:Tt,catch:$t,blocks:[,,,]}
return G(t[4](),D),{c(){e=i("table"),n=i("tbody"),s=i("tr"),s.innerHTML='<td class="header svelte-1s0h251" colspan="3"></td>',a=u(),l=i("tr"),c=i("td"),o=i("label"),r=i("input"),p=$("\n          Current"),g=u(),b=i("label"),y=i("input"),j=$("\n          History"),N=u(),x=i("label"),R=i("input"),S=$("\n          Securable"),H=u(),C=i("tr"),C.innerHTML='<td class="header svelte-1s0h251" colspan="3"></td>',B=u(),E=i("tr"),F=i("td"),D.block.c(),L=u(),_=i("tr"),_.innerHTML='<td class="header svelte-1s0h251" colspan="3"></td>',f(r,"type","checkbox"),f(o,"class","svelte-1s0h251"),f(y,"type","checkbox"),f(b,"class","svelte-1s0h251"),f(R,"type","checkbox"),f(x,"class","svelte-1s0h251"),f(c,"colspan","3"),f(c,"class","svelte-1s0h251"),f(F,"colspan","3"),f(F,"class","svelte-1s0h251"),f(e,"class","svelte-1s0h251")},m(i,u){h(i,e,u),m(e,n),m(n,s),m(n,a),m(n,l),m(l,c),m(c,o),m(o,r),r.checked=t[0],m(o,p),m(c,g),m(c,b),m(b,y),y.checked=t[1],m(b,j),m(c,N),m(c,x),m(x,R),R.checked=t[2],m(x,S),m(n,H),m(n,C),m(n,B),m(n,E),m(E,F),D.block.m(F,D.anchor=null),D.mount=()=>F,D.anchor=null,m(n,L),m(n,_),M=!0,I||(A=[T(r,"change",t[13]),T(r,"change",t[5]),T(y,"change",t[14]),T(y,"change",t[6]),T(R,"change",t[15]),T(R,"change",t[7])],I=!0)},p(e,n){t=e,1&n[0]&&(r.checked=t[0]),2&n[0]&&(y.checked=t[1]),4&n[0]&&(R.checked=t[2]),tt(D,t,n)},i(t){M||(v(D.block),M=!0)},o(t){for(let t=0;t<3;t+=1){const e=D.blocks[t]
k(e)}M=!1},d(t){t&&d(e),D.block.d(),D.token=null,D=null,I=!1,w(A)}}}const Nt="fsh_titanFilter"
function xt(e,n,s){let{theTitans:a}=n,{titanRows:l}=n,c=!0,o=!0,r=!1,i=[]
const u=([t],[e])=>H(t,e),f=()=>W(Nt,{current:c,history:o,securable:r,titans:i}),h=({titanName:t})=>i.find((([e])=>e===t))[1],m=t=>t.active&&c,p=t=>!t.active&&o,d=t=>t.securable||!r
function g(t){return(m(t)||p(t))&&h(t)&&d(t)}function $([e,n]){const s=t(et(e.tr).rows),a=e.tr.rowIndex
s.slice(a,a+6).forEach((t=>st(t,!n))),e.visible=n}function T(){l.map((t=>[t,g(t)])).filter((([t,e])=>t.visible!==e)).forEach($)}function v(){f(),T()}return e.$$set=t=>{"theTitans"in t&&s(11,a=t.theTitans),"titanRows"in t&&s(12,l=t.titanRows)},[c,o,r,i,async function(){const t=await V(Nt)
t&&s(0,({current:c,history:o,securable:r,titans:i}=t),c,s(1,o),s(2,r),s(3,i)),s(3,i=b({...S(b(a).map((([t])=>[t,!0]))),...S(i.map((([t,e])=>[q(t),e])))}).sort(u)),T()},function(){y("TitanFilter","toggleCurrent"),v()},function(){y("TitanFilter","toggleHistory"),v()},function(){y("TitanFilter","toggleSecurable"),v()},function(){y("TitanFilter","toggleTitan"),v()},function(){y("TitanFilter","selectAll"),s(3,i=i.map((([t])=>[t,!0]))),v()},function(){y("TitanFilter","selectNone"),s(3,i=i.map((([t])=>[t,!1]))),v()},a,l,function(){c=this.checked,s(0,c)},function(){o=this.checked,s(1,o)},function(){r=this.checked,s(2,r)},function(t,e){t[e][1]=this.checked,s(3,i)}]}class Rt extends c{constructor(t){super(),o(this,t,xt,jt,r,{theTitans:11,titanRows:12},null,[-1,-1])}}function St(t){let e,n,s,a,l,c
return s=new gt({props:{theTitans:t[0]}}),l=new Rt({props:{theTitans:t[0],titanRows:t[1]}}),{c(){e=i("tr"),n=i("td"),j(s.$$.fragment),a=u(),j(l.$$.fragment),f(n,"colspan","3")},m(t,o){h(t,e,o),m(e,n),N(s,n,null),m(n,a),N(l,n,null),c=!0},p(t,[e]){const n={}
1&e&&(n.theTitans=t[0]),s.$set(n)
const a={}
1&e&&(a.theTitans=t[0]),2&e&&(a.titanRows=t[1]),l.$set(a)},i(t){c||(v(s.$$.fragment,t),v(l.$$.fragment,t),c=!0)},o(t){k(s.$$.fragment,t),k(l.$$.fragment,t),c=!1},d(t){t&&d(e),x(s),x(l)}}}function Ht(t,e,n){let{theTitans:s}=e,{titanRows:a}=e
return t.$$set=t=>{"theTitans"in t&&n(0,s=t.theTitans),"titanRows"in t&&n(1,a=t.titanRows)},[s,a]}class Ct extends c{constructor(t){super(),o(this,t,Ht,St,r,{theTitans:0,titanRows:1})}}function Bt(t){const e=l(t.nextElementSibling.cells[0])
return{cooldownText:e,coolTime:(n=e,n?.includes("until")?Z(n.replace("Cooldown until: ","")):0),seen:"yes"}
var n}const Et=({titanName:t,tr:e})=>[t,Bt(e)]
function Ft(t,e){return S(b(t).map((([t,e])=>[q(t),e])).filter((([t])=>!e[t])).filter((([,t])=>t.coolTime>Y())).map((([t,e])=>[t,{...e,seen:"no"}])))}async function Lt(t,e){const n=function(t,e){const n=S(Q(e,"titanName").map(Et))
return{...n,...t&&Ft(t,n)}}(await V("fsh_titans"),e)
t[0].rows.length>5&&function(t,e,n){new Ct({anchor:t.rows[5],props:{theTitans:e,titanRows:n},target:t.children[0]})}(t[0],n,e),W("fsh_titans",n)}function _t(t){!function(t){const e=encodeURIComponent(t.titanName),[n]=t.tr.cells[0].children,s=M({href:`${_}creatures&search_name=${e}`,target:"_blank"})
I(s,n),I(t.tr.cells[0],s)}(t),function(t){s(t.tr.cells[0],t.titanName)}(t)}function Mt(t){!function(t){t.active&&ft(t)}(t),_t(t),function(t){const[,e]=t.tr.cells,n=l(e)
L(`<a href="${_}realms&search_name=${n}" target="_blank">${n}</a>`,e)}(t)}const It=t=>{return{guildKills:Number(l(t.cells[3])),hp:l(t.cells[2]),titanName:q((e=t,K(A("img",e)))),tr:t,visible:!0}
var e},At=t=>({...t,active:!t.hp.includes("-"),titanHp:t.hp.split("/").map(Number)}),Dt=t=>({...t,securable:t.active&&Math.ceil(t.titanHp[1]/2+1)-t.guildKills<=t.titanHp[0]})
function Kt(){if(C())return
const t=B(F,E())
if(!t?.length)return
ut(t)
const e=(t=>D(t[1],4,0)?.map(It).map(At).map(Dt))(t)
e&&(e.forEach(Mt),Lt(t,e))}export{Kt as default}
//# sourceMappingURL=injectScouttower-3356b30d.js.map