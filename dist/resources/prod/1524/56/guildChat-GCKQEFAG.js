import{b as n}from"./chunk-GWPL62EI.js";import"./chunk-S2OLP3EN.js";import"./chunk-DWUFG6UJ.js";import{a as C}from"./chunk-MWBJMPWS.js";import{a as g}from"./chunk-7SS757TV.js";import{a as d}from"./chunk-TOP5YOWC.js";import"./chunk-F3UWCNLS.js";import"./chunk-PPWSFVIU.js";import"./chunk-5IONE3UD.js";import"./chunk-DBUR5TNY.js";import"./chunk-EVK5QPY3.js";import{a as s}from"./chunk-52BHRAB5.js";import"./chunk-5QL3EWJR.js";import{a as u}from"./chunk-KARVP4IF.js";import"./chunk-ZQ6Q7AAO.js";import"./chunk-XBQPITPX.js";import{b as m}from"./chunk-GD4HMFZG.js";import{a as h}from"./chunk-ARPWTZYO.js";import"./chunk-XIQH4POZ.js";import{a as f}from"./chunk-HXMNMQML.js";import"./chunk-TLQQXMWC.js";import"./chunk-AVPY2BTL.js";import"./chunk-2FGL6JOK.js";import"./chunk-GJHRXFGS.js";import"./chunk-JZUIGPQK.js";import"./chunk-E7LHQKU5.js";import"./chunk-GRW7NX42.js";import{a as p}from"./chunk-6RYYSQKY.js";import"./chunk-NRM2IEBO.js";import"./chunk-BRACYM44.js";import{a as o}from"./chunk-HSGQLATB.js";import"./chunk-VYOJRJTP.js";import"./chunk-IZEIZGGY.js";import"./chunk-H4RRBTG7.js";import"./chunk-D4RSYPIY.js";import{a as c}from"./chunk-SQ3ABL2K.js";import"./chunk-S2PPJ2GD.js";import{b as r}from"./chunk-MIGTOE2L.js";import"./chunk-UYUWQQUH.js";import"./chunk-FMIILUE6.js";import"./chunk-XSTNX5IW.js";import"./chunk-UVCMQZY6.js";import{a}from"./chunk-NGIDL4MJ.js";function T(e){e.value=e.value.replace(/\r\n|\n|\r/g," ").replace(/'/g,"\u2019").replace(/(^|\s)(")/g,"$1\u201C").replace(/"/g,"\u201D").replace("<","\uFF1C")}var y=e=>{e.setAttribute("form","dochat")};function x(e){e.id="dochat",c(e.elements).forEach(y)}function A(e){let t=h(e[5]);t.rows[0].cells[0].remove(),p(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}function b(e,t){t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),g(e))}function k(){let e=d({className:"fshChatTextArea",maxLength:512,name:"msg",required:!0});return y(e),e}var E=()=>!m||C("header",m).filter(f("Posted\xA0By")).length!==1||!r("enhanceChatTextEntry");function l(){if(E())return;let e=document.forms[0];x(e),A(e.elements);let t=k();o(t,"keypress",a(b,e.elements[5])),e.elements[4].replaceWith(t),o(e,"submit",a(T,t))}function i(){if(!r("wrapGuildChat"))return;let e=u("#pCC table table table table");!e||e.classList.add("fshGc")}function S(){i(),l();let e=s("chat_type");e&&e==="1"?n("Leader",0,3):n("Chat",0,3)}export{S as default};
//# sourceMappingURL=guildChat-GCKQEFAG.js.map
