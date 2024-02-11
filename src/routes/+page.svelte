<script lang='ts'>
	import Button from "$lib/components/ui/Button.svelte";
	import SideBySideGallery from "$lib/components/SideBySideGallery.svelte";
	import ScrollingLogos from "$lib/components/ScrollingLogos.svelte";
	import LongSelector from "$lib/components/ui/LongSelector.svelte";
	import type { LongSelectorItem } from "../constants/long_selector_item";
	import type { ServiceDesc } from "../constants/service_desc";

  // side-by-side-gallery-datas
  const leftImgs: Array<string> = [
    "/img/side-by-side-gallery/sbsg-1.png",
    "/img/side-by-side-gallery/sbsg-2.png",
    "/img/side-by-side-gallery/sbsg-3.png",
  ]
  const rightImgs: Array<string> = [
    "/img/side-by-side-gallery/sbsg-4.png",
    "/img/side-by-side-gallery/sbsg-5.png",
    "/img/side-by-side-gallery/sbsg-6.png",
  ]

  // scrolling-logos
  const scrollingLogoImgs: Array<string> = [
    "/img/clients/logo-client-1.png",
    "/img/clients/logo-client-2.png",
    "/img/clients/logo-client-3.png",
    "/img/clients/logo-client-4.png",
    "/img/clients/logo-client-5.png",
    "/img/clients/logo-client-5.png",
    "/img/clients/logo-client-4.png",
    "/img/clients/logo-client-3.png",
    "/img/clients/logo-client-2.png",
    "/img/clients/logo-client-1.png",
  ]

  // services-selector
  const servicesDesc: Array<ServiceDesc> = [
    { imgAsset: "/img/side-by-side-gallery/sbsg-1.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit nunc lectus, a tristique diam venenatis et" },
    { imgAsset: "/img/side-by-side-gallery/sbsg-2.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit nunc lectus, a tristique diam venenatis et" },
    { imgAsset: "/img/side-by-side-gallery/sbsg-3.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit nunc lectus, a tristique diam venenatis et" },
    { imgAsset: "/img/side-by-side-gallery/sbsg-4.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit nunc lectus, a tristique diam venenatis et" },
    { imgAsset: "/img/side-by-side-gallery/sbsg-5.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit nunc lectus, a tristique diam venenatis et" },
    { imgAsset: "/img/side-by-side-gallery/sbsg-6.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit nunc lectus, a tristique diam venenatis et" },
  ]
  const servicesSelectors: Array<LongSelectorItem> = [
    { text: "UI/UX Design", isActive: false },
    { text: "Website Design", isActive: false },
    { text: "WebApp Development", isActive: false },
    { text: "Mobile App Development", isActive: false },
    { text: "Custom Software Development", isActive: false },
    { text: "Bots & Automation", isActive: false },
  ]
  let activeServiceIndex: number = 0;
  $: {
    for (let i = 0; i < servicesSelectors.length; i++) {
      if (i !== activeServiceIndex) servicesSelectors[i].isActive = false
    }
    servicesSelectors[activeServiceIndex].isActive = true;
  }

</script>

<div class="container mx-auto">
  <!-- #navbar -->
  <nav class="w-full flex flex-row justify-between items-center mt-10">
    <img src="/img/logo-takedevs-white.png" alt="logo-takedevs-white">
    <ul class="flex flex-row gap-10 items-center">
      <li class="menu-item"><a href="#home">Home</a></li>
      <li class="menu-item"><a href="#services">Services</a></li>
      <li class="menu-item"><a href="#projects">Projects</a></li>
      <li class="menu-item"><a href="#contact">Contact Us</a></li>
    </ul>
  </nav>

  <!-- #header -->
  <div id="header" class="flex mb-28">
    <div class="left-group flex-1 my-auto">
      <h1 class="text-primary mb-5">Develop Your
        <span class="text-accent !text-5xl !font-bold">Ideas</span>
        <br> with
        <span class="text-accent !text-5xl !font-bold">TakeDevs</span>
      </h1>
      <p class="text-secondary mb-10">Unlock the full potential of your imagination and creativity with TakeDevs – where innovation meets expertise</p>
      <Button text="Learn more" />
    </div>

    <div class="right-group relative flex-1 overflow-hidden">
      <div class="top-gradient"></div>
      <SideBySideGallery leftImgs={leftImgs} rightImgs={rightImgs} />
      <div class="bottom-gradient"></div>
    </div>
  </div>

  <!-- #clients -->
  <div id="clients" class="mb-28">
    <ScrollingLogos imgs={scrollingLogoImgs} />
  </div>

  <!-- #services -->
  <div id="services" class="flex h-full items-start gap-10 mb-28">
    <div class="left-group h-full relative flex-1">
      <img src="{servicesDesc[activeServiceIndex].imgAsset}" alt="side-pict">
      <p class="absolute z-20 px-7 py-10 bottom-4 text-primary italic">{servicesDesc[activeServiceIndex].desc}</p>
      <div class="gradient z-10"></div>
    </div>
    <div class="right-group flex-1 mt-2">
      <h2 class="text-primary mb-7">OUR <span class="text-accent !text-3xl !font-bold">SERVICES</span></h2>
      <div class="selectors flex flex-col gap-5">
        {#each servicesSelectors as service, i}
          <LongSelector item={service} on:click={() => activeServiceIndex = i} />
        {/each}
      </div>
    </div>
  </div>

</div>


<style lang="postcss">
  /* navbar */
  .menu-item {
    @apply text-secondary inline-block
  }
  
  /* header */
  #header {
    height: 800px;
  }
  #header .top-gradient, #header .bottom-gradient {
    @apply w-full h-60 absolute z-50;
  }
  #header .top-gradient {
    background: linear-gradient(to bottom, rgba(23,24,36,1) 10%, rgba(23,24,36,0) 100%);
  }
  #header .bottom-gradient {
    @apply bottom-0;
    background: linear-gradient(to top, rgba(23,24,36,1) 10%, rgba(23,24,36,0) 100%);
  }

  /* services */
  #services .left-group img {
    @apply relative w-full rounded-2xl object-cover;
    height: 500px;
    box-shadow: 0 20px 25px -5px rgba(0,0,0,.1), 0 10px 10px -5px rgba(0,0,0,.04);
  }
  #services .left-group .gradient {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to top, rgba(23,24,36,.75) 0%, rgba(23,24,36,0) 100%);
  }

</style>