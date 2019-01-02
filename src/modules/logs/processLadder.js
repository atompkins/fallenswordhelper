import calf from '../support/calf';
import parseDateAsTimestamp from '../system/parseDateAsTimestamp';
import setValue from '../system/setValue';

function isLadderReset(aRow) {
  return aRow.cells[2].children[0] &&
    aRow.cells[2].children[0].tagName === 'IMG' &&
    aRow.cells[2].children[0].src.indexOf('pvp_icon.gif') !== -1;
}

function saveLastResetTime(aRow) {
  var logTime = parseDateAsTimestamp(aRow.cells[1].textContent);
  if (logTime > calf.lastLadderReset) {
    setValue('lastLadderReset', logTime);
    calf.lastLadderReset = logTime;
  }
}

export default function processLadder(aRow, messageType) {
  if (messageType === 'Notification' && isLadderReset(aRow)) {
    saveLastResetTime(aRow);
  }
}
