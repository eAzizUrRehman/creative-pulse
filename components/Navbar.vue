<template>
  <header class="w-full py-5 container-10x">
    <div class="flex items-center justify-between w-full">
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
      <div @click="handleToasterBtnClick" class="rounded-full ">
        <Button :text="toasterBtnText" :gradient="gradient" />
      </div>
      <nav class="relative flex gap-4">
        <ul v-for="links in quickLinks.links" :key="links.id">
          <li
            class="relative flex-col gap-2 text-xs cursor-pointer flex-center min-w-lg"
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
              class="absolute transition-all duration-500 ease-in-out cursor-default top-12"
            >
              <Dropdown
                @grab-id="handleId"
                :links="links"
                :gradient="gradient"
              />
            </div>
          </li>
        </ul>
        <div class="absolute w-full h-full" v-if="openToaster">
          <Toaster
            :gradient="gradient"
            @agreed="handleAgree"
            @disagreed="handleDisagree"
            @closeToaster="handleCloseToaster"
          />
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import Button from '@/components/Button.vue'
import Dropdown from '@/components/Dropdown.vue'
import Toaster from '@/components/Toaster.vue'
import { logo } from '@/assets/images'

export default {
  components: {
    Button,
    Dropdown,
    Toaster
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
      toasterBtnText: 'See Updated TOS',
      openToaster: false,
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
    },
    handleToasterBtnClick() {
      this.openToaster = true
      console.log('clicked')
    },
    handleAgree() {
      this.openToaster = false
      this.toasterBtnText = 'Thank you! 🥰'
      setTimeout(() => {
        this.toasterBtnText = 'See Updated TOS Again'
      }, 1500)
    },
    handleDisagree() {
      this.openToaster = false
      this.toasterBtnText = 'Our Bad! 😕'
      setTimeout(() => {
        this.toasterBtnText = 'See Updated TOS Again'
      }, 1500)
    },
    handleCloseToaster(){
      this.openToaster = false
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
