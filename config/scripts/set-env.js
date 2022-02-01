#!/bin/node
const fsPromises = require("fs/promises");
const paths = require("./paths");

// Read CLI arguments
const env = process.argv[2];
const envVersion = process.argv[3] || "0.0.1";

// Configure env file
const envFile = require(`${paths.src}/config/environments/${env}.json`);
envFile.VERSION = envVersion;

// Write the final env file
fsPromises.writeFile(
  `${paths.src}/config/env.json`,
  JSON.stringify(envFile, undefined, 4)
);
