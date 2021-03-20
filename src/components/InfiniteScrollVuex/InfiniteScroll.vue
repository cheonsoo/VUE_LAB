<template>
  <div class="container">
    <div>
      <ul class="dataGrid" v-on:scroll.passive="handleScroll">
        <li v-bind:key="item.id" v-for="item in getItems">
          <div class="dataGrid-content">
            <div>{{ item.id }}</div>
            <div>{{ item.name }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import DetailDialog from "@/components/Detail/DetailDialog.vue";
// import { mapState, mapMutations, mapGetters } from "vuex";
import { mapGetters } from "vuex";
// import axios from "axios";

let timeout = null;

export default {
  components: {
    // DetailDialog
  },
  async created() {
    console.log("### [InfiniteScroll] created");
    window.addEventListener("scroll", this.handleScroll);

    this.$store.commit("retrieveItems", { action: "init" });
  },
  destroyed() {
    console.log("### destroyed");
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: mapGetters({
    getItems: "getItems"
  }),
  methods: {
    handleScroll: function() {
      const scrollPoz = window.pageYOffset + window.innerHeight;
      const contentHeight = document.querySelector(".dataGrid").clientHeight;

      // Save Scroll Position
      clearTimeout(timeout);
      timeout = setTimeout(async () => {
        this.$store.commit("saveScrollPosition", {
          path: "/scroll_vuex",
          position: { x: 0, y: window.scrollY }
        });
      }, 300);

      // Retrieve New Items
      if (scrollPoz >= contentHeight) {
        clearTimeout(timeout);
        timeout = setTimeout(async () => {
          this.$store.commit("retrieveItems", { action: "retrieveItems" });
        }, 300);
      }
    }
  }
};
</script>

<style src="./style.css"></style>
