<script>
  import sendEvent from '../../analytics/sendEvent';
  import isArray from '../../common/isArray';
  import jsonParse from '../../common/jsonParse';
  import getValue from '../../system/getValue';
  import setValue from '../../system/setValue';

  let current = getValue('quickLinks');
  let badJson = 0;

  const isGood = () => isArray(jsonParse(current));
  const isBad = () => !isGood();
  const doSave = () => setValue('quickLinks', current.trim());

  function save() {
    sendEvent('Quick Links Raw Editor', 'Save');
    if (isGood()) doSave();
    else badJson = 1;
  }

  function reset() {
    sendEvent('Quick Links Raw Editor', 'Reset');
    current = '[]';
    badJson = 0;
    doSave();
  }
</script>

<div class="container">
  <div class="textContainer">
    <textarea
      bind:value={current}
      class:invalid={badJson}
      on:blur={() => {
        badJson = isBad();
      }}
      on:focus={() => {
        badJson = 0;
      }}
    ></textarea>
  </div>
  <div class="bottom">
    <button on:click={save} type="button">Save</button>
    <button on:click={reset} type="button">Reset</button>
  </div>
</div>

<style>
  .container {
    width: 640px;
  }
  .textContainer {
    padding: 4px;
    text-align: center;
  }
  textarea {
    background-color: white;
    box-sizing: border-box;
    font-family: Consolas, 'Lucida Console', 'Courier New', monospace;
    height: 380px;
    width: 100%;
  }
  .bottom {
    display: flex;
    justify-content: space-around;
    margin-bottom: 8px;
    margin-top: 8px;
  }
  textarea.invalid {
    box-shadow: 0 0 5px 1px red;
  }
</style>
