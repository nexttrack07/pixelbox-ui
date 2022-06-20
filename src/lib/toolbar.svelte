<script lang="ts">
  import { fabric } from "fabric";
  import Dropdown from "../shared/dropdown.svelte";
  import { canvasStore } from "../stores/canvas.store";

  const { updateActiveObject, getActiveObject } = canvasStore;
  const activeObj = getActiveObject();
</script>

<button
  on:click={() => updateActiveObject("fill", "red")}
  class="bg-red-900 p-2 rounded text-blue-50"
>
  Red
</button>
<button
  on:click={() => updateActiveObject("fill", "blue")}
  class="bg-blue-900 p-2 rounded text-blue-50"
>
  Blue
</button>

{#if $activeObj instanceof fabric.Text}
  <span>Hello</span>
{/if}

<Dropdown />
