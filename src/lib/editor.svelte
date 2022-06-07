<script lang="ts">
  import { onMount } from "svelte";
  import { router } from "tinro";

  import { authToken } from "../stores/auth.store";

  onMount(() => {
    if (!$authToken) {
      router.goto("/login");
    }
  });

  $: console.log("authToken: ", $authToken);
</script>

<h1>Hello from Editor</h1>
