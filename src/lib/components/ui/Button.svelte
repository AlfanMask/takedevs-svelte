<script lang="ts">
    export let text: String = "TEXT";
    export let color: "accent" | "white" = "accent";
    export let size: "sm" | "md" | "lg" = "md";
</script>

<button class="w-fit { size === 'sm' ? 'px-6 py-1' : size === 'md' ? 'px-8 py-2' : 'px-10 py-4' } rounded {color === 'accent' ? 'text-primary' : 'text-accent'}  font-semibold {color === 'accent' ? 'bg-blueish-gradient' : 'bg-white'} ">
    {text}
</button>