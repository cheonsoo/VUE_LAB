<template>
  <div style="display: flex">
    <div style="margin-right: 10px;">{{ message }}:</div>
    <div>{{ this.$store.state.count }}</div>
  </div>
</template>

<script>
export default {
  name: "MENU1_2",
  data() {
    return {
      message: "MENU1_2"
    };
  }
};
</script>

<style></style>
