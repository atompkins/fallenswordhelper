<script>
  import daJoinAll from '../../_dataAccess/daJoinAll';
  import daViewGroups from '../../_dataAccess/daViewGroups';
  import sendEvent from '../../analytics/sendEvent';
  import playerName from '../../common/playerName';
  import calf from '../../support/calf';
  import { joinUnderUrl, joinallUrl } from '../../support/constants';

  let joining = $state(0);
  let groupJoinUrl = $state(joinallUrl);
  let groupJoinText = $state('');

  const smallEnough = (g) =>
    !calf.enableMaxGroupSizeToJoin ||
    g.members.length < calf.maxGroupSizeToJoin;
  const hasPlayer = (m) => m.name === playerName();
  const isOpen = (g) => !g.members.find(hasPlayer);
  const getId = (g) => g.id;

  if (calf.enableMaxGroupSizeToJoin) {
    groupJoinUrl = joinUnderUrl;
    groupJoinText = ` less than size ${calf.maxGroupSizeToJoin}`;
  }

  async function processGroups(json) {
    const openGroups = json.r.filter(smallEnough).filter(isOpen).map(getId);
    if (openGroups.length) {
      await daJoinAll(openGroups);
    }
  }

  async function doJoinAll() {
    const json = await daViewGroups();
    if (json?.s) {
      await processGroups(json);
    }
  }

  function handleClick(e) {
    if (!joining) {
      e.preventDefault();
      sendEvent('notification', 'Join All');
      joining = 1;
    }
  }
</script>

<a href={groupJoinUrl}>
  <span id="notification-icon-guild-group" class="notification-icon"></span>
  {#if joining}
    {#await doJoinAll()}
      <span class="notification-content fshSpinner fix-classic-theme"></span>
    {:then}
      <p class="notification-content" style="line-height: 32px;">Joined.</p>
    {/await}
  {:else}
    <p class="notification-content">
      <button onclick={handleClick} type="button">
        Join all attack groups{groupJoinText}.
      </button>
    </p>
  {/if}
</a>

<style>
  .fix-classic-theme {
    position: relative;
    left: 0;
  }
  button {
    background-color: transparent;
    border: none;
    color: inherit;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    height: 38px;
    padding: 0;
  }
</style>
