<template>
    <!-- landing page -->
    <section class="bg-white dark:bg-gray-900">
      <div class="grid max-w-screen-xl px-6 pt-10 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-10 lg:grid-cols-12 lg:pt-10">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-900">
            Building digital <span class="text-purple-600">products</span> & <span class="text-purple-600">brands</span>.
          </h1>
          <p class="max-w-2xl mb-6 mt-4 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            This free and open-source landing page template was built using the utility classes from 
            <a href="https://tailwindcss.com" class="hover:underline"> Tailwind CSS</a> and based on the components from the 
            <a href="https://flowbite.com/docs/getting-started/introduction/" class="hover:underline"> Flowbite Library</a>
            and the <a href="https://flowbite.com/blocks/" class="hover:underline">Blocks System</a>.
          </p>
          <div class="mt-6 flex flex-col md:flex-row gap-4">
            <button class="inline-flex items-center justify-center gap-2 bg-gray-100 hover:text-gray-900 text-gray-600 px-6 py-3 rounded shadow" @click="navigateTo('https://github.com/themesberg/landwind')">
                <LwIcon name="git" class="hover:fill-gray-900 fill-gray-500"></LwIcon>
                <!-- <LwIcon name="git" class="h-4 w-4 flex items-center hover:fill-gray-900 fill-gray-500 "></LwIcon> -->
                View on GitHub</button>
            <button class="inline-flex items-center justify-center bg-gray-100 text-gray-600 px-6 py-3 rounded shadow" @click="navigateTo('https://www.figma.com/community/file/1125744163617429490')">
            <img :src="icons.figma" class="w-4 h-4 mr-2 hover:text-blue-500" alt="figma icon">Get Figma file</button>
          </div>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="../assets/img/Hero.png" alt="Illustration" class="rounded-lg" />
        </div>
      </div>
    </section>
    <section class="bg-white dark:bg-gary-900">
        <div class="items-center max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
            <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
                <LwIcon name="github" class="h-9 flex items-center hover:text-gray-900 hover:fill-gray-900 fill-gray-500"></LwIcon>
                <LwIcon name="google" class="h-9 flex items-center hover:text-gray-900 fill-gray-500"></LwIcon>
                <LwIcon name="microsoft" class="h-6 flex items-center hover:text-gray-900 fill-gray-500"></LwIcon>
                <LwIcon name="spotify" class="h-9 flex items-center hover:text-gray-900 fill-gray-500"></LwIcon>
                <LwIcon name="mailchimp" class="h-9 flex items-center hover:text-gray-900 fill-gray-500"></LwIcon>
                <LwIcon name="mashable" class="h-6 flex items-center hover:text-gray-900 fill-gray-500"></LwIcon>
                <!-- <img :src="icons.github" alt="github icon" class=" hover:text-gray-900 dark:hover:text-white" viewBox="0 0 125 35" fill="currentColor"/> -->
                <!-- <img :src="icons.google" alt="google icon" class="filter brightness-75"/>
                <img :src="icons.microsoft" alt="microsoft icon" class="filter brightness-75"/>
                <img :src="icons.spotify" alt="spotify icon" /> -->
                <!-- <img :src="icons.mailchimp" alt="mailchimp icon" />
                <img :src="icons.mashable" alt="mashable icon"/> -->
            </div>
        </div>
    </section>
    <section class="bg-gray-100 dark:bg-gray-900">
        <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
            <div class="items-center lg:grid lg:grid-cols-2 px-2 xl:gap-16">
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
            <div class="text-gray-500 sm:text-lg px-4 dark:text-gray-400">
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
    <section class="bg-gray-50 dark:bg-gray-700">
        <div class="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
            <div class="col-span-2 mb-8 px-2">
                <p class="text-lg font-medium text-purple-700">
                    Trusted Worldwide
                </p>
                <h2 class="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
                    Trusted by over 600 million users and 10,000 teams
                </h2>
                <p class="font-light text-gray-600 sm:text-xl">
                    Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers.
                </p>
                <div class="pt-6 mt-6 space-y-4 border-t border-gray-200">
                    <div>
                        <a href="#" class="inline-flex items-center text-purple-600 hover:text-purple-900">    
                        Explore Legality Guide <LwIcon name="arrow" class="border-t-1 inline-flex items-center w-5 h-4 ml-1 hover:fill-purple-900 fill-purple-600"></LwIcon>
                        </a>
                    </div>
                    <div>
                        <a href="#" class="inline-flex items-center text-purple-600 hover:text-purple-900">    
                          Visit the Trust Center <LwIcon name="arrow" class="border-t inline-flex items-center w-5 h-4 ml-1 hover:fill-purple-900 fill-purple-600"></LwIcon>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                <div>
                    <LwIcon name="toggle" class="fill-purple-500 hover:fill-purple-800"></LwIcon>
                    <h3 class="mb-2 text-2xl font-bold">
                        99.99% uptime
                    </h3>
                    <p class="font-light">
                        For Landwind, with zero maintenance downtime
                    </p>
                </div>
                <div>
                    <LwIcon name="profile" class="fill-purple-500 hover:fill-purple-800"></LwIcon>
                    <h3 class="mb-2 text-2xl font-bold">
                        600M+ Users
                    </h3>
                    <p class="font-light">
                        Trusted by over 600 milion users around the world
                    </p>
                </div>
                <div>
                    <LwIcon name="globe" class="fill-purple-500 hover:fill-purple-800"></LwIcon>
                    <h3 class="mb-2 text-2xl font-bold">
                        100+ countries
                    </h3>
                    <p class="font-light">
                        Have used Landwind to create functional websites
                    </p>
                </div>
                <div>
                    <LwIcon name="basket" class="fill-purple-500 hover:fill-purple-800"></LwIcon>
                    <h3 class="mb-2 text-2xl font-bold">
                        5+ Million
                    </h3>
                    <p class="font-light">
                        Transactions per day
                    </p>
                </div>
            </div>
        </div>
    </section>
    <!-- Review page -->
    <section class="bg-gray-50">
        <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
            <div class="max-w-screen-md mx-auto">
                <LwIcon name="doublecoats" class="text-gray-400">
                </LwIcon>
                <p class="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
                    "Landwind is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
                </p>
                <div class="flex items-center justify-center mt-6 space-x-3">
                    <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture">
                    <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <div class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                        <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Subscription page -->
    <section class="bg-white">
        <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
            <div class="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    Designed for business teams like yours
                </h2>
                <p class="mb-5 light-font text-gray-500  sm:text-xl dark:text-gray-400">
                    Here at Landwind we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
                </p>
            </div>
            <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                <!-- card 1 starter -->
                <div class="flex flex-col max-w-xl p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 class="mb-4 text-2xl font-semibold">Starter</h3>
                    <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        Best option for personal use & for your next project.
                    </p>
                    <div class="flex items-baseline justify-center my-8">
                        <span class="mr-2 text-5xl font-extrabold">$29</span>
                        <span class="text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                    <ul class="mb-8 md:pl-6 space-y-4 items-center text-center"> 
                        <li class="flex items-center space-x-3">
                        <LwIcon name="tickmark" class="hover:fill-green-700 w-5 h-5 fill-green-500"></LwIcon>
                        <span>Individual configuration</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <LwIcon name="tickmark" class="hover:fill-green-700 fill-green-500"></LwIcon>
                        <span>No setup, or hidden fees</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <LwIcon name="tickmark" class="hover:fill-green-700 fill-green-500"></LwIcon>
                        <span>Team Size: <span class="font-semibold"> 1 Developer</span></span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <LwIcon name="tickmark" class="hover:fill-green-700 fill-green-500"></LwIcon>
                        <span>Premium support: <span class="font-semibold"> 6 months</span></span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <LwIcon name="tickmark" class="hover:fill-green-700 fill-green-500"></LwIcon>
                        <span>Free updates: <span class="font-semibold"> 6 months</span></span>
                        </li>
                    </ul>
                    <button @click="navigateTo('#')" class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">
                        Get Started
                    </button>
                </div>
                <!-- card two company -->
                <div class="flex flex-col max-w-xl p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 class="mb-4 text-2xl font-semibold">Company</h3>
                    <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        Best option for personal use & for your next project.
                    </p>
                    <div class="flex items-baseline justify-center my-8">
                        <span class="mr-2 text-5xl font-extrabold">$99</span>
                        <span class="text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                    <ul class="mb-8 md:pl-6 space-y-4 text-left">
                        <li class="flex items-center space-x-3">
                            <LwIcon name="tickmark" class="hover:fill-green-700 fill-green-500"></LwIcon>
                        <span>Individual configuration</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <LwIcon name="tickmark" class="hover:fill-green-700 fill-green-500"></LwIcon>
                        <span>No setup, or hidden fees</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <LwIcon name="tickmark" class="hover:fill-green-700 fill-green-500"></LwIcon>
                            <span>Team Size: <span class="font-semibold"> 10 Developer</span></span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <LwIcon name="tickmark" class="hover:fill-green-700 fill-green-500"></LwIcon>
                            <span>support: <span class="font-semibold"> 24 months</span></span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <LwIcon name="tickmark" class="hover:fill-green-700 fill-green-500"></LwIcon>
                            <span>Free updates: <span class="font-semibold"> 24 months</span></span>
                        </li>
                    </ul>
                    <button @click="navigateTo('#')" class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">
                        Get Started
                    </button>
                </div>
                <!-- card three employee -->
                <div class="flex flex-col max-w-xl p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 class="mb-4 text-2xl font-semibold">Employee</h3>
                    <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        Best for large scale uses and extended redistribution rights.
                    </p>
                    <div class="flex items-baseline justify-center my-8">
                        <span class="mr-2 text-5xl font-extrabold">$499</span>
                        <span class="text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                    <ul class="mb-8 md:pl-6 space-y-4 text-left">
                        <li class="flex items-center space-x-3">
                            <LwIcon name="tickmark" class="hover:fill-green-700 fill-green-500 w-5 h-5"></LwIcon>
                            <span>Individual configuration</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <LwIcon name="tickmark" class="hover:fill-green-700 fill-green-500"></LwIcon>
                            <span>No setup, or hidden fees</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <LwIcon name="tickmark" class="hover:fill-green-700 fill-green-500"></LwIcon>
                            <span>Team Size: <span class="font-semibold"> 100+ Developer</span></span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <LwIcon name="tickmark" class="hover:fill-green-700 fill-green-500"></LwIcon>
                            <span>Premium support: <span class="font-semibold"> 36 months</span></span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <LwIcon name="tickmark" class="hover:fill-green-700 fill-green-500"></LwIcon>
                            <span>Free updates: <span class="font-semibold"> 36 months</span></span>
                        </li>
                    </ul>
                    <button @click="navigateTo('#')" class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    </section>
    <!-- section for FQA's -->
     <section class="bg-white">
        <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
            <h2 class="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">Frequently asked questions</h2>
            <div class="max-w-screen-md mx-auto">
                <div class="py-3 border-b border-gray-200 dark:border-gray-700">
                    <button class="flex items-center justify-between w-full px-4 py-3 text-left text-gray-900 dark:text-white focus:outline-none" @click="toggle(1)">
                        <span class="font-light text-gray-600">Can I use Landwind in open-source projects?</span>
                        <LwIcon name="dropdown" :class="{'rotate-180': active === 1, 'rotate-0': active !== 1, 'fill-gray-500 hover:fill-gray-900': true}"/>
                    </button>
                    <div v-if="active === 1" class="px-4 py-2 text-gray-600 dark:text-gray-400">
                        <p class="text-gray-500">Landwind is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                        <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="#" class="text-purple-600 dark:text-purple-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                    </div>
                </div>
                <div class="py-3 border-b border-gray-200 dark:border-gray-700">
                    <button class="flex items-center justify-between w-full px-4 py-3 text-left text-gray-900 dark:text-white focus:outline-none" @click="toggle(2)">
                        <span class="font-light text-gray-600">Is there a Figma file available?</span>
                        <LwIcon name="dropdown" :class="{'rotate-180': active === 2, 'rotate-0': active !== 2, 'fill-gray-500 hover:fill-gray-900': true}"/>
                    </button>
                    <div v-if="active === 2" class="px-4 py-2 text-gray-600 dark:text-gray-400">
                        <p class="text-gray-500">Landwind is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                        <p class="text-gray-500 dark:text-gray-400">Check out the <a href="#" class="text-purple-600 dark:text-purple-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Landwind.</p>
                    </div>
                </div>
                <div class="py-3 border-b border-gray-200 dark:border-gray-700">
                    <button class="flex items-center justify-between w-full px-4 py-3 text-left text-gray-900 dark:text-white focus:outline-none" @click="toggle(3)">
                        <span class="font-light text-gray-600">What are the differences between Landwind and Tailwind UI?</span>
                        <LwIcon name="dropdown" :class="{ 'rotate-180': active === 3, 'rotate-0': active !== 3,   'fill-gray-500 hover:fill-gray-900': true }"/>
                    </button>
                    <div v-if="active === 3" class="px-4 py-2 text-gray-600 dark:text-gray-400">
                        <p class="text-gray-500">The main difference is that the core components from Landwind are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Landwind relies on smaller and standalone components, whereas Tailwind UI offers sections of pages</p>
                        <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Landwind, Landwind Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                        <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                        <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
                            <li><a href="#" class="text-purple-600 dark:text-purple-500 hover:underline">Landwind Pro</a></li>
                            <li><a href="#" class="text-purple-600 dark:text-purple-500 hover:underline">Tailwind UI</a></li>
                        </ul>
                    </div>
                </div>
                <div class="py-3 border-b border-gray-200 dark:border-gray-700">
                    <button class="flex items-center justify-between w-full px-4 py-3 text-left text-gray-900 dark:text-white focus:outline-none" @click="toggle(4)">
                        <span class="font-light text-gray-600">What about browser support?</span>
                        <LwIcon name="dropdown" :class="{'rotate-180': active === 4, 'rotate-0': active !== 4,  'fill-gray-500 hover:fill-gray-900': true}"/>
                    </button>
                    <div v-if="active === 4" class="px-4 py-2 text-gray-600 dark:text-gray-400">
                        <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Landwind are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Landwind relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                        <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Landwind, Landwind Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                        <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                        <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
                            <li><a href="#" class="text-purple-600 dark:text-purple-500 hover:underline">Landwind Pro</a></li>
                            <li><a href="#" class="text-purple-600 dark:text-purple-500 hover:underline">Tailwind UI</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     </section>
     <!-- free trial option page -->
    <section class="bg-gray-50">
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
    data() {
    return {
      active: null, // Tracks the currently active FAQ
    };
    },
    methods: {
    navigateTo(url) {
      window.location.href = url; // Redirect to the specified URL
    },
    toggle(index) {
      this.active = this.active === index ? null : index; // Toggle the active state
    },
  }
  };
  </script>
  
  <style scoped>
  </style>
  