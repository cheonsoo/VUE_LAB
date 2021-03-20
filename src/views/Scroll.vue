<template>
  <div class="scroll">
    <InfiniteScroll />
  </div>
</template>

<script>
// @ is an alias to /src
import InfiniteScroll from "@/components/InfiniteScroll/InfiniteScroll.vue";

const Scroll = {
  name: "Scroll",
  components: {
    InfiniteScroll
  },
  created() {
    console.log("### [Scroll] created");
  }
};

export default Scroll;
</script>
