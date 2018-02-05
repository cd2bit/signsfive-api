module.exports.register = (server) => {
  /**
   * @api {get} /categories Get a list of categories
   * @apiVersion 1.0.0
   * @apiName  GetCategories
   * @apiGroup Category
   * @apiPermission none
   *
   * @apiSuccess {Object[]} data        List of categories (Array of Objects)
   * @apiSuccess {Number}   data.id     Category ID
   * @apiSuccess {String}   data.name   Category Name
   * @apiSuccess {String}   data.short  Category Abbreviation
   *
   */
  server.get('/categories', function(req, res, next){
    res.send({data: [{ id: 1, name: "science",      short: "s"},
                     { id: 2, name: "technology",   short: "t"},
                     { id: 3, name: "engineering",  short: "e"},
                     { id: 4, name: "mathematics",  short: "m"}]
            });
    next();
  });
};
