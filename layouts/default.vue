<template>
  <div class="font-Poppins">
    <div class="gradient-color">
      <div class="w-full fixed top-0 left-0 z-50">
        <transition name="fade">
          <div
            class="w-full text-white"
            :class="{
              'bg-red': showQuickLinks,
              'shadow-lg': showQuickLinks,
            }"
          >
            <Navbar :showQuickLinks="showQuickLinks" />
          </div>
        </transition>
      </div>
      <main class="">
        <Hero />
      </main>
    </div>
    <main class=" ">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {
      showQuickLinks: false,
    };
  },
  components: {
    Navbar,
    Hero,
    Footer,
  },
};
</script>
