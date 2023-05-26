<script lang="ts">
    import CompanyCard from '$lib/components/CompanyCard.svelte';
    import { _, isLoading } from 'svelte-i18n';

</script>

<div class="proseContainer">
    {#if !$isLoading}
        <h2>{$_('whatIs.title')}</h2>
        <p>{$_('whatIs.p1')}</p>
        <p>{$_('whatIs.p2')}</p>
        <p>{$_('whatIs.p3')}</p>

        <h2>{$_('nostrVsWeb3.title')}</h2>
        <p>{$_('nostrVsWeb3.p1')}</p>
        <p>{$_('nostrVsWeb3.p2')}</p>
        <p>{$_('nostrVsWeb3.p3')}</p>
        <p>{$_('nostrVsWeb3.p4')}</p>

    
    {/if}
</div>
<CompanyCard/>
<!-- <div class="proseContainer">
    <h2>{$_('nostrHkMembers.replyThread')}</h2>
    <p>{@html $_('join.p1')}</p>
    <p>{@html $_('join.p2')}</p>
</div> -->
<div class="px-2 md:mx-10 xl:mx-64 mt-16">
    <!-- <ConversationThread eventsAndIds={eventsUserIds} /> -->
</div>
