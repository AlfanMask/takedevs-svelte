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
				Looks Professional with
				<span class="text-accent-cp !text-4xl lg:!text-5xl !font-bold">Company Profile</span>
			</h1>
			<p class="text-center lg:text-start text-secondary mb-10">
				Need an attractive and informative company profile? We're here to help!
			</p>
            <Button text="LEARN MORE" bgColor="bg-primary-cp" textColor="text-white" size="lg" on:click={() => { scrollToSection('pricelist') }}/>
        </div>
		<ImageGradient flexSize="flex-[7]" imgSrc="/img/landing-pages/cp/header-cp.jpg" gradientOverlay="bg-primary-cp" gradientOpacity="opacity-10" isHideOnMobile />
	</div>
</div>

<!-- importance of -->
<div id="importance-of" class="flex flex-col items-center mb-28 px-5">
	<div class="header-text flex flex-col items-center gap-5 mb-14">
	  <h2 class="text-center">Why Company Profile is <span class="text-accent-cp !text-2xl lg:!text-3xl !font-semibold">Important</span></h2>
	  <p class="text-secondary-lp-os-cp-cs max-w-[800px] text-center">A good company profile can create a positive impression on potential clients and business partners. Additionally, to:</p>
	</div>
	<div class="items flex flex-col lg:flex-row gap-10">
	  <RotatedImgDesc desc="Increase Trust" imgSrc="/img/landing-pages/cp/importance-cp-1.jpg" gradientOverlayFrom="from-primary-cp" />
	  <RotatedImgDesc desc="Strengthen Branding" imgSrc="/img/landing-pages/cp/importance-cp-2.jpg" gradientOverlayFrom="from-primary-cp" />
	  <RotatedImgDesc desc="Facilitate Communication" imgSrc="/img/landing-pages/cp/importance-cp-3.jpg" gradientOverlayFrom="from-primary-cp" />
	</div>
</div>

<!-- past projects -->
<div id="projects" class="py-14 bg-gradient-os flex flex-col items-center mb-20 lg:px-5">
	<div class="container px-4 lg:px-0">
		<div class="header-text flex flex-col items-center gap-5 mb-14 text-white">
			<h2 class="underline text-center">Our Company Profile Projects</h2>
			<p class="max-w-[800px] text-center">Take a look at some examples of company profile projects that we have successfully completed.</p>
		</div>
		<div class="project-galleries grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-7">
			<GalleryCard srcImg="/img/landing-pages/cp/project-1.png" />
			<GalleryCard srcImg="/img/landing-pages/cp/project-2.png" />
			<GalleryCard srcImg="/img/landing-pages/cp/project-3.png" />
			<GalleryCard srcImg="/img/landing-pages/cp/project-4.webp" url="https://jnukmiuns.com" />
			<GalleryCard srcImg="/img/landing-pages/cp/project-5.png" />
			<GalleryCard srcImg="/img/landing-pages/cp/project-6.png" />
		</div>
	</div>
</div>

<!-- why-us -->
<div id="why-us" class="container flex mx-auto items-center gap-5 mb-24 px-5">
	<ImageGradient flexSize="flex-[5]" customTailwindCSS="max-h-[650px]" imgSrc="/img/landing-pages/cp/why-us-cp.jpg" gradientOverlay="bg-primary-cp" gradientOpacity="opacity-10" isHideOnMobile />
	<div class="right-group flex flex-[7] flex-col gap-7 items-center lg:items-start">
		<h2 class="!font-bold">Why <span class="text-accent-cp !text-2xl lg:!text-3xl !font-bold">Us?</span></h2>
		<div class="points flex flex-col gap-5">
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Extensive Experience: Our team has years of experience in creating company profiles." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Top Quality: We are committed to delivering high-quality results." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Creative Design: We offer designs that are engaging and aligned with your branding." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Fast Turnaround: We can complete projects efficiently." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Affordable Prices: We offer competitive pricing without sacrificing quality." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Excellent Service: Customer satisfaction is our top priority." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Satisfaction Guarantee: If you are not satisfied, we will revise until you are." />
		</div>
		<Button text="CREATE COMPANY PROFILE NOW" size="lg" bgColor="bg-primary-cp" textColor="text-white" on:click={() => { goToUrl(waUrl) }} />
	</div>
</div>

<!-- pricelist -->
<div id="pricelist" class="py-14 bg-gradient-os flex flex-col items-center mb-20 lg:px-5">
	<div class="container px-4 lg:px-0">
	  <div class="header-text flex flex-col items-center gap-5 mb-7 text-white">
		<h2 class="underline">Choose a Package</h2>
		<p class="max-w-[800px] text-center">We offer various service packages to meet your business needs</p>
	  </div>
	  <div class="prices flex flex-col lg:flex-row items-center lg:justify-center gap-7 lg:gap-5 pt-2 lg:pt-20">
		<PriceCard
		  name="Basic"
		  oldPrice={1750000}
		  newPrice={1499000}
		  description="
  • Uses WordPress template
  • Maximum 5 pages
  • Own domain
  • Company email setup
  • Maximum 1 revision
  "
		  on:click={() => { goToUrl(`${waUrl}, paket: Basic`) }}
		  shadow="shadow-cp"
		  lang="en"
		/>
		<PriceCard
		  name="Premium"
		  oldPrice={3000000}
		  newPrice={2499000}
		  description="
  • Custom design
  • Maximum 10 pages (each additional page costs Rp100,000)
  • Own domain
  • Company email setup
  • Live chat
  • Maximum 3 revisions
  "
		  isBestSeller={true}
		  bestSellerBadgeColor="bg-accent-cp"
		  on:click={() => { goToUrl(`${waUrl}, paket: Basic`) }}
		  shadow="shadow-cp"
		  lang="en"
		/>
		<PriceCard
		  name="Premium+"
		  oldPrice={4000000}
		  newPrice={3499000}
		  description="
  • All Premium features
  • + Brochure
  • + Business card
  • + Logo (if needed)
  "
		  on:click={() => { goToUrl(`${waUrl}, paket: Basic`) }}
		  shadow="shadow-cp"
		  lang="en"
		/>
	  </div>
	</div>
  </div>

<!-- persuasion -->
<div id="persuasion" class="container flex flex-col mx-auto mb-32 lg:mb-24 lg:w-[75%] lg:px-0 px-5">
	<span class="!text-2xl text-accent-cp !font-semibold text-center mb-5">Contact Us Now!</span>
	<span class="!text-lg text-secondary-lp-os-cp-cs text-center">Don’t miss the chance to get the best company profile. Contact us now for a free consultation and receive an attractive offer.</span>
</div>

<!-- consultation -->
<div id="consultation" class="w-full h-[520px] lg:h-[400px] flex justify-center mb-20 lg:mt-0 lg:px-5">
	<div class="container flex flex-col-reverse lg:flex-row justify-between items-center">
		<div class="left-group flex flex-1 flex-col items-center lg:items-start">
			<h2 class="!font-semibold text-white underline mb-5">Free Consultation</h2>
			<p class="text-white text-center lg:text-start !text-lg mb-10">Want to know the best solution for your business? Contact us for a free consultation.</p>
			<Button text="CONTACT US NOW" size="lg" bgColor="bg-base-lp-os-cp-cs" textColor="text-primary-cp" on:click={() => { goToUrl(waUrl) }} />
		</div>		
		<div class="right-group flex flex-1 justify-end items-center w-[75%] lg:w-full -mt-20 lg:mt-0 mb-4 lg:mb-0">
			<img src="/img/landing-pages/consultation-circle.png" alt="consultation-circle">
		</div>
	</div>	
</div>

<!-- faq -->
<div id="faq" class="container mb-20 mx-auto lg:px-0 px-5">
	<div class="header-text flex flex-col items-center gap-5 mb-14">
		<h2 class="text-center !text-3xl !font-bold"><span class="text-accent-cp !text-3xl !font-bold">Frequently Asked</span> Questions</h2>
		<p class="text-secondary-lp-os-cp-cs max-w-[650px] text-center">Here are some frequently asked questions about our Company Profile service</p>
	</div>
	<div class="faq-items grid grid-cols-1 lg:grid-cols-2 gap-10">
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="What is a company profile?" desc="A company profile is a document that contains information about your company, including history, vision, mission, products or services, management team, and achievements." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Can I see examples of company profiles you have created?" desc="Of course! We can show you examples of company profiles we have created for previous clients." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Why does my company need a company profile?" desc="A company profile can help enhance credibility, build brand image, attract investors, and facilitate communication with clients and business partners." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Do you offer revisions after creating a company profile?" desc="Yes, we offer revisions to ensure you are satisfied with the final result." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="What should be included in a company profile?" desc="Generally, a company profile should include information about the company’s history, vision and mission, organizational structure, products or services, achievements, management team, and contact information." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="How do you handle payments?" desc="We accept payments through bank transfers and e-wallets." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="How do you create a company profile?" desc="We conduct in-depth research about your company, gather relevant information, and then design and write a compelling and informative company profile." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Do you serve all of Indonesia?" desc="Yes, we serve all of Indonesia." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="How long does it take to create a company profile?" desc="The time required to create a company profile depends on the complexity and volume of information that needs to be processed. However, we usually complete the project within 1 week." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-cp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Do you also offer other graphic design services?" desc="Yes, we also offer other graphic design services such as logos, business cards, and brochures." />
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