<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { goto } from '$app/navigation';
	// import idFlag from '../../static/img/flags/id.svg';
	// import gbFlag from '../../static/img/flags/gb.svg';

	let countries = [
		{ id: 'en', label: 'EN', flag: '🇬🇧' },
		{ id: 'id', label: 'ID', flag: '🇮🇩' }
	];

	const dispatch = createEventDispatcher();

	const selectedCountry = writable('en');

	onMount(() => {
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
	class="bg-base text-primary rounded p-1 lg:text-secondary"
	on:change={handleCountryChange}
>
	{#each countries as country}
		<option value={country.id}>{country.flag}&nbsp;&nbsp;{country.label}</option>
	{/each}
</select>
