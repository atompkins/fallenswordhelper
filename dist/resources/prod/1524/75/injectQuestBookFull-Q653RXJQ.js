import{a as S}from"./chunk-YVCEB253.js";import{a as P}from"./chunk-NAD6OGH4.js";import{a as b}from"./chunk-NFO4O6GG.js";import{a as k}from"./chunk-WT4CTOSA.js";import"./chunk-KAEAX7RN.js";import{a as L}from"./chunk-ZBGIX6RB.js";import{a as c}from"./chunk-HGOBQD7Z.js";import"./chunk-W5IZ3NIZ.js";import{a as g}from"./chunk-I4LE4V5X.js";import"./chunk-AID3LCGH.js";import{a as Q}from"./chunk-6FE7TFOW.js";import"./chunk-BQN7JNLT.js";import{a}from"./chunk-46E7CLT6.js";import"./chunk-L2F37LJS.js";import{a as l}from"./chunk-LXCNYPSV.js";import"./chunk-QMO3OQBJ.js";import"./chunk-Q2OGYUCV.js";import{b as m}from"./chunk-46TQQDHW.js";import{a as h}from"./chunk-O7BO2JV6.js";import"./chunk-K4FZKNLQ.js";import{a as u}from"./chunk-TDFIT7OX.js";import{b as n}from"./chunk-ELGHA2UY.js";import"./chunk-G5IZBOBE.js";import"./chunk-QKN4UTNB.js";import"./chunk-XAE2ZLZO.js";import{ua as d}from"./chunk-L5JB47YP.js";import"./chunk-M4AU23DF.js";function y(){return n("hideQuests")?L("hideQuestNames"):[]}function B(t,e,r){if(t.includes(e)){let o=r;c(o);for(let p=0;p<3;p++)o=o.nextElementSibling,c(o)}}function x(t,e){let r=P(Q(e.cells[0]));B(t,r,e);let o=g(e.cells[0].children[0].href,"quest_id");h(S(o,r),e.cells[4])}function f(t){let e=y();b(t,5,0).forEach(u(x,e))}var T,A,v,C,V,i,E=[0,3,0,1,2],q=["lastNormalActiveQuestPage","lastNormalCompletedQuestPage","lastNormalNotStartedQuestPage","lastSeasonalActiveQuestPage","lastSeasonalCompletedQuestPage","lastSeasonalNotStartedQuestPage"];function H(t,e,r,o){return t[o].children[0].getAttribute("color")==="#FF0000"?e+r:e}function j(){let t=a("a",m);[T,A,v,C,V]=t,i=E.reduce(u(H,t),0)}function w(){let t=window.location.search;l("lastActiveQuestPage",t),l(q[i],t)}function F(t){return n(t)}function I(){return q.map(F)}function D(t){return[t[3],t[4],t[5],t[0],t[1],t[2]]}function s(t,e){e.length>0&&t.setAttribute("href",e)}function N(t,e){s(v,t[e]),s(C,t[e+1]),s(V,t[e+2])}function U(){let t=I(),e=D(t);i<3?(s(A,e[i]),N(t,0)):(s(T,e[i]),N(t,3))}function K(){n("storeLastQuestPage")&&(j(),w(),U())}function _(){k(),K();let t=a(d,m)[5];!t||f(t)}export{_ as default};
//# sourceMappingURL=injectQuestBookFull-Q653RXJQ.js.map