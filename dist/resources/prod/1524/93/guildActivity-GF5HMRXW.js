import{a as r}from"./chunk-YB4MHUFM.js";import{a as m}from"./chunk-ERVEJANH.js";import"./chunk-C2TNKOHY.js";import"./chunk-OFVL4Q2L.js";import"./chunk-76ARFLBC.js";import"./chunk-FSSBYC3E.js";import"./chunk-D6NHBHDF.js";import"./chunk-ICOENCHJ.js";import"./chunk-3IBYGSL2.js";import"./chunk-ATELUZSH.js";import"./chunk-GOQRAVSB.js";import"./chunk-4463IFOY.js";import"./chunk-EGS4CZL3.js";import"./chunk-SDYIYOUC.js";import"./chunk-D2RKZAOL.js";import{a as c}from"./chunk-MI5ERUAI.js";import"./chunk-L4JCGVZD.js";import"./chunk-R5QRYD7G.js";import"./chunk-RDAHQVBW.js";import"./chunk-Z6KB7KN6.js";import"./chunk-DP37WUXB.js";import"./chunk-MT2H2XVD.js";import"./chunk-LGDJTMPN.js";import"./chunk-GKVMJ4PA.js";import{a as f,b as l}from"./chunk-KCGDJ5EJ.js";import"./chunk-6ME2NWD5.js";import"./chunk-IFV2NFCC.js";import"./chunk-NH6FAU6Q.js";import"./chunk-LEOH7BX4.js";import{d as a}from"./chunk-WFI3HTBS.js";import"./chunk-5RFQSTDG.js";import"./chunk-4MID3VOD.js";import{a as o}from"./chunk-HYLQEGZ4.js";import"./chunk-7I6ASYKS.js";import"./chunk-R2OFDU54.js";import"./chunk-CEGJSIVU.js";import"./chunk-G6TPLPCG.js";import"./chunk-IMGI5UI2.js";import"./chunk-E53ZSUER.js";import"./chunk-UYN3LUIY.js";import"./chunk-U6BMTRHL.js";import"./chunk-3WE6KSRQ.js";var n=0;function p(t){n.members[t.name].push([r(t.last_activity),t.current_stamina,t.level,t.max_stamina,a(),t.vl,t.guild_xp])}function _(t){n.members[t.name]||(n.members[t.name]=[],p(t))}var x=[(t,i)=>i.current_stamina!==t[1],(t,i)=>i.max_stamina>t[3],(t,i)=>i.level!==t[2],(t,i)=>i.vl!==t[5],(t,i)=>i.guild_xp!==t[6]];function w(t,i,e){return e(t,i)}function M(t,i){return x.some(o(w,t,i))}function k(t,i){M(t,i)?p(i):(t[0]=r(i.last_activity),t[4]=a())}function D(t,i){_(i);let e=n.members[i.name],s=e[e.length-1];a()-s[4]>=86100&&k(s,i),t.members[i.name]=n.members[i.name]}function E(t,i){i.members.forEach(o(D,t))}function U(t){let i={lastUpdate:a(),members:{}};t.r.forEach(o(E,i)),l("fsh_guildActivity",i)}function R(t){t?.r&&U(t)}function b(t){return t??{lastUpdate:0,members:{}}}async function j(t){if(n=b(t),a()>c(n.lastUpdate,0)+300){let i=await m();R(i)}}async function C(){let t=await f("fsh_guildActivity");j(t)}export{C as default};
//# sourceMappingURL=guildActivity-GF5HMRXW.js.map