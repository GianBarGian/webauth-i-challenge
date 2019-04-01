const knex = require('knex')
const knexConfig = require('../../knexfile').development;
const db = knex(knexConfig);

const findByUser = user => {
    return db('auth')
        .where({username: user.username})
        .first();
}

module.exports = {
    findByUser,
}