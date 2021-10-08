# webpack-starter

A starting point for webpack with TypeScript + SASS/SCSS + EJS

## Usage

Run [`init.sh`](./init.sh) to add/update all dependencies.

## Running

When developing, run the `start` script.

```sh
yarn start
```

or for `npm`:

```sh
npm run start
```

To build for production, run the `build` script.

```sh
yarn build
```

or for `npm`

```sh
npm run build
```

## Configuration

### Webpack Configuration

The webpack config is split up into three files:

- [`webpack.common.js`](./webpack.common.js): Common configuration
  between `development` and `producrion` builds.
- [`webpack.dev.js`](./webpack.dev.js): Development specific
  configuration; gets called when running the `start` and
  `watch` scripts.
- [`webpack.prod.js`](./webpack.prod.js): Production specific
  conficonfiguration; gets called when running `build`.

### Templating Engine

By default (if you don't specify any loader in any way) a
[fallback ejs loader][1] from [html-webpack-plugin][2] kicks in
and loads the [`src/index.html`](./src/index.html) file.
Please note that this loader does not support the full ejs syntax
as it is based on [lodash template][3].

You can specify a loader via `htmlWebpackOptions.js`. For
example, to use [handlebars-loader][5]:

```js
/** @type {import("html-webpack-plugin").Options} */
const options = {
  template: "!!handlebars-loader!src/index.html",
  title: "Webpack Starter",
};
module.exports = options;
```

Note that you need to install [handlebars][5] and [handlebars-loader][6] via

```sh
yarn add -D handlebars handlebars-loader
```

For more customization you can look into the declaration of [HtmlWebpackPlugin.Options][7]

[1]: https://github.com/jantimon/html-webpack-plugin/blob/master/lib/loader.js
[2]: https://github.com/jantimon/html-webpack-plugin
[3]: https://github.com/Quadslab/webpack-starter/blob/main/package.json#L11
[4]: ./package.json#L11
[5]: https://github.com/handlebars-lang/handlebars.js
[6]: https://github.com/pcardune/handlebars-loader
[7]: https://github.com/jantimon/html-webpack-plugin/blob/2f5de7ab9e8bca60e9e200f2e4b4cfab90db28d4/typings.d.ts#L39-L172
