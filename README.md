# neutrino-presentation-aperto
A presentation of Neutrino at Aperto



## Before starting

Use a recent version of nodejs (`nvm install 9`).

## Install the 'create-project' utility

```sh
npm i -g @neutrinojs/create-project
```

## Create a project

```sh
npx @neutrinojs/create-project neutrino-demo
```

And you should get a wizard to create your project:

![image](https://user-images.githubusercontent.com/65971/36408661-2af1bdc4-1607-11e8-85ba-ae0580ed283d.png)

Let's selet the following setup:
- `A web or Node.js application`
- `Some other web app, e.g. Angular, jQuery, or plain JS`
- `Jest`
- `Airbnb style rules`

## What has been created?

- `.neutrinorc.js`
- `src/index.js`
- `test/simple_test.js`

## The commands

- `npm start` starts a development server with hot-reloading
- `npm run build` compile the project in the `build` directory (configurable)

## Choose your weapons

```sh
cd neutrino-demo
npm i -D node-sass sass-loader
npm i veams bootstrap popper.js jquery
mkdir -p src/{static,styles}
touch src/styles/_variables.scss
touch src/styles/_setup.scss
touch src/styles/styles.scss
```

## Development

### Bootstrap Setup

In `src/styles/_variables.scss`:
```scss
$grid-gutter-width: 2vmax
```

In `src/styles/_setup.scss`:
```scss
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import './_variables';
@import '~bootstrap/scss/mixins';
```

In `src/styles/styles.scss`:
```scss
@import './_setup';
@import '~bootstrap/scss/reboot';
```

In `.neurinorc.js` change the `@neutrinojs/web` setup to support SASS
```js
// ...
[
  '@neutrinojs/web',
  {
    style: {
      test: /\.(s|)css$/,
      loaders: ['sass-loader']
    },

    html: {
      title: 'neutrino-demo'
    }
  }
],
// ...
```

### Integration

In `src/index.js` add (at the top of the file):
```js
import Veams from 'veams';
import $ from 'jquery';
import './styles/styles.scss';

Veams.$ = $;
```

## Hiccups

- The default setup has no CSS sourcemaps (and that's terrible) to fix that:
  ![image](https://user-images.githubusercontent.com/65971/36409697-5239a3aa-160d-11e8-80e1-ca5c864a1c57.png)
  To solve that:
  ```sh
  npm i -D neutrino-middleware-styles-loader
  ```
  then in `.neutrinorc.js` (before the `@neutrinojs/web` entry) add
  ```js
    [
      'neutrino-middleware-styles-loader',
      {
        extractCSS: true,
        sourceMap: true
      }
    ],
  ```
  remove the `styles` entry in the `@neutrinojs/web`
  ![image](https://user-images.githubusercontent.com/65971/36409789-dd2f7ae8-160d-11e8-9068-c924d880449e.png)
