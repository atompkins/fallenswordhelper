import { mount } from 'svelte';
import getElementById from '../common/getElementById';
import { pcc } from '../support/layout';
import task from '../support/task';
import OneByOne from './OneByOne.svelte';
import Trade from './Trade.svelte';

const startOneByOne = (sendItems) =>
  mount(OneByOne, { target: sendItems.parentNode });

function oneByOne() {
  const sendItems = getElementById('send-items');
  if (sendItems) startOneByOne(sendItems);
}

const startTrade = () => mount(Trade, { target: pcc() });

export default function trade() {
  const tradeItems = getElementById('trade-items');
  if (!tradeItems) return;
  task(3, oneByOne);
  startTrade();
}
