# webpack-starter

A starting point for webpack with TypeScript + SASS/SCSS

# Usage

Run [`init.sh`](./init.sh) to add all dependencies.

#Configuration

You can change the title and the templating engine in
[`package.json`](./package.json).

The webpack config is split up into three files:

- [`webpack.common.js`](./webpack.common.js): Common configuration
  between `development` and `producrion` builds.
- [`webpack.dev.js`](./webpack.dev.js): Development specific
  configuration; gets called when running the `start` and
  `watch` scripts.
- [`webpack.prod.js`](./webpack.prod.js): Production specific
  conficonfiguration; gets called when running `build`.
