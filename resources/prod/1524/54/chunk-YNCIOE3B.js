import{a as ht}from"./chunk-YQ2PEIUP.js";import{a as gt}from"./chunk-C7OLZHP6.js";import{a as mt}from"./chunk-HGG5OAHQ.js";import{a as Q}from"./chunk-FI7QBVVQ.js";import{A as N,C as k,G as pt,L,M as $,Q as D,R as A,S as E,T as dt,U as kt,d as ut,p as a,q as l,s as v,t as p,v as ft}from"./chunk-3UYX2GUA.js";import{a as bt}from"./chunk-NVOYJGJA.js";import{a as d}from"./chunk-K4SYXXXK.js";import{a as it}from"./chunk-HU2ZFPLQ.js";import{a as ct}from"./chunk-XNGQGTQC.js";import{a as B}from"./chunk-X5WGZB5F.js";import{b as Z}from"./chunk-PL52TDTI.js";import{a as ot}from"./chunk-AKFTWN4L.js";import{a as X}from"./chunk-T4Z7JY2Z.js";import{a as T}from"./chunk-6AI4EA3G.js";import{a as rt}from"./chunk-REJ57ZO4.js";import{a as lt}from"./chunk-57ZUVRXU.js";import{a as at}from"./chunk-SVIDRAEF.js";import{a as st}from"./chunk-LKZ3ZEU4.js";import{a as f}from"./chunk-MF5QCESC.js";import{a as nt}from"./chunk-OSE7TXVS.js";import{a as tt}from"./chunk-JFH2ANYQ.js";import{a as et}from"./chunk-4RUOSMIM.js";import{b as W}from"./chunk-3PFYPJ7R.js";import{a as w}from"./chunk-6U4GCDKS.js";import{V as K,a as Y,n as z,r as J}from"./chunk-4X7HEDV6.js";import{a as q}from"./chunk-HGTLDLGM.js";var xt,wt;function _(){if(!wt){let t=w.subcmd==="dropitems"?"removeIndex[]":"storeIndex[]";xt=document.forms[0].elements[t],wt=!0}return xt}function y(){let t=_();return t?tt(t instanceof RadioNodeList?t:[t]):[]}function S(){return y().filter(t=>!T("fshHide",d(t)))}var H;function h(){return H||(H=gt()),H}function R(t){return at({subcmd:"dodropitems",removeIndex:t})}function U(t){return R(t)}function Lt(t){return d(t.target).cells[0].children[0].value}async function At(t){let{items:e}=await h();f("storeitems","Check All of Type"),S().filter(o=>e[o.value]&&e[o.value].item_id===e[Lt(t)].item_id).forEach(o=>{o.checked=!o.disabled&&!o.checked})}function Et(t){let e=d(t);e.cells[0].children[0].disabled=!0,nt(".actionButton",e).forEach(o=>{o.disabled=!0,o.textContent="",o.removeAttribute("data-tooltip"),o.classList.add("inProgress")}),t.blur(),t.classList.add("fshSpinner","fshSpinner12")}function Qt(t,e){t.target.classList.remove("fshSpinner","fshSpinner12"),t.target.classList.add("fshGreen"),t.target.textContent=e}async function $t(t,e,o){Et(t.target);let r=await e([Lt(t)]);r&&r.s?Qt(t,o):lt(r)}var Bt=[["Check All",At],["Quick Send",t=>{f("storeitems","Quick Send"),$t(t,ht,"Sent")}],["Quick Drop",t=>{f("storeitems","Quick Drop"),$t(t,U,"Dropped")}]];function V(t){if(t.target.tagName==="A"&&["AH","UFSG"].includes(t.target.textContent)&&f("storeitems",t.target.textContent),t.target.tagName!=="BUTTON"||T("custombutton",t.target))return;let e=Bt.find(([o])=>o===et(t.target));e&&e[1](t)}function Nt(t){let e=t[2](t[0])+"",o,r;return{c(){o=p(e),r=p(" AH and UFSG Links")},m(n,i){a(n,o,i),a(n,r,i)},p(n,i){i&1&&e!==(e=n[2](n[0])+"")&&N(o,e)},d(n){n&&l(o),n&&l(r)}}}function Ht(t){let e=t[2](t[1])+"",o,r;return{c(){o=p(e),r=p(" Quick Drop links")},m(n,i){a(n,o,i),a(n,r,i)},p(n,i){i&2&&e!==(e=n[2](n[1])+"")&&N(o,e)},d(n){n&&l(o),n&&l(r)}}}function Rt(t){let e,o,r;return e=new Q({props:{$$slots:{default:[Ut]},$$scope:{ctx:t}}}),e.$on("click",t[5]),{c(){o=v("div"),D(e.$$.fragment),k(o,"display","contents"),k(o,"--button-width","10.8em")},m(n,i){a(n,o,i),A(e,o,null),r=!0},p(n,i){let c={};i&128&&(c.$$scope={dirty:i,ctx:n}),e.$set(c)},i(n){r||(L(e.$$.fragment,n),r=!0)},o(n){$(e.$$.fragment,n),r=!1},d(n){n&&l(o),E(e,n)}}}function Ut(t){let e;return{c(){e=p("Select All Guild Locked")},m(o,r){a(o,e,r)},d(o){o&&l(e)}}}function Vt(t){let e,o,r,n,i,c,x,g;e=new Q({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),e.$on("click",t[3]),n=new Q({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),n.$on("click",t[4]);let u=w.subcmd2==="storeitems"&&Rt(t);return{c(){o=v("div"),D(e.$$.fragment),r=p(`\xA0
`),i=v("div"),D(n.$$.fragment),c=p(`\xA0
`),u&&u.c(),x=ft(),k(o,"display","contents"),k(o,"--button-width","11.8em"),k(i,"display","contents"),k(i,"--button-width","10.6em")},m(s,m){a(s,o,m),A(e,o,null),a(s,r,m),a(s,i,m),A(n,i,null),a(s,c,m),u&&u.m(s,m),a(s,x,m),g=!0},p(s,[m]){let G={};m&129&&(G.$$scope={dirty:m,ctx:s}),e.$set(G);let M={};m&130&&(M.$$scope={dirty:m,ctx:s}),n.$set(M),w.subcmd2==="storeitems"&&u.p(s,m)},i(s){g||(L(e.$$.fragment,s),L(n.$$.fragment,s),L(u),g=!0)},o(s){$(e.$$.fragment,s),$(n.$$.fragment,s),$(u),g=!1},d(s){s&&l(o),E(e,s),s&&l(r),s&&l(i),E(n,s),s&&l(c),u&&u.d(s),s&&l(x)}}}function Ot(t,e,o){let r=pt(),n=s=>s?"Hide":"Show",{showExtraLinks:i=!1}=e,{showQuickDropLinks:c=!1}=e;function x(){f("storeitems","toggleShowExtraLinks"),o(0,i=!i),B("showExtraLinks",i),r("showExtraLinks",i)}function g(){f("storeitems","toggleShowQuickDropLinks"),o(1,c=!c),B("showQuickDropLinks",c),r("showQuickDropLinks",c)}function u(){f("storeitems","selectLocked"),r("selectLocked")}return t.$$set=s=>{"showExtraLinks"in s&&o(0,i=s.showExtraLinks),"showQuickDropLinks"in s&&o(1,c=s.showQuickDropLinks)},[i,c,n,x,g,u]}var _t=class extends kt{constructor(e){super();dt(this,e,Ot,Vt,ut,{showExtraLinks:0,showQuickDropLinks:1})}},yt=_t;var O;function Pt(t,e){if(e.item_id!==13699)return e.item_name;let o=t.find(r=>r.value===String(e.inv_id));return o?ot(o.parentNode.parentNode.children[2]):e.item_name}async function Ft(t){let e=await h();return!e||!e.items?{}:bt(rt(e.items).map(([o,r])=>[o,{...r,item_name:Pt(t,r)}]))}async function jt(t){return O||(O=await Ft(t)),O}async function P(){let t=y();if(!t.length)return[];let e=await jt(t);return t.map(o=>[d(o).cells[2],e[o.value]]).filter(([,o])=>o)}var C=0,St=1,F=2,Ct=3,I=4,It=["showExtraLinks","enableItemColoring","checkAllOfType","showQuickSendLinks","showQuickDropLinks"];function Gt(t,e){return t[e]=(t[e]||0)+1,t}function Mt(t){return{...t.map(([,e])=>e.item_id).reduce(Gt,{}),13699:1}}var qt=t=>` data-tooltip="INSTANTLY ${t} THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk."`,Tt=(t,e,o)=>` [<button class="fshStoreItemsButton ${t}"${e}>${o}</button>]`,vt=(t,e,o)=>Tt(`${t} actionButton tooltip-multiline`,qt(e),`Quick ${o}`),Dt=(t,e,o)=>`[<a href="${t}"${e}>${o}</a>]`;function Yt(t){return t.bound?'<span class="aHSpacer"></span>':Dt(`${J}${encodeURIComponent(t.item_name)}`,"","AH")}var zt=t=>Dt(`${K}items${z}view&item_id=${t.item_id}`,' target="_blank"',"UFSG"),Jt=(t,e,o)=>t[F]&&e[o.item_id]>1,Kt=(t,e)=>t[Ct]&&(!e.bound||e.guild_tag!==-1),Wt=(t,e)=>t[I]&&e.guild_tag===-1;function Xt(t,e){return e[0]()?t+e[1]():t}function Zt(t,e,o){return[[()=>t[C],()=>`${Yt(o)} ${zt(o)}`],[()=>!0,()=>`&nbsp;${o.item_name}`],[()=>Jt(t,e,o),()=>Tt("fshBlack","","Check All")],[()=>Kt(t,o),()=>vt("fshBlue","SENDS","Send")],[()=>Wt(t,o),()=>vt("fshRed","DROP","Drop")]]}function te(t,e,[o,r]){let n=o;t[St]&&(n.className=Y[r.rarity].clas);let i=Zt(t,e,r).reduce(Xt,"");n.innerHTML!==i&&(n.innerHTML=i)}async function b(t){let e=await P(),o=t[F]?Mt(e):[];X(3,it,[[5,3,e,0,q(te,t,o)]])}function ee(t){let e=document.forms[0];return new yt({props:{showExtraLinks:t[C],showQuickDropLinks:t[I]},target:e.parentNode.children[5].children[0]})}async function oe(){let t=S();if(!t.length)return;let e=await h();!e||!e.items||t.map(o=>[o,e.items[o.value]]).filter(([,o])=>o).forEach(([o,r])=>{o.checked=!o.disabled&&r.guild_tag!==-1})}function j(t){let e=ee(t);e.$on("showExtraLinks",o=>{t[C]=o.detail,b(t)}),e.$on("showQuickDropLinks",o=>{t[I]=o.detail,b(t)}),e.$on("selectLocked",()=>{oe()})}async function ne(){if(ct()||!_())return;let e=It.map(o=>W(o));mt(),j(e),e.some(o=>o)&&b(e),st(Z,V)}export{_ as a,U as b,y as c,S as d,h as e,ne as f};
//# sourceMappingURL=chunk-YNCIOE3B.js.map
