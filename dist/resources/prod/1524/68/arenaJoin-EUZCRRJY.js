import{a as w}from"./chunk-UWKFXRMP.js";import{a as T}from"./chunk-C4WNTW42.js";import{a as E,b as C,c as _}from"./chunk-M53U6M2J.js";import"./chunk-MPBEHM5I.js";import"./chunk-ICJDOKSD.js";import{a as y}from"./chunk-E5YRKN52.js";import"./chunk-MBM2IUZ4.js";import"./chunk-QECF3ES7.js";import"./chunk-VANJ6SBK.js";import"./chunk-A6YEPEYO.js";import"./chunk-B2TCEWYK.js";import{a as h}from"./chunk-JHT5ZUNL.js";import"./chunk-5S5QQHUP.js";import"./chunk-UK6O22FS.js";import"./chunk-JYVZBKII.js";import"./chunk-PLMUKN34.js";import{a as S}from"./chunk-SJBDHPKU.js";import"./chunk-OJEUV2SM.js";import{a as m}from"./chunk-QNQ62I2N.js";import"./chunk-KJXK3QHT.js";import"./chunk-H5JQREIR.js";import"./chunk-6WQKPU62.js";import{a as s}from"./chunk-NU3FAJPR.js";import{a}from"./chunk-B7B6FEDD.js";import"./chunk-D2JB7FXL.js";import"./chunk-4INAK7SH.js";import{a as b}from"./chunk-MBVAIUY2.js";import"./chunk-AA3WEUMO.js";import"./chunk-GFTF5DSK.js";import"./chunk-IY5LYFS2.js";import"./chunk-N3OTWMWE.js";import"./chunk-UAYXUP6O.js";import"./chunk-VAM76SSW.js";import"./chunk-DKRWTGPA.js";import"./chunk-Y4JXK224.js";import"./chunk-3JBM46WR.js";import"./chunk-OY6KZ2QA.js";import"./chunk-NTPHAESD.js";import"./chunk-3SKGW6OG.js";import"./chunk-Z4KFCZCK.js";import"./chunk-KQSUJNSJ.js";import"./chunk-4E2HVB33.js";import{a as x}from"./chunk-X3DU776B.js";import"./chunk-4JW3DRCH.js";import{a as $}from"./chunk-D3KONKYS.js";import{a as g}from"./chunk-RC2D6Q5A.js";import"./chunk-527CNM4N.js";import"./chunk-6IX4R32K.js";import{a as i}from"./chunk-UG5BYLND.js";import"./chunk-C4ZG3YI7.js";import"./chunk-5KMWOBOQ.js";import"./chunk-N3S7NELN.js";import"./chunk-BQVMUFJ3.js";import"./chunk-XANH2KUG.js";import"./chunk-JEWY3LVF.js";import"./chunk-QNTIOO4O.js";import"./chunk-KI4LHW6W.js";import{a as v}from"./chunk-47PUSJEZ.js";import"./chunk-MWERZPAU.js";import{b as n}from"./chunk-3GR2FESE.js";import"./chunk-DKU5TE64.js";var N=()=>Number(h("pvp_id")),B=N;function f(t){let e=B();return t.arenas.find(o=>o.id===e)}function p(t){return E({subcmd:"usesetup",set_id:t})}var c;function I(t){return c||(c=a(t,s())),c}function q(t,e){let o=String(e-1);e===0&&(o="x"),m(t,`<img src="${n}arena/${o}.png" class="moveImg">`)}function j(t,e){return`<option value="${String(e.id)}"${w(t.slots.join(),e.slots.join())}>${e.name}</option>`}function H(t,e){let o=I(e);$("",o),t.slots.forEach(i(q,o))}function A(t,e,o){p(e.target.value).then(r=>{r.s&&H(o,t)})}function L(t,e,o){let r=t.sets.find(M=>M.id===Number(o.target.value));r&&A(e,o,r)}function P(t,e){if(t.sets.length>0){let o=T({innerHTML:t.sets.map(i(j,t.current_set)).join("")});v(o,"change",i(L,t,e));let r=s({className:"flex"});a(r,o),S(e,r)}}function l(t,e,o){if(o.specials){let r=s({className:"flex"});P(t,r),H(t.current_set,r),a(e,r)}}var D=t=>String(Number(t));function u(t,e){return`<div><div>${t}</div><div><img src="${n}ui/arena/specials_${D(e)}.png"></div></div>`}function F(t){return`<div class="flex"><div><div>Players</div><div>${t.players.length} / ${t.max_players}</div></div>${u("Specials",t.specials)}${u("Hell Forge",t.hellforge)}${u("Epic",t.epic)}<div><div>Max Equip Level</div><div>${x(t.equip_level)}</div></div></div>`}function d(t){let e=b("#pCC > form > table tr:nth-of-type(4) td");if(t.r&&e){e.setAttribute("align","center");let o=f(t.r);m(e,F(o)),l(t.r,e,o)}}function J(){g("arenaTypeTabs")?_():(y(),C().catch(()=>({})).then(d))}export{J as default};
//# sourceMappingURL=arenaJoin-EUZCRRJY.js.map
