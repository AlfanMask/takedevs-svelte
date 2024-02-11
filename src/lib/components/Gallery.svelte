<script lang="ts">
	import { onMount } from 'svelte';
	import type { Gallery } from '../../constants/gallery';
	import { fadeAnimate } from '../../helper/fade';

	/**
	 * Collection of gallery;
	 * 6 cards per slide
	 * @type {Array<string>}
	 */
	export let galleries: Array<Gallery>;

	// use to make slides of logos
	let slides: Array<Array<Gallery>> = [];
	let slideIndex: number = 0;
	let galleriesOpacity: number = 100;
	let itemsPerSlide: number = 6;

	$: {
		// reset slides and slideIndex after props changes
		slides = [];
		slideIndex = 0;
		let stack: Array<Gallery> = [];
		
		for (let i = 0; i < galleries.length; i++) {
			stack.push(galleries[i]);

			if ((i + 1) % itemsPerSlide === 0 || i === galleries.length - 1) {
				slides = [...slides, [...stack]];
				stack = [];
			}
		}
	}
	


	const moveSlide = (move: 'prev' | 'next') => {
		const targetIndex = move === 'next' ? slideIndex === slides.length - 1 ? 0 : slideIndex + 1 : slideIndex === 0 ? slides.length - 1 : slideIndex - 1;
		fadeAnimate(
			galleriesOpacity,
			(itemOpacity) => {
				galleriesOpacity = itemOpacity;
			},
			() => {
				slideIndex = targetIndex;
			}
		);
	};

	const changeSlide = (index: number) => {
		fadeAnimate(
			galleriesOpacity,
			(itemOpacity) => {
				galleriesOpacity = itemOpacity;
			},
			() => {
				slideIndex = index;
			}
		);
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div id="gallery" class="w-full mb-10 mx-auto">
	<div id="top-group" class="relative w-full flex justify-between items-center mb-10">
		{#if galleries.length > itemsPerSlide}
			<i on:click={() => moveSlide('prev')} class="fa-solid fa-chevron-left -left-14"></i>
		{/if}
		<div class="galleries-group w-full grid grid-cols-3 gap-5">
			{#if (slides.length > 0)}
			{#each slides[slideIndex] as gallery}
				<div class="card relative w-full h-full cursor-pointer hover:scale-105 transition-transform">
					<img src={gallery.imgUrl} alt={gallery.title} style="opacity: {galleriesOpacity}%" />
					<p class="absolute z-20 p-5 bottom-12 text-primary font-bold">{gallery.title}</p>
					<p class="absolute z-20 p-5 bottom-4 text-secondary italic">{gallery.desc}</p>
					<div class="gradient z-10"></div>
				</div>
			{/each}
			{/if}
		</div>
		{#if galleries.length > itemsPerSlide}
			<i on:click={() => moveSlide('next')} class="fa-solid fa-chevron-right -right-14"></i>
		{/if}
	</div>
	{#if galleries.length > itemsPerSlide}
	<div id="bottom-group">
		<div class="indicators flex justify-center gap-3">
			{#each slides as _, i}
				<div
					class="indicator w-4 h-4 rounded-full cursor-pointer {slideIndex === i ? 'bg-primary' : 'bg-secondary'}"
					on:click={() => changeSlide(i)}
				/>
			{/each}
		</div>
	</div>
	{/if}
</div>

<style lang="postcss">
	#gallery i {
		@apply text-secondary text-4xl absolute cursor-pointer;
	}
	#gallery img {
		@apply relative w-full h-64 rounded-lg object-cover;
		box-shadow:
			0 20px 25px -5px rgba(0, 0, 0, 0.1),
			0 10px 10px -5px rgba(0, 0, 0, 0.04);
	}
	#gallery .gradient {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(to top, rgba(23, 24, 36, 0.75) 0%, rgba(23, 24, 36, 0) 100%);
	}
</style>
