import{a as s}from"./chunk-N5WMQE25.js";import{a as i}from"./chunk-DL25MPSU.js";import{a as e}from"./chunk-5HH7GGGJ.js";import{a as u}from"./chunk-IAPLFRFL.js";function a(t){return i({subcmd2:"viewstats",group_id:t})}function d(t){let r=s(t);return{r:{attributes:[{id:0,value:r.attack},{id:1,value:r.defense},{id:2,value:r.armor},{id:4,value:r.damage},{id:3,value:r.hp}]}}}async function o(t){return d(await e({cmd:"guild",subcmd:"groups",subcmd2:"viewstats",group_id:t}))}function p(t){return u(a,o,t)}export{p as a};
//# sourceMappingURL=chunk-MUUATICT.js.map