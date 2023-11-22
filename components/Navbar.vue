<template>
  <header class="container-10x w-full pt-10">
    <div class="w-full flex justify-between items-center">
      <div class="flex-center">
        <img
          loading="lazy"
          :src="logo"
          alt=""
          width="40"
          :class="{
            'logo-black': showQuickLinks,
            'logo-white': !showQuickLinks,
          }"
        />
        <router-link to="/" class="max-w-[5rem] ml-2 text-md tracking-wide">
          {{ quickLinks.title }}
        </router-link>
      </div>
      <nav class="flex gap-4">
        <ul v-for="links in quickLinks.links" :key="links.id">
          <li
            class="flex-center flex-col gap-2 text-xs cursor-pointer relative min-w-lg"
            @click="activeDropdownId = links.id"
          >
            <img
              loading="lazy"
              :src="links.iconUrl"
              alt=""
              width="20"
              :class="{
                black: showQuickLinks,
                white: !showQuickLinks,
              }"
            />
            <span>
              {{ links.label }}
              <img
                loading="lazy"
                v-if="links.dropdownIcon"
                :src="links.dropdownIcon"
                alt=""
                class="w-3 inline"
              />
            </span>
            <div
              v-if="activeDropdownId === links.id"
              class="absolute top-12 transition-all duration-500 ease-in-out"
            >
              <Dropdown :links="links" />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import Dropdown from "@/components/Dropdown.vue";
import { logo } from "@/assets/images";

export default {
  // @mouseover="activeDropdownId = links.id"
  // @mouseleave="activeDropdownId = null"
  data() {
    return {
      activeDropdownId: null,
      logo,
    };
  },
  props: {
    showQuickLinks: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    Dropdown,
  },
  methods: {
    handleScroll() {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      this.showQuickLinks = scrollPosition >= 100;
    },
    methods: {
      addClickListener() {
        window.addEventListener("click", this.closeDropdown);
      },
      removeClickListener() {
        window.removeEventListener("click", this.closeDropdown);
      },
    },
  },
  watch: {
    showDropdown(val) {
      if (val) {
        this.showDropdown = true;
        this.addClickListener();
      } else {
        this.showDropdown = false;
        this.removeClickListener();
      }
    },
  },
  computed: {
    quickLinks() {
      console.log(this.$store.state.quickLinks);
      return this.$store.state.quickLinks;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeDestroy() {
    this.removeClickListener();
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  transform: translateY(-100%);
}
.download-hero-gradient-color {
  background: linear-gradient(-45deg, #209077 0%, #1ae28a 100%);
}
</style>
