const express = require('express');
const helmet = require('helmet');

const err = require('./middlewares/errors/errors');
const register = require('./routes/register/register');
const login = require('./routes/login/login');

const app = express();

app.use(helmet());
app.use(express.json());

app.get('/api', async (req, res, next) => {
    res.json({message : "working"});
})
app.use(register);
app.use(login);

app.use(err.defaultError);

app.listen(5000, () => console.log('port 5000'));