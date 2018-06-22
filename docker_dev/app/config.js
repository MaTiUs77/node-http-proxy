var config = {};

config.port = 80;
config.index = {
    'service': 'node-http-proxy',
    'status': 'online',
    'motor': 'NodeJS',
    'github': {
       'url': null,
       'tag': null
    },
    'env': process.env
};

module.exports = config;
