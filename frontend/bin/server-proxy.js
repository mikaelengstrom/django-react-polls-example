/* eslint-disable no-undef, no-unused-vars */
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const Renderer = require('../internals/render/render');
const config = require('../internals/config.js')();
const renderer = new Renderer(config);
const webpackConfig = renderer.getWebpackConfig('./index-hot-reloading.js');


const server = new webpackDevServer(webpack(webpackConfig), {
    stats: {
        colors: true,
        hash: false,
        modules: false
    },
    hot: true,
    clientLogLevel: 'warning',
    disableHostCheck: true,
    publicPath: config.publicPath,
    index: '', // specify to enable root proxying
    proxy: {
        '/': {
            context: () => true,
            target: 'http://localhost:8000'
        }
    }
});

console.log(`Server started on port ${config.port}`)
server.listen(config.port);
