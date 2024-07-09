<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		goto('/en');
	});
</script>

<div class="w-full h-screen bg-base"></div>
