import{a as U}from"./chunk-GW25P4IK.js";import{a as x}from"./chunk-VBC4CV4M.js";import{a as p}from"./chunk-YTNAFSD6.js";import"./chunk-ASBA3QDL.js";import{a as v}from"./chunk-ZZFUN4A2.js";import{a as y}from"./chunk-4Y6HJDKQ.js";import{a as L}from"./chunk-IXDXLPIY.js";import{a}from"./chunk-SRVOPMOR.js";import"./chunk-N4PCIVE3.js";import{a as k}from"./chunk-XVTH24AL.js";import"./chunk-5AWGL262.js";import{a as T}from"./chunk-KX7QOYLT.js";import"./chunk-D4AVXNRB.js";import"./chunk-W5AN4HHX.js";import{b as n}from"./chunk-FJXTYPNU.js";import"./chunk-RVP3BZF7.js";import"./chunk-X7GADBEU.js";import{a as c}from"./chunk-4GU2HJD7.js";import{a as g}from"./chunk-PJX66I2Y.js";import"./chunk-WLWXTJVR.js";import"./chunk-YYW2XVVC.js";import"./chunk-LGXHSUMA.js";import{a as w}from"./chunk-N7DXDYBU.js";import"./chunk-DZSOBYW3.js";import{a as C}from"./chunk-DARUUDAY.js";import"./chunk-2T7366JB.js";import"./chunk-RGSHZW7Q.js";import"./chunk-7VVRRHE4.js";import"./chunk-OQC4RYIZ.js";import{b as r}from"./chunk-AVWEVNGS.js";import"./chunk-6C22U5JX.js";import{V as i,W as m,Y as s,ua as f}from"./chunk-3DLQUZR2.js";import{a as h}from"./chunk-BUBKPU26.js";import"./chunk-4P22QABU.js";var _=e=>`${s}creatures&search_name=${encodeURIComponent(e)}`,$=/(?<a> titan has been spotted in )(?<b>[^!]+)(?<c>!)/,P=e=>`${s}realms&search_name=${encodeURIComponent(e)}`,b=e=>`<a href="${P(e)}" target="_blank">${e}</a>`;function E(e){let t=U(e);if(!t)return;let o=y({href:_(t.split("(")[0].trim()),target:"_blank"});L(o,e),k(o,e)}function S(e){return $.test(e.lastChild.nodeValue)}function H(e){let t=h($,e.lastChild.nodeValue);return t[2]=b(t[2]),t.slice(1).join("")}function V(e){let t=e.children[0];t.href=_(t.textContent),t.target="_blank"}function R(e){V(e);let t=v({innerHTML:H(e)});e.replaceChild(t,e.lastChild)}function d(){C('.news_body img[src*="/creatures/"]').forEach(E),a("news_body_tavern",n()).filter(S).forEach(R)}var A=(e,t)=>`&nbsp;<a href="${e}&page=2">View ${t} Page 2</a>`;function l(){let e=c(`#pCC a[href="${i}"]`);if(!e)return;p(e,A(i,"Updates"));let t=c(`#pCC a[href="${m}"]`);p(t,A(m,"News"))}var N=e=>T("PvP Ladder",e.children[1]),j=e=>x(g(e.children[2]));function u(){let t=a("news_head_tavern",n()).filter(N).map(j),o=Math.max.apply(null,t);o>r(f)&&w(f,o)}function B(){r("pageTwoLinks")&&l(),r("addUfsgLinks")&&d(),r("trackLadderReset")&&u()}export{B as default};
//# sourceMappingURL=news-Q4UYTOFB.js.map
