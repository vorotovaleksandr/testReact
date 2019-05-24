const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const saltWork = 10;

const musicSchema = new Schema({
  value:{
    type: String,
  },
  email: {
    type: String,
  }
});


module.exports = mongoose.model('music', musicSchema);