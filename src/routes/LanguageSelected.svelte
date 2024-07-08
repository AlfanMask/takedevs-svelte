<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { goto } from '$app/navigation';

	const dispatch = createEventDispatcher();

	let countries = [
		{ id: 'en', label: 'EN' },
		{ id: 'id', label: 'ID' }
	];

	const selectedCountry = writable('en');

	onMount(() => {
		const path = window.location.pathname.slice(1);
		if (path === 'id' || path === 'en') {
			selectedCountry.set(path);
		}
	});

	const handleCountryChange = (e: Event) => {
		const selectedLabel = (e.target as HTMLSelectElement).value;

		selectedCountry.set(selectedLabel);
		dispatch('countrySelected', { id: selectedLabel });
		goto(`/${selectedLabel}`);
	};
</script>

<select
	bind:value={$selectedCountry}
	class="bg-base text-primary rounded p-1 lg:text-secondary"
	on:change={handleCountryChange}
>
	{#each countries as country}
		<option value={country.id}>{country.label}</option>
	{/each}
</select>
