import{s as e,c as s}from"./setupPref-A5_luQ4j.js"
import{ad as a,ai as t,au as r,p as o,bG as c,cr as i,a3 as l,a9 as p}from"./calfSystem-VUa7wwu1.js"
import{p as m}from"./parseDateAsTimestamp-NqbbRm5P.js"
import"./hideElement-RABq1RME.js"
import"./toggleForce-4Mg38a6N.js"
import"./simpleCheckbox-8yANFw8B.js"
import"./isChecked-k2ijSL8v.js"
import"./dateUtc-riGMPqFO.js"
let d=0,n=0
function f(e){if(n&&i("PvP Ladder",e.children[1].children[0])){const s=m(l(e.children[1].children[2]).replace("Posted: ",""))
s>d&&(p(t,s),d=s)}}const h=e=>e>1
function j(){d=a(t),n=a("trackLadderReset")
const i="collapseNewsArchive",l=r(c,o())
l.length>2&&(e(i,l[0].rows[1].cells[0]),s({prefName:i,theTable:l[2],headInd:7,articleTest:h,extraFn:f}))}export{j as default}
//# sourceMappingURL=viewArchive-kr4qa3h-.js.map
