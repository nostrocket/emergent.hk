<script lang="ts">
    import { _, isLoading } from 'svelte-i18n';
    import CompanyCard from '$lib/components/CompanyCard.svelte';

</script>

<div class="proseContainer">
    {#if !$isLoading}


        <h2>{$_('Service.title')}</h2>
        <p>{$_('Service.p1')}</p>


    
    {/if}
</div>

    <CompanyCard/>

    <!-- <Members eventsAndIds={eventsUserIds} /> -->

<!-- <div class="proseContainer">
    <h2>{$_('nostrHkMembers.replyThread')}</h2>
    <p>{@html $_('join.p1')}</p>
    <p>{@html $_('join.p2')}</p>
</div> -->
<div class="px-2 md:mx-10 xl:mx-64 mt-16">
    <!-- <ConversationThread eventsAndIds={eventsUserIds} /> -->
</div>
