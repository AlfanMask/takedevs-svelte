<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { goto } from '$app/navigation';

	let countries = [
		{ id: 'en', label: 'EN', flag: '🇬🇧' },
		{ id: 'id', label: 'ID', flag: '🇮🇩' }
	];

	const dispatch = createEventDispatcher();
	const selectedCountry = writable(getInitialSelectedCountry());
	const showFlags = writable(true);

	// get selected country on local storage
	function getInitialSelectedCountry() {
		if (typeof localStorage !== 'undefined') {
			return localStorage.getItem('selectedCountry') || 'en';
		} else {
			return 'en';
		}
	}

	onMount(() => {
		const userAgent = window.navigator.userAgent;
		if (userAgent.includes('Chrome') && !userAgent.includes('Mobile')) {
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
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem('selectedCountry', selectedId);
		}
		dispatch('countrySelected', { id: selectedId });
		goto(`/${selectedId}`);
	};
</script>

<!-- Select Country -->
<select
	bind:value={$selectedCountry}
	class="bg-base text-secondary rounded p-2 sm:text-base md:text-base lg:text-base xl:text-base"
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
