import{a as E}from"./chunk-U6GTWC2Q.js";import{a as D}from"./chunk-HBQKZNOT.js";import{a as S}from"./chunk-KMMYFSVA.js";import{a as i}from"./chunk-DS5TO6ZD.js";import{a as b}from"./chunk-IWEQS4A6.js";import{a as A}from"./chunk-PHWG56X4.js";import{a as y}from"./chunk-XVF2CJMZ.js";import{a as w}from"./chunk-OA25OZFH.js";import{a as x}from"./chunk-VNYEAL6H.js";import{a as v,b as m}from"./chunk-RIFWXPPJ.js";import{a as R}from"./chunk-PNTQJ5ZY.js";import{a as C}from"./chunk-U7JQSSPD.js";import{a as k}from"./chunk-VV2IBFUQ.js";import{d as s,f as T,g as _}from"./chunk-EOMEBOYD.js";import{a as h}from"./chunk-Y7Z3DYSJ.js";import{a as c}from"./chunk-GOZAE5SK.js";function p(t){return R({cmd:"combat",subcmd:"view",combat_id:t})}function f(t){return y({cmd:"combat",subcmd:"view",combat_id:t})}var N=t=>Number(c(/\/(?<id>\d+)/,t.getAttribute("background")));function n(t,e){let r=new RegExp(`${e} = (\\d+)`);return Number(c(r,t))}function j(t){let e=[[18,"leeched"],[21,"Spell"]].map(([r,o])=>[r,t.includes(o),t.split(" ")[0],t.split("'")[1]]).find(([,r])=>r);return e?{id:e[0],params:[e[2],e[3]]}:(C("Logs","Missing PvP Special",t),{id:-1,params:["-1","-1"]})}function B(t){return k("#specialsDiv",t).map(i).filter(P=>["leeched","Spell"].some(G=>P.includes(G))).map(j)}function V(t,e){return{id:N(t.rows[1].cells[e]),name:i(t.rows[0].cells[e])}}function $(t,e){let r=e.children[0].rows[5].cells[0].children[0];return{attacker:V(r,0),defender:V(r,2),id:Number(t),specials:B(e)}}function q(t){let e=w(t.children[1]);return{gold_gain:n(e,"goldGain"),gold_stolen:n(e,"goldStolen"),pvp_prestige_gain:n(e,"prestigeGain"),pvp_rating_change:n(e,"pvpRatingChange"),winner:n(e,"winner"),xp_gain:n(e,"xpGain")}}function F(t,e){return{...$(t,e),...q(e)}}function K(t,e){let r=A(e),o=b("pCC",r);return{r:{combat:F(t,o)},s:!0}}async function l(t){let e=await f(t);return K(t,e)}function u(t){return S(p,l,t)}var g="fsh_pvpCombat",d=null,a=0;function L(t,[e,r]){return e==="lastCheck"||r.logTime&&r.logTime>t}function M(t){let r=x(t).filter(h(L,_())),o={...D(r),lastCheck:s()};return m(g,o),o}async function O(){let t=await v(g);return t?!t.lastCheck||t.lastCheck<T()?M(t):t:{lastCheck:s()}}async function z(t,e,r){let o=await u(e);if(!(!o||!o.s))return a||(a={...r}),a[e]={...o,logTime:E(i(t.cells[1]))/1e3},m(g,a),o}async function H(t,e){d||(d=O());let r=await d;return r[e]&&r[e].logTime?r[e]:z(t,e,r)}export{H as a};
//# sourceMappingURL=chunk-GWUTVVPH.js.map