import{a as b}from"./chunk-F67I7LTV.js";import"./chunk-ZNV7MURD.js";import{a as k}from"./chunk-W5IZ3NIZ.js";import{a as g}from"./chunk-XL5W2RJH.js";import{a as s}from"./chunk-54XC2ATA.js";import{a as d}from"./chunk-RS7ZYNTC.js";import"./chunk-7DA5YTG5.js";import{a as c}from"./chunk-KTCUHC46.js";import{a as p}from"./chunk-UNRPYWV7.js";import"./chunk-JMVCQWLZ.js";import"./chunk-V5YPTNUP.js";import"./chunk-4TGPNPDH.js";import{a}from"./chunk-DGS2WOJV.js";import"./chunk-GPIGDOJJ.js";import"./chunk-SGSSGBJU.js";import"./chunk-RSW3SDQ5.js";import{a as l}from"./chunk-O7BO2JV6.js";import{a as m}from"./chunk-K4FZKNLQ.js";import"./chunk-CSUXSLMM.js";import"./chunk-OHRM7A4V.js";import{a as r}from"./chunk-TDFIT7OX.js";import"./chunk-JUEI6MIM.js";import"./chunk-REO2URTO.js";import{a as u}from"./chunk-JFPNT65R.js";import"./chunk-ELGHA2UY.js";import"./chunk-G5IZBOBE.js";import"./chunk-QKN4UTNB.js";import"./chunk-L5JB47YP.js";import"./chunk-M4AU23DF.js";async function f(t){let e=await a({cmd:"profile",subcmd:"removeskill",skill_id:t}),o=d(e);return o==="Skill de-activated successfully."?{s:!0}:{s:!1,e:{message:o}}}function i(t){return s({subcmd:"removeskill",skill_id:t})}function n(t){return p(i,f,t)}function v(t,e){e&&e.s&&l("",t.parentNode)}function h(t,e){if(t){c("profile","doDebuff");let o=e.href.match(/=(\d{1,3})$/)[1];n(o).then(b).then(r(v,e))}else k(e.href)}function x(t){let e=t;return e.tagName==="IMG"&&(g(t),e=e.parentNode),e}function D(t){t.eventPhase===1&&t.stopPropagation()}function A(t,e){if(!e.returnValue)return;let o=x(e.target);o.tagName==="A"&&(D(e),e.preventDefault(),h(t,o))}function I(t,e){let o=m("profileRightColumn");o&&u(o.lastElementChild,r(A,t),e)}export{I as default};
//# sourceMappingURL=debuff-VFVOTCOU.js.map
