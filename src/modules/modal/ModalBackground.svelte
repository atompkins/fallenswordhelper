<script>
  let { close, children, visible = true } = $props();

  let bgDiv = $state();

  let atBottom;
  let docScrollY;
  let docTop;

  function disableScroll() {
    if (!document.body.classList.contains('noscroll')) {
      atBottom = true;
      docScrollY = window.scrollY;
      docTop = document.body.style.top;
      document.body.classList.add('noscroll');
      document.body.style.top = `-${docScrollY}px`;
    }
  }

  function enableScroll() {
    if (atBottom) {
      document.body.classList.remove('noscroll');
      document.body.style.top = docTop || '';
      window.scrollTo(0, docScrollY);
    }
  }

  function bgClose(e) {
    if (e.target === bgDiv) {
      close();
    }
  }

  $effect(() => {
    if (visible) {
      disableScroll();
    } else {
      enableScroll();
    }
  });
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div bind:this={bgDiv} class:visible onclick={bgClose}>
  {@render children?.()}
</div>

<style>
  :global(body.noscroll) {
    position: fixed;
    overflow-y: scroll;
    width: 100%;
  }

  div {
    background: rgba(0, 0, 0, 0.6);
    color-scheme: dark;
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    transform: translateX(-1000vw);
    width: 100%;
    z-index: 120;
  }

  .visible {
    transform: none;
  }
</style>
