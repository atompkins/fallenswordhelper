import{a as X}from"./chunk-2KNFWYQ2.js";import{a as Q}from"./chunk-74M376NH.js";import"./chunk-ETPVHLKT.js";import{a as K}from"./chunk-I5I2E5UO.js";import"./chunk-H6BVNAZJ.js";import{a as J}from"./chunk-EJQFETEW.js";import{a as C}from"./chunk-JO3N2T2B.js";import{a as w}from"./chunk-ZK3AGOF2.js";import{a as I}from"./chunk-A77NZCEP.js";import{a as V}from"./chunk-MB2DX4ZC.js";import"./chunk-MY4OO5AP.js";import{a as H}from"./chunk-5KGM3LZY.js";import"./chunk-DI3XCMNE.js";import{a as _}from"./chunk-7H5ET4BP.js";import"./chunk-WCTHIQU3.js";import{a as M}from"./chunk-WA4H3QPQ.js";import"./chunk-DKWH62CP.js";import"./chunk-GALQGYEO.js";import"./chunk-T4ZSWDX2.js";import"./chunk-WE2GCAKX.js";import{C as d,Z as k,_ as y,a as s,b as W,d as B,ga as Y,ha as z,r as L,s as l,t as c,v as f,x as N,y as U,z as v}from"./chunk-OB44S7IV.js";import{a as G}from"./chunk-OI7KRNQS.js";import"./chunk-C7L2X63R.js";import{a as D}from"./chunk-WTCWPEJX.js";import"./chunk-H2ANYIFW.js";import"./chunk-KUIVOAMB.js";import{a as E,c as j}from"./chunk-LKEXSUYL.js";import"./chunk-O6E23IRT.js";import"./chunk-TLAXHTSP.js";import{a as b}from"./chunk-CKRPJ7HI.js";import"./chunk-RUEPLNRL.js";import"./chunk-O7K3SHEW.js";import"./chunk-EZQ2GDBH.js";import"./chunk-GVTRKM2F.js";import{b as p}from"./chunk-EZ536MXS.js";import"./chunk-LVBWHS3E.js";import"./chunk-OR37OWF3.js";import{ua as O}from"./chunk-FQGZN2JL.js";import"./chunk-BYAZQWO5.js";import"./chunk-MR322WHU.js";function m(t){return G({cmd:"settings",...t})}function S(t){return m({subcmd:"flags",flags:t.map(e=>e?1:0)})}var ne=["ui_preference_11","ui_preference_15","disable_wordcensor","ui_preference_30","ui_preference_21","ui_preference_33","ui_preference_23"];function re(t,e){let r=new FormData(t);return r.append("pvp_ladder",e),C(r.entries())}function oe(t,e){let r=new FormData(t);return ne.forEach((n,i)=>r.set(n,e[i+1])),C(r.entries())}async function q(t){let e=await J({cmd:"settings"}),r=re(e.forms[0],t[0]),n=oe(e.forms[2],t);return await Promise.all([r,n].map(i=>M(i))),{s:!0}}function R(t){return w(S,q,t)}function x(){return m({subcmd:"view"})}function F(){return w(x,X)}function ie(t){return{c:s,m:s,p:s,d:s}}function se(t){let e=b(t[0]),r,n=e&&Z(t);return{c(){n&&n.c(),r=U()},m(i,o){n&&n.m(i,o),l(i,r,o)},p(i,o){o&1&&(e=b(i[0])),e?n?n.p(i,o):(n=Z(i),n.c(),n.m(r.parentNode,r)):n&&(n.d(1),n=null)},d(i){n&&n.d(i),i&&c(r)}}}function Z(t){let e,r,n={ctx:t,current:null,token:null,hasCatch:!1,pending:ce,then:le,catch:ae};return k(r=t[1],n),{c(){e=f("td"),n.block.c(),d(e,"class","svelte-1quw1g")},m(i,o){l(i,e,o),n.block.m(e,n.anchor=null),n.mount=()=>e,n.anchor=null},p(i,o){t=i,n.ctx=t,o&2&&r!==(r=t[1])&&k(r,n)||y(n,t,o)},d(i){i&&c(e),n.block.d(),n.token=null,n=null}}}function ae(t){return{c:s,m:s,p:s,d:s}}function le(t){let e,r,n;return{c(){e=f("input"),d(e,"type","checkbox")},m(i,o){l(i,e,o),e.checked=t[0],r||(n=[v(e,"change",t[6]),v(e,"click",t[3])],r=!0)},p(i,o){o&1&&(e.checked=i[0])},d(i){i&&c(e),r=!1,W(n)}}}function ce(t){let e;return{c(){e=f("div"),e.innerHTML='<span class="fshSpinner fshSpinner12 svelte-1quw1g"></span>',d(e,"class","svelte-1quw1g")},m(r,n){l(r,e,n)},p:s,d(r){r&&c(e)}}}function fe(t){let e;return{c(){e=f("td"),e.innerHTML='<div class="svelte-1quw1g"><span class="fshSpinner fshSpinner12 svelte-1quw1g"></span></div>',d(e,"class","svelte-1quw1g")},m(r,n){l(r,e,n)},p:s,d(r){r&&c(e)}}}function ue(t){let e,r,n,i,o={ctx:t,current:null,token:null,hasCatch:!1,pending:fe,then:se,catch:ie,value:7};return k(i=t[2](),o),{c(){e=f("tr"),r=f("td"),r.innerHTML='<span data-tooltip="Ticking this box opts you in to the PVP Ladder, unticking it will remove you from the PVP Ladder." class="svelte-1quw1g">PvP Ladder Opt-in:</span>',n=N(),o.block.c(),d(r,"class","svelte-1quw1g")},m(a,u){l(a,e,u),L(e,r),L(e,n),o.block.m(e,o.anchor=null),o.mount=()=>e,o.anchor=null},p(a,[u]){t=a,y(o,t,u)},i:s,o:s,d(a){a&&c(e),o.block.d(),o.token=null,o=null}}}function de(t,e,r){let{isOnLadder:n}=e,{toggleLadder:i}=e,o;async function a(){r(0,o=await n())}let u;function ee(){r(0,o=!o),r(1,u=i(o)),D("ladder","opt in/out")}function te(){o=this.checked,r(0,o)}return t.$$set=h=>{"isOnLadder"in h&&r(4,n=h.isOnLadder),"toggleLadder"in h&&r(5,i=h.toggleLadder)},[o,u,a,ee,n,i,te]}var P=class extends z{constructor(e){super(),Y(this,e,de,ue,B,{isOnLadder:4,toggleLadder:5})}},$=P;var g=0;async function pe(){return g=(await F()).r?.flags,g?.[0]}function me(t){if(V(g))return g[0]=t,R(g)}function ge(t){return new $({props:{toggleLadder:me,isOnLadder:pe},target:t})}function A(){if(p("optInOnLadderPage")){let t=_("#pCC table tbody");ge(t)}}function he(t){let e=Math.floor((E()-t)/6e4),r=Math.floor(e/60);return e%=60,`${K(r," hours, ")+e} mins`}function _e(){let t=p(O);return t<j()?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':he(t)}function ke(t){let e=t.insertCell(-1);e.height=25,I("Last Reset:",e)}function we(t){let e=t.insertCell(-1);e.align="right",H(_e(),e)}function be(){let t=_("#pCC table");if(!t)return;let e=t.insertRow(-1);ke(e),we(e)}function T(){p("trackLadderReset")&&be()}function Le(){Q(),T(),A()}export{Le as default};
//# sourceMappingURL=ladder-3QTF42BO.js.map
