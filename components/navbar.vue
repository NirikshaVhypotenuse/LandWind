<!-- <template>
    <nav class="bg-white shadow-md">
      <div class="container mx-auto flex items-center justify-between p-4">
        <div class="flex items-center gap-4">
        <img src="../assets/img/logo.png" alt="Landwind Logo" class="h-8 w-8" />
          <div class="text-purple-600 font-bold text-2xl">Landwind</div>
          <ul class="hidden md:flex gap-6 text-gray-600">
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/company">Company</nuxt-link></li>
            <li><nuxt-link to="/marketplace">Marketplace</nuxt-link></li>
            <li><nuxt-link to="/features">Features</nuxt-link></li>
            <li><nuxt-link to="/team">Team</nuxt-link></li>
            <li><nuxt-link to="/contact">Contact</nuxt-link></li>
          </ul>
        </div>
        <div class="hidden md:flex gap-4">
          <button class="bg-gray-100 text-gray-600 px-4 py-2 rounded">Star</button>
          <button class="bg-purple-600 text-white px-4 py-2 rounded">Download</button>
        </div>
      </div>
      <button 
        @click="toggleMenu" 
        class="md:hidden text-gray-600 focus:outline-none"
        aria-label="Toggle navigation"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

    <!-- Mobile Navigation Links -->
    <!-- <div 
      v-show="isMenuOpen" 
      class="md:hidden bg-white shadow-md px-4 py-2"
    >
      <ul class="flex flex-col gap-4 text-gray-600">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/company">Company</nuxt-link></li>
        <li><nuxt-link to="/marketplace">Marketplace</nuxt-link></li>
        <li><nuxt-link to="/features">Features</nuxt-link></li>
        <li><nuxt-link to="/team">Team</nuxt-link></li>
        <li><nuxt-link to="/contact">Contact</nuxt-link></li>
      </ul>
    </div>
    </nav> -->
  <!-- </template>  -->
  <template>
    <nav class="bg-white shadow-md w-full">
      <div class="container mx-full flex items-center justify-between p-4 w-full">
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
        <ul class="hidden lg:flex flex-grow justify-end gap-4 text-gray-600 pr-10 font-bold max-w-full">
          <li class="hover:text-purple-700"><nuxt-link to="/">Home</nuxt-link></li>
          <li class="hover:text-purple-700"><nuxt-link to="/company">Company</nuxt-link></li>
          <li class="hover:text-purple-700"><nuxt-link to="/marketplace">Marketplace</nuxt-link></li>
          <li class="hover:text-purple-700"><nuxt-link to="/features">Features</nuxt-link></li>
          <li class="hover:text-purple-700"><nuxt-link to="/team">Team</nuxt-link></li>
          <li class="hover:text-purple-700"><nuxt-link to="/contact">Contact</nuxt-link></li>
        </ul>
        <div class="inline-flex mx-full items-center sm:flex md:flex gap-4 lg:max-w-full">
          <button class="hidden mx-full md:flex bg-gray-100 text-gray-600 px-4 py-2 rounded">Star</button>
          <button class="mx-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Download</button>
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
  },
  };
  </script>
  
  <style scoped>
    .nuxt-link::after {
  content: none !important;
    }
  </style>
  