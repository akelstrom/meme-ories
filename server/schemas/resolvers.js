const { User, Question } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
//commment in when auth gets done in backend
// const { signToken } = require("..utils/auth");

const resolvers = {
    Query: {
        //me method
        me: async (parent, args, context) => {
            if(context.user) {
                const userData = await User.findOne({_id: context.user._id})
                .select("-__v -password")
                .populate("questions")
                .populate("answers")
                .populate("votes");
                return userData;
            }
        throw new AuthenticationError('Sorry, you must be logged in to complete this request');
        },
        //get question by username
        questions: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Question.find(params).sort({ createdAt: -1 });
          },
        //get question by id
        questions: async (parent, { _id }) => {
          return Question.findOne({ _id })
        },
        //get all users
        users: async () => {
            return User.find()
              .select("-__v -password")
              .populate("questions")
              .populate("answers");
            //   .populate("votes"); --is this something I need to do???? 
          },
        //get a user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
            .select("-__v -password")
            .populate("questions")
            .poulate("answers")
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne( { email });

            if(!user) {
                throw new AuthenticationError("Incorrect login credentials");
            }

            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw) {
                throw new AuthenticationError("Incorect password")
            }

            const token = signToken(user);
            return { token, user};
        },
        addQuestion: async(parent, args, context) => {
            // if (context.user) {
            //     const question = await Question.create({ ...args, username: context.user.username });
                
            //     return question;
            // }

            const question = await Question.create({...args})
            return question;
        },
        addAnswer: async (parent, { thoughtId, reactionBody }, context) => {
            if(context.user) {
                const updatedQuestion = await Question.findOneAndUpdate(
                    { _id: QuestionId },
                    { $push: { answers: {answerBody, username: context.user.username } } },
                    { new: true, runValidators: true }
                );

                return updatedQuestion;
            }

            throw new AuthenticationError("You must be logged in!")
        }
    }
}

module.exports = resolvers;