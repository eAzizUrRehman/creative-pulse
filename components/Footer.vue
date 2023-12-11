<template>
  <footer class="flex flex-col w-full pt-10 text-white container-10x">
    <div class="w-full container-8x">
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
            class="block text-3xl text-footer-text-color hover:text-white"
            >{{ footer.newsletter.CTA }}</label
          >
          <div class="flex gap-4 mt-4">
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
      <div class="flex items-start justify-between my-20 tracking-wide">
        <div v-for="column in footer.footerLinks" :key="column.id">
          <p class="mb-4 text-lg">
            {{ column.label }}
          </p>
          <ul v-for="link in column.links" :key="link.id" class="">
            <li
              class="mt-2 text-sm text-white text-footer-text-color opacity-80 hover:opacity-100"
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
      <div class="flex-col gap-1 flex-center">
        <NuxtLink to="/">
          <div class="flex-col gap-1 flex-center opacity-60 hover:opacity-100">
            <img
              loading="lazy"
              :src="footer.logo"
              alt=""
              class="w-10 cursor-pointer logo-white"
            />
            <h3 class="text-xs tracking-wider cursor-pointer">
              {{ footer.title }}
            </h3>
          </div>
        </NuxtLink>
        <div class="gap-2 mt-4 flex-center">
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
