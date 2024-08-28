<script lang="ts">
	import { onMount } from "svelte";

	onMount(() => {
        const regisFormLink = import.meta.env.VITE_AFFILIATE_MARKETER_REGIS_FORM_LINK;
        console.log('regisFormLink: ', regisFormLink)
        window.open(regisFormLink, '_self')
	});
</script>