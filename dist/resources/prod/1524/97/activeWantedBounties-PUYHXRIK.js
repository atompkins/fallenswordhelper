import{a as C}from"./chunk-POKFPW5T.js";import{a as Y}from"./chunk-ZWKFAZZV.js";import{a as _}from"./chunk-SWUISPWF.js";import{a as F}from"./chunk-TKD5JPSI.js";import"./chunk-FKJWOE7J.js";import{a as R}from"./chunk-7WFBZC7L.js";import{a as c}from"./chunk-GHM7FGTO.js";import"./chunk-ORHGY3QB.js";import{a as p}from"./chunk-W5JHTZGX.js";import{a as k}from"./chunk-PMETJPWP.js";import"./chunk-FRJCV7BJ.js";import"./chunk-QE3HYJIL.js";import{a as f}from"./chunk-DS5TO6ZD.js";import"./chunk-YCL7L6ZB.js";import{a as D}from"./chunk-PRDY3MHE.js";import{a as G}from"./chunk-K452RLBU.js";import{a as h}from"./chunk-IWEQS4A6.js";import{a as w}from"./chunk-AJAH6JFS.js";import{a as Q}from"./chunk-PHWG56X4.js";import{a as K}from"./chunk-XVF2CJMZ.js";import"./chunk-KRBDNKGY.js";import{a as s}from"./chunk-OA25OZFH.js";import"./chunk-42DDVEBL.js";import"./chunk-IGPEYEWI.js";import"./chunk-VNYEAL6H.js";import{a as z}from"./chunk-N5SZHZZP.js";import"./chunk-K6EM5QMC.js";import"./chunk-EH4A6QLQ.js";import"./chunk-C33NXJNH.js";import{a as X}from"./chunk-5H2KFPOD.js";import"./chunk-EBO5CZG3.js";import"./chunk-WX24VINF.js";import{a as P}from"./chunk-OCKAGFKQ.js";import{b as $}from"./chunk-IE7HJE6I.js";import{X as J}from"./chunk-P5UJIVHH.js";import{d}from"./chunk-EOMEBOYD.js";import"./chunk-KQN5ZURG.js";import"./chunk-UB5XWXZZ.js";import"./chunk-Y7Z3DYSJ.js";import{a as q}from"./chunk-GOZAE5SK.js";import"./chunk-GVTLUYA2.js";import"./chunk-BHGUITJJ.js";import{a as r}from"./chunk-VZNGURHD.js";import"./chunk-LGFZXCM7.js";function l(t){return K({cmd:"bounty",page:t})}var j=0,S=0,g=()=>j,L=()=>S;function Z(){return R({className:"minibox"})}function tt(){r.enableActiveBountyList&&(j=Z(),c(D(),j)),r.enableWantedList&&(S=Z(),c(D(),S))}function dt(t,e,n){let o=t.bounty;return o.length===0?`<div class="xsOrange">[No ${e.toLowerCase()} bounties]</div>`:o.map(n).join("")}function lt(t,e,n,o){let x=R({innerHTML:`<a class="fshBountyHeader" href="${J}">${n} Bounties</a> `}),m=Y({className:"xxsLink",textContent:"Reset"});return c(x,m),c(t,x),F(t,dt(e,n,o)),m}function y([t,e,n,o,x]){let m=t(),V=n();return p(e,V),G("",m),lt(m,V,o,x)}function b(t,e){return`<a href="${t.link}" class="xsKhaki tip-static" data-tipped="${e(t)}">${t.target}</a><br>`}function gt(t){return t.children[0].tagName==="A"?t.children[0]:t.children[0].children[0]}function Lt(t){return w("img",t[2]).title}function B(t){let e=gt(t[0]);return{target:s(e),link:e.href,lvl:s(e.nextSibling).replace(/[[|\]]/g,""),reward:s(t[2]),rewardType:Lt(t),posted:s(t[3]),xpLoss:s(t[4])}}var E=0,i={},a={},H=!1,W=!1,et=[],v=()=>i,u=()=>a,nt=()=>H,rt=()=>W,M=()=>et;function yt(t){return!/No bounties active/.test(t.rows[1].cells[0].innerHTML)}function bt(t){return{...B(t),progress:s(t[5])}}function Bt(t){for(let e=1;e<t.rows.length-2;e+=2){let n=t.rows[e].cells,o=bt(n);i.bounty.push(o)}}function vt(t){yt(t)&&Bt(t)}function ot(t){let e=h("bounty-info",t);if(!e)return;let n=e.parentNode.parentNode.previousElementSibling.children[0].children[0];i={},i.bounty=[],i.isRefreshed=!0,i.lastUpdate=d(),n&&vt(n),H=!0}function xt(t){if(t)return i&&d()-i.lastUpdate>E}function ht(t){if(t)return a&&d()-a.lastUpdate>E}function wt(t,e){return xt(t)||ht(e)}function it(t,e){i=k("bountyList"),a=k("wantedList"),E=$("bountyListRefreshTime"),W=$("bwNeedsRefresh"),!W&&wt(t,e)&&(W=!0)}function st(){a={},a.bounty=[],a.isRefreshed=!0,a.lastUpdate=d(),H=!1,et=_("wantedNames"),z("bwNeedsRefresh",!1)}var at=0,ft=()=>at;function Rt(t){return`Level:  ${t.lvl}<br>Reward: ${t.reward} ${t.rewardType}<br>XP Loss Remaining: ${t.xpLoss}<br>Progress:  ${t.progress}`}function Wt(t){return b(t,Rt)}function N(){at=y([g,"bountyList",v,"Active",Wt])}var ut=0,ct=()=>ut;function Nt(t){return`Target Level:  ${t.lvl}<br>Offerer: ${t.offerer}<br>Reward: ${t.reward} ${t.rewardType}<br>XP Loss Remaining: ${t.xpLoss}<br>Posted: ${t.posted}<br>Tickets Req.:  ${t.tickets}`}function At(t){return t.accept?`<span class="xsGreen" onclick="${t.accept}">[a]</span>&nbsp;`:""}function Tt(t){return[At(t),b(t,Nt)].join("")}function A(){ut=y([L,"wantedList",u,"Wanted",Tt])}function $t(t){let e=t[6];return f(e)!=="[n/a]"?e.children[0].children[0].getAttribute("onclick"):""}function Dt(t){return{...B(t),offerer:f(t[1].children[0].children[0]),tickets:f(t[5]),accept:$t(t)}}var Pt=[()=>M().includes("*"),t=>M().includes(t),(t,e)=>r.wantedGuildMembers&&f(e.cells[6])==="[n/a]"];function kt(t,e){return f(e.cells[6])!=="[active]"&&Pt.some(n=>n(t,e))}function jt(t,e){kt(t,e)&&u().bounty.push(Dt(e.cells))}function O(t){for(let e=1;e<t.rows.length-2;e+=2){let n=t.rows[e],o=f(n.cells[0].children[0].children[0]);if(o==="[ No bounties available. ]")break;jt(o,n)}}var I=0,mt=0;function St(t){let e=w('#pCC input[name="page"]',t);if(!e)return;I=Number(e.value),mt=Number(q(/of&nbsp;(?<of>\d*)/,e.parentNode.innerHTML));let n=h("bounty-info",t).parentNode.parentNode.nextElementSibling.children[0].children[0];n&&O(n)}function Et(t){r.enableActiveBountyList&&!nt()&&(ot(t),N())}async function T(t){let e=Q(t);if(Et(e),r.enableWantedList)if(St(e),I<mt){let n=await l(I+1);T(n)}else A()}function Ht(t,e){e&&(u().isRefreshed=!1,A()),t&&(v().isRefreshed=!1,N())}var Mt=[()=>!v(),()=>!u(),()=>rt()];function Ot(){return Mt.some(C)}async function U(t,e){if(it(t,e),Ot()){st();let n=await l(1);T(n)}else Ht(t,e)}function pt(t){t.target===ft()&&(p("bountyList",null),U(r.enableActiveBountyList,r.enableWantedList)),t.target===ct()&&(p("wantedList",null),U(r.enableActiveBountyList,r.enableWantedList))}function It(){g()&&P(g(),pt),L()&&P(L(),pt)}function Ut(){X()||(tt(),It(),U(r.enableActiveBountyList,r.enableWantedList))}export{Ut as default};
//# sourceMappingURL=activeWantedBounties-PUYHXRIK.js.map