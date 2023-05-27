<script lang="ts">
    import { _, isLoading } from 'svelte-i18n';
    import CompanyCard from '$lib/components/CompanyCard.svelte';

</script>
<div class="bg-purple-900 py-8 mt-0">
<div class="proseContainer">
    {#if !$isLoading}
        <h2>{$_('Service.title')}</h2>
        <p>{$_('Service.p1')}</p>    
    {/if}
</div>
</div>


<div class="proseContainer">
    {#if !$isLoading}
        <h2>{$_('Blockchain.title')}</h2>
        <p>{$_('Blockchain.p1')}</p>
        <p>{$_('Blockchain.p2')}</p> 
    {/if}
</div>

<div class="proseContainer">
    {#if !$isLoading}
        <h2>{$_('Nostr.title')}</h2>
        <p>{$_('Nostr.p1')}</p>
        <p>{$_('Nostr.p2')}</p> 
        <p>{$_('Nostr.p3')}</p>     
    {/if}
</div>

<div class="proseContainer">
    {#if !$isLoading}
        <h2>{$_('education.title')}</h2>
        <p>{$_('education.p1')}</p>
        <p>{$_('education.p2')}</p> 
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
