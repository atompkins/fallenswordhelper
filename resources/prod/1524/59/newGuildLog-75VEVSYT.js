import{a as Z}from"./chunk-BZQP4WHV.js";import{b as X}from"./chunk-DSNU2M3R.js";import"./chunk-23FWLH3V.js";import{a as K}from"./chunk-2P7TAVJE.js";import{a as J}from"./chunk-HYNNYWWU.js";import{a as h}from"./chunk-OROJHKPP.js";import{a as L}from"./chunk-KM7CX52O.js";import{a as Y}from"./chunk-SBS3PFXD.js";import{a as z}from"./chunk-4HA4ZKCB.js";import"./chunk-ITOMCHW6.js";import"./chunk-WPRJRMRS.js";import"./chunk-GYKRPCN6.js";import{a as Q}from"./chunk-PGNGZ7BH.js";import{a as q,b as U}from"./chunk-ABBYVZE2.js";import"./chunk-LXZINSYK.js";import{a as w}from"./chunk-AP47UOBN.js";import"./chunk-WLNM4U65.js";import"./chunk-3Y3PUEDB.js";import{a as W}from"./chunk-WNGRECU2.js";import"./chunk-7H3CUBDO.js";import{a as V}from"./chunk-DHF6BJQI.js";import"./chunk-X66Q7UOF.js";import{a as M}from"./chunk-5HIH63DD.js";import"./chunk-YZLKCQP2.js";import"./chunk-KXW7HYGX.js";import{b as k}from"./chunk-IYHXDIFW.js";import{a as O}from"./chunk-NH3HITNH.js";import"./chunk-KO5VAUDT.js";import"./chunk-U7MZTH64.js";import{a as B}from"./chunk-RC4NT5JT.js";import"./chunk-AIP6BPK2.js";import{a as S}from"./chunk-EQPMHYZD.js";import{a as A}from"./chunk-C34SKZ6F.js";import"./chunk-TMODYEZT.js";import"./chunk-H6KXMG2X.js";import{a as f}from"./chunk-PNCKZ23Z.js";import"./chunk-WERDHZX6.js";import"./chunk-7RQZYKTJ.js";import"./chunk-UND2M5KJ.js";import"./chunk-XJ4CM2CH.js";import"./chunk-6LZRRVCI.js";import{a as $}from"./chunk-D5AS4V7F.js";import{a as _}from"./chunk-WUYDXKAM.js";import"./chunk-5XAAMTXP.js";import"./chunk-O5LMDCSL.js";import"./chunk-T5PPVP6C.js";import{a as m}from"./chunk-J3KBZ4ZI.js";import{a as F}from"./chunk-Y27L7NRG.js";import"./chunk-PYNBBPHV.js";import"./chunk-BPFW3H66.js";import{a as r}from"./chunk-SRX5YX5V.js";import"./chunk-YZX6UUEO.js";import"./chunk-RLHOQMY5.js";import"./chunk-EGDIV5JD.js";import"./chunk-SCZRPZMX.js";import"./chunk-MCETWLUS.js";import"./chunk-A6IIWQBH.js";import{a as D}from"./chunk-MC5JUWDN.js";import{b as j}from"./chunk-AACPE6UD.js";import"./chunk-SCZYWGQD.js";import"./chunk-AMPLIILU.js";import{E as H}from"./chunk-7JEA3TWT.js";import"./chunk-5BRYW4V3.js";import{a as n}from"./chunk-MJT5TAYX.js";function a(e){return _({cmd:"guild",subcmd:"log",page:e})}var ae=[[],["(Potion)"],["recalled the item","took the item","auto-returned the","stored the item"],["has added flags to","has removed flags to","has added tags to","has removed some tags from"],["relic. This relic now has an empower level of","relic. The relic empower level has been reset to zero.","failed to capture the relic","captured the relic","captured your relic","has captured the undefended relic","attempted to capture your relic",/ empowered the .+ relic/,/ removed the empowerment from the .+ relic/],["disbanded a mercenary.","hired the mercenary"],["has disbanded one of their groups",/A group from your guild was (.*) in combat./],[/deposited [,0-9]+ gold into the guild bank/,/deposited [,0-9]+ Fallen Sword Points into the guild./],["has added a new rank entitled","has deleted the rank","has requested to join the guild","has invited the player","has officially joined the guild","has been kicked from the guild by","has left the guild","has been assigned the rank","has added/updated a rank entitled",/has revoked .+'s invite to the guild/],[/resulted in .* with a final score of/,"resulted in a draw. Your GvG rating ","has just initiated a conflict with the guild","has initiated a conflict with your guild","is participating in the conflict against"],["Titan Reward item","from your guild's contribution to the defeat of the titan","7 day cooldown has been activated on your guild for this titan"]];function ce(e,t){return S(t)?e.includes(t):t.test(e)}function le(e,t){return t.some(n(ce,e))}function x(e){let t=ae.findIndex(n(le,e));return t===-1?0:t}var ee=`<table id="fshNewGuildLog" class="fshInvFilter"><thead><tr><th colspan="11"><b>Guild Log Version 4</b></th><th colspan="3"><span id="rfsh" class="sendLink">Reset</span> <a href="${H}" class="sendLink">Old Guild Log</a></th></tr></thead><tbody><tr><td rowspan="3"><b>&nbsp;Filters:</b></td><td class="fshRight">&nbsp;Potions:</td><td><input id="fshPotion" type="checkbox" item="1"/></td><td class="fshRight">&nbsp;Store/Recalls:</td><td><input id="fshStore" type="checkbox" item="2"/></td><td class="fshRight">&nbsp;Relics:</td><td><input id="fshRelic" type="checkbox" item="4"/></td><td class="fshRight">&nbsp;Mercenaries:</td><td><input id="fshMerc" type="checkbox" item="5"/></td><td class="fshRight">&nbsp;Group Combats:</td><td><input id="fshGroup" type="checkbox" item="6"/></td><td colspan="3">&nbsp;</td></tr><tr><td class="fshRight">&nbsp;Donations:</td><td><input id="fshDonation" type="checkbox" item="7"/></td><td class="fshRight">&nbsp;Rankings:</td><td><input id="fshRank" type="checkbox" item="8"/></td><td class="fshRight">&nbsp;GvGs:</td><td><input id="fshGvG" type="checkbox" item="9"/></td><td class="fshRight">&nbsp;Tag/UnTags:</td><td><input id="fshTag" type="checkbox" item="3"/></td><td class="fshRight">&nbsp;Titans:</td><td><input id="fshTitan" type="checkbox" item="10"/></td><td class="fshRight">&nbsp;Other:</td><td><input id="fshOther" type="checkbox" item="0"/></td><td>&nbsp;</td></tr><tr><td colspan="2">&nbsp;[<span id="fshAll" class="fshLink">Select All</span>]</td><td colspan="2">&nbsp;[<span id="fshNone" class="fshLink">Select None</span>]</td><td colspan="9"></td></tr><tr><td id="fshOutput" class="fshBlue" colspan="14">Loading Page 1 ...</td></tr></tbody></table><table id="fshInjectHere"></table>`,te='<tbody><tr><td class="header" width="16">&nbsp;</td><td class="header" width="20%">Date</td><td class="header" width="80%">Message</td></tr></tbody>',T=[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],oe=[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1];var o={},R,u,N,p,P,c,se,i=[],g=!0,l;function de(e){P=$(e);let t=M('input[name="page"]',P);t&&(c=Number(t.value),se=Number(/\d+/.exec(D(t.parentNode))[0]),c===1&&(p=Math.min(se,N)),f(`Loading ${c} of ${p}...`,u))}function me(e,t){return[()=>c===1,()=>o.log,()=>o.log[0],()=>o.log[0][0],()=>e===o.log[0][0],()=>t===o.log[0][2]].every(K)}function fe(e){let t=e[0],s=t.rows.length-1;for(let d=1;d<s;d+=2){let C=t.rows[d],E=B(C.cells[1]),I=Y(E),y=C.cells[2].innerHTML;if(me(I,y)){g=!1;break}i.push([c*100+d,I,E,y,x(y)])}}function he(){let e=V("width_full",P);e.length===1&&fe(e)}function ie(e){de(e),he()}function ue(e){i.push([0].concat(e))}function pe(){let e=[];if(g)for(let t=2;t<=p;t+=1)e.push(a(t).then(ie));else o.log.forEach(ue);return z(e)}function b(){U("fsh_guildLog",o)}function ge(e,t){return t[1]!==e}function be(e){return e.slice(1,5)}function ye(){o.log=i.filter(n(ge,new Date().setSeconds(0,0))).map(be),b()}function G(e,t){let s=e.insertCell(-1);m(t,s),s.className="row"}function ke(e){let t=l.insertRow(-1);e.push(t),o.checks[e[4]]||(t.className="fshHide"),G(t,'<i class="fas fa-user-friends" style="color: rgb(122,95,46);"></i>'),G(t,`<nobr>${e[2]}</nobr>`),G(t,e[3])}function we(e){let t=l.insertRow(-1);e.push(t),o.checks[e[4]]||(t.className="fshHide");let s=t.insertCell(-1);s.className="divider",s.colSpan=3}function Le(e){ke(e),we(e)}function xe(){l=Q({id:"fshInjectHere",className:"width_full"}),A(l,te),i.forEach(Le);let e=r("fshInjectHere");k.replaceChild(l,e),X("myGuildLog",1,3),Z()}function Te(e){e.checked=o.checks[e.getAttribute("item")]}function v(){O("input",R).forEach(Te),b()}function Re(e,t){return e[0]-t[0]}function Ne(){g&&i.sort(Re),f("Loading complete.",u),ye(),xe()}function ne(e){ie(e),pe().then(Ne)}function Pe(e,t,s){s[4]===e&&(L(s[5],t),L(s[6],t))}function Ge(e){let t=Number(e.getAttribute("item"));o.checks[t]=!o.checks[t],b(),i.forEach(n(Pe,t,!o.checks[t]))}function re(e){e&&e.classList&&e.classList.remove("fshHide")}function ve(e){re(e[5]),re(e[6])}function Ce(){o.checks=T.slice(0),v(),i.forEach(ve)}function Ee(e){w(e[5]),w(e[6])}function Ie(){o.checks=oe.slice(0),v(),i.forEach(Ee)}function He(){o.log=!1,b(),f("Loading Page 1 ...",u),i=[],g=!0,m("",r("fshInjectHere")),a(1).then(ne)}function je(){return J([[e=>e.tagName==="INPUT",Ge],[h("fshAll"),Ce],[h("fshNone"),Ie],[h("rfsh"),He]])}function Ae(e){o=e||o,o.checks=o.checks||T.slice(0)}function Oe(){R=r("fshNewGuildLog"),u=r("fshOutput")}function De(){N=Number(j("newGuildLogHistoryPages")),p=N}function Se(e){Ae(e),m(ee,k),Oe(),F(R,je()),v(),De(),a(1).then(ne)}function Be(){W()||q("fsh_guildLog").then(Se)}export{Be as default};
//# sourceMappingURL=newGuildLog-75VEVSYT.js.map
