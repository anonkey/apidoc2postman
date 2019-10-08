const errorExit = err => {
  process.stderr.write(err.message);
  process.exit(err.code || 1);
};

const cleanExit = () => {
  process.stdout.write("Postman collection generated !");
  process.exit(0);
};

module.exports = {
  errorExit,
  cleanExit
};
