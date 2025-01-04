<template>
    <nav class="bg-white shadow-md">
      <div class="!w-full flex justify-between p-4">
        <!-- Logo and Brand Name -->
        <div class="flex items-center gap-4">
          <!-- Logo -->
           <a href = "#" class = "flex items-center">
            <img src="../assets/img/logo.png" alt="Landwind Logo" class="h-6 mr-3 sm:h-9" />
          <!-- Brand Name -->
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Landwind</span>
           </a>
        </div>
  
        <!-- Desktop Navigation Links -->
        <ul class="hidden lg:flex flex-grow justify-center gap-6 text-gray-600 pr-10 font-bold mx-auto">
          <li class="hover:text-purple-700"><nuxt-link to="/">Home</nuxt-link></li>
          <li class="hover:text-purple-700"><nuxt-link to="/company">Company</nuxt-link></li>
          <li class="hover:text-purple-700"><nuxt-link to="/marketplace">Marketplace</nuxt-link></li>
          <li class="hover:text-purple-700"><nuxt-link to="/features">Features</nuxt-link></li>
          <li class="hover:text-purple-700"><nuxt-link to="/team">Team</nuxt-link></li>
          <li class="hover:text-purple-700"><nuxt-link to="/contact">Contact</nuxt-link></li>
        </ul>
        <div class="inline-flex items-center sm:flex md:flex gap-4">
            <!-- <a class="btn" href="https://github.com/themesberg/landwind" rel="noopener" target="_blank" aria-label="Star themesberg/landwind on GitHub"><LwIcon name="star" class="hover:text-gray-500">| Star</LwIcon></a> -->
            <!-- <a class="social-count" href="https://github.com/themesberg/landwind/stargazers" rel="noopener" target="_blank" aria-label="914 stargazers on GitHub">914</a> -->
        <!-- <div class="inline-flex items-center sm:flex md:flex">
          <button @click="navigateTo('https://github.com/themesberg/landwind')" class="hidden mx-full md:flex bg-gray-100 text-gray-600 px-3 py-3 rounded"><LwIcon name="star"></LwIcon></button>
          <button @click="navigateTo('https://github.com/themesberg/landwind')" class="hidden mx-full md:flex bg-gray-100 text-gray-600 px-3 py-2 rounded">star</button>
          <button @click="navigateTo('https://themesberg.com/product/tailwind-css/landing-page')" class="mx-full w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Download</button>
        </div> -->
        <button @click="navigateTo('https://github.com/themesberg/landwind')" class="hidden mx-full md:flex bg-gray-100 text-gray-600 px-3 py-2 rounded">star</button>
          <button @click="navigateTo('https://themesberg.com/product/tailwind-css/landing-page')" class="mx-full w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Download</button>
          <!-- Mobile Menu Button -->
          <button 
            @click="toggleMenu" 
            class="lg:hidden hover:bg-gray-200 focus:outline-none rounded-lg text-gray-700 p-1 ml-1"
            aria-label="Toggle navigation"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
              <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>/>
            </svg>
          </button>
        </div>
      </div>
  
      <!-- Mobile Navigation Links -->
      <div 
        v-show="isMenuOpen" 
        class="lg:hidden bg-white shadow-md px-4 py-2"
      >
        <ul class="flex flex-col gap-4 text-gray-600">
          <li class="block py-2 pl-3 pr-4 font-bold hover:text-white hover:bg-purple-700 hover:rounded"><nuxt-link to="/">Home</nuxt-link></li>
          <li class="block py-2 pl-3 pr-4 font-bold hover:text-white hover:bg-purple-700 hover:rounded"><nuxt-link to="/company">Company</nuxt-link></li>
          <li class="block py-2 pl-3 pr-4 font-bold hover:text-white hover:bg-purple-700 hover:rounded"><nuxt-link to="/marketplace">Marketplace</nuxt-link></li>
          <li class="block py-2 pl-3 pr-4 font-bold hover:text-white hover:bg-purple-700 hover:rounded"><nuxt-link to="/features">Features</nuxt-link></li>
          <li class="block py-2 pl-3 pr-4 font-bold hover:text-white hover:bg-purple-700 hover:rounded"><nuxt-link to="/team">Team</nuxt-link></li>
          <li class="block py-2 pl-3 pr-4 font-bold hover:text-white hover:bg-purple-700 hover:rounded"><nuxt-link to="/contact">Contact</nuxt-link></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
    data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    navigateTo(url) {
      window.location.href = url; // Redirect to the specified URL
    }
  },
  };
  </script>
  
  <style scoped>
  </style>
  