<script>
  import sendEvent from '../../analytics/sendEvent';
  import jsonStringify from '../../common/jsonStringify';
  import confirm from '../../modal/confirm.svelte';
  import ModalTitled from '../../modal/ModalTitled.svelte';
  import { combatLogClear, combatLogGetAll } from '../../system/idbLogger';

  let { visible = $bindable(true) } = $props();
  let log = $state([]);
  let textArea = $state(0);

  function close() {
    sendEvent('Combat Log', 'close');
    visible = false;
  }

  function notepadCopyLog() {
    textArea.focus();
    textArea.select();
  }

  async function init() {
    log = (await combatLogGetAll()) ?? [];
  }

  async function clearStorage() {
    sendEvent('Combat Log', 'clear storage');
    const yes = await confirm('Are you sure you want to clear your log?');
    if (yes) {
      log = [];
      combatLogClear();
    }
  }
</script>

<ModalTitled {close} {visible}>
  {#snippet title()}
    Combat Log
  {/snippet}
  {#await init() then}
    <div class="textContainer">
      <textarea bind:this={textArea} readonly>{jsonStringify(log)}</textarea>
    </div>
    <div class="bottom">
      <button onclick={notepadCopyLog} type="button">Select All</button>
      <button onclick={clearStorage} type="button">Clear</button>
    </div>
  {/await}
</ModalTitled>

<style>
  div {
    width: 620px;
  }
  .textContainer {
    text-align: center;
  }
  textarea {
    background-color: white;
    font-family: Consolas, 'Lucida Console', 'Courier New', monospace;
    height: 380px;
    width: 580px;
  }
  .bottom {
    display: flex;
    justify-content: space-around;
    margin-bottom: 8px;
    margin-top: 8px;
  }
</style>
