import partial from '../common/partial';
import pipeRecallToQueue from './pipeRecallToQueue';
import pipeTakeToQueue from './pipeTakeToQueue';

var dfr;

function getDfr() {
  // return window.jQuery && jQuery.when();
  if (!dfr) {dfr = $.when();}
  return dfr;
}

export function queueTakeItem(invId, action) {
  // You have to chain them because they could be modifying the backpack
  dfr = getDfr().pipe(partial(pipeTakeToQueue, invId, action));
  return dfr;
}

export function queueRecallItem(invId, playerId, mode, action) {
  // You have to chain them because they could be modifying the backpack
  dfr = getDfr().pipe(partial(pipeRecallToQueue,
    invId, playerId, mode, action));
  return dfr;
}
