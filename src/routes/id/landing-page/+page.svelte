<script lang="ts">
	import { onMount } from 'svelte';
	import Button from "$lib/components/ui/Button.svelte";
	import type { NavbarItem } from "../../../constants/navbar_item";
	import Navbar from "../../Navbar.svelte";
	import RotatedImgDesc from '$lib/components/RotatedImgDesc.svelte';
	import GalleryCard from '$lib/components/GalleryCard.svelte';
	import TextIcon from '$lib/components/ui/TextIcon.svelte';
	import ImageGradient from '$lib/components/SideImageGradient.svelte';
	import PriceCard from '$lib/components/PriceCard.svelte';
	import AccordionItem from '$lib/components/ui/AccordionItem.svelte';
	import Footer from '../../Footer.svelte';
	import { goToUrl, scrollToSection } from '../../../helper/goto';

	const navbarItems: Array<NavbarItem> = [
		{ id: 'header', name: 'Beranda' },
		{ id: 'services', name: 'Jasa' },
		{ id: 'projects', name: 'Proyek' },
		{ id: 'contact-us', name: 'Hubungi Kami' }
	];

	let waUrl: string;
	let referralCode: string;
	onMount(() => {
		// check if contains referral code
		// put referral code into state variable
		const searchParams: string = window.location.search;
		if(searchParams.includes('referral=')) {
			referralCode = searchParams.replace("?","").replace("referral=","");
		}
	})

	$: {
		// put waURL with admin wa number when get referral code
		waUrl = `https://wa.me/${import.meta.env.VITE_ADMIN_WA_NUMBER}?text=${import.meta.env.VITE_WA_CTA_HELLO_MSG} Landing Page, ${referralCode ? 'referral: ' + referralCode : ''}`
	}
</script>


<!-- HTML -->
<div class="bg-base-lp-os-cp-cs h-full">

<!-- #navbar -->
<Navbar items={navbarItems} baseColor="bg-base-lp-os-cp-cs" logoColor="#E4720B" />

<!-- header -->
<div id="header" class="container mx-auto px-5 lg:px-0">
	<div class="flex justify-between items-center mb-28" style="padding-top: 160px">
        <div class="left-group flex-[5] w-full pr-20">
			<h1 class="text-center lg:text-start text-primary-lp-os-cp-cs mb-5">
				Lebih Banyak Pelanggan dengan
				<span class="text-accent-lp !text-4xl lg:!text-5xl !font-bold">Landing Page</span>
			</h1>
			<p class="text-center lg:text-start text-secondary mb-10">
				Bingung cara ningkatin pelanggan? Landing Page solusinya. Kami menyediakan jasa Landing Page professional yang cock untuk bisnis Anda.
			</p>
            <Button text="PELAJARI LEBIH LANJUT" bgColor="bg-primary-lp" textColor="text-white" size="lg" on:click={() => { scrollToSection('pricelist') }}/>
        </div>
		<ImageGradient flexSize="flex-[7]" imgSrc="/img/landing-pages/lp/header-lp.jpg" gradientOverlay="bg-primary-lp" gradientOpacity="opacity-10" />
	</div>
</div>

<!-- importance of -->
<div id="importance-of" class="flex flex-col items-center mb-28">
	<div class="header-text flex flex-col items-center gap-5 mb-14">
		<h2>Kenapa Landing Page <span class="text-accent-lp !text-3xl !font-semibold">Penting</span></h2>
		<p class="text-secondary-lp-os-cp-cs max-w-[800px] text-center">Landing Page akan membantu mengarahkan orang-orang ke tindakan tertentu, seperti mengisi formulir atau membeli produk Anda</p>
	</div>
	<div class="items flex gap-10 h-[500px]">
		<RotatedImgDesc desc="Tingkatkan Konversi" imgSrc="/img/landing-pages/lp/importance-lp-1.jpg" gradientOverlayFrom="from-primary-lp" />
		<RotatedImgDesc desc="Perkuat Branding" imgSrc="/img/landing-pages/lp/importance-lp-2.jpg" gradientOverlayFrom="from-primary-lp" />
		<RotatedImgDesc desc="Perjelas Produk" imgSrc="/img/landing-pages/lp/importance-lp-3.jpg" gradientOverlayFrom="from-primary-lp" />
	</div>
</div>

<!-- past projects -->
<div id="projects" class="py-14 bg-gradient-lp flex flex-col items-center mb-20">
	<div class="container">
		<div class="header-text flex flex-col items-center gap-5 mb-14 text-white">
			<h2 class="underline">Proyek Landing Page Kami</h2>
			<p class="max-w-[800px] text-center">Kami telah berhasil menciptakan landing page yang efektif untuk berbagai jenis bisnis. Berikut adalah beberapa contoh proyek kami</p>
		</div>
		<div class="project-galleries grid grid-cols-3 gap-x-5 gap-y-7">
			<GalleryCard srcImg="/img/landing-pages/lp/project-1.png" />
			<GalleryCard srcImg="/img/landing-pages/lp/project-2.png" />
			<GalleryCard srcImg="/img/landing-pages/lp/project-3.png" />
			<GalleryCard srcImg="/img/landing-pages/lp/project-4.png" />
			<GalleryCard srcImg="/img/landing-pages/lp/project-5.png" />
			<GalleryCard srcImg="/img/landing-pages/lp/project-6.png" />
			<GalleryCard srcImg="/img/landing-pages/lp/project-7.png" />
			<GalleryCard srcImg="/img/landing-pages/lp/project-8.png" />
			<GalleryCard srcImg="/img/landing-pages/lp/project-9.png" />
		</div>
	</div>
</div>

<!-- why-us -->
<div id="why-us" class="container flex mx-auto items-center gap-5 mb-24">
	<ImageGradient flexSize="flex-[5]" customTailwindCSS="max-h-[650px]" imgSrc="/img/landing-pages/lp/why-us-lp.jpg" gradientOverlay="bg-primary-lp" gradientOpacity="opacity-10" />
	<div class="right-group flex flex-[7] flex-col gap-7 items-start">
		<h2 class="!font-semibold">Kenapa <span class="text-accent-lp !text-3xl !font-semibold">Kami?</span></h2>
		<div class="points flex flex-col gap-5">
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Pengalaman luas: Kami memiliki pengalaman bertahun-tahun dalam merancang dan membangun landing page yang sukses." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Keahlian desain: Tim desain kami ahli dalam menciptakan desain yang menarik dan responsif." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Fokus pada konversi: Kami selalu mengutamakan konversi pengunjung menjadi pelanggan." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Pengerjaan cepat dan efisien: Kami bekerja dengan cepat dan efisien untuk memenuhi tenggat waktu Anda." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Harga terjangkau: Kami menawarkan harga yang kompetitif tanpa mengorbankan kualitas." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Pelayanan pelanggan yang baik: Kami berkomitmen untuk memberikan pelayanan pelanggan yang terbaik." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Garansi kepuasan: Kami menjamin kepuasan Anda dengan hasil kerja kami." />
		</div>
		<Button text="BUAT LANDING PAGE SEKARANG" size="lg" bgColor="bg-primary-lp" textColor="text-white" on:click={() => { goToUrl(waUrl) }} />
	</div>
</div>

<!-- pricelist -->
<div id="pricelist" class="py-14 bg-gradient-lp flex flex-col items-center mb-20">
	<div class="container">
		<div class="header-text flex flex-col items-center gap-5 mb-7 text-white">
			<h2 class="underline">Pilih Paket</h2>
			<p class="max-w-[800px] text-center">Kami menawarkan beberapa paket layanan<br>untuk memenuhi kebutuhan bisnis Anda</p>
		</div>
		<div class="prices flex justify-center gap-5 pt-20">
			<PriceCard
			name="Basic"
			oldPrice={650000}
			newPrice={499000}
			description="
• Menggunakan template
• Berada di subdomain takedevs.com
• Call to action (CTA) ke WhatsApp
• Maksimal 1 kali revisi
"
			on:click={() => { goToUrl(`${waUrl}, paket: Basic`) }}
		/>
			<PriceCard
				name="Premium"
				oldPrice={1500000}
				newPrice={999000}
				description="
• Desain kustom
• Domain sendiri
• Call to action (CTA) ke WhatsApp
• Terintegrasi dengan media sosial lainnya
• Maksimal 3 kali revisi
"
				isBestSeller={true}
				bestSellerBadgeColor="bg-accent-lp"
				on:click={() => { goToUrl(`${waUrl}, paket: Premium`) }}
			/>
			<PriceCard
			name="Premium+"
			oldPrice={2300000}
			newPrice={1999000}
			description="
• Semua fitur Premium
• + Toko online
"
			on:click={() => { goToUrl(`${waUrl}, paket: Premium+`) }}
		/>
		</div>
	</div>
</div>

<!-- persuasion -->
<div id="persuasion" class="container flex flex-col mx-auto mb-24 w-[75%]">
	<span class="!text-2xl text-accent-lp !font-semibold text-center mb-5">Jangan Lewatkan Kesempatan Ini</span>
	<span class="!text-lg text-secondary-lp-os-cp-cs text-center">Semakin cepat Anda menghubungi kami, semakin cepat kami dapat membantu bisnis Anda tumbuh. Jangan biarkan pesaing Anda mengambil keuntungan. Hubungi kami sekarang untuk konsultasi gratis</span>
</div>

<!-- consultation -->
<div id="consultation" class="w-full h-[400px] flex justify-center mb-20">
	<div class="container flex justify-between items-center">
		<div class="left-group flex flex-1 flex-col">
			<h2 class="!font-semibold text-white underline mb-5">Konsultasi Gratis</h2>
			<p class="text-white !text-lg mb-10">Hubungi kami untuk konsultasi gratis. Kami akan membantu Anda menentukan kebutuhan landing page bisnis Anda</p>
			<Button text="HUBUNGI KAMI SEKARANG" size="lg" bgColor="bg-base-lp-os-cp-cs" textColor="text-primary-lp" on:click={() => { goToUrl(waUrl) }} />
		</div>
		<div class="right-group flex flex-1 justify-end items-center">
			<img src="/img/landing-pages/consultation-circle.png" alt="consultation-circle">
		</div>
	</div>	
</div>

<!-- faq -->
<div id="faq" class="container mb-20 mx-auto">
	<div class="header-text flex flex-col items-center gap-5 mb-14">
		<h2 class="!font-semibold"><span class="text-accent-lp !text-3xl !font-semibold">Pertanyaan</span>Yang Sering Diajukan</h2>
		<p class="text-secondary-lp-os-cp-cs max-w-[650px] text-center">Berikut adalah beberapa pertanyaan yang sering diajukan tentang layanan Landing Page kami</p>
	</div>
	<div class="faq-items grid grid-cols-2 gap-10">
		<AccordionItem icon="fa-solid fa-info" iconBgColor="bg-primary-lp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Apakah Anda menawarkan layanan SEO?" desc="Ya, kami menawarkan layanan SEO untuk meningkatkan visibilitas landing page Anda di mesin pencari." />
		<AccordionItem icon="fa-solid fa-info" iconBgColor="bg-primary-lp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Apakah Anda dapat bekerja dengan klien di luar kota?" desc="Ya, kami bekerja dengan klien dari seluruh Indonesia." />
		<AccordionItem icon="fa-solid fa-info" iconBgColor="bg-primary-lp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Berapa lama waktu pengerjaan?" desc="Waktu pengerjaan tergantung pada kompleksitas proyek, namun biasanya 2-4 hari." />
		<AccordionItem icon="fa-solid fa-info" iconBgColor="bg-primary-lp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Apakah saya dapat melihat portofolio proyek-proyek sebelumnya?" desc="Ya, Anda dapat melihat portofolio proyek-proyek kami di section Proyek  Landing Page Kami di atas." />
		<AccordionItem icon="fa-solid fa-info" iconBgColor="bg-primary-lp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Apakah Anda menerima pembayaran dengan kartu kredit?" desc="Maaf, untuk saat ini hanya debit dan e-wallet." />
		<AccordionItem icon="fa-solid fa-info" iconBgColor="bg-primary-lp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Apakah Anda memberikan garansi kepuasan?" desc="Ya, kami memberikan garansi kepuasan." />
		<AccordionItem icon="fa-solid fa-info" iconBgColor="bg-primary-lp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Apakah desain landing page dapat disesuaikan?" desc="Ya, desain landing page dapat disesuaikan sesuai dengan kebutuhan dan preferensi Anda." />
		<AccordionItem icon="fa-solid fa-info" iconBgColor="bg-primary-lp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Apakah Anda menawarkan jasa konsultasi?" desc="Ya, kami menawarkan konsultasi gratis untuk membantu Anda menentukan kebutuhan landing page Anda." />
		<AccordionItem icon="fa-solid fa-info" iconBgColor="bg-primary-lp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Apakah Anda menawarkan layanan pemeliharaan?" desc="Ya, kami menawarkan layanan pemeliharaan untuk menjaga landing page Anda tetap up-to-date." />
		<AccordionItem icon="fa-solid fa-info" iconBgColor="bg-primary-lp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Apakah Anda menawarkan layanan revisi?" desc="Ya, kami menawarkan layanan revisi untuk memastikan Anda puas dengan hasil akhir." />
	</div>
</div>

<!-- footer -->
<Footer bgGradientColor="bg-primary-lp" logoColor="#FFFFFF" bgIcon="bg-primary" iconColor="text-primary-lp" />

</div>


<style lang="postcss">
	div {
		scroll-margin: 100px;
	}
	#consultation {
		background-image: url('/img/landing-pages/lp/bg-consultation-lp.png');
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>