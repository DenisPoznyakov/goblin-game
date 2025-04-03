const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Точка входа
  output: {
    filename: 'bundle.js', // Выходной файл
    path: path.resolve(__dirname, 'dist'), // Путь к выходной директории
    clean: true, // Очищает папку dist перед каждой сборкой
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Обработка JavaScript
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/, // Обработка CSS
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Шаблон HTML-файла
      filename: 'index.html', // Имя выходного файла
    }),
  ],
  devServer: {
    static: './dist', // Статическая директория для dev-server
    open: true,
    hot: true,
  },
  mode: 'development', // Режим разработки
};