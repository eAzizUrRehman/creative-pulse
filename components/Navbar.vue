<template>
  <header class="container-10x w-full py-5">
    <div class="flex w-full items-center justify-between">
      <NuxtLink to="/">
        <div class="flex-center">
          <img
            loading="lazy"
            :src="logo"
            alt=""
            width="40"
            class="logo-white"
          />
          <span class="text-md ml-2 max-w-[5rem] leading-tight tracking-wide">
            {{ quickLinks.title }}
          </span>
        </div>
      </NuxtLink>
      <nav class="flex gap-4">
        <ul v-for="links in quickLinks.links" :key="links.id">
          <li
            class="flex-center min-w-lg relative cursor-pointer flex-col gap-2 text-xs"
            @click="handleDropdown(links)"
            @mouseover="activeId = links.id"
            @mouseleave="activeId = null"
          >
            <img loading="lazy" :src="links.iconUrl" alt="" width="20" />
            <span>
              {{ links.label }}
              <img
                loading="lazy"
                v-if="links.dropdownIcon"
                :src="links.dropdownIcon"
                alt=""
                class="inline w-3"
              />
            </span>
            <div
              v-if="activeId === links.id"
              class="absolute top-12 cursor-default transition-all duration-500 ease-in-out"
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
import Dropdown from '@/components/Dropdown.vue'
import { logo } from '@/assets/images'

export default {
  components: {
    Dropdown
  },
  props: {
    gradient: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      activeId: null,

      logo
    }
  },
  computed: {
    quickLinks() {
      return this.$store.state.quickLinks
    }
  },
  methods: {
    handleDropdown(links) {
      this.activeId = links.id

      if (links.label === 'Search') {
        this.$emit('searchClicked')
      }
    },
    handleId(id) {
      this.activeId = id
      this.$emit('grab-id', id)
    }
  }
}
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
</style>
