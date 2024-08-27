<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import SideBySideGallery from '$lib/components/SideBySideGallery.svelte';
	import ScrollingLogos from '$lib/components/ScrollingLogos.svelte';
	import LongSelector from '$lib/components/ui/LongSelector.svelte';
	import type { SelectorItem } from '../../constants/selector_item';
	import type { ServiceDesc } from '../../constants/service_desc';
	import Tab from '$lib/components/ui/Tab.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import { type Project, ProjectTypeID } from '../../constants/project_id';
	import TextIcon from '$lib/components/ui/TextIcon.svelte';
	import type { ContactFormData } from '../../constants/contact_form';
	import Navbar from '../Navbar.svelte';
	import type { NavbarItem } from '../../constants/navbar_item';
	import Logo from '$lib/components/ui/Logo.svelte';
	import Footer from '../Footer.svelte';
	import { scrollToSection } from '../../helper/goto';

	// navbar
	const navbarItems: Array<NavbarItem> = [
		{ id: 'header', name: 'Beranda', isLink: false },
		{ id: 'services', name: 'Jasa', isLink: false, children: [
			{ id: 'landing-page', name: "Landing Page", isLink: false },
			{ id: 'online-shop', name: "Online Shop", isLink: false },
			{ id: 'company-profile', name: "Company Profile", isLink: false },
			{ id: 'custom-software', name: "Custom Software", isLink: false },
		] },
		{ id: 'projects', name: 'Proyek', isLink: false },
		{ id: 'contact-us', name: 'Hubungi Kami', isLink: false },
	];

	// side-by-side-gallery-datas
	const leftImgs: Array<string> = [
		'/img/side-by-side-gallery/sbsg-1.webp',
		'/img/side-by-side-gallery/sbsg-2.webp',
		'/img/side-by-side-gallery/sbsg-3.webp'
	];
	const rightImgs: Array<string> = [
		'/img/side-by-side-gallery/sbsg-4.webp',
		'/img/side-by-side-gallery/sbsg-5.webp',
		'/img/side-by-side-gallery/sbsg-6.webp'
	];

	// scrolling-logos
	const scrollingLogoImgs: Array<string> = [
		'/img/clients/logo-client-1.png',
		'/img/clients/logo-client-2.png',
		'/img/clients/logo-client-3.png',
		'/img/clients/logo-client-4.png',
		'/img/clients/logo-client-5.png',
		'/img/clients/logo-client-6.png',
		'/img/clients/logo-client-7.png',
		'/img/clients/logo-client-8.png',
		'/img/clients/logo-client-9.png',
		'/img/clients/logo-client-10.png',
		'/img/clients/logo-client-11.png',
		'/img/clients/logo-client-12.png',
		'/img/clients/logo-client-13.png'
	];

	// services-selector
	const servicesDesc: Array<ServiceDesc> = [
		{
			imgUrl: '/img/services/service-uiux.webp',
			desc: 'Kami menciptakan pengalaman digital yang intuitif dan menarik secara visual yang menyenangkan pengguna. Fokus kami pada desain berpusat pada pengguna untuk memastikan kegunaan produk yang optimal.'
		},
		{
			imgUrl: '/img/services/service-landing-page.webp',
			desc: 'Kami mendesain landing page dengan konversi tinggi yang menarik perhatian dan mendorong konversi. Tujuan kami adalah menciptakan pengalaman online yang menarik yang memberikan hasil.'
		},
		{
			imgUrl: '/img/services/service-online-shop.webp',
			desc: 'Kami membangun platform e-commerce yang kuat sesuai dengan kebutuhan bisnis Anda. Solusi kami menawarkan pengalaman belanja yang mulus dan mendorong pertumbuhan penjualan.'
		},
		{
			imgUrl: '/img/services/service-company-profile.webp',
			desc: 'Kami menciptakan identitas merek yang menarik yang mencerminkan nilai-nilai perusahaan Anda. Desain kami menciptakan kehadiran visual yang kuat dan meninggalkan kesan yang tahan lama.'
		},
		{
			imgUrl: '/img/services/service-website-desa.webp',
			desc: 'Pusat digital satu atap untuk informasi desa. Akses berita, acara, layanan, dan pembaruan komunitas dengan mudah secara online.'
		},
		{
			imgUrl: '/img/services/service-custom-software.webp',
			desc: 'Kami mengembangkan solusi perangkat lunak khusus untuk mengatasi tantangan unik Anda. Tim kami memberikan aplikasi khusus yang meningkatkan operasi bisnis.'
		}
	];
	const servicesSelectors: Array<SelectorItem> = [
		{ text: ProjectTypeID['UI/UX Design'], isActive: false },
		{ text: ProjectTypeID['Landing Page'], isActive: false },
		{ text: ProjectTypeID['Online Shop'], isActive: false },
		{ text: ProjectTypeID['Company Profile'], isActive: false },
		{ text: ProjectTypeID['Website Desa'], isActive: false },
		{ text: ProjectTypeID['Custom Software'], isActive: false }
	];
	let activeServiceIndex: number = 0;
	$: {
		for (let i = 0; i < servicesSelectors.length; i++) {
			if (i !== activeServiceIndex) servicesSelectors[i].isActive = false;
		}
		servicesSelectors[activeServiceIndex].isActive = true;
	}

	// projects-selector
	let tabs: Array<SelectorItem> = [
		{ text: 'Semua', isActive: true },
		...Object.values(ProjectTypeID).map((o) => ({ text: o, isActive: false }))
	];
	let activeTabIndex: number = 0;

	// proejct-galleries
	let projectGalleries: Array<Project> = [
		{
			imgUrl: '/img/projects/custom-software-kampusku.webp',
			title: 'Kampusku Bot',
			desc: ProjectTypeID['Custom Software'],
			type: ProjectTypeID['Custom Software']
		},
		{
			imgUrl: '/img/projects/custom-software-game-fighting.webp',
			title: 'Logan Paul Fighting Game',
			desc: ProjectTypeID['Custom Software'],
			type: ProjectTypeID['Custom Software']
		},
		{
			imgUrl: '/img/projects/uiux-pamapersada-desktop.webp',
			title: 'Warehouse PT. Pamapersada WebApp',
			desc: ProjectTypeID['UI/UX Design'],
			type: ProjectTypeID['UI/UX Design']
		},
		{
			imgUrl: '/img/projects/uiux-pamapersada-mobile.webp',
			title: 'Warehouse PT. Pamapersada Mobile App',
			desc: ProjectTypeID['UI/UX Design'],
			type: ProjectTypeID['UI/UX Design']
		},
		{
			imgUrl: '/img/projects/uiux-refit.webp',
			title: 'Refit Store',
			desc: ProjectTypeID['UI/UX Design'],
			type: ProjectTypeID['UI/UX Design']
		},
		{
			imgUrl: '/img/projects/uiux-logo-hakaplastik.webp',
			title: 'Hakaplastik Logo',
			desc: ProjectTypeID['UI/UX Design'],
			type: ProjectTypeID['UI/UX Design']
		},
		{
			imgUrl: '/img/projects/custom-software-airival-shuttle.webp',
			title: 'Airival Shuttle',
			desc: ProjectTypeID['Custom Software'],
			type: ProjectTypeID['Custom Software']
		},
		{
			imgUrl: '/img/projects/custom-software-socioinvest.webp',
			title: 'Socioinvest',
			desc: ProjectTypeID['Custom Software'],
			type: ProjectTypeID['Custom Software']
		},
		{
			imgUrl: '/img/projects/custom-software-vizir-marketplace.webp',
			title: 'Vizir Marketplace',
			desc: ProjectTypeID['Custom Software'],
			type: ProjectTypeID['Custom Software']
		},
		{
			imgUrl: '/img/projects/custom-software-undangan-ibnuabbas.webp',
			title: 'Undangan Digital Ponpes Ibnu Abbas',
			desc: ProjectTypeID['Custom Software'],
			type: ProjectTypeID['Custom Software']
		},
		{
			imgUrl: '/img/projects/custom-software-vizir-notes.webp',
			title: 'Vizir Notes Taking',
			desc: ProjectTypeID['Custom Software'],
			type: ProjectTypeID['Custom Software']
		},
		{
			imgUrl: '/img/projects/custom-software-vizir-product-manager.webp',
			title: 'Vizir Product Manager',
			desc: ProjectTypeID['Custom Software'],
			type: ProjectTypeID['Custom Software']
		},
		{
			imgUrl: '/img/projects/custom-software-vizir-project-management.webp',
			title: 'Vizir Project Management',
			desc: ProjectTypeID['Custom Software'],
			type: ProjectTypeID['Custom Software']
		},
		{
			imgUrl: '/img/projects/custom-software-vizir-ticketing.webp',
			title: 'Vizir Ticketing',
			desc: ProjectTypeID['Custom Software'],
			type: ProjectTypeID['Custom Software']
		},
		{
			imgUrl: '/img/projects/custom-software-vizir-ticket-manager.webp',
			title: 'Vizir Ticket Manager',
			desc: ProjectTypeID['Custom Software'],
			type: ProjectTypeID['Custom Software']
		},
		{
			imgUrl: '/img/projects/company-profile-augmented-solution.webp',
			title: 'Augmented Solution',
			desc: ProjectTypeID['Company Profile'],
			type: ProjectTypeID['Company Profile']
		},
		{
			imgUrl: '/img/projects/company-profile-bt-rorsystem.webp',
			title: 'BT Rorsystem',
			desc: ProjectTypeID['Company Profile'],
			type: ProjectTypeID['Company Profile']
		},
		{
			imgUrl: '/img/projects/online-shop-cimport.webp',
			title: 'C-Import',
			desc: ProjectTypeID['Online Shop'],
			type: ProjectTypeID['Online Shop']
		},
		{
			imgUrl: '/img/projects/company-profile-hakaplastik.webp',
			title: 'PT. Haka Sentral Plastik Indonesia',
			desc: ProjectTypeID['Company Profile'],
			type: ProjectTypeID['Company Profile']
		},
		{
			imgUrl: '/img/projects/company-profile-holh.webp',
			title: 'Heroes of Last Haven',
			desc: ProjectTypeID['Company Profile'],
			type: ProjectTypeID['Company Profile']
		},
		{
			imgUrl: '/img/projects/custom-software-littlenewsears.webp',
			title: 'Littlenewsears',
			desc: ProjectTypeID['Custom Software'],
			type: ProjectTypeID['Custom Software']
		},
		{
			imgUrl: '/img/projects/online-shop-umkmpajang.webp',
			title: 'UMKM Pajang',
			desc: ProjectTypeID['Online Shop'],
			type: ProjectTypeID['Online Shop']
		},
		{
			imgUrl: '/img/projects/company-profile-yesagroworld.webp',
			title: 'Yesagroworld',
			desc: ProjectTypeID['Company Profile'],
			type: ProjectTypeID['Company Profile']
		},
		{
			imgUrl: '/img/projects/online-shop-sumberrejeki-basreng.webp',
			title: 'Bakso Goreng Sumber Rejeki',
			desc: ProjectTypeID['Online Shop'],
			type: ProjectTypeID['Online Shop']
		},
		{
			imgUrl: '/img/projects/online-shop-alana-store.webp',
			title: 'Alana Store',
			desc: ProjectTypeID['Online Shop'],
			type: ProjectTypeID['Online Shop']
		},
		{
			imgUrl: '/img/projects/website-desa-giriroto.webp',
			title: 'Desa Giriroto',
			desc: ProjectTypeID['Website Desa'],
			type: ProjectTypeID['Website Desa']
		},
		{
			imgUrl: '/img/projects/website-desa-joho.webp',
			title: 'Desa Joho',
			desc: ProjectTypeID['Website Desa'],
			type: ProjectTypeID['Website Desa']
		},
		{
			imgUrl: '/img/projects/website-desa-sengging.webp',
			title: 'Desa Sengging',
			desc: ProjectTypeID['Website Desa'],
			type: ProjectTypeID['Website Desa']
		},
		{
			imgUrl: '/img/projects/landing-page-stylo.webp',
			title: 'Stylo Design',
			desc: ProjectTypeID['Landing Page'],
			type: ProjectTypeID['Landing Page']
		},
		{
			imgUrl: '/img/projects/landing-page-eatz.webp',
			title: 'Eatz Restaurant',
			desc: ProjectTypeID['Landing Page'],
			type: ProjectTypeID['Landing Page']
		},
		{
			imgUrl: '/img/projects/landing-page-ayara.webp',
			title: 'Ayara Fashion',
			desc: ProjectTypeID['Landing Page'],
			type: ProjectTypeID['Landing Page']
		},
		{
			imgUrl: '/img/projects/landing-page-kreativa.webp',
			title: 'Kreativa',
			desc: ProjectTypeID['Landing Page'],
			type: ProjectTypeID['Landing Page']
		},
		{
			imgUrl: '/img/projects/landing-page-monitor.webp',
			title: 'Monitor App',
			desc: ProjectTypeID['Landing Page'],
			type: ProjectTypeID['Landing Page']
		}
	];
	let shownProjectGalleries: Array<Project> = [
		...projectGalleries.sort((a, b) =>
			a.title.toLocaleLowerCase().localeCompare(b.title.toLocaleLowerCase())
		)
	];
	$: {
		for (let i = 0; i < tabs.length; i++) {
			if (i !== activeTabIndex) tabs[i].isActive = false;
		}
		tabs[activeTabIndex].isActive = true;

		// update shown project galleries based on tab filter
		const activeType: ProjectTypeID | 'Semua' = tabs[activeTabIndex].text as
			| ProjectTypeID
			| 'Semua';

		if (activeType === 'Semua') {
			shownProjectGalleries = [
				...projectGalleries.sort((a, b) =>
					a.title.toLocaleLowerCase().localeCompare(b.title.toLocaleLowerCase())
				)
			];
		} else {
			shownProjectGalleries = [
				...projectGalleries
					.filter((o) => o.type === activeType)
					.sort((a, b) => a.title.toLocaleLowerCase().localeCompare(b.title.toLocaleLowerCase()))
			];
		}
	}

	// contact-us
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

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- #navbar -->
<div class="bg-base h-full">
<Navbar items={navbarItems} />

<div class="container mx-auto px-5 lg:px-0">

	<!-- #header -->
	<div id="header" class="flex pt-20 lg:pt-24 mb-28 h-[500px] lg:h-[800px]">
		<div
			class="left-group z-10 flex flex-1 flex-col items-center pt-14 lg:pt-0 lg:items-start my-auto"
		>
			<h1 class="text-center lg:text-start text-primary mb-5">
				Kembangkan
				<span class="text-accent !text-4xl lg:!text-5xl !font-bold">Ide Anda</span>
				<br class="hidden lg:block" />dengan
				<span class="text-accent !text-4xl lg:!text-5xl !font-bold">TakeDevs</span>
			</h1>
			<p class="text-center lg:text-start text-secondary mb-10">
				Bebaskan imajinasi dan kreativitas Anda sepenuhnya bersama TakeDevs – tempat bertemunya
				inovasi dengan imajinasi.
			</p>
			<Button text="Pelajari Lebih Lanjut" bgColor="bg-blueish-gradient" textColor="text-white" on:click={() => scrollToSection('clients')} />
		</div>

		<div
			class="right-group left-0 blur-sm opacity-25 lg:blur-none lg:opacity-100 z-0 absolute lg:relative flex-1"
		>
			<div class="max-h-[500px] lg:max-h-[800px] relative overflow-hidden">
				<div class="top-gradient w-full h-10 lg:h-60 absolute z-10"></div>
				<SideBySideGallery {leftImgs} {rightImgs} />
				<div class="bottom-gradient w-full h-10 lg:h-60 absolute z-10"></div>
			</div>
		</div>
	</div>

	<!-- #clients -->
	<div id="clients" class="mb-20 lg:mb-28 lg:pt-20">
		<!-- TODO: remove horizontal overflow -->
		<h2 class="text-center text-primary mb-10">
			KLIEN <span class="text-accent !text-2xl lg:!text-3xl !font-bold"> KAMI</span>
		</h2>
		<ScrollingLogos imgs={scrollingLogoImgs} />
	</div>

	<!-- #services -->
	<div
		id="services"
		class="flex flex-col-reverse lg:flex-row h-full items-start gap-10 mb-20 lg:mb-28"
	>
		<div class="left-group h-full relative flex-1">
			<img
				src={servicesDesc[activeServiceIndex].imgUrl}
				alt="side-pict"
				class="h-[300px] lg:h-[500px]"
			/>
			<p class="absolute z-20 px-7 py-10 bottom-4 text-primary italic">
				{servicesDesc[activeServiceIndex].desc}
			</p>
			<div class="gradient z-10"></div>
		</div>
		<div class="right-group flex-1 mt-2">
			<h2 class="text-center lg:text-start text-primary mb-7">
				<span class="text-accent !text-2xl lg:!text-3xl !font-bold">PELAYANAN</span> KAMI
			</h2>
			<div class="selectors grid grid-cols-2 lg:flex lg:flex-col gap-5">
				{#each servicesSelectors as service, i}
					<LongSelector item={service} on:click={() => (activeServiceIndex = i)} />
				{/each}
			</div>
		</div>
	</div>

	<!-- #projects -->
	<div id="projects" class="flex flex-col mb-20 lg:mb-28">
		<div class="title w-full flex flex-col items-center gap-5 mb-10">
			<h2 class="text-primary">
				<span class="text-accent !text-2xl lg:!text-3xl !font-bold">PROYEK</span> KAMI
			</h2>
			<p class="text-center text-secondary">
				Jelajahi portofolio kami yang telah terbukti inovasi, <br /> serta keunggulannya
			</p>
		</div>
		<!-- TODO: the problem is because it is overflow horizontally -->
		<div class="tabs-mobile flex lg:hidden flex-col gap-5 justify-center mb-14">
			<!-- show ALL tab as a top tab that takes whole width -->
			<Tab item={tabs[0]} on:click={() => (activeTabIndex = 0)} />
			<div class="grid grid-cols-2 gap-5">
				{#each tabs as tab, i}
					{#if i !== 0}
						<Tab item={tab} on:click={() => (activeTabIndex = i)} />
					{/if}
				{/each}
			</div>
		</div>
		<div class="tab-desktop hidden lg:flex flex-col lg:flex-row gap-5 justify-center mb-14">
			{#each tabs as tab, i}
				<Tab item={tab} on:click={() => (activeTabIndex = i)} />
			{/each}
		</div>
		<div class="galleries">
			<!-- TODO: remove horizontal overflow -->
			<Gallery galleries={shownProjectGalleries} />
		</div>
	</div>

	<!-- #cta -->
	<div
		id="cta"
		class="w-full flex flex-col items-center py-14 px-12 lg:px-24 rounded-2xl bg-accent-gradient mb-10"
	>
		<h2 class="text-center text-primary mb-5">MARI BANGUN IDE ANDA BERSAMA TAKEDEVS</h2>
		<p class="text-center text-primary opacity-50 mb-10">
			Bergabunglah dalam perjalanan transformasi digital Anda bersama kami untuk menghidupkan
			ide-ide Anda. Bersama TakeDevs, inovasi adalah petualangan bersama yang memadukan antara
			kreativitas dan keahlian demi terciptanya solusi dari permasalahan usaha Anda.
		</p>
		<!-- svelte-ignore missing-declaration -->
		<Button
			text="HUBUNGI KAMI"
			bgColor="bg-white"
			textColor="text-accent"
			size="lg"
			on:click={() => scrollToSection('contact-us')}
		/>
	</div>

	<!-- #contact-us -->
	<div id="contact-us" class="flex py-12">
		<div class="container flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between">
			<div class="flex flex-col items-center lg:items-start lg:my-10 w-full">
				<h2 class="text-center lg:text-start text-accent mb-5">
					HUBUNGI <span class="text-primary !text-2xl lg:!text-3xl !font-bold">KAMI</span>
				</h2>
				<p class="text-center lg:text-start text-secondary mb-7 text-lg">
					Jangkau kami dengan mudah. <br />
					Hubungi kami untuk diskusi lebih lanjut
				</p>
				<div class="text-primary flex flex-col items-center lg:items-start gap-5">
					<TextIcon icon="fa-solid fa-envelope" text="contact@takedevs.com" />
					<TextIcon icon="fa-brands fa-whatsapp" text="+6285 1711 58992" />
					<TextIcon icon="fa-solid fa-phone" text="+6285 1711 58992" />
				</div>
			</div>

			<!-- Form -->
			<div class="w-full lg:my-10 border rounded-2xl px-7 py-10 bg-primary text-black">
				<form action="">
					<div class="mb-4">
						<label for="fullName" class="block mb-2">Nama Lengkap</label>
						<input
							type="text"
							name="fullname"
							id="fullname"
							bind:value={formData.fullname}
							class="w-full px-4 py-2 border rounded outline-secondary focus:outline-1 text-dark"
						/>
					</div>
					<div class="mb-4">
						<label for="email" class="block mb-2">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							bind:value={formData.email}
							class="w-full px-4 py-2 border rounded outline-secondary focus:outline-1 text-dark"
						/>
					</div>
					<div class="mb-4">
						<label for="message" class="block mb-2">Pesan</label>
						<textarea
							name="message"
							id="message"
							bind:value={formData.message}
							class="w-full px-4 py-2 border rounded outline-secondary focus:outline-1 h-56 text-dark"
						></textarea>
					</div>
					<!-- svelte-ignore a11y-missing-attribute -->
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<a
						type="submit"
						class="w-full lg:w-fit py-2 px-10 border rounded-md bg-gradient-to-r from-[#1473FB] to-[#3B4B92] text-white font-semibold text-center cursor-pointer"
						on:click={submitContact}>KIRIM</a
					>
				</form>
			</div>
		</div>
	</div>
</div>
<Footer bgGradientColor="bg-accent-footer-gradient" logoColor="#FFFFFF" bgIcon="bg-primary" iconColor="text-accent" />
</div>

<style lang="postcss">
	/* all sections */
	div {
		scroll-margin: 120px;
	}

	/* header */
	#header .top-gradient {
		background: linear-gradient(to bottom, rgba(23, 24, 36, 1) 10%, rgba(23, 24, 36, 0) 100%);
	}
	#header .bottom-gradient {
		@apply bottom-0;
		background: linear-gradient(to top, rgba(23, 24, 36, 1) 10%, rgba(23, 24, 36, 0) 100%);
	}

	/* services */
	#services .left-group img {
		@apply relative w-full rounded-2xl object-cover;
		/* height: 500px; */
		box-shadow:
			0 20px 25px -5px rgba(0, 0, 0, 0.1),
			0 10px 10px -5px rgba(0, 0, 0, 0.04);
	}
	#services .left-group .gradient {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(to top, rgba(23, 24, 36, 0.75) 0%, rgba(23, 24, 36, 0) 100%);
	}
</style>
