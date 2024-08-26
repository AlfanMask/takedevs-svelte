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
		{ id: '', name: 'Beranda', isLink: true },
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
		waUrl = `https://wa.me/${import.meta.env.VITE_ADMIN_WA_NUMBER}?text=${import.meta.env.VITE_WA_CTA_HELLO_MSG} Online Shop${referralCode ? ', referral: ' + referralCode : ''}`
	}
</script>


<!-- HTML -->
<div class="bg-base-lp-os-cp-cs h-full lg:p-0">

<!-- #navbar -->
<Navbar items={navbarItems} baseColor="bg-base-lp-os-cp-cs" logoColor="#756AB6" textColor="text-secondary" />

<!-- header -->
<div id="header" class="container mx-auto px-5 lg:px-0">
	<div class="flex lg:flex-row justify-between items-center mb-28" style="padding-top: 160px">
        <div class="left-group flex flex-col items-center lg:items-start flex-[5] w-full lg:pr-20">
			<h1 class="text-center lg:text-start text-primary-lp-os-cp-cs mb-5">
				Tingkatkan Penjualan dengan
				<span class="text-accent-os !text-4xl lg:!text-5xl !font-bold">Online Shop</span>
			</h1>
			<p class="text-center lg:text-start text-secondary mb-10">
				Butuh bantuan untuk meningkatkan penjualan online Anda? Kami adalah tim ahli yang siap membantu bisnis Anda tumbuh.
			</p>
            <Button text="PELAJARI LEBIH LANJUT" bgColor="bg-primary-os" textColor="text-white" size="lg" on:click={() => { scrollToSection('pricelist') }}/>
        </div>
		<ImageGradient flexSize="flex-[7]" imgSrc="/img/landing-pages/os/header-os.jpg" gradientOverlay="bg-primary-os" gradientOpacity="opacity-10" isHideOnMobile />
	</div>
</div>

<!-- importance of -->
<div id="importance-of" class="flex flex-col items-center mb-28 px-5">
	<div class="header-text flex flex-col items-center gap-5 mb-14">
		<h2 class="text-center">Kenapa Online Shop <span class="text-accent-os !text-2xl lg:!text-3xl !font-semibold">Penting</span></h2>
		<p class="text-secondary-lp-os-cp-cs max-w-[800px] text-center">Di era digital ini, memiliki Online Shop adalah suatu keharusan bagi setiap bisnis. Berikut adalah beberapa alasan mengapa</p>
	</div>
	<div class="items flex flex-col lg:flex-row gap-10">
		<RotatedImgDesc desc="Jangkauan Pasar Luas" imgSrc="/img/landing-pages/os/importance-os-1.jpg" gradientOverlayFrom="from-primary-os" />
		<RotatedImgDesc desc="Akses 24/7" imgSrc="/img/landing-pages/os/importance-os-2.jpg" gradientOverlayFrom="from-primary-os" />
		<RotatedImgDesc desc="Biaya Operasional Rendah" imgSrc="/img/landing-pages/os/importance-os-3.jpg" gradientOverlayFrom="from-primary-os" />
	</div>
</div>

<!-- past projects -->
<div id="projects" class="py-14 bg-gradient-os flex flex-col items-center mb-20 lg:px-5">
	<div class="container px-4 lg:px-0">
		<div class="header-text flex flex-col items-center gap-5 mb-14 text-white">
			<h2 class="underline text-center">Proyek Online Shop Kami</h2>
			<p class="max-w-[800px] text-center">Kami telah berhasil membantu berbagai bisnis meningkatkan penjualan online mereka. Berikut adalah beberapa contoh proyek kami</p>
		</div>
		<div class="project-galleries grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-7">
			<GalleryCard srcImg="/img/landing-pages/os/project-1.png" url="https://sumberrejeki.takedevs.com/" />
			<GalleryCard srcImg="/img/landing-pages/os/project-2.png" url="https://alana.takedevs.com/" />
			<GalleryCard srcImg="/img/landing-pages/os/project-3.png" url="https://umkmpajang.takedevs.com/" />
			<GalleryCard srcImg="/img/landing-pages/os/project-4.png" />
			<GalleryCard srcImg="/img/landing-pages/os/project-5.png" url="https://sumberrejeki.takedevs.com/" />
			<GalleryCard srcImg="/img/landing-pages/os/project-6.png" url="https://alana.takedevs.com/" />
			<GalleryCard srcImg="/img/landing-pages/os/project-7.png" url="https://umkmpajang.takedevs.com/" />
			<GalleryCard srcImg="/img/landing-pages/os/project-8.png" url="https://alana.takedevs.com/" />
			<GalleryCard srcImg="/img/landing-pages/os/project-9.png" url="https://alana.takedevs.com/" />
		</div>
	</div>
</div>

<!-- why-us -->
<div id="why-us" class="container flex mx-auto items-center gap-5 mb-24 px-5">
	<ImageGradient flexSize="flex-[5]" customTailwindCSS="max-h-[650px]" imgSrc="/img/landing-pages/os/why-us-os.jpg" gradientOverlay="bg-primary-os" gradientOpacity="opacity-10" isHideOnMobile />
	<div class="right-group flex flex-[7] flex-col gap-7 items-center lg:items-start">
		<h2 class="!font-bold">Kenapa <span class="text-accent-os !text-2xl lg:!text-3xl !font-bold">Kami?</span></h2>
		<div class="points flex flex-col gap-5">
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Tim Ahli: Kami memiliki tim ahli dengan pengalaman luas di bidang e-commerce." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Strategi yang Efektif: Kami menggunakan strategi pemasaran yang terbukti berhasil." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Pelayanan Cepat dan Ramah: Kami berkomitmen memberikan pelayanan terbaik kepada pelanggan." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Harga Kompetitif: Kami menawarkan harga yang terjangkau tanpa mengorbankan kualitas." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Kustomisasi Penuh: Kami dapat menyesuaikan layanan sesuai dengan kebutuhan bisnis Anda." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Garansi Kepuasan: Kami menjamin kepuasan pelanggan dengan hasil kerja kami." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Dukungan Setelah Proyek: Kami terus memberikan dukungan setelah proyek selesai." />
		</div>
		<Button text="BUAT ONLINE SHOP SEKARANG" size="lg" bgColor="bg-primary-os" textColor="text-white" on:click={() => { goToUrl(waUrl) }} />
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
			oldPrice={800000}
			newPrice={749999}
			description="
• Menggunakan template
• Berada di subdomain takedevs.com
• Call to action (CTA) ke WhatsApp
• Maksimal 1 kali revisi
"
			on:click={() => { goToUrl(`${waUrl}, paket: Basic`) }}
			shadow="shadow-os"
		/>
			<PriceCard
				name="Premium"
				oldPrice={2000000}
				newPrice={1499000}
				description="
• Desain kustom
• Domain sendiri
• Setup Google My Business
• Setup Google Maps (jika belum ada)
• Call to action (CTA) ke WhatsApp
• Integrasi media sosial lengkap
• Live chat
• Integrasi e-commerce lainnya
• Maksimal 3 kali revisi
"
				isBestSeller={true}
				bestSellerBadgeColor="bg-accent-os"
				on:click={() => { goToUrl(`${waUrl}, paket: Premium`) }}
				shadow="shadow-os"
			/>
			<PriceCard
			name="Premium+"
			oldPrice={2300000}
			newPrice={1999000}
			description="
• Semua fitur Premium
• + Landing Page
"
			on:click={() => { goToUrl(`${waUrl}, paket: Premium+`) }}
			shadow="shadow-os"
		/>
		</div>
	</div>
</div>

<!-- persuasion -->
<div id="persuasion" class="container flex flex-col mx-auto mb-32 lg:mb-24 lg:w-[75%] lg:px-0 px-5">
	<span class="!text-2xl text-accent-os !font-semibold text-center mb-5">Jangan Lewatkan Kesempatan Ini</span>
	<span class="!text-lg text-secondary-lp-os-cp-cs text-center">Jangan lewatkan kesempatan untuk meningkatkan penjualan online Anda. Semakin cepat Anda menghubungi kami, semakin cepat kami dapat membantu bisnis Anda tumbuh</span>
</div>

<!-- consultation -->
<div id="consultation" class="w-full h-[520px] lg:h-[400px] flex justify-center mb-20 lg:mt-0 lg:px-5">
	<div class="container flex flex-col-reverse lg:flex-row justify-between items-center">
		<div class="left-group flex flex-1 flex-col items-center lg:items-start">
			<h2 class="!font-semibold text-white underline mb-5">Konsultasi Gratis</h2>
			<p class="text-white text-center lg:text-start !text-lg mb-10">Hubungi kami untuk konsultasi gratis. Kami akan membantu Anda menentukan kebutuhan online shop bisnis Anda.</p>
			<Button text="HUBUNGI KAMI SEKARANG" size="lg" bgColor="bg-base-lp-os-cp-cs" textColor="text-primary-os" on:click={() => { goToUrl(waUrl) }} />
		</div>
		<div class="right-group flex flex-1 justify-end items-center w-[75%] lg:w-full -mt-20 lg:mt-0 mb-4 lg:mb-0">
			<img src="/img/landing-pages/consultation-circle.png" alt="consultation-circle">
		</div>
	</div>	
</div>

<!-- faq -->
<div id="faq" class="container mb-20 mx-auto lg:px-0 px-5">
	<div class="header-text flex flex-col items-center gap-5 mb-14">
		<h2 class="text-center !text-3xl !font-bold"><span class="text-accent-os !text-3xl !font-bold">Pertanyaan</span>Yang Sering Diajukan</h2>
		<p class="text-secondary-lp-os-cp-cs max-w-[650px] text-center">Berikut adalah beberapa pertanyaan yang sering diajukan tentang layanan Online Shop kami</p>
	</div>
	<div class="faq-items grid grid-cols-1 lg:grid-cols-2 gap-10">
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-os" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Apa saja layanan yang Anda tawarkan?" desc="Kami menawarkan desain dan pengembangan web online shop, SEO, hingga Landing Page." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-os" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Apakah Anda melayani seluruh Indonesia?" desc="Ya, kami melayani berbagai klien dari seluruh Indonesia." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-os" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Bagaimana cara kerja layanan Anda?" desc="Setelah Anda menghubungi kami, kami akan melakukan konsultasi untuk memahami kebutuhan bisnis Anda. Kemudian, kami akan menyusun strategi yang tepat dan mulai mengerjakan proyek. Kami akan selalu berkomunikasi dengan Anda selama proses pengerjaan." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-os" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Apakah saya perlu memiliki pengetahuan teknis tentang e-commerce?" desc="Tidak, Anda tidak perlu memiliki pengetahuan teknis. Tim kami akan menangani semua aspek teknis." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-os" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Apakah Anda menawarkan dukungan setelah proyek selesai?" desc="Lama waktu pengerjaan proyek tergantung pada kompleksitas dan skala proyek. Namun, kami akan memberikan estimasi waktu yang jelas sebelum memulai proyek." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-os" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Berapa lama waktu yang dibutuhkan untuk menyelesaikan proyek?" desc="Ya, kami menawarkan dukungan setelah proyek selesai. Jika Anda memiliki pertanyaan atau masalah, kami siap membantu." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-os" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Berapa biaya untuk layanan konsultasi?" desc="Ya, kami menawarkan garansi kepuasan. Jika Anda tidak puas dengan hasil kerja kami, kami dapat melakukan revisi agar Anda puas." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-os" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Apakah Anda menawarkan garansi kepuasan?" desc="Layanan konsultasi gratis tidak dikenakan biaya." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-os" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Apakah ada biaya tambahan yang harus saya bayar?" desc="Kami menerima pembayaran melalui transfer dan e-wallet." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-os" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Bagaimana cara pembayaran?" desc="Biaya tambahan mungkin dikenakan untuk layanan tambahan atau permintaan khusus. Namun, kami akan memberikan informasi yang jelas tentang biaya tambahan sebelum memulai proyek." />
	</div>
</div>

<!-- footer -->
<Footer bgGradientColor="bg-primary-os" logoColor="#FFFFFF" bgIcon="bg-primary" iconColor="text-primary-os" />

</div>


<style lang="postcss">
	div {
		scroll-margin: 100px;
	}
	#consultation {
		background-image: url('/img/landing-pages/os/bg-consultation-os.png');
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>