import{a as Q,b as M}from"./chunk-24UYHRPQ.js";import"./chunk-PDMY3MVK.js";import{a as F}from"./chunk-E3TKYWDH.js";import{a as C}from"./chunk-SXZK6K62.js";import{a as B}from"./chunk-NHSPQJR6.js";import{a as R}from"./chunk-BBYVIMM7.js";import{a as D}from"./chunk-6CZHZ3PZ.js";import{a as T}from"./chunk-3GSTCROR.js";import"./chunk-KWSYMZDM.js";import{a as b}from"./chunk-T73GBUT5.js";import{a as y}from"./chunk-KPTYACHH.js";import"./chunk-JE6ZEAZN.js";import{a as l}from"./chunk-ONWDLXAB.js";import{a as w}from"./chunk-X2WOJMVM.js";import"./chunk-LQQTECLM.js";import"./chunk-TGZKSQRP.js";import{a as I}from"./chunk-EF2M573K.js";import"./chunk-XFPD4H7B.js";import"./chunk-YNVS32OD.js";import"./chunk-67W32VKU.js";import"./chunk-NABSSTR4.js";import"./chunk-DLQ3WG6P.js";import"./chunk-U2VGMJIO.js";import"./chunk-7YFKPLW2.js";import"./chunk-ODJDZJYC.js";import{a as h}from"./chunk-YWUD44C6.js";import{a}from"./chunk-CPPVGUHI.js";import{a as d}from"./chunk-5RI7URZ5.js";import"./chunk-ZQNAMEFH.js";import"./chunk-SGEJ7TQZ.js";import"./chunk-FPDB6HHT.js";import{a as p}from"./chunk-BT4GCRJE.js";import"./chunk-VOYQUMQS.js";import"./chunk-X4OUUFVF.js";import"./chunk-XJYFC7TB.js";import"./chunk-55L4ZDU3.js";import"./chunk-QWDVXKTR.js";import{a as s}from"./chunk-ABZ54ON2.js";import"./chunk-KR2SDNOK.js";import"./chunk-KM3BDUKX.js";import{a as N}from"./chunk-OUF5VK2B.js";import"./chunk-LHBSBOBO.js";import{a as i}from"./chunk-SCKSNXVX.js";import{a as f}from"./chunk-2COHD5H3.js";import"./chunk-2AO2GDV5.js";import"./chunk-UZF2DPM4.js";import"./chunk-PFETQSML.js";import{a as o}from"./chunk-E2LRFPD6.js";import"./chunk-OJ42IKEN.js";import"./chunk-YMWUQMPF.js";import"./chunk-RRWRGO3F.js";import"./chunk-3E35A5QB.js";import{a as k}from"./chunk-3ODBLJBA.js";import"./chunk-MIAGY67V.js";import"./chunk-2OH7AKYH.js";import"./chunk-LP5DJPCW.js";import"./chunk-R5WQFHT3.js";import"./chunk-3IHZF2GE.js";import"./chunk-WZXZ6YXZ.js";function K(t){let e=a("span.fshLastActivity",t);if(!e){e=y({className:"fshLastActivity"});let r=p("h1",t)[0];B(e,r)}return e}function v(t){let e=a(`div.player[data-username="${t.username}"]`),r=K(e);i(`Last Activity: ${D(t.last_login)}<br>Stamina: ${t.current_stamina} / ${t.stamina} ( ${Math.floor(t.current_stamina/t.stamina*100)}% )`,r)}function u(t){return Number(s(t).replace(/[[\]]/g,""))}function V(t,e){if(!e){let r=y({className:"fshPlayer"});return B(r,t.nextElementSibling),r}return e}function W(t,e){return t>e?"fshRed":"fshGreen"}function X(t,e,r){if(!e){i("",r);return}let n=t.nextElementSibling.children[0].children[0],c=u(n),z=V(t,r),J=W(c,e);i(` <span class="${J}">[${e}]</span>`,z)}function Y(t,e){return e[0]===t}function Z(t,e){let r=e.getAttribute("data-name"),n=t.find(o(Y,r));if(n)return n[1]}function tt(t,e){let r=Z(t,e),n=e.nextElementSibling.nextElementSibling;(r||n)&&X(e,r,n)}function et(t){return t.split(/ \[|]/)}function rt(t){return h(s(t.parentNode.lastElementChild)).map(et)}function E(t){let e=t.target;if(e.tagName!=="H1")return;b(s(e)).then(v);let r=rt(e);d("#buff-outer input[name]").forEach(o(tt,r))}var G='<div id="helperQBheader"><table class="quickbuffTable"><thead><tr><th class="quickbuffTableHeader">Sustain</th><th class="quickbuffTableHeader">Fury Caster</th><th class="quickbuffTableHeader">Guild Buffer</th><th class="quickbuffTableHeader">Buff Master</th><th class="quickbuffTableHeader">Extend</th><th class="quickbuffTableHeader">Reinforce</th></tr></thead><tbody><tr><td id="fshSus" class="quickbuffTableDetail">&nbsp;</td><td id="fshFur" class="quickbuffTableDetail">&nbsp;</td><td id="fshGB"  class="quickbuffTableDetail">&nbsp;</td><td id="fshBM"  class="quickbuffTableDetail">&nbsp;</td><td id="fshExt" class="quickbuffTableDetail">&nbsp;</td><td id="fshRI"  class="quickbuffTableDetail">&nbsp;</td></tr></tbody></table></div>',_=[50,54,55,56,60,61,98,101];function ft(t,e){let r=e.dataset.tipped,{cost:n}=t.previousElementSibling.dataset;C(r.replace("</center>",`<br>Stamina Cost: ${n}$&`),e)}function nt(t,e){return!_.includes(Number(t.htmlFor.slice(6)))&&u(e.children[0])<125}function it(t,e){nt(t,e)&&t.classList.add("fshDim")}function ot(t){let e=t.children[0];ft(t,e),it(t,e)}function q(){d('#buff-outer label[for^="skill-"]').forEach(ot)}function st(t,e){return!t&&e}function O(t){let e=p("h1",f("players"))[0];if(st(e,t)){setTimeout(O,100,t-1);return}e&&w(e)}function m(){f("targetPlayers").value&&O(9)}function at(t){let e=Math.floor(t/60),r=t%60,n=T(e,"m");return e>0&&r>0&&(n+=" "),n+=T(r,"s"),n}function ut(t){return`<span class="fshLime">On</span>&nbsp;<span class="fshBuffOn">(${at(t)})</span>`}function mt(t){let e=a(`#buff-outer input[data-name="${t}"]`);return e?`<span class="quickbuffActivate" data-buffid="${e.value}">Activate</span>`:'<span class="fshRed;">Off</span>'}function ct(t,e){let r=t[e]||0;return r?ut(r):mt(e)}function g(t,e,r){i(ct(t,e),r)}function lt(t,e){return t[e.name]=e.duration,t}function S(t){let e=t._skills.reduce(lt,{});g(e,"Guild Buffer",f("fshGB")),g(e,"Buff Master",f("fshBM")),g(e,"Extend",f("fshExt")),g(e,"Reinforce",f("fshRI"))}function pt(t,e){return e.name===t}function dt(t,e){let r=t.find(o(pt,e));return r&&r.value||0}function j(t,e,r){let n=dt(t,e),c="fshLime";n<100&&(c="fshRed"),i(`<span class="${c}">${n}%</span>`,r)}function x(t){let e=t._enhancements;j(e,"Sustain",f("fshSus")),j(e,"Fury Caster",f("fshFur"))}function A(t){x(t),S(t)}function ht(t){let e=f(`skill-${t}`);e&&(e.checked=!0)}function bt(t){t.split(";").forEach(ht)}function L(){let t=l("blist");t&&bt(t)}var P;function U(){P.length?(window.addPlayers([P.shift()]),setTimeout(U,200)):setTimeout(m,200)}function H(){let t=l("players");t&&(P=h(t),U())}function yt(t,e){M(e)&&(t.className="fshLime",i("On",t))}async function $(t){let e=t.target;if(e.className!=="quickbuffActivate")return;I("quickbuff","quickActivate");let r=await Q([window.self],[e.dataset.buffid]);yt(e,r)}function Bt(){k(f("helperQBheader"),$),k(f("players"),E)}function gt(){if(N())return;let t=f("quickbuff");!t||(b(window.self).then(A),R(t.children[0],G),F([q,L,H,Bt,m]))}export{gt as default};
//# sourceMappingURL=quickBuff-CZ4PK3SW.js.map