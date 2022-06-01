const express = require('express');
const db = require('./db');
db.connect();
const indexRouter = require('./routes/indexRouter');

const PORT = 4500;
const app = express();

app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log('Server working');
});