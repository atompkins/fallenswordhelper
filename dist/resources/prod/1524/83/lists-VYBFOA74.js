import{a as k,b as l}from"./chunk-JJNIPEZS.js";import{a as h}from"./chunk-743N7EMW.js";import{a as y}from"./chunk-GBYEPSFB.js";import{a as o}from"./chunk-WX7K45US.js";import{a as u}from"./chunk-LLPK5PYY.js";import{a as g}from"./chunk-WNBTLKBT.js";import{a as I}from"./chunk-XQLG4WHW.js";import{a as w,b}from"./chunk-SYKYS4HR.js";import{b as d}from"./chunk-DA5WSKUB.js";import{a as c}from"./chunk-2U7PEDGC.js";import{a as n}from"./chunk-SDVU75NC.js";import"./chunk-HGZRKBQO.js";import"./chunk-UEV7L5JP.js";import"./chunk-PVNYCWKC.js";import{a as p}from"./chunk-36R4KBE3.js";import"./chunk-4V4QHDJN.js";import"./chunk-E2T4BRJB.js";import{a as f}from"./chunk-HBYLRJZK.js";import"./chunk-HVA3CNPK.js";import"./chunk-NIRCQTAI.js";import{u as m}from"./chunk-XMFVZQFS.js";import"./chunk-7R4PXCUB.js";import"./chunk-63CI2ODV.js";var x='<div>This screen allows you to set up some quick search templates for the Auction House. The Display on AH column indicates if the quick search will show on the short list on the Auction House main screen. A maximum of 36 items can show on this list (It will not show more than 36 even if you have more than 36 flagged). To edit items, either use the large text area below, or add a new entry and delete the old one. You can always reset the list to the default values.</div><div class="fshSmall" id="fshAso"></div>';function v(){return{id:"fshAso",headers:["Category","Nickname","Quick Search Text","Display in AH?"],fields:["category","nickname","searchname","displayOnAH"],tags:["text","text","text","checkbox"],url:["","",`${m}@replaceme@`,""],currentItems:o("quickSearchList")||[],gmname:"quickSearchList",categoryField:"category"}}var r=0;function H(t){return r.url&&r.url[t]!==""}function L(t,e){return r.tags[t]==="checkbox"?`<input type="checkbox"${I(e)} disabled>`:H(t)?`<a href="${r.url[t].replace("@replaceme@",e)}">${e}</a>`:e}function T(t){let e="";for(let s=0;s<r.fields.length;s+=1)e+='<td class="fshCenter">',r.fields[s]!==r.categoryField&&(e+=`${L(s,t[r.fields[s]])}`),e+="</td>";return e}function q(t,e){return`${t}<th>${e}</th>`}function R(t,e,s){return r.categoryField&&(e===0||s[e-1][r.categoryField]!==t[r.categoryField])}function E(t,e,s,$){let i="<tr>";return R(e,s,$)&&(i+=`<td><span class="fshQs">${e[r.categoryField]}</span></td><td></td><td></td><td></td><td></td></tr><tr>`),i+=T(e),i+=`<td><span class="HelperTextLink" data-itemId="${s}" id="fshDel${s}">[Del]</span></td></tr>`,t+i}function O(){let t="<tr>";for(let e=0;e<r.tags.length;e+=1)t+=`<td align=center><input type="${r.tags[e]}" class="custominput" id="fshIn${r.fields[e]}"></td>`;return t}function a(){let t='<table cellspacing="2" cellpadding="2" class="fshLists" width="100%"><tr class="fshOr">';t+=r.headers.reduce(q,""),t+="<th>Action</th></tr>",t+=r.currentItems.reduce(E,""),t+=O(),t+=`<td><span class="HelperTextLink" id="fshAdd">[Add]</span></td></tr></table><table width="100%"><tr><td class="fshCenter"><textarea id="fshEd" class="fshEd">${g(r.currentItems)}</textarea></td></tr><tr><td class="fshCenter"><input id="fshSave" type="button" value="Save" class="custombutton">&nbsp;<input id="fshReset" type="button" value="Reset" class="custombutton"></td></tr></tbody></table>`,n(r.id)&&(c(t,n(r.id)),y(r.gmname,r.currentItems))}function N(t){let e=t.getAttribute("data-itemId");r.currentItems.splice(e,1),a()}var S=t=>n(`fshIn${r.fields[t]}`);function Q(){let t={};for(let e=0;e<r.fields.length;e+=1)t[r.fields[e]]=r.tags[e]==="checkbox"?S(e).checked:S(e).value;return t}function C(){let e=r.fields.length===0?n("fshIn0").value:Q();r.currentItems.push(e),a()}function D(){let t=u(n("fshEd").value);h(t)&&(r.currentItems=t,a())}function P(){r.id==="fshAso"?r.currentItems=u(f.quickSearchList):r.currentItems=[],a()}function j(){return[[l("fshReset"),P],[l("fshSave"),D],[l("fshAdd"),C],[t=>t.id.startsWith("fshDel"),N]]}function A(t){p(t,k(j()))}function ct(t){let e=t||d();c(w("Trade Hub Quick Search","","","")+x,e),r=v(),a(),A(e)}function lt(t){let e=t||d();c(b({title:"Quick Links",comment:"",spanId:"",button:"",divId:"qla"}),e),r={id:"qla",headers:["Name","URL",'New [<span class="fshLink" data-tooltip="Open page in a new window">?</span>]'],fields:["name","url","newWindow"],tags:["text","text","checkbox"],currentItems:o("quickLinks")||[],gmname:"quickLinks"},a(),A(e)}export{ct as injectAuctionSearch,lt as injectQuickLinkManager};
//# sourceMappingURL=lists-VYBFOA74.js.map