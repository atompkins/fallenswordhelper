import{a as Q}from"./chunk-ZGLYHAN4.js";import{a as K}from"./chunk-WT4CTOSA.js";import"./chunk-KAEAX7RN.js";import{A as d,U as b,V as S,a as s,aa as z,b as B,ba as G,d as N,p as y,q as l,r as c,t as f,v as U,w as Y,x as C}from"./chunk-RVA5MDER.js";import{a as J}from"./chunk-AMZGMTHM.js";import{a as q}from"./chunk-X2TXN5H7.js";import"./chunk-W5IZ3NIZ.js";import{a as j}from"./chunk-KTCUHC46.js";import{a as k}from"./chunk-UNRPYWV7.js";import{a as W}from"./chunk-JMVCQWLZ.js";import"./chunk-V5YPTNUP.js";import{a as D}from"./chunk-IITGBJS7.js";import{a as M}from"./chunk-AZCQFCTF.js";import{a as _}from"./chunk-VRFSPHR2.js";import"./chunk-GHI2YFAT.js";import"./chunk-NHD5GMUM.js";import{a as E}from"./chunk-4TGPNPDH.js";import{a as v}from"./chunk-DGS2WOJV.js";import{a as L}from"./chunk-AXEF7ZPS.js";import"./chunk-GPIGDOJJ.js";import"./chunk-SGSSGBJU.js";import"./chunk-RSW3SDQ5.js";import{a as w}from"./chunk-QMO3OQBJ.js";import"./chunk-46TQQDHW.js";import{a as I}from"./chunk-O7BO2JV6.js";import"./chunk-K4FZKNLQ.js";import"./chunk-CSUXSLMM.js";import"./chunk-OHRM7A4V.js";import"./chunk-TDFIT7OX.js";import"./chunk-JUEI6MIM.js";import"./chunk-REO2URTO.js";import{b as m}from"./chunk-ELGHA2UY.js";import"./chunk-G5IZBOBE.js";import"./chunk-QKN4UTNB.js";import"./chunk-XAE2ZLZO.js";import{ta as H}from"./chunk-L5JB47YP.js";import"./chunk-M4AU23DF.js";function te(t){return{c:s,m:s,p:s,d:s}}function ne(t){let e=w(t[0]),n,r=e&&X(t);return{c(){r&&r.c(),n=Y()},m(i,o){r&&r.m(i,o),l(i,n,o)},p(i,o){o&1&&(e=w(i[0])),e?r?r.p(i,o):(r=X(i),r.c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null)},d(i){r&&r.d(i),i&&c(n)}}}function X(t){let e,n,r={ctx:t,current:null,token:null,hasCatch:!1,pending:ie,then:oe,catch:re};return b(n=t[1],r),{c(){e=f("td"),r.block.c(),d(e,"class","svelte-1quw1g")},m(i,o){l(i,e,o),r.block.m(e,r.anchor=null),r.mount=()=>e,r.anchor=null},p(i,o){t=i,r.ctx=t,o&2&&n!==(n=t[1])&&b(n,r)||S(r,t,o)},d(i){i&&c(e),r.block.d(),r.token=null,r=null}}}function re(t){return{c:s,m:s,p:s,d:s}}function oe(t){let e,n,r;return{c(){e=f("input"),d(e,"type","checkbox")},m(i,o){l(i,e,o),e.checked=t[0],n||(r=[C(e,"change",t[6]),C(e,"click",t[3])],n=!0)},p(i,o){o&1&&(e.checked=i[0])},d(i){i&&c(e),n=!1,B(r)}}}function ie(t){let e;return{c(){e=f("div"),e.innerHTML='<span class="fshSpinner fshSpinner12 svelte-1quw1g"></span>',d(e,"class","svelte-1quw1g")},m(n,r){l(n,e,r)},p:s,d(n){n&&c(e)}}}function se(t){let e;return{c(){e=f("td"),e.innerHTML='<div class="svelte-1quw1g"><span class="fshSpinner fshSpinner12 svelte-1quw1g"></span></div>',d(e,"class","svelte-1quw1g")},m(n,r){l(n,e,r)},p:s,d(n){n&&c(e)}}}function ae(t){let e,n,r,i,o={ctx:t,current:null,token:null,hasCatch:!1,pending:se,then:ne,catch:te,value:7};return b(i=t[2](),o),{c(){e=f("tr"),n=f("td"),n.innerHTML='<span data-tooltip="Ticking this box opts you in to the PVP Ladder, unticking it will remove you from the PVP Ladder." class="svelte-1quw1g">PvP Ladder Opt-in:</span>',r=U(),o.block.c(),d(n,"class","svelte-1quw1g")},m(a,u){l(a,e,u),y(e,n),y(e,r),o.block.m(e,o.anchor=null),o.mount=()=>e,o.anchor=null},p(a,[u]){t=a,S(o,t,u)},i:s,o:s,d(a){a&&c(e),o.block.d(),o.token=null,o=null}}}function le(t,e,n){let{isOnLadder:r}=e,{toggleLadder:i}=e,o;async function a(){n(0,o=await r())}let u;function $(){n(0,o=!o),n(1,u=i(o)),j("ladder","opt in/out")}function ee(){o=this.checked,n(0,o)}return t.$$set=h=>{"isOnLadder"in h&&n(4,r=h.isOnLadder),"toggleLadder"in h&&n(5,i=h.toggleLadder)},[o,u,a,$,r,i,ee]}var R=class extends G{constructor(e){super(),z(this,e,le,ae,N,{isOnLadder:4,toggleLadder:5})}},Z=R;function p(t){return W({cmd:"settings",...t})}function F(t){return p({subcmd:"flags",flags:t.map(e=>e?1:0)})}var ce=["ui_preference_11","ui_preference_15","disable_wordcensor","ui_preference_30","ui_preference_21","ui_preference_33","ui_preference_23"];function fe(t,e){let n=new FormData(t);return n.append("pvp_ladder",e),q(n.entries())}function ue(t,e){let n=new FormData(t);return ce.forEach((r,i)=>n.set(r,e[i+1])),q(n.entries())}async function P(t){let e=await v({cmd:"settings"}),n=E(e),r=fe(n.forms[0],t[0]),i=ue(n.forms[2],t);return await Promise.all([r,i].map(o=>v(o))),{s:!0}}function T(t){return k(F,P,t)}function x(){return p({subcmd:"view"})}function O(){return k(x,Q)}var g;async function de(){return g=(await O()).r?.flags,g?.[0]}async function me(t){if(M(g))return g[0]=t,T(g)}function pe(t){return new Z({props:{toggleLadder:me,isOnLadder:de},target:t})}function V(){if(m("optInOnLadderPage")){let t=_("#pCC table tbody");pe(t)}}function ge(t){let e=Math.floor((L-t)/6e4),n=Math.floor(e/60);return e%=60,`${J(n," hours, ")+e} mins`}function he(){let t=m(H);return t<L-48*60*60*1e3?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':ge(t)}function _e(t){let e=t.insertCell(-1);e.height=25,D("Last Reset:",e)}function ke(t){let e=t.insertCell(-1);e.align="right",I(he(),e)}function be(){let t=_("#pCC table");if(!t)return;let e=t.insertRow(-1);_e(e),ke(e)}function A(){m("trackLadderReset")&&be()}function we(){K(),A(),V()}export{we as default};
//# sourceMappingURL=ladder-WTIT47G3.js.map