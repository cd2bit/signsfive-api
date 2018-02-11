const register = (server) => {
  server.get('/signs/12345', (req, res, next) => {
    res.send({id: 12345,
      name: 'SignA',
      rank: 1,
      description: [ 'long text here' ],
      external_source: [
        'https://www.ruby-lang.org/en/',
        'https://en.wikipedia.org/wiki/Ruby_(programming_language)'
      ],
      tutorial: [ 'https://www.codeschool.com' ],
      category: [ 1, 3 ],
      region: [ 1, 2 ],
      tags: [ 1, 2, 3 ]
    })
    next()
  })
}

export default { register }
