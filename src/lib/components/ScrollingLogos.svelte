<script lang="ts">
    import { fade } from "svelte/transition";
	import { quintOut } from "svelte/easing";

	/**
	 * Collection of image assets;
     * 5 logos per slide
	 * @type {Array<string>}
	 */
	export let imgs: Array<string>;

    // use to make slides of logos
    let slides: Array<Array<string>> = [];
    let slideIndex: number = 0;
    let imgsOpacity: number = 100;

    let stack: Array<string> = [];
    for (let i = 0; i < imgs.length; i++) {
        stack.push(imgs[i]);

        if ((i + 1) % 5 === 0 || i === imgs.length - 1) {
            slides.push([...stack]);
            stack = [];
        }
    }

    const moveSlide = (move: "next" | "prev") => {
        let isUp: boolean = false;
        const interval = setInterval(() => {
            if (!isUp){
                imgsOpacity -= 5;
                if (imgsOpacity < 0) {
                    isUp = true;
                    if (move === "next") slideIndex = slideIndex === slides.length - 1 ? 0 : slideIndex + 1;
                    if (move === "prev") slideIndex = slideIndex === 0 ? slides.length - 1 : slideIndex - 1;
                }
            } else {
                imgsOpacity += 5;
                if (imgsOpacity > 100) {
                    imgsOpacity = 100;
                    clearInterval(interval)
                }
            }

        }, 10);
    }

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div id="scolling-logos" class="relative w-full flex justify-between items-center">
    {#if imgs.length > 5}
	    <i on:click={() => moveSlide("prev")} class="fa-solid fa-chevron-left -left-10"></i>
    {/if}
	<div class="logos-group w-full flex justify-around">
		{#each slides[slideIndex] as img}
            <img src="{img}" alt="logo" style="opacity: {imgsOpacity}%" />
        {/each}
	</div>
    {#if imgs.length > 5}
	    <i on:click={() => moveSlide("next")} class="fa-solid fa-chevron-right -right-10"></i>
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
