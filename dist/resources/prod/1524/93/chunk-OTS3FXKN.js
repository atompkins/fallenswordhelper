import{a as s}from"./chunk-HK3FJNIM.js";import{a as n}from"./chunk-JKXU5FVG.js";import{a as c}from"./chunk-SDADCBWU.js";import{a as i}from"./chunk-P6EW3726.js";import{a}from"./chunk-OX3SBSJB.js";import{a as m}from"./chunk-5RFQSTDG.js";async function o(){let t=await n({subcmd:"viewcombatset"});return{...t,r:t.r.sort((e,f)=>i(e.name,f.name))}}var p=(t,e)=>e>0,u=t=>({id:Number(t.value)});async function r(){let t=await s({cmd:"profile"}),e=a('select[name="combatSetId"]',t);return e?{r:m(e.children).filter(p).map(u),s:!0}:{s:!1}}function d(){return c(o,r)}export{d as a};
//# sourceMappingURL=chunk-OTS3FXKN.js.map