import{a as C}from"./chunk-X3GE3ZPQ.js";import{b as n}from"./chunk-GFDVBBLT.js";import"./chunk-WQZRMCTK.js";import"./chunk-BD6U2K5T.js";import"./chunk-MT2A3HBW.js";import{a as g}from"./chunk-MHFHM2UV.js";import"./chunk-NFO4O6GG.js";import"./chunk-AIM2MBEX.js";import"./chunk-P55FEXO6.js";import"./chunk-3F6MNCI6.js";import"./chunk-YYCPK2ZW.js";import{a as s}from"./chunk-6OQUMWI5.js";import{a as d}from"./chunk-47RXHZIW.js";import"./chunk-I4LE4V5X.js";import"./chunk-KTCUHC46.js";import"./chunk-ORWNE4WN.js";import"./chunk-TANNOBPR.js";import{a as u}from"./chunk-MZYLPE6K.js";import"./chunk-QRYRLQTR.js";import{a as h}from"./chunk-VRFSPHR2.js";import{a as c}from"./chunk-RTE45BUF.js";import"./chunk-MS4EYMHR.js";import"./chunk-6FE7TFOW.js";import"./chunk-BQN7JNLT.js";import"./chunk-L2F37LJS.js";import"./chunk-RSW3SDQ5.js";import"./chunk-LXCNYPSV.js";import"./chunk-QMO3OQBJ.js";import"./chunk-Q2OGYUCV.js";import"./chunk-332EVHRL.js";import{b as m}from"./chunk-46TQQDHW.js";import"./chunk-K4FZKNLQ.js";import"./chunk-CSUXSLMM.js";import"./chunk-OHRM7A4V.js";import{a}from"./chunk-TDFIT7OX.js";import"./chunk-REO2URTO.js";import{a as p}from"./chunk-NH6DTJ4R.js";import"./chunk-JFPNT65R.js";import{b as r}from"./chunk-ELGHA2UY.js";import"./chunk-G5IZBOBE.js";import{a as o}from"./chunk-QKN4UTNB.js";import"./chunk-VOOMRXTQ.js";import{a as f}from"./chunk-XAE2ZLZO.js";import"./chunk-L5JB47YP.js";import"./chunk-M4AU23DF.js";function T(e){e.value=e.value.replace(/\r\n|\n|\r/g," ").replace(/'/g,"\u2019").replace(/(^|\s)(")/g,"$1\u201C").replace(/"/g,"\u201D").replace("<","\uFF1C")}var y=e=>{e.setAttribute("form","dochat")};function x(e){e.id="dochat",f(e.elements).forEach(y)}function b(e){let t=g(e[5]);t.rows[0].cells[0].remove(),u(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}function A(e,t){t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),d(e))}function k(){let e=C({className:"fshChatTextArea",maxLength:512,name:"msg",required:!0});return y(e),e}var w=()=>!m||p("header",m).filter(c("Posted\xA0By")).length!==1||!r("enhanceChatTextEntry");function i(){if(w())return;let e=document.forms[0];x(e),b(e.elements);let t=k();o(t,"keypress",a(A,e.elements[5])),e.elements[4].replaceWith(t),o(e,"submit",a(T,t))}function l(){if(!r("wrapGuildChat"))return;let e=h("#pCC table table table table");!e||e.classList.add("fshGc")}function E(){l(),i();let e=s("chat_type");e&&e==="1"?n("Leader",0,3):n("Chat",0,3)}export{E as default};
//# sourceMappingURL=guildChat-CZMJOCBZ.js.map