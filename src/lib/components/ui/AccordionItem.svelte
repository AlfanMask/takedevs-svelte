<script lang="ts">
    export let icon: string = "fa-solid fa-circle"; // fontawesome icon
    export let title: string;
    export let desc: string;
    export let iconBgColor: string = "bg-gray-500"; // tailwind
    export let iconColor: string = "text-white"; // tailwind
    export let textColor: string = "text-gray-500"; // tailwind
    export let isHideOnMobile: boolean = false;

</script>

<!-- HTML -->
<div class="container flex gap-5 items-start">
    <div class="icon-container w-16 h-16 rounded flex justify-center items-center {iconBgColor} flex-shrink-0 {isHideOnMobile ? 'hidden' : 'flex'} lg:flex">
        <i class="{icon} {iconColor} text-3xl"></i>
    </div>
    <div class="texts flex flex-col gap-2">
        <span class="title !text-lg !font-semibold {textColor}">{title}</span>
        <span class="desc !text-lg {textColor}">{desc}</span>
    </div>  
</div>

<style lang="postcss">
    .container {
        transition: all 0.3s ease-in-out;
    }
    .container:hover {
        transform: scale(1.05);
        transition: all 0.3s ease-in-out;
    }
</style>