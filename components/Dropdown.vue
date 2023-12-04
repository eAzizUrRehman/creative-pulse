<template>
  <div
    v-if="
      links.label !== 'Search' &&
      links.label !== 'Blog' &&
      links.label !== 'Login/Register'
    "
    class="flex whitespace-nowrap rounded-2xl border-[0.1px] border-white border-opacity-20 p-8 text-white shadow-2xl"
    :class="gradient"
  >
    <div class="flex w-1/2 gap-10">
      <div v-for="dropdown in links.dropdowns" :key="dropdown.id" class="">
        <div>
          <div class="flex items-center gap-2">
            <img
              v-if="dropdown.iconUrl"
              :src="dropdown.iconUrl"
              alt=""
              width="20"
            />
            <span class="text-lg font-semibold">
              {{ dropdown.label }}
            </span>
          </div>
          <div class="flex gap-10">
            <ul v-for="link in dropdown.links" :key="link.id">
              <li
                v-for="link in link.links"
                :key="link.id"
                class="flex-center flex min-h-[35px] w-full cursor-pointer items-center justify-start gap-2 rounded-lg px-2 py-1 transition-all duration-500 ease-in-out"
                @click="handleClick(link.id)"
                @mouseover="isHovered"
                @mouseout="isUnhovered"
              >
                <div
                  v-if="link.iconUrl"
                  class="h-6 w-6 rounded-full bg-white p-0.5"
                >
                  <img :src="link.iconUrl" alt="" class="rounded-full" />
                </div>
                <span class="text-primary-color dim text-sm tracking-wide">
                  {{ link.label }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Object,
      required: true
    },
    gradient: {
      type: String,
      required: true
    },
    iconUrl: String
  },
  methods: {
    handleClick(id) {
      this.$emit('grab-id', id)
    },
    isHovered(event) {
      event.currentTarget.classList.add(this.gradient)
    },
    isUnhovered(event) {
      event.currentTarget.classList.remove(this.gradient)
    }
  }
}
</script>
