import indexAjaxDoc from '../ajax/indexAjaxDoc';
import viewStats from '../app/guild/groups/viewStats';
import groupViewStats from '../common/groupViewStats';
import $dataAccess from './$dataAccess';

function parseReport(doc) {
  if (!doc) return { s: false };
  const stats = groupViewStats(doc);
  return {
    r: {
      attributes: [
        { id: 0, value: stats.attack },
        { id: 1, value: stats.defense },
        { id: 2, value: stats.armor },
        { id: 4, value: stats.damage },
        { id: 3, value: stats.hp },
      ],
    },
  };
}

// Incomplete
async function groupStats(groupId) {
  return parseReport(
    await indexAjaxDoc({
      cmd: 'guild',
      subcmd: 'groups',
      subcmd2: 'viewstats',
      group_id: groupId,
    }),
  );
}

export default function daGroupStats(groupId) {
  return $dataAccess(viewStats, groupStats, groupId);
}
