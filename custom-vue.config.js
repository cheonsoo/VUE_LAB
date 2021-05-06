#!/usr/bin/env node

const semver = require("semver");
const { error } = require("@vue/cli-shared-utils");
const requiredVersion = require("@vue/cli-service/package.json").engines.node;

console.log(1);

if (!semver.satisfies(process.version, requiredVersion)) {
  error(
    `You are using Node ${process.version}, but vue-cli-service ` +
      `requires Node ${requiredVersion}.\nPlease upgrade your Node version.`
  );
  process.exit(1);
}

console.log(2);

const Service = require("@vue/cli-service");
const service = new Service(process.env.VUE_CLI_CONTEXT || process.cwd());

console.log(3);

const rawArgv = process.argv.slice(2);
const args = require("minimist")(rawArgv);
const command = args._[0];

console.log(4);

module.exports = () =>
  // <--- add this line to return the service promise
  service.run(command, args, rawArgv).catch(err => {
    error(err);
    process.exit(1);
  });
