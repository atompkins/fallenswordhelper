import{b as n}from"./chunk-2TFOUQML.js";import"./chunk-XJHHDBDD.js";import"./chunk-VPTEX66W.js";import{a as C}from"./chunk-3ER4PBLB.js";import{a as g}from"./chunk-QFJ47FPW.js";import"./chunk-RCYQMF7E.js";import"./chunk-CBZPC7T3.js";import"./chunk-ZYHOM632.js";import"./chunk-5U7DCVQ4.js";import"./chunk-3K2T5RZS.js";import"./chunk-MN2NVYRQ.js";import{a as f}from"./chunk-B6OR3VYQ.js";import{a as d}from"./chunk-A67VTS27.js";import"./chunk-EBMMHOWF.js";import"./chunk-GPS2RLNW.js";import"./chunk-RQWL3XFM.js";import{a as u}from"./chunk-5ZB7VX3F.js";import"./chunk-TV6FJZ73.js";import"./chunk-GC3BBNBK.js";import{a as p}from"./chunk-4VC66CVI.js";import"./chunk-W2PLL3XP.js";import{a as h}from"./chunk-B5C6WAOU.js";import"./chunk-K23D4BZD.js";import"./chunk-EACXRABJ.js";import"./chunk-KWW5TFWI.js";import{b as m}from"./chunk-V2RDFCFO.js";import"./chunk-ZOM4M5CL.js";import"./chunk-AOLVAW2H.js";import{a as s}from"./chunk-CJDIJW63.js";import"./chunk-X4QNMHIE.js";import"./chunk-X7VSJFUB.js";import"./chunk-RDJGNWAB.js";import"./chunk-7IZ75EHU.js";import"./chunk-SGZWLSNX.js";import"./chunk-AOINEH4F.js";import"./chunk-CIYKTU6C.js";import"./chunk-HXA7GMHU.js";import{a as c}from"./chunk-2WBVUEHT.js";import"./chunk-7IR54LMC.js";import{a}from"./chunk-P2XVC4S5.js";import"./chunk-ZOQAMPPO.js";import"./chunk-SGC5GHRN.js";import{b as r}from"./chunk-2I26BJ52.js";import"./chunk-QMYGD3GE.js";import{a as o}from"./chunk-X4CA4ODK.js";import"./chunk-6MEG5PHL.js";import"./chunk-Q6PVLDNZ.js";import"./chunk-VVJVMGW6.js";function T(e){e.value=e.value.replace(/\r\n|\n|\r/g," ").replace(/'/g,"\u2019").replace(/(?<a>^|\s)(?<b>")/g,"$1\u201C").replace(/"/g,"\u201D").replace("<","\uFF1C")}var y=e=>{e.setAttribute("form","dochat")};function x(e){e.id="dochat",c(e.elements).forEach(y)}function b(e){let t=g(e[5]);t.rows[0].cells[0].remove(),p(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}function A(e,t){t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),d(e))}function k(){let e=C({className:"fshChatTextArea",maxLength:512,name:"msg",required:!0});return y(e),e}var w=()=>!m()||u("header",m()).filter(h("Posted\xA0By")).length!==1||!r("enhanceChatTextEntry");function i(){if(w())return;let e=document.forms[0];x(e),b(e.elements);let t=k();o(t,"keypress",a(A,e.elements[5])),e.elements[4].replaceWith(t),o(e,"submit",a(T,t))}function l(){if(!r("wrapGuildChat"))return;let e=s("#pCC table table table table");e&&e.classList.add("fshGc")}function E(){l(),i();let e=f("chat_type");e&&e==="1"?n("Leader",0,3):n("Chat",0,3)}export{E as default};
//# sourceMappingURL=guildChat-X7LHI3SC.js.map
