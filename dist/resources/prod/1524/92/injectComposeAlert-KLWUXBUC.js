import{a as k}from"./chunk-EJQFETEW.js";import{a as b}from"./chunk-ZK3AGOF2.js";import{a as f}from"./chunk-B4DZ2JJW.js";import{a as x}from"./chunk-LFZPKT47.js";import"./chunk-OR5BPR4B.js";import{a as A}from"./chunk-6NBL4CEJ.js";import"./chunk-UECO6BBS.js";import{a as d}from"./chunk-DI3XCMNE.js";import"./chunk-KF2BXDH2.js";import{a as T}from"./chunk-3HCSSFLF.js";import"./chunk-WCTHIQU3.js";import"./chunk-WA4H3QPQ.js";import"./chunk-DKWH62CP.js";import"./chunk-2IOAHVVN.js";import"./chunk-GALQGYEO.js";import"./chunk-T4ZSWDX2.js";import"./chunk-WE2GCAKX.js";import{a as e}from"./chunk-BQPBQ4WG.js";import"./chunk-N3ED3R2T.js";import{a as w}from"./chunk-JDAAN4LA.js";import"./chunk-IQ37ZVMO.js";import{a as N}from"./chunk-OI7KRNQS.js";import"./chunk-C7L2X63R.js";import{a as c}from"./chunk-LKEXSUYL.js";import"./chunk-O6E23IRT.js";import"./chunk-TLAXHTSP.js";import"./chunk-CKRPJ7HI.js";import"./chunk-RUEPLNRL.js";import"./chunk-O7K3SHEW.js";import"./chunk-EZQ2GDBH.js";import"./chunk-GVTRKM2F.js";import{b as s}from"./chunk-EZ536MXS.js";import"./chunk-LVBWHS3E.js";import"./chunk-OR37OWF3.js";import{T as y,f as h,qa as i,ra as p}from"./chunk-FQGZN2JL.js";import"./chunk-BYAZQWO5.js";import{a as C}from"./chunk-MR322WHU.js";function a(o){return N({cmd:"composing",...o})}function u(){return a({subcmd:"view"})}function _(o){let{h:t,m,s:r}=T(h,o);return{time_remaining:Number(t)*60*60+Number(m)*60+Number(r)}}function v(o){let t=f("composing-potion",o);if(t.length===0)return{s:!1};let m=t.length,r=f("composing-potion-time",o).map(A).filter(M=>M.endsWith("s")).map(_);return{r:{max_potions:m,potions:r},s:!0}}async function l(){return v(await k({cmd:"composing"}))}function g(){return b(u,l)}var E=`<li class="notification"><a href="${y}"><span class="notification-icon"></span><p class="notification-content">Composing to do</p></a></li>`;function n(){x(d("notifications"),E)}function R(o){return o.time_remaining}function B(){n(),e(i,!0)}function j(o){let t=Math.min.apply(null,o.map(R));t>0?(e(i,!1),e(p,c()+t*1e3)):B()}function I(o){o.potions.length!==o.max_potions?B():j(o.potions)}function L(o){o.s&&I(o.r)}function P(){let o=s(p);o&&c()<o||g().then(L)}function V(){s(i)?n():P()}function $(){C.cmd!=="composing"&&w()&&V()}export{$ as default};
//# sourceMappingURL=injectComposeAlert-KLWUXBUC.js.map