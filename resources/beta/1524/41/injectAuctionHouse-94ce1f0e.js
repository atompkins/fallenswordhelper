import{a as e}from"./allthen-13a2ca46.js"
import{y as t,p as a,z as n,aa as s,o as i,I as o,R as r,aw as c,u as l}from"./calfSystem-587dd8d3.js"
import{c as m}from"./createSpan-f508c88b.js"
import{d}from"./doStatTotal-cc0e0b54.js"
import{g as f}from"./getArrayByClassName-7140e93a.js"
import{i as p}from"./insertElementAfterBegin-95fb87ae.js"
import"./all-73a73e22.js"
import"./insertElementBefore-2bf2da7f.js"
function u(){r(n("refresh"))}function h(e){const t=e.parentNode.parentNode.children[0].children[0]
return e.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(t.dataset.tipped)[1]})}function g(){const t=f("auctionCancel",n("resultRows"))
if(0===t.length)return
const a=t.map(h)
e(a,u)}function j(){!t()&&a&&(!function(){const e=m({className:"smallLink",textContent:"Cancel All"}),t=n("fill").parentNode.parentNode.nextElementSibling.children[0]
t.classList.add("fshCenter"),s(t,"]"),p(t,e),s(t,"["),i(e,g)}(),o("autoFillMinBidPrice")&&r(n("auto-fill")),d())}export default j
//# sourceMappingURL=injectAuctionHouse-94ce1f0e.js.map
