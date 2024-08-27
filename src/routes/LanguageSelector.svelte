<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { goto } from '$app/navigation';

	export let baseColor: string = "bg-base"
	
	let countries = [
		{ id: 'id', label: 'ID', flag: '🇮🇩' },
		{ id: 'en', label: 'EN', flag: '🇬🇧' }
	];

	// TODO: put in store.ts
	const dispatch = createEventDispatcher();
	const selectedCountry = writable(getInitialSelectedCountry());
	const showFlags = writable(true);

	// get selected country on local storage
	function getInitialSelectedCountry() {
		if (typeof localStorage !== 'undefined') {
			return localStorage.getItem('selectedCountry') || 'id';
		} else {
			return 'id';
		}
	}

	onMount(() => {
		const userAgent = window.navigator.userAgent;
		if (userAgent.includes('Chrome') && !userAgent.includes('Mobile')) {
			showFlags.set(false);
		}

		const path = window.location.pathname.slice(1,3);
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
		let url: string = window.location.href;
		url = url.replace(import.meta.env.VITE_HOST, '')
		const openUrl: string = url.includes('id') ? url.replace('id', selectedId).replaceAll("//", "/") : url.replace('en', selectedId).replaceAll("//", "/");
		goto(openUrl);
	};
</script>

<!-- Select Country -->
<select
	bind:value={$selectedCountry}
	class="{baseColor} text-secondary rounded p-2 sm:text-base md:text-base lg:text-base xl:text-base"
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
