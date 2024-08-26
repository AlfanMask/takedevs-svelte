<script lang="ts">
    export let flexSize: string = 'flex-[1]'; // taildinw: 'flex-[number]'
    export let customTailwindCSS: string = ""; // put any tailwind css properties here
    export let imgSrc: string;
    export let gradientOverlay: string = "bg-black"; // tailwind: 'bg-black'
    export let gradientOpacity: string = 'opacity-10'; // tailwind: 'opacity-10'
    export let isHideOnMobile: boolean = false;
</script>

<!-- HTML -->
<div class="img-gradient {flexSize} w-full lg:flex justify-end relative {customTailwindCSS} {isHideOnMobile ? 'hidden':''}">
    <img src="{imgSrc}" alt="" class="rounded-2xl relative object-cover">
    <div class="absolute inset-0 {gradientOverlay} {gradientOpacity} rounded-2xl right-0"></div>
</div>

<style lang="postcss">
    .img-gradient {
        transition: all 0.3s ease-in-out;
    }
    .img-gradient:hover {
        transform: scale(1.05) rotate(2deg);
        transition: all 0.3s ease-in-out;
    }
</style>