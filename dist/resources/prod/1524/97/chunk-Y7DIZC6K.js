import{a as k}from"./chunk-GWUTVVPH.js";import{a as T}from"./chunk-JELZOWRY.js";import{a as N}from"./chunk-XE443DWN.js";import{a as I}from"./chunk-5KEIQUIC.js";import{a as L}from"./chunk-RIVS3SLC.js";import{a as h}from"./chunk-ENTXQFEJ.js";import{a as b}from"./chunk-MXZ7547P.js";import{a}from"./chunk-4AJW7EEA.js";import{a as c}from"./chunk-TKD5JPSI.js";import{a as u}from"./chunk-7WFBZC7L.js";import{a as g}from"./chunk-GHM7FGTO.js";import{a as y}from"./chunk-TTU5ZZXZ.js";import{b as p}from"./chunk-PRDY3MHE.js";import{a as d}from"./chunk-HOCDVTA7.js";import{a as i}from"./chunk-OA25OZFH.js";import{b as s}from"./chunk-IE7HJE6I.js";import{G as n,Na as l}from"./chunk-P5UJIVHH.js";import{a as m}from"./chunk-VV2IBFUQ.js";import{a as f}from"./chunk-2TPDHRRV.js";var E=()=>d("td",p()).find(y("Message")),v=e=>h(e.href);function G(e){e.className=""}function S(e){let o=m(l,e).map(v).map(Number);return o.length&&!o.some(t=>t===a())}function $(e){let r=v(e.children[0]);c(e,` [ <a href="${n}recruit&subcmd2=acceptjoin&id=${r}">Accept</a> | <a href="${n}recruit&subcmd2=denyjoin&id=${r}">Deny</a> ]`)}function j(e){S(e)&&(f(e.cells).forEach(G),e.classList.add("fshGrey"),e.classList.add("fshXSmall")),i(e.cells[2]).includes("requested")&&$(e.cells[2])}function C(){let e=E();if(!e)return;let r=N(e);e.innerHTML+='&nbsp;&nbsp;<span class="fshWhite">(Guild Log messages not involving self are dimmed!)</span>',I(r,3,0).forEach(j)}function M(){s("hideNonPlayerGuildLogMessages")&&C()}function P(e,r,o){g(e.cells[2],u({innerHTML:`${b(r.id,r.name)}'s group looted the item '<span class="fshGreen">${o}</span>'`}))}async function q(e){let r=L(e),o=await k(r,T(e)),t=o?.r?.combat?.items?.[0]?.n;t&&P(r,o.r.combat.attacker.group.players[0],t)}function x(){if(!s("groupCombatItems"))return;m('a[href*="&combat_id="]').filter(o=>i(o.previousSibling).includes("victorious")).forEach(q)}export{M as a,x as b};
//# sourceMappingURL=chunk-Y7DIZC6K.js.map