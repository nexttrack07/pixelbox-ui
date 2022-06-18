<script lang="ts">
  import { canvasStore } from "../stores/canvas.store";

  const { addText } = canvasStore;
</script>

<div class="flex flex-col">
  <button class="bg-blue-600 block m-8 p-2 rounded" on:click={() => addText("Hello")}>Add Hello</button>
</div>
