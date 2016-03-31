const path = require('path');
const webpack = require('webpack');
const conbimeLoaders = require('webpack-combine-loaders');


var plugins = [
    new webpack.ProvidePlugin({
        $: 'jquery',
    }),
];

const babel_msx_loader = conbimeLoaders([
    {
        loader: 'msx-loader',
    },
    {
        loader: 'babel',
        query: {
            presets: ['es2015'],
            plugins: [
                "transform-es2015-arrow-functions",
                "transform-object-assign",
                "transform-array-from",
            ],
        },
    },
]);



module.exports = {
    entry: {
        index: './src/index.js',
        vendor: './vendor.js',
        style: './style/index.styl',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    module: {
        loaders: [
            // for bootstrap
            {test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
            { // for msx
                loader: 'msx-loader',
                test: /\.msx/,
                exclude: /(node_modules|bower_components)/,
            },
            { // for css
                loader: 'style!css',
                test: /\.css$/,
            },
            { // for stylus
                loader: 'style-loader!css-loader!stylus-loader',
                test: /\.styl/,
                exclude: /(node_modules|bower_components)/,
            },
            { // for ECMA Script 6
                loader: 'babel',
                test: /\.js$/,
                exclude: /node_modules/,
                query: {
                    presets: ['es2015'],
                    plugins: [
                        "transform-es2015-arrow-functions",
                    ],
                }
            },
        ]
    },
    resolve: {
        extensions: [
            '', '.js', '.msx', '.styl',
        ],
        root: [
            __dirname,
            path.join(__dirname, 'node_modules'),
        ],
    },
    plugins: plugins,
}
