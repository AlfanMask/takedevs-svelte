<script lang="ts">
	import logo from '$lib/assets/logo-footer.png';
	import Button from '$lib/components/ui/Button.svelte';
	import SideBySideGallery from '$lib/components/SideBySideGallery.svelte';
	import ScrollingLogos from '$lib/components/ScrollingLogos.svelte';
	import LongSelector from '$lib/components/ui/LongSelector.svelte';
	import type { SelectorItem } from '../../constants/selector_item';
	import type { ServiceDesc } from '../../constants/service_desc';
	import Tab from '$lib/components/ui/Tab.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import { type Project, ProjectTypeEN } from '../../constants/project_en';
	import TextIcon from '$lib/components/ui/TextIcon.svelte';
	import type { ContactFormData } from '../../constants/contact_form';
	import Navbar from '../Navbar.svelte';
	import type { NavbarItem } from '../../constants/navbar_item';

	// navbar
	const navbarItems: Array<NavbarItem> = [
		{ id: 'header', name: 'Home' },
		{ id: 'services', name: 'Services' },
		{ id: 'projects', name: 'Projects' },
		{ id: 'contact-us', name: 'Contact Us' }
	];

	// side-by-side-gallery-datas
	const leftImgs: Array<string> = [
		'/img/side-by-side-gallery/sbsg-1.png',
		'/img/side-by-side-gallery/sbsg-2.png',
		'/img/side-by-side-gallery/sbsg-3.png'
	];
	const rightImgs: Array<string> = [
		'/img/side-by-side-gallery/sbsg-4.png',
		'/img/side-by-side-gallery/sbsg-5.png',
		'/img/side-by-side-gallery/sbsg-6.png'
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
			imgUrl: '/img/services/service-uiux.png',
			desc: 'Elevate your brand with captivating UI/UX design, creating seamless digital experiences that resonate with your audience and boost user engagement'
		},
		{
			imgUrl: '/img/services/service-webdesign.png',
			desc: 'Transform your vision into a stunning online presence. Our web design solutions combine aesthetics and functionality to ensure your website stands out and drives results'
		},
		{
			imgUrl: '/img/services/service-webapp.png',
			desc: 'Empower your business with custom web applications tailored to your unique requirements. Enhance user experiences, streamline processes, and boost overall productivity'
		},
		{
			imgUrl: '/img/services/service-mobile.png',
			desc: "Bring your ideas to life with our mobile app development. We craft innovative applications that cater to your users' needs, ensuring a seamless and engaging mobile journey"
		},
		{
			imgUrl: '/img/services/service-custom-software.png',
			desc: 'Propel your business forward with personalized software solutions. Tailored to your specific needs, our custom software enhances efficiency, scalability, and overall performance'
		},
		{
			imgUrl: '/img/services/service-bots.png',
			desc: 'Revolutionize your operations with intelligent bot and automation. Experience enhanced efficiency, speed, and improved user interactions, driving success in the digital landscape'
		}
	];
	const servicesSelectors: Array<SelectorItem> = [
		{ text: 'UI/UX Design', isActive: false },
		{ text: 'Website Design', isActive: false },
		{ text: 'WebApp Development', isActive: false },
		{ text: 'Mobile App Development', isActive: false },
		{ text: 'Custom Software Development', isActive: false },
		{ text: 'Bot & Automation', isActive: false }
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
		{ text: 'All', isActive: true },
		...Object.values(ProjectTypeEN).map((o) => ({ text: o, isActive: false }))
	];
	let activeTabIndex: number = 0;

	// proejct-galleries
	let projectGalleries: Array<Project> = [
		{
			imgUrl: '/img/projects/bots-kampusku.jpg',
			title: 'Kampusku Bot',
			desc: ProjectTypeEN['Bot & Automation'],
			type: ProjectTypeEN['Bot & Automation']
		},
		{
			imgUrl: '/img/projects/custom-software-game-fighting.jpg',
			title: 'Logan Paul Fighting Game',
			desc: ProjectTypeEN['Custom Software'],
			type: ProjectTypeEN['Custom Software']
		},
		{
			imgUrl: '/img/projects/uiux-pamapersada-desktop.jpg',
			title: 'Warehouse PT. Pamapersada WebApp',
			desc: ProjectTypeEN['UI/UX Design'],
			type: ProjectTypeEN['UI/UX Design']
		},
		{
			imgUrl: '/img/projects/uiux-pamapersada-mobile.png',
			title: 'Warehouse PT. Pamapersada Mobile App',
			desc: ProjectTypeEN['UI/UX Design'],
			type: ProjectTypeEN['UI/UX Design']
		},
		{
			imgUrl: '/img/projects/uiux-refit.png',
			title: 'Refit Store',
			desc: ProjectTypeEN['UI/UX Design'],
			type: ProjectTypeEN['UI/UX Design']
		},
		{
			imgUrl: '/img/projects/uiux-logo-hakaplastik.png',
			title: 'Hakaplastik Logo',
			desc: ProjectTypeEN['UI/UX Design'],
			type: ProjectTypeEN['UI/UX Design']
		},
		{
			imgUrl: '/img/projects/webapp-airival-shuttle.png',
			title: 'Airival Shuttle',
			desc: ProjectTypeEN['WebApp'],
			type: ProjectTypeEN['WebApp']
		},
		{
			imgUrl: '/img/projects/webapp-socioinvest.png',
			title: 'Socioinvest',
			desc: ProjectTypeEN['WebApp'],
			type: ProjectTypeEN['WebApp']
		},
		{
			imgUrl: '/img/projects/webapp-vizir-marketplace.png',
			title: 'Vizir Marketplace',
			desc: ProjectTypeEN['WebApp'],
			type: ProjectTypeEN['WebApp']
		},
		{
			imgUrl: '/img/projects/webapp-undangan-ibnuabbas.png',
			title: 'Undangan Digital Ponpes Ibnu Abbas',
			desc: ProjectTypeEN['WebApp'],
			type: ProjectTypeEN['WebApp']
		},
		{
			imgUrl: '/img/projects/webapp-vizir-notes.png',
			title: 'Vizir Notes Taking',
			desc: ProjectTypeEN['WebApp'],
			type: ProjectTypeEN['WebApp']
		},
		{
			imgUrl: '/img/projects/webapp-vizir-product-manager.png',
			title: 'Vizir Product Manager',
			desc: ProjectTypeEN['WebApp'],
			type: ProjectTypeEN['WebApp']
		},
		{
			imgUrl: '/img/projects/webapp-vizir-project-management.png',
			title: 'Vizir Project Management',
			desc: ProjectTypeEN['WebApp'],
			type: ProjectTypeEN['WebApp']
		},
		{
			imgUrl: '/img/projects/webapp-vizir-ticketing.png',
			title: 'Vizir Ticketing',
			desc: ProjectTypeEN['WebApp'],
			type: ProjectTypeEN['WebApp']
		},
		{
			imgUrl: '/img/projects/webapp-vizir-ticket-manager.png',
			title: 'Vizir Ticket Manager',
			desc: ProjectTypeEN['WebApp'],
			type: ProjectTypeEN['WebApp']
		},
		{
			imgUrl: '/img/projects/webdesign-augmented-solution.png',
			title: 'Augmented Solution',
			desc: ProjectTypeEN['Web Design'],
			type: ProjectTypeEN['Web Design']
		},
		{
			imgUrl: '/img/projects/webdesign-bt-rorsystem.png',
			title: 'BT Rorsystem',
			desc: ProjectTypeEN['Web Design'],
			type: ProjectTypeEN['Web Design']
		},
		{
			imgUrl: '/img/projects/webdesign-cimport.png',
			title: 'C-Import',
			desc: ProjectTypeEN['Web Design'],
			type: ProjectTypeEN['Web Design']
		},
		{
			imgUrl: '/img/projects/webdesign-hakaplastik.png',
			title: 'PT. Haka Sentral Plastik Indonesia',
			desc: ProjectTypeEN['Web Design'],
			type: ProjectTypeEN['Web Design']
		},
		{
			imgUrl: '/img/projects/webdesign-holh.png',
			title: 'Heroes of Last Haven',
			desc: ProjectTypeEN['Web Design'],
			type: ProjectTypeEN['Web Design']
		},
		{
			imgUrl: '/img/projects/webdesign-littlenewsears.png',
			title: 'Littlenewsears',
			desc: ProjectTypeEN['Web Design'],
			type: ProjectTypeEN['Web Design']
		},
		{
			imgUrl: '/img/projects/webdesign-umkmpajang.png',
			title: 'UMKM Pajang Martketplace',
			desc: ProjectTypeEN['Web Design'],
			type: ProjectTypeEN['Web Design']
		},
		{
			imgUrl: '/img/projects/webdesign-yesagroworld.png',
			title: 'Yesagroworld',
			desc: ProjectTypeEN['Web Design'],
			type: ProjectTypeEN['Web Design']
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
		const activeType: ProjectTypeEN | 'All' = tabs[activeTabIndex].text as ProjectTypeEN | 'All';

		if (activeType === 'All') {
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

	// helper
	const scrollToSection = (sectionId: string) => {
		const section = document.getElementById(sectionId);
		section?.scrollIntoView({ behavior: 'smooth' });
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div class="container mx-auto px-5 lg:px-0">
	<!-- #navbar -->
	<Navbar items={navbarItems} />

	<!-- #header -->
	<div id="header" class="flex pt-20 lg:pt-24 mb-28 h-[500px] lg:h-[800px]">
		<div
			class="left-group z-10 flex flex-1 flex-col items-center pt-14 lg:pt-0 lg:items-start my-auto"
		>
			<h1 class="text-center lg:text-start text-primary mb-5">
				Develop Your
				<span class="text-accent !text-4xl lg:!text-5xl !font-bold">Ideas</span>
				<br class="hidden lg:block" /> with
				<span class="text-accent !text-4xl lg:!text-5xl !font-bold">TakeDevs</span>
			</h1>
			<p class="text-center lg:text-start text-secondary mb-10">
				Unlock the full potential of your imagination and creativity with TakeDevs – where
				innovation meets expertise
			</p>
			<Button text="Learn more" on:click={() => scrollToSection('clients')} />
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
			OUR <span class="text-accent !text-2xl lg:!text-3xl !font-bold">CLIENTS</span>
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
				OUR <span class="text-accent !text-2xl lg:!text-3xl !font-bold">SERVICES</span>
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
				OUR <span class="text-accent !text-2xl lg:!text-3xl !font-bold">PROJECTS</span>
			</h2>
			<p class="text-center text-secondary">
				Discover our portfolio: a testament to innovation, excellence,<br />and successful
				collaborations
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
		<h2 class="text-center text-primary mb-5">LET’S BUILD YOUR IDEAS WITH TAKEDEVS</h2>
		<p class="text-center text-primary opacity-50 mb-10">
			Embark on a transformative journey as we collaborate to bring your ideas to life. With
			TakeDevs, innovation is a shared adventure, blending creativity and expertise to craft
			solutions that stand as a testament to your vision and our commitment to excellence
		</p>
		<!-- svelte-ignore missing-declaration -->
		<Button
			text="CONTACT US"
			color="white"
			size="lg"
			on:click={() => scrollToSection('contact-us')}
		/>
	</div>

	<!-- #contact-us -->
	<div id="contact-us" class="flex py-12">
		<div class="container flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between">
			<div class="flex flex-col items-center lg:items-start lg:my-10 w-full">
				<h2 class="text-center lg:text-start text-accent mb-5">
					CONTACT <span class="text-primary !text-2xl lg:!text-3xl !font-bold">US</span>
				</h2>
				<p class="text-center lg:text-start text-secondary mb-7 text-lg">
					Reach out effortlessly. <br />
					Connect with us for inquiries
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
						<label for="fullName" class="block mb-2">Fullname</label>
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
						<label for="message" class="block mb-2">Message</label>
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
						on:click={submitContact}>SUBMIT</a
					>
				</form>
			</div>
		</div>
	</div>
</div>
<footer>
	<div class="container mx-auto flex flex-col lg:flex-row justify-between items-center py-5">
		<div class="flex flex-col items-center lg:items-start mb-5 lg:mb-0">
			<img src={logo} alt="logo.png" class="mb-3" />
			<p class="text-primary">© 2024 TakeDevs. All rights reserved.</p>
		</div>
		<div class="socmed flex gap-5 py-5">
			<a href="https://www.instagram.com/takedevs/" target="_blank">
				<i class="fa-brands fa-instagram"></i>
			</a>
			<a href="https://www.facebook.com/takedevs" target="_blank">
				<i class="fa-brands fa-facebook"></i>
			</a>
			<a href="https://www.tiktok.com/@takedevs" target="_blank">
				<i class="fa-brands fa-tiktok"></i>
			</a>
			<a href="https://dribbble.com/alfanmask" target="_blank">
				<i class="fa-brands fa-dribbble"></i>
			</a>
			<a href="https://www.youtube.com/@takedevs_official" target="_blank">
				<i class="fa-brands fa-youtube"></i>
			</a>
		</div>
	</div>
</footer>

<style lang="postcss">
	/* all sections */
	#header,
	#clients,
	#services,
	#projects,
	#contact-us {
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

	/* footer */
	footer {
		background-image: var(--accent-footer-gradient);
	}
	footer .socmed a {
		@apply w-12 h-12 rounded-full bg-primary flex items-center justify-center;
	}
	footer .socmed a i {
		@apply text-2xl text-accent;
	}

	/* @media screen and (max-width: 768px) {
		#header {
			height: 384px;
		}
	} */
</style>
