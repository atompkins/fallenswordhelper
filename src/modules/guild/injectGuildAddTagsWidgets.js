import {createInput} from '../common/cElement';
import {imageServer} from '../support/system';
import {pCC} from '../support/layout';
import takeitem from '../app/guild/inventory/takeitem';

function doItemTable(rows) {
  for (var i = 1; i < rows.length - 1; i += 2) {
    rows[i].cells[2].insertAdjacentHTML('beforeend',
      '&nbsp;<span class="sendLink">Fast BP</span>');
  }
}

function doCheckAll() {
  var boxes = document.querySelectorAll('#pCC input[name="tagIndex[]"]');
  Array.prototype.forEach.call(boxes, function(el) {
    el.click();
  });
}

function takeResult(self, data) {
  if (data.r === 0) {
    self.removeAttribute('style');
    self.className = 'fshGreen';
    self.textContent = 'Taken';
  }
}

function fastBp(el) {
  var itmId = el.parentNode.previousElementSibling.previousElementSibling
    .firstElementChild.value;
  takeitem(itmId).done(takeResult.bind(null, el));
  el.textContent = '';
  el.className = 'guildTagSpinner';
  el.style.backgroundImage = 'url(\'' + imageServer +
    '/skin/loading.gif\')';
}

function evtHdlr(e) {
  var self = e.target;
  if (self.value === 'Check All') {doCheckAll();}
  if (self.className === 'sendLink') {fastBp(self);}
}

function paintTable() {
  var nodeList = pCC.getElementsByTagName('table');
  if (nodeList.length > 0) {
    doItemTable(nodeList[nodeList.length - 1].rows);
  }
}

function checkAllBtn() {
  var checkAll = createInput({type: 'button', value: 'Check All'});
  var formTags = pCC.getElementsByTagName('form');
  if (formTags.length === 1) {
    formTags[0].previousElementSibling.cells[0].appendChild(checkAll);
  }
}

export default function injectGuildAddTagsWidgets() {
  pCC.addEventListener('click', evtHdlr);
  paintTable();
  checkAllBtn();
}
