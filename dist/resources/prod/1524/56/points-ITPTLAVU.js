import{c as y}from"./chunk-77ECYCVX.js";import"./chunk-4MCB2GON.js";import{a as N}from"./chunk-ODZEMQE7.js";import{a as C}from"./chunk-VXPED75B.js";import{a as I}from"./chunk-U4LVETBA.js";import{a as E}from"./chunk-52BHRAB5.js";import"./chunk-5QL3EWJR.js";import{a as h}from"./chunk-EQ6XPZXK.js";import{a as T}from"./chunk-ZQ6Q7AAO.js";import"./chunk-XBQPITPX.js";import"./chunk-AVPY2BTL.js";import"./chunk-2FGL6JOK.js";import"./chunk-GJHRXFGS.js";import"./chunk-JZUIGPQK.js";import"./chunk-E7LHQKU5.js";import{a as U}from"./chunk-AFQMUQTQ.js";import{a as v}from"./chunk-6RYYSQKY.js";import"./chunk-NRM2IEBO.js";import"./chunk-KHAKP3NJ.js";import{a as b}from"./chunk-6UGBR7LD.js";import{a as p}from"./chunk-HSGQLATB.js";import{a as d}from"./chunk-VYOJRJTP.js";import"./chunk-IZEIZGGY.js";import"./chunk-H4RRBTG7.js";import"./chunk-D4RSYPIY.js";import{a as S}from"./chunk-4LICJMIC.js";import"./chunk-VLEL2DAI.js";import"./chunk-SQ3ABL2K.js";import{a as s}from"./chunk-S2PPJ2GD.js";import"./chunk-UYUWQQUH.js";import{m as x}from"./chunk-XSTNX5IW.js";import{a as g}from"./chunk-UVCMQZY6.js";import{a as l}from"./chunk-NGIDL4MJ.js";var M,c,m={};function B(t,e){return s(e).includes(t)}function u(t){return M.find(l(B,t))}function H(t){return u(t).nextElementSibling.nextElementSibling.nextElementSibling}function P(t){return t.nextElementSibling.nextElementSibling.nextElementSibling.children[0].rows[0].cells[0].children[0]}function $(t,e){return e==="amount"?new RegExp(`\\+(\\d+) ${t}`):/(\d{1,3})\xA0/}function R(t,e,n){if(!m[t][n]){let r=$(t,n),o=s(e).match(r)[1];m[t][n]=o}return m[t][n]}function k(t,e){return R(t,e,"amount")}function w(t,e){return R(t,e.nextElementSibling,"cost")}function G(t,e){if(m[t]||(m[t]={}),!m[t].span){let n=I();N(e," "),v(e,n),m[t].span=n}return m[t].span}function j(t,e,n,r){let o=k(t,e),i=w(t,e),a;n*i<=c?(a=n*o,r.className="fshBlue"):(a=Math.floor(c/i)*o,r.className="fshRed"),U(`(+${a} stamina)`,r)}function q(t,e,n){let{target:r}=n,o=Number(r.value),i=G(t,e);if(h(o)||o===0){i.className="fshHide";return}j(t,e,o,i)}function V(t){let e=u(t);p(P(e),"keyup",l(q,t,e))}function F(){c=C(s(d("statbar-fsp"))),V("Current"),V("Maximum"),b(`<a href="${g}${x}marketplace">Sell at Marketplace</a>`,H("Gold"))}function A(t,e){let r=u(t).nextElementSibling.nextElementSibling;if(r){let i=Number(/(\d{1,3}) \/ 115/.exec(r.innerHTML)[1]);T(e,i+5)}}function f(){M=S("#pCC > table:last-of-type > tbody > tr:nth-child(even) > td:first-child"),A("+1 Max Allies","alliestotal"),A("+1 Max Enemies","enemiestotal"),F()}function L(){E("type")==="1"?y():f()}export{L as default};
//# sourceMappingURL=points-ITPTLAVU.js.map