const { Schema, model } = require('mongoose');
const answerSchema = require('./Answer');
//const dateFormat = require('../utils/dateFormat');

const questionSchema = new Schema(
  {
    questionText: {
      type: String,
      required: 'You need to leave a question!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now
      //get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: false
    },

    // each question will include an array of answers to that question
    answers: [answerSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Question = model('Question', questionSchema);

module.exports = Question;