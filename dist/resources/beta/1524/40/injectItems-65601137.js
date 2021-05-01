import{c as a}from"./createAnchor-5c088cc6.js"
import{c as n}from"./createLi-c5794633.js"
import{z as e,ad as i,o as t,t as s,h as o,W as r,X as c,c1 as l,c2 as f,c3 as d,c4 as u,E as v,c5 as g,a3 as h,bJ as m,aA as p,I as L,c6 as k,Y as y,Z as b,c7 as $,bZ as j,a9 as N}from"./calfSystem-ab393688.js"
import{i as B}from"./insertElementAfter-dd204241.js"
import{i as G}from"./insertHtmlAfterEnd-091048b9.js"
import{c as M}from"./currentGuildId-0cbe4e98.js"
import{i as w}from"./insertHtmlBeforeBegin-d3d336b6.js"
import"./insertElementBefore-6e80e0ff.js"
function A(a,n,t){const s=e(a)
if(s instanceof Node){n(s.parentNode,t)}else i(`#${a} is not a Node`,!1)}function I(a,n){r("accordion",a),c(n)}function x(a,n){B(n,a)}function E(e,i,r,c){const l=n({className:`nav-level-${e}`}),f=a({className:"nav-link fshPoint",textContent:i})
t(f,s(I,i,r)),o(l,f),A(c,x,l)}function P(a){!function(a){a.recipeManagerLink&&E("1","Recipe Manager",g,"nav-character-log")}(a),function(a){a.inventoryManagerLink&&A("nav-character-log",G,`<li class="nav-level-1"><a class="nav-link" id="nav-character-invmanager" href="${h}invmanagernew">Inventory Manager</a></li>`)}(a),function(a){a.medalGuideLink&&A("nav-character-log",G,`<li class="nav-level-1"><a class="nav-link" id="nav-character-medalguide" href="${m}${p}medalguide">Medal Guide</a></li>`)}(a),function(a){a.buffLogLink&&L("keepBuffLog")&&E("1","Buff Log",k,"nav-character-log")}(a),function(a){a.combatLogLink&&L("keepLogs")&&E("1","Combat Logs",y,"nav-character-notepad")}(a),function(a){a.creatureLogLink&&L("showMonsterLog")&&E("1","Creature Logs",b,"nav-character-notepad")}(a),function(a){a.quickLinksLink&&E("1","Quick Links",$,"nav-character-notepad")}(a)}function C(a,n,e){P(e),function(a){a.auctionSearchLink&&E("2","AH Quick Search",l,"nav-actions-trade-auctionhouse"),a.onlinePlayersLink&&E("2","Online Players",f,"nav-actions-interaction-findplayer"),a.findOtherLink&&E("2","Find Other",d,"nav-actions-interaction-findplayer"),a.findBuffsLink&&E("2","Find Buffs",u,"nav-actions-interaction-findplayer")}(e),function(a){a.guildInventoryLink&&M()&&A("nav-guild-storehouse-inventory",G,`<li class="nav-level-2"><a class="nav-link" id="nav-guild-guildinvmanager" href="${h}guildinvmgr">Guild Inventory</a></li>`)}(e),function(a){a.newGuildLogLink&&M()&&!L("useNewGuildLog")&&A("nav-guild-ledger-guildlog",w,`<li class="nav-level-2"><a class="nav-link" href="${j}">New Guild Log</a></li>`)}(e),function(a){a.topRatedLink&&A("nav-toprated-players-level",G,`<li class="nav-level-2"><a class="nav-link" id="nav-toprated-top250" href="${N}toprated${p}xp">Top 250 Players</a></li>`)}(e),function(a,n){n.heights=v("#nav > li").map((a=>22*v("li",a).length||null)),-1!==Number(n.state)&&(a.children[n.state].children[1].style.height=`${n.heights[n.state]}px`)}(a,n)}export default C
//# sourceMappingURL=injectItems-65601137.js.map
