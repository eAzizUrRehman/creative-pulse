<template>
  <div
    class="container-9x 0 flex translate-y-1/2 items-center justify-start gap-4 rounded-lg border-[0.1px] border-white border-opacity-20 py-3 shadow-2xl"
    :class="gradient"
    @click.self="showPanelDropdown = false"
  >
    <div
      v-if="activeContent.iconUrl"
      class="flex-center h-10 w-10 rounded-full bg-white"
    >
      {{ activeContent.title }}
      <NuxtLink :to="activeContent.url">
        <img
          :src="activeContent.iconUrl"
          alt=""
          class="h-full w-full rounded-full p-1"
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
    <div v-if="dropdownPanelContent.length > 0">
      <button
        class="panel-element flex-center group relative gap-1"
        @click="showPanelDropdown = !showPanelDropdown"
      >
        More
        <img
          :src="panelDropdownIcon"
          alt=""
          class="filter group-hover:invert"
        />
      </button>
      <div
        v-if="showPanelDropdown"
        :class="gradient"
        class="absolute rounded-xl border-[0.1px] border-white border-opacity-20 p-2 shadow-lg"
      >
        <ul v-for="link in dropdownPanelContent" :key="link.id" class=" ">
          <li>
            <button class="panel-element" @click="showPanelDropdown = false">
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
import { panelDropdownIcon } from '@/assets/images'
export default {
  props: {
    activeContent: {
      type: Object,
      required: true
    },
    gradient: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showPanelDropdown: false,
      panelDropdownIcon
    }
  },
  computed: {
    frontPanelContent() {
      return this.activeContent.content.panel.slice(0, 7)
    },
    dropdownPanelContent() {
      return this.activeContent.content.panel.slice(7)
    }
  }
}
</script>
