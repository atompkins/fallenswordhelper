import{a as k}from"./chunk-PATY7B52.js";import{a as b}from"./chunk-HM3KCJWR.js";import{a as f}from"./chunk-4MVMG2S4.js";import{a as x}from"./chunk-AYJMSZTJ.js";import"./chunk-343LUOT5.js";import{a as A}from"./chunk-MJQR7DVR.js";import"./chunk-4DD6XIWS.js";import{a as d}from"./chunk-3MHFN2TP.js";import"./chunk-4RHFJVDQ.js";import{a as T}from"./chunk-U4GOJLCR.js";import"./chunk-6VXJ4JH3.js";import"./chunk-AB26ECPS.js";import"./chunk-U3JOWR4W.js";import"./chunk-NPK42VJ3.js";import"./chunk-NCJHTPUM.js";import"./chunk-VH2S7CSB.js";import"./chunk-3LPJKV5E.js";import{a as e}from"./chunk-CR72M4ZA.js";import"./chunk-R2ELQJ5E.js";import{a as w}from"./chunk-KY6XDBV6.js";import"./chunk-5JFQS7E5.js";import{a as N}from"./chunk-QB3VNFLV.js";import"./chunk-3BJZG67W.js";import{a as c}from"./chunk-U6A4VQTL.js";import"./chunk-IGXYBCKR.js";import"./chunk-65QZT3K7.js";import"./chunk-MVFZMXTS.js";import"./chunk-LHP5V3M7.js";import"./chunk-57B6SJJP.js";import"./chunk-5BQ45OC2.js";import"./chunk-PJNUKY76.js";import{b as s}from"./chunk-7BHYTCY7.js";import"./chunk-QXT6DFLJ.js";import"./chunk-DCMPLE27.js";import{T as y,f as h,qa as i,ra as p}from"./chunk-SHG4I62I.js";import"./chunk-MA33RQLF.js";import{a as C}from"./chunk-CHNXGBZZ.js";function a(o){return N({cmd:"composing",...o})}function u(){return a({subcmd:"view"})}function _(o){let{h:t,m,s:r}=T(h,o);return{time_remaining:Number(t)*60*60+Number(m)*60+Number(r)}}function v(o){let t=f("composing-potion",o);if(t.length===0)return{s:!1};let m=t.length,r=f("composing-potion-time",o).map(A).filter(M=>M.endsWith("s")).map(_);return{r:{max_potions:m,potions:r},s:!0}}async function l(){return v(await k({cmd:"composing"}))}function g(){return b(u,l)}var E=`<li class="notification"><a href="${y}"><span class="notification-icon"></span><p class="notification-content">Composing to do</p></a></li>`;function n(){x(d("notifications"),E)}function R(o){return o.time_remaining}function B(){n(),e(i,!0)}function j(o){let t=Math.min.apply(null,o.map(R));t>0?(e(i,!1),e(p,c()+t*1e3)):B()}function I(o){o.potions.length!==o.max_potions?B():j(o.potions)}function L(o){o.s&&I(o.r)}function P(){let o=s(p);o&&c()<o||g().then(L)}function V(){s(i)?n():P()}function $(){C.cmd!=="composing"&&w()&&V()}export{$ as default};
//# sourceMappingURL=injectComposeAlert-APRDW6MN.js.map