import{b as Q,c as R,d as z,e as G,f as J,h as K}from"./chunk-F6QUC76M.js";import"./chunk-ZUEAJPWV.js";import"./chunk-CRAE2FG7.js";import"./chunk-MNTND6HI.js";import"./chunk-UH2R3CLD.js";import{a as P}from"./chunk-TD7GA6DQ.js";import"./chunk-KV7KVJON.js";import"./chunk-PAIJPPAP.js";import"./chunk-IYNRHY2X.js";import"./chunk-3QQLACHP.js";import"./chunk-F2PP5XBI.js";import{a as f}from"./chunk-DG4CBEPN.js";import{a as L}from"./chunk-ALCFMB42.js";import"./chunk-YPHBHMKN.js";import"./chunk-LJLHNYN6.js";import{a as F}from"./chunk-SFOQF4NE.js";import"./chunk-HE632HJ5.js";import"./chunk-ZBYHF7IJ.js";import{a as H}from"./chunk-FDCWD5OY.js";import"./chunk-LG6BDR3I.js";import"./chunk-F4CYJEVV.js";import"./chunk-7WHQNAGA.js";import"./chunk-R4CGZJCB.js";import"./chunk-O5EDBO4Q.js";import"./chunk-K7XSORZB.js";import"./chunk-EVJH72OA.js";import"./chunk-DGBEEUA5.js";import"./chunk-Q5PEDYJB.js";import"./chunk-VJNUTBRD.js";import"./chunk-BDSEVGHU.js";import"./chunk-XVEYCRE7.js";import"./chunk-4LUQSMNM.js";import"./chunk-SOHEEUVK.js";import"./chunk-ROTCIKTR.js";import{A as I,D as s,P as x,Q as w,X as M,Y as S,a as p,d as h,ea as N,fa as j,ga as q,ha as v,ia as b,s as A,t as a,u as d,w as u,x as E}from"./chunk-HPOEZKZ4.js";import{a as c}from"./chunk-6QEKDVOV.js";import"./chunk-K25CWRN6.js";import"./chunk-6MJKEXGN.js";import"./chunk-YQXIMIAT.js";import{a as D}from"./chunk-4X57LHCN.js";import"./chunk-6QG6UGYA.js";import"./chunk-JMO45TBP.js";import"./chunk-JEN6RTKA.js";import"./chunk-FC2T2RFK.js";import"./chunk-ZRLD7TYA.js";import"./chunk-WJQ3A2NI.js";import"./chunk-EAEJ7O2I.js";import"./chunk-UPYTFADC.js";import"./chunk-F6AV4QWO.js";import{a as T}from"./chunk-C54IMWL7.js";import"./chunk-7XNCVM7C.js";import"./chunk-S5YTVKJ4.js";import{a as B}from"./chunk-7PPLM4HV.js";import"./chunk-SLJOWJGX.js";import"./chunk-QLD5CDI7.js";import"./chunk-ULD7YHXO.js";import{a as l}from"./chunk-ZKTRQIGV.js";import"./chunk-I2K74DRD.js";import"./chunk-YI3QHXMF.js";import"./chunk-NR3OO2TM.js";import"./chunk-RGYUH6OH.js";import"./chunk-DPMNQ3O4.js";import{a as V}from"./chunk-J6FMYNIK.js";import"./chunk-YCWZIL7K.js";import"./chunk-CPJOSTWF.js";import"./chunk-A3WPUSVT.js";import{c as y}from"./chunk-O3NTOCCL.js";import"./chunk-RBVLOJQS.js";import"./chunk-G4AQ6G7L.js";import"./chunk-IYSXGPFG.js";import"./chunk-B2AFMQVU.js";import"./chunk-7D7WYX4S.js";function W(t){let e,o,r,i;return{c(){e=u("button"),e.textContent="Check All",o=E("\xA0"),s(e,"class","custombutton svelte-vafhru"),s(e,"type","button")},m(n,m){a(n,e,m),a(n,o,m),r||(i=I(e,"click",t[0]),r=!0)},p,i:p,o:p,d(n){n&&d(e),n&&d(o),r=!1,i()}}}function X(t){let e=x();function o(){c("storeitems","Check All"),e("checkall")}return[o]}var k=class extends b{constructor(e){super(),v(this,e,X,W,h,{})}},O=k;function Y(t){let e,o,r,i;return r=new H({props:{folders:t[0].folders}}),r.$on("filter",t[1]),{c(){e=u("tr"),o=u("td"),N(r.$$.fragment),s(o,"colspan","3"),s(o,"class","svelte-1kpx3t5"),s(e,"class","fshCenter")},m(n,m){a(n,e,m),A(e,o),j(r,o,null),i=!0},p(n,[m]){let $={};m&1&&($.folders=n[0].folders),r.$set($)},i(n){i||(M(r.$$.fragment,n),i=!0)},o(n){S(r.$$.fragment,n),i=!1},d(n){n&&d(e),q(r)}}}function Z(t,e,o){let{inv:r={folders:{}}}=e;function i(n){w.call(this,t,n)}return t.$$set=n=>{"inv"in n&&o(0,r=n.inv)},[r,i]}var g=class extends b{constructor(e){super(),v(this,e,Z,Y,h,{inv:0})}},U=g;function ee(t,e){return new U({anchor:e,props:{inv:t},target:e.parentNode})}function te(t,e,o){o.checked=!1;let r=F(o),i=t.items[o.value].folder_id,n=e!==-2&&e!==i;f(r,n),f(r.nextElementSibling,n)}function oe(t,e){c("storeitems","Filter Folder"),P([3,Q(),0,l(te,t,Number(e.detail))])}function _(t,e){ee(t,e).$on("filter",l(oe,t))}function re(t,e){let o=[{id:"-1",name:"Main"},...B(t.folders).map(([r,i])=>({id:r,name:i}))];return new z({anchor:e,props:{folders:o},target:e.parentNode})}function ne(t,e,o){t.items[o].folder_id=Number(e)}function ie(t,e,o){o.checked=!1,ne(t,e,o.value);let r=F(o);f(r,!0),f(r.nextElementSibling,!0)}async function se(t,e,o){(await R(e,o.map(i=>i.value))).s&&o.forEach(l(ie,t,e))}function le(t,e){c("storeitems","Move to Folder");let o=D('[name="storeIndex[]"]:checked');L(30,o).forEach(l(se,t,e.detail))}function C(t,e){re(t,e).$on("move",l(le,t))}async function me(){let t=await J();if(!t.folders)return;let[e]=document.forms;_(t,e),C(t,e)}function ce(){G().forEach(t=>{t.checked=!t.disabled&&!t.checked})}function fe(){let t=document.forms[0]?.elements;if(!t?.length)return;let[e]=T(t).filter(r=>r.type==="submit");new O({anchor:e,target:e.parentNode}).$on("checkall",ce)}function ae(){V()&&y("enableFolderFilter")&&me(),fe(),K()}export{ae as default};
//# sourceMappingURL=storeitems-5XOBQ2DZ.js.map