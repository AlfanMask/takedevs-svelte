<script lang="ts">
    import { onMount } from "svelte";
    
    /**
     * Collection of image assets for left gallery
     * @type {Array<string>} 
     */
    export let leftImgs: Array<string>

    /**
     * Collection of iamge assets for right gallery
     * @type {Array<string>}
     */
    export let rightImgs: Array<string>

    /**
     * Left gallery Y position
     * Will change every seconds
     * @type {number}
     * @default 0
     */
    let leftY: number = 0;
    /**
     * Right gallery Y position
     * Will change every seconds
     * @type {number}
     * @default 0
     */
    let rightY: number = 0;

    // gallery card css property
    const gap: number = 20;
    const imgHeight: number = 320;

    onMount(() => {
        // double leftImgs and rightImgs to provide the view images
        leftImgs = leftImgs.concat(leftImgs)
        rightImgs = rightImgs.concat(rightImgs)

        // Update left and right gallery Y position every 10ms
        // Reset if already on one loop
        const interval = setInterval(() => {
            leftY -= 2;
            rightY -= 2;

            if (leftY === ((leftImgs.length/2 * imgHeight) + (leftImgs.length/2 * gap)) * -1 ){
                leftY = 0;
            }

            if (rightY === ((rightImgs.length/2 * imgHeight) + (rightImgs.length/2 * gap)) * -1 ){
                rightY = 0;
            }

        }, 10);

        // Cleanup the interval when the component is destroyed
        return () => clearInterval(interval);
    });

</script>

<div id="side-by-side-gallery" class="flex flex-row gap-5">
    <div class="gallery left flex-1" style="gap: {gap}px">
        {#each leftImgs as img}
            <img class="gallery-card" style="height: {imgHeight}px; transform: translateY({leftY}px)" src="{img}" alt={img}>
        {/each}
    </div>
    <div class="gallery right flex-1" style="gap: {gap}px">
        {#each rightImgs as img}
            <img class="gallery-card" style="height: {imgHeight}px; transform: translateY({rightY}px)" src="{img}" alt={img}>
        {/each}
    </div>
</div>

<style lang="postcss">
    .gallery {
        @apply relative flex flex-col
    }
    .left {
        @apply -bottom-20
    }
    .right {
        @apply top-0
    }
    .gallery-card {
        @apply w-full rounded-lg object-cover grayscale
    }
</style>