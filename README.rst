SignsFive API
=============

Quick Start
-----------

.. code-block::

  nvm use
  npm install
  npm start

Logging with Bunyan
===================

`Bunyan <https://github.com/trentm/node-bunyan>`_ is used for all of our logging purposes. We create a single instance from which all children are born in `logger.js <logger.js>`_.

Logging in the Code
-------------------

Restify provides a ``requestLogger`` plugin which extends the ``req.log`` object, so you can do::

  server.get('/foo', function(req, res, next){
    req.log.info('bar');
    res.send({message: 'baz'});
  });

which adds a request ID for each request made to the logged information, allowing all requests to be traced easily.

Human-Readable Logs
-------------------

You can read the logs by piping through ``bunyan`` itself::

  tail -f server.log | ./node_modules/bunyan/bin/bunyan

Testing
=======

Tests can be run with::

  npm test

which uses `mocha <https://mochajs.org/>`_, `chai <http://chaijs.com/>`_, and `supertest <https://github.com/visionmedia/supertest>`_ (with `supertest-as-promised <https://github.com/WhoopInc/supertest-as-promised>`_ for convenience) to run all of the available tests. `Travis-CI <https://travis-ci.org/>`_ is used to

  - install packages and check dependencies,
  - run the ``mocha`` test suite,
  - and deploy to `heroku <https://dashboard.heroku.com/>`_

