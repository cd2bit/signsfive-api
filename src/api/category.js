module.exports.register = (server) => {
  server.get('/categories', (req, res, next) => {
    res.send({data: [{ id: 1, name: "science",      short: "s"},
                     { id: 2, name: "technology",   short: "t"},
                     { id: 3, name: "engineering",  short: "e"},
                     { id: 4, name: "mathematics",  short: "m"}]
            })
    next()
  });
};
