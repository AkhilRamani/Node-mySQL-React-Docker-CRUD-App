var config = require(`../../env.config.json`);
var env = process.env.NODE_ENV || 'dev';

config = config[env]

Object.keys(config).forEach(key => {
    process.env[key] = config[key];
});