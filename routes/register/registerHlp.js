const knex = require('knex')
const knexConfig = require('../../knexfile').development;
const db = knex(knexConfig);

const register = user => {
    return db('auth')
        .insert(user)
}

module.exports = {
    register,
}