const path = require('path');

module.exports = {
    //...
    resolve: {
        alias: {
            "@assets": path.resolve(__dirname, 'src/assets/'),
            ['@assets']: path.resolve(__dirname, 'src/assets/'),
           components: path.resolve(__dirname, 'src/components/'),
        },
    },
};