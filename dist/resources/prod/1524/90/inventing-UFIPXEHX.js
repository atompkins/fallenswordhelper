import{a as E}from"./chunk-RABH6OET.js";import{a as S}from"./chunk-AHCWUNGN.js";import{a as C}from"./chunk-LIML5Y4M.js";import"./chunk-SUQY6VUS.js";import"./chunk-HIJ7PIB7.js";import{a as A}from"./chunk-UJDUZIFN.js";import{a as y}from"./chunk-UDMMQ2YX.js";import{a as M}from"./chunk-SPDN6KWG.js";import"./chunk-YQG3V6HY.js";import{a as _}from"./chunk-TNGQUL6D.js";import"./chunk-PO4LIBTP.js";import{a as R}from"./chunk-HM3KCJWR.js";import"./chunk-YM7LMH37.js";import{a as l}from"./chunk-PJSNMYL6.js";import{a as p}from"./chunk-AYJMSZTJ.js";import"./chunk-343LUOT5.js";import"./chunk-OPQD2S4Z.js";import"./chunk-XOOBRZTW.js";import{a as v,b as g}from"./chunk-NB3UOJO4.js";import{d as b}from"./chunk-RZFANNMJ.js";import"./chunk-K5FCG4D4.js";import"./chunk-3MHFN2TP.js";import"./chunk-O32NP5YA.js";import"./chunk-IVSPKQAF.js";import{a as m}from"./chunk-Z6NEFCOZ.js";import"./chunk-6VXJ4JH3.js";import{a as x}from"./chunk-AB26ECPS.js";import"./chunk-U3JOWR4W.js";import"./chunk-NCJHTPUM.js";import"./chunk-VH2S7CSB.js";import"./chunk-3LPJKV5E.js";import{a as h}from"./chunk-CR72M4ZA.js";import"./chunk-R2ELQJ5E.js";import"./chunk-B4FYTXLE.js";import"./chunk-2BZXURWW.js";import"./chunk-QB3VNFLV.js";import"./chunk-3BJZG67W.js";import{a as u}from"./chunk-C63WRB4G.js";import"./chunk-IGXYBCKR.js";import"./chunk-65QZT3K7.js";import"./chunk-MVFZMXTS.js";import"./chunk-LHP5V3M7.js";import"./chunk-57B6SJJP.js";import"./chunk-5BQ45OC2.js";import"./chunk-PJNUKY76.js";import{b as d}from"./chunk-7BHYTCY7.js";import"./chunk-QXT6DFLJ.js";import{a as c}from"./chunk-DCMPLE27.js";import"./chunk-SHG4I62I.js";import"./chunk-MA33RQLF.js";import"./chunk-CHNXGBZZ.js";function f(e,t){return E({subcmd:"domoverecipes",target_folder_id:e,recipe_selected:t})}function N(e,t){let r=_(e);return r===t?{s:!0}:{s:!1,e:{message:r}}}async function a(e,t){let r=await x({cmd:"inventing",subcmd:"domoverecipes",recipe_selected:t,target_folder_id:e});return N(r,"Selected recipes have been moved to the target folder.")}function s(e,t){return R(f,a,e,t)}var i="ajaxifyMoveRecipe",n=0;function k(){n=!n,h(i,n)}var H=[[g(i),k]];function I(e){p(e.parentNode,`&nbsp;&nbsp;${b(i)}`),c(e.parentNode,"change",v(H))}function F(e){e.parentNode.classList.add("fshRelative"),e.classList.add("hideCheckbox"),y(M({className:"fshSpinner fshSpinner12"}),e)}function L(e){let t=A(e);t.nextElementSibling.remove(),t.remove()}function P(e){e.classList.remove("hideCheckbox"),e.nextElementSibling.remove()}function w(e,t){t.s?e.forEach(L):(S(t.e.message),e.forEach(P))}async function B(e,t){u("inventing","Move recipes by AJAX"),t.forEach(F);let r=await s(e,t.map(o=>Number(o.value)));w(t,r)}function D(e,t){let r=e["recipe_selected[]"];if(!r)return;let o=C(r).filter(j=>j.checked);o.length&&B(t,o)}function V(){let e=m('#pCC img[src*="/folder_on."]').parentNode.href;return l(e,"folder_id")}function $(e){if(!n)return;e.preventDefault();let t=V(),{elements:r}=e.target,o=r.target_folder_id.value;t!==o&&D(r,o)}function q(){let e=m('input[value="Move Recipes"]');I(e),n=d(i),c(e.form,"submit",$)}export{q as default};
//# sourceMappingURL=inventing-UFIPXEHX.js.map