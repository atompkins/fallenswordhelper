<script>
  import { cdn } from '../../system/system';

  let { title = '', flag = 0 } = $props();

  const boolToString = (e) => String(Number(e));
</script>

<div>
  <div class="top">{title}</div>
  <div class="bottom">
    {#if typeof flag === 'boolean'}
      <img alt="Flag" src="{cdn}ui/arena/specials_{boolToString(flag)}.png" />
    {:else}
      {flag}
    {/if}
  </div>
</div>

<style>
  .bottom {
    height: 16px;
  }
  .top {
    height: 14px;
  }
</style>
