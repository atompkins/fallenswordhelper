<script>
  import { tick } from 'svelte';
  import uniq from '../../../common/uniq';

  let messages = [];
  const mc = window.$('#messageCenter').data().hcsWorldMessageCenter;

  function* idGenerator() {
    for (let id = 0; ; id++) {
      yield id;
    }
  }

  const idIterator = idGenerator();
  const getId = () => idIterator.next().value;

  function repos() {
    mc._reposition();
  }

  async function displayMessage(msg, type, time = 3000) {
    const id = getId();
    messages = [...messages, { msg, type, expire: id }];
    setTimeout(() => {
      messages = messages.filter(({ expire }) => expire !== id);
    }, time);
    await tick();
    repos();
  }

  const getMsgs = (msgs) =>
    uniq(msgs, 'msg').map(({ msg, type }) => ({
      msg,
      type,
      count: msgs.filter(({ msg: thisMsg }) => thisMsg === msg).length,
    }));

  function destroy(deleteMsg) {
    messages = messages.filter(({ msg }) => msg !== deleteMsg);
    repos();
  }

  mc._displayMessage = displayMessage;
</script>

{#each getMsgs(messages) as { msg, type, count } (msg)}
  <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
  <div class="fsh-message {type}" on:click={() => destroy(msg)}>
    {msg}
    {#if count > 1}
      <div class="count">x{count}</div>
    {/if}
  </div>
{/each}

<style>
  @keyframes scale {
    0% {
      transform: scale(0, 0);
    }
    100% {
      transform: scale(1, 1);
    }
  }
  .fsh-message {
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 4px;
    font-size: 11px;
    margin-bottom: 10px;
    margin-top: 4px;
    padding: 4px 2px;
    position: relative;
    text-align: center;
  }
  .fsh-message .count {
    position: absolute;
    top: -6px;
    left: -10px;
    border-radius: 100%;
    background: #fff;
    padding: 4px;
    box-shadow: 0px 0px 10px #000;
    border: 1px solid gray;
    font-size: smaller;
    color: black;
    text-shadow: none;
    animation-duration: 0.2s;
    animation-name: scale;
    animation-fill-mode: backwards;
  }
</style>
