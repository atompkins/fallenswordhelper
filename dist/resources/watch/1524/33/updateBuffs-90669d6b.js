import { M as arrayFrom, y as getElementById, G as getTextTrim, b as createDiv, m as getArrayByTagName, D as querySelector } from './calfSystem-cc2b30b5.js';
import { n as numberIsNaN } from './numberIsNaN-c188f177.js';
import { s as setTipped } from './setTipped-90ca799b.js';

function textNodes(node) {
  if (node instanceof Node) {
    return node.nodeType === Node.TEXT_NODE;
  }
}

const BARRICADE = 98;
const ENTRENCH = 85;
const NMV = 60;

function getStatVal(stat) {
  return Number(
    arrayFrom(
      getElementById(`stat-${stat.toLowerCase()}`).childNodes,
    )
      .filter(textNodes)
      .map(getTextTrim)
      .join(''),
  );
}

function gotPrimary(buffImg, bold, primaryStat) {
  const secondaryStat = getStatVal(bold[3]);
  const buffEffect = Math.floor(
    primaryStat * (Number(bold[1].replace(/[+%]/g, '')) / 100),
  );
  setTipped(buffImg.dataset.tipped.replace('</center></div>',
    `<br>Buff Effect: ${String(buffEffect)}<br>${bold[2]}: ${
      String(primaryStat - buffEffect)}&nbsp;&nbsp;${bold[3]}: ${
      String(secondaryStat + buffEffect)}$&`), buffImg);
}

function gotImg(buffImg) {
  const mock = createDiv({ innerHTML: buffImg.dataset.tipped });
  const bold = getArrayByTagName('b', mock).map((b) => getTextTrim(b));
  const primaryStat = getStatVal(bold[2]);
  if (!numberIsNaN(primaryStat)) { gotPrimary(buffImg, bold, primaryStat); }
}

function updateBuffTip(buffId) {
  const buffImg = querySelector(
    `#profileRightColumn img[src$="/${String(buffId)}.png"]`,
  );
  if (buffImg) { gotImg(buffImg); }
}

function updateBuffs() {
  [BARRICADE, ENTRENCH, NMV].forEach(updateBuffTip);
}

export default updateBuffs;
//# sourceMappingURL=updateBuffs-90669d6b.js.map
