import{a as c}from"./chunk-W6VH3FBG.js";import{a as u}from"./chunk-OOC5IQKK.js";import{a as g,b as y}from"./chunk-SQF4QAHR.js";import"./chunk-PYN75CND.js";import{a as m}from"./chunk-XVPP3QXG.js";import{a as p}from"./chunk-7WQ5UNSS.js";import"./chunk-4IQVGLAY.js";import"./chunk-IWOUKZIP.js";import"./chunk-R63U7AZ3.js";import"./chunk-NZDFBLRQ.js";import{a as s}from"./chunk-IH6ZKMJ6.js";import"./chunk-DLFJWHV6.js";import"./chunk-6SYTCZ5G.js";import"./chunk-4JYNGGXH.js";import"./chunk-C257UEHM.js";import"./chunk-VDZHRZJL.js";import"./chunk-KU5JAIEB.js";import{a as l}from"./chunk-N7M4WPYO.js";import"./chunk-BGM7VCLD.js";import{a as f}from"./chunk-MK3UHL4H.js";import"./chunk-PCHFEFT4.js";import"./chunk-CEFYYGFM.js";import"./chunk-3E53RUR7.js";import{c as d}from"./chunk-5D3DZNMD.js";import"./chunk-B3TUML6P.js";import"./chunk-U2JBD6QP.js";import"./chunk-VVTHM3UH.js";import"./chunk-34VPQFZA.js";function a(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}var h=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],G=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]];function M(e){let t=m(e);return t?t.map(u).map(s):[]}function x(e){let t=G.map(([r,n])=>[M(r),n]),i=u(s(e)),o=t.find(([r])=>r.includes(i));if(o)return o[1]}function R(e){return y()?(f("guildSelf",l(e)),"self"):x(l(e))}function S(e,t){let[,i,o]=h.find(([n])=>n===t);e.parentNode.classList.add(i);let r=d(o);r&&r.length>0&&p(e.parentNode,`<br>${a(r)}`)}function b(e){let t=R(e);t&&S(e,t)}function A(){let e=g();e?b(e):c()&&f("guildSelf","")}export{A as default};
//# sourceMappingURL=profileInjectGuildRel-6QT5S7RL.js.map