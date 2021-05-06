#!/usr/bin/env node

const service = require("./custom-vue.config.js");

console.log(`[BUILD-STARTED] ${new Date()}`);

service().then(result => {
  if (result && result.server) {
    // <--- server started successfully if result.server exists
    const { server, url } = result;
    console.log("ready");
  }
});
