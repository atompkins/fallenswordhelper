import{a as G}from"./chunk-JKF7SQTS.js";import{a as B}from"./chunk-PDAHONUA.js";import{a as F}from"./chunk-ZBGIX6RB.js";import{a as H}from"./chunk-RXVDCLJ6.js";import"./chunk-2GIEZTJU.js";import{a as v}from"./chunk-ORWNE4WN.js";import"./chunk-TANNOBPR.js";import{a as m}from"./chunk-BKJXISW2.js";import{a as p}from"./chunk-MZYLPE6K.js";import"./chunk-QRYRLQTR.js";import{a as c}from"./chunk-JXWP5PNM.js";import{a as W}from"./chunk-PK5RYL4P.js";import"./chunk-HMR4RPVO.js";import"./chunk-4XWSHIF5.js";import"./chunk-AID3LCGH.js";import{a as w}from"./chunk-VRFSPHR2.js";import{a as u}from"./chunk-6FE7TFOW.js";import"./chunk-BQN7JNLT.js";import{a as J}from"./chunk-4TGPNPDH.js";import{a as q}from"./chunk-DGS2WOJV.js";import{b as d}from"./chunk-AXEF7ZPS.js";import"./chunk-GPIGDOJJ.js";import"./chunk-SGSSGBJU.js";import{a as f}from"./chunk-L2F37LJS.js";import"./chunk-RSW3SDQ5.js";import{a as V}from"./chunk-LXCNYPSV.js";import"./chunk-QMO3OQBJ.js";import"./chunk-Q2OGYUCV.js";import{a as U}from"./chunk-SUTTQBC4.js";import{c as S}from"./chunk-46TQQDHW.js";import{a as x}from"./chunk-O7BO2JV6.js";import{a as g}from"./chunk-K4FZKNLQ.js";import"./chunk-CSUXSLMM.js";import"./chunk-OHRM7A4V.js";import"./chunk-TDFIT7OX.js";import"./chunk-UQIKKMNB.js";import"./chunk-UE3DRZE6.js";import"./chunk-JUEI6MIM.js";import"./chunk-REO2URTO.js";import{a as E}from"./chunk-JFPNT65R.js";import{b as P}from"./chunk-ELGHA2UY.js";import"./chunk-G5IZBOBE.js";import"./chunk-QKN4UTNB.js";import{W as h}from"./chunk-L5JB47YP.js";import{a as o}from"./chunk-M4AU23DF.js";function l(t){return q({cmd:"bounty",page:t})}function _(t){return t.children[0].tagName==="A"?t.children[0]:t.children[0].children[0]}function tt(t){return w("img",t[2]).title}function b(t){let e=_(t[0]);return{target:f(e),link:e.href,lvl:f(e.nextSibling).replace(/[[|\]]/g,""),reward:f(t[2]),rewardType:tt(t),posted:f(t[3]),xpLoss:f(t[4])}}var i,n,N,O,y,R;function et(t){return!/No bounties active/.test(t.rows[1].cells[0].innerHTML)}function rt(t){return{...b(t),progress:f(t[5])}}function nt(t){for(let e=1;e<t.rows.length-2;e+=2){let r=t.rows[e].cells,L=rt(r);i.bounty.push(L)}}function ot(t){et(t)&&nt(t)}function X(t){let e=g("bounty-info",t);if(!e)return;let r=e.parentNode.parentNode.previousElementSibling.children[0].children[0];i={},i.bounty=[],i.isRefreshed=!0,i.lastUpdate=d,r&&ot(r),N=!0}function it(){return i&&d-i.lastUpdate>O}function st(){return n&&d-n.lastUpdate>O}function at(){return it()||st()}function z(){i=W("bountyList"),n=W("wantedList"),O=P("bountyListRefreshTime"),y=P("bwNeedsRefresh"),!y&&at()&&(y=!0)}function K(){n={},n.bounty=[],n.isRefreshed=!0,n.lastUpdate=d,N=!1,R=F("wantedNames"),V("bwNeedsRefresh",!1)}function ft(t){let e=t[6];return u(e)!=="[n/a]"?e.children[0].children[0].getAttribute("onclick"):""}function ut(t){return{...b(t),offerer:u(t[1].children[0].children[0]),tickets:u(t[5]),accept:ft(t)}}var ct=[()=>R.includes("*"),t=>R.includes(t),(t,e)=>o.wantedGuildMembers&&u(e.cells[6])==="[n/a]"];function mt(t,e){return u(e.cells[6])!=="[active]"&&ct.some(r=>r(t,e))}function pt(t,e){mt(t,e)&&n.bounty.push(ut(e.cells))}function j(t){for(let e=1;e<t.rows.length-2;e+=2){let r=t.rows[e],L=u(r.cells[0].children[0].children[0]);if(L==="[ No bounties available. ]")break;pt(L,r)}}var s,a;function Q(){return m({className:"minibox"})}function C(){o.enableWantedList&&(a=Q(),H(S,a)),o.enableActiveBountyList&&(s=Q(),H(S,s))}var $;function dt(t){return`Level:  ${t.lvl}<br>Reward: ${t.reward} ${t.rewardType}<br>XP Loss Remaining: ${t.xpLoss}<br>Progress:  ${t.progress}`}function T(){c("bountyList",i),x("",s);let t=m({innerHTML:`<a href="${h}">Active Bounties</a> `});$=B({className:"xxsLink",textContent:"Reset"}),p(t,$),p(s,t);let e="";if(i.bounty.length===0)e+='<div class="xsOrange">[No active bounties]</div>';else for(let r of i.bounty)e+=`<a href="${r.link}" class="tip-static" data-tipped="${dt(r)}">${r.target}</a><br>`;v(s,e)}var A;function lt(t){return`Target Level:  ${t.lvl}<br>Offerer: ${t.offerer}<br>Reward: ${t.reward} ${t.rewardType}<br>XP Loss Remaining: ${t.xpLoss}<br>Posted: ${t.posted}<br>Tickets Req.:  ${t.tickets}`}function bt(t){return t.accept?`<span class="xsGreen" onclick="${t.accept}">[a]</span>&nbsp;`:""}function k(){c("wantedList",n),x("",a);let t=m({innerHTML:`<a href="${h}">Wanted Bounties</a> `});A=B({className:"xxsLink",textContent:"Reset"}),p(t,A),p(a,t);let e="";if(n.bounty.length===0)e+='<div class="xsOrange">[No wanted bounties]</div>';else for(let r of n.bounty)e+=`${bt(r)}<a class="xsKhaki tip-static" data-tipped="${lt(r)}" href="${r.link}">${r.target}</a><br>`;v(a,e)}var M,Y;function yt(t){let e=w('#pCC input[name="page"]',t);if(!e)return;M=Number(e.value),Y=Number(e.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1]);let r=g("bounty-info",t).parentNode.parentNode.nextElementSibling.children[0].children[0];r&&j(r)}function Lt(t){o.enableActiveBountyList&&!N&&(X(t),T())}function D(t){let e=J(t);Lt(e),o.enableWantedList&&(yt(e),M<Y?l(M+1).then(D):k())}function gt(t,e){e&&(n.isRefreshed=!1,k()),t&&(i.isRefreshed=!1,T())}var ht=[()=>!i,()=>!n,()=>y];function vt(){return ht.some(G)}function I(t,e){z(),vt()?(K(),l(1).then(D)):gt(t,e)}function Z(t){t.target===$&&(c("bountyList",null),I(o.enableActiveBountyList,o.enableWantedList)),t.target===A&&(c("wantedList",null),I(o.enableActiveBountyList,o.enableWantedList))}function xt(){s&&E(s,Z),a&&E(a,Z)}function wt(){U()||(C(),xt(),I(o.enableActiveBountyList,o.enableWantedList))}export{wt as default};
//# sourceMappingURL=activeWantedBounties-6NKFYX5W.js.map