import{a as c}from"./chunk-HE2DIFVT.js";import{a as f}from"./chunk-GXJRUWMF.js";import{a as y}from"./chunk-VD6II6W6.js";import"./chunk-BZJTPYZA.js";import{a as p,b as g}from"./chunk-ANJ6HGXU.js";import"./chunk-TNFAI2SM.js";import{a as u}from"./chunk-K642R3NL.js";import"./chunk-6DEPOJJJ.js";import"./chunk-5HIH63DD.js";import"./chunk-HXSV6HQN.js";import{a as l}from"./chunk-GWMHXCGO.js";import{a as m}from"./chunk-YZLKCQP2.js";import"./chunk-KXW7HYGX.js";import"./chunk-IYHXDIFW.js";import"./chunk-NH3HITNH.js";import"./chunk-AIP6BPK2.js";import"./chunk-EQPMHYZD.js";import{a}from"./chunk-C34SKZ6F.js";import"./chunk-TMODYEZT.js";import"./chunk-H6KXMG2X.js";import"./chunk-SRX5YX5V.js";import"./chunk-A6IIWQBH.js";import{a as s}from"./chunk-MC5JUWDN.js";import{b as d}from"./chunk-AACPE6UD.js";import"./chunk-SCZYWGQD.js";import"./chunk-AMPLIILU.js";import"./chunk-7JEA3TWT.js";import"./chunk-5BRYW4V3.js";var h=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],G=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]];function M(e){let t=y(e);return t?t.map(f).map(l):[]}function S(e){let t=G.map(([o,i])=>[M(o),i]),n=f(l(e)),r=t.find(([o])=>o.includes(n));if(r)return r[1]}function b(e){return g()?(m("guildSelf",s(e)),"self"):S(s(e))}function x(e,t){let[,n,r]=h.find(([i])=>i===t);e.parentNode.classList.add(n);let o=d(r);o&&o.length>0&&a(e.parentNode,`<br>${u(o)}`)}function A(e){let t=b(e);t&&x(e,t)}function I(){let e=p();e?A(e):c()&&m("guildSelf","")}export{I as default};
//# sourceMappingURL=profileInjectGuildRel-CAVNPH4U.js.map
