import{t as e,T as t,a2 as n,c as i,bI as s,bJ as a,x as o,a as f,m as l,i as c,bG as r,o as d,a3 as u,bK as m,y as p,A as b,B as h}from"./calfSystem-45544049.js"
import{f as y}from"./formatLastActivity-4dc9d762.js"
import{g}from"./getArrayByClassName-b62a000f.js"
import{i as j}from"./insertElementAfterBegin-ddd00fbd.js"
import{m as $}from"./myStats-81d199a4.js"
import{o as k}from"./openQuickBuffByName-81a3ab3b.js"
import"./outputFormat-264fcef1.js"
import"./insertElementBefore-aa28f497.js"
import"./getProfile-bf9417e3.js"
import"./cmdExport-4fdfd8a3.js"
import"./indexAjaxJson-e79ad7ee.js"
import"./playerName-c1bcaeb9.js"
import"./idb-ca3578bc.js"
import"./fshOpen-56a6fafa.js"
const v=[[e=>e<120,"fshDodgerBlue","fshRed"],[e=>e<300,"fshDodgerBlue","fshRed"],[()=>!0,"fshPowderBlue","fshPink"]]
function x(e,n){return n[0](t-e)}function B(t,i){return`<a class="player-name tip-static ${function(t,n){const i=v.find(e(x,t))
return i?function(e,t){return e?t[1]:t[2]}(n,i):"fshWhite"}(t.last_login,i)}" data-tipped="<b>${t.username}</b><br><table><tbody><tr><td>Level:</td><td>${t.level}</td></tr><tr><td>Last Activity:</td><td>${y(t.last_login)}</td></tr></tbody></table>" href="${n}${t.id}">${t.username}</a>`}function E(e){return t-e.last_login<1800}function S(e,t){return`<li class="player"><div class="player-row">${i.hideBuffSelected?"":'<span class="enemy-buff-check-on"></span>'}${B(t,e)}</div><div class="guild-minibox-actions">${i.hideGuildInfoMessage?"":'<span class="enemy-send-message guild-icon left guild-minibox-action tip-static" data-tipped="Send Message"></span>'}${i.hideGuildInfoBuff?"":'<span class="enemy-quickbuff guild-icon left guild-minibox-action tip-static" data-tipped="Quick Buff"></span>'}${function(e){return i.hideGuildInfoSecureTrade?"":`<a class="enemy-secure-trade guild-icon left guild-minibox-action tip-static" href="${s}${e.username}" data-tipped="Secure Trade"></a>`}(t)}${function(e){return i.hideGuildInfoTrade?"":`<a class="enemy-trade guild-icon left guild-minibox-action tip-static" href="${a}${e.username}" data-tipped="Send Gold/Items/FSP"></a>`}(t)}</div></li>`}function L(t,n){return t.filter(E).map(e(S,n)).join("")}const A=[(e,t)=>e.length+t.length,(e,t)=>{if(!i.enableAllyOnlineList)return t.length},e=>{if(!i.enableEnemyOnlineList)return e.length}]
function C(e,t,n){return 0===n(e,t)}function G(t){const n=u(t._allies,[]),s=u(t._enemies,[]);(function(t,n){return A.every(e(C,t,n))})(n,s)||function(e,t){let n=""
i.enableAllyOnlineList&&(n+=L(e,!0)),i.enableEnemyOnlineList&&(n+=L(t,!1))
const s=p("fshContactList")
b("",s),c(s,n)}(n,s)}function I(e){e.classList.toggle("enemy-buff-check-on"),e.classList.toggle("enemy-buff-check-off")}const N=[["enemy-buff-check-on",I],["enemy-buff-check-off",I],["enemy-send-message",function(e){window.openQuickMsgDialog(h(e.parentNode.previousElementSibling.lastElementChild))}],["enemy-quickbuff",function(e){k(h(e.parentNode.previousElementSibling.lastElementChild))}],["enemy-quick-buff",function(){const e=g("enemy-buff-check-on",p("fshContactList")).map((e=>h(e.nextElementSibling)))
k(e.join())}]]
function O(e){const{target:t}=e
"fshResetEnemy"!==t.id?m(N)(e):$(!0).then(G)}function R(e){const t=l({id:"fshAllyEnemy",className:"minibox"})
let n='<h3>Allies/Enemies</h3><div class="minibox-content"><h4>Online Contacts <span id="fshResetEnemy">Reset</span></h4><div id="minibox-enemy"><ul id="fshContactList"></ul>'
i.hideBuffSelected||(n+='<ul class="enemy-quick-buff">Quick Buff Selected</ul>'),n+="</div></div>",c(t,n),j(r,t),d(t,O),G(e)}function _(e){e&&f(3,R,[e])}function q(){o()||$(!1).then(_)}export default q
//# sourceMappingURL=allyEnemy-652a22e9.js.map