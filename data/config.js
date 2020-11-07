const knex = require("knex")
const knexfile = require("../knexfile")

module.exports = knex(knexfile[process.env.NODE_ENV])
// module.exports = knex(knexfile.development)
//or
//module.exports = knex(knexfile.testing)
