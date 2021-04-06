const { Schema } = require('mongoose');
//const dateFormat = require('../utils/dateFormat');

const answerSchema = new Schema(
  {
    answerBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    
    username: {
      type: String,
      required: true
    },
    votes: {
      type: Number
    },
    createdAt: {
      type: Date,
      default: Date.now
      //get: timestamp => dateFormat(timestamp)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = answerSchema;