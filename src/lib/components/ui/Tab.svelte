<script lang="ts">
	import type { SelectorItem } from "../../../constants/selector_item";

	/**
	 * Object of Selector Item
	 * @type {SelectorItem}
	 */
	export let item: SelectorItem;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	id="tab"
	class="flex justify-center items-center px-5 py-2 rounded {item.isActive ? 'bg-accent' : 'bg-transparent'} {!item.isActive ? 'border-2 border-solid border-secondary' : ''} cursor-pointer"
	on:click
>
	<span class="text-center {item.isActive ? 'text-primary' : 'text-secondary'}">{item.text}</span>
</div>

<style lang="postcss">
	/* #tab {
		padding: 8px 20px;
	} */
</style>