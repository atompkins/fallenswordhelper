import{a as At,b as Et}from"./chunk-2MYJOEMW.js";import{a as gt}from"./chunk-7Z2WEOAF.js";import{a as g}from"./chunk-TFGWERU3.js";import{a as ft}from"./chunk-KNG4PLUH.js";import{a as ht}from"./chunk-CP3RM3BD.js";import"./chunk-U5XRZO3G.js";import{a as ut}from"./chunk-GPANXWBJ.js";import{a as dt}from"./chunk-IWZZIQBV.js";import{a as mt}from"./chunk-MHE6IB75.js";import"./chunk-VIYL46Q6.js";import{a as M}from"./chunk-Z4JN5BHS.js";import{a as d}from"./chunk-GUJMNTXY.js";import{a as lt}from"./chunk-3UNKZDTI.js";import"./chunk-CAX7THIP.js";import"./chunk-LBMN7XL3.js";import"./chunk-3R32ULME.js";import"./chunk-KTI2IMEY.js";import{a as l}from"./chunk-GXOFVYKC.js";import{a as ct}from"./chunk-A6LP6MUS.js";import"./chunk-MHWHHESW.js";import"./chunk-GMCULFR3.js";import"./chunk-TR4OIUT3.js";import"./chunk-QQEKW5LY.js";import{f as pt}from"./chunk-FR27OJE5.js";import"./chunk-WVO4VYA4.js";import"./chunk-C63Q3HN7.js";import"./chunk-JG7KZ32H.js";import{a as it}from"./chunk-35MRBVSX.js";import"./chunk-5UBD44K5.js";import"./chunk-AH7GU5B4.js";import"./chunk-NRW7AT6T.js";import"./chunk-DPECAWNM.js";import{a as I}from"./chunk-B72RCTA5.js";import"./chunk-KOM3R443.js";import"./chunk-NIOVFM2M.js";import"./chunk-6ZCA6D63.js";import"./chunk-YXAOTQ2S.js";import"./chunk-V45UJIF2.js";import"./chunk-64PLTPQD.js";import"./chunk-OHAOQZFW.js";import"./chunk-PJWDCLVE.js";import{b as at}from"./chunk-Q3ULPWYK.js";import{a as w}from"./chunk-SSAI4GAC.js";import{a as v}from"./chunk-JCK66TTB.js";import"./chunk-SY4ES3W2.js";import"./chunk-TFKKNJKY.js";import"./chunk-5ELKH2XV.js";import{a as st}from"./chunk-5ORZS6IQ.js";import{a as L}from"./chunk-BZJZQFW2.js";import"./chunk-VQDTHLUC.js";var xt=t=>(e,r)=>t(r,e),m=(t,...e)=>(...r)=>e.reduce((o,n)=>n(o),t(...r)),N=(t,e)=>{let r=e||t.length;return(...o)=>{let n=o.length||1;return r===n?t(...o):N((...i)=>t(...o,...i),r-o.length)}};var W=t=>e=>(t(e),e);var A=t=>{let e=t.split("."),r=(n={},s=[])=>{let i=s.shift(),a=n[i];return a==null||s.length===0?a:r(a,s)};return{get(n){return r(n,[...e])},set:(n,s)=>{let i=n,[a,...c]=e.reverse();for(let p of c.reverse())i[p]===void 0&&(i[p]={},i=i[p]);return i[a]=s,n}}};var jt=(t,e)=>t===e?0:t===void 0?1:e===void 0||t<e?-1:1,B;(function(t){t.ASC="asc",t.DESC="desc",t.NONE="none"})(B||(B={}));var Vt=(t,e)=>{let r=A(t).get;return(o,n)=>e(r(o),r(n))},F=t=>{let{pointer:e,direction:r="asc",comparator:o=jt}=t;if(!e||r==="none")return i=>[...i];let n=Vt(e,o),s=r==="desc"?xt(n):n;return i=>[...i].sort(s)};var C;(function(t){t.BOOLEAN="boolean",t.NUMBER="number",t.DATE="date",t.STRING="string"})(C||(C={}));var Jt=t=>{switch(t){case C.BOOLEAN:return Boolean;case C.NUMBER:return Number;case C.DATE:return e=>new Date(e);case C.STRING:return m(String,e=>e.toLowerCase());default:return e=>e}},Q;(function(t){t.INCLUDES="includes",t.IS="is",t.IS_NOT="isNot",t.LOWER_THAN="lt",t.GREATER_THAN="gt",t.GREATER_THAN_OR_EQUAL="gte",t.LOWER_THAN_OR_EQUAL="lte",t.EQUALS="equals",t.NOT_EQUALS="notEquals",t.ANY_OF="anyOf"})(Q||(Q={}));var S=t=>e=>!t(e),vt=t=>e=>Object.is(t,e),wt=t=>e=>e<t,yt=t=>e=>e>t,Ct=t=>e=>t===e,Zt=t=>e=>e.includes(t),Kt=t=>e=>t.includes(e),te={includes:Zt,is:vt,isNot:m(vt,S),lt:wt,gte:m(wt,S),gt:yt,lte:m(yt,S),equals:Ct,notEquals:m(Ct,S),anyOf:Kt},Gt=t=>(...e)=>t.every(r=>r(...e)),ee=({value:t="",operator:e="includes",type:r})=>{let o=Jt(r),s=m(o,te[e])(t);return m(o,s)},re=t=>{let e={};return Object.keys(t).filter(o=>Array.isArray(t[o])).forEach(o=>{let n=t[o].filter(s=>s.value!=="");n.length>0&&(e[o]=n)}),e},U=t=>{let e=re(t),r=Object.keys(e).map(n=>{let s=A(n).get,i=e[n].map(ee);return m(s,Gt(i))}),o=Gt(r);return n=>n.filter(o)};function oe(t,...e){let r=bt(t.raw[0]);for(let[n,s]of e.entries()){if(s instanceof RegExp)r+=s.source;else if(typeof s=="string")r+=ne(s);else throw new Error("Illegal substitution: "+s);r+=bt(t.raw[n+1])}let o="";if(r.startsWith("/")){let n=r.lastIndexOf("/");if(n===0)throw new Error("If the `re` string starts with a slash, it must end with a second slash and zero or more flags: "+r);o=r.slice(n+1),r=r.slice(1,n)}return new RegExp(r,o)}function bt(t){return t.replace(/\\`/g,"`")}function ne(t){return t.replace(/[\\^$.*+?()[\]{}|=!<>:-]/g,"\\$&")}var $=t=>{let{value:e,scope:r=[],escape:o=!1,flags:n=""}=t,s=r.map(a=>A(a).get);if(r.length===0||!e)return a=>a;let i=o===!0?oe`/${e}/${n}`:new RegExp(e,n);return a=>a.filter(c=>s.some(p=>i.test(String(p(c)))))};var _t=()=>{let t={},e={on(r,...o){return t[r]=(t[r]||[]).concat(o),e},dispatch(r,...o){let n=t[r]||[];for(let s of n)s(...o);return e},off(r,...o){if(r===void 0)Object.keys(t).forEach(n=>e.off(n));else{let n=t[r]||[];t[r]=o.length?n.filter(s=>!o.includes(s)):[]}return e}};return e},y=t=>({emitter:e})=>{let r={},o={off(n){return n||Object.keys(r).forEach(s=>o.off(s)),r[n]&&e.off(n,...r[n]),o}};for(let n of Object.keys(t)){let s=t[n];r[n]=[],o[s]=function(...i){return r[n]=r[n].concat(i),e.on(n,...i),o}}return o};var Lt=({page:t=1,size:e}={page:1})=>(r=[])=>{let o=e||r.length,n=(t-1)*o;return r.slice(n,n+o)},Nt;(function(t){t.TOGGLE_SORT="TOGGLE_SORT",t.DISPLAY_CHANGED="DISPLAY_CHANGED",t.PAGE_CHANGED="CHANGE_PAGE",t.EXEC_CHANGED="EXEC_CHANGED",t.FILTER_CHANGED="FILTER_CHANGED",t.SUMMARY_CHANGED="SUMMARY_CHANGED",t.SEARCH_CHANGED="SEARCH_CHANGED",t.EXEC_ERROR="EXEC_ERROR"})(Nt||(Nt={}));var T=t=>{let{get:e,set:r}=A(t);return{get:e,set:N(r)}},se=({sortFactory:t,tableState:e,data:r,filterFactory:o,searchFactory:n})=>{let s=r.length,i=r,a=_t(),c=T("sort"),p=T("slice"),f=T("filter"),E=T("search");a.on("SUMMARY_CHANGED",({filteredCount:u})=>{s=u});let Ut=u=>Object.assign({},u),rt=N(a.dispatch,2),$t=u=>(i=u,rt("SUMMARY_CHANGED",{page:e.slice.page,size:e.slice.size,filteredCount:u.length})),zt=({processingDelay:u=20}={processingDelay:20})=>{a.dispatch("EXEC_CHANGED",{working:!0}),setTimeout(()=>{try{let h=o(f.get(e)),x=n(E.get(e)),_=t(c.get(e)),R=Lt(p.get(e)),D=m(h,x,W($t),_,R)(r);a.dispatch("DISPLAY_CHANGED",D.map(nt=>({index:r.indexOf(nt),value:nt})))}catch(h){a.dispatch("EXEC_ERROR",h)}finally{a.dispatch("EXEC_CHANGED",{working:!1})}},u)},H=N((u,h,x)=>m(Ut,W(rt(h)),u.set(e))(x)),Yt=()=>H(p,"CHANGE_PAGE",Object.assign({},p.get(e),{page:1})),O=(u,h)=>{let x=m(H(u,h),Yt,()=>a.exec());return(_={})=>x(_)},qt={sort:O(c,"TOGGLE_SORT"),filter:O(f,"FILTER_CHANGED"),search:O(E,"SEARCH_CHANGED"),slice:m(H(p,"CHANGE_PAGE"),()=>a.exec()),exec:zt,async eval(u=e){let h=t(c.get(u)),x=n(E.get(u)),_=o(f.get(u)),R=Lt(p.get(u));return m(_,x,h,R)(r).map(D=>({index:r.indexOf(D),value:D}))},onDisplayChange(u){a.on("DISPLAY_CHANGED",u)},getTableState(){return JSON.parse(JSON.stringify(e))},getMatchingItems(){return[...i]}},ot=Object.assign(a,qt);return Object.defineProperties(ot,{filteredCount:{get(){return s}},length:{get(){return r.length}}}),ot},ie=y({FILTER_CHANGED:"onFilterChange"}),Dt;(function(t){t.BOOLEAN="boolean",t.NUMBER="number",t.DATE="date",t.STRING="string"})(Dt||(Dt={}));var kt=({table:t,pointer:e,operator:r="includes",type:o="string"})=>{let n=ie({emitter:t});return Object.assign({filter(s){let i=this.state();return s===void 0?delete i[e]:Object.assign(i,{[e]:[{value:s,operator:r,type:o}]}),t.filter(i)},state(){return t.getTableState().filter||{}}},n)},ae=y({SEARCH_CHANGED:"onSearchChange"}),k=({table:t,scope:e=[]})=>{let r=ae({emitter:t});return Object.assign(r,{search(o,n={}){return t.search(Object.assign({},{value:o,scope:e},n))},state(){return t.getTableState().search}},r)},ce=y({CHANGE_PAGE:"onPageChange",SUMMARY_CHANGED:"onSummaryChange"}),G=({table:t})=>{let{slice:{page:e,size:r}}=t.getTableState(),o=t.filteredCount,n=r?Math.ceil(o/r):1,s=ce({emitter:t}),i={selectPage(c){return t.slice({page:c,size:r})},selectNextPage(){return i.selectPage(e+1)},selectPreviousPage(){return i.selectPage(e-1)},changePageSize(c){return t.slice({page:1,size:c})},isPreviousPageEnabled(){return e>1},isNextPageEnabled(){return n>e},state(){return Object.assign(t.getTableState().slice,{filteredCount:o,pageCount:n})}},a=Object.assign(i,s);return a.onSummaryChange(({page:c,size:p,filteredCount:f})=>{e=c,r=p,o=f,n=r?Math.ceil(o/r):1}),a},le=(t,e)=>{let r=null;return(...o)=>{r!==null&&clearTimeout(r),r=setTimeout(()=>t(...o),e)}},pe=y({TOGGLE_SORT:"onSortToggle"}),St=["asc","desc"],Pt=({pointer:t,table:e,cycle:r=!1,debounceTime:o=0})=>{let n=r===!0?["none"].concat(St):[...St].reverse(),s=le(e.sort,o),i=0,a=pe({emitter:e}),c=Object.assign({toggle(){i++;let E=n[i%n.length];return s({pointer:t,direction:E})},state(){return e.getTableState().sort}},a);c.onSortToggle(({pointer:E})=>{i=t!==E?0:i});let{pointer:p,direction:f="asc"}=c.state();return i=p===t?f==="asc"?1:2:0,c},Ve=y({SUMMARY_CHANGED:"onSummaryChange"});var ue=y({EXEC_CHANGED:"onExecutionChange"}),Ht=({table:t})=>ue({emitter:t}),Tt=()=>({sort:{},slice:{page:1},filter:{},search:{}}),Ot=({sortFactory:t=F,filterFactory:e=U,searchFactory:r=$,tableState:o=Tt(),data:n=[]}={sortFactory:F,filterFactory:U,searchFactory:$,tableState:Tt(),data:[]},...s)=>{let i=se({sortFactory:t,filterFactory:e,tableState:o,data:n,searchFactory:r});return s.reduce((a,c)=>Object.assign(a,c({sortFactory:t,filterFactory:e,searchFactory:r,tableState:o,data:n,table:i})),i)};var Rt=({table:t,el:e})=>{let r=Ht({table:t});return r.onExecutionChange(function({working:o}){e.classList.remove("st-working"),o===!0&&e.classList.add("st-working")}),r};var It=({el:t,table:e,conf:r={}})=>{let o=r.pointer||t.getAttribute("data-st-sort"),n=r.cycle||t.hasAttribute("data-st-sort-cycle"),s=Pt({pointer:o,table:e,cycle:n});s.onSortToggle(({pointer:a,direction:c})=>{if(t.classList.remove("st-sort-asc","st-sort-desc"),o===a&&c!=="none"){let p=c==="asc"?"st-sort-asc":"st-sort-desc";t.classList.add(p)}});let i=()=>s.toggle();return t.addEventListener("click",i),s};function P(t,e){let r;return o=>{r&&clearTimeout(r),r=setTimeout(function(){t(o)},e)}}var Mt=({table:t,el:e,delay:r=400,conf:o={}})=>{let n=o.pointer||e.getAttribute("data-st-filter"),s=o.operator||e.getAttribute("data-st-filter-operator")||"includes",i=e.hasAttribute("type")?e.getAttribute("type"):"string",a=o.type||e.getAttribute("data-st-filter-type");a||(a=["date","number"].includes(i)?i:"string");let c=kt({table:t,pointer:n,type:a,operator:s}),p=P(f=>c.filter(e.value),r);return e.addEventListener("input",p),e.tagName==="SELECT"&&e.addEventListener("change",p),c};var Wt=({el:t,table:e,delay:r=400,conf:o={}})=>{let n=o.scope||(t.getAttribute("data-st-search")||"").split(",").map(c=>c.trim()),s=o.flags||t.getAttribute("data-st-search-flags")||"",i=k({table:e,scope:n}),a=P(()=>{i.search(t.value,{flags:s})},r);t.addEventListener("input",a)};var Bt=({el:t,table:e})=>{let r=(o,n)=>Array.from(t.querySelectorAll(n)).forEach(s=>o({el:s,table:e}));return r(It,"[data-st-sort]"),r(Rt,"[data-st-loading-indicator]"),r(Wt,"[data-st-search]"),r(Mt,"[data-st-filter]"),e};function z(t){return ct("tbody",t)}function me(t){return`<td>${t.slot}</td><td>${dt(t.id,t.name)}</td><td>${t.level}</td><td>${t.rank_name}</td><td>${t.gxp}</td><td>${t.activity}</td><td>${t.pack}</td><td>${t.stam}</td>`}function de(t){return t.dom||(t.dom=Et({innerHTML:me(t)})),t.dom}function Y(t,e,r){let o=t.tBodies[0],n=z();for(let s of r)n.appendChild(de(s.value));t.replaceChild(n,o)}var b=d(),X=g({innerHTML:"\xAB"}),j=g({innerHTML:"\u2039"}),Ft=g({disabled:!0,innerHTML:"1"}),V=g({innerHTML:"\u203A"}),q=g({innerHTML:"\xBB"});function he(t){let e=1,r=G({table:t});return r.onSummaryChange(({page:o,size:n,filteredCount:s})=>{X.disabled=!r.isPreviousPageEnabled(),j.disabled=!r.isPreviousPageEnabled(),V.disabled=!r.isNextPageEnabled(),q.disabled=!r.isNextPageEnabled(),w(o,Ft),e=Math.ceil(s/n)}),v(q,()=>r.selectPage(e)),r}function fe(){l(b,X),l(b,j),l(b,Ft),l(b,V),l(b,q)}function J(t,e){let r=he(e);v(X,()=>r.selectPage(1)),v(j,()=>r.selectPreviousPage()),v(V,()=>r.selectNextPage()),fe(),l(t,b)}var ge=()=>ut({dataset:{stSearch:"name, rank_name",stSearchFlags:"i"},placeholder:"Enter search term",required:!0,type:"text"});function Z(t,e){let r=d({className:"fsh-search-wrapper"}),o=ge(),n=g({innerHTML:"&times;"}),s=k({table:e});v(n,()=>{o.value="",o.focus(),s.search("")}),l(r,o),l(r,n),l(t,r)}function K(t,e){let r=At({innerHTML:'<option value="25">25</option><option value="50">50</option><option value="0" selected>All</option>'}),o=d();l(o,r),l(t,o);let n=G({table:e});st(r,"change",s=>{n.changePageSize(Number(s.target.value))})}function tt(t,e,r){let o=d();l(t,o),G({table:e}).onSummaryChange(({page:s,size:i,filteredCount:a})=>{let c=0;a&&(c=1),w(`showing ${(s-1)*i+c} - ${Math.min(a,s*i)} of ${a} (${r.length} total)`,o)})}function Ae(t,e){return e.equipped||(t[e.player_id]=t[e.player_id]||[],t[e.player_id].push(e)),t}var Ee=(t,e)=>({...e,rank_name:t}),xe=t=>t.members.map(L(Ee,t.name)),ve=t=>t.r.flatMap(xe);function we(t,e,r){return{...e,slot:r+1,name_lower:I(e.name),lvl_reverse:0-e.level,rank_lower:I(it(e.rank_name)),gxp:M(e.guild_xp),gxp_reverse:0-e.guild_xp,activity:ft(e.last_activity),act:e.last_activity-pt(),pack:(t[e.id]||[]).length,pack_reverse:0-(t[e.id]||[]).length,stam:M(e.max_stamina),stam_reverse:0-e.max_stamina}}function et([t,e]){let r=t.items.reduce(Ae,{});return ve(e).map(L(we,r))}var ye='<thead><tr><th data-st-sort="slot" class="st-sort-asc">Slot</th><th data-st-sort="name_lower">Name</th><th class="st-sort-reverse" data-st-sort="lvl_reverse">Level</th><th data-st-sort="rank_lower">Rank</th><th class="st-sort-reverse" data-st-sort="gxp_reverse">GXP</th><th class="st-sort-reverse" data-st-sort="act">Activity</th><th class="st-sort-reverse" data-st-sort="pack_reverse">Pack</th><th class="st-sort-reverse" data-st-sort="stam_reverse">Stam</th></tr></thead><tbody></tbody>',Qt=ye;function Ce(t){return l(t,gt({className:"whosGotWhat",innerHTML:Qt}))}function Ge(t){let e=l(t,d({className:"st-top-container"})),r=l(t,d()),o=Ce(r),n=l(t,d({className:"st-bottom-container"}));return{top:e,domTable:o,bottom:n}}function be(t){return Ot({data:t,tableState:{sort:{pointer:"slot",direction:"asc"},slice:{page:1,size:0},filter:{},search:{}}})}function _e(t,e,r,o){K(e,o),Z(e,o),tt(r,o,t),J(r,o)}function Le(t,e,r){let o=Bt({el:t,table:e});o.onDisplayChange(L(Y,r,e)),o.exec()}function Ne(t,e){let r=et(e);w("",t);let o=l(t,d()),{top:n,domTable:s,bottom:i}=Ge(o),a=be(r);_e(r,n,i,a),Le(o,a,s)}var De=([t,e])=>t?.guild_id&&e?.s;async function Se(){let t=at();w("Loading...",t);let e=await lt([mt(),ht()]);De(e)&&Ne(t,e)}export{Se as default};
//# sourceMappingURL=whosGotWhat-6T3SJ4L7.js.map