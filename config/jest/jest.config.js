/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  bail: true,
  rootDir: "../../",
  testEnvironment: "jsdom",
  testMatch: ["**/src/**/*.spec.ts?(x)"],
  transform: {
    "^.+\\.(ts|tsx)$": "@swc/jest",
  },
  moduleNameMapper: {
    "^@app(.*)$": "<rootDir>/src/app$1",
    "^@assets(.*)$": "<rootDir>/src/assets$1",
    "^@config(.*)$": "<rootDir>/src/config$1",
    "^@domain(.*)$": "<rootDir>/src/domain$1",
    "^@services(.*)$": "<rootDir>/src/services$1",
  },
  setupFilesAfterEnv: ["<rootDir>/config/jest/jest.setup.js"],
  cacheDirectory: "<rootDir>/config/jest/cache",
};
