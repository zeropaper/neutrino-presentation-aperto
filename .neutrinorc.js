module.exports = {
  use: [
    '@neutrinojs/airbnb-base',
    // [
    //   'neutrino-middleware-styles-loader',
    //   {
    //     extractCSS: true,
    //     sourceMap: true
    //   }
    // ],
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
    '@neutrinojs/jest'
  ]
};
