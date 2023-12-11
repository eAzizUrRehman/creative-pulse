<template>
  <div
    class="flex h-full w-full items-center justify-between rounded-lg border-[0.1px] border-white border-opacity-20 px-4"
    :class="gradient"
  >
    <p class="font-semibold tracking-wide">
      We have recently updated our TOS. Read
      <a href="/" class="italic underline">here.</a> Do you agree?
    </p>
    <div class="gap-2 flex-center">
      <p
        class="flex-center cursor-pointer rounded border-[0.1px] border-white border-opacity-20 px-1"
        :class="gradient"
        @click="$emit('agreed')"
      >
        Yes
      </p>
      <p
        class="flex-center cursor-pointer rounded border-[0.1px] border-white border-opacity-20 px-1"
        :class="gradient"
        @click="$emit('disagreed')"
      >
        No
      </p>
      <div
        class="flex-center w-6 cursor-pointer rounded border-[0.1px] border-white border-opacity-20 p-1"
        :class="gradient"
        @click="handleClose"
      >
        <img :src="crossIcon" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { checkIcon, crossIcon } from '@/assets/images'
export default {
  props: {
    gradient: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      checkIcon,
      crossIcon
    }
  },
  methods: {
    handleClose() {
      this.$emit('closeToaster')
    }
  }
}
</script>
