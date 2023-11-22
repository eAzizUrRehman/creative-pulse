<template>
  <div class="flex bg-white p-4 whitespace-nowrap rounded-2xl shadow-2xl">
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
              >
                <img
                  v-if="link.iconUrl"
                  :src="link.iconUrl"
                  alt=""
                  width="20"
                />
                <span class="dim text-primary-color tracking-wide">
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
  props: {
    links: {
      type: Object,
      required: true,
    },
    iconUrl: String,
  },
};
</script>

<style></style>
