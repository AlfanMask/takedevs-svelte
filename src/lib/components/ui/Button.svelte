<script lang="ts">
    export let text: String = "TEXT";
    export let bgColor: string = "text-white"; // tailwind: 'text-white'
    export let textColor: string = "bg-black"; // tailwind: 'bg-black'
    export let size: "sm" | "md" | "lg" = "md";
</script>

<button on:click class="w-fit { size === 'sm' ? 'px-6 py-1' : size === 'md' ? 'px-8 py-2' : 'px-10 py-4' } rounded {textColor} {bgColor} font-semibold ">
    {text}
</button>