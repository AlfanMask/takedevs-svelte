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
		waUrl = `https://wa.me/${import.meta.env.VITE_ADMIN_WA_NUMBER}?text=${import.meta.env.VITE_WA_CTA_HELLO_MSG} Landing Page${referralCode ? ', referral: ' + referralCode : ''}`
	}
</script>


<!-- HTML -->
<div class="bg-base-lp-os-cp-cs h-full lg:p-0">

<!-- #navbar -->
<Navbar items={navbarItems} baseColor="bg-base-lp-os-cp-cs" logoColor="#E4720B" textColor="text-secondary" />

<!-- header -->
<div id="header" class="container mx-auto px-5 lg:px-0">
	<div class="flex lg:flex-row justify-between items-center mb-28" style="padding-top: 160px">
	  <div class="left-group flex flex-col items-center lg:items-start flex-[5] w-full lg:pr-20">
		<h1 class="text-center lg:text-start text-primary-lp-os-cp-cs mb-5">
		  More Customers with
		  <span class="text-accent-lp !text-4xl lg:!text-5xl !font-bold">Landing Page</span>
		</h1>
		<p class="text-center lg:text-start text-secondary mb-10">
		  Confused about how to increase customers? Landing Page is the solution. We provide professional Landing Page services that are suitable for your business.
		</p>
		<Button text="LEARN MORE" bgColor="bg-primary-lp" textColor="text-white" size="lg" on:click={() => { scrollToSection('pricelist') }}/>
	  </div>
	  <ImageGradient flexSize="flex-[7]" imgSrc="/img/landing-pages/lp/header-lp.jpg" gradientOverlay="bg-primary-lp" gradientOpacity="opacity-10" isHideOnMobile />
	</div>
  </div>

<!-- importance of -->
<div id="importance-of" class="flex flex-col items-center mb-28 px-5">
	<div class="header-text flex flex-col items-center gap-5 mb-14">
		<h2 class="text-center">Why Landing Pages are <span class="text-accent-lp !text-2xl lg:!text-3xl !font-semibold">Important</span></h2>
		<p class="text-secondary-lp-os-cp-cs max-w-[800px] text-center">Landing Pages will help direct people to take specific actions, such as filling out a form or purchasing your product</p>
	</div>
	<div class="items flex flex-col lg:flex-row gap-10">
		<RotatedImgDesc desc="Increase Conversion" imgSrc="/img/landing-pages/lp/importance-lp-1.jpg" gradientOverlayFrom="from-primary-lp" />
		<RotatedImgDesc desc="Strengthen Branding" imgSrc="/img/landing-pages/lp/importance-lp-2.jpg" gradientOverlayFrom="from-primary-lp" />
		<RotatedImgDesc desc="Clarify Product" imgSrc="/img/landing-pages/lp/importance-lp-3.jpg" gradientOverlayFrom="from-primary-lp" />
	</div>
</div>

<!-- past projects -->
<div id="projects" class="py-14 bg-gradient-lp flex flex-col items-center mb-20 lg:px-5">
	<div class="container px-4 lg:px-0">
		<div class="header-text flex flex-col items-center gap-5 mb-14 text-white">
			<h2 class="underline text-center">Our Landing Page Projects</h2>
			<p class="max-w-[800px] text-center">We have successfully created effective landing pages for various types of businesses. Here are some examples of our projects</p>
		</div>
		<div class="project-galleries grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-7">
			<GalleryCard srcImg="/img/landing-pages/lp/project-1.png" url="https://stylo.takedevs.com/" />
			<GalleryCard srcImg="/img/landing-pages/lp/project-2.png" url="https://ayara.takedevs.com/" />
			<GalleryCard srcImg="/img/landing-pages/lp/project-3.png" url="https://kreativa.takedevs.com/" />
			<GalleryCard srcImg="/img/landing-pages/lp/project-4.png" url="https://eatz.takedevs.com/" />
			<GalleryCard srcImg="/img/landing-pages/lp/project-5.png" url="https://monitor.takedevs.com/" />
			<GalleryCard srcImg="/img/landing-pages/lp/project-6.png" url="https://stylo.takedevs.com/" />
			<GalleryCard srcImg="/img/landing-pages/lp/project-7.png" url="https://ayara.takedevs.com/" />
			<GalleryCard srcImg="/img/landing-pages/lp/project-8.png" url="https://kreativa.takedevs.com/" />
			<GalleryCard srcImg="/img/landing-pages/lp/project-9.png" url="https://monitor.takedevs.com/" />
		</div>
	</div>
</div>

<!-- why-us -->
<div id="why-us" class="container flex mx-auto items-center gap-5 mb-24 px-5">
	<ImageGradient flexSize="flex-[5]" customTailwindCSS="max-h-[650px]" imgSrc="/img/landing-pages/lp/why-us-lp.jpg" gradientOverlay="bg-primary-lp" gradientOpacity="opacity-10" isHideOnMobile />
	<div class="right-group flex flex-[7] flex-col gap-7 items-center lg:items-start">
		<h2 class="!font-bold">Why <span class="text-accent-lp !text-2xl lg:!text-3xl !font-bold">Us?</span></h2>
		<div class="points flex flex-col gap-5">
		  <TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Extensive experience: We have years of experience in designing and building successful landing pages." />
		  <TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Design expertise: Our design team is skilled in creating attractive and responsive designs." />
		  <TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Focus on conversion: We always prioritize converting visitors into customers." />
		  <TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Fast and efficient work: We work quickly and efficiently to meet your deadlines." />
		  <TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Affordable prices: We offer competitive prices without sacrificing quality." />
		  <TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Excellent customer service: We are committed to providing the best customer service." />
		  <TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Satisfaction guarantee: We guarantee your satisfaction with our work." />
		</div>
		<Button text="CREATE A LANDING PAGE NOW" size="lg" bgColor="bg-primary-lp" textColor="text-white" on:click={() => { goToUrl(waUrl) }} />
	</div>
</div>

<!-- pricelist -->
<div id="pricelist" class="py-14 bg-gradient-lp flex flex-col items-center mb-20 lg:px-5">
	<div class="container px-4 lg:px-0">
		<div class="header-text flex flex-col items-center gap-5 mb-7 text-white">
			<h2 class="underline">Choose a Package</h2>
			<p class="max-w-[800px] text-center">We offer several service packages<br>to meet your business needs</p>
		</div>
		<div class="prices flex flex-col lg:flex-row items-center lg:justify-center gap-7 lg:gap-5 pt-2 lg:pt-20">
			<PriceCard
			  name="Basic"
			  oldPrice={650000} newPrice={499000} 
			  description="
• Uses template
• Hosted on subdomain (takedevs.com)
• Call to action (CTA) directs to WhatsApp
• Maximum 1 revision
			  "
			  on:click={() => { goToUrl(`${waUrl}, paket: Basic`) }}
			  shadow="shadow-lp"
			  lang="en"
			/>
			<PriceCard
			  name="Premium"
			  oldPrice={1500000}
			  newPrice={999000}
			  description="
• Custom design
• Use your own domain
• Call to action (CTA) directs to WhatsApp
• Integrates with other social media platforms
• Maximum 3 revisions
			  "
			  isBestSeller={true}
			  bestSellerBadgeColor="bg-accent-lp"
			  on:click={() => { goToUrl(`${waUrl}, paket: Premium`) }}
			  shadow="shadow-lp"
			  lang="en"
			/>
			<PriceCard
			  name="Premium+"
			  oldPrice={2300000}
			  newPrice={1999000}
			  description="
• Includes all Premium features
• + Online store functionality
			  "
			  on:click={() => { goToUrl(`${waUrl}, paket: Premium+`) }}
			  shadow="shadow-lp"
			  lang="en"
			/>
		</div>
	</div>
</div>

<!-- persuasion -->
<div id="persuasion" class="container flex flex-col mx-auto mb-32 lg:mb-24 lg:w-[75%] lg:px-0 px-5">
	<span class="!text-2xl text-accent-lp !font-semibold text-center mb-5">Don't Miss This Opportunity</span>
	<span class="!text-lg text-secondary-lp-os-cp-cs text-center">The sooner you contact us, the sooner we can help your business grow. Don't let your competitors gain the advantage. Contact us now for a free consultation.</span>
</div>

<!-- consultation -->
<div id="consultation" class="w-full h-[520px] lg:h-[400px] flex justify-center mb-20 lg:mt-0 lg:px-5">
	<div class="container flex flex-col-reverse lg:flex-row justify-between items-center">
		<div class="left-group flex flex-1 flex-col items-center lg:items-start">
			<h2 class="!font-semibold text-white underline mb-5">Free Consultation</h2>
			<p class="text-white text-center lg:text-start !text-lg mb-10">Contact us for a free consultation. We will help you determine the landing page needs for your business.</p>
			<Button text="CONTACT US NOW" size="lg" bgColor="bg-base-lp-os-cp-cs" textColor="text-primary-lp" on:click={() => { goToUrl(waUrl) }} />
		</div>
		<div class="right-group flex flex-1 justify-end items-center w-[75%] lg:w-full -mt-20 lg:mt-0 mb-4 lg:mb-0">
			<img src="/img/landing-pages/consultation-circle.png" alt="consultation-circle">
		</div>
	</div>	
</div>

<!-- faq -->
<div id="faq" class="container mb-20 mx-auto lg:px-0 px-5">
	<div class="header-text flex flex-col items-center gap-5 mb-14">
		<h2 class="text-center !text-3xl !font-bold"><span class="text-accent-lp !text-3xl !font-bold">Frequently</span>Asked Questions</h2>
		<p class="text-secondary-lp-os-cp-cs max-w-[650px] text-center">Here are some frequently asked questions about our Landing Page services.</p>
	</div>
	<div class="faq-items grid grid-cols-1 lg:grid-cols-2 gap-10">
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-lp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Do you offer SEO services?" desc="Yes, we offer SEO services to improve the visibility of your landing page in search engines." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-lp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Can you work with clients from outside the city?" desc="Yes, we work with clients from all over Indonesia." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-lp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="How long does the work take?" desc="The time required depends on the project's complexity, but it usually takes 2-4 days." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-lp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Can I see a portfolio of previous projects?" desc="Yes, you can view our project portfolio in the 'Our Landing Page Projects' section above." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-lp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Do you accept credit card payments?" desc="Sorry, we currently only accept debit and e-wallet payments." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-lp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Do you offer a satisfaction guarantee?" desc="Yes, we provide a satisfaction guarantee." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-lp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Can the landing page design be customized?" desc="Yes, the landing page design can be customized to meet your needs and preferences." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-lp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Do you offer consultation services?" desc="Yes, we offer free consultations to help you determine your landing page needs." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-lp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Do you offer maintenance services?" desc="Yes, we offer maintenance services to keep your landing page up-to-date." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-lp" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Do you offer revision services?" desc="Yes, we offer revision services to ensure you are satisfied with the final result." />
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