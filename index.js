const express = require('express');

const indexRouter = require('./routes/indexRouter');

const PORT = 4500;
const app = express();

app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log('Server working');
});