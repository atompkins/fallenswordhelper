import{a as p}from"./chunk-ZSMZ7S2K.js";import{a as S,b as T,c as M,d as F,g as H,h as $}from"./chunk-QHP4BDDI.js";import"./chunk-44SY5TQ2.js";import"./chunk-5KIZRQ7H.js";import"./chunk-D62DZIEZ.js";import{a as N}from"./chunk-AU7GFBM3.js";import"./chunk-P7KYJGZV.js";import"./chunk-DCY5VAC7.js";import"./chunk-2IXQSOIW.js";import"./chunk-5SP5N5AL.js";import{a as A}from"./chunk-XE443DWN.js";import"./chunk-XA26V3GN.js";import"./chunk-B4BR664I.js";import"./chunk-TN2MYZD6.js";import{a as s}from"./chunk-HA4SUDB3.js";import{a as E}from"./chunk-RIVS3SLC.js";import"./chunk-ODSCVYWU.js";import"./chunk-A5DZ4LLS.js";import"./chunk-DQW5ASJU.js";import{a as w}from"./chunk-YWFZ3VV7.js";import"./chunk-WR7PDPL3.js";import"./chunk-PXWPP6UG.js";import"./chunk-UPZ3AKMZ.js";import"./chunk-HBQKZNOT.js";import"./chunk-AT7LKIFM.js";import"./chunk-LNCEPZRN.js";import"./chunk-N6PH3IF5.js";import"./chunk-KMMYFSVA.js";import"./chunk-CUQDXMMQ.js";import"./chunk-HISPWLCY.js";import"./chunk-CIIE7ODC.js";import"./chunk-JDKUHI2H.js";import{a as j}from"./chunk-Z5G3WLWA.js";import{a as x}from"./chunk-TKD5JPSI.js";import"./chunk-FKJWOE7J.js";import{a as P,b as l}from"./chunk-KIJJYJLS.js";import"./chunk-ZQDMEVYG.js";import{c as h}from"./chunk-PPP4YYXR.js";import"./chunk-E3O623RQ.js";import"./chunk-DS5TO6ZD.js";import"./chunk-YCL7L6ZB.js";import"./chunk-HUXITBMD.js";import"./chunk-PRDY3MHE.js";import"./chunk-IWEQS4A6.js";import"./chunk-K43OS4B7.js";import"./chunk-V7GTOIAW.js";import{a as I}from"./chunk-AJAH6JFS.js";import"./chunk-PHWG56X4.js";import"./chunk-XVF2CJMZ.js";import"./chunk-KRBDNKGY.js";import{a as v}from"./chunk-OA25OZFH.js";import"./chunk-42DDVEBL.js";import"./chunk-IGPEYEWI.js";import"./chunk-VNYEAL6H.js";import{a as y}from"./chunk-N5SZHZZP.js";import"./chunk-K6EM5QMC.js";import"./chunk-EH4A6QLQ.js";import"./chunk-W73Y4JTB.js";import"./chunk-RBU3GVPY.js";import"./chunk-C33NXJNH.js";import{a as C}from"./chunk-5H2KFPOD.js";import"./chunk-EBO5CZG3.js";import"./chunk-WX24VINF.js";import"./chunk-OCKAGFKQ.js";import{b as u}from"./chunk-IE7HJE6I.js";import"./chunk-P5UJIVHH.js";import"./chunk-B4LNDEN5.js";import"./chunk-BTRPULWW.js";import"./chunk-PNTQJ5ZY.js";import"./chunk-P45OKA3D.js";import{a as r}from"./chunk-U7JQSSPD.js";import{a as f}from"./chunk-VV2IBFUQ.js";import"./chunk-6AYZ2ZVW.js";import"./chunk-2TPDHRRV.js";import"./chunk-KQN5ZURG.js";import"./chunk-UB5XWXZZ.js";import{a as k}from"./chunk-Y7Z3DYSJ.js";import"./chunk-XS7UUVPQ.js";import"./chunk-GOZAE5SK.js";import"./chunk-GVTLUYA2.js";import{a as d}from"./chunk-BHGUITJJ.js";import"./chunk-VZNGURHD.js";import"./chunk-LGFZXCM7.js";function t(){return f('[name="removeIndex[]"]:checked')}var B=o=>({id:j(o.parentNode.href,"folder_id"),name:v(o.parentNode.parentNode)});function R(o,e){return new F({anchor:e.nextElementSibling,props:{folders:o},target:e.parentNode})}async function J(o,e){(await M(o,e.map(b=>b.value))).s&&e.forEach(p)}function L(o){r("dropitems","Move to Folder"),s(30,t()).forEach(k(J,o.detail))}function D(){let o=f('#pCC img[src$="/folder.png"]');if(o.length===0)return;let e=E(A(o[0])),i=o.map(B);R(i,e).$on("move",L)}function Q(o){T().forEach(e=>{e.checked=Boolean(o)})}var c="ajaxifyDestroy",a="disableDestroyPrompts",n=0,m=1,q=0;async function U(o){let e=await H(o.map(i=>i.value));N(e),e.s&&o.forEach(p)}function X(o){!o.returnValue||!n||(o.preventDefault(),s(30,t()).forEach(U),r("dropitems","Destroy by AJAX"))}function _(){return r("dropitems","Destroy without prompts"),!0}function V(){window.confirmDestroy=m?_:q}function z(){m=u(a),q=window.confirmDestroy,V()}function G(){n=!n,y(c,n)}function K(){m=!m,y(a,m),V()}var O=()=>P([[l(c),G],[l(a),K]]);function W(o){x(o.parentNode,`&nbsp;&nbsp;${h(c)}&nbsp;&nbsp;${h(a)}`),d(o.parentNode,"change",O())}function g(){let o=I('input[type="submit"]');o&&(W(o),z(),n=u(c),d(document.forms[0],"submit",X),window.check=Q)}var Y=[D,$,g];function Z(){C()||!S()||w(Y)}export{Z as default};
//# sourceMappingURL=injectProfileDropItems-TB4SMUAR.js.map