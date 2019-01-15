const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
   mode: "development",
   plugins: [
       new HtmlWebpackPlugin({
           template: "index.html",
           inject: true,
           filename: "index.html"
       }),
   ],
   devServer: {
       contentBase: path.join(__dirname, "."),
       compress: true,
    //    host: "fm.fits.local",
       port: 9001, // Not 9000 to avoid conflicts with FO port
       open:true,
    //    openPage: "?clientExternalId=40161&platform=desktop&clientUrl=http%3A%2F%2Ffu.fits.local",
    //    allowedHosts: [
    //        ".fits.local"
    //    ]
   }
});