module.exports.register = (server) => {
  require('./main').register(server);
  require('./category').register(server);
  require('./sign').register(server);
};
