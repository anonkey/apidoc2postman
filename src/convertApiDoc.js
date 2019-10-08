const { convert } = require("swagger2-to-postmanv2");

const convertApiDoc = apidoc =>
  new Promise((resolve, reject) => {
    convert(
      {
        type: "json",
        data: apidoc
      },
      null,
      (err, res) => {
        if (err) return reject(err);
        return resolve(res);
      }
    );
  });

module.exports = convertApiDoc;
