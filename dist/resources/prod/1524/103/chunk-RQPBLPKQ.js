import{a as k}from"./chunk-E2NHU2NT.js";import{a as T}from"./chunk-3BIKLBUY.js";import{a as N}from"./chunk-V24GP2G2.js";import{a as I}from"./chunk-YHMEPQN6.js";import{a as L}from"./chunk-FHBAIS6F.js";import{a as b}from"./chunk-WKYCC6BP.js";import{a as h}from"./chunk-WGVGLZHS.js";import{a}from"./chunk-3TMUGSDY.js";import{a as c}from"./chunk-7WQ5UNSS.js";import{a as u}from"./chunk-RK5HVFU5.js";import{a as g}from"./chunk-DSQHKKZ4.js";import{a as y}from"./chunk-XA5QF7QF.js";import{a as m}from"./chunk-S4DLXHFF.js";import{b as p}from"./chunk-DLFJWHV6.js";import{a as d}from"./chunk-VDZHRZJL.js";import{a as i}from"./chunk-N7M4WPYO.js";import{a as f}from"./chunk-BGM7VCLD.js";import{c as s}from"./chunk-5D3DZNMD.js";import{G as n,Na as l}from"./chunk-B3TUML6P.js";var E=()=>d("td",p()).find(y("Message")),v=e=>L(e.href);function G(e){e.className=""}function S(e){let o=m(l,e).map(v).map(Number);return o.length&&!o.some(t=>t===a())}function $(e){let r=v(e.children[0]);c(e,` [ <a href="${n}recruit&subcmd2=acceptjoin&id=${r}">Accept</a> | <a href="${n}recruit&subcmd2=denyjoin&id=${r}">Deny</a> ]`)}function j(e){S(e)&&(f(e.cells).forEach(G),e.classList.add("fshGrey"),e.classList.add("fshXSmall")),i(e.cells[2]).includes("requested")&&$(e.cells[2])}function C(){let e=E();if(!e)return;let r=N(e);e.innerHTML+='&nbsp;&nbsp;<span class="fshWhite">(Guild Log messages not involving self are dimmed!)</span>',b(r,3,0).forEach(j)}function M(){s("hideNonPlayerGuildLogMessages")&&C()}function P(e,r,o){g(e.cells[2],u({innerHTML:`${h(r.id,r.name)}'s group looted the item '<span class="fshGreen">${o}</span>'`}))}async function q(e){let r=I(e),o=await k(r,T(e)),t=o?.r?.combat?.items?.[0]?.n;t&&P(r,o.r.combat.attacker.group.players[0],t)}function x(){if(!s("groupCombatItems"))return;m('a[href*="&combat_id="]').filter(o=>i(o.previousSibling).includes("victorious")).forEach(q)}export{M as a,x as b};
//# sourceMappingURL=chunk-RQPBLPKQ.js.map