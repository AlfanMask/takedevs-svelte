<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		const initialPath = window.location.pathname;

		// redirect to spesific routes
		if (initialPath === '/id') {
			goto('/id');
		} else if (initialPath === '/en') {
			goto('/en');
		} else if (initialPath !== '/en' && initialPath !== '/id') {
			goto('/en');
		}
	});
</script>

<div class="w-full h-screen bg-base"></div>
