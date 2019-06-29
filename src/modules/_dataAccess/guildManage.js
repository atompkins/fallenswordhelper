import {arrayFrom} from '../common/arrayFrom';
import createDocument from '../system/createDocument';
import {dataRows} from '../common/dataRows';
import {getElementById} from '../common/getElement';
import getElementsByTagName from '../common/getElementsByTagName';
import getTextTrim from '../common/getTextTrim';
import indexAjaxData from '../ajax/indexAjaxData';
import intValue from '../system/intValue';
import {nowSecs} from '../support/now';
import {def_table, lastActivityRE} from '../support/constants';

function lastActivity(tipped) {
  const activity = tipped.match(lastActivityRE);
  return nowSecs - (
    Number(activity[1]) * 24 * 60 * 60 +
    Number(activity[2]) * 60 * 60 +
    Number(activity[3]) * 60 +
    Number(activity[4])
  );
}

function formatRow(row, i) {
  const tipped = row.cells[1].children[0].dataset.tipped;
  const stamina = tipped.match(/Stamina:<\/td><td>(\d+) \/ (\d+)</);
  return {
    id: 0,
    name: getTextTrim(row.cells[1].children[0]),
    level: Number(getTextTrim(row.cells[2])),
    current_stamina: Number(stamina[1]),
    max_stamina: Number(stamina[2]),
    xp: 0,
    vl: Number(tipped.match(/VL:<\/td><td>(\d+)</)[1]),
    last_activity: lastActivity(tipped),
    guild_xp: intValue(getTextTrim(row.cells[4])),
    rank_name: getTextTrim(row.cells[3]),
    rank_index: i
  };
}

function byRank(prev, member) {
  const thisRankName = member.rank_name;
  const thisRankIndex = member.rank_index;
  const thisRankObj = prev.find(e => e.name === thisRankName);
  if (thisRankObj) {
    thisRankObj.members.push(member);
  } else {
    prev.push({id: thisRankIndex, name: thisRankName, members: [member]});
  }
  return prev;
}

function parseReport(html) {
  const doc = createDocument(html);
  const pCC = getElementById('pCC', doc);
  const tables = getElementsByTagName(def_table, pCC);
  const memberList = tables[tables.length - 1];
  if (!memberList) {return {s: false};}
  const memberRows = arrayFrom(memberList.rows).filter(dataRows(5, 1));
  const memberData = memberRows.map(formatRow);
  const ranksData = memberData.reduce(byRank, []);
  return {r: {ranks: ranksData}, s: true};
}

// Incomplete
export default function guildManage() {
  return indexAjaxData({cmd: 'guild', subcmd: 'manage'}).then(parseReport);
}
