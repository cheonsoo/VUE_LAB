<template>
  <v-app>
    <TopBar />
    <div class="top-spacer"></div>
    <div class="content">
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
import TopBar from "@/components/TopBar";

export default {
  name: "App",
  components: {
    TopBar
  }
};
</script>

<style scoped>
.top-spacer {
  height: 64px;
}
.content {
  padding: 20px;
}
</style>

<style>
.btn {
  width: 150px;
  height: 35px;
  border: 1px solid #47cf54;
  border-radius: 4px;
  margin-right: 10px;
}
.btn:hover {
  background-color: #47cf54;
  color: #fff;
  font-weight: bold;
}
</style>
