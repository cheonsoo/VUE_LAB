<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <div>
          <v-toolbar dark color="primary">
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text @click="toggle">
                X
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>

          <div class="dialog-detail-content">
            <div class="dialog-detail-content-inner">
              <div>Dialog</div>
              <div>id: {{ productDetail.id }}</div>
              <div>name: {{ productDetail.name }}</div>
              <div>desc: {{ productDetail.desc }}</div>
              <div>quantity: {{ productDetail.quantity }}</div>
              <div>img: {{ productDetail.img }}</div>
              <div>{{ message }}</div>
            </div>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from "axios";

export default {
  props: ["dialog", "message", "toggle", "item"],
  data() {
    return {
      productDetail: {}
    };
  },
  watch: {
    async item() {
      const url = `http://localhost:3000/item/${this.item.id}`;
      const res = await axios.get(url);
      const data = res.data.data;
      console.log("### get item");
      console.log(data);
      this.id = this.item.id;
      this.productDetail = data;
    }
  },
  created() {
    console.log(`### detail item id: ${this.item.id}`);
  }
};
</script>

<style>
.dialog-detail-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
