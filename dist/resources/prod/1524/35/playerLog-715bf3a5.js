import{a as e}from"./addLogColoring-7e6fca96.js"
import{e as n,ag as t,E as s,ba as a,bb as r,F as o,D as i,A as c,bc as f,H as l,i as u,x as m,u as p,t as d,v as h,z as g,C as b,W as w,$ as y,U as j,az as _,bd as v,aa as C,h as P,m as k,o as $,be as L,I as x,N as T,a6 as E,bf as B,_ as G,y as R}from"./calfSystem-fe0ebf32.js"
import{i as S}from"./insertHtmlAfterEnd-2a558ca9.js"
import{c as A}from"./currentGuildId-09820c92.js"
import{g as N}from"./getMembrList-48fdd1f0.js"
import{c as z}from"./closestTr-35c47492.js"
import{a as I}from"./addCommas-fa3f11ee.js"
import{p as D}from"./parseDateAsTimestamp-25c526ef.js"
import{g as M,s as Y}from"./idb-b0de0ac7.js"
import{c as H}from"./createStyle-764720eb.js"
import{m as O}from"./myStats-ba055955.js"
import{b as Q}from"./buffObj-8137966e.js"
import{c as W}from"./closestTd-b0d3c71b.js"
import{c as Z}from"./csvSplit-f0a1b444.js"
import{o as F}from"./openQuickBuffByName-6871b68f.js"
import{t as J}from"./toLowerCase-5dc9e42d.js"
import"./dataRows-fe9c44ea.js"
import"./doBuffLinkClick-ffc65572.js"
import"./cmdExport-fd555515.js"
import"./indexAjaxJson-a9fbc5f9.js"
import"./closest-1ff01e01.js"
import"./getProfile-9e74c09c.js"
import"./playerName-dca56241.js"
import"./fshOpen-363b7f52.js"
let U
async function X(e){return A()&&!U&&(U=async function(){return n(await N(!1)).filter((([,e])=>t(e))).map((([e])=>e))}()),(await U).includes(e)}const q=e=>[e,a(e.href,"target_username")],K=async([e,n])=>[e,n,await X(n)]
function V([e,n]){S(e,` | <a href="${r}${n}">Attack</a>`)}function ee(e){return`<a href="${f}${l(e)}" data-tooltip="Add to Ignore List">Ignore</a>`}function ne([e,,n]){c("Report",n),S(n,` | ${ee(e)}`)}function te([e,n]){u(n.cells[1].children[0],`<font size="1"><br>[ ${ee(e)} ]</font>`)}function se(e){return m({cmd:"combat",subcmd:"view",combat_id:e})}function ae(e){return Number(e.getAttribute("background").match(/\/(\d+)/)[1])}function re(e,n){const t=new RegExp(`${n} = (\\d+)`)
return Number(e.match(t)[1])}const oe=[[18,/(\w+)+ leeched the buff '([A-Za-z ]+)'./],[21,/(\w+)+ was mesmerized by Spell Breaker, losing the '([A-Za-z ]+)' buff./]]
function ie(e){const n=oe.map((([n,t])=>[n,e.match(t)])).find((([,e])=>e))
return n?{id:n[0],params:[n[1][1],n[1][2]]}:(w("Logs","Missing PvP Special",e),{id:-1,params:["-1","-1"]})}function ce(e){return s("#specialsDiv",e).map(l).filter((e=>["leeched","Spell"].some((n=>e.includes(n))))).map(ie)}function fe(e){return{id:ae(e.rows[1].cells[0]),name:l(e.rows[0].cells[0])}}function le(e){return{id:ae(e.rows[1].cells[2]),name:l(e.rows[0].cells[2])}}function ue(e,n){const t=n.children[0].rows[5].cells[0].children[0]
return{attacker:fe(t),defender:le(t),id:Number(e),specials:ce(n)}}function me(e){const n=b(e.children[1])
return{gold_gain:re(n,"goldGain"),gold_stolen:re(n,"goldStolen"),pvp_prestige_gain:re(n,"prestigeGain"),pvp_rating_change:re(n,"pvpRatingChange"),winner:re(n,"winner"),xp_gain:re(n,"xpGain")}}function pe(e,n){return{...ue(e,n),...me(n)}}function de(e,n){const t=h(n)
return{r:pe(e,g("pCC",t)),s:!0}}function he(e){return function(e){return p({cmd:"combat",subcmd:"view",combat_id:e})}(e).then(d(de,e))}let ge,be
function we(e,[n,t]){return"lastCheck"===n||t.logTime&&t.logTime>e}async function ye(){const e=await M("fsh_pvpCombat")
if(!e)return{lastCheck:j}
const t=j-86400
return!e.lastCheck||e.lastCheck<t?function(e){const t=j-604800,s=n(e).filter(d(we,t)),a={..._(s),lastCheck:j}
return Y("fsh_pvpCombat",a),a}(e):e}async function je(e,n,t){const s=await(a=n,y(se,he,a))
var a
if(s&&s.s)return be||(be={...t}),be[n]={...s,logTime:D(l(e.cells[1]))/1e3},Y("fsh_pvpCombat",be),s}async function _e(e,n){ge||(ge=ye())
const t=await ge
return t[n]&&t[n].logTime?t[n]:je(e,n,t)}const ve=e=>i(v,e),Ce=([,e])=>!/\(Guild Conflict\)/.test(e),Pe=async([e,n])=>[e,n,await _e(e,/combat_id=(\d+)/.exec(n)[1])]
function ke(e,n,t){return 0!==e?`${n}:<span class="${t}">${I(e)}</span> `:""}function $e(e,n){return 18===n.id?`${e}<br><span class="fshRed fshBold">${n.params[0]} leeched the buff '${n.params[1]}'.</span>`:21===n.id?`${e}<br><span class="fshRed fshBold">${n.params[0]} was mesmerized by Spell Breaker, losing the '${n.params[1]}' buff.</span>`:e}function Le([e,n,t]){const[s,a]=function(e,n){return/You were victorious over/.test(n)?["fshGreen",'You were <span class="fshGreen">victorious</span> over ']:/You were defeated by/.test(n)?["fshRed",'You were <span class="fshRed">defeated</span> by ']:["",b(e.cells[2].firstChild)]}(e,n),r=function(e,n){return ke(e.r.xp_gain,"XP stolen",n)+ke(e.r.gold_gain,"Gold lost",n)+ke(e.r.gold_stolen,"Gold stolen",n)+ke(e.r.pvp_prestige_gain,"Prestige gain",n)+ke(e.r.pvp_rating_change,"PvP change",n)+e.r.specials.reduce($e,"")}(t,s)
e.cells[2].firstChild.remove(),C(e.cells[2],a),P(e.cells[2],k({innerHTML:r}))}const xe=([,,e])=>e&&e.s
const Te=e=>e.username
let Ee
async function Be(){const e=await O(!1)
return{_allies:e._allies.map(Te),_enemies:e._enemies.map(Te)}}async function Ge(e){return Ee||(Ee=Be()),(await Ee)._allies.includes(e)}async function Re(e){return Ee||(Ee=Be()),(await Ee)._enemies.includes(e)}async function Se(e){let n=""
const t=l(e),[s,a,r]=await Promise.all([X(t),Ge(t),Re(t)])
return s?n="guild":a?n="ally":r&&(n="enemy"),[`.fshPlayerColoring tr:nth-of-type(${z(e).rowIndex+1}) td:nth-of-type(3) > a:first-of-type`,n]}function Ae(e,[n,t]){return e[t]?e[t].push(n):e[t]=[n],e}const Ne={guild:"green",ally:"blue",enemy:"red"}
function ze([e,n]){return`${n.join(", ")} { color: ${Ne[e]}; }`}const Ie=([,e])=>e
function De(e,t){const s=function(e){return n(e.filter(Ie).reduce(Ae,{})).map(ze)}(t)
s.length&&(!function(e){const n=e.rows[0].cells[2]
n&&u(n,'&nbsp;&nbsp;<span class="fshWhite">(Guild mates show up in <span class="fshGreen">green</span>)</span>')}(e),e.classList.add("fshPlayerColoring"),P(document.body,H(s.join("\n"))))}const Me=e=>(e=>T(W(e).childNodes))(e).map(l)
function Ye(e,n){return(e=>i(L,z(e)))(e)&&("Buff"===n||"Reply"===n&&x("enableChatParsing"))}function He(e){const n=Q.find((n=>((e,n)=>Z(n.nicks).includes(J(e)))(e,n)))
if(n)return n.id}function Oe(e){const{target:n}=e,t=l(n)
Ye(n,t)&&("Reply"===t&&(!function(e){const n=Me(e).slice(0,2),t=n.join(" ")
let s=t
t.length>140&&(s=`${t.substring(0,140)}...`),window.openQuickMsgDialog(n[0],"",s)}(n),e.preventDefault()),"Buff"===t&&function(e,n){const[t,s]=Me(n),a=/`~(.*)~`/.exec(s)
if(a){const n=Z(a[1]).map(He).filter((e=>e)).join(";")
F(t,n),e.preventDefault()}}(e,n))}let Qe
const We=/You ranked \w{3} in your PvP Band! You have gained \d x PvP Ladder Token/
function Ze(e){return We.test(b(e.cells[2]))}function Fe(e){const n=D(l(e.cells[1]))
n>Qe&&(G(E,n),Qe=n)}const Je=[["addIgnoreLink",function(e){const n=s(o,e)
if(0===n.length)return
const t=n.map((e=>[e,z(e)])).map((([e,n])=>[e,n,i('a[href*="reportMsg"]',n)]))
t.filter((([,,e])=>e)).forEach(ne),t.filter((([,,e])=>!e)).forEach(te)}],["colorPlayerNames",async function(e){const n=s(o,e)
if(!n.length)return
De(e,await Promise.all(n.map(Se)))}],["addAttackLinkToLog",async function(e){const n=s('a[href*="=createsecure&"]',e)
if(!n.length)return
const t=n.map(q);(await Promise.all(t.map(K))).filter((([,,e])=>!e)).forEach(V)}],["changeButtonLabels",function(e){s('a[href*="=trade&"]',e).forEach((e=>c("Trade",e))),s('a[href*="=createsecure&"]',e).forEach((e=>c("ST",e)))}],["trackLadderReset",function(e){Qe=x(E),s(B,e).map(z).filter(Ze).forEach(Fe)}],["showPvPSummaryInLog",async function(e){const n=s('a[href*="&combat_id="]',e)
if(0===n.length)return;(await Promise.all(function(e){return e.map(z).filter(ve).map((e=>[e,e.cells[2].innerHTML])).filter(Ce).map(Pe)}(n))).filter(xe).forEach(Le)}]]
function Ue(e,n){x(n[0])&&n[1](e)}function Xe(e){!function(e){$(e,Oe)}(e),Je.forEach(d(Ue,e))}function qe(){e("PlayerLog",1),function(){if(R())return
const e=i("#pCC > table:last-of-type")
e&&Xe(e)}()}export default qe
//# sourceMappingURL=playerLog-715bf3a5.js.map
