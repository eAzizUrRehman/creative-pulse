<template>
  <div
    class="flex p-8 whitespace-nowrap rounded-2xl shadow-2xl text-white border-[1px]"
    :class="gradient"
  >
    <div class="w-1/2 flex gap-10">
      <div v-for="dropdown in links.dropdowns" :key="dropdown.id" class="">
        <div>
          <img v-if="dropdown.iconUrl" :src="dropdown.iconUrl" alt="" />
          <span class="text-sm font-bold text-primary-color mb-3">
            {{ dropdown.label }}
          </span>
          <div class="flex gap-10">
            <div v-for="link in dropdown.links" :key="link.id" class="">
              <div
                v-for="link in link.links"
                :key="link.id"
                class="flex justify-start items-center gap-2 mt-3 cursor-pointer"
                @click="handleClick(link.id)"
              >
                <div
                  v-if="link.iconUrl"
                  class="rounded-full bg-white w-8 h-8 p-0.5"
                >
                  <img :src="link.iconUrl" alt="" class="rounded-full" />
                </div>
                <span class="dim tracking-wide text-primary-color">
                  {{ link.label }}
                </span>
              </div>
            </div>
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
  },
};
</script>

<style></style>
