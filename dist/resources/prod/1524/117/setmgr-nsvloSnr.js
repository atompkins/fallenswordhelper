import{i as t}from"./instantiate-zhKnqr-J.js"
import{S as e,L as n,M as o,bh as s,bi as l,bc as i,bf as a,bj as r,bL as c,O as u,Q as d,T as m,a0 as f,a3 as v,s as b,b3 as p,N as $,P as x,am as h,_ as C,b4 as g}from"./calfSystem-G1dN925O.js"
import{h as k}from"./await_block-nr-x0DeQ.js"
import{M as j}from"./ModalTitled-L8qvvlEc.js"
import"./Modal-YW3k5oJC.js"
function w(t,e,n){const o=t.slice()
return o[3]=e[n].name,o[4]=e[n].items,o[6]=n,o}function M(t,e,n){const o=t.slice()
return o[7]=e[n].l,o[8]=e[n].n,o}function S(t){let e
return{c(){e=u("p"),e.textContent=`${t[11].message}`,p(e,"color","red")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function y(t){let e,n,o,s,l,i,a,r,c,d,v,b,p,C,g,k,j,M,S,y,A,R=[],T=new Map,_=$(t[2].r)
const B=t=>t[6]
for(let e=0;e<_.length;e+=1){let n=w(t,_,e),o=B(n)
T.set(o,R[e]=L(o,n))}return{c(){e=u("div"),e.textContent="Combat Set",n=x(),o=u("div"),o.textContent="Helmet",s=x(),l=u("div"),l.textContent="Armor",i=x(),a=u("div"),a.textContent="Gloves",r=x(),c=u("div"),c.textContent="Boots",d=x(),v=u("div"),v.textContent="Weapon",b=x(),p=u("div"),p.textContent="Shield",C=x(),g=u("div"),g.textContent="Ring",k=x(),j=u("div"),j.textContent="Amulet",M=x(),S=u("div"),S.textContent="Rune",y=x()
for(let t=0;t<R.length;t+=1)R[t].c()
A=h()},m(t,u){m(t,e,u),m(t,n,u),m(t,o,u),m(t,s,u),m(t,l,u),m(t,i,u),m(t,a,u),m(t,r,u),m(t,c,u),m(t,d,u),m(t,v,u),m(t,b,u),m(t,p,u),m(t,C,u),m(t,g,u),m(t,k,u),m(t,j,u),m(t,M,u),m(t,S,u),m(t,y,u)
for(let e=0;e<R.length;e+=1)R[e]&&R[e].m(t,u)
m(t,A,u)},d(t){t&&(f(e),f(n),f(o),f(s),f(l),f(i),f(a),f(r),f(c),f(d),f(v),f(b),f(p),f(C),f(g),f(k),f(j),f(M),f(S),f(y),f(A))
for(let e=0;e<R.length;e+=1)R[e].d(t)}}}function A(t){let e
return{c(){e=u("div"),e.textContent=`${t[7]} ${t[8]}`,d(e,"class","data svelte-awuikt")},m(t,n){m(t,e,n)},p:C,d(t){t&&f(e)}}}function L(t,e){let n,o,s,l=$(e[4].sort(G)),i=[]
for(let t=0;t<l.length;t+=1)i[t]=A(M(e,l,t))
return{key:t,first:null,c(){n=u("div"),n.textContent=`${e[3]}`,o=x()
for(let t=0;t<i.length;t+=1)i[t].c()
s=h(),d(n,"class","data svelte-awuikt"),this.first=n},m(t,e){m(t,n,e),m(t,o,e)
for(let n=0;n<i.length;n+=1)i[n]&&i[n].m(t,e)
m(t,s,e)},p:C,d(t){t&&(f(n),f(o),f(s)),g(i,t)}}}function R(t){let e
return{c(){e=u("p"),e.textContent="loading..."},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function T(t){let e,n={ctx:t,current:null,token:null,hasCatch:!0,pending:R,then:y,catch:S,value:2,error:11}
return k(c(),n),{c(){e=u("div"),n.block.c(),d(e,"class","container svelte-awuikt")},m(t,o){m(t,e,o),n.block.m(e,n.anchor=null),n.mount=()=>e,n.anchor=null},p(e,n){t=e},d(t){t&&f(e),n.block.d(),n.token=null,n=null}}}function _(t){let e
return{c(){e=v("Combat Set Manager")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function B(t){let e,n
return e=new j({props:{visible:t[0],$$slots:{title:[_],default:[T]},$$scope:{ctx:t}}}),e.$on("close",t[1]),{c(){s(e.$$.fragment)},m(t,o){l(e,t,o),n=!0},p(t,[n]){const o={}
1&n&&(o.visible=t[0]),4096&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){a(e.$$.fragment,t),n=!1},d(t){r(e,t)}}}const G=({t:t},{t:e})=>t-e
function H(t,e,n){let{visible:o=!0}=e
return t.$$set=t=>{"visible"in t&&n(0,o=t.visible)},[o,function(){b("setmgr","close"),n(0,o=!1)}]}var N=class extends e{constructor(t){super(),n(this,t,H,B,o,{visible:0})}}
const O={visible:!0}
let P=0
function Q(){P=t(O,P,N)}export{Q as default}
//# sourceMappingURL=setmgr-nsvloSnr.js.map