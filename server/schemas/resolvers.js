const { User, Question } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { QuestionAnswerSharp } = require("@material-ui/icons");

const resolvers = {
    Query: {
        //me method
        me: async (parent, args, context) => {
            if(context.user) {
                const userData = await User.findOne({_id: context.user._id})
                .select("-__v -password")
                .populate("questions")
                .populate("answers")
                .populate("votes")
                .populate("friends");
                return userData;
            }
        throw new AuthenticationError('Sorry, you must be logged in to complete this request');
        },
        // //get question by username
        // questions: async (parent, { username }) => {
        //     const params = username ? { username } : {};
        //     return Question.find(params).sort({ createdAt: -1 });
        //   },
        //get question by id
        question: async (parent, { _id }) => {
            return Question.findOne({ _id })
        },
        //get all questions
        questions: async()=> {
            return Question.find().sort({"createdAt": -1})
        },
        //get all users
        users: async () => {
            return User.find()
            .select("-__v -password")
            .populate("friends");
            //   .populate("votes"); --is this something I need to do???? 
        },
        //get a user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
            .select("-__v -password")
            .populate("friends");
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
                // const question = await Question.create({ ...args, username: context.user.username });
                
                // return question;

                const question = await Question.create( {...args} )
                return question
            },

            // const question = await Question.create({...args})
            // return question;
       
        addAnswer: async (parent, { questionId, answerBody }, context) => {
            if(context.user) {
                const updatedQuestion = await Question.findOneAndUpdate(
                    { _id: questionId },
                    { $push: { answers: {answerBody: answerBody, username: context.user.username } } },
                    { new: true, runValidators: true }
                );

                return updatedQuestion;
            }

            throw new AuthenticationError("You must be logged in!")
        },
        addVote: async (parent, { questionId ,answerId, voteCount }, context) => {

            if(context.user) {

                const question = await Question.findOne({_id: questionId})
                let answerArray = question.answers
                console.log(answerArray)

                function UpdateArray(answerId, voteCount){    
                    for (var i = 0; i < answerArray.length; i++) {
                        if (answerArray[i]._id == answerId) {
                            answerArray[i].votes = voteCount 
                            break;
                        }
                    }
                }

                UpdateArray(answerId, voteCount);
                //console.log(answerArray)

           
                const updatedQuestion = await Question.findOneAndUpdate(
                    { _id: questionId},
                    { answers: answerArray },
                    { new: true, runValidators: true }
                );

                return updatedQuestion;
            }

            throw new AuthenticationError("You must be logged in!")
        },
    // add score for each user and put it on the usermodel (via findOne and update)
    // query all questions in database (13 memes)
    // map through questions
    // for each question filter the question.answer array 
    // for each answer in the array return a new array of answers where username =  context.user.username 
     addScore: async (parent, {username}, context) => {

        //if(context.user) {

         const questionsArray = await Question.find()

         //console.log(questionsArray)

            let userAnswersArray

            let i
            for (i=0; i<questionsArray.length; i++) {

                //console.log(questionsArray[i].answers)

                 userAnswersArray = questionsArray[i].answers.filter(answer => {
                    if(answer.username && answer.username === "Kristina") {
                        //console.log(answer)
                        return answer
                    }
                    return
                })
            }
            //console.log(userAnswersArray)
            //console.log(userAnswersArray[0].votes)
            let score = 0
            
             function sum () {
                
                let index
                for (index=0; index<userAnswersArray.length; index++) {
                      score += userAnswersArray[index].votes
                      console.log(userAnswersArray[index].votes)
                }

                
   
            }
            sum();
            //console.log(updatedScore)
            //console.log(score)

            const updatedUser = await User.findOneAndUpdate(
                { username: username},
                { score: score},
                { new: true, runValidators: true }
            );

            return updatedUser;
            
            // then find a user by username enterd in props and update score to = score 
            // const updatedUser = await User.findOneAndUpdate(
            //     { username: username},
            //     { score: score},
            //     { new: true, runValidators: true }
            // );

            // return updatedUser;



        //}

         //throw new AuthenticationError("You must be logged in!")
     },


        addFriend: async (parent, { friendId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { friends: friendId } },
                    { new: true }
                ).populate('friends');

                return updatedUser;
            }

            throw new AuthenticationError('You must be logged in to do this!')
        }
    }
}


module.exports = resolvers;