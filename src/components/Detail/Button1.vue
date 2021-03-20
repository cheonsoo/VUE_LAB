<template>
  <div>
    <slot name="slot1"></slot>
    <slot name="slot2"></slot>
    <slot name="slot3"></slot>
    <v-btn v-on:click="console('hi', $event)">BUTTON</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    console: (msg, event) => {
      console.log(msg || "test");
      console.log(event);
    }
  }
};
</script>
