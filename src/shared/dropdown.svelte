<script lang='ts'>
  let open = false;
  let fonts = ["Helvetica", "Fira Mono", "Jet Brains", "Comic Sans", "Arial"];
  let value = fonts[0];
</script>
<div class="relative inline-block">
  <button on:click={() => (open = !open)}>
    <span
      class="inline-flex items-center justify-between border border-gray-400 rounded p-1"
    >
      {value}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 block ml-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </span>
  </button>
  {#if open}
    <div
      class="rounded absolute bg-gray-50 border border-gray-400 mt-1 whitespace-nowrap z-10"
    >
      {#each fonts as font}
        <div
          class="p-1 border-b border-gray-400 last-of-type:border-0 cursor-pointer hover:bg-slate-200"
          style="font-family: {font}"
          on:click={() => {
            value = font;
            open = false;
          }}
        >
          {font}
        </div>
      {/each}
    </div>
  {/if}
</div>
