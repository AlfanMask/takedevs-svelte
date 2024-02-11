<script lang='ts'>
	import Button from "$lib/components/ui/Button.svelte";
	import SideBySideGallery from "$lib/components/SideBySideGallery.svelte";
	import ScrollingLogos from "$lib/components/ScrollingLogos.svelte";
	import LongSelector from "$lib/components/ui/LongSelector.svelte";
	import type { SelectorItem } from "../constants/selector_item";
	import type { ServiceDesc } from "../constants/service_desc";
	import Tab from "$lib/components/ui/Tab.svelte";
	import Gallery from "$lib/components/Gallery.svelte";
  import type { Gallery as GalleryType } from "../constants/gallery";
  import { type Project, ProjectType } from "../constants/project";

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
    "/img/clients/logo-client-6.png",
    "/img/clients/logo-client-7.png",
    "/img/clients/logo-client-8.png",
    "/img/clients/logo-client-9.png",
    "/img/clients/logo-client-10.png",
    "/img/clients/logo-client-11.png",
  ]

  // services-selector
  const servicesDesc: Array<ServiceDesc> = [
    { imgUrl: "/img/services/service-uiux.png", desc: "Elevate your brand with captivating UI/UX design, creating seamless digital experiences that resonate with your audience and boost user engagement" },
    { imgUrl: "/img/services/service-webdesign.png", desc: "Transform your vision into a stunning online presence. Our web design solutions combine aesthetics and functionality to ensure your website stands out and drives results" },
    { imgUrl: "/img/services/service-webapp.png", desc: "Empower your business with custom web applications tailored to your unique requirements. Enhance user experiences, streamline processes, and boost overall productivity" },
    { imgUrl: "/img/services/service-mobile.png", desc: "Bring your ideas to life with our mobile app development. We craft innovative applications that cater to your users' needs, ensuring a seamless and engaging mobile journey" },
    { imgUrl: "/img/services/service-custom-software.png", desc: "Propel your business forward with personalized software solutions. Tailored to your specific needs, our custom software enhances efficiency, scalability, and overall performance" },
    { imgUrl: "/img/services/service-bots.png", desc: "Revolutionize your operations with intelligent bots and automation. Experience enhanced efficiency, speed, and improved user interactions, driving success in the digital landscape" },
  ]
  const servicesSelectors: Array<SelectorItem> = [
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

  // projects-selector
  const tabs: Array<SelectorItem> = [
    { text: "All", isActive: true },
    ...Object.values(ProjectType).map(o => ({ text: o, isActive: false }))
  ]
  let activeTabIndex: number = 0;

  // proejct-galleries
  const projectGalleries: Array<Project> = [
    { imgUrl: "/img/projects/bots-dulur-yuenes.jpg", title: "Dulur Yuenes Bot", desc: ProjectType["Bots & Automatics"], type: ProjectType["Bots & Automatics"] },
    { imgUrl: "/img/projects/custom-software-game-fighting.jpg", title: "Logan Paul Fighting Game", desc: ProjectType["Custom Software"], type: ProjectType["Custom Software"] },
    { imgUrl: "/img/projects/uiux-pamapersada.jpg", title: "Warehouse PT. Pamapersada", desc: ProjectType["UI/UX Design"], type: ProjectType["UI/UX Design"] },
    { imgUrl: "/img/projects/uiux-refit.png", title: "Refit Store", desc: ProjectType["UI/UX Design"], type: ProjectType["UI/UX Design"] },
    { imgUrl: "/img/projects/uiux-logo-hakaplastik.png", title: "Hakaplastik Logo", desc: ProjectType["UI/UX Design"], type: ProjectType["UI/UX Design"] },
    { imgUrl: "/img/projects/webapp-airival-shuttle.png", title: "Airival Shuttle", desc: ProjectType["WebApp"], type: ProjectType["WebApp"] },
    { imgUrl: "/img/projects/webapp-socioinvest.png", title: "Socioinvest", desc: ProjectType["WebApp"], type: ProjectType["WebApp"] },
    { imgUrl: "/img/projects/webapp-vizir-marketplace.png", title: "Vizir Marketplace", desc: ProjectType["WebApp"], type: ProjectType["WebApp"] },
    { imgUrl: "/img/projects/webapp-vizir-notes.png", title: "Vizir Notes Taking", desc: ProjectType["WebApp"], type: ProjectType["WebApp"] },
    { imgUrl: "/img/projects/webapp-vizir-product-manager.png", title: "Vizir Product Manager", desc: ProjectType["WebApp"], type: ProjectType["WebApp"] },
    { imgUrl: "/img/projects/webapp-vizir-project-management.png", title: "Vizir Project Management", desc: ProjectType["WebApp"], type: ProjectType["WebApp"] },
    { imgUrl: "/img/projects/webapp-vizir-ticketing.png", title: "Vizir Ticketing", desc: ProjectType["WebApp"], type: ProjectType["WebApp"] },
    { imgUrl: "/img/projects/webapp-vizir-ticket-manager.png", title: "Vizir Ticket Manager", desc: ProjectType["WebApp"], type: ProjectType["WebApp"] },
    { imgUrl: "/img/projects/webdesign-augmented-solution.png", title: "Augmented Solution", desc: ProjectType["Web Design"], type: ProjectType["Web Design"] },
    { imgUrl: "/img/projects/webdesign-bt-rorsystem.png", title: "BT Rorsystem", desc: ProjectType["Web Design"], type: ProjectType["Web Design"] },
    { imgUrl: "/img/projects/webdesign-cimport.png", title: "C-Import", desc: ProjectType["Web Design"], type: ProjectType["Web Design"] },
    { imgUrl: "/img/projects/webdesign-hakaplastik.png", title: "PT. Haka Sentral Plastik Indonesia", desc: ProjectType["Web Design"], type: ProjectType["Web Design"] },
    { imgUrl: "/img/projects/webdesign-holh.png", title: "Heroes of Last Haven", desc: ProjectType["Web Design"], type: ProjectType["Web Design"] },
    { imgUrl: "/img/projects/webdesign-littlenewsears.png", title: "Littlenewsears", desc: ProjectType["Web Design"], type: ProjectType["Web Design"] },
    { imgUrl: "/img/projects/webdesign-umkmpajang.png", title: "UMKM Pajang Martketplace", desc: ProjectType["Web Design"], type: ProjectType["Web Design"] },
    { imgUrl: "/img/projects/webdesign-yesagroworld.png", title: "Yesagroworld", desc: ProjectType["Web Design"], type: ProjectType["Web Design"] },
  ]
  let shownProjectGalleries: Array<Project> = [...projectGalleries.sort((a, b) => a.title.toLocaleLowerCase().localeCompare(b.title.toLocaleLowerCase()))];
  $: {
    for (let i = 0; i < tabs.length; i++) {
      if (i !== activeTabIndex) tabs[i].isActive = false
    }
    tabs[activeTabIndex].isActive = true;

    // update shown project galleries based on tab filter
    const activeType: ProjectType | "All" = tabs[activeTabIndex].text as ProjectType | "All";
    if (activeType === "All") {
      shownProjectGalleries = [...projectGalleries.sort((a, b) => a.title.toLocaleLowerCase().localeCompare(b.title.toLocaleLowerCase()))];
    } else {
      shownProjectGalleries = projectGalleries.filter(o => o.type === activeType).sort((a, b) => a.title.toLocaleLowerCase().localeCompare(b.title.toLocaleLowerCase()));
    }
  }

</script>

<div class="container mx-auto">
  <!-- #navbar -->
  <nav class="w-full flex flex-row justify-between items-center mt-10">
    <a href="#header">
      <img src="/img/logo-takedevs-white.png" alt="logo-takedevs-white">
    </a>
    <ul class="flex flex-row gap-10 items-center">
      <li class="menu-item"><a href="#header">Home</a></li>
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
      <img src="{servicesDesc[activeServiceIndex].imgUrl}" alt="side-pict">
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

  <!-- #projects -->
  <div id="projects" class="flex flex-col mb-28">
    <div class="title w-full flex flex-col items-center gap-5 mb-10">
      <h2 class="text-primary">OUR <span class="text-accent !text-3xl !font-bold">PROJECTS</span></h2>
      <p class="text-center text-secondary">Discover our portfolio: a testament to innovation, excellence,<br>and successful collaborations</p>
    </div>
    <div class="tabs flex gap-5 justify-center mb-14">
      {#each tabs as tab, i }
        <Tab item={tab} on:click={() => activeTabIndex = i} />
      {/each}
    </div>
    <div class="galleries">
      <!-- TODO: fix bug showProjectGalleries update cannot change the <Gallery /> -->
      <Gallery galleries={shownProjectGalleries} />
    </div>
  </div>

  <!-- #cta -->
  <div id="cta" class="w-full flex flex-col items-center py-14 px-24 rounded-2xl bg-accent-gradient">
    <h2 class="text-center text-primary mb-5">LET’S BUILD YOUR IDEAS WITH TAKEDEVS</h2>
    <p class="text-center text-primary opacity-50 mb-10">Embark on a transformative journey as we collaborate to bring your ideas to life. With TakeDevs, innovation is a shared adventure, blending creativity and expertise to craft solutions that stand as a testament to your vision and our commitment to excellence</p>
    <Button text="CONTACT US" color="white" size="lg" />
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