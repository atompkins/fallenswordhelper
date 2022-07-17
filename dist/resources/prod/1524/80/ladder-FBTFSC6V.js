import{a as Q}from"./chunk-OANIGKAK.js";import{a as K}from"./chunk-OBE7QN77.js";import"./chunk-YHJ5CNHX.js";import{C as d,X as k,Y as S,a as s,b as W,d as j,ea as U,fa as Y,r as y,s as l,t as c,v as f,x as B,y as N,z as C}from"./chunk-5S4DWFCV.js";import{a as J}from"./chunk-NEIJ7CPP.js";import"./chunk-UKK4PLUM.js";import{a as q}from"./chunk-IZN4VWOX.js";import{a as G}from"./chunk-FNBCAVVI.js";import{a as b}from"./chunk-YNGMMT7C.js";import{a as z}from"./chunk-TNZ4IZQ7.js";import"./chunk-X25XOQCJ.js";import{a as D}from"./chunk-WIZVYCBC.js";import{a as M}from"./chunk-NCIHVVRD.js";import"./chunk-74YO2Y7V.js";import"./chunk-OHJEVCKX.js";import{a as _}from"./chunk-2ZEFTA6B.js";import{a as E}from"./chunk-47BUGNNO.js";import{a as v}from"./chunk-4XBIOIJL.js";import{a as L}from"./chunk-JSOCZFF7.js";import"./chunk-XCW5GYL4.js";import"./chunk-YSVAFZPB.js";import"./chunk-ULCOJYQQ.js";import"./chunk-TJDS7E3Q.js";import{a as w}from"./chunk-YMYO7RVQ.js";import"./chunk-UAFWJMEF.js";import{a as I}from"./chunk-A2SYU2SU.js";import"./chunk-KUKFZGKL.js";import"./chunk-JUUMQFPG.js";import"./chunk-OPXVQRDJ.js";import"./chunk-KQGQROK7.js";import"./chunk-HSKCJVE7.js";import"./chunk-WT2NGKU2.js";import{b as m}from"./chunk-ET6NKS7B.js";import"./chunk-QMAERS6H.js";import"./chunk-AJ22QQIT.js";import{sa as H}from"./chunk-I6XFTTZH.js";import"./chunk-6IFYCYYR.js";function te(t){return{c:s,m:s,p:s,d:s}}function ne(t){let e=w(t[0]),n,r=e&&X(t);return{c(){r&&r.c(),n=N()},m(i,o){r&&r.m(i,o),l(i,n,o)},p(i,o){o&1&&(e=w(i[0])),e?r?r.p(i,o):(r=X(i),r.c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null)},d(i){r&&r.d(i),i&&c(n)}}}function X(t){let e,n,r={ctx:t,current:null,token:null,hasCatch:!1,pending:ie,then:oe,catch:re};return k(n=t[1],r),{c(){e=f("td"),r.block.c(),d(e,"class","svelte-1quw1g")},m(i,o){l(i,e,o),r.block.m(e,r.anchor=null),r.mount=()=>e,r.anchor=null},p(i,o){t=i,r.ctx=t,o&2&&n!==(n=t[1])&&k(n,r)||S(r,t,o)},d(i){i&&c(e),r.block.d(),r.token=null,r=null}}}function re(t){return{c:s,m:s,p:s,d:s}}function oe(t){let e,n,r;return{c(){e=f("input"),d(e,"type","checkbox")},m(i,o){l(i,e,o),e.checked=t[0],n||(r=[C(e,"change",t[6]),C(e,"click",t[3])],n=!0)},p(i,o){o&1&&(e.checked=i[0])},d(i){i&&c(e),n=!1,W(r)}}}function ie(t){let e;return{c(){e=f("div"),e.innerHTML='<span class="fshSpinner fshSpinner12 svelte-1quw1g"></span>',d(e,"class","svelte-1quw1g")},m(n,r){l(n,e,r)},p:s,d(n){n&&c(e)}}}function se(t){let e;return{c(){e=f("td"),e.innerHTML='<div class="svelte-1quw1g"><span class="fshSpinner fshSpinner12 svelte-1quw1g"></span></div>',d(e,"class","svelte-1quw1g")},m(n,r){l(n,e,r)},p:s,d(n){n&&c(e)}}}function ae(t){let e,n,r,i,o={ctx:t,current:null,token:null,hasCatch:!1,pending:se,then:ne,catch:te,value:7};return k(i=t[2](),o),{c(){e=f("tr"),n=f("td"),n.innerHTML='<span data-tooltip="Ticking this box opts you in to the PVP Ladder, unticking it will remove you from the PVP Ladder." class="svelte-1quw1g">PvP Ladder Opt-in:</span>',r=B(),o.block.c(),d(n,"class","svelte-1quw1g")},m(a,u){l(a,e,u),y(e,n),y(e,r),o.block.m(e,o.anchor=null),o.mount=()=>e,o.anchor=null},p(a,[u]){t=a,S(o,t,u)},i:s,o:s,d(a){a&&c(e),o.block.d(),o.token=null,o=null}}}function le(t,e,n){let{isOnLadder:r}=e,{toggleLadder:i}=e,o;async function a(){n(0,o=await r())}let u;function $(){n(0,o=!o),n(1,u=i(o)),G("ladder","opt in/out")}function ee(){o=this.checked,n(0,o)}return t.$$set=h=>{"isOnLadder"in h&&n(4,r=h.isOnLadder),"toggleLadder"in h&&n(5,i=h.toggleLadder)},[o,u,a,$,r,i,ee]}var R=class extends Y{constructor(e){super(),U(this,e,le,ae,j,{isOnLadder:4,toggleLadder:5})}},Z=R;function p(t){return z({cmd:"settings",...t})}function F(t){return p({subcmd:"flags",flags:t.map(e=>e?1:0)})}var ce=["ui_preference_11","ui_preference_15","disable_wordcensor","ui_preference_30","ui_preference_21","ui_preference_33","ui_preference_23"];function fe(t,e){let n=new FormData(t);return n.append("pvp_ladder",e),q(n.entries())}function ue(t,e){let n=new FormData(t);return ce.forEach((r,i)=>n.set(r,e[i+1])),q(n.entries())}async function P(t){let e=await v({cmd:"settings"}),n=E(e),r=fe(n.forms[0],t[0]),i=ue(n.forms[2],t);return await Promise.all([r,i].map(o=>v(o))),{s:!0}}function T(t){return b(F,P,t)}function x(){return p({subcmd:"view"})}function O(){return b(x,Q)}var g;async function de(){return g=(await O()).r?.flags,g?.[0]}async function me(t){if(M(g))return g[0]=t,T(g)}function pe(t){return new Z({props:{toggleLadder:me,isOnLadder:de},target:t})}function V(){if(m("optInOnLadderPage")){let t=_("#pCC table tbody");pe(t)}}function ge(t){let e=Math.floor((L-t)/6e4),n=Math.floor(e/60);return e%=60,`${J(n," hours, ")+e} mins`}function he(){let t=m(H);return t<L-48*60*60*1e3?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':ge(t)}function _e(t){let e=t.insertCell(-1);e.height=25,D("Last Reset:",e)}function ke(t){let e=t.insertCell(-1);e.align="right",I(he(),e)}function be(){let t=_("#pCC table");if(!t)return;let e=t.insertRow(-1);_e(e),ke(e)}function A(){m("trackLadderReset")&&be()}function we(){K(),A(),V()}export{we as default};
//# sourceMappingURL=ladder-FBTFSC6V.js.map