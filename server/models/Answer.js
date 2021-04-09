const { Schema } = require('mongoose');
//const dateFormat = require('../utils/dateFormat');

const answerSchema = new Schema(
  {
    //answerId: {
    //   type: Schema.Types.ObjectId,
    //   default: () => new Types.ObjectId()
    // },
    answerBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    username: {
      type: String,
      required: false
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

