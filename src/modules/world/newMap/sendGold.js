import addCommas from '../../system/addCommas';
import getValue from '../../system/getValue';
import indexAjaxData from '../../ajax/indexAjaxData';
import infoBoxFrom from '../../common/InfoBoxFrom';
import setValue from '../../system/setValue';
import { defFetchPlayerStats, defPlayerGold } from '../../support/constants';

let goldAmount;
let sendGoldonWorld;

function doneSendGold(data) {
  const info = infoBoxFrom(data);
  if (info === 'You successfully sent gold!' || info === '') {
    setValue('currentGoldSentTotal',
      parseInt(getValue('currentGoldSentTotal'), 10)
      + parseInt(getValue('goldAmount'), 10));
    GameData.fetch(defFetchPlayerStats);
  }
}

export function doSendGold() { // jQuery
  if (!sendGoldonWorld) { return; }
  indexAjaxData({
    cmd: 'trade',
    subcmd: 'sendgold',
    xc: window.ajaxXC,
    target_username: $('#HelperSendTo').html(),
    gold_amount: $('#HelperSendAmt').html().replace(/[^\d]/g, ''),
  }).then(doneSendGold);
}

function statbarGoldBackground(colour) {
  $('#statbar-gold').css('background-color', colour);
}

function updateSendGoldOnWorld() { // jQuery
  $('#HelperSendTotal').html(addCommas(getValue('currentGoldSentTotal')));
  if (Number(GameData.player().gold) > goldAmount) {
    statbarGoldBackground('red');
  } else {
    statbarGoldBackground('inherit');
  }
}

function extraHtml() {
  return '<dt class="stat-gold-sendTo">Send To:</dt>'
    + `<dd id="HelperSendTo">${getValue('goldRecipient')}</dd>`
    + '<dt class="stat-gold-sendAmt">Amount:</dt>'
    + `<dd id="HelperSendAmt">${addCommas(goldAmount)}</dd>`
    + '<dt class="stat-gold-sendTo">Send?</dt>'
    + '<dd><input id="HelperSendGold" value="Send!" class="custombutton" '
    + 'type="submit"><input type="hidden" id="xc" value=""</dd>'
    + '<dt class="stat-gold-sendTotal">Total Sent:</dt>'
    + `<dd id="HelperSendTotal">${
      addCommas(getValue('currentGoldSentTotal'))}</dd>`;
}

function prepareSendGoldOnWorld() {
  goldAmount = getValue('goldAmount');
  $('#statbar-gold-tooltip-general').append(extraHtml());
  $('#HelperSendGold').on('click', doSendGold);
  updateSendGoldOnWorld();
  $.subscribe(defPlayerGold, updateSendGoldOnWorld);
}

export function injectSendGoldOnWorld() { // jQuery
  sendGoldonWorld = getValue('sendGoldonWorld');
  if (sendGoldonWorld) { prepareSendGoldOnWorld(); }
}