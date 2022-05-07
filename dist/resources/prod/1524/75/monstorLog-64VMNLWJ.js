import{a as v}from"./chunk-26QSBXRQ.js";import{a as B}from"./chunk-ZL2OT7KD.js";import{a as y}from"./chunk-332EVHRL.js";import{a as u,b as L,c as k}from"./chunk-BF5ACXQT.js";import"./chunk-A3YBBQMJ.js";import"./chunk-TLM5ASK6.js";import{b}from"./chunk-46TQQDHW.js";import{a as i}from"./chunk-O7BO2JV6.js";import{a as g}from"./chunk-K4FZKNLQ.js";import{a}from"./chunk-5KVNBQPW.js";import"./chunk-5CGQ343C.js";import"./chunk-CSUXSLMM.js";import{a as C}from"./chunk-OHRM7A4V.js";import{a as d}from"./chunk-TDFIT7OX.js";import{a as S,b as A}from"./chunk-I42VMRRO.js";import"./chunk-4OB64LT4.js";import{a as E}from"./chunk-UQIKKMNB.js";import"./chunk-UE3DRZE6.js";import"./chunk-JUEI6MIM.js";import"./chunk-REO2URTO.js";import{a as $}from"./chunk-NH6DTJ4R.js";import{a as w}from"./chunk-JFPNT65R.js";import"./chunk-ELGHA2UY.js";import{a as h}from"./chunk-G5IZBOBE.js";import"./chunk-QKN4UTNB.js";import"./chunk-VOOMRXTQ.js";import"./chunk-XAE2ZLZO.js";import{b as l}from"./chunk-L5JB47YP.js";import{a as n}from"./chunk-M4AU23DF.js";function I(t){return`<img class="tip-static" src="${l}creatures/${t}.png" data-tipped="<img src='${l}creatures/${t}.png' width=200 height=200>" width=40 height=40>`}function N(t){return t&&a(t).length>0}function s(t){return`${t.min.toString()} - ${t.max.toString()}`}function P(t){return`<span class="fshNoWrap">${t[0]}: ${s(t[1])}</span>`}function _(t){if(N(t)){let r='<span class="fshXXSmall">';return r+=C(t).map(P).join("<br>"),`${r}</span>`}return'<span class="fshGrey">**Missing**</span>'}function p(t,r){return{...t[r],name:r,image:I(t[r].image_id),level:v(t[r].level),attack:s(t[r].attack),defense:s(t[r].defense),armor:s(t[r].armor),damage:s(t[r].damage),hp:s(t[r].hp),enhancements:_(t[r].enhancements)}}function H(t){return typeof t=="string"?parseInt(t.replace(/[,#]/g,""),10):t}function j(t){return!h(t.type)&&t.type>8}function q(t,r){return!h(t.type)&&r.type>8}function f(t,r){if(j(t))return 1;if(q(t,r))return-1;let m=u(t,n.sortBy,1),c=u(r,n.sortBy,1);m=H(m),c=H(c);let x=m-c;return L(x)}var o,e;function M(){i("<span>No monster information! Please enable entity log and travel a bit to see the world</span>",o)}function D(t){return`<tr><td class="fshCenter">${t.image}</td><td>${t.name}</td><td class="fshCenter">${t.creature_class}</td><td class="fshCenter">${t.level}</td><td class="fshCenter">${t.attack}</td><td class="fshCenter">${t.defense}</td><td class="fshCenter">${t.armor}</td><td class="fshCenter">${t.damage}</td><td class="fshCenter">${t.hp}</td><td class="fshCenter">${t.enhancements}</td></tr>`}function O(){return e.map(D).join("")}function T(){let t=g("entityTableOutput");!e||!t||i(O(),t)}function R(t){return t.getAttribute("sortType")||"string"}function W(t){t==="string"?e.sort(k):e.sort(f)}function X(t){B(t);let r=R(t);W(r),T()}function z(t){return y("fshLink",t)&&t.hasAttribute("sortkey")}function F(t){let{target:r}=t;if(r.id==="clearEntityLog"){A("fsh_monsterLog",""),M();return}z(r)&&X(r)}function G(){!e||(i('<table cellspacing="0" cellpadding="0" border="0" width="100%"><tr class="fshBlack fshWhite"><td width="90%" class="fshCenter"><b>Entity Information</b></td><td width="10%">[<span id="clearEntityLog" class="fshPoint">Clear</span>]</td></tr></table><table cellspacing="1" cellpadding="2" border="0"><thead><tr class="fshVerySoftOrange"><th width="25%" class="fshLink" sortkey="name" colspan="2">Entity</th><th class="fshCenter fshLink" sortkey="creature_class">Class</th><th class="fshCenter fshLink" sortkey="level" sorttype="number">Lvl</th><th class="fshCenter">Attack</th><th class="fshCenter">Defence</th><th class="fshCenter">Armor</th><th class="fshCenter">Damage</th><th class="fshCenter">HP</th><th class="fshCenter">Enhancements</th></tr></thead><tbody id="entityTableOutput"></tbody></table>',o),w(o,F))}function J(t){e=a(t).map(d(p,t))}function Q(t){if(!t){M();return}J(t),n.sortBy="level",n.sortAsc=!0,e.sort(f),G(),T()}function U(t){o=t||b,o&&(S("fsh_monsterLog").then(Q),$("ui-dialog-titlebar-close").forEach(r=>r.blur()))}function V(t){E()&&U(t)}export{V as default};
//# sourceMappingURL=monstorLog-64VMNLWJ.js.map