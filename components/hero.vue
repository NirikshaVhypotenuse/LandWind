<template>
    <section class="bg-white">
      <div class="container mx-full px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-900">
            Building digital <span class="text-purple-600">products</span> & <span class="text-purple-600">brands</span>.
          </h1>
          <p class="mt-4 text-gray-600">
            This free and open-source landing page template was built using the utility classes from Tailwind CSS.
          </p>
          <div class="mt-6 flex flex-col md:flex-row gap-4">
            <button class="bg-gray-100 text-gray-600 px-6 py-3 rounded shadow" @click="navigateTo('https://github.com/themesberg/landwind')">View on GitHub</button>
            <button class="bg-purple-600 text-white px-6 py-3 rounded shadow" @click="navigateTo('https://www.figma.com/community/file/1125744163617429490')">Get Figma file</button>
          </div>
          <!-- <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            <img src="http://www.w3.org/2000/svg" alt="Airbnb" class="w-20 h-auto">
        </div> -->
        </div>
        <div class="mt-10 md:mt-0 lg:w-1/2 hidden lg:block">
          <img src="../assets/img/Hero.png" alt="Illustration" class="rounded-lg" />
        </div>
      </div>
    </section>
    <section class="bg-white dark:bg-gary-900">
        <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
            <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 lg:text-gray-400">
                <img :src="icons.github" alt="github icon" class=" hover:text-gray-900 dark:hover:text-white" viewBox="0 0 125 35" fill="currentColor"/>
                <img :src="icons.google" alt="google icon" class="filter brightness-75"/>
                <img :src="icons.microsoft" alt="microsoft icon" class="filter brightness-75"/>
                <img :src="icons.spotify" alt="spotify icon" />
                <img :src="icons.mailchimp" alt="mailchimp icon" />
                <img :src="icons.mashable" alt="mashable icon"/>
            </div>
        </div>
    </section>
    <section class="bg-gray-100 dark:bg-gray-900">
        <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
            <div class="items-center lg:grid lg:grid-cols-2 xl:gap-16">
            <div class="text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 class="mb-4 text-3xl font-extrabold text-gray-900">
                    Work with tools you already use
                </h2>
                <p class="font-light lg:text-xl">
                    Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.
                </p>
                <ul class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                    <li class="flex space-x-3">
                        <!-- <img :src="icons.tick" alt="tick icon" class="flex-shrink w-5 h-5 text-purple-500" viewBox="0 0 20 20"/> -->
                        <LwIcon name="tick" class="hover:fill-[var(--color-purple-hover)]" fill="var(--color-purple)" />
                        <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Continuous integration and deployment</span>
                    </li>
                    <li class="flex space-x-3">
                        <LwIcon name="tick" class="hover:fill-[var(--color-purple-hover)]" fill="var(--color-purple)" />
                        <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Development workflow</span>
                    </li>
                    <li class="flex space-x-3">
                        <LwIcon name="tick" class="hover:fill-[var(--color-purple-hover)]" fill="var(--color-purple)" />
                        <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Knowledge management</span>
                    </li>
                </ul>
                <p class="mb-8 font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
            </div>
                <img src="../assets/img/Calendar.png" class="hidden w-full wb-0 rounded-lg lg:flex a" alt="dashboard calender image">
        </div>
        <div class="items-center lg:grid lg:grid-cols-2 xl:gap-16">
            <img src="../assets/img/Map.png" class="hidden w-full wb-0 rounded-lg lg:flex" alt="dashboard map image">
            <div class="text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 class="mb-4 text-3xl font-extrabold text-gray-900">
                    We invest in the world’s potential
                </h2>
                <p class="font-light lg:text-xl">
                    Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.
                </p>
                <ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                        <li class="flex space-x-3">
                            <LwIcon name="tick" class="hover:fill-[var(--color-purple-hover)]" fill="var(--color-purple)" />
                            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Dynamic reports and dashboards</span>
                        </li>
                        <li class="flex space-x-3">
                            <LwIcon name="tick" class="hover:fill-[var(--color-purple-hover)]" fill="var(--color-purple)" />
                            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Templates for everyone</span>
                        </li>
                        <li class="flex space-x-3">
                            <LwIcon name="tick" class="hover:fill-[var(--color-purple-hover)]" fill="var(--color-purple)" />
                            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Development workflow</span>
                        </li>
                        <li class="flex space-x-3">
                            <LwIcon name="tick" class="hover:fill-[var(--color-purple-hover)]" fill="var(--color-purple)" />
                            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Limitless business automation</span>
                        </li>
                        <li class="flex space-x-3">
                            <LwIcon name="tick" class="hover:fill-[var(--color-purple-hover)]" fill="var(--color-purple)" />
                            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Knowledge management</span>
                        </li>
                    </ul>
                    <p class="font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
            </div>
        </div>
        </div> 
    </section>
    <section class="bg-gray-100">
        <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
            <div class="max-w-screen-sm mx-auto text-center">
                <h2 class="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                    Start your free trial today
                </h2>
                <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
                    Try Landwind Platform for 30 days. No credit card required.
                </p>
                <button class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">
                    Free trial for 30 days
                </button>
            </div>
        </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Hero',
    methods: {
    navigateTo(url) {
      window.location.href = url; // Redirect to the specified URL
    }
  }
  };

  </script>
  
  <style scoped>
  </style>
  