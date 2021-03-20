import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

/*
import VueSocketIO from "vue-socket.io";
const SocketIO = require("socket.io-client");

const socket = new VueSocketIO({
  debug: true,
  connection: SocketIO("http://localhost:3000", {
    withCredentials: false
  }),
  // connection: "http://localhost:3000",
  vuex: {
    store,
    actionPrefix: "SOCKET_",
    mutationPrefix: "SOCKET_"
  },
  options: {
    path: "/socket.io",
    withCredentials: false
  } //Optional options
  // options: { path: "/socket.io" } //Optional options
});
Vue.use(socket);
/*/
// Using socket.io-client. The version of socket.io-client must be same with socket.io-server
const io = require("socket.io-client");
const socket = io.connect("http://localhost:3000", {
  withCredentials: false
});
Vue.prototype.$socket = socket;
//*/

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
