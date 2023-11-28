<template>
  <div class="font-Poppins ">
    <div :class="gradient">
      <div class="w-full fixed top-0 left-0 z-50">
        <transition name="fade">
          <div
            class="w-full text-white transition-all duration-500 ease-in-out"
            :class="{
              gradient: pinNavbar,
            }"
          >
            <Navbar
              @searchClicked="searchBtnClicked()"
              @grab-id="handleId"
              :pinNavbar="pinNavbar"
              :gradient="gradient"
            />
          </div>
        </transition>
      </div>
      <main class="">
        <Hero
          :activeContent="activeContent"
          :gradient="gradient"
          :searchedClick="searchClicked"
        />
      </main>
    </div>
    <main class="">
      <nuxt />
    </main>
    <div :class="gradient" class="">
      <Footer :gradient="gradient" />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {
      activeId: 2111, // default id
      gradient: "black-gradient", // default gradient
      pinNavbar: true,
      searchClicked: false,
    };
  },
  methods: {
    searchBtnClicked() {
      this.searchClicked = true;
      setTimeout(() => {
        this.searchClicked = false;
      }, 1000); // back to false after 1 second
    },
    handleId(id) {
      {
        if (this.activeId === id) return; // if id is the same, do nothing
        this.getRandomGradient(); // color changes if id changes
        this.activeId = id;
      }
    },
    getRandomGradient() {
      const gradients = [
        "green-gradient",
        "black-gradient",
        "ebony-gradient",
        "purple-gradient",
        "charcoal-gradient",
        "dark-gray-gradient",
        "midnight-gradient",
        "teal-gradient",
        "light-blue-gradient",
        "indigo-gradient",
        "onyx-gradient",
      ];
      this.gradient = gradients[Math.floor(Math.random() * gradients.length)];
    },
  },
  computed: {
    activeContent() {
      const allContent = this.$store.state.quickLinks.links
        .filter((item) => item.dropdowns !== null)
        .flatMap((e) => e.dropdowns || [])
        .flatMap((e) => e.links || [])
        .flatMap((e) => e.links || [])
        .map((e) => e);

      return allContent.find((item) => item.id === this.activeId);
    },
  },
  components: {
    Navbar,
    Hero,
    Footer,
  },

  //   const technologies = [
  //   // your array of objects
  // ].map((tech) => {
  //   return {
  //     ...tech,
  //     links: tech.links.map((link) => {
  //       return {
  //         ...link,
  //         links: link.links.map((subLink) => {
  //           return {
  //             ...subLink,
  //             bgColor: getRandomGradient(),
  //           };
  //         }),
  //       };
  //     }),
  //   };
  // });
};
</script>
