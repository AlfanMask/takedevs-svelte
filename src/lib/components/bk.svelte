<!-- <script lang="ts">
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

    /**
     * Update left and right gallery Y position every 10ms
    */
    onMount(() => {
        // const firstStackLeftImgs: Array<string> = leftImgs
        // const firstStackRighImgs: Array<string> = rightImgs
        // let yLeftMultiplication: number = 1;
        // let yRightMultiplication: number = 1;
        
        const interval = setInterval(() => {
            leftY -= 1;
            rightY -= 1;

            // Check if the galleries have moved out of the view
            if (leftY === (-80 * firstStackLeftImgs.length * yLeftMultiplication)) {
                // if num of leftImgs is already triple -> delete first stack of leftImgs
                if ((leftImgs.length === firstStackLeftImgs.length * 3)) {
                    console.log("modulus 0 of leftImgs.length: ", leftImgs.length)
                    leftImgs.splice(0, firstStackLeftImgs.length)
                }

                leftImgs = leftImgs.concat(firstStackLeftImgs)
                console.log(leftImgs)
                yLeftMultiplication += 1;

            }

            if (rightY === (-80 * firstStackRighImgs.length * yRightMultiplication)) {
                rightImgs = rightImgs.concat(firstStackRighImgs)
                yRightMultiplication += 1;

                // if num of rightImgs is already triple -> delete first stack of rightImgs
                if (yLeftMultiplication % 3 === 0) {
                    rightImgs.splice(0, firstStackRighImgs.length)
                }
            }
        }, 10);

        // Cleanup the interval when the component is destroyed
        return () => clearInterval(interval);
    });

    $: console.log(leftImgs.length)

</script>

<div id="side-by-side-gallery" class="flex flex-row gap-5">
    <div class="gallery left flex-1">
        {#each leftImgs as img}
            <img class="gallery-card" style="transform: translateY({leftY}px)" src="{img}" alt={img}>
        {/each}
    </div>
    <div class="gallery right flex-1">
        {#each rightImgs as img}
            <img class="gallery-card" style="transform: translateY({rightY}px)" src="{img}" alt={img}>
        {/each}
    </div>
</div>

<style lang="postcss">
    .gallery {
        @apply relative flex flex-col gap-5
    }
    .left {
        @apply bottom-20
    }
    .right {
        @apply top-0
    }
    .gallery-card {
        @apply h-80 w-full rounded-lg object-cover grayscale 
    }
</style> -->