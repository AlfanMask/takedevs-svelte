<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import { get } from "svelte/store";

	onMount(() => {
		const pageData = get(page);
		const { pathname, search } = pageData.url;

        console.log('pageData: ', pageData)

        // if user try to access service without lang, then force put the lang to them
        const lang = localStorage.getItem('selectedCountry') || 'id';
        if(pathname.includes('/landing-page')) {
            goto(`/${lang}/landing-page${search}`);
        } else if (pathname.includes('/online-shop')) {
            goto(`/${lang}/online-shop${search}`);
        } else if (pathname.includes('/company-profile')) {
            goto(`/${lang}/company-profile${search}`);
        } else if (pathname.includes('/custom-software')) {
            goto(`/${lang}/custom-software${search}`);
        } else {
			goto(`/${lang}/`);
        }
	});
</script>