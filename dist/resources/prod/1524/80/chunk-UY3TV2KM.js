import{a as f}from"./chunk-QED4CBOJ.js";import{a as c}from"./chunk-J66V4X6B.js";import{a as r}from"./chunk-FNBCAVVI.js";import{a}from"./chunk-YNGMMT7C.js";import{a as i}from"./chunk-4XBIOIJL.js";import{Ga as m}from"./chunk-I6XFTTZH.js";import{a as s}from"./chunk-6IFYCYYR.js";var d=(e,t)=>({r:{[t]:[{n:e.match(/'(.*)'/)[1]}]},s:!0}),p=e=>d(e,"components"),g=e=>d(e,"mailbox_items");function I(e){let t=e.split(" x ");return{amount:t[0],type:m.indexOf(t[1])}}function x(e){let t=e.match(/You gained {1,2}}(.*) Fragment\(s\)/);if(t)return{r:{frags:t[1].split(", ").map(I)},s:!0};r("da/useItem","Bad Msg",e),s.userIsDev&&console.log("da/useItem","Bad Msg",e)}var y=[["You successfully used",()=>({s:!0})],["You successfully extracted",p],["You failed to extract",()=>({r:{},s:!0})],["You gained",x],["You received",g]];function h(){s.userIsDev&&console.log("da/useItem","No Info")}function v(e){let t=c(e);if(t){let o=y.find(l=>t.startsWith(l[0]));if(o)return o[1](t)}else return r("da/useItem","No Info"),h(),{e:{message:"No Info"},s:!1};return{e:{message:t},s:!1}}async function n(e){let t=await i({cmd:"profile",subcmd:"useitem",inventory_id:e});return v(t)}function u(e){return f({subcmd:"useitem",inventory_id:e})}function Y(e){return a(u,n,e)}export{Y as a};
//# sourceMappingURL=chunk-UY3TV2KM.js.map