<script lang="ts">
  import { createEventDispatcher } from "svelte";

  let open = false;
  export let options: any[];
  export let value: any;

  const dispatch = createEventDispatcher();
</script>

<div class="relative inline-block">
  <button on:click={() => (open = !open)}>
    <span
      class="min-w-[200px] inline-flex space-x-4 items-center justify-between border border-gray-400 rounded p-2 pl-3 pr-1"
    >
      <slot {value} name="value">
        {value}
      </slot>
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
      class="min-w-[200px] rounded absolute max-h-[300px] overflow-auto bg-gray-50 border border-gray-400 mt-1 whitespace-nowrap z-10"
    >
      {#each options as option}
        <div
          class="py-3 px-6 border-b border-gray-400 last-of-type:border-0 cursor-pointer hover:bg-slate-200"
          on:click={() => {
            value = option;
            open = false;
            dispatch("change", option);
          }}
        >
          <slot name="option" {option}>
            {option}
          </slot>
        </div>
      {/each}
    </div>
  {/if}
</div>
