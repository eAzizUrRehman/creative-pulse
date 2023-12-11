<template>
  <div class="text-base">
    <div :class="gradient">
      <div
        class="fixed left-0 top-0 z-50 w-full"
        :class="activeClass(gradient)"
      >
        <transition name="fade">
          <div
            class="w-full text-white"
            :class="{
              'border-b-[0.1px] border-b-white border-opacity-20': isPageScrolled
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
        <div class="sticky top-16 w-full">
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
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import Panel from '@/components/Panel.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navbar,
    Hero,
    Panel,
    Footer
  },
  data() {
    return {
      activeId: 2111, // default id
      gradient: 'black-gradient', // default gradient
      searchClicked: false,
      isPageScrolled: null
    }
  },
  computed: {
    activeContent() {
      const allContent = this.$store.state.quickLinks.links
        .filter((item) => item.dropdowns !== null)
        .flatMap((e) => e.dropdowns || [])
        .flatMap((e) => e.links || [])
        .flatMap((e) => e.links || [])
        .map((e) => e)
      return allContent.find((item) => item.id === this.activeId)
    }
  },
  methods: {
    handleScroll() {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop
      this.isPageScrolled = scrollPosition >= 20
    },
    searchBtnClicked() {
      this.searchClicked = true
      setTimeout(() => {
        this.searchClicked = false
      }, 1000) // back to false after 1 second
    },
    handleId(id) {
      {
        if (this.activeId === id) return // if id is the same, do nothing
        this.getRandomGradient() // color changes if id changes
        this.activeId = id
      }
    },
    activeClass(val) {
      return this.isPageScrolled ? val : 'bg-transparent'
    },
    getRandomGradient() {
      const gradients = [
        'green-gradient',
        'black-gradient',
        'ebony-gradient',
        'purple-gradient',
        'charcoal-gradient',
        'dark-gray-gradient',
        'midnight-gradient',
        'teal-gradient',
        'light-blue-gradient',
        'indigo-gradient',
        'onyx-gradient'
      ]
      this.gradient = gradients[Math.floor(Math.random() * gradients.length)]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>
