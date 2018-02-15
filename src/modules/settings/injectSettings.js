import calf from '../support/calf';
import findNode from '../system/findNode';
import {getElementById} from '../common/getElement';
import getValue from '../system/getValue';
import injectMonsterLog from '../monstorLog';
import injectNotepadShowLogs from '../combatLog';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';
import jConfirm from '../common/jConfirm';
import jQueryDialog from '../chrome/jQueryDialog';
import jQueryNotPresent from '../common/jQueryNotPresent';
import {saveBoxes} from './settingObj';
import {sendEvent} from '../support/fshGa';
import setValue from '../system/setValue';
import setupConfigData from './configData';
import toggleVisibilty from '../common/toggleVisibilty';
import {createBr, createSpan} from '../common/cElement';

function getVars() {
  calf.showBuffs = getValue('showHuntingBuffs');
  calf.buffs = getValue('huntingBuffs');
  calf.buffsName = getValue('huntingBuffsName');
  calf.buffs2 = getValue('huntingBuffs2');
  calf.buffs2Name = getValue('huntingBuffs2Name');
  calf.buffs3 = getValue('huntingBuffs3');
  calf.buffs3Name = getValue('huntingBuffs3Name');
  calf.doNotKillList = getValue('doNotKillList');

  calf.bountyListRefreshTime = getValue('bountyListRefreshTime');
  calf.wantedNames = getValue('wantedNames');
  calf.combatEvaluatorBias = getValue('combatEvaluatorBias');
  calf.enabledHuntingMode = getValue('enabledHuntingMode');
  calf.storage = (JSON.stringify(localStorage).length /
    (5 * 1024 * 1024) * 100).toFixed(2);
}

function toggleTickAllBuffs(e) { // jQuery
  var allItems = $('input[name^="blockedSkillList"]:visible',
    '#settingsTabs-4');
  var tckTxt = $(e.target);
  allItems.prop('checked', tckTxt.text() === 'Tick all buffs');
  if (tckTxt.text() === 'Tick all buffs') {
    tckTxt.text('Untick all buffs');
  } else {
    tckTxt.text('Tick all buffs');
  }
}

function clearStorage() {
  jConfirm('Clear localStorage',
    'Are you sure you want to clear you localStorage?',
    function() {localStorage.clear();}
  );
}

function saveValueForm(oForm, name) { // Legacy
  var formElement =
    findNode('//input[@name="' + name + '"]', oForm);
  if (formElement.getAttribute('type') === 'checkbox') {
    setValue(name, formElement.checked);
  } else {
    setValue(name, formElement.value);
  }
}

function setMaxCompressedCharacters(oForm) { // Legacy
  var maxCompressedCharacters =
    findNode('//input[@name="maxCompressedCharacters"]', oForm);
  var maxCompressedCharactersValue = Number(maxCompressedCharacters.value);
  if (isNaN(maxCompressedCharactersValue) ||
      maxCompressedCharactersValue <= 50) {
    maxCompressedCharacters.value = 1500;
  }
}

function setMaxCompressedLines(oForm) { // Legacy
  var maxCompressedLines =
    findNode('//input[@name="maxCompressedLines"]', oForm);
  var maxCompressedLinesValue = Number(maxCompressedLines.value);
  if (isNaN(maxCompressedLinesValue) || maxCompressedLinesValue <= 1) {
    maxCompressedLines.value = 25;
  }
}

function setGuildLogHistoryPages(oForm) { // Legacy
  var newGuildLogHistoryPages =
    findNode('//input[@name="newGuildLogHistoryPages"]', oForm);
  var newGuildLogHistoryPagesValue = Number(newGuildLogHistoryPages.value);
  if (isNaN(newGuildLogHistoryPagesValue) ||
      newGuildLogHistoryPagesValue <= 1) {
    newGuildLogHistoryPages.value = 25;
  }
}

function setMaxGroupSizeToJoin(oForm) { // Legacy
  var maxGroupSizeToJoin =
    findNode('//input[@name="maxGroupSizeToJoin"]', oForm);
  var maxGroupSizeToJoinValue = Number(maxGroupSizeToJoin.value);
  if (isNaN(maxGroupSizeToJoinValue) || maxGroupSizeToJoinValue <= 1) {
    maxGroupSizeToJoin.value = 11;
  }
}

function saveConfig(evt) { // Legacy
  var oForm = evt.target.form;
  // bio compressor validation logic
  setMaxCompressedCharacters(oForm);
  setMaxCompressedLines(oForm);
  setGuildLogHistoryPages(oForm);
  setMaxGroupSizeToJoin(oForm);
  var combatEvaluatorBiasElement =
    findNode('//select[@name="combatEvaluatorBias"]', oForm);
  var combatEvaluatorBias = Number(combatEvaluatorBiasElement.value);
  setValue('combatEvaluatorBias', combatEvaluatorBias);
  var enabledHuntingModeElement =
    findNode('//select[@name="enabledHuntingMode"]', oForm);
  var enabledHuntingMode = enabledHuntingModeElement.value;
  setValue('enabledHuntingMode', enabledHuntingMode);

  saveBoxes.forEach(saveValueForm.bind(null, oForm));

  $('#dialog_msg').text('FS Helper Settings Saved').dialog('open');
}

function showLogs() {
  sendEvent('settingsPage', 'injectNotepadShowLogs');
  jQueryDialog(injectNotepadShowLogs);
}

function showMonsterLogs() {
  sendEvent('settingsPage', 'injectMonsterLog');
  jQueryDialog(injectMonsterLog);
}

function createEventListeners() {
  var tickAll = createSpan({
    id: 'fshAllBuffs',
    className: 'fshLink',
    textContent: 'Tick all buffs'
  });
  tickAll.addEventListener('click', toggleTickAllBuffs);
  var inject = getElementById('settingsTabs-4').firstElementChild
    .rows[0].cells[0];
  inject.appendChild(createBr());
  inject.appendChild(tickAll);

  getElementById('fshClearStorage')
    .addEventListener('click', clearStorage);

  getElementById('Helper:SaveOptions')
    .addEventListener('click', saveConfig);
  getElementById('Helper:ShowLogs')
    .addEventListener('click', showLogs);
  getElementById('Helper:ShowMonsterLogs')
    .addEventListener('click', showMonsterLogs);

  getElementById('toggleShowGuildSelfMessage')
    .addEventListener('click', toggleVisibilty);
  getElementById('toggleShowGuildFrndMessage')
    .addEventListener('click', toggleVisibilty);
  getElementById('toggleShowGuildPastMessage')
    .addEventListener('click', toggleVisibilty);
  getElementById('toggleShowGuildEnmyMessage')
    .addEventListener('click', toggleVisibilty);
}

export default function injectSettings() { // jQuery.min
  if (jQueryNotPresent()) {return;}
  getVars();
  setupConfigData();
  var settingsTabs = getElementById('settingsTabs');
  insertHtmlBeforeEnd(settingsTabs, '<div id="fshSettings">' +
    calf.configData + '</div>');
  if ($(settingsTabs).tabs('length') > 0) {
    $(settingsTabs).tabs('add', '#fshSettings', 'FSH Settings');
  }
  createEventListeners();
  setValue('minGroupLevel', getElementById('settingsTabs-1')
    .firstElementChild.lastElementChild.rows[1].cells[1].firstElementChild
    .value);
}
