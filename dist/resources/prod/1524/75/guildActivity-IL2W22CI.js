import{a as c}from"./chunk-QMMCMDJW.js";import{a as u}from"./chunk-R5YXB5HK.js";import"./chunk-DXFHZD46.js";import"./chunk-DDSPWTMT.js";import"./chunk-AIM2MBEX.js";import"./chunk-USNINFIO.js";import"./chunk-X2OM7PVC.js";import"./chunk-GHI2YFAT.js";import"./chunk-NHD5GMUM.js";import"./chunk-6FE7TFOW.js";import"./chunk-BQN7JNLT.js";import"./chunk-3ABW5FNN.js";import"./chunk-3AY3EB3C.js";import"./chunk-46E7CLT6.js";import"./chunk-4TGPNPDH.js";import"./chunk-DGS2WOJV.js";import{b as a}from"./chunk-AXEF7ZPS.js";import"./chunk-GPIGDOJJ.js";import"./chunk-SGSSGBJU.js";import"./chunk-L2F37LJS.js";import"./chunk-RSW3SDQ5.js";import"./chunk-Q2OGYUCV.js";import{a as r}from"./chunk-5CGQ343C.js";import"./chunk-CSUXSLMM.js";import"./chunk-OHRM7A4V.js";import{a as o}from"./chunk-TDFIT7OX.js";import{a as f,b as l}from"./chunk-I42VMRRO.js";import"./chunk-4OB64LT4.js";import"./chunk-JUEI6MIM.js";import"./chunk-REO2URTO.js";import"./chunk-ELGHA2UY.js";import"./chunk-G5IZBOBE.js";import"./chunk-QKN4UTNB.js";import"./chunk-XAE2ZLZO.js";import"./chunk-L5JB47YP.js";import"./chunk-M4AU23DF.js";var n=0;function p(t){n.members[t.name].push([c(t.last_activity),t.current_stamina,t.level,t.max_stamina,a,t.vl,t.guild_xp])}function A(t){n.members[t.name]||(n.members[t.name]=[],p(t))}var x=[(t,i)=>i.current_stamina!==t[1],(t,i)=>i.max_stamina>t[3],(t,i)=>i.level!==t[2],(t,i)=>i.vl!==t[5],(t,i)=>i.guild_xp!==t[6]];function w(t,i,s){return s(t,i)}function M(t,i){return x.some(o(w,t,i))}function k(t,i){M(t,i)?p(i):(t[0]=c(i.last_activity),t[4]=a)}function U(t,i){A(i);let s=n.members[i.name],e=s[s.length-1];a-e[4]>=86100&&k(e,i),t.members[i.name]=n.members[i.name]}function E(t,i){i.members.forEach(o(U,t))}function R(t){let i={lastUpdate:a,members:{}};t.r.forEach(o(E,i)),l("fsh_guildActivity",i)}function j(t){t?.r&&R(t)}async function C(t){if(n=t??{lastUpdate:0,members:{}},a>r(n.lastUpdate,0)+300){let i=await u();j(i)}}async function D(){let t=await f("fsh_guildActivity");C(t)}export{D as default};
//# sourceMappingURL=guildActivity-IL2W22CI.js.map