.. image:: documentation/images/signsfive-announcement-facebook_1200x630.jpg
    :target: http://signsfive.com/

----------------------

SignsFive API
=============

.. image:: https://travis-ci.org/deafchi/signsfive-api.svg?branch=master
    :target: https://travis-ci.org/deafchi/signsfive-api

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

which uses `mocha <https://mochajs.org/>`_, `chai <http://chaijs.com/>`_, and `supertest <https://github.com/visionmedia/supertest>`_ to run all of the available tests. `Travis-CI <https://travis-ci.org/>`_ is used to

- install packages and check dependencies,
- run the ``mocha`` test suite,
- and deploy to `heroku <https://dashboard.heroku.com/>`_

Documentation
=============

Code Structure
--------------

- `.sequelizerc <.sequelizerc>`_ contains configuration for the `sequelize cli <https://github.com/sequelize/cli>`_
- `config/ <config/>`_ contains configuration files for database and other services
- `db/ <db/>`_ contains database model, seeder, and migration files
- `index.js <index.js>`_ is our server entrypoint
- `package.json <package.json>`_ is self-explanatory
- `scripts/ <scripts/>`_ contains various scripts, such as those referenced by `package.json <package.json>`_
- `services/ <services/>`_ contains code that runs various services as singletons, the exception being sequelize which is in `db/ <db/>`_
- `test/ <test/>`_ contains our tests
- `utils.js <utils.js>`_ contains some utility functions we like

Database Management
-------------------

See `sequelize tutorial <http://docs.sequelizejs.com/manual/tutorial/migrations.html>`_ for in-depth details. Setting up the structure for the first time with the `sequelize cli <https://github.com/sequelize/cli>`_ is as easy as running::

  node_modules/.bin/sequelize init

To view all possible commands, run::

  node_modules/.bin/sequelize

Models and Migrations
~~~~~~~~~~~~~~~~~~~~~

To create a model, you can use the ``model:generate`` command::

  node_modules/.bin/sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string

which creates a ``User`` model in `db/models/ <db/models/>`_ folder and a migration file with name like ``XYZ-create-user.js`` in `db/migrations/ <db/migrations/>`_ folder. You can then run this migration::

  node_modules/.bin/sequelize db:migrate

to create this new user table. Similarly, you can undo this migration with::

  node_modules/.bin/sequelize db:migrate:undo

or to undo all::

  node_modules/.bin/sequelize db:migrate:undo:all

or to a specific migration::

   node_modules/.bin/sequelize db:migrate:undo:all --to XYZ-create-user.js

Database Schema Diagram
-----------------------
`see details <documentation/SCHEMA-DIAGRAM.rst>`_
