import { m as getArrayByTagName, bN as pCL, C as getText, c as calf, bY as joinallUrl, bZ as joinUnderUrl } from './calfSystem-06ff1f7b.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-c7ff59a2.js';

function findNewGroup(el) {
  if (!getText(el).includes('New attack group created.')) { return; }
  let groupJoinHTML = '';
  if (!calf.enableMaxGroupSizeToJoin) {
    groupJoinHTML = `<a href="${joinallUrl}"><span `
      + 'class="notification-icon"></span><p class="notification-content">'
      + 'Join all attack groups.</p></a>';
  } else {
    groupJoinHTML = `<a href="${joinUnderUrl}"><span `
      + 'class="notification-icon"></span><p class="notification-content">'
      + `Join all attack groups less than size ${calf.maxGroupSizeToJoin
      }.</p></a>`;
  }
  insertHtmlAfterEnd(el, `<li class="notification">${groupJoinHTML}</li>`);
}

function injectJoinAllLink() {
  getArrayByTagName('li', pCL).forEach(findNewGroup);
}

export default injectJoinAllLink;
//# sourceMappingURL=injectJoinAllLink-1d8c7090.js.map