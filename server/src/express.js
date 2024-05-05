const express = require('express');
const app = express();
const contactRouter = require('./routes/contact');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./db');

const PORT = 5001;

app.use(express.json());
app.use(bodyParser.json());

app.use('/contact', contactRouter);

app.listen(PORT, async () => {
  console.log(`Example app listening on port ${PORT}`);
});
