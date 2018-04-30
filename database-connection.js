var CONFIG      = require('./knexfile.js')[process.env.NODE_ENV || 'development'];
var knex        = require('knex')(CONFIG);

module.exports = knex;

knex.migrate.latest([CONFIG]);