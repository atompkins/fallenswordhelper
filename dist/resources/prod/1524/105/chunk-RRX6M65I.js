import{a as f}from"./chunk-6HERGS5C.js";import{a as d}from"./chunk-URWUNVTF.js";import{a as c}from"./chunk-I6ZSBYQ3.js";import{a}from"./chunk-YQ625XVJ.js";import{a as n}from"./chunk-Y5EGDMIB.js";import{a as s}from"./chunk-PJWDCLVE.js";import{Ja as m}from"./chunk-5ELKH2XV.js";import{a as r}from"./chunk-QCTVAEOV.js";function u(e){return f({subcmd:"useitem",inventory_id:e})}var p=(e,t)=>({r:{[t]:[{n:s(/'(?<id>.*)'/,e)}]},s:!0}),g=e=>p(e,"components"),x=e=>p(e,"mailbox_items");function I(e){let t=e.split(" x ");return{amount:t[0],type:m.indexOf(t[1])}}function v(e){let t=s(/You gained {1,2}}(?<fragList>.*) Fragment\(s\)/,e);if(t)return{r:{frags:t.split(", ").map(I)},s:!0};n("da/useItem","Bad Msg",e),r.userIsDev&&console.log("da/useItem","Bad Msg",e)}var y=[["You successfully used",()=>({s:!0})],["You successfully extracted",g],["You failed to extract",()=>({r:{},s:!0})],["You gained",v],["You received",x]];function Y(){r.userIsDev&&console.log("da/useItem","No Info")}function b(e){let t=d(e);if(t){let o=y.find(l=>t.startsWith(l[0]));if(o)return o[1](t)}else return n("da/useItem","No Info"),Y(),{e:{message:"No Info"},s:!1};return{e:{message:t},s:!1}}async function i(e){let t=await c({cmd:"profile",subcmd:"useitem",inventory_id:e});return b(t)}function h(e){return a(u,i,e)}export{h as a};
//# sourceMappingURL=chunk-RRX6M65I.js.map