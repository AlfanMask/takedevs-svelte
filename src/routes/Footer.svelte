<script lang="ts">
	import Logo from "$lib/components/ui/Logo.svelte";

    export let bgGradientColor: string = "bg-accent-footer-gradient"; // tailwind config colors
    export let logoColor: string = "#FFFFFF"; // hex color
    export let bgIcon: string = "bg-primary"; // tailwind
    export let iconColor: string = "text-accent"; // tailwind

</script>

<footer class="flex justify-center mx-auto py-5 {bgGradientColor}">
	<div class="container flex flex-col lg:flex-row justify-between items-center">
		<div class="flex flex-col items-center lg:items-start mb-5 lg:mb-0">
			<Logo color="{logoColor}" width={80} />
			<p class="text-primary mt-3">© 2024 TakeDevs. All rights reserved.</p>
		</div>
		<div class="socmed flex gap-5 py-5">
			<a class="{bgIcon}" href="https://www.instagram.com/takedevs/" target="_blank">
				<i class="fa-brands fa-instagram {iconColor}"></i>
			</a>
			<a class="{bgIcon}" href="https://www.facebook.com/takedevs" target="_blank">
				<i class="fa-brands fa-facebook {iconColor}"></i>
			</a>
			<a class="{bgIcon}" href="https://www.tiktok.com/@takedevs" target="_blank">
				<i class="fa-brands fa-tiktok {iconColor}"></i>
			</a>
			<a class="{bgIcon}" href="https://dribbble.com/alfanmask" target="_blank">
				<i class="fa-brands fa-dribbble {iconColor}"></i>
			</a>
			<a class="{bgIcon}" href="https://www.youtube.com/@takedevs_official" target="_blank">
				<i class="fa-brands fa-youtube {iconColor}"></i>
			</a>
		</div>
	</div>
</footer>

<style lang="postcss">
    footer .socmed a {
		@apply w-12 h-12 rounded-full flex items-center justify-center;
	}
	footer .socmed a i {
		@apply text-2xl;
	}

</style>