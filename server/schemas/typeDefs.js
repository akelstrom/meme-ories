//import gql tagged template function
const { gql } = require('apollo-server-express');

//create our typeDefs
const typeDefs = gql `
type Question {
    _id: ID
    questionText: String
    createdAt: String
    answers: [Answer]
}

type Answer {
    _id: ID
    answerBody: String
    createdAt: String
    votes: Int 
    username: String
}

type User {
    _id: ID
    username: String
    email: String
    score: Int
    friendCount: Int
    friends: [User]
    
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
    question(_id: ID!): Question
    questions: [Question]
    
}

type Auth {
    token: ID!
    user: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addQuestion(questionText: String): Question
    addAnswer(questionId: ID!, answerBody: String!): Question
    addFriend(friendId: ID!): User
    addVote(questionId: ID!, answerId: ID!, voteCount: Int!): Question
    addScore (username: String!): User
    
}
`

//export type defs
module.exports = typeDefs;