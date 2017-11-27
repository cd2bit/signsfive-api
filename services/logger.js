var bunyan = require('bunyan');
var restify = require('restify');

var logger = new bunyan({
  name: process.env.npm_package_name,
  streams: [
    {
      stream: process.stdout,
      level: 'info'
    },
    {
      path: 'server.log',
      level: 'trace'
    }
  ],
  serializers: restify.bunyan.serializers
});

module.exports=logger;
