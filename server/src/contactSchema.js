const mongoose = require('./db.js');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: false },
  date: { type: Date, required: true, default: Date.now() },
});

const Contact = mongoose.model('Contact', contactSchema, 'contact');

module.exports = { Contact };
