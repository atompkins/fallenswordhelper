import{a as r}from"./chunk-FDNN4IQC.js";import{a as m}from"./chunk-ZPDQL43E.js";import"./chunk-CWRP6LT4.js";import"./chunk-FWL2OWGY.js";import"./chunk-X2QJ4F75.js";import"./chunk-CKXQAU55.js";import"./chunk-FYGIUDI3.js";import"./chunk-HWYE7S2C.js";import"./chunk-OBOTJWUG.js";import"./chunk-C7PIQX7O.js";import"./chunk-H6PS5VCQ.js";import"./chunk-6ZR46QZG.js";import"./chunk-3VMUJXQR.js";import"./chunk-AEWB35UI.js";import"./chunk-YVQ6M3EW.js";import{d as a}from"./chunk-N47W3DMT.js";import"./chunk-XDV7LM6Z.js";import"./chunk-PNTHXLML.js";import{a as c}from"./chunk-XLAUK3YC.js";import"./chunk-MFXNKIYL.js";import"./chunk-2XKKIH7K.js";import"./chunk-JZI3CAHX.js";import"./chunk-L5KUFFVQ.js";import"./chunk-UYGGJ3YF.js";import"./chunk-EE5B6X24.js";import"./chunk-CCHDXXIW.js";import"./chunk-LWLVQTKS.js";import"./chunk-WBTHTD34.js";import"./chunk-PF3P35LS.js";import{a as o}from"./chunk-G34A357Q.js";import{a as f,b as l}from"./chunk-QL5YK4M4.js";import"./chunk-6YD7W4E5.js";import"./chunk-FEFVGSP2.js";import"./chunk-EJENCRJV.js";import"./chunk-IWCA3B2P.js";import"./chunk-EEF6C5L4.js";import"./chunk-SVYRHE6Z.js";import"./chunk-OIO6LGXZ.js";import"./chunk-KWAUBU52.js";import"./chunk-TISVYXYU.js";import"./chunk-S3EM322F.js";var n=0;function p(t){n.members[t.name].push([r(t.last_activity),t.current_stamina,t.level,t.max_stamina,a(),t.vl,t.guild_xp])}function _(t){n.members[t.name]||(n.members[t.name]=[],p(t))}var x=[(t,i)=>i.current_stamina!==t[1],(t,i)=>i.max_stamina>t[3],(t,i)=>i.level!==t[2],(t,i)=>i.vl!==t[5],(t,i)=>i.guild_xp!==t[6]];function w(t,i,e){return e(t,i)}function M(t,i){return x.some(o(w,t,i))}function k(t,i){M(t,i)?p(i):(t[0]=r(i.last_activity),t[4]=a())}function D(t,i){_(i);let e=n.members[i.name],s=e[e.length-1];a()-s[4]>=86100&&k(s,i),t.members[i.name]=n.members[i.name]}function E(t,i){i.members.forEach(o(D,t))}function U(t){let i={lastUpdate:a(),members:{}};t.r.forEach(o(E,i)),l("fsh_guildActivity",i)}function R(t){t?.r&&U(t)}function b(t){return t??{lastUpdate:0,members:{}}}async function j(t){if(n=b(t),a()>c(n.lastUpdate,0)+300){let i=await m();R(i)}}async function C(){let t=await f("fsh_guildActivity");j(t)}export{C as default};
//# sourceMappingURL=guildActivity-U3OQ3KIW.js.map
