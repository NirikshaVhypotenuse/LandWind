<script>
import Hero from '~/components/hero.vue';
import Navbar from './components/navbar.vue';
import Footer from './components/footer.vue';
export default {
  components: {
    Navbar,
    Hero,
    Footer
  },
};
</script>
<template>
  <div>
    <Navbar />
    <main>
      <Hero />
    </main>
    <Footer />
  </div>
</template>
