<script lang="ts">
    export let flexSize: string = 'flex-[1]'; // taildinw: 'flex-[number]'
    export let customTailwindCSS: string = ""; // put any tailwind css properties here
    export let imgSrc: string;
    export let gradientOverlay: string = "bg-black"; // tailwind: 'bg-black'
    export let gradientOpacity: string = 'opacity-10'; // tailwind: 'opacity-10'
</script>

<!-- HTML -->
<div class="{flexSize} w-full flex justify-end relative {customTailwindCSS}">
    <img src="{imgSrc}" alt="" class="rounded-2xl relative object-cover">
    <div class="absolute inset-0 {gradientOverlay} {gradientOpacity} rounded-2xl right-0"></div>
</div>