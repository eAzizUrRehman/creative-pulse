<template>
  <div class="font-Poppins">
    <div :class="gradient">
      <div
        class="w-full fixed top-0 left-0 z-50"
        :class="activeClass(gradient)"
      >
        <transition name="fade">
          <div
            class="w-full text-white transition-all duration-500 ease-in-out"
            :class="{
              'border-b-[0.1px] border-b-white border-opacity-20': NavbarScroll,
            }"
          >
            <Navbar
              @searchClicked="searchBtnClicked()"
              @grab-id="handleId"
              :gradient="gradient"
            />
          </div>
        </transition>
      </div>
      <main class=" ">
        <Hero
          :activeContent="activeContent"
          :gradient="gradient"
          :searchedClick="searchClicked"
        />
        <div class="w-full sticky top-16">
          <Panel :gradient="gradient" :activeContent="activeContent" />
        </div>
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
import Panel from "@/components/Panel.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    Hero,
    Panel,
    Footer,
  },
  data() {
    return {
      activeId: 2111, // default id
      gradient: "black-gradient", // default gradient
      searchClicked: false,
      NavbarScroll: null,
    };
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
  methods: {
    handleScroll() {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      this.NavbarScroll = scrollPosition >= 20;
    },
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
    activeClass(val) {
      return this.NavbarScroll ? val : "bg-transparent";
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
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>
