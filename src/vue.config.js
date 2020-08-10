const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('src', resolve('@'))
            .set('@assets', resolve('@/assets'))
            .set('@components', resolve('@/components'))
            .set('@common', resolve('@/common'))
            .set('@network', resolve('@/network'))
            .set('@views', resolve('@/views'))
    }
};