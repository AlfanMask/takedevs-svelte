<script lang="ts">


	import { fade, slide } from 'svelte/transition';
	import type { NavbarItem } from '../constants/navbar_item';
	import LanguageSelector from './LanguageSelector.svelte';
	import { onMount } from 'svelte';
	import Logo from '$lib/components/ui/Logo.svelte';
	import { goto } from '$app/navigation';
	import { scrollToSection } from '../helper/goto';

	/***
	 * List of navbar items
	 * @type {Array<NavbarItem>}
	 */
	// get base color to set bg theme color
	export let baseColor: string = "bg-base"; // tailwind: 'bg-base'
	export let textColor: string = "text-secondary" // tailwind
	export let logoColor: string = "#FFFFFF"
	export let theme: "light" | "dark" = "dark";

	export let items: Array<NavbarItem>;

	let sidebarOpened: boolean = false;
	
	const toggleOpenSidebar = () => {
		sidebarOpened = !sidebarOpened;
	};

	const handleClickItem = (id: string, isLink: boolean) => {
		if(isLink) {
			goto(`/${id}`);
		} else {
			// scroll to section and close sidebar
			scrollToSection(id);
			sidebarOpened = false;
		}
	}

	const handleSubitemChange = (e: Event) => {
		// open new page with url
		const selectedId = (e.target as HTMLSelectElement).value;

		// if inside landing page -> change landing_page service page only
		const url: string = window.location.href;
		const newUrl: string = url.includes('landing-page') ? url.replace('landing-page', selectedId) : url.includes('online-shop') ?  url.replace('online-shop', selectedId) : url.includes('company-profile') ?  url.replace('company-profile', selectedId) : url.includes('custom-software') ?  url.replace('custom-software', selectedId) : `${url}/${selectedId}`;
		goto(newUrl);
	}

	let lang: string = '';
	onMount(() => {
		// set lang based on the active url
		lang = window.location.pathname.slice(1, 3);
	})

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<nav class="h-20 fixed w-full z-50 flex justify-end lg:justify-between">
	<!-- mobile navbars -->
	{#if !sidebarOpened}
		<div
			in:slide={{ axis: 'x', duration: 300 }}
			out:slide={{ axis: 'x', duration: 300 }}
			id="mobile-navbar-closed"
			class="lg:hidden flex flex-col justify-start gap-10 fixed w-3/4 pt-8 pr-10"
		>
			<i
				class="fa-solid {sidebarOpened
					? `fa-xmark ${textColor}`
					: `fa-bars ${textColor}`} text-2xl text-end"
				on:click={toggleOpenSidebar}
			></i>
		</div>
	{/if}
	{#if sidebarOpened}
		<div
			in:slide={{ axis: 'x', duration: 300 }}
			out:slide={{ axis: 'x', duration: 300 }}
			id="mobile-navbar-opened"
			class="lg:hidden flex flex-col justify-start gap-10 fixed w-3/4 h-screen {baseColor} pt-8 pr-10 max-w-[250px]"
		>
			<i
				class="fa-solid {sidebarOpened
					? `fa-xmark ${textColor}`
					: `fa-bars ${textColor}`} text-2xl text-end"
				on:click={toggleOpenSidebar}
			></i>
			<ul class="flex flex-col gap-8 justify-start items-end">
				{#each items as item}
				{#if (item.children)}
					<select
						placeholder={item.name}
						class="{baseColor} text-secondary rounded sm:text-base md:text-base lg:text-base xl:text-base {lang == 'id' ? '!max-w-[60px]' : '!max-w-[100px]'} m-0 p-0"
						on:change={handleSubitemChange}
					>
						<!-- Placeholder -->
						<option value="" class="hidden" disabled selected>{item.name}</option>
						<!-- items -->
						{#each item.children as child}
							<option value={child.id}>
								{child.name}
							</option>
						{/each}
					</select>
			
				{:else}
					<li
						class="{textColor} inline-block cursor-pointer"
						on:click={() => handleClickItem(item.id, item.isLink)}
					>
						{item.name}
					</li>
				{/if}
				{/each}
				
				<li class="{textColor} inline-block text-xl cursor-pointer text-end">
					<LanguageSelector baseColor={baseColor} />
				</li>
			</ul>
		</div>
	{/if}

	<!-- desktop navbar -->
	<div
		id="desktop-navbar"
		class="fixed py-6 hidden lg:flex {baseColor} w-full justify-center"
	>
		<div class="container hidden lg:flex flex-row justify-between items-center">
			<a href={`${import.meta.env.VITE_HOST}/${lang}/`}>
				<Logo color={logoColor} width={96} />
			</a>
			<ul class="flex flex-row gap-10 items-center">
				{#each items as item}
					{#if (item.children)}
						<select
							placeholder={item.name}
							class="{baseColor} text-secondary rounded p-2 sm:text-base md:text-base lg:text-base xl:text-base {lang == 'id' ? '!max-w-[85px]' : '!max-w-[110px]'}"
							on:change={handleSubitemChange}
						>
							<!-- Placeholder -->
							<option value="" class="hidden" disabled selected>{item.name}</option>
							<!-- items -->
							{#each item.children as child}
								<option value={child.id}>
									{child.name}
								</option>
							{/each}
						</select>
				
					{:else}
						<li
							class="{textColor} inline-block cursor-pointer"
							on:click={() => handleClickItem(item.id, item.isLink)}
						>
							{item.name}
						</li>
					{/if}
					{/each}
				<LanguageSelector baseColor={baseColor} />
			</ul>
		</div>
	</div>
</nav>
