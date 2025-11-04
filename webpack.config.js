// webpack.config.js (CORREGIDO Y CONSOLIDADO)

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  
  mode: 'development', 

  entry: './src/index.js', 

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  devServer: {
    // Es correcto dejarlo así; HtmlWebpackPlugin maneja la página inicial.
    port: 8080,
    open: true, 
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', 
    }),
  ],

  // ESTE ES EL ÚNICO BLOQUE 'module'
  module: { 
    rules: [
      // 1. REGLA PARA CSS (¡Ahora incluida!)
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // 2. REGLA PARA FUENTES (Para que @font-face funcione con archivos .ttf, etc.)
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, 
        type: 'asset/resource',
        // Opcional: Puedes añadir esto para que los archivos de fuente vayan a una subcarpeta
        generator: {
          filename: 'assets/fonts/[name][ext][query]' 
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
