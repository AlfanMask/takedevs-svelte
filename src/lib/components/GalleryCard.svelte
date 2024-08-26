<script lang="ts">
    export let srcImg: string;
    export let height: number = 300;
    export let url: string = "";
</script>

<!-- HTML -->
<a href="{url}" target="{url ? '_blank' : '_self'}" class="w-full h-[{height}px]">
    <img src="{srcImg}" alt="" class="w-full h-[{height}px] rounded-lg object-cover">
</a>

<style>
    a {
        transition: all 0.3s ease-in-out;
    }
    a:hover {
        transform: scale(1.05);
        transition: all 0.3s ease-in-out;
    }
</style>