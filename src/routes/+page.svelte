<script>
  import logo from '$lib/assets/logo-footer.png';
</script>

<div class="flex py-12 bg-primary text-white">
  <div class="container mx-40 flex justify-between">
    <div class="my-10 w-full">
      <h1 class="text-3xl font-bold mb-4"><span class="text-[#5B74E5]">CONTACT</span> US</h1>
      <p class="text-[#8B929B] mb-5 text-lg">
        Reach out effortlessly. <br>
        Connect with us for inquiries
      </p>
      <div>
        <div class="my-3">
          <p>email@gmail.com</p>
        </div>
        <div class="my-3">
          <p>+62 1231 234123</p>
        </div>
        <div class="my-3">
          <p>+62 1231 234123</p>
        </div>
      </div>
    </div>
    <div class="w-full my-10 border rounded-2xl bg-white p-8 text-black">
      <form action="">
        <div class="mb-4">
          <label for="fullName" class="block mb-2">Fullname</label>
          <input type="text" name="fullname" id="fullname" class="w-full px-4 py-2 border rounded-md focus:outline-1">
        </div>
        <div class="mb-4">
          <label for="email" class="block mb-2">Email</label>
          <input type="email" name="email" id="email" class="w-full px-4 py-2 border rounded-md focus:outline-1">
        </div>
        <div class="mb-4">
          <label for="message" class="block mb-2">Message</label>
          <textarea name="message" id="message" class="w-full px-4 py-2 border rounded-md focus:outline-1 h-56"></textarea>
        </div>
        <button type="submit" class="py-2 px-10 border rounded-md bg-gradient-to-r from-[#1473FB] to-[#3B4B92] text-white font-semibold">SUBMIT</button>
      </form>
    </div>
  </div>
</div>


<footer class="bg-gradient-to-b from-[#5B75E5] to-[#2476F9]">
  <div class="flex justify-between mx-40 py-5">
    <div>
      <img src={logo} alt="logo.png" class="mb-3">
      <p class="text-white">© 2024 TakeDevs. All rights reserved.</p>
    </div>
    <div class="inline-flex py-5">
      <a href="instagram.com">
        <img src="" alt="logo.png" class="mr-4">
      </a>
      <a href="facebook.com">
        <img src="" alt="logo.png" class="mr-4">
      </a>
      <a href="tiktok.com">
        <img src="" alt="logo.png" class="mr-4">
      </a>
      <a href="google.com">
        <img src="" alt="logo.png" class="mr-4">
      </a>
    </div>
  </div>
</footer>