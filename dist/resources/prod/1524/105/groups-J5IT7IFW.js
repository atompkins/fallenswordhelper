import{a as Q}from"./chunk-AHFAIAGZ.js";import{a as _}from"./chunk-7LHJYGES.js";import{a as Y}from"./chunk-ND3QD334.js";import{a as R}from"./chunk-YNJZ43XO.js";import{a as O}from"./chunk-ELQ42VUR.js";import{b as W}from"./chunk-TPGBAKXQ.js";import{a as X}from"./chunk-KL6V3CG2.js";import{a as q}from"./chunk-TFGWERU3.js";import"./chunk-P2QGYKZ5.js";import{a as F}from"./chunk-U5XRZO3G.js";import{a as P}from"./chunk-YKSRGHW2.js";import{a as H}from"./chunk-7B4GOJM5.js";import"./chunk-TQNMSSUA.js";import{a as U}from"./chunk-GPANXWBJ.js";import{a as j}from"./chunk-DZF5XANJ.js";import"./chunk-IWZZIQBV.js";import{b as B,c as G}from"./chunk-NI4PEYNQ.js";import"./chunk-VIYL46Q6.js";import{a as D}from"./chunk-4QY6SPTZ.js";import{a as I}from"./chunk-JUGQGPY3.js";import{a as z}from"./chunk-APDUJOGK.js";import"./chunk-RN6NICJ7.js";import{a as i}from"./chunk-WP265O3M.js";import"./chunk-TZIXO72F.js";import"./chunk-I6ZSBYQ3.js";import"./chunk-YQ625XVJ.js";import"./chunk-VMCLSOZO.js";import"./chunk-PBUQY6G2.js";import{a as w}from"./chunk-GUJMNTXY.js";import"./chunk-4HVNCCW2.js";import"./chunk-LBMN7XL3.js";import"./chunk-3R32ULME.js";import"./chunk-KTI2IMEY.js";import{a as s}from"./chunk-GXOFVYKC.js";import"./chunk-LGNFNBOW.js";import"./chunk-A6LP6MUS.js";import"./chunk-K2ALIVI4.js";import{a as m}from"./chunk-Y5EGDMIB.js";import"./chunk-SNNJRQSX.js";import"./chunk-5YAX7RCO.js";import"./chunk-Z5JYB3FL.js";import"./chunk-SY2OGTK4.js";import"./chunk-MHWHHESW.js";import"./chunk-DLFQE7QF.js";import{a as J}from"./chunk-5HGBKHLV.js";import"./chunk-MZORVVMZ.js";import{a as v}from"./chunk-ZWVBDX5N.js";import"./chunk-FR27OJE5.js";import{a as N}from"./chunk-NT4BD23Z.js";import"./chunk-E3BH7XBT.js";import"./chunk-IUVEXKRJ.js";import"./chunk-WVO4VYA4.js";import{a as T}from"./chunk-C63Q3HN7.js";import{a as h}from"./chunk-FMA2QB7F.js";import"./chunk-35MRBVSX.js";import"./chunk-5UBD44K5.js";import"./chunk-AH7GU5B4.js";import"./chunk-NRW7AT6T.js";import"./chunk-DPECAWNM.js";import{a as p}from"./chunk-KOM3R443.js";import"./chunk-NIOVFM2M.js";import"./chunk-6ZCA6D63.js";import"./chunk-YXAOTQ2S.js";import{a as f}from"./chunk-V45UJIF2.js";import"./chunk-64PLTPQD.js";import"./chunk-OHAOQZFW.js";import{a as S}from"./chunk-PJWDCLVE.js";import{a as u}from"./chunk-SSAI4GAC.js";import{a}from"./chunk-JCK66TTB.js";import"./chunk-SY4ES3W2.js";import{c as d}from"./chunk-R7J7NY4A.js";import{S as E,d as M,e as k,n as $,y as C}from"./chunk-5ELKH2XV.js";import"./chunk-5ORZS6IQ.js";import"./chunk-BRQN5OZB.js";import{a as g}from"./chunk-BZJZQFW2.js";import{a as c}from"./chunk-QCTVAEOV.js";import{a as A}from"./chunk-VQDTHLUC.js";function tt(t,r){let o=z(),e=q({className:"fshBl fshBls",textContent:t});return a(e,n=>{n.target.blur(),P(`${E}&players=${r}`,"fsQuickBuff",618,1e3,",scrollbars"),m("doBuffLinks",t)}),s(o,e),o}function rt(t,r,o){return s(t,tt(`Buff ${M[o]} 16`,r.join(","))),t}function b(t){let r=O(16,t),o=I();return r.reduce(rt,o)}var ot=/(?<day>[a-zA-Z]{3}), (?<date>\d{1,2}) (?<month>[a-zA-Z]{3}) (?<hr>\d{1,2}):(?<min>\d{2}):(?<sec>\d{2}) UTC/,V=(t,r)=>t?.[r]?.level??0,et=(t,r,o)=>V(t,o)-V(t,r),nt=t=>t!=="[none]"&&t.indexOf("<font")===-1;function it(t){let r=new Date().getFullYear();return k[new Date().getMonth()]==="Dec"&&t==="Jan"&&(r+=1),r}function st([,,t,r,o,e]){return new Date(j([it(r),r,t,o,e]))}function mt(t){let r=t.cells[3],o=A(ot,p(r));i(r,`<br><span class="fshBlue fshXSmall">Local: ${st(o).toString().slice(0,21)}</span>`)}function at(t,r){let o=p(r.children[0]);return t?.[o]?`${J({last_login:t[o].last_login})}&nbsp;<a href="${C}${t[o].id}"><b>${o}</b></a> [${t[o].level}]`:`<b>${o}</b>`}function ft(t,r){let o=v(r.innerHTML);return o.length>1&&o.sort(g(et,t)),o}function pt(t,r){let o=r.filter(nt);o.length>0&&s(t,b(o)),i(t,`<span class="fshXSmall">Members: ${o.length}</span>`)}function ct(t,r,o){let e=o.map(g(_,t));u(`<span>${e.join(", ")}</span>`,r)}function ut(t,r){let o=r.cells[0];u(at(t,o),o);let e=r.cells[1],n=ft(t,e);pt(o,n),ct(t,e,n),mt(r)}function L(t){let r=d("betaOptIn");r&&B("groups.doGroupPaint"),D("group-action-container").map(o=>F(o)).forEach(g(ut,t)),r&&G("groups.doGroupPaint")}function l(t,r){let o=U({className:"custombutton",type:"button",value:r});return i(t,"&nbsp;"),s(t,o),o}function lt(t){return`<div class="fshgrpstat"><div>Attack</div><div>${t[0]}</div><div>Defense</div><div>${t[1]}</div><div>Armor</div><div>${t[2]}</div><div>Damage</div><div>${t[4]}</div><div>HP</div><div>${t[3]}</div></div>`}async function dt(t){let r=Q(t),o=await R(r);if(o?.r?.attributes){let e=W(o.r.attributes),n=t.parentNode.parentNode.previousElementSibling;i(n,lt(e))}}function ht(t){m("groups","fetchGroupData");let{target:r}=t;r.disabled=!0,f('#pCC a[href*="=viewstats&"]').forEach(dt)}function x(t){t.classList.add("fshRelative");let r=l(t,"Fetch Group Stats");r.style.position="absolute",a(r,ht)}function gt(t){return!t.includes("#000099")}function vt(t){u('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}async function bt(t,r){await T({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}),vt(r)}function Lt(t){let r=t.parentNode.parentNode.parentNode.cells[1];if(v(p(r)).filter(gt).length<c.maxGroupSizeToJoin){let n=w({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}});t.parentNode.replaceChild(n,t);let K=S(/confirmJoin\((?<id>\d+)\)/,t.href);bt(K,n)}}function Z(){m("groups","joinAllGroupsUnderSize"),f('#pCC a[href*="confirmJoin"]').forEach(Lt)}function xt(t){let r=l(t,`Join All Groups < ${c.maxGroupSizeToJoin} Members`);a(r,Z)}function y(t){let r=t.parentNode;c.enableMaxGroupSizeToJoin&&(H(t),xt(r)),x(r),c.subcmd2===$&&Z()}function yt(){let t=d("minGroupLevel");if(t){let r=h('#pCC table[width="650"]');X(h("br",r),`<span class="fshBlue"> Current Min Level Setting: ${t}</span>`)}}function At(){let t=f("#pCC td.header-dark");t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}async function St(){if(N())return;let t=h('#pCC input[value="Join All Available Groups"]');if(!t)return;let r=Y(!1);yt(),y(t),At();let o=await r;o&&L(o)}export{St as default};
//# sourceMappingURL=groups-J5IT7IFW.js.map