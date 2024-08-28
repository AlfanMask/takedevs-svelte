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
	import type { ContactFormData } from '../../../constants/contact_form';

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
		waUrl = `https://wa.me/${import.meta.env.VITE_ADMIN_WA_NUMBER}?text=${import.meta.env.VITE_WA_CTA_HELLO_MSG} Custom Software${referralCode ? ', referral: ' + referralCode : ''}`
	}

	// contact to discuss directly
	let formData: ContactFormData = {
		fullname: '',
		email: '',
		message: ''
	};

	// open mail app and send the email
	const submitContact = () => {
		const subject: string = formData.fullname + ' - ' + formData.email;
		const mailtoUrl = `mailto:${import.meta.env.VITE_ADMIN_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formData.message)}`;
		window.open(mailtoUrl);
	};
</script>


<!-- HTML -->
<div class="bg-base-lp-os-cp-cs h-full lg:p-0">

<!-- #navbar -->
<Navbar items={navbarItems} baseColor="bg-base-lp-os-cp-cs" logoColor="#0D7C66" textColor="text-secondary" />

<!-- header -->
<div id="header" class="container mx-auto px-5 lg:px-0">
	<div class="flex lg:flex-row justify-between items-center mb-28" style="padding-top: 160px">
        <div class="left-group flex flex-col items-center lg:items-start flex-[5] w-full lg:pr-20">
			<h1 class="text-center lg:text-start text-primary-cs-os-cp-cs mb-5">
				Solusi <span class="text-accent-cs !text-4xl lg:!text-5xl !font-bold">Custom Software</span> untuk Bisnis Anda
			</h1>
			<p class="text-center lg:text-start text-secondary mb-10">
				Butuh software khusus untuk bisnis Anda? Kami siap membantu!
			</p>
            <Button text="PELAJARI LEBIH LANJUT" bgColor="bg-primary-cs" textColor="text-white" size="lg" on:click={() => { scrollToSection('importance-of') }}/>
        </div>
		<ImageGradient flexSize="flex-[7]" imgSrc="/img/landing-pages/cs/header-cs.jpg" gradientOverlay="bg-primary-cs" gradientOpacity="opacity-10" isHideOnMobile />
	</div>
</div>

<!-- importance of -->
<div id="importance-of" class="flex flex-col items-center mb-28 px-5">
	<div class="header-text flex flex-col items-center gap-5 mb-14">
		<h2 class="text-center">Kenapa Custom Software <span class="text-accent-cs !text-2xl lg:!text-3xl !font-semibold">Penting</span></h2>
		<p class="text-secondary-lp-os-cp-cs max-w-[800px] text-center">Custom Software adalah solusi terbaik untuk setiap bisnis, karena dapat meningkatkan:</p>
	</div>
	<div class="items flex flex-col lg:flex-row gap-10">
		<RotatedImgDesc desc="Efisiensi" imgSrc="/img/landing-pages/cs/importance-cs-1.jpg" gradientOverlayFrom="from-primary-cs" />
		<RotatedImgDesc desc="Kepuasan Kustomer" imgSrc="/img/landing-pages/cs/importance-cs-2.jpg" gradientOverlayFrom="from-primary-cs" />
		<RotatedImgDesc desc="Pertumbuhan Bisnis" imgSrc="/img/landing-pages/cs/importance-cs-3.jpg" gradientOverlayFrom="from-primary-cs" />
	</div>
</div>

<!-- past projects -->
<div id="projects" class="py-14 bg-gradient-cs flex flex-col items-center mb-20 lg:px-5">
	<div class="container px-4 lg:px-0">
		<div class="header-text flex flex-col items-center gap-5 mb-14 text-white">
			<h2 class="underline text-center">Proyek Custom Software Kami</h2>
			<p class="max-w-[800px] text-center">Lihat bagaimana kami telah membantu bisnis-bisnis lain dengan solusi custom software kami.</p>
		</div>
		<div class="project-galleries grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-7">
			<GalleryCard srcImg="/img/landing-pages/cs/project-1.png" />
			<GalleryCard srcImg="/img/landing-pages/cs/project-2.png" />
			<GalleryCard srcImg="/img/landing-pages/cs/project-3.png" />
			<GalleryCard srcImg="/img/landing-pages/cs/project-4.png" />
			<GalleryCard srcImg="/img/landing-pages/cs/project-5.png" />
			<GalleryCard srcImg="/img/landing-pages/cs/project-6.png" />
			<GalleryCard srcImg="/img/landing-pages/cs/project-7.jpg" />
			<GalleryCard srcImg="/img/landing-pages/cs/project-8.png" />
			<GalleryCard srcImg="/img/landing-pages/cs/project-9.png" />
			<GalleryCard srcImg="/img/landing-pages/cs/project-10.jpg" />
			<GalleryCard srcImg="/img/landing-pages/cs/project-11.png" />
			<GalleryCard srcImg="/img/landing-pages/cs/project-12.png" />
		</div>
	</div>
</div>

<!-- why-us -->
<div id="why-us" class="container flex mx-auto items-center gap-5 mb-24 px-5">
	<ImageGradient height="h-[750px]" flexSize="flex-[5]" customTailwindCSS="h-[750px]" imgSrc="/img/landing-pages/cs/why-us-cs.jpg" gradientOverlay="bg-primary-cs" gradientOpacity="opacity-10" isHideOnMobile />
	<div class="right-group flex flex-[7] flex-col gap-7 items-center lg:items-start">
		<h2 class="!font-bold">Kenapa <span class="text-accent-cs !text-2xl lg:!text-3xl !font-bold">Kami?</span></h2>
		<div class="points flex flex-col gap-5">
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Pengalaman Bertahun-Tahun: Kami telah berpengalaman dalam mengembangkan berbagai jenis perangkat lunak, dari aplikasi web hingga bot Telegram. Kami memahami kebutuhan klien dan dapat memberikan solusi yang tepat." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Tim Ahli: Tim kami terdiri dari pengembang berpengalaman yang ahli dalam berbagai teknologi terkini. Mereka berkomitmen untuk memberikan hasil terbaik." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Kualitas Terbaik: Kami selalu mengedepankan kualitas dalam setiap proyek. Kami menggunakan metodologi pengembangan yang teruji untuk memastikan produk akhir memenuhi standar tertinggi." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Kustomisasi Penuh: Perangkat lunak kami diadaptasi sepenuhnya sesuai dengan kebutuhan bisnis Anda. Kami bekerja sama dengan Anda untuk memahami visi dan tujuan Anda, lalu menciptakan solusi yang tepat." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Harga Kompetitif: Kami menawarkan harga yang kompetitif tanpa mengorbankan kualitas. Kami percaya bahwa setiap bisnis, baik besar maupun kecil, berhak mendapatkan layanan pengembangan perangkat lunak yang berkualitas." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Pelayanan Pelanggan Prima: Kepuasan pelanggan adalah prioritas kami. Kami selalu siap membantu Anda dengan pertanyaan atau masalah yang Anda hadapi." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Jaminan Kepuasan: Kami memberikan jaminan kepuasan atas layanan kami. Jika Anda tidak puas, kami akan bekerja keras untuk memperbaiki situasi." />
		</div>
		<Button text="BUAT CUSTOM SOFTWARE SEKARANG" size="lg" bgColor="bg-primary-cs" textColor="text-white" on:click={() => { goToUrl(waUrl) }} />
	</div>
</div>

<!-- pricelist -->
<div id="pricelist" class="py-14 bg-gradient-cs flex flex-col items-center mb-20 lg:px-5">
	<h2 class="underline text-white text-center mb-14">Hubungi Kami Langsung untuk Diskusi</h2>
	<form action="" class="container lg:px-0 w-[90%] lg:w-[50%] bg-white rounded-2xl p-4 lg:!p-10">
		<div class="mb-4">
			<label for="fullName" class="block mb-2">Nama Lengkap</label>
			<input
				type="text"
				name="fullname"
				id="fullname"
				bind:value={formData.fullname}
				class="w-full px-4 py-2 border rounded outline-secondary focus:outline-1 text-dark bg-transparent"
			/>
		</div>
		<div class="mb-4">
			<label for="email" class="block mb-2">Email</label>
			<input
				type="email"
				name="email"
				id="email"
				bind:value={formData.email}
				class="w-full px-4 py-2 border rounded outline-secondary focus:outline-1 text-dark bg-transparent"
			/>
		</div>
		<div class="mb-4">
			<label for="message" class="block mb-2">Tulis Kebutuhan Anda</label>
			<textarea
				name="message"
				id="message"
				bind:value={formData.message}
				class="w-full px-4 py-2 border rounded outline-secondary focus:outline-1 h-56 text-dark bg-transparent"
			></textarea>
		</div>
		<!-- svelte-ignore a11y-missing-attribute -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<Button text="KIRIM" isFullWidth size="lg" bgColor="bg-primary-cs" textColor="text-white" on:click={submitContact} />
		<!-- <a
			type="submit"
			class="w-full py-2 px-10 border rounded-md bg-gradient-to-r from-[#1473FB] to-[#3B4B92] text-white font-semibold text-center cursor-pointer"
			on:click={submitContact}>KIRIM</a
		> -->
	</form>
</div>

<!-- persuasion -->
<div id="persuasion" class="container flex flex-col mx-auto mb-32 lg:mb-24 lg:w-[75%] lg:px-0 px-5">
	<span class="!text-2xl text-accent-cs !font-semibold text-center mb-5">Segera Hubungi Kami!</span>
	<span class="!text-lg text-secondary-lp-os-cp-cs text-center">Jangan lewatkan kesempatan untuk mendapatkan custom software terbaik. Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran menarik.</span>
</div>

<!-- consultation -->
<div id="consultation" class="w-full h-[520px] lg:h-[400px] flex justify-center mb-20 lg:mt-0 lg:px-5">
	<div class="container flex flex-col-reverse lg:flex-row justify-between items-center">
		<div class="left-group flex flex-1 flex-col items-center lg:items-start">
			<h2 class="!font-semibold text-white underline mb-5">Konsultasi Gratis</h2>
			<p class="text-white text-center lg:text-start !text-lg mb-10">Ingin mencari solusi terbaik untuk bisnis Anda? Hubungi kami untuk konsultasi gratis.</p>
			<Button text="HUBUNGI KAMI SEKARANG" size="lg" bgColor="bg-base-lp-os-cp-cs" textColor="text-primary-cs" on:click={() => { goToUrl(waUrl) }} />
		</div>
		<div class="right-group flex flex-1 justify-end items-center w-[75%] lg:w-full -mt-20 lg:mt-0 mb-4 lg:mb-0">
			<img src="/img/landing-pages/consultation-circle.png" alt="consultation-circle">
		</div>
	</div>	
</div>

<!-- faq -->
<div id="faq" class="container mb-20 mx-auto lg:px-0 px-5">
	<div class="header-text flex flex-col items-center gap-5 mb-14">
		<h2 class="text-center !text-3xl !font-bold"><span class="text-accent-cs !text-3xl !font-bold">Pertanyaan</span>Yang Sering Diajukan</h2>
		<p class="text-secondary-lp-os-cp-cs max-w-[650px] text-center">Berikut adalah beberapa pertanyaan yang sering diajukan tentang layanan Custom Software kami</p>
	</div>
	<div class="faq-items grid grid-cols-1 lg:grid-cols-2 gap-10">
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cs" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Apakah Anda menerima proyek kecil?" desc="Ya, kami menerima proyek dengan berbagai skala." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cs" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Apakah kami dapat melihat pricelist?" desc="Biaya untuk pengembangan custom software akan sangat beragam tergantung dari kompleksitas dan kebutuhan, sehingga klien dan kami harus diskusi terlebih dahulu untuk menentukan harga." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cs" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Berapa lama waktu pengembangan?" desc="Waktu pengembangan tergantung pada kompleksitas proyek. Kami akan memberikan estimasi waktu yang akurat setelah diskusi awal." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cs" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Layanan custom software apa saja yang Anda bisa kerjakan?" desc="Kami mampu mengerjakan WebApp, Desktop App, Mobile App, Bot, hingga Automation." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cs" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Bagaimana cara membayar?" desc="Kami menerima pembayaran melalui transfer bank dan e-wallet." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cs" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Apakah Anda dapat memberikan jaminan kualitas?" desc="Ya, kami memberikan jaminan kualitas untuk semua proyek yang kami kerjakan." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cs" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Apakah Anda menyediakan dukungan setelah proyek selesai?" desc="Ya, kami menyediakan dukungan teknis dan pemeliharaan setelah proyek selesai." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cs" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Apakah Anda dapat menjaga kerahasiaan data klien?" desc="Ya, kami berkomitmen untuk menjaga kerahasiaan data klien dengan dokumen NDA (Non-Disclosure Agreement)." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cs" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Apakah Anda dapat mengintegrasikan software dengan sistem yang ada?" desc="Ya, kami dapat mengintegrasikan custom software dengan sistem yang Anda gunakan." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cs" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Apakah Anda menawarkan garansi?" desc="Ya, kami menawarkan garansi untuk setiap proyek." />
	</div>
</div>

<!-- footer -->
<Footer bgGradientColor="bg-primary-cs" logoColor="#FFFFFF" bgIcon="bg-primary" iconColor="text-primary-cs" />

</div>


<style lang="postcss">
	div {
		scroll-margin: 100px;
	}
	#consultation {
		background-image: url('/img/landing-pages/cs/bg-consultation-cs.png');
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>