import{a as E}from"./chunk-25LWYZ4A.js";import"./chunk-WZ6HHOUF.js";import{a as h,b as B}from"./chunk-X44EYXA3.js";import"./chunk-K6OJVQ6T.js";import{a as v}from"./chunk-ODZEMQE7.js";import"./chunk-EQ6XPZXK.js";import"./chunk-2AYZ6V4F.js";import"./chunk-7ET2CA5W.js";import{a as w}from"./chunk-ZQ6Q7AAO.js";import"./chunk-XBQPITPX.js";import{b as l}from"./chunk-GD4HMFZG.js";import{a as m}from"./chunk-U4IOE7YJ.js";import"./chunk-2FGL6JOK.js";import"./chunk-GJHRXFGS.js";import{a as b}from"./chunk-JZUIGPQK.js";import"./chunk-E7LHQKU5.js";import"./chunk-ACUTGVKN.js";import"./chunk-GRW7NX42.js";import{a as i}from"./chunk-6RYYSQKY.js";import{a as n}from"./chunk-OMKWEQGC.js";import"./chunk-NRM2IEBO.js";import"./chunk-EDPHPGYE.js";import{a as g}from"./chunk-6UGBR7LD.js";import{a}from"./chunk-BRACYM44.js";import{a as f}from"./chunk-HSGQLATB.js";import"./chunk-ABHYZHAG.js";import"./chunk-JYV3Y4PK.js";import{a as p}from"./chunk-VYOJRJTP.js";import"./chunk-IZEIZGGY.js";import"./chunk-H4RRBTG7.js";import"./chunk-D4RSYPIY.js";import"./chunk-S2PPJ2GD.js";import{b as d}from"./chunk-MIGTOE2L.js";import{a as r}from"./chunk-UYUWQQUH.js";import"./chunk-FMIILUE6.js";import"./chunk-XSTNX5IW.js";import"./chunk-UVCMQZY6.js";import"./chunk-NGIDL4MJ.js";var s,o,c,u,k=[[/</g,"&lt"],[/>/g,"&gt"],[/\n/g,"<br>"],[/\[(\/?[biu])\]/g,"<$1>"],[/\\\\/g,"&#92"],[/\\/g,""]],x=[[/\[(\/?block)\]/g,"<$1quote>"],[/\[list\]/g,'<ul class="list">'],[/\[\/list\]/g,"</ul>"],[/\[\*\](.*?)<br>/g,"<li>$1</li>"]];function I(e,t){return e.replace(t[0],t[1])}function H(e,t){return t.reduce(I,e)}function N(e){let t=H(e,k);return r.cmd==="guild"&&(t=H(t,x)),t}function L(){let e="fshBioProfile";r.cmd==="guild"&&(r.subcmd==="hall"?e="fshBioHall":e="fshBioGuild");let t=n({className:`fshBioContainer ${e}`}),y=n({className:"fshBioHeader fshBioInner",innerHTML:"Preview"});i(t,y),c=n({className:"fshBioPreview fshBioInner"}),i(t,c),i(o.parentNode,t)}function C(){r.cmd==="profile"&&b(l,'<div>`~This will allow FSH Script users to select buffs from your bio~`<br>You can use the [cmd] tag as well to determine where to put the "Ask For Buffs" button<br><br><blockquote><ul class="list"><li>Note 1: The ` and ~ characters are on the same key on US QWERTY keyboards. ` is <b>NOT</b> an apostrophe.</li><li>Note 2: Inner text will not contain special characters (non-alphanumeric).</li><li>P.S. Be creative with these! Wrap your buff pack names in them to make buffing even easier!</li></ul></blockquote></div>')}function P(){let e=E(u.value);e&&(s=e,w("bioEditLines",e),o.rows=s)}function S(){let e=n({innerHTML:"<br>Display "});u=m({min:1,max:99,type:"number",value:s}),i(e,u),v(e," Lines ");let t=m({className:"custombutton",value:"Update Rows To Show",type:"button"});a(t,P),i(e,t),i(l,e)}function T(){let e=N(o.value),t=B(e);g(t||e,c)}function V(){s=d("bioEditLines"),o=p("textInputBox"),!!o&&(L(),C(),S(),o.rows=s,r.cmd==="profile"&&a(o.parentNode,h),f(o,"keyup",T),T())}export{V as default};
//# sourceMappingURL=bioWidgets-ZFABRFJY.js.map