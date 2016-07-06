// const path = require('path');

// const webpack = require('webpack');
// const config = require('./webpack.config');
//
// const app = express();
// const compiler = webpack(config);
//
// app.use(require('webpack-dev-middleware')(compiler, {
//     noInfo: true,
//     publicPath: config.output.publicPath
// }));
//
// app.use(require('webpack-hot-middleware')(compiler));
//
// app.use(express.static('public'));
//
// app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'public/index.html'));
// });
//
// app.listen(3000, function(err) {
//     if (err) {
//         console.log(err);
//         return;
//     }
//
//     console.log('Listening at http://localhost:3000');
// });

var webpack = require('webpack');
const express = require('express');
const config = require('./webpack.config');
const compiler = webpack(config);

/***************
## API SERVER ##
***************/

const app = express();
app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}));

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api/*', function (req, res) {
    res.write(JSON.stringify({res: "OK"}));
    res.end();
});

app.listen(3000, 'localhost', function (err, result) {
    if (err) {
        return console.log(err);
    }
});



/***********************
## WEBPACK DEV SERVER ##
***********************/

//var webpack = require('webpack');
//var WebpackDevServer = require('webpack-dev-server');
//var config = require('./webpack.config');

// var server = new WebpackDevServer(webpack(config), {
//     publicPath: config.output.publicPath,
//     hot: true,
//     historyApiFallback: true,
//     proxy: {
//         "*": "http://localhost:3000"
//     }
// });
//
// server.listen(3001, 'localhost', function (err, result) {
//     if (err) {
//         return console.log(err);
//     }
//
//     console.log('Listening at http://localhost:3001/');
// });
