import { $ as $dataAccess, z as getElementById, c2 as injectGuild, f as insertHtmlBeforeEnd, F as querySelectorArray, S as clickThis, A as setText, s as partial, ao as cdn, g as getElementsByTagName, p as pCC, i as insertElement, o as onclick } from './calfSystem-06ff1f7b.js';
import { c as createInput } from './createInput-5ef49776.js';
import { t as takeItem, g as guildInventory } from './takeItem-1a094b82.js';
import './guild-3d9aec92.js';
import './dialog-bd85dd64.js';
import './dialogMsg-eb4e9d8f.js';
import './indexAjaxJson-d3f06031.js';

function formatResults(json) {
  if (json.r === 0) { return { s: true }; }
  return { e: { message: json.m }, s: false };
}

function gsTake(invId) {
  return takeItem(invId).then(formatResults);
}

function takeitem(invId) {
  return guildInventory({
    subcmd2: 'takeitem',
    guildstore_id: invId,
  });
}

function daGsTake(invId) {
  return $dataAccess(takeitem, gsTake, invId);
}

function doItemTable(checkbox) {
  insertHtmlBeforeEnd(checkbox.parentNode.nextElementSibling
    .nextElementSibling, '&nbsp;<span class="sendLink">Fast BP</span>');
}

function doCheckAll() {
  querySelectorArray('#pCC input[name="tagIndex[]"]').forEach(clickThis);
}

function takeResult(target, data) {
  if (data.s) {
    target.removeAttribute('style');
    // eslint-disable-next-line no-param-reassign
    target.className = 'fshGreen';
    setText('Taken', target);
  }
}

function fastBp(el) {
  const itmId = el.parentNode.previousElementSibling.previousElementSibling
    .children[0].value;
  daGsTake(itmId).then(partial(takeResult, el));
  setText('', el);
  // eslint-disable-next-line no-param-reassign
  el.className = 'guildTagSpinner';
  // eslint-disable-next-line no-param-reassign
  el.style.backgroundImage = `url('${cdn
  }ui/misc/spinner.gif')`;
}

function evtHdlr(e) {
  const { target } = e;
  if (target.value === 'Check All') { doCheckAll(); }
  if (target.className === 'sendLink') { fastBp(target); }
}

function paintTable() {
  querySelectorArray('#pCC input[name="tagIndex[]"]').forEach(doItemTable);
}

function checkAllBtn() {
  const checkAll = createInput({ type: 'button', value: 'Check All' });
  const formTags = getElementsByTagName('form', pCC);
  if (formTags.length === 1) {
    insertElement(formTags[0].previousElementSibling.cells[0], checkAll);
  }
}

function doItemTagging() {
  onclick(pCC, evtHdlr);
  paintTable();
  checkAllBtn();
}

function injectGuildAddTagsWidgets() {
  if (getElementById('tagging_cost')) {
    doItemTagging();
  } else {
    injectGuild();
  }
}

export default injectGuildAddTagsWidgets;
//# sourceMappingURL=injectGuildAddTagsWidgets-f0444325.js.map
