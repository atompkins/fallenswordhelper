import{a as E}from"./chunk-CEW2DBNV.js";import{a as S}from"./chunk-KVQHJ3IJ.js";import"./chunk-IVYZDSQL.js";import{a as C}from"./chunk-TCZUDOVO.js";import"./chunk-7F2ZKIZY.js";import{a as A}from"./chunk-FWL2OWGY.js";import{a as y}from"./chunk-KEJZ5X4V.js";import{a as M}from"./chunk-WRGSYYRV.js";import"./chunk-X2QJ4F75.js";import"./chunk-CCTXQSLN.js";import{a as l}from"./chunk-6BVGCO3I.js";import{a as p}from"./chunk-YVPYZHJW.js";import"./chunk-SRSFKD6I.js";import"./chunk-4ZEXHVHC.js";import"./chunk-BG5LHYCF.js";import{a as h}from"./chunk-M6VFYVGZ.js";import"./chunk-XMGFOEO6.js";import{a as u}from"./chunk-VKNAZHSW.js";import{a as v}from"./chunk-3KOSRNPL.js";import"./chunk-SGIZTIIQ.js";import"./chunk-WHTJ2U55.js";import"./chunk-QPQYH7ZQ.js";import"./chunk-NDSZEOFH.js";import{a as b,b as R}from"./chunk-3MDGDGIL.js";import{d as _}from"./chunk-TJH5A7W4.js";import"./chunk-ACRGE6WG.js";import"./chunk-5E32VBFN.js";import"./chunk-PFKXH2IS.js";import"./chunk-XLAUK3YC.js";import{a as m}from"./chunk-ZDEOOWYD.js";import"./chunk-2XKKIH7K.js";import"./chunk-JZI3CAHX.js";import{a as g}from"./chunk-L5KUFFVQ.js";import"./chunk-UYGGJ3YF.js";import"./chunk-EE5B6X24.js";import"./chunk-CCHDXXIW.js";import"./chunk-LWLVQTKS.js";import"./chunk-WBTHTD34.js";import{a as x}from"./chunk-FPGEPPZC.js";import"./chunk-IRBVAK7D.js";import"./chunk-PF3P35LS.js";import"./chunk-G34A357Q.js";import"./chunk-FEFVGSP2.js";import"./chunk-EJENCRJV.js";import"./chunk-IWCA3B2P.js";import{b as d}from"./chunk-EEF6C5L4.js";import"./chunk-SVYRHE6Z.js";import{a as c}from"./chunk-OIO6LGXZ.js";import"./chunk-KWAUBU52.js";import"./chunk-TISVYXYU.js";import"./chunk-S3EM322F.js";function f(e,t){return E({subcmd:"domoverecipes",target_folder_id:e,recipe_selected:t})}function N(e,t){let r=h(e);return r===t?{s:!0}:{s:!1,e:{message:r}}}async function a(e,t){let r=await g({cmd:"inventing",subcmd:"domoverecipes",recipe_selected:t,target_folder_id:e});return N(r,"Selected recipes have been moved to the target folder.")}function s(e,t){return v(f,a,e,t)}var i="ajaxifyMoveRecipe",n=0;function k(){n=!n,x(i,n)}var H=[[R(i),k]];function I(e){p(e.parentNode,`&nbsp;&nbsp;${_(i)}`),c(e.parentNode,"change",b(H))}function F(e){e.parentNode.classList.add("fshRelative"),e.classList.add("hideCheckbox"),y(M({className:"fshSpinner fshSpinner12"}),e)}function L(e){let t=A(e);t.nextElementSibling.remove(),t.remove()}function P(e){e.classList.remove("hideCheckbox"),e.nextElementSibling.remove()}function w(e,t){t.s?e.forEach(L):(S(t.e.message),e.forEach(P))}async function B(e,t){u("inventing","Move recipes by AJAX"),t.forEach(F);let r=await s(e,t.map(o=>Number(o.value)));w(t,r)}function D(e,t){let r=e["recipe_selected[]"];if(!r)return;let o=C(r).filter(j=>j.checked);o.length&&B(t,o)}function V(){let e=m('#pCC img[src*="/folder_on."]').parentNode.href;return l(e,"folder_id")}function $(e){if(!n)return;e.preventDefault();let t=V(),{elements:r}=e.target,o=r.target_folder_id.value;t!==o&&D(r,o)}function q(){let e=m('input[value="Move Recipes"]');I(e),n=d(i),c(e.form,"submit",$)}export{q as default};
//# sourceMappingURL=inventing-TABLXK3D.js.map
