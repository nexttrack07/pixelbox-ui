<script lang="ts">
  import { onMount } from "svelte";
  import { router } from "tinro";

  import { authToken } from "../stores/auth.store";

  onMount(() => {
    if (!$authToken) {
      router.goto("/login");
    }
  });

  let photo;

  const handlePhotoUpload = async (e: any) => {
    const image = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (e) => {
      photo = e.target.result;
    };

    const formData = new FormData();
    formData.append("photo", image);

    const options = {
      method: "POST",
      body: formData,
    };

    const res = await fetch("http://localhost:8000/api/upload-photo/", options);
    const data = await res.json();

    console.log("Data: ", data)
  };
</script>

<h1>Hello from Editor</h1>
<input type="file" accept=".jpg,.jpeg,.png" on:change={handlePhotoUpload} />

{#if photo}
  <img src={photo} alt="d" class="w-32 h-32" />
{:else}
  <img
    src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
    alt=""
  />
{/if}
