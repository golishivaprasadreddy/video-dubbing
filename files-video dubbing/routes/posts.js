const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    video: {
        type: String,
    },
  })


  module.exports = mongoose.model('post', postSchema);