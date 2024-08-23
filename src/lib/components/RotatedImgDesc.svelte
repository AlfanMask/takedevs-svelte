<script lang="ts">
    export let imgSrc: string;
    export let gradientOverlayFrom: string;
    export let desc: string;
</script>

<div class="container relative -rotate-[5deg] w-full h-full">
    <div class="img w-full h-full">
        <img src={imgSrc} alt={imgSrc.toLowerCase().replaceAll(' ','-')} class="w-full max-w-[360px] h-full rounded-2xl object-cover">
        <!-- <div class="absolute inset-0 opacity-50 rounded-2xl right-0" style="background: {gradientOverlay};"/> -->
        <div class="absolute inset-0 rounded-2xl bg-gradient-to-t {gradientOverlayFrom} to-transparent to-50% opacity-75"/>
    </div>
    <span class="text-white text-2xl font-semibold absolute bottom-5 left-5">{desc}</span>
</div>