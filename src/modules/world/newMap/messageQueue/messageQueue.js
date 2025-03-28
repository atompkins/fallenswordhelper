import { mount } from 'svelte';
import getElementById from '../../../common/getElementById';
import getValue from '../../../system/getValue';
import MessageQueue from './MessageQueue.svelte';

const startApp = (target) => mount(MessageQueue, { target });

export default function messageQueue() {
  if (getValue('messageStack')) startApp(getElementById('messageCenter'));
}
