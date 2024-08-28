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
				Boost Sales with
				<span class="text-accent-os !text-4xl lg:!text-5xl !font-bold">Online Shop</span>
			</h1>
			<p class="text-center lg:text-start text-secondary mb-10">
				Need help increasing your online sales? We are a team of experts ready to help your business grow.
			</p>
            <Button text="LEARN MORE" bgColor="bg-primary-os" textColor="text-white" size="lg" on:click={() => { scrollToSection('pricelist') }}/>
        </div>
		<ImageGradient flexSize="flex-[7]" imgSrc="/img/landing-pages/os/header-os.jpg" gradientOverlay="bg-primary-os" gradientOpacity="opacity-10" isHideOnMobile />
	</div>
</div>

<!-- importance of -->
<div id="importance-of" class="flex flex-col items-center mb-28 px-5">
	<div class="header-text flex flex-col items-center gap-5 mb-14">
		<h2 class="text-center">Why Online Shop is <span class="text-accent-os !text-2xl lg:!text-3xl !font-semibold">Important</span></h2>
		<p class="text-secondary-lp-os-cp-cs max-w-[800px] text-center">In this digital era, having an Online Shop is a must for every business. Here are some reasons why.</p>
	</div>
	<div class="items flex flex-col lg:flex-row gap-10">
		<RotatedImgDesc desc="Wide Market Reach" imgSrc="/img/landing-pages/os/importance-os-1.jpg" gradientOverlayFrom="from-primary-os" />
		<RotatedImgDesc desc="24/7 Access" imgSrc="/img/landing-pages/os/importance-os-2.jpg" gradientOverlayFrom="from-primary-os" />
		<RotatedImgDesc desc="Low Operational Costs" imgSrc="/img/landing-pages/os/importance-os-3.jpg" gradientOverlayFrom="from-primary-os" />
	</div>
</div>

<!-- past projects -->
<div id="projects" class="py-14 bg-gradient-os flex flex-col items-center mb-20 lg:px-5">
	<div class="container px-4 lg:px-0">
		<div class="header-text flex flex-col items-center gap-5 mb-14 text-white">
			<h2 class="underline text-center">Our Online Shop Projects</h2>
			<p class="max-w-[800px] text-center">We've helped various businesses boost their online sales. Here are some examples of our projects.</p>
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
		<h2 class="!font-bold">Why <span class="text-accent-os !text-2xl lg:!text-3xl !font-bold">Us?</span></h2>
		<div class="points flex flex-col gap-5">
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Expert Team: We have a team of experts with extensive experience in e-commerce." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Effective Strategies: We use proven marketing strategies that work." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Fast and Friendly Service: We are committed to providing the best service to our customers." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Competitive Pricing: We offer affordable prices without sacrificing quality." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Full Customization: We can tailor our services to meet your business needs." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Satisfaction Guarantee: We ensure customer satisfaction with our work." />
			<TextIcon iconColor="text-green-500" textColor="text-secondary-lp-os-cp-cs" icon="fa-solid fa-circle-check" text="Post-Project Support: We continue to provide support after the project is completed." />
		</div>
		<Button text="CREATE YOUR ONLINE SHOP NOW" size="lg" bgColor="bg-primary-os" textColor="text-white" on:click={() => { goToUrl(waUrl) }} />
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
		  oldPrice={800000}  newPrice={749999}
		  description="
• Uses template
• Hosted on subdomain (takedevs.com)
• Call to action (CTA) directs to WhatsApp
• Maximum 1 revision
		  "
		  on:click={() => { goToUrl(`${waUrl}, paket: Basic`) }}
		  shadow="shadow-os"
		  lang="en"
		/>
		<PriceCard
		  name="Premium"
		  oldPrice={2000000}  newPrice={1499000}
		  description="
• Custom design
• Use your own domain
• Google My Business setup
• Google Maps setup (if not already available)
• Call to action (CTA) directs to WhatsApp
• Complete social media integration
• Live chat
• Other e-commerce integrations
• Maximum 3 revisions
		  "
		  isBestSeller={true}
		  bestSellerBadgeColor="bg-accent-os"
		  on:click={() => { goToUrl(`${waUrl}, paket: Premium`) }}
		  shadow="shadow-os"
		  lang="en"
		/>
		<PriceCard
		  name="Premium+"
		  oldPrice={2300000}  newPrice={1999000}
		  description="
• Includes all Premium features
• + Landing Page
		  "
		  on:click={() => { goToUrl(`${waUrl}, paket: Premium+`) }}
		  shadow="shadow-os"
		  lang="en"
		/>
	  </div>
	</div>
  </div>

<!-- persuasion -->
<div id="persuasion" class="container flex flex-col mx-auto mb-32 lg:mb-24 lg:w-[75%] lg:px-0 px-5">
	<span class="!text-2xl text-accent-os !font-semibold text-center mb-5">Don't Miss This Opportunity</span>
	<span class="!text-lg text-secondary-lp-os-cp-cs text-center">Don't miss the chance to boost your online sales. The sooner you contact us, the sooner we can help your business grow.</span>
</div>

<!-- consultation -->
<div id="consultation" class="w-full h-[520px] lg:h-[400px] flex justify-center mb-20 lg:mt-0 lg:px-5">
	<div class="container flex flex-col-reverse lg:flex-row justify-between items-center">
		<div class="left-group flex flex-col items-center lg:items-start">
			<h2 class="!font-semibold text-white underline mb-5">Free Consultation</h2>
			<p class="text-white text-center lg:text-start !text-lg mb-10">Contact us for a free consultation. We will help you determine your business's online shop needs.</p>
			<Button text="CONTACT US NOW" size="lg" bgColor="bg-base-lp-os-cp-cs" textColor="text-primary-os" on:click={() => { goToUrl(waUrl) }} />
		</div>
		<div class="right-group flex flex-1 justify-end items-center w-[75%] lg:w-full -mt-20 lg:mt-0 mb-4 lg:mb-0">
			<img src="/img/landing-pages/consultation-circle.png" alt="consultation-circle">
		</div>
	</div>	
</div>

<!-- faq -->
<div id="faq" class="container mb-20 mx-auto lg:px-0 px-5">
	<div class="header-text flex flex-col items-center gap-5 mb-14">
		<h2 class="text-center !text-3xl !font-bold"><span class="text-accent-os !text-3xl !font-bold">Frequently Asked</span> Questions</h2>
		<p class="text-secondary-lp-os-cp-cs max-w-[650px] text-center">Here are some frequently asked questions about our Online Shop services</p>
	</div>
	<div class="faq-items grid grid-cols-1 lg:grid-cols-2 gap-10">
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-os" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="What services do you offer?" desc="We offer online shop web design and development, SEO, and Landing Page services." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-os" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Do you serve all of Indonesia?" desc="Yes, we serve various clients from across Indonesia." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-os" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="How does your service work?" desc="After you contact us, we will conduct a consultation to understand your business needs. Then, we will develop an appropriate strategy and begin working on the project. We will maintain communication with you throughout the process." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-os" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Do I need to have technical knowledge of e-commerce?" desc="No, you do not need to have technical knowledge. Our team will handle all the technical aspects." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-os" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Do you offer support after the project is completed?" desc="Yes, we offer support after the project is completed. If you have any questions or issues, we are here to help." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-os" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="How long does it take to complete a project?" desc="Project completion time depends on the complexity and scale of the project. However, we will provide a clear time estimate before starting the project." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-os" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="What is the cost of consultation services?" desc="Consultation services are provided free of charge." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-os" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Do you offer a satisfaction guarantee?" desc="Yes, we offer a satisfaction guarantee. If you are not satisfied with our work, we can make revisions to ensure you are happy." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-os" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="Are there any additional fees I should be aware of?" desc="Additional fees may apply for extra services or special requests. However, we will provide clear information about any additional costs before starting the project." />
		<AccordionItem isHideOnMobile icon="fa-solid fa-info" iconBgColor="bg-primary-os" iconColor="text-white" textColor="text-secondary-lp-os-cp-cs" title="What are the payment methods?" desc="We accept payments through bank transfer and e-wallet." />
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