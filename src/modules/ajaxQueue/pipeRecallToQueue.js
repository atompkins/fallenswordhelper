import equipItem from '../ajax/equipItem';
import recallItem from '../ajax/recallItem';
import useItem from '../ajax/useItem';
import errorDialog from '../common/errorDialog';
import backpack from './backpack';
import doAction from './doAction';

function gotBackpack(action, data, bpData) {
  if (!bpData) return;
  const lastBackpackItem = bpData.items[bpData.items.length - 1].a;
  if (action === 'wear') {
    return doAction(equipItem, lastBackpackItem, data);
    // Return recall status irrespective of the status of the equipitem
  }
  if (action === 'use') {
    return doAction(useItem, lastBackpackItem, data);
    // Return recall status irrespective of the status of the useitem
  }
}

async function recallItemStatus(action, data) {
  if (data.r === 0 && action !== 'recall') {
    const json = await backpack();
    gotBackpack(action, data, json);
  }
  return data;
}

export default async function pipeRecallToQueue(invId, playerId, mode, action) {
  const json = await recallItem(invId, playerId, mode);
  errorDialog(json);
  return recallItemStatus(action, json);
}
