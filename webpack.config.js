const path = require('path');
const MinifyPlugin = require("babel-minify-webpack-plugin");
// const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    entry: './src/script/main.js',
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'bundle.js'
    }, 
    
    devServer:{
        contentBase: path.resolve(__dirname,'dist'),
        publicPath: '/assets/',
        watchContentBase: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    "presets": ["@babel/preset-env"]
                }
            }
        },
        {
            test: /\.css$/,
            use: ['style-loader','css-loader']
        }]
    },
    plugins: [
        new MinifyPlugin()
    ],
    watch: true,
}; 