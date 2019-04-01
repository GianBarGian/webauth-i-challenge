const express = require('express');
const bcrypt = require('bcryptjs');

const logHlp = require('./loginHlp');
const err = require('../../middlewares/errors/errorsObj');

const login = express.Router();

login.use(express.json());

login.post('/api/login', async (req, res, next) => {
    let user = req.body;

    try {
        const regUser = await logHlp.findByUser(user);
        regUser && bcrypt.compare(user.password, regUser.password)
            ? res.json({ message: `Welcome ${user.username}`})
            : next(err.error401);
    } catch {
        next(err.error500);
    }
})

module.exports = login;