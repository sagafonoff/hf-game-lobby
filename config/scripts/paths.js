const path = require("path");

module.exports = {
  // Source files
  src: path.resolve(__dirname, "..", "..", "src"),

  // Static files that get copied to build folder
  public: path.resolve(__dirname, "..", "..", "public"),
};
