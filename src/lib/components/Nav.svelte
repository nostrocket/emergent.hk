<script lang="ts">
    import BarsIcon from '$lib/elements/icons/Bars.svelte';
    import XMarkIcon from '$lib/elements/icons/XMark.svelte';
    import { slide } from 'svelte/transition';
    import LocaleSwitcher from '$lib/components/LocaleSwitcher.svelte';
    import { _, locale, isLoading } from 'svelte-i18n';
    import { setupI18n } from '$lib/config/i18n';

    let mobileNavOpen = false;

    const navLinks = [
        { text: 'Home', url: '/' },
        { text: 'Services', url: '/services' },
        { text: 'Solutions', url: '/solutions' },
        { text: 'Team', url: '/team' },
        { text: 'Media', url: 'https://nostrovia.org/' }
    ];

    function toggleMobileNav() {
        if (mobileNavOpen) {
            mobileNavOpen = false;
        } else {
            mobileNavOpen = true;
        }
    }
    function sendEmail() {
    const email = 'contact@emergent.hk';
    const subject = ' ';
    const body = '';

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  }

    function updateLocale(newLocale: string) {
        console.log(newLocale);
        setupI18n({ locale: newLocale });
    }
</script>

{#if !$isLoading}
    <!-- Desktop Nav -->
    <nav
        class="z-30 hidden md:flex flex-row gap-6 sticky top-0 items-center justify-center p-8 bg-black/80 text-xl"
    >
        {#each navLinks as navLink}
            <a href={navLink.url} class="text-xl font-medium text-orange-500 border-orange-500">
                {navLink.text}
            </a>
        {/each}
        <a href="/" class="text-xl font-medium text-orange-500 border-orange-500" on:click={sendEmail}>Contact</a>
        <LocaleSwitcher value={$locale} on:locale-changed={(e) => updateLocale(e.detail)} />
    </nav>

    <!-- Mobile Nav -->
    <nav
        class="z-30 flex md:hidden flex-col sticky w-full top-0 items-center justify-center p-4 bg-black/90"
    >
        <button class="text-orange-500" on:click|preventDefault={toggleMobileNav}>
            {#if mobileNavOpen}
                <XMarkIcon />
            {:else}
                <BarsIcon />
            {/if}
        </button>
        {#if mobileNavOpen}
            <div
                transition:slide={{ duration: 200 }}
                class="flex flex-col gap-6 my-6 items-center text-center"
            >
                {#each navLinks as navLink}
                    <a
                        href={navLink.url}
                        on:click={toggleMobileNav}
                        class="text-xl font-medium text-orange-500 border-orange-500"
                    >
                        {navLink.text}
                    </a>
                {/each}
                <LocaleSwitcher value={$locale} on:locale-changed={(e) => updateLocale(e.detail)} />
            </div>
        {/if}
    </nav>
{/if}
