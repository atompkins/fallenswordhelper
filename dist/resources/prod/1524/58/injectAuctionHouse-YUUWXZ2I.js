import{a as h}from"./chunk-56DZBOU2.js";import{a as d}from"./chunk-3EMUUPIE.js";import{a as g}from"./chunk-NHOYLDCV.js";import"./chunk-SROWON7W.js";import{a as i}from"./chunk-XZTV4V77.js";import"./chunk-A4BE6YZE.js";import{a as r}from"./chunk-WO6VCGXC.js";import{a as f}from"./chunk-4FRE2TLY.js";import{a as u}from"./chunk-JQ6TFVPK.js";import{a as p}from"./chunk-RO77CKSJ.js";import"./chunk-5ABGN6TX.js";import"./chunk-KANBDIY6.js";import{b as l}from"./chunk-7KGOEIPC.js";import"./chunk-KIGZSTQN.js";import"./chunk-BOK6PI4C.js";import"./chunk-RF7K337W.js";import"./chunk-V6QPYEQA.js";import"./chunk-E6LT46ZX.js";import{a as s}from"./chunk-XQHJD2OP.js";import"./chunk-RIMVOGPJ.js";import"./chunk-UJM3TQ4Q.js";import"./chunk-UUZRSBW7.js";import{a}from"./chunk-OBGXUIQG.js";import"./chunk-ZVRZUN6W.js";import"./chunk-CXH2ICGZ.js";import{a as o}from"./chunk-B4CACURR.js";import"./chunk-X3N42HIO.js";import"./chunk-EMXVU7FX.js";import"./chunk-PZET6DEP.js";import"./chunk-353SUQQH.js";import{b as c}from"./chunk-ICRHQMJP.js";import"./chunk-FJHRVDDP.js";import"./chunk-SVFIEWQV.js";import"./chunk-NEZAPTHY.js";import{b as m}from"./chunk-GTEPU6L3.js";import"./chunk-J6WQ3WGO.js";function A(){r(o("refresh"))}function y(e){let t=e.parentNode.parentNode.children[0].children[0];return e.outerHTML=`<img src="${m}ui/misc/spinner.gif" width="14" height="14">`,s({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(t.dataset.tipped)[1]})}function C(){let e=h("auctionCancel",o("resultRows"));if(e.length===0)return;let t=e.map(y);g(t,A)}function x(){let e=o("fill");if(!e)return;let t=u({className:"smallLink",textContent:"Cancel All"}),n=e.parentNode.parentNode.nextElementSibling.children[0];n.classList.add("fshCenter"),i(n,"]"),f(n,t),i(n,"["),a(t,C)}function B(){c("autoFillMinBidPrice")&&r(o("auto-fill"))}function N(){p()||!l||(x(),B(),d())}export{N as default};
//# sourceMappingURL=injectAuctionHouse-YUUWXZ2I.js.map
