/** Provide additional helper content to support the project infrastructure */
module.exports = {
  errorMessages: {
    npmPackageManager: `
  ❌ Yarn it's not allowed

    Please use NPM to install dependencies:
      $ npm install
    `,
    gitHooks: `
  ❌ Could NOT find any git hooks configured

    Please follow the instructions at the Git Hooks section of the README.md file
    `,
    npmAuthToken: `
  ❌ Could NOT find an environment variable NPM_AUTH_TOKEN configured

    Please follow the instructions at the NPM Access Token section of the README.md file
    `,
  },
};
