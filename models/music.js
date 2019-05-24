const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const musicSchema = new Schema({
  value:{
    type: String,
  },
  email:{
    type: String
  }
});


module.exports = mongoose.model('musics', musicSchema);