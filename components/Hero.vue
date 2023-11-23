<template>
  <section
    class="container-9x flex-center flex-col gap-10 pt-32 pb-16 text-white"
  >
    {{ quickLinks }}
    {{ id }}
    <h1 class="text-5xl tracking-wide">Tailwind Templates</h1>
    <p class="tracking-wide leading-normal text-xl">
      Download the best Tailwind CSS Themes & Templates developed by Creative
      Tim. Join over 2,366,301 creatives that already love our bootstrap
      resources!
    </p>
    <div class="px-3 py-2 w-full rounded-3xl relative">
      <input
        type="text"
        placeholder="What are you searching for..."
        class="w-full h-10 outline-none border-[1px] border-b-1 rounded-3xl green-gradient pl-6 pr-16 text-lg font-semibold tracking-wide text-white placeholder-white"
      />
      <div
        class="w-10 h-10 rounded-full absolute right-3 top-2 border-[1px] flex-center"
        :class="{
          // 'other-gradient': gradient,
          // 'green-gradient': !gradient,
        }"
      >
        <img src="@/assets/images/icons/search-icon.svg" alt="" width="20" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return { id: "" };
  },
  computed: {
    // quickLinks() {
    //   return this.$store.state.quickLinks.links
    //     .flatMap((e) => e.dropdowns || [])
    //     .flatMap((e) => e.links || [])
    //     .flatMap((e) => e.links || [])
    //     .filter((e) => e && e.content)
    //     .map((e) => e.content.title);
    // },


     
// let id = ''; // Initialize id outside the function

// let x =  quickLinks.flatMap((e) => e.links || [])
//   .flatMap((e) => e.dropdowns || [])
//   .flatMap((e) => {
// 	id += e.id; // Update the id value
// 	return e.links || [];
//   })
//   .flatMap((e) => {
// 	id += e.id; // Update the id value
// 	return e.links || [];
//   })
//   .flatMap((e) => {
// 	id += e.id + " "; // Update the id value
// 	return e.content.title; // Access the title property of the content object
//   });

// console.log(id);




    quickLinks() {
      return this.$store.state.quickLinks.links
        .flatMap((e) => e.dropdowns || [])
        .flatMap((e) => {
          this.id += e.id;
          return e.links || [];
        })
        .flatMap((e) => {
          this.id += e.id;
          return e.links || [];
        })
        .flatMap((e) => {
          {
            this.id += e.id + " ";
            return e.label;
          }
        });
    },
  },
};
</script>

<style></style>
