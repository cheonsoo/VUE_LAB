<template>
  <v-app>
    <div :key="idx" v-for="(comp, idx) in compOrder">
      <anonymous-component
        class="component"
        :is="components[comp.name]"
        v-if="comp.toggle === 1 && true"
      />
    </div>
  </v-app>
</template>

<script>
import ORDER_DEFAULT from "./ORDER_DEFAULT.json";
import ORDER_FETCHED from "./ORDER_FETCHED.json";

export default {
  name: "DynamicLayout",
  data() {
    return {
      components: {},
      compOrder: [],
      compData: ORDER_DEFAULT
    };
  },
  created() {
    this.getComponentsData();
    this.sortComponents();
    this.mountComponents();
  },
  methods: {
    getComponentsData() {
      this.compData = ORDER_FETCHED;
      console.log("### getComponentsData", this.compData);
    },
    sortComponents() {
      this.compOrder = Object.keys(this.compData)
        .sort((a, b) => this.compData[a].order - this.compData[b].order)
        .map(compName => this.compData[compName]);
      console.log(`### sortComponents: ${JSON.stringify(this.compOrder)}`);
    },
    mountComponents() {
      console.log(`### mountComponents`);
      this.compOrder.forEach(
        comp =>
          (this.components[comp.name] = () =>
            import(`@/components/DynamicLayout/${comp.name}`))
      );
    }
  }
};
</script>

<style>
.component {
  width: 100%;
  height: 100px;
  border: 1px solid #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 10px;
  border-radius: 8px;
}
</style>
