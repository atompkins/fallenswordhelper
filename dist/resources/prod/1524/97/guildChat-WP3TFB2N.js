import{b as n}from"./chunk-43MJUTGK.js";import"./chunk-ZWXMYKLP.js";import"./chunk-U6GTWC2Q.js";import{a as C}from"./chunk-26WSSEHR.js";import{a as g}from"./chunk-XE443DWN.js";import"./chunk-LXZC2VLP.js";import"./chunk-VUWPXPFS.js";import"./chunk-5KEIQUIC.js";import"./chunk-ENTXQFEJ.js";import"./chunk-QQ63LZNN.js";import"./chunk-6N6Q5324.js";import{a as f}from"./chunk-3U4TACK3.js";import{a as d}from"./chunk-AW3V75RT.js";import"./chunk-UPZ3AKMZ.js";import"./chunk-CUQDXMMQ.js";import"./chunk-Z5G3WLWA.js";import{a as u}from"./chunk-Y6FDPRAU.js";import"./chunk-TKD5JPSI.js";import"./chunk-FKJWOE7J.js";import{a as p}from"./chunk-GHM7FGTO.js";import"./chunk-ORHGY3QB.js";import{a as h}from"./chunk-TTU5ZZXZ.js";import"./chunk-7VDEWXGI.js";import"./chunk-DS5TO6ZD.js";import"./chunk-YCL7L6ZB.js";import{b as m}from"./chunk-PRDY3MHE.js";import"./chunk-IWEQS4A6.js";import"./chunk-W3672ANI.js";import{a as s}from"./chunk-AJAH6JFS.js";import"./chunk-OA25OZFH.js";import"./chunk-42DDVEBL.js";import"./chunk-IGPEYEWI.js";import"./chunk-VNYEAL6H.js";import"./chunk-N5SZHZZP.js";import"./chunk-K6EM5QMC.js";import"./chunk-EH4A6QLQ.js";import"./chunk-OCKAGFKQ.js";import{b as r}from"./chunk-IE7HJE6I.js";import"./chunk-P5UJIVHH.js";import"./chunk-U7JQSSPD.js";import{a as c}from"./chunk-2TPDHRRV.js";import"./chunk-UB5XWXZZ.js";import{a}from"./chunk-Y7Z3DYSJ.js";import"./chunk-XS7UUVPQ.js";import"./chunk-GOZAE5SK.js";import"./chunk-GVTLUYA2.js";import{a as o}from"./chunk-BHGUITJJ.js";import"./chunk-VZNGURHD.js";import"./chunk-LGFZXCM7.js";function T(e){e.value=e.value.replace(/\r\n|\n|\r/g," ").replace(/'/g,"\u2019").replace(/(?<a>^|\s)(?<b>")/g,"$1\u201C").replace(/"/g,"\u201D").replace("<","\uFF1C")}var y=e=>{e.setAttribute("form","dochat")};function x(e){e.id="dochat",c(e.elements).forEach(y)}function b(e){let t=g(e[5]);t.rows[0].cells[0].remove(),p(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}function A(e,t){t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),d(e))}function k(){let e=C({className:"fshChatTextArea",maxLength:512,name:"msg",required:!0});return y(e),e}var w=()=>!m()||u("header",m()).filter(h("Posted\xA0By")).length!==1||!r("enhanceChatTextEntry");function i(){if(w())return;let e=document.forms[0];x(e),b(e.elements);let t=k();o(t,"keypress",a(A,e.elements[5])),e.elements[4].replaceWith(t),o(e,"submit",a(T,t))}function l(){if(!r("wrapGuildChat"))return;let e=s("#pCC table table table table");e&&e.classList.add("fshGc")}function E(){l(),i();let e=f("chat_type");e&&e==="1"?n("Leader",0,3):n("Chat",0,3)}export{E as default};
//# sourceMappingURL=guildChat-WP3TFB2N.js.map