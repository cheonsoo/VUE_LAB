<template>
  <div>
    <div>
      <div style="display: flex">
        <div style="margin-right: 10px;">{{ message }}:</div>
        <div>{{ getCount }}</div>
        <!-- <div>{{ this.$store.state.count }}</div> -->
      </div>
      <div>
        <Menu1_1 />
        <Menu1_2 />
      </div>
    </div>
    <div>
      <button class="btn" @click="$store.commit('init')">INIT</button>
      <button class="btn" @click="$store.commit('increment')">Increment</button>
      <button class="btn" @click="$store.commit('decrement')">Decrement</button>
    </div>
  </div>
</template>

<script>
import Menu1_1 from "./Menu1_1";
import Menu1_2 from "./Menu1_2";

export default {
  name: "Step1",
  created() {
    console.log(`### created`);
  },
  destroyed() {
    console.log(`### destroyed`);
  },
  data() {
    return {
      message: "MENU1"
    };
  },
  methods: {},
  components: {
    Menu1_1,
    Menu1_2
  },
  computed: {
    getCount() {
      return this.$store.state.count;
    }
  }
};
</script>

<style></style>
