<script>
  export let visible = true;

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

  $: {
    if (visible) {
      disableScroll();
    } else {
      enableScroll();
    }
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
<div class:visible on:click|self>
  <slot />
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
