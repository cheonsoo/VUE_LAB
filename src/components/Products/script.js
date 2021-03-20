import DialogDetail from "./DialogDetail.vue";
import { mapGetters } from "vuex";

let timeout = null;

export default {
  components: {
    DialogDetail
  },
  data() {
    return {
      dialog: false,
      message: "hi all!!!",
      item: {}
    };
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
      const contentHeight = document.querySelector(".products").clientHeight;

      // Save Scroll Position
      clearTimeout(timeout);
      timeout = setTimeout(async () => {
        this.$store.commit("saveScrollPosition", {
          path: "/products",
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
    },
    toggle: function(_item) {
      if (!this.dialog) this.item = _item;
      this.dialog = !this.dialog;
    }
  }
};
