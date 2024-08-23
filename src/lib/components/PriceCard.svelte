<script lang="ts">
	import { formatRupiah } from "../../helper/formatter";
	import Button from "./ui/Button.svelte";

    export let name: string;
    export let oldPrice: number;
    export let newPrice: number;
    export let description: string = "";
    export let isBestSeller: boolean = false;
    export let bestSellerBadgeColor: string = "bg-green-500"; // tailwind colors

    let oldPriceRp: string;
    let newPriceRp: string;
    let discount: string;

    $: {
        oldPriceRp = formatRupiah(oldPrice)
        newPriceRp = formatRupiah(newPrice)
        discount = ((oldPrice - newPrice) / oldPrice * 100).toFixed(0);
    }
</script>

<!-- HTML -->
<div class="w-full max-w-[400px] min-h-[650px] h-fit flex flex-col justify-between items-center px-8 py-10 rounded-lg bg-white relative {isBestSeller ? '-mt-14 shadow-lp' : ''}">
    {#if isBestSeller }
        <div class="badge-best-seller {bestSellerBadgeColor} px-3 py-1 rounded-md text-white absolute -top-4 text-lg font-semibold">
            PALING LARIS!
        </div>
    {/if}
    <div class="texts flex flex-col items-center mb-7 w-full">
        <span class="!text-3xl !font-semibold text-primary-lp-os-cp-cs mb-14">{name}</span>
        <span class="!text-2xl !font-semibold text-red-500 mb-2 line-through">{oldPriceRp}</span>
        <span class="!text-4xl !font-bold text-primary-lp-os-cp-cs mb-12">{newPriceRp}</span>
        <div class="px-4 py-1 rounded-full {isBestSeller ? 'bg-green-500' : 'bg-gray-300'} mb-10"> 
            <span class="!text-lg {isBestSeller ? 'text-white font-semibold' : 'text-gray-700'}">Hemat {discount}%</span>
        </div>
        <div class="flex flex-start w-full">
            <p class="whitespace-pre-wrap !text-lg text-secondary-lp-os-cp-cs">{description}</p>
        </div>
    </div>
    <Button text="PESAN SEKARANG" bgColor="bg-primary-lp" textColor="text-white" size="lg" on:click/>
</div>