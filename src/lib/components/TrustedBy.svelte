<script>
    import { onMount } from "svelte";
    import CompanyCard from './CompanyCard.svelte';
    export let images;
    
    onMount(() => {
      // Get all images under the current route.
      fetch(`/images/company/`)
        .then(response => response.json())
        .then(images => {
          // Display the images.
          this.images = images;
        });
    });
    </script>

{#await images}
    <div class="proseContainer">
        <p class="animate-pulse">Loading...</p>
    </div>
{:then images}
    <div class="gap-6 grid grid-cols-2 px-2 md:grid-cols-4 md:mx-10 xl:grid-cols-6 xl:px-20">
        {#each images as image}
            <CompanyCard {image} />
        {/each}
    </div>
{:catch members}
    Broken! 🙈
{/await}

