<script lang="ts">
  // import { setToken } from "../services/base";

  import { onMount } from "svelte";
  import { router } from "tinro";

  import { authToken } from "../stores/auth.store";
  import UploadsSidebar from "./uploads-sidebar.svelte";

  onMount(() => {
    if (!$authToken) {
      router.goto("/login");
    }
  });

  let selectedTab = "uploads";

  $: console.log("selectedTab: ", selectedTab);

  const handleTabChange = (tab: string) => {
    selectedTab = tab;
  };

  // const handleLogOut = () => {
  //   $authToken = "";
  //   setToken("");
  //   router.goto("/login");
  // };
</script>

<div class="h-screen w-screen bg-neutral-200 flex flex-col">
  <nav
    class="h-[75px] bg-gradient-to-r from-stone-700 to-neutral-700 shadow border-b border-stone-500"
  />
  <section class="flex-1 flex">
    <nav
      id="side-nav"
      class="w-[75px] bg-stone-700 border-r border-gray-100 flex flex-col items-center"
    >
      <button
        class:selected={selectedTab === "graphics"}
        on:click={() => handleTabChange("graphics")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </button>
      <button
        class:selected={selectedTab === "uploads"}
        on:click={() => handleTabChange("uploads")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </button>
      <button
        class:selected={selectedTab === "templates"}
        on:click={() => handleTabChange("templates")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        </svg>
      </button>
      <button
        class:selected={selectedTab === "text"}
        on:click={() => handleTabChange("text")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      </button>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      </button>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </button>
    </nav>
    <aside class="w-[350px] bg-neutral-100 border-r border-gray-300">
      {#if selectedTab === "uploads"}
        <UploadsSidebar />
      {/if}
    </aside>
    <main class="flex-1 flex flex-col">
      <section class="h-[65px] bg-neutral-100 border-b border-gray-300" />
      <section class="flex-1 flex items-center justify-center">
        <div
          id="canvas"
          class="w-[700px] h-[550px] bg-neutral-50 shadow rounded-sm"
        />
      </section>
    </main>
  </section>
</div>

<style lang="postcss">
  #side-nav > button {
    @apply text-stone-400 py-6 border-b border-stone-500 w-full;
  }

  #side-nav > button > svg {
    @apply h-6 w-6 mx-auto;
  }

  #side-nav > .selected {
    @apply text-stone-100 shadow rounded;
  }
</style>
