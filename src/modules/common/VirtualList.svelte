<script>
  import { onMount, tick } from 'svelte';

  let {
    items,
    height = '100%',
    itemHeight = undefined,
    start = $bindable(0), // read-only, but visible to consumers via bind:start
    end = $bindable(0),
    children,
  } = $props();
  // local state
  let height_map = [];
  let rows;
  let viewport = $state();
  let contents = $state();
  let viewport_height = $state(0);
  let visible = $derived(
    items.slice(start, end).map((data, i) => {
      return { index: i + start, data };
    }),
  );
  let mounted = $state();

  let top = $state(0);
  let bottom = $state(0);
  let average_height;
  let refreshing = 0;

  async function refresh(items, viewport_height, itemHeight) {
    if (refreshing) return;
    refreshing = true;

    const isStartOverflow = items.length < start;

    if (isStartOverflow) {
      await scrollToIndex(items.length - 1, { behavior: 'auto' });
    }

    const { scrollTop } = viewport;

    await tick(); // wait until the DOM is up to date

    let content_height = top - scrollTop;
    let i = start;

    while (content_height < viewport_height && i < items.length) {
      let row = rows[i - start];

      if (!row) {
        end = i + 1;
        await tick(); // render the newly visible row
        row = rows[i - start];
      }

      if (row) {
      const row_height = (height_map[i] = itemHeight || row.offsetHeight);
      content_height += row_height;
      }

      i += 1;
    }

    end = i;

    const remaining = items.length - end;
    average_height = (top + content_height) / end;

    bottom = remaining * average_height;
    height_map.length = items.length;

    refreshing = false;
  }

  async function handle_scroll() {
    const { scrollTop } = viewport;

    for (let v = 0; v < rows.length; v += 1) {
      height_map[start + v] = itemHeight || rows[v].offsetHeight;
    }

    let i = 0;
    let y = 0;

    while (i < items.length) {
      const row_height = height_map[i] || average_height;
      if (y + row_height > scrollTop) {
        start = i;
        top = y;

        break;
      }

      y += row_height;
      i += 1;
    }

    while (i < items.length) {
      y += height_map[i] || average_height;
      i += 1;

      if (y > scrollTop + viewport_height) break;
    }

    end = i;

    const remaining = items.length - end;
    average_height = y / end;

    while (i < items.length) height_map[i++] = average_height;
    bottom = remaining * average_height;

    // TODO if we overestimated the space these
    // rows would occupy we may need to add some
    // more. maybe we can just call handle_scroll again?
  }

  async function scrollToIndex(index, opts) {
    const { scrollTop } = viewport;
    const itemsDelta = index - start;
    const _itemHeight = itemHeight || average_height;
    const distance = itemsDelta * _itemHeight;
    opts = {
      left: 0,
      top: scrollTop + distance,
      behavior: 'smooth',
      ...opts,
    };
    viewport.scrollTo(opts);
  }

  // trigger initial refresh
  onMount(() => {
    rows = contents.getElementsByTagName('svelte-virtual-list-row');
    mounted = true;
  });

  // whenever `items` changes, invalidate the current heightmap
  $effect(() => {
    if (mounted) refresh(items, viewport_height, itemHeight);
  });
</script>

<svelte-virtual-list-viewport
  bind:this={viewport}
  bind:offsetHeight={viewport_height}
  onscroll={handle_scroll}
  style="height: {height};"
>
  <svelte-virtual-list-contents
    bind:this={contents}
    style="padding-top: {top}px; padding-bottom: {bottom}px;"
  >
    {#each visible as row (row.index)}
      <svelte-virtual-list-row>
        {#if children}
          {@render children({ item: row.data })}
        {:else}
          Missing template
        {/if}
      </svelte-virtual-list-row>
    {/each}
  </svelte-virtual-list-contents>
</svelte-virtual-list-viewport>

<style>
  svelte-virtual-list-viewport {
    position: relative;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    display: block;
  }

  svelte-virtual-list-contents,
  svelte-virtual-list-row {
    display: block;
  }

  svelte-virtual-list-row {
    overflow: hidden;
  }
</style>
