import{a as c}from"./chunk-YI75D4MD.js";import{a as u}from"./chunk-NVTSXEA5.js";import{a as g,b as y}from"./chunk-BZHBG2CW.js";import"./chunk-57XMKH23.js";import{a as p}from"./chunk-7O6RTE4H.js";import{a}from"./chunk-FHWKHTT4.js";import{a as d}from"./chunk-AYJMSZTJ.js";import"./chunk-343LUOT5.js";import"./chunk-UJQQGEHN.js";import"./chunk-B7LFTZU7.js";import{a as f}from"./chunk-6OVIAZ3T.js";import"./chunk-4DD6XIWS.js";import"./chunk-HWIYLISZ.js";import"./chunk-3MHFN2TP.js";import"./chunk-MCKHXS6I.js";import"./chunk-5WB4S5KU.js";import"./chunk-QCGEDCXW.js";import"./chunk-Z6NEFCOZ.js";import{a as l}from"./chunk-NPK42VJ3.js";import{a as s}from"./chunk-CR72M4ZA.js";import"./chunk-R2ELQJ5E.js";import"./chunk-IGXYBCKR.js";import"./chunk-MVFZMXTS.js";import"./chunk-PJNUKY76.js";import{b as m}from"./chunk-7BHYTCY7.js";import"./chunk-QXT6DFLJ.js";import"./chunk-SHG4I62I.js";import"./chunk-MA33RQLF.js";import"./chunk-CHNXGBZZ.js";var h=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],G=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]];function M(e){let t=p(e);return t?t.map(u).map(f):[]}function R(e){let t=G.map(([i,n])=>[M(i),n]),o=u(f(e)),r=t.find(([i])=>i.includes(o));if(r)return r[1]}function S(e){return y()?(s("guildSelf",l(e)),"self"):R(l(e))}function b(e,t){let[,o,r]=h.find(([n])=>n===t);e.parentNode.classList.add(o);let i=m(r);i&&i.length>0&&d(e.parentNode,`<br>${a(i)}`)}function x(e){let t=S(e);t&&b(e,t)}function A(){let e=g();e?x(e):c()&&s("guildSelf","")}export{A as default};
//# sourceMappingURL=profileInjectGuildRel-JW6HLOYO.js.map