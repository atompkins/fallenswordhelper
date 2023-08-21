import{a as z}from"./chunk-UCPINJI3.js";import{a as V}from"./chunk-M2VKLAB3.js";import{a as O}from"./chunk-MC5MD6GH.js";import{a as E}from"./chunk-UU7DIGYB.js";import{a}from"./chunk-3OTERK3T.js";import"./chunk-ZWF3BA7K.js";import{a as x}from"./chunk-JD6SFYTB.js";import{a as D}from"./chunk-5CREU7DW.js";import{a as l}from"./chunk-X6FEZLDJ.js";import{a as q}from"./chunk-2FWCZQ2C.js";import"./chunk-PQQEDEVZ.js";import{a as Q,b as v}from"./chunk-VGSTDDXU.js";import"./chunk-3M4BGLDY.js";import"./chunk-ZHNBOA2F.js";import"./chunk-XWM4YOEC.js";import"./chunk-TLD65X3G.js";import"./chunk-CA4APEYC.js";import{a as K}from"./chunk-ZQAQAA4Z.js";import"./chunk-LDVCHSP7.js";import{a as G}from"./chunk-IKLQU6YP.js";import{a as M}from"./chunk-RIMALT5Z.js";import"./chunk-VZP2JUPU.js";import"./chunk-MG45P7RB.js";import"./chunk-CQKCIFA5.js";import{a as p}from"./chunk-GEQ6SBFU.js";import{a as L}from"./chunk-5JOFCACO.js";import"./chunk-E546N3MN.js";import{a as A}from"./chunk-NPERBP7A.js";import"./chunk-SPFEL7UW.js";import"./chunk-327LTRO2.js";import{c as u}from"./chunk-27TM5UBE.js";import"./chunk-EKF7ZDTL.js";import"./chunk-5SCNACF3.js";import{a as f}from"./chunk-MUNFS2PQ.js";import"./chunk-SY4GQ6JX.js";import"./chunk-THRA3S6L.js";import"./chunk-TM7HV6I4.js";import{a as I}from"./chunk-R4VVRPE7.js";import"./chunk-D4CTFWTI.js";import"./chunk-ZS2ZYLXC.js";import"./chunk-ACU3ECUK.js";import{b as H}from"./chunk-OHGKEFPZ.js";import{a as h}from"./chunk-KGBQEEPA.js";import{a as U}from"./chunk-MO5YK3AA.js";import{a as y}from"./chunk-KWZPRQOD.js";import{c as j}from"./chunk-7CIGM6WR.js";import{g as _}from"./chunk-S2DS6Q2Q.js";import"./chunk-DPOGJLEK.js";import{a as S}from"./chunk-MHZN7LER.js";import{a as i}from"./chunk-JVNW5U7Y.js";import{a as s}from"./chunk-IWZ3GP32.js";import"./chunk-57NIVQFE.js";function Z(t){return s.sortBy&&s.sortBy===t}function P(t){let r=t.getAttribute("sortKey");S(s.sortAsc)&&(s.sortAsc=!0),Z(r)&&(s.sortAsc=!s.sortAsc),s.sortBy=r}var R=0,W=[];function tt(t){return`<div class="rmItem"><img class="tip-dynamic" data-tipped="fetchitem.php?item_id=${t.id}&inv_id=-1&t=2&p=${R}&vcode=${t.verify}" src="${t.img}" height="20px" width="20px"><p>${t.amountPresent}/${t.amountNeeded}</p></div>`}var J=t=>t?t.map(tt).join(""):"";function rt(t){return t.target?` <img class="tip-dynamic" data-tipped="fetchitem.php?item_id=${t.target.id}&inv_id=-1&t=2&p=${R}&vcode=${t.target.verify}" src="${t.target.img}" height="30px" width="30px"><br/>`:""}function et(t){return!W.includes(t.name)}function ot(t){return`<tr class="rmTr"><td class="rmTd"><a href="${t.link}"><img src="${t.img}" height="30px" width="30px"></a></td><td class="rmTd"><a href="${t.link}">${t.name}</a></td><td class="rmTd">${J(t.items)}</td><td class="rmTd">${J(t.components)}</td><td class="rmTd">${rt(t)}</td></tr>`}function nt(t,r){R=E();let e='<table width="100%"><tr class="rmTh"><th>Recipe</th><th><span id="sortName" class="fshLink" sortkey="name">Name</span></th><th>Items</th><th>Components</th><th>Target</th></tr>';e+=r.recipe.filter(et).map(ot).join(""),e+="</table>",h(e,t),v("fsh_recipeBook",r)}function g(t,r){r&&(j("hideRecipes")&&(W=z("hideRecipeNames")),nt(t,r))}function b(t){return I('#pCC img[src*="/folder"]',t)}function it(t){return A("td",y("pCC",t))}function mt(t,r){let e=r.getAttribute("background");return e&&e.includes(t)}function st(t){let{itemId:r,vcode:e}=G(_,t.dataset.tipped);return{img:t.getAttribute("src"),id:r,verify:e}}function at(t,r){if(r){let e=f(r).split("/");t.amountPresent=parseInt(e[0],10),t.amountNeeded=parseInt(e[1],10)}}function pt(t){let r=t.children[0].children[0],e=st(r);return at(e,t.parentNode.nextElementSibling),e}function $(t,r){return t.filter(i(mt,r)).map(pt)}function k(t,r,e,o){let n=p(o);a(t,`Parsing blueprint ${e.name}...<br>`);let d=it(n);e.items=$(d,"/inventory/2x3."),e.components=$(d,"/inventory/1x1mini."),[e.target]=$(d,"/hellforge/2x3."),r.recipe.push(e)}function ct(t){return I('#pCC a[href*="=viewrecipe&"]',t)}function ft(t){return{img:t.parentNode.previousElementSibling.children[0].getAttribute("src"),link:t.href,name:f(t),id:x(t.search,"recipe_id")}}async function dt(t,r,e){a(t,`Found blueprint "${f(e)}".<br>`);let o=ft(e),n=await u(e.href);k(t,r,o,n)}function B(t,r,e){let o=p(e),n=ct(o).map(i(dt,t,r));return l(n)}function ut(t){return/\/folder_on\./.test(t.getAttribute("src"))}function lt(t){return b(t).find(ut)?.parentNode?.href}function gt(t,r){return r!==0}function ht(t){return t.value}function bt(t){return A("option",O("customselect",y("pCC",t))[0]).filter(gt).map(ht)}async function yt(t,r,e){let o=await u(`${t}&page=${e}`);return r(o)}function xt(t,r,e){return bt(t).map(i(yt,r,e))}function F(t,r,e){let o=p(e);if(!o)return;let n=lt(o);if(!n)return;let d=i(B,t,r),C=xt(o,n,d);return C.push(d(e)),l(C)}function At(t){return x(t.parentNode.search,"folder_id")!=="-1"}function It(t,r){let e=f(r.parentNode.parentNode.nextElementSibling),o=/quest/i.test(e);return o&&a(t,`Skipping folder "${e}"  as it has the word "quest" in folder name.<br>`),!o}async function vt(t,r){let e=await u(r.parentNode.href);return t(e)}function Pt(t,r,e){let o=p(r);return b(o).filter(At).filter(i(It,t)).map(i(vt,e))}function T(t,r,e){let o=i(F,t,r),n=Pt(t,e,o);return n.push(o(e)),l(n)}var m=0,c=0,N=()=>m,X=()=>c;function Rt(){a(c,"Finished parsing ... formatting ..."),v("fsh_recipeBook",m),g(c,m)}async function w(){m={},m.recipe=[],h("<br>Parsing inventing screen ...<br>",c);let t=await L({cmd:"inventing"});t&&(T(c,m,t),Rt())}function Y(t,r){m=r,h('<table class="fshInvFilter"><thead><tr><th width="90%"><b>&nbsp;Recipe Manager</b></th><th width="10%" class="fshBtnBox">[<span id="rfsh" class="fshLink">Refresh</span>]</th></tr></thead></table>',t),c=D(),q(t,c),m?g(c,m):w()}function $t(t){P(t),N().recipe.sort(K),g(X(),N())}var kt=[["rfsh",w],["sortName",$t]];async function Bt(t){if(M())return;let r=t||H(),e=await Q("fsh_recipeBook");Y(r,e),U(r,V(kt))}export{Bt as default};
//# sourceMappingURL=recipeMgr-PEZ2T6YM.js.map
