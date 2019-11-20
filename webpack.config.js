const path = require('path');
const htmlPlugin= require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = (env)=>{

  console.log(env.NODE_ENV)

  let plugins = [new CleanWebpackPlugin(),new VueLoaderPlugin()];

  let config = {
    target: 'web',
    entry: './lib/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'lib-vue-track-navigation-bar.js',
      libraryTarget:'umd'
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader'
          ]
        }
      ]
    },
    plugins
  }

  if(env.NODE_ENV !== 'prod'){
    plugins.push(new htmlPlugin({
      minify:{
          removeAttributeQuotes:true
      },
      hash:true,
      template:'./demo/index.html'
    }))

    config.entry = './demo/index.js'

    Object.assign(config,{
      plugins,
      devServer:{
        //设置基本目录结构
        contentBase:path.resolve(__dirname,'dist'),
        //服务器的IP地址，可以使用IP也可以使用localhost
        host:'localhost',
        //服务端压缩是否开启
        compress:true,
        //配置服务端口号
        port:8080
      }
    });
  }



  return config;

}
