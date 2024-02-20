<script lang="ts">
	import { onMount } from "svelte";
	import { fadeAnimate } from "../../helper/fade";

	/**
	 * Collection of image assets;
     * 5 logos per slide
	 * @type {Array<string>}
	 */
	export let imgs: Array<string>;

    // use to make slides of logos
    let numLogosPerSlide: number = 0;
    let slides: Array<Array<string>> = [];
    let slideIndex: number = 0;
    let imgsOpacity: number = 100;

    $: {
        let stack: Array<string> = [];
        for (let i = 0; i < imgs.length; i++) {
            stack.push(imgs[i]);

            if (numLogosPerSlide > 0 && ((i + 1) % numLogosPerSlide === 0 || i === imgs.length - 1)) {
                slides = [...slides, [...stack]];
                stack = [];
            }
        }
    }

    const moveSlide = (move: "next" | "prev") => {
		const targetIndex = move === 'next' ? slideIndex === slides.length - 1 ? 0 : slideIndex + 1 : slideIndex === 0 ? slides.length - 1 : slideIndex - 1;
        fadeAnimate(imgsOpacity, (itemOpacity) => {
            imgsOpacity = itemOpacity;
        }, () => {
            slideIndex = targetIndex;
        })
    }

    onMount(() => {
        // set number of logos per slide based on device mode
        // desktop: 5
        // mobile: 1
        const screenWidth: number = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        numLogosPerSlide = screenWidth <= 768 ? 1 : 5;
    })

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div id="scolling-logos" class="relative w-full flex justify-between items-center">
    <!-- TODO: remove overflow horizontal scroll in mobile version -->
    {#if imgs.length > numLogosPerSlide}
	    <i on:click={() => moveSlide("prev")} class="fa-solid fa-chevron-left left-0"></i>
    {/if}
	<div class="logos-group w-full flex justify-around">
        {#if slides.length > 0}
            {#each slides[slideIndex] as img}
                <img src="{img}" alt="logo" style="opacity: {imgsOpacity}%" />
            {/each}
        {/if}
	</div>
    {#if imgs.length > numLogosPerSlide}
	    <i on:click={() => moveSlide("next")} class="fa-solid fa-chevron-right right-0"></i>
    {/if}
</div>

<style lang="postcss">
	#scolling-logos .logos-group img {
		@apply grayscale;
	}
	#scolling-logos i {
		@apply text-secondary text-lg absolute cursor-pointer;
	}
</style>
