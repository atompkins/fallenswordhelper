import{j as a,ae as e,p as t,m as n,y as s,i as r,aH as o,c0 as c,q as i,c_ as f,c$ as l,ad as d,ai as p,a9 as m,cr as h,a3 as u}from"./calfSystem-4830a18d.js"
import{c as g}from"./createSpan-0da7a190.js"
import{g as C}from"./getTitle-979b8fc1.js"
import{i as $}from"./insertHtmlAfterEnd-52cca1f4.js"
import{p as _}from"./parseDateAsTimestamp-2956e520.js"
import"./dateUtc-36fb94b9.js"
const j=a=>`${o}creatures&search_name=${encodeURIComponent(a)}`,b=/(?<a> titan has been spotted in )(?<b>[^!]+)(?<c>!)/,k=a=>`<a href="${(a=>`${o}realms&search_name=${encodeURIComponent(a)}`)(a)}" target="_blank">${a}</a>`
function w(a){const e=C(a)
if(!e)return
const t=n({href:j(e.split("(")[0].trim()),target:"_blank"})
s(t,a),r(t,a)}function y(a){return b.test(a.lastChild.nodeValue)}function L(a){const e=c(b,a.lastChild.nodeValue)
return e[2]=k(e[2]),e.slice(1).join("")}function U(a){!function(a){const e=a.children[0]
e.href=j(e.textContent),e.target="_blank"}(a)
const e=g({innerHTML:L(a)})
a.replaceChild(e,a.lastChild)}const T=(a,e)=>`&nbsp;<a href="${a}&page=2">View ${e} Page 2</a>`
const v=a=>h("PvP Ladder",a.children[1]),x=a=>_(u(a.children[2]))
function E(){d("pageTwoLinks")&&function(){const a=i(`#pCC a[href="${f}"]`)
if(!a)return
$(a,T(f,"Updates"))
const e=i(`#pCC a[href="${l}"]`)
$(e,T(l,"News"))}(),d("addUfsgLinks")&&(a('.news_body img[src*="/creatures/"]').forEach(w),e("news_body_tavern",t()).filter(y).forEach(U)),d("trackLadderReset")&&function(){const a=e("news_head_tavern",t()).filter(v).map(x),n=Math.max.apply(null,a)
n>d(p)&&m(p,n)}()}export{E as default}
//# sourceMappingURL=news-42a28323.js.map