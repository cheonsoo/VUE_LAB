<template>
  <v-app>
    <button v-on:click="flg = true">Click</button>
    <Button1>
      <h1 slot="slot1">Slot Area 1</h1>
      <div slot="slot2">Slot Area 2</div>
      <div slot="slot3">Slot Area 3</div>
    </Button1>

    <DetailDialog></DetailDialog>

    <DetailDialog2>
      <!-- <template v-slot:activator="slotProps">
        <v-btn v-on="slotProps.on">show</v-btn>
      </template> -->
      <template v-slot:activator="{ on }">
        <v-btn v-on="on">show</v-btn>
      </template>
    </DetailDialog2>

    <template v-if="this.flg">
      <InfiniteSCroll />
    </template>
  </v-app>
</template>

<script>
// import DetailDialog from "@/components/DetailDialog";
// import DetailDialog2 from "./DetailDialog.vue";
// import Button1 from "@/components/Detail/Button1.vue";

export default {
  name: "App",
  data: function() {
    return {
      flg: false
    };
  },
  method: {
    fn: () => (this.flg = true)
  },
  components: {
    DetailDialog: () =>
      import(
        /* webpackChunkName: "chunk-detail"  */ "@/components/DetailDialog"
      ),
    DetailDialog2: () => import("./DetailDialog.vue"),
    Button1: () => import("@/components/Detail/Button1.vue"),
    InfiniteSCroll: () =>
      import(
        /* webpackChunkName: "chunk-scroll"  */ "@/components/InfiniteScrollVuex/InfiniteScroll.vue"
      )
  }
};
</script>
