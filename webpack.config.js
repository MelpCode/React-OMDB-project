const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const HtmlPlugin = new HtmlWebpackPlugin({
    template:'./src/index.html',
    filename:'./index.html'
})


module.exports = {
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:['babel-loader']
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins:[
        HtmlPlugin,
        new Dotenv()
    ]
}