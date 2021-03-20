<template>
  <div>Clients Count: {{ getClientsCnt }}</div>
</template>

<script>
export default {
  computed: {
    getClientsCnt() {
      return this.$store.state.clientsCnt;
    }
  }
};
</script>
