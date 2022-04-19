# Webpack 5 Starter Kit

A lightweight Starter Kit including Webpack 5, TypeScript, SCSS, ESLint and Prettier.

## Instructions for use

### Installation

Clone this repository and run `yarn install` to install dependencies.

### Development

Run `yarn start` to start the Webpack dev server which opens the index html file and the corresponding transpiled JavaScript and CSS files on `localhost:3000`.

The Webpack dev server detects any changes on the source files which can be found in `src/scripts/` for Typescript, and `src/styles` for SCSS, compiles the files again and reloads the site on `localhost:8080` accordingly.

### Build

Running `yarn build` will compile all files and move them in a minified and compressed version to the folder `dist`.

### Linting

Run `yarn lint` to detect and auto-fix TypeScript and JavaScript errors as well as formatting issues.
