<script>
     import { _, isLoading } from 'svelte-i18n';
     import { base } from "$app/paths";
     import fs from 'fs';

    const images = ["/images/company/Emurgo.jpeg","/images/company/Holdex.svg","/images/company/Lumiere.png"]


     </script>




<div class="bg-purple-900 py-8 mt-16">
    <div class="proseContainer !mt-0">
        <h2 class="!mt-0">
            {$_('TrustedBy.title')}
        </h2>
    </div>
    <div class="photos">
        {#each images as image}
          <figure class="logo">
            <img src={base}{image} alt="background" />
          </figure>
        {/each}
      </div>
</div>
