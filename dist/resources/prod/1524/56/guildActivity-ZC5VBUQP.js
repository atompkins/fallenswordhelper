import{a as y,b as c}from"./chunk-Z2DJKIU6.js";import"./chunk-MN3CDWN5.js";import"./chunk-IU6UWEI6.js";import"./chunk-CVACGNW6.js";import{a as m,b as p,c as d,d as g,e as o,f as v,g as h}from"./chunk-ZMXQCVJR.js";import{a as u,b as f}from"./chunk-6AYIUHMJ.js";import"./chunk-VXPED75B.js";import"./chunk-PPWSFVIU.js";import"./chunk-DZUNDM2W.js";import{b as a}from"./chunk-PRVNUO5J.js";import"./chunk-BUIH7NDX.js";import"./chunk-AVPY2BTL.js";import"./chunk-2FGL6JOK.js";import"./chunk-GJHRXFGS.js";import"./chunk-ACUTGVKN.js";import{a as l}from"./chunk-KETFGQQM.js";import"./chunk-7PZO5YGA.js";import"./chunk-FE2N6NBD.js";import"./chunk-DNX7LBBK.js";import"./chunk-QAXNXWWI.js";import"./chunk-KHAKP3NJ.js";import"./chunk-LJXKCPK7.js";import"./chunk-CDQY3GPS.js";import"./chunk-E66CENYR.js";import"./chunk-7XYKFTOV.js";import"./chunk-EDPHPGYE.js";import"./chunk-HSGQLATB.js";import"./chunk-JYV3Y4PK.js";import"./chunk-VYOJRJTP.js";import"./chunk-IZEIZGGY.js";import"./chunk-H4RRBTG7.js";import"./chunk-D4RSYPIY.js";import"./chunk-SQ3ABL2K.js";import"./chunk-S2PPJ2GD.js";import"./chunk-MIGTOE2L.js";import"./chunk-UYUWQQUH.js";import"./chunk-FMIILUE6.js";import"./chunk-XSTNX5IW.js";import"./chunk-UVCMQZY6.js";import{a as e}from"./chunk-NGIDL4MJ.js";var n,A;function _(t){n.members[t.name].push([c(t.last_activity),t.current_stamina,t.level,t.max_stamina,a,t.vl,t.guild_xp])}function x(t){n.members[t.name]||(n.members[t.name]=[],_(t))}var M=[(t,i)=>i.current_stamina!==t[p],(t,i)=>i.max_stamina>t[g],(t,i)=>i.level!==t[d],(t,i)=>i.vl!==t[v],(t,i)=>i.guild_xp!==t[h]];function k(t,i,s){return s(t,i)}function w(t,i){return M.some(e(k,t,i))}function G(t,i){w(t,i)?_(i):(t[m]=c(i.last_activity),t[o]=a)}function T(t,i){x(i);let s=n.members[i.name],r=s[s.length-1];a-r[o]>=86100&&G(r,i),t.members[i.name]=n.members[i.name]}function U(t,i){i.members.forEach(e(T,t))}function C(){let t={lastUpdate:a,members:{}};A.r.ranks.forEach(e(U,t)),f("fsh_guildActivity",t)}function D(t){t&&t.r&&(A=t,C())}function E(t){t?n=t:n={lastUpdate:0,members:{}},a>l(n.lastUpdate,0)+300&&y().then(D)}function R(){u("fsh_guildActivity").then(E)}export{R as default};
//# sourceMappingURL=guildActivity-ZC5VBUQP.js.map
