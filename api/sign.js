module.exports.register = (server) => {
  /**
   * @api {get} /sign/:id Get a sign
   * @apiVersion 1.0.0
   * @apiName  GetSign
   * @apiGroup Sign
   * @apiPermission user
   *
   * @apiParam {Number}     id          The Signs-ID
   *
   * @apiSuccess {Object}   sign                  A Sign object
   * @apiSuccess {Number}   sign.id               Sign ID
   * @apiSuccess {String}   sign.name             Sign Name
   * @apiSuccess {Number}   sign.rank             Sign Rank
   * @apiSuccess {String}   sign.description      Description of Sign
   * @apiSuccess {String[]} sign.external_source  Sources for the sign
   * @apiSuccess {String[]} sign.tutorial         Tutorials for the sign
   * @apiSuccess {Number[]} sign.category         List of category IDs for the sign
   * @apiSuccess {Number[]} sign.region           List of region IDs for the sign
   * @apiSuccess {Number[]} sign.tags             List of tag IDs for the sign
   *
   */
  server.get('/sign/12345', function(req, res, next){
    res.send({id: 12345,
        name: "SignA",
        rank: 1,
        description: ["long text here"],
        external_source: ["https://www.ruby-lang.org/en/", "https://en.wikipedia.org/wiki/Ruby_(programming_language)"],
        tutorial: ["https://www.codeschool.com"],
        category: [ 1, 3 ],
        region: [ 1, 2 ],
        tags: [ 1, 2, 3 ]
      });
    next();
  });
};
