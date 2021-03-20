<template>
  <div>
    <!-- Activator -->
    <slot name="activator" :on="{ click: showDialog }">
      <!-- <template v-slot:activator="{ on }"> -->
      <!-- </template> -->
      <!-- 항상 보여지는 부분 -->
    </slot>

    <!-- show가 true일 경우에만 보여지는 부분 (default slot) -->
    <!-- <template>으로 싸여있지 않은 내용물들은 디폴트 슬롯에 해당되는 것으로 간주합니다. -->
    <slot v-if="show">
      <div>
        Activated
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    showDialog() {
      this.show = !this.show;
    }
  }
};
</script>
