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

Database Schema Diagram
-----------------------
`see details <documentation/SCHEMA-DIAGRAM.rst>`_

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

Migration Procedure Example
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Based on the way we've organized it, we are enforcing migrations for changes to our database in an atomic, consistent, testable way. To make sure this happens correctly, realize that migrations are for changing the database structure only. Client code such as validation and helper functions for existing database relationships (adding ``belongsToMany`` for example) is not part of a migration. That said, migrations will be done on a best-effort. As an example, let's say we would like to create a migration that adds a many-to-many relationship between ``gloss`` and ``sign`` models. That is, we would like ``belongsToMany`` in both directions of the relationship.

#. Run::

    node_modules/.bin/sequelize model:generate --name gloss_sign --attributes glossId:integer,signId:integer

#. Remove the generated model file under ``db/models/gloss_sign.js``. We are not adding a new "model" per-se, but we are creating a new table. Technically, we should just create a migration, but it's easier to let this set up a lot of the default entries for us to make this connection work.
#. Edit the migration file that was just created, make sure the table name is ``gloss_sign`` and not ``gloss_signs`` -- as sequelize tends to pluralize automatically.
#. Continue editing by adding the following information on the foreign keys we plan to make::

      glossId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'glosses', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      signId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'signs', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

#. Next, edit by removing the ``id`` column from the table. Since we are using a compound primary key of ``(glossId, signId)`` and will automatically cascade updates, we don't need to do any extra work to ensure that this is unique.

# Lastly, in this file, we want to make sure we add a unique index so we can make sure searches/lookups are fast when we do table joins. So we just need to chain the ``createTable().then(...)`` like so::

			}).then(() => {
				return queryInterface.addIndex('', {
					unique: true,
					fields: ['Id', 'Id']
				});
			});

#. Next, edit ``db/models/sign.js`` and ``db/models/gloss.js`` to add ``belongsToMany`` relationships. For example, in ``sign.js``::

    sign.associate = models => {
      ...
      sign.belongsToMany(models.gloss, {as: "Glosses", through: "gloss_sign", foreignKey: "signId", otherKey: "glossId"});
      ...
    };

#. Finally, run a series of migrations to ensure that we can rewind and playback with no issues::

    node_modules/.bin/sequelize db:migrate
    node_modules/.bin/sequelize db:migrate:undo
    node_modules/.bin/sequelize db:migrate

and that's it. You've created a many-to-many relationship with migrations! Note that the migration's job here was just to create the tables according to the kind of relationship we were adding (``belongsToMany``) and we configured the ``belongsToMany`` call based exactly on the table we created (``gloss_sign``) and the foreign keys in that table (``signId``, ``glossId``).

Database Setup
==============

To set up the dev environment locally for MySQL, I just ran ``brew install mysql`` to install it, then::

  $ mysql.server start
  $ mysql -u root
  mysql> GRANT ALL PRIVILEGES ON signsfive_dev.* TO 'signsfive_dev'@'localhost' IDENTIFIED BY 'signsfive_dev';

to create a ``signsfive_dev`` user with the same password and full access to the database of the same name.
