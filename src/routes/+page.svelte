<script lang="ts">
    import CompanyCard from '$lib/components/CompanyCard.svelte';
    import { _, isLoading } from 'svelte-i18n';

</script>


<div class="bg-purple-900 py-8 mt-0">
    <div class="proseContainer">
        {#if !$isLoading}
            <h2>{$_('whatIs.title')}</h2>
            <p>{$_('whatIs.p1')}</p>
            <p>{$_('whatIs.p2')}</p>
            <!-- <p>{$_('whatIs.p3')}</p> -->

        {/if}
    </div>
</div>


<div class="proseContainer">
    {#if !$isLoading}
        <h2>{$_('whatWeDo.title')}</h2>
        <p>{$_('whatWeDo.p1')}</p>
        <p>{$_('whatWeDo.p2')}</p>
        <p>{$_('whatWeDo.p3')}</p>
        <p>{$_('whatWeDo.p4')}</p>
 

    
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
