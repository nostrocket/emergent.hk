<script lang="ts">
    import { _, isLoading } from 'svelte-i18n';
    import CompanyCard from '$lib/components/CompanyCard.svelte';

</script>
<div class="bg-purple-900 py-8 mt-0">
    <div class="proseContainer">
        <div class="team-div">
            <!-- <img src="https://uploads-ssl.webflow.com/5c98cde57e3bc94f55804381/5d975c9689c88c5b13cd719f_gareth%20hayes%20Lumiere.png" height="200" alt="" class="team-img"> -->
            <p class="par-light">Gareth Hayes<strong><br>Technical Advisor<br>‍
                ‍<br>‍</strong>Gareth was fortunate enough to be exposed to the Bitcoin white paper in 2008. He has 20+ years experience in software and hardware engineering, with the last decade being heavily tilted towards protocol-level blockchain development.</p>
            </div>
    </div>
    <div class="proseContainer">
        <div class="team-div">
            <!-- <img src="https://uploads-ssl.webflow.com/5c98cde57e3bc94f55804381/5d975c9689c88c5b13cd719f_gareth%20hayes%20Lumiere.png" height="200" alt="" class="team-img"> -->
            <p class="par-light">Sherry<strong><br>Developer<br>‍
                ‍<br>‍</strong>Sherry is a developer with data science backgroud. She focuses on bringing nostr to more people by planning nostr meet up and create content about cutting-edge nostr development. She is currently organizing NostrAsia Hong Kong conference in November</p>
            </div>
    </div>
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
