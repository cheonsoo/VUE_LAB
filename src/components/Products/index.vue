<template>
  <div class="container">
    <div>
      <ul class="products" v-on:scroll.passive="handleScroll">
        <li class="products-li" :key="item.id" v-for="item in getItems">
          <div class="products-content" @click="toggle(item)">
            <div class="products-content-img">
              <img :src="item.img" />
            </div>
            <div class="products-content-desc">
              <div>{{ item.desc }}</div>
              <div>
                <div>{{ item.id }}</div>
                <div>{{ item.name }}</div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <DialogDetail
      v-bind:dialog="dialog"
      v-bind:message="message"
      v-bind:toggle="toggle"
      v-bind:item="item"
    />
  </div>
</template>

<script src="./script.js"></script>
<style src="./style.css" scoped></style>
