import{b as R,c as z,d as G,e as J,g as K}from"./chunk-WNUXFSF5.js";import"./chunk-RYVSBRSZ.js";import"./chunk-JSLHZA3J.js";import"./chunk-TCZUDOVO.js";import"./chunk-2YBZ7WGU.js";import"./chunk-ZV5672ZX.js";import{a as Q}from"./chunk-X5F4E3NN.js";import"./chunk-EDY4L2N6.js";import"./chunk-RQRK6MAX.js";import"./chunk-L233XM3U.js";import{a as P}from"./chunk-YZBUGLP6.js";import"./chunk-YC2HJSN2.js";import"./chunk-4OFHXQQU.js";import{a as L}from"./chunk-V5KAIKP5.js";import{a as f}from"./chunk-XVFSFFWR.js";import{a as F}from"./chunk-FWL2OWGY.js";import{a as H}from"./chunk-XFDYWZNO.js";import"./chunk-OCUICAVP.js";import"./chunk-Q3FVONE7.js";import"./chunk-X2QJ4F75.js";import"./chunk-CKXQAU55.js";import"./chunk-7MQGPJ76.js";import"./chunk-SKLB3FCL.js";import"./chunk-X2R7T2AM.js";import"./chunk-B5H3A5LR.js";import"./chunk-OBWJ36PR.js";import"./chunk-4ZEXHVHC.js";import{C as l,N as S,O as N,U as j,V as q,a as p,ba as T,ca as B,d as h,da as V,ea as v,fa as b,r as w,s as a,t as d,v as u,w as x,z as M}from"./chunk-BG5LHYCF.js";import"./chunk-L2JCSIJR.js";import"./chunk-M6VFYVGZ.js";import"./chunk-XMGFOEO6.js";import"./chunk-A36TPL52.js";import"./chunk-3FUR4CWU.js";import{a as c}from"./chunk-VKNAZHSW.js";import"./chunk-3KOSRNPL.js";import"./chunk-SGIZTIIQ.js";import"./chunk-WHTJ2U55.js";import"./chunk-UFHHOZKJ.js";import"./chunk-F44TQQMJ.js";import"./chunk-C7PIQX7O.js";import"./chunk-H6PS5VCQ.js";import{a as D}from"./chunk-6ZR46QZG.js";import"./chunk-3VMUJXQR.js";import"./chunk-CBMSPOBL.js";import"./chunk-5E32VBFN.js";import"./chunk-XLAUK3YC.js";import"./chunk-MFXNKIYL.js";import{a as A}from"./chunk-2XKKIH7K.js";import"./chunk-JZI3CAHX.js";import"./chunk-L5KUFFVQ.js";import"./chunk-UYGGJ3YF.js";import"./chunk-EE5B6X24.js";import"./chunk-CCHDXXIW.js";import"./chunk-LWLVQTKS.js";import{a as E}from"./chunk-WBTHTD34.js";import"./chunk-FPGEPPZC.js";import"./chunk-IRBVAK7D.js";import"./chunk-PF3P35LS.js";import{a as s}from"./chunk-G34A357Q.js";import"./chunk-6YD7W4E5.js";import"./chunk-LG3KLILQ.js";import{a as I}from"./chunk-DYBFFO7Q.js";import"./chunk-IEAPP6FH.js";import"./chunk-FEFVGSP2.js";import"./chunk-EJENCRJV.js";import"./chunk-IWCA3B2P.js";import"./chunk-HMPLMOXP.js";import{b as y}from"./chunk-EEF6C5L4.js";import"./chunk-SVYRHE6Z.js";import"./chunk-OIO6LGXZ.js";import"./chunk-KWAUBU52.js";import"./chunk-TISVYXYU.js";import"./chunk-S3EM322F.js";function W(t){let e,o,r,i;return{c(){e=u("button"),e.textContent="Check All",o=x("\xA0"),l(e,"class","custombutton svelte-1recp8w"),l(e,"type","button")},m(n,m){a(n,e,m),a(n,o,m),r||(i=M(e,"click",t[0]),r=!0)},p,i:p,o:p,d(n){n&&d(e),n&&d(o),r=!1,i()}}}function X(t){let e=S();function o(){c("storeitems","Check All"),e("checkall")}return[o]}var k=class extends b{constructor(e){super(),v(this,e,X,W,h,{})}},O=k;function Y(t){let e,o,r,i;return r=new H({props:{folders:t[0].folders}}),r.$on("filter",t[1]),{c(){e=u("tr"),o=u("td"),T(r.$$.fragment),l(o,"colspan","3"),l(o,"class","svelte-1kpx3t5"),l(e,"class","fshCenter")},m(n,m){a(n,e,m),w(e,o),B(r,o,null),i=!0},p(n,[m]){let $={};m&1&&($.folders=n[0].folders),r.$set($)},i(n){i||(j(r.$$.fragment,n),i=!0)},o(n){q(r.$$.fragment,n),i=!1},d(n){n&&d(e),V(r)}}}function Z(t,e,o){let{inv:r={folders:{}}}=e;function i(n){N.call(this,t,n)}return t.$$set=n=>{"inv"in n&&o(0,r=n.inv)},[r,i]}var g=class extends b{constructor(e){super(),v(this,e,Z,Y,h,{inv:0})}},U=g;function ee(t,e){return new U({anchor:e,props:{inv:t},target:e.parentNode})}function te(t,e,o){o.checked=!1;let r=F(o),i=t.items[o.value].folder_id,n=e!==-2&&e!==i;f(r,n),f(r.nextElementSibling,n)}function oe(t,e){c("storeitems","Filter Folder"),Q([3,R(),0,s(te,t,Number(e.detail))])}function _(t,e){ee(t,e).$on("filter",s(oe,t))}function re(t,e){let o=[{id:"-1",name:"Main"},...E(t.folders).map(([r,i])=>({id:r,name:i}))];return new G({anchor:e,props:{folders:o},target:e.parentNode})}function ne(t,e,o){t.items[o].folder_id=Number(e)}function ie(t,e,o){o.checked=!1,ne(t,e,o.value);let r=F(o);f(r,!0),f(r.nextElementSibling,!0)}async function se(t,e,o){(await z(e,o.map(i=>i.value))).s&&o.forEach(s(ie,t,e))}function le(t,e){c("storeitems","Move to Folder");let o=D('[name="storeIndex[]"]:checked');L(30,o).forEach(s(se,t,e.detail))}function C(t,e){re(t,e).$on("move",s(le,t))}async function me(){let t=await P();if(!t.folders)return;let[e]=document.forms;_(t,e),C(t,e)}function ce(){J().forEach(t=>{t.checked=!t.disabled&&!t.checked})}function fe(){let[t]=A(document.forms[0].elements).filter(o=>o.type==="submit");new O({anchor:t,target:t.parentNode}).$on("checkall",ce)}function ae(){I()&&y("enableFolderFilter")&&me(),fe(),K()}export{ae as default};
//# sourceMappingURL=storeitems-57SHSQ26.js.map
