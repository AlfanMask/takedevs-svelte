<script lang='ts'>
	import Button from "$lib/components/ui/Button.svelte";
	import SideBySideGallery from "$lib/components/SideBySideGallery.svelte";
	import ScrollingLogos from "$lib/components/ScrollingLogos.svelte";

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

  <div id="clients">
    <ScrollingLogos imgs={scrollingLogoImgs} />
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

</style>