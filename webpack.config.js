const path = require('path');

module.exports = {
    entry : './src/index.js',
    module  : {
        rules : [
            {test : /\.js$/, use : 'babel-loader' }
        ]
    },
    devServer : {
        contentBase : './dist'
    },
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname,'dist')
    }
}
