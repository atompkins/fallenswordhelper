import{a as J,b as N}from"./chunk-TPZ74IFY.js";import"./chunk-4ZPTRNXM.js";import"./chunk-C3GJHVFM.js";import"./chunk-U56W3WSX.js";import{a as k}from"./chunk-ZUSBLSDR.js";import{a as w}from"./chunk-DDSPWTMT.js";import"./chunk-AIM2MBEX.js";import"./chunk-5SCRNAHJ.js";import{a as $}from"./chunk-76GNI4LS.js";import"./chunk-HAERI52L.js";import"./chunk-YYCPK2ZW.js";import{a as D}from"./chunk-HGOBQD7Z.js";import"./chunk-X2TXN5H7.js";import{b as E,c as U}from"./chunk-JUFLO3BT.js";import"./chunk-GQULZ2HO.js";import"./chunk-5T5SVQRR.js";import{a as T}from"./chunk-KTCUHC46.js";import{a as o}from"./chunk-ORWNE4WN.js";import"./chunk-TANNOBPR.js";import{a as x}from"./chunk-BKJXISW2.js";import{a as m}from"./chunk-MZYLPE6K.js";import"./chunk-QRYRLQTR.js";import{b as B}from"./chunk-WXLINGDG.js";import{a as h}from"./chunk-AID3LCGH.js";import{a as A}from"./chunk-VRFSPHR2.js";import{a as s}from"./chunk-GHI2YFAT.js";import"./chunk-NHD5GMUM.js";import"./chunk-BQN7JNLT.js";import"./chunk-3ABW5FNN.js";import"./chunk-4F7DNDA4.js";import"./chunk-3AY3EB3C.js";import"./chunk-46E7CLT6.js";import"./chunk-4TGPNPDH.js";import{a as v}from"./chunk-DGS2WOJV.js";import"./chunk-AXEF7ZPS.js";import"./chunk-GPIGDOJJ.js";import"./chunk-SGSSGBJU.js";import{a as p}from"./chunk-L2F37LJS.js";import"./chunk-RSW3SDQ5.js";import{a as M}from"./chunk-SUTTQBC4.js";import{a as u}from"./chunk-O7BO2JV6.js";import"./chunk-K4FZKNLQ.js";import"./chunk-CSUXSLMM.js";import"./chunk-OHRM7A4V.js";import{a as n}from"./chunk-TDFIT7OX.js";import"./chunk-I42VMRRO.js";import"./chunk-4OB64LT4.js";import"./chunk-UQIKKMNB.js";import"./chunk-UE3DRZE6.js";import"./chunk-JUEI6MIM.js";import"./chunk-REO2URTO.js";import{a as y}from"./chunk-NH6DTJ4R.js";import{a as d}from"./chunk-JFPNT65R.js";import{b as c}from"./chunk-ELGHA2UY.js";import"./chunk-G5IZBOBE.js";import"./chunk-QKN4UTNB.js";import"./chunk-VOOMRXTQ.js";import"./chunk-XAE2ZLZO.js";import{e as g,l as G,x as b}from"./chunk-L5JB47YP.js";import{a as f}from"./chunk-M4AU23DF.js";var I=/([a-zA-Z]{3}), (\d{1,2}) ([a-zA-Z]{3}) (\d{1,2}):(\d{2}):(\d{2}) UTC/;function P(t){let r=new Date().getFullYear();return g[new Date().getMonth()]==="Dec"&&t==="Jan"&&(r+=1),r}function q(t){let r=new Date;return r.setUTCDate(t[2]),r.setUTCMonth(g.indexOf(t[3])),r.setUTCFullYear(P(t[3])),r.setUTCHours(t[4]),r.setUTCMinutes(t[5]),r}function F(t){let r=t.cells[3],e=I.exec(p(r));o(r,`<br><span class="fshBlue fshXSmall">Local: ${q(e).toString().substr(0,21)}</span>`)}function O(t,r){let e=p(r.children[0]);return t[e]?`${B({last_login:t[e].last_login})}&nbsp;<a href="${b}${t[e].id}"><b>${e}</b></a> [${t[e].level}]`:`<b>${e}</b>`}function H(t,r){return t[r]?t[r].level:0}function W(t,r,e){return H(t,e)-H(t,r)}function Y(t,r){return t[r]?`<a href="${b}${t[r].id}">${r}</a>`:r}function j(t,r){let e=h(r.innerHTML);return e.length>1&&e.sort(n(W,t)),e}function X(t){return t!=="[none]"&&t.indexOf("<font")===-1}function _(t,r){let e=r.filter(X);e.length>0&&m(t,J(e)),o(t,`<span class="fshXSmall">Members: ${e.length}</span>`)}function V(t,r,e){let i=e.map(n(Y,t));u(`<span>${i.join(", ")}</span>`,r)}function Z(t,r){let e=r.cells[0];u(O(t,e),e);let i=r.cells[1],a=j(t,i);_(e,a),V(t,i,a),F(r)}function S(t){let r=c("betaOptIn");r&&E("groups.doGroupPaint"),y("group-action-container").map(e=>w(e)).forEach(n(Z,t)),r&&U("groups.doGroupPaint")}function l(t,r){let e=$({className:"custombutton",type:"button",value:r});return o(t,"&nbsp;"),m(t,e),e}function Q(t,r){let e=`<table class="fshgrpstat"><tr><td class="fshBrown">Attack</td><td class="fshRight">${r.attack}</td><td class="fshBrown">Defense</td><td class="fshRight">${r.defense}</td></tr><tr><td class="fshBrown">Armor</td><td class="fshRight">${r.armor}</td><td class="fshBrown">Damage</td><td class="fshRight">${r.damage}</td></tr><tr><td class="fshBrown">HP</td><td class="fshRight">${r.hp}</td><td colspan="2"></td></tr></table>`,i=t.parentNode.parentNode.previousElementSibling;o(i,e)}function K(t){N(t.href).then(n(Q,t))}function tt(t){t.target.disabled=!0,s('#pCC a[href*="=viewstats&"]').forEach(K)}function L(t){let r=l(t,"Fetch Group Stats");d(r,tt)}function rt(t){return!t.includes("#000099")}function et(t){u('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}function ot(t,r){v({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}).then(n(et,r))}function nt(t){let r=t.parentNode.parentNode.parentNode.cells[1];if(h(p(r)).filter(rt).length<f.maxGroupSizeToJoin){let a=x({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}});t.parentNode.replaceChild(a,t);let R=/confirmJoin\((\d+)\)/.exec(t.href)[1];ot(R,a)}}function z(){T("groups","joinAllGroupsUnderSize"),s('#pCC a[href*="confirmJoin"]').forEach(nt)}function it(t){let r=l(t,`Join All Groups < ${f.maxGroupSizeToJoin} Members`);d(r,z)}function C(t){let r=t.parentNode;f.enableMaxGroupSizeToJoin&&(D(t),it(r)),L(r),f.subcmd2===G&&z()}function st(){let t=c("minGroupLevel");t&&o(A("#pCC > table > tbody > tr > td > table td"),`<div class="fshBlue"> Current Min Level Setting: ${t}</div>`)}function at(){let t=s("#pCC td.header-dark");t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}function ft(){if(M())return;let t=A('#pCC input[value="Join All Available Groups"]');!t||(k(!1).then(S),st(),C(t),at())}export{ft as default};
//# sourceMappingURL=groups-6X34GE52.js.map