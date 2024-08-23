<script lang="ts">
    export let srcImg: string;
    export let height: number = 300;
</script>

<!-- HTML -->
<div class="w-full h-[{height}px]">
    <img src="{srcImg}" alt="" class="w-full h-[{height}px] rounded-lg object-cover">
</div>