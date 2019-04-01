const express = require('express');
const regHlp = require('./registerHlp');
const bcrypt = require('bcryptjs');

const err = require('../../middlewares/errors/errorsObj');

const register = express.Router();

register.use(express.json());

register.post('/api/register', async (req, res, next) => {
    let user = req.body;
    user.password = bcrypt.hash(user.password, 12);

    try {
        await regHlp.register(user);
    } catch {
        next(err.error500);
    }
})
