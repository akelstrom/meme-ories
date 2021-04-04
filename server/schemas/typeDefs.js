//import gql tagged template function
const { gql } = require('apollo-server-express');

//create our typeDefs
const typeDefs = gql `
type Question {
    _id: ID
    questionText: String
    answers: [Answer]
}

type Answer {
    _id: ID
    answerBody: String
    createdAt: String
    vote: Int 
    username: String
}

type User {
    _id: ID
    username: String
    email: String
    questions: [Question]
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
    questions: [Question]
    answers(username: String!): Answer
}

type Auth {
    token: ID!
    user: User
  }

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addQuestion(questionText: String): Question
    addAnswer(questionId: ID!, answerBody: String!): Answer
}
`

//export type defs
module.exports = typeDefs;