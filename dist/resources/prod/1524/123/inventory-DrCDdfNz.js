import{g as t}from"./getMembrList-D9Ne3e-s.js"
import{cp as e,i as n,c3 as s,ag as a,p as i,aJ as r,bQ as c,cI as o,s as d,c as l,aO as u,bp as f,ai as p,cy as m,cJ as h,br as b,C as y,bL as v,aQ as g,k,G as _,$ as I,aI as x,aN as R,S as w,L,M,O as S,P as E,Q as j,T,U as D,X as N,_ as C,a0 as A,a1 as G,aA as P,a3 as O,cK as U,a4 as q,g as B,cL as F,cM as V,a_ as W,cN as H,cO as Q,cP as J,bh as Y,bi as X,bc as K,bf as z,bj as Z,am as tt,d as et,v as nt,m as st,w as at,bV as it,f as rt,aT as ct,bR as ot,bS as dt}from"./calfSystem-wTzwei3t.js"
import{a as lt}from"./all-YfMtr2SN.js"
import{e as ut}from"./executeAll-DIAWIge1.js"
import{l as ft}from"./loadDataTables-D5u8DInA.js"
import{d as pt,a as mt,b as ht}from"./deepClone-CvRhBOpx.js"
import{d as bt}from"./daLoadInventory--DugNLq5.js"
import{b as yt}from"./basicItem-SrvrR49K.js"
import{e as vt,d as gt,a as kt,m as _t}from"./dropItem-Ft0uR3YN.js"
import{f as $t}from"./flattenItems-C4pfIrZn.js"
import{c as It}from"./createTable-CzF-CXSd.js"
import{i as xt}from"./isSelected-BWnMzKlW.js"
import{c as Rt}from"./changeMinMax-8kupOwY_.js"
import{c as wt}from"./chromeHandlers-lFLX5iZi.js"
import{a as Lt,u as Mt,e as St}from"./useItem-wDKF-VT1.js"
import{g as Et}from"./guildInventory-DZXfrks_.js"
import{h as jt}from"./htmlResult-m0gx1bEM.js"
import{e as Tt}from"./errorDialog-B4_TjdGG.js"
import{q as Dt,a as Nt}from"./queue-DsNdXfLD.js"
import{p as Ct,l as At}from"./lvlTests-BXbkGopt.js"
import{i as Gt}from"./intValue-C7nTQec1.js"
import{i as Pt}from"./isArray-eVldfhw1.js"
import"./guildMembers-BAg60jqP.js"
import"./now-Cx4PsKjI.js"
import"./guild-BZ--WBHn.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-DxBWpXb4.js"
import"./numberIsNaN-CGkd1jiA.js"
import"./daUseItem-BRG0j9kQ.js"
import"./InfoBoxFrom-CbEg_Jt0.js"
import"./backpack-BqnNXIcu.js"
import"./backpackOk-CagcATOI.js"
import"./takeItem-DICxsbkR.js"
function Ot([t]){return"lastUpdate"!==t}function Ut(){return e({subcmd:"inventory"})}let qt=""
const Bt=()=>qt
function Ft(t,e){qt||(qt=e.message),qt&&n(t,s("p",{className:"fshRed",textContent:qt}))}let Vt={}
const Wt=()=>Vt
async function Ht(t){try{return await t()}catch(t){if(500!==t.jqXhr.status)throw t
Ft(i(),t)}}const Qt=(t,e)=>{return e.map(yt).map((n=t,function(t){const e=n?.find((({inv_id:e})=>e===t.inv_id))
return{...t,...e?.stats&&{stats:{...t.stats,armor:e.stats.armor,attack:e.stats.attack,damage:e.stats.damage,defense:e.stats.defense,hp:e.stats.hp,set_name:e.stats.set_name??""}}}}))
var n},Jt=t=>({...t,equipped:!0,folder_id:-2}),Yt=(t,e,n)=>({folders:vt(t),items:Qt(e,n),player_id:r()})
const Xt=t=>({...t,player:{id:-1}}),Kt=(t,e)=>({current_player_id:r(),items:Qt(t,e),guild_id:c()})
async function zt(){if("invmanagernew"===a.subcmd){const t=await async function(){const[t,e]=await lt([Ht(Ut),bt()]),n=t?.items??[],s=e?.r??{},a=(s.equipment?.map(Jt)??[]).concat($t(s))
return Yt(s,n,a)}()
Vt=t}else if("guildinvmgr"===a.subcmd){const t=await async function(){const[t,e,n]=await lt([Ht(o),pt(),mt()]),s=t?.items??[],a=e?.r??[],i=n?.r??[],r=a.concat(i.map(Xt))
return Kt(s,r)}()
Vt=t}}const Zt=t=>{d("Inventory","Header",t)},te=t=>{d("Inventory","Datatable",t)}
function ee(t,e){te("clearSearch"),e.val(""),$(t).DataTable().search("").draw()}function ne(){Wt().folders&&(Wt().folders[-1]="Main")}const se={checkedElements:{0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,100:1,101:1,102:1,103:1,104:1,105:1,106:1},fshMinLvl:1,fshMaxLvl:9999},ae='<table class="fshInvFilter"><tr><th colspan="14">@@reportTitle@@</th><th><span id="fshRefresh" class="fshLink">[Refresh]</span></th></tr><tr><td colspan="2" rowspan="3"><b>&nbsp;Show Items:</b></td><td class="fshRight">&nbsp;Helmet:</td><td><input id="fshHelmet" type="checkbox" item="0"/></td><td class="fshRight">&nbsp;Armor:</td><td><input id="fshArmor" type="checkbox" item="1"/></td><td class="fshRight">&nbsp;Gloves:</td><td><input id="fshGloves" type="checkbox" item="2"/></td><td class="fshRight">&nbsp;Boots:</td><td><input id="fshBoots" type="checkbox" item="3"/></td><td class="fshRight">&nbsp;Weapon:</td><td><input id="fshWeapon" type="checkbox" item="4"/></td><td></td><td class="fshRight">&nbsp;Min lvl:</td><td rowspan="2"><input id="fshMinLvl" class="fshNumberInput" type="number" value="1" min="0"><br><input id="fshMaxLvl" class="fshNumberInput" type="number" value="9999" min="0"></td></tr><tr><td class="fshRight">&nbsp;Shield:</td><td><input id="fshShield" type="checkbox" item="5"/></td><td class="fshRight">&nbsp;Ring:</td><td><input id="fshRing" type="checkbox" item="6"/></td><td class="fshRight">&nbsp;Amulet:</td><td><input id="fshAmulet" type="checkbox" item="7"/></td><td class="fshRight">&nbsp;Rune:</td><td><input id="fshRune" type="checkbox" item="8"/></td><td class="fshRight">&nbsp;Sets Only:</td><td><input id="fshSets" item="-1" type="checkbox"/></td><td></td><td class="fshRight">&nbsp;Max lvl:</td></tr><tr><td colspan="2">&nbsp;[<span id="fshAll" class="fshLink">Select All</span>]</td><td colspan="2">&nbsp;[<span id="fshNone" class="fshLink">Select None</span>]</td><td colspan="2">&nbsp;[<span id="fshDefault" class="fshLink">Defaults</span>]</td><td colspan="6"></td><td><input id="fshReset" type="button" value="Reset"/></td></tr><tr><td class="fshRight">&nbsp;Quest Item:</td><td><input id="fshQuest" item="9" type="checkbox"/></td><td class="fshRight">&nbsp;Potion:</td><td><input id="fshPotion" item="10" type="checkbox"/></td><td class="fshRight">&nbsp;Resource:</td><td><input id="fshResource" item="12" type="checkbox"/></td><td class="fshRight">&nbsp;Recipe:</td><td><input id="fshRecipe" item="13" type="checkbox"/></td><td class="fshRight">&nbsp;Container:</td><td><input id="fshContainer" item="14" type="checkbox"/></td><td class="fshRight">&nbsp;Frag Stash:</td><td><input id="fshStash" item="16" type="checkbox"/></td><td class="fshRight">&nbsp;Composed:</td><td><input id="fshComposed" item="15" type="checkbox"/></td><td></td></tr><tr><td class="fshRight">&nbsp;Common:</td><td><input id="fshCommon" item="100" type="checkbox" checked/></td><td class="fshRight">&nbsp;Rare:</td><td><input id="fshRare" item="101" type="checkbox" checked/></td><td class="fshRight">&nbsp;Unique:</td><td><input id="fshUnique" item="102" type="checkbox" checked/></td><td class="fshRight">&nbsp;Legendary:</td><td><input id="fshLegendary" item="103" type="checkbox" checked/></td><td class="fshRight">&nbsp;Super Elite:</td><td><input id="fshSuperElite" item="104" type="checkbox" checked/></td><td class="fshRight">&nbsp;Crystalline:</td><td><input id="fshCrystalline" item="105" type="checkbox" checked/></td><td class="fshRight">&nbsp;Epic:</td><td colspan="2"><input id="fshEpic" item="106" type="checkbox" checked/></td></tr></table>',ie={0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,100:1,101:1,102:1,103:1,104:1,105:1,106:1},re={Perfect:{abbr:"Perf",colour:"#00b600",index:8},Excellent:{abbr:"Exc",colour:"#f6ed00",index:7},"Very Good":{abbr:"VG",colour:"#f67a00",index:6},Good:{abbr:"Good",colour:"#f65d00",index:5},Average:{abbr:"Ave",colour:"#f64500",index:4},Poor:{abbr:"Poor",colour:"#f61d00",index:3},"Very Poor":{abbr:"VPr",colour:"#b21500",index:2},Uncrafted:{abbr:"Unc",colour:"#666666",index:1}}
let ce={},oe=0,de=0
const le=()=>ce,ue=()=>oe,fe=()=>de
function pe(t){return re[t]?re[t].abbr:""}function me(t,e){const n=function(t){return t.folder_id?function(t){return t.equipped?"fshGreen":"fshNavy"}(t):function(t){return-1===t.player_id?"fshNavy":"fshMaroon"}(t)}(e)
t.classList.add(n),e.equipped&&t.classList.add("fshBold")}function he(t){return function(t){return t.player_id&&-1!==t.player_id}(t)||function(t){return t.folder_id&&-1!==t.guild_tag}(t)}function be(t){return`<span class="fshLink recallItem" invid="${t.inv_id}" playerid="${f(t.player_id,Wt().player_id)}" mode="1" action="recall">GS</span>`}function ye(t){return`<span class="fshLink storeItem" invid="${t.inv_id}">GS</span>`}function ve(t,e,n){return"display"===t?n(e):"GS"}function ge(t,e){const n=function(t){return-1===t.player_id?4:he(t)?7:1}(e),s=(a=Wt().player_id,i=e.player_id,r=Wt().guild_id,a||(-1!==i?i:r))
var a,i,r
let c=""
return function(t){return t.stats&&""!==t.stats.set_name}(e)&&(c=` (<span class="fshLink setName" set="${e.stats.set_name}">set</span>)`),`<a href="${m}${t}" class="fshInvItem tip-dynamic ${h[e.rarity].clas}" data-tipped="fetchitem.php?item_id=${e.item_id}&inv_id=${e.inv_id}&t=${n}&p=${s}">${t}</a>${c}`}const ke=[[t=>t.player_id&&-1===t.player_id,(t,e)=>`takeItem" action="${e.a}`],[t=>t.player_id&&t.player_id!==Wt().current_player_id,(t,e)=>`recallItem" playerid="${t.player_id}" mode="0" action="${e.a}`],[t=>function(t){return t.folder_id&&!t.equipped}(t)||function(t){return t.player_id&&!t.equipped&&t.player_id===Wt().current_player_id}(t),(t,e)=>e.c]]
function _e(t,e){const n=ke.find((([e])=>e(t)))
return n?`<span class="fshLink ${n[1](t,e)}" invid="${t.inv_id}">${e.b}</span>`:""}function $e(t){return f(t.folder_id,t.player_id)}function Ie(t){return a.membrList[t]?a.membrList[t].username:"???"}function xe(t,e){return t[0]-e[0]}function Re(t,e){return`<option value="${e[0]}"${xt(Number(e[0]),t)}>${e[1]}</option>`}const we=[{title:"Name",data:"item_name",render:function(t,e,n){return"display"!==e?t:ge(t,n)}},{title:"Level",data:"stats.min_level"},{title:"Where",data:$e,render:{_:function(t,e,n){return n.folder_id?function(t){return t.equipped?-2:t.folder_id}(n):-1===n.player_id?"~":Ie(n.player_id)},display:function(t,e,n){return n.player_id?function(t){return-1===t.player_id?"Guild Store":`<a class="fshMaroon" href="${b}${t.player_id}">${Ie(t.player_id)}</a>`}(n):n.equipped?"Worn":`<select class="fshMoveItem" data-inv="${n.inv_id}">${s=n.folder_id,a=Wt().folders,y(a).sort(xe).map(l(Re,s)).join("")}</select>`
var s,a},filter:function(t,e,n){return n.player_id?function(t){return-1===t.player_id?"Guild Store":Ie(t.player_id)}(n):n.equipped?"Worn":Wt().folders[n.folder_id]}}},{title:"Type",data:"type",render:t=>v[t]},{title:"Att",data:"stats.attack"},{title:"Def",data:"stats.defense"},{title:"Arm",data:"stats.armor"},{title:"Dam",data:"stats.damage"},{title:"HP",data:"stats.hp"},{title:"Frg",data:"forge",render:function(t,e,n){if(n.type<9)return n.forge}},{title:"Craft",data:"craft",render:{_:t=>re[t]?re[t].index:0,display:pe,filter:pe}},{title:"Du%",data:"durability",render:function(t,e,n){if(n.type<9&&n.max_durability>0)return Math.floor(n.durability/n.max_durability*100)}},{title:"BP",data:$e,render:function(t,e,n){if(!n.folder_id&&n.player_id!==Wt().current_player_id)return function(t,e){return"display"!==t?"BP":-1===e.player_id?`<span class="fshLink takeItem" invid="${e.inv_id}" action="take">BP</span>`:`<span class="fshLink recallItem" invid="${e.inv_id}" playerid="${e.player_id}" mode="0" action="recall">BP</span>`}(e,n)}},{title:"GS",data:$e,render:function(t,e,n){return he(n)?ve(e,n,be):function(t){return t.folder_id&&!t.bound}(n)?ve(e,n,ye):void 0}},{title:"W/U",data:"type",render:function(t,e,n){const s=[1,1,1,1,1,1,1,1,1,null,2,2,null,null,null,2][t]
return 1===s?_e(n,{a:"wear",b:"Wear",c:"wearItem"}):2===s?_e(n,{a:"use",b:"Use",c:"useItem"}):void 0}},{title:"setName",data:"stats.set_name",orderable:!1,visible:!1},{title:"Tag",data:"guild_tag",render:t=>-1===t?"No":"Yes"},{title:"Drop",data:"type",render:function(t,e,n){if(!function(t){return-1!==t.guild_tag||t.equipped}(n))return"display"!==e?"Drop":`<span class="dropItem dropLink" data-tooltip="INSTANTLY DESTROY THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${n.inv_id}">Drop</span>`}},{title:"Send",data:"type",render:function(t,e,n){if(!function(t){return t.equipped||-1===t.guild_tag&&t.bound}(n))return"display"!==e?"Send":`<span class="sendItem sendLink" data-tooltip="INSTANTLY SEND THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${n.inv_id}">Send</span>`}}]
function Le(){return"player_id"in Wt()}function Me(){const t=function(){const t=It({className:"hover fshXSmall",id:Le()?"fshUserInv":"fshGuildInv"})
return n(i(),t),t}(),e=function(t){return $(t).DataTable({autoWidth:!1,columnDefs:[{targets:"_all",defaultContent:""},{targets:[1,4,5,6,7,8,9,10,12,13],orderSequence:["desc","asc"]}],columns:we,createdRow:me,data:Wt().items,deferRender:!0,lengthMenu:[[50,100,150,200,-1],[50,100,150,200,"All"]],pageLength:50,stateDuration:0,stateSave:!0})}(t)
return function(t){[[12,"current_player_id"in Wt()],[17,Le()&&ue()],[18,Le()&&fe()]].forEach((([e,n])=>t.column(e).visible(n)))}(e),t}function Se(t){g(`fsh_${a.subcmd}`,t)}function Ee(){k('table.fshInvFilter input[type="checkbox"]').forEach((t=>{t.checked=1===le().checkedElements[t.getAttribute("item")]})),Se(le())}function je(t){Zt("Select All"),le().checkedElements=ie,Ee(),$(t).DataTable().draw(!1)}function Te(t,e){le().fshMinLvl=t,le().fshMaxLvl=e,Se(le())}function De(t){$(t).DataTable().draw(!1)}function Ne(t){Zt("changeLvls"),Rt(Te,l(De,t))}function Ce(t){return Number(t[0])>=100}function Ae(t,e){return t[e[0]]=e[1],t}function Ge(t){var e
Zt("Select None"),le().checkedElements=(e=le().checkedElements,y(e).filter(Ce).reduce(Ae,{})),Ee(),$(t).DataTable().draw()}function Pe(t){Zt("Checkbox"),le().checkedElements={},k('table.fshInvFilter input[type="checkbox"][item]:checked').forEach((t=>{le().checkedElements[t.getAttribute("item")]=1})),Se(le()),$(t).DataTable().draw(!1)}function Oe(t){Zt("Defaults"),le().checkedElements=se.checkedElements,Ee(),$(t).DataTable().draw(!1)}function Ue(t){Zt("Reset levels"),le().fshMinLvl=se.fshMinLvl,le().fshMaxLvl=se.fshMaxLvl,Se(le()),function(t){$("#fshMinLvl").val(le().fshMinLvl),$("#fshMaxLvl").val(le().fshMaxLvl),$(t).DataTable().draw(!1)}(t)}async function qe(t){const e=await gt(t)
return Lt(e)}function Be(t){return Et({subcmd2:"dostoreitems",items:t})}async function Fe(t){const e=await _({cmd:"guild",subcmd:"inventory",subcmd2:"dostoreitems",storeIndex:t})
return jt(e)}async function Ve(t){const e=await function(t){return I(Be,Fe,t)}(t)
return Tt(e),Lt(e)}function We(t,e){t.eq(e).empty()}function He(t,e){if(1===e.r)return
const n=t.closest("tr")
!function(t){[2,12,13,14,15,16].forEach(l(We,t))}($("td",n)),n.css("text-decoration","line-through")}async function Qe(t,e){x(e),function(t){t.closest("tr").find(".takeItem, .recallItem, .wearItem, .dropItem, .sendItem, .storeItem").removeClass()}(e),function(t){t.empty().append(`<img src="${R}ui/misc/spinner.gif" width="11" height="11">`)}(e)
const n=await t()
n&&He(e,n)}function Je(t,e){te("setName"),$(t).DataTable().search(e.attr("set")).draw(),$(`#${t.id}_filter input`).trigger("focus")}function Ye(t){te("takeItem"),Qe(l(Dt,t.attr("invid"),t.attr("action")),t)}function Xe(t){te("recallItem"),Qe(l(Nt,t.attr("invid"),t.attr("playerid"),t.attr("mode"),t.attr("action")),t)}function Ke(t,e,n,s){te(n),Qe(l(t,e),s)}function ze(t){Ke(Ve,[t.attr("invid")],"doStoreItem",t)}function Ze(t,e,n){Ke(t,n.attr("invid"),e,n)}const tn=t=>Ze(Mt,"doUseItem",t),en=t=>Ze(St,"doWearItem",t)
function nn(t,e,n){Ke(t,[n.data("inv")],e,n)}const sn=t=>nn(kt,"doDropItem",t),an=t=>nn(qe,"doSendItem",t),rn=t=>e=>t($(e.target))
function cn(t,[e,n]){$(t).on("click",`span.${e}`,rn(n))}function on(t){te("doMoveItem")
const e=$(t.target)
_t([e.data("inv")],e.val())}function dn(t,e){$(e[0]).on("click",l(e[1],t))}const ln=t=>()=>{te(t)}
function un(t){!function(t){[["#fshReset",Ue],["#fshAll",je],["#fshNone",Ge],["#fshDefault",Oe]].forEach(l(dn,t))}(t),$("table.fshInvFilter").on("click",'input[type="checkbox"]',l(Pe,t)),function(t){[["dropItem",sn],["recallItem",Xe],["sendItem",an],["setName",l(Je,t)],["storeItem",ze],["takeItem",Ye],["useItem",tn],["wearItem",en]].forEach(l(cn,t))}(t),function(t){["fshInvItem","fshMaroon","sorting"].forEach((e=>{$(t).on("click",`.${e}`,ln(e))}))}(t)}let fn=0
function pn(t,e){return At(fn,Gt(e[1]),le().fshMinLvl,le().fshMaxLvl)}function mn(){fn=[(t,e,n)=>0===n,...Ct],$.fn.dataTable.ext.search.push(pn)}function hn(){$.fn.dataTable.ext.search.push(((t,e,n,s)=>!le().checkedElements||le().checkedElements[s.type]))}function bn(){$.fn.dataTable.ext.search.push(((t,e,n,s)=>!le().checkedElements?.[-1]||function(t){return le().checkedElements[-1]&&t.stats&&""!==t.stats.set_name}(s)))}function yn(){$.fn.dataTable.ext.search.push(((t,e,n,s)=>{const a=(parseInt(s.rarity,10)+100).toString()
return!le().checkedElements||le().checkedElements[a]}))}function vn(t){let e,n,s,a,i,r,c,o,d
return{c(){e=S("div"),n=S("div"),n.textContent="Recall all visible to",s=E(),a=S("div"),i=S("button"),i.textContent="BP",r=E(),c=S("button"),c.textContent="GS",j(n,"class","head svelte-1mlms3r"),j(i,"class","custombutton svelte-1mlms3r"),j(i,"type","button"),j(c,"class","custombutton svelte-1mlms3r"),j(c,"type","button"),j(a,"class","btnbox svelte-1mlms3r"),j(e,"class","main svelte-1mlms3r")},m(l,u){T(l,e,u),D(e,n),D(e,s),D(e,a),D(a,i),D(a,r),D(a,c),o||(d=[N(i,"click",t[0]),N(c,"click",t[1])],o=!0)},p:C,i:C,o:C,d(t){t&&A(e),o=!1,G(d)}}}function gn(t){const e=t=>{d("Inventory","Recall All",t)}
return[function(){e("toBp"),[...k('span[action="take"]'),...k('span[mode="0"][action="recall"]')].forEach(P)},function(){e("toGs"),k('span[mode="1"][action="recall"]').forEach(P)}]}class kn extends w{constructor(t){super(),L(this,t,gn,vn,M,{})}}function _n(t){let e,n,s,a,i,r,c,o,d,l=(t[0]||"")+"",u=(t[1]||"")+""
return{c(){e=S("div"),n=O("Chunks needed: "),s=S("span"),a=O(l),i=E(),r=S("div"),c=O("Chunks received: "),o=S("span"),d=O(u)},m(t,l){T(t,e,l),D(e,n),D(e,s),D(s,a),T(t,i,l),T(t,r,l),D(r,c),D(r,o),D(o,d)},p(t,e){1&e&&l!==(l=(t[0]||"")+"")&&q(a,l),2&e&&u!==(u=(t[1]||"")+"")&&q(d,u)},d(t){t&&(A(e),A(i),A(r))}}}function $n(t){let e,n,s,a,i,r,c,o,d,l,u,f,p,m,h,b,y,v,g,k,_,$=t[0]&&_n(t)
return{c(){e=S("div"),n=S("div"),s=O("Update Stats\n    "),a=S("div"),i=O("[\n      "),r=S("div"),c=S("span"),o=O("?"),d=O("\n      ]"),l=E(),u=S("div"),f=S("button"),f.textContent="On page",p=E(),m=S("button"),m.textContent="All",h=E(),b=S("div"),y=S("button"),y.textContent="Clear cache",v=E(),g=S("div"),$&&$.c(),j(c,"class","tooltip-multiline"),j(c,"data-tooltip",t[5]),j(r,"class","tooltip svelte-15yybge"),j(a,"class","wrapper svelte-15yybge"),j(n,"class","head svelte-15yybge"),j(f,"class","custombutton svelte-15yybge"),j(f,"type","button"),j(m,"class","custombutton svelte-15yybge"),j(m,"type","button"),j(u,"class","btnbox svelte-15yybge"),j(y,"class","custombutton svelte-15yybge"),j(y,"type","button"),j(b,"class","btnbox svelte-15yybge"),j(g,"class","chunkbox svelte-15yybge"),j(e,"class","main svelte-15yybge")},m(I,x){T(I,e,x),D(e,n),D(n,s),D(n,a),D(a,i),D(a,r),D(r,c),D(c,o),D(a,d),D(e,l),D(e,u),D(u,f),D(u,p),D(u,m),D(e,h),D(e,b),D(b,y),D(e,v),D(e,g),$&&$.m(g,null),k||(_=[N(f,"click",t[2]),N(m,"click",t[3]),N(y,"click",t[4])],k=!0)},p(t,[e]){t[0]?$?$.p(t,e):($=_n(t),$.c(),$.m(g,null)):$&&($.d(1),$=null)},i:C,o:C,d(t){t&&A(e),$&&$.d(),k=!1,G(_)}}}function In(t,e,n){let{fshInv:s=0}=e
const i=new DataTable(s)
let r=0,c=0
async function o([t,e,s]){const a=await J(t,e,s)
return n(1,c+=1),a}async function l(t){const e=i.rows(F,t),s=V(W(e.data()))
n(0,r=s.length),n(1,c=0)
const a=await lt(s.map(o))
e.every(H(a.flatMap(Q))),i.draw()}const u=t=>{d("Inventory","Update Stats",t)}
U(s)
return t.$$set=t=>{"fshInv"in t&&n(6,s=t.fshInv)},[r,c,async function(){u("On page"),l({page:"current"})},function(){u("All"),l()},async function(){u("Clear cache"),await g(`fsh_${a.subcmd}_cache`,[]),P(B("fshRefresh"))},"This allows you to update the stats of items. It is useful in cases where stats are missing or if you want accurate stats for forged items. It can be slow for large data sets. The results are cached and will be used automatically next time you visit this page. You will need to update again if these stats become stale. For example, if you forged or crafted an item, or if a guild store item has moved.",s]}class xn extends w{constructor(t){super(),L(this,t,In,$n,M,{fshInv:6})}}function Rn(t){let e
return{c(){e=S("div")},m(t,n){T(t,e,n)},p:C,i:C,o:C,d(t){t&&A(e)}}}function wn(t){let e,n,s,a
e=new kn({})
return{c(){Y(e.$$.fragment),n=E(),s=tt()},m(t,i){X(e,t,i),T(t,n,i),T(t,s,i),a=!0},p(t,e){},i(t){a||(K(e.$$.fragment,t),K(false),a=!0)},o(t){z(e.$$.fragment,t),z(false),a=!1},d(t){t&&(A(n),A(s)),Z(e,t)}}}function Ln(t){let e,n,s,i,r,c
const o=[wn,Rn],d=[]
return n="guildinvmgr"===a.subcmd?0:1,s=d[n]=o[n](t),r=new xn({props:{fshInv:t[0]}}),{c(){e=S("div"),s.c(),i=E(),Y(r.$$.fragment),j(e,"class","container svelte-1tjz5ud")},m(t,s){T(t,e,s),d[n].m(e,null),D(e,i),X(r,e,null),c=!0},p(t,[e]){s.p(t,e)
const n={}
1&e&&(n.fshInv=t[0]),r.$set(n)},i(t){c||(K(s),K(r.$$.fragment,t),c=!0)},o(t){z(s),z(r.$$.fragment,t),c=!1},d(t){t&&A(e),d[n].d(),Z(r)}}}function Mn(t,e,n){let{fshInv:s=0}=e
return t.$$set=t=>{"fshInv"in t&&n(0,s=t.fshInv)},[s]}class Sn extends w{constructor(t){super(),L(this,t,Mn,Ln,M,{fshInv:0})}}function En(t){!function(t){new Sn({props:{fshInv:t},target:i()})}(t)}const jn=()=>Wt().player_id?`<b>&nbsp;Inventory Manager</b> ${Wt().items.length} items (green = worn, blue = backpack)`:`<b>&nbsp;Guild Inventory Manager</b> ${Wt().items.length} items (maroon = in BP, blue=guild store)`
function Tn(){const t=jn()
et("",i()),function(){if(!Bt())return
Ft(n(B("pF"),st({style:{textAlign:"center"}})))}(),nt(i(),ae.replace("@@reportTitle@@",t))}function Dn(){Pt(Wt().items)&&Tn()}function Nn(){$("#fshMinLvl").val(le().fshMinLvl),$("#fshMaxLvl").val(le().fshMaxLvl)}const Cn=([,t])=>[t.id,t]
function An(t){ut([ne,mn,hn,bn,yn,Dn,Ee,Nn])
const e=Me()
!function(t){$("#fshMinLvl, #fshMaxLvl").on("keyup",l(Ne,t)),$(t).on("change","select.fshMoveItem",on),un(t),wt(t,ln,te)}(e),$("#fshRefresh").on("click",t),function(t){const e=$(`#${t.id}_filter input`)
e.prop("type","text")
const n=$("<span>&times;</span>")
e.wrap($('<span class="text-input-wrapper"/>')),e.after(n),n.on("click",l(ee,t,e))}(e),En(e)}function Gn(t){ot("JS Perf","getInvMan"),An(t),dt("JS Perf","getInvMan")}const Pn=()=>Object.getOwnPropertyNames(Wt()).length
async function On(e){const n=[ft(),zt()]
"guildinvmgr"===a.subcmd&&n.push(async function(){await t(!1),a.membrList=rt(y(a.membrList).filter(Ot).map(Cn))}()),n.push(async function(){const t=await u(`fsh_${a.subcmd}`)
ce={...ht(se),...f(t,{})},oe=p("showQuickDropLinks"),de=p("showQuickSendLinks")}()),await lt(n),Pn()&&function(t){ct(3,Gn,[t])}(e)}function Un(){!at()&&i()&&("guildinvmgr"!==a.subcmd||c())&&(et(`<span id="fshInvMan"><img src = "${it}">&nbsp;Getting inventory data...</span>`,i()),On(Un))}export{Un as default}
//# sourceMappingURL=inventory-DrCDdfNz.js.map