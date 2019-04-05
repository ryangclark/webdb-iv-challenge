const knex = require('knex');

const knexConfig = knex(require('../knexfile'));

module.exports = knex(knexConfig.development);
