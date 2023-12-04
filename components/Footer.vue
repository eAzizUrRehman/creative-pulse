<template>
  <footer class="container-10x flex w-full flex-col pt-10 text-white">
    <div class="container-8x w-full">
      <div class="flex items-end justify-between">
        <div v-for="stat in footer.stats" :key="stat.id">
          <p class="flex flex-col items-start justify-center gap-1">
            <span class="text-xl">
              {{ stat.numbers }}
            </span>
            <span class="text-sm">
              {{ stat.label }}
            </span>
          </p>
        </div>

        <div class="">
          <label
            class="text-footer-text-color block text-3xl hover:text-white"
            >{{ footer.newsletter.CTA }}</label
          >
          <div class="mt-4 flex gap-4">
            <input
              type="text"
              :placeholder="footer.newsletter.placeholder"
              class="rounded-lg border-[0.1px] border-white border-opacity-20 px-4 outline-none"
              :class="gradient"
            />
            <Button
              :text="footer.newsletter.buttonText"
              :bgColor="footer.newsletter.buttonBgColor"
              :icon="footer.newsletter.buttonIcon"
              :gradient="gradient"
            />
          </div>
        </div>
      </div>
      <div class="my-20 flex items-start justify-between tracking-wide">
        <div v-for="column in footer.footerLinks" :key="column.id">
          <p class="mb-4 text-lg">
            {{ column.label }}
          </p>
          <ul v-for="link in column.links" :key="link.id" class="">
            <li
              class="text-footer-text-color mt-2 text-sm text-white opacity-80 hover:opacity-100"
            >
              <a :href="link.url">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="h-[0.6px] w-full bg-white opacity-20"></div>
    <div class="mx-auto my-20">
      <div class="flex-center flex-col gap-1">
        <NuxtLink to="/">
          <div class="flex-center flex-col gap-1 opacity-60 hover:opacity-100">
            <img
              loading="lazy"
              :src="footer.logo"
              alt=""
              class="logo-white w-10 cursor-pointer"
            />
            <h3 class="cursor-pointer text-xs tracking-wider">
              {{ footer.title }}
            </h3>
          </div>
        </NuxtLink>
        <div class="flex-center mt-4 gap-2">
          <div v-for="handle in footer.socialMedia" :key="handle.id">
            <FooterIcon
              :label="handle.label"
              :icon="handle.icon"
              :url="handle.url"
            />
          </div>
        </div>
        <p class="mt-8 text-xs tracking-wider opacity-60">
          {{ footer.copyright }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import Button from '@/components/Button.vue'
import FooterIcon from '@/components/FooterIcon.vue'

export default {
  components: {
    Button,
    FooterIcon
  },
  props: {
    gradient: {
      type: String,
      required: true
    }
  },
  computed: {
    footer() {
      return this.$store.state.footer
    }
  }
}
</script>
