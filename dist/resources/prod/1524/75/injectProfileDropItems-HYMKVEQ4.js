import{a as p}from"./chunk-H5AKNHUO.js";import{a as S,b as T,c as M,d as F,f as H,g as $}from"./chunk-7JE4GO7Q.js";import"./chunk-T54BXPKL.js";import"./chunk-JEXLPQAJ.js";import"./chunk-YM2MQE3P.js";import"./chunk-LJPBWJAF.js";import{a as f}from"./chunk-C3GJHVFM.js";import"./chunk-Z4G67MEM.js";import{a as N}from"./chunk-MHFHM2UV.js";import"./chunk-GAHGPNN6.js";import"./chunk-6HHD6NAE.js";import"./chunk-YIGQ7UVP.js";import"./chunk-UPWFTYJL.js";import{a as A}from"./chunk-DDSPWTMT.js";import"./chunk-AIM2MBEX.js";import{a as w}from"./chunk-F67I7LTV.js";import"./chunk-ZBHEGWHT.js";import"./chunk-ZNV7MURD.js";import"./chunk-TQN7YQLQ.js";import"./chunk-4U6RDGHM.js";import"./chunk-7VFVU7N7.js";import"./chunk-LMUWET65.js";import"./chunk-RVA5MDER.js";import{a as E}from"./chunk-6LSRXACZ.js";import"./chunk-TIQN3YKQ.js";import"./chunk-TB5GXATW.js";import"./chunk-X2TXN5H7.js";import"./chunk-54XC2ATA.js";import"./chunk-RS7ZYNTC.js";import"./chunk-7DA5YTG5.js";import"./chunk-IQ2Y3PFE.js";import{a as I}from"./chunk-I4LE4V5X.js";import"./chunk-GQULZ2HO.js";import"./chunk-5T5SVQRR.js";import{a as r}from"./chunk-KTCUHC46.js";import{a as x}from"./chunk-ORWNE4WN.js";import"./chunk-UNRPYWV7.js";import"./chunk-JMVCQWLZ.js";import"./chunk-V5YPTNUP.js";import"./chunk-TANNOBPR.js";import{a as C,b as l}from"./chunk-B3ORSYAL.js";import"./chunk-LKANVTO2.js";import"./chunk-AZCQFCTF.js";import"./chunk-4XWSHIF5.js";import{f as h}from"./chunk-SZSLBMHU.js";import{a as P}from"./chunk-VRFSPHR2.js";import{a as s}from"./chunk-GHI2YFAT.js";import"./chunk-NHD5GMUM.js";import"./chunk-6FE7TFOW.js";import"./chunk-BQN7JNLT.js";import"./chunk-LYLU7224.js";import"./chunk-4TGPNPDH.js";import"./chunk-DGS2WOJV.js";import"./chunk-GPIGDOJJ.js";import"./chunk-SGSSGBJU.js";import{a as j}from"./chunk-L2F37LJS.js";import"./chunk-RSW3SDQ5.js";import{a as y}from"./chunk-LXCNYPSV.js";import"./chunk-QMO3OQBJ.js";import"./chunk-Q2OGYUCV.js";import{a as k}from"./chunk-SUTTQBC4.js";import"./chunk-332EVHRL.js";import"./chunk-46TQQDHW.js";import"./chunk-K4FZKNLQ.js";import"./chunk-5CGQ343C.js";import"./chunk-CSUXSLMM.js";import"./chunk-OHRM7A4V.js";import{a as v}from"./chunk-TDFIT7OX.js";import"./chunk-4OB64LT4.js";import"./chunk-UQIKKMNB.js";import"./chunk-UE3DRZE6.js";import"./chunk-JUEI6MIM.js";import"./chunk-REO2URTO.js";import"./chunk-JFPNT65R.js";import{b as d}from"./chunk-ELGHA2UY.js";import"./chunk-G5IZBOBE.js";import{a as u}from"./chunk-QKN4UTNB.js";import"./chunk-XAE2ZLZO.js";import"./chunk-L5JB47YP.js";import"./chunk-M4AU23DF.js";function t(){return s('[name="removeIndex[]"]:checked')}var V=o=>({id:I(o.parentNode.href,"folder_id"),name:j(o.parentNode.parentNode)});function R(o,e){return new M({anchor:e.nextElementSibling,props:{folders:o},target:e.parentNode})}async function J(o,e){(await F(o,e.map(g=>g.value))).s&&e.forEach(p)}function L(o){r("dropitems","Move to Folder"),f(30,t()).forEach(v(J,o.detail))}function D(){let o=s('#pCC img[src$="/folder.png"]');if(o.length===0)return;let e=A(N(o[0])),i=o.map(V);R(i,e).$on("move",L)}function Q(o){T().forEach(e=>{e.checked=Boolean(o)})}var c="ajaxifyDestroy",a="disableDestroyPrompts",n,m,q;async function U(o){let e=await H(o.map(i=>i.value));w(e),e.s&&o.forEach(p)}function X(o){!o.returnValue||!n||(o.preventDefault(),f(30,t()).forEach(U),r("dropitems","Destroy by AJAX"))}function _(){return r("dropitems","Destroy without prompts"),!0}function B(){window.confirmDestroy=m?_:q}function z(){m=d(a),q=window.confirmDestroy,B()}function G(){n=!n,y(c,n)}function K(){m=!m,y(a,m),B()}var O=()=>C([[l(c),G],[l(a),K]]);function W(){let o=P('input[type="submit"]');x(o.parentNode,`&nbsp;&nbsp;${h(c)}&nbsp;&nbsp;${h(a)}`),u(o.parentNode,"change",O())}function b(){W(),z(),n=d(c),u(document.forms[0],"submit",X),window.check=Q}var Y=[D,$,b];function Z(){k()||!S()||E(Y)}export{Z as default};
//# sourceMappingURL=injectProfileDropItems-HYMKVEQ4.js.map