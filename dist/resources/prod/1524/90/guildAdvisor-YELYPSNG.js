import{a as u}from"./chunk-T6DXUUEW.js";import{a as p}from"./chunk-CJDRLZM3.js";import{a as U}from"./chunk-MGMTY5BQ.js";import"./chunk-SDRXY2WS.js";import{a as J}from"./chunk-L2UO6NH3.js";import"./chunk-5MKES3HO.js";import{a as X}from"./chunk-PSRRXAJ2.js";import{a as q}from"./chunk-PNPL7U5S.js";import"./chunk-B6ICJEGU.js";import{b as c,c as d}from"./chunk-KEIPWRCK.js";import"./chunk-LN77H4V4.js";import{a as H}from"./chunk-PATY7B52.js";import"./chunk-TFZSXN7S.js";import{a as W}from"./chunk-HM3KCJWR.js";import"./chunk-I66Z377B.js";import{a as g}from"./chunk-KW3WKMBG.js";import"./chunk-MJBOR63W.js";import{a as R}from"./chunk-AYJMSZTJ.js";import"./chunk-343LUOT5.js";import{a as M}from"./chunk-YADORND2.js";import{a as l}from"./chunk-OPQD2S4Z.js";import{a as L}from"./chunk-XOOBRZTW.js";import"./chunk-SKVK5WKF.js";import{a as n}from"./chunk-MJQR7DVR.js";import{a as F}from"./chunk-4DD6XIWS.js";import{b}from"./chunk-HWIYLISZ.js";import{a as N}from"./chunk-73375NDG.js";import"./chunk-3MHFN2TP.js";import{a as O}from"./chunk-D44L5YII.js";import"./chunk-4WEUIOZY.js";import"./chunk-OALMBGX2.js";import"./chunk-MCKHXS6I.js";import{a as I}from"./chunk-4RHFJVDQ.js";import{a as G}from"./chunk-EYF2M4A4.js";import"./chunk-5WB4S5KU.js";import{a as E}from"./chunk-QCGEDCXW.js";import"./chunk-IVSPKQAF.js";import{a as j}from"./chunk-Z6NEFCOZ.js";import"./chunk-6VXJ4JH3.js";import"./chunk-AB26ECPS.js";import"./chunk-U3JOWR4W.js";import{a as D}from"./chunk-NPK42VJ3.js";import"./chunk-NCJHTPUM.js";import"./chunk-VH2S7CSB.js";import"./chunk-3LPJKV5E.js";import"./chunk-R2ELQJ5E.js";import"./chunk-HARH5SDM.js";import"./chunk-RBX575YR.js";import{a as P}from"./chunk-52J4EBAW.js";import"./chunk-KY6XDBV6.js";import"./chunk-5JFQS7E5.js";import{a as V}from"./chunk-M7WAGJ4J.js";import{a as A}from"./chunk-SNNJI7BD.js";import"./chunk-QB3VNFLV.js";import"./chunk-3BJZG67W.js";import"./chunk-U6A4VQTL.js";import{a as i}from"./chunk-IGXYBCKR.js";import"./chunk-65QZT3K7.js";import{a as o}from"./chunk-LHP5V3M7.js";import"./chunk-57B6SJJP.js";import"./chunk-5BQ45OC2.js";import"./chunk-PJNUKY76.js";import{b as f}from"./chunk-7BHYTCY7.js";import"./chunk-QXT6DFLJ.js";import"./chunk-DCMPLE27.js";import{q as S}from"./chunk-SHG4I62I.js";import"./chunk-MA33RQLF.js";import{a as B}from"./chunk-CHNXGBZZ.js";function m(t){return L("tfoot",t)}function T(t,r){return r?.parentNode?.replaceChild?.(t,r)}var _=[{title:'<div class="fshBold">Member</div>'},{title:'<div class="fshBold">Lvl</div>',class:"dt-center"},{title:'<div class="fshBold">Rank</div>',class:"dt-center dt-nowrap"},{title:'<div class="fshBold">Gold From Deposits</div>',class:"dt-center"},{title:'<div class="fshBold">Gold From Tax</div>',class:"dt-center"},{title:'<div class="fshBold">Gold Total</div>',class:"dt-center"},{title:'<div class="fshBold">FSP</div>',class:"dt-center"},{title:'<div class="fshBold">Skill Cast</div>',class:"dt-center"},{title:'<div class="fshBold">Group Create</div>',class:"dt-center"},{title:'<div class="fshBold">Group Join</div>',class:"dt-center"},{title:'<div class="fshBold">Relic</div>',class:"dt-center"},{title:'<div class="fshBold">XP Contrib</div>',class:"dt-center"}];function v(t,r){return r[t]?r[t].level:""}function h(t,r){return r[t]?`<div class="fshAdvRank">${F(r[t].rank_name)}</div>`:""}function z(t,r,e){$(t).DataTable({autoWidth:!1,columnDefs:[{targets:[1,3,4,5,6,7,8,9,10,11],orderSequence:["desc","asc"]}],columns:_,data:r,deferRender:!0,initComplete:e,lengthMenu:[[25,50,-1],[25,50,"All"]],pageLength:25,stateDuration:0,stateSave:!0})}function K(t,r){g(3,o(T,t,r))}function y(t,r,e){let s=M(),a=U({className:"fshDataTable fshXSmall hover"});return l(s,a),l(a,r),g(3,z,[a,e,o(K,s,t)]),s}function k(t){return V({subcmd:"advisor",subcmd2:"view",period:t})}var Y=t=>G(n(t));function Z(t){return{player:{level:0,name:n(t.cells[0])},stats:[3,4,5,6,7,9,1,2,8].map(r=>Y(t.cells[r]))}}function tt(t){let r=j("#pCC table table",t);return{r:i(r.rows).slice(1,-1).map(Z),s:!0}}async function x(t){return tt(await H({cmd:"guild",subcmd:"advisor",subcmd2:"view",period:t}))}function w(t){return W(k,x,t)}function rt(t,r,e){return R(t.lastElementChild.lastElementChild,` day ${r},`),e.r}function et(t,r){return w(r).then(o(rt,t,r))}function Q(t,r,e){return r+t[e]}function ot(t,r,e){return{...r,stats:r.stats.map(o(Q,t[e].stats))}}function st(t,r){return t.map(o(ot,r))}function at(t){return{player:t.player,stats:[t.stats[6],t.stats[7],t.stats[6]+t.stats[7],t.stats[1],t.stats[2],t.stats[3],t.stats[4],t.stats[8],t.stats[5]]}}function it(t){return t.slice(1).reduce(st,t[0]).map(at)}function nt(t,r){return r.stats.map(o(Q,t))}function lt(t,r){return`${t}<td><u>${r}</u></td>`}function mt(t){let r=t.slice(1).reduce(nt,t[0].stats).map(A);return m({innerHTML:`<tr><td class="fshRight" colspan="3">Total: </td>${r.reduce(lt,"")}</tr>`})}function ct(t,r){let e=r.stats.map(A);return[u(t,r.player.name),v(r.player.name,t),h(r.player.name,t)].concat(e)}function dt(t,[r,...e]){let s=it(e);y(t,mt(s),s.map(o(ct,r)))}function ft(t){N('<span class="fshCurveContainer fshFlex"><span class="fshCurveEle fshCurveLbl fshOldSpinner"></span><span class="fshSpinnerMsg">&nbsp;Retrieving daily data ...</span></span>',t);let r=[p(!1)].concat([1,2,3,4,5,6,7,8].map(o(et,t)));X(r,o(dt,t))}function C(t){let r=f("betaOptIn");r&&c("guildAdvisor.injectAdvisorWeekly"),ft(t),r&&d("guildAdvisor.injectAdvisorWeekly")}function pt(t){let e=t.rows[t.rows.length-1].cloneNode(!0),s=m();l(s,e);let a=e.cells[0];return a.className="fshRight",a.setAttribute("colspan","3"),s}function ut(t,r){return r===0?n(t):D(t)}function vt(t,r){let e=i(r.cells,ut);return e.splice(0,1,u(t,e[0]),v(e[0],t),h(e[0],t)),e}function ht(t,r){return i(t.rows).slice(1,-1).map(o(vt,r))}function yt(){let t=I("custombutton",b());t.length!==0&&q(t[0],`<span> <a href="${S}guild&subcmd=advisor&subcmd2=weekly">7-Day Summary</a></span>`)}function gt(t,r){let e=f("betaOptIn");e&&c("guildAdvisor.injectAdvisorDaily");let s=ht(t,r),a=pt(t);y(t,a,s),yt(),e&&d("guildAdvisor.injectAdvisorDaily")}function bt(t){B.subcmd2==="weekly"?C(t):p(!1).then(o(gt,t))}function At(){if(P())return;let t=E("table",b())[1];!t||(O().then(()=>bt(t)),J())}export{At as default};
//# sourceMappingURL=guildAdvisor-YELYPSNG.js.map