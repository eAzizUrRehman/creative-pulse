<template>
  <button>
    <a
      :href="href"
      class="flex-center w-fit cursor-pointer gap-2 rounded-full border-[0.1px] border-white border-opacity-20 px-8 py-2.5 text-xs uppercase tracking-wider text-white outline-none"
      :class="gradient"
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
  }
}
</script>
