import{a as M}from"./chunk-GEM7U3C6.js";import"./chunk-YOWQC2DP.js";import"./chunk-7CHHFIOI.js";import{a as y}from"./chunk-ENTXQFEJ.js";import{a as h}from"./chunk-QQ63LZNN.js";import{a as p}from"./chunk-64TOS6NK.js";import"./chunk-HYGMXHNU.js";import"./chunk-6N6Q5324.js";import{a as A}from"./chunk-C7LAVJ35.js";import"./chunk-MROIH62D.js";import"./chunk-CUQDXMMQ.js";import"./chunk-HISPWLCY.js";import{a as x}from"./chunk-CIIE7ODC.js";import"./chunk-JDKUHI2H.js";import"./chunk-Z5G3WLWA.js";import{a as P}from"./chunk-Y6FDPRAU.js";import{a as u}from"./chunk-TKD5JPSI.js";import"./chunk-FKJWOE7J.js";import{a as v}from"./chunk-7WFBZC7L.js";import{a as O}from"./chunk-GHM7FGTO.js";import"./chunk-ORHGY3QB.js";import"./chunk-ZQDMEVYG.js";import"./chunk-A6RBQFLE.js";import{a as C}from"./chunk-PRDY3MHE.js";import{a as w}from"./chunk-K452RLBU.js";import{a as c}from"./chunk-IWEQS4A6.js";import"./chunk-W3672ANI.js";import"./chunk-K43OS4B7.js";import{a as m}from"./chunk-V7GTOIAW.js";import"./chunk-KRBDNKGY.js";import{a as k}from"./chunk-OA25OZFH.js";import"./chunk-42DDVEBL.js";import"./chunk-IGPEYEWI.js";import"./chunk-VNYEAL6H.js";import"./chunk-RIFWXPPJ.js";import"./chunk-W73Y4JTB.js";import"./chunk-RBU3GVPY.js";import"./chunk-C33NXJNH.js";import{a as Q}from"./chunk-5H2KFPOD.js";import"./chunk-EBO5CZG3.js";import"./chunk-WX24VINF.js";import{a as I}from"./chunk-OCKAGFKQ.js";import"./chunk-IE7HJE6I.js";import{A as S,B as $,y as E}from"./chunk-P5UJIVHH.js";import{a as L}from"./chunk-U7JQSSPD.js";import{d}from"./chunk-EOMEBOYD.js";import"./chunk-2TPDHRRV.js";import"./chunk-KQN5ZURG.js";import{a as o}from"./chunk-Y7Z3DYSJ.js";import"./chunk-XS7UUVPQ.js";import"./chunk-GOZAE5SK.js";import"./chunk-GVTLUYA2.js";import"./chunk-BHGUITJJ.js";import{a as i}from"./chunk-VZNGURHD.js";import"./chunk-LGFZXCM7.js";var r="enemy-buff-check-on",g="enemy-buff-check-off",s="enemy-send-message",l="enemy-quickbuff",b="enemy-quick-buff";var _=[[e=>e<120,"fshDodgerBlue","fshRed"],[e=>e<300,"fshDodgerBlue","fshRed"],[()=>!0,"fshPowderBlue","fshPink"]];function D(e,t){return e?t[1]:t[2]}function G(e,t){return t[0](d()-e)}function R(e,t){let n=_.find(o(G,e));return n?D(t,n):"fshWhite"}function j(e,t){return`<a class="player-name tip-static ${R(e.last_login,t)}" data-tipped="<b>${e.username}</b><br><table><tbody><tr><td>Level:</td><td>${e.level}</td></tr><tr><td>Last Activity:</td><td>${M(e.last_login)}</td></tr></tbody></table>" href="${E}${e.id}">${e.username}</a>`}function H(){return i.hideBuffSelected?"":`<span class="${r}"></span>`}function U(){return i.hideGuildInfoMessage?"":`<span class="${s} enemy-icon guild-minibox-action tip-static" data-tipped="Send Message"></span>`}function q(){return i.hideGuildInfoBuff?"":`<span class="${l} enemy-icon guild-minibox-action tip-static" data-tipped="Quick Buff"></span>`}function z(e){return i.hideGuildInfoSecureTrade?"":`<a class="enemy-secure-trade enemy-icon guild-minibox-action tip-static" href="${$}${e.username}" data-tipped="Secure Trade"></a>`}function F(e){return i.hideGuildInfoTrade?"":`<a class="enemy-trade enemy-icon guild-minibox-action tip-static" href="${S}${e.username}" data-tipped="Send Gold/Items/FSP"></a>`}function W(e){return d()-e.last_login<1800}function J(e,t){return`<li class="player"><div class="player-row">${H()}${j(t,e)}</div><div class="guild-minibox-actions">${U()}${q()}${z(t)}${F(t)}</div></li>`}function a(e,t){return e.filter(W).map(o(J,t)).join("")}var K=[(e,t)=>e.length+t.length,(e,t)=>{if(!i.enableAllyOnlineList)return t.length},e=>{if(!i.enableEnemyOnlineList)return e.length}];function f(e){L("allyEnemy",e)}function V(e,t,n){return n(e,t)===0}function X(e,t){return K.every(o(V,e,t))}function Y(e,t){let n="";i.enableAllyOnlineList&&(n+=a(e,!0)),i.enableEnemyOnlineList&&(n+=a(t,!1));let B=c("fshContactList");w("",B),u(B,n)}function N(e){let t=m(e._allies,[]),n=m(e._enemies,[]);X(t,n)||Y(t,n)}async function Z(){f("resetList");let e=await p(!0);N(e)}function T(e){f("toggleBuffSelected"),e.classList.toggle(r),e.classList.toggle(g)}function ee(e){f("msgPlayer"),window.openQuickMsgDialog(k(e.parentNode.previousElementSibling.lastElementChild))}function te(e){f("buffPlayer"),h(y(e.parentNode.previousElementSibling.lastElementChild.href))}function ne(){f("selectedBuff");let t=P(r,c("fshContactList")).map(n=>y(n.nextElementSibling.href)).join(",");h(t)}var ie=[[r,T],[g,T],[s,ee],[l,te],[b,ne]];function re(e){let{target:t}=e;if(t.id==="fshResetEnemy"){Z();return}A(ie)(e)}function oe(e){let t=v({id:"fshAllyEnemy",className:"minibox"}),n='<h3>Allies/Enemies</h3><div class="minibox-content"><h4>Online Contacts <span id="fshResetEnemy">Reset</span></h4><div class="minibox-enemy"><ul id="fshContactList"></ul>';i.hideBuffSelected||(n+=`<ul class="${b}">Quick Buff Selected</ul>`),n+="</div></div>",u(t,n),O(C(),t),I(t,re),N(e)}function fe(e){e&&x(3,oe,[e])}async function se(){if(Q())return;let e=await p(!1);fe(e)}export{se as default};
//# sourceMappingURL=allyEnemy-4NRYPQOC.js.map