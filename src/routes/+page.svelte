<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';

	/**
	 * if there is no param
	 * return to url param /en
	 */
	onMount(() => {
		const pageData = get(page);
		const { pathname } = pageData.url;

		if (pathname === '/') {
			goto('/en');
		}
	});
</script>

<div class="w-full h-screen bg-base"></div>
