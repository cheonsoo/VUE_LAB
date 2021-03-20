<template>
  <div class="container">
    <div>
      <ul class="dataGrid" v-on:scroll.passive="handleScroll">
        <li v-bind:key="item.id" v-for="item in items">
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
import axios from "axios";

let timeout = null;

export default {
  async created() {
    console.log("### [InfiniteScroll] created");
    window.addEventListener("scroll", this.handleScroll);
    this.items = await this.getItems();
  },
  destroyed() {
    console.log("### destroyed");
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return { items: [] };
  },
  methods: {
    getItems: async function() {
      const res = await axios.get("http://localhost:3003/items");
      const data = res.data.data;
      console.log(`### items: ${data}`);
      return data;
    },
    handleScroll: function() {
      const scrollPoz = window.pageYOffset + window.innerHeight;
      const contentHeight = document.querySelector(".dataGrid").clientHeight;

      if (scrollPoz >= contentHeight) {
        clearTimeout(timeout);
        timeout = setTimeout(async () => {
          const items = await this.getItems();
          this.items = this.items.concat(items);
        }, 300);
      }
    }
  }
};
</script>

<style>
.container {
  width: 100%;
  margin: 20px;
  padding: 20px;
  overflow: hidden;
}
.dataGrid {
  width: 100%;
  list-style: none;
  overflow: auto;
  border: 1px solid #e9e9e9;
  padding-left: 0 !important;
}
.dataGrid .dataGrid-content {
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #e9e9e9;
  /* border: 1px solid #e9e9e9;
  border-radius: 10px;
  margin-bottom: 10px; */
}
.dataGrid li > .dataGrid-content:nth-child(odd) {
  background-color: #fff;
}
.dataGrid .dataGrid-content:hover {
  background-color: gray;
  cursor: pointer;
  color: #fff;
}
.dataGrid .dataGrid-content > div {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
