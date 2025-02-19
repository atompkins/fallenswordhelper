import { mount } from 'svelte';
import getValue from '../../system/getValue';
import GuildLog from './GuildLog.svelte';

const props = $state({ visible: true });
let thisModal = 0;

export default function mountReliclist() {
  if (!getValue('betaOptIn')) return;
  if (thisModal) {
    props.visible = true;
  } else {
    thisModal = mount(GuildLog, { props, target: document.body });
  }
}
