const path = require('path')

module.exports = {
  entry:{
    main: path.resolve(__dirname, 'src/index.js')
  },
  mode: 'production',
  output: {
    filename: '[name].min.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    },{
      test: /\.(?:js|mjs|cjs)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', {targets: "defaults"}]
          ]
        }
      }
    }
    ]
  }
}