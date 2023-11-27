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
            'logo-black': pinNavbar,
            'logo-white': !pinNavbar,
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
            @click="handleDropdown(links)"
          >
            <img
              loading="lazy"
              :src="links.iconUrl"
              alt=""
              width="20"
              :class="{
                black: pinNavbar,
                white: !pinNavbar,
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
              v-if="activeId === links.id && links.dropdowns !== null"
              class="absolute top-12 transition-all duration-500 ease-in-out"
            >
              <Dropdown
                @grab-id="handleId"
                :links="links"
                :gradient="gradient"
              />
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
  // @mouseover="activeId = links.id"
  // @mouseleave="activeId = null"
  data() {
    return {
      activeId: null,
      logo,
    };
  },
  props: {
    pinNavbar: {
      type: Boolean,
      required: true,
    },
    gradient: {
      type: String,
      required: true,
    },
  },
  components: {
    Dropdown,
  },
  methods: {
    handleDropdown(links) {
      if (this.activeId === links.id) {
        this.activeId = null;
      } else {
        this.activeId = links.id;
      }
      if(links.label === 'Search'){
        this.$emit('searchClicked')
      }
    },
    handleId(id) {
      this.activeId = id;
      this.$emit("grab-id", id);
    },
    handleScroll() {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      this.pinNavbar = scrollPosition >= 100;
    },
    // addClickListener() {
    //   window.addEventListener("click", this.closeDropdown);
    // },
    // removeClickListener() {
    //   window.removeEventListener("click", this.closeDropdown);
    // },
  },
  watch: {
    // showDropdown(val) {
    //   if (val) {
    //     this.showDropdown = true;
    //     this.addClickListener();
    //   } else {
    //     this.showDropdown = false;
    //     this.removeClickListener();
    //   }
    // },
  },
  computed: {
    quickLinks() {
      return this.$store.state.quickLinks;
    },
  },
  mounted() {
    // window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    // this.removeClickListener();
  },
  destroyed() {
    // window.removeEventListener("scroll", this.handleScroll);
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
.download-hero-green-gradient {
  background: linear-gradient(-45deg, #209077 0%, #1ae28a 100%);
}
</style>
