import{c as a}from"./createAnchor-9c8b8998.js"
import{c as n}from"./createLi-995eeb78.js"
import{z as e,ae as i,o as t,t as s,h as o,W as r,X as c,c2 as l,c3 as f,c4 as u,c5 as d,E as v,c6 as g,a3 as h,bK as m,at as p,I as L,c7 as k,Y as y,Z as b,c8 as $,b_ as j,a9 as N}from"./calfSystem-03050396.js"
import{i as B}from"./insertElementAfter-43b7fc5a.js"
import{i as G}from"./insertHtmlAfterEnd-f4be3554.js"
import{c as M}from"./currentGuildId-4235046f.js"
import{i as w}from"./insertHtmlBeforeBegin-95689f8d.js"
import"./insertElementBefore-9228b012.js"
function I(a,n,t){const s=e(a)
if(s instanceof Node){n(s.parentNode,t)}else i(`#${a} is not a Node`,!1)}function x(a,n){r("accordion",a),c(n)}function A(a,n){B(n,a)}function E(e,i,r,c){const l=n({className:`nav-level-${e}`}),f=a({className:"nav-link fshPoint",textContent:i})
t(f,s(x,i,r)),o(l,f),I(c,A,l)}function P(a){!function(a){a.recipeManagerLink&&E("1","Recipe Manager",g,"nav-character-log")}(a),function(a){a.inventoryManagerLink&&I("nav-character-log",G,`<li class="nav-level-1"><a class="nav-link" id="nav-character-invmanager" href="${h}invmanagernew">Inventory Manager</a></li>`)}(a),function(a){a.medalGuideLink&&I("nav-character-log",G,`<li class="nav-level-1"><a class="nav-link" id="nav-character-medalguide" href="${m}${p}medalguide">Medal Guide</a></li>`)}(a),function(a){a.buffLogLink&&L("keepBuffLog")&&E("1","Buff Log",k,"nav-character-log")}(a),function(a){a.combatLogLink&&L("keepLogs")&&E("1","Combat Logs",y,"nav-character-notepad")}(a),function(a){a.creatureLogLink&&L("showMonsterLog")&&E("1","Creature Logs",b,"nav-character-notepad")}(a),function(a){a.quickLinksLink&&E("1","Quick Links",$,"nav-character-notepad")}(a)}function C(a,n,e){P(e),function(a){a.auctionSearchLink&&E("2","AH Quick Search",l,"nav-actions-trade-auctionhouse"),a.onlinePlayersLink&&E("2","Online Players",f,"nav-actions-interaction-findplayer"),a.findOtherLink&&E("2","Find Other",u,"nav-actions-interaction-findplayer"),a.findBuffsLink&&E("2","Find Buffs",d,"nav-actions-interaction-findplayer")}(e),function(a){a.guildInventoryLink&&M()&&I("nav-guild-storehouse-inventory",G,`<li class="nav-level-2"><a class="nav-link" id="nav-guild-guildinvmanager" href="${h}guildinvmgr">Guild Inventory</a></li>`)}(e),function(a){a.newGuildLogLink&&M()&&!L("useNewGuildLog")&&I("nav-guild-ledger-guildlog",w,`<li class="nav-level-2"><a class="nav-link" href="${j}">New Guild Log</a></li>`)}(e),function(a){a.topRatedLink&&I("nav-toprated-players-level",G,`<li class="nav-level-2"><a class="nav-link" id="nav-toprated-top250" href="${N}toprated${p}xp">Top 250 Players</a></li>`)}(e),function(a,n){n.heights=v("#nav > li").map((a=>22*v("li",a).length||null)),-1!==Number(n.state)&&(a.children[n.state].children[1].style.height=`${n.heights[n.state]}px`)}(a,n)}export default C
//# sourceMappingURL=injectItems-4e08b2ae.js.map
