var path=require('path');

module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase:'./build',
    port: 8080
  },
  entry: [
    'webpack/hot/dev-server',
    path.resolve(__dirname, 'app/app.js')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    //publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015','react']
      }
    },
    {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader'
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }
    ]
  }
};
