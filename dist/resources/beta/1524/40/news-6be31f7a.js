import{c as e}from"./createAnchor-5c088cc6.js"
import{c as a}from"./createSpan-12f0c446.js"
import{g as t}from"./getArrayByClassName-f0b57594.js"
import{g as r}from"./getTitle-68e6dfad.js"
import{E as s,p as n,aJ as o,h as i,D as c,bE as f,bF as m,I as p,a6 as d,_ as l,aI as h,C as u}from"./calfSystem-ab393688.js"
import{i as b}from"./insertElementBefore-6e80e0ff.js"
import{i as g}from"./insertHtmlAfterEnd-091048b9.js"
import{p as C}from"./parseDateAsTimestamp-e9cd3714.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function _(e,a){return`<a href="${e}" target="_blank">${a}</a>`}function j(e){return`${o}creatures&search_name=${e}`}function w(a){const t=encodeURIComponent(r(a)),s=e({href:j(t),target:"_blank"})
b(s,a),i(s,a)}function y(e){return $.test(e.firstChild.nodeValue)}function E(e){const a=e.firstChild.nodeValue.match($)
var t
return a[2]=_(j(a[2]),a[2]),a[4]=_((t=a[4],`${o}realms&search_name=${t}`),a[4]),a.slice(1).join("")}function k(e){const t=a({innerHTML:E(e)})
e.replaceChild(t,e.firstChild)}const A=(e,a)=>`&nbsp;<a href="${e}&page=2">View ${a} Page 2</a>`
const L=e=>h("PvP Ladder",e.children[1]),v=e=>C(u(e.children[2]))
function T(){p("pageTwoLinks")&&function(){const e=c(`#pCC a[href="${f}"]`)
if(!e)return
g(e,A(f,"Updates"))
const a=c(`#pCC a[href="${m}"]`)
g(a,A(m,"News"))}(),p("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(k)),p("trackLadderReset")&&function(){const e=t("news_head_tavern",n).filter(L).map(v),a=Math.max.apply(null,e)
a>p(d)&&l(d,a)}()}export default T
//# sourceMappingURL=news-6be31f7a.js.map
