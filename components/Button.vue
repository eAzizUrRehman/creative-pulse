<template>
  <button
    class="cursor-pointer rounded-full border-[0.1px] border-white border-opacity-20 px-8 py-2.5 outline-none"
    :class="gradient"
    @click="handleClick"
  >
    <a
      :href="href"
      class="flex-center w-fit gap-2 text-xs uppercase tracking-wider text-white"
    >
      <img
        loading="lazy"
        v-if="icon"
        :src="icon"
        alt=""
        width="16"
        class="inline"
      />
      {{ text }}
    </a>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    gradient: {
      type: String,
      required: true
    },
    href: String,
    bgColor: String,
    color: String,
    borderColor: String,
    icon: String
  },
  methods: {
    handleClick() {
      this.$emit('btnClicked')
    }
  }
}
</script>
