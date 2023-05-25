
<script lang="ts">
    import { _, isLoading } from 'svelte-i18n';

</script>

<div class="proseContainer">
    {#if !$isLoading}


        <h2>{$_('Solution.title')}</h2>
        <p>{$_('Solution.p1')}</p>


    
    {/if}
</div>
<div class="bg-purple-900 py-8 mt-16">
    <div class="proseContainer !mt-0">
        <h2 class="!mt-0">
            {$_('TrustedBy.title')}
        </h2>
    </div>

    <!-- <Members eventsAndIds={eventsUserIds} /> -->
</div>
<!-- <div class="proseContainer">
    <h2>{$_('nostrHkMembers.replyThread')}</h2>
    <p>{@html $_('join.p1')}</p>
    <p>{@html $_('join.p2')}</p>
</div> -->
<div class="px-2 md:mx-10 xl:mx-64 mt-16">
    <!-- <ConversationThread eventsAndIds={eventsUserIds} /> -->
</div>
