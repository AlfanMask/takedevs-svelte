<script>
	let countries = [
		{ id: 'en', label: 'EN' },
		{ id: 'id', label: 'ID' }
	];

	let selectedCountry = countries[0].id;
</script>

<select bind:value={selectedCountry} class="bg-base text-primary rounded p-1 lg:text-secondary">
	{#each countries as country}
		<option value={country.id} class="flex items-center">
			{country.label}
		</option>
	{/each}
</select>
