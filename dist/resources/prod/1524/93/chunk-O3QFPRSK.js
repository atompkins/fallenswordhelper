import{a as r}from"./chunk-BBCLD2TK.js";import{a as n}from"./chunk-WFI3HTBS.js";import{e as o}from"./chunk-UYN3LUIY.js";function u(t){return`${r(t.getHours())}:${r(t.getMinutes())} ${t.toLocaleString("en",{weekday:"short"})} ${r(t.getDate())}/${o[t.getMonth()]}/${t.getFullYear()}`}function f(t,i){let e=t.split(" ").map(m=>m.slice(0,-1));if(e)return`<dd>${u(new Date(n()+((i*60+Number(e[0]))*60+Number(e[1]))*1e3))}</dd>`}export{f as a};
//# sourceMappingURL=chunk-O3QFPRSK.js.map