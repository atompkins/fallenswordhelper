import{b as e,r as t}from"./render-0caf50c9.js"
import{I as s,z as o,c as i,o as r,f as a,m as n,h as l,i as c,p as u,B as f,_ as m}from"./calfSystem-f7cf24f6.js"
import{c as p}from"./createInput-8f2d1a63.js"
import{i as b}from"./insertTextBeforeEnd-60f92d3f.js"
import{t as d}from"./testQuant-4528e278.js"
import"./roundToString-8b06d154.js"
import"./numberIsNaN-11f99b26.js"
import"./playerName-c3c6c732.js"
import"./toLowerCase-c964d32b.js"
import"./testRange-2941bddb.js"
let h,g,w,B
const N=[[/</g,"&lt"],[/>/g,"&gt"],[/\n/g,"<br>"],[/\[(\/?[biu])\]/g,"<$1>"],[/\\\\/g,"&#92"],[/\\/g,""]],j=[[/\[(\/?block)\]/g,"<$1quote>"],[/\[list\]/g,'<ul class="list">'],[/\[\/list\]/g,"</ul>"],[/\[\*\](.*?)<br>/g,"<li>$1</li>"]]
function v(e,t){return e.replace(t[0],t[1])}function y(e,t){return t.reduce(v,e)}function k(){const e=d(B.value)
e&&(h=e,m("bioEditLines",e),g.rows=h)}function T(){const e=function(e){let t=y(e,N)
return"guild"===i.cmd&&(t=y(t,j)),t}(g.value),s=t(e)
f(s||e,w)}function I(){h=s("bioEditLines"),g=o("textInputBox"),g&&(!function(){let e="fshBioProfile"
"guild"===i.cmd&&(e="hall"===i.subcmd?"fshBioHall":"fshBioGuild")
const t=n({className:`fshBioContainer ${e}`}),s=n({className:"fshBioHeader fshBioInner",innerHTML:"Preview"})
l(t,s),w=n({className:"fshBioPreview fshBioInner"}),l(t,w),l(g.parentNode,t)}(),"profile"===i.cmd&&c(u,'<div>`~This will allow FSH Script users to select buffs from your bio~`<br>You can use the [cmd] tag as well to determine where to put the "Ask For Buffs" button<br><br><blockquote><ul class="list"><li>Note 1: The ` and ~ characters are on the same key on US QWERTY keyboards. ` is <b>NOT</b> an apostrophe.</li><li>Note 2: Inner text will not contain special characters (non-alphanumeric).</li><li>P.S. Be creative with these! Wrap your buff pack names in them to make buffing even easier!</li></ul></blockquote></div>'),function(){const e=n({innerHTML:"<br>Display "})
B=p({min:1,max:99,type:"number",value:h}),l(e,B),b(e," Lines ")
const t=p({className:"custombutton",value:"Update Rows To Show",type:"button"})
r(t,k),l(e,t),l(u,e)}(),g.rows=h,"profile"===i.cmd&&r(g.parentNode,e),a(g,"keyup",T),T())}export default I
//# sourceMappingURL=bioWidgets-e59f1da4.js.map
