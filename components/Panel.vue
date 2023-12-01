<template>
  <div
    class="container-9x rounded-lg py-3 shadow-2xl translate-y-1/2 flex justify-start items-center gap-4 border-[0.1px] border-white border-opacity-20"
    :class="gradient"
  >
    <div
      v-if="activeContent.iconUrl"
      class="w-10 h-10 rounded-full flex-center bg-white"
    >
      {{ activeContent.title }}
      <NuxtLink :to="activeContent.url">
        <img
          :src="activeContent.iconUrl"
          alt=""
          class="rounded-full w-full h-full p-1"
        />
      </NuxtLink>
    </div>
    <ul class="flex-center gap-4">
      <li v-for="link in frontPanelContent" :key="link.id">
        <button class="panel-element">
          <NuxtLink :to="link.url">
            {{ link.name }}
          </NuxtLink>
        </button>
      </li>
    </ul>
    <div v-if="dropdownPanelContent">
      <button
        class="panel-element flex-center gap-1 group relative"
        @click="showDropdownPanelContent = true"
      >
        More
        <img
          :src="panelDropdownIcon"
          alt=""
          class="filter group-hover:invert"
        />
      </button>
      <div
        v-if="showDropdownPanelContent"
        :class="gradient"
        class="rounded-xl p-2"
      >
        <ul v-for="link in dropdownPanelContent" :key="link.id" class=" ">
          <li class="bottom-0 ">
            <button class="panel-element  ">
              <NuxtLink :to="link.url">
                {{ link.name }}
              </NuxtLink>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { panelDropdownIcon } from "@/assets/images";
export default {
  props: {
    activeContent: {
      type: Object,
      required: true,
    },
    gradient: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showDropdownPanelContent: false,
      panelDropdownIcon,
    };
  },
  computed: {
    frontPanelContent() {
      return this.activeContent.content.panel.slice(0, 7);
    },
    dropdownPanelContent() {
      return this.activeContent.content.panel.slice(7);
    },
  },
};
</script>
