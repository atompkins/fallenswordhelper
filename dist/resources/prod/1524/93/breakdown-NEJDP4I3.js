import{a as T}from"./chunk-L2P7QI3A.js";import{a as I}from"./chunk-EUY7OOLJ.js";import"./chunk-YBFVIJWI.js";import"./chunk-ZDDRD4RY.js";import"./chunk-TVL65U5L.js";import{a as E}from"./chunk-GPQHRIML.js";import{a as v}from"./chunk-GGEOAGX3.js";import"./chunk-D6NHBHDF.js";import{a as x}from"./chunk-TWEQZVC2.js";import"./chunk-NUXR4MVG.js";import"./chunk-3TMTTFLY.js";import{a as B}from"./chunk-MX5TZ7HK.js";import{a as m}from"./chunk-DEEYYK6E.js";import"./chunk-E6TZ5ETX.js";import{a as w}from"./chunk-MUG4VEKH.js";import{a as y}from"./chunk-G77K7S5L.js";import"./chunk-NEGYQUFU.js";import{e as C}from"./chunk-N76YIGNN.js";import"./chunk-VZTHL7WE.js";import{b as s}from"./chunk-PWSQLISA.js";import{a as o}from"./chunk-5HI4ILOP.js";import"./chunk-7Z2VPPBD.js";import"./chunk-MI5ERUAI.js";import"./chunk-RDAHQVBW.js";import"./chunk-DP37WUXB.js";import"./chunk-MT2H2XVD.js";import"./chunk-LGDJTMPN.js";import{a as P}from"./chunk-66FBRD7Z.js";import"./chunk-GKVMJ4PA.js";import{a}from"./chunk-A45QJTDQ.js";import"./chunk-6YW6FXRF.js";import"./chunk-GDLA3KMJ.js";import{a as r}from"./chunk-CRWX7KCS.js";import"./chunk-5RFQSTDG.js";import"./chunk-4MID3VOD.js";import"./chunk-5L4CLVOL.js";import{a as f}from"./chunk-HYLQEGZ4.js";import"./chunk-7I6ASYKS.js";import"./chunk-R2OFDU54.js";import"./chunk-CEGJSIVU.js";import{b as k}from"./chunk-G6TPLPCG.js";import"./chunk-IMGI5UI2.js";import"./chunk-E53ZSUER.js";import{T as h,r as b}from"./chunk-UYN3LUIY.js";import"./chunk-U6BMTRHL.js";import"./chunk-3WE6KSRQ.js";function p(e){return T({data:{cmd:"composing",subcmd:"dobreakdown",item_list:e},dataType:"json"})}var l=0,d=0;function N(e){let t=e.id.replace(`${d}-item-`,"");l[t]&&l[t].craft==="Perfect"&&E(e)}function j(){let e=B("selectable-item",o(`${d}-items`));e.length!==0&&e.forEach(N)}function A(e){l=e.items;let t=w({className:"fshAC"});m(t,'<button class="fshBl">Perfect</button>'),y(s(),t),r(t,j)}function u(e){a()||(d=e,I().then(A))}var c="disableBreakdownPrompts",i=0,n=[];function D(e){e.hide()}function F(e,t){e.animate({height:0},500,t)}function H(){let e=$("#composingMessageContainer");e.animate({opacity:0},500,f(F,e,f(D,e)))}function O(e,t){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":t,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(e)}function M(e,t){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(O(e,t))),setTimeout(H,5e3)}function Q(e){e.error!==0?M(`Error: ${e.msg}`,"rgb(164, 28, 28)"):v(`${h+b}breakdown&m=1`)}function V(){p(n).then(Q)}function L(e){if(e.stopPropagation(),n.length===0){M("Error: No items selected.","rgb(164, 28, 28)");return}V()}function R(e){i&&e.target.id==="breakdown-selected-items"&&L(e)}function S(e){if(!x("selectable-item",e.target))return;let t=e.target.id.replace("composing-item-",""),g=n.indexOf(t);g===-1?n.push(t):n.splice(g,1)}function U(){i=!i,P(c,i)}function _(){m(s(),`<table class="fshTblCenter"><tbody>${C(c)}</tbody></table>`)}function q(e){r(e.parentNode,R,!0),r(o("composing-items"),S),r(o(c),U)}function z(){if(a())return;let e=o("breakdown-selected-items");e&&(u("composing"),i=k(c),_(),q(e))}export{z as default};
//# sourceMappingURL=breakdown-NEJDP4I3.js.map