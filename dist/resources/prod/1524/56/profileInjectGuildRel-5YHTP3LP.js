import{a as c}from"./chunk-AIOFZ3HX.js";import{a as f}from"./chunk-QXNBEA4H.js";import{a as y}from"./chunk-BOYBHYC4.js";import"./chunk-POGZRGFB.js";import{a as p,b as g}from"./chunk-VO36SKSG.js";import"./chunk-SO2LXJJC.js";import{a as u}from"./chunk-4CTWQMBJ.js";import"./chunk-DZUNDM2W.js";import"./chunk-KARVP4IF.js";import"./chunk-2AYZ6V4F.js";import{a as l}from"./chunk-7ET2CA5W.js";import{a as m}from"./chunk-ZQ6Q7AAO.js";import"./chunk-XBQPITPX.js";import"./chunk-GD4HMFZG.js";import"./chunk-BUIH7NDX.js";import"./chunk-2FGL6JOK.js";import"./chunk-GJHRXFGS.js";import{a}from"./chunk-JZUIGPQK.js";import"./chunk-E7LHQKU5.js";import"./chunk-ACUTGVKN.js";import"./chunk-VYOJRJTP.js";import"./chunk-SQ3ABL2K.js";import{a as s}from"./chunk-S2PPJ2GD.js";import{b as d}from"./chunk-MIGTOE2L.js";import"./chunk-UYUWQQUH.js";import"./chunk-FMIILUE6.js";import"./chunk-XSTNX5IW.js";import"./chunk-UVCMQZY6.js";var h=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],G=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]];function M(e){let t=y(e);return t?t.map(f).map(l):[]}function S(e){let t=G.map(([o,i])=>[M(o),i]),n=f(l(e)),r=t.find(([o])=>o.includes(n));if(r)return r[1]}function b(e){return g()?(m("guildSelf",s(e)),"self"):S(s(e))}function x(e,t){let[,n,r]=h.find(([i])=>i===t);e.parentNode.classList.add(n);let o=d(r);o&&o.length>0&&a(e.parentNode,`<br>${u(o)}`)}function A(e){let t=b(e);t&&x(e,t)}function I(){let e=p();e?A(e):c()&&m("guildSelf","")}export{I as default};
//# sourceMappingURL=profileInjectGuildRel-5YHTP3LP.js.map