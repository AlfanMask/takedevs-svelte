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
		{ id: 'id', name: 'Beranda', isLink: true },
		{ id: 'services', name: 'Jasa', isLink: false, children: [
			{ id: 'landing-page', name: "Landing Page", isLink: false },
			{ id: 'online-shop', name: "Online Shop", isLink: false },
			{ id: 'company-profile', name: "Company Profile", isLink: false },
			{ id: 'custom-software', name: "Custom Software", isLink: false },
		] },
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
		waUrl = `https://wa.me/${import.meta.env.VITE_ADMIN_WA_NUMBER}?text=${import.meta.env.VITE_WA_CTA_HELLO_MSG} Company Profile${referralCode ? ', referral: ' + referralCode : ''}`
	}
</script>


<!-- HTML -->
<div class="bg-base-lp-os-cp-cs h-full lg:p-0">

<!-- #navbar -->
<Navbar items={navbarItems} baseColor="bg-base-lp-os-cp-cs" logoColor="#164863" textColor="text-secondary" />

<!-- header -->
<div id="header" class="container mx-auto px-5 lg:px-0">
	<div class="flex lg:flex-row justify-between items-center mb-28" style="padding-top: 160px">
        <div class="left-group flex flex-col items-center lg:items-start flex-[5] w-full lg:pr-20">
			<h1 class="text-center lg:text-start text-primary-lp-os-cp-cs mb-5">
				Tampil Professional dengan
				<span class="text-accent-cp !text-4xl lg:!text-5xl !font-bold">Company Profile</span>
			</h1>
			<p class="text-center lg:text-start text-secondary mb-10">
				Butuh company profile yang menarik dan informatif? Kami siap membantu Anda!
			</p>
            <Button text="PELAJARI LEBIH LANJUT" bgColor="bg-primary-cp" textColor="text-white" size="lg" on:click={() => { scrollToSection('pricelist') }}/>
        </div>
		<ImageGradient flexSize="flex-[7]" imgSrc="/img/landing-pages/cp/header-cp.jpg" gradientOverlay="bg-primary-cp" gradientOpacity="opacity-10" isHideOnMobile />
	</div>
</div>

<!-- importance of -->
<div id="importance-of" class="flex flex-col items-center mb-28 px-5">
	<div class="header-text flex flex-col items-center gap-5 mb-14">
		<h2 class="text-center">Kenapa Company Profile <span class="text-accent-cp !text-2xl lg:!text-3xl !font-semibold">Penting</span></h2>
		<p class="text-secondary-lp-os-cp-cs max-w-[800px] text-center"> Sebuah company profile yang baik dapat memberikan kesan positif kepada calon klien dan mitra bisnis. Selain itu agar:</p>
	</div>
	<div class="items flex flex-col lg:flex-row gap-10">
		<RotatedImgDesc desc="Meningkatkan Trust" imgSrc="/img/landing-pages/cp/importance-cp-1.jpg" gradientOverlayFrom="from-primary-cp" />
		<RotatedImgDesc desc="Memperkuat Branding" imgSrc="/img/landing-pages/cp/importance-cp-2.jpg" gradientOverlayFrom="from-primary-cp" />
		<RotatedImgDesc desc="Kemudahan Komunikasi" imgSrc="/img/landing-pages/cp/importance-cp-3.jpg" gradientOverlayFrom="from-primary-cp" />
	</div>
</div>

<!-- past projects -->
<div id="projects" class="py-14 bg-gradient-os flex flex-col items-center mb-20 lg:px-5">
	<div class="container px-4 lg:px-0">
		<div class="header-text flex flex-col items-center gap-5 mb-14 text-white">
			<h2 class="underline text-center">Proyek Company Profile Kami</h2>
			<p class="max-w-[800px] text-center">Lihatlah beberapa contoh proyek pembuatan company profile yang telah kami selesaikan dengan sukses.</p>
		</div>
		<div class="project-galleries grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-7">
			<GalleryCard srcImg="/img/landing-pages/cp/project-1.png" />
			<GalleryCard srcImg="/img/landing-pages/cp/project-2.png" />
			<GalleryCard srcImg="/img/landing-pages/cp/project-3.png" />
			<GalleryCard srcImg="/img/landing-pages/cp/project-4.png" />
			<GalleryCard srcImg="/img/landing-pages/cp/project-5.png" />
			<GalleryCard srcImg="/img/landing-pages/cp/project-6.png" />
		</div>
	</div>
</div>

<!-- why-us -->
<div id="why-us" class="container flex mx-auto items-center gap-5 mb-24 px-5">
	<ImageGradient flexSize="flex-[5]" customTailwindCSS="max-h-[650px]" imgSrc="/img/landing-pages/cp/why-us-cp.jpg" gradientOverlay="bg-primary-cp" gradientOpacity="opacity-10" isHideOnMobile />
	<div class="right-group flex flex-[7] flex-col gap-7 items-center lg:items-start">
		<h2 class="!font-bold">Kenapa <span class="text-accent-cp !text-2xl lg:!text-3xl !font-bold">Kami?</span></h2>
		<div class="points flex flex-col gap-5">
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Pengalaman luas: Tim kami memiliki pengalaman bertahun-tahun dalam pembuatan company profile." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Kualitas terbaik: Kami berkomitmen untuk menghasilkan hasil yang berkualitas tinggi." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Desain kreatif: Kami menawarkan desain yang menarik dan sesuai dengan branding Anda." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Waktu pengerjaan cepat: Kami dapat menyelesaikan proyek dengan efisien." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Harga terjangkau: Kami menawarkan harga yang kompetitif tanpa mengorbankan kualitas." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Pelayanan prima: Kepuasan pelanggan adalah prioritas utama kami." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Garansi kepuasan: Jika Anda tidak puas, kami akan revisi sampai Anda puas." />
		</div>
		<Button text="BUAT COMPANY PROFILE SEKARANG" size="lg" bgColor="bg-primary-cp" textColor="text-white" on:click={() => { goToUrl(waUrl) }} />
	</div>
</div>

<!-- pricelist -->
<div id="pricelist" class="py-14 bg-gradient-os flex flex-col items-center mb-20 lg:px-5">
	<div class="container px-4 lg:px-0">
		<div class="header-text flex flex-col items-center gap-5 mb-7 text-white">
			<h2 class="underline">Pilih Paket</h2>
			<p class="max-w-[800px] text-center">Kami menawarkan berbagai paket layanan untuk memenuhi kebutuhan bisnis Anda</p>
		</div>
		<div class="prices flex flex-col lg:flex-row items-center lg:justify-center gap-7 lg:gap-5 pt-2 lg:pt-20">
			<PriceCard
			name="Basic"
			oldPrice={1750000}
			newPrice={1499000}
			description="
• Menggunakan template WordPress
• Maksimal 5 halaman
• Domain sendiri
• Setup email perusahaan
• Maksimal 1 revisi
"
			on:click={() => { goToUrl(`${waUrl}, paket: Basic`) }}
			shadow="shadow-cp"
		/>
			<PriceCard
				name="Premium"
				oldPrice={3000000}
				newPrice={2499000}
				description="
• Desain kustom
• Maksimal 10 halaman (setiap halaman tambahan dikenakan biaya Rp100.000)
• Domain sendiri
• Setup email perusahaan
• Live chat
• Maksimal 3 revisi
"
				isBestSeller={true}
				bestSellerBadgeColor="bg-accent-cp"
				on:click={() => { goToUrl(`${waUrl}, paket: Premium`) }}
				shadow="shadow-cp"
			/>
			<PriceCard
			name="Premium+"
			oldPrice={4000000}
			newPrice={3499000}
			description="
• Semua fitur Premium
• + Brosur
• + Kartu nama
• + Logo (jika diperlukan)
"
			on:click={() => { goToUrl(`${waUrl}, paket: Premium+`) }}
			shadow="shadow-cp"
		/>
		</div>
	</div>
</div>

<!-- persuasion -->
<div id="persuasion" class="container flex flex-col mx-auto mb-32 lg:mb-24 lg:w-[75%] lg:px-0 px-5">
	<span class="!text-2xl text-accent-cp !font-semibold text-center mb-5">Segera Hubungi Kami!</span>
	<span class="!text-lg text-secondary-lp-os-cp-cs text-center">Jangan lewatkan kesempatan untuk mendapatkan company profile terbaik. Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran menarik.</span>
</div>

<!-- consultation -->
<div id="consultation" class="w-full h-[520px] lg:h-[400px] flex justify-center mb-20 lg:mt-0 lg:px-5">
	<div class="container flex flex-col-reverse lg:flex-row justify-between items-center">
		<div class="left-group flex flex-1 flex-col items-center lg:items-start">
			<h2 class="!font-semibold text-white underline mb-5">Konsultasi Gratis</h2>
			<p class="text-white text-center lg:text-start !text-lg mb-10">Ingin tau solusi terbaik untuk bisnis Anda? Hubungi kami untuk konsultasi gratis.</p>
			<Button text="HUBUNGI KAMI SEKARANG" size="lg" bgColor="bg-base-lp-os-cp-cs" textColor="text-primary-cp" on:click={() => { goToUrl(waUrl) }} />
		</div>
		<div class="right-group flex flex-1 justify-end items-center w-[75%] lg:w-full -mt-20 lg:mt-0 mb-4 lg:mb-0">
			<img src="/img/landing-pages/consultation-circle.png" alt="consultation-circle">
		</div>
	</div>	
</div>

<!-- faq -->
<div id="faq" class="container mb-20 mx-auto lg:px-0 px-5">
	<div class="header-text flex flex-col items-center gap-5 mb-14">
		<h2 class="text-center !text-3xl !font-bold"><span class="text-accent-cp !text-3xl !font-bold">Pertanyaan</span>Yang Sering Diajukan</h2>
		<p class="text-secondary-lp-os-cp-cs max-w-[650px] text-center">Berikut adalah beberapa pertanyaan yang sering diajukan tentang layanan Company Profile kami</p>
	</div>
	<div class="faq-items grid grid-cols-1 lg:grid-cols-2 gap-10">
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Apa itu company profile?" desc="Company profile adalah dokumen yang berisi informasi tentang perusahaan Anda, termasuk sejarah, visi, misi, produk atau jasa, tim manajemen, dan prestasi." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Bisakah saya melihat contoh company profile yang telah Anda buat?" desc="Tentu saja! Kami dapat menunjukkan beberapa contoh company profile yang telah kami buat untuk klien sebelumnya." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Mengapa perusahaan saya membutuhkan company profile?" desc="Company profile dapat membantu meningkatkan kredibilitas, membangun brand image, menarik investor, dan mempermudah komunikasi dengan klien dan mitra bisnis." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Apakah Anda menawarkan revisi setelah pembuatan company profile?" desc="Ya, kami menawarkan revisi untuk memastikan Anda puas dengan hasil akhir." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Apa yang harus diikutkan dalam company profile?" desc="Secara umum, sebuah company profile harus mencakup informasi tentang sejarah perusahaan, visi dan misi, struktur organisasi, produk atau jasa, prestasi, tim manajemen, dan kontak." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Bagaimana cara pembayaran?" desc="Kami menerima pembayaran melalui transfer bank dan e-wallet." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Bagaimana cara Anda membuat company profile?" desc="Kami akan melakukan riset mendalam tentang perusahaan Anda, mengumpulkan informasi yang relevan, dan kemudian merancang dan menulis company profile yang menarik dan informatif." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Apakah Anda melayani seluruh wilayah Indonesia?" desc="Ya, kami melayani seluruh wilayah Indonesia." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Berapa lama waktu yang dibutuhkan untuk membuat company profile?" desc="Waktu yang dibutuhkan untuk membuat company profile tergantung pada kompleksitas dan volume informasi yang perlu diproses. Namun, kami biasanya dapat menyelesaikan proyek dalam waktu 1 minggu." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Apakah Anda juga menawarkan layanan desain grafis lainnya?" desc="Ya, kami juga menawarkan layanan desain grafis lainnya seperti logo, kartu nama, dan brosur." />
	</div>
</div>

<!-- footer -->
<Footer bgGradientColor="bg-primary-cp" logoColor="#FFFFFF" bgIcon="bg-primary" iconColor="text-primary-cp" />

</div>


<style lang="postcss">
	div {
		scroll-margin: 100px;
	}
	#consultation {
		background-image: url('/img/landing-pages/cp/bg-consultation-cp.png');
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>