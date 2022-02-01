const path = require("path");

module.exports = {
  // Source files
  src: path.resolve(__dirname, "..", "..", "src"),

  // Production build files
  build: path.resolve(__dirname, "..", "..", "build"),

  // Static files that get copied to build folder
  public: path.resolve(__dirname, "..", "..", "public"),

  // Git hook template files
  githooks: path.resolve(__dirname, "..", "..", ".git", "hooks", "pre-commit"),

  // NPM config file
  npmrc: path.resolve(__dirname, "..", "..", ".npmrc"),
};
