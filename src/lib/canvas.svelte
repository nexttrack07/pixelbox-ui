<script lang="ts">
  import { canvasStore } from "../stores/canvas.store";
  import { onMount } from "svelte";

  onMount(() => {
    canvasStore.init("canvas", { width: 700, height: 550 });
  });
</script>

<div class="w-[700px] h-[550px] bg-gray-50 shadow rounded">
  <canvas id="canvas" />
</div>
