import{a as c}from"./chunk-S6J4FX57.js";import{a as t}from"./chunk-RIVS3SLC.js";import{a as p}from"./chunk-PYKI2PED.js";import{a as n}from"./chunk-KMMYFSVA.js";import{a as m}from"./chunk-Z5G3WLWA.js";import{a as i}from"./chunk-YCL7L6ZB.js";import{a as s}from"./chunk-VV2IBFUQ.js";function e(){return c({subcmd2:"view"})}var u=r=>s('#pCC img[src$="/icon_action_view.png"]',r),f=r=>Number(m(r.parentElement.href,"group_id")),l=r=>t(r).cells[0].children[0].textContent,d=r=>r.split(",").map(i).filter(Boolean),g=r=>t(r).cells[1].firstChild.textContent,w=r=>d(g(r)).map(a=>({name:a})),b=r=>[{name:l(r)},...w(r)],v=r=>({id:f(r),members:b(r)}),x=r=>u(r).map(v),G=r=>({r:x(r),s:!0});async function o(){return G(await p({cmd:"guild",subcmd:"groups"}))}function C(){return n(e,o)}export{C as a};
//# sourceMappingURL=chunk-QWXETE5R.js.map