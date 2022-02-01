"use strict";

const fs = require("fs");
const paths = require("./paths");
const helper = require("./helper");

/** Variables */
const { errorMessages } = helper;

/** Do NOT allow using `yarn` as package manager */
const checkPackageManager = () => {
  if (process.env.npm_execpath.indexOf("npm") === -1)
    throw new Error(errorMessages.npmPackageManager);
};

/** Check for any existing Git hooks scripts  */
const checkGithooks = () => {
  if (!fs.existsSync(paths.githooks)) throw new Error(errorMessages.gitHooks);

  console.info(`✓ Git hooks already exists at ${paths.githooks}`);
};

/** Check for an NPM_AUTH_TOKEN environment variable */
const checkNpmAuthToken = () => {
  if (!process.env.NPM_AUTH_TOKEN) throw new Error(errorMessages.npmAuthToken);

  console.info(`✓ NPM_AUTH_TOKEN environment variable already exists`);
};

/** Check for an existing .npmrc file */
const checkNpmrc = () => {
  fs.existsSync(paths.npmrc)
    ? console.info(`✓ NPM config file already exists at ${paths.npmrc}`)
    : createNpmrc();
};
/** Create a .npmrc file */
const createNpmrc = () => {
  const fileContent =
    "//registry.npmjs.org/:_authToken=${NPM_AUTH_TOKEN}\n@hellofresh:registry=https://registry.npmjs.org/\nalways-auth=true";

  fs.writeFile(paths.npmrc, fileContent, (err) => {
    if (err) return err;

    console.info(`+ NPM config file successfully created at ${paths.npmrc}`);
  });
};

/** Main Script */
(async () => {
  console.info("Starting preinstall script");
  try {
    checkPackageManager();
    checkGithooks();
    checkNpmrc();
    checkNpmAuthToken();
  } catch (error) {
    setImmediate(() => {
      throw error;
    });
  }
})();
