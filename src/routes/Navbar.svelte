<script lang="ts">


	import { fade, slide } from 'svelte/transition';
	import type { NavbarItem } from '../constants/navbar_item';
	import LanguageSelector from './LanguageSelector.svelte';
	import { onMount } from 'svelte';
	import Logo from '$lib/components/ui/Logo.svelte';

	/***
	 * List of navbar items
	 * @type {Array<NavbarItem>}
	 */
	// get base color to set bg theme color
	export let baseColor: string = "bg-base"; // tailwind: 'bg-base'
	export let textColor: string = "secondary"
	export let logoColor: string = "#FFFFFF"

	export let items: Array<NavbarItem>;

	let sidebarOpened: boolean = false;
	
	const toggleOpenSidebar = () => {
		sidebarOpened = !sidebarOpened;
	};

	const scrollToSection = (sectionId: string) => {
		const section = document.getElementById(sectionId);
		section?.scrollIntoView({ behavior: 'smooth' });

		// close sidebar
		sidebarOpened = false;
	};

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
					? 'fa-xmark text-{textColor}'
					: 'fa-bars text-primary'} text-2xl text-end"
				on:click={toggleOpenSidebar}
			></i>
		</div>
	{/if}
	{#if sidebarOpened}
		<div
			in:slide={{ axis: 'x', duration: 300 }}
			out:slide={{ axis: 'x', duration: 300 }}
			id="mobile-navbar-opened"
			class="lg:hidden flex flex-col justify-start gap-10 fixed w-3/4 h-screen {baseColor} pt-8 pr-10"
		>
			<i
				class="fa-solid {sidebarOpened
					? 'fa-xmark text-{textColor}'
					: 'fa-bars text-primary'} text-2xl text-end"
				on:click={toggleOpenSidebar}
			></i>
			<ul class="flex flex-col gap-8 justify-start">
				{#each items as item}
					<li
						class="text-{textColor} inline-block text-xl cursor-pointer text-end"
						on:click={() => scrollToSection(`${item.id}`)}
					>
						{item.name}
					</li>
				{/each}
				<li class="text-{textColor} inline-block text-xl cursor-pointer text-end">
					<LanguageSelector />
				</li>
			</ul>
		</div>
	{/if}

	<!-- desktop navbar -->
	<div
		id="desktop-navbar"
		class="fixed py-6 {baseColor} w-full flex justify-center"
	>
		<div class="container hidden lg:flex flex-row justify-between items-center">
			<a href="#header">
				<Logo color={logoColor} width={96} />
			</a>
			<ul class="flex flex-row gap-10 items-center">
				{#each items as item}
					<li
						class="text-{textColor} inline-block cursor-pointer"
						on:click={() => scrollToSection(`${item.id}`)}
					>
						{item.name}
					</li>
				{/each}
				<LanguageSelector baseColor={baseColor} />
			</ul>
		</div>
	</div>
</nav>
