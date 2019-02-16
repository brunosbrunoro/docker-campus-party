const express = require('express');
const app = express();
const router = express.Router();

const indexRouter = require('./index');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.listen(3000);
console.log(`Running on port 3000`);

module.exports = app;
