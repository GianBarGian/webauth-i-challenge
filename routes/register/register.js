const express = require('express');
const regHlp = require('./registerHlp');
const bcrypt = require('bcryptjs');

const err = require('../../middlewares/errors/errorsObj');

const register = express.Router();

register.use(express.json());

register.post('/api/register', async (req, res, next) => {
    let user = req.body;

    try {
        user.password = await bcrypt.hash(user.password, 12);
        await regHlp.register(user);
        res.json({ message: 'User registerd'});
    } catch {
        next(err.error500);
    }
})

module.exports = register;