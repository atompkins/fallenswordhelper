import{a as I}from"./chunk-BFYDO37H.js";import{a as T}from"./chunk-Y2XJKF35.js";import{c as U}from"./chunk-MUOFTKDK.js";import{a as S}from"./chunk-5XV7M6KH.js";import"./chunk-Z6NIY7AN.js";import"./chunk-7WQ5UNSS.js";import"./chunk-4IQVGLAY.js";import{a as v}from"./chunk-ATGVI5YH.js";import{a as b}from"./chunk-DSQHKKZ4.js";import"./chunk-IETC7J5T.js";import"./chunk-4BKRRB5O.js";import"./chunk-NZDFBLRQ.js";import{a as C}from"./chunk-S4DLXHFF.js";import"./chunk-PR2EAHHE.js";import{a as h}from"./chunk-MT75LODT.js";import{a as d}from"./chunk-6SYTCZ5G.js";import{a as N}from"./chunk-7J7MQQGS.js";import{a as R}from"./chunk-V4VDCP3C.js";import"./chunk-3XEIZZHC.js";import{a as l}from"./chunk-N7M4WPYO.js";import"./chunk-BGM7VCLD.js";import"./chunk-ZOICBMHG.js";import"./chunk-EL33JOKC.js";import"./chunk-EOP2LXLP.js";import{a as M}from"./chunk-MK3UHL4H.js";import"./chunk-PCHFEFT4.js";import"./chunk-CEFYYGFM.js";import{a as s}from"./chunk-ARPRWHND.js";import{a}from"./chunk-3E53RUR7.js";import{a as g,q as x}from"./chunk-B3TUML6P.js";import{a as E}from"./chunk-KXXSC5XL.js";import"./chunk-VVTHM3UH.js";import"./chunk-34VPQFZA.js";var V=0,u=0,i={};function k(t,e){return l(e).includes(t)}function f(t){return V.find(s(k,t))}function w(t){return f(t).nextElementSibling.nextElementSibling.nextElementSibling}function B(t){return t.nextElementSibling.nextElementSibling.nextElementSibling.children[0].rows[0].cells[0].children[0]}function P(t,e){return e==="amount"?new RegExp(`\\+(\\d+) ${t}`):/(?<cost>\d{1,3})\xA0/u}function $(t,e,n){if(!i[t][n]){let r=P(t,n),o=a(r,l(e));i[t][n]=o}return i[t][n]}function j(t,e){return $(t,e,"amount")}function F(t,e){return $(t,e.nextElementSibling,"cost")}function G(t,e){if(i[t]||(i[t]={}),!i[t].span){let n=T();I(e," "),b(e,n),i[t].span=n}return i[t].span}function q(t,e,n,r){let o=j(t,e),m=F(t,e),p=Math.floor(u/m)*o;n*m<=u?(p=n*o,r.className="fshBlue"):r.className="fshRed",v(`(+${p} stamina)`,r)}function L(t,e,n){let{target:r}=n,o=Number(r.value),m=G(t,e);if(N(o)||o===0){m.className="fshHide";return}q(t,e,o,m)}function A(t){let e=f(t);E(B(e),"keyup",s(L,t,e))}function z(){u=R(l(d("statbar-fsp"))),A("Current"),A("Maximum"),h(`<a href="${g}${x}marketplace">Sell at Marketplace</a>`,w("Gold"))}function H(t,e){let r=f(t).nextElementSibling.nextElementSibling;if(r){let m=Number(a(/(?<value>\d{1,3}) \/ 115/,r.innerHTML));M(e,m+5)}}function c(){V=C("#pCC > table:last-of-type > tbody > tr:nth-child(even) > td:first-child"),H("+1 Max Allies","alliestotal"),H("+1 Max Enemies","enemiestotal"),z()}function D(){S("type")==="1"?U():c()}export{D as default};
//# sourceMappingURL=points-N6SCH3A2.js.map