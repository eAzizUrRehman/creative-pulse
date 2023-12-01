<template>
  <section
    class="container-8x flex-center flex-col gap-10 pt-32 pb-16 text-white"
    @grabId="pickId(id)"
  >
    <h1 class="text-5xl tracking-wide">
      {{ activeContent.content.title }}
    </h1>
    <p class="tracking-wide leading-normal text-xl">
      {{ activeContent.content.description }}
    </p>
    <div class="px-3 py-2 w-full rounded-3xl relative">
      <input
        type="text"
        id="search-input"
        :placeholder="animatedPlaceholder"
        class="w-full h-10 outline-none border-[0.1px] border-white border-opacity-20 rounded-3xl pl-6 pr-16 text-lg font-semibold tracking-wide text-white placeholder-white"
        :class="gradient"
      />
      <div
        id="search-btn"
        class="w-10 h-10 rounded-full absolute right-3 top-2 border-[0.1px] border-white border-opacity-20 flex-center cursor-pointer"
        :class="gradient"
      >
        <img
          src="@/assets/images/quick-links/outer/search-icon.svg"
          alt=""
          width="20"
        />
      </div>
    </div>
  </section>
</template>
<script> 

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
    searchedClick: Boolean,
  },
  data() {
    return {
      activeId: null,
      animatedPlaceholder: "Type your query here i.e ",
      intervalId: null,
    };
  },

  watch: {
    activeContent: {
      handler(newVal, oldVal) {
        if (newVal.label !== oldVal.label) {
          this.startAnimation();
        }
      },
      deep: true,
    },
    searchedClick: {
      handler() {
        if (this.searchedClick === true) {
          let searchInput = document.getElementById("search-input");
          searchInput.focus();
          searchInput.classList.add("shake");

          let searchBtn = document.getElementById("search-btn");
          searchBtn.focus();
          searchBtn.classList.add("shake");
        } else {
          document.getElementById("search-input").classList.remove("shake");
          document.getElementById("search-btn").classList.remove("shake");
        }
      },
    },
  },
  created() {
    this.startAnimation();
  },
  beforeDestroy() {
    clearInterval(this.intervalId); // clear interval
  },
  methods: {
    pickId(id) {
      this.activeId = id;
    },
    startAnimation() {
      clearInterval(this.intervalId); // clear previous interval
      this.animatedPlaceholder = "Type your query here i.e ";
      const text = this.activeContent.content.title + "...";
      let i = 0;
      this.intervalId = setInterval(() => {
        if (i < text.length) {
          this.animatedPlaceholder += text.charAt(i);
          i++;
        } else {
          this.animatedPlaceholder = "Type your query here i.e ";
          i = 0;
        }
      }, 300); // speed
    },
  },
};
</script>

<style scoped>
input[type="text"]::placeholder {
  opacity: 0.5;
}

input[type="text"]:focus::placeholder {
  opacity: 0.8;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}

.shake {
  animation: shake 0.5s;
  animation-iteration-count: 1;
}
</style>
