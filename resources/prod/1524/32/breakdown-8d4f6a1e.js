import{r as e,x as t,H as o,i as s,p as n,o as a,y as i,l as r,Z as d,t as c,N as m,an as p,ao as g}from"./calfSystem-45544049.js"
import{p as f}from"./perfFilter-f4b85c24.js"
import{s as l}from"./simpleCheckbox-30d3f70c.js"
import"./getArrayByClassName-b62a000f.js"
import"./getInventoryById-610482ff.js"
import"./getInventory-3b08d027.js"
import"./cmdExport-4fdfd8a3.js"
import"./indexAjaxJson-e79ad7ee.js"
import"./isChecked-00f5c23d.js"
let b
const u=[]
function h(e){e.hide()}function x(e,t){e.animate({height:0},500,t)}function y(){const e=$("#composingMessageContainer")
e.animate({opacity:0},500,c(x,e,c(h,e)))}function j(e,t){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(e,t){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":t,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(e)}(e,t))),setTimeout(y,5e3)}function k(e){0!==e.error?j(`Error: ${e.msg}`,"rgb(164, 28, 28)"):m(`${p+g}breakdown&m=1`)}function w(){(function(t){return e({type:"POST",data:{cmd:"composing",subcmd:"dobreakdown",item_list:t},dataType:"json"})})(u).then(k)}function C(e){b&&"breakdown-selected-items"===e.target.id&&function(e){e.stopPropagation(),0!==u.length?w():j("Error: No items selected.","rgb(164, 28, 28)")}(e)}function B(e){if(!r("selectable-item",e.target))return
const t=e.target.id.replace("composing-item-",""),o=u.indexOf(t);-1===o?u.push(t):u.splice(o,1)}function P(){b=!b,d("disableBreakdownPrompts",b)}function v(){t()||(f("composing"),b=o("disableBreakdownPrompts"),s(n,`<table class="fshTblCenter"><tbody>${l("disableBreakdownPrompts")}</tbody></table>`),a(i("breakdown-selected-items").parentNode,C,!0),a(i("composing-items"),B),a(i("disableBreakdownPrompts"),P))}export default v
//# sourceMappingURL=breakdown-8d4f6a1e.js.map
