#!/usr/bin/env node
const fs = require("fs");
const yargs = require("yargs");
const dumpCollection = require("../src/dumpCollection");
const convertApiDoc = require("../src/convertApiDoc");
const { cleanExit, errorExit } = require("../src/exit");

/* eslint-disable no-unused-expressions */
yargs
  .usage("Usage: $0 <command> [options]")
  .help("h")
  .alias("h", "help")
  .command(
    ["generate [input]", "$0 [input]"],
    "generate postman collection",
    args => {
      args.positional("input", {
        describe: "path to the apidoc file",
        default: "./apidoc.json"
      });
    },
    async args => {
      const { output, input } = args;
      try {
        const apidoc = JSON.parse(fs.readFileSync(input));
        const res = await convertApiDoc(apidoc);
        dumpCollection(res.output[0], output);
        cleanExit();
      } catch (e) {
        errorExit(e);
      }
    }
  )
  .example("$0 [./apidoc.json]", "generate a postman collection with this file")
  .alias("i", "input")
  .describe("i", "Path to swagger file")
  .option("o", {
    alias: "output",
    describe: "output filename",
    type: "string"
  }).argv;
