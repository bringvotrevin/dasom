const mongoose = require('mongoose');
require('dotenv').config();

const mongoUri = process.env.MONGODB_CONTACTLIST_URI;

mongoose
  .connect(mongoUri)
  .then(() => console.log('MongoDB에 성공적으로 연결됨'))
  .catch((err) => {
    console.error('MongoDB 연결 실패:', err);
    process.exit(1);
  });

module.exports = mongoose;
