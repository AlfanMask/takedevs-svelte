<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { goto } from '$app/navigation';

	let countries = [
		{ id: 'en', label: 'EN', flag: '🇬🇧' },
		{ id: 'id', label: 'ID', flag: '🇮🇩' }
	];

	const dispatch = createEventDispatcher();
	const selectedCountry = writable('en');
	const showFlags = writable(true);

	onMount(() => {
		// Check if the browser is Chrome
		const userAgent = window.navigator.userAgent;
		if (userAgent.includes('Chrome')) {
			showFlags.set(false);
		}

		const path = window.location.pathname.slice(1);
		if (path === 'id' || path === 'en') {
			selectedCountry.set(path);
		}
	});

	const handleCountryChange = (e: Event) => {
		const selectedId = (e.target as HTMLSelectElement).value;

		selectedCountry.set(selectedId);
		dispatch('countrySelected', { id: selectedId });
		goto(`/${selectedId}`);
	};
</script>

<select
	bind:value={$selectedCountry}
	class="bg-base text-primary rounded p-2 md:text-secondary sm:text-base md:text-base lg:text-base xl:text-base"
	on:change={handleCountryChange}
>
	{#each countries as country}
		<option value={country.id}>
			{#if $showFlags}
				{country.flag}&nbsp;&nbsp;
			{/if}
			{country.label}
		</option>
	{/each}
</select>
