var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: {
        home: './public/app/Home.js',
        line: './public/app/Line.js'
    },
    output:{
        path: path.join(__dirname, "public/build"),
        filename: "[name].entry.js",
        sourceMapFilename: 'bundle.map'
    },
    devtool: '#source-map',
    module: {
       loaders: [
           {
               test: /\.jsx?$/,
               exclude: /(node_modules|bower_components)/,
               loader: 'babel-loader',
               query:{
                   presets: ['react','es2015']
               }
           }
       ]
    }
}﻿