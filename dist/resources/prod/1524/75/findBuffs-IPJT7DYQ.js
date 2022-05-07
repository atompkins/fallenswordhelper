import{a as p}from"./chunk-TQLD7CGE.js";import{b as K}from"./chunk-WXLINGDG.js";import{a as Y}from"./chunk-X2OM7PVC.js";import{c as z}from"./chunk-SZSLBMHU.js";import{a as X}from"./chunk-33AL3TXI.js";import{a as Q}from"./chunk-AID3LCGH.js";import{a as W}from"./chunk-VRFSPHR2.js";import{a as U}from"./chunk-RTE45BUF.js";import"./chunk-MS4EYMHR.js";import{a as C}from"./chunk-GHI2YFAT.js";import"./chunk-NHD5GMUM.js";import"./chunk-6FE7TFOW.js";import{a as B}from"./chunk-BQN7JNLT.js";import"./chunk-LYLU7224.js";import{a as w}from"./chunk-6WXORXVO.js";import{a as J}from"./chunk-4F7DNDA4.js";import{a as q}from"./chunk-3AY3EB3C.js";import{a as L}from"./chunk-46E7CLT6.js";import{a as c}from"./chunk-4TGPNPDH.js";import"./chunk-DGS2WOJV.js";import"./chunk-AXEF7ZPS.js";import"./chunk-GPIGDOJJ.js";import{a as I}from"./chunk-SGSSGBJU.js";import{a}from"./chunk-L2F37LJS.js";import"./chunk-RSW3SDQ5.js";import{a as E}from"./chunk-LXCNYPSV.js";import"./chunk-QMO3OQBJ.js";import"./chunk-Q2OGYUCV.js";import{a as _}from"./chunk-SUTTQBC4.js";import{c as Z}from"./chunk-BF5ACXQT.js";import"./chunk-A3YBBQMJ.js";import"./chunk-TLM5ASK6.js";import{b as v}from"./chunk-46TQQDHW.js";import{a as i}from"./chunk-O7BO2JV6.js";import{a as n}from"./chunk-K4FZKNLQ.js";import"./chunk-5CGQ343C.js";import"./chunk-CSUXSLMM.js";import"./chunk-OHRM7A4V.js";import{a as f}from"./chunk-TDFIT7OX.js";import"./chunk-UQIKKMNB.js";import"./chunk-UE3DRZE6.js";import"./chunk-JUEI6MIM.js";import"./chunk-REO2URTO.js";import{a as T}from"./chunk-NH6DTJ4R.js";import{a as A}from"./chunk-JFPNT65R.js";import{b}from"./chunk-ELGHA2UY.js";import"./chunk-G5IZBOBE.js";import"./chunk-QKN4UTNB.js";import"./chunk-VOOMRXTQ.js";import{a as G}from"./chunk-XAE2ZLZO.js";import{Fa as j,P as O,g as D,w as H}from"./chunk-L5JB47YP.js";import{a as x}from"./chunk-M4AU23DF.js";function ge(e){return`<tr><td rowspan="2" colspan="2" class="headCell"><h1>Find ${e.header}</h1></td><td class="findLabel">Select ${e.what} to search for:</td><td>${e.control()}</td></tr>`}function ye(e){return`<tr><td class="findLabel">Level ${e.cutoff}ers only:</td><td><input id="level175" type="checkbox"></td></tr>`}function Pe(e){return`<tr><td class="leftLabel">${e.searched}:&nbsp;</td><td id="buffNicks">&nbsp;</td><td class="findLabel">Search guild members:</td><td><input id="guildMembers" type="checkbox" checked></td></tr>`}function xe(){return z("Search Allies/Enemies","The checkbox enables searching your own personal allies/enemies list for buffs.<br><br>Additional profiles to search can be added in the text field to the right, separated by commas.")}function ve(e,t){return`<tr><td class="findLabel"># potential ${e.potential}ers to search:&nbsp;</td><td id="potentialBuffers"></td><td class="findLabel">Search allies/enemies:${xe()}</td><td><input id="alliesEnemies" type="checkbox" checked><input class="extraProfile" class="custominput" id="extraProfile" type="text" title="Extra profiles to search" value="${t||""}"></td></tr>`}function Le(e){return`<tr><td class="findLabel"># ${e.processed}ers processed:&nbsp;</td><td id="buffersProcessed">0</td><td class="findLabel">Search online list:</td><td><select class="selectOnline" id="onlinePlayers"><option value="0">Disabled</option><option value="49">Short (fastest)</option><option value="47">Medium (medium)</option><option value="45">Long (slowest)</option></select></td></tr>`}function $e(e){return`<tr><td class="findLabel">Find ${e.progress} progress:&nbsp;</td><td class="buffProg" id="bufferProgress">Idle</td><td align="center"><input id="clearresultsbutton" class="custombutton" type="button" value="Clear Results"></td><td align="center"><input id="findbuffsbutton" class="custombutton" type="button" value="Find Buffers"></td></tr>`}function Be(e){return`<br><h1>Potential ${e.processed}ers and Bio Info</h1><br><table class="fshResult" id="buffTable"><tbody><tr><th class="nameCol">&nbsp;Name</th><th class="infoCol">&nbsp;Player Info</th><th>&nbsp;Notable Bio Text</th></tr></tbody></table><br>`}function Ce(){return'<div class="disclaim">Disclaimer: This functionality does a simple text search for the terms above. It is not as smart as you are, so please do not judge the results too harshly. It does not search all online players, just a subset of those that have been on recently. The aim is to be fast and still return a good set of results. This feature is a work in progress, so it may be tweaked and enhanced over time.</div>'}function g(e,t){return`<table class="fshFind"><tbody>${ge(e)}${ye(e)}${Pe(e)}${ve(e,t)}${Le(e)}${$e(e)}</tbody></table>${Be(e)}${Ce()}`}var S;function k(){S=n("bufferProgress")}function l(e,t){i(e,S),t&&(S.style.color=t)}var Te=/Level<br>(\d+)%/;function Ae(e,t){let r=new RegExp(`^.*\\b(?:(?:${t.replace(/,/g,")|(?:")}))\\b.*$`,"gim");return[...e.matchAll(r)].map(o=>o[0])}function Ee(e){let t=q("a",n("profileLeftColumn",e)).find(U("Sustain"));if(t){let r=t.parentNode.parentNode.parentNode.nextElementSibling.children[0].dataset.tipped;return parseInt(Te.exec(r)[1],10)||-1}return 0}function Ie(e){return a(L("h1",n("pCC",e))[0])}function we(e){return J(a(n("profileLeftColumn",e).children[4].children[0].rows[0].cells[1]))}function Se(e){return parseInt(a(n(j,e)),10)}function ke(e,t,r,o){let s=Ie(e),V=we(e),d=Se(e),pe=parseInt(r[1],10),me=K({min:pe}),he=t.href,be=o.replace(/['"\n]/g,"");return`<nobr>${me}&nbsp;<a href="${he}" target="new" class="tip-static" data-tipped="${be}">${s}</a>&nbsp;<span class="fshBlue">[<span class="a-reply fshLink" target_player="${s}">m</span>]</span></nobr><br><span class="fshGrey">Level:&nbsp;</span>${V}&nbsp;(${d})`}function Ne(e){window.openQuickMsgDialog(e.target.getAttribute("target_player"))}function Me(e){let t=e.newRow.insertCell(0);t.style.verticalAlign="top",i(ke(e.doc,e.callback,e.lastActivity,e.bioCellHtml),t),$(".a-reply").on("click",Ne)}function Re(e,t,r){let o="fshRed";t>=100&&(o="fshGreen");let s='<span class="fshRed">No</span>';return r&&(s='<span class="fshGreen">Yes</span>'),`<table><tbody><tr><td colspan="2" class="resAct">Last Activity:</td><td colspan="2"><nobr>${e[0]}</nobr></td></tr><tr><td class="resLbl">Sustain:</td><td class="resVal ${o}">${t}%</td><td class="resLbl">Extend:</td><td class="resVal">${s}</td></tr>`}function Fe(e,t,r,o){let s=e.insertCell(1);i(Re(t,r,o),s),s.style.verticalAlign="top"}function Ve(e,t){e.innerHTML+=`${t}<br>`}function De(e,t){let r=e.insertCell(2);t.forEach(f(Ve,r))}function He(){let e=n("buffersProcessed"),t=parseInt(a(n("potentialBuffers")),10),r=parseInt(a(e),10);i(r+1,e),t===r+1&&l("Done.","blue")}function Oe(e){let t=n("pCC",e),r=L("p",t)[0];return/(\d{1,2}) mins, (\d{1,2}) secs/.exec(a(r))}function je(e){return W('img.tip-static[data-tipped*="Extend"]',e)}function Ge(e,t,r,o){let s=Oe(r),d=n("buffTable").insertRow(-1);Me({newRow:d,doc:r,callback:t,lastActivity:s,bioCellHtml:e}),Fe(d,s,Ee(r),je(r)),De(d,o)}function N(e,t){let r=c(e),o=n("profile-bio",r).innerHTML,s=Ae(o,t.findBuffNicks);s.length>0&&Ge(o,t,r,s),He()}function qe(e){return`<option value="${e.id}">${e.name}</option>`}var ee={header:"Buff",what:"buff",control(){return`<select style="width:140px;" id="selectedBuff">${p.map(qe).join("")}</select>`},cutoff:"175 buff",searched:"Nicknames of buff searched",potential:"buff",processed:"Buff",progress:"buffers"},te={header:"Other",what:"text",control(){return`<input style="width:140px;" class="custominput" id="textToSearchFor" type="text" title="Text to search for" value="${b("textToSearchFor")||""}">`},cutoff:"500+ play",searched:"Text searched for",potential:"play",processed:"Play",progress:"Other"};var re;function M(){return re?500:1}function ne(){re=n("level175").checked}var y,P,m,R,u,h,F;function Ue(e,t){N(t,{href:e,findBuffNicks:y})}function _e(e){I(e).then(f(Ue,e))}function oe(){if(i(m.length,n("potentialBuffers")),m.length<=0){l("Done.","blue");return}l("Parsing player data ...","green"),m.forEach(_e)}function Qe(e,t){return e===1?Math.round(R*t/50):e+1}function se(e,t){X()!==B(t)&&m.push(e)}function Ye(e){return parseInt($(e).find("td:eq(2)").text().replace(/,/g,""),10)}function ze(e){return e>=P&&e>=M()}function Je(e,t){if(ze(Ye(t))){let r=$(t).find("td:eq(1) a").attr("href"),o=$(t).find("td:eq(1) a").text();se(r,o)}}function Ke(e){return parseInt($(e).find('td:has(input[name="page"]):last').text().replace(/\D/g,""),10)}function We(e){return parseInt($(e).find('input[name="page"]:last').val().replace(/\D/g,""),10)}function Xe(e){$(e).find('table:contains("Username")>tbody>tr:has(td>a[href*="cmd=profile&player_id="])').each(Je)}function Ze(e,t,r){let o=Qe(e,t);l(`Parsing online page ${e} ...`),w(o).then(r)}function ie(e){let t=c(e),r=We(t);r!==1&&Xe(t);let o=Ke(t);r<o?Ze(r,o,ie):oe()}function ae(){R=parseInt(n("onlinePlayers").value,10),R!==0?w(1).then(ie):oe()}function et(e){let t=D.exec(e),r=parseInt(t[1],10),o=parseInt(t[2],10)+r*24;return parseInt(t[3],10)+o*60}function tt(e,t,r){return e<5&&t>=P&&t>=r}function le(e){let{tipped:t}=e.dataset,r=et(t),o=Number(/VL:.+?(\d+)/.exec(t)[1]),s=M();tt(r,o,s)&&se(e.href,a(e))}function rt(e){let t=c(e);C('#profileLeftColumn a[data-tipped*="Last Activity"]',t).forEach(le),F+=1,F===h.length&&ae()}function nt(e){h.push(O+e)}function ot(e){I(e).then(rt)}function st(){h=[],h.push(H),Q(u).forEach(nt),F=0,n("alliesEnemies").checked?h.forEach(ot):ae()}function it(e){let t=c(e);n("guildMembers").checked&&C('#pCC a[data-tipped*="<td>VL:</td>"]',t).forEach(le),st()}function at(e,t){return t!==0}function lt(e){e.deleteRow(-1)}function ft(){let e=n("buffTable");G(e.rows).filter(at).forEach(f(lt,e)),i("",n("buffNicks")),l("Idle.","black"),i("",n("potentialBuffers")),i("0",n("buffersProcessed"))}function fe(e){_()||(i(y,n("buffNicks")),l(`Gathering list of ${e} ...`,"green"),ne(),i("0",n("buffersProcessed")),m=[],u=n("extraProfile").value,E("extraProfile",u),Y().then(it))}function ct(e,t){return e===t.id}function ut(){let e=parseInt($("#selectedBuff").val(),10),t=p.find(f(ct,e));y=t.nicks,P=t.lvl,fe("potential buffers")}function dt(){let e=$("#textToSearchFor").val().split(",").map(B).join(",");E("textToSearchFor",e),y=e,P=1,fe("profiles to search")}function ce(){u=b("extraProfile")}function ue(e){A(n("findbuffsbutton"),e,!0)}function de(){A(n("clearresultsbutton"),ft,!0)}function ur(e){let t=e||v;x.sortBy="name",x.sortAsc=!0,p.sort(Z),ce(),i(g(ee,u),t),k(),ue(ut),de(),T("ui-dialog-titlebar-close").forEach(r=>r.blur())}function dr(e){let t=e||v;ce(),i(g(te,u),t),k(),ue(dt),de(),T("ui-dialog-titlebar-close").forEach(r=>r.blur())}export{u as extraProfile,ur as injectFindBuffs,dr as injectFindOther};
//# sourceMappingURL=findBuffs-IPJT7DYQ.js.map