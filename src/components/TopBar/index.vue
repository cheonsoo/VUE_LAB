<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <router-link class="top-link" to="/">HOME</router-link>

      <router-link class="top-link" to="/products">PRODUCTS</router-link>

      <router-link class="top-link" to="/scroll">SCROLL</router-link>

      <router-link class="top-link" to="/scroll_vuex">SCROLL VUEX</router-link>

      <router-link class="top-link" to="/detail">DETAIL</router-link>

      <router-link class="top-link" to="/menu1">MENU1</router-link>

      <router-link class="top-link" to="/about">ABOUT</router-link>
    </div>

    <v-spacer></v-spacer>

    <div>Connection: {{ cnt }}</div>
    <div><ClientsCnt /></div>
  </v-app-bar>
</template>

<script>
import moment from "moment";
import ClientsCnt from "@/components/ClientsCnt";

export default {
  components: {
    ClientsCnt
  },
  data() {
    return {
      cnt: 0
    };
  },
  beforeCreate() {
    console.log(`### moment: ${moment()}`);
  },
  created() {
    console.log("[TopBar] created");
    this.$socket.on("clientsCount", cnt => {
      console.log(`### count: ${cnt}`);
      this.cnt = cnt;
      this.$store.commit("setClientsCnt", cnt);
    });
  }
};
</script>

<style>
.top-link {
  color: #fff !important;
  text-decoration: none;
  font-weight: bold;
  margin: 25px;
  font-size: 18px;
}
</style>
