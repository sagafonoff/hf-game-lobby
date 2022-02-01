# Hello Fresh Game Lobby

A fun way to try out your front end development skills!

## Pre-requesites

- [Node.js 16](https://nodejs.org/en/)

## Setup

You can run the [preinstall](config/scripts/preinstall.js) script using `npm run check:install` that will check for the following:

- Default Package Manager
- Git Hooks
- NPM_AUTH_TOKEN environment variable
- NPM Config file

### NPM Access Token

In order to install a private repo from npm you'll need an npm access token that can be generate following the steps below.

1. Generate a npm access token from your npm accounts
1. Run `npm i` so the preinstall script could create a **.npmrc** file for you
1. Export an environment variable by adding the following snippet to your **.zshrc** file\
   `export NPM_AUTH_TOKEN=<npm_token_here>`
1. Run `source ~/.zshrc` to apply your changes

Now when running `npm install` the `.npmrc` file in this repository will pick up your exported npm token and use it to authenticate the installation of private packages for you.

### Gitleaks

- Download the latest HelloFresh `gitleaks` binary

  1. [macOS](https://hf-security-artifacts-public.s3.eu-central-1.amazonaws.com/git-secret-scan/gitleaks-darwin-amd64)
  1. Move the binary to your preferred location and export an environment variable `GITLEAKS_HOME` that points to the path

     > e.g.: adding `export GITLEAKS_HOME=/usr/local/bin/gitleaks` to your `.envrc` file if uising `direnv`

### Git Hooks

Before copying the content from the **.githooks** to the **.git/hooks** make sure that the Regex contains the valid JIRA prefix of your project. You can search for `YOUR_JIRA_PREFIX` and replace it with your project's default. E.g.: `PIKA|KAT|KUS`

```
cp -R .githooks/* .git/hooks
```

## Using this template

1. Copy all the content of this folder
1. Search and replace all instances of `YOUR_APP_NAME` with the name of your app

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches a unit test script using Jest.

### `npm run format`

Format your code style using Prettier.

### `npm run lint`

Report errors using ESLint.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Project Structure

### Workspace configuration files

All projects within a workspace share a CLI configuration context. The top level of the workspace contains workspace-wide configuration files, configuration files for the root-level application, and subfolders for the root-level application source and test files.

| WORKSPACE CONFIG FILES | PURPOSE                                                                                                                                                                                                                                                                                                                                             |
| ---------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| .gitignore             | Specifies intentionally untracked files that [Git](https://git-scm.com/) should ignore.                                                                                                                                                                                                                                                             |
| README.md              | Introductory documentation for the root application.                                                                                                                                                                                                                                                                                                |
| package.json           | Configures npm package dependencies that are available to all projects in the workspace. See [npm documentation](https://docs.npmjs.com/files/package.json) for the specific format and contents of this file.                                                                                                                                      |
| package-lock.json      | Provides version information for all packages installed into node_modules by the npm client. See [npm documentation](https://docs.npmjs.com/cli/v8/configuring-npm/package-lock-json) for details.                                                                                                                                                  |
| config/                | Config files to support the project.                                                                                                                                                                                                                                                                                                                |
| public/                | Public files for the root-level application project.                                                                                                                                                                                                                                                                                                |
| scripts/               | Custom scripts to help automate some tasks and enforce some consistencies.                                                                                                                                                                                                                                                                          |
| src/                   | Source files for the root-level application project.                                                                                                                                                                                                                                                                                                |
| node_modules/          | Provides npm packages to the entire workspace. Workspace-wide node_modules dependencies are visible to all projects.                                                                                                                                                                                                                                |
| tsconfig.json          | The base TypeScript configuration for projects in the workspace. All other configuration files inherit from this base file. For more information, see the [Configuration inheritance with extends](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#configuration-inheritance-with-extends) section of the TypeScript documentation. |

### Application source files

Files at the top level of `src/` support testing and running your application. Subfolders contain the application source and application-specific configuration.

| APP SUPPORT FILES | PURPOSE                                                                                                                                                                                                                                      |
| ----------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| app/              | Contains the component files in which your application logic and data are defined. See details below.                                                                                                                                        |
| assets/           | Contains image and other asset files to be copied as-is when you build your application.                                                                                                                                                     |
| environments/     | Contains build configuration options for particular target environments. By default there is an unnamed standard development environment and a production ("prod") environment. You can define additional target environment configurations. |
| index.ts          | The main entry point for your application. Compiles the application with the JIT compiler and bootstraps the application's root module (App.tsx) to run in the browser.                                                                      |

> This project uses strict mode by default. If this is not desired you can remove that from the index.tsx.

### Public files

| PUBLIC FILES               | PURPOSE                                                                                                                                                                                                                            |
| -------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| favicon.ico                | An icon to use for this application in the bookmark bar.                                                                                                                                                                           |
| icon-192.png, icon-512.png | All icons to use for this application in the manifest.json.                                                                                                                                                                        |
| index.html                 | The main HTML page that is served when someone visits your site. The CLI automatically adds all JavaScript and CSS files when building your app, so you typically don't need to add any `<script>` or `<link>` tags here manually. |
| manifest.json              | The [web app manifest](https://web.dev/add-manifest/) is a JSON file that tells the browser about your Progressive Web App and how it should behave when installed on the user's desktop or mobile device.                         |
| robots.txt                 | A robots.txt file is used primarily to manage crawler traffic to your site. See more at the [documentation](https://www.robotstxt.org/robotstxt.html)                                                                              |
| robots.txt                 | A robots.txt file is used primarily to manage crawler traffic to your site. See more at the [documentation](https://www.robotstxt.org/robotstxt.html)                                                                              |

### Application configuration files

The application-specific configuration files for the root application reside at the workspace root level.

Project-specific TypeScript configuration files inherit from the workspace-wide tsconfig.json.

| APPLICATION-SPECIFIC CONFIG FILES                   | PURPOSE                                                                |
| --------------------------------------------------- | :--------------------------------------------------------------------- |
| jest.conf.js                                        | Application-specific [Jest](https://jestjs.io/) configuration.         |
| webpack.common.js, webpack.dev.js, webpack.build.js | Application-specific [Webpack](https://webpack.js.org/) configuration. |
