const fs = require("fs");
const kebabCase = require("lodash.kebabcase");

const dumpCollection = (collection, outputPath) => {
  const outputFile =
    outputPath ||
    `${kebabCase(collection.data.info.name)}.json` ||
    "postman-collection.json";

  fs.writeFileSync(outputFile, JSON.stringify(collection.data, null, 2));
};

module.exports = dumpCollection;
