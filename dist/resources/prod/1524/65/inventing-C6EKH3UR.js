import{a as E}from"./chunk-YB66QUFI.js";import{c as C}from"./chunk-AQK6FNAW.js";import"./chunk-5GGX7PO6.js";import{a as S}from"./chunk-PBFRD2HO.js";import{a as A}from"./chunk-AGH27DOD.js";import"./chunk-P77B3UDN.js";import{a as M}from"./chunk-NHSPQJR6.js";import{a as y}from"./chunk-KPTYACHH.js";import"./chunk-MGMX4XNV.js";import"./chunk-O6TBNTSD.js";import{a as R}from"./chunk-MLQXEM4Y.js";import"./chunk-NKPYHMS2.js";import{a as _}from"./chunk-EF2M573K.js";import{a as l}from"./chunk-XFPD4H7B.js";import"./chunk-YNVS32OD.js";import{a as d}from"./chunk-6F7QE44M.js";import{a as b}from"./chunk-67W32VKU.js";import"./chunk-NABSSTR4.js";import"./chunk-DLQ3WG6P.js";import"./chunk-U2VGMJIO.js";import"./chunk-7YFKPLW2.js";import{a as v}from"./chunk-L7WRUNH4.js";import{a as u}from"./chunk-NMCQLEMY.js";import"./chunk-UWJMWH2T.js";import{f as x}from"./chunk-J6XAEC6E.js";import{a as c}from"./chunk-CPPVGUHI.js";import"./chunk-VY6HIPFL.js";import"./chunk-VOYQUMQS.js";import{a as h}from"./chunk-X4OUUFVF.js";import"./chunk-55L4ZDU3.js";import"./chunk-QWDVXKTR.js";import"./chunk-KR2SDNOK.js";import{a as g}from"./chunk-3FGVAWVX.js";import"./chunk-KGOSFF6R.js";import"./chunk-KM3BDUKX.js";import"./chunk-LHBSBOBO.js";import"./chunk-2COHD5H3.js";import"./chunk-2AO2GDV5.js";import"./chunk-YJHAM7BA.js";import"./chunk-UZF2DPM4.js";import"./chunk-PFETQSML.js";import"./chunk-E2LRFPD6.js";import"./chunk-RRWRGO3F.js";import"./chunk-3E35A5QB.js";import{b as p}from"./chunk-MIAGY67V.js";import"./chunk-2OH7AKYH.js";import{a as m}from"./chunk-LP5DJPCW.js";import"./chunk-R5WQFHT3.js";import"./chunk-3IHZF2GE.js";import"./chunk-WZXZ6YXZ.js";function f(e,t){return E({subcmd:"domoverecipes",target_folder_id:e,recipe_selected:t})}function N(e,t){let r=R(e);return r===t?{s:!0}:{s:!1,e:{message:r}}}async function a(e,t){let r=await h({cmd:"inventing",subcmd:"domoverecipes",recipe_selected:t,target_folder_id:e});return N(r,"Selected recipes have been moved to the target folder.")}function s(e,t){return b(f,a,e,t)}var i="ajaxifyMoveRecipe",n;function k(){n=!n,g(i,n)}var H=[[v(i),k]];function I(e){d(e.parentNode,`&nbsp;&nbsp;${x(i)}`),m(e.parentNode,"change",u(H))}function F(e){e.parentNode.classList.add("fshRelative"),e.classList.add("hideCheckbox"),M(y({className:"fshSpinner fshSpinner12"}),e)}function L(e){let t=A(e);t.nextElementSibling.remove(),t.remove()}function P(e){e.classList.remove("hideCheckbox"),e.nextElementSibling.remove()}function w(e,t){t.s?e.forEach(L):(C(t.e.message),e.forEach(P))}async function B(e,t){_("inventing","Move recipes by AJAX"),t.forEach(F);let r=await s(e,t.map(o=>Number(o.value)));w(t,r)}function D(e,t){let r=e["recipe_selected[]"];if(!r)return;let o=S(r).filter(j=>j.checked);o.length&&B(t,o)}function V(){let e=c('#pCC img[src*="/folder_on."]').parentNode.href;return l(e,"folder_id")}function $(e){if(!n)return;e.preventDefault();let t=V(),{elements:r}=e.target,o=r.target_folder_id.value;t!==o&&D(r,o)}function q(){let e=c('input[value="Move Recipes"]');I(e),n=p(i),m(e.form,"submit",$)}export{q as default};
//# sourceMappingURL=inventing-C6EKH3UR.js.map