<script>
     import { _, isLoading } from 'svelte-i18n';
     </script>

<div class="bg-purple-900 py-8 mt-16">
    <div class="proseContainer !mt-0">
        <h2 class="!mt-0">
            {$_('TrustedBy.title')}
        </h2>
    </div>
    <div class="photos">
        <figure>
        <img src="./images/company/Emurgo.jpeg" alt="background" />
    </figure>
    <figure>
        <img src="./images/company/Holdex.svg" alt="background" />
    </figure>
    <figure>   
        <img src="./images/company/Lumiere.png" alt="background" />
    </figure>
    </div>
</div>
