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
		{ id: '', name: 'Home', isLink: true },
		{ id: 'services', name: 'Services', isLink: false, children: [
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
		<span class="text-accent-cs !text-4xl lg:!text-5xl !font-bold">Custom Software</span> Solutions for Your Business
		</h1>
		<p class="text-center lg:text-start text-secondary mb-10">
		  Need custom software for your business? We're here to help!
		</p>
		<Button text="LEARN MORE" bgColor="bg-primary-cs" textColor="text-white" size="lg" on:click={() => { scrollToSection('pricelist') }}/>
	  </div>
	  <ImageGradient flexSize="flex-[7]" imgSrc="/img/landing-pages/cs/header-cs.jpg" gradientOverlay="bg-primary-cs" gradientOpacity="opacity-10" isHideOnMobile />
	</div>
</div>

<!-- importance of -->
<div id="importance-of" class="flex flex-col items-center mb-28 px-5">
	<div class="header-text flex flex-col items-center gap-5 mb-14">
		<h2 class="text-center">Why Custom Software is <span class="text-accent-cs !text-2xl lg:!text-3xl !font-semibold">Important</span></h2>
		<p class="text-secondary-lp-os-cp-cs max-w-[800px] text-center">Custom Software is the best solution for any business because it can enhance:</p>
	</div>
	<div class="items flex flex-col lg:flex-row gap-10">
		<RotatedImgDesc desc="Efficiency" imgSrc="/img/landing-pages/cs/importance-cs-1.jpg" gradientOverlayFrom="from-primary-cs" />
		<RotatedImgDesc desc="Customer Satisfaction" imgSrc="/img/landing-pages/cs/importance-cs-2.jpg" gradientOverlayFrom="from-primary-cs" />
		<RotatedImgDesc desc="Business Growth" imgSrc="/img/landing-pages/cs/importance-cs-3.jpg" gradientOverlayFrom="from-primary-cs" />
	</div>
</div>

<!-- past projects -->
<div id="projects" class="py-14 bg-gradient-cs flex flex-col items-center mb-20 lg:px-5">
	<div class="container px-4 lg:px-0">
		<div class="header-text flex flex-col items-center gap-5 mb-14 text-white">
			<h2 class="underline text-center">Our Custom Software Projects</h2>
			<p class="max-w-[800px] text-center">See how we have helped other businesses with our custom software solutions.</p>
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
		<h2 class="!font-bold">Why <span class="text-accent-cs !text-2xl lg:!text-3xl !font-bold">Us?</span></h2>
		<div class="points flex flex-col gap-5">
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Years of Experience: We have extensive experience in developing various types of software, from web applications to Telegram bots. We understand client needs and can provide the right solutions." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Expert Team: Our team consists of experienced developers skilled in various cutting-edge technologies. They are committed to delivering the best results." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Top Quality: We prioritize quality in every project. We use proven development methodologies to ensure the final product meets the highest standards." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Full Customization: Our software is fully tailored to your business needs. We work closely with you to understand your vision and goals, then create the right solution." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Competitive Pricing: We offer competitive prices without compromising on quality. We believe every business, big or small, deserves quality software development services." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Exceptional Customer Service: Customer satisfaction is our priority. We are always ready to assist you with any questions or issues you may have." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Satisfaction Guarantee: We offer a satisfaction guarantee for our services. If you are not satisfied, we will work hard to resolve the situation." />
		</div>
		<Button text="CREATE CUSTOM SOFTWARE NOW" size="lg" bgColor="bg-primary-cs" textColor="text-white" on:click={() => { goToUrl(waUrl) }} />
	</div>
</div>

<!-- pricelist -->
<div id="pricelist" class="py-14 bg-gradient-cs flex flex-col items-center mb-20 lg:px-5">
	<h2 class="underline text-white text-center mb-14">Contact Us Directly for a Discussion</h2>
	<form action="" class="container lg:px-0 w-[90%] lg:w-[50%] bg-white rounded-2xl p-4 lg:!p-10">
		<div class="mb-4">
			<label for="fullName" class="block mb-2">Full Name</label>
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
			<label for="message" class="block mb-2">Describe Your Needs</label>
			<textarea
				name="message"
				id="message"
				bind:value={formData.message}
				class="w-full px-4 py-2 border rounded outline-secondary focus:outline-1 h-56 text-dark bg-transparent"
			></textarea>
		</div>
		<Button text="SEND" isFullWidth size="lg" bgColor="bg-primary-cs" textColor="text-white" on:click={submitContact} />
	</form>
</div>

<!-- persuasion -->
<div id="persuasion" class="container flex flex-col mx-auto mb-32 lg:mb-24 lg:w-[75%] lg:px-0 px-5">
    <span class="!text-2xl text-accent-cs !font-semibold text-center mb-5">Contact Us Now!</span>
    <span class="!text-lg text-secondary-lp-os-cp-cs text-center">Don't miss the chance to get the best custom software. Contact us now for a free consultation and get an attractive offer.</span>
</div>

<!-- consultation -->
<div id="consultation" class="w-full h-[520px] lg:h-[400px] flex justify-center mb-20 lg:mt-0 lg:px-5">
	<div class="container flex flex-col-reverse lg:flex-row justify-between items-center">
		<div class="left-group flex flex-1 flex-col items-center lg:items-start">
			<h2 class="!font-semibold text-white underline mb-5">Free Consultation</h2>
			<p class="text-white text-center lg:text-start !text-lg mb-10">Looking for the best solution for your business? Contact us for a free consultation.</p>
			<Button text="CONTACT US NOW" size="lg" bgColor="bg-base-lp-os-cp-cs" textColor="text-primary-cs" on:click={() => { goToUrl(waUrl) }} />
		</div>		
		<div class="right-group flex flex-1 justify-end items-center w-[75%] lg:w-full -mt-20 lg:mt-0 mb-4 lg:mb-0">
			<img src="/img/landing-pages/consultation-circle.png" alt="consultation-circle">
		</div>
	</div>	
</div>

<!-- faq -->
<div id="faq" class="container mb-20 mx-auto lg:px-0 px-5">
	<div class="header-text flex flex-col items-center gap-5 mb-14">
		<h2 class="text-center !text-3xl !font-bold"><span class="text-accent-cs !text-3xl !font-bold">Frequently</span> Asked Questions</h2>
		<p class="text-secondary-lp-os-cp-cs max-w-[650px] text-center">Here are some frequently asked questions about our Custom Software services.</p>
	</div>
	<div class="faq-items grid grid-cols-1 lg:grid-cols-2 gap-10">
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cs" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Do you accept small projects?" desc="Yes, we accept projects of various scales." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cs" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Can we see a pricelist?" desc="The cost for custom software development varies greatly depending on complexity and needs, so we need to discuss with the client first to determine the price." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cs" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="How long does development take?" desc="Development time depends on project complexity. We will provide an accurate time estimate after initial discussion." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cs" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="What custom software services do you offer?" desc="We handle WebApps, Desktop Apps, Mobile Apps, Bots, and Automation." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cs" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="How do you accept payments?" desc="We accept payments via bank transfer and e-wallet." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cs" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Do you provide quality assurance?" desc="Yes, we provide quality assurance for all projects we work on." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cs" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Do you provide support after the project is completed?" desc="Yes, we offer technical support and maintenance after the project is completed." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cs" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Can you ensure client data confidentiality?" desc="Yes, we are committed to maintaining client data confidentiality with an NDA (Non-Disclosure Agreement)." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cs" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Can you integrate the software with existing systems?" desc="Yes, we can integrate custom software with your existing systems." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cs" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Do you offer warranties?" desc="Yes, we offer warranties for every project." />
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