const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const BUILD_DIR = path.resolve(__dirname, 'dist')
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './img/[name].[hash].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/logo.png'
    }),
    new CopyWebpackPlugin([
      { from: './public/extras/manifest.json', to: 'extras' }
    ]),
    new SWPrecacheWebpackPlugin({
      cacheId: 'ajarindong',
      filename: 'service-worker.js',
      navigateFallback: '/index.html',
      stripPrefix: BUILD_DIR,
      // We specify paths to the compiled destinations of resources for each "app's"
      // bundled resources. This is one way to separate bundled assets for each
      // application.
      staticFileGlobs: [
        `${BUILD_DIR}/index.html`,
        `${BUILD_DIR}/service-worker.js`,
        `${BUILD_DIR}/favicon.ico`
      ]
    })
  ]
}
