<template>
  <div
    class="flex p-8 whitespace-nowrap rounded-2xl shadow-2xl text-white border-[1px]"
    :class="gradient"
  >
    <div class="w-1/2 flex gap-10">
      <div v-for="dropdown in links.dropdowns" :key="dropdown.id" class="">
        <div>
          <div class="flex items-center gap-2">
            <img
              v-if="dropdown.iconUrl"
              :src="dropdown.iconUrl"
              alt=""
              width="20"
            />
            <span class="font-semibold text-lg">
              {{ dropdown.label }}
            </span>
          </div>
          <div class="flex gap-10">
            <ul v-for="link in dropdown.links" :key="link.id">
              <li
                v-for="link in link.links"
                :key="link.id"
                id="hoverDiv"
                class="w-full px-2 py-1 flex justify-start items-center gap-2 flex-center rounded-lg cursor-pointer transition-all ease-in-out duration-500 min-h-[35px]"
                @click="handleClick(link.id)"
                @mouseover="isHovered"
                @mouseout="isUnhovered"
              >
                <div
                  v-if="link.iconUrl"
                  class="rounded-full bg-white w-6 h-6 p-0.5"
                >
                  <img :src="link.iconUrl" alt="" class="rounded-full" />
                </div>
                <span class="tracking-wide text-primary-color text-sm dim">
                  {{ link.label }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/2"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    links: {
      type: Object,
      required: true,
    },
    gradient: {
      type: String,
      required: true,
    },
    iconUrl: String,
  },
  methods: {
    handleClick(id) {
      this.$emit("grab-id", id);
    },
    isHovered(event) {
      event.currentTarget.classList.add(this.gradient);
    },
    isUnhovered(event) {
      event.currentTarget.classList.remove(this.gradient);
    },
  },
};
</script>
